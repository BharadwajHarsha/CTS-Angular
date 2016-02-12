
create database pm;
use pm;

create table pm.PRODUCTS(
id int primary key,
name varchar(256),
price double,
description varchar(256),
make date
);

insert into pm.PRODUCTS values(3423423,'Laptop',148000,'new model',null);
insert into pm.PRODUCTS values(4646456,'Mobile',48000,'new model',null);

select * from pm.PRODUCTS;