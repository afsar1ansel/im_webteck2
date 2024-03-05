import { Box, Heading, Image, Text } from "@chakra-ui/react";
import AOS from "aos";

export default function About() {
  AOS.init();
  return (
    <Box backgroundColor={"#F3F0CF"} w={"100%"} >
      <Box
        display="flex"
        margin={"auto"}
        justifyContent={"center"}
        p={5}
        color={"white"}
        backgroundColor={"#d12881"}
        w={"20%"}
        borderRadius={"60%"}
        transform={"rotate(10deg)"}

      >
        <Heading fontFamily={"cursive"}>About Us</Heading>
      </Box>
      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"center"}
        gap={5}
      >
        <Image
          w={{ base: "80%", md: "20%" }}
          data-aos="zoom-in-up"
          src="https://s-media-cache-ak0.pinimg.com/originals/e3/48/19/e34819dd10cff77a959733c110cda901.jpg"
        />
        <Box
          p={10}
          w={{ base: "100%", md: "60%" }}
          display={"flex"}
          flexDirection={"column"}
          gap={5}
          data-aos="fade-left"
          // border={"1px solid black"}
        >
          <Text>
            The Congregation of the Sisters of the Apostolic Carmel is an Indian
            Congregation, which was founded in 1870 by Mother Veronica, a holy
            and dedicated woman who was divinely inspired to reach out to the
            young girls of her day.
          </Text>{" "}
          <Text>
            {" "}
            Today, the Sisters cater to the needs of the children and women from
            Pre -Primary Primary to Post graduate levels, Teacher Training
            Institutions and Technical Schools with medium of instruction both
            English and the regional languages.
          </Text>{" "}
          <Text>
            Besides, the congregation has Creches, Children’s Homes, Boarding
            Houses and Social Service centres in rural and urban areas in India,
            Sri Lanka, Pakistan, Kuwait, Bahrain, Kenya and Rome.
          </Text>{" "}
          <Text>
            {" "}
            Carmel Pre - Primary School was opened in 1970, (is a unit of Carmel
            Vidya Vardhak Sangh Educational Society) for the benefit of the
            children of Jayanagar and the neighbouring extensions of Bangalore
            city. The school is recognized by the Department of Public
            Instruction, Karnataka State. Carmel Pre- Primary School is feeder
            school for Carmel Convent School.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
