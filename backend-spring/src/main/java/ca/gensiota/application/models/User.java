package ca.gensiota.application.models;

import ca.gensiota.application.models.auth.Role;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String username;

    @NotBlank
    private String email;

    @NotBlank
    private String password;

    @NotNull
    private LocalDateTime birthday;

    private Boolean isEnabled = true;

    @OneToMany(mappedBy="author")
    private Collection<Post> posts;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name="member_roles",
            joinColumns = @JoinColumn(name="member_id"),
            inverseJoinColumns = @JoinColumn(name="role_id")
    )
    private Set<Role> roles = new HashSet<>();

    public User(){}
    public User(String username, String email, String password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
