import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType;

beforeEach(() => {
        student = {
            id: 1,
            name: "Irina",
            age: 34,
            isActive: false,
            address: {
                streetTitle: "Krasnuy put",
                city: {
                    title: "Omsk",
                    countryTitle: "Russia"
                }
            },
            technologies: [
                {id: 1, title: "HTML"},
                {id: 2, title: "CSS"},
                {id: 3, title: "JS"},
            ]
        }
    }
)

test("new tech skill should be addad to student", () => {
    expect(student.technologies.length).toBe(3)
    addSkill(student, "React");
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("React");
    expect(student.technologies[3]).toBeDefined();
})


test("student should be active", () => {
    expect(student.isActive).toBe(false)
    makeStudentActive(student);
    expect(student.isActive).toBe(true)
})

test("does student live in city?", () => {

    let result1 = doesStudentLiveIn(student, "Moscow")
    let result2 = doesStudentLiveIn(student, "Omsk");
    expect(result1).toBe(false)
    expect(result2).toBe(true)
})
