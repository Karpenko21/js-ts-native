import {CityType} from "../02/02_02";
import {addMoneyToBudget, createMessage, repairHouse, toFireStaff, toHireStaff} from "./03";
import {getBuildingsWithStaffCountGreaterThen} from "../02/02";

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
                        title: "White street"
                    }
                }
            }, {
                buildedAt: 2010,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: "White street"
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

test("Budget should be changed for HOSPITAL", () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000)

    expect(city.governmentBuildings[0].budget).toBe(300000)
})

test("Budget should be changed for FIRE-STATION", () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000)

    expect(city.governmentBuildings[1].budget).toBe(400000)
})


test("House should be repared", () => {
    repairHouse(city.houses[1])

    expect(city.houses[1].repaired).toBe(true)
})

test("staff should be increased", () => {
    toFireStaff(city.governmentBuildings[0],20)

    expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test("staff should be repared", () => {
    toHireStaff(city.governmentBuildings[0],20)
    toHireStaff(city.governmentBuildings[1],100)

    expect(city.governmentBuildings[0].staffCount).toBe(220)
    expect(city.governmentBuildings[1].staffCount).toBe(1100)
})


test("Greeting should be correct", () => {
    const message = createMessage(city)

    expect(message).toBe("Hello New York! I want you be happy. All 100000 men")
})


test("buildings with correct staff count", () => {
    const buildins = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500)

    expect(buildins.length).toBe(1)
    expect(buildins[0].type).toBe("FIRE-STATION")

})

