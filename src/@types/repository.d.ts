export interface IRepository {
  id: number
  name: string
  description: string
  owner: {
    avatar_url: string
    login: string
  }
}

export interface IResult {
  total_count: number
  items: IRepository[]
}
