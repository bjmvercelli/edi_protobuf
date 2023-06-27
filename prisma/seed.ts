import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    // await prisma.cliente.create({
    //   data: {
    //     nome: "Bruno",
    //     email: "bruno@gmail.com",
    //     cpf: "12345678910",
    //     telefone: "12345678910",
    //     endereco: {
    //       create: {
    //         cep: "12345678",
    //         rua: "Rua Teste",
    //         numero: 123,
    //         complemento: "Casa",
    //         cidade: "Cidade Teste",
    //         bairro: "Bairro Teste",
    //       },
    //     },
    //     login: "bruno",
    //     senha: "123456",
    //   }
    // });

    await prisma.produto.create({
      data: {
        nome: "Notebook",
        preco_unitario: 3090.99,
        estoque: {
          create: {
            quantidade: 10,
          }
        },
        transportadora: {
          create: {
            nome: "Transportadora",
            cnpj: "12345678910112"
          }
        }
      }
    });
    
  } catch (error) {
    console.log(error);
  }
}

main().then(() => {
  prisma.$disconnect();
});