package com.medimap.department;

public record DepartmentDTO(
        Long id,
        Long hospitalId,
        String hospitalName,
        String name,
        String description
) {}
