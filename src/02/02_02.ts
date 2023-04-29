

export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<HousesType>
    citizensNumber: number
}

export type HousesType = {
    buildedAt: number
    repaired: false
    address: AddressType
}

export type AddressType = {
    number: number
    street: StreetType
}
export type StreetType = {
    title: string
}