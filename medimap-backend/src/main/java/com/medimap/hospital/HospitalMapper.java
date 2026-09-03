package com.medimap.hospital;

public final class HospitalMapper {

    private HospitalMapper() {
    }

    public static HospitalDTO toDto(Hospital hospital) {
        return new HospitalDTO(
                hospital.getId(),
                hospital.getName(),
                hospital.getAddress(),
                hospital.getCity(),
                hospital.getPhone(),
                hospital.getEmail()
        );
    }
}