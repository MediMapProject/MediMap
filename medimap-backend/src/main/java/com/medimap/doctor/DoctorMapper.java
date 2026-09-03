package com.medimap.doctor;

public final class DoctorMapper {
    private DoctorMapper() {}

    public static DoctorDTO toDto(Doctor doctor) {
        return new DoctorDTO(
                doctor.getId(),
                doctor.getDepartment().getId(),
                doctor.getDepartment().getName(),
                doctor.getRoom().getId(),
                doctor.getRoom().getName(),
                doctor.getFirstName(),
                doctor.getLastName(),
                doctor.getTitle(),
                doctor.getEmail(),
                doctor.getPhone()
        );
    }
}
