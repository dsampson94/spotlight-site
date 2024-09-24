'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const YOUTUBE_CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;

export default function LatestVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=10&type=video`
        );

        const filteredVideos = response.data.items.filter(
            (video) => video.snippet.liveBroadcastContent === 'none'
        );

        setVideos(filteredVideos);
      } catch (error) {
        console.error('Error fetching YouTube videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
      <SimpleLayout title="My Latest Video Creations" intro="Retrieved automatically using YouTube Data API v3">
        <ul role="list" className="space-y-80 mb-32">
          {videos.map((video) => (
              <Card as="li" key={video.id.videoId} className="space-y-4">
                <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                  {video.snippet.title}
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {video.snippet.description}
                </p>
                <div className="w-full h-64">
                  <iframe
                      width="100%"
                      height="200%"
                      src={`https://www.youtube.com/embed/${video.id.videoId}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                  ></iframe>
                </div>
              </Card>
          ))}
        </ul>
      </SimpleLayout>
  );
}
