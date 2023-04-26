import {CityType} from "../02/02_02";

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