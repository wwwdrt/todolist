/* eslint-disable */

// Data populating the todolist 👇
import '../style.css';

class Data {
  #tasks;

  constructor() {
    this.#tasks = [];
    this.renderData();
  }

  renderData = () => {
    const todolist = document.querySelector('#todolist');
    todolist.innerHTML = '';

    this.#tasks.forEach((task) => {
      const element = document.createElement('li');

      if (task.completed === true) {
        element.classList.add('completed');
      } else {
        element.classList.add('in-progress');
      }

      element.innerHTML = `
                    <label class="task">
                    <button type="submit" class="toggle" tabindex="0"></button>
                    <input type="text" placeholder=${task.description}>
                    </label>
                <ion-icon name="ellipsis-vertical-outline"></ion-icon>
      `;

      todolist.appendChild(element);
    });
  };
}

export default Data;