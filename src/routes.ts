import { Router, Request, Response} from 'express';
import { CreateUsuarioController } from './controllers/usuario/CreateUsuarioController';
import { CreateFuncionarioController } from './services/funcionario/CreateFuncionarioService';
import { CreateTreinamentoController } from './controllers/treinamento/CreateTreinamentoController';
import { CreateTreinamentosFuncionarioController } from './controllers/treinamentoFuncionario/CreateTreinaFuncController';

const router = Router();

//Rotas de Usuario
router.post('/user', new CreateUsuarioController().handle)

//Rotas de Funcionario
router.post('/user', new CreateFuncionarioController().handle)

//Rotas de Treinamento
router.post('/user', new CreateTreinamentoController().handle)

//Totas de Treinamento Funcionario
router.post('/user', new CreateTreinamentosFuncionarioController().handle)

export { router };