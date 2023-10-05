
#!/usr/bin/env sh

docker login -u verneyzhou -p 20230725zy # 登录docker
docker pull verneyzhou/githook-vite-test  # 拉取镜像, 如果没有指定tag就会默认是latest
docker stop githook-aliyun-container  # 停止容器
docker rm githook-aliyun-container  # 删除容器
docker run -d -p 8397:80 --name githook-aliyun-container verneyzhou/githook-vite-test  # 运行容器

# 清除一下没有使用的容器和镜像
# docker image prune -f
# docker container prune -f
