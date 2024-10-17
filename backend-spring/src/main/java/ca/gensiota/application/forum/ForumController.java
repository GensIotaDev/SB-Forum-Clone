package ca.gensiota.application.forum;

import ca.gensiota.application.forum.dto.RecentForumSummary;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Collection;

@RestController
@RequestMapping("/api/forums")
public class ForumController {
    private final ForumService forumService;

    Logger logger = LoggerFactory.getLogger(ForumController.class);

    public ForumController(ForumService forumService){
        this.forumService = forumService;
    }

    @PostMapping("")
    @ResponseStatus(HttpStatus.CREATED)
    public void create(@Valid @RequestBody ForumCreateRequest forumRequest, BindingResult result) throws Exception {
        if(result.hasErrors()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, result.getAllErrors().toString());
        }
        forumService.create(forumRequest);
    }

    @GetMapping()
    public Collection<RecentForumSummary> getForumUpdatesFromRoot(
            @RequestParam(value = "since", required = false, defaultValue = "0") Long lastUpdate) throws Exception {
        return this.forumService.getForumChangesFromRoot(lastUpdate);
    }
    @GetMapping("/{id}")
    public RecentForumSummary getForumUpdates(
            @PathVariable Long id,
            @RequestParam(value = "since", required = false, defaultValue = "0") Long lastUpdate) throws Exception {
        if(id < -1) throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        var summary = this.forumService.getForumChanges(id, lastUpdate);

        if(summary.isEmpty()) throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        return summary.get();
    }
}
