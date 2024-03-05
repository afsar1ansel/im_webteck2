import { Box, FormControl, FormHelperText, FormLabel, Heading, Icon, Image, Input, Text, Textarea } from "@chakra-ui/react";
import AOS from "aos";

export default function Contact(){
    AOS.init();
    return (
      <Box className="contact" backgroundColor={"#F3F0CF"} p={5}>
        <Box
          display="flex"
          margin="auto"
          justifyContent="center"
          p={{ base: 3, md: 5 }} 
          color="white"
          backgroundColor="#d12881"
          w={{ base: "90%", md: "20%" }} 
          borderRadius={{ base: "0 50px 0 50px", md: "60%" }} 
          transform={{ base: "rotate(10deg)", md: "rotate(10deg)" }}
        >
          <Heading m={2} fontFamily={"cursive"}>
            Contact Us
          </Heading>
        </Box>
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"space-around"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            display={"flex"}
            flexDirection={"column"}
            p={5}
            w={{ base: "90%", md: "40%" }}
            justifyContent={"center"}
            m={"auto"}
          >
            <Text fontFamily={"cursive"} fontSize={"3xl"}>
              Get in touch with us.
            </Text>
            <Text>📧 contact@carmelpreprimary.org</Text>
            <Text>📞 Call us 080- 29588888/+91 9606172820</Text>
            <Text>Address: Carmel Pre-primary School{""} 4th T block,</Text>
            <Text>Jayanagar Bangalore - 560041</Text>
            <Image
              mt={5}
              ml={5}
              w={"40%"}
              src="http://www.kidsworldfun.com/images/story-contest/2016-2/elephant-cartoon.png"
            />
          </Box>
          <Box
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            display={"flex"}
            flexDirection={"column"}
            // border={"1px solid black"}
            p={5}
            w={{ base: "90%", md: "40%" }}
            justifyContent={"center"}
            m={"auto"}
            boxShadow=" rgba(0, 0, 0, 0.04) 0px 3px 5px"
            borderRadius={"10px"}
          >
            <Text fontSize={"3xl"} fontFamily={"cursive"}>
              write us
            </Text>
            <FormControl>
              {/* <FormLabel letterSpacing={"1px"}>Name</FormLabel> */}
              <Input
                placeholder="Enter your name"
                focusBorderColor="#7bd79f"
                backgroundColor={"white"}
                boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
                letterSpacing={"1px"}
                type="text"
                mt={5}
              />
              {/* <FormLabel mt={5} letterSpacing={"1px"}>
                Email address
              </FormLabel> */}
              <Input
                placeholder="Enter your email"
                focusBorderColor="#7bd79f"
                backgroundColor={"white"}
                letterSpacing={"1px"}
                boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
                type="email"
                mt={5}
              />
              {/* <FormLabel mt={5} letterSpacing={"1px"}>
                Subject
              </FormLabel> */}
              <Input
                placeholder="Enter your email"
                focusBorderColor="#7bd79f"
                backgroundColor={"white"}
                letterSpacing={"1px"}
                boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
                type="text"
                mt={5}
              />
              {/* <FormLabel mt={5} letterSpacing={"1px"}>
                Messege
              </FormLabel> */}
              <Textarea
                placeholder="Message"
                focusBorderColor="#7bd79f"
                backgroundColor={"white"}
                letterSpacing={"1px"}
                boxShadow="rgba(0, 0, 0, 0.45) 0px 25px 20px -20px"
                type="text"
                mt={5}
              />
              <Input
                backgroundColor={"#d12881"}
                w={{ base: "100%", md: "40%" }}
                m={"auto"}
                color={"white"}
                borderRadius={"10px 20px 10px 30px"}
                _hover={{ backgroundColor: "#EC9600" }}
                letterSpacing={"1px"}
                boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
                mt={5}
                type="submit"
                value="Submit"
              />
            </FormControl>
          </Box>
        </Box>
      </Box>
    );
}