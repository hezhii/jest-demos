let count = 0

beforeAll(() => {
  console.log('beforeAll')
})

afterAll(() => {
  console.log('afterAll')
})

beforeEach(() => {
  count++
  console.log('beforeEach')
})

afterEach(() => {
  console.log('afterEach')
})

test('count is 1', () => {
  expect(count).toBe(1)
  console.log('test 1')
})

test('count is 2', () => {
  expect(count).toBe(2)
  console.log('test 2')
})