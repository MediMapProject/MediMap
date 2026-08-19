package com.medimap.floor;

public record FloorDTO(
        Long id,
        int floorNumber,
        String name,
        Long buildingId,
        String buildingName
) {}