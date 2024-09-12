import Books from "../components/livros/Books";
import NavB from "../components/NavB";
import "../css/livro.css"
import "../css/nav.css"

export default function Livro() {
  return (
    <>
        <NavB 
        User = "@Garsa"
        />
        <Books 
        
        NomeL = "Harry Potter e a Pedra Filosofal" 
        InfoL = "A narrativa que inicia a saga Harry Potter conta a história de um menino bruxo que fica órfão, depois que o vilão Voldemort assassina seus pais a sangue frio. O garoto se torna uma lenda no mundo mágico por ter sobrevivido ao feitiço mortal apenas com uma cicatriz na testa, mesmo sendo apenas um bebê."
        Autor = "J. K. Rowling"
        Editora = "RICCO"
        Pags = "466"
        
        />

    </>
  );
}
