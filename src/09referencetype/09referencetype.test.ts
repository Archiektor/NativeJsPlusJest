export type UserType = {
    name: string
    age: number
}

export type AdvancedUserType = {
    name: string
    age: number
    address: {
        title: string
    }
}

const increaseAge = (user: UserType) => user.age++;

let user1: UserType;
let advancedUser1: AdvancedUserType;
let advancedUser2: AdvancedUserType;
let users: UserType[];

beforeEach(() => {
    //some data
})

test.skip('reference test type', () => {
    //something to do
    user1 = {
        name: 'Dimych',
        age: 32
    }

    increaseAge(user1);

    //expect
    //expect(user1['name']).toBe('Dimych');
    //expect(user1['age']).toBe(33);
    expect(user1).toEqual({name: 'Dimych', age: 33});

    const superman = user1;
    superman['age'] = 1000;

    expect(user1).toEqual({name: 'Dimych', age: 1000});

})

test.skip('array test type', () => {
    //something to do
    users =
        [
            {
                name: 'Dimych',
                age: 32
            },
            {
                name: 'Katya',
                age: 30
            },
        ]

    const admins = users;
    users.push({name: 'BanditCoon', age: 10});

    expect(admins.length).toBe(3);
    expect(admins['2']).toEqual({name: 'BanditCoon', age: 10});
})

test.skip('complex obj test', () => {
    advancedUser1 = {
        name: 'Dimych',
        age: 31,
        address: {
            title: 'Minsk'
        }
    }

    advancedUser2 = {
        name: 'Nikko',
        age: 30,
        address: {
            title: 'Szczecin'
        }
    }

    const advancedUser3 = advancedUser1;
    advancedUser3.address.title = advancedUser2.address.title;

    expect(advancedUser3).toEqual({
        name: 'Dimych',
        age: 31,
        address: {
            title: 'Szczecin'
        }
    })


})

test('complex arr test', () => {
    advancedUser1 = {
        name: 'Dimych',
        age: 31,
        address: {
            title: 'Minsk'
        }
    }

    advancedUser2 = {
        name: 'Nikko',
        age: 30,
        address: {
            title: 'Szczecin'
        }
    }

    const users = [advancedUser1, advancedUser2, {
        name: 'Sofa',
        age: 1,
        address: {
            title: 'Berlin'
        }
    }]

    const admins = [users[0], users[1]];
    admins[0].name = 'Petr';

    // expect(admins.length).toBe(2);
    // expect(admins[0].name).toBe('Petr');

    expect(users[0]).toEqual({
        name: 'Petr',
        age: 31,
        address: {
            title: 'Minsk'
        }
    })

})