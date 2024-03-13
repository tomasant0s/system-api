import { Router, Request, Response} from 'express';
import { CreateUsuarioController } from './controllers/usuario/CreateUsuarioController';

const router = Router();

//Rotas de Usuario
router.post('/user', new CreateUsuarioController().handle)

export { router };