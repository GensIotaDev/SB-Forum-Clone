package ca.gensiota.application;

import ca.gensiota.application.user.*;
import ca.gensiota.application.user.auth.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    private final UserRepository userRepository;

    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsernameOrEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("Username or email: " + username + " not found."));

        UserAO authUser = new UserAO(
                user.getId(),
                user.getUsername(),
                user.getPassword(),
                user.getDateOfBirth(),
                user.getIsEnabled(),
                getAuthorities(user.getRoles()));
        return authUser;
    }

    private Collection<? extends GrantedAuthority> getAuthorities(Collection<Role> roles){
        List<GrantedAuthority> authorities = new ArrayList<>();
        for(Role r : roles){
            authorities.add(new SimpleGrantedAuthority(r.getName()));
        }
        return authorities;
    }
}
