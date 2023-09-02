const form = document.querySelector(".principal__convert___form")
const number = document.querySelector("[data-js='number']")
const base = document.querySelector("[data-js='base']")
const convert = document.querySelector("[data-js='convert']")
import  ConvertBase10to2  from "./ConvertBase10to2.js";
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

