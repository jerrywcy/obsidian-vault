标签： 
# 环境
```bash
Distributor ID:	Ubuntu
Description:	Ubuntu 20.04.3 LTS
Release:	20.04
Codename:	focal

Docker version 20.10.7, build 20.10.7-0ubuntu1~20.04.1
```
# 报错信息
```bash
root@wcy-server:~/TTRSS# docker-compose up -d
Starting ttrss ... 
postgres is up-to-date
opencc is up-to-date
mercury is up-to-date
Starting ttrss ... error

ERROR: for ttrss  Cannot start service service.rss: driver failed programming external connectivity on endpoint ttrss (9af7c6f187507f5844e4c6e98cfdbdd636ce9f54ef4c4a57f7c2b66a09b7e0d8): Bind for 0.0.0.0:181 failed: port is already allocated

ERROR: for service.rss  Cannot start service service.rss: driver failed programming external connectivity on endpoint ttrss (9af7c6f187507f5844e4c6e98cfdbdd636ce9f54ef4c4a57f7c2b66a09b7e0d8): Bind for 0.0.0.0:181 failed: port is already allocated
ERROR: Encountered errors while bringing up the project.
```
# 原理
docker端口被占用。我也不知道什么原理，但是重启一遍docker就行了（摊手）
# 解决方案

```bash
systemctl restart docker
```

# References
- [docker 报错：driver failed programming external connectivity on endpoint_baobaoxiannv的博客-CSDN博客](https://blog.csdn.net/baobaoxiannv/article/details/96482560)