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
                .map(DoctorMapper::toDto)
                .toList();
    }


    public List<DoctorDTO> getDoctorsByRoomId(Long roomId) {
        return doctorRepository.findByRoomId(roomId)
                .stream()
                .map(DoctorMapper::toDto)
                .toList();
    }
}
