drop database if exists sequelizedBurger_db;
create database sequelizedBurger_db;

use sequelizedBurger_db;

create table customers
(
    id integer not null
    auto_increment,
customer_name varchar
    (50) not null,
    display_this_name boolean not null default 0,
primary key
    (id)
);

    create table burgers
    (
        id integer not null
        auto_increment,
burger_name varchar
        (50) not null,
devoured boolean not null default 0,
last_one_devoured boolean
not null default 0,
customerMakerId int not null default 0,
customerEaterId int not null default 0,
FOREIGN KEY
        (customerMakerId) REFERENCES Customers
        (id),
FOREIGN KEY
        (customerEaterId) REFERENCES Customers
        (id),
primary key
        (id)
);
