package com.medimap.hospital;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HospitalService {

    private final HospitalRepository hospitalRepository;

    public HospitalService(HospitalRepository hospitalRepository) {
        this.hospitalRepository = hospitalRepository;
    }

    public List<HospitalDTO> getAllHospitals() {
        return hospitalRepository.findAll()
                .stream()
                .map(HospitalMapper::toDto)
                .toList();
    }
}