import styles from './styles.module.css'

interface IRecipes{
    name:string,
    image:string
}
const RecipesItem:React.FC<IRecipes> = ({name,image}) => {
    return ( 
        <div className={styles.card}>
            <img className={styles.img} src={image} alt={name} />
            <h1 className={styles.title}>{name}</h1>
        </div>
    )
}

export default RecipesItem