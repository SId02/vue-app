
<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fade-in-up 0.3s ease-out;
}
</style>

<template>
  <div class="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
    <h1 class="text-3xl font-bold text-center mb-6">User Information Form</h1>
    <div id="user-info-fields">
      <div v-for="(user, index) in users" :key="user.id" class="bg-gray-50 p-4 rounded-md mb-4 animate-fade-in-up">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold">User #{{ user.id }}</h2>
          <button v-if="users.length > 1" @click="deleteUser(index)" class="text-gray-400 hover:text-red-500 transition-colors duration-200">
            <i class="fas fa-times text-xl"></i>
          </button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-gray-700 font-medium mb-1">First Name</label>
            <div class="relative">
              <input
                type="text"
                v-model="user.firstName"
                @blur="validateField('firstName', user)"
                placeholder="First Name"
                :class="[
                  'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2',
                  user.errors.firstName ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : '',
                  user.touched.firstName && !user.errors.firstName ? 'border-green-500 focus:ring-green-500 focus:border-green-500' : ''
                ]"
              />
              <i class="fas fa-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            </div>
            <p v-if="user.errors.firstName" class="mt-1 text-sm text-red-500">{{ user.errors.firstName }}</p>
          </div>
          <div>
            <label class="block text-gray-700 font-medium mb-1">Last Name</label>
            <div class="relative">
              <input
                type="text"
                v-model="user.lastName"
                @blur="validateField('lastName', user)"
                placeholder="Last Name"
                :class="[
                  'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2',
                  user.errors.lastName ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : '',
                  user.touched.lastName && !user.errors.lastName ? 'border-green-500 focus:ring-green-500 focus:border-green-500' : ''
                ]"
              />
              <i class="fas fa-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            </div>
            <p v-if="user.errors.lastName" class="mt-1 text-sm text-red-500">{{ user.errors.lastName }}</p>
          </div>
          <div>
            <label class="block text-gray-700 font-medium mb-1">Date of Birth</label>
            <div class="relative">
              <input
                type="date"
                v-model="user.dob"
                @change="calculateAge(user)"
                @blur="validateField('dob', user)"
                :class="[
                  'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2',
                  user.errors.dob ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : '',
                  user.touched.dob && !user.errors.dob ? 'border-green-500 focus:ring-green-500 focus:border-green-500' : ''
                ]"
              />
              <i class="fas fa-calendar-alt absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            </div>
            <p v-if="user.errors.dob" class="mt-1 text-sm text-red-500">{{ user.errors.dob }}</p>
          </div>
          <div>
            <label class="block text-gray-700 font-medium mb-1">Age</label>
            <div class="relative">
              <input type="number" :value="user.age" readonly placeholder="Age" class="w-full px-3 py-2 border rounded-md bg-gray-200 cursor-not-allowed"/>
              <i class="fas fa-birthday-cake absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>
          <div>
            <label class="block text-gray-700 font-medium mb-1">City</label>
            <div class="relative">
              <input
                type="text"
                v-model="user.city"
                @blur="validateField('city', user)"
                placeholder="City"
                :class="[
                  'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2',
                  user.errors.city ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : '',
                  user.touched.city && !user.errors.city ? 'border-green-500 focus:ring-green-500 focus:border-green-500' : ''
                ]"
              />
              <i class="fas fa-city absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            </div>
            <p v-if="user.errors.city" class="mt-1 text-sm text-red-500">{{ user.errors.city }}</p>
          </div>
          <div>
            <label class="block text-gray-700 font-medium mb-1">State</label>
            <div class="relative">
              <input
                type="text"
                v-model="user.state"
                @blur="validateField('state', user)"
                placeholder="State"
                :class="[
                  'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2',
                  user.errors.state ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : '',
                  user.touched.state && !user.errors.state ? 'border-green-500 focus:ring-green-500 focus:border-green-500' : ''
                ]"
              />
              <i class="fas fa-map-marker-alt absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            </div>
            <p v-if="user.errors.state" class="mt-1 text-sm text-red-500">{{ user.errors.state }}</p>
          </div>
          <div>
            <label class="block text-gray-700 font-medium mb-1">Country</label>
            <div class="relative">
              <input
                type="text"
                v-model="user.country"
                @blur="validateField('country', user)"
                placeholder="Country"
                :class="[
                  'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2',
                  user.errors.country ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : '',
                  user.touched.country && !user.errors.country ? 'border-green-500 focus:ring-green-500 focus:border-green-500' : ''
                ]"
              />
              <i class="fas fa-globe-americas absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            </div>
            <p v-if="user.errors.country" class="mt-1 text-sm text-red-500">{{ user.errors.country }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center space-x-4 mt-6">
      <button @click="addUser" class="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-200">
        Add User
      </button>
      <button @click="submitForm" class="px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-colors duration-200">
        Submit
      </button>
    </div>
  </div>
</template>


<script setup>
import { ref, reactive } from 'vue';

const users = ref([
  reactive({
    id: 1,
    firstName: '',
    lastName: '',
    dob: '',
    age: '',
    city: '',
    state: '',
    country: '',
    errors: {},
    touched: {}
  })
]);

let nextUserId = 2;

const addUser = () => {
  users.value.push(
    reactive({
      id: nextUserId++,
      firstName: '',
      lastName: '',
      dob: '',
      age: '',
      city: '',
      state: '',
      country: '',
      errors: {},
      touched: {}
    })
  );
};

const deleteUser = (index) => users.value.splice(index, 1);

const calculateAge = (user) => {
  if (user.dob) {
    const dob = new Date(user.dob);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    user.age = age >= 0 ? age : '';
    validateField('dob', user);
  }
};

const validateField = (field, user) => {
  user.touched[field] = true;
  const value = user[field];
  let error = '';
  switch (field) {
    case 'firstName':
    case 'lastName':
    case 'city':
    case 'state':
    case 'country':
      if (value.length < 2) {
        error = `${field.charAt(0).toUpperCase() + field.slice(1)} must be at least 2 characters.`;
      }
      break;
    case 'dob':
      if (!value) {
        error = 'Please enter a valid date of birth.';
      } else if (user.age < 18) {
        error = 'You must be at least 18 years old.';
      }
      break;
  }
  user.errors[field] = error;
};

const validateForm = () => {
  let isValid = true;
  users.value.forEach(user => {
    ['firstName', 'lastName', 'dob', 'city', 'state', 'country'].forEach(field => {
      validateField(field, user);
      if (user.errors[field]) isValid = false;
    });
  });
  return isValid;
};

const submitForm = () => {
  if (validateForm()) {
    console.log('Form is valid. Data:', JSON.parse(JSON.stringify(users.value)));
    alert('Form submitted successfully!');
  } else {
    console.log('Form has validation errors.');
    alert('Please fix the errors in the form.');
  }
};
</script>