package com.medimap.lookup;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/lookups")
public class LookupController {

    private final LookupService lookupService;

    public LookupController(LookupService lookupService) {
        this.lookupService = lookupService;
    }

    @GetMapping
    public List<LookupDTO> getAll(@RequestParam(required = false) LookupCategory category) {
        if (category == null) {return lookupService.getAll();}
        return lookupService.getByCategory(category);
    }

}