import Data from '../src/components/Data.js';

jest.mock('../src/style.css', () => ({}));
describe('Data', () => {
  let data;
  let mockTodoList;

  beforeEach(() => {
    mockTodoList = document.createElement('ul');
    mockTodoList.setAttribute('id', 'todolist');
    document.body.appendChild(mockTodoList);
    data = new Data();
  });

  afterEach(() => {
    document.body.removeChild(mockTodoList);
  });

  test('should update the task status', () => {
    // Add a task
    const task = { description: 'Task 1', completed: false, index: 1 };
    data.addTask(task);

    // Get the task index
    const taskIndex = 0;

    // Get the initial task status
    const initialStatus = data.getTask(taskIndex).completed;

    // Update the task status
    data.updateTaskStatus(taskIndex);

    // Get the updated task status
    const updatedStatus = data.getTask(taskIndex).completed;

    // Verify the task status is toggled
    expect(updatedStatus).toBe(!initialStatus);
  });
});
