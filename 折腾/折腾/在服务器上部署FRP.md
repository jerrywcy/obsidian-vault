标签： 
# 下载

在[Releases · fatedier/frp · GitHub](https://github.com/fatedier/frp/releases)下载压缩文件并拷贝到服务器上即可。

# 配置文件

具体配置参见文档。

以下是我自己的配置文档：

`frps.ini`
```ini
[common]
bind_port = 10002
vhost_http_port = 10003
vhost_https_port = 10004
token = nmSRft!ygar8Uiw2s!$dfJgiuz
dashboard_port = 10001
dashboard_user = admin
dashboard_pwd = jerry0119
subdomain_host = wgnfls.xyz
```
`frpc.ini`
```ini
[common]
server_addr = 139.196.180.51
server_port = 10002
token = nmSRft!ygar8Uiw2s!$dfJgiuz

[ssh]
type = tcp
local_ip = 192.168.3.211
local_port = 22
remote_port = 10005

[StandardNotes_https]
type = https
local_port = 3001
subdomain = standardnotes

[StandardNotes_http]
type = http
local_port = 3001
subdomain = standardnotes

[TTRSS_http]
type = http
local_port = 181
subdomain = ttrss

[TTRSS_https]
type = https
local_port = 181
subdomain = ttrss
```

注意事项：
- 可以在`frps.ini`里面配置好`subdomain_host`，这样在`frpc.ini`里面只需要配置`subdomain`即可。
- 由于会和nginx的80，443端口冲突，因此需要将frp的`vhost_http_port`和`vhost_https_port`修改一下。
	- 目前我采用的方法是使用nginx反向代理代理到`http://127.0.0.1:10003`，但是这样的话会导致TTRSS链接识别出一些小问题。目前正在研究如何使用caddy反代。
- 本地的`token`要和远程的`token`一样
- 可以配置`dashboard_*`项来开启管理面板。

# 运行

> 以下以frpc为例，frps也是一样的。

首先把`frpc`移到`/usr/bin`下，这样可以直接通过命令行调用

```bash
cp frpc /usr/bin/frpc
```

注意在运行的时候说明配置文件地址：

```bash
frpc -c frpc.ini
```

即可

# 使用systemd开机自启动

在`/lib/systemd/system/`下创建`frpc.service`

（当然也可以在下载文件中的`system`文件夹下找到样例根据需要进行修改）

```ini
[Unit]
Description=Frp Client Service
After=network.target

[Service]
Type=simple
User=nobody
Restart=on-failure
RestartSec=5s
ExecStart=/usr/bin/frpc -c /usr/local/frp/frpc.ini
ExecReload=/usr/bin/frpc reload -c /usr/local/frp/frpc.ini
LimitNOFILE=1048576

[Install]
WantedBy=multi-user.target
```

```ad-warning
title: 注意
如果依然想使用80端口，则需要将`User=nobody`一行删去。
```

使用服务：

```bash
systemctl start frpc # 开启服务
systemctl status frpc # 查看服务运行状态
systemctl enable frpc # 设置开机自启动
```

# 遇到的报错
- 

# Reference
- [文档 | frp](https://gofrp.org/docs/)
- [自己动手部署内网穿透：frp - 知乎](https://zhuanlan.zhihu.com/p/341551501)