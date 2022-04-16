import PropTypes from 'prop-types';
import {
  Container,
  Title,
  StatList,
  StatItem,
  StatLabel,
  StatPercentage,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({ title = '', stats }) => {
  return (
    <Container>
      {title.length > 0 && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <StatLabel>{label}</StatLabel>
            <StatPercentage>{percentage}%</StatPercentage>
          </StatItem>
        ))}
      </StatList>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
