import {CityType} from "./02_02";
import {demolishHousesOnTheStreet} from "./02";

let city: CityType

beforeEach(() => {
    city = {
        title: "New York",
        houses: [{
            id: 1,
            buildedAt: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: "White street"
                }
            }
        }, {
            id: 2,
            buildedAt: 2008,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: "White street"
                }
            }
        }, {
            id: 3,
            buildedAt: 2010,
            repaired: false,
            address: {
                number: 101,
                street: {
                    title: "Happy street"
                }
            }
        }],
        governmentBuildings: [],
        citizensNumber: 100000
    }
})
test("test city should contains 3 houses", () => {

        expect(city.houses.length).toBe(3)

        expect(city.houses[0].buildedAt).toBe(2012)
        expect(city.houses[0].repaired).toBe(false)
        expect(city.houses[0].address.number).toBe(100)
        expect(city.houses[0].address.street.title).toBe("White street")

        expect(city.houses[1].buildedAt).toBe(2008)
        expect(city.houses[1].repaired).toBe(false)
        expect(city.houses[1].address.number).toBe(100)
        expect(city.houses[1].address.street.title).toBe("White street")

        expect(city.houses[2].buildedAt).toBe(2010)
        expect(city.houses[2].repaired).toBe(false)
        expect(city.houses[2].address.number).toBe(101)
        expect(city.houses[2].address.street.title).toBe("Happy street")
    }
)

test("Houses should be destroyed", () => {

    demolishHousesOnTheStreet(city, "Happy street")

    expect(city.houses.length).toBe(2)
    expect(city.houses[0].id).toBe(1)
})











