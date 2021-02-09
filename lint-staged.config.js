const typecheck = () => "yarn tsc --noEmit"

module.exports = {
   "*.{ts,tsx}": [typecheck],
}