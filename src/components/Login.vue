<template>
  <div>
    <div class="login-wrapper">
      <b-card class="mb-2" title="Access">
          <b-form>
            <b-form-input v-model="username"
                          type="text"
                          placeholder="Username"
            ></b-form-input>

            <b-form-input v-model="pass"
                          type="password"
                          placeholder="Password"
            ></b-form-input>

            <b-button variant="primary" @click="$router.push('home')">Login</b-button>

          </b-form>
      </b-card>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'login',
    data () {
      return {
        username: null,
        pass: null
      }
    }
  }
</script>

<style scoped>

</style>
