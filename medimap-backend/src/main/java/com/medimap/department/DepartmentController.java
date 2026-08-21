package com.medimap.department;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/departments")
public class DepartmentController
{
    private final DepartmentService departmentService;

    public DepartmentController(DepartmentService departmentService) {this.departmentService = departmentService;}

    @GetMapping
    public List<DepartmentDTO> getAllDepartments()
    {
        return departmentService.getAllDepartments();
    }
}
