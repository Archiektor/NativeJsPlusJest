import {addSkill, toogleStudentActivity} from "./03";
import {StudentType} from "../02/02";

let a = 1;
let student: StudentType;

export default a;
beforeEach(() => {
    student = {
        id: 1,
        name: 'Nikki',
        age: 31,
        isActive: true,
        address: {
            streetTitle: 'Szkolna',
            city: {
                title: 'Kobylanka',
                countryTitle: 'Poland'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 3,
                title: 'React '
            },
        ]
    }
})

test('new skill should be added to student', () => {
    //action
    addSkill(student, 'next.js');

    //result
    expect(student["technologies"][3]['title']).toBe('next.js')
    expect(student["technologies"][3]['id']).toBeDefined();
    expect(student["technologies"].length).toBe(4)
})

test('new skill should be added to student', () => {
    //action
    addSkill(student, 'react-native');

    //result
    expect(student["technologies"][3]['title']).toBe('react-native')
    expect(student["technologies"][3]['id']).toBeDefined();
    expect(student["technologies"].length).toBe(4)
})

test('toogle student activity', () => {
    expect(student.isActive).toBe(true);
    //action
    toogleStudentActivity(student);

    //result
    expect(student.isActive).toBe(false);
})
