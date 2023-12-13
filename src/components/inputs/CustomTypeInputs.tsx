import { Flex, FlexProps, FormLabel, Stack, Text } from "@chakra-ui/react";
import React from "react";
import TextInput from "./TextInput";
import ArrayOfComps from "./ArrayOfComps";

interface CustomTypeInputProps extends FlexProps {
  type: string;
  label?: string;
}

const CustomTypeInputs = ({ type, label, ...props }: CustomTypeInputProps) => {
  let children;

  const JSXElements = {
    string: (
      <TextInput
        inputType="string"
        // onChange={handleParamInputChange}
        // placeholder={param.type}
        label={label}
      />
    ),
    number: (
      <TextInput
        inputType="number"
        // onChange={handleParamInputChange}
        // placeholder={param.type}
        label={label}
      />
    ),
    "number | null": (
      <TextInput
        inputType="number"
        // onChange={handleParamInputChange}
        // placeholder={param.type}
        label={label}
      />
    ),
  };

  if (type === "string") {
    children = (
      <TextInput
        inputType="string"
        // onChange={handleParamInputChange}
        placeholder={type}
        label={label}
      />
    );
  } else if (type === "number | null" || type === "number") {
    children = (
      <TextInput
        inputType="number"
        // onChange={handleParamInputChange}
        // placeholder={param.type}
        label={label}
      />
    );
  } else if (type === "readonly Coin[]") {
    children = (
      <ArrayOfComps
        label={label as string}
        component={<CustomTypeInputs width={"100%"} type="Coin" />}
        // component={<TextInput inputType="number" />}
      />
    );
  } else if (type === "Coin") {
    children = (
      <Flex width={"100%"} gap={"10px"}>
        {label ? (
          <FormLabel
            flex={1}
            color="#F5F5F5"
            fontSize="24px"
            fontWeight="600"
            letterSpacing="3.2px"
            mb={"0"}
          >
            {label}
          </FormLabel>
        ) : null}
        <TextInput flex={1} placeholder={"amount"} inputType="number" />
        <TextInput placeholder={"denom"} inputType="string" />
      </Flex>
    );
  } else if (type === "wasmKitTypes.TxnStdFee") {
    children = (
      <Stack width={"100%"}>
        <FormLabel
          color="#F5F5F5"
          fontSize="24px"
          fontWeight="600"
          letterSpacing="3.2px"
          mb={"0"}
        >
          {label}
        </FormLabel>
        <CustomTypeInputs label="amount" type="readonly Coin[]" />
        <TextInput label={"gas"} placeholder={type} inputType="number" />
      </Stack>
    );
  } else {
    children = (
      <TextInput label={label} placeholder={type} inputType="string" />
    );
  }

  return (
    <Flex width={"100%"} {...props}>
      {children}
    </Flex>
  );
};

export default CustomTypeInputs;
