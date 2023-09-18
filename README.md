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



### git push 自动部署到阿里云服务器

- feature/git-aliyun 分支 `git push`后，自动执行 `aliyun-deploy.yml`

