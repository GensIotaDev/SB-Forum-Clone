export interface Threadmark {
  id: number,
  name : string
}

export interface Thread {
  id : number,
  tags : string[],
  threadmarks: Threadmark[]
}
