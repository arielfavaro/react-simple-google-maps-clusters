const { faker } = require('@faker-js/faker');
const fs = require('fs');
const path = require('path');

let locations = [];

for (let i = 0; i <= 500; i++) {
    const nome = faker.company.companyName();

    const location = {
        slug: `${faker.helpers.slugify(nome)}-${faker.datatype.number()}`,
        latitude: faker.address.latitude(4, -25),
        longitude: faker.address.longitude(-70, -38),
        endereco: `${faker.address.streetAddress()} ${faker.address.state()}`,
        cep: faker.address.zipCode(),
        nome: nome,
        telefone: faker.phone.phoneNumber(),
    };

    locations.push(location);
}

fs.writeFileSync(path.resolve('./src/lib/addresses.json'), JSON.stringify(locations));