import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category);

 

  return (
    <>
      <h3>{category}</h3>
      {
        /* isLoading ? (<h2>Cargando...</h2>) : null */
        isLoading && <h2>Cargando...</h2>
      }
      <div className="card-grid">
        {
         /*  images.map(image =>(
            <li key={image.id}>{image.title}</li>
          )) */
          /* images.map((image) =>(
            <GifItem 
              key={image.id}
              title={image.title}
              url={image.url}
            />
          )) */
          images.map((image) =>(
            <GifItem 
              key={image.id}
              {...image}
            />
          ))
        }
      </div>
    </>
  )
}

export default GifGrid
