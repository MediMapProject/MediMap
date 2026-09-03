package com.medimap.floor;

public final class FloorMapper {
    private FloorMapper() {
    }

    public static FloorDTO toDto(Floor floor) {
        return new FloorDTO(
                floor.getId(),
                floor.getFloorNumber(),
                floor.getName(),
                floor.getBuilding().getId(),
                floor.getBuilding().getName(),
                floor.getMapPath()
        );
    }
}
