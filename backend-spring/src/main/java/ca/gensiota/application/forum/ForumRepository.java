package ca.gensiota.application.forum;

import ca.gensiota.application.forum.dto.RecentForumSummary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.Optional;

@Repository
public interface ForumRepository extends JpaRepository<Forum, Long> {

    @Query("select f from Forum f where f.id = ?1")
    Optional<RecentForumSummary> findRecentDiffById(Long id, Long lastUpdate);

    @Query("select f from Forum f where f.parent is null")
    Collection<RecentForumSummary> findRecentDiffByRoot(Long lastUpdate);
}
