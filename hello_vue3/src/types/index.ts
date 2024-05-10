export interface PersonInter {
    id: string,
    name: string,
    age: number,
    tel?: string //?可有可无的参数
}

// 使用泛型
export type Persons = Array<PersonInter>
// 或者
export type Personss = PersonInter[]