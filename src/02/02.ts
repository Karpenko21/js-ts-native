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

