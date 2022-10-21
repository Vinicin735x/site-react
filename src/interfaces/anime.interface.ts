export interface IAnimeData {
    id?: number
    name?: string
    created_at?: string
    user?: {
      name: string
    }
    messageTopic?: {
      id: number
      name: string
    }[]
  }
  
  export interface IAnimeForm {
    id?: number
    title?: string
    message?: string
    created_at?: string
    topic?: number[] | undefined
  }