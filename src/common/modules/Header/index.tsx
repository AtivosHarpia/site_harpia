import { Container, Content } from "./styles";
import Image from "next/image";
import Link from "next/link";

import AppLogo from "../../../../public/logo.png";

import { AiFillMail, AiFillInstagram } from "react-icons/ai";

export const Header = () => {
  return (
    <Container>
      <Content>
        <figure>
          <Link href="/">
            <a>
              <Image src={AppLogo} alt="Logo Solite" />
            </a>
          </Link>
        </figure>

        <div>
          <a
            href="mailto:contato@ativosharpia.com.br"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillMail />
          </a>

          <a
            href="https://www.instagram.com/ativosharpia"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram />
          </a>
        </div>
      </Content>
    </Container>
  );
};
