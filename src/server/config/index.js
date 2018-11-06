import staticConfig from './static';

const PORT = process.env.PORT || staticConfig.WEB_SERVER.PORT;

export { PORT };
