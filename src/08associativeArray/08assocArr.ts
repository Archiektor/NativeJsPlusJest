export let a = 1;

type UsersType = {
    [key: string]: { id: number, name: string }
}

export const users: UsersType = {
    '0': {id: 100, name: 'Nikki'},
    '1': {id: 101, name: 'Anya'},
    '2': {id: 102, name: 'Sofia'},
    '3': {id: 103, name: 'Vasya'},
}

const user = {id: 100500, name: 'Vera'};
users[user.id] = user;
delete users[user.id];
users[user.id]['name'] = 'Vitya';

// for (const user in users) {
//     console.log(user);
// }



