import forEach from './forEach'

it('test forEach function', () => {
  const mockCallback = jest.fn(x => 42 + x)
  forEach([0, 1], mockCallback)

  // The mock function is called twice
  expect(mockCallback.mock.calls.length).toBe(2)

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0)

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1)

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42)

  // use matchers
  expect(mockCallback).toBeCalled()
  expect(mockCallback).toBeCalledWith(0)
  expect(mockCallback).toBeCalledWith(1)
})

it('mock return value', () => {
  const myMock = jest.fn()
  expect(myMock()).toBeUndefined()

  myMock
    .mockReturnValueOnce(10)
    .mockReturnValueOnce('x')
    .mockReturnValue(true)

  expect(myMock()).toBe(10)
  expect(myMock()).toBe('x')
  expect(myMock()).toBe(true)
  expect(myMock()).toBe(true)
})

it('mock implementations', () => {
  const myMockFn = jest
    .fn(() => 'default')
    .mockImplementationOnce(() => 'first call')
    .mockImplementationOnce(() => 'second call')

  expect(myMockFn()).toBe('first call')
  expect(myMockFn()).toBe('second call')
  expect(myMockFn()).toBe('default')
  expect(myMockFn()).toBe('default')
})

it('mock name', () => {
  const mockFn = jest.fn().mockName('mockedFunction')
  // mockFn();
  expect(mockFn).toHaveBeenCalled()

  // Output: Error: expect(mockedFunction).toHaveBeenCalled()
})