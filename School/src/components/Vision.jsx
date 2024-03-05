import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Vision() {
  AOS.init();
  return (
    <Box
      //  position={"relative"}
      className="vision"
      bgColor={"#F3F0CF"}
      fontFamily={"cursive"}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={{ base: "column", md: "row" }}
    >
      <Box
        data-aos="fade-right"
        p={10}
        w={{ base: "100%", md: "40%" }}
        h={"100%"}
        // border={"1px solid white"}
        // m={10}
      >
        <Heading>The Apostolic Carmel Vision for Education</Heading>
        <Text pt={5}>
          Called to live in God's Presence and experience His love, we the
          Sisters of the Apostolic Carmel, share in christ’s mission of
          transforming the world with love. We respond like Mary, the mother of
          Jesus and like our Foundress Venerable Mother Veronica, by our lives
          of consecration and dedicated service. Rooted in Prayer and committed
          to serve the society, we shall -
        </Text>
        <Text pt={5}>
          • Strive to develop the full potential of our students, especially the
          women we educate, towards making them responsible citizens.
        </Text>
        <Text>
          • Foster in them the rich values of Christian and cultural heritage so
          that they are urged to respond to life's challenges with joy and
          courage.
        </Text>
        <Text>
          • A special thrust of our educational effort is an active concern to
          make our students authentic, imbued with a zeal to give the less
          fortunate a sense of hope, so that there is a better tomorrow for them
        </Text>
      </Box>
      <Flex
        data-aos="fade-left"
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        w={{ base: "100%", md: "30%" }}
        gap={3}
      >
        <Box
          w={"100%"}
          h={"150px"}
          p={5}
          textAlign={"center"}
          border={"1px solid white"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-evenly"}
          backgroundColor={"white"}
          borderRadius={"15px"}
          boxShadow={"0 4px 8px 0 rgba(0, 0, 0, 0.2)"}
          _hover={{
            transform: "translateY(-10px)",
            transition: "all 0.5s ease-in-out",
          }}
        >
          <Button
            width={"300px"}
            margin={"auto"}
            borderRadius={"full"}
            colorScheme="teal"
            _hover={{ backgroundColor: "#EC9600" }}
          >
            Read More
          </Button>
          <Text>Closed Now</Text>
        </Box>
        <Box
          w={{ base: "100%", md: "100%" }}
          h={"auto"}
          textAlign={"center"}
          border={"1px solid white"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={{ base: "center", md: "space-evenly" }}
          backgroundColor={"white"}
          borderRadius={"15px"}
          boxShadow={"0 4px 8px 0 rgba(0, 0, 0, 0.2)"}
          _hover={{
            transform: "translateY(-10px)",
            transition: "all 0.5s ease-in-out",
          }}
          p={5}
        >
          <Button
            width={{ base: "200px", md: "300px" }}
            margin={"auto"}
            borderRadius={"full"}
            colorScheme="teal"
            _hover={{ backgroundColor: "#EC9600" }}
          >
            Donate
          </Button>
          <Text>
            Click here.. select Carmel pre-primary from the list of institutions
            and proceed as per instruction
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
