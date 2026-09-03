package com.medimap.room;

public final class RoomMapper {
    private RoomMapper (){}

    public static RoomDTO toDto(Room room) {
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
}
