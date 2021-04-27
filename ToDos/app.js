
const todos = [
    { name: 'task1', key: 1 },
    { name: 'task2', key: 2 },
    { name: 'task3', key: 3 },
    { name: 'task4', key: 4 },
    { name: 'task5', key: 5 },
    { name: 'task6', key: 6 },
    { name: 'task7', key: 7 }
   
  ];


  // делаем запрос и вытаскиваем нужный тег
const parent = document.querySelector("body > div > div:nth-child(4) > ul");
  // ищем тэг по selector запросу
const span = document.querySelector("span");
  
  // меняем его HTML, todos.length = кол во элементов в массиве
span.innerHTML = `${todos.length} items left`;

const h1 = document.querySelector("h1");
h1.innerHTML = `ToDo List (${todos.length} items)`
  // удаляем весь html в теге
  parent.innerHTML = '';
  
//   // цикл - todos
  for(let i=0; i < todos.length; i++) {
    // помещаем нужный элемент в переменную
    let todo = todos[i];

    // заполняем html тега
    parent.innerHTML += `<li data-id="${todo.id}"> 
                              ${todo.name} 
                         </li>`;
  }


  const renderList = function () {

    parent.innerHTML = '';
  for(let i=0; i < todos.length; i++) {
 
    let todo = todos[i];
    let li = document.createElement("li");
    let div = document.createElement("div");
    let input = document.createElement("input");
    let span = document.createElement("span");
    let button = document.createElement("button");

        div.classList.add('todo');

        input.setAttribute('type', 'checkbox');
    input.classList.add('toggle');

        span.innerHTML = `<div>${todo.name}</div>`;

        button.classList.add('destroy');

        div.append(input, span, button);

        li.appendChild(div);

        li.onclick = function () {
            li.classList.add('completed');
    }

        li.ondblclick = function () {
            li.classList.remove('completed');
    }

        li.onmouseover = function () {
            li.style.border = '1px solid green';
    }

        li.onmouseout = function () {
            li.style.border = '';
    }

        parent.appendChild(li);
  }
}

renderList();

// const form = document.getElementById('insert__form');

// form.onsubmit = function (event) {
//     event.preventDefault();

//     let input = event.currentTarget.firstElementChild;

//     todos.push(
//     { name: input.value, key: todos.length + 1 , status: 'active' }
//   );

//     input.value = '';

//     renderList();
// }

//Домашняя работа 8 

const jsBar = document.querySelector("#js-bar");

jsBar.innerHTML = ''; // удаляем детей id #js-bar

let div1 = document.createElement('div'); //создаем новый элемент
jsBar.appendChild(div1); // присваивоем новому элементу родителя
div1.classList.add('col-1-4'); // присваиваем новому элементу класс
let span2 = document.createElement('span');
div1.appendChild(span2);
span2.classList.add('total');
span2.setAttribute('id', 'js-total'); // присваиваем аттрибут
span2.innerHTML = `${todos.length} items left`; //присваиваем текст, который будет выводится

let div2 = document.createElement('div');
jsBar.appendChild(div2);
div2.classList.add('col-1-2');
let ul = document.createElement('ul');
div2.appendChild(ul);
ul.classList.add('filter');
ul.setAttribute('id', 'js-filters');
let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
let a1 = document.createElement('a');
let a2 = document.createElement('a');
let a3 = document.createElement('a');
li1.appendChild(a1);
a1.href = '#/all';
a1.classList.add('button', 'selected');
a1.innerText = 'All';

li2.appendChild(a2);
a2.href = '#/active'; // присваеваем ссылку для а2
a2.classList.add('button');
a2.innerText = 'Active';

li3.appendChild(a3);
a3.href = '#/completed';
a3.classList.add('button');
a3.innerText = 'Completed';


let div3 = document.createElement('div');
jsBar.appendChild(div3);
div3.classList.add('col-1-4');
let button2 = document.createElement('button');
div3.appendChild(button2);
button2.classList.add('button', 'button--clear');
button2.setAttribute('id', 'js-clear-completed');
button2.innerText = 'Clear Completed';

// Добавляем событие OnClick
li1.onclick = function(){
  alert(a1.innerText);
}
li2.onclick = function(){
  alert(a2.innerText)
}    
li3.onclick = function(){
  alert(a3.innerText)
}
button2.onclick = function(){
  alert(button2.innerText)
}

