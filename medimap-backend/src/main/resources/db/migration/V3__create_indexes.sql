CREATE INDEX idx_building_hospital
ON building(hospital_id);

CREATE INDEX idx_floor_building
ON floor(building_id);

CREATE INDEX idx_department_hospital
ON department(hospital_id);

CREATE INDEX idx_room_floor
ON room(floor_id);

CREATE INDEX idx_room_department
ON room(department_id);

CREATE INDEX idx_room_svg_element
ON room(svg_element_id);

CREATE INDEX idx_doctor_department
ON doctor(department_id);

CREATE INDEX idx_doctor_room
ON doctor(room_id);