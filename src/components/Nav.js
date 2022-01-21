function Nav(props) {
    return <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse container" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
                {Object.values(props.menu).map((v, i) => {
                    return <li key={i} className={`nav-item ${(props.page != v)?'':'active'}`} onClick={() => props.onClicked(v)}>
                        <a className="nav-link" href="#">{v}</a>
                    </li>
                })}
            </ul>
        </div>
    </nav>
}
export default Nav;