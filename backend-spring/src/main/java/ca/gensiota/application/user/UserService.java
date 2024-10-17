package ca.gensiota.application.user;

import ca.gensiota.application.user.dto.ProfileSummary;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public Optional<ProfileSummary> getProfileSummary(Long id){
        return this.userRepository.findByIdAsSummary(id);
    }
}
