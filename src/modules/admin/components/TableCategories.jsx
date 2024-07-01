import { Table } from "flowbite-react";
import { useEffect, useState } from "react";

export default function TableCategories({ categories, setSelectedCategory, setOpenModal }) {
  const [newCategories, setNewCategories] = useState([]);

  useEffect(() => {
    console.log('Received categories:', categories); // Log received categories
    if (Array.isArray(categories)) {
      setNewCategories(categories);
    } else {
      console.error('categories is not an array:', categories); // Log error if categories is not an array
      setNewCategories([]);
    }
  }, [categories]);

  const editCategory = (category) => {
    setOpenModal(true);
    setSelectedCategory(category);
  }

  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Imagen</Table.HeadCell>
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
          {newCategories.map((category) => (
            <Table.Row key={category._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>{category.image}</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {category.name}
              </Table.Cell>
              <Table.Cell>
                <a onClick={() => editCategory(category)} href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  Editar
                </a>
              </Table.Cell>
              <Table.Cell>
                <a href="#" className="font-medium text-red-600 hover:underline dark:text-cyan-500">
                  Borrar
                </a>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
