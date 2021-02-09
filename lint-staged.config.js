const prettier = "yarn prettier --write";
const typecheck = () => "yarn tsc --noEmit";
const test = "yarn run test:fast";

module.exports = {
    "*.{ts,tsx}": [prettier, typecheck, test],
    "*.{graphql,yml,md,scss,js,jsx,json}": [prettier, test],
};
