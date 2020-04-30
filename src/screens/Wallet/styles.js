import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Wrapper = styled.ScrollView`
  background: #000;
  flex: 1;
`;

export const Header = styled(LinearGradient)`
  height: 300px;
`;

export const HeaderContainer = styled.SafeAreaView`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const BalanceContainer = styled.View`
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  font-size: 38px;
  color: #fff;
  font-weight: 100;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity`
  margin-left: 15px;
`;

export const Info = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;

export const Actions = styled.View`
  flex-direction: row;
  margin-top: 40px;
`;

export const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.6);
  width: 150px;
  height: 45px;
  border-radius: 25px;
  justify-content: center;
  margin: 0 10px;
`;

export const ActionLabel = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-left: 10px;
`;

export const UseBalance = styled.View`
  height: 60px;
  background: #1c1c1e;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px;
`;

export const UseBalanceTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

export const PaymentMethods = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;

export const PaymentMethodsTitle = styled.Text`
  color: #8e8e93;
  text-transform: uppercase;
`;

export const Card = styled.View`
  background: #1e232a;
  padding: 20px;
  flex-direction: row;
  border-radius: 8px;
  margin-top: 10px;
`;

export const CardDetails = styled.View`
  margin-right: 10px;
  flex: 1;
`;

export const CardTitle = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const CardInfo = styled.Text`
  margin-top: 15px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
`;

export const Img = styled.Image`
  width: 60px;
`;
