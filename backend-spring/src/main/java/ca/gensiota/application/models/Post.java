package ca.gensiota.application.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

import java.time.LocalDateTime;

public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String content;

    private LocalDateTime createdAt;

    private LocalDateTime editedAt;

    @ManyToOne
    private User author;

    @ManyToOne
    private Thread thread;
}
