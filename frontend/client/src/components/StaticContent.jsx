import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="static-container">
      <div className="static-container-item">
        <h2 className="static-content-item-title">A Causa</h2>
        <div className="static-item-content">
          <p className="static-item-p">Em nosso compromisso com a promoção da vida saudável, nossa ONG se dedica apaixonadamente a uma causa fundamental: incentivar e capacitar indivíduos a adotarem estilos de vida mais saudáveis. Acreditamos que uma vida saudável não é apenas a ausência de doenças, mas sim um equilíbrio holístico que abrange aspectos físicos, mentais e sociais. Com base nessa convicção, trabalhamos incansavelmente para conscientizar a comunidade sobre a importância de escolhas saudáveis e fornecemos recursos que capacitam as pessoas a transformarem suas vidas para melhor.</p>
        </div>
      </div>
      <div className="static-container-item">
        <h2 className="static-content-item-title">Projetos</h2>
        <div className="static-item-content">
          <p className="static-item-p">Nossos projetos são a manifestação tangível do compromisso da nossa ONG com a vida saudável. Desenvolvemos iniciativas inovadoras e educativas que visam impactar positivamente a comunidade em larga escala. Desde programas de atividade física acessíveis até workshops de nutrição, nossos projetos abrangem diversas áreas para garantir que todos, independentemente de sua situação, tenham acesso à informação e recursos necessários para trilhar o caminho de uma vida mais saudável. Estamos constantemente buscando maneiras criativas de inspirar mudanças positivas e duradouras.</p>
        </div>
      </div>
      <div className="static-container-item">
        <h2 className="static-content-item-title">Doações</h2>
        <div className="static-item-content">
          <p className="static-item-p">Sabemos que a mudança para um estilo de vida saudável pode ser um desafio, especialmente para aqueles que enfrentam obstáculos financeiros. É por isso que as doações desempenham um papel vital em nossa missão. Cada contribuição não apenas fortalece nossa capacidade de oferecer recursos e programas, mas também permite que alcancemos comunidades mais carentes. Cada doação é um investimento no bem-estar coletivo, ajudando-nos a construir um futuro onde todos tenham a oportunidade de viver uma vida plena e saudável.</p>
        </div>
      </div>
      <div className="static-container-item">
        <h2 className="static-content-item-title">Voluntariado</h2>
        <div className="static-item-content">
          <p className="static-item-p">O coração pulsante da nossa ONG é formado por uma rede dedicada de voluntários apaixonados pela causa da vida saudável. O voluntariado não é apenas uma atividade; é um compromisso pessoal com a transformação positiva. Seja oferecendo orientação em eventos comunitários ou apoiando iniciativas educativas, nossos voluntários desempenham um papel crucial na construção de uma cultura que valoriza a saúde. Junte-se a nós nesta jornada inspiradora, onde cada indivíduo tem o poder de fazer a diferença e promover um mundo mais saudável para todos.</p>
        </div>
      </div>
    </div>
  );
}

export default Home