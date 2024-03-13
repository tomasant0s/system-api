import { Request, Response } from "express";
import { CreateUsuarioService } from "../../services/usuario/CreateUsuarioService";
import { UserRequest } from "../../models/interfaces/usuario/UsuarioRequest";

class CreateUsuarioController {
    async handle(req: Request, res: Response) {
        const {nome, email, telefone,perfil, senha}: UserRequest = req.body;
        const createUsuarioService = new CreateUsuarioService
        const usuario = await createUsuarioService.execute({
            nome, email, telefone, perfil, senha
        });
        
        return res.json(usuario)
    }
}

export { CreateUsuarioController }