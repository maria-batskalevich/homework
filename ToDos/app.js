
// const todos = [
//     { name: 'task1', key: 1 },
//     { name: 'task2', key: 2 },
//     { name: 'task3', key: 3 },
//     { name: 'task4', key: 4 },
//     { name: 'task5', key: 5 },
//     { name: 'task6', key: 6 },
//     { name: 'task7', key: 7 }
   
//   ];


//   // делаем запрос и вытаскиваем нужный тег
// const parent = document.querySelector("body > div > div:nth-child(4) > ul");
//   // ищем тэг по selector запросу
// const span = document.querySelector("span");
  
//   // меняем его HTML, todos.length = кол во элементов в массиве
// span.innerHTML = `${todos.length} items left`;

// const h1 = document.querySelector("h1");
// h1.innerHTML = `ToDo List (${todos.length} items)`
//   // удаляем весь html в теге
//   parent.innerHTML = '';
  
// //   // цикл - todos
//   for(let i=0; i < todos.length; i++) {
//     // помещаем нужный элемент в переменную
//     let todo = todos[i];

//     // заполняем html тега
//     parent.innerHTML += `<li data-id="${todo.id}"> 
//                               ${todo.name} 
//                          </li>`;
//   }


//   const renderList = function () {

//     parent.innerHTML = '';
//   for(let i=0; i < todos.length; i++) {
 
//     let todo = todos[i];
//     let li = document.createElement("li");
//     let div = document.createElement("div");
//     let input = document.createElement("input");
//     let span = document.createElement("span");
//     let button = document.createElement("button");

//         div.classList.add('todo');

//         input.setAttribute('type', 'checkbox');
//     input.classList.add('toggle');

//         span.innerHTML = `<div>${todo.name}</div>`;

//         button.classList.add('destroy');

//         div.append(input, span, button);

//         li.appendChild(div);

//         li.onclick = function () {
//             li.classList.add('completed');
//     }

//         li.ondblclick = function () {
//             li.classList.remove('completed');
//     }

//         li.onmouseover = function () {
//             li.style.border = '1px solid green';
//     }

//         li.onmouseout = function () {
//             li.style.border = '';
//     }

//         parent.appendChild(li);
//   }
// }

// renderList();

// // const form = document.getElementById('insert__form');

// // form.onsubmit = function (event) {
// //     event.preventDefault();

// //     let input = event.currentTarget.firstElementChild;

// //     todos.push(
// //     { name: input.value, key: todos.length + 1 , status: 'active' }
// //   );

// //     input.value = '';

// //     renderList();
// // }

// //Домашняя работа 8 

// const jsBar = document.querySelector("#js-bar");

// jsBar.innerHTML = ''; // удаляем детей id #js-bar

// let div1 = document.createElement('div'); //создаем новый элемент
// jsBar.appendChild(div1); // присваивоем новому элементу родителя
// div1.classList.add('col-1-4'); // присваиваем новому элементу класс
// let span2 = document.createElement('span');
// div1.appendChild(span2);
// span2.classList.add('total');
// span2.setAttribute('id', 'js-total'); // присваиваем аттрибут
// span2.innerHTML = `${todos.length} items left`; //присваиваем текст, который будет выводится

// let div2 = document.createElement('div');
// jsBar.appendChild(div2);
// div2.classList.add('col-1-2');
// let ul = document.createElement('ul');
// div2.appendChild(ul);
// ul.classList.add('filter');
// ul.setAttribute('id', 'js-filters');
// let li1 = document.createElement('li');
// let li2 = document.createElement('li');
// let li3 = document.createElement('li');

// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);
// let a1 = document.createElement('a');
// let a2 = document.createElement('a');
// let a3 = document.createElement('a');
// li1.appendChild(a1);
// a1.href = '#/all';
// a1.classList.add('button', 'selected');
// a1.innerText = 'All';

// li2.appendChild(a2);
// a2.href = '#/active'; // присваеваем ссылку для а2
// a2.classList.add('button');
// a2.innerText = 'Active';

// li3.appendChild(a3);
// a3.href = '#/completed';
// a3.classList.add('button');
// a3.innerText = 'Completed';


// let div3 = document.createElement('div');
// jsBar.appendChild(div3);
// div3.classList.add('col-1-4');
// let button2 = document.createElement('button');
// div3.appendChild(button2);
// button2.classList.add('button', 'button--clear');
// button2.setAttribute('id', 'js-clear-completed');
// button2.innerText = 'Clear Completed';

// // Добавляем событие OnClick
// li1.onclick = function(){
//   alert(a1.innerText);
// }
// li2.onclick = function(){
//   alert(a2.innerText)
// }    
// li3.onclick = function(){
//   alert(a3.innerText)
// }
// button2.onclick = function(){
//   alert(button2.innerText)
// }


  
// массив задач
const todos = [
  { name: 'task1', key: 1, status: 'overdue' },
  { name: 'task2', key: 2, status: 'overdue' },
  { name: 'task3', key: 3, status: 'done' },
  { name: 'task4', key: 4, status: 'active' },
  { name: 'task5', key: 5, status: 'active' },
  { name: 'task6', key: 6, status: 'active' },
  { name: 'task7', key: 7, status: 'active' }
];

window.todos = todos;

let filter = false;

// делаем запрос и вытаскиваем нужный тег
let parent = document.querySelector("body > div > div:nth-child(4) > ul");

