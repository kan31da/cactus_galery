import { Link } from "react-router-dom";

export const CatalogItem = () => {
    return (

        <div className="info">
            <div className="home-image">
                <img src="https://redsquareflowers.com/wp-content/uploads/2020/12/Cactus-plants-madison-wi.jpg" alt="" />
            </div>
            <div className="info">
                <h4 >Cactus Plant</h4>
                <Link className="btn-details" to="#">Details</Link>
            </div>
        </div>

    );
}