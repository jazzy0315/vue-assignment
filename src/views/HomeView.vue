<script setup>
import {useRoute, useRouter} from 'vue-router';
import {ref, computed} from 'vue';
import {useAuthStore} from '@/stores/authStore.js';

const route = useRoute();
const router = useRouter();
const userId = route.params.id;

const authStore = useAuthStore();

const user = computed(() => authStore.users.find(user => user.id == userId));

if (!user.value) {
  alert('User not found. Please log in.');
  router.push('/'); // Redirect to login page
}

const handleLogout = () => {
  authStore.username = '';
  authStore.token = '';
  authStore.expireAt = '';

  alert('You have been logged out.');
  router.push('/');
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
      <h1 class="text-2xl font-bold text-gray-800 mb-4">Welcome to Your Dashboard</h1>
      <p class="text-lg text-gray-600">{{ user?.username }}</p>
      <button
          @click="handleLogout"
          class="mt-4 py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        Log Out
      </button>
    </div>
  </div>
</template>


