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
              Nós ajudamos as empresas a fazer as pazes com o meio ambiente,
              transformando seu modo de ver a sustentabilidade e ainda
              beneficiando seu negócio e toda a sociedade.
            </p>

            <Link href="https://api.whatsapp.com/send?phone=5569999752935&text=Ol%C3%A1%2C%20eu%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site!">
              <a target="_blank">
                <button>Entre em contato</button>
              </a>
            </Link>
          </Left>
        </Content>
      </Container>
    </>
  );
};
