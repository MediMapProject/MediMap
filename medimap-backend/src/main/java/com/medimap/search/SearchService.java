package com.medimap.search;

import com.medimap.building.*;
import com.medimap.department.*;
import com.medimap.doctor.*;
import com.medimap.hospital.*;
import com.medimap.room.*;

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

    public List<SearchDTO> search(String query)
    {

        List<SearchDTO> results = new ArrayList<>();

        List<Doctor> doctors = doctorRepository.findByFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCase(query, query);

        for (Doctor doctor : doctors)
        {
            results.add(SearchMapper.toSearchDto(doctor));
        }

        List<Department> departments = departmentRepository.findByNameContainingIgnoreCase(query);

        for(Department department : departments)
        {
            results.add(SearchMapper.toSearchDto(department));
        }

        List<Room> rooms = roomRepository.findByNumberContainingIgnoreCaseOrNameContainingIgnoreCase(query, query);

        for(Room room : rooms)
        {
            results.add(SearchMapper.toSearchDto(room));
        }

        List<Hospital> hospitals = hospitalRepository.findByNameContainingIgnoreCase(query);

        for(Hospital hospital : hospitals)
        {
            results.add(SearchMapper.toSearchDto(hospital));
        }

        List<Building> buildings = buildingRepository.findByNameContainingIgnoreCase(query);

        for(Building building : buildings)
        {
                results.add(SearchMapper.toSearchDto(building));
        }

        return results;
    }
}
