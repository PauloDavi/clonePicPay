import React from "react";
import {
  EvilIcons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  Username,
  CardBody,
  CardFooter,
  Details,
  Value,
  Devider,
  Date,
  Option,
  OptionLabel,
  Actions,
} from "./styles";

import avatar from "../../../images/avatar.png";

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />

          <Description>
            <Bold>Você</Bold> pagou a <Bold>Fulano</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <Username>Paulo Davi</Username>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 18,00</Value>

            <Devider />

            <EvilIcons name="lock" color="#fff" size={25} />

            <Date>há 2 anos</Date>
          </Details>
          <Actions>
            <Option>
              <MaterialCommunityIcons
                name="comment-outline"
                color="#fff"
                size={15}
              />
              <OptionLabel>0</OptionLabel>
            </Option>

            <Option>
              <AntDesign name="hearto" color="#fff" size={15} />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}
