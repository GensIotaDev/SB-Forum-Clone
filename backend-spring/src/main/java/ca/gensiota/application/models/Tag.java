package ca.gensiota.application.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

import java.util.Set;


public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String name;

    @ManyToMany(mappedBy = "tags")
    private Set<Thread> threads;
}
