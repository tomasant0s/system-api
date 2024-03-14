import { Request, Response } from "express";
import { TreinamentosFuncionarioRequest } from "../../models/interfaces/treinamentoFuncionario/TreinaFuncRequest";
import { CreateTreinamentosFuncionarioService } from "../../services/treinamentoFuncionario/CreateTreinaFuncService";

class CreateTreinamentosFuncionarioController {
    async handle(req: Request, res: Response) {
        const { funcionarioId, treinamentoId, dataTreinamento }: TreinamentosFuncionarioRequest = req.body;
        const createTreinamentosFuncionarioService = new CreateTreinamentosFuncionarioService();
        const treinamentosFuncionario = await createTreinamentosFuncionarioService.execute({
            funcionarioId, treinamentoId, dataTreinamento
        });

        return res.json(treinamentosFuncionario);
    }
}

export { CreateTreinamentosFuncionarioController };
