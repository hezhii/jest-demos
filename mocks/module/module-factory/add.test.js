import add from './add'

jest.mock('./add', () => {
  return jest.fn(() => 42)
})

it('module factory', () => {
  expect(add(1, 2)).toBe(42)
})
