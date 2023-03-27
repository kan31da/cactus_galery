import { useContext } from "react";
import { CactusContext } from "../../contexts/CactusContext.js";
import { CatalogItem } from "../CatalogItem/CatalogItem.js";

export const Catalog = () => {

    const { cactuses } = useContext(CactusContext)

    return (
        <section className="welcomePage">

            <h1>All Cactuses</h1>

            <div id="welcomeMessage">
                <h1>My Cactus</h1>
                <p>
                    A cactus is a member of the plant family Cactaceae a family comprising about 127 genera with some 1750 known species of the order Caryophyllales.
                </p>
            </div>

            <div id="cactuses">
                <h1>Future Events</h1>
                <div className="cactuses-container">

                    {cactuses.length === 0 && (
                        <h4 className="no-cactus">No Cactuses Yet...</h4>
                    )}

                    {cactuses.map(x =>
                        <CatalogItem key={x._id} {...x} />
                    )}

                </div>
            </div>

        </section >
    );
};