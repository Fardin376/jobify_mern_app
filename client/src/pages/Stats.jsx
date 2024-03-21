import { StatsContainer, ChartsContainer } from '../components';
import { useQuery } from '@tanstack/react-query';
import customFetch from '../utils/customFetch';

const statsQuery = {
  queryKey: ['stats'],
  queryFn: async () => {
    const response = await customFetch.get('/jobs/stats');
    return response.data;
  },
};

export const loader = (queryClient) => async () => {
  const data = await queryClient.ensureQueryData(statsQuery);
  return data;
};

const Stats = () => {
  const { data } = useQuery(statsQuery);
  const { defaultStatusStats, defaultTypeStats, monthlyApplications } = data;

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
