package com.medimap.floor;

import java.util.UUID;

public record FloorDTO(
        UUID id,
        int floorNumber,
        String name,
        UUID buildingId,
        String buildingName,
        String mapPath
) {}