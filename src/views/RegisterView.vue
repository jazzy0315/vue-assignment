<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">Register</h2>
      <Form @submit="onSubmit" class="space-y-4">
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
          <Field
              :rules="validateUsername"
              name="username"
              type="text"
              id="username"
              v-model="username"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
          />
        </div>
        <div v-show="invalidUsername" class="text-sm text-red-600">
          <p>The field may not be empty</p>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <Field
              :rules="validateEmail"
              name="email"
              type="email"
              id="email"
              v-model="email"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
          />
        </div>
        <div v-show="invalidEmail" class="text-sm text-red-600">
          <p>Invalid email format</p>
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <Field
              :rules="validatePassword"
              name="password"
              type="password"
              id="password"
              v-model="password"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
          />
        </div>
        <div v-show="invalidPassword" class="text-sm text-red-600">
          <p>Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character</p>
        </div>
        <button
            @click="userNotify"
            type="submit"
            class="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Register
        </button>
        <button
            @click="backToLogin"
            type="button"
            class="w-full py-2 px-4 mt-4 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Back to Login
        </button>
      </Form>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {Form, Field} from 'vee-validate';
import {useAuthStore} from '@/stores/authStore.js';


const username = ref('');
const email = ref('');
const password = ref('');
const invalidUsername = ref(false)
const invalidPassword = ref(false)
const invalidEmail = ref(false)
const router = useRouter();
const authStore = useAuthStore();

const validateUsername = (value) => {
  if (!value) {
    return false;
  }
  const regex = /^.+$/;
  if (!regex.test(value)) {
    return false;
  }
  return true;
}
const validateEmail = (value) => {
  if (!value) {
    return false;
  }
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(value)) {
    return false;
  }
  return true;
};


const validatePassword = (value) => {
  if (!value) {
    return false;
  }
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!regex.test(value)) {
    return false;
  }
  return true;
};

const registerUser = () => {
  authStore.register(username.value, email.value, password.value);
};

const backToLogin = () => {
  router.push('/');
}

const userNotify = () => {
  const emailValidation = validateEmail(email.value);
  const passwordValidation = validatePassword(password.value);
  const UsernameValidation = validateUsername(username.value);
  if (UsernameValidation === false) {
    invalidUsername.value = true
  } else if (UsernameValidation) {
    invalidUsername.value = false;
  }
  if (emailValidation === false) {
    invalidEmail.value = true
  } else if (emailValidation) {
    invalidEmail.value = false;
  }
  if (passwordValidation === false) {
    invalidPassword.value = true;
  } else if (passwordValidation) {
    invalidPassword.value = false;
  }
}

const onSubmit = () => {

  const emailValidation = validateEmail(email.value);
  const passwordValidation = validatePassword(password.value);
  if (emailValidation === true && passwordValidation === true) {
    registerUser();
  }
  else {
    alert("Invalid username or password");
  }
};





</script>

<style scoped>


form div {
  margin-bottom: 10px;
}

button {
  padding: 10px 20px;
}
</style>
