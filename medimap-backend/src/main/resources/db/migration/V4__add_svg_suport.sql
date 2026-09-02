UPDATE floor
SET map_path = '/maps/hospital-1/building-a/basement.svg'
WHERE building_id = (
    SELECT id
    FROM building
    WHERE name = 'Corpul A'
)
AND floor_number = 0;

UPDATE floor
SET map_path = '/maps/hospital-1/building-a/floor-1.svg'
WHERE building_id = (
    SELECT id
    FROM building
    WHERE name = 'Corpul A'
)
AND floor_number = 1;

UPDATE floor
SET map_path = '/maps/hospital-1/building-b/basement.svg'
WHERE building_id = (
    SELECT id
    FROM building
    WHERE name = 'Corpul B'
)
AND floor_number = 0;