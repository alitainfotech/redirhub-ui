<script setup>
import {ref} from 'vue'
const props= defineProps({
  redirect: {
    type: Object,
    required: true
  }
 
})
 const imageUrl = new URL(`/src/assets/redir-logo/${props.redirect.redirLogo}.png`, import.meta.url).href
 const isChecked = ref(false)
</script>
<template>
  <div class="bg-[#fff] p-6 rounded-[8px] mb-4">
    <div class="flex mb-4 lg:flex-none flex-wrap ">
      <div class="form-group mr-3 mt-[10px]">
        <input type="checkbox" :id="redirect.redirId" v-model="isChecked" >
        <label :for="redirect.redirId"></label>
      </div>
      <div class="w-[40px] h-[40px] bg-[#fff] border-[1px] border-[#EAECF0] flex justify-center items-center relative mr-4 rounded-full">
        <span><img :src="imageUrl" alt="" class="max-h-[38px]" /></span>
        <i class="w-[10px] h-[10px] bg-[#12B76A] absolute bottom-0 right-0 rounded-full"></i>
      </div>
      <h3 class="text-[18px] text-[#667085] leading-[40px] w-[60%] lg:w-[30%] overflow-hidden text-ellipsis whitespace-nowrap">{{redirect.redirName}}</h3>
      
      <div class="ml-auto flex items-center max-[1349px]:flex-wrap max-[1349px]:justify-end  lg:mt-0 mt-2">
        <div class="mr-6 textHover flex items-center max-[1349px]:mr-0 max-[1349px]:mb-2 ">
          <div class="ml-6 group flex items-center">
            <i class="mr-2"><img src="@/assets/images/svg/activity.svg" alt="" /></i>
            <span class="text-[14px] text-[#667085] font-normal group-hover:text-[#1D2939]">{{redirect.redirClicks}} clicks</span>
          </div>
          <div class="ml-6 group flex items-center">
            <i class="mr-2"><img src="@/assets/images/svg/command.svg" alt="" /></i>
            <span class="text-[14px] text-[#667085] font-normal group-hover:text-[#1D2939]">Permanent (301)</span>
          </div>
          <div class="ml-6 group flex items-center">
            <i class="mr-2"><img src="@/assets/images/svg/calendar.svg" alt="" /></i>
            <span class="text-[14px] text-[#667085] font-normal group-hover:text-[#1D2939]">{{redirect.redirDate}}</span>
          </div>
        </div>
        <div class="flex items-center">
          <div class="group ml-4">
            <a href="#" class="bg-[#fff] border-[1px] border-[#D0D5DD] rounded-[8px] w-[40px] h-[40px] flex items-center justify-center group-hover:bg-[#D2E2F0] group-hover:border-[#D2E2F0]">
              <img class="w-[20px] h-[20px]" src="@/assets/images/svg/copy.svg" alt="" />
            </a>
          </div>
          <div class="group ml-4">
            <a href="#" class="bg-[#fff] border-[1px] border-[#D0D5DD] rounded-[8px] w-[40px] h-[40px] flex items-center justify-center group-hover:bg-[#D2E2F0] group-hover:border-[#D2E2F0]">
              <img class="w-[20px] h-[20px]" src="@/assets/images/svg/edit.svg" alt="" />
            </a>
          </div>
          <div class="group ml-4">
            <a href="#" class="bg-[#fff] border-[1px] border-[#D0D5DD] rounded-[8px] w-[40px] h-[40px] flex items-center justify-center group-hover:bg-[#D2E2F0] group-hover:border-[#D2E2F0]">
              <img class="w-[20px] h-[20px]" src="@/assets/images/svg/horizontal.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="pl-[88px]">
      <div class="flex items-center mb-4">
        <p class="bg-[#fff] border-[1px] border-[#D0D5DD] rounded-[8px] pl-3 leading-[30px] text-[16px] text-[#475467] font-semibold w-[calc(50%-28px)] overflow-hidden">{{redirect.redirSource}}</p>
        <i class="pl-4 pr-4"><img src="@/assets/images/svg/arrow-right-circle.svg" alt="" /></i>
        <p class="bg-[#fff] border-[1px] border-[#12B76A] rounded-[8px] pl-3 leading-[30px] text-[16px] text-[#12B76A] font-semibold w-[calc(50%-28px)] overflow-hidden">{{redirect.redirDestination}}</p>
      </div>
      <div class="flex flex-wrap" v-if="redirect.redirTags.length">
        <i><img src="@/assets/images/svg/tag.svg" alt="" /></i>
        <span v-for="(tag,index) in redirect.redirTags" :key="index" class="bg-[#FFF6ED] p-[10px] pt-[2px] pb-[2px] rounded-[16px] text-[14px] text-[#C4320A] font-medium leading-[20px] mr-2">{{tag}}</span>
      </div>
    </div>
  </div>
</template>