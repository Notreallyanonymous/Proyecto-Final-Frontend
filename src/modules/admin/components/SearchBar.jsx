import { Button, Dropdown } from "flowbite-react";
import { useEffect, useState } from "react";
import { getAllCategories } from "../api/category/categoryService";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const delayDebouncedFn = setTimeout(() => {
            console.log(searchTerm);
        }, 300);

        return () => clearTimeout(delayDebouncedFn);
    }, [searchTerm]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getAllCategories();
                setCategories(data);
                console.log(data);
            } catch (error) {
                console.error('Failed to fetch categories:', error);
            }
        };

        fetchCategories();
    }, []);

    const handleCategorySelect = (name) => {
        setSearchTerm(name);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle search logic here
        console.log("Search term:", searchTerm);
    };

    return (
        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div className="flex">
                <Dropdown label="Categorías" size="sm" className="h-100">
                    {
                        categories.map(({ _id, name }) => (
                            <Dropdown.Item key={_id} onClick={() => handleCategorySelect(name)}>{name}</Dropdown.Item>
                        ))
                    }
                </Dropdown>
                <div className="relative w-full">
                    <input
                        type="search"
                        id="search-dropdown"
                        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                        placeholder="Busca por nombre, precio, categoría..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        required
                    />
                    <Button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default SearchBar;
