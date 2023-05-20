import Destroy from '../src/components/Destroy.js';

describe('Destroy', () => {
  let destroy;
  let mockTasks;

  beforeEach(() => {
    // Arrange
    document.body.innerHTML = `
      <button id="clear"></button>
      <button name="repeat-outline"></button>
    `;

    mockTasks = {
      tasks: [],
      updateTasksIndex: jest.fn(),
      saveTasks: jest.fn(),
      loadTasks: jest.fn(),
    };

    destroy = new Destroy(mockTasks);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('should clear all completed tasks', () => {
    // Act
    destroy.clearAllCompletedTasks();

    // Assert
    expect(mockTasks.tasks).toEqual([]);
    expect(mockTasks.updateTasksIndex).toHaveBeenCalled();
    expect(mockTasks.saveTasks).toHaveBeenCalled();
    expect(mockTasks.loadTasks).toHaveBeenCalled();
  });
});
