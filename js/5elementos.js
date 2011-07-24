/*
 * Main script
 */
var sokoban = null; // global variable for the sokoban game

window.addEvent('domready', function () {
	// loader and game setup
	var lastLevel = (Cookie.read('sokowalter') || '0').toInt();
	var loader = new SokobanIndexedLevelLoader(mazeDatabase, 'sokoban');
	sokoban = new SokobanGame(loader);
	$('message').set('html', 'a game developed by '
			+ '<a href="http://twitter.com/maraoz">maraoz</a> and '
			+ '<a href="http://twitter.com/scoffey">scoffey</a>');
	
	var run = function (level) {
		sokoban.loadLevel(level);
		$('splashscreen').setStyle('display', 'none');
		$('content').setStyle('display', 'block');
	};
	
	$('start').addEvent('click', function () {
		if (!lastLevel || confirm('Are you sure you want to start a new game? ' +
				'Previous progress to level '+(lastLevel+1)+' will be lost.')) {
			run(0);
		}
	});
	
	if (!lastLevel)	$('resume').addClass('disabled');
	
	$('resume').addEvent('click', function (e) {
		if (lastLevel) {
			sokoban.loadLevel(lastLevel);
			run(lastLevel);
		}
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
	'   #####| ###   #| #@$ # #|##$$   #|#  ## ##|#. .   #|##   . #| #######',
	'#####   |#+$.####|#   #  #|# $##  #|#. ##  #|# $$   #|#. #   #|########'
];
