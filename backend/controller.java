import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @GetMapping("/")
    public String home() {
        return "Welcome to Campus Job Board!";
    }

    @GetMapping("/about")
    public String about() {
        return "About Campus Job Board";
    }

    @PostMapping("/submit")
    public String submit(@RequestBody String data) {
        // Process submitted data here
        return "Data submitted successfully";
    }
}
