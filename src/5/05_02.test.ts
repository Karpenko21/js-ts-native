import {CityType} from "../02/02_02";
import {createMessage, getStreetTitlesOfGovernmentBuildings, getStreetTitlesOfHouses} from "./05_01";


let city: CityType

beforeEach(() => {
        city = {
            title: "New York",
            houses: [{
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "White street"
                    }
                }
            }, {
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy street"
                    }
                }
            }, {
                buildedAt: 2010,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: "Happy street"
                    }
                }
            }],
            governmentBuildings: [
                {
                    type: 'HOSPOTAL',
                    budget: 200000,
                    staffCount: 200,
                    address: {
                        street: {
                            title: "South Str"
                        }
                    }
                },
                {
                    type: 'FIRE-STATION',
                    budget: 500000,
                    staffCount: 1000,
                    address: {
                        street: {
                            title: "West Str"
                        }
                    }
                }
            ],
            citizensNumber: 100000
        }
    }
)
test("list of street titles of government buildings", () => {
    let streetNames = getStreetTitlesOfGovernmentBuildings(city.governmentBuildings)
    expect(streetNames.length).toBe(2)
    expect(streetNames[0]).toBe("South Str")
    expect(streetNames[1]).toBe("West Str")
})


test("list of street titles", () => {
    let streetNames = getStreetTitlesOfHouses(city.houses)
    expect(streetNames.length).toBe(3)
    expect(streetNames[0]).toBe("White street")
    expect(streetNames[1]).toBe("Happy street")
})

test("create greeting messages for streets", () => {
    let messages = createMessage(city.houses)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello guys from White street")
    expect(messages[1]).toBe("Hello guys from Happy street")
    expect(messages[2]).toBe("Hello guys from Happy street")
})