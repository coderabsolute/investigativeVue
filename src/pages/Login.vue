<template>
  <div class="login-wrapper columns">
    <div class="column is-8 is-hidden-mobile hero-banner">
      <section class="hero is-fullheight is-primary">
      </section>  
    </div>
    <div class="column is-4">
      <section class="hero is-fullheight">
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column is-10 is-offset-1">

                <form @submit.prevent="onSubmit" class="login-form">
                  <div class="columns">
                    <div class="column">
                      <p class="control has-icon has-icon-right">
                        <input v-model="vm.username" class="input email-input is-medium" type="text" placeholder="username@eduhours.com">
                        <span class="icon user">
                          <i class="fa fa-user"></i>
                        </span>
                      </p>  
                    </div>
                  </div>

                  <div class="columns">
                    <div class="column">
                      <p class="control has-icon has-icon-right">
                        <input v-model="vm.password" class="input password-input is-medium" type="password" placeholder="●●●●●●●">
                        <span class="icon user">
                          <i class="fa fa-lock"></i>
                        </span>
                      </p>
                    </div>
                  </div>

                  <div class="columns">
                    <div class="column">
                      <p class="control login">
                        <button class="button is-primary is-large is-fullwidth" :class="{ 'is-loading': isLoading }">
                        <span class="icon">
                          <i class="fa fa-sign-in"></i>
                        </span>
                        <span>Login</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </section>  
    </div>
  </div>
</template>

<script>
import ApiHelper from '@/Api/ApiHelper'

export default {
  name: 'Login',
  data () {
    return {
      isLoading: false,
      vm: {
        username: 'test@test.com',
        password: 'test'
        // username: null,
        // password: null
      }
    }
  },

  methods: {
    onSubmit: function () {
      if (this.vm.username === null || this.vm.username === '') {
        return
      }

      if (this.vm.password === null || this.vm.password === '') {
        return
      }

      this.isLoading = true

      const json = {
        username: this.vm.username,
        password: this.vm.password
      }

      ApiHelper.post('auth', json)
      .then(response => {
        const accessToken = response.data.accessToken
        const tenantName = response.data.tenantName
        const fullName = response.data.fullName
        const userTypeName = response.data.userTypeName

        // store to the browser's local storage
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('tenantName', tenantName)
        localStorage.setItem('fullName', fullName)
        localStorage.setItem('userTypeName', userTypeName)

        // push to dashboard
        this.$router.push({ path: '/dashboard' })
      })
      .catch(error => {
        const ERROR_API_SERVER_NOT_RUNNING = 'The Api server is not running now.'
        const ERROR_INCORRECT_LOGIN_PASSWORD = 'The login/password is incorrect.'
        const ERROR_GENERAL_NETWORK_ERROR = 'General network Error..'

        this.isLoading = false

        if (!error.response) {
          this.notifyOnError(ERROR_API_SERVER_NOT_RUNNING)
        } else {
          if (error.response.status === 401) {
            this.notifyOnError(ERROR_INCORRECT_LOGIN_PASSWORD)
          } else {
            this.notifyOnError(ERROR_GENERAL_NETWORK_ERROR)
          }
        }
      })
    }
  }
}
</script>

