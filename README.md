# Collab Code Challenge

## Brief

At Collab, we often build tools that interact with online media content. Your challenge is to build out a video playlist app using data from our Mock YouTube API.

With this app, you should be able to:

- Fetch a list of YouTube videos from our Mock YouTube API
- Display the fetched YouTube videos
- Create an empty playlist and give it a name
- Add videos to a playlist
- Remove videos from a playlist
- Drag and Drop UI to reorder the list of videos in a playlist

For each video element, we'd like to see the following video metadata displayed:

- Thumbnail
- Title
- Description
- View Count

---

## Collab's YouTube API Reference

The API base URL is https://mock-youtube-api-f3d0c17f0e38.herokuapp.com/api

The following endpoint is available:

- Get `/videos`

  Sample: GET https://mock-youtube-api-f3d0c17f0e38.herokuapp.com/api/videos

  ### **Query Params**

  | Name              | Type    | Description                  |
  | ----------------- | ------- | ---------------------------- |
  | `page` (optional) | integer | Specify the page to retrieve |

  Sample: GET https://mock-youtube-api-f3d0c17f0e38.herokuapp.com/api/videos?page=2

  Sample response

  ```json
  {
    "videos": [
      {
        "id": 1,
        "title": "thanks for 5 million",
        "video_id": "H1tQhK0n5Qk",
        "views": 279357,
        "likes": 66689,
        "comments": 3144,
        "description": "#shorts",
        "thumbnail_url": "https://i.ytimg.com/vi/H1tQhK0n5Qk/default.jpg",
        "created_at": "2021-11-24T22:23:27.130Z",
        "updated_at": "2021-11-24T22:23:27.130Z"
      }
    ],
    "meta": {
      "total": 92,
      "page": 2
    }
  }
  ```

---

## **Bonus**

- Filter YouTube videos by a title search
- Add pagination. Extra credit if you can add basic pagination _without_ using an existing library/gem or npm package

### Design Notes

We are intentionally leaving the design and UI of the app open-ended. This is an opportunity to demonstrate your creativity and knowledge of user experience.

### Technologies To Use

We encourage you to use Ruby On Rails to build the app as this is what you would work the most with, but feel free to use any language and/or framework of your choosing to complete the challenge.

Have fun, we promise to provide good feedback!
