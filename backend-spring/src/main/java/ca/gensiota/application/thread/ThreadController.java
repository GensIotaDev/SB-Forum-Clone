package ca.gensiota.application.thread;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/threads")
public class ThreadController {
    private final ThreadService threadService;

    public ThreadController(ThreadService threadService){
        this.threadService = threadService;
    }

}
