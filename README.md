Install

```shell
docker-compose run yarn install
git config user.email "$(git config --global user.email)"
git config user.name "$(git config --global user.name)"
```

Use

`docker-compose run app start`
or
`docker-compose run app build`

`docker-compose run yarn workspaces run clean`
