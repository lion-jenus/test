const root = window.document.getElementById('root');
const dice = document.querySelector('.dice');
const input = document.querySelector('input');
const btn = document.querySelector('button');

console.log(root);
console.log(dice);
console.log(input);

btn.addEventListener('click', function(){
  const input = document.querySelector('input');
  if(input.value.trim() === "") {
    alert('값을 입력해 주세요.')
  } 
  if(input.value == 1) {
    const div = document.createElement('div');
    const circle1 = document.createElement('div');

    div.setAttribute('class', 'dice');
    circle1.setAttribute('class', 'circle1');

    div.append(circle1);
    root.appendChild(div);
  }

  else {
    console.log(input.value);
    const div = document.createElement('div');
    div.innerText = input.value;

    root.appendChild(div);
  }



  return input.value = ""
});