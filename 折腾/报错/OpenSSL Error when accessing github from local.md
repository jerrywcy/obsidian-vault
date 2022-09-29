标签：
## 环境
```bash
git version 2.34.1.windows.1
```
## 报错信息
```bash
PS C:\Users\Administrator\Documents> git clone https://github.com/flutter/flutter.git -b stable
Cloning into 'flutter'...
fatal: unable to access 'https://github.com/flutter/flutter.git/': OpenSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443
```
## 原理
- 代理问题
## 解决方案

```bash
PS C:\Users\Administrator\Documents> git config --global --unset http.proxy
PS C:\Users\Administrator\Documents> git config --global --unset http.proxy
```

## References
- [OpenSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443_黄雄进的博客-CSDN博客](https://blog.csdn.net/HuangXiongjin/article/details/113941907)