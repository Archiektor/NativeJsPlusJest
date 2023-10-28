export let b = 1;

type UsersType = {
    [key: string]: { id: number, name: string }
}

let users: UsersType;

beforeEach(() => {
    users = {
        '100': {id: 100, name: 'Nikki'},
        '101': {id: 101, name: 'Anya'},
        '102': {id: 102, name: 'Sofia'},
        '103': {id: 103, name: 'Vasya'},
    }
})

test('should Be Vitya', () => {
    const user = {id: 100500, name: 'Vera'};
    users[user.id] = user;
    //delete users[user.id];
    users[user.id]['name'] = 'Vitya';

    expect(users[user.id]['name']).toBe('Vitya');
})

test('should uptade user name', () => {
    users['102']['name'] = 'Sofa';

    expect(users['102']['name']).toBe('Sofa');
    expect(users['102']).toStrictEqual({id: 102, name: 'Sofa'});
})