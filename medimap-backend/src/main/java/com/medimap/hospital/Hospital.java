package com.medimap.hospital;

import jakarta.persistence.*;

@Entity
@Table(name = "hospital")
public class Hospital
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String address;

    private String city;

    private String phone;

    private String email;
}
