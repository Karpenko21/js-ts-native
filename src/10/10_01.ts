export type UserType = {
    name: string
    hair: number
    address: {city: string, house?: number}
}

export type LaptopType = {
    title: string
}

export type UserWithLaptop = UserType & {
    laptop: LaptopType
}

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair/power
    }
    return copy
}


export function moveUser(u: UserWithLaptop, city: string) {
    return {
        ...u,
        address: {
            ...u.address, city: city
        }
    }
}


export function upgradeUserLaptop(u: UserWithLaptop, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop, title: laptop
        }
    }
}