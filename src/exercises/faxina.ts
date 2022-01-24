import { Request, Response } from "express";

function Faxina(req: Request, res: Response) {
  const object = req.body;

  let key: any;

  for (key in object) {
    if (object[key] != null) {
      object[key];
    } else {
      delete object[key];
    }
  }

  return res.json(object);
}

export { Faxina };
