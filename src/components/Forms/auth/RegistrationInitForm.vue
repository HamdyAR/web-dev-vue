<template>
  <div class="app-form">
    <p class="form-title">Login Form</p>
    <FormulateForm @submit="submit">
      <FormulateInput
        name="email"
        type="email"
        label="Email*"
        validation="required"
        validation-name="Email is required"
        placeholder="example@gmail.com"
      />

  </div>
</template>

<script>
import StoreUtils from "../../../utils/BaseUtils/StoreUtils";

export default {
  name: "LoginForm",
  methods: {
    submit(data) {
      StoreUtils.commit("form/INCREASE_FORM_STAGE_BY_ONE", data);

      StoreUtils.dispatch( "auth/login")
    }
  }
};
</script>

<style scoped></style>
