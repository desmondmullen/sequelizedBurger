drop database if exists km8fo0k3zvnlehjq;
create database km8fo0k3zvnlehjq;

use km8fo0k3zvnlehjq;

create table Customers
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

    create table Burgers
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

        USE km8fo0k3zvnlehjq;

        INSERT INTO Customers
            (customer_name)
        VALUES
            ('Desmond'),
            ('Vivian'),
            ('Angie'),
            ('Peter'),
            ('Liam')
        ;

        INSERT INTO Burgers
            (burger_name, maker)
        VALUES
            ('Yum Burger', 'Angie'),
            ('Zippy Burger', 'Peter'),
            ('Wow Burger', 'Desmond'),
            ('Zoinks Burger', 'Liam'),
            ('Unbeliev-O Burger', 'Desmond')
        ;