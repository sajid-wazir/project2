let  count = 0;
let countTotal = 0;
const price = 2000;

const btn = document.querySelector("#addBtn")
const countNum = document.querySelector("#cartCount")
const totalNum = document.querySelector("#cartTotal")
btn.addEventListener("click", () =>{
  count++;
  countTotal +=price;
  countNum.textContent = `item: ${count}`
  totalNum.textContent = `total item: ${countTotal}`
})
