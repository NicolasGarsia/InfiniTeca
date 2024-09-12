
export default function Favoritos() {
    return (
        <>
            <div className="containerLista">
                <h1 className="nomelista">Listas</h1>
                <hr />
                <h3 className="nomelista1">Personalize sua experiência com sua lista de desejos</h3>
            </div>
            <br /><br />
            <hr />
            <div className="containerLista1">
                <h1 className="nomelista">Clique no coração para salvar</h1>
                <h3 className="nomelista1">Armazene os livros que você ama em uma página</h3>
            </div>
            <div className="coracaoContainer">
                <img className="coracao" src="favVer.png" alt="" />
                <h3 className="corazon">Não perca os livros que você gostou!</h3>
            </div>
            <br /><br /><br /><br /><br /><br /><br />
            <hr />
            <div className="recomendocoes">
            <h1 className="reco">Você Também Pode Gostar</h1>
            </div>
        </>
    );
}