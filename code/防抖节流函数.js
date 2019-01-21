const debounce = (fn, wait) => {
  let timer = null
  return () => {
    clearTimeout(timer)
    timer = setTimeout(fn, wait)
  }
}

const testDebounce = () => console.log(1)

// window.addEventListener('scroll', debounce(testDebounce, 300))


const throttle = (fn, delay) => {
  let lastTime = null
  return () => {
    let nowTime = Date.now()
    if (nowTime - lastTime >= delay || !lastTime) {
      fn()
      lastTime = nowTime
    }
  }
}

function test() {
  console.log(111)
}

window.addEventListener('scroll', throttle(test, 300))