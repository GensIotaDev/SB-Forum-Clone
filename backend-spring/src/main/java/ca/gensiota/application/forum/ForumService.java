package ca.gensiota.application.forum;

import ca.gensiota.application.forum.dto.RecentForumSummary;
import ca.gensiota.application.tag.Tag;
import ca.gensiota.application.tag.TagRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ForumService {
    private final ForumRepository forumRepository;
    private final TagRepository tagRepository;

    Logger logger = LoggerFactory.getLogger(ForumService.class);
    public ForumService(ForumRepository forumRepository, TagRepository tagRepository){
        this.forumRepository = forumRepository;
        this.tagRepository = tagRepository;
    }

    public void create(ForumCreateRequest request) throws Exception {
        Forum parent = this.forumRepository.findById(request.parent).orElse(null);
        if(request.parent != 0 && parent == null) throw new Exception("Invalid forum to parent.");

        Tag tag = null;
        if(request.section.getId() != 0){
            tag = this.tagRepository.findById(request.section.getId()).orElseThrow(()-> new Exception("Invalid tag id."));
        }
        else if(request.section.getValue() != null){
            tag = this.tagRepository.findByValueAndType(request.section.getValue(), "forum group").orElse(new Tag(request.section.getValue(), "forum group"));
        }

        Forum forum = new Forum(
                request.title,
                request.description,
                parent
        );
        //forum.section = tag;

        this.forumRepository.save(forum);
    }

    public Optional<RecentForumSummary> getForumChanges(Long id, Long lastUpdate){
        return this.forumRepository.findRecentDiffById(id, lastUpdate);
    }
    public Collection<RecentForumSummary> getForumChangesFromRoot(Long lastUpdate){
        return this.forumRepository.findRecentDiffByRoot(lastUpdate);
    }
}
