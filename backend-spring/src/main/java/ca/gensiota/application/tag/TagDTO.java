package ca.gensiota.application.tag;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TagDTO {
    Long id = 0L;
    String value = null;

    public TagDTO() {}
    public TagDTO(Long id, String value) {
        this.id = id;
        this.value = value;
    }
}