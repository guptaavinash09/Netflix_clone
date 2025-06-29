function MovieCard({poster, title}){
    return(
        <div className="w-[150px">
            <img src="{poster}"
             alt="{title}"
             className = "rounded-md hover: scele-105 transition-transform duration-300"
              />
        </div>
    );
}

export default MovieCard;