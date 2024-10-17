package ca.gensiota.application.models;

import jakarta.persistence.*;

import java.util.Collection;
import java.util.Set;

public class Thread {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "thread")
    private Collection<Post> posts;

    @ManyToMany
    @JoinTable(
            name="thread_tags",
            joinColumns = @JoinColumn(name="thread_id"),
            inverseJoinColumns = @JoinColumn(name="tag_id")
    )
    private Set<Tag> tags;
}
