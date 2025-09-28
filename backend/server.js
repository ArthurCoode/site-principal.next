// server.js
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5000;

// Middlewares
app.use(cors());
app.use(express.json()); // essencial para receber JSON do frontend/Postman

// Rota de teste rápido
app.get("/", (req, res) => {
  res.send("API rodando 🚀");
});

// Rota de contato
app.post("/api/contact", async (req, res) => {
  console.log("Body recebido:", req.body); // 🔹 debug

  const { name, email, company, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Preencha todos os campos obrigatórios." });
  }

  try {
    // Configuração do transporte SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465, // true se porta 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Enviar email
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `Nova mensagem de contato - ${company || "Sem empresa"}`,
      text: message,
      html: `
        <h3>Nova mensagem de contato</h3>
        <p><b>Nome:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Empresa:</b> ${company || "Não informado"}</p>
        <p><b>Mensagem:</b></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({ success: true, message: "Email enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    res.status(500).json({ error: "Erro ao enviar email. Tente novamente mais tarde." });
  }
});

// Start do servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
