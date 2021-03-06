import React from 'react';
import Header from 'shared/Header';
import Banner from 'shared/Banner';
import AccountFrom from '../AccountForm';
import styled from 'styled-components';

const ManagerAccount = () => {
  return (
    <Wrapper>
      <Header />
      <Banner
        title="My Page"
        menu1="크루 관리"
        menu2="내 계정"
        background="#74b9ff"
        navBackground="#0984e3"
        routes1="/manager_page"
        routes2="/manager_account"
      />
      <AccountFrom />
    </Wrapper>
  );
};

export default ManagerAccount;

const Wrapper = styled.div``;
