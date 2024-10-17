package ca.gensiota.application.tag;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.Optional;

@Repository
public interface TagRepository extends JpaRepository<Tag, Long> {
    Optional<Tag> findByValueAndType(String value, String type);

    Collection<Tag> findAllDistinctByType(String type);
}
