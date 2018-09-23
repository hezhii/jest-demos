import timerGame from './timerGame'

jest.useFakeTimers()

it('waits 1 second before ending the game', () => {
  timerGame()

  expect(setTimeout.mock.calls.length).toBe(1)
  expect(setTimeout.mock.calls[0][1]).toBe(2000)
})

it('calls the callback after 1 second via runAllTimers', () => {
  const callback = jest.fn()

  timerGame(callback)

  // counter not being reset
  expect(setTimeout.mock.calls.length).toBe(2)

  // At this point in time, the callback should not have been callmed yet
  expect(callback).not.toBeCalled()

  // Fast-forward until all timers have been executed
  jest.runAllTimers()

  // Now our callback should have been called!
  expect(callback).toBeCalled()
  expect(callback.mock.calls.length).toBe(1)
})

it('calls the callback after 1 second via advanceTimersByTime', () => {
  const callback = jest.fn()

  timerGame(callback)

  expect(callback).not.toBeCalled()

  // advanced one second，the timer is two seconds
  jest.advanceTimersByTime(1000)

  // The callback function will not be called, because only advanced one second.
  expect(callback).not.toBeCalled()
})