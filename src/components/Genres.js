import React, { useEffect, useState } from 'react';

function Genres(props) {
    const [asyncGenres, setGenres] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                let response = {};
                if (props.livre_id) {
                    response = await fetch('http://restdao/genre?livre_id=' + props.livre_id);
                } else {
                    response = await fetch('http://restdao/genre');
                }
                const json = await response.json();
                setGenres(json);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);
    return <>
        <div className="btn-group pt-2" role="group" aria-label="Genres">
            {Object.keys(asyncGenres).map((k) => {
                return <button type="button" className="btn btn-secondary btn-sm" key={k} onClick={() => {
                    props.onClicked({
                        genre_id: k,
                        nom: asyncGenres[k]
                    });
                }}>{asyncGenres[k]}</button>;
            })}
        </div>
    </>
}
export default Genres;