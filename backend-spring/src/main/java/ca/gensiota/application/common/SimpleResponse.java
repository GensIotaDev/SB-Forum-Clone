package ca.gensiota.application.common;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SimpleResponse<T> {
    Long id;
    T value;

    public SimpleResponse() {}
    public SimpleResponse(Long id, T value) {
        this.id = id;
        this.value = value;
    }
}
