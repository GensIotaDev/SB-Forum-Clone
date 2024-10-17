package ca.gensiota.application.user.auth;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter(autoApply = true)
public class PrivilegeConverter implements AttributeConverter<Privilege, Long> {

    @Override
    public Long convertToDatabaseColumn(Privilege privilege) {
        return privilege.value;
    }

    @Override
    public Privilege convertToEntityAttribute(Long value) {
        return Privilege.getByValue(value);
    }
}
