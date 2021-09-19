import { useEffect, useState } from "react";
import RecipesItem from "../../components/RecipesItem";
import styles from './styles.module.css';
import api from "../../utils/api";
import { Link } from "react-router-dom";

interface IRecipes{
  id: number,
  image: string,
  imageType: string,
  title: string
}

interface IResponse {
  number: number,
  offset: number,
  totalResults: number,
  results: IRecipes[]
}

const Recipes = () => {
  const [ recipes,setRecipes ] = useState<IRecipes[]>()

  const getRecipes = async () => {
    const { data } = await api.get<IResponse>('/complexSearch')
    setRecipes(data.results)
  }

  const renderRecipes = () => {
    return recipes?.map((recipe) => {
      return (
        <Link to={`/${recipe.id}`}>
          <RecipesItem name={recipe.title} image={recipe.image} key={recipe.id} />
        </Link>
      )
    })
  }

  useEffect(()=> {
    getRecipes()
  },[])
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recipes</h1>
      <div className={styles.grid}>
        {
          recipes ? renderRecipes() : <h1 className={styles.loading}>Loading...</h1>
        }
      </div>
    </div>
  );
}

export default Recipes;
