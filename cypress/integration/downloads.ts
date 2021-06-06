import { URL_DEVELOPER, URL_STORAGE } from '../urls';

describe('downloads.actyx.com', () => {
  const FOLDER = {
    android: '/android/',
    win64: '/win64/',
    mac: '/mac/',
    x64: '/x64/',
    aarch64: '/aarch64/',
    arm: '/arm/',
  };
  it('should check if artifact file names and extensions are valid', () => {
    cy.visit(URL_DEVELOPER);
    cy.get('a').then((x) => {
      const hrefs = x
        .toArray()
        .map((x) => x.href)
        .filter((x) => x !== '')
        .filter((x) => x.startsWith(URL_STORAGE));

      // os android
      const androids = hrefs.filter((x) => x.includes(FOLDER.android));
      androids.forEach((x) => {
        expect(x.endsWith(`${FOLDER.android}actyxos.apk`)).to.eq(true);
      });

      // os win64
      const win64s = hrefs.filter((x) => x.includes(FOLDER.win64));
      win64s.forEach((x) => {
        expect(x.endsWith(`${FOLDER.win64}ax.exe`)).to.eq(true);
      });

      // mac ax
      const macs = hrefs.filter((x) => x.includes(FOLDER.mac));
      macs.forEach((x) => {
        expect(x.endsWith(`${FOLDER.mac}ax`)).to.eq(true);
      });

      // ax linux 64
      const linux64s = hrefs.filter((x) => x.includes(FOLDER.x64));
      linux64s.forEach((x) => {
        expect(x.endsWith(`${FOLDER.x64}ax`)).to.eq(true);
      });

      // ax aarch64
      const aarch64s = hrefs.filter((x) => x.includes(FOLDER.aarch64));
      aarch64s.forEach((x) => {
        expect(x.endsWith(`${FOLDER.aarch64}ax`)).to.eq(true);
      });

      // ax arm
      const arm64x = hrefs.filter((x) => x.includes(FOLDER.arm));
      arm64x.forEach((x) => {
        expect(x.endsWith(`${FOLDER.arm}ax`)).to.eq(true);
      });
    });
  });
});
