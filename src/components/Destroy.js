class Destroy {
  constructor(tasks) {
    this.tasks = tasks;
    this.clearButton = document.querySelector('#clear');
    this.clearButton.addEventListener('click', this.clearAllTasks.bind(this));
  }

  clearAllTasks = () => {
    this.tasks.tasks = [];
    this.tasks.renderData();
    this.tasks.saveTasks();
  };
}

export default Destroy;
