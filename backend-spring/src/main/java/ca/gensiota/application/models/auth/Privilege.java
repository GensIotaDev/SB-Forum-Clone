package ca.gensiota.application.models.auth;

import jakarta.persistence.*;

import java.util.Collection;

public class Privilege {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    @ManyToMany(mappedBy = "privileges")
    Collection<Role> roles;
}
