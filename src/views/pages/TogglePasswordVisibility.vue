
<style></style>
<template>
  <div>
    <!--  -->
    <router-link to="/" class="w-full p-2 mt-4 text-sm text-center text-white bg-gray-500 rounded hover:bg-gray-700">
            Back to Home
          </router-link>
        <!--  -->  
  </div>
    <section>
      <div class="container p-5 text-center">
        <h1 class="text-3xl">Toggle Password Visibility</h1>
      </div>
      <div class="container flex justify-center p-6">
        <div class="w-1/3 p-6 bg-white rounded-lg shadow-md">
          <div class="field">
            <div class="control">
              <input
                :type="passwordVisible ? 'text' : 'password'"
                value="Password@123"
                class="w-full p-2 border border-gray-300 rounded-md"
              />
              <label class="pt-5 checkbox">
                <input
                  class="m-2"
                  type="checkbox"
                  :checked="passwordVisible"
                  @change="togglePasswordVisibility"
                />
                Show Password
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const passwordVisible = ref(false);
  
      const togglePasswordVisibility = () => {
        passwordVisible.value = !passwordVisible.value;
      };
  
      return {
        passwordVisible,
        togglePasswordVisibility,
      };
    },
  };
  </script>
  
  