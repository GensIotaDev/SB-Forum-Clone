package ca.gensiota.application.models;

import jakarta.persistence.*;

import java.util.Set;

public class Forum {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @OneToMany
    Set<Thread> threads;

    public Forum(){}
    public Forum(String title, Set<Thread> threads){
        this.title = title;
        this.threads = threads;
    }
}
