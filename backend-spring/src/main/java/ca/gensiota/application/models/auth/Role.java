package ca.gensiota.application.models.auth;

import jakarta.persistence.*;

import java.util.Collection;

public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "role_privileges",
            joinColumns = @JoinColumn(
                    name = "role_id"
            ),
            inverseJoinColumns = @JoinColumn(
                    name = "privilege_id"
            )
    )
    Collection<Privilege> privileges;
}
