package com.medimap.department;

import jakarta.persistence.*;

@Entity
@Table(name = "department")
public class Department
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long departmentId;

    @Column(nullable = false)
    private String name;

    public Long getId() {return departmentId;}
    public String getName() {return name;}
}
