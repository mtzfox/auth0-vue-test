<template class="container">

    <div v-if="isAuthenticated && !isLoading">
        <h2>Welcome {{user.nickname}}, you are logged in.</h2>
        <h4>{{user.email}}</h4>
    </div>
    <div v-if="!isAuthenticated && !isLoading">
    <button 
        class="btn btn-primary btn-margin" 
        @click.prevent="login">Log in</button>
    </div>
    <div v-if="isAuthenticated && !isLoading">
    <button 
        class="btn btn-primary btn-block"
        @click="logout">Log out</button>
    </div>

    
</template>
  
  <script>
    import { useAuth0 } from '@auth0/auth0-vue';

    export default {
        setup() {
            const auth0 = useAuth0();
            
        
            

            return {
                data: function () {
                    return {
                        user: { 
                            nickname,
                            name,
                            picture,
                            updated_at,
                            email,
                            email_verified,
                            sub,
                        },
                    };
                },
                name: 'LoginMenu',
                isAuthenticated: auth0.isAuthenticated,
                isLoading: auth0.isLoading,
                user: auth0.user,

                login: () => {
                    auth0.loginWithRedirect();
                },
                logout: () => {
                    auth0.logout({ 
                        returnTo: window.location.origin
                    });
                },
            };
        }
    };
  </script>

<style>
#app {
    background-color: slateblue;
border-radius: 5px;
}
#mobileAuthNavBar {
  min-height: 125px;
  justify-content: space-between;
}
</style>