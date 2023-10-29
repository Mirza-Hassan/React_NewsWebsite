# News Aggregator Website

Description: 

Create a user interface for a news aggregator website with article search, filtering, and personalization features. Ensure mobile responsiveness.

# Table of Contents

- [Pre Requisites](#pre-requisites)
- [Folder Structure](#folder-structure)
- [Setup Instructions](#setup-instructions)
- [Endpoints](#endpoints)
- [ScreenShot](#screenshot)
- [Demo](#app-flow)
- [Live URL](#live-url)

# Pre Requisites

- Frontend: React.js
- Responsive Styled-components
- Containerization: Docker
  
# Folder Structure
![FS](https://github.com/Mirza-Hassan/React_NewsWebsite/assets/17096257/0d85e198-9f94-406e-b496-1365db67ac33)

# Setup Instructions

1. Clone the repository
- Run `git clone https://github.com/Mirza-Hassan/React_NewsWebsite.git` 

2. Running the app

- Run `docker-compose up`


# Endpoints

This documentation provides information about the News Aggregator API, which gathers news articles from various sources and provides access to them through the following endpoints.

### 1. The Guardian API

- **Endpoint:** `https://content.guardianapis.com/search`
- **Description:** Retrieves news articles from The Guardian.
- **Parameters:** 
  - `api-key` (string, required): Your API key for access.
  - Additional parameters may be supported. Refer to The Guardian API documentation for details.

### 2. News API

- **Endpoint:** `https://newsapi.org/v2/top-headlines`
- **Description:** Retrieves top headlines from various news sources worldwide.
- **Parameters:** 
  - `country` (string, required): The country code for the headlines you want to retrieve.
  - `apiKey` (string, required): Your API key for access.
  - Additional parameters may be supported. Refer to the News API documentation for details.

### 3. New York Times API

- **Endpoint:** `https://api.nytimes.com/svc/topstories/v2/us.json`
- **Description:** Retrieves top stories from The New York Times.
- **Parameters:** 
  - `api-key` (string, required): Your API key for access.
  - Additional parameters may be supported. Refer to The New York Times API documentation for details.

# ScreenShot
![SS](https://github.com/Mirza-Hassan/React_NewsWebsite/assets/17096257/eb175c89-22ea-4989-a7c9-e4e28aaa7e10)

# App Flow
[Demo.webm](https://github.com/Mirza-Hassan/React_NewsWebsite/assets/17096257/429eafd8-7121-48cd-bbd5-2a9296794480)

# Live URL
https://articlewebsite.surge.sh/ 
(Todo: will look into Cors issue)
