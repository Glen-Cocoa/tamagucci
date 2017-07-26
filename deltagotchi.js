/*
write pet function with main 3 stats (energy, hunger, happiness).
	change 3 stats to make more sense? with happiness being the ultimate value
	calculated from each of the three
	have stats change with interactions and have consequences

playing==>need to sleep; sleeping==>need to eat; eating==>need to play;
	eating; make object stomach? and produce waste
	sleeping; after enough sleeps, age and change form
	playing; affect physical size/fitness, affect weight
		make sub functions of play/eat/sleep? play different games, 
		
		eat/cook different foods (ingredients in inventory? function 
		creates object food_type inside inventory, to eat food it must
		present in the inventory and consumes the food. Maybe make food
		usable a certain number of times before it expires. Cooking 
		increases cooking skill and unlocks the ability to cook more 
		dishes (functions?) eating increases weight. if weight is too high,
		consequences occur. If fullness is too high, will refuse to eat.

		playing maybe increase values (intelligence/fitness?) "unlock" different 
		games/functions as intelligence/fitness increases. Cardio decreases stat 
		weight/increases endurance, Lifting increases stat weight/increases stat 
		strength
			game with dice using loops


		sleeping too much/not enough has consequences. must be attribute 
		sleep_value or the like.
		
		also make function 'work' unlock once certain age/attributes are 
		met. working decreases happiness, increases tiredness, makes 
		money. can work different jobs? maybe jobs sometimes return items 
		to be stored in inventory also
		

if health (or happiness?) gets too low, pet dies and leaves behind body.
if pet is dead, no functions can occur. New functions become available? 
bury/commune with dead/harvest meat (lol)

Pet has an inventory that can hold objects with which it can interact
	item 'diary?' in which the pet records its history.
	item 'cookpot?' where can combine different ingredients to make food
	item 'drugs' tbd
*/

var Spawn = {

	Pet:function(name){

/*
define different values/attributes pet will need
*/
	      
			this.lifeStatus = true 
			this.name=name
			this.form=1
			this.weight=1
			this.happiness=5
			this.health=5
			this.intelligence=5
			this.strength=5
			this.endurance=5
			this.luck=5
			this.wakefulness=5
			this.focus=5
			this.inventory=[]
			this.mood=[]
			this.age = 1
			this.loveOfFood=1
			this.wealth = 0
/*
after creating object, a message should print asking what you would 
like to do with pet name (name) and listing options play, sleep, eat. 
have function work unlock after meeting high enough intelligence. 
function race at high enough endurance. function lift at high enough 
strength
*/

		this.Greeting1 = function(){
			if(this.lifeStatus){
				console.log('You have a pet named ' + this.name + '! \n Type help for a list of commands.')
				}
			else if(!this.lifeStatus){
						console.log(this.name + ' is dead.')
						}
					}
			
/*
function to return scores after any action
*/

		this.statReturn = function(){
			console.log( 'Intelligence: ' + this.intelligence )
			console.log( '\n Strength: ' + this.strength)
			console.log( '\n Endurance: ' + this.endurance)
			console.log( '\n Luck: ' + this.luck)
			console.log( '\n Energy: ' + this.wakefulness)
			console.log( '\n Focus: ' + this.focus)
			console.log( '\n Age: ' + this.age + ' sleeps old.')
			console.log( '\n Wealth: ' + this.wealth)
			}

/*
write function 'help' to return list of possible commands
write filler feed/sleep/play/help functiong
*/

		this.help = function(){
					if(!this.lifeStatus){
						console.log('Your pet has died. \n You may;\n 1: bury the body \n Command: bury \n 2: attempt to commune with it\'s dead spirit \n Command: commune \n 3: harvest it\'s meat \n Command: harvest')
						}
					else if(this.lifeStatus){
							console.log('Right now your pet knows how to play, feed, sleep, study and quit!')
						if (this.intelligence >= 10){
							console.log('Your ' + this.name + ' is smart enough to work! \n Command: work')
							}
						if (this.endurance >= 10){
							console.log('Your ' + this.name + ' is enduring enough to run in a race! \n Command: run')
							}
						if (this.strength >=10){
							console.log('Your ' + this.name + ' is strong enough to lift weights! \n Command: lift')
							}
						if (this.loveOfFood >= 5){
							console.log('Your ' + this.name + ' is passionate enough about food to learn how to cook! \n Command: cook')
							}	
						}
					}
	
		this.study = function(){
			if(this.lifeStatus){
				this.intelligence += 2
				this.focus --
				this.wakefulness -= 2
					console.log(this.name + ' has spent time studying! \n Intelligence has increased by 2. \n Focus has decresed by 1. \n Energy has decreased by 2.')
					this.killCheck()
					}

			if(!this.lifeStatus) {
					console.log('Dead things can\'t study. \n Are you ok?')
					}
				}
				
		this.play = function(){
			if(this.lifeStatus){
				if(this.wakefulness <= 3){
					console.log(this.name + ' is too tired to play!')
						this.wakefulness --	
					this.killCheck()	
				  	}
				else{
					this.intelligence ++ 
					this.endurance ++
					this.strength ++
					this.wakefulness --
					this.weight --
					this.happiness ++
					console.log('You played with ' + this.name + '.\n Intelligence went up by 1. \n Wakefulness went down by 1. \n Endurance increased by 1. \n Strength increased by 1.')
					this.killCheck()
					}
				}
			if(!this.lifeStatus)
				console.log('You dress up ' + this.name + '\'s body and dance with it. \n There\'s probably something wrong with you.')
			}

		this.feed = function(){
			if(this.lifeStatus){
				this.weight ++
				this.focus ++
				this.wakefulness ++
				this.loveOfFood ++
				this.health --
				this.hapiness ++
					console.log('You fed ' + this.name + '. \n Focus increased by 1 \n Wakefulness increased by 1')
				this.killCheck()
				}
			if(!this.lifeStatus){
				console.log('You try to force food into ' + this.name + '\'s mouth but it\'s dead so it can\'t eat. \n Thereapy would be a wise investment.')
				}
			}
		
		this.sleep = function(){
			if(this.lifeStatus){
				if(this.wakefulness >= 20){
					console.log(this.name + 'has too much energy to sleep!')
				}
				else{
					this.wakefulness += 2
					this.age ++
					this.focus ++
					this.hapiness ++
					}
			if(this.age % 5 == 0){
				this.form ++
				console.log('Your pet is getting older! \n She has changed form!')
					}
			console.log('You made ' + this.name + ' take a nap!')
				this.killCheck()
				}
			if(!this.lifeStatus){
				console.log(this.name + ' is fast asleep. \n Wait. No. \n It\'s dead.')
				}
			}
		
		this.work = function(){
			if (this.lifeStatus = true){
				this.wealth ++
				this.wakefulness --
				this.happiness --
				this.focus --
					console.log(this.name + ' went to work and made some dough! \n Her wealth rating is now ' + this.wealth)
						this.killCheck()
				}
			if(!this.lifeStatus){
				console.log(this.name + ' is finally free from work in death. \n Capitalism can no longer reach her.')
			}
		}
		
		this.run = function(){
			if (this.lifeStatus){
			this.wakefulness --
			this.focus ++
			this.weight --
			this.health ++
			this.endurance + 2
				console.log(this.name + 'went for a run!')
				this.killCheck()
				}
			if(!this.lifeStatus){
			console.log('Dead things cant run. \n Thanks god nobody can see this.')
				}
			}
		

		this.lift = function(){
			if (this.lifeStatus){
			this.strength + 2
			this.health ++
			this.endurance ++
			this.wakefulness - 2
				console.log(this.name + 'pumped some iron! \n She is getting SWOLE AF')
				this.killCheck()
				} 
			if(!this.lifeStatus){
				console.log(this.name + '\'s body is crushed under the wights you pile on it.')
				}
			}	
	
		this.resurrect = function(){
			if (!this.lifeStatus){
			this.lifeStatus = true
			}
			if (this.lifeStatus)
			console.log('Something must be dead to be resurrected...')
			}
		
		this.lifeCheck = function(){
			console.log(this.lifeStatus)
			}

		this.killCheck = function(){
			if (this.wakefulness <= 0 || this.health <= 0 || this.happiness <= 0){
				this.lifeStatus = false
				console.log('Wow. you killed ' + this.name + '. \n Just like that goldfish from when you were little. \n You ruin everything.')
			}
		}
/*
write functions for post death interactions
*/
		this.communeWithDead = function(){
			if(!this.lifeStatus){
				console.log('You can almost hear the echoes of ' +this.name + 
				'\'s cries. \n You feel a malevolent presence, a chill creeps through your bones.')
				}
			else{
				console.log('nothing happens.')
				}
		}
		
		this.harvestMeat = function(){
			if(!this.lifeStatus){
				console.log('You quickly strip the skin and meat from the bones of ' + this.name + 
				'\'s still warm carcass. \n Dont\'t forget to refrigerate!')
				}
			else{
				console.log(this.name + ' begins to scream as you cut into its haunch.')
				this.kill()
				}
			}

		this.bury = function(){
			if(!this.lifeStatus){
				console.log('You hold a small, private, tasteful service for ' + this.name + 
				'. \n Not many people come, but ' + this.name + ' was\'nt particularly well liked, so it\'s not unexpected')
				}
			else{
				console.log('You force ' + this.name + 
				' into a shallow unamrked grave. \n She tries to fight but is much smaller than you. \n As you shovel dirt on top of the grave, her cries become softer and softer, eventually fading into the silence of the night.')
				}
			}
		}
	}
				

var Frank = new Spawn.Pet('Frank')


module.exports = Spawn;




/*
write a play function that returns a prompt asking what game you want to 
play and a list of the pets known games
*/
