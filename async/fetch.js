export const fetchApple = (callback) => {
  setTimeout(() => callback('apple'), 300)
}

export const fetchBanana = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('banana'), 300)
  })
}

export const fetchError = () => {
  return new Promise((resolve, reject) => {
    reject('error')
  })
}