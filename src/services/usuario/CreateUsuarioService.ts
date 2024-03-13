import prismaClient from "../../prisma";
import { hash } from "bcryptjs"
import { UserRequest } from "../../models/interfaces/usuario/UsuarioRequest";

class CreateUsuarioService {

    async execute({nome, email, telefone,perfil ,  senha}: UserRequest) {
        if (!email) {
            throw new Error("Email error");
        } 
        if (!nome) {
            throw new Error("Nome error");
        } 
        if (!telefone) {
            throw new Error("Telefone error");
        } 
        if (!senha) {
            throw new Error("Senha error");
        } 
        if (!perfil) {
            throw new Error("Perfil error");
        } 


        const userAlreadyExists = await prismaClient.usuario.findFirst({
            where: {
                email: email
            }
        })

        if (userAlreadyExists) {
            throw new Error("Email already exists");
        }

        const passwordHash = await hash(senha, 8);

        const usuario = prismaClient.usuario.create({
            data: {
                nome: nome,
                email: email,
                telefone: telefone,
                perfil: perfil,
                senha: passwordHash
            }
        })

        return usuario
    }
}

export { CreateUsuarioService }