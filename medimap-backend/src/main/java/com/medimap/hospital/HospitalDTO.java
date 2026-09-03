package com.medimap.hospital;

import java.util.UUID;

public record HospitalDTO(
        UUID id,
        String name,
        String address,
        String city,
        String phone,
        String email
) {}

