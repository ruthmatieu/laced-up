CREATE DATABASE laced_up;

CREATE TABLE products(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    product_name VARCHAR(320) NOT NULL UNIQUE,
    gender VARCHAR(25) NOT NULL,
    product_image BYTEA,
    price INTEGER NOT NULL,
    qty INTEGER NOT NULL,
    color INTEGER NOT NULL,
    product_description TEXT NOT NULL
);

INSERT INTO products (
    product_name,
    gender,
    product_image,
    price,
    qty,
    color,
    product_description
)

VALUES ('Kyrie 7', 'male', null, 105, 25, 3, 'Basketball Shoe');