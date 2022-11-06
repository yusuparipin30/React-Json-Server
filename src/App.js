import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
 
function App() {
 
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Router>
            <Routes>

              <Route exact path="/" element={<ProductList/>} />
              
              <Route path="/add" element={<AddProduct/>} />

              <Route path="/edit/:id" element={<EditProduct/>} />
                
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}


 //7.JSON SERVER
    //membuai API palsu
    //buat file db.json dan isi filenya
    /*buka terminal baru dan jalankan perintah berikut:
npx json-server --watch db.json --port 8080
Kembali ke browser dan kunjungi URL berikut:
http://localhost:8080/products */

 

 
export default App;