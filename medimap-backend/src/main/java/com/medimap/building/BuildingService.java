package com.medimap.building;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class BuildingService
{
    private final BuildingRepository buildingRepository;

    public BuildingService(BuildingRepository buildingRepository) {this.buildingRepository = buildingRepository;}

    public List<Building> getAllBuildings() {return buildingRepository.findAll();}
}
