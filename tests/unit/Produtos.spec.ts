import { shallowMount } from "@vue/test-utils";
import Produtos from "@/components/Loja/Produtos.vue";

const produtos = [
  {
    available: true,
    image:
      "https://www.wine.com.br/cdn-cgi/image/q=99,f=auto,h=176/assets-images/produtos/23315-01.png",
    name: "Partridge Flying Malbec 2019",
    priceMember: 34.9,
    pricePromotional: 41.06,
    priceStock: 59.9,
  },
  {
    available: true,
    image:
      "https://www.wine.com.br/cdn-cgi/image/q=99,f=auto,h=176/assets-images/produtos/19728-01.png",
    name: "Oxford Landing Cabernet Shiraz 2016",
    priceMember: 47.9,
    pricePromotional: 56.35,
    priceStock: 120.9,
  },
  {
    available: false,
    image:
      "https://www.wine.com.br/cdn-cgi/image/q=99,f=auto,h=176/assets-images/produtos/23386-01.png",
    name: "Pedro Teixeira Tinto",
    priceMember: 31.9,
    pricePromotional: 37.53,
    priceStock: 52.9,
  },
];

describe("Produtos.vue", () => {
  it("Renderiza o componente", () => {
    const wrapper = shallowMount(Produtos, {});
    expect(wrapper.exists()).toBe(true);
  });
});
