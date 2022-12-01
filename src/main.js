import { createAuth0 } from '@auth0/auth0-vue';
import { createApp } from "vue";
import App from "./App.vue";
import './style.css'

import authConfig from "../auth_config.json";

const app = createApp(App);

app.use(
  createAuth0({
    domain: authConfig.domain,
    client_id: authConfig.clientId,
    redirect_uri: window.location.origin,
  })
);

app.mount('#app');
