import { Box, Flex, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const Sheet = (props: any) => {
  const { contractid } = useParams();
  return (
    <Flex
      flexDirection={"column"}
      borderRadius={"5px"}
      width={"100%"}
      height={"100%"}
      bg="rgba(255, 255, 255, 0.05)"
      mt={"20px"}
      overflowY={"auto"}
      color={"white"}
      p={"60px"}
      pt={"20px"}
      gap={"20px"}
      position={"relative"}
    >
      <Navbar />

      <Box display={"flex"} fontSize={"1.3rem"}>
        <Text>Your selected address - </Text>
        <Text fontWeight={"bold"}>{contractid}</Text>
      </Box>
      {props.children}
    </Flex>
  );
};

export default Sheet;
