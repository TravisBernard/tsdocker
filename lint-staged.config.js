const prettier = "yarn prettier --write";
const typecheck = () => "yarn tsc --noEmit";

module.exports = {
    "*.{ts,tsx}": [prettier, typecheck],
    "*.{graphql,yml,md,scss,js,jsx}": [prettier],
};
