<script>
import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
        isLoggedIn: false,
      };
    },
    methods: {
      handleLogin() {
        axios.post('https://dummyjson.com/auth/login', {
          username: this.username,
          password: this.password,
        })
        .then(() => {
          this.isLoggedIn = true;
        })
        .catch((error) => {
          console.log(error);
        });
      },
      handleLogout() {
        this.isLoggedIn = false;
      },
    },
  };
</script>
<template>
  
   <div class="bg-blue-100 rounded-lg shadow-md about">
    <h1 class="text-3xl text-center text-blue-900">Project</h1>
  </div>
<!--
  <div class="comp">
    <AgeValidation class="p-6 bg-white rounded-lg shadow-md" />
  </div>

  <div class="comp">
    <DataPickerwith180days class="p-6 bg-white rounded-lg shadow-md" />
  </div>
  <div class="comp">
    <TogglePasswordVisibility class="p-6 bg-white rounded-lg shadow-md" />
  </div>

  <div class="comp">
    <RandomQuotes class="p-6 bg-white rounded-lg shadow-lg" />
  </div>
   <div class="comp">
    <CounterApp class="p-6 bg-white rounded-lg shadow-lg" />
  </div> 
  <div class="comp">
    <CounterAppTwo class="p-6 bg-white rounded-lg shadow-lg" />
  </div> -->
  <!-- <div class="comp">
    <CounterApp class="p-6 bg-white rounded-lg shadow-lg" />
  </div>
  <div class="comp">
    <CounterApp class="p-6 bg-white rounded-lg shadow-lg" />
  </div> -->
  <!-- 
	<hr class="border-blue-500 w-50 h-50" />
    <hr class="border-blue-500 w-50" />
	 -->
   <hr class="border-blue-500 w-50" />
   <br>
   <br>
   <hr class="border-blue-500 w-50" />
<!--  -->
<div>
		
		<div class="px-4 mx-auto max-w-7xl">
			<div class="py-12 mx-auto max-w-7xl md:py-24">
				<div class="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
					<div class="flex items-center justify-center">
						<div class="px-2 md:px-12">
							<p class="text-2xl font-bold text-gray-900 md:text-4xl">
								Login With API
							</p>
							<p class="mt-4 text-lg text-gray-600">
								We are using Free API https://dummyjson.com/auth/login
							</p>

              <div v-if="isLoggedIn" class="text-center">
        <h1 class="text-2xl font-bold">Welcome, {{ username }}!</h1>
        <button @click="handleLogout" class="px-4 py-2 mt-4 bg-gray-300 rounded hover:bg-gray-400">
          Logout
        </button>
      </div>
              
							<form  v-else @submit.prevent="handleLogin" class="mt-8 space-y-4">
								<div class="grid w-full items-center gap-1.5">
									<label class="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
										for="username">
										UserName
									</label>
									<input
										class="flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-gray-300 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
										type="text"
										id="username"
										placeholder="username" v-model="username"
									/>
								</div>
								<div class="grid w-full items-center gap-1.5">
									<label
										class="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
										for="password">
                  Password
									</label>
									<input
										class="flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-gray-300 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
										type="password"
										id="password"
										placeholder="Password" v-model="password"/>
								</div>
								
								<button
									type="submit"
									class="w-full px-3 py-2 text-sm font-semibold text-white bg-black rounded-md shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
								>
									Login
								</button>
							</form>
						</div>
					</div>
					
				</div>
			</div>
		</div>
		
	</div>























  <hr class="border-blue-500 w-50" />
   <br>
   <br>
   <hr class="border-blue-500 w-50" />
   <!--  -->
</template>

<style>
/* .about {
  padding: 50px;
  text-align: center;
}

.comp {
  padding: 50px;
  background-color: #f5f5f5;
} */
</style>
