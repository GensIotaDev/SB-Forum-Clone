package ca.gensiota.application.forum;

import ca.gensiota.application.thread.ThreadDTO;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ForumDTO {
    Long id;
    String title;
    String description;
    String icon;

    Long threadCount;
    Long postCount;

    ThreadDTO latest;

    public ForumDTO() {}
    public ForumDTO(Long id, String title, String description){
        this(id, title, description, null);
    }
    public ForumDTO(Long id, String title, String description, Long parentId){
        this.id = id;
        this.title = title;
        this.description = description;
    }
}
