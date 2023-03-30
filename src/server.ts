import express from 'express';
const cors = require('cors');
import path from 'path';

import dbConnector from './data-access';
import { DayRouter, EmployeeRouter } from './routes';

class ServerModel {
    private origin
    private port
    app
    constructor() {
        this.origin = 'http://localhost:8080';
        this.app = express();
        this.port = process.env.PORT;

        this.dbConnector();

        this.middlewares();

        this.routes();
    }

    async dbConnector() {
        await dbConnector();
    }

    middlewares() {
        this.app.use(express.static('docs'));
        this.app.use(express.json());
        this.app.use(cors({
            credentials: true,
            origin: this.origin,
        }));
    }

    routes() {
        this.app.use("/api/user", EmployeeRouter)
        this.app.use("/api/day", DayRouter)
        this.app.get('/*', (req, res) => {
            res.sendFile(path.join(__dirname, '../docs/index.html'), (err) => {
                if (err) {
                    res.status(500).send(err);
                }
            });
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Listening at', this.port);
        });
    }
}

export default ServerModel;