import {student, StudentType} from "../02/02";
import {CityType, GovernmentType, HousesType} from "../02/02_02";
import exp from "constants";

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

export const addMoneyToBudget = (building: GovernmentType, budget: number) => {
building.budget += budget
}

export const repairHouse = (housesType: HousesType) => {
    housesType.repaired = true
}

export const toFireStaff = (building: GovernmentType, staffCountToFire: number) =>{
building.staffCount -=staffCountToFire
}

export const toHireStaff = (building: GovernmentType, staffCountToHire: number) => {
    building.staffCount += staffCountToHire
}

export const createMessage = (city: CityType) => {
    return `Hello ${city.title}! I want you be happy. All ${city.citizensNumber} men`
}