package com.medimap.department;

public final class DepartmentMapper {
    private DepartmentMapper() {}
    public static DepartmentDTO toDto(Department department) {
        return new DepartmentDTO(
                department.getId(),
                department.getHospital().getId(),
                department.getHospital().getName(),
                department.getName(),
                department.getDescription()
        );
    }
}
