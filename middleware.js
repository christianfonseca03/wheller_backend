const corsOptions = {
  origin: "*", // Substitua pelo domínio do seu frontend
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Habilita o envio de cookies de origem cruzada
  optionsSuccessStatus: 204, // Define o código de status de resposta para preflight (opções) para 204
};

app.use(cors(corsOptions));