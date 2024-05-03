
const Card = ({juegos}) => {
    return (
      <div>
        {juegos.map((juego) => (
          
             
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src={juego.images} alt="" />
            <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{juego.title}</div>
            <p class="text-gray-700 text-base">
            {juego.description}
            </p>
            </div>
            <div class="px-6 pt-4 pb-2">
            
    
            </div>
            </div>
          
          
        ))}
      </div>
    );
  };
  export default Card;