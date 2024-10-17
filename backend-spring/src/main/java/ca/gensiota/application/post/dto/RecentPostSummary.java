package ca.gensiota.application.post.dto;

import java.time.Instant;

public interface RecentPostSummary {
    Long getId();
    Instant getCreatedAt();
    Instant getEditedAt();
}
