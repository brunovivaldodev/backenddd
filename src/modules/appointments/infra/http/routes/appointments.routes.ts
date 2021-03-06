import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsControllers from '../controllers/AppointmentControllers';

const appointmentsRouter = Router();
const appointmentsControllers = new AppointmentsControllers();
appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post('/', appointmentsControllers.create);

export default appointmentsRouter;
