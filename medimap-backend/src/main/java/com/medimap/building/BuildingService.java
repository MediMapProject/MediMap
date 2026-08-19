package com.medimap.building;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class BuildingService
{
    private final BuildingRepository buildingRepository;

    public BuildingService(BuildingRepository buildingRepository) {this.buildingRepository = buildingRepository;}

    public List<BuildingDTO> getAllBuildings() {
        return buildingRepository.findAll()
                .stream()
                .map(this::getBuildingDTO)
                .toList();
    }

    private BuildingDTO getBuildingDTO(Building building)
    {
        return new BuildingDTO(
                building.getId(),
                building.getName(),
                building.getDescription(),
                building.getHospital().getId(),
                building.getHospital().getName()
        );
    }
}
