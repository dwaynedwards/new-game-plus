import React from 'react';
import PropTypes from 'prop-types';
import { Item, Label } from 'semantic-ui-react';

const GameFull = ({ game }) => {
  return (
    <Item.Group relaxed="very">
      <Item>
        <Item.Image size="large" src={game.pictureUrl} />
        <Item.Content verticalAlign="middle">
          <Item.Header>{game.name}</Item.Header>
          <Item.Meta>{game.platform}</Item.Meta>
          <Item.Description>{game.description}</Item.Description>
          <Item.Extra>
            <Label>${game.price}</Label>
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  );
};

GameFull.propTypes = {
  game: PropTypes.object.isRequired
};

export default GameFull;
