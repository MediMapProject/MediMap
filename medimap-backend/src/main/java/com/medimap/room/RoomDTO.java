package com.medimap.room;

public record RoomDTO(
        Long id,
        Long floorId,
        String floorName,
        Long departmentId,
        String departmentName,
        String number,
        String name,
        String description,
        String svgElementId
) {}