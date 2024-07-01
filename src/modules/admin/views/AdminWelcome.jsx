import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { sidebarOptions } from "../utils";

export default function AdminCrud() {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {
                sidebarOptions.map(({ name, image, description, route }) => (
                    <Link to={route} key={name}>
                        <Card className="flex flex-col">
                            {image && <img src={image} alt={name} className="w-full h-20 object-cover" />}
                            <div className="p-2">
                                <h5 className="text-xl font-bold mb-2">{name}</h5>
                                <p className="text-gray-700 dark:text-gray-400">
                                    {description}
                                </p>
                            </div>
                        </Card>
                    </Link>
                ))
            }
        </div>
    );
}
