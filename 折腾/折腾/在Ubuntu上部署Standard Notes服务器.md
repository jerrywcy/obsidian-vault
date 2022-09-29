标签： 
# 环境需求

```plaintext
docker-compose
docker
```

推荐在root下安装（这可真少见）

# 搭建

## 从Git克隆项目

```bash
$ cd ~
$ git clone --single-branch --branch main https://github.com/standardnotes/standalone.git
$ cd standalone
```

## 初始化配置文件

```bash
$ ./server.sh setup
```

## 自定义配置文件

### 必配

有四个环境变量必须要改成自己生成的秘钥：

- `.env`文件中的`AUTH_JWT_SECRET`
- `docker/auth.env`文件中的`JWT_SECRET`,`LEGACY_JWT_SECRET`和`ENCRYPTION_SERVER_KEY`
- 
你可以通过`openssl`生成秘钥：

```bash
$ ./server.sh setup
```

```ad-info
title: 注意
当docker正在运行时，环境变量的改动并不能实时反映到客户端。如果要修改环境变量，请重启docker。

```
### 选配

同步服务器默认运行在3000端口。如果你想修改默认端口，请修改`.env`文件中的`EXPOSED_PORT`项。

## 简单运行
```bash
$ ./server.sh start
```
这样应该就行了
```ad-info
title: 注意
第一次运行可能需要一段时间来下载docker镜像和初始化数据库。
```

## 等待架构搭建

你需要等待各种架构的搭建和附属服务启动。在这个过程中，你可以通过输入以下命令观察进度：

```bash
$ ./server.sh logs
```

如果观察到以下语句，则说明`API Gateway`已经顺利启动，服务器已经在正常运转：

```bash
$ api-gateway_1 | {"message":"Server started on port 3000","level":"info"}
```

## 从本地测试服务是否已经上线

```bash
$ curl http://localhost:3000/healthcheck
OK
```

```ad-info
title: 注意
如果你自己修改了端口，则需要到localhost的对应端口访问。
```

# 建立HTTPS

尽管可以使用[Certbot](https://certbot.eff.org/instructions)来获取HTTPS证书，但是那还需要自己安装Nginx。

所以我选择直接[[折腾/折腾/在服务器上部署FRP|内网穿透]]然后用服务器搞定SSL证书（摊手）


# Reference
- [Self-hosting with Docker | Standard Notes Documentation](https://docs.standardnotes.com/self-hosting/docker/)