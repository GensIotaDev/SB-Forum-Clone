import {LinkSignature} from "../forum.interface";

export interface Node<T> {
  parentId?: number,
  children: T[]
}

export interface Metrics {
  threadCount : number,
  postCount : number
}

export interface Forum extends LinkSignature, Metrics, Node<Forum> {
  description: string
}


