import { CatalogItem } from "../CatalogItem/CatalogItem.js";

export const Catalog = () => {
    return (
        <section className="welcomePage">

            <h1>All Cactuses</h1>

            <div id="welcomeMessage">
                <h1>My Cactus</h1>
                <p>
                    A cactus is a member of the plant family Cactaceae a family comprising about 127 genera with some 1750 known species of the order Caryophyllales.
                </p>
            </div>

            <CatalogItem />
            <CatalogItem />

        </section >
    );
};