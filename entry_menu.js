var tamagucci = require('./deltagotchi.js');
var readline = require('readline')
var Frank = new tamagucci.Pet('Frank')

	var entry_menu = readline.createInterface({
		input:process.stdin,
		output:process.stdout
		});
			console.log('Command: help to display possible actions \n ==================================================')
	var activity_check = function(reply) {
		if (reply == 'quit')
			entry_menu.close();
		else if(reply == 'play'){
			Frank.play()
			Frank.statReturn()
			Frank.Greeting1()
			entry_menu.question(' \n what u wanna do: ', activity_check );
			}
		else if(reply == 'study'){
			Frank.study()
			Frank.statReturn()
			Frank.Greeting1()
			entry_menu.question('\n what u wanna do: ', activity_check );
			}
		else if (reply == 'feed'){
			Frank.feed()
			Frank.statReturn()
			Frank.Greeting1()
			entry_menu.question('\n what u wanna do: ', activity_check );
			}
		else if (reply == 'sleep'){
			Frank.sleep()
			Frank.statReturn()
			Frank.Greeting1()
			entry_menu.question('\n what u wanna do: ', activity_check );
			}
		else if (reply == 'help'){
			Frank.help()
			Frank.statReturn()
			Frank.Greeting1()
			entry_menu.question('\n what u wanna do: ', activity_check );
			}
		else if (reply == 'work'){
			Frank.work()
			Frank.statReturn()
			Frank.Greeting1()
			entry_menu.question('\n what u wanna do: ', activity_check );
			}
		else if (reply == 'run'){
			Frank.run()
			Frank.statReturn()
			Frank.Greeting1()
			entry_menu.question('\n what u wanna do: ', activity_check );
			}
		else if (reply == 'lift'){
			Frank.lift()
			Frank.statReturn()
			Frank.Greeting1()
			entry_menu.question('\n what u wanna do: ', activity_check );
			}
		else if (reply == 'cook'){
			Frank.cook()
			Frank.statReturn()
			Frank.Greeting1()
			entry_menu.question('\n what u wanna do: ', activity_check );
			}
		else if (reply == 'lifeCheck'){
			Frank.lifeCheck()
			entry_menu.question('\n what u wanna do: ', activity_check );
			}
		else if (reply == 'commune'){
			Frank.communeWithDead()
			Frank.statReturn()
			Frank.Greeting1()
			entry_menu.question('\n what u wanna do: ', activity_check );
			}
		else if (reply == 'bury'){
			Frank.bury()
			Frank.statReturn()
			Frank.Greeting1()
			entry_menu.question('\n what u wanna do: ', activity_check );
			}
		else if (reply == 'resurrect'){
			Frank.resurrect()
			Frank.statReturn()
			Frank.Greeting1()
			entry_menu.question('\n what u wanna do: ', activity_check );
			}
		else if (reply == 'harvest'){
			Frank.harvestMeat()
			Frank.statReturn()
			Frank.Greeting1()
			entry_menu.question('\n what u wanna do: ', activity_check );
			}
		else{
			console.log(Frank.name + ' does not understand that command!')
			Frank.statReturn()
			Frank.Greeting1()
			entry_menu.question('\n what u wanna do: ', activity_check );
			}
		console.log('====================================================')	
		}


		entry_menu.question('\n what u wanna do: ', activity_check );

