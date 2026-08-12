CREATE TABLE hospital (
    id BIGSERIAL PRIMARY KEY,

    name VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    city VARCHAR(100),

    phone VARCHAR(50),
    email VARCHAR(255)
);