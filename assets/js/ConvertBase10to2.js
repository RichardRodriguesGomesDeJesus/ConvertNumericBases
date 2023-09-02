function ConvertBase10to2(number) {
  const main = document.querySelector('main')
  const div = document.createElement('div')
  div.classList.add('result')
  main.appendChild(div)
  let bin = ''
  while (number > 0) {
    bin = (number % 2) + bin
    number = Math.floor(number / 2)
  }
   return div.innerHTML = `${bin}`
}

export default ConvertBase10to2