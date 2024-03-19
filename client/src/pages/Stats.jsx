import { StatsContainer, ChartsContainer } from '../components';
import { useLoaderData } from 'react-router-dom';
import customFetch from '../utils/customFetch';

export const loader = async () => {
  try {
    const response = await customFetch.get('/jobs/stats');
    return response.data;
  } catch (error) {
    return error;
  }
};

const Stats = () => {
  const { defaultStatusStats, defaultTypeStats, monthlyApplications } =
    useLoaderData();

  return (
    <>
      <StatsContainer
        defaultStatusStats={defaultStatusStats}
        defaultTypeStats={defaultTypeStats}
      />

      {monthlyApplications?.length > 0 && (
        <ChartsContainer data={monthlyApplications} />
      )}
    </>
  );
};

export default Stats;
