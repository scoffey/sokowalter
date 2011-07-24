/*
 * Main script
 */
var sokoban = null; // global variable for the sokoban game

window.addEvent('domready', function () {
	// loader and game setup
	var loader = new SokobanIndexedLevelLoader(mazeDatabase, 'sokoban');
	sokoban = new SokobanGame(loader);
	sokoban.loadLevel(0);
	$('message').set('html', 'a game developed by '
			+ '<a href="http://twitter.com/maraoz">maraoz</a> and '
			+ '<a href="http://twitter.com/scoffey">scoffey</a>');
	
	$('start').addEvent('click', function () {
		var level = Cookie.read('sokowalter').toInt();
		if (level && confirm('Resume last game?')) {
			sokoban.loadLevel(level);
		}
		$('splashscreen').setStyle('display', 'none');
		$('content').setStyle('display', 'block');
	});

	$('twitter').addEvent('click', function () {
		var level = sokoban.loader.index;
		var status = 'I reached level ' + level + ' in sokowalter! '
				+ 'http://scoffey.github.com/sokowalter/';
		var url = 'http://twitter.com/?status=' + escape(status);
		window.open(url, '_blank');
	});
	
});

// Maze database (array of strings that indicate tile states)
// TODO: store sokoban maze data (XSB) in run length encoding (RLE)
var mazeDatabase = [
                    
    // easy
	'####|#@.#|#$ #|#  #|# $#|#. #|#  #|####',
	'#####|#  .#|# $ #|##@##|##$##|#   #|#.  #|#####',
	'#######|#. # .#|# $@$ #|#  #  #|#######',
	'######|#.   #|#$$  #|#@.###|####  ',
	'####### |#+.   ##|# # $$ #|#      #|########',
	' #####|##  .#|#@$  #|#  * #|######',
	'   #####|####   #|#@$  # #|#. $  .#|########',
	'########|#  .#  #|#  $@$ #|#  ## .#|########',
	'####### |#  #  ##|# $@$  #|#. #  .#|########',
	'#####|#  .#|# $ #|##@##|#.$ #|#   #|#  ##|#### ',
	'#######|#@ #  #|#  $$ #|#  . .#|#######',
	'########|#   #  #|#  $@$ #|#  .# .#|########',
	'########|#@ #   #|#  #.  #|#  # $ #|## $ ###| #   #  | #.  #  | #####  ',
	' ####|##@ #|# $ #|#   #|##  #| #$.#| # .#| ####',
	'#####|#@  #|#   #|# $ #|#.$##|#. # |#  # |#### ',
	'#######|#    .#|#    $#|#  #  #|#### ##|  #@$ #|  #.  #|  #####',
	'#####|#@  #|# $ #|## .#| #$ #| # .#| ####',
	'#####|#@  #|#   #|# $ #|#$ ##|#. .#|#   #|#####',
	'########|#+.    #|# $ $  #|####  ##|   #### ',
	'########|# .#@  #|#   $  #|#  *   #|########',
	'#####|#+  #|#  *#|# $ #|##  #| #  #| ####',
	'#####   |#   #   |#   #   |#  #####|##$.#@ #|#    $ #|#   # .#|########',
	'#### |#  # |#. ##|# $@#|# $ #|#. ##|#### ',
	'####### |#@ #..# |#     # |# $ $ ##|#   #  #|#####  #|    ####',

	// medium
	'########|#@ #.  #|#      #|#  #.  #|#  ##  #|# $$   #|#   #  #|########',
	'    ####|    #  #|##### .#|#@  #$ #|#     $#|#     .#|##  #  #| #######',
	'#####   |#@ .#   |#   #   |##$.####|#  #   #|#  $   #|#   ####|#####   ',
	'#### |#..# |# $##|# $@#|# $ #|## .#| ####',
	'########|#@ .#  #|#   $ .#|#   #  #|#### $ #|   #   #|   #   #|   #####',
	'########|#@     #|#  $ $ #|#   ####|#  #..# |#     # |#     # |####### ',
	'  ##### |  #@  # |  #   # |###  $##|#..# $ #|#      #|#      #|########',
	' #####  |##@  #  |# $  #  |#  $ ## |###   ##|  #    #|  #  ..#|  ######',
	'####### |# .  .# |# #   # |#    ## |#   $@##|#  # $ #|####   #|   #####',
	'####    |#@ #####|#  $ $ #|#  ..  #|########',
	'####    |#@ #####|#   #. #|#   #  #|#  #  ##|#  $$ # |#    .# |####### ',
	'#####   |#@  #   |#   #   |# $ ####|#* #.  #|#      #|#   #  #|########',
	'########|#@  #  #|# $ #  #|#   #  #|# $#.  #|#      #|#  #.  #|########',
	'########|#@  #..#|#      #|##   $ #|#   ####|#    $ #|#      #|########',
	'########|#@ . . #|#    # #|####   #|#  $   #|# #$ # #|#      #|########',
	' ###### | #@.. # |## #  ##|#  #   #|# $$   #|##     #| #######',
	' ####  |##@.#  |# $ #  |# $ ###|# $#  #|#.   .#|##  ###| ####  ',
	' #######|##  $@.#|#  $ $.#|#.  ####|#####   ',
	' ####|##@.#|#.  #|# $ #|# $##|#  # |#  # |#### ',
	' #######|##+    #|#  $$  #|#.  #  #|########',
	'  ######|  #@   #|  #    #|  #.. ##|#### $ #|#   $  #|#   #  #|########',
	' #######|##+    #|#  $$  #|#   #  #|## ##  #|#   #  #|#  .#  #|########',
	' ###### | #@ ..# | #$   # | #  ####|##$    #|#      #|#   ####|#####   ',
	'########|#@ # . #|#      #|#  # . #|# $ # ##|# $   # |#   ### |#####   ',
	'#### |#+ ##|#   #|# $.#|##$ #|#   #|#   #|#####',

	// hard
	'########|#@     #|#      #|#   #.##|# $# .# |# $   # |##  ### | ####   ',
	'####### |#     ##|#    $@#|# $ #  #|#  #   #|#  #   #|####. .#|   #####',
	'    ####|   ##@ #|####.  #|#      #|# $ #  #|# #$.  #|#      #|########',
	'#####  |#  .#  |#.$ #  |#   ###|#$ #@ #|#   $.#|##  ###| ####  ',
	' ####|##@ #|# $ #|#.$.#|##$.#|#   #|#   #|#####',
	'#####|#. .#|#  .#|# $ #|##$ #| #@$#| #  #| ####',
	'#####|#. .#|#  .#|# $ #|##$$#| #@ #| #  #| ####',
	'#### |#@ # |#  # |#$$##|#   #|#.$.#|#.  #|#####',
	'####### |#@ #  ##|#      #|#  # ..#|#    $ #|#  $####|#   #   |#####   ',
	'#####|#@  #|# $.#|# $##|# $ #|#.  #|## .#| ####',
	'########|#+   ..#|# $$$# #|## #   #|#  #####|#  #    |#  #    |####    ',
	'#####   |#+  ####|# . .  #|#  $ $ #|## $####| #  #   | #  #   | ####   ',
	'   #####| ###   #| #@ $  #|##   $##|# .#  # |#     # |##. ### | ####   ',
	'######  |#@   #  |# #$ #  |# $  ###|#  #   #|#  . . #|#  #   #|########',
	'#####  |#. .#  |#.  #  |# $ ###|# $#@ #|#   $ #|#  ####|####   ',
	'########|#+ #   #|# $ $  #|#. #  ##|# $ ### |#  .#   |#  ##   |####    ',
	'#####   |#@  ### |# $   # |# $## ##|#  #.  #|#      #|#  #. ##|####### ',
	'#######|#    .#|#  $$ #|#  # .#|##$@###|#.  #  |#   #  |#####  ',
	'########|#@   ..#|# $$$  #|#  #  .#|########',
	' #######|##  #  #|#  $@$ #|#. ##$ #|#      #|#   .  #|#. #   #|########',
	'########|#      #|#    #.#|##$    #|#@ ## .#|# $ #  #|#   #  #|########',
	'########|#@ #  .#|#    #.#|#      #|# $#   #|#* $   #|#   ####|#####   ',
	'########|# .#@  #|# .#$$ #|#    ###|#     # |# #   # |#   ### |#####   ',
	'####### |#@    ##|#      #|#   #  #|##### ##|# $ $  #|#   . .#|########',
	'   #####|   #. .#|#### $ #|#@  #  #|# $ $  #|#. #  ##|####### ',
	
	// impossible
	'########|#@.  . #|# #  # #|#      #|# $ $  #|####.$ #|   #####',
	' ###### |##    ##|#@$  $ #|#  ##  #|#. .#  #|#   #  #|##  ####| ####   ',
	'########|#@     #|# $ $  #|## #   #|#.$.####|#   #   |#  .#   |#####   ',
	'####    |#@ #    |#  #    |# $#####|#  #.  #|#.$ $# #|##    .#| #######',
	'########|#@     #|#..  # #|##  $$ #| ##    #| #. $# #| #     #| #######',
	'   #####|####   #|#      #|#     ##|##..#$@#| #   $ #| ###  ##|   #### ',
	'######  |#@   #  |# #$$#  |#  $ ###|# .# ..#|#      #|#      #|########',
	'  #### |###@ ##|#   $ #|# ##  #|# .#$ #|#    $#|# .  .#|#######',
	' ####  |##@ ###|#. . .#|#  #  #|##  $$#| # $  #| ###  #|   ####',
	'########|#+  . .#|#$     #|#  ## ##|##$ # # | #  $ # | #  ### | ####   ',
	'########|#  #+  #|#  #.$ #|#  * ###|#   $ # |####  # |   #  # |   #### ',
	' ####   | #@ #   | #  #   |##$ ####|#  #.  #|#    $$#|##  . .#| #######',
	'####### |#     # |#.#   # |#     # |#. $####|# #@$  #|# .$   #|########',
	'   #####| ###   #| #+$ # #|##.#   #|#  $ . #|#  $####|#   #   |#####   ',
	' #######|##@ ...#|# $    #|#  ## ##|#   #  #|# $$   #|#   #  #|########',
	'#####   |#.  ####|#. $#@ #|## $   #|#   *  #|#   #  #|##  #  #| #######',
	'   #### | ###@ # | #    # |##.$####|#      #|# .$$  #|# . #  #|########',
	'#####   |#@  ### |#. .  # |#    $##|#.$##  #|# $    #|##  #  #| #######',
	'#####   |#   ####|#  $@  #|##$    #| #  # .#| #$    #| #  #..#| #######',
	'####    |# .#####|#  $@$ #|# $    #|##  ####| #  ..# | ###  # |   #### ',
	'   #### |   #@ # |   #  # |####. ##|#  . $ #|# $ $. #|#####  #|    ####',
	'########|#   #@ #|#   #  #|##$$  ##| #     #| ### ..#|   #####',
	'#####   |#.. ### |#  .  # |## $  ##|####$$@#|#      #|#      #|########',
	'####    |#  #####|#      #|# $#   #|#   ####|#.$$@ # |##  ..# | ###### ',
	'   #####| ###   #| #@$ # #|##$$   #|#  ## ##|#. .   #|##   . #| #######'
];
