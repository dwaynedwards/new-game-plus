import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Label, Grid } from 'semantic-ui-react';

const GameShort = ({ game }) => {
  const platform = game.platform.split(' ')[0].toLowerCase();
  const url = `/games/${platform}/${game.slug}`;
  return (
    <Grid.Column computer={4}>
      <Card href={url}>
        <Card.Content>
          <Image src={game.pictureUrl} />
        </Card.Content>
        <Card.Content>
          <Card.Header>{game.name}</Card.Header>
          <Card.Meta>{game.platform}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Label horizontal="right">${game.price}</Label>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

GameShort.propTypes = {
  game: PropTypes.object.isRequired
};

export default GameShort;
