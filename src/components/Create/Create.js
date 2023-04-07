import { useContext } from "react"
import { CactusContext } from "../../contexts/CactusContext"
import { useForm } from "../../hooks/useForm"


export const Create = () => {

    const { onCreateSubmit } = useContext(CactusContext)

    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        type: '',
        imageUrl: '',
        description: ''
    }, onCreateSubmit)

    return (
        <section id="createPage">
            <form className="create-form" onSubmit={onSubmit}>
                <h1>Create Cactus</h1>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        placeholder="Cactus name"
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
                        placeholder="type"
                        value={values.type}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Description"
                        value={values.description}
                        onChange={changeHandler}
                    ></textarea>
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
                <button className="btn" type="submit">Create Cactus</button>
            </form>
        </section >
    )
}