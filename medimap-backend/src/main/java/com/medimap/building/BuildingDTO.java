package com.medimap.building;

public record BuildingDTO(
        Long id,
        String name,
        String description,
        Long hospitalId,
        String hospitalName
) {
}