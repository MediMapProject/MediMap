package com.medimap.lookup;

public final class LookupMapper {

    private LookupMapper() {
    }

    public static LookupDTO toDto(Lookup lookup) {

        return new LookupDTO(

                lookup.getId(),

                lookup.getParent() != null
                        ? lookup.getParent().getId()
                        : null,

                lookup.getCategory(),

                lookup.getName()

        );
    }

}