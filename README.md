# Descrição
Backend-End da aplicação de EDI

## Bibliotecas utilizadas
- [Prisma](https://www.prisma.io/) - ORM
- [Express](https://expressjs.com/) - Framework para criação de API
- [GRPC](https://www.npmjs.com/package/@grpc/grpc-js)
- [Typescript](https://www.typescriptlang.org/)

## Instruções
1. Clonar repositório
   ```bash
     git clone https://github.com/bjmvercelli/edi_protobuf.git
     cd edi_protobuf
   ```
2. Instalar dependências

   ```bash
     npm install
   ```
3. Configurar string de conexão com o banco (.env) - Exemplo
   ```
     DATABASE_URL="postgresql://test:test@localhost:5432/test?schema=public"
   ```
4. Aplicar migrations (versionamento do banco)
   ```
    npm run prisma:migrate
   ```

5. Executar aplicação
   ```
     npm run dev
   ```
