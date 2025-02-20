import { Link, Outlet, useLocation } from "react-router";

export default function ItemsLayout(){
    let { pathname } = useLocation();

    return(
        <main>
            <h1>Items Layout</h1>
          <div className="tabs">
            <Link to="/items/" className={`tab ${pathname === "/items" ? "" : "active"}`}>Todos os items</Link>
            <Link to="/items/new" className={`tab ${pathname === "/items/new" ? "" : "active"}`}>Novo Item</Link>
          </div>
            <Outlet />
        </main>
    )
}