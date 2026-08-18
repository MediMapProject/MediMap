package com.medimap.hospital;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HospitalController
{
     private HospitalService hospitalService;
     public HospitalController(HospitalService hospitalService)
     {
         this.hospitalService = hospitalService;
     }

     @GetMapping("/api/hospitals")
     public List<Hospital> getAllHospitals()
     {
         return hospitalService.getAllHospitals();
     }
}
