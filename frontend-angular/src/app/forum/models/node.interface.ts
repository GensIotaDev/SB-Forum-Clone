import {LinkSignature} from "../forum.interface";

export interface Node extends LinkSignature {
    parent: number,
    children: Node[]
}
