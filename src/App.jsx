import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AllProduct from "./components/AllProduct";
import AllRelatedProduct from "./components/AllRelatedProduct";
import MainButtom from "./components/MainButtom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="mx-56">
        <Header />
        <AllProduct />
        <AllRelatedProduct />
        <MainButtom />
      </main>
      <Footer />
    </>
  )
}

export default App
