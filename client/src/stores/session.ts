// General session information

import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { DataEnvelope, User } from "../../../server/types";

import { api as myApi } from "../services/myFetch";

export type FeedbackMessage = {
  type: "success" | "danger" | "info";
  text: string;
};

export const useSessionStore = defineStore("session", () => {
  const user = ref<User | null>(null);
  const token = ref<string | null>(null);

  async function login(email: string, password: string) {
    const response = await myApi<DataEnvelope<{ token: string; user: User }>>('users/login', { email, password }, { method: 'POST' });
    user.value = response.data.user;
    token.value = response.data.token;
  }

  function logout() {
    user.value = null;
    token.value = null;
  }

  const messages = ref<FeedbackMessage[]>([]);
  function addMessage(text: string, type: FeedbackMessage['type'] = 'info') {
    messages.value.push({ type, text })
  }
  function handleError(error: Error | string) {
    const message = typeof error === 'string' ? error : error.message
    addMessage(message, 'danger')
    console.error(error)
  }

  const loadingCount = ref(0);
  const isLoading = computed(() => loadingCount.value > 0);

  function api<T>(endpoint: string, data?: unknown, options: RequestInit = {}) {
    loadingCount.value++; // puts it into a loading state

    options.headers = {
      'Content-Type': 'application/json',
      ...(token.value ? { 'Authorization': `Bearer ${token.value}` } : {}),
      ...options.headers,
    }

    return myApi<T>(endpoint, data, options)
      .then((res) => {
          const response = res as { message?: string };
          if (response && typeof response === 'object' && 'message' in response && response.message) {
            addMessage(response.message, 'success')
          }
          return res
        })
        .catch((error) => {
          handleError(error)
          throw error
        })
        .finally(() => {
          loadingCount.value--
        });
  }

  return {
    user,
    messages,
    addMessage,
    handleError,
    isLoading,
    api,
    token,
    logout,
    login
  };
});

export default useSessionStore;
