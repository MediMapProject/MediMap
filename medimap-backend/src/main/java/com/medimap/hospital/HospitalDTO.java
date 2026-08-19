package com.medimap.hospital;

public record HospitalDTO(
        Long id,
        String name,
        String address,
        String city,
        String phone,
        String email
) {}

