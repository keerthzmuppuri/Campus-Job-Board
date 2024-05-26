// backend/src/main/java/com/example/gitamwebportal/service/JobService.java

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;

    public List<JobListing> getAllJobListings() {
        return jobRepository.findAll();
    }

    public void postJobListing(JobListing jobListing) {
        jobRepository.save(jobListing);
    }
}
