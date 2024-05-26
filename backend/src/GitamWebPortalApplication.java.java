// backend/src/main/java/com/example/gitamwebportal/GitamWebPortalApplication.java

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication // Annotation to enable auto-configuration, component scanning, and other features
public class GitamWebPortalApplication {

    // Main method to start the Spring Boot application
    public static void main(String[] args) {
        SpringApplication.run(GitamWebPortalApplication.class, args); // Run the application
    }
}
