package com.example.gitamwebportal.repository;

import com.example.gitamwebportal.entity.JobListing;
import org.springframework.data.jpa.repository.JpaRepository;

// JpaRepository provides CRUD functionalities for JobListing entities
public interface JobRepository extends JpaRepository<JobListing, Long> {
}
