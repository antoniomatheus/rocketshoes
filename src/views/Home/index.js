import React, { Component } from 'react';
import { Button, Text } from 'react-native';
import api from '../../services/api';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

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
    const { navigation } = this.props;

    return (
      <Button
        title="Go to the cart"
        onPress={() => navigation.navigate('Cart')}
      />
    );
  }
}
