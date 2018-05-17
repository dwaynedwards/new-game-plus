import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Grid } from 'semantic-ui-react';

const Header = () => {
  return (
    <Grid container>
      <Grid.Column>
        <Menu>
          <Menu.Item as={Link} to="/games">
            Home
          </Menu.Item>
          <Menu.Item as={Link} to="/games/xbox">
            Xbox One
          </Menu.Item>
          <Menu.Item as={Link} to="/games/playstation">
            Playstation 4
          </Menu.Item>
        </Menu>
      </Grid.Column>
    </Grid>
  );
};

export default Header;
