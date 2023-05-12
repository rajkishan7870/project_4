import React, { useState } from "react";
import {Card,CardContent,Button,TextField,IconButton} from "@mui/material";
import "./card.css";

function CardList() {
  const [cards, setCards] = useState([]);

  const handleAddCard = () => {
    setCards([...cards, { title: "", items: [] }]);
  };

  const handleCardTitleChange = (event, index) => {
    const updatedCards = [...cards];
    updatedCards[index].title = event.target.value;
    setCards(updatedCards);
  };

  const handleAddItem = (index) => {
    const updatedCards = [...cards];
    updatedCards[index].items.push("");
    setCards(updatedCards);
  };

  const handleRemoveTask = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  const handleItemChange = (event, cardIndex, itemIndex) => {
    const updatedCards = [...cards];
    updatedCards[cardIndex].items[itemIndex] = event.target.value;
    setCards(updatedCards);
  };

  return (
    <div className="container">
      {cards.map((card, index) => (
        <Card key={index} className="card">
          <CardContent>
            <input              
              value={card.title}
              onChange={(event) => handleCardTitleChange(event, index)}
              hidden
            />
            {card.items.map((item, itemIndex) => (
              <div key={itemIndex}>
                <TextField                 
                  value={item}
                  onChange={(event) =>
                    handleItemChange(event, index, itemIndex)
                  }
                />
              </div>
            ))}
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => handleAddItem(index)}
            >
              Add Item
            </Button>
            <IconButton
              aria-label="remove task"
              onClick={() => handleRemoveTask(index)}
              style={{ marginLeft: "10rem", top: "0px", right: "45%" }}
            >
              X
            </IconButton>
          </CardContent>
        </Card>
      ))}
      <Button sx={{
        textTransform : "none"
      }} onClick={handleAddCard}>+Add a Card</Button>
    </div>
  );
}

export default CardList;