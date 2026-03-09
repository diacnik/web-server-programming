import data from "../data/products.json";
import { defineStore } from "pinia";
import type { Product } from "../types";
import { ref } from "vue/dist/vue.js";

export const useProductStore = defineStore("products", () => {
  const products = ref(data.products);

  return {
    products,
  };

});
