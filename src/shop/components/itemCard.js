import React from "react";
import { Button } from "../../shared/components/button";
import { Modal } from "../../shared/modal";

const ItemCard = (props) => {
  const { show, close, item } = props;

  return (
    <Modal
      header={item.title}
      close={close}
      show={show}
      template="close"
      showAnimatonStyle={{
        type: "slideHorizontally",
        side: "left",
        duration: 0.2,
      }}
      hideAnimatonStyle={{
        type: "slideHorizontally",
        side: "right",
        duration: 0.2,
      }}
      footer={
        <Button
          template="close"
          styled={{ background: "pink" }}
          clicked={close}
        />
      }
    >
      <h4>{item.category}</h4>
      <div>Rating: {item.rating.rate}/5</div>
      <div>Vote: {item.rating.count}</div>
      <img style={{ width: "100px" }} alt={item.title} src={item.image} />
      <div>{item.description}</div>
      <h4>Price: {item.price} Eur</h4>
    </Modal>
  );
};

export default ItemCard;
