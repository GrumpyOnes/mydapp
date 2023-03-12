## mydapp 从 0 搭建一个 dapp 项目

1.创建 chain 包

```
mkdir chain
yarn init -y
yarn add hardhat
yarn hardhat

yarn hardhat node
```

2.创建 app 包

```
npx create-react-app app --template typescript

//prettier eslint 参考 https://www.jb51.net/article/253083.htm
yarn add -D prettier eslint
yarn add -D eslint-config-prettier eslint-plugin-prettier
...
npm init @eslint/config
修正：yarn add stylelint stylelint-config-standard stylelint-config-prettier stylelint-order -D

//安装antd
参考：https://ant.design/docs/react/use-in-typescript-cn

//安装react-router-config https://blog.csdn.net/qq_41732963/article/details/124235655
yarn add react-router-dom react-router-config
```

3.app 项目安装 ethers

```
yarn add ethers
启用本地测试链  test账户
```

4.chain 项目准备 erc20 文件

```
yarn add @openzeppelin/contracts

yarn hardhat compile //编译
yarn hardhat run scripts/deploy_erc20.ts --network localhost //发布 获得address  0x5FbDB2315678afecb367f032d93F642f64180aa3

yarn add @ethersproject/abstract-provider
```

nonce to high。 重置 metamask

5.安装 prism 语法高亮 https://maqib.cn/blog/prism-react-renderer

```
yarn add prismjs

yarn add --dev babel-plugin-prismjs
```

5.增加 jest 测试 使用 react-testing-library +jest

```
参考https://www.bilibili.com/video/BV1q3411H7QZ/?spm_id_from=333.337.search-card.all.click&vd_source=e0bbfc8b01ba72da4777bdf82ed0835a
https://www.cnblogs.com/testopsfeng/p/14265218.html
https://blog.51cto.com/u_15098004/2611169

act()
```

6.安装 craco

```
参考https://xie.infoq.cn/article/2cb2a9a8b9e0f812ed02f6ec4
https://blog.csdn.net/weixin_39628498/article/details/112291955
yarn add @craco/craco -D
yarn add craco-less -D
配置splitChunks
yarn add babel-plugin-import -D  按需引入
yarn add hard-source-webpack-plugin -D 构建速度优化 //版本问题不可用
yarn add webpackbar -D
yarn add circular-dependency-plugin -D

env NODE_ENV=production //此时报错 https://github.com/DocSpring/craco-less/issues/30
```

7.安装 redux-toolkit

```
yarn add @reduxjs/toolkit react-redux
// 安装 redux 开发工具 redux-devtools
yarn add redux-devtools -D
//chrome安装 redux-devtools
``` 
