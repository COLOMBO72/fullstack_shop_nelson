import { $authhost, $host } from '.';

export const createType = async (type) => {
  const { data } = await $authhost.post('api/type', type);
  return data;
};
export const fetchTypes = async () => {
  const { data } = await $host.get('api/type');
  return data;
};

export const createCloth = async (cloth) => {
  const { data } = await $authhost.post('api/cloth', cloth);
  return data;
};
export const fetchCloth = async () => {
  const { data } = await $host.get('api/cloth');
  return data;
};

export const createBrand = async (brand) => {
  const { data } = await $authhost.post('api/brand', brand);
  return data;
};
export const fetchBrands = async () => {
  const { data } = await $host.get('api/brand');
  return data;
};

export const createProduct = async (product) => {
  const { data } = await $authhost.post('api/device', product);
  return data;
};
export const fetchProducts = async (typeId, brandId, clothId, page, limit = 5) => {
  const { data } = await $host.get('api/device', {
    params: {
      typeId,
      brandId,
      clothId,
      limit,
      page,
    },
  });
  return data;
};
export const fetchOneProduct = async (id) => {
  const { data } = await $host.get('api/device/' + id);
  return data;
};
