INSERT INTO lookup
(
    id,
    parent_id,
    category,
    name
)
VALUES
(
    gen_random_uuid(),
    NULL,
    'DOCTOR_TITLE',
    'Medic'
);

INSERT INTO lookup
(
    id,
    parent_id,
    category,
    name
)
VALUES
(
    gen_random_uuid(),
    (
        SELECT id
        FROM lookup
        WHERE category = 'DOCTOR_TITLE'
          AND name = 'Medic'
    ),
    'DOCTOR_TITLE',
    'Medic Primar'
),
(
    gen_random_uuid(),
    (
        SELECT id
        FROM lookup
        WHERE category = 'DOCTOR_TITLE'
          AND name = 'Medic'
    ),
    'DOCTOR_TITLE',
    'Medic Specialist'
),
(
    gen_random_uuid(),
    (
        SELECT id
        FROM lookup
        WHERE category = 'DOCTOR_TITLE'
          AND name = 'Medic'
    ),
    'DOCTOR_TITLE',
    'Medic Rezident'
);

ALTER TABLE doctor
ADD COLUMN title_id UUID;

UPDATE doctor d
SET title_id =
(
    SELECT l.id
    FROM lookup l
    WHERE l.category = 'DOCTOR_TITLE'
      AND l.name = d.title
);

ALTER TABLE doctor
ADD CONSTRAINT fk_doctor_title
FOREIGN KEY (title_id)
REFERENCES lookup(id)
ON DELETE RESTRICT;

CREATE INDEX idx_doctor_title
ON doctor(title_id);