<script setup>
import NavBar from "./navbar/NavBar.vue";
import SideBar from "./sidebar/SideBar.vue";
</script>

<template>  
    <div>
      <NavBar />
      <slot />
      <SideBar />
    </div>  
</template>
