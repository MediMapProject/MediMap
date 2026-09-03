package com.medimap.floor;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class FloorService
{
    private final FloorRepository floorRepository;

    public FloorService(FloorRepository floorRepository) {
        this.floorRepository = floorRepository;
    }

    public List<FloorDTO> getAllFloors() {
        return floorRepository.findAll()
                .stream()
                .map(FloorMapper::toDto)
                .toList();
    }

    public List<FloorDTO> getFloorsByBuildingId(UUID buildingId)
    {
        return floorRepository.findByBuildingId(buildingId)
                .stream()
                .map(FloorMapper::toDto)
                .toList();
    }
}
