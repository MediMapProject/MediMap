package com.medimap.doctor;

import com.medimap.common.BaseEntity;
import com.medimap.department.Department;
import com.medimap.room.Room;
import jakarta.persistence.*;

@Entity
@Table(name = "doctor")
public class Doctor extends BaseEntity
{

    @ManyToOne
    @JoinColumn(name = "department_id", nullable = false)
    private Department department;

    @ManyToOne
    @JoinColumn(name = "room_id", nullable = false)
    private Room room;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;


    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String phone;

    public Doctor() {}


    public Department getDepartment() {return department;}

    public Room getRoom() {return room;}

    public String getFirstName() {return firstName;}

    public String getLastName() {return lastName;}

    public String getTitle() {return title;}

    public String getEmail() {return email;}

    public String getPhone() {return phone;}

    public void setDepartment(Department department) {this.department = department;}

    public void setRoom(Room room) {this.room = room;}

    public void setFirstName(String firstName) {this.firstName = firstName;}

    public void setLastName(String lastName) {this.lastName = lastName;}

    public void setTitle(String title) {this.title = title;}

    public void setEmail(String email) {this.email = email;}

    public void setPhone(String phone) {this.phone = phone;}
}
