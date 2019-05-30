# create new user
adduser sammy

# add user permission
usermod -aG sudo sammy

# copy ssh pub key
ssh-copy-id sammy@your_server_ip

# Disable password auth
vim /etc/ssh/sshd_config

PasswordAuthentication no
