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

  test('delete task correctly', () => {
    // Arrange
    const tasks = [
      { description: 'Task 1', completed: false },
      { description: 'Task 2', completed: true },
    ];

    data.tasks = tasks;

    // Act
    data.deleteTask();

    // Assert
    const task = document.querySelectorAll('.task');
    expect(task.length).toBe(0);
  });
});
