package com.medimap.doctor;

public record DoctorDTO(
    Long id,
    Long departmentId,
    Long departmentName,
    Long floorId,
    Long floorName,
    String firstName,
    String lastName,
    String title,
    String email,
    String phone
){}

