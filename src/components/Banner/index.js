import React from "react";

import {
  Container,
  Details,
  Img,
  Title,
  Description,
  ActionButton,
  Label,
} from "./styles";

import img13 from "../../../images/13.png";

export default function Banner() {
  return (
    <Container>
      <Details>
        <Title>Cobre um Amigo</Title>
        <Description>
          Mantenha suas parcerias em dia, use o PicPay para fazer suas cobranças
        </Description>
        <ActionButton>
          <Label>Cobre agora!</Label>
        </ActionButton>
      </Details>
      <Img source={img13} />
    </Container>
  );
}
