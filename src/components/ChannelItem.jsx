import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ChannelItem = ({channel}) => {
  const {id, image, title, description, publishedAt} = channel;
  const href = `https://www.youtube.com/channel/${id}`;
  return (
    <ItemWrapper>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <ItemPicture src={image.url} />
      </a>
      <div>{title}</div>
      <div>{description}</div>
      <div>{publishedAt}</div>
    </ItemWrapper>
  );
};

ChannelItem.propTypes = {
  channel: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.shape({
      url: PropTypes.string,
    }),
    title: PropTypes.string,
    description: PropTypes.string,
    publishedAt: PropTypes.string,
  }),
};

ChannelItem.defaultProps = {
  channel: {},
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
  width: 60%;
  display: block;
  margin: 0 auto;
  border-radius: 50%;
  padding: 1rem;
`;

export default ChannelItem;
