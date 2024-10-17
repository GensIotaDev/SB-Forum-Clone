import {User} from "./user.interface";

export interface DynamicItem {
  id : number,
  count : number
}

export interface Post {
  id : number,
  author : User,
  posted_on : Date,
  edited_on? : Date,
  content: string,
  reactions: DynamicItem[]
}
