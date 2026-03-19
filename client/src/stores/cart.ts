import { defineStore } from "pinia";
import type { Product } from "../types";
import { computed, ref } from "vue";
import { useProductStore } from "./products";

export type CartItem = {
  id: number;
  quantity: number;
};

export const useCartStore = defineStore("cart", () => {
  const items = ref<CartItem[]>([]);
  const isCartSideBarOpen = ref(false);

  const productStore = useProductStore();

  function addItem(productId: number) {
    const item = items.value.find((item) => item.id === productId);
    if (item) {
      item.quantity++;
      return;
    }

    const product = productStore.products.find((p) => p.id === productId);
    if (product) {
      items.value.push({ id: productId, quantity: 1 });
    }
  }

  function addToCart(productId: number, quantity: number) {
    const existingItem = items.value.find((product) => product.id === productId);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      items.value.push({ id: productId, quantity });
    }
  }

  function removeFromCart(productId: number) {
    items.value = items.value.filter((item) => item.id !== productId);
  }

  function clearCart() {
    items.value = [];
  }

const count = computed(() => {
  return items.value.reduce((total, item) => total + item.quantity, 0);
});
const totalPrice = computed(() => {
  return items.value.reduce((total, item) => {
    const product = productStore.products.find((p) => p.id === item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
});

  return {
    items,
    addToCart,
    removeFromCart,
    clearCart,
    isCartSideBarOpen,
    count,
    totalPrice
  };
});
