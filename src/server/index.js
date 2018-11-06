import express from 'express';

import { PORT } from './config';
import { routers } from './controller';

const app = express();

app.use('*', routers());

app.listen(PORT, () => console.log(`Serving at http://localhost:${PORT}`));
