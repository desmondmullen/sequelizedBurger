use km8fo0k3zvnlehjq;

create table burgers
(
    id integer not null
    auto_increment,
burger_name varchar
    (50) not null,
devoured boolean not null default 0,
last_one_devoured boolean
not null default 0,
createdAt TIMESTAMP default CURRENT_TIMESTAMP,
updatedAt TIMESTAMP,
primary key
    (id)
);