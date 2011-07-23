/*
 * Main script
 */
var sokoban = null; // global variable for the sokoban game
window.addEvent('domready', function () {
	// loader and game setup
	var loader = new SokobanLevelLoader(mazeDatabase, 'sokoban');
	sokoban = new SokobanGame(loader);
	sokoban.loadLevel('a');
});

// Maze database (array of strings that indicate tile states)
// TODO: store sokoban maze data (XSB) in run length encoding (RLE)
var mazeDatabase = {
		a: '####|#@.#|#  #|# $#|#  #|#  #|#  #|#Z##',

		b: '#####|#  .#|# $ #|##@##|##$##|#   #|#.  #|#####',

		c: '#######|#. # .#|# $@$ #|#  #  #|#####D#',

		d: '######|#.   #|#$$  #|E@.###|####  ',

		e: '####### |#+.   ##|# # $$ #|#      #|###F####',

		f: ' #####|##  .#|#@$  #|#  * #|##G###',

		g: '   #####|####   #|#@$  # #|#. $  .#|####H###',

		h: '########|#  .#  #|#  $@$ #|#  ## .#|###I####',

		i: '#####|#.  #|# $ #|##@##|#.$ #|#   #|#  J#|#### ',

		j: '####K## |#  #  ##|# $@$  #|#. #  .#|########',

		k: '#####|#  .#|# $ #|#L@##|#.$ #|#   #|#  ##|#### ',

		l: '#######|#@ #  #|#  $$ #|#  . .#|##Z####'/*,

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

		'   #####| ###   #| #@$ # #|##$$   #|#  ## ##|#. .   #|##   . #| #######'*/
		};
