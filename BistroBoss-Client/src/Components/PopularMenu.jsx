import UseMenu from '../Hooks/UseMenu';
import MenuCategory from './MenuCategory';

const PopularMenu = () => {
    const {menu} = UseMenu()
    const populars = menu?.filter(popular => popular.category === 'popular')


    return (
        <div>
            <MenuCategory item={populars}></MenuCategory>
        </div>
    );
};

export default PopularMenu;