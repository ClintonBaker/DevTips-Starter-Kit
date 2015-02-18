DevTips-Starter-Kit
===================

Setting up your project with Gulp:
First off, you need node.js, ruby, and gulp installed.
If you do not already have gulp installed, in command line run:
 npm install -g gulp

 Then to install all dependencies cd into the project and run
 npm install

If you do not wish to use Jade with your project, you will need to delete the index.jade file in the jade folder.
Also keep in mind that all .js files will be concatinated into assets/build/app.min.js so if you want to use js in your project, you need only add that file.

Make sure you are in your project folder before running any commands
Gulp Commands:
gulp or gulp compile both compile sass, scss, and jade and concatinate/uglify javascript

gulp watch will compile all files and then watch for changes

gulp serve will create a server for your files and live reload on changes


Use this as a simple structure for a simple start to a simple site.

- There is a Jekyll friendly version <a href="https://github.com/DevTips/DevTips-Starter-Kit/tree/Jekyll-Starter-Kit">here.</a>

<a href="http://www.youtube.com/watch?feature=player_embedded&v=GTBaQ2DcGUk
" target="_blank">
Watch the video on YouTube
<img src="thumbnail.png"
alt="Watch the video on youtube" />

</a>
