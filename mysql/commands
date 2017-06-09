
show databases/tables;
create database db_name;
use db_name;
describe table_name;
drop db_name/tablename;


# dump schema
mysqldump -u username -p --no-data db_name > file.sql
# importing
mysql -u username -p dbname < file.sql


#create user and give permission to db
GRANT ALL ON database.* TO username@localhost IDENTIFIED BY 'password';

create table table_name(id int not null, name varchar(30) not null, primary key(id))


ALTER TABLE table_name ADD column varchar(30);
ALTER TABLE table_name ADD column varchar(30) AFTER name;
ALTER TABLE table_name ADD column varchar(30) FIRST;
alter table table_name drop primary key;
alter table table_name add primray key (key);
alter table table_name change id userid varchar(30);


# one table to another
update table1 set ms_no=(select ms from ms_ids where table1.ms_id=ms_ids.id and ms_ids.app_version='0.47') where app_version='0.47' and ms_no is null;

# select from 2 table
select max_milestone from table2 where current_app_version = '0.47' and max_milestone != (select max(ms_no) from table1 where table1.uid = table2.custom_id)

# Delete all tables
mysql -u username dbname -ppassword -e "show tables" | grep -v Tables_in | grep -v "#" | gawk '{print "drop table " $1 ";"}' | mysql -u username dbname -ppassword

# date interval
select count(*) from table3 where start_time > (now() - interval 20 hour);
