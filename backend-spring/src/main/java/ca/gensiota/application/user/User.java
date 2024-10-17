package ca.gensiota.application.user;

import ca.gensiota.application.user.auth.Role;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.time.Instant;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name="members")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @NotBlank
    String username;

    @NotBlank
    String email;

    @NotBlank
    String password;

    @NotNull
    Instant dateOfBirth;

    @ColumnDefault("true")
    Boolean isEnabled;

    @ManyToMany
    @JoinTable(
            name="member_roles",
            joinColumns = @JoinColumn(name="member_id"),
            inverseJoinColumns = @JoinColumn(name="role_id")
    )
    Set<Role> roles;

    public User(){}
    public User(String username, String email, String password, Instant dateOfBirth){
        this.username = username;
        this.email = email;
        this.password = password;
        this.dateOfBirth = dateOfBirth;
        this.isEnabled = true;
    }
}
