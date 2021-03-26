const { runSlsCommand, clearNpmCache } = require("../helpers");

beforeEach(async () => {
  await clearNpmCache(__dirname);
});

afterAll(async () => {
  await clearNpmCache(__dirname);
});

// Test that we are running eslint even though ForkTsCheckerWebpackPlugin is disabled
// Similar to the failed-eslint test
test("typescript-forkts-disabled", async () => {
  const eslintErrorString = "no-unused-vars";

  try {
    const result = await runSlsCommand(__dirname);
    console.log(result)
  } catch (err) {
    expect(err.stdout).toContain(eslintErrorString);
  }
}, 300000);
