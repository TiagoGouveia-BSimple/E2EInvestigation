import { Person } from "../Models/person";
import { PersonViewModel } from "../Models/person-view-model";

export function toPersonViewModel(p : Person):PersonViewModel{
    return {
        id : p.id,
        name : p.name, 
        age : p.age
    }
}

export function toPerson(p : PersonViewModel):Person{
    return {
        id : p.id,
        name : p.name, 
        age : p.age
    }
}