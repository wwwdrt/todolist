import '../style.css';

class Data {
  constructor() {
    this.tasks = [];
  }

  renderData = () => {
    const todolist = document.querySelector('#todolist');
    todolist.innerHTML = '';

    this.tasks.forEach((task, index) => {
      const element = document.createElement('li');

      if (task && task.completed === true) {
        element.classList.add('completed');
      } else {
        element.classList.add('in-progress');
      }

      const input = document.createElement('input');
      input.type = 'text';
      input.value = task && task.description ? task.description : '';
      input.addEventListener('input', (e) => {
        this.updateTasks(index, e.target.value);
      });

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.classList.add('toggle');
      checkbox.tabIndex = 0;
      checkbox.checked = task && task.completed ? task.completed : false;
      checkbox.addEventListener('change', () => this.updateTaskStatus(index));

      const label = document.createElement('label');
      label.classList.add('task');
      label.textContent = task.description;

      const icon = document.createElement('ion-icon');
      icon.name = 'ellipsis-vertical-outline';

      input.addEventListener('focus', () => {
        icon.name = 'trash-outline';
        icon.style.zIndex = '100';
        input.style.backgroundColor = '#FFFEDB';
        element.style.backgroundColor = '#FFFEDB';
      });

      input.addEventListener('blur', () => {
        setTimeout(() => {
          icon.name = 'ellipsis-vertical-outline';
          input.style.backgroundColor = '';
          element.style.backgroundColor = '';
        });
      });

      const trashIconClickHandler = () => {
        if (icon.name === 'trash-outline') {
          this.deleteTask(index);
        }
      };

      icon.addEventListener('mousedown', trashIconClickHandler);

      element.appendChild(label);
      label.appendChild(checkbox);
      label.appendChild(input);
      label.appendChild(icon);

      todolist.appendChild(element);

      label.addEventListener('click', (event) => {
        if (event.target === icon) {
          trashIconClickHandler();
        }
      });
    });
  };

  addTask = (task) => {
    this.tasks.push(task);
    this.saveTasks();
    this.renderData();
  };

  deleteTask = (index) => {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks.splice(index, 1);
      this.updateTasksIndex();
      this.saveTasks();
      this.renderData();
    }
  };

  updateTasks = (index, description) => {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index].description = description;
      this.saveTasks();
    }
  };

  updateTasksIndex = () => {
    this.tasks.forEach((task, index) => {
      task.index = index + 1 - 1;
    });
  };

  updateTaskStatus = (index) => {
    const task = this.getTask(index);
    if (task) {
      task.completed = !task.completed;
      this.saveTasks();
      this.renderData();
    }
  };

  getTask = (index) => {
    if (index >= 0 && index < this.tasks.length) {
      return this.tasks[index];
    }
    return null;
  };

  saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  };

  loadTasks = () => {
    const data = localStorage.getItem('tasks');
    if (data) {
      this.tasks = JSON.parse(data);
      if (this.tasks.length > 0) {
        this.renderData();
      }
    }
  };
}

export default Data;
