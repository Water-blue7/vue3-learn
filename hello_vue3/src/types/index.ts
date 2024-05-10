export interface PersonInter {
    id: string,
    name: string,
    age: number,
    tel?: string //?可有可无的参数
}

// News数据类型限制
export interface NewsInter {
    id: string,
    title: string,
    content: string
}

// 使用泛型
export type Persons = Array<PersonInter>
// 或者
export type Personss = PersonInter[]