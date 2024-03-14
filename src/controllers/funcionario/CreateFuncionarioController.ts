import { FuncionarioRequest } from "../../models/interfaces/funcionario/FuncionarioRequest";
import prismaClient from "../../prisma";

class CreateFuncionarioService {
    async execute({ nome, matricula }: FuncionarioRequest) {
        if (!nome) {
            throw new Error("Nome error");
        }
        if (!matricula) {
            throw new Error("Matricula error");
        }

        const funcionarioAlreadyExists = await prismaClient.funcionario.findFirst({
            where: {
                matricula: matricula
            }
        });

        if (funcionarioAlreadyExists) {
            throw new Error("Funcionário com essa matrícula já existe");
        }

        const funcionario = await prismaClient.funcionario.create({
            data: {
                nome: nome,
                matricula: matricula
            }
        });

        return funcionario;
    }
}

export { CreateFuncionarioService };
