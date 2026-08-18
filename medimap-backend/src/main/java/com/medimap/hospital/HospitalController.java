package com.medimap.hospital;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/hospitals")
public class HospitalController
{
     private final HospitalService hospitalService;
     public HospitalController(HospitalService hospitalService)
     {
         this.hospitalService = hospitalService;
     }

     @GetMapping
     public List<Hospital> getAllHospitals()
     {
         return hospitalService.getAllHospitals();
     }
}
