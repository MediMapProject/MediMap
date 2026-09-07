package com.medimap.doctor;

public final class DoctorMapper {

    private DoctorMapper() {
    }

    public static DoctorDTO toDto(Doctor doctor) {

        return new DoctorDTO(

                doctor.getId(),

                doctor.getDepartment().getId(),

                doctor.getDepartment().getName(),

                doctor.getRoom() != null
                        ? doctor.getRoom().getId()
                        : null,

                doctor.getRoom() != null
                        ? doctor.getRoom().getName()
                        : null,

                doctor.getFirstName(),

                doctor.getLastName(),

                doctor.getTitle().getName(),

                doctor.getEmail(),

                doctor.getPhone()

        );
    }

}