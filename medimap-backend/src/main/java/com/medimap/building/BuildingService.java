package com.medimap.building;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class BuildingService {

    private final BuildingRepository buildingRepository;

    public BuildingService(BuildingRepository buildingRepository) {
        this.buildingRepository = buildingRepository;
    }

    public List<BuildingDTO> getAllBuildings() {
        return buildingRepository.findAll()
                .stream()
                .map(BuildingMapper::toDto)
                .toList();
    }

    public List<BuildingDTO> getBuildingsByHospitalId(UUID hospitalId) {
        return buildingRepository.findByHospitalId(hospitalId)
                .stream()
                .map(BuildingMapper::toDto)
                .toList();
    }
}