package ca.gensiota.application.post;

import ca.gensiota.application.thread.Thread;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name="posts")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @NotBlank
    String content;

    Instant createdAt;

    Instant editedAt;

    @ManyToOne
    @JoinColumn(name="thread_id")
    Thread thread;

    public Post(){}
    public Post(String content){
        this.content = content;
    }
}
