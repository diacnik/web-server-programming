import { defineStore } from "pinia";
import type { DataListEnvelope, Product } from "../../../server/types"; // in smaller project, import types directly from server
import { ref } from "vue";
import { api } from "../services/myFetch";

export const useProductStore = defineStore("products", () => {

  api<DataListEnvelope<Product>>("/products").then((data) => {
    products.value = data.data;
  });
  const products = ref<Product[]>([]);

  return { products };

});
