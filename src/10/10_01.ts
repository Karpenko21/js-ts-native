export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type UserWithCompaniesType = UserType & {
    companies: Array<CompanyType>
}

export type CompaniesType = {
    [key: string]: CompanyType[]
}

export type CompanyType = {
    id: number
    title: string
}

export function makeHairstyle(u: UserType, power: number) {
    return {
        ...u,
        hair: u.hair / power
    }
}


export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address, city: city
        }
    }
}


export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop, title: laptop
        }
    }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address, house
        }
    }
}


export function addBook(u: UserWithLaptopType & UserWithBooksType, newBook: string) {
    return {
        ...u,
        books: [
            ...u.books, newBook
        ]
    }
}

export const updateBook = (u: UserWithLaptopType & UserWithBooksType,
                           oldBook: string,
                           newBook: string) => ({
    ...u,
    books: u.books.map(b => b === oldBook ? newBook : b)
})

export const deleteBook = (u: UserWithLaptopType & UserWithBooksType, book: string) => (
    {
        ...u,
        books: u.books.filter(b => b !== book)
    })


export const updateCompany = (u: UserWithCompaniesType,
                              id: number,
                              newCompanyTitle: string) => ({
    ...u,
    companies: u.companies.map(c => c.id === id ? {...c, title: newCompanyTitle} : c)
})


export const updateCompany2 = (companies: CompaniesType,
                              userName: string,
                              companyID: number,
                              newTitle: string) => ({
   ...companies,
    [userName]: companies[userName].map(c => c.id === companyID ? {...c, title: newTitle} : c)
})

