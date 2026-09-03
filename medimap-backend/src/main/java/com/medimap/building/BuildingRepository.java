package com.medimap.building;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface BuildingRepository extends JpaRepository<Building, UUID>
{
   List<Building> findByNameContainingIgnoreCase(String name);
   List<Building> findByHospitalId(UUID hospitalId);
}
