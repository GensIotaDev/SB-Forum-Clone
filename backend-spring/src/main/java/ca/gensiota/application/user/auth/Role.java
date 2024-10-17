package ca.gensiota.application.user.auth;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

import java.util.HashMap;
import java.util.Map;

/*public enum Role {
    NONE(Privilege.NONE),
    USER(Privilege.READ_WRITE),
    MODERATOR(Privilege.READ_WRITE),
    ADMIN(Privilege.READ_WRITE);

    private static final Map<String, Role> BY_NAME = new HashMap<>();

    static {
        for(Role r : values()){
            BY_NAME.put(r.name(), r);
        }
    }

    public final Privilege flags;

    private Role(Privilege flags){
        this.flags = flags;
    }

    public static Role getByName(String name){
        return BY_NAME.get(name);
    }
}*/

@Getter
@Setter
@Entity
@Table(name="roles")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    @NotBlank
    String name;

    public Role(){}
    public Role(String name){
        this.name = name;
    }
}