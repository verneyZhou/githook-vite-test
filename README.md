# Vue 3 + Vite + Github Actions


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



### git push 自动部署到阿里云服务器

- feature/git-aliyun 分支 `git push`后，自动执行 `aliyun-deploy.yml`


> 第三方部署阿里云服务器脚本 `easingthemes/ssh-deploy@main`: https://github.com/easingthemes/ssh-deploy




### 配置代码规范校验


eslint + prettier


`ci.yml`


- 添加husky

- 添加Commitlint规范





