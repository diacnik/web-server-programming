import { defineStore } from "pinia";
import type { DataListEnvelope, Product } from "../../../server/types";
import { computed, ref } from "vue";
import { useProductStore } from "./products";
import { useSessionStore } from "./session";

export type CartItem = {
  product: Product;
  quantity: number;
};

export const useCartStore = defineStore("cart", () => {
  const items = ref<CartItem[]>([]);
  const isCartSideBarOpen = ref(false);

  const productStore = useProductStore();
  const sessionStore = useSessionStore();

  function loadCart() {
    sessionStore.api<DataListEnvelope<CartItem>>(`cart/${sessionStore.user?.id ?? 1}`).then((response) => {
      items.value = response.data;
    });
  }

  function addItem(productId: number) {
    const item = items.value.find((item) => item.product.id === productId);
    if (item) {
      item.quantity++;
      return;
    }

    const product = productStore.products.find((p) => p.id === productId);
    if (product) {
      items.value.push({ product, quantity: 1 });
    }
  }

  function removeItem(productId: number) {
    items.value = items.value.filter((item) => item.product.id !== productId);
  }

  function clearCart() {
    items.value = [];
  }

const count = computed(() =>
  items.value.reduce((total, item) => total + item.quantity, 0)
);
const totalPrice = computed(() =>
  items.value.reduce((total, item) => total + item.product.price * item.quantity, 0)
);

  return {
    items,
    addItem,
    removeItem,
    clearCart,
    isCartSideBarOpen,
    count,
    totalPrice
  };
});
