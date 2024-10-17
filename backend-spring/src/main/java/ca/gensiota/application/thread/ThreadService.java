package ca.gensiota.application.thread;

import org.springframework.stereotype.Service;

@Service
public class ThreadService {
    private final ThreadRepository threadRepository;

    public ThreadService(ThreadRepository threadRepository){
        this.threadRepository = threadRepository;
    }
}
