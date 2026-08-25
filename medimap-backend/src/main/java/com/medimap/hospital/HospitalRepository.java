package com.medimap.hospital;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HospitalRepository extends JpaRepository<Hospital, Long>
{
  List<Hospital> findByNameContainingIgnoreCase(String name);
}
