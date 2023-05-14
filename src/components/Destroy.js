class Destroy {
  constructor(tasks) {
    this.tasks = tasks;
    this.clearButton = document.querySelector('#clear');
    this.repeatButton = document.querySelector('[name="repeat-outline"]');
    this.clearButton.addEventListener(
      'click',
      this.clearAllCompletedTasks.bind(this),
    );
    this.repeatButton.addEventListener('click', this.clearAllTasks.bind(this));
  }

  clearAllCompletedTasks = () => {
    this.tasks.tasks = this.tasks.tasks.filter(
      (task) => task && !task.completed,
    );
    this.tasks.updateTasksIndex();
    this.tasks.saveTasks();
    this.tasks.loadTasks();
  };

  clearAllTasks = () => {
    this.tasks.tasks = [];
    this.tasks.saveTasks();
    this.tasks.renderData();
  };
}

export default Destroy;
