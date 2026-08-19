package com.medimap.hospital;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class HospitalService
{
    private final HospitalRepository hospitalRepository;
    public HospitalService(HospitalRepository hospitalRepository)
    {
        this.hospitalRepository = hospitalRepository;
    }

    public List<HospitalDTO> getAllHospitals()
    {
        return hospitalRepository.findAll()
                .stream()
                .map(this::buildHospitalDTO)
                .toList();
    }

    private HospitalDTO buildHospitalDTO(Hospital hospital)
    {
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
