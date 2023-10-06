
#!/usr/bin/env sh

echo -e "---------docker Login--------"
docker login -u $1  -p $2 # 这个是yml文件最后一行所传递的参数，你docker的用户名和密码

echo -e "---------docker Pull--------"
docker pull verneyzhou/githook-vite-test  # 拉取镜像, 如果没有指定tag就会默认是latest

# 如果已经有同名的容器，删除掉
if [ "$(docker ps -aq -f name=githook-aliyun-container)" ]; then
  echo 'docker rm ...'
  docker stop githook-aliyun-container  # 停止容器
  docker rm githook-aliyun-container  # 删除容器
fi


echo -e "---------docker Create and Start--------"
docker run -d -p 8397:80 --name githook-aliyun-container verneyzhou/githook-vite-test:latest  # 运行容器

echo -e "---------deploy Clear--------"
# 清除一下没有使用的容器和镜像
docker image prune -f
docker container prune -f

echo -e "---------deploy Success---!!!!-----"