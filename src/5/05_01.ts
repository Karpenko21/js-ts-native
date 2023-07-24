import {GovernmentType, HousesType} from "../02/02_02";

export type StudentType = {
    name: string,
    age: number
}

const people: StudentType[] = [
    {name: "Andrew Ivanov", age: 18},
    {name: "Alexander Petrov", age: 24},
    {name: "Irina Karpenko", age: 34}
]

const dimychTransformator = (man: StudentType) =>
    ({
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: man.name.split("")[0],
        lastName: man.name.split(""[1])
    })

const dev = [
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Andrew",
        lastName: "Ivanov"
    },
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Alexander",
        lastName: "Petrov"
    },
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Irina",
        lastName: "Karpenko"
    }
]

const dev1 = people.map(man => ({
    stack: ["css", "html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" "[1])
}))

const messages = people.map(s => `Hello, ${s.name.split(" ")[0]}.
 Welcome to IT-INCUBATOR`)

export const createGreetingMessages = (people: StudentType[]) =>  {
    return people.map(s => `Hello, ${s.name.split(" ")[0]}. Welcome to IT-INCUBATOR`)
}

export const getStreetTitlesOfGovernmentBuildings = (buildings: Array<GovernmentType>) => {
    return buildings.map(b => b.address.street.title)
}

export const getStreetTitlesOfHouses = (houses: Array<HousesType>) => {
    return houses.map(h => h.address.street.title)
}

export  const  createMessage = (houses: Array<HousesType>) => {
return houses.map(h => `Hello guys from ${h.address.street.title}`)
}