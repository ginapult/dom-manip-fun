'use strict';

console.log('js connected');

// SELECTING ELEMENTS
const div1 = document.getElementById('div1');
const list = document.getElementsByClassName('list');
const paragraph = document.getElementsByTagName('p');

const querySelector = document.querySelector('.list');
const querySelectorAll = document.querySelectorAll('.list, #div2');