flush hosts;

show master status\G

show slave status\G

stop slave
CHANGE MASTER TO MASTER_LOG_FILE='mysql-bin-changelog.003142', MASTER_LOG_POS=250708;
start slave

