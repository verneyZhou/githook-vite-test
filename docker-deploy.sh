
#deploy.sh

docker pull verneyzhou/githook-vite-test  # 拉取镜像
docker stop githook-test-container  # 停止容器
docker rm githook-test-container  # 删除容器
docker run -d -p 8397:80 --name githook-test-container verneyzhou/githook-vite-test  # 运行容器

# 清除一下没有使用的容器和镜像
# docker image prune -f
# docker container prune -f
