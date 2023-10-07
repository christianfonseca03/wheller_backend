import express from "express";
import clerk from "@clerk/clerk-sdk-node";
import "dotenv/config";

const app = express();

async function main() {
  app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
  });

  app.get("/", (req, res) => {
    res.send(usuarios);
  });

  const user_list = await clerk.users.getUserList();

  const usuarios = user_list.map((user) => {
    return user;
  });
}

main().catch((error) => {
  console.error("An error occurred:", error);
});
