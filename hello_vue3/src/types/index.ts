export interface PersonInter {
    id: string,
    name: string,
    age: number
}

// 使用范型
export type Persons = Array<PersonInter>
// 或者
export type Personss = PersonInter[]