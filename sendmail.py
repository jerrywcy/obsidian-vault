import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.image import MIMEImage
import argparse
from pathlib import Path

parser = argparse.ArgumentParser()
parser.add_argument('path')
args = parser.parse_args()

#设置登录及服务器信息
mail_host = 'smtp.163.com'
mail_user = 'jerrymonkeynj'
mail_pass = 'password'
sender = 'jerrymonkeynj@163.com'
receivers = ['jerrymonkeynj@163.com']

message = MIMEMultipart()
message['From'] = sender
message['To'] = receivers[0]

path=args.path;
while "\\" in path:
    path.replace("\\","")
path=Path(path)

print("File Path:"+path.absolute())
message['Subject'] = path.name[0:-3]
with open(path,'r',encoding='utf-8') as f:
    content = f.read()
part = MIMEText(content,'plain','utf-8')
message.attach(part)

#登录并发送
try:
    smtpObj = smtplib.SMTP()
    smtpObj.connect(mail_host,25)
    smtpObj.login(mail_user,mail_pass)
    smtpObj.sendmail(sender,receivers,message.as_string())
    print('success')
    smtpObj.quit()
except smtplib.SMTPException as e:
    print('error',e)