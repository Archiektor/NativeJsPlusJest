export let houses = [
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
]

let newHouses = houses.map(h => ({...h, builtAt: 2023}))

console.log(newHouses);