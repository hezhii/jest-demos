import { fetchApple, fetchBanana, fetchError } from './fetch'

test('the data is apple', (done) => {
  expect.assertions(1) // ensures the callback actually get called
  const callback = data => {
    expect(data).toBe('apple')
    done()
  }

  fetchApple(callback)
})

test('the data is banana', () => {
  expect.assertions(1)
  return fetchBanana().then(data => expect(data).toBe('banana'))
})

test('the fetch fails with an error', () => {
  expect.assertions(1)
  return fetchError().catch(e => expect(e).toMatch('error'))
})

// async

test('async: the data is banana', async () => {
  expect.assertions(1)
  const data = await fetchBanana()
  expect(data).toBe('banana')
})

test('async: the fetch fails with an error', async () => {
  expect.assertions(1)
  try {
    await fetchError()
  } catch (e) {
    expect(e).toMatch('error')
  }
})

// combine async and await with `.resolves` or `.rejects`

test('combine async with `.resolves`', async () => {
  expect.assertions(1)
  await expect(fetchBanana()).resolves.toBe('banana')
})