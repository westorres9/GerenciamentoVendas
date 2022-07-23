package com.devsuperior.salesmanager.services.validations;

@Constraint(validatedBy = UserInsertValidator.class)
@Target( {ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)

public @interface UserInsertValid {
    String message() default "Validation Error";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}