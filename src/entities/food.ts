export enum TypeFood {
  PROTEINS = 'proteins',
  VEGETABLES = 'vegetables',
  CARBOHYDRATES = 'carbohydrates'
}

export type Food = {
  id: number
  type: TypeFood
  name: string
  menuId: string
  updatedAt: Date
  createdAt: Date
}