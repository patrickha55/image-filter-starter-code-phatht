import { Router, Request, Response } from 'express';
import { ImageRouter } from './routes/image.router';

const router: Router = Router();

router.use('/', ImageRouter);

// Root Endpoint
// Displays a simple message to the user
router.get('/', async (req: Request, res: Response) => {
    res.send('try GET /filteredimage?image_url={{}}');
});

export const IndexRouter: Router = router;
