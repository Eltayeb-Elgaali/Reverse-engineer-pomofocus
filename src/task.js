'use strict';

import { logger } from "../lib/logger.js";

export class Task {

tasks = [];
newtask = {
  text : undefined,
  completed: false
}


constructor(input){
  this.inputEl = input;
  this.newtask.text = input.value;

  this.inputEl.addEventListener('keyup', this.addTaskHandler);

}

render = () => {
  const liEl = document.createElement('li');
  const spanEl = document.createElement('span');
  const iEl = document.createElement('i');
  iEl.classList.add('fas');
  iEl.classList.add('fa-trash-alt');
  spanEl.appendChild(iEl)
  liEl.appendChild(spanEl);
liEl.innerHTML+= `<i class="fas fa-check-circle" style="color:rgb(223,223,223)"></i> ${this.newtask.text}`;
  
return liEl;

}




addTaskHandler = (event) => {
 if(event.keyCode !== 13) return;
this.newtask.text = event.target.value;

this.tasks.push(this.newtask);
 const liEl = this.render();
 document.querySelector('#task-root').firstElementChild.appendChild(liEl);
 event.target.value = '';
 event.target.focus();
 
   logger.push(
     {
       action: 'add task',
       task: this.newtask.text,
       event
     }
   )
 

}



}