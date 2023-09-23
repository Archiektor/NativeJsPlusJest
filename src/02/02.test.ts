import {CityType} from "./02_02";

let city: CityType

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                builtAt: 1980,
                repaired: true,
                address: {
                    number: 11,
                    street: {
                        title: 'Surganova'
                    }
                }
            },
            {
                builtAt: 1985,
                repaired: false,
                address: {
                    number: 15,
                    street: {
                        title: 'Kolasa'
                    }
                }
            },
            {
                builtAt: 1991,
                repaired: false,
                address: {
                    number: 2,
                    street: {
                        title: 'Plekhanova'
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

test.skip('test city should contains 3 houses', () => {
    expect(city['houses'].length).toBe(3);

    expect(city['houses'][0]['builtAt']).toBe(1980)
    expect(city['houses'][0]['repaired']).toBe(true)
    expect(city['houses'][0]['address']['number']).toBe(11)
    expect(city['houses'][0]['address']['street']['title']).toBe('Surganova')
})

test.skip('test city should contains hospital and fire station', () => {
    expect(city['governmentBuildings'].length).toBe(2);

    expect(city['governmentBuildings'][0]['type']).toBe('Hospital');
    expect(city['governmentBuildings'][0]['budget']).toBe(200000);
    expect(city['governmentBuildings'][0]['staffCount']).toBe(200);
    expect(city['governmentBuildings'][0]['address']['street']['title']).toBe('Kolasa');

    expect(city['governmentBuildings'][1]['type']).toBe('Fire-Station');
    expect(city['governmentBuildings'][1]['budget']).toBe(500000);
    expect(city['governmentBuildings'][1]['staffCount']).toBe(1000);
    expect(city['governmentBuildings'][1]['address']['street']['title']).toBe('Victory');
})

