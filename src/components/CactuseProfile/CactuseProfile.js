import { Link } from "react-router-dom"

export const CactusProfile = (
    {
        _id,
        title,
        type,
        imageUrl,
    }
) => {

    return (
        <div className="cactusBoard">
            <div className="cactus-info">
                <img src={imageUrl} alt="" />
                <h2>{title}</h2>
                <h3>{type}</h3>
                <Link to={`/Catalog/${_id}`} className="details-button">Details</Link>
            </div>
        </div>
    )
}