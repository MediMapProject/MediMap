package com.medimap.floor;

import org.springframework.stereotype.Service;

import java.util.List;

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
                .map(this::getFloorDTO)
                .toList();
    }

    private FloorDTO getFloorDTO(Floor floor)
    {
       return new FloorDTO(
               floor.getId(),
               floor.getFloorNumber(),
               floor.getName(),
               floor.getBuilding().getId(),
               floor.getBuilding().getName(),
               floor.getMapPath()
       );
    }

    public List<FloorDTO> getFloorsByBuildingId(Long buildingId)
    {
        return floorRepository.findByBuildingId(buildingId)
                .stream()
                .map(this::getFloorDTO)
                .toList();
    }
}
