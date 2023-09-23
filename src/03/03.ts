import {student, StudentType, TechologyType} from "../02/02";
import {CityType, GovernmentBuildingType} from "../02/02_02";

export const addSkill = (studentObj: StudentType, nameOfTech: string) => {
    studentObj.technologies.push({
        id: new Date().getTime(),
        title: nameOfTech
    });
}

export const toogleStudentActivity = (studentObj: StudentType) => {
    studentObj.isActive = !studentObj.isActive;
}

export function addBudget(govBuilding: GovernmentBuildingType, sum: number) {
    govBuilding['budget'] += sum;
}