// функция рендер списка дел
const renderList = function () {

  // удаляем весь html в теге
  parent.innerHTML = '';

  let todosList = [...todos];

  // проверяем установлено ли значение фильтра
  if(filter && filter !== 'all') {
    // фильтруем массив по статусу возращаем только нужный список
    todosList = todos.filter((element) => {

      // проверям совпадает ли статусы
      return element.status === filter;
    });
  }
  /*
    let todosList2 = [];
    for(let i=0; i < todos.length; i++) {
      let element = todos.length;
      if(element.status === filter) {
        todosList2.push(element)
      }
    }*/
  for(let i=0; i < todosList.length; i++) {

    let todo = todosList[i]; // помещаем задачу в переменную { name: 'task1', key: 1, status: 'overdue' }

    // создаем таги
    let li = document.createElement("li");
    let div = document.createElement("div");
    let input = document.createElement("input");
    let span = document.createElement("span");
    let button = document.createElement("button");

    // создаем таг li
    div.classList.add('todo');

    // добаляем атрибут type
    input.setAttribute('type', 'checkbox');
    input.classList.add('toggle');

    // добаляем текст
    span.innerHTML = `<div>${todo.name}</div>`;

    // добаляем класс
    button.classList.add('destroy');

    // всталяем сразу все элементы по очереди
    div.append(input, span, button);

    // всталяем div
    li.appendChild(div);

    // добавляем событие по клику
    li.onclick = function () {
      // добавляем класс completed
      li.classList.add('completed');
    }

    // добавляем событие по двойному клику
    li.ondblclick = function () {
      // удаляем класс completed
      li.classList.remove('completed');
    }

    // добавляем событие при наведение курсора
    li.onmouseover = function () {
      // добавляем рамку
      li.style.border = '1px solid green';
    }

    // добавляем событие когда курсор уходит с элемента
    li.onmouseout = function () {
      // удаляем рамку
      li.style.border = '';
    }

    // вставляем таг
    parent.appendChild(li);
  }
}

// рисуем список задач
renderList();
// рисуем бар
renderBar();


// ищем форму по аттр id
const form = document.getElementById('insert__form');

// вещаем перехват события submit
form.onsubmit = function (event) {

  // сбросить действие события по умолчанию
  event.preventDefault();

  // ищем наш input, firstElementChild - первый ребенок формы
  let input = event.currentTarget.firstElementChild;

  // добавляем новое значение
  todos.push(
    { name: input.value, key: todos.length + 1 , status: 'active' }
  );

  // делаем инпут пустым
  input.value = '';

  // рисуем список задач
  renderList();
  renderBar();
}


function renderBar()
{

// находим нужный блок
  const blockIdList = document.getElementById('js-bar');

//удалить html
  blockIdList.innerHTML = '';

// рисуем первый блок
  {
    // создаем div
    let div = document.createElement('div');
// добавляем класс
    div.classList.add('col-1-4');
// создаем span
    let span = document.createElement('span');
// добавляем класс
    span.classList.add('total');
// добавляем аттрибут id
    span.setAttribute('id', 'js-total');
// добавляем текст
    span.innerText = `${todos.length} items left`;
// добавляем созданный тег span к тегу div
    div.appendChild(span);

    // добавляем созданный тег div к js-bar
    blockIdList.appendChild(div);
  }

// рисуем второй блок
  {
    // создаем div
    let div1 = document.createElement('div');
    // добавляем класс
    div1.classList.add('col-1-2');

    // создаем ul
    let ul = document.createElement('ul');
    ul.classList.add('filter');
    ul.setAttribute('id','js-filters');

    // добавляем html
    ul.innerHTML = '<li><a href="#/all" data-status="all" class="button selected"><span>All</span></a></li>' +
      '  <li><a href="#/active" data-status="active" class="button"><span>Active</span></a></li>' +
      '  <li><a href="#/completed" data-status="done" class="button"><span>Completed</span></a></li>';


    // добавляем созданный тег ul к тегу div
    div1.appendChild(ul);

    // добавляем созданный тег div к js-bar
    blockIdList.appendChild(div1);
  }

  { // рисуем 3 блок

    // создаем div
    let div2 = document.createElement('div');
    // добавляем класс
    div2.classList.add('col-1-4');


    let button = document.createElement('button');
    button.setAttribute('class','button button--clear');
    button.setAttribute('id','js-clear-completed');
    button.innerText = 'Clear Completed';

    button.classList.add('button');
    button.classList.add('button--clear');

    // добавляем созданный тег button к тегу div
    div2.appendChild(button);
    // добавляем созданный тег div к js-bar
    blockIdList.appendChild(div2);
  }

  // ищем все ссылки
  let links = document.querySelectorAll('#js-filters li');

  // делаем цикл
  links.forEach(function (element) {

    // добавляем событыие клик
    element.addEventListener('click', function(event) {
      // ищет все a с классом selected
      let links = document.querySelectorAll('a.selected');

      // перебираем все найденные элементы
      links.forEach(function (element) {
        // удаляем класс selected у найденных элементах
        element.classList.remove('selected');
      });

      // ложим currentTarget в переменную
      let { currentTarget } = event;


      // ищем первего ребенка добавляем активный класс
      currentTarget.children[0].classList.add('selected');
      filter = currentTarget.children[0].dataset.status;

      //
      renderList();
    });

  });

  
  let clearCompleted = document.querySelector('#js-clear-completed');
  clearCompleted.addEventListener('click', function (even){

      let {currentTarget} = even;

     filter = false;

      renderList();

});
}
