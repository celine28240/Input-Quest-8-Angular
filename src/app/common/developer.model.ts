import { Skill } from './skill.model';

export class Developer {
    public lastName: string;
    public firstName: string;
    public age: number;
    public sexe: string;
    public bio: string;
    public skill: Skill[]=[];

    constructor(lastName: string, firstName: string, age: number, sexe: string, bio: string, skill:any) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.age = age;
        this.sexe = sexe;
        this.bio = bio;
        this.skill= skill;
    }
}



