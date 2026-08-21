package com.medimap.department;

import jakarta.persistence.*;

@Entity
@Table(name = "department")
public class Department
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long departmentId;
}
