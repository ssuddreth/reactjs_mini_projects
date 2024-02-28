import MenuList from "./menu-list";
import './tree-view-styles.css';


export default function TreeView({menus = []}) {


    return (
        <div className="tree-view-container">
            <MenuList list={menus} />
        </div>
    )
}