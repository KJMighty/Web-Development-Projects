const container = document.querySelector('#container');

const para = document.createElement('p');
para.style.color = 'red';
para.textContent = "Hey I'm red!";

const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = "I'm a blue h3!";

const div = document.createElement('div');
div.style.border = 'black';
div.style.backgroundColor = 'pink';

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div!";

const divPara = document.createElement('p');
divPara.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(divPara);

container.appendChild(para);
container.appendChild(h3);
container.appendChild(div);