import addresses from './addresses';

// for old usage...
// const locations = Object.keys(addresses).map(key => {
//     return {
//         slug: key,
//         lat: parseFloat(addresses[key].latitude),
//         lng: parseFloat(addresses[key].longitude),
//         nome: addresses[key].nome,
//         endereco: addresses[key].endereco,
//         telefone: addresses[key]?.telefone,
//         cep: addresses[key]?.cep,
//     };
// });

const locations = addresses.map(address => {
    return {
        slug: address.slug,
        lat: parseFloat(address.latitude),
        lng: parseFloat(address.longitude),
        nome: address.nome,
        endereco: address.endereco,
        telefone: address.telefone,
        cep: address.cep,
    };
});

// const locations = [
//     { lat: -21.8517626, lng: -47.4904707 },
//     { lat: -21.8537267, lng: -47.4887294 },
//     { lat: -21.8573694, lng: -47.492614 },
// ];

export { locations }