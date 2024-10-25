import { CommonProvider } from "./contexts/common/commonContext";
import { CartProvider } from "./contexts/cart/cartContext";
import Header from "./components/common/Header";
import RouterRoutes from "./routes/RouterRoutes";
import Footer from "./components/common/Footer";
import BackTop from "./components/common/BackTop";
import { FiltersProvider } from "./contexts/filters/filtersContext";
import { CustomFiltersProvider } from "./contexts/filters/customContext";
import { useState } from "react";

const App = () => {
// const [dbpath,setdbpath] = useState("http://localhost/Y-Mart");
// console.log("tinkuDbpath", dbpath);

  return (
    <>
    <CustomFiltersProvider>
      <CommonProvider>
        <FiltersProvider>
            <CartProvider>
              <Header />
              <RouterRoutes />
              <Footer />
              <BackTop />
            </CartProvider>
        </FiltersProvider>
      </CommonProvider>
      </CustomFiltersProvider>
    </>
  );
};

export default App;
