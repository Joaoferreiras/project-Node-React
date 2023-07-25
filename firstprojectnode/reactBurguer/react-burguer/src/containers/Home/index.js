import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Burguer from "../../assets/burger1.svg";
import Container from "../../components/Background/index.js";
import { Image, InputContainer, Input, InputLabel } from "./styles.js";
import H1 from "../../components/Title";
import Button from "../../components/Button";

const Home = () => {
  const inputOrder = useRef();
  const inputName = useRef();
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const addNewOrder = async () => {
    const { data: newOrder } = await axios.post(
      "http://localhost:3001/orders",
      {
        id: Math.random(),
        name: inputName.current.value,
        order: inputOrder.current.value,
      }
    );

    setOrders([...orders, newOrder]);

    navigate("/pedidos");
  };
  return (
    <Container>
      <Image alt="code-burguer-img" src={Burguer} />

      <H1>Faça seu pedido!</H1>
      <InputContainer>
        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="1 Coca-cola, 1 X-salada" />

        <InputLabel>Nome do cliente</InputLabel>
        <Input ref={inputName} placeholder="João" />
      </InputContainer>
      <Button onClick={addNewOrder}>Novo pedido</Button>
    </Container>
  );
};

export default Home;
