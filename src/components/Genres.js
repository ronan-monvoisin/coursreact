function Genres(props) {
    console.log(props);
    return <div class="btn-group" role="group" aria-label="Genres">
        {Object.keys(props.genre).map((k) => {
            return <button type="button" className="btn btn-secondary btn-sm" key={k}>{props.genre[k]}</button>;
        })}
    </div>
}
export default Genres;