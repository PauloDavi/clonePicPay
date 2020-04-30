import React from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import {
  Wrapper,
  Header,
  BalanceConteiner,
  BalanceTitle,
  Balance,
  Container,
} from "./styles";

import Suggeestions from "../../components/Suggestions";
import Activities from "../../components/Activities";
import Tips from "../../components/Tips";
import Banner from "../../components/Banner";

export default function Home() {
  return (
    <Wrapper>
      <Container showsVerticalScrollIndicator={false}>
        <Header>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={30}
            color="#10c85e"
          />

          <BalanceConteiner>
            <BalanceTitle>Meu Saldo</BalanceTitle>
            <Balance>R$ 0,00</Balance>
          </BalanceConteiner>

          <AntDesign name="gift" size={30} color="#10c85e" />
        </Header>

        <Suggeestions />
        <Activities />
        <Tips />
        <Banner />
      </Container>
    </Wrapper>
  );
}
