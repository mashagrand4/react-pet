import axios from 'axios';

const params = {
  part: 'snippet',
  maxResults: 12,
  key: 'AIzaSyD8a-SC61GaTYfoWeq59uyeQRosGubgKHg',
};

const getSearchDataMapping = data => {
  return data.map(item => {
    console.log(item);
    return {
      id: item.id.videoId || item.id.channelId || item.id.playlistId,
      kind: item.id.kind,
      title: item.snippet.title,
      channelId: item.snippet.channelId,
      channelTitle: item.snippet.channelTitle,
      description: item.snippet.description,
      publishedAt: item.snippet.publishedAt,
      image: {
        url: item.snippet.thumbnails.high.url,
        height: item.snippet.thumbnails.high.height,
        width: item.snippet.thumbnails.high.width,
      },
    };
  });
};

export default class YoutubeApi {
  static async searchVideo({ value, nextPageToken }) {
    try {
      const result = await axios.get('/search', {
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params: {
          ...params,
          q: value,
          pageToken: nextPageToken,
        },
      });
      return {
        items: getSearchDataMapping(result.data.items),
        nextPageToken: result.data.nextPageToken,
      };
    } catch (error) {
      console.log(error);
    }
  }

  static async fetchVideoRating({ ids }) {
    try {
      const result = await axios.get('/videos', {
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params: {
          part: 'statistics',
          key: params.key,
          id: ids.join(','),
        },
      });
      return result.data.items.map(item => {
        return {
          id: item.id,
          statistics: item.statistics,
        };
      });
    } catch (error) {
      console.log(error);
    }
  }
}
