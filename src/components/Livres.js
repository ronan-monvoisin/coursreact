function Livres() {
  const [asyncLivres, setLivres] = useState([]);
  const GetLivres = async () => {
    try {
      const response = await fetch('http://dao/dao1/rest/livre');
      const json = await response.json();
      setLivres(json);
    } catch (error) {
      console.error(error);
    } finally {
      //setLoading(false);
    }
  }
  useEffect(() => {
    GetLivres();
  }, []);
  function ListLivres(props) {
    return props.livres.map((livre,k) =>
      <LivreCard key={k} livre={livre}></LivreCard>
    );
  }
  return (
    <ListLivres />
  );
}

export default Livres;
