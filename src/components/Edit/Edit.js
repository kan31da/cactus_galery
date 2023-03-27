import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { useService } from "../../hooks/useService"
import { CactusContext } from "../../contexts/CactusContext"
import { cactusServiceFactory } from "../../services/cactusService"

export const Edit = () => {

    const { onEditSubmit } = useContext(CactusContext)

    const { cactusId } = useParams();
    const cactusService = useService(cactusServiceFactory)

    const { values, changeHandler, onSubmit, changeValues } = useForm({
        title: '',
        type: '',
        description: '',
        imageUrl: '',
    }, onEditSubmit);

    useEffect(() => {
        cactusService.getById(cactusId)
            .then(result => {
                changeValues(result);
            })
    }, [cactusId]);

    return (

        <section id="editPage">
            <form className="cactus-form" onSubmit={onSubmit}>
                <h1>Edit Cactus</h1>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        placeholder="cactus name"
                        value={values.title}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="type">Type:</label>
                    <input
                        id="type"
                        name="type"
                        type="text"
                        placeholder="Type"
                        value={values.type}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="description">Cactus Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Description"
                        value={values.description}
                        onChange={changeHandler}
                    >
                    </textarea>
                </div>
                <div>
                    <label htmlFor="imageUrl">Image url:</label>
                    <input
                        id="imageUrl"
                        name="imageUrl"
                        type="text"
                        placeholder="Image Url"
                        value={values.imageUrl}
                        onChange={changeHandler}
                    />
                </div>
                <button className="btn" type="submit">Submit</button>
            </form>
        </section >

    )
}