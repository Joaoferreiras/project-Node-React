import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Container from "../../components/Background";
import H1 from "../../components/Title";
import Button from "../../components/Button";
import { Image, Order } from "./styles";
import Burguer from "../../assets/burger(orders)1.svg";
import Trash from "../../assets/trash.svg";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      const { data: newOrders } = await axios.get(
        "http://localhost:3001/orders"
      );

      setOrders(newOrders);
    };
    fetchOrders();
  }, []);

  const deleteOrder = async (orderId) => {
    await axios.delete(`http://localhost:3001/orders/${orderId}`);

    const newOrder = orders.filter((order) => order.id !== orderId);

    setOrders(newOrder);
  };

  const goBackPage = () => {
    navigate("/");
  };

  return (
    <Container>
      <Image alt="logo-image" src={Burguer} />
      <H1>Pedidos</H1>
      <ul>
        {orders.map((order) => (
          <Order key={order.id}>
            {order.order}
            <br />
            <br />
            {order.name}
            <button onClick={() => deleteOrder(order.id)}>
              <img alt="trash-image" src={Trash} />
            </button>
          </Order>
        ))}
      </ul>
      <Button isBack={true} onClick={goBackPage}>
        Voltar
      </Button>
    </Container>
  );
};

export default Orders;
