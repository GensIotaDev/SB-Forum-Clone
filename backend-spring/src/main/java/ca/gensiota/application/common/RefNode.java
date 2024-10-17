package ca.gensiota.application.common;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;

@Getter
@Setter
public class RefNode<T extends Serializable> {
    Long id;
    T data;
    Collection<RefNode<T>> children;

    public RefNode() {}
    public RefNode(Long id, T data) {
        this(id, data, new ArrayList<>());
    }
    public RefNode(Long id, T data, Collection<RefNode<T>> children) {
        this.id = id;
        this.data = data;
        this.children = children;
    }
}
