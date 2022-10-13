import { Router, Request, Response } from 'express';
import { deleteLocalFiles, filterImageFromURL } from '../../../../util/util';

const router: Router = Router();

//Filter an Image
router.get('/filteredimage', async (req : Request, res : Response) => {
    const { image_url } = req.query;

    if (!image_url) {
        return res.status(400).send('Invalid image url.');
    }

    var filteredImage: string = await filterImageFromURL(image_url);

    if (!filterImageFromURL) {
        return res.status(500).send('Something went wrong');
    }

    res.status(200).sendFile(filteredImage);

    return res.on('finish', () => {
        deleteLocalFiles([filteredImage]);
    });
});

export const ImageRouter: Router = router;