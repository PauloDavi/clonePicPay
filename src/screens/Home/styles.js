import styled from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
  background: #000;
  flex: 1;
`;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Container = styled.ScrollView``;

export const BalanceConteiner = styled.View``;

export const BalanceTitle = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  text-align: center;
`;

export const Balance = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;
