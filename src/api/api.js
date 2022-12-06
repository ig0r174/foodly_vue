import axios from "@/api/axios";

const search = (product, page) => {
  return axios.get("/api/products/search", {
    params: {
      q: product,
      page: page
    },
  });
};

const product = (id) => {
  return axios.get(`/api/products/${id}`);
}

const supplement = (id) => {
  return axios.get(`/api/supplements/${id}`);
}

export default { search, product, supplement };