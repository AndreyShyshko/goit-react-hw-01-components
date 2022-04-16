import PropTypes from 'prop-types';
import {
  Container,
  Description,
  Avatar,
  UserName,
  UserTag,
  UserLocation,
  Stats,
  StatsItems,
  ItemLabel,
  ItemQuantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </Description>

      <Stats>
        <StatsItems>
          <ItemLabel>Followers</ItemLabel>
          <ItemQuantity>{stats.followers}</ItemQuantity>
        </StatsItems>
        <StatsItems>
          <ItemLabel>Views</ItemLabel>
          <ItemQuantity>{stats.views}</ItemQuantity>
        </StatsItems>
        <StatsItems>
          <ItemLabel>Likes</ItemLabel>
          <ItemQuantity>{stats.likes}</ItemQuantity>
        </StatsItems>
      </Stats>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  },
};
