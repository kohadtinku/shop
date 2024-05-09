import { CommonProvider } from "./contexts/common/commonContext";
import { CartProvider } from "./contexts/cart/cartContext";
import Header from "./components/common/Header";
import RouterRoutes from "./routes/RouterRoutes";
import Footer from "./components/common/Footer";
import BackTop from "./components/common/BackTop";
import { FiltersProvider } from "./contexts/filters/filtersContext";
import { CustomFiltersProvider } from "./contexts/filters/customContext";

const App = () => {
  return (
    <>
      <CommonProvider>
        <FiltersProvider>
          <CustomFiltersProvider>
            <CartProvider>
              <Header />
              <RouterRoutes />
              <Footer />
              <BackTop />
            </CartProvider>
          </CustomFiltersProvider>
        </FiltersProvider>
      </CommonProvider>
    </>
  );
};

export default App;
