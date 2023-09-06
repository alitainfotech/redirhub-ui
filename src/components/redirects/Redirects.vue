<script setup>
import Redirect from './Redirect.vue'
import { useRedirectStore } from '../../stores/redirects'
const store = useRedirectStore()
const redirects = store.redirects
</script>
<template>
  <div class="greetings">
    <Redirect v-for="(redirect,index ) in redirects" :key="index" :redirect="redirect"/>
  </div>
</template>