import {makeWords, mult, sum} from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})

test.skip('should be correct sum', () => {
    //data
    // const a = 1;
    // const b = 2;
    // const c = 3;

    //action
    // let result = sum(a, b);

    //expect result
    expect(sum(a, b)).toBe(3);
    expect(sum(a, c)).toBe(4);
    expect(sum(c, b)).toBe(5);
})

test.skip('multiply must be correct', () => {
    //expect result
    expect(mult(a, b)).toBe(2);
    expect(mult(a, c)).toBe(3);
    expect(mult(c, b)).toBe(6);
})

test.skip('splitting into word', () => {
    //data
    const sentense1 = 'Hello my friends!';
    const sentense2 = 'Bye samurais!';

    //action
    // let result = sum(a, b);

    //expect result
    expect(makeWords(sentense1).length).toBe(3);
    expect(makeWords(sentense1)[0]).toBe('hello');
    expect(makeWords(sentense1)[1]).toBe('my');
    expect(makeWords(sentense1)[2]).toBe('friends');
    expect(makeWords(sentense2).length).toBe(2);
})
