//import { createApp } from "vue";
//import App from "./App.vue";
//import './style.css'

import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App);

app.use(
  createAuth0({
    domain: "dev-nq6cgd3w773e7fxn.us.auth0.com",
    client_id: "R9RYBjEMEB4EzsZJj4vDETUkc9XDp2Wj",
    redirect_uri: window.location.origin
  })
);

app.mount('#app');
