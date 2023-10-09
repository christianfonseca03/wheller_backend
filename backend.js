import express from "express";
import clerk from "@clerk/clerk-sdk-node";
import "dotenv/config";
import cors from "cors";

const app = express();
app.use(cors());

async function startServer() {
  try {
    await clerk.init({
      apiKey: process.env.CLERK_API_KEY,
    });

    app.get("/", async (req, res) => {
      try {
        const user_list = await clerk.users.getUserList();
        const usuarios = user_list.map((user) => {
          return user;
        });
        res.json(usuarios);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
        res.status(500).json({ error: "Erro ao buscar usuários" });
      }
    });

    const port = process.env.PORT || 3001;
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

startServer();
