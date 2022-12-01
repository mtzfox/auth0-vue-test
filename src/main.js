import { createAuth0 } from '@auth0/auth0-vue';
import { createApp } from "vue";
import App from "./App.vue";
import './style.css'

const app = createApp(App);

app.use(
  createAuth0({
    domain: "dev-nq6cgd3w773e7fxn.us.auth0.com",
    client_id: "R9RYBjEMEB4EzsZJj4vDETUkc9XDp2Wj",
    redirect_uri: "http://localhost:5173/",
  })
);

app.mount('#app');
