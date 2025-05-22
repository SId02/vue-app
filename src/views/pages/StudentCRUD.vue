<style scoped></style>

<template>
  <section class="min-h-screen py-6 bg-gray-50">
    <div class="container pb-5 mx-auto text-center">
      <h1 class="text-4xl font-bold text-gray-800">Student CRUD</h1>
    </div>

    <div class="container px-4 pt-5 mx-auto">
      <form @submit.prevent="handleSubmit" autocomplete="off" class="p-6 mb-8 bg-white rounded-lg shadow-md">
        <div class="grid items-end grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
          <div class="col-span-1">
            <label class="block mb-2 text-sm font-bold text-gray-700" for="studentId">
              Student ID <span class="text-red-500">*</span>
            </label>
            <input
              :class="['shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', validationError.studentId ? 'border-red-500' : '']"
              id="studentId"
              type="text"
              name="studentId"
              v-model="formData.studentId"
              maxlength="8"
            />
            <p v-if="validationError.studentId" class="mt-1 text-xs italic text-red-500">
              Student ID must be exactly 8 alphanumeric characters (letters and numbers only).
            </p>
          </div>

          <div class="col-span-1">
            <label class="block mb-2 text-sm font-bold text-gray-700" for="studentName">
              Student Name
            </label>
            <input
              class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="studentName"
              type="text"
              name="studentName"
              v-model="formData.studentName"
            />
          </div>

          <div class="col-span-1">
            <label class="block mb-2 text-sm font-bold text-gray-700" for="standard">
              Standard <span class="text-red-500">*</span>
            </label>
            <input
              :class="['shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', validationError.standard ? 'border-red-500' : '']"
              id="standard"
              type="number"
              name="standard"
              v-model="formData.standard"
              min="1"
              max="12"
              step="1"
              pattern="\d*"
            />
            <p v-if="validationError.standard" class="mt-1 text-xs italic text-red-500">
              Standard must be a number from 1 to 12 (no alphabets or symbols).
            </p>
          </div>

          <div class="col-span-1">
            <label class="block mb-2 text-sm font-bold text-gray-700" for="marks">
              Marks
            </label>
            <input
              class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="marks"
              type="text"
              name="marks"
              v-model="formData.marks"
            />
          </div>

          <div class="col-span-1">
            <label class="block mb-2 text-sm font-bold text-gray-700" for="location">
              Location
            </label>
            <input
              class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="location"
              type="text"
              name="location"
              v-model="formData.location"
            />
          </div>

          <div class="mt-4 text-center col-span-full">
            <button
              type="submit"
              class="px-6 py-2 font-bold text-white transition duration-200 bg-gray-500 rounded hover:bg-gray-700 focus:outline-none focus:shadow-outline"
            >
              {{ selectedRow ? 'Update' : 'Submit' }}
            </button>
          </div>
        </div>
      </form>
    </div>

    <div v-if="notification.show" class="container px-4 mx-auto mt-4">
      <div class="relative px-4 py-3 text-green-700 bg-green-100 border border-green-400 rounded" role="alert">
        <strong class="font-bold">Success!</strong>
        <span class="block ml-2 sm:inline">{{ notification.message }}</span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3" @click="closeNotification">
          <svg class="w-6 h-6 text-green-500 fill-current" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.15a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.15 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
        </span>
      </div>
    </div>

    <div v-if="students.length > 0" class="container px-4 mx-auto mt-5">
      <div class="overflow-x-auto bg-white rounded-lg shadow-md">
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Student ID
              </th>
              <th class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Student Name
              </th>
              <th class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Standard
              </th>
              <th class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Marks
              </th>
              <th class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Location
              </th>
              <th class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in students" :key="student.id" class="hover:bg-gray-50">
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                {{ student.studentId }}
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                {{ student.studentName }}
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                {{ student.standard }}
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                {{ student.marks }}
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                {{ student.location }}
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <div class="flex space-x-2">
                  <button
                    @click="handleEdit(student)"
                    class="px-4 py-2 text-xs font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  >
                    Edit
                  </button>
                  <button
                    @click="handleDelete(student.id)"
                    class="px-4 py-2 text-xs font-bold text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const students = ref([]);
const formData = ref({
  studentId: '',
  studentName: '',
  marks: '',
  location: '',
  standard: ''
});
const selectedRow = ref(null);
const validationError = ref({
  studentId: false,
  standard: false
});

const notification = ref({
  show: false,
  message: ''
});

const handleInputChange = (e) => {
  const { name, value } = e.target;
  formData.value = {
    ...formData.value,
    [name]: value
  };
};

const validate = () => {
  let valid = true;
  let errors = { studentId: false, standard: false };

  const alphanumeric8 = /^[A-Za-z0-9]{8}$/;
  if (!alphanumeric8.test(formData.value.studentId)) {
    errors.studentId = true;
    valid = false;
  }

  const standardNum = Number(formData.value.standard);
  if (
    !/^\d+$/.test(formData.value.standard) ||
    standardNum < 1 ||
    standardNum > 12
  ) {
    errors.standard = true;
    valid = false;
  }

  validationError.value = errors;
  return valid;
};

const handleSubmit = () => {
  if (validate()) {
    if (selectedRow.value === null) {
      // Add new student
      students.value.push({ ...formData.value, id: Date.now() });
    } else {
      // Update existing student
      students.value = students.value.map(student =>
        student.id === selectedRow.value.id ? { ...formData.value, id: selectedRow.value.id } : student
      );
      selectedRow.value = null;
    }
    // Reset form
    formData.value = {
      studentId: '',
      studentName: '',
      marks: '',
      location: '',
      standard: ''
    };
    validationError.value = { studentId: false, standard: false };
  }
};

const handleEdit = (student) => {
  selectedRow.value = student;
  formData.value = {
    studentId: student.studentId,
    studentName: student.studentName,
    marks: student.marks,
    location: student.location,
    standard: student.standard
  };
};

const handleDelete = (studentId) => {
  if (confirm('Are you sure you want to delete this record?')) {
    students.value = students.value.filter(student => student.id !== studentId);
    // Reset form and selected row if the deleted student was being edited
    if (selectedRow.value && selectedRow.value.id === studentId) {
      formData.value = {
        studentId: '',
        studentName: '',
        marks: '',
        location: '',
        standard: ''
      };
      selectedRow.value = null;
    }
    notification.value = {
      show: true,
      message: 'Student record has been deleted successfully.'
    };
  }
};

const closeNotification = () => {
  notification.value = {
    show: false,
    message: ''
  };
};
</script>