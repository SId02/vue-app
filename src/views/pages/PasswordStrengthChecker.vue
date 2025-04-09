<style scoped></style>
<template>
    <div class="container p-4 mx-auto">
      <div class="flex justify-center">
        <div class="w-full sm:w-2/3 md:w-1/2 lg:w-6/12">
          <h3 class="text-lg font-bold text-center sm:text-xl md:text-2xl">
            Password Strength Checker
          </h3>
          <input
            type="password"
            v-model="password"
            @input="inputHandler"
            placeholder="Enter your password"
            class="w-full p-2 mt-4 border rounded sm:mt-6 md:mt-8"
          />
          <div class="w-full h-2 mt-2 bg-gray-200 rounded status-bar sm:mt-3 md:mt-4">
            <div
              class="h-full strength"
              :style="{ width: strengthBarWidth, backgroundColor: strengthBarColor }"
            ></div>
          </div>
          <div
            v-if="showMessage"
            class="p-3 mt-2 text-center rounded message sm:mt-3 md:mt-4"
            :class="[messageBgColor, messageColor]"
          >
            {{ message }}
          </div>
        </div>
      </div>
    </div>
    <footer class="flex justify-center mt-4">
      <router-link to="/" class="text-blue-500 hover:underline">
        Back to Home
      </router-link>
    </footer>
  </template>
  
  <script setup>
  import { ref, computed, watch } from 'vue';
  import { useRouter } from 'vue-router';
  
  const password = ref('');
  const message = ref('');
  const messageColor = ref('text-red-800');
  const messageBgColor = ref('bg-red-200');
  const strengthBarWidth = ref('0%');
  const strengthBarColor = ref('bg-red-500');
  const showMessage = ref(false);
  
  const inputHandler = (event) => {
    password.value = event.target.value.trim();
    showMessage.value = true;
  };
  
  watch(password, (newPassword) => {
    let newWidth = '0%';
    let barColor = 'bg-red-500';
    let textColor = 'text-red-800';
    let bgColor = 'bg-red-200';
    let newMessage = 'Very Weak';
  
    if (newPassword.length === 0) {
      newMessage = 'Very Weak';
      newWidth = '0%';
      showMessage.value = false;
    } else if (newPassword.length <= 4) {
      newMessage = 'Very Weak';
      newWidth = `${(newPassword.length / 16) * 100}%`;
    } else if (newPassword.length <= 6) {
      newMessage = 'Weak';
      newWidth = `${(newPassword.length / 16) * 100}%`;
      barColor = 'bg-orange-500';
      textColor = 'text-orange-800';
      bgColor = 'bg-orange-200';
    } else if (newPassword.length <= 8) {
      newMessage = 'Medium';
      newWidth = `${(newPassword.length / 16) * 100}%`;
      barColor = 'bg-yellow-500';
      textColor = 'text-yellow-800';
      bgColor = 'bg-yellow-200';
    } else if (newPassword.length <= 12) {
      newMessage = 'Strong';
      newWidth = `${(newPassword.length / 16) * 100}%`;
      barColor = 'bg-blue-500';
      textColor = 'text-blue-800';
      bgColor = 'bg-blue-200';
    } else {
      newMessage = 'Very Strong';
      newWidth = '100%';
      barColor = 'bg-green-500';
      textColor = 'text-green-800';
      bgColor = 'bg-green-200';
    }
  
    strengthBarWidth.value = newWidth;
    strengthBarColor.value = barColor;
    messageColor.value = textColor;
    messageBgColor.value = bgColor;
    message.value = newMessage;
  });
  </script>
 
  