package ca.gensiota.application.forum;

import ca.gensiota.application.common.RefObj;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ForumCreateRequest {
    Long parent = 0L;

    @NotBlank
    String title;

    @NotBlank
    String description;

    RefObj<String> section;
}
