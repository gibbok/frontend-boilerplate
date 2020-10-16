const developer = `${process.env.AX_WEB_E2E_DEVELOPER}/docs/home/home`;
const main = process.env.AX_WEB_E2E_MAIN;
const download = process.env.AX_WEB_E2E_DOWNLOAD;

export const SETTINGS = {
  prod: {
    developer: 'https://developer.actyx.com/docs/home/welcome',
    main: 'https://www.actyx.com',
    download: 'https://downloads.actyx.com',
  },
  dev: {
    developer,
    main,
    download,
  },
};
