<script setup>
import SidebarLogo from '../sidebar/SideBarLogo.vue'
import SideBarFooter from '../sidebar/SideBarFooter.vue'
import SidebarNavigation from '../sidebar/SidebarNavigation.vue'
</script>

<template>
    <div class="sidebar w-[260px] border-r-[1px] border-[#EAECF0] bg-[#fff] absolute left-0 top-0 h-screen flex flex-col">
      <SidebarLogo/>
      <SidebarNavigation/>
      <SideBarFooter/>
    </div>
</template>
