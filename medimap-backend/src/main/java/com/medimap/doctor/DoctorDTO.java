package com.medimap.doctor;

import java.util.UUID;

public record DoctorDTO(
    UUID id,
    UUID departmentId,
    String departmentName,
    UUID floorId,
    String floorName,
    String firstName,
    String lastName,
    String title,
    String email,
    String phone
){}

