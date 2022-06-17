import './App.css';
import { GoogleMap, InfoWindow, LoadScript, Marker, MarkerClusterer } from '@react-google-maps/api';
import { locations } from './lib/locations';
import { useState } from 'react';

const markerIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEPElEQVRogdWZTWhcVRTHf+eNVavU6kpbbayKIloFPzCVzjxFYzUBEdHgQpCqUarW1qpgBBEUF4KlC6GIYhbisl3YLhqx1SbzksaULMSSiiLaFtMhLkr9SMtkMnNcTGxiM/e9c997fv2Wc/7nnv/h3rnv3fvgf47kNZCGrKBBJ0IRuB5oAy4EFDiBcARlHCGiTr8McyyPupkb0CL3IbwChEBgTGsA+1DeliH2ZqmfuoFZ428At2UxAIygvJ62Ee8GtIOlVNkGPJqmYAwf0eB5GeY3nySvBjTkahrsQrjWz5uZQxR4QAb43ppgbkBDbqDBHoSL03kzU0G4W8p8YxGbGtA1LCdgFLgskzU7xyjQLgP8lCRM3DX0FhZRYCf/nHmA5dTZoXdyVpIweds7j9dQbs3Flh/t1Hk1SRS7hLRIG8K3wLkehQ8i9FFnL+dzGIApVlKggwY9CKs8xjrJDNfICBMuQXwDIdtQnjUWqwKbiXhfmg+qheN1U2CS9ShbgbNNowrvSplN7rADXcMSAiaAJYYyVQI6ZZB9Fk8achdKP7YmfmExl8pnTLUKuv8DAWuxmQd4wWoeQMp8AbxklC/lFB2uoLsB5R5jgYNEfGDUznEJ7wHjRvW9roC7AeEm09DKh641H4dspw70GeU3ugJx2+gVNicZ3iYL7DEqr3IF4hq4wGjiqNHEQmocMSovcgXiGqgbTaQ/U8yYc2uuQFwDP5uGDlhhNLGQxbQZlU4vcQ3YloaYd6uF1I256l5qcQ0MmwZv0KPdFEza+Z6aOT0mccB+d8htLDINLqxikvUm7XwqPAdcZ9Kq24v7VaKTc/idCjE7wDymgS6J+Nzkp0gHwm5gkUF+nOMsk3GmWwWdMyD9VIEdFkM032l2a4kNcctJuylokY0e5kHZ7jIPya/T7QhfmgrNMQ70zT6kDs/+tpIZ1iI8iXXZzNEuEQdcwcR9WEtEQNGzaF6UJeKOOEHyiUx4Jzc7vihbkiS2Q32J/cDtmQ35cYCI1dK8mnRiuwoUenOx5ENAb5L5psyAlCkDOzObsvOJ9YBkvYwFZSO0PtblzEmEF61icwMyxFGEt9J58kB5U8r8aJXbZ6Cp3gKM+HoyI4xxiq1+KZ5okSsRvsJ+4LcyhXKzDPGdT5LfDAAyxA8oL/vmGdjsax6yfOAI2YVyf9r8M/iUiC7Ltnkm3jNwmipPAZXU+XNUmGZdGvOQoQEZZZKAh8D9pmigRsAjMspk2gHSzwAgg4z47Nkt2CSDxoOTy0OW5D/RkD6UJzzTPpaIx7LWzjQDp6mxAWHMrBfGKPB0HqXz+9BdYhnNh9zlCRUnCFht+XxkIZ8ZACSiAnQBJ2Jkv6J05WUecmwAQCIOoTxI652pRsDDEvF1njVzbQBAhhhAeJy/3lg3ENbJoPky999HSzyjJVRLNLSU4t7ov4CG9Gr4957m/gCUKBdIHeoOkAAAAABJRU5ErkJggg==";

const containerStyle = {
  width: '100wh',
  height: '100vh'
};

const center = { lat: -21.8329376, lng: -47.4492883 }

const options = {
  imagePath:
    '/marker-clusterer/m',
}

function createKey(location) {
  return location.slug;
}

function App() {

  const [infoActive, setInfoActive] = useState(null);

  function handleLocationCard(event, location) {
    setInfoActive(createKey(location));
  }

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      version='5.7.2'
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={6}
      >
        <MarkerClusterer options={options}>
          {(clusterer) =>
            locations.map((location) => (
              <Marker /* icon={markerIcon} */ key={createKey(location)} position={location} clusterer={clusterer} onClick={(e) => handleLocationCard(e, location)}>
                {infoActive === createKey(location) && <InfoWindow
                  // onLoad={onLoad}
                  position={{ lat: location.lat, lng: location.lng }}
                  onCloseClick={() => setInfoActive(null)}
                >
                  <div style={{ display: 'flex', flexFlow: 'column' }}>
                    <h3 style={{ fontWeight: 400, margin: '0px 0px 12px', }}><strong>Nome: </strong>{location?.nome}</h3>
                    <h4 style={{ fontWeight: 400, margin: '0px 0px 12px', }}><strong>Endereço: </strong>{location?.endereco}</h4>
                  </div>
                </InfoWindow>}
              </Marker>
            ))}
        </MarkerClusterer>
      </GoogleMap>
    </LoadScript>
  );
}

export default App;
