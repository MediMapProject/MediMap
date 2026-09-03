package com.medimap.search;

import com.medimap.building.Building;
import com.medimap.department.Department;
import com.medimap.doctor.Doctor;
import com.medimap.hospital.Hospital;
import com.medimap.room.Room;

public final class SearchMapper {

    private SearchMapper() {
    }

    public static SearchDTO toSearchDto(Doctor doctor) {
        return new SearchDTO(
                "DOCTOR",
                doctor.getId(),
                doctor.getFirstName() + " " + doctor.getLastName(),
                doctor.getDepartment().getName()
        );
    }

    public static SearchDTO toSearchDto(Department department) {
        return new SearchDTO(
                "DEPARTMENT",
                department.getId(),
                department.getName(),
                department.getHospital().getName()
        );
    }

    public static SearchDTO toSearchDto(Room room) {
        return new SearchDTO(
                "ROOM",
                room.getId(),
                room.getNumber(),
                room.getDepartment().getName()
        );
    }

    public static SearchDTO toSearchDto(Building building) {
        return new SearchDTO(
                "BUILDING",
                building.getId(),
                building.getName(),
                building.getHospital().getName()
        );
    }

    public static SearchDTO toSearchDto(Hospital hospital) {
        return new SearchDTO(
                "HOSPITAL",
                hospital.getId(),
                hospital.getName(),
                hospital.getCity()
        );
    }
}