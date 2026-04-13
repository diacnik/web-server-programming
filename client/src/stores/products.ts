import { defineStore } from "pinia";
import type { Product } from "../../../server/types"; // in smaller project, import types directly from server
import { ref } from "vue";

import api from "../services/myFetch";

export const useProductStore = defineStore("products", () => {

  api("/users").then((data) => {
    console.log(data);
  });
  const products = ref<Product[]>([]);

  return { products };

});
