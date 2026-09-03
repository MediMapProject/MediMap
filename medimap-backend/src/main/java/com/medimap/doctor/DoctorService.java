package com.medimap.doctor;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class DoctorService {
    private final DoctorRepository doctorRepository;

    public DoctorService(DoctorRepository doctorRepository) {this.doctorRepository = doctorRepository;}

    List<DoctorDTO> getAllDoctors() {
        return doctorRepository.findAll()
                .stream()
                .map(DoctorMapper::toDto)
                .toList();
    }


    public List<DoctorDTO> getDoctorsByRoomId(UUID roomId) {
        return doctorRepository.findByRoomId(roomId)
                .stream()
                .map(DoctorMapper::toDto)
                .toList();
    }
}
