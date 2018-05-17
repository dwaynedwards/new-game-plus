import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import axios from 'axios';
import GameFull from '../../components/GameFull';

export default class GamePage extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  };

  state = {
    game: {}
  };

  platform = '';
  slug = '';

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    const { match } = this.props;
    this.platform = match.params.platform;
    this.slug = match.params.slug;

    axios
      .get(`/api/games/${this.platform || ''}/${this.slug || ''}`)
      .then(res => {
        this.setState({ game: res.data });
      })
      .catch(console.error);
  };

  render() {
    return (
      <Grid container>
        {this.state.game && <GameFull game={this.state.game} />}
      </Grid>
    );
  }
}
