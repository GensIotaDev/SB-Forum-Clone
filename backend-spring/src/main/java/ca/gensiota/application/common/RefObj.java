package ca.gensiota.application.common;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class RefObj<T extends Serializable> {
    Long id;
    T value;

    public RefObj() {}
    public RefObj(Long id, T value) {
        this.id = id;
        this.value = value;
    }
}
