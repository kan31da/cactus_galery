import { Link } from "react-router-dom";

export const CatalogItem = () => {
    return (
        <div className="all">
            <div className="info">
                <img src="" />
                <h2>category</h2>
                <h2>title</h2>
                <Link to={`/catalog/`} className="details-button">Details</Link>
            </div>
        </div>
    );
}