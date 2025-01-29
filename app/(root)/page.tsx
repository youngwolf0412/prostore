import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

export const metadata = {
  title: "Home",
};

// it add a delay of ms seconds to the screen
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Homepage() {
  const latestProducts = await getLatestProducts();
  return (
    <div>
      <ProductList data={latestProducts} title="Newest arrival" />
    </div>
  );
}
