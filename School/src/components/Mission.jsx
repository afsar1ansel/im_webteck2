import { Box, Heading, Image, Text } from "@chakra-ui/react";
import "./Mission.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Mission() {
    AOS.init();
  return (
    <div
      className="Animation"
      style={{ position: "relative", marginTop: "50px" }}
    >
      <Box display="flex" justifyContent="end" zIndex={50}>
        <Box
          maxWidth="500px"
          margin="20px"
          backgroundColor="#f5f5f5"
          position="absolute"
          padding="20px"
          boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2)"
          borderRadius="10px"
          h={"auto"}
          data-aos="zoom-in"
        >
          <Heading
            size="2xl"
            fontFamily="cursive"
            marginBottom={{ base: "2px", md: "20px" }}
          >
            Our Mission
          </Heading>
          <Text marginBottom={{ base: "2px", md: "20px" }}>
            We draw inspiration from Christ who willed the total development of
            every person, and also from our foundress, Mother Veronica. Our aim
            is to form integrated women:
          </Text>
          <Text>
            • capable of responding to life’s challenges with joy and deep faith
            in God,
          </Text>
          <Text>• guided by right values in their choices and decisions</Text>
          <Text>• enriched by our cultural heritage,</Text>
          <Text>• and equipped with leadership qualities.</Text>
          <Text>• committed to the service of our people</Text>
          <Image
            width="40%"
            margin="auto"
            backgroundColor={"#f5f5f5"}
            src="https://freepngimg.com/thumb/kids/28801-4-child-photos-thumb.png"
          />
        </Box>
      </Box>

      <div class="frame">
        <div class="plane-container">
          <a href="http://customer.io/" target="_blank">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="1131.53px"
              height="379.304px"
              viewBox="0 0 1131.53 379.304"
              enable-background="new 0 0 1131.53 379.304"
              xml:space="preserve"
              class="plane"
            >
              <polygon
                fill="#D8D8D8"
                points="72.008,0 274.113,140.173 274.113,301.804 390.796,221.102 601.682,367.302 1131.53,0.223  "
              />
              <polygon
                fill="#C4C4C3"
                points="1131.53,0.223 274.113,140.173 274.113,301.804 390.796,221.102   "
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="clouds">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="762px"
          height="331px"
          viewBox="0 0 762 331"
          enable-background="new 0 0 762 331"
          xml:space="preserve"
          class="cloud big front slowest"
        >
          <path
            fill="#FFFFFF"
            d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106
c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5
S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"
          />
        </svg>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="762px"
          height="331px"
          viewBox="0 0 762 331"
          enable-background="new 0 0 762 331"
          xml:space="preserve"
          class="cloud distant smaller"
        >
          <path
            fill="#FFFFFF"
            d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106
c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5
S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"
          />
        </svg>

        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="762px"
          height="331px"
          viewBox="0 0 762 331"
          enable-background="new 0 0 762 331"
          xml:space="preserve"
          class="cloud small slow"
        >
          <path
            fill="#FFFFFF"
            d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106
c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5
S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"
          />
        </svg>

        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="762px"
          height="331px"
          viewBox="0 0 762 331"
          enable-background="new 0 0 762 331"
          xml:space="preserve"
          class="cloud distant super-slow massive"
        >
          <path
            fill="#FFFFFF"
            d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106
c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5
S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"
          />
        </svg>

        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="762px"
          height="331px"
          viewBox="0 0 762 331"
          enable-background="new 0 0 762 331"
          xml:space="preserve"
          class="cloud slower"
        >
          <path
            fill="#FFFFFF"
            d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106
c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5
S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"
          />
        </svg>
      </div>
    </div>
  );
}

export default Mission;
