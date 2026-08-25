package com.medimap.room;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomService {

    private final RoomRepository roomRepository;

    public RoomService(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    public List<RoomDTO> getAllRooms() {
        return roomRepository.findAll()
                .stream()
                .map(this::getRoomDTO)
                .toList();
    }

    private RoomDTO getRoomDTO(Room room) {
        return new RoomDTO(
                room.getId(),
                room.getFloor().getId(),
                room.getFloor().getName(),
                room.getDepartment().getId(),
                room.getDepartment().getName(),
                room.getNumber(),
                room.getName(),
                room.getDescription(),
                room.getSvgElementId()
        );
    }

    public List<RoomDTO> getRoomsByFloorId(Long floorId) {
        return roomRepository.findByFloorId(floorId)
                .stream()
                .map(this::getRoomDTO)
                .toList();
    }
}