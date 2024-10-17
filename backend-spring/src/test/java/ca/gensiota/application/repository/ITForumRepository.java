package ca.gensiota.application.repository;

import ca.gensiota.application.forum.ForumRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import static org.junit.jupiter.api.Assertions.assertEquals;

@DataJpaTest
public class ITForumRepository {
    @Autowired
    ForumRepository forumRepository;

    @Autowired
    TestEntityManager entityManager;

    @Test
    void givenNewForum_whenSave_thenSuccess() {
        /*Forum newForum = new Forum("Forum Test 1", "Description 1", null);
        newForum.setSection(new Tag("Creative Works", "forum group"));

        Forum insertedForum = forumRepository.save(newForum);
        assertEquals(entityManager.find(Forum.class, insertedForum.getId()), newForum);*/
    }
}
