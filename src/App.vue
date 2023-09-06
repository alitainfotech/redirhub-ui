<script setup>
import {RouterView } from 'vue-router'
import AdminLayout from './layout/admin/AdminLayout.vue'
</script>

<template>  
  <div class="wrapper">
    <AdminLayout>
      <RouterView/>
    </AdminLayout>
  </div>  
</template>