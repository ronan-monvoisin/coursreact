function Tableau(props) {
    /**
     * pas peu fière de ce petit component
     */
    if (Array.isArray(props.data) && props.data.length) {
        return (
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        {Object.keys(props.data[0]).map((key, i) => {
                            return <th scope="col" key={i}>{key}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((tr, i) => {
                        return <tr key={i} onClick={() => props.onClicked(tr)}>
                            {Object.keys(tr).map((td, i) => {
                                return <td key={i}>{tr[td]}</td>
                            })}
                        </tr>
                    })}
                </tbody>
            </table>
        )
    } else {
        return false;
    }
}
export default Tableau;