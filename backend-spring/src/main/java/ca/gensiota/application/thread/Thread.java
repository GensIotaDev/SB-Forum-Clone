package ca.gensiota.application.thread;

import ca.gensiota.application.forum.Forum;
import ca.gensiota.application.post.Post;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;
import java.util.Collection;

@Getter
@Setter
@Entity
@Table(name="threads")
public class Thread {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String title;

    String description;

    Instant createdAt;

    Boolean isLocked;

    Long views;

    @ManyToOne
    @JoinColumn(name="forum_id")
    Forum forum;

    @OneToMany(mappedBy = "thread")
    Collection<Post> posts;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name="latest_post_id", referencedColumnName = "id")
    Post latestPost;

    //User author

    //Poll poll

    //Collection<Tag> tags

    public Thread(){}
    public Thread(String title, String description) {
        this.title = title;
        this.description = description;
    }
}
