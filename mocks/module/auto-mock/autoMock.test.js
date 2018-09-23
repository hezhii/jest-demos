import autoMock from './autoMock'

jest.mock('./autoMock')

test('Will be auto mocked', () => {
  autoMock.print('test auto mock')

  expect(autoMock.print.mock.calls.length).toBe(1)
})