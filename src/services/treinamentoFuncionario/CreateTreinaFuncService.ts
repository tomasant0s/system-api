import { TreinamentosFuncionarioRequest } from "../../models/interfaces/treinamentoFuncionario/TreinaFuncRequest";
import prismaClient from "../../prisma";

class CreateTreinamentosFuncionarioService {
    async execute({ funcionarioId, treinamentoId, dataTreinamento }: TreinamentosFuncionarioRequest) {
        if (!funcionarioId) {
            throw new Error("FuncionarioId error");
        }
        if (!treinamentoId) {
            throw new Error("TreinamentoId error");
        }
        if (!dataTreinamento) {
            throw new Error("DataTreinamento error");
        }
        // Adicionar validações adicionais se necessário

        // Verificar se o relacionamento já existe
        const relacionamentoExistente = await prismaClient.treinamentosFuncionario.findFirst({
            where: {
                funcionarioId: funcionarioId,
                treinamentoId: treinamentoId
            }
        });

        if (relacionamentoExistente) {
            throw new Error("Relacionamento já existe");
        }

        const treinamentosFuncionario = await prismaClient.treinamentosFuncionario.create({
            data: {
                funcionarioId: funcionarioId,
                treinamentoId: treinamentoId,
                dataTreinamento: dataTreinamento
            }
        });

        return treinamentosFuncionario;
    }
}

export { CreateTreinamentosFuncionarioService };
