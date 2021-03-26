const path = require('path')
const { runSlsCommand, clearNpmCache, errorRegex } = require("../helpers");

beforeEach(async () => {
  await clearNpmCache(__dirname);
});

afterAll(async () => {
  await clearNpmCache(__dirname);
});

test("nested-service", async () => {
  try {
    const result = await runSlsCommand(path.resolve(__dirname, 'services', 'main'));

    expect(result).not.toMatch(errorRegex);
  } catch (err) {
    console.error(err)
  }
}, 300000);
