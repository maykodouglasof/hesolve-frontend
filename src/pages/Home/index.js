import React from "react";
import { FaUserAlt, FaWhatsapp } from "react-icons/fa";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  Select,
} from "@chakra-ui/react";

import {
  Content,
  ContentHead,
  Services,
  MenuContent,
  Container,
  IntroContainer,
  ServiceList,
  JobItem,
  JobItemHeader,
  JobItemContent,
} from "./styles";

import imageJob from "../../assets/images/job.svg";
import Header from "../../components/Header";

import { useService } from "../../context/service";

const Home = () => {
  const { servicesList, getServices } = useService();

  React.useEffect(() => {
    getServices();
  }, []);

  return (
    <Container>
      <Header />
      <ContentHead>
        <IntroContainer>
          <span>Encontre profissionias de qualidade e confiáveis.</span>
        </IntroContainer>

        {/* <JobImage>
          <img src={imageJob} alt="Localiza Jobs" />
        </JobImage> */}
      </ContentHead>

      <Content>
        <Services>
          <MenuContent>
            <h2>Pesquisar:</h2>

            <form method="GET" action="/ads">
              <input type="text" name="q" placeholder="O que você procura?" />

              <label htmlFor="uf">Estado(UF)</label>
              <Select name="uf" id="uf">
                <option value="0">Selecione uma UF</option>
                {/* {ufs.map(uf => (
                    <option key={uf} value={uf}>
                      {uf}
                    </option>
                  ))} */}
              </Select>
              <label htmlFor="city">Cidade</label>
              <Select name="city" id="city">
                <option value="0">Selecione uma cidade</option>
                {/* {cities.map(city => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))} */}
              </Select>
              <button type="submit">Pesquisar</button>
            </form>
          </MenuContent>

          <ServiceList>
            {servicesList.map((service) => (
              <Card>
                <CardHeader>
                  <Heading size="md">{service.title}</Heading>
                  <Text>
                    {service.city} - {service.state}
                  </Text>
                </CardHeader>
                <CardBody>
                  <Text>{service.description}</Text>
                </CardBody>
                <CardFooter>
                  <Button>{service.category_name}</Button>
                </CardFooter>
              </Card>

              // <JobItem>

              //   <JobItemContent>
              //     <span>{service.description}</span>
              //   </JobItemContent>
              //   <button>
              //     <div>
              //       <FaWhatsapp size={18} color="#fff" />
              //     </div>
              //     <span>Entrar em contato</span>
              //   </button>
              // </JobItem>
            ))}
          </ServiceList>
        </Services>
      </Content>
    </Container>
  );
};

export default Home;
