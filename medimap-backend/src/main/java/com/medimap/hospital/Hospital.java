package com.medimap.hospital;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.medimap.building.Building;
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
    
    public Hospital() {}

    @JsonIgnore
    @OneToMany(mappedBy = "hospital")
    private List<Building> buildings=new ArrayList<>();

    public Long getId()
    {
        return id;
    }

    public String getName()
    {
        return name;
    }
    public void setName(String name)
    {
        this.name = name;
    }

    public String getAddress()
    {
        return address;
    }
    public void setAddress(String address)
    {
        this.address = address;
    }

    public String getCity()
    {
        return city;
    }
    public void setCity(String city)
    {
        this.city = city;
    }

    public String getPhone()
    {
        return phone;
    }
    public void setPhone(String phone) {this.phone = phone;}

    public String getEmail()
    {
        return email;
    }
    public void setEmail(String email)
    {
        this.email = email;
    }

    public List<Building> getBuildings()
    {
        return buildings;
    }
    public void setBuildings(List<Building> buildings)
    {
        this.buildings = buildings;
    }

}
