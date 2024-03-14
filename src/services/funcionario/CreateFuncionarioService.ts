import { Request, Response } from "express";
import { FuncionarioRequest } from "../../models/interfaces/funcionario/FuncionarioRequest";
import { CreateFuncionarioService } from "../../controllers/funcionario/CreateFuncionarioController";

class CreateFuncionarioController {
    async handle(req: Request, res: Response) {
        const { nome, matricula }: FuncionarioRequest = req.body;
        const createFuncionarioService = new CreateFuncionarioService();
        const funcionario = await createFuncionarioService.execute({
            nome, matricula 
        });

        return res.json(funcionario);
    }
}

export { CreateFuncionarioController };
