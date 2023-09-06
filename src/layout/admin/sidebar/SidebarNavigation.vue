<script setup>
</script>

<template>
  <nav class="navigation">
    <ul>
      <li class="group">
        <RouterLink to="/">
          <a
            href="#"
            class="p-3 pl-6 group-hover:bg-[#F2F4F7] flex items-center"
          >
            <i class="mr-6"
              ><img src="@/assets/images/svg/home.svg" alt=""
            /></i>
            <span
              class="text-[14px] text-[#667085] font-semibold leading-[24px] group-hover:text-[#344054]"
              >Home</span
            >
          </a>
        </RouterLink>
      </li>
      <li class="group">
        <RouterLink to="/redirects">
          <a
            href="#"
            class="p-3 pl-6 group-hover:bg-[#F2F4F7] flex items-center"
          >
            <i class="mr-6"
              ><img src="@/assets/images/svg/shuffle.svg" alt=""
            /></i>
            <span
              class="text-[14px] text-[#667085] font-semibold leading-[24px] group-hover:text-[#344054]"
              >Redirects</span
            >
          </a>
        </RouterLink>
      </li>
      <li class="group">
        <RouterLink to="/urlshortner">
          <a
            href="#"
            class="p-3 pl-6 group-hover:bg-[#F2F4F7] flex items-center"
          >
            <i class="mr-6"
              ><img src="@/assets/images/svg/link.svg" alt=""
            /></i>
            <span
              class="text-[14px] text-[#667085] font-semibold leading-[24px] group-hover:text-[#344054]"
              >URL shortener</span
            >
          </a></RouterLink
        >
      </li>
      <li class="group">
        <RouterLink to="/monitor">
          <a
            href="#"
            class="p-3 pl-6 group-hover:bg-[#F2F4F7] flex items-center"
          >
            <i class="mr-6"><img src="@/assets/images/svg/eye.svg" alt="" /></i>
            <span
              class="text-[14px] text-[#667085] font-semibold leading-[24px] group-hover:text-[#344054]"
              >Monitor</span
            >
          </a>
        </RouterLink>
      </li>
      <li class="group">
        <RouterLink to="/hostnames">
          <a
            href="#"
            class="p-3 pl-6 group-hover:bg-[#F2F4F7] flex items-center"
          >
            <i class="mr-6"
              ><img src="@/assets/images/svg/server.svg" alt=""
            /></i>
            <span
              class="text-[14px] text-[#667085] font-semibold leading-[24px] group-hover:text-[#344054]"
              >Hostnames</span
            >
          </a>
        </RouterLink>
      </li>
      <li class="group">
        <a href="#" class="p-3 pl-6 group-hover:bg-[#F2F4F7] flex items-center">
          <i class="mr-6"
            ><img src="@/assets/images/svg/coin-stack.svg" alt="" /></i
          ><span
            class="text-[14px] text-[#667085] font-semibold leading-[24px] group-hover:text-[#344054]"
            >Subscriptions</span
          >
        </a>
      </li>
      <li class="group">
        <a href="#" class="p-3 pl-6 group-hover:bg-[#F2F4F7] flex items-center">
          <i class="mr-6"
            ><img src="@/assets/images/svg/settings.svg" alt=""
          /></i>
          <span
            class="text-[14px] text-[#667085] font-semibold leading-[24px] group-hover:text-[#344054]"
            >Settings</span
          >
        </a>
      </li>
    </ul>
  </nav>
</template>