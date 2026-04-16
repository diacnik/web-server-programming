
import { defineStore } from "pinia";

import type { DataListEnvelope, Product } from "../../../server/types";
import useSessionStore from "../stores/session";
import { ref } from "vue/dist/vue.js";


export const useProductsStore = defineStore("products", () => {
  getProducts().then((data) => {
    products.value = data.data;
  });
  const products = ref<Product[]>([]);

  return { products };
});
