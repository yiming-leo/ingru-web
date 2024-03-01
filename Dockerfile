FROM ubuntu:latest
LABEL authors="YimingLiao"

ENTRYPOINT ["top", "-b"]


# Stage 1: 构建 Vue 项目
FROM node:18.19.0 AS build-stage
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2: 配置 Nginx 并将编译后的文件拷贝到 Nginx 的 HTML 目录下
FROM nginx:latest AS production-stage
COPY --from=build-stage /app/dist /etc/nginx/html
# 如果有特殊的 Nginx 配置，也可以拷贝过来
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
