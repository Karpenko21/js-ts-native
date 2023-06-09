import {student, StudentType} from "../02/02";

export const sum = (a: number, b: number) => {
    return a + b
}

export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push(
        {
            id: new Date().getTime(),
            title: skill
        })
}

export const makeStudentActive = (st: StudentType) => {
    st.isActive = true
}

export const doesStudentLiveIn = (st: StudentType, cityName: string) => {
    return st.address.city.title === cityName
}