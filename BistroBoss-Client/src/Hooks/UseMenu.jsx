import { useEffect, useState } from "react";

const UseMenu = () => {
        const [menu, setmenu] = useState([]);
        const [loading,setLoading] = useState(false)
    
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setmenu(data) );
    }, []);
    return {menu}
};

export default UseMenu;