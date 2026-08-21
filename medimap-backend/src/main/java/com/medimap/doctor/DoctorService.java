package com.medimap.doctor;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorService {
    private final DoctorRepository doctorRepository;

    public DoctorService(DoctorRepository doctorRepository) {this.doctorRepository = doctorRepository;}

    List<DoctorDTO> getAllDoctors() {
        return doctorRepository.findAll()
                .stream()
                .map(this::getDoctorDTO)
                .toList();
    }

    private DoctorDTO getDoctorDTO(Doctor doctor) {
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
