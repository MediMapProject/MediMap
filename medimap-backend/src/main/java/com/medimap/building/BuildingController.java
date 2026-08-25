package com.medimap.building;

import java.util.List;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/buildings")
public class BuildingController
{
    private final BuildingService buildingService;

    public BuildingController(BuildingService buildingService) {this.buildingService = buildingService;}

    @GetMapping
    public List<BuildingDTO> getAllBuildings() {
        return buildingService.getAllBuildings();
    }

    @GetMapping("/by-hospital")
    public List<BuildingDTO> getBuildingsByHospitalId(@RequestParam Long hospitalId) {
        return buildingService.getBuildingsByHospitalId(hospitalId);
    }
}
