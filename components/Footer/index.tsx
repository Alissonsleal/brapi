import React from 'react';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>Exoneração de responsabilidade</h1>
        <p>
          API para fins informativos. Não garantimos a precisão dos dados
          fornecidos pela API ou contidos nesta página, uma vez que devem ser
          utilizados apenas para efeitos informativos. Trabalhamos pela
          estabilidade e precisão dos dados, porém, os dados podem estar
          atrasados ou errados "no estado em que se encontram", confirme todos
          os dados antes de efetuar qualquer ação que possa ser afetada por
          estes valores, assim como demais endpoints da API.
        </p>
      </div>
    </Container>
  );
};

export default Footer;