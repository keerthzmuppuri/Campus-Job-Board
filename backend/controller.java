// backend/src/main/java/com/example/gitamwebportal/controller/JobController.java

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
