import React, { Component } from 'react';

import { getStats } from '../../actions';

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
    
    return <div>fg</div>;
  }
}

export default TableOfStats;
