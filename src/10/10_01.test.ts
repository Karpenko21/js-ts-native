import {makeHairstyle, moveUser, upgradeUserLaptop, UserType, UserWithLaptop} from "./10_01";



test("reference type test", () => {

       let user: UserType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk"
        }
    }

    const awesome = makeHairstyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesome.hair).toBe(16)
    expect(awesome.address).toBe(user.address)
})

test("change address test", () => {

    let user: UserWithLaptop = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house:12
        },
        laptop: {
            title: "Zenbook"
        }
    }

    let newUser = moveUser(user, "Kiev")

    expect(newUser).not.toBe(user)
    expect(newUser.address).not.toBe(user.address)
    expect(newUser.laptop).toBe(user.laptop)
    expect(newUser.address.city).toBe("Kiev")
})

test("upgrade user laptop test", () => {

    let user: UserWithLaptop = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house:12
        },
        laptop: {
            title: "Zenbook"
        }
    }

    let newUser = upgradeUserLaptop(user, "macbook")

    expect(newUser).not.toBe(user)
    expect(newUser.address).toBe(user.address)
    expect(newUser.laptop).not.toBe(user.laptop)
    expect(newUser.laptop.title).toBe("macbook")
})