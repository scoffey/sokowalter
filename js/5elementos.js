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
	
	a: '###################b#############|@-------#-----#-----#-----#---#{#|#######-#-#####-#####-#####-#-#-#|#-----#-#---#-#-----#-#-----#---#|#####-#-###-#-#-###-#-#-#####-###|#-#-------------#---#-----#---#¿#|#-#-#-#-#-#########-###-###-###-#|#-#-#-#-#-#-#-------#---#-------#|#-#-#####-#-###-#####-#####-#####|#-#-#---#-#-----#---------#---#-#|#-#####-#-###-#####-#####-#####-#|#---#---#-#-----#-#---#-#-#---#-#|#-#-#-###-#####-#-#-#-#-###-#-#-#|#-#-----#---#-------#---#---#-#-#|###-###-###-#-###-#######-###-#-#|#---#-#-----#---#-#-----#-#-#---#|#-#-#-#-#-#########-#####-#-#-#-#|#-#-#---#-#---------#---#-#---#-#|#-#####-#####-#-#-#####-#####-###|#-#---#-----#-#-#-#-#-----------#|#-#-#-#-#########-#-#-#######-###|#-#-#-----#-----#-------#-#-----#|#-###-#-###-#-#-###-#####-#-#####|#---#-#---#-#-#---#-#-#-#-#---#-#|###-#####-###-###-#-#-#-#-#####-#|#-----#---#-----#-----#---#-#-#-#|#-#####-#####-#######-#-###-#-#-#|#-#---#---#---------#-#-#-------#|#-#-#-###########-###-#-#-#-#####|#-#-#-#-#---------#-#-----#-#--{#|#-#-###-#-#####-#-#-#-#####-#-###|#-----------#---#-#---#---------#|#######f#########################', 
	
	b: '#################################|#[--#-----#-#---#-#-------#-----#|###)#####-#-###-#-###-#-###-#####|#---------------#-#---#---#-#---#|###-#-###-#####-#-###-#-#-#-#-###|#-#-#-#---#---#-#-----#-#-#-----#|#-###-#-#####-#-###-#######-###-#|#-----#-#-#-#-#-----#---------#-#|###-#####-#-#-###-###-###-#######|#-#-----------#---#---#-#-#---#-#|#-###-#######-###-###-#-#####-#-#|#---------#-----#---------#---#-#|#-###-###############-#-###-###-#|#---#-#---------#---#-#-------#-#|#-#-#-#-#-#-#####-#########-#-#-#|#-#-#---#-#---#---#-#---#---#---c|#-###-###-#-#####-#-#-#####-###-#|#---#---#-#-#-------#-----#-#---#|#-#####-#-###-###-#####-#####-###|#-#---#-#---#-#-#-#-----#-#-#-#-#|###-#-#-###-###-#-#-#####-#-###-#|#---#-#-#-----------#-------#-#-#|#####-#####-#####-###-###-###-#-#|#-----------#-#-----#-#-#-#-----#|###-#-#######-###-###-#-#-#-#####|#---#-#---------------#---#-----#|#-#####-###-###-#-###-###-#-#####|#-#-------#-#---#-#---#-----#-#-#|#######-#####-#-#########-#-#-#-#|#-------#-----#-#---#---#-#-----#|#########-#-###-###-#-#-#-#####-#|#@--------#-#---#-----#-------#-#|#a###############################',
	
	c: '#################################|#-----#---#---#---#-#-#-#-------#|#-#######-#-#####-#-#-#-#-#-###-#|#---------#-------#-----#-#---#-#|#########-#-#-###-#-#-#####-#####|#---#---#-#-#-#-----#---#-------#|#-#-###-#-###-#-###-#####-#####-#|#-#-------#-#-#-#---#-------#---#|#######-###-#-###########-#-#####|#-------------#-#-#-----#-#-----#|###-#-###-###-#-#-###-#-#-#-#####|#---#---#---#-#-#---#-#---#-#-#-#|###-#######-###-###-#-#######-#-#|#-#-#-----#-------#---#---#---#-#|#-#-#-###-###-#######-###-###-#-#|b@----#-----#-#-#-#-------------#|#####-#######-#-#-#-#-###-###-###|#-#-#-----#-#-#-#---#---#---#-#(#|#-#-#-#####-#-#-###-#######-#-#-#|#---------#-----#---#-----#-#-)-#|###########-#######-#-#-#######-#|#-#-----------#-----#-#-------#]#|#-#-###-#####-#-###-###-###-#-#-#|#---#-----#-----#---#---#-#-#-#-d|###-#-#-#-#####-###-#-###-#-#####|#-#-#-#-#---#-#-#-------#-------#|#-#-#########-#-#####-#-#-###-###|#-------#-#---#-#-----#-#---#---#|###-###-#-#-###-#####-###-#-###-#|#---#---#-----#-#-----#---#---#-#|#-#-###-###-#-#####-#######-#####|#(#-#-----#-#---------#---------#|#################################',
	
	d: '#################################|#(----#-----#-#---#-----#-----#[#|###-#######-#-#-#######-#####-#)#|#---#-----#-----#---#-------#-#-#|#-#-#-#####-#####-#-#######-#-#-#|#-#-------#-----#-#-----#-#-----#|#######-###-#-#-#-###-###-#-#####|#-----------#-#---#---#-#-----#-#|#-###-#####-###-#-###-#-#####-#-#|#---#-#---#---#-#---#-----------#|###-#-#-#######-#-#-#######-#-###|#---#-#-------#-#-#-------#-#---#|#-#-#####-###-###-###-#########-#|#-#-#-#-----#---#-#-----#-#---#-#|#####-###-###-###-###-###-#-#####|#-#-#-----#---------#-#---#---#-#|#-#-#-#######-###-#####-#-#-###-#|#-#---#-#---#-#-#---#-#-#---#---#|#-#####-#-#-#-#-#####-###-###-###|#---#-----#-#-----#-#-----#-----#|###-#-###-###-#####-###-#-#-###-#|#-----#---#-----#-----#-#-----#-#|#-#####-#-#-###-#-#-#-#-#########|c@----#-#-#---#-#-#-#-----#-#---#|#####-#-#######-#-#-###-###-#-###|#-----#---#-----#-#-#-----------#|#-#######-#-###########-#-###-#-#|#---#---------#-#-#-#---#-#---#-#|#-###-#-###-#-#-#-#-###-###-#####|#-#---#---#-#-----------#-#---###|#-#-#######-#-###########-###]#-#|#-#-------#-#-#-#---------------#|#################j###############',
	
	f: '#######a#########################|#---#-#@#-------#-#-----#---#-#-#|###-#-#-#-#######-#####-###-#-#-#|#-----#-------#---#-#---#---#---#|###-#-#-###-###-###-#-#####-#-###|#-#-#-#---#---#-#-------#-#-----#|#-#-###-#######-#####-#-#-#####-#|#-#-#---#-#---------#-#---------#|#-#-###-#-###-###-###-#-#-#-###-#|#-#-----#-#-----#-----#-#-#-#---#|#-#-###-#-#-#####-#####-#########|#-----#-#-----#-----#-#-#-------g|#-#####-#-#-#######-#-#-###-#-#-#|#-#-#-#-#-#---#-----#-----#-#-#-#|#-#-#-#######-#####-#-###-#####-#|#-----#-#---#---#---#---#-#-----#|#-#-#-#-###-#-#################-#|#-#-#-#-#-----#---------#-#-----#|#####-#-#####-###-###-###-#-#-#-#|#---#-------#---#-#---------#-#-#|#-#-###-#######-#-#####-#########|#-#---#-#-----#-#-#-----#-#-----#|#####-#-###-#-#-###-#-###-#-#-#-#|#---)---#---#-------#-#-----#-#-#|#-###-#-#-###-#-#####-#####-#-#-#|#--[#-#-#---#-#-#-----#---#-#-#-#|#######-###-#####-#####-###-###-#|#-----------#---------------#-#-#|#-#-#-#-#######-###-#-#######-#-#|#-#-#-#-----#-#---#-#-----#-#---#|#-#######-###-#-###-#-###-#-#####|#---#-------#---#---#-#---------#|#################################',
	
	g:
	'#################################|#----(#-#---------#-#-#-#-----#-#|#-#-###-#####-#####-#-#-###-###-#|#-#-#---#-----#-#-#---#-#---#-#-#|#-#####-###-###-#-#-###-###-#-#-#|#---#-#---------------#---#-----#|###-#-###-#-#-#####-#-###-#-#-###|#-------#-#-#-----#-#-------#---#|#####-###-#-###########-#-###-#-#|#-#-#-----#-------#---#-#-#---#-#|#-#-#######-#######-#####-###-#-#|f@#---------#-------#-------#-#-#|#-###-#-#######-#-#-#####-###-###|#-#-#-#-----#---#-#-----#-#-#--(#|#-#-#-#####-#-###-#####-###-#####|#-#---#-------#---#-#-#-#-------#|#-#-#-#-#-#-#####-#-#-#########-#|#---#-#-#-#-#---------#-------#-#|###################-#####-#####-#|#---#-------#-#-#-----#---#---#-#|#-#####-###-#-#-#-#-#####-#-#-#-#|#-------#-----#---#-#-#---#-#---#|###-#####-###-###-#-#-#-###-###-#|#-----#-#-#-#---#-#-------#---#-#|###-###-###-###-#-#####-#-###-###|#-#---------#-----#-#-#-#-#-#---#|#-#-###]#########-#-#-###-#-#-#-#|#---#---#-------#-#---#---#-#-#-#|#######)#####-#-#-#-###-#-#-###-#|#-)-)-)---#-#-#-#-#-#---#-----#-#|#-#-#-#-#-#-#-#####-#-###-#-#-#-#|#h#(#(#(#---------#-----#-#-#---#|#################################',

	h:
	'#################################|#g@---#-#-#-------------#-----#j#|###-###-#-#########-#####-#-###-#|#-#-#-#-----#---#---#-----#---#]#|#-#-#-#-#######-#-#-#-#####-###-#|#-----#---#---#-#-#---#-----#-#-#|#-#-#####-#-#-#-#####-###-###-#-#|#-#-#-----#-#-#-------#-#-#---#-#|#-#####-###-#-#-#######-#-#-###-#|#---#-------#-#-------#-#-#---#-#|#-#########-###-#-###-#-###-#-#-#|#---#---#-#-----#---#---#-#-#---#|#-#-#-###-#-#-#-#######-#-#####-#|#-#---------#-#-#-#-#---#-#---#-#|###-###-#######-#-#-#-###-#-###-#|#-#-#-----#######-#---#---------#|#-#-#-###-#####-#-###-#-#########|#---#-#-#-#(----#---#-----------#|#-#-###-#-#####-#-###-#####-###-#|#-#-----#---#-----#---#-------#-#|###-#-###-#####-#-#########-###-#|#---#-#-#-#-----#-----------#---#|###-###-#-###-#-#########-#####-#|#-----#-------#-#---#-#---#-----#|###-#####-###-#-###-#-###-#######|#-----#-#-#---#-#-------#-#-----#|#-#-#-#-###-###-###-#####-#-#####|#-#-#-----#-#-------#---#-------#|#¡#####-#####-#-###-#-#####-#-#-#|#---#-#---#---#-#-------#---#)#-#|###-#-#-#-#-###-###-#######-#-###|#---#---#-#---#---#---#-----#--[#|#################################', 
	
	j:	'#################################|##########---##h@d##---##########|###########--###}###--###########|#-------------------------------#|###-#########-###-#-###-###-###-#|#-#---#---#---#---#---#-#-#-#---#|#-#-#-#-#-#-#####-#####-#-#######|#---#-#-#-----#---#-----#-----#-#|#-#######-#-#-#-#-###-#-#-#-###-#|#---#-----#-#-#-#-#---#---#-#---#|#-#########-###-#-#-#-###-###-#-#|#-#-#---#---#-#-#-#-#---#---#-#-#|#-#-#-#-#-###-#-#-#-#####-#-#-###|#-----#-#-#---#-#-----#---#-#---#|###-#-#####-###-###-###-#-#####-#|#-#-#-#-----#-----#---#-#-#-----#|#-###-###-#-#-#-###-#-###-#-###-#|#-----#---#---#-#-#-#-#-------#-#|#-#######-#######-#####-#######-#|#---#-#-#-#[-[#---#-----#-#-#---#|#-#-#-#-#-#-#-###-###-###-#-#####|#-#-#-----#-#(--#---#-----#-----#|###}###########]#-#]#-#######-###|#---#-#---#-#---)-#-------#-#---#|#-###-#-#-#-#-###]#######-#-#-#-#|e-#-#-#-#---#---#-)-#[-[#-----#-#|###-#-#####-#######-#)###-###-###|#-----#-#-----#---]-#---#-[-#---#|#-###-#-#-#-#-#]#)#-#]#)###[#####|###-------#-#---#[#-]-#--(#(#([-#|###-#-#-#-###-#-###-#-#########-#|#---#-#-#-#---#---#-#-----------#|################k################',
	
	e:	'#################################|i--#-#-------#-#-----------#---#|#-#-#-#-###---#-#-##----#####-#-#|#-#-#-#-#-------------#-#---#-#-#|#-###-##----#---#-#-#-#-----###-#|#-------------#---#-#---#-------#|#-###-#---#-----#-#######-#-#####|#-----#---#-#-------#-----#-----#|###-#--########-#####----##-#####|#---#---------#---#-#-#---#-----#|#####-#-##-####-###-#-###-#####-#|#-----#-#-------#---#---#-#---#-#|###-#-#-----###-#-###-#-###-###-#|#-#-----#-#-#-----#-----#-----#-#|#-#####-#-#-###-#-#-###-----###-#|#---------#-#---#---#-----#---#-#|#-#######---##--###-#---#-###-#-#|#---------------#-----#-----#-#-#|#-###-####--#-#-#-###-#-#-#-#-#-#|#-#-#---#---#---------#-#---#-#-#|#-#-###-#--##-#-######-##-#--####|#-#---#-#-#---#---#-----#-#-#---#|###-####--#-#####-#-###-#####-###|#-------#-#-#-#---#---#---------#|#-#-##--#-#---#---#-#-#-###-#####|#-#-----#-----#-#---#---#-#---#@j|###-####----#--##---#---#---#-#-#|#-------#-#-------#---#-----#---#|#-###-###-#-#-######--#-#---#####|#---#-----------#-------#-------#|#-#####-#-###-#-#-#--##-###-#-#-#|#-#-----#-#-----------#---#-#-#-#|#################################',
	
	i:	'#################################|#----------------------------([@e|#--########################]#####|#-------------------------------#|######--########-#############--#|#-------------------------------#|#--####-#########-######)########|#-------------------------------#|###############-##############--#|#-------------------------------#|#--##############]###############|#----------------]--------------#|########[########[############--#|#------[[--------[]-------------#|#--##############################|#)-]---]------------------------#|##)#####)##########[##########--#|#(((----------------------------#|#((##############################|#[([)][-[[[((([-----------------#|##[(#############################|#[)))---------------------------#|#])##############################|#])--]--])-]--------------------#|###############]##############--#|#---)----)------------------((--#|#--######[#######################|#--------]--(-[---]-]-)---------#|########################]########|#--(-[(----------------]--###))¡#|#--####-##########)##########](]#|#----[[(--------)]]))][[](()][))#|#################################',
	
	k:	'################j################|#-----#---#####-@-#-------#-----#|#####-#-#######-#-###-#-###-###-#|#-#-----#-#-----#-----#---#---#-#|#-#-#####-#-#####-#-#####-###-#-#|#-------#---#---#-#-#-----#---#-#|#####-#-###-#-###-###-#########-#|#-----#---#-----#---#---#-------#|###-#-###-#-###-#-#####-###-#####|#---#-#---#-#-#-----#-#---#---#-#|###-###-#-###-#####-#-#-###-###-#|#-#-#---#-#---#-------#---#-----#|#-#######-###-#-#######-###-###-#|#---#-#-------#-#---#-#-------#-#|###-#-#-###-###-###-#-#-#######-#|#-------#-----------#---#---#---#|#-#-###-###-###############-###-#|#-#---#---#-#-#-------#---#---#-#|###-#-#####-#-#-#-###-#-#-#-#-###|#---#-#---------#-#-----#-#-#-#-#|###-#-#########-#######-#####-#-#|#---#---#---#---#-----#---#---#-#|#-#-###-###-#-###-#-#-#-#-#-#-#-#|#-#-#-------#---#-#-#---#---#---#|###-###-#####-#-###-#####-#-###-#|#-----#---#---#-#-----#---#---#-#|#########-#-#####-#-#####-###-###|#---------#---#---#-#-------#-#-#|#-#-#-#-#######-#####-#-#-#-###-#|#-#-#-#-------#---#-#-#-#-#-#---#|#-#-#####-#-#-##!##-###-#-###-#-#|#-#---#---#-#--#-#------#-----#-#|################l################',
	
	l:	'################k################|-###############@###############-|--##############-##############--|---#############-#############---|----############-############----|-----###########-###########-----|------##########-##########------|-------#########-#########-------|--------########-########--------|---------#######-#######---------|----------######-######----------|-----------#####-#####-----------|------------####-####------------|-------------###-###-------------|--------------##-##--------------|---------------#?#---------------|--------------##-##--------------|----------######-######----------|--##############-##############--|----############-############----|------##########-##########------|--------########-########--------|----------######-######----------|-----------#####-#####-----------|------------####-####------------|-------------###!###-------------|----------######-######----------|###########-----------###########|###---------------------------###|###---------------------------###|###---------------------------###|###---------------------------###|#####m##########n##########o#####',
	
	n:	'#################################|#################################|#################################|#################################|#################################|#################################|#################################|#################################|#################################|#################################|################l################|###########-----------###########|##########m-----@-----o##########|###########-----------###########|###########-----------###########|##########y-----------l##########|###########-----------###########|###########-----------###########|##########y-----------y##########|###########-----------###########|############l###y###r############|#################################|#################################|#################################|#################################|#################################|#################################|#################################|#################################|#################################|#################################|#################################|#################################',
	
	y:	'#################################|n@----#-#---#-#-----#-#-#---#---#|#-#####-#-###-#-#####-#-###-###-#|#---#-------------------#-------#|###-###-#####-#####-#######-#-###|#-#---#---#-#-#-#---#---#-#-#---#|#-###-###-#-#-#-###-#-###-###-###|#-#-#-------#-#-----#-------#---#|#-#-#-###-###########-#-#-###-#-#|#---#---#---#---#-#---#-#-----#-#|#-###-#-#-#####-#-###-#########-#|#-----#-#---#-------#-#---#-#---#|#-#######-#####-#-#####-#-#-###-#|#-#-----------#-#-#-----#---#---#|#-#######-###-#-#-#-#-###-###-###|#-#-------#-----#-#-#---#-#-----#|###-#-###-#######-#-###-###-#####|#---#-#---#---#-----#-------#---#|###-#######-###-#########-###-###|#---#---#-#-------#---#-#---#-#-#|###-###-#-#-#####-#-###-#####-#-#|#---#---#-----#-#---#-------#---#|#######-#####-#-#-###-#-#-###-#-#|#-#-#-----------#-----#-#---#-#-#|#-#-#####-###-#######-#########-#|#---#-------#---#-------#-#-#---#|###-###-#-#-###-#####-###-#-#-###|#-#-----#-#---#-----#-----------#|#-#-#######-###-###-###-#-#######|#-----#-----#-#---#---#-#-----#-#|#-#####-#-#-#-#-#########-#####-#|#-----#-#-#-#-----#-------------n|#################################', 

	m:	'#########l#######################|#-------#@n####-#-------#-------#|#-#####-#-#-----###-#######-#-###|#-#(----#-#-------#-------#-#---#|#-#######-#####-#-#-#-#-#-###-###|#-----#---#-----#-#-#-#-#-#-----#|#-#######-#-#####-#-###-###-#-#-#|#-------#-----#-------#---#-#-#-#|#-#-#######-#-###-#####-#-#####-#|#-#---#---#-#-#---#---#-#---#---#|###-#-###-###-#-#-###-#-#-#####-#|#---#-------#-#-#-#---#-#---#---#|###-###############-###-#####-#-#|#-----#-#-#-#-------#---#-----#-#|#-###-#-#-#-#-#-#-#-#-###-#####-#|#-#-----------#-#-#-------#---#-#|#######-#################-#######|#######-#################-#######|#######-#################-#######|#######-#################-#######|#######-#################-#######|##-----------------------------##|##-----------------------------##|##-----------------------------##|##-----------------------------##|##-----------------------------##|##-----------------------------##|##-----------------------------##|##-----------------------------##|#####v##########p##########q#####|#################################|#################################|#################################', 

	o:	'#######################l#########|#[------#-#---------##n@----#---#|#####-#-#-#########-#####-#-#-###|#---#-#-#-#---#---------#-#-#-#-#|#-###-###-#-###-###-###-###-#-#-#|#-#-#-#-#---#-#-#---#-----#-----#|#-#-#-#-#-###-#####-#####-###-#-#|#-----#---#-#-----#---#-------#-#|###-#####-#-###-#######-#####-###|#-----#-----#---#-#---#-#-------#|#-###-#####-#-###-#-###-#####-#-#|#-#-------#---#-------------#-#-#|###-#-#-###-###-#####-#-#########|#---#-#-#---------#---#---#-----#|###-#-###-#####-#-#-#####-#-#####|#-#-#-----#-----#-#-#-#-#-#-----#|#######-#################-#######|#######-#################-#######|#######-#################-#######|#######-#################-#######|#######-#################-#######|##-----------------------------##|##-----------------------------##|##-----------------------------##|##-----------------------------##|##-----------------------------##|##-----------------------------##|##-----------------------------##|##-----------------------------##|#####p##########q##########s#####|#################################|#################################|#################################', 
	
	p:	'#################################|#--------#m@#o----------#-#-----#|#-###-#-###-#####-###-#-#-###-###|#-#---#-#-------#-#---#-#-----#-#|###-#####-#-#-###-###-#-#-#-###-#|#-------#-#-#---#-#---#---#---#-#|###-###-#-###########-#####-#-#-#|#---#-#---#---------#-----#-#---#|#-###-#####-#-###-###-#####-###-#|#---#-----#-#-#-----#-#-#---#---#|#-###-#-#######-###-#-#-#######-#|#-#---#-----#---#-#-#-----#-#---#|#-#####-###-###-#-###-###-#-#-###|#---------#---#-#-#-----#-#-#---#|#####-#-#######-#-#-#######-#####|#---#-#---#---#---#-----------#-#|#-#-###-#-###-###-#-#-#########-#|#-#---#-#-#-#-------#-----#-----#|#-#-#####-#-#-#-###-#-###-#-#-###|#-#-------#---#-#---#-#-#-#-#(#-#|#####-#####-#####-###-#-#-#-###-#|#-#-#---#---#-----#-#---#---#-#-#|#-#-#-#-#######-#-#-#-#-#-###-#-#|#---#-#---#-----#---#-#-#-#---#-#|#-#-#-#######-###-#########-###-#|#-#---#---------#-#---#---#-----#|###-###########-###-#####-#####-#|#---#---#-----#---#-------#-----#|#-###-###-#####-###-#-#-#-###-###|#---#---------------#-#-#-#-----#|#-#-###-#-###-###-#########-#-#-#|#-#-#---#-#---#-------------#-#-#|#s#############################t#',
	
	s:	'#################################|#-----#-----o#p@--------#-------#|#-###-#####-###########-#######-#|#-#-----#-------#-#---#---#-----#|#####-###-###-###-###-###-###-#-#|#-----#---#-----#-#---#-#-#---#-#|#####-#-###-#####-###-#-#-#-###-#|#-#-----#-----#---#-#-#---#-#---#|#-#-#-#######-#-###-#-###-#-#-###|#---#-------#---#---#-#-#---#-#-#|#-#####-#####-###-###-#-###-#-#-#|#-#---------#-------#-------#-#-#|#########-#######-#####-#-###-#-#|#-#-#-----------#-#---#-#---#---#|#-#-#-#########-#####-#-#####-###|#-#-------#-#-------#-#-#-------#|#-#-#-#####-###-###-#-###-#-#-###|#---#-#-#-----#---#-#-----#-#---#|#####-#-#-#-#####-#####-#-#######|#-#-#-#-#-#---#-------#-#-------#|#-#-#-#-#####-#-#-#####-###-#####|#-------#-#-#-#-#-#---#---#-#---#|###-###-#-#-#-###-###-#-#-###-#-#|#-----#-#-#-#-------#-#-#-----#-#|###-###-#-#-###-#-###-#-#########|#-#-#-----#-#---#-#-------#---#-#|#-#-#####-#-#-#-#-#####-#-###-#-#|#-------#---#-#-#-----#-#-------#|#####-#-#-#-#######-###-#-#-###)#|#-----#-#-#---#-#-----#-#-#-#-#-#|###-###########-###-#######-#-#-#|#--------¡#-------------#-----#-#|###############################w#',
	
	t:	'#p###############################|#@#-#-#-----#---#-----#---------#|#-#-#-#####-###-#####-#-#-#-#####|#-------#-------#-----#-#-#---#-#|###-#-#######-###-###-#-###-#-#-#|#---#-#---#-#---#-#-------#-#-#-#|#-###-#-#-#-#-#-###-###-#######-#|#---#---#-----#-#---#-#-#---#---#|#-###-#######-###-#-#-#####-#-###|#---#---#-#---#---#-#-----#-#-#-#|#-###-#-#-###-###-###-#-#-#-#-#-#|#---#-#-#-------------#-#-#---#-#|#-#-#####-#-#######-#-#####-###-#|#-#---#-#-#---#-----#-----------#|#-#####-###-#-#########-#######-#|#-------#-#-#-#-----#-----#-----#|###-###-#-#####-###-#####-###-###|#-#-#-#---#-#-#---#-#-------#---#|#-###-###-#-#-#-###-#-#-###-#-#-#|#---------#-#-#-#-#---#---#-#-#-#|#####-#-#-#-#-#-#-#-###-#######-#|#-----#-#-#---#-#---#-#-----#-#-#|#-###-#####-###-#-#-#-###-#-#-#-#|#---#---#-------#-#-#-#-#-#-#---#|#############-###-###-#-#-#-#####|#-------------#---#-----#-#-#---#|#-#####-#####-#-###-#####}###-#-#|#-#---#-#-#-#-#---#-#-----#---#-#|#####-###-#-#-###-#-#####-#-#-###|#---#-----#---#-#---#---#---#---#|###-#-###-#-###-#-###-#-#-#######|#-------#-------#-#---#--------¿#|#################################', 

	q:	'#################################|#-----#----#m@o#--#-#---#-#-#---#|#-#####-#####-###-#-#-###-#-#-###|#-------#-#---#-#---#---#-#---#-#|#-#######-###-#-#-#-###-#-#-#-#-#|#-#----#------#-#-#-----#---#---#|#-###-#####-#-#-#-#####-###-#-#-#|#-#---#---#-#-#-#-#-#-----#-#-#-#|#-###-#-#-#####-###-#-#####-#-###|#---#-#-#-#-#---#-------#---#-#-#|###-#-###-#-#-#-#-###-#####-###-#|#-#-#-------#-#---#---#---------#|#-#-###-#-###########-#-###-#-#-#|#-#-----#-----#-------#-#---#-#-#|#-#-#########-#######-###-###-###|#-#-#---#---#-#-----#-#-#-#-----#|#-#-###-###-#-###-###-#-#####-#-#|#-------#-#-#-#-#-#-#-#-----#-#-#|#-#-###-#-#-#-#-#-#-#-###-#####-#|#-#-#-#-#---#---#-----#---------#|###-#-#-#-###-#-#-###-#######-###|#---#-#-#-----#-#-#-----#-----#-#|###-#-#-###-#########-###-#-###-#|#---#---#---#-----------#-#-#---#|###-#######-###-###-###-###-###-#|#-------#---#---#---#-------#---#|#####-###-#-#-###-#######-#####-#|#-----#-#-#---#-#-#-#-#---#-----#|#-#####-#-#####-#-#-#-###-###-#-#|#-#---#-#---#---#-#-#-#---#---#-#|###-###-#-#####-#-#-#-###-#-#-###|#---------------#-------#---#---#|#u#############################v#',

	v:	'#################################|#-----#-#----q#@m#----#-#-#-#---#|###-###-#-#####-###-###-#-#-###-#|#-----#-#-#-#-----------#-----#-#|#-###-#-#-#-###-#####-###-###-#-#|#-#-----------#-#---#-----#-#---#|###-#########-#-#-#####-###-#####|#-#-#---#-----#-#---#-------#---#|#-#-#-###-#-#######-#-#######-#-#|#-------#-#---------#---------#-#|#-###########-#-#######-###-###-#|#-#-----#-----#-#---#-#---#-#-#-#|#-#####-###########-#-#####-#-#-#|#-#-------#-#-----#---#-#-----#-#|#-#####-###-#-#####-###-###-#####|#---#---#-#---------------#-----#|###-#-###-###-#####-#-#-#-#-###-#|#-------#-----#-#---#-#-#-#-#---#|#-###-###-#####-#-#########-#-###|#---#-#---------#-#-#-#-#-#-#-#-#|#-###-###-###-#-###-#-#-#-###-#-#|#-#---#---#---#-#-----#-----#---#|#-###-#-#-#-#######-#-#-###-#-#-#|#---#---#-#-#---#---#---#---#-#-#|#-#####-#-###-#######-#-#####-###|#-#-----#-#---#-----#-#-#-#-#---#|#-#######-#-###-###-###-#-#-###-#|#---#-#-#---#---#---#-----#-----#|#####-#-#-#-#-#-#############-#-#|#---#-----#-#-#-#-#-------#---#-#|#-###-###-#-#-###-#-#-#-###-#-#-#|#-------#-#---#-----#-#-----#-#{#|#w###############################',

	u:	'#q###############################|#@#-#-#-#-#---#-----#-----#-#-#-#|#-#-#-#-#-###-#-#####-#####-#-#-#|#---------#-#-----#-----#-#-#---#|#-#####-###-#-#######-###-#-###-#|#-#-#-#-#---#-------#-#-----#---#|#-#-#-#####-#-#####-#-#####-#-###|#---------------#-#-#-----#-#---#|#-###-#-#-#-#####-#-#-#-#-#-#-###|#-#---#-#-#-#-#-------#-#-#-#---#|###-#####-###-#-#####-#####-###-#|#---#-----#-#-#-#-----#-#-------#|#-#########-#-#-###-#-#-#####-###|#-#-#---#---#-#-#---#---#-#-#-#-#|#-#-###-#-###-#-#-#-###-#-#-#-#-#|#-#---#-#-#-----#-#---#-#-#-----#|###-###-#-#####-###-#-###-#-###-#|#-------#-#-#---#---#---------#-#|#-#-#####-#-###-###########-#####|#-#-#---#-------#---#-#-#-------#|###-#-###-###-###-#-#-#-#-#######|#-#-#-#-#-#-------#-#-----#-#--¿#|#-#-#-#-###-#####-#####-###-#-###|#-#-----#-#---#-#-#-----#---#---#|#-#-###-#-#-###-#-###-#-#-#####-#|#---#-----------#-#---#-----#---#|#####-###-###-#######-###-#####-#|#-----#-----#---#---#---#---#-#-#|###-#-#####-###-#-###########-#-#|#-#-#-#-------#-!-#-#-----#-----#|#-###-###-###-#-#-#-#-#-#-#####-#|#-----#---#---#-#-----#-#-------#|#################################', 

	w:	'#################################|#-#---#-------#s@v#---#-#-#-----#|#-###-#-#-######-###-##-#-###-###|#-#-#---#-#---------------#-----#|#-#-#-#-#####-#-#-#######-#-#####|#---#-#-#-----#-----#---#-------#|###-#-#####-#####-###-###-#-#####|#---------------#-----#---#-----#|#####-#-#-#####-#-#####-#########|#-#-#-#-#---#-#---#-----#-------#|#-#-#-#######-#-#-#######-#####-#|#-----#-#-------#---------#-#---#|###-###-#-#-#######-#-###-#-#-###|#-----#---#-------#-#-#---#-----#|#######-###-#########-#####-###-#|#-----#-#---#-------#-#---#-#---#|#-#########-#####-#######-#-###-#|#-------#-----#-#-----#-----#---#|#-#-#-#-###-###-#-#######-#####-#|#-#-#-#-------#-----#-#-#---#-#-#|#-###########-###-#-#-#-#####-#-#|#---#-#-----#---#-#---#-#-#-----#|#-###-#-#-###-#######-#-#-#####-#|#-----#-#-#-#-#---#---#---#-----#|#-###-#-###-#-###-#-#-###-#-#-###|#-#-#-----#---#---#-#---#---#---#|#-#-#-#######-###-#-#####-#-#-#-#|#-#-----#-----#---------#-#-#-#-#|###-#-#######)###-#####-#-#######|#-#-#-------#---------#-#-#-#---#|#-#####-#########]#####-###-#-###|#-----------#----¿----#---------#|#################################', 

	r:	'################n################|################@################|################-################|################-################|################-################|################-################|################-################|################-################|################-################|################-################|################?################|################-################|################-################|################-################|################-################|################-################|################-################|################-################|################-################|################-################|################?################|################-################|################-################|################-################|################-################|################-################|################-################|################-################|################-################|################?################|################-################|################x################|#################################|',

	x:	'#################################|#r--#------r#-----#r#r#r#-------#|###-#-#######-#@#-#-#-#-#-###-#-#|#r#-#-#-----#-#r#-#-----#--r#r#r#|#-#-#-#-#-#-#-###-#####-#-#######|#-------#r#----r#--r#-----------#|#####-#####-#####-###-###-#-###-#|#r#r------#r#r#r-------r#r#r#---#|#-#######-###-###############-###|#---#r#r#--r#-#--r#---#z#r#r--#r#|#-#-#-#-#-###-#-###-#-#-#-#####-#|#-#---#-----#-#-----#r#---#r#---#|#-#-#######-#-#####-###-###-#-###|#-#-#r#r--------#r#---------#---#|#-#-#-###-###-#-#-#####-#####-#-#|#-#---#r--#r#-#r#---------#---#-#|#-#-#-###-#-#-###-#-#######-###-#|#-#-#--r#r#-#-#---#---#---#--r#-#|#-#-#-#####-#-#-#-###-#-#-#####-#|#-#r#--r#-------#r#r#-#r#-------#|#-###-#####-#######-#-#####-#####|#r#r------------#-----------#r#r#|#########-###-#-#-#-#####-###-#-#|#-----#r#r#---#r#r#r#r#r--#-----#|#-###-#-###-#-#######-###-#-#####|#-#------r#r#-#r--#r---r#-----#r#|#-#-###-#####-###-###-#######-#-#|#-#-#-------#------------r#r----#|#-#-#-#-#-#-#-#########-#######-#|#-#r#-#-#-#---#r#r#r#--------r#-#|#-###-#-#-#####-#-#-#-###-#-###-#|#r#r--#r#----r#-------#r--#--r#r#|#################################', 

	z:	'33#|##13-#x#13-##|##2------6-#@#13-##|##3----7-#-#13-##|##2------6-#-#13-##|##13-#-#13-##|##13-#-##12-##|##13-#--13-##|##13-#-##12-##|##13-#-#13-##|##13-#-#13-##|##13-#-#13-##|##13-#-#13-##|##13-#-#13-##|##13-#-#13-##|##12-##-#13-##|##13---#----9-##|##12-##-#13-##|##13-#-#4----6-##|##13-#-#13-##|##13-#-#7----3-##|##13-#-#13-##|##13-#-#10----##|##2-.-.-.6-#!#6-5.2-##|##13-#-#13-##|##2-.3-.6-#?#6-.6-##|##13-#-#13-##|##5-.7-#}#6-.6-##|##13-#-#13-##|##4-.8-#]#6-.6-##|##13-#-#13-##|##3-.9-#)#5--5.--##|33#'

};
