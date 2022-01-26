import React, { useEffect, useState } from 'react';

function Genres(props) {
    const [asyncGenres, setGenres] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                if (props?.livre_id) {
                    const response = await fetch('http://restdao/genre?livre_id=' + props.livre_id);
                    setGenres(await response.json());
                } else {
                    const response = await fetch('http://restdao/genre');
                    setGenres(await response.json());
                }
            } catch (error) {
                console.error(error);
            }
        })();
    }, [props]);
    return <>
        <div className="pt-2" role="group" aria-label="Genres">
            {asyncGenres.map((v, k) => {
                return <button type="button" className="btn btn-secondary btn-sm" key={k} onClick={() => props.onClicked(v)}>{v.nom}</button>;
            })}
        </div>
    </>
}
export default Genres;