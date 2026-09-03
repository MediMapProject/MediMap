package com.medimap.building;

import com.medimap.common.BaseEntity;
import com.medimap.hospital.Hospital;

import jakarta.persistence.*;

@Entity
@Table(name = "building")
public class Building extends BaseEntity
{

    @ManyToOne
    @JoinColumn(name = "hospital_id", nullable = false)
    private Hospital hospital;

    @Column(nullable = false)
    private String name;

    private String description;

    public Building() {}

    public Hospital getHospital() {return hospital;}

    public void setHospital(Hospital hospital) {this.hospital = hospital;}

    public String getName() {return name;}

    public void setName(String name) {this.name = name;}

    public String getDescription() {return description;}

    public void setDescription(String description) {this.description = description;}
}
