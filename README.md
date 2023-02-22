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
