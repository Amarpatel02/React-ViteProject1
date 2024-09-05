import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./navbar"
import ProductsPage from "./products"
import CategoryPage from "./category"
import ElectronicsPage from "./electronics"
import JeweleryPage from "./jewelery"
import MensPage from "./mens"
import WomensPage from "./womens"
import AboutPage from "./aboutPage"
import SingleProduct from "./singleProduct"
import HomePageComponent from "./homePage"







const NavigationsTask1 = ()=>{
    return(
            <BrowserRouter>
                 <Routes>
                    <Route path="/" element={<HomePageComponent/>}/>
                    <Route path="/products" element={<ProductsPage/>}/>
                    <Route path="/category" element={<CategoryPage/>}>
                    
                    <Route index element={<ElectronicsPage/>}/>
                    <Route path="electronics" element={<ElectronicsPage/>} />
                    <Route path="jewelery" element={<JeweleryPage/>}/>
                    <Route path="mens" element={<MensPage/>}/>
                    <Route path="womens" element={<WomensPage/>}/>
                    
                    </Route>

                    <Route path="/about" element={<AboutPage/>}/>

                    <Route path="products/:productID" element={<SingleProduct/>}/>
                    
                        
                 </Routes>
            </BrowserRouter>
    )
}
export default NavigationsTask1