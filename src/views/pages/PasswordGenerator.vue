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
      <div class="container p-5 mt-5 text-center">
        <h1 class="title">Password Generator</h1>
      </div>
  
      <div class="container flex justify-center p-6">
        <div class="w-1/2 column">
          <form class="box">
            <div class="field is-grouped">
              <p class="control is-expanded">
                <input
                  class="input"
                  type="text"
                  placeholder="Password"
                  :value="password"
                  readonly
                  ref="passwordRef"
                />
              </p>
  
              <button class="button" @click="copyPasswordToClipboard">
                <span class="icon is-small">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-clipboard"
                  >
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    <rect
                      x="8"
                      y="2"
                      width="8"
                      height="4"
                      rx="1"
                      ry="1"
                    ></rect>
                  </svg>
                </span>
              </button>
            </div>
            <div class="flex justify-between p-3 condition">
              <div>
                <input
                  type="range"
                  id="length"
                  name="length"
                  min="8"
                  max="30"
                  v-model="length"
                  class="mr-2"
                />
                <label for="length">Length: {{ length }}</label>
              </div>
              <div>
                <label class="checkbox numbers" for="numberInput">
                  <input
                    type="checkbox"
                    v-model="numberAllowed"
                    id="numberInput"
                    class="mr-2"
                  />
                  Numbers
                </label>
              </div>
              <div>
                <label class="checkbox symbols" for="characterInput">
                  <input
                    type="checkbox"
                    v-model="symbolAllowed"
                    id="characterInput"
                    class="mr-2"
                  />
                  Symbols
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
  
      <div class="container m-6">
        <div class="columns is-mobile">
          <div class="column is-half is-offset-one-quarter">
            <div class="text-center">
              <h3 class="text">Length - Min 8 to Max 30</h3>
              <h3 class="text">Letters - A to Z a to z</h3>
              <h3 class="text">Numbers - 0 to 9</h3>
              <h3 class="text">Symbols -!@#$%&*</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { ref, computed, watch } from 'vue';
  
  export default {
    setup() {
      const length = ref(8);
      const numberAllowed = ref(false);
      const symbolAllowed = ref(false);
      const password = ref('');
      const passwordRef = ref(null);
  
      const passwordGenerator = () => {
        let pass = '';
        let letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        if (numberAllowed.value) letter += '0123456789';
        if (symbolAllowed.value) letter += '!@#$%&*';
  
        for (let i = 1; i <= length.value; i++) {
          let char = Math.floor(Math.random() * letter.length + 1);
          pass += letter.charAt(char);
        }
  
        password.value = pass;
      };
  
      const copyPasswordToClipboard = () => {
        passwordRef.value.select();
        passwordRef.value.setSelectionRange(0, 999);
        window.navigator.clipboard.writeText(password.value);
      };
  
      watch([length, numberAllowed, symbolAllowed], () => {
        passwordGenerator();
      });
  
      return {
        length,
        numberAllowed,
        symbolAllowed,
        password,
        passwordRef,
        copyPasswordToClipboard,
      };
    },
  };
  </script>