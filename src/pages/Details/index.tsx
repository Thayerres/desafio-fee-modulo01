import { useEffect, useState } from "react"
import { useParams } from "react-router"
import api from "../../utils/api"

import styles from './style.module.css'

interface IParams {
    recipe: string
}

interface IResponse {
    title: string,
    image: string,
    summary: string
}

const Details:React.FC = () => {
    const [recipeDetails, setRecipeDetails] = useState<IResponse>()
    const { recipe } = useParams<IParams>()

    
    useEffect(() => {
        const getRecipeDetails = async() => {
            const { data } = await api.get(`/${recipe}/information`)
    
            console.log(data)
            setRecipeDetails(data)
        }

        getRecipeDetails()
    },[recipe])

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <img className={styles.img} src={recipeDetails?.image} alt="" />
                <div className={styles.body}>
                    <h1 className={styles.title}>{recipeDetails?.title}</h1>
                    <p className={styles.summary} dangerouslySetInnerHTML={{__html: `${recipeDetails?.summary}`}} />
                </div>
            </div>
        </div>
    )
}

export default Details