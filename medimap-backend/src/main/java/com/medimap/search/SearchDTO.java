package com.medimap.search;

import java.util.UUID;

public record SearchDTO(
        String type,
        UUID id,
        String title,
        String subtitle
) {}