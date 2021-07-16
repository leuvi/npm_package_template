# npm包构建模板


## npm相关命令

```sh
npm login
npm publish
npm unpublish
```

## FAQ

npm登录不了请切换npm源
```sh
npm config set registry http://registry.npmjs.org 
```

只有在发包的24小时内才允许撤销发布的包
即使你撤销了发布的包，发包的时候也不能再和被撤销的包的名称和版本重复了