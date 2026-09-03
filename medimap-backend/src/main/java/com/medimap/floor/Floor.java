package com.medimap.floor;

import com.medimap.building.Building;
import com.medimap.common.BaseEntity;
import jakarta.persistence.*;

@Entity
@Table(name = "floor")
public class Floor extends BaseEntity
{

    @ManyToOne
    @JoinColumn(name = "building_id", nullable = false)
    private Building building;

    @Column(nullable = false)
    private int floorNumber;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String mapPath;

    public Floor() {}


    public Building getBuilding() {return building;}

    public int getFloorNumber() {return floorNumber;}

    public String getName() {return name;}

    public String getMapPath() {return mapPath;}

    public void setBuilding(Building building) {this.building = building;}

    public void setFloorNumber(int floorNumber) {this.floorNumber = floorNumber;}

    public void setName(String name) {this.name = name;}

    public void setMapPath(String mapPath) {this.mapPath = mapPath;}
}
