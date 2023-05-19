import Data from '../src/components/Data.js';

jest.mock('../src/style.css', () => ({}));

describe('Data', () => {
  let data;

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="todolist"></div>
    `;
    data = new Data();
  });

  test('renders tasks correctly', () => {
    // Arrange
    const tasks = [
      { description: 'Task 1', completed: false },
      { description: 'Task 2', completed: true },
    ];

    data.tasks = tasks;

    // Act
    data.renderData();

    // Assert
    const task = document.querySelectorAll('.task');
    expect(task.length).toBe(2);
    expect(task[0].textContent).toContain('Task 1');
    expect(task[1].textContent).toContain('Task 2');
  });
});
