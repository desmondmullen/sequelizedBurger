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
    createdAt TIMESTAMP
default CURRENT_TIMESTAMP,
updatedAt TIMESTAMP,
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
maker varchar
        (50),
eater varchar
        (50),
        createdAt TIMESTAMP
default CURRENT_TIMESTAMP,
updatedAt TIMESTAMP,
primary key
        (id)
);

        USE sequelizedBurger_db;

        INSERT INTO customers
            (customer_name)
        VALUES
            ('Desmond'),
            ('Vivian'),
            ('Angie'),
            ('Peter'),
            ('Liam')
        ;

        INSERT INTO burgers
            (burger_name, maker)
        VALUES
            ('Yum Burger', 'Desmond'),
            ('Zippy Burger', 'Desmond'),
            ('Wow Burger', 'Desmond'),
            ('Zoinks Burger', 'Desmond'),
            ('Unbeliev-O Burger', 'Desmond')
        ;