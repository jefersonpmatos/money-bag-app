import styled from "styled-components/native";

import { CardSectionProps } from "./types";

import CardItem from "./cardItem";

const CardList = styled.FlatList`
  width: 100%;
  flex: 1;
  padding-left: 25px;
  padding-bottom: 15px;
`;

const CardSection: React.FC<CardSectionProps> = (props) => {
  return (
    <CardList
      data={props.data}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 25, alignItems: "center" }}
      keyExtractor={({ id }: any) => id.toString()}
      renderItem={({ item }: any) => <CardItem {...item} />}
    />
  );
};

export default CardSection;