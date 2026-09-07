package com.medimap.lookup;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LookupService {

    private final LookupRepository lookupRepository;

    public LookupService(LookupRepository lookupRepository) {
        this.lookupRepository = lookupRepository;
    }

    public List<LookupDTO> getAll() {

        return lookupRepository.findAll()
                .stream()
                .map(LookupMapper::toDto)
                .toList();
    }

    public List<LookupDTO> getByCategory(LookupCategory category) {

        return lookupRepository.findByCategory(category)
                .stream()
                .map(LookupMapper::toDto)
                .toList();
    }

}