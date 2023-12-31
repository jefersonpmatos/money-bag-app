import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { TransactionAviProps } from "./types";
import { colors } from "../color";

const StyledView = styled.View`
  height: 45px;
  width: 45px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const TransactionAvi: React.FC<TransactionAviProps> = (props) => {
  return (
    <StyledView style={{ backgroundColor: props.background }}>
      <Ionicons name={props.icon} size={25} color={colors.white} />
    </StyledView>
  );
};

export default TransactionAvi;
