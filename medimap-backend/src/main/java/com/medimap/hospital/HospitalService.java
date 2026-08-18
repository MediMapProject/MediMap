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

    public List<Hospital> getAllHospitals()
    {
        return hospitalRepository.findAll();
    }
}
