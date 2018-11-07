import React, { Component } from 'react';

import { getStats } from '../../actions';

import styled from 'styled-components';
import Table from 'rc-table';

export const AppContainer = styled.thead`
  color: red;
`;
const columns = [
  { title: '#  Name', dataIndex: 'a', key: 'a', width: 100 },
 // { id: '123', title: 'title2', dataIndex: 'b', key: 'b', width: 100 },
  { title: 'Market Cap', dataIndex: 'b', key: 'b', width: 100 },
  { title: 'Price', dataIndex: 'c', key: 'c', width: 100 },
  { title: 'Volume(24h)', dataIndex: 'd', key: 'd', width: 100 },
  { title: 'Circulating Supply', dataIndex: 'e', key: 'e', width: 100 },
  { title: 'Change(24h)', dataIndex: 'f', key: 'f', width: 100 },
];
// background-color: black;
// color: white;

const BodyRow = styled.tr`
  &:hover {
    background: palevioletred !important;
  }
`;

const components = {
  body: {
    row: BodyRow,
    table: AppContainer
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
    let data = [];
    {
  
      stats.map(el =>
        data.push({
          a:el.name,
          b: el.quote["USD"]["market_cap"],
          c: el.quote["USD"]["price"],
          d: el.quote["USD"]["volume_24h"],
          e: el.circulating_supply,
          f: el.quote["USD"]["percent_change_24h"]
        })
      );
    }
    return <Table columns={columns} data={data} components={components} />;
  }
}

export default TableOfStats;
