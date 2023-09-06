<script setup>
import NavBar from "./navbar/NavBar.vue";
import SideBar from "./sidebar/SideBar.vue";
</script>

<template>
  <main>
    <div>
      <NavBar />
      <slot />
      <SideBar />
    </div>
  </main>
</template>
