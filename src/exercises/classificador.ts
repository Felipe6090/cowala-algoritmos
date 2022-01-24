import { Request, Response } from "express";

type IData = {
  souEu: boolean;
  responsavel: boolean;
  nome: string;
};

function Classificador(req: Request, res: Response) {
  let data: IData = req.body;

  const groupArray = [];

  groupArray.push(data);

  console.log(groupArray);

  function comparer(a: IData, b: IData) {
    if (a.souEu === true) {
      return 1;
    } else if (a.responsavel === true) {
      return 0;
    } else {
      return -1;
    }
  }

  return res.json(groupArray);
}

export { Classificador };
