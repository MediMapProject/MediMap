CREATE TABLE hospital (
    id BIGSERIAL PRIMARY KEY,

    name VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    city VARCHAR(100),

    phone VARCHAR(50),
    email VARCHAR(255)
);

CREATE TABLE building (
    id BIGSERIAL PRIMARY KEY,
    hospital_id BIGINT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,

    CONSTRAINT fk_building_hospital
        FOREIGN KEY (hospital_id)
        REFERENCES hospital(id)
);

CREATE TABLE floor (
    id BIGSERIAL PRIMARY KEY,
    building_id BIGINT NOT NULL,
    floor_number INTEGER NOT NULL,
    name VARCHAR(255),
    map_path VARCHAR(500),

    CONSTRAINT fk_floor_building
        FOREIGN KEY (building_id)
        REFERENCES building(id)
);

CREATE TABLE department (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);

CREATE TABLE room (
    id BIGSERIAL PRIMARY KEY,
    floor_id BIGINT NOT NULL,
    department_id BIGINT,
    number VARCHAR(50) NOT NULL,
    name VARCHAR(255),
    description TEXT,
    svg_element_id VARCHAR(255) NOT NULL,

    CONSTRAINT fk_room_floor
        FOREIGN KEY (floor_id)
        REFERENCES floor(id),

    CONSTRAINT fk_room_department
        FOREIGN KEY (department_id)
        REFERENCES department(id)
);

CREATE TABLE doctor (
    id BIGSERIAL PRIMARY KEY,
    department_id BIGINT NOT NULL,
    room_id BIGINT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    title VARCHAR(100),
    email VARCHAR(255),
    phone VARCHAR(50),

    CONSTRAINT fk_doctor_department
        FOREIGN KEY (department_id)
        REFERENCES department(id),

    CONSTRAINT fk_doctor_room
        FOREIGN KEY (room_id)
        REFERENCES room(id)
);