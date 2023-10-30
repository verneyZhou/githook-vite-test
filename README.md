# Vue 3 + Vite + Github Actions

![CI](https://github.com/verneyZhou/githook-vite-test/actions/workflows/ci.yml/badge.svg)

![CD](https://github.com/verneyZhou/githook-vite-test/actions/workflows/git-page.yml/badge.svg)

这是一个github actions的测试项目~


## 构建 

node v16+

- npm create vite@latest

- npm install

- npm run dev


## 部署

### git push 自动部署到 git page

- main 分支 `git push`之后，就会自动执行ci: `.github/workflows/git-page.yml`；

- 它会自动执行`run build`，然后切换到`feature/git-page`分支，把打包后的`dist`目录拷贝到根目录下，最后`push`上去；

- 之后就可以在`https://verneyzhou.github.io/githook-vite-test`直接访问了~

> 第三方部署GitPage脚本 `JamesIves/github-pages-deploy-action@3.7.1`: https://github.com/JamesIves/github-pages-deploy-action


- 添加自动生成压缩包并发版

### git push 自动部署到阿里云服务器

- feature/git-aliyun 分支 `git push`后，自动执行 `aliyun-deploy.yml`


> 第三方部署阿里云服务器脚本 `easingthemes/ssh-deploy@main`: https://github.com/easingthemes/ssh-deploy




### 配置代码规范校验

- eslint + prettier


- `ci.yml`
> 每次代码提交都会执行~


- 添加husky: 每次commit之前强制校验代码格式~

- 添加Commitlint规范: git commit -m"feat: submit"

[@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)


- 单元测试：[vitest](https://cn.vitest.dev/guide/coverage.html)



### 添加回滚机制

- `rollback.yml`



### 添加Docker部署

- 在`feature/docker`分支~

### 添加Vercel部署

- `main`分支`push`之后会自动部署vercel, 访问[githook-vite-test.vercel.app/](https://githook-vite-test.vercel.app/)~