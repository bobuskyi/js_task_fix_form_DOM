'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.map((item) => {
  const label = document.createElement('label');
  const parentItem = item.parentNode;

  parentItem.insertBefore(label, item);
  label.textContent = item.name;
  label.className = 'field-label';
  label.setAttribute('for', item.id);

  item.placeholder = item.name.charAt(0).toUpperCase() + item.name.slice(1);
});
