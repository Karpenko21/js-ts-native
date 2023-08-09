import React from 'react';
import {ManType} from "./Destructuring";
import exp from "constants";

let props: ManType

beforeEach(() => {
    props = {
        name: "Dimych",
        age: 32,
        lessons: [{title: "1"}, {title: "2"}, {title: "3", name: 'react'}],
        address: {
            street: {
                title: "Krasniy put"
            }
        }
    }
})

test("test1", () => {


    //const age = props.age

    const {age, lessons} = props
    const {title} = props.address.street

    expect(age).toBe(32)
    expect(title).toBe("Krasniy put")

})


test("test2", () => {


    //const age = props.age

    const {age, lessons} = props
    const {title} = props.address.street

    expect(age).toBe(32)
    expect(title).toBe("Krasniy put")

})


test("test3", () => {

    const  l1 = props.lessons[0].title
    const l2 = props.lessons[1].title

    const [,ls2, ] = props.lessons

    const [lesson1, ...restLessons] = props.lessons

    expect(l1).toBe("1")
    expect(l2).toBe("2")

    //expect(ls1).toBe("1")
    expect(ls2.title).toBe("2")

    expect(restLessons.length).toBe(2)
    expect(restLessons[0].title).toBe('2')
    expect(restLessons[1]).toStrictEqual({title: "3", name: 'react'})
})