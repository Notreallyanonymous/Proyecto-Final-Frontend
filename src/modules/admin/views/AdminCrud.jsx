import { useState, useEffect } from "react";
import { AddProduct } from "../components/AddProduct";
import TableProducts from "../components/TableProducts";
import SearchBar from "../components/SearchBar";
import { getAllProducts } from "../api/products/productsService";
import { Tabs } from "flowbite-react";
import { HiCube, HiShoppingBag } from "react-icons/hi";
import { getAllCategories } from "../api/category/categoryService";
import TableCategories from "../components/TableCategories";

export default function AdminCrud() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        const data = response.data;
        console.log('Fetched products:', data);
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error('Fetched data is not an array:', data);
          setProducts([]);
        }
      } catch (error) {
        console.log('Failed to fetch products', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllCategories();
        const data = response.data;
        console.log('Fetched products:', data);
        if (Array.isArray(data)) {
          setCategories(data);
        } else {
          console.error('Fetched data is not an array:', data);
          setCategories([]);
        }
      } catch (error) {
        console.log('Failed to fetch products', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Tabs aria-label="Tabs with icons" variant="underline">

      <Tabs.Item active title="Productos" icon={HiShoppingBag}>
        <h1 className="text-center text-2xl font-extrabold mb-10">Agregar productos</h1>
        <div className="mb-10 w-full">
          <SearchBar />
        </div>
        <TableProducts products={products} setSelectedProduct={setSelectedProduct} setOpenModal={setOpenModal} />
        <AddProduct openModal={openModal} setOpenModal={setOpenModal} product={selectedProduct} />
      </Tabs.Item>

      <Tabs.Item title="Categorías" icon={HiCube}>
        <h1 className="text-center text-2xl font-extrabold mb-10">Agregar categorías</h1>
        <div className="mb-10 w-full">
          <SearchBar />
        </div>
        <TableCategories categories={categories} setSelectedProduct={setSelectedProduct} setOpenModal={setOpenModal} />
        <AddProduct openModal={openModal} setOpenModal={setOpenModal} product={selectedProduct} />
      </Tabs.Item>
    </Tabs>
  );
}
