package com.example.gitamwebportal.controller;

import com.example.gitamwebportal.entity.JobListing;
import com.example.gitamwebportal.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/job-listings")
public class JobController {

    @Autowired
    private JobService jobService;

    @GetMapping
    public List<JobListing> getAllJobListings() {
        return jobService.getAllJobListings();
    }

    @PostMapping
    public void postJobListing(@RequestBody JobListing jobListing) {
        jobService.postJobListing(jobListing);
    }
}
