const yarnish = `docker-compose run yarn`
const yarnInstallFrozenLockfile = `${yarnish} install --frozen-lockfile;`

module.exports = {
   hooks: {
      "post-checkout": `if [[ $HUSKY_GIT_PARAMS =~ 1$ ]]; then ${yarnInstallFrozenLockfile}; fi`,
      "post-merge": yarnInstallFrozenLockfile,
      "post-rebase": `${yarnish} install`,
      // "pre-commit": `${yarnish} lint-staged`,
      "pre-commit": `${yarnish} tsc --noEmit`,
   },
};
