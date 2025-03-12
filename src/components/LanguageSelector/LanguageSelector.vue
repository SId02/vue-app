<template>
    <select
      v-model="$i18n.locale"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
      <option value="en">English</option>
      <option value="hi">Hindi</option>
      <option value="mr">Marathi</option>
      <option value="kn">Kannada</option>
      <option value="gu">Gujarati</option>
    </select>
  </template>
  
  <script>
  export default {
    name: 'LanguageSelector'
  }
  </script>
  