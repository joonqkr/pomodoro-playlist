# Functionality
Given a playlist of songs and a structure of the pomodoro schedule, create a pomodoro playlist that plays 25 mins of songs from the playlist and 5 mins of a chosen break music.

# Components
## User Decisions - Playlist Basics
- Playlist title
- Playlist cover
- Playlist public
- Playlist collaborative
- Playlist description

## User Decisions - Playlist Structure
- How many task intervals?
- How many rest intervals? What kind of rest intervals (short or long)?
- What kind of songs for each interval (allow different playlists for each interval type, different choice of instrumental vs. non-instrumental for each interval type)?
- Should there be a delimiting sound/song between intervals?

## Playlist Generation
- Use `duration_ms` to find songs that add up to desired length
- Use `instrumentalness` to choose songs for task intervals vs. rest intervals

# Functions
## generateSongList(songs, duration, margin)
Given a list of songs (and their duration), a desired total duration, and allowed margin, generate a list of songs and their track IDs that are around the given duration time.

## createPlaylist(songs, title, description, cover, public, collaborative)
Given a list of songs and their track ID, create a single playlist containing all of them. Optionally, set playlist settings.

# API Calls to Use
- Get Track's Audio Analysis (`GET /audio-features/{id}`)
- Change Playlist Details (`PUT /playlists/{playlist_id}`)
- Get Playlist Items (`GET /playlists/{playlist_id}/tracks`)
- Add Items to Playlist (`POST /playlists/{playlist_id}/tracks`)
- Create Playlist (`POST /users/{user_id}/playlists`)
- Add Custom Playlist Cover Image (`PUT /playlists/{playlist_id}/images`)