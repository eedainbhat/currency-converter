const inputVal = document.querySelector(".input-val");
const fromImg = document.querySelector(".from-img");
const toImg = document.querySelector(".to-img");
const toSelect = document.querySelector(".to-country");
const fromSelect = document.querySelector(".from-country");
const resPara = document.querySelector(".res-para");
const resBtn = document.querySelector(".res-btn");

for (codes in countryList) {
  const fromOption = document.createElement("option")
  fromOption.textContent = codes;
  fromOption.value = codes;
  fromSelect.append(fromOption);

  const toOption = document.createElement("option")
  toOption.textContent = codes;
  toOption.value = codes;;
  toSelect.append(toOption);
}
toImg.src = `https://flagsapi.com/AE/shiny/64.png`
fromImg.src = `https://flagsapi.com/AE/shiny/64.png`

function updateFlag(select, img) {
  let val = countryList[select.value];
  img.src = `https://flagsapi.com/${val}/shiny/64.png`;
}
fromSelect.addEventListener("change", () => {
  updateFlag(fromSelect, fromImg);
});
toSelect.addEventListener("change", () => {
  updateFlag(toSelect, toImg);
})
async function apires() {
  try {
    let amount = inputVal.value
    const from = fromSelect.value;
    const to = toSelect.value;
    const api = `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`;
    let response = await fetch(api);
    let data = await response.json();
    resPara.textContent = `${amount} ${from} = ${data.rates[to]} ${to}`
  } catch (error) {
    resPara.textContent = `Something went wrong!`
  }
}
resBtn.addEventListener('click', apires)