
import { useEffect, useState } from "react";


const UseMenu = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("Menu.json")
        .then(res => res.json())
        .then(data => {
           setItems(data);
           setLoading(false)
        } )
    }, [])

return [items, loading]
};

export default UseMenu;