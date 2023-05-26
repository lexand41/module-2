'use strict';

const overlay = document.querySelector('.overlay');
overlay.classList.remove('active');

const goods = [
  {
    "id": 1,
    "title": "Смартфон Xiaomi 11T 8/128GB",
    "price": 27000,
    "description": "Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.",
    "category": "mobile-phone",
    "discont": false,
    "count": 3,
    "units": "шт",
    "images": {
      "small": "img/smrtxiaomi11t-m.jpg",
      "big": "img/smrtxiaomi11t-b.jpg"
    }
  },
  {
    "id": 2,
    "title": "Радиоуправляемый автомобиль Cheetan",
    "price": 4000,
    "description": "Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет",
    "category": "toys",
    "discont": 5,
    "count": 1,
    "units": "шт",
    "images": {
      "small": "img/cheetancar-m.jpg",
      "big": "img/cheetancar-b.jpg"
    }
  },
  {
    "id": 3,
    "title": "ТВ приставка MECOOL KI",
    "price": 12400,
    "description": "Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D",
    "category": "tv-box",
    "discont": 15,
    "count": 4,
    "units": "шт",
    "images": {
      "small": "img/tvboxmecool-m.jpg",
      "big": "img/tvboxmecool-b.jpg"
    }
  },
  {
    "id": 4,
    "title": "Витая пара PROConnect 01-0043-3-25",
    "price": 22,
    "description": "Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.",
    "category": "cables",
    "discont": false,
    "count": 420,
    "units": "v",
    "images": {
      "small": "img/lan_proconnect43-3-25.jpg",
      "big": "img/lan_proconnect43-3-25-b.jpg"
    }
  }
];

const createRow = (arrow) => {
  let row = document.createElement('tr');

  let row_num = document.createElement('td');
  row_num.classList.add('table__cell');
  row_num.innerHTML = number;
  row.appendChild(row_num);

  let span_id = document.createElement('span');
  span_id.classList.add('table__cell-id');
  span_id.textContent = `id: ${arrow.id}`;

  let row_id = document.createElement('td');
  row_id.innerHTML = arrow.title;
  row_id.classList.add('table__cell', 'table__cell_left', 'table__cell_name')
  row_id.setAttribute('data-id', arrow.id);
  row_id.insertAdjacentElement('afterbegin', span_id);
  row.appendChild(row_id);

  let row_category = document.createElement('td');
  row_category.classList.add('table__cell', 'table__cell-left');
  row_category.innerHTML = arrow.category;
  row.appendChild(row_category);

  let row_units = document.createElement('td');
  row_units.classList.add('table__cell');
  row_units.innerHTML = arrow.units;
  row.appendChild(row_units);

  let row_count = document.createElement('td');
  row_count.classList.add('table__cell');
  row_count.innerHTML = arrow.count;
  row.appendChild(row_count);

  let row_price = document.createElement('td');
  row_price.classList.add('table__cell');
  row_price.innerHTML = `$${arrow.price}`;
  row.appendChild(row_price);

  let row_total = document.createElement('td');
  row_total.classList.add('table__cell');
  row_total.innerHTML = `$${arrow.price * arrow.count}`;
  row.appendChild(row_total);

  let button_pic = document.createElement('button');
  button_pic.classList.add('table__btn', 'table__btn_pic');

  let button_edit = document.createElement('button');
  button_edit.classList.add('table__btn', 'table__btn_edit');

  let button_del = document.createElement('button');
  button_del.classList.add('table__btn', 'table__btn_del');

  let row_button = document.createElement('td');
  row_button.classList.add('table__cell', 'table__cell_btn-wrapper');
  row_button.appendChild(button_pic);
  row_button.appendChild(button_edit);
  row_button.appendChild(button_del);
  row.appendChild(row_button);

  table.appendChild(row);

  console.log(row);
};

const table = document.querySelector('.goods__table');

let number = 2;

const renderGoods = () => {
  for (let arrow of goods) {
    number += 1;
    createRow(arrow);
  };
};

renderGoods();