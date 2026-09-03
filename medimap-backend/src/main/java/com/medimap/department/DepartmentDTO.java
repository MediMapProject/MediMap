package com.medimap.department;

import java.util.UUID;

public record DepartmentDTO(
        UUID id,
        UUID hospitalId,
        String hospitalName,
        String name,
        String description
) {}
