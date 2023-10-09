import express from "express";
import clerk from "@clerk/clerk-sdk-node";
import "dotenv/config";
import cors from "cors";

const app = express();
app.use(cors());

async function main() {
  const user_list = await clerk.users.getUserList();

  const usuarios = user_list.map((user) => {
    //console.log(user) funciona
    return user;
  });
  
  app.get("https://wheller-backend.vercel.app/", (req, res) => {
    res.json(usuarios);
  });

  app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
  });
}

main().catch((error) => {
  console.error("An error occurred:", error);
});
