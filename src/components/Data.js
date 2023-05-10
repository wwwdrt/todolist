// Data populating the todolist 👇
import '../style.css';

class Data {
  #tasks;

  constructor() {
    this.#tasks = [
      {
        description: 'COMPLETE',
        completed: true,
        index: 0,
      },
      {
        description: 'COMPLETE',
        completed: true,
        index: 1,
      },
      {
        description: 'COMPLETE',
        completed: true,
        index: 2,
      },
      {
        description: 'IN-PROGRESS',
        completed: false,
        index: 3,
      },
      {
        description: 'COMPLETE',
        completed: true,
        index: 4,
      },
      {
        description: 'IN-PROGRESS',
        completed: false,
        index: 5,
      },
    ];
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
                    <button type="submit" class="toggle" title="check" alt="check" tabindex="0"></button>
                    <input type="text" placeholder=${task.description}>
                    </label>
                <ion-icon name="ellipsis-vertical-outline"></ion-icon>
      `;

      todolist.appendChild(element);
    });
  };
}

export default Data;