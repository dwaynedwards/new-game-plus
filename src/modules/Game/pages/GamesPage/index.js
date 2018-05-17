import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import axios from 'axios';
import GameShort from '../../components/GameShort';

export default class GamesPage extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  };

  state = {
    games: []
  };

  originalGames = [];
  platform = '';

  componentDidMount = () => {
    this.getData();
  };

  componentDidUpdate = prevProps => {
    const { match: curr } = this.props;
    const { match: prev } = prevProps;

    if (curr.params.platform === prev.params.platform) {
      return;
    }

    this.getData();
  };

  getData = () => {
    const { match } = this.props;
    this.platform = match.params.platform;
    axios
      .get(`/api/games/${this.platform || ''}`)
      .then(res => {
        this.originalGames = res.data;
        this.setState({ games: this.originalGames });
      })
      .catch(console.error);
  };

  render() {
    return (
      <Grid container>
        {this.state.games.map(game => {
          return <GameShort key={game._id} game={game} />;
        })}
      </Grid>
    );
  }
}
