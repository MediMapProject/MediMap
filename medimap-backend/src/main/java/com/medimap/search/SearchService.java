package com.medimap.search;

import com.medimap.building.BuildingRepository;
import com.medimap.department.DepartmentRepository;
import com.medimap.doctor.DoctorRepository;
import com.medimap.hospital.HospitalRepository;
import com.medimap.room.RoomRepository;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SearchService {
    private final DoctorRepository doctorRepository;
    private final DepartmentRepository departmentRepository;
    private final RoomRepository roomRepository;
    private final BuildingRepository buildingRepository;
    private final HospitalRepository hospitalRepository;

    public SearchService(DoctorRepository doctorRepository, DepartmentRepository departmentRepository, RoomRepository roomRepository, BuildingRepository buildingRepository, HospitalRepository hospitalRepository) {
        this.doctorRepository = doctorRepository;
        this.departmentRepository = departmentRepository;
        this.roomRepository = roomRepository;
        this.buildingRepository = buildingRepository;
        this.hospitalRepository = hospitalRepository;
    }

    public List<SearchDTO> search(String query) {
        List<SearchDTO> results = new ArrayList<>();
        return results;
    }
}
