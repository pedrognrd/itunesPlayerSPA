# iTunes Player API - Single Page Application
## **Description**

### Search a song in the iTunes database

You can search not only a song but also an artist or an album, press Search and a list of ten items will be displayed in the list, if they exists!

## Application definition 

"**iTunes Player API** - Single Page Application" (from now on **iTunes Player APP**) is an application with two main functionalities:
* Play songs
* Search for songs that can be played on the player.


When loading iTunes Player APP in a web browser, we will see a heading with an introductory text that explains the operation and two graphic elements, the player and the table of search results.
* By default, both the player and the results table will have loaded the song “Polly” by Nirvana. In this way, the user can start playing with the app.

## Features

The full functionalities of **iTunes Player APP** are:
* **Player**
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
* **Search results table**
    * It is divided into the following columns:
        * Artist
        * Song name
        * Album to which it belongs
        * All columns have the option to sort the table
    * The lower part offers the search field, divided into:
        * Field in which to enter the search term
        * Button to run the search.

### Appearance

A responsive appearance has been chosen so that **iTunes Player APP** can adapt to the different available devices (desktop, tablet and mobile phone), following the following distribution:
* **Desktop Size**:
    * Header with descriptive texts to a column, and below ...
    * Two columns, player on the left and search result table on the right
* **Tablet and mobile phone size**:
    * Header with descriptive texts to a column, below ...
    * Player to one column, below ...
    * Search result table to a column

### Technology used

iTunes Player APP has been developed using the following technologies:
* **HTML5 + Bootstrap**: the layout and distribution of the contents
* **Bootstrap + Sass + Css**: Content Styles
* **Javascript**: App programming  

## **Installation**

You can follow the next guides to use this app:

* Cloning the repository:
  * [Cloning remote repositories](https://docs.github.com/es/github/getting-started-with-github/about-remote-repositories).
  * [Cloning a repository from GitHub to GitHub Desktop](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/cloning-a-repository-from-github-to-github-desktop).

* For local execution:
  * [Download repository in a ZIP file](https://stackoverflow.com/questions/2751227/how-to-download-source-in-zip-format-from-github).

* An Online version is available in my [Codepen Profile](https://codepen.io/pedrognrd/pen/zjZvWb).

## **Usage**

The app contains the following structure:

* app_itunes.html: main file. you need to open it to execute the app
* Documentation: Folder that contains the memory of the project, in Spanish language. This app is the final project of the certification [Development of Applications with Web Technologies Certification) ](https://sede.sepe.gob.es/especialidadesformativas/RXBuscadorEFRED/DetalleEspecialidadFormativa.do?codEspecialidad=IFCD0210). Which is taught by the State Employment Service of the Government of Spain including the Europass Supplement validated in the whole European Union. 
* css folder: contains the compiled Css styles
* img folder: contains screenshot images
* js folder: contains JavaScript scripts
* scss folder: contains the Scss precompiled styles

The use is very simple, you just need to open the file "app_itunes.html" in your browser. See description above for more information.

For toggle between Fahrenheit and Celsius degrees, just press the Green "C" or "F" section  in the "The Temperature is" area:

![Home Screen](/img/img_01.png)
![Rollover over a song in the search results table](/img/img_02.png)
![Playing one of the songs in the table by clicking on it](/img/img_03.png)
![Displaying the results of a search](/img/img_04.png)
![Playing one of the songs in the table after searching](/img/img_05.png)
![Showing error message if nothing has been entered in the search field ](/img/img_06.png)
![View of the app in mobile phone size ](/img/img_07.png)

## **Credits**

Development and design by [Pedro González Rodríguez](https://github.com/pedrognrd)
