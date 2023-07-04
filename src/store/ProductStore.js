import { makeAutoObservable } from 'mobx';
export default class ProductStore {
  constructor() {
    this._types = [];
    this._clothes = [];
    this._brands = [];
    this._products = [];
    this._selectedType = {};
    this._selectedBrand = {};
    this._selectedClothes = {};
    this._page = 1;
    this._totalCount = 0;
    this._limit = 5;
    makeAutoObservable(this);
  }
  setTypes(types) {
    this._types = types;
  }
  setClothes(clothes) {
    this._clothes = clothes;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setProducts(products) {
    this._products = products;
  }
  setSelectedType(type) {
    this.setPage(1);
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this.setPage(1);
    this._selectedBrand = brand;
  }
  setSelectedCloth(cloth) {
    this.setPage(1);
    this._selectedClothes = cloth;
  }
  setTotalCount(count) {
    this._totalCount = count;
  }
  setPage(page) {
    this._page = page;
  }
  setLimit(limit) {
    this._limit = limit;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get products() {
    return this._products;
  }
  get clothes() {
    return this._clothes;
  }
  get page() {
    return this._page;
  }
  get totalCount() {
    return this._totalCount;
  }
  get limit() {
    return this._limit;
  }

  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
  get selectedClothes() {
    return this._selectedClothes;
  }
}
