// toBe
test('two plus two is four', () => {
  expect(2 + 2).toBe(4)
})

// toEqual
test('object assignment', () => {
  const data = {one: 1}
  data['two'] = 2
  expect(data).toEqual({one: 1, two: 2})
})

// .not
test('Adding 1 + 1 does not equal 3', () => {
  expect(1 + 1).not.toBe(3)
})

// toBeNull、toBeDefined、toBeUndefined、toBeTruthy、toBeFalsy
test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

// toBeGreaterThan、toBeGreaterThanOrEqual、toBeLessThan、toBeLessThanOrEqual
test('two plus two', () => {
  const value = 2 + 2
  expect(value).toBeGreaterThan(3)
  expect(value).toBeGreaterThanOrEqual(3.5)
  expect(value).toBeLessThan(5)
  expect(value).toBeLessThanOrEqual(4.5)

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4)
  expect(value).toEqual(4)
})

// toBeCloseTo
test('adding floating point numbers', () => {
  const value = 0.1 + 0.2
  //expect(value).toBe(0.3);           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3) // This works.
})

// toMatch
test('there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/)
})

// toContain
test('the shopping list has beer on it', () => {
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
  ]
  expect(shoppingList).toContain('beer')
})

// .toHaveProperty(keyPath, value)
test('this house has my desired features', () => {
  // Object containing house features to be tested
  const houseForSale = {
    bath: true,
    bedrooms: 4,
    kitchen: {
      amenities: ['oven', 'stove', 'washer'],
      area: 20,
      wallColor: 'white',
      'nice.oven': true,
    },
    'ceiling.height': 2,
  }

  // Simple Referencing
  expect(houseForSale).toHaveProperty('bath')
  expect(houseForSale).toHaveProperty('bedrooms', 4)

  expect(houseForSale).not.toHaveProperty('pool')

  // Deep referencing using dot notation
  expect(houseForSale).toHaveProperty('kitchen.area', 20)
  expect(houseForSale).toHaveProperty('kitchen.amenities', [
    'oven',
    'stove',
    'washer',
  ])

  expect(houseForSale).not.toHaveProperty('kitchen.open')

  // Deep referencing using an array containing the keyPath
  expect(houseForSale).toHaveProperty(['kitchen', 'area'], 20)
  expect(houseForSale).toHaveProperty(
    ['kitchen', 'amenities'],
    ['oven', 'stove', 'washer'],
  )
  expect(houseForSale).toHaveProperty(['kitchen', 'amenities', 0], 'oven')
  expect(houseForSale).toHaveProperty(['kitchen', 'nice.oven'])
  expect(houseForSale).not.toHaveProperty(['kitchen', 'open'])

  // Referencing keys with dot in the key itself
  expect(houseForSale).toHaveProperty(['ceiling.height'], 2)
})

// toThrow
test('compiling android goes as expected', () => {
  function compileAndroidCode () {
    throw new Error('you are using the wrong JDK')
  }

  expect(compileAndroidCode).toThrow()
  expect(compileAndroidCode).toThrow(Error)

  // You can also use the exact error message or a regexp
  expect(compileAndroidCode).toThrow('you are using the wrong JDK')
  expect(compileAndroidCode).toThrow(/JDK/)
})

// toBeInstanceOf
test('new A() is an instance of A', () => {
  class A {}

  expect(new A()).toBeInstanceOf(A)
  expect(() => {}).toBeInstanceOf(Function)
})

// .resolves
test('resolves to lemon', () => {
  // make sure to add a return statement
  return expect(Promise.resolve('lemon')).resolves.toBe('lemon')
})

// .rejects
test('rejects to octopus', () => {
  // make sure to add a return statement
  return expect(Promise.reject(new Error('octopus'))).rejects.toThrow(
    'octopus',
  )
})