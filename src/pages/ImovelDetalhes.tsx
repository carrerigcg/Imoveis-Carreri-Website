import { useState } from "react";
import { useParams } from "react-router-dom";


export default function ImovelDetalhes() {
  const [abaAtiva, setAbaAtiva] = useState("descricao");

  return (
    <div style={{ padding: "20px" }}>
      
      <h1>Casa à venda no Centro</h1>

      {/* BOTÕES DAS ABAS */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button onClick={() => setAbaAtiva("descricao")}>
          Descrição
        </button>

        <button onClick={() => setAbaAtiva("especificacoes")}>
          Especificações
        </button>

        <button onClick={() => setAbaAtiva("imagens")}>
          Imagens
        </button>
      </div>

      {/* CONTEÚDO DAS ABAS */}
      {abaAtiva === "descricao" && (
        <div>
          <h2>Descrição do imóvel</h2>
          <p>
            Casa moderna localizada em bairro tranquilo, ideal para famílias.
          </p>
        </div>
      )}

      {abaAtiva === "especificacoes" && (
        <div>
          <h2>Especificações</h2>
          <ul>
            <li>Quartos: 3</li>
            <li>Banheiros: 2</li>
            <li>Área total: 33m²</li>
            <li>Vagas na garagem: 1</li>
          </ul>
        </div>
      )}

      {abaAtiva === "imagens" && (
        <div>
          <h2>Imagens do imóvel</h2>

          <img 
            src="https://via.placeholder.com/300"
            alt="Imagem ilustrativa do imóvel"
            style={{ marginRight: "10px" }}
          />

          <img 
            src="https://via.placeholder.com/300"
            alt="Imagem ilustrativa do imóvel"
          />
        </div>
      )}

    </div>
  );
}
