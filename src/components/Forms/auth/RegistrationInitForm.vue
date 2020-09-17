<template>
  <div class="app-form">
    <p class="form-title">Login Form</p>
    <FormulateForm @submit="submit">
      <FormulateInput
        name="email"
        type="email"
        label="Email*"
        validation="required"
        validation-name="Email"
        placeholder="example@gmail.com"
      />
      <FormulateInput
          name="firstName"
          type="text"
          label="firstName"
          validation="required"
          validation-name="First name"
          placeholder="Hamdy"
      />
      <FormulateInput
          name="lastName"
          type="text"
          label="lastName"
          validation="required"
          validation-name="Last name"
          placeholder="Tobi"
      />

  </div>
</template>

<script>
import StoreUtils from "../../../utils/BaseUtils/StoreUtils";

export default {
  name: "RegistrationInitForm",
  methods: {
    submit(data) {
      StoreUtils.commit("form/INCREASE_FORM_STAGE_BY_ONE", data);

      StoreUtils.dispatch( "auth/registrationInit")
    }
  }
};
</script>

<style scoped></style>
