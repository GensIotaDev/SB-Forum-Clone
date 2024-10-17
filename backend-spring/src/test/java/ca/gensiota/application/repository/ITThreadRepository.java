package ca.gensiota.application.repository;

import ca.gensiota.application.thread.ThreadRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

@DataJpaTest
public class ITThreadRepository {
    @Autowired
    ThreadRepository threadRepository;

    @Autowired
    TestEntityManager entityManager;

    @Test
    void givenNewThread_whenSave_ThenSuccess(){

    }
}
