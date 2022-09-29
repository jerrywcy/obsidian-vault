## 1. 把脚本放到库根目录下
## 2. 配置对应邮箱的SMTP服务和授权密码
各大邮箱配置方法都不太一样，以下以163为例，如果是其他邮箱请自行百度/bing/google
![[Attachments/Pasted image 20220326144750.png]]
然后在里面打开SMTP，配置自己的授权密码
## 3. 更改脚本特定数据
![[Attachments/Pasted image 20220326144200.png]]
如图，`mail_host`修改为你的邮箱host的smtp服务器地址（一般是`smtp.xxx.com`），`mail_user`设置为你的用户名（不带`@xx.com`），`mail_pass`填你在上一个环节里获得的授权密码，`sender`填你自己的邮箱（带`@xx.com`），`receivers`里面的`receiver@xx.com`也设置为你自己的邮箱（当然填别人的邮箱也可以，填好几个邮箱也可以，但是记得按照数组格式写）
## 4. 安装并配置shell command插件
![[Attachments/Pasted image 20220326145217.png]]
点击New Command，在输入框输入`python sendmail.py "{{file_path:absolute}}"`，然后自己改一下名字或者配置热键都行