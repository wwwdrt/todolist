import Data from "../src/components/Data.js"
Describe("Adding Tasks to the to do list", () => {
    test("if objects are being pushed to the array", () => {
        const data = new Data();
        const task = {
            description: "test",
            completed: false,
            index: 1
        }
        data.addTask(task);
        expect(data.tasks.length).toBe(1);
    })
    // test("if the function is generating the HTML for the new task", () => {
    //     const data = new Data();
    //     expect(data.addTask).toHaveBeenCalled();
    // })
    // test('adds 1 + 3 to equal 4', () => {
    //     const mockFunction = jest.fn().mockReturnValue(4);
    //     const result = mockFunction(1, 3);
    //     expect(result).toBe(4);
    // })
})