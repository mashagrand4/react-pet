import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const VideoItem = props => {
  const { video } = props;
  const href = `https://www.youtube.com/watch?v=${video.id}`;
  return (
    <ItemWrapper>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <ItemPicture src={video.image.url} />
      </a>
      <div>{video.title}</div>
      <div>{video.description}</div>
      <div>{video.publishedAt}</div>
      <div>
        VIEW:
        {video.statistics.viewCount}
      </div>
      <div>
        LIKES:
        {video.statistics.likeCount}
      </div>
      <div>
        DISLIKES:
        {video.statistics.dislikeCount}
      </div>
      <div>
        FAVOURITES:
        {video.statistics.favoriteCount}
      </div>
      <div>
        COMMENTS:
        {video.statistics.commentCount}
      </div>
    </ItemWrapper>
  );
};

VideoItem.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.shape({
      url: PropTypes.string,
    }),
    title: PropTypes.string,
    description: PropTypes.string,
    publishedAt: PropTypes.string,
    statistics: PropTypes.shape({
      viewCount: PropTypes.string,
      likeCount: PropTypes.string,
      dislikeCount: PropTypes.string,
      favoriteCount: PropTypes.string,
      commentCount: PropTypes.string,
    }),
  }),
};

VideoItem.defaultProps = {
  video: {},
};

const ItemWrapper = styled.div`
  width: calc(100% / 3 - 1.2rem);
  text-align: center;
  margin: 0.5rem 0.5rem;
  background-color: #f7f7f7;
  border: 1px solid #eaeaea;
  padding: 1rem 0;
  border-radius: 0.3rem;

  @media (max-width: 768px) {
    width: calc(100% / 2 - 1.2rem);
  }

  @media (max-width: 480px) {
    width: calc(100% - 1.2rem);
  }
`;

const ItemPicture = styled.img`
  width: 80%;
  display: block;
  margin: 0 auto;
  padding: 1rem;
`;

export default VideoItem;
