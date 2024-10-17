package ca.gensiota.application.user;

import ca.gensiota.application.user.dto.ProfileSummary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query("select u from User u where u.username = ?1 or u.email = ?1")
    Optional<User> findByUsernameOrEmail(String input);

    @Query("select u from User u where u.id = ?1")
    Optional<ProfileSummary> findByIdAsSummary(Long id);
}
