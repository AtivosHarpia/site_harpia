import { Container, Content, Left, Right } from "./styles";

import Link from "next/link";
import Image from "next/image";
import { Header } from "../../common/modules/Header";

export const HomeLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <Left>
            <h1>Harpia Ativos Ambientais</h1>

            <p>
              Olá, mundo! Somos a Harpia, a primeira Agência de Compensação
              Ambiental. Ajudamos as empresas a converterem sua multa, infração
              ou danos em um produto de compensação ambiental, transformando em
              ativos aquilo que era um passivo ambiental para a empresa. Muitas
              empresas gostariam de ser mais sustentáveis, mas ainda possuem
              dificuldades para desenvolver práticas ambientais. Para isso, a
              Harpia desenvolve projetos de sustentabilidade corporativa,
              conduzindo as empresas em uma jornada mais equilibrada com os
              recursos naturais e a qualidade de vida da sociedade. Promover as
              pazes entre as riquezas ambientais e as riquezas econômicas é o
              nosso propósito!
            </p>

            <div className="button">
              <Link href="https://api.whatsapp.com/send?phone=5569999752935&text=Ol%C3%A1%2C%20eu%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site!">
                <a target="_blank">
                  <button>Entre em contato</button>
                </a>
              </Link>
            </div>
          </Left>
        </Content>
      </Container>
    </>
  );
};
