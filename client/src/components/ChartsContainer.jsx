/* eslint-disable react/prop-types */
import { useState } from 'react';
import BarChart from './BarChart';
import AreaChart from './AreaChart';
import Wrapper from '../assets/wrappers/ChartsContainer';

const ChartsContainer = ({ data }) => {
  const [areaChart, setAreaChart] = useState(false);

  return (
    <Wrapper>
      <h4>monthly applications</h4>
      <button
        type="button"
        onClick={() => setAreaChart(!areaChart)}
        className="btn"
      >
        {areaChart ? 'Bar Chart' : 'Area Chart'}
      </button>
      {areaChart ? <AreaChart data={data} /> : <BarChart data={data} />}
    </Wrapper>
  );
};
export default ChartsContainer;
