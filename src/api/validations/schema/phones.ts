export const create = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    },
    manufacturer: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    color: {
      type: 'string'
    },
    price: {
      type: 'number'
    },
    imageFileName: {
      type: 'string'
    },
    screen: {
      type: 'string'
    },
    processor: {
      type: 'string'
    },
    ram: {
      type: 'number'
    }
  },
  required: [
    'name',
    'manufacturer',
    'description',
    'color',
    'price',
    'imageFileName',
    'screen',
    'processor',
    'ram',
  ]
}

export const deletePhone = {
  type: 'object',
  properties: {
    phoneId: { type: 'string' }
  },
  required: ['phoneId']
}

export const patch = {
  type: 'object',
  properties: {
    id: {
      type: 'number'
    },
    name: {
      type: 'string'
    },
    manufacturer: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    color: {
      type: 'string'
    },
    price: {
      type: 'number'
    },
    imageFileName: {
      type: 'string'
    },
    screen: {
      type: 'string'
    },
    processor: {
      type: 'string'
    },
    ram: {
      type: 'number'
    }
  },
  required: [
    'name',
    'manufacturer',
    'description',
    'color',
    'price',
    'imageFileName',
    'screen',
    'processor',
    'ram',
  ]
}