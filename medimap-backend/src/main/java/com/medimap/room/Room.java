package com.medimap.room;

import com.medimap.department.Department;
import com.medimap.floor.Floor;
import jakarta.persistence.*;

@Entity
@Table(name = "room")
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "floor_id", nullable = false)
    private Floor floor;

    @ManyToOne
    @JoinColumn(name = "department_id", nullable = false)
    private Department department;

    @Column(nullable = false)
    private String number;

    @Column(nullable = false)
    private String name;

    private String description;

    @Column(name = "svg_element_id")
    private String svgElementId;

    public Room() {
    }

    public Long getId() {return id;}

    public Floor getFloor() {return floor;}

    public Department getDepartment() {return department;}

    public String getNumber() {return number;}

    public String getName() {return name;}

    public String getDescription() {return description;}

    public String getSvgElementId() {return svgElementId;}

    public void setFloor(Floor floor) {this.floor = floor;}

    public void setDepartment(Department department) {this.department = department;}

    public void setNumber(String number) {this.number = number;}

    public void setName(String name) {this.name = name;}

    public void setDescription(String description) {this.description = description;}

    public void setSvgElementId(String svgElementId) {this.svgElementId = svgElementId;}
}