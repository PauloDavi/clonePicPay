import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs(() => ({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
  contentContainerStyle: {
    alignItems: "center",
    paddingLeft: 16,
  },
}))`
  background: #1e222b;
  height: 130px;
`;

export const Option = styled.TouchableOpacity`
  width: 80px;
  align-items: center;
  margin-right: 16px;
`;

export const Img = styled.Image``;

export const Label = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-top: 8px;
  font-size: 14px;
`;
