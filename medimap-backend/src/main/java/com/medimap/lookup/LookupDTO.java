package com.medimap.lookup;

import java.util.UUID;

public record LookupDTO (
    UUID id,
    UUID parentId,
    LookupCategory category,
    String name
) {}
