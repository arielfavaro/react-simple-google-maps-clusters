import addresses from './addresses';

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

export { locations }