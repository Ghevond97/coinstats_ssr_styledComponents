import React, { Component } from 'react';

import { getStats } from '../../actions';

import styled from 'styled-components';
import Table from 'rc-table';

export const AppContainer = styled.div`
  background-color: red;
  color: white;
`;

const columns = [
  { title: 'title1', dataIndex: 'a', key: 'a', width: 100 },
  { id: '123', title: 'title2', dataIndex: 'b', key: 'b', width: 100 },
  { title: 'title3', dataIndex: 'c', key: 'c', width: 200 },
  {
    title: 'Operations',
    dataIndex: '',
    key: 'd',
    render() {
      return <a href="#">Operations</a>;
    }
  }
];

const data = [
  { a: '123', key: '1' },
  { a: 'cdd', b: 'edd', key: '2' },
  { a: '1333', c: 'eee', d: 2, key: '3' }
];

const BodyRow = styled.tr`
  &:hover {
    background: palevioletred !important;
  }
`;

const components = {
  body: {
    row: BodyRow
  }
};

class TableOfStats extends Component {
  
  static initialAction({ dispatch }) {
    return [dispatch(getStats())];
  }

  componentDidMount() {
    const { getStats } = this.props();

    getStats();
  }
  
  render() {
    const { stats } = this.props;
    return (
      <AppContainer>
        <Table columns={columns} data={data} components={components} />
      </AppContainer>
    );
  }
}

export default TableOfStats;
