package com.medimap.building;

public final class BuildingMapper {

    private BuildingMapper() {
    }

    public static BuildingDTO toDto(Building building) {
        return new BuildingDTO(
                building.getId(),
                building.getName(),
                building.getHospital().getName(),
                building.getHospital().getId(),
                building.getDescription()
        );
    }
}