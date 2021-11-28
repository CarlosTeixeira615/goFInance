import React, { useContext } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';
import { SignInSocialButton } from '../../components/SignInSocialButton';
import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignTItle,
  Footer,
  FooterWrapper,
} from './styles';

import { useAuth } from '../../hooks/auth';
export function SignIn() {
  const { user } = useAuth();
  console.log(user);

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />
          <Title>
            Controle suas{'\n'}finanças de forma{'\n'}muito simples.
          </Title>
        </TitleWrapper>
        <SignTItle>Faça seu login com{'\n'}uma das contas abaixo.</SignTItle>
      </Header>
      <Footer>
        <FooterWrapper>
          <SignInSocialButton title='Entrar com Google' svg={GoogleSvg} />
          <SignInSocialButton title='Entrar com Apple' svg={AppleSvg} />
        </FooterWrapper>
      </Footer>
    </Container>
  );
}