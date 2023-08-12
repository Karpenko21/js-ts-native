import {
    addBook, CompaniesType, deleteBook,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse, updateBook, updateCompany, updateCompany2,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType, UserWithCompaniesType,
    UserWithLaptopType
} from "./10_01";


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

    let user: UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
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

    let user: UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        }
    }

    let newUser = upgradeUserLaptop(user, "macbook")

    expect(newUser).not.toBe(user)
    expect(newUser.address).toBe(user.address)
    expect(newUser.laptop).not.toBe(user.laptop)
    expect(user.laptop.title).toBe("Zenbook")
    expect(newUser.laptop.title).toBe("macbook")
})

test("change house test", () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ["JS", "HTML", "React", "css"]
    }

    let newUser = moveUserToOtherHouse(user, 105)

    expect(newUser).not.toBe(user)
    expect(newUser.address).not.toBe(user.address)
    expect(newUser.laptop).toBe(user.laptop)
    expect(user.address.house).toBe(12)
    expect(newUser.address.house).toBe(105)
})

test("add new book test", () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ["JS", "HTML", "React", "css"]
    }

    let newUser = addBook(user, "ts")

    expect(newUser).not.toBe(user)
    expect(newUser.address).toBe(user.address)
    expect(newUser.laptop).toBe(user.laptop)
    expect(newUser.books.length).toBe(5)
    expect(newUser.books[4]).toBe("ts")
})

test("update book test", () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ["JS", "HTML", "React", "css"]
    }

    let newUser = updateBook(user, "JS", "ts")

    expect(newUser).not.toBe(user)
    expect(newUser.books).not.toBe(user.books)
    expect(newUser.address).toBe(user.address)
    expect(newUser.laptop).toBe(user.laptop)
    expect(newUser.books[0]).toBe("ts")
})

test("delete book test", () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ["JS", "HTML", "React", "css"]
    }

    let newUser = deleteBook(user, "JS")

    expect(newUser).not.toBe(user)
    expect(newUser.books).not.toBe(user.books)
    expect(newUser.address).toBe(user.address)
    expect(newUser.laptop).toBe(user.laptop)
    expect(newUser.books.length).toBe(3)
    expect(newUser.books[0]).toBe("HTML")
})

test("update company name test", () => {

    let user: UserWithLaptopType & UserWithCompaniesType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        companies: [{id: 1, title: "Епам"},
            {id: 2, title: "IT-Incubator"}]
    }

    let newUser = updateCompany(user, 1, "EPAM") as UserWithLaptopType & UserWithCompaniesType

    expect(newUser).not.toBe(user)
    expect(newUser.address).toBe(user.address)
    expect(newUser.laptop).toBe(user.laptop)
    expect(newUser.companies[0].title).toBe("EPAM")
    expect(newUser.companies).not.toBe(user.companies)
})

test("update company test", () => {

    let companies: CompaniesType = {
        "Dimych": [{id: 1, title: "Епам"},
            {id: 2, title: "IT-Incubator"}],
        "Victor": [{id: 2, title: "IT-Incubator"}]
    }

    let newCompanies = updateCompany2(companies, "Dimych", 1, "EPAM")
    expect(newCompanies["Dimych"]).not.toBe(companies["Dimych"])
    expect(newCompanies["Victor"]).toBe(companies["Victor"])
    expect(newCompanies["Dimych"][0].title).toBe("EPAM")
})
