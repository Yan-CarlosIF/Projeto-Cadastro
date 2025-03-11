import "dotenv/config";
import express from "express";
import cors from "cors";
import { query } from "./database";
import { Request, Response } from "express";

const app = express();

app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/users", async (req: Request, res: Response) => {
  try {
    const result = await query("SELECT * FROM public.users");
    res.status(200).json(result.rows);
  } catch {
    res.status(500).json({ error: "Não foi possivel buscar os usuários" });
  }
});

app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await query("SELECT * FROM public.users WHERE id = $1", [
      id,
    ]);
    res.status(200).json(result.rows);
  } catch {
    res.status(500).json({ error: "Não foi possivel buscar o usuário" });
  }
});

app.post("/users", async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const result = await query(
      "INSERT INTO public.users (name, email, password) values ($1, $2, $3) RETURNING *",
      [name, email, password]
    );

    res.status(201).json(result.rows[0]);
  } catch {
    res.status(500).json({ error: "Não foi possivel criar o usuário" });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/users`);
});
