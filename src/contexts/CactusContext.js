import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cactusServiceFactory } from "../services/cactusService";
import { useService } from "../hooks/useService";

export const CactusContext = createContext();


export const CactusProvider = ({
    children,
}) => {

    const navigate = useNavigate();
    const [cactuses, setCactuses] = useState([]);

    const cactusService = useService(cactusServiceFactory);


    useEffect(() => {
        cactusService.getAll()
            .then(result => { setCactuses(result) })
    }, []);


    const onCreateSubmit = async (data) => {

        const newCactus = await cactusService.createCactus(data);

        setCactuses(state => [...state, newCactus]);

        navigate("/Catalog");
    };

    const onDeleteClick = async (cactusId) => {

        await cactusService.deleteById(cactusId);

        setCactuses(state => state.filter(x => x._id !== cactusId));

        navigate('/catalog');
    };

    const onEditSubmit = async (data) => {

        const editCactus = await cactusService.editCactus(data._id, data)

        setCactuses(state => [...state.filter(x => x._id !== data._id), editCactus]);

        navigate(`/Catalog/${data._id}`);
    };

    const contex = {
        onEditSubmit,
        onDeleteClick,
        onCreateSubmit,
        cactuses
    };

    return (
        <>
            <CactusContext.Provider value={contex}>
                {children}
            </CactusContext.Provider>
        </>
    );
}