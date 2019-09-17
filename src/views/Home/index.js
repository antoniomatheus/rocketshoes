import React, { Component } from 'react';
import { Container, List } from './styles';
import api from '../../services/api';

import Item from '../../components/Item';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('/products');

    this.setState({
      products: response.data,
    });
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        <List
          data={products}
          renderItem={({ item }) => {
            return <Item item={item} />;
          }}
          horizontal
          keyExtractor={item => `${item.id}`}
        />
      </Container>
    );
  }
}
