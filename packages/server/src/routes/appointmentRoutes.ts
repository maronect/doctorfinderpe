import { Router } from 'express';
import { 
    getAllAppointmentsController,
    createAppointmentController,
    getAppointmentByIdController,
    updateAppointmentController,
    deleteAppointmentController 
} from '../controllers/appointmentController';

const router = Router();

router.get('/', getAllAppointmentsController);
router.post('/', createAppointmentController);
router.get('/:id', getAppointmentByIdController);
router.put('/:id', updateAppointmentController);
router.delete('/:id', deleteAppointmentController);

export default router;