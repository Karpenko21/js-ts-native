// @ts-ignore
const ages = [18, 20, 22, 1, 100, 30, 14]


const predicate = (age: number) => {
    return age > 90
}

const oldAges = [100]

type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: "css", price: 100},
    {title: "JS", price: 200},
    {title: "React", price: 150}
]

const cheapPredicate = (course: CourseType) => {
    return course.price < 160
}

const cheapCourses = [
    {title: "css", price: 100},
    {title: "React", price: 150}
]