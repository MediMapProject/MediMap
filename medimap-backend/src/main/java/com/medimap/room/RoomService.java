package com.medimap.room;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class RoomService {

    private final RoomRepository roomRepository;

    public RoomService(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    public List<RoomDTO> getAllRooms() {
        return roomRepository.findAll()
                .stream()
                .map(RoomMapper::toDto)
                .toList();
    }

    public List<RoomDTO> getRoomsByFloorId(UUID floorId) {
        return roomRepository.findByFloorId(floorId)
                .stream()
                .map(RoomMapper::toDto)
                .toList();
    }
}