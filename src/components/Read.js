class Read {
  constructor(tasks) {
    this.tasks = tasks;
  }

  setupEventListeners = () => {
    const todolist = document.querySelector('#todolist');
    todolist.addEventListener('input', this.handleInput);
    todolist.addEventListener('focusout', this.handleFocusOut);
  };

  handleInput = (e) => {
    if (e.target.matches('.task input[type=text]')) {
      const input = e.target;
      const { index } = input.closest('li').dataset;
      const description = input.value;
      this.tasks.updateTasks(index, description);
    }
  };

  handleFocusOut = (e) => {
    if (e.target.matches('.task input[type=text]')) {
      const input = e.target;
      input.blur();
    }
  };
}

export default Read;
