export const value02_02 = '02_02'

export type TechologyType = {
    id: number
    title: string
}

type LocalCityType = {
    title: string
    countryTitle: string
}

type AddressType = {
    streetTitle: string
    city: LocalCityType
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechologyType>
}

export const student: StudentType = {
    id: 1,
    name: 'Nikki',
    age: 31,
    isActive: true,
    address: {
        streetTitle: 'Szkolna',
        city: {
            title: 'Kobylanka',
            countryTitle: 'Poland'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'React '
        },
    ]
}