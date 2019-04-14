
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
    (burger_name, customerMakerId, customerEaterId)
VALUES
    ('Yum Burger', 1, 1),
    ('Zippy Burger', 2, 2),
    ('Wow Burger', 3, 3),
    ('Zoinks Burger', 4, 4),
    ('Unbeliev-O Burger', 5, 5)
        ;