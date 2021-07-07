import { Knex } from 'knex';

const phones = [
  {
    name: 'Apple iPhone 7',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'black',
    price: 769,
    imageFileName: 'https://phonesdata.com/files/models/Apple-iPhone-7-188.jpg',
    screen: '4.7 inch IPS',
    processor: 'A10 Fusion',
    ram: 2
  },
  {
    name: 'Apple iPhone 12',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'black',
    price: 9999,
    imageFileName: 'https://phonesdata.com/files/models/Apple-iPhone-12-187.jpg',
    screen: '6.1", Super Retina XDR OLED',
    processor: 'Hexa-core (2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm)',
    ram: 4
  },
  {
    name: 'Apple iPhone 12 Pro',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'black',
    price: 9999,
    imageFileName: 'https://phonesdata.com/files/models/Apple-iPhone-12-Pro-285.jpg',
    screen: '6.1", Super Retina XDR OLED',
    processor: 'Hexa-core (2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm)',
    ram: 6
  },
  {
    name: 'Apple iPhone 12 Pro Max',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'black',
    price: 9999,
    imageFileName: 'https://phonesdata.com/files/models/Apple-iPhone-12-Pro-Max-959.jpg',
    screen: '6.7", Super Retina XDR OLED',
    processor: 'Hexa-core (2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm)',
    ram: 6
  },
  {
    name: 'Apple iPhone 12 Mini',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'red',
    price: 9999,
    imageFileName: 'https://phonesdata.com/files/models/Apple-iPhone-12-mini-413.jpg',
    screen: '5.4", Super Retina XDR OLED',
    processor: 'Hexa-core (2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm)',
    ram: 4
  },
  {
    name: 'Apple iPhone SE (2020)',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'red',
    price: 9999,
    imageFileName: 'https://phonesdata.com/files/models/Apple--iPhone-SE-(2020)-644.jpg',
    screen: '4.7", Retina IPS LCD',
    processor: 'Hexa-core (2x2.65 GHz Lightning + 4x1.8 GHz Thunder)',
    ram: 3
  },
  {
    name: 'Apple iPhone 11',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'black',
    price: 9999,
    imageFileName: 'https://phonesdata.com/files/models/Apple--iPhone-11-736.jpg',
    screen: '6.1", IPS LCD',
    processor: 'Hexa-core (2x2.65 GHz Lightning + 4x1.8 GHz Thunder)',
    ram: 4
  },
  {
    name: 'Apple iPhone 11 Pro',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'grey',
    price: 9999,
    imageFileName: 'https://phonesdata.com/files/models/Apple--iPhone-11-Pro-566.jpg',
    screen: '5.8", XDR OLED',
    processor: 'Hexa-core (2x2.65 GHz Lightning + 4x1.8 GHz Thunder)',
    ram: 4
  },
  {
    name: 'Apple iPhone 11 Pro Max',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'black',
    price: 9999,
    imageFileName: 'https://phonesdata.com/files/models/Apple--iPhone-11-Pro-Max-609.jpg',
    screen: '6.5", OLED',
    processor: 'Hexa-core (2x2.65 GHz Lightning + 4x1.8 GHz Thunder)',
    ram: 4
  },
  {
    name: 'Apple iPhone XS',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'black',
    price: 9999,
    imageFileName: 'https://phonesdata.com/files/models/Apple-iPhone-XS-730.jpg',
    screen: '5.8", Super AMOLED',
    processor: 'Hexa-core (2x2.5 GHz Vortex + 4x1.6 GHz Tempest)',
    ram: 4
  },
  {
    name: 'Apple iPhone XS Max',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'black',
    price: 9999,
    imageFileName: 'https://phonesdata.com/files/models/Apple-iPhone-XS-Max-958.jpg',
    screen: '6.5", Super AMOLED',
    processor: 'Hexa-core (2x2.5 GHz Vortex + 4x1.6 GHz Tempest)',
    ram: 4
  },
  {
    name: 'Apple iPhone XR',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'black',
    price: 9999,
    imageFileName: 'https://phonesdata.com/files/models/Apple-iPhone-XR-181.jpg',
    screen: '6.1", IPS LCD',
    processor: 'Hexa-core (2x2.5 GHz Vortex + 4x1.6 GHz Tempest)',
    ram: 3
  },
  {
    name: 'Apple iPhone X',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'black',
    price: 9999,
    imageFileName: 'https://phonesdata.com/files/models/Apple-iPhone-X-518.jpg',
    screen: '5.8", Super AMOLED',
    processor: 'Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)',
    ram: 3
  },
  {
    name: 'Apple iPhone 8',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'white',
    price: 9999,
    imageFileName: 'https://phonesdata.com/files/models/Apple-iPhone-8-691.jpg',
    screen: '4.7", LED-backlit IPS LCD',
    processor: 'Hexa-core (2x Monsoon + 4x Mistral)',
    ram: 2
  },
  {
    name: 'Apple iPhone 8 Plus',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'white',
    price: 9999,
    imageFileName: 'https://phonesdata.com/files/models/Apple-iPhone-8-Plus-877.jpg',
    screen: '5.5", LED-backlit IPS LCD',
    processor: 'Hexa-core (2x Monsoon + 4x Mistral)',
    ram: 3
  },
]
exports.seed = async (knex: Knex) => {
  for await (const phone of phones) {
    const updatedRows = await knex('phones')
      .where({ name: phone.name })
      .update({
        ...phone
      })

    if (!updatedRows) {
      try {
        await knex('phones').insert(phone)
      } catch (error) {
        console.log({
          table: error.table,
          error: error.detail,
        })
      }
    }
  }
}
