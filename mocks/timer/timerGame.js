function timerGame (callback) {
  console.log('Ready....go!')
  setTimeout(() => {
    console.log('Times up -- stop!')
    callback && callback()
  }, 2000)
}

export default timerGame
