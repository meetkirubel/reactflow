export type TNode = {
    id:string
    position:{
        x:number
        y:number
    }
    data:{
        label?:string
    }
    type?:string
}
export interface ExtractedItem {
    text: string;
  }
export type TinitialState = {
    nodes:TNode[]|null
    extract:boolean
}