<template>
  <div class="app-form">
    <p class="form-title">Registration Complete Form</p>
    <FormulateForm @submit="submit">
      <FormulateInput
        name="username"
        type="text"
        label="username*"
        validation="required"
        validation-name="Username"
        placeholder="John"
      />
      <FormulateInput
          name="token"
          type="number"
          label="token"
          validation="required"
          validation-name="token"
          placeholder="1234"
      />
      <FormulateInput
          name="password"
          type="password"
          label="password"
          validation="required"
          validation-name="password"
          placeholder="password" />

      <FormulateInput
          name="password_confirm"
          type="password"
          label="password"
          validation="required|confirm"
          validation-name="confirm password"
          placeholder="password"
      />

  </div>
</template>

<script>
import StoreUtils from "../../../utils/BaseUtils/StoreUtils";

export default {
  name: "RegistrationCompleteForm",
  methods: {
    submit(data) {
      StoreUtils.commit("form/INCREASE_FORM_STAGE_BY_ONE", data);

      StoreUtils.dispatch( "auth/registrationInit")
    }
  }
};
</script>

<style scoped></style>
