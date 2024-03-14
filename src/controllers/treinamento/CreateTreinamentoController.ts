import { Request, Response } from "express";
import { CreateTreinamentoService } from "../../services/treinamento/CreateTreinamentoService";
import { TreinamentoRequest } from "../../models/interfaces/treinamento/TreinamentoRequest";

class CreateTreinamentoController {
    async handle(req: Request, res: Response) {
        const { nome, nr, validade }: TreinamentoRequest = req.body;
        const createTreinamentoService = new CreateTreinamentoService();
        const treinamento = await createTreinamentoService.execute({
            nome, nr, validade 
        });

        return res.json(treinamento);
    }
}

export { CreateTreinamentoController };
