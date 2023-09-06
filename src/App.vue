<script setup>
import {RouterView } from 'vue-router'
import AdminLayout from './layout/admin/AdminLayout.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <AdminLayout>
        <RouterView/>
      </AdminLayout>
    </div>
  </header>
</template>