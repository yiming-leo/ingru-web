# Stage 1: 构建 Vue 项目
FROM node:18.19.0 AS build-stage
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2: 生成一对一的nginx（只为此项目服务）并配置项目，将配置全部打包到docker image中
FROM nginx:latest AS production-stage
# 并将编译后的dist拷贝到nginx的HTML目录下，名字为ingru-official-web
COPY --from=build-stage /app/dist /etc/nginx/html/ingru-official-web
# 将nginx.conf(其实是conf.d里的defualt.conf)拷贝到nginx的默认配置路径上去
COPY nginx.conf /etc/nginx/conf.d/default.conf
# 测试环境用8964端口，其实不开都行，因为docker run里面写了
EXPOSE 8964
CMD ["nginx", "-g", "daemon off;"]
