import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
import { useService } from "../../hooks/useService";
import { gameServiceFactory } from "../../service/gameService"


export const GameDetails = () => {

    const { userId, onDeleteClick } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');
    const { gameId } = useParams();
    const [game, setGame] = useState({});
    const gameService = useService(gameServiceFactory)

    useEffect(() => {
        gameService.getOne(gameId)
            .then(result => {
                setGame(result);
            })
    }, [gameId]);

    const onCommentSubmit = async (e) => {
        e.preventDefault();

        const result = await gameService.addComment(gameId, {
            username,
            comment,
        });

        setGame(state => ({ ...state, comments: { ...state.comments, [result._id]: result } }));
        setUsername('');
        setComment('');
    };

    const isOwner = game._ownerId === userId;

    return (
        <section id="detailsPage">
            <div id="detailsBox">
                <div className="detailsInfo">
                    <h1>Type: </h1>
                    <div>
                        <img src="https://redsquareflowers.com/wp-content/uploads/2020/12/Cactus-plants-madison-wi.jpg" alt="" />
                    </div>
                </div>

                <div className="details">
                    <h3>Description</h3>
                    <p>We will pick the best looking prickly friend that is available today for you. Cactus is very easy to care for – simply provide the abundance of light, preferred direct sun, as well as watering once a month. Please keep in mind that the stock changes daily so we do not promise specific varieties"</p>
                    <div className="buttons">
                        <Link className="btn-delete" to="#">Delete</Link>
                        <Link className="btn-edit" to="#">Edit</Link>
                        <Link className="btn-like" to="#">Like</Link>
                    </div>
                    <p className="likes">Likes: 0</p>
                </div>
            </div>
        </section>
    )
}