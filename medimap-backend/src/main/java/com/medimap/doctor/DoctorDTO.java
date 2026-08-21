package com.medimap.doctor;

public record DoctorDTO(
    Long id,
    Long departmentId,
    String departmentName,
    Long floorId,
    String floorName,
    String firstName,
    String lastName,
    String title,
    String email,
    String phone
){}

