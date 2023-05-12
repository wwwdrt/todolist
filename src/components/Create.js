class Create {
  constructor(tasks) {
    this.tasks = tasks;
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  setupFormEventListener = () => {
    const form = document.querySelector('#form');
    form.addEventListener('submit', this.handleFormSubmit);
  };

  handleFormSubmit(e) {
    e.preventDefault();
    const input = document.querySelector('input');
    const description = input.value.trim();
    if (description !== '') {
      const index = this.tasks.tasks.length;
      this.tasks.addTask({ description, completed: false, index });
      input.value = '';
    }
  }
}

export default Create;
