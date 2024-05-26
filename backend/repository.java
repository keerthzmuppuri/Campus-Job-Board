// backend/src/main/java/com/example/gitamwebportal/repository/JobRepository.java

import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<JobListing, Long> {
}
