function Projetos() {
  const projetos = [
    {
      nome: "Projeto 1",
      descricao: "Meu primeiro projeto em HTML",
      link: "https://github.com/paulodanilo46-stack/meu-portfolio.git"
    },
    {
      nome: "Projeto 2",
      descricao: "Projeto Portfolio - React",
      link: "https://github.com/paulodanilo46-stack/meu-portfolio-react.git"
    }
  ];

  return (
    <section id="projetos">
      <h2>Meus Projetos</h2>

      <div id="lista-projetos">
        {projetos.map((projeto, index) => (
          <div className="card" key={index}>
            <h3>{projeto.nome}</h3>
            <p>{projeto.descricao}</p>
            <a href={projeto.link} target="_blank">Ver Projeto</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;