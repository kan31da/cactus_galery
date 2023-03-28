import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
import { cactusServiceFactory } from "../../services/cactusService";
import { likeServiceFactory } from "../../services/likeService";
import { useService } from "../../hooks/useService";
import { CactusContext } from "../../contexts/CactusContext";


export const Details = () => {


    const { cactusId } = useParams();
    const { userId, isAuthenticated } = useContext(AuthContext);
    const { onDeleteClick } = useContext(CactusContext);

    const [likes, setLikes] = useState(0);
    const [cactus, setCactus] = useState({});
    const [hasLike, setHasLike] = useState(1);

    const likeService = useService(likeServiceFactory);
    const cactusService = useService(cactusServiceFactory)

    useEffect(() => {
        likeService.getLikes(cactusId)
            .then(result => { setLikes(result) })
    }, [cactusId]);

    useEffect(() => {
        cactusService.getById(cactusId)
            .then(result => { setCactus(result) })

    }, [cactusId]);

    useEffect(() => {
        likeService.getOwnLikes(cactusId, userId)
            .then(result => { setHasLike(result) })
    }, [cactusId, userId]);

    const isOwner = Boolean(cactus._ownerId === userId);
    const canLike = Boolean(!isOwner && hasLike === 0);

    const onLikeSubmit = async (e) => {
        e.preventDefault();

        await likeService.like(cactusId)
        setLikes(state => state += 1)
        setHasLike(1);
    };

    return (
        <section id="detailsPage">
            <div id="detailsBox">
                <div className="detailsInfo">
                    <h1>Title: {cactus.title}</h1>
                    <div>
                        <img src={cactus.imageUrl} alt="" />
                    </div>
                </div>

                <div className="details">
                    <h2>Type: {cactus.type}</h2>
                    <h3>Description</h3>
                    <p>{cactus.description}</p>
                    <div className="buttons">

                        {isOwner && (
                            <Link className="btn-edit" to={`/edit/${cactus._id}`} >Edit</Link>
                        )}

                        {isOwner && (
                            <Link className="btn-delete" to="#" onClick={() => onDeleteClick(cactus._id)}>Delete</Link>
                        )}

                        {isAuthenticated && canLike && (
                            <button className="btn-like" onClick={onLikeSubmit} >Like</button>
                        )}

                    </div>
                    <p className="likes">Likes: {likes}</p>
                </div>
            </div>
        </section>
    )
}