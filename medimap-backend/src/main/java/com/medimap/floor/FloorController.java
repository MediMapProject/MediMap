package com.medimap.floor;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/floors")
public class FloorController
{
    private final FloorService floorService;

    public FloorController(FloorService floorService) {this.floorService = floorService;}

    @GetMapping
    public List<FloorDTO> getAllFloors() {
        return floorService.getAllFloors();
    }

    @GetMapping("/by-building")
    public List<FloorDTO> getFloorsByBuildingId(@RequestParam UUID buildingId)
    {
        return floorService.getFloorsByBuildingId(buildingId);
    }
}
