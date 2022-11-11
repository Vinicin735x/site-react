export interface IAnimeData {
    id?: number
    autor?: string
    data_lancamento?: string
    name: string
    
  }
  
  export interface IAnimeForm {
    id?: number
    autor?:string
    data_lancamento?:Date
    name?: string
  }