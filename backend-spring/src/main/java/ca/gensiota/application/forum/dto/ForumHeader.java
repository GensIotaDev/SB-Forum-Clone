package ca.gensiota.application.forum.dto;

import org.springframework.beans.factory.annotation.Value;

import java.util.Collection;
import java.util.Optional;

public interface ForumHeader extends ForumSignature, Metrics {
    @Value("#{target.parent?.id}")
    Optional<Long> getParentId();
    Collection<ForumHeader> getChildren();
}
