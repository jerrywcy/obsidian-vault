标签：
# 环境
```bash
Distributor ID:	Ubuntu
Description:	Ubuntu 20.04.3 LTS
Release:	20.04
Codename:	focal
```
# 报错信息
```bash
root@wcy-server:~/standalone# ./server.sh start
Starting up infrastructure
ERROR: Version in "./docker-compose.yml" is unsupported. You might be seeing this error because you're using the wrong Compose file version. Either specify a supported version (e.g "2.2" or "3.3") and place your service definitions under the `services` key, or omit the `version` key and place your service definitions at the root of the file to use version 1.
For more on the Compose file format versions, see https://docs.docker.com/compose/compose-file/
```
# 原理
docker-compose版本过低，无法处理3.8版本的语法。
# 解决方案
到[Install Docker Compose | Docker Documentation](https://docs.docker.com/compose/install/)安装最新版本的docker-compose。
```bash
$ sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```
然后修改权限
```bash
$ sudo chmod +x /usr/local/bin/docker-compose
```
即可。
# Reference
- [docker-compose升级 - 自在拉基 - 博客园](https://www.cnblogs.com/98record/p/13964298.html)