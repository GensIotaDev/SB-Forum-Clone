package ca.gensiota.application.models.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class LoginUserDto {

    @NotBlank
    private String username;

    @NotBlank
    private String password;
}
