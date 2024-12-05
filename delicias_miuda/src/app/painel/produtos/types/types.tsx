export interface IProdutos{
    id: string,
    name: string
    description: string
    image: string
    createdAt: string
    updatedAt: string
    deletedAt: string
    sections: ISections[]
  }

export interface ISections{
    id: string,
    title: string,
    description: string,
    sectionInfo: string,
    createdAt: string,
    updatedAt: string,
    deletedAt: string,
    options: IOptions[]
}

export interface IOptions{
  id: string,
  description: string,
  price: string,
  createdAt: string,
  updatedAt: string,
  deletedAt: string
}