package ca.gensiota.application.forum.dto;

import ca.gensiota.application.common.dto.Signature;

import java.util.Collection;

public interface Node extends Signature {
    Collection<Node> getChildren();
}
