import { Request, Response } from 'express';

import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

class AppointmentsCntroller {
  public async create(req: Request, res: Response): Promise<Response> {
    const { provider_id, date } = req.body;

    const parsedDate = parseISO(date);

    const createAppointmentService = container.resolve(
      CreateAppointmentService,
    );

    const appointment = createAppointmentService.execute({
      provider_id,
      date: parsedDate,
    });

    return res.json(appointment);
  }
}
export default AppointmentsCntroller;
