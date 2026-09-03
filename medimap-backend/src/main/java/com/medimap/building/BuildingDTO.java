package com.medimap.building;

import java.util.UUID;

public record BuildingDTO(
        UUID id,
        String name,
        String description,
        UUID hospitalId,
        String hospitalName
) {}
