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
    localStorage.clear();
  });

  test('should update task description', () => {
    // Add a task
    const initialDescription = 'Task 1';
    const updatedDescription = 'Updated Task 1';
    const task = { description: initialDescription, completed: false };
    data.addTask(task);

    // Mock the querySelector method
    document.querySelector = jest.fn().mockReturnValue({
      innerHTML: '',
      appendChild: jest.fn(),
    });

    // Update task description
    const index = 0;
    data.updateTasks(index, updatedDescription);

    // Check if the task description is updated
    const updatedTask = data.getTask(index);
    expect(updatedTask.description).toBe(updatedDescription);
  });

  // ...other test cases...
});
