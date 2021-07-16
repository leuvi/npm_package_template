# npm包构建模板


## 相关命令

```sh
npm login      //npm登录
npm publish    //包上传
npm unpublish  //撤销发布的包
```

## FAQ

npm登录不了请切换npm源
```sh
npm config set registry http://registry.npmjs.org 
```

只有在发包的24小时内才允许撤销发布的包
即使你撤销了发布的包，发包的时候也不能再和被撤销的包的名称和版本重复了