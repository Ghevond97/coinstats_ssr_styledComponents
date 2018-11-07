import staticConfig from './static';

const PORT = process.env.PORT || staticConfig.WEB_SERVER.PORT;
const HOST = staticConfig.DB.HOST;
export { PORT, HOST };
