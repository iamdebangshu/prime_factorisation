let btn = document.getElementById('btn1');
let box = document.getElementById('box');
let result = document.getElementById('result');

function myFunction () {
  let n = parseInt(box.value);
  let d = 2;
  let factors = [];

  while (n !== 1) {
    if (n%d === 0) {
      factors.push(d);
      n = n/d;
    } else {
      d = d+1;
    }
  }
  console.log(factors);
  for (let i of factors) {
    let e = document.createElement('li');
    e.textContent = i+", ";
    result.append(e);
  }
}

btn.addEventListener('click', myFunction);
