import { TreinamentoRequest } from "../../models/interfaces/treinamento/TreinamentoRequest";
import prismaClient from "../../prisma";

class CreateTreinamentoService {
    async execute({ nome, nr, validade /*, outros campos */ }: TreinamentoRequest) {
        if (!nome) {
            throw new Error("Nome error");
        }
        if (!nr) {
            throw new Error("NR error");
        }
        if (!validade) {
            throw new Error("Validade error");
        }
        // Validações adicionais para outros campos, se necessário

        const treinamentoAlreadyExists = await prismaClient.treinamento.findFirst({
            where: {
                nr: nr
            }
        });

        if (treinamentoAlreadyExists) {
            throw new Error("Treinamento com esse NR já existe");
        }

        const treinamento = await prismaClient.treinamento.create({
            data: {
                nome: nome,
                nr: nr,
                validade: validade
                // outros campos
            }
        });

        return treinamento;
    }
}

export { CreateTreinamentoService };
