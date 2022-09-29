mariadb - Unable to create tables with ROW_FORMAT=COMPRESSED - Database Administrators Stack Exchange[[Attachments/Pasted image 20210828173311.png]]
```
Error while trying to initialise the database: An exception occurred while executing a query: SQLSTATE[HY000]: General error: 4047 InnoDB refuses to write tables with ROW_FORMAT=COMPRESSED or KEY_BLOCK_SIZE.
```
# 原理

据说是因为字符集的问题。

# 解决方案

在`docker-compose.yml`里面加上这一段就好了：

```yaml
command: [
	'--character-set-server=utf8mb4',
	'--collation-server=utf8mb4_unicode_ci',
	'--skip-character-set-client-handshake',
	'--skip-innodb-read-only-compressed'
]
```

# References
- [mariadb - Unable to create tables with ROW_FORMAT=COMPRESSED - Database Administrators Stack Exchange](https://dba.stackexchange.com/questions/256427/unable-to-create-tables-with-row-format-compressed)
- [docker-compose设置mysql初始化数据库的字符集_afc3275的博客-CSDN博客](https://blog.csdn.net/afc3275/article/details/101533348)
- [Databases – TechOverflow](https://techoverflow.net/category/technologies/databases/)
- [修改 Docker 和 docker-compose 下 MySQL 的默认字符集](https://www.gonever.com/post/148)