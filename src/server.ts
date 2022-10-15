import express from 'express';
import bodyParser from 'body-parser';
import { filterImageFromURL, deleteLocalFiles } from './util/util';
import { IndexRouter } from './controller/V0/image/index.router';

(async () => {
    // Init the Express application
    const app = express();

    // Set the network port
    const port: string = process.env.PORT || '8082';

    // Use the body parser middleware for post requests
    app.use(bodyParser.json());

    app.use('/api/v0', IndexRouter);

    app.get('/', async (req, res) => {
        res.send('/api/v0');
    });

    // Start the Server
    app.listen(port, () => {
        console.log(`server running http://localhost:${port}`);
        console.log(`press CTRL+C to stop server`);
    });
})();
