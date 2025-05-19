let modType = 0;
let type = 1;

function math(x, t) {
    if (t === 1) {
      x = x * 1000 + "m";
    } else if (t === 2) {
      x = x / 1000 + "km";
    } else if (t === 3) {
      x = x * 10 + "dm"
    } else if (t === 4) {
      x = x / 10 + "m"
    } else if (t === 5) {
      x = x * 100 + "cm"
    } else if (t === 6) {
      x = x * 10 + "dm"
    } else if (t === 7) {
      x = x * 100000 + "cm"
    }
  return x;
}

function calculate() {
  const resultText = document.querySelector("#result")
  let value = document.querySelector("input").value

resultText.innerHTML = math(value, type)
    
}

function switchType() {
  const el = document.querySelector("#type")
  modType = modType + 1;
  type = modType % 7 + 1;
  console.log(type)
  if (type === 1) {
    el.innerHTML = "km to m"
  } else if (type === 2) {
    el.innerHTML = "m to km"
  } else if (type === 3) {
    el.innerHTML = "m to dm"
  } else if (type === 4) {
    el.innerHTML = "dm to m"
  } else if (type === 5) {
    el.innerHTML = "m to cm"
  } else if (type === 6) {
    el.innerHTML = "dm to cm"
  } else if (type === 7) {
    el.innerHTML = "km to cm"
  }
}