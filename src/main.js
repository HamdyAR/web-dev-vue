import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import "./filter";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
// import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Vodal from "vodal";
Vue.component(Vodal.name, Vodal);
import "vodal/common.css";
import "vodal/rotate.css";

import VueFormulate from "@braid/vue-formulate";
import AppAutocompleteInput from "./components/App/Inputs/AppAutocompleteInput";
import S3FileUpload from "./utils/BaseUtils/S3FileUpload";
Vue.component("AppAutocompleteInput", AppAutocompleteInput);
Vue.use(VueFormulate, {
  library: {
    autocomplete: {
      classification: "text",
      component: "AppAutocompleteInput"
    }
  },
  uploader: async function(file, progress, error) {
    let uploadedImage = await S3FileUpload.uploadFileToS3BucketAsync(
      file,
      S3FileUpload.params.albums.STAGING,
      progress,
      error
    );
    return await uploadedImage;
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
