package com.medimap.search;

public record SearchDTO(
        String type,
        Long id,
        String title,
        String subtitle
) {}