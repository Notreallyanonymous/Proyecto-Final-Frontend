import { Table } from "flowbite-react";
import { useEffect, useState } from "react";

export default function TableProducts({ products, setselectedProduct, setOpenModal, selectedProduct }) {
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    console.log('Received products:', products); // Log received products
    if (Array.isArray(products)) {
      setNewProducts(products);
    } else {
      console.error('Products is not an array:', products); // Log error if products is not an array
      setNewProducts([]);
    }
  }, [products]);

  const editProduct = (product) => {
    setOpenModal(true)
    setselectedProduct(product)
  }

  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Imagen</Table.HeadCell>
          <Table.HeadCell>Nombre</Table.HeadCell>
          <Table.HeadCell>Categoría</Table.HeadCell>
          <Table.HeadCell>Precio</Table.HeadCell>
          <Table.HeadCell>Stock</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Editar</span>
          </Table.HeadCell>
          <Table.HeadCell>
            <a href="#" className="font-medium text-green-600 hover:underline dark:text-cyan-500">
              Agregar
            </a>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {
            newProducts.map((product) => (
              <Table.Row key={product._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>{product.image}</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {product.name}
                </Table.Cell>
                <Table.Cell>{product.category}</Table.Cell>
                <Table.Cell>{product.price} {product.coin}</Table.Cell>
                <Table.Cell>{product.stock}</Table.Cell>
                <Table.Cell>
                  <a onClick={() => editProduct(product)} href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Editar
                  </a>
                </Table.Cell>
                <Table.Cell>
                  <a href="#" className="font-medium text-red-600 hover:underline dark:text-cyan-500">
                    Borrar
                  </a>
                </Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>
      </Table>
    </div>
  );
}
