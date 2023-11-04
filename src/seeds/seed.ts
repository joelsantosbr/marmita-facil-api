import { PrismaClient, TypeFood } from "@prisma/client"

const prisma = new PrismaClient()

const menus = [
  { name: 'Receita 1', description: 'Frango Grelhado com Brócolis e Batata Doce' },
  { name: 'Receita 2', description: 'Macarrão com Almôndegas e Espinafre' },
  { name: 'Receita 3', description: 'Arroz Integral com Salmão e Aspargos' },
  { name: 'Receita 4', description: 'Quinoa com Frango à Curry e Abobrinha' },
  { name: 'Receita 5', description: 'Tacos de Feijão Preto com Carne Moída e Salsa' },
  { name: 'Receita 6', description: 'Salada de Lentilhas com Atum e Pepino' },
]

const foods = [
  // Receita 1: Frango Grelhado com Brócolis e Batata Doce
  { name: 'Batata doce', type: TypeFood.carbohydrates, menuId: 1 },
  { name: 'Peito de frango', type: TypeFood.proteins, menuId: 1 },
  { name: 'Brócolis', type: TypeFood.vegetables, menuId: 1 },

  // Receita 2: Macarrão com Almôndegas e Espinafre
  { name: 'Macarrão', type: TypeFood.carbohydrates, menuId: 2 },
  { name: 'Almôndegas (carne moída)', type: TypeFood.proteins, menuId: 2 },
  { name: 'Espinafre', type: TypeFood.vegetables, menuId: 2 },

  // Receita 3: Arroz Integral com Salmão e Aspargos
  { name: 'Arroz integral', type: TypeFood.carbohydrates, menuId: 3 },
  { name: 'Salmão', type: TypeFood.proteins, menuId: 3 },
  { name: 'Aspargos', type: TypeFood.vegetables, menuId: 3 },

  // Receita 4: Quinoa com Frango à Curry e Abobrinha
  { name: 'Quinoa', type: TypeFood.carbohydrates, menuId: 4 },
  { name: 'Peito de frango', type: TypeFood.proteins, menuId: 4 },
  { name: 'Abobrinha', type: TypeFood.vegetables, menuId: 4 },

  // Receita 5: Tacos de Feijão Preto com Carne Moída e Salsa
  { name: 'Tortilhas de milho', type: TypeFood.carbohydrates, menuId: 5 },
  { name: 'Carne moída', type: TypeFood.proteins, menuId: 5 },
  { name: 'Salsa (tomate, cebola, coentro)', type: TypeFood.vegetables, menuId: 5 },

  // Receita 6: Salada de Lentilhas com Atum e Pepino
  { name: 'Lentilhas', type: TypeFood.carbohydrates, menuId: 6 },
  { name: 'Atum enlatado', type: TypeFood.proteins, menuId: 6 },
  { name: 'Pepino', type: TypeFood.vegetables, menuId: 6 }
]

async function seed() {
  for (const menu of menus) {
    await prisma.menuFood.create({
      data: {
        name: menu.name,
        description: menu.description,
      },
    })
  }

  for (const food of foods) {
    await prisma.food.create({
      data: {
        name: food.name,
        type: food.type,
        menuId: food.menuId
      },
    })
  }
}

seed()
  .catch((error) => {
    console.error('Error seeding data:', error)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
