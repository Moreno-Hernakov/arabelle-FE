<template>
    <div class="user-main">
     <!-- ======= Header ======= -->
      <header id="header" class="d-flex align-items-center container">
        <div class="container-fluid container-xxl d-flex align-items-center">

          <div id="logo" class="me-auto">
            <h1 class="text-white">
                <router-link to="/">Arabelle</router-link>
            </h1>
          </div>

          <a class="btn btn-danger rounded-5 shadow fw-bold px-3" >
            by renoo
          </a>

        </div>
      </header>
      <!-- End Header -->

      <!-- ======= Hero Section ======= -->
      <section id="hero">
        <div class="hero-container shadow pt-5" data-aos="zoom-in" data-aos-delay="100">
            <div class="card-body text-white mt-5 my-auto align-middle col-md-4" style="text-align: start !important;">

                <!-- <div class="d-flex align-items-center mb-3 pb-1">
                    <span class="h1 fw-bold mb-0">Login</span>
                </div> -->

                <h4 class="fw-bold mb-4 pb-3 text-center" style="letter-spacing: 1px;">
                  Sign into your account
                </h4>

                <div class="form-outline mb-4">
                    <label class="form-label" for="email">Email address</label>
                    <input type="email" v-model="email" id="email" :class="`form-control form-control-lg ${errEmail ? 'is-invalid' : ''} `" />
                    <div  class="invalid-feedback">
                    {{ errEmail }}
                    </div>
                </div>

                <div class="form-outline mb-5">
                    <label class="form-label" for="password">Password</label>
                    <input type="password" v-model="password" id="password" :class="`form-control form-control-lg ${errPassword ? 'is-invalid' : ''} `" />
                    <div  class="invalid-feedback">
                    {{ errPassword }}
                    </div>
                </div>

                <div class="pt-1 mb-4 ">
                    <button @click="login()" class="col-md-12 btn btn-outline-danger btn-lg btn-block" type="button">Login</button>
                </div>

                <p class="mb-5 pb-lg-2 text-center" style="color: #393f81;">
                    <router-link  to="/register">
                    Don't have an account? Register here
                    </router-link>
                </p>

                </div>
        </div>
      </section>
      <!-- End Hero Section -->


      <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
  </div>
</template>

<script>
export default {
    name : 'loginComponent',
    data: function(){
    return {
        isLoading: false,

        email: '',
        password: '',

        errEmail: '',
        errPassword: '',
        }
    },
}
</script>

<style scooped src="../../assets/admin/css/style.css"></style>
  