let input = document.querySelector('input');
let todos = document.querySelector('.todos');
let finishBtn = document.querySelector('.finish');
let clearBtn = document.querySelector('.clear');

input.onkeypress = function () {
  let value = input.value.trim();
  if (event.keyCode === 13 && value !== "") {
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.innerHTML = input.value;
    let img = document.createElement('img');
    img.src = 'icons/garbage.svg';
    img.width = '24px';
    li.appendChild(img);
    li.appendChild(span);
    document.querySelector('ul').appendChild(li);
    input.value = "";
  }
};

todos.onclick = function () {
  let target = event.target;

  if (target.tagName === 'LI') {
    target.classList.toggle('checked');
  }

  if (target.tagName === 'SPAN') {
    target.parentElement.classList.toggle('checked');
  }

  if (target.tagName === 'IMG') {
    target.parentElement.remove();
  }
};


finishBtn.onclick = function () {
  let lis = todos.querySelectorAll('li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].classList.add('checked');
  }
};

clearBtn.onclick = function () {
  todos.innerHTML = "";
};