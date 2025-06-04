import Footer from "../components/initialPage/footer";
import Header from "../components/initialPage/header";
import ProductContainer from "../components/productPage/containerProduct";

export default function ProductPage() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <ProductContainer />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
