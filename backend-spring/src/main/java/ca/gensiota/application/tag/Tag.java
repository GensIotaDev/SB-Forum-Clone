package ca.gensiota.application.tag;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="tags")
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String value;

    String type;

    public Tag(){}
    public Tag(String value, String type){
        this.value = value;
        this.type = type;
    }
}
