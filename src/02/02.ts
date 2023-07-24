import {CityType, GovernmentType} from "./02_02";

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: TechnologiesType[]
}
export type AddressType = {
    streetTitle: string
    city: localCityType
}
export type localCityType = {
    title: string
    countryTitle: string
}
export type TechnologiesType = {
    id: number
    title: string
}
export const student: StudentType = {
    id: 1,
    name: "Irina",
    age: 34,
    isActive: true,
    address: {
        streetTitle: "Krasnuy put",
        city: {
            title: "Omsk",
            countryTitle: "Russia"
        }
    },
    technologies: [
        {id: 1, title: "HTML"},
        {id: 2, title: "CSS"},
        {id: 3, title: "JS"},
    ]
}

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<GovernmentType>, number: number) => {
    return buildings.filter(b => b.staffCount > number)
}



