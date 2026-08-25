package com.medimap.doctor;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/doctors")
public class DoctorController
{
    private final DoctorService doctorService;

    public DoctorController(DoctorService doctorService) {this.doctorService = doctorService;}

    @GetMapping
    public List<DoctorDTO> getAllDoctors() {
        return doctorService.getAllDoctors();
    }

    @GetMapping("/by-room")
    public List<DoctorDTO> getDoctorsByRoomId(@RequestParam Long roomId) {
        return doctorService.getDoctorsByRoomId(roomId);
    }
}
