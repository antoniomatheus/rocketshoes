import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';
import api from '../../services/api';

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

    return <Text>First page</Text>;
  }
}
