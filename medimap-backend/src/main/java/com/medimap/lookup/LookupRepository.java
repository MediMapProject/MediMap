package com.medimap.lookup;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface LookupRepository extends JpaRepository<Lookup, UUID> {

    List<Lookup> findByCategory(LookupCategory category);

}