package ca.gensiota.application.thread.dto;

import ca.gensiota.application.common.dto.Signature;
import ca.gensiota.application.post.dto.RecentPostSummary;

public interface RecentThreadSummary extends Signature {
    RecentPostSummary getLatestPost();
}
