import { Flex, Stack } from "@chakra-ui/react";
import Sheet from "../components/layout/Sheet";
import QueryForm from "../components/query/QueryForm";
import Preview from "../components/containers/Preview";
import Result from "../components/containers/Result";

const QueryContract = () => {
  return (
    <Sheet gap="10px">
      <Flex height={"100%"} width={"100%"} gap={"40px"}>
        <Stack gap={"40px"} flex={1}>
          <QueryForm />
          <Result />
        </Stack>
        <Preview />
      </Flex>
    </Sheet>
  );
};

export default QueryContract;
