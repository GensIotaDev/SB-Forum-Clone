package ca.gensiota.application.user.auth;

import java.util.HashMap;
import java.util.Map;

public enum Privilege {
    NONE(0),
    READ(1),
    WRITE(2),
    READ_WRITE(3);

    private static final Map<Long, Privilege> BY_VALUE = new HashMap<>();

    static {
        for(Privilege p : values()){
            BY_VALUE.put(p.value, p);
        }
    }

    public final Long value;

    private Privilege(long value){
        this.value = value;
    }

    public static Privilege getByValue(Long value){
        return BY_VALUE.get(value);
    }
}