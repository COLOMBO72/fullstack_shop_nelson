import { makeAutoObservable } from 'mobx';
export default class ProductStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Мужчинам' },
      { id: 2, name: 'Девушкам' },
      { id: 3, name: 'Детям' },
    ];
    this._clothes = [
      { id: 1, name: 'Верхняя одежда' },
      { id: 2, name: 'Майки' },
      { id: 3, name: 'Кофты' },
      { id: 4, name: 'Рубашки' },
      { id: 5, name: 'Шорты' },
      { id: 6, name: 'Джинсы' },
      { id: 7, name: 'Брюки' },
      { id: 8, name: 'Платья' },
      { id: 9, name: 'Нижнее бельё' },
    ];
    this._brands = [
      { id: 1, name: 'Prada' },
      { id: 2, name: 'Nike' },
      { id: 3, name: 'Louis Vuitton' },
      { id: 4, name: 'Nelson' },
    ];
    this._products = [
      {
        id: 1,
        name: 'Prada bag',
        price: 293000,
        rating: 10,
        img: 'https://image.goxip.com/bW9Eb1VEio-ulsuvCSm0YRmUxmo=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2F%2Fimages%2FPrada-Re-Edition-Shoulder-Bag-Mini-Nylon-Black.jpg',
      },
      {
        id: 2,
        name: 'Prada bag',
        price: 293000,
        rating: 10,
        img: 'https://image.goxip.com/bW9Eb1VEio-ulsuvCSm0YRmUxmo=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2F%2Fimages%2FPrada-Re-Edition-Shoulder-Bag-Mini-Nylon-Black.jpg',
      },
      {
        id: 3,
        name: 'Prada bag',
        price: 293000,
        rating: 10,
        img: 'https://image.goxip.com/bW9Eb1VEio-ulsuvCSm0YRmUxmo=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2F%2Fimages%2FPrada-Re-Edition-Shoulder-Bag-Mini-Nylon-Black.jpg',
      },
      {
        id: 4,
        name: 'Prada bag',
        price: 293000,
        rating: 10,
        img: 'https://image.goxip.com/bW9Eb1VEio-ulsuvCSm0YRmUxmo=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2F%2Fimages%2FPrada-Re-Edition-Shoulder-Bag-Mini-Nylon-Black.jpg',
      },
      {
        id: 5,
        name: 'Prada bag',
        price: 293000,
        rating: 10,
        img: 'https://image.goxip.com/bW9Eb1VEio-ulsuvCSm0YRmUxmo=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2F%2Fimages%2FPrada-Re-Edition-Shoulder-Bag-Mini-Nylon-Black.jpg',
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    this._selectedClothes = {};
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
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }
  setSelectedClothes(clothe) {
    this._selectedClothes = clothe;
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
