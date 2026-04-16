// General session information

import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { User } from "../../../server/types";

import { api as myApi } from "../services/myFetch";

export const useSessionStore = defineStore("session", () => {
  const user = ref<User | null>(null);

  const messages = ref<string[]>([]);

  const loadingCount = ref(0);
  const isLoading = computed(() => loadingCount.value > 0);

  function api(endpoint: string) {
    loadingCount.value++; // puts it into a loading state

    return myApi(endpoint).finally(() => {
      loadingCount.value--; // decrements when the request is done, whether it succeeded or failed
    });
  }

  return {
    user,
    messages,
    isLoading,
    api,
  };
});

export default useSessionStore;
