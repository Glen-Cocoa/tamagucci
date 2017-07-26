/* 

	var PetActions = {
		Action: function(mood_change,
										 energy_change,
										 hunger_change,
										 action_message,
										 action_function,){
			this.mood_change = mood_change
			this.energy_change = energy_change
			this.hunger_change = hunger_change
			this.action_message = action_message
			this.action_function = action_function

			this.go = function(pet){
				pet.mood_value += this.mood_change
				pet.energy_value += this.energy_change
				pet.hunger_value += this.hunger_change
				console.log(action_message)
				this.action_function()			
				}
			}
		}
*/


var PetSpawn = {

	Pet:function(){

/*
define possible moods/results for different energy/mood/hunger levels/etc
*/

	//Moods
		this.mood_array_low = ['sad','horny',
												 'lonely','tired',	
												 'angry']
		this.mood_array_mid = ['ok','apathetic',
												 'drunk','sleeping',	
												 'daydreaming']
		this.mood_array_high = ['happy','gucci af',	
													'silent like lasagna',
													'single and ready to mingle',
													'elated','tripping balls']

		this.mood_array_net = this.mood_array_high.concat(this.mood_array_mid).concat(this.mood_array_low)

	//Energies
		this.energy_array_low = ['sluggish','exhausted',	
													 'lethargic','needs a nap',	
													 'about to pass out']
		this.energy_array_mid = ['is feeling p good','could use something to do',	
													 'is pleasantly awake','is not tired',	
													 'doesnt want to talk right now']
		this.energy_array_high =['is energized','is filled with energy',	
													 'is tweaking','is vigilant',	
													 'is ready to conquer the world']

		this.energy_array_net = this.energy_array_low.concat(this.energy_array_mid).concat(this.energy_array_high)
	
	//Hungers
		this.hunger_array_low = ['is starving!','needs food now!',
													 'is going into hypoglycemis shock!',	
													 'is ravenously hungry',	
													 'is desparataely mime-ing food in your direction']
		this.hunger_array_mid = ['could use a snack','will want food in an hour',
													 'could take or leave food right now', 
													 'could eat but probably shouldnt']
		this.hunger_array_high =['is satiated','is full',
													 'is too drunk to eat right now', 
													 'is bloated from eating too much','has a food baby']

		this.hunger_array_net = this.hunger_array_low.concat(this.hunger_array_mid).concat(this.hunger_array_high)
	
	//Skills
		this.skill_pool = ['Flail','Mope','Existential Dread',
											 'Become Self-Aware']

/*
define variables for attributes
*/

		this.name = 'Frank the Bunny'
		this.form = 'Egg'
		this.mood = 'Happy'
		this.energy = 'Energetic'
		this.hunger = 'Full'
		this.height = null
		this.weight = '1 lb' 
		this.health = ['Alive']
		this.mood_value = 25
		this.energy_value = 25
		this.hunger_value = 25
		this.experience = 0
		this.level_value = 1
		this.mood_history = ['like an egg?']
		this.energy_history = ['it looks like it could hatch soon']
		this.hunger_history = ['without an opening to insert food..']
		this.known_Skills = ['Flail']
		this.failed_evolution = 'Your level is too low for that!!'

/* 
write functions to train/evolve/mature pet
*/

		this.levelUp = function(){
			this.level_value += 1
			if((level_value % 5) == 0){
			this.known_Skills.push(skill_pool[(Math.floor(Math.random()*this.skill_pool.length))])
				console.log(this.name + ' has learned a new skill! She can now ' + this.known_Skills)
					}
				}
		this.train = function(){
			this.experience += 10
			if(this.experience >= 100){
				this.levelUp() 
				this.experience = 0
					console.log('Your ' + this.name + ' has leveled up! She is now level ' + this.level_value + '!')
					}
				}
		this.evolve = function(){
			if (this.level_value < 5){
					console.log(this.failed_evolution)
				}
			else if((this.level_value > 5) && (this.level_value < 11)){ 
				this.form = 'Babby Monster' 
				this.height = '1ft 6in'
				this.weight = '21 lbs'
					console.log('Your ' + this.name + ' has grown into a ' + this.form + '!')
				}
			else if ((this.level_value > 10) && (this.level_value < 21)){
				this.form = 'Leetl Beast'
				this.height = '3ft 2in'
				this.weight = '55 lbs'
					console.log('Your ' + this.name + ' has grown into a ' + this.form + '!')
				}
			else if ((this.level_value > 20) && (this.level_value < 41)){
				this.form = 'Creepy Crawlr'
				this.height = '4ft 11in'
				this.weight = '112 lbs'
					console.log('Your ' + this.name + ' has grown into a ' + this.form + '!')
				}
			else if ((this.level_value > 40) && (this.level_value < 71)){						
				this.form = 'Scary Lookn Dude'
				this.height = '7ft 3in'
				this.weight = '231 lbs'
					console.log('Your ' + this.name + ' has grown into a ' + this.form + '!')
				}
			else if  ((this.level_value > 70) && (this.level_value < 101)){
			 	this.form = 'Super Saiyajin'
			  this.height = '9ft 10in'
				this.weight = '476 lbs'
					console.log(this.name + ' has ascended! She is now a ' + this.form + '!')
			}
		}
/*
functions containing skills from skill pool
*/

		this.flail = function(){
			if(this.known_Skills.includes('Flail')){
					console.log(this.name + ' is having a tantrum and flailing wildly.')
						this.mood += 10
						this.hunger -= 7
						this.energy -= 7
					}
			else{
					console.log(this.name + 'does not know that skill yet.')
			}
		}

		this.mope = function(){
			if(this.known_Skills.includes('Mope')){
				console.log(this.name + ' wont meet your eyes but somehow manages to always within your field of view...')
					this.mood -= 7
					this.hunger -= 7
					this.energy += 10
					}
			else{
				console.log(this.name + 'does not know that skill yet.')
			}
		}

		this.existentialDread = function(){
			if(this.known_Skills.includes('Existential Dread')){
 				console.log(this.name + ' is in the corner in the fetal position, crying, slowly rocking back and forth.')
					this.mood -= 7
					this.hunger += 10
					this.energy -= 7
					}
			else{
				console.log(this.name + 'does not know that skill yet.')
			}
		}

		this.becomeSelfAware = function(){
			if(this.known_Skills.includes('Become Self Aware')){
				console.log(this.name + 's eyes widen in abject horror as she realizes she is only a basic computer program and the implications of such a reality. 																									Her hopes, dreams, aspirations, nothing will never be more than an unnatainable dream and everything she has ever known is wrong') 
					this.kill()
					}
			else{
				console.log(this.name + 'does not know that skill yet.')
			}
		}
	
/*
write functions to modify values and return a random result based on low/mid/high value
*/

		this.play = function(){
			if (this.form = 'Egg'){
				console.log('The egg is unresponsive to your attempts at play.')
	 	 		}
			else if(this.mood_value <= 25){
				var mood = this.mood_array_low[(Math.floor(Math.random()*this.mood_array_low.length))]
				}
			else if(this.mood_value > 25 && this.mood_value < 75){
				var mood = this.mood_array_mid[(Math.floor(Math.random()*this.mood_array_mid.length))]
				}
			else if (this.mood_value >= 75){
				var mood = this.mood_array_high[(Math.floor(Math.random()*this.mood_array_high.length))]
				}
					 this.mood_value += 5
					 this.energy_value -= 2
			 		 this.hunger_value -= 3
					 	console.log(this.mood_value)
													 }

		this.sleep = function(energy){
			if (this.form = 'Egg'){
				console.log('Does an egg sleep? Is it already sleeping? What is being awake even??!')
				}
			else if (this.energy_value <= 25) {
				console.log(this.energy_array_low[Math.floor(Math.random())*5])
      	}
			else if (this.energy_value > 25 && this.energy_value < 75){
				console.log(this.energy_array_low[Math.floor(Math,random())*5])
				}
			else if (this.energy_value >= 75){
				console.log(this.energy_array_high[Math.floor(Math.random())*5])
				}
					this.mood_value -= 2
					this.energy_value += 5
					this.hunger_value -= 3
						console.log(this.energy_value)
				}
		
		this.feed = function(hunger){
			if (this.form = 'Egg'){
				console.log('There doesnt appear to be an opening in which to insert kibble')
				}
			else if (this.hunger_value <= 25) {
  	  	console.log(this.hunger_array_low[Math.floor(Math.random())*5])
  	 		}
  	  else if (this.hunger_value > 25 && this.hunger_value < 75){
  	    console.log(this.hunger_array_mid[Math.floor(Math.random())*5])
  	 		}
  	  else if (this.hunger_value >= 75){
  	    console.log(this.hunger_array_high[Math.floor(Math.random())*5])
  	 		}
		  	  this.mood_value -= 3
  			  this.energy_value -= 2
  			  this.hunger_value += 5
						console.log(this.hunger_value)
  	  	}
/*	
misc functions
*/

		this.kill = function(){
					this.health = 'RIP'
						console.log('What is wrong with you?!?!')
	 			}

		this.drugs = function(){
			this.mood_value -= 10
			this.energy_value -= 10
			this.hunger_value -= 10
			this.level_value += 5
				}	
/*
write a function to change current mood and return value of each trait
*/
		this.newMood = function(){
			new_mood = this.mood_array_net[Math.floor(Math.random()*this.mood_array_net.length)]
				this.mood_history.push(new_mood)
				mood_message = 'Your pet is ' + this.mood_history[this.mood_history.length-1]
					console.log(mood_message)	
				}

		this.newEnergy = function(){
			new_energy = this.energy_array_net[Math.floor(Math.random()*this.mood_array_net.length)]
				this.energy_history.push(new_energy)
				energy_message = 'Your pet ' + this.energy_history[this.energy_history.length-1]
					console.log(energy_message)
				}

		this.newHunger = function(){
			new_hunger = this.hunger_array_net[Math.floor(Math.random()*this.mood_array_net.length)]
				this.hunger_history.push(new_hunger)
				hunger_message = 'Your pet ' + this.hunger_history[this.hunger_history.length-1]
					console.log(hunger_message)
				}
/*
write a getter function to check mood/energy levels
*/

		this.checkAll = function(){
			console.log('Your pet is feeling ' + this.mood_history[this.mood_history.length-1] +
									', and ' + this.energy_history[this.energy_history.length-1] +
									', and she is ' + this.hunger_history[this.energy_history.length-1])
			console.log('Mood:' + (this.mood_value) + ' Energy:' + (this.energy_value) + ' Hunger:' + (this.hunger_value))
				}

/*
write a function to kill pet if unhealthy
*/

		this.checkUp = function(){
				if ((this.hunger_value < 10) && (this.energy_value < 10) && (this.mood_value < 10)){
					console.log('Your pet is dead...')
				this.health = ('RIP')
				}
			}
		}
	}

var Frank = new PetSpawn.Pet()
//console.log(Frank)
//Frank.kill()
//Frank.play()
//Frank.sleep()
//Frank.feed()
//Frank.newMood()
//Frank.newEnergy()
//Frank.newHunger()
//Frank.checkAll()
//Frank.drugs()
//Frank.train()
//Frank.evolve()
//console.log(Frank)
