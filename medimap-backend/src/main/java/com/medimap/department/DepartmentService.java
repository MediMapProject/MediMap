package com.medimap.department;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentService {
    private final DepartmentRepository departmentRepository;

    public DepartmentService(DepartmentRepository departmentRepository) {this.departmentRepository = departmentRepository;}

    public List<DepartmentDTO> getAllDepartments() {
        return departmentRepository.findAll()
                .stream()
                .map(this::getDepartmentDTO)
                .toList();
    }

    private DepartmentDTO getDepartmentDTO(Department department) {
        return new DepartmentDTO(
                department.getId(),
                department.getHospital().getId(),
                department.getHospital().getName(),
                department.getName(),
                department.getDescription()
        );
    }
}
