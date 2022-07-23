package com.devsuperior.salesmanager.services.validations;

import com.devsuperior.salesmanager.DTO.UserInsertDTO;
import com.devsuperior.salesmanager.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class UserInsertValidator implements ConstraintValidator<UserInsertValid, UserInsertDTO> {

    @Autowired
    private UserRepository repository;

    @Override
    public void initialize(UserInsertValid ann) {
    }
    List<FieldMessage> list = new ArrayList<>();



    @Override
    public boolean isValid(UserInsertDTO dto, ConstraintValidatorContext context) {

        User user = repository.findByEmail(dto.getEmail());
        if (user != null) {
            list.add(new FieldMessage("Email", "Email já existe"));
        }

        for (FieldMessage e : list) {
            context.disableDefaultConstraintViolation();
            context.buildConstraintViolationWithTemplate(e.getMessage()).addPropertyNode(e.getFieldName())
                    .addConstraintViolation();
        }
        return list.isEmpty();
    }
}