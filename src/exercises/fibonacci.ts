import { Request, Response } from "express";

function Fibonacci(req: Request, res: Response) {
  const { choosedNumber } = req.body;

  function generate(N: Number) {
    let fibonacciArray = [];
    fibonacciArray[0] = 0;
    fibonacciArray[1] = 1;

    for (let i = 2; i < N; i++) {
      fibonacciArray[i] = fibonacciArray[i - 2] + fibonacciArray[i - 1];
    }

    return fibonacciArray;
  }

  const result = generate(choosedNumber);

  return res.json(result);
}

export { Fibonacci };
