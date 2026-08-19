INSERT INTO hospital (name, address, city, phone, email)
VALUES (
    'Spitalul Clinic Judetean Cluj',
    'Str. Clinicilor 3',
    'Cluj-Napoca',
    '0264-111-111',
    'contact@scjc.ro'
);

INSERT INTO building (hospital_id, name, description)
VALUES
(
    (SELECT id FROM hospital WHERE name = 'Spitalul Clinic Judetean Cluj'),
    'Corpul A',
    'Ambulatoriu si cabinete'
),
(
    (SELECT id FROM hospital WHERE name = 'Spitalul Clinic Judetean Cluj'),
    'Corpul B',
    'Sectii de internare'
);

INSERT INTO floor (building_id, floor_number, name, map_path)
VALUES
(
    (SELECT id FROM building WHERE name = 'Corpul A'),
    0,
    'Parter',
    '/maps/hospital-1/demo/floor-0.svg'
),
(
    (SELECT id FROM building WHERE name = 'Corpul A'),
    1,
    'Etaj 1',
    '/maps/hospital-1/demo/floor-1.svg'
),
(
    (SELECT id FROM building WHERE name = 'Corpul B'),
    0,
    'Parter',
    '/maps/hospital-1/demo/floor-b0.svg'
);

INSERT INTO department (hospital_id, name, description)
VALUES
(
    (SELECT id FROM hospital WHERE name = 'Spitalul Clinic Judetean Cluj'),
    'Cardiologie',
    'Sectia de cardiologie'
),
(
    (SELECT id FROM hospital WHERE name = 'Spitalul Clinic Judetean Cluj'),
    'Neurologie',
    'Sectia de neurologie'
),
(
    (SELECT id FROM hospital WHERE name = 'Spitalul Clinic Judetean Cluj'),
    'Radiologie',
    'Imagistica medicala'
),
(
    (SELECT id FROM hospital WHERE name = 'Spitalul Clinic Judetean Cluj'),
    'Pediatrie',
    'Sectia pentru copii'
);

INSERT INTO room
(
    floor_id,
    department_id,
    number,
    name,
    description,
    svg_element_id
)
VALUES
(
    (SELECT id FROM floor WHERE floor_number = 1 AND building_id = (SELECT id FROM building WHERE name = 'Corpul A')),
    (SELECT id FROM department WHERE name = 'Cardiologie'),
    '101',
    'Cabinet Cardiologie',
    'Consultatii',
    'room-101'
),
(
    (SELECT id FROM floor WHERE floor_number = 1 AND building_id = (SELECT id FROM building WHERE name = 'Corpul A')),
    (SELECT id FROM department WHERE name = 'Neurologie'),
    '102',
    'Cabinet Neurologie',
    'Consultatii',
    'room-102'
),
(
    (SELECT id FROM floor WHERE floor_number = 1 AND building_id = (SELECT id FROM building WHERE name = 'Corpul A')),
    (SELECT id FROM department WHERE name = 'Radiologie'),
    '103',
    'Radiologie',
    'Radiografie',
    'room-103'
),
(
    (SELECT id FROM floor WHERE floor_number = 1 AND building_id = (SELECT id FROM building WHERE name = 'Corpul A')),
    (SELECT id FROM department WHERE name = 'Pediatrie'),
    '104',
    'Pediatrie',
    'Consultatii copii',
    'room-104'
);

INSERT INTO doctor
(
    department_id,
    room_id,
    first_name,
    last_name,
    title,
    email,
    phone
)
VALUES
(
    (SELECT id FROM department WHERE name = 'Cardiologie'),
    (SELECT id FROM room WHERE number = '101'),
    'Andrei',
    'Popescu',
    'Medic Primar',
    'andrei.popescu@medimap.ro',
    '0722000001'
),
(
    (SELECT id FROM department WHERE name = 'Neurologie'),
    (SELECT id FROM room WHERE number = '102'),
    'Maria',
    'Ionescu',
    'Medic Specialist',
    'maria.ionescu@medimap.ro',
    '0722000002'
),
(
    (SELECT id FROM department WHERE name = 'Radiologie'),
    (SELECT id FROM room WHERE number = '103'),
    'Ioana',
    'Georgescu',
    'Medic Primar',
    'ioana.georgescu@medimap.ro',
    '0722000003'
),
(
    (SELECT id FROM department WHERE name = 'Pediatrie'),
    (SELECT id FROM room WHERE number = '104'),
    'Alex',
    'Dumitrescu',
    'Medic Specialist',
    'alex.dumitrescu@medimap.ro',
    '0722000004'
);