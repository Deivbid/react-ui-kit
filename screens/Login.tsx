import { Block, Input, Text, Button } from '../components';
import React from 'react';
import useTheme from '../hooks/useTheme';

const Login = () => {
  const { sizes, colors } = useTheme();

  return (
    <Block marginTop={sizes.xxl * 3} paddingHorizontal={sizes.padding}>
      <Text h1 marginBottom={sizes.m}>
        Log In
      </Text>
      <Text size={sizes.text * 0.8} weight="bold">
        Email
      </Text>
      <Input
        keyboardType="email-address"
        placeholder="Email address"
        placeholderTextColor="black"
        marginBottom={sizes.md}
      />
      <Text size={sizes.text * 0.8} weight="bold">
        Password
      </Text>
      <Input
        keyboardType="number-pad"
        placeholder="Password"
        placeholderTextColor="black"
        marginBottom={sizes.md}
      />
      <Button center color={colors.primary}>
        <Text color={colors.white} weight={'800'}>
          Log in
        </Text>
      </Button>
    </Block>
  );
};

export default Login;
