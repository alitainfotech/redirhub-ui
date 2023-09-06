<template>
  <div class="">
    <div class="flex items-center mb-8">
      <h3 class="text-[30px] text-[#344054] leading-[48px] font-semibold">Redirects</h3>
      <div class="ml-auto flex items-center">
        <div class="group">
          <a href="#" class="bg-[#fff] border-[1px] border-[#D0D5DD] rounded-[8px] w-[48px] h-[48px] flex items-center ml-4 justify-center group-hover:bg-[#D2E2F0] group-hover:border-[#D2E2F0]">
            <img class="w-[20px] h-[20px]" src="@/assets/images/svg/server.svg" alt="" />
          </a>
        </div>
        <div class="group">
            <a href="#" class="bg-[#fff] border-[1px] border-[#D0D5DD] rounded-[8px] w-[48px] h-[48px] flex items-center ml-4 justify-center group-hover:bg-[#D2E2F0] group-hover:border-[#D2E2F0]">
            <img class="w-[20px] h-[20px]" src="@/assets/images/svg/pie-chart.svg" alt="" />
          </a>
        </div>
        <div class="group">
          <a href="#" class="bg-[#fff] border-[1px] border-[#D0D5DD] rounded-[8px] w-[48px] h-[48px] flex items-center ml-4 justify-center group-hover:bg-[#D2E2F0] group-hover:border-[#D2E2F0]">
            <img class="w-[20px] h-[20px]" src="@/assets/images/svg/trending-up.svg" alt="" />
          </a>
        </div>
        <div class="group">
          <a href="#" class="bg-[#1C6DB6] rounded-[8px] flex items-center ml-4 text-[16px] font-semibold text-[#fff] leading-[48px] pl-5 pr-5 group-hover:bg-[#F79009] group-hover:border-[#F79009]">New redirect</a>
        </div>
      </div>
    </div>
    <div class="mb-6 flex items-center">
      <div class="group">
        <a href="#" class="bg-[#fff] border-[1px] border-[#D0D5DD] rounded-[8px] p-[9px] pl-4 pr-4 flex items-center justify-center group-hover:bg-[#D2E2F0] group-hover:border-[#D2E2F0]">
            <span class="text-[#344054] text-[14px] font-semibold mr-2 leading-[20px]">Filter</span>
            <i><img src="@/assets/images/svg/FiltersLines.svg" alt="" /></i>
        </a>
      </div>
      <div class="ml-auto flex items-center">
        <p class="text-[#344054] text-[16px] leading-[20px] mr-4">Appearance</p>
        <div class="border-[1px] border-[#D0D5DD] rounded-[8px] bg-[#fff] w-[89px] flex items-center overflow-hidden">
          <div class="group w-[44px]">
            <i class="w-[44px] h-[38px] flex items-center justify-center group-hover:bg-[#D2E2F0] rounded-[8px 0 0 8px]">
              <img src="@/assets/images/svg/align-justify.svg" alt="" />
            </i>
          </div>
          <span class="min-w-[1px] h-[38px] bg-[#D0D5DD]"></span>
          <div class="group w-[44px]">
            <i class="w-[44px] h-[38px] flex items-center justify-center group-hover:bg-[#D2E2F0] rounded-[0 8px 8px 0 ]">
              <img src="@/assets/images/svg/sidebar.svg" alt="" />
            </i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>