import { ref} from 'vue'
import { defineStore } from 'pinia'
import {redirectsData} from '../../data/redirects'
export const useRedirectStore = defineStore('redirect', () => {
  const redirects = ref(redirectsData)
  return { redirects }
})
