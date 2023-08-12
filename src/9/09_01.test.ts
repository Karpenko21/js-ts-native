import {UserType} from "./09_01";

function increaseAge(u: UserType) {
    u.age++
}

test("referent type test", () => {
    let user: UserType = {
        name: "Dimych",
        age: 32,
        address: {
            title: "Minsk"
        }
    }

    increaseAge(user)
    expect(user.age).toBe(33)

    const superman = user

    superman.age = 1000
    expect(user.age).toBe(1000)
})


test("array test", () => {


    let users = [
        {
        name: "Dimych",
        age: 32
    },
        {
            name: "Irina",
            age: 34
        }]

    let admins = users

    admins.push({name: "Bandyugan", age: 10})
    expect(users[2]).toEqual({name: "Bandyugan", age: 10})
})

test("value type test", () => {


    let usersCount = 100

    let adminsCount = usersCount

    adminsCount ++

})

test("reference type test", () => {
    let user: UserType = {
        name: "Dimych",
        age: 32,
        address: {
            title: "Minsk"
        }
    }

    //let addr = user.address

    let user2: UserType = {
        name: "Natasha",
        age: 30,
        address: user.address
    }

    user2.address.title = "Kanary"

    expect(user.address.title).toBe("Kanary")
})
test("reference type array test", () => {
    const address = {
        title: "Minsk"
    }

    let user: UserType = {
        name: "Dimych",
        age: 32,
        address: address
    }


    let user2: UserType = {
        name: "Natasha",
        age: 30,
        address: address
    }

    const users = [user, user2, {name: "Misha", age: 4, address: address}]

    const admins = [user, user2]

    admins[0].name = "Dmitriy"
    expect(user.name).toBe("Dmitriy")
})