import {createGreetingMessages, StudentType} from "./05_01";


let people: StudentType[] = []


beforeEach(() => {
    people = [
        {name: "Andrew Ivanov", age: 18},
        {name: "Alexander Petrov", age: 24},
        {name: "Irina Karpenko", age: 34}
    ]
})

test("Get array of greeting messages", () => {

    const messages = createGreetingMessages(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello, Andrew. Welcome to IT-INCUBATOR")
    expect(messages[1]).toBe("Hello, Alexander. Welcome to IT-INCUBATOR")
    expect(messages[2]).toBe("Hello, Irina. Welcome to IT-INCUBATOR")
})