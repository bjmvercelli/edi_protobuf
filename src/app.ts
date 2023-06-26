import express from "express";
import cors from "cors";

import routes from "./routes";
import { GrpcServer } from "./infra/grpc/server";

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3000, () => {
  console.log("Server is running on port " + PORT);
});

const grpcServer = new GrpcServer(50051);

grpcServer.start();