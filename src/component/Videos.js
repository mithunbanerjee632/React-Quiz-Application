import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideosList from "../Hooks/useVideosList";
import Video from "./Video";

const Videos = () => {
  const { page, setPage } = useState(1);
  const { loading, error, videos, hasMore } = useVideosList(0);

  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          loader="Loading..."
          next={() => setPage(page + 8)}
        >
          {videos.map((video) =>
            video.noq > 0 ? (
              <Link to={`/quiz/${video.youtubeID}`} key={video.youtubeID}>
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                />
              </Link>
            ) : (
              <Video
                title={video.title}
                id={video.youtubeID}
                noq={video.noq}
                key={video.youtubeID}
              />
            )
          )}
        </InfiniteScroll>
      )}

      {!loading && videos.length === 0 && <div>No Data Found!</div>}
      {error && <div>Something Went Wrong!</div>}
      {loading && <div>Please Wait...</div>}
    </div>
  );
};

export default Videos;
