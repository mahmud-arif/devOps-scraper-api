# Guide 

 ### .env file 
  - create `.env` file same level with package.json file 
      ```js 
       PRISMA_API= put your prisma url 
       PRISMA_MANAGEMENT_API_SECRET=prisma secret
     ```
### Run required services
- Goto project folder from your terminal  

   ```js
   $ docker-compose up --build -d
   $ prisma deploy
   ```
### Run App
- yarn 
- yarn run client-install
- yarn run dev

