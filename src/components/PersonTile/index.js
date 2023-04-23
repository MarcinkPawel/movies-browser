import { PersonTile, PersonImage, FullName, FunctionName } from "./styled";

export const Person = () => {
  return (
    <PersonTile>
      <PersonImage></PersonImage>
      <FullName>Paweł</FullName>
      <FunctionName>Actor</FunctionName>
    </PersonTile>
  );
};
