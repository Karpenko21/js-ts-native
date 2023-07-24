
export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentType>
    citizensNumber: number
}

export type HousesType = {
    id?: number
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type AddressType = {
    number: number
    street: StreetType
}
export type StreetType = {
    title: string
}
export type GovernmentType = {
    type: string
    budget: number
    staffCount: number
    address: AddaressGovernmentType
}
export type AddaressGovernmentType = {
    street: StreetType
}