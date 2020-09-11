export const mkRandomString = (): string =>
  Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substr(0, 5);

export const mkRandomEmail = (): string => `${mkRandomString()}@actyx.io`;
