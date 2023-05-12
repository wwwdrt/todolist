class Update {
  constructor(tasks, read) {
    this.tasks = tasks;
    this.read = read;
  }

  load = () => {
    const taskInputs = document.querySelectorAll('.task input[type=text]');
    taskInputs.forEach((input) => {
      input.addEventListener('input', this.handleInput);
    });
  };

  handleInput = (e) => {
    const input = e.target;
    const { index } = input.parentElement.dataset;
    const update = input.value;
    this.updateTask(index, update);
  };

  updateTask = (index, update) => {
    const task = this.tasks.getTask(index);
    if (task) {
      task.description = update;
      this.tasks.saveTasks();
      this.read.renderData();
    }
  };
}

export default Update;