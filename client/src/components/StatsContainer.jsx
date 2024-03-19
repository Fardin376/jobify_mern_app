/* eslint-disable react/prop-types */
import {
  FaSuitcaseRolling,
  FaCalendarCheck,
  FaBug,
  FaBriefcase,
  FaUserGraduate,
} from 'react-icons/fa';
import { BiTimeFive } from 'react-icons/bi';
import Wrapper from '../assets/wrappers/StatsContainer';
import StatItem from './StatItem';

const StatsContainer = ({ defaultStatusStats, defaultTypeStats }) => {
  const statusStats = [
    {
      title: 'pending applications',
      count: defaultStatusStats?.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: '#f59e0b',
      bcg: '#fef3c7',
    },
    {
      title: 'interviews scheduled',
      count: defaultStatusStats?.interview || 0,
      icon: <FaCalendarCheck />,
      color: '#647acb',
      bcg: '#e0e8f9',
    },
    {
      title: 'jobs declined',
      count: defaultStatusStats?.declined || 0,
      icon: <FaBug />,
      color: '#d66a6a',
      bcg: '#ffeeee',
    },
  ];
  const typeStats = [
    {
      title: 'full-time jobs',
      count: defaultTypeStats?.FULL_TIME || 0,
      icon: <FaBriefcase />,
      color: '#29C068',
      bcg: '#BDFBD8',
    },
    {
      title: 'part-time jobs',
      count: defaultTypeStats?.PART_TIME || 0,
      icon: <BiTimeFive />,
      color: '#3884B7 ',
      bcg: '#A9DBFD',
    },
    {
      title: 'internships',
      count: defaultTypeStats?.INTERNSHIP || 0,
      icon: <FaUserGraduate />,
      color: '#D0B72D ',
      bcg: '#fcefc7',
    },
  ];

  return (
    <Wrapper>
      {statusStats.map((item) => {
        return <StatItem key={item.title} {...item} />;
      })}
      {typeStats.map((item) => {
        return <StatItem key={item.title} {...item} />;
      })}
    </Wrapper>
  );
};
export default StatsContainer;
