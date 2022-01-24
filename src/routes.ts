import { Request, Response, Router } from "express";

import { Fibonacci } from "./exercises/fibonacci";

import { Classificador } from "./exercises/classificador";

import { Faxina } from "./exercises/faxina";

const routes = Router();

routes.get("/fibonacci", Fibonacci);
routes.get("/classificador", Classificador);
routes.get("/faxina", Faxina);

export { routes };
