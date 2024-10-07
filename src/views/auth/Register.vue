<template>
  <div class="account-pages my-5 pt-sm-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6 col-xl-5">
          <div class="text-center mb-4">
            <a href="#" class="auth-logo mb-5 d-block">
              <img src="@/assets/images/logo-dark.png" alt="" height="30" class="logo logo-dark">
            </a>
            <h4>Sign up</h4>
            <p class="text-muted mb-4">Get your Chatvia account now.</p>
          </div>
          <div class="card">
            <div class="card-body p-4">
              <div class="p-3">
                <form @submit.prevent="registerUser">
                  <div class="mb-3">
                    <label class="form-label">Name</label>
                    <div class="input-group bg-light-subtle rounded-3  mb-3">
                                                <span class="input-group-text text-muted" id="basic-addon5">
                                                    <i class="ri-mail-line"></i>
                                                </span>
                      <input v-model="formData.name"  @input="clearError" type="email" class="form-control form-control-lg bg-light-subtle border-light" placeholder="Enter Email" aria-label="Enter Email" aria-describedby="basic-addon5">
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Email</label>
                    <div class="input-group bg-light-subtle rounded-3  mb-3">
                                                <span class="input-group-text text-muted" id="basic-addon5">
                                                    <i class="ri-mail-line"></i>
                                                </span>
                      <input v-model="formData.email"  @input="clearError" type="email" class="form-control form-control-lg bg-light-subtle border-light" placeholder="Enter Email" aria-label="Enter Email" aria-describedby="basic-addon5">
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Username</label>
                    <div class="input-group bg-light-subtle mb-3 rounded-3">
                                                <span class="input-group-text border-light text-muted" id="basic-addon6">
                                                    <i class="ri-user-2-line"></i>
                                                </span>
                      <input v-model="formData.username"  @input="clearError"  type="text" class="form-control form-control-lg bg-light-subtle border-light" placeholder="Enter Username" aria-label="Enter Username" aria-describedby="basic-addon6">

                    </div>
                  </div>
                  <div class="mb-4">
                    <label class="form-label">Password</label>
                    <div class="input-group bg-light-subtle mb-3 rounded-3">
                                                <span class="input-group-text border-light text-muted" id="basic-addon7">
                                                    <i class="ri-lock-2-line"></i>
                                                </span>
                      <input v-model="formData.password"  @input="clearError"  type="password" class="form-control form-control-lg bg-light-subtle border-light" placeholder="Enter Password" aria-label="Enter Password" aria-describedby="basic-addon7">
                    </div>
                  </div>
                  <span v-if="error" class="text-danger"> {{ error }}</span>
                  <div class="d-grid">
                    <button class="btn btn-primary waves-effect waves-light" type="submit">Sign up</button>
                  </div>
                  <div class="mt-4 text-center">
                    <p class="text-muted mb-0">By registering you agree to the Chatvia <a href="#" class="text-primary">Terms of Use</a></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="mt-5 text-center">
            <p>Already have an account ? <a href="auth-login.html" class="fw-medium text-primary"> Signin </a> </p>
            <p>©
              {{currentYear}} Chatvia. Crafted with <i class="mdi mdi-heart text-danger"></i>by Themesbrand</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {ref} from 'vue';
import axios from 'axios';
import {useRouter} from 'vue-router';

const currentYear = new Date().getFullYear();
const router = useRouter();
const formData = ref({
    'name': '',
    'username': '',
    'email': '',
    'password': ''
  });
  const error = ref('');
  const registerUser = async () => {
    try {
      const response = await axios.post('/api/auth/register', formData.value);
      if (response.data.status) {
        router.push('/');
      }
    } catch (err) {
      const response = err.response.data;
      if (response.message !== '') {
        error.value = (response.message).replaceAll('"','') || 'Server error';
      }
    }
  }
  const clearError = () => {
    error.value = '';
  }
</script>
