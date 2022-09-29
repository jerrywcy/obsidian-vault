标签： 
# 环境
Ubuntu 20.04

# 安装

```bash
sudo apt install openssh-client openssh-client
```

# 配置

打开`/etc/ssh/sshd_config`

`#PasswordAuthentication yes`去掉#
![[Attachments/Pasted image 20210826160452.png]]
`#PermitRootLogin prohibit-password`改成`PermitRootLogin yes`
![[Attachments/Pasted image 20210826160515.png]]
如果需要改端口就改一下`#Port 22`
![[Attachments/Pasted image 20210826160733.png]]
然后重启服务
```bash
sudo /etc/init.d/ssh restart
```
可以顺手查看一下服务运行状态
```bash
sudo /etc/nit.d/ssh status
```
![[Attachments/Pasted image 20210826160831.png]]
# Reference
- [Ubuntu安装和配置ssh教程_future_ai的博客-CSDN博客_ubuntu安装ssh](https://blog.csdn.net/future_ai/article/details/81701744)