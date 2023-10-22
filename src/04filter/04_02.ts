import {CityType} from '../02/02_02';

export const demolishHouses = (city: CityType) => {
    city.houses = city.houses.filter(h => h['address']['street']['title'] !== 'Happy Street')
}