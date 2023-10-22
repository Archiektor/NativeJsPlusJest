import {CityType} from '../02/02_02';

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1, builtAt: 2012,
                repaired: true,
                address: {
                    number: 100,
                    street: {
                        title: 'White Street'
                    }
                }
            },
            {
                id: 2, builtAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'Happy Street'
                    }
                }
            },
            {
                id: 3, builtAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: 'Happy Street'
                    }
                }
            }
        ],
        governmentBuildings: [
            {
                type: 'Hospital',
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Kolasa'
                    }
                }
            },
            {
                type: 'Fire-Station',
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: 'Victory'
                    }
                }
            }
        ],
        citizensNumber: 100000000
    }
})

test.skip(`should be new houses`, () => {
    //action
    let newHouses = city.houses.map(h => ({...h, builtAt: 2023}))
    //expect
    expect(newHouses.length).toBe(3);
    expect(newHouses[0].builtAt).toBe(2023);
    expect(newHouses[1].builtAt).toBe(2023);
    expect(newHouses[2].builtAt).toBe(2023);
})
