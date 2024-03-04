

# Stage 1: 构建 Vue 项目
FROM node:18.19.0 AS build-stage
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2: 配置 Nginx 并将编译后的文件拷贝到 Nginx 的 HTML 目录下
FROM nginx:latest AS production-stage
COPY --from=build-stage /app/dist /etc/nginx/html/ingru-official-web
# 将 Nginx 配置拷贝到挂载卷上面去
COPY nginx.conf /etc/nginx/conf.d/default.conf
# 测试环境用8964端口
EXPOSE 8964
CMD ["nginx", "-g", "daemon off;"]
