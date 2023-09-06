<script setup>
import NavBarMoreoptions from './NavBarMoreoptions.vue'
import NavBarProfile from './NavBarProfile.vue'
import NavBarSearch from './NavBarSearch.vue'
</script>

<template>
    <div class="absolute right-0 top-0 w-[calc(100%-72px)] lg:w-[calc(100%-260px)] bg-[#fff] border-b-[1px] border-[#EAECF0] h-[64px] p-3 pl-[30px] pr-[30px] flex items-center">
      <!-- <NavBarMoreoptions/> -->
      <NavBarSearch/>
      <NavBarProfile/>
    </div>
</template>
