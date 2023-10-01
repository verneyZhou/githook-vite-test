#! /bin/sh -e

cat >> /etc/nginx/conf.d/default.conf <<EOF
 
  server {
    listen      80;
    gzip on;
    gzip_min_length 1k;
    gzip_buffers 4 16k;
    #gzip_http_version 1.0;
    gzip_comp_level 2;
    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
    gzip_vary off;
    gzip_disable "MSIE [1-6].";

    proxy_read_timeout 600;

    location / {
        add_header Access-Control-Allow-Origin *;
        add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
        add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';
        if (\$request_filename ~* .*\.(?:htm|html)$) 
		    {
			    add_header Cache-Control "private, no-store, no-cache, must-revalidate, proxy-revalidate";
		    }

        root /app/www/;
        index index.html;
        client_max_body_size  500m;
    }

    location /api {
        proxy_pass  $SERVER_URL;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
    }

    location /file/ {
        proxy_pass $FILE_URL;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
    }
 }

EOF

echo "starting web server"

nginx -g 'daemon off;'


# 为啥这里要写一个shell脚本而不是直接把配置复制到nginx中呢，是因为加了后端服务和文件服务的反向代理，为了不把反向代理的地址写死，（就是上面的$SERVER_URL和 $FILE_URL）我们需要使用环境变量，然后只能在shell脚本中才能使用环境变量，这两个环境变量在后面docker-compose里面去配置。

# if (\$request_filename ~* .*\.(?:htm|html)$)这一段配置是设置html文件不缓存，这样我们每次发布后，别人就不用清缓存后才能访问新的内容。html文件很小，所以只把html设置不缓存完全没问题，至于其他js，每次打包过后如果js文件有变化，他对应的hash也会变，如果文件内容不变，使用老的缓存也没问题。
