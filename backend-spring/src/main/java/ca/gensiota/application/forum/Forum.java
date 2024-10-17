package ca.gensiota.application.forum;

import ca.gensiota.application.thread.Thread;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name="forums")
public class Forum {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @NotBlank
    String title;

    @NotBlank
    String description;

    @ColumnDefault("0")
    Integer threadCount = 0;

    @ColumnDefault("0")
    Integer postCount = 0;

    String icon;

    @OneToOne
    @JoinColumn(name="latest_thread_id", referencedColumnName = "id")
    Thread latestThread;

    @ManyToOne
    @JoinColumn(name="parent_id")
    Forum parent;

    @OneToMany(mappedBy = "parent")
    Set<Forum> children;

    @OneToMany(mappedBy = "forum")
    Collection<Thread> threads;

    public Forum(){}
    public Forum(String title, String description){
        this(title, description, null);
    }
    public Forum(String title, String description, Forum parent){
        this.title = title;
        this.description = description;
        this.parent = parent;
        this.latestThread = null;
        this.children = new HashSet<>();
    }
}
