package ca.gensiota.application.models.dtos;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class UserSettingDto {
    private String locale;

    private Integer date;

    private Integer time;
}
