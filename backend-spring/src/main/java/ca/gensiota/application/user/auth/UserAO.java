package ca.gensiota.application.user.auth;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Collection;

public class UserAO extends User {
    public final Long id;
    private final Instant dateOfBirth;

    public UserAO(Long id, String username, String password, Instant dateOfBirth, Boolean enabled, Collection<? extends GrantedAuthority> authorities) {
        super(username,
                password,
                enabled,
                true,
                true,
                true,
                authorities);
        this.id = id;
        this.dateOfBirth = dateOfBirth;
    }

    public Integer getAgeInYears(){
        return (int) ChronoUnit.YEARS.between(Instant.now(), this.dateOfBirth);
    }
}
