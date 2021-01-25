# iTunes Player API - Single Page Application
## Search a song in the iTunes database
### You can search not only a song but also an artist or an album, press Search and a list of ten items will be displayed in the list, if they exists!

- Application definition 
"iTunes Player API - Single Page Application" (from now on iTunes Player APP) is an application with two main functionalities:
* Play songs
* Search for songs that can be played on the player.


When loading iTunes Player APP in a web browser, we will see a heading with an introductory text that explains the operation and two graphic elements, the player and the table of search results.
* By default, both the player and the results table will have loaded the song “Polly” by Nirvana. In this way, the user can start playing with the app.

- Features
* The full functionalities of iTunes Player APP are:
 * Player
  * Shows the album to which the currently playing song belongs
  * Shows the song data:
   * Name of the song
   * Artist or band
   * Album to which it belongs
  * Player and playbar, with functionalities for:
   * Play / Pause
   * The play bar advances according to the advance of the song playback
   * Play the next song on the list
   * Play the previous song in the list
  * Search results table
   * It is divided into the following columns:
    * Artist
    * Song name
    * Album to which it belongs
    * All columns have the option to sort the table
   * The lower part offers the search field, divided into:
    * Field in which to enter the search term
    * Button to run the search.

- Appearance
A responsive appearance has been chosen so that iTunes Player APP can adapt to the different available devices (desktop, tablet and mobile phone), following the following distribution:
* Desktop Size:
 * Header with descriptive texts to a column, and below ...
 * Two columns, player on the left and search result table on the right
* Tablet and mobile phone size:
 * Header with descriptive texts to a column, below ...
 * Player to one column, below ...
* Search result table to a column

- Technology used
iTunes Player APP has been developed using the following technologies:

* HTML5 + Bootstrap: the layout and distribution of the contents
* Bootstrap + Sass: Content Styles
* Javascript: App programming  
