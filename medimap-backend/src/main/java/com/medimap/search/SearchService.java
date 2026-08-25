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
        if (query == null || query.isBlank()) {
            return List.of();
        }

        query = query.trim();

        List<SearchDTO> results = new ArrayList<>();

        List<Doctor> doctors = doctorRepository.findByFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCase(query, query);

        for (Doctor doctor : doctors)
        {
            results.add(SearchMapper.doctorToSearchDTO(doctor));
        }

        List<Department> departments = departmentRepository.findByNameContainingIgnoreCase(query);

        for(Department department : departments)
        {
            results.add(SearchMapper.departmentToSearchDTO(department));
        }

        List<Room> rooms = roomRepository.findByNumberContainingIgnoreCaseOrNameContainingIgnoreCase(query, query);

        for(Room room : rooms)
        {
            results.add(SearchMapper.roomToSearchDTO(room));
        }

        List<Hospital> hospitals = hospitalRepository.findByNameContainingIgnoreCase(query);

        for(Hospital hospital : hospitals)
        {
            results.add(SearchMapper.hospitalToSearchDTO(hospital));
        }

        List<Building> buildings = buildingRepository.findByNameContainingIgnoreCase(query);

        for(Building building : buildings)
        {
            results.add(SearchMapper.buildingToSearchDTO(building));
        }

        return results;
    }
}
