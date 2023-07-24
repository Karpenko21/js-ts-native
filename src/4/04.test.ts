// @ts-ignore
test("should take men older then 90", () => {
    const ages = [18, 20, 22, 1, 100, 30, 14]

    const oldAges = ages.filter(age => age > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)

})

test("should take courses cheaper then 160", () => {

    const courses = [
        {title: "css", price: 100},
        {title: "JS", price: 200},
        {title: "React", price: 150}
    ]


    const chipCourses = courses.filter(course => course.price < 160)

    expect(chipCourses.length).toBe(2)
    expect(chipCourses[0].title).toBe("css")
})

test ("get only completed tasks", () => {
    const tasks = [
        {id: 1, title: "bread", isDone: false},
        {id: 2, title: "milk", isDone: true},
        {id: 3, title: "solt", isDone: false},
        {id: 4, title: "sugar", isDone: true}
    ]
    const completedTasks = tasks.filter(t => t.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].title).toBe("milk")
    expect(completedTasks[1].id).toBe(4)
})


test ("get only uncompleted tasks", () => {
    const tasks = [
        {id: 1, title: "bread", isDone: false},
        {id: 2, title: "milk", isDone: true},
        {id: 3, title: "solt", isDone: false},
        {id: 4, title: "sugar", isDone: true}
    ]
    const uncompletedTasks = tasks.filter(t => !t.isDone)

    expect(uncompletedTasks.length).toBe(2)
    expect(uncompletedTasks[0].title).toBe("bread")
    expect(uncompletedTasks[1].id).toBe(3)
})