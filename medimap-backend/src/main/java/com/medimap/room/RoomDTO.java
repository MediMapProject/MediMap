package com.medimap.room;

import java.util.UUID;

public record RoomDTO(
        UUID id,
        UUID floorId,
        String floorName,
        UUID departmentId,
        String departmentName,
        String number,
        String name,
        String description,
        String svgElementId
) {}