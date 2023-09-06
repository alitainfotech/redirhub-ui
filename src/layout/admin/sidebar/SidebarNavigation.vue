<script setup>
import {useRoute} from 'vue-router'
import {computed} from 'vue'
const route=useRoute();
const path = computed(() =>route.path.slice(1, route.path.length))
</script>

<template>
  <nav class="navigation">
    <ul>
      <li class="group" :class="{active: path===''}">
        <RouterLink to="/" class="p-3 pl-6 group-hover:bg-[#F2F4F7] flex items-center">          
          <i class="lg:mr-6"><img src="@/assets/images/svg/home.svg" alt=""/></i>
          <span class="text-[14px] text-[#667085] font-semibold leading-[24px] group-hover:text-[#344054] hidden lg:block">Home</span>
        </RouterLink>
      </li>
      <li class="group" :class="{active: path==='redirects'}">
        <RouterLink to="/redirects" class="p-3 pl-6 group-hover:bg-[#F2F4F7] flex items-center">          
          <i class="lg:mr-6"><img src="@/assets/images/svg/shuffle.svg" alt=""/></i>
          <span class="text-[14px] text-[#667085] font-semibold leading-[24px] group-hover:text-[#344054] hidden lg:block">Redirects</span>
        </RouterLink>
      </li>
      <li class="group" :class="{active: path==='urlshortner'}">
        <RouterLink to="/urlshortner" class="p-3 pl-6 group-hover:bg-[#F2F4F7] flex items-center">
          <i class="lg:mr-6"><img src="@/assets/images/svg/link.svg" alt=""/></i>
          <span class="text-[14px] text-[#667085] font-semibold leading-[24px] group-hover:text-[#344054] hidden lg:block">URL shortener</span>
        </RouterLink
        >
      </li>
      <li class="group" :class="{active: path==='monitor'}">
        <RouterLink to="/monitor" class="p-3 pl-6 group-hover:bg-[#F2F4F7] flex items-center">          
          <i class="lg:mr-6"><img src="@/assets/images/svg/eye.svg" alt="" /></i>
          <span class="text-[14px] text-[#667085] font-semibold leading-[24px] group-hover:text-[#344054] hidden lg:block">Monitor</span
          >
        </RouterLink>
      </li>
      <li class="group" :class="{active: path==='hostnames'}">
        <RouterLink to="/hostnames" class="p-3 pl-6 group-hover:bg-[#F2F4F7] flex items-center">          
          <i class="lg:mr-6"><img src="@/assets/images/svg/server.svg" alt=""/></i>
          <span class="text-[14px] text-[#667085] font-semibold leading-[24px] group-hover:text-[#344054] hidden lg:block">Hostnames</span>          
        </RouterLink>
      </li>
      <li class="group">
        <RouterLink to="/" class="p-3 pl-6 group-hover:bg-[#F2F4F7] flex items-center">
          <i class="lg:mr-6"><img src="@/assets/images/svg/coin-stack.svg" alt="" /></i>
          <span class="text-[14px] text-[#667085] font-semibold leading-[24px] group-hover:text-[#344054] hidden lg:block">Subscriptions</span>
        </RouterLink>
      </li>
      <li class="group">
        <RouterLink to="/" class="p-3 pl-6 group-hover:bg-[#F2F4F7] flex items-center">
          <i class="lg:mr-6"><img src="@/assets/images/svg/settings.svg" alt=""/></i>
          <span class="text-[14px] text-[#667085] font-semibold leading-[24px] group-hover:text-[#344054] hidden lg:block">Settings</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>