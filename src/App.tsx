import {
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Moon, Sun, Webcam } from "phosphor-react";
import "@fontsource/poppins";

function App() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Flex
      w="full"
      p={4}
      align="center"
      gap={4}
      bg={useColorModeValue("gray.100", "gray.700")}
      borderBottom={`2px solid ${useColorModeValue("black", "white")}`}
    >
      <Webcam size={32} weight="duotone" />
      <Heading size="md" fontFamily={"Poppins"}>
        WebcamTimelapse
      </Heading>
      <Spacer />
      <IconButton
        aria-label="toggle dark mode"
        variant="solid"
        colorScheme={"teal"}
        icon={colorMode === "light" ? <Moon /> : <Sun />}
        onClick={toggleColorMode}
      />
    </Flex>
  );
}

export default App;
