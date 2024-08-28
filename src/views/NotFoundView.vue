<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full text-center">
      <h1 class="text-3xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p class="text-lg text-gray-600 mb-6">Sorry, the page you are looking for does not exist.</p>
      <router-link
          to="/"
          class="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md shadow-md"
      >
        Go to Login
      </router-link>
    </div>
  </div>
</template>

<style scoped>
/* You can add your styles here */
</style>
