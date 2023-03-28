import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { CactusContext } from "../../contexts/CactusContext";
import { CactusProfile } from "../CactuseProfile/CactuseProfile";

export const Profile = () => {

    const { userEmail, userId } = useContext(AuthContext);
    const { cactuses } = useContext(CactusContext)
    const onwCactuses = cactuses.filter(x => x._ownerId === userId)

    return (
        <section id="profilePage">
            <div className="userInfo">
                <h2>{userEmail}</h2>
            </div>
            <div class="board">

                {onwCactuses.length === 0 && (
                    < div className="no-cactuses">
                        <p>This user has no cactuses yet!</p>
                    </div>
                )}

                {onwCactuses.filter(x => x._ownerId === userId).map(x =>
                    <CactusProfile key={x._id} {...x} />
                )}

            </div>
        </section >
    )
}