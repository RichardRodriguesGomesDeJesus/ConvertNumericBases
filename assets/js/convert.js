const form = document.querySelector(".principal__convert___form")
const number = document.querySelector("[data-js='number']")
const base = document.querySelector("[data-js='base']")
const convert = document.querySelector("[data-js='convert']")
const main = document.querySelector('main')
form.addEventListener("submit",(e)=>{
  const DivResult = document.querySelector('.result')
  e.preventDefault()

  if(DivResult !== null){
   DivResult.remove()
  }
  if (base.value === '10' && convert.value === '2'){
    ConvertBase10to2(parseInt(number.value))
  }
})

function ConvertBase10to2(number) {
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