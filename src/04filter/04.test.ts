import {ages} from './04';


test.skip(`shouldPickOnlyOld`, () => {

    const oldAges = ages.filter(p => p > 90);

    expect(ages.length).toBe(9);
    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);

})

test.skip(`get completed tasks`, () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Butter', isDone: true},
        {id: 3, title: 'Milk', isDone: false},
        {id: 4, title: 'Vodka', isDone: true},
    ]

    const completedTasks = tasks.filter(t => t.isDone);

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].title).toBe(`Butter`);
    expect(completedTasks[1]['title']).toBe(`Vodka`);
})