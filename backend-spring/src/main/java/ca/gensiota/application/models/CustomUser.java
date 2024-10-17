package ca.gensiota.application.models;

import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Collection;

public class CustomUser extends User {
    @Getter
    private final Long id;
    private final LocalDateTime birthday;

    public CustomUser(Long id, String username, String password, LocalDateTime birthday, boolean enabled, Collection<? extends GrantedAuthority> authorities) {
        super(username, password, enabled, true, true, true, authorities);
        this.id = id;
        this.birthday = birthday;
    }

    public int getAgeInYears(){
        return (int)ChronoUnit.YEARS.between(this.birthday, LocalDateTime.now());
    }
}
