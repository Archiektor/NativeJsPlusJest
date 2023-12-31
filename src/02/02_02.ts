export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingType>
    citizensNumber: number
}

export type HouseType = {
    id?: number
    builtAt: number
    repaired: boolean,
    address: AddressType
}

type AddressType = {
    number?: number
    street: {
        title: string
    }
}

export type GovernmentBuildingType = {
    type: 'Hospital' | 'Fire-Station'
    budget: number
    staffCount: number
    address: AddressType
}