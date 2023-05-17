import Data from '../src/components/Data.js';

describe('Adding Tasks to the to-do list', () => {
  test('if objects are being pushed to the array', () => {
    const data = new Data();
    const task = {
      description: 'test',
      completed: false,
      index: 1,
    };

    const renderDataSpy = jest.spyOn(data, 'renderData');

    data.addTask(task);

    expect(data.tasks.length).toBe(1);
    expect(renderDataSpy).toHaveBeenCalled();

    renderDataSpy.mockRestore();
  });
});
