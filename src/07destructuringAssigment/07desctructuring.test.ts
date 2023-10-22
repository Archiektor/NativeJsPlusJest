export let a = 1;

type PropsType = {
    name: string
    age: number
    lessons: Array<{ title: string, name?: string }>
    address: {
        street: string
    }
}

let props: PropsType;

beforeEach(() => {
    props = {
        name: 'Dimych',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}, {title: '3', name: 'react'}],
        address: {
            street: 'Szkolna'
        }
    }
})

test.skip('age should be correct', () => {

    type ManType = {
        name: string
        age: number
        lessons: Array<{ title: string, name?: string }>
    }

    let man: ManType = {
        name: 'Dimych',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}]
    }

    let car = {
        name: 'Volvo',
        year: 2015,
        model: 'V60',
        details: {
            numberOfWheels: 4,
            color: 'black'
        }
    }

    let cagingIt = {
        foo: {
            bar: 'Nick Cage',
            counts: [1, 2, 3]
        }
    };

    const [{title: str1}, {title: str2}] = man.lessons

    let {foo: {counts: [ct1, ct2, ct3]}} = cagingIt;
    console.log(ct1);

    const {age, name, lessons} = man;
    //const {lessons: [obj1 , obj2]} = man;

    const {year, details: {color}} = car;
    console.log(str1)


    expect(age).toBe(32);
    expect(lessons.length).toBe(2);

    expect(color).toBe('black');
    expect(str1).toBe('1');
    expect(str2).toBe('2');
})

test('practise with fn', () => {
    const {lessons: [obj1, obj2, obj3]} = props;

    expect(obj3).toStrictEqual({title: '3', name: 'react'})
})