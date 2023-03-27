import { Link } from "react-router-dom";

export const CatalogItem = (
    {
        _id,
        title,
        type,
        imageUrl,
    }
) => {
    return (

        <div className="cactusesInfo">
            <div className="home-image">
                <img src={imageUrl} alt="" />
            </div>
            <div className="info">
                <h4 className="title">{title}</h4>
                <h6 className="type">{type}</h6>
                <div className="info-buttons">
                    <Link className="btn-details" to={`/Catalog/${_id}`}>Details</Link>
                </div>
            </div>
        </div>

    );
}