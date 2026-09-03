package com.medimap.room;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/rooms")
public class RoomController {

    private final RoomService roomService;

    public RoomController(RoomService roomService) {this.roomService = roomService;}


    @GetMapping("/by-floor")
    public List<RoomDTO> getRoomsByFloorId(@RequestParam UUID floorId) {
        if(floorId == null) {
            return roomService.getAllRooms();
        }
        return roomService.getRoomsByFloorId(floorId);
    }
}
