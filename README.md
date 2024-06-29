# YouTube Notes App

Welcome to the YouTube Notes App! This application allows users to take and manage notes while watching YouTube videos, providing a seamless and organized way to capture key points and ideas.

## Live Application URL

### https://you-tube-notes.vercel.app/

This URL has the application deployed in

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Approach](#approach)

## Features

- **Video Integration**: Easily search for and play YouTube videos using video ids directly within the app.
- **Note Taking**: Take timestamped notes while watching videos for easy reference.
- **Organized Storage**: Save notes and categorize them by video.
- **Edit Notes**: Edit or delete notes anytime.

### Technologies Used

- **React**: The front-end library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling the user interface.
- **React YouTube**: A React component for playing YouTube videos.
- **React Hot Toast**: A toast notification library for React applications, used for displaying notifications.
- **React Icons**: A library providing popular icon packs as React components, used for rendering icons.
- **UUID**: A library for generating unique identifiers, used for creating unique IDs for notes in the application.

## Installation

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine
- NPM (Node Package Manager) or Yarn

### Clone the Repository

```bash
git clone https://github.com/yourusername/youtube-notes-app.git
cd youtube-notes-app

```

### Install the Dependencies

```bash
npm install
# or
yarn install
```

### Start the application

```bash
npm run dev
```

## Usage

1. **Search Videos**: Use the search bar to find YouTube videos by video ID.
2. **Watch and Take Notes**: Play a video and start taking notes. Your notes will be timestamped automatically.
3. **Manage Notes**: View, edit, and manage your notes.

## Approach

### Context and State Management

The app uses React's Context API and hooks for efficient state management, providing context to various components.

#### Player Context

`PlayerContext` manages the YouTube player instance and video ID.

#### Notes Context

`NotesContext`handles note creation, editing, and deletion, with persistence in local storage.
