import { PersonTail, PersonImage, FullName, FunctionName } from "./styled";

export const Person = () => {
  return (
    <PersonTail>
      <PersonImage></PersonImage>
      <FullName>Paweł</FullName>
      <FunctionName>Actor</FunctionName>
    </PersonTail>
  );
};
