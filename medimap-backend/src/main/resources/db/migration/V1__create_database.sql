CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE hospital (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,

    phone VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL
);

CREATE TABLE building (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hospital_id UUID NOT NULL,

    name VARCHAR(255) NOT NULL,
    description TEXT,

    CONSTRAINT fk_building_hospital
        FOREIGN KEY (hospital_id)
        REFERENCES hospital(id)
        ON DELETE RESTRICT
);

CREATE TABLE floor (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    building_id UUID NOT NULL,

    floor_number INTEGER NOT NULL,
    name VARCHAR(255) NOT NULL,
    map_path VARCHAR(500) NOT NULL,

    CONSTRAINT fk_floor_building
        FOREIGN KEY (building_id)
        REFERENCES building(id)
        ON DELETE RESTRICT
);

CREATE TABLE department (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hospital_id UUID NOT NULL,

    name VARCHAR(255) NOT NULL,
    description TEXT,

    CONSTRAINT fk_department_hospital
        FOREIGN KEY (hospital_id)
        REFERENCES hospital(id)
        ON DELETE RESTRICT
);

CREATE TABLE room (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    floor_id UUID NOT NULL,
    department_id UUID,

    number VARCHAR(50) NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    svg_element_id VARCHAR(255) NOT NULL,

    CONSTRAINT fk_room_floor
        FOREIGN KEY (floor_id)
        REFERENCES floor(id)
        ON DELETE RESTRICT,

    CONSTRAINT fk_room_department
        FOREIGN KEY (department_id)
        REFERENCES department(id)
        ON DELETE SET NULL,

    CONSTRAINT uq_room_floor_number
        UNIQUE (floor_id, number)
);

CREATE TABLE doctor (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    department_id UUID NOT NULL,
    room_id UUID,

    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    title VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,

    CONSTRAINT fk_doctor_department
        FOREIGN KEY (department_id)
        REFERENCES department(id)
        ON DELETE RESTRICT,

    CONSTRAINT fk_doctor_room
        FOREIGN KEY (room_id)
        REFERENCES room(id)
        ON DELETE SET NULL
);