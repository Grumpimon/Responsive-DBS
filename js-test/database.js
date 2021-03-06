
const cellType = 
[
	'None',
	'Defence',
	'Mobility',
	'Power',
	'Technique',
	'Utility'
]
const Type = 
[
	'Aether Strikers',
	'Axe',
	'Chain Blades',
	'Hammer',
	'Repeater',
	'Sword',
	'War Pike'
]
const armorType = 
[
	'Head',
	'Torso',
	'Arms',
	'Legs'
]
const idList = 
[
	'Boreus',
	'Charrogg',
	'Drask',
	'Embermane',
	'Recruit\'s',
	'Gnasher',
	'Hellion',
	'Kharabak',
	'Koshai',
	'Nayzaga',
	'Pangar',
	'Quillshot',
	'Rezakiri',
	'Riftstalker',
	'Shrike',
	'Shrowd',
	'Skarn',
	'Skraev',
	'Stormclaw',
	'Valomyr',
	'Charrogg Exotic',
	'Shrowd Exotic',
	'Rezakiri Exotic'
]
const behemothList = 
[
	'Boreus',
	'Charrogg',
	'Drask',
	'Embermane',
	'Gnasher',
	'Hellion',
	'Kharabak',
	'Koshai',
	'Nayzaga',
	'Pangar',
	'Quillshot',
	'Rezakiri',
	'Riftstalker',
	'Shrike',
	'Shrowd',
	'Skarn',
	'Skraev',
	'Stormclaw',
	'Valomyr'
]
const armorResistanceValues = 
[
	25,
	35,
	45,
	55,
	65,
	75,
	85,
	95,
	105,
	115,
	125,
	127.5,
	130,
	132.5,
	135,
	137.5
]
const armorPerkValues = 
[
	1,
	1,
	1,
	1,
	1,
	1,
	2,
	2,
	2,
	2,
	3,
	3,
	3,
	3,
	3,
	3
]
const PowerValues = 
[
	100,
	140,
	180,
	220,
	260,
	300,
	340,
	380,
	420,
	460,
	500,
	510,
	520,
	530,
	540,
	550
]
const PerkValues = 
[
	1,
	1,
	1,
	1,
	1,
	1,
	2,
	2,
	2,
	2,
	3,
	3,
	3,
	3,
	3,
	3
]
const perkList = 
[
	[
		{
			name: 'None',
			index: 0,
			type: {
				name: 'None',
				index: 0
			},
			description: 'No effect',
			key: 'no_effect',
			effect: [
				{
					description: 'No effect',
					value: 0
				},
				{
					description: 'No effect',
					value: 0
				},
				{
					description: 'No effect.',
					value: 0
				},
				{
					description: 'No effect.',
					value: 0
				},
				{
					description: 'No effect.',
					value: 0
				},
				{
					description: 'No effect.',
					value: 0
				}
			],
			map: 0,
			DBmap: 0
		}
	],
	[
		{
			name: 'Assassin\'s Vigour',
			type: {
				name: 'Defence'
			},
			description: 'Grants Health after breaking a Behemoth part.',
			key: 'part_break_heal',
			effect: [
				{
					description: 'Heal 50 when you break a part',
					value: 50
				},
				{
					description: 'Heal 100 when you break a part',
					value: 100
				},
				{
					description: 'Heal 150 when you break a part',
					value: 150
				},
				{
					description: 'Heal 200 when you break a part',
					value: 200
				},
				{
					description: 'Heal 250 when you break a part',
					value: 250
				},
				{
					description: 'Heal 300 when you break a part',
					value: 300
				}
			],
			map: 1,
			DBmap: 3
		},
		{
			name: 'Bloodless',
			type: {
				name: 'Defence'
			},
			description: 'Protects against Wounded and Crippling Wounds statuses.',
			key: [
				'wound_reduction',
				'crippling_wound_reduction'
			],
			effect: [
				{
					description: [
						'Reduces duration of Wounded status by 50%',
						null
					],
					value: [
						-0.5,
						null
					]
				},
				{
					description: [
						'Reduces duration of Wounded status by 80%',
						null
					],
					value: [
						-0.8,
						null
					]
				},
				{
					description: [
						'Immune to Wounded status',
						null
					],
					value: [
						-1,
						null
					]
				},
				{
					description: [
						'Immune to Wounded status',
						'Reduces effectiveness of Crippling Wounded status by 50%'
					],
					value: [
						-1,
						-0.5
					]
				},
				{
					description: [
						'Immune to Wounded status',
						'Reduces effectiveness of Crippling Wounded status by 80%'
					],
					value: [
						-1,
						-0.8
					]
				},
				{
					description: [
						'Immune to Wounded status',
						'Immune to Crippling Wound status'
					],
					value: [
						-1,
						-1
					]
				}
			],
			map: 2,
			DBmap: 6
		},
		{
			name: 'Fireproof',
			type: {
				name: 'Defence'
			},
			description: 'Protects against being set on fire.',
			key: 'fire_immunity',
			effect: [
				{
					description: 'Reduces duration of On Fire status by 10%',
					value: -0.1
				},
				{
					description: 'Reduces duration of On Fire status by 20%',
					value: -0.2
				},
				{
					description: 'Reduces duration of On Fire status by 40%',
					value: -0.4
				},
				{
					description: 'Reduces duration of On Fire status by 60%',
					value: -0.6
				},
				{
					description: 'Reduces duration of On Fire status by 80%',
					value: -0.8
				},
				{
					description: 'Immune to being set on fire.',
					value: -1
				}
			],
			map: 3,
			DBmap: 9
		},
		{
			name: 'Fortress',
			type: {
				name: 'Defence'
			},
			description: 'Grants a small shield after avoiding damage for a short time.',
			key: 'not_hit_health_shield',
			effect: [
				{
					description: 'Grants a 10 health shield after not getting hit for 10s',
					value: 10
				},
				{
					description: 'Grants a 20 health shield after not getting hit for 10s',
					value: 20
				},
				{
					description: 'Grants a 40 health shield after not getting hit for 10s',
					value: 40
				},
				{
					description: 'Grants a 60 health shield after not getting hit for 10s',
					value: 60
				},
				{
					description: 'Grants a 80 health shield after not getting hit for 10s',
					value: 80
				},
				{
					description: 'Grants a 100 health shield after not getting hit for 10s',
					value: 100
				}
			],
			map: 4,
			DBmap: 12
		},
		{
			name: 'Guardian',
			type: {
				name: 'Defence'
			},
			description: 'Grant a portion of any shield applied to your nearest ally.',
			key: 'shield_share',
			effect: [
				{
					description: '+10% of shield applied to you is also applied to your nearest ally for 15s.',
					value: 10
				},
				{
					description: '+20% of shield applied to you is also applied to your nearest ally for 15s.',
					value: 20
				},
				{
					description: '+30% of shield applied to you is also applied to your nearest ally for 15s.',
					value: 30
				},
				{
					description: '+40% of shield applied to you is also applied to your nearest ally for 15s.',
					value: 40
				},
				{
					description: '+50% of shield applied to you is also applied to your nearest ally for 15s.',
					value: 50
				},
				{
					description: '+60% of shield applied to you is also applied to your nearest ally for 15s.',
					value: 60
				}
			],
			map: 5,
			DBmap: 15
		},
		{
			name: 'Iceborne',
			type: {
				name: 'Defence'
			},
			description: 'Increases Defence when at low health, and at later ranks, grants life steal',
			key: [
				'DecreasedDamageTaken',
				'IceborneLifesteal'
			],
			effect: [
				{
					description: [
						'When under 50% health, grants +5% decreased damage taken',
						null
					],
					value: [
						0.05,
						null
					]
				},
				{
					description: [
						'When under 50% health, grants +10% decreased damage taken',
						null
					],
					value: [
						0.1,
						null
					]
				},
				{
					description: [
						'When under 50% health, grants +15% decreased damage taken',
						null
					],
					value: [
						0.15,
						null
					]
				},
				{
					description: [
						'When under 50% health, grants +20% decreased damage taken',
						'While Iceborne is active, grants 4% lifesteal that cannot heal beyond 50% health'
					],
					value: [
						0.2,
						0.04
					]
				},
				{
					description: [
						'When under 50% health, grants +25% decreased damage taken',
						'While Iceborne is active, grants 6% lifesteal that cannot heal beyond 50% health'
					],
					value: [
						0.25,
						0.06
					]
				},
				{
					description: [
						'When under 50% health, grants +30% decreased damage taken',
						'While Iceborne is active, grants 8% lifesteal that cannot heal beyond 50% health'
					],
					value: [
						0.3,
						0.08
					]
				}
			],
			map: 6,
			DBmap: 18
		},
		{
			name: 'Insulated',
			type: {
				name: 'Defence'
			},
			description: 'Protects against Shocked status effect and allows you to attack electric shields.',
			key: [
				'shock_immunity',
				'percent_part_damage'
			],
			effect: [
				{
					description: [
						'Reduces duration of Shocked status by 25%',
						null
					],
					value: [
						-0.25,
						null
					]
				},
				{
					description: [
						'Reduces duration of Shocked status by 50%',
						null
					],
					value: [
						-0.5,
						null
					]
				},
				{
					description: [
						'Reduces duration of Shocked status by 75%',
						null
					],
					value: [
						-0.75,
						null
					]
				},
				{
					description: [
						'Reduces duration of Shocked status by 75%',
						'Reduces knockback and damage of hitting electrified shields'
					],
					value: [
						-0.75,
						null
					]
				},
				{
					description: [
						'Reduces duration of Shocked status by 75%',
						'Prevents knockback and damage of hitting electrified shields'
					],
					value: [
						-0.75,
						null
					]
				},
				{
					description: [
						'Immune to Shocked status',
						'Prevents knockback and damage of hitting electrified shields'
					],
					value: [
						-1,
						null
					]
				}
			],
			map: 7,
			DBmap: 21
		},
		{
			name: 'Nine Lives',
			type: {
				name: 'Defence'
			},
			description: 'Grants a chance to reduce damage, and later the ability to cheat death.',
			key: [
				'half_damage',
				'death_heal'
			],
			effect: [
				{
					description: [
						'+5% chance to halve incoming damage',
						null
					],
					value: [
						0.05,
						null
					]
				},
				{
					description: [
						'+8% chance to halve incoming damage',
						null
					],
					value: [
						0.08,
						null
					]
				},
				{
					description: [
						'+12% chance to halve incoming damage',
						null
					],
					value: [
						0.12,
						null
					]
				},
				{
					description: [
						'+12% chance to halve incoming damage',
						'The first time you would be knocked out stay up and heal for 400'
					],
					value: [
						0.12,
						400
					]
				},
				{
					description: [
						'+16% chance to halve incoming damage',
						'The first time you would be knocked out stay up and heal for 400'
					],
					value: [
						0.16,
						400
					]
				},
				{
					description: [
						'+20% chance to halve incoming damage',
						'The first time you would be knocked out stay up and heal for 400 and become empowered for 10 seconds'
					],
					value: [
						0.2,
						400
					]
				}
			],
			map: 8,
			DBmap: 24
		},
		{
			name: 'Shellshock Resist',
			type: {
				name: 'Defence'
			},
			description: 'Protects against the explosion damage and status effect of Shellshock.',
			key: 'shellshock_immunity',
			effect: [
				{
					description: 'Reduces Shell Shocked explosion damage and status effect duration by 10%',
					value: -0.1
				},
				{
					description: 'Reduces Shell Shocked explosion damage and status effect duration by 20%',
					value: -0.2
				},
				{
					description: 'Reduces Shell Shocked explosion damage and status effect duration by 40%',
					value: -0.4
				},
				{
					description: 'Reduces Shell Shocked explosion damage and status effect duration by 60%',
					value: -0.6
				},
				{
					description: 'Reduces Shell Shocked explosion damage and status effect duration by 80%',
					value: -0.8
				},
				{
					description: 'Immune to Shell Shocked explosion damage and status effect',
					value: -1
				}
			],
			map: 9,
			DBmap: 27
		},
		{
			name: 'Strategist',
			type: {
				name: 'Defence'
			},
			description: 'Reduces max health. Dodging through Behemoth attacks grants health shields to all Slayers.',
			key: [
				'ReducedHealth',
				'ShieldShare'
			],
			effect: [
				{
					description: [
						'-50 max health',
						'After dodging through an attack, grant 25 health shield to all slayers'
					],
					value: [
						-50,
						25
					]
				},
				{
					description: [
						'-100 max health',
						'After dodging through an attack, grant 50 health shield to all slayers'
					],
					value: [
						-100,
						50
					]
				},
				{
					description: [
						'-150 max health',
						'After dodging through an attack, grant 75 health shield to all slayers'
					],
					value: [
						-150,
						75
					]
				},
				{
					description: [
						'-200 max health',
						'After dodging through an attack, grant 100 health shield to all slayers'
					],
					value: [
						-200,
						100
					]
				},
				{
					description: [
						'-250 max health',
						'After dodging through an attack, grant 125 health shield to all slayers'
					],
					value: [
						-250,
						125
					]
				},
				{
					description: [
						'-300 max health',
						'After dodging through an attack, grant 150 health shield to all slayers'
					],
					value: [
						-300,
						150
					]
				}
			],
			map: 10,
			DBmap: 150
		},
		{
			name: 'Sturdy',
			type: {
				name: 'Defence'
			},
			description: 'Prevents being staggered on a cooldown.',
			key: 'stagger_prevention',
			effect: [
				{
					description: 'Prevents you from being staggered (120 second cooldown)',
					value: 120
				},
				{
					description: 'Prevents you from being staggered (100 second cooldown)',
					value: 100
				},
				{
					description: 'Prevents you from being staggered (80 second cooldown)',
					value: 80
				},
				{
					description: 'Prevents you from being staggered (60 second cooldown)',
					value: 60
				},
				{
					description: 'Prevents you from being staggered (40 second cooldown)',
					value: 40
				},
				{
					description: 'Prevents you from being staggered (15 second cooldown)',
					value: 15
				}
			],
			map: 11,
			DBmap: 30
		},
		{
			name: 'Tough',
			type: {
				name: 'Defence'
			},
			description: 'Increases Max Health.',
			key: [
				'max_hp',
				'increased_healing'
			],
			effect: [
				{
					description: [
						'Increases Max Health by 50',
						'Increased healing from all sources by 5%'
					],
					value: [
						50,
						0.05
					]
				},
				{
					description: [
						'Increases Max Health by 100',
						'Increased healing from all sources by 10%'
					],
					value: [
						100,
						0.1
					]
				},
				{
					description: [
						'Increases Max Health by 150',
						'Increased healing from all sources by 15%'
					],
					value: [
						150,
						0.15
					]
				},
				{
					description: [
						'Increases Max Health by 250',
						'Increased healing from all sources by 25%'
					],
					value: [
						250,
						0.25
					]
				},
				{
					description: [
						'Increases Max Health by 300',
						'Increased healing from all sources by 35%'
					],
					value: [
						300,
						0.35
					]
				},
				{
					description: [
						'Increases Max Health by 500',
						'Increased healing from all sources by 50%'
					],
					value: [
						500,
						0.5
					]
				}
			],
			map: 12,
			DBmap: 33
		},
		{
			name: 'Warmth',
			type: {
				name: 'Defence'
			},
			description: 'Protects against Chilled and Frozen status effects.',
			key: [
				'frozen_immunity',
				'chilled_immunity'
			],
			effect: [
				{
					description: [
						'Reduces duration of Frozen status by 30%',
						null
					],
					value: [
						-0.3,
						null
					]
				},
				{
					description: [
						'Reduces duration of Frozen status by 60%',
						null
					],
					value: [
						-0.6,
						null
					]
				},
				{
					description: [
						'Immune to being Frozen',
						null
					],
					value: [
						-1,
						null
					]
				},
				{
					description: [
						'Immune to being Frozen',
						'Reduces duration of Chilled status by 30%'
					],
					value: [
						-1,
						-0.3
					]
				},
				{
					description: [
						'Immune to being Frozen',
						'Reduces duration of Chilled status by 60%'
					],
					value: [
						-1,
						-0.6
					]
				},
				{
					description: [
						'Immune to being Frozen',
						'Immune to being Chilled'
					],
					value: [
						-1,
						-1
					]
				}
			],
			map: 13,
			DBmap: 36
		}
	],
	[
		{
			name: 'Agility',
			type: {
				name: 'Mobility'
			},
			description: 'Reduces the stamina cost of dodging.',
			key: 'dodge_cost_reduction',
			effect: [
				{
					description: '-10% Dodge Roll Stamina Cost',
					value: -0.1
				},
				{
					description: '-20% Dodge Roll Stamina Cost',
					value: -0.2
				},
				{
					description: '-30% Dodge Roll Stamina Cost',
					value: -0.3
				},
				{
					description: '-40% Dodge Roll Stamina Cost',
					value: -0.4
				},
				{
					description: '-55% Dodge Roll Stamina Cost',
					value: -0.55
				},
				{
					description: '-70% Dodge Roll Stamina Cost',
					value: -0.7
				}
			],
			map: 14,
			DBmap: 39
		},
		{
			name: 'Conditioning',
			type: {
				name: 'Mobility'
			},
			description: 'Increases Stamina Regen.',
			key: 'stamina_regen',
			effect: [
				{
					description: '+5 Stamina Regeneration',
					value: 5
				},
				{
					description: '+10 Stamina Regeneration',
					value: 10
				},
				{
					description: '+15 Stamina Regeneration',
					value: 15
				},
				{
					description: '+20 Stamina Regeneration',
					value: 20
				},
				{
					description: '+25 Stamina Regeneration',
					value: 25
				},
				{
					description: '+30 Stamina Regeneration',
					value: 30
				}
			],
			map: 15,
			DBmap: 42
		},
		{
			name: 'Endurance',
			type: {
				name: 'Mobility'
			},
			description: 'Increases Max Stamina.',
			key: 'max_stamina',
			effect: [
				{
					description: 'Increases Max Stamina by 10',
					value: 10
				},
				{
					description: 'Increases Max Stamina by 20',
					value: 20
				},
				{
					description: 'Increases Max Stamina by 40',
					value: 40
				},
				{
					description: 'Increases Max Stamina by 60',
					value: 60
				},
				{
					description: 'Increases Max Stamina by 80',
					value: 80
				},
				{
					description: 'Increases Max Stamina by 100',
					value: 100
				}
			],
			map: 16,
			DBmap: 45
		},
		{
			name: 'Evasion',
			type: {
				name: 'Mobility'
			},
			description: 'Increases the time you are invincible when dodging.',
			key: 'iframe_increase',
			effect: [
				{
					description: 'Increases Dodge invulnerability windows by 7%',
					value: 0.07
				},
				{
					description: 'Increases Dodge invulnerability windows by 14%',
					value: 0.14
				},
				{
					description: 'Increases Dodge invulnerability windows by 21%',
					value: 0.21
				},
				{
					description: 'Increases Dodge invulnerability windows by 28%',
					value: 0.28
				},
				{
					description: 'Increases Dodge invulnerability windows by 35%',
					value: 0.35
				},
				{
					description: 'Increases Dodge invulnerability windows by 42%',
					value: 0.42
				}
			],
			map: 17,
			DBmap: 48
		},
		{
			name: 'Fleet Footed',
			type: {
				name: 'Mobility'
			},
			description: 'Temporarily increases Movement Speed after a dodge.',
			key: 'dodge_movement_speed',
			effect: [
				{
					description: 'Following a Dodge, Movement Speed is increased by 10% for 3 seconds',
					value: 1.1
				},
				{
					description: 'Following a Dodge, Movement Speed is increased by 15% for 3 seconds',
					value: 1.15
				},
				{
					description: 'Following a Dodge, Movement Speed is increased by 20% for 3 seconds',
					value: 1.2
				},
				{
					description: 'Following a Dodge, Movement Speed is increased by 25% for 3 seconds',
					value: 1.25
				},
				{
					description: 'Following a Dodge, Movement Speed is increased by 30% for 3 seconds',
					value: 1.3
				},
				{
					description: 'Following a Dodge, Movement Speed is increased by 35% for 3 seconds',
					value: 1.35
				}
			],
			map: 18,
			DBmap: 51
		},
		{
			name: 'Nimble',
			type: {
				name: 'Mobility'
			},
			description: 'Restores Stamina when dodging through Behemoth attacks.',
			key: 'dodge_stamina',
			effect: [
				{
					description: 'Gain 10 Stamina after dodging through an attack',
					value: 10
				},
				{
					description: 'Gain 15 Stamina after dodging through an attack',
					value: 15
				},
				{
					description: 'Gain 20 Stamina after dodging through an attack',
					value: 20
				},
				{
					description: 'Gain 25 Stamina after dodging through an attack',
					value: 25
				},
				{
					description: 'Gain 30 Stamina after dodging through an attack',
					value: 30
				},
				{
					description: 'Gain 35 Stamina after dodging through an attack',
					value: 35
				}
			],
			map: 19,
			DBmap: 54
		},
		{
			name: 'Sprinter',
			type: {
				name: 'Mobility'
			},
			description: 'Reduces max stamina. Increases movespeed and reduces sprint cost.',
			key: [
				'ReduceStamina',
				'Sprinter'
			],
			effect: [
				{
					description: [
						'-5 max stamina',
						'+5% movement speed and -5% reduced sprint cost'
					],
					value: [
						-5,
						1.05
					]
				},
				{
					description: [
						'-10 max stamina',
						'+7.5% movement speed and -7.5% reduced sprint cost'
					],
					value: [
						-10,
						1.075
					]
				},
				{
					description: [
						'-15 max stamina',
						'+10% movement speed and -10% reduced sprint cost'
					],
					value: [
						-15,
						1.1
					]
				},
				{
					description: [
						'-20 max stamina',
						'+12.5% movement speed and -12.5% reduced sprint cost'
					],
					value: [
						-20,
						1.125
					]
				},
				{
					description: [
						'-25 max stamina',
						'+15% movement speed and -15% reduced sprint cost'
					],
					value: [
						-25,
						1.15
					]
				},
				{
					description: [
						'-30 max stamina',
						'+17.5% movement speed and -17.5% reduced sprint cost'
					],
					value: [
						-30,
						1.175
					]
				}
			],
			map: 20,
			DBmap: 159
		},
		{
			name: 'Swift',
			type: {
				name: 'Mobility'
			},
			description: 'Increases Movement Speed when your  is sheathed.',
			key: 'sheathed__movement_speed',
			effect: [
				{
					description: 'While sheathed, increases Movement Speed by 5%',
					value: 1.05
				},
				{
					description: 'While sheathed, increases Movement Speed by 10%',
					value: 1.1
				},
				{
					description: 'While sheathed, increases Movement Speed by 15%',
					value: 1.15
				},
				{
					description: 'While sheathed, increases Movement Speed by 20%',
					value: 1.2
				},
				{
					description: 'While sheathed, increases Movement Speed by 25%',
					value: 1.25
				},
				{
					description: 'While sheathed, increases Movement Speed by 30%, also affects other nearby Slayers.',
					value: 1.3
				}
			],
			map: 21,
			DBmap: 57
		}
	],
	[
		{
			name: 'Aetherhunter',
			type: {
				name: 'Power'
			},
			description: 'Increases damage against aether charged Behemoths.',
			key: 'damage_aether',
			effect: [
				{
					description: '+5% Damage vs Aether-charged Behemoths',
					value: 1.05
				},
				{
					description: '+10% Damage vs Aether-charged Behemoths',
					value: 1.1
				},
				{
					description: '+20% Damage vs Aether-charged Behemoths',
					value: 1.2
				},
				{
					description: '+30% Damage vs Aether-charged Behemoths',
					value: 1.3
				},
				{
					description: '+40% Damage vs Aether-charged Behemoths',
					value: 1.4
				},
				{
					description: '+50% Damage vs Aether-charged Behemoths',
					value: 1.5
				}
			],
			map: 22,
			DBmap: 60
		},
		{
			name: 'Deconstruction',
			type: {
				name: 'Power'
			},
			description: 'Bonus damage against objects created by Behemoths.',
			key: 'damage_object',
			effect: [
				{
					description: 'Deal 110% damage to objects created by Behemoths',
					value: 1.1
				},
				{
					description: 'Deal 120% damage to objects created by Behemoths',
					value: 1.2
				},
				{
					description: 'Deal 130% damage to objects created by Behemoths',
					value: 1.3
				},
				{
					description: 'Deal 150% damage to objects created by Behemoths',
					value: 1.5
				},
				{
					description: 'Deal 170% damage to objects created by Behemoths',
					value: 1.7
				},
				{
					description: 'Deal 200% damage to objects created by Behemoths',
					value: 2
				}
			],
			map: 23,
			DBmap: 63
		},
		{
			name: 'Discipline',
			type: {
				name: 'Power'
			},
			description: 'Prevents you from having over half health. Increases critical strike chance.',
			key: [
				'CriticalStrikeChance',
				'HealthLimited'
			],
			effect: [
				{
					description: [
						'+2.5% critical strike chance',
						'Health is limited to 50% of max health'
					],
					value: [
						1.025,
						null
					]
				},
				{
					description: [
						'+5.0% critical strike chance',
						'Health is limited to 50% of max health'
					],
					value: [
						1.05,
						null
					]
				},
				{
					description: [
						'+7.5% critical strike chance',
						'Health is limited to 50% of max health'
					],
					value: [
						1.075,
						null
					]
				},
				{
					description: [
						'+10.0% critical strike chance',
						'Health is limited to 50% of max health'
					],
					value: [
						1.1,
						null
					]
				},
				{
					description: [
						'+12.5% critical strike chance',
						'Health is limited to 50% of max health'
					],
					value: [
						1.25,
						null
					]
				},
				{
					description: [
						'+15% critical strike chance',
						'Health is limited to 50% of max health'
					],
					value: [
						1.15,
						null
					]
				}
			],
			map: 24,
			DBmap: 156
		},
		{
			name: 'Knockout King',
			type: {
				name: 'Power'
			},
			description: 'Percent increase to Stagger damage.',
			key: [
				'stagger_damage',
				'dodge_stagger_damage'
			],
			effect: [
				{
					description: [
						'5% Stagger Damage',
						null
					],
					value: [
						0.05,
						null
					]
				},
				{
					description: [
						'10% Stagger Damage',
						null
					],
					value: [
						0.1,
						null
					]
				},
				{
					description: [
						'15% Stagger Damage',
						null
					],
					value: [
						0.15,
						null
					]
				},
				{
					description: [
						'20% Stagger Damage',
						'After dodging through an attack the next weapon attack\'s Stagger is increased by 50%'
					],
					value: [
						0.2,
						0.5
					]
				},
				{
					description: [
						'25% Stagger Damage',
						'After dodging through an attack the next weapon attack\'s Stagger is increased by 50%'
					],
					value: [
						0.25,
						0.5
					]
				},
				{
					description: [
						'30% Stagger Damage',
						'After dodging through an attack the next weapon attack\'s Stagger is increased by 100%'
					],
					value: [
						0.3,
						1
					]
				}
			],
			map: 25,
			DBmap: 66
		},
		{
			name: 'Overpower',
			type: {
				name: 'Power'
			},
			description: 'Increases damage against staggered Behemoths.',
			key: 'damage_staggered',
			effect: [
				{
					description: '+10% Damage vs Staggered Behemoths',
					value: 1.1
				},
				{
					description: '+20% Damage vs Staggered Behemoths',
					value: 1.2
				},
				{
					description: '+30% Damage vs Staggered Behemoths',
					value: 1.3
				},
				{
					description: '+40% Damage vs Staggered Behemoths',
					value: 1.4
				},
				{
					description: '+50% Damage vs Staggered Behemoths',
					value: 1.5
				},
				{
					description: '+60% Damage vs Staggered Behemoths',
					value: 1.6
				}
			],
			map: 26,
			DBmap: 69
		},
		{
			name: 'Pacifier',
			type: {
				name: 'Power'
			},
			description: 'Increases stagger damage against enraged Behemoths.',
			key: 'stagger_enraged',
			effect: [
				{
					description: '+10% Stagger vs Enraged Behemoths',
					value: 1.1
				},
				{
					description: '+20% Stagger vs Enraged Behemoths',
					value: 1.2
				},
				{
					description: '+30% Stagger vs Enraged Behemoths',
					value: 1.3
				},
				{
					description: '+40% Stagger vs Enraged Behemoths',
					value: 1.4
				},
				{
					description: '+50% Stagger vs Enraged Behemoths',
					value: 1.5
				},
				{
					description: '+60% Stagger vs Enraged Behemoths',
					value: 1.6
				}
			],
			map: 27,
			DBmap: 72
		},
		{
			name: 'Rage',
			type: {
				name: 'Power'
			},
			description: 'Increases your damage when your health is low.',
			key: 'Rage',
			effect: [
				{
					description: 'When under 50% health, deal +5% damage',
					value: 1.05
				},
				{
					description: 'When under 50% health, deal +8% damage',
					value: 1.08
				},
				{
					description: 'When under 50% health, deal +12% damage',
					value: 1.12
				},
				{
					description: 'When under 50% health, deal +16% damage',
					value: 1.16
				},
				{
					description: 'When under 50% health, deal +20% damage',
					value: 1.2
				},
				{
					description: 'When under 50% health, deal +25% damage',
					value: 1.25
				}
			],
			map: 28,
			DBmap: 75
		},
		{
			name: 'Ragehunter',
			type: {
				name: 'Power'
			},
			description: 'Increases damage against enraged Behemoths.',
			key: 'damage_enraged',
			effect: [
				{
					description: '+5% Damage vs Enraged Behemoths',
					value: 1.05
				},
				{
					description: '+10% Damage vs Enraged Behemoths',
					value: 1.1
				},
				{
					description: '+15% Damage vs Enraged Behemoths',
					value: 1.15
				},
				{
					description: '+20% Damage vs Enraged Behemoths',
					value: 1.2
				},
				{
					description: '+30% Damage vs Enraged Behemoths',
					value: 1.3
				},
				{
					description: '+40% Damage vs Enraged Behemoths',
					value: 1.4
				}
			],
			map: 29,
			DBmap: 78
		},
		{
			name: 'Sharpened',
			type: {
				name: 'Power'
			},
			description: 'Percent increase to Part damage.',
			key: [
				'percent_part_damage',
				'dodge_percent_part_damage'
			],
			effect: [
				{
					description: [
						'+5% Part Damage',
						null
					],
					value: [
						1.05,
						null
					]
				},
				{
					description: [
						'+10% Part Damage',
						null
					],
					value: [
						1.1,
						null
					]
				},
				{
					description: [
						'+15% Part Damage',
						null
					],
					value: [
						1.15,
						null
					]
				},
				{
					description: [
						'+20% Part Damage',
						'After dodging through an attack the next weapon attack\'s Part Break Damage is increased by 50%'
					],
					value: [
						1.2,
						1.5
					]
				},
				{
					description: [
						'+25% Part Damage',
						'After dodging through an attack the next weapon attack\'s Part Break Damage is increased by 50%'
					],
					value: [
						1.25,
						1.5
					]
				},
				{
					description: [
						'+30% Part Damage',
						'After dodging through an attack the next weapon attack\'s Part Break Damage is increased by 100%'
					],
					value: [
						1.3,
						2
					]
				}
			],
			map: 30,
			DBmap: 81
		}
	],
	[
		{
			name: 'Acidic',
			type: {
				name: 'Technique'
			},
			description: 'Increases Wound damage at the cost of Part damage.',
			key: [
				'part_to_wound_damage',
				'percent_part_damage'
			],
			effect: [
				{
					description: [
						'Converts 30% of Part Damage to Wound Damage',
						null
					],
					value: [
						0.3,
						null
					]
				},
				{
					description: [
						'Converts 40% of Part Damage to Wound Damage',
						null
					],
					value: [
						0.4,
						null
					]
				},
				{
					description: [
						'Converts 50% of Part Damage to Wound Damage',
						null
					],
					value: [
						0.5,
						null
					]
				},
				{
					description: [
						'Converts 50% of Part Damage to Wound Damage',
						'+10% Part damage'
					],
					value: [
						0.5,
						1.1
					]
				},
				{
					description: [
						'Converts 50% of Part Damage to Wound Damage',
						'+15% Part damage'
					],
					value: [
						0.5,
						1.15
					]
				},
				{
					description: [
						'Converts 50% of Part Damage to Wound Damage',
						'+20% Part damage'
					],
					value: [
						0.5,
						1.2
					]
				}
			],
			map: 31,
			DBmap: 84
		},
		{
			name: 'Adrenaline',
			type: {
				name: 'Technique'
			},
			description: 'Increases damage dealt based on stamina spent.',
			key: 'AdrenalineDamage',
			effect: [
				{
					description: 'Grants +0.3% increased damage for every 10 stamina missing.',
					value: 1.003
				},
				{
					description: 'Grants +0.6% increased damage for every 10 stamina missing.',
					value: 1.006
				},
				{
					description: 'Grants +0.9% increased damage for every 10 stamina missing.',
					value: 1.009
				},
				{
					description: 'Grants +1.2% increased damage for every 10 stamina missing.',
					value: 1.012
				},
				{
					description: 'Grants +1.5% increased damage for every 10 stamina missing.',
					value: 1.015
				},
				{
					description: 'Grants +1.8% increased damage for every 10 stamina missing.',
					value: 1.018
				}
			],
			map: 32,
			DBmap: 87
		},
		{
			name: 'Barbed',
			type: {
				name: 'Technique'
			},
			description: 'Adds a flat amount of Wound damage on hit.',
			key: [
				'wound_damage',
				'dodge_expose_damage'
			],
			effect: [
				{
					description: [
						'+5 Wound Damage on Hit',
						null
					],
					value: [
						5,
						null
					]
				},
				{
					description: [
						'+10 Wound Damage on Hit',
						null
					],
					value: [
						10,
						null
					]
				},
				{
					description: [
						'+15 Wound Damage on Hit',
						null
					],
					value: [
						15,
						null
					]
				},
				{
					description: [
						'+20 Wound Damage on Hit',
						'After dodging through an attack the next attack\'s Expose Damage is increased by 200'
					],
					value: [
						20,
						200
					]
				},
				{
					description: [
						'+30 Wound Damage on Hit',
						'After dodging through an attack the next attack\'s Expose Damage is increased by 200'
					],
					value: [
						30,
						200
					]
				},
				{
					description: [
						'+40 Wound Damage on Hit',
						'After dodging through an attack the next attack\'s Expose Damage is increased by 400'
					],
					value: [
						40,
						400
					]
				}
			],
			map: 33,
			DBmap: 90
		},
		{
			name: 'Berserker',
			type: {
				name: 'Technique'
			},
			description: 'Reduces max health. Dealing damage stacks increased damage dealt for a short period.',
			key: [
				'ReducedHealth',
				'DealDamageDoDamage'
			],
			effect: [
				{
					description: [
						'-50 max health',
						'After dealing damage, gain +1% damage for 3 seconds. Stacks 10 times.'
					],
					value: [
						-50,
						0.01
					]
				},
				{
					description: [
						'-100 max health',
						'After dealing damage, gain +1.5% damage for 3 seconds. Stacks 10 times.'
					],
					value: [
						-100,
						0.015
					]
				},
				{
					description: [
						'-150 max health',
						'After dealing damage, gain +2% damage for 3 seconds. Stacks 10 times.'
					],
					value: [
						-150,
						0.02
					]
				},
				{
					description: [
						'-200 max health',
						'After dealing damage, gain +2.5% damage for 3 seconds. Stacks 10 times.'
					],
					value: [
						-200,
						0.025
					]
				},
				{
					description: [
						'-250 max health',
						'After dealing damage, gain +3% damage for 3 seconds. Stacks 10 times.'
					],
					value: [
						-250,
						0.03
					]
				},
				{
					description: [
						'-300 max health',
						'After dealing damage, gain +3.5% damage for 3 seconds. Stacks 10 times.'
					],
					value: [
						-300,
						0.035
					]
				}
			],
			map: 34,
			DBmap: 147
		},
		{
			name: 'Bladestorm',
			type: {
				name: 'Technique'
			},
			description: 'Adds a flat amount of Part damage on hit.',
			key: [
				'flat_part_damage',
				'dodge_part_damage'
			],
			effect: [
				{
					description: [
						'+5 Part Damage on Hit',
						null
					],
					value: [
						5,
						null
					]
				},
				{
					description: [
						'+10 Part Damage on Hit',
						null
					],
					value: [
						10,
						null
					]
				},
				{
					description: [
						'+15 Part Damage on Hit',
						null
					],
					value: [
						15,
						null
					]
				},
				{
					description: [
						'+20 Part Damage on Hit',
						'+200 Part Damage after dodging through an attack'
					],
					value: [
						20,
						200
					]
				},
				{
					description: [
						'+30 Part Damage on Hit',
						'+200 Part Damage after dodging through an attack'
					],
					value: [
						30,
						200
					]
				},
				{
					description: [
						'+40 Part Damage on Hit',
						'+400 Part Damage after dodging through an attack'
					],
					value: [
						40,
						400
					]
				}
			],
			map: 35,
			DBmap: 93
		},
		{
			name: 'Cunning',
			type: {
				name: 'Technique'
			},
			description: 'Grants a chance to deal double damage.',
			key: 'CriticalStrike',
			effect: [
				{
					description: '2% critical strike chance',
					value: 0.02
				},
				{
					description: '3% critical strike chance',
					value: 0.03
				},
				{
					description: '4% critical strike chance',
					value: 0.04
				},
				{
					description: '5% critical strike chance, +10% critical strike damage.',
					value: 0.05
				},
				{
					description: '7.5% critical strike chance, +20% critical strike damage.',
					value: 0.075
				},
				{
					description: '10% critical strike chance, +30% critical strike damage.',
					value: 0.1
				}
			],
			map: 36,
			DBmap: 96
		},
		{
			name: 'Evasive Fury',
			type: {
				name: 'Technique'
			},
			description: 'Temporarily increases attack speed when dodging through a Behemoth\'s attack.',
			key: 'dodge_attack_speed',
			effect: [
				{
					description: '+7.5% Attack Speed for 16 seconds after dodging through an attack',
					value: 0.075
				},
				{
					description: '+10% Attack Speed for 16 seconds after dodging through an attack',
					value: 0.1
				},
				{
					description: '+12.5% Attack Speed for 16 seconds after dodging through an attack',
					value: 0.125
				},
				{
					description: '+15% Attack Speed for 16 seconds after dodging through an attack',
					value: 0.15
				},
				{
					description: '+17.5% Attack Speed for 16 seconds after dodging through an attack',
					value: 0.175
				},
				{
					description: '+20% Attack Speed for 16 seconds after dodging through an attack',
					value: 0.2
				}
			],
			map: 37,
			DBmap: 99
		},
		{
			name: 'Merciless',
			type: {
				name: 'Technique'
			},
			description: 'Increases Wound damage against staggered Behemoths.',
			key: 'wound_damage',
			effect: [
				{
					description: '+25 Wound Damage vs Staggered Behemoths',
					value: 25
				},
				{
					description: '+40 Wound Damage vs Staggered Behemoths',
					value: 40
				},
				{
					description: '+55 Wound Damage vs Staggered Behemoths',
					value: 55
				},
				{
					description: '+70 Wound Damage vs Staggered Behemoths',
					value: 70
				},
				{
					description: '+85 Wound Damage vs Staggered Behemoths',
					value: 85
				},
				{
					description: '+100 Wound Damage vs Staggered Behemoths',
					value: 100
				}
			],
			map: 38,
			DBmap: 102
		},
		{
			name: 'Molten',
			type: {
				name: 'Technique'
			},
			description: 'Generates Molten Hearts when dealing damage.',
			key: 'attack_speed',
			effect: [
				{
					description: 'Dealing damage generates a Molten Heart on a 26 second cooldown, granting immunity to burning and increased attack and movement speed.',
					value: 1.1
				},
				{
					description: 'Dealing damage generates a Molten Heart on a 23 second cooldown, granting immunity to burning and increased attack and movement speed.',
					value: 1.1
				},
				{
					description: 'Dealing damage generates two Molten Hearts on a 23 second cooldown, granting immunity to burning and increased attack and movement speed.',
					value: 1.1
				},
				{
					description: 'Dealing damage generates two Molten Hearts on a 20 second cooldown, granting immunity to burning and increased attack and movement speed.',
					value: 1.1
				},
				{
					description: 'Dealing damage generates three Molten Hearts on a 20 second cooldown, granting immunity to burning and increased attack and movement speed.',
					value: 1.1
				},
				{
					description: 'Dealing damage generates three Molten Hearts on a 16 second cooldown, granting immunity to burning and increased attack and movement speed.',
					value: 1.1
				}
			],
			map: 39,
			DBmap: 105
		},
		{
			name: 'Predator',
			type: {
				name: 'Technique'
			},
			description: 'Increases damage after avoiding damage for a short time.',
			key: 'EffectPredator',
			effect: [
				{
					description: 'Deal 4% increased damage after not getting hit for 15 seconds. Bonus removed when hit.',
					value: 1.04
				},
				{
					description: 'Deal 8% increased damage after not getting hit for 15 seconds. Bonus removed when hit.',
					value: 1.08
				},
				{
					description: 'Deal 14% increased damage after not getting hit for 15 seconds. Bonus removed when hit.',
					value: 1.14
				},
				{
					description: 'Deal 20% increased damage after not getting hit for 15 seconds. Bonus removed when hit.',
					value: 1.2
				},
				{
					description: 'Deal 27% increased damage after not getting hit for 15 seconds. Bonus removed when hit.',
					value: 1.27
				},
				{
					description: 'Deal 35% increased damage after not getting hit for 15 seconds. Bonus removed when hit.',
					value: 1.35
				}
			],
			map: 40,
			DBmap: 108
		},
		{
			name: 'Savagery',
			type: {
				name: 'Technique'
			},
			description: 'Increases damage against Wounded parts.',
			key: 'damage_wounded',
			effect: [
				{
					description: '+20% Damage vs Wounded Parts',
					value: 1.2
				},
				{
					description: '+30% Damage vs Wounded Parts',
					value: 1.3
				},
				{
					description: '+40% Damage vs Wounded Parts',
					value: 14
				},
				{
					description: '+60% Damage vs Wounded Parts',
					value: 1.6
				},
				{
					description: '+80% Damage vs Wounded Parts',
					value: 1.8
				},
				{
					description: '+100% Damage vs Wounded Parts',
					value: 2
				}
			],
			map: 41,
			DBmap: 111
		},
		{
			name: 'Weighted Strikes',
			type: {
				name: 'Technique'
			},
			description: 'Adds a flat amount of Stagger damage on hit. At later ranks, allows more weapon attacks to interrupt.',
			key: [
				'stagger_damage',
				'dpdge_stagger_damage',
				'revive_shield'
			],
			effect: [
				{
					description: [
						'+5 Stagger Damage on Hit',
						null,
						null
					],
					value: [
						5,
						null,
						null
					]
				},
				{
					description: [
						'+10 Stagger Damage on Hit',
						null,
						null
					],
					value: [
						10,
						null,
						null
					]
				},
				{
					description: [
						'+15 Stagger Damage on Hit',
						null,
						null
					],
					value: [
						15,
						null,
						null
					]
				},
				{
					description: [
						'+20 Stagger Damage on Hit',
						'+200 Stagger after dodging through an attack',
						null
					],
					value: [
						20,
						200,
						null
					]
				},
				{
					description: [
						'+30 Stagger Damage on Hit',
						'+200 Stagger after dodging through an attack',
						null
					],
					value: [
						30,
						200,
						null
					]
				},
				{
					description: [
						'+40 Stagger Damage on Hit',
						'+400 Stagger after dodging through an attack',
						'Ranged swings and missiles interrupt unstable Behemoth attacks'
					],
					value: [
						40,
						400,
						null
					]
				}
			],
			map: 42,
			DBmap: 114
		},
		{
			name: 'Wild Frenzy',
			type: {
				name: 'Technique'
			},
			description: 'Increases Attack Speed when at low health.',
			key: 'low_hp_attack_speed',
			effect: [
				{
					description: 'When under 50% health, increase attack speed by 7.5%',
					value: 1.075
				},
				{
					description: 'When under 50% health, increase attack speed by 10%',
					value: 1.1
				},
				{
					description: 'When under 50% health, increase attack speed by 12.5%',
					value: 1.125
				},
				{
					description: 'When under 50% health, increase attack speed by 15%',
					value: 1.15
				},
				{
					description: 'When under 50% health, increase attack speed by 17.5%',
					value: 1.175
				},
				{
					description: 'When under 50% health, increase attack speed by 20%',
					value: 1.2
				}
			],
			map: 43,
			DBmap: 117
		}
	],
	[
		{
			name: 'Aetherborne',
			type: {
				name: 'Utility'
			},
			description: 'Increases the benefits of using aether vents.',
			key: [
				'aether_vent_not_used',
				'aether_vent_bonus_heal'
			],
			effect: [
				{
					description: [
						'25% chance not to consume an Aether Vent charge on use',
						'25 additional Aether Vent healing'
					],
					value: [
						0.25,
						25
					]
				},
				{
					description: [
						'25% chance not to consume an Aether Vent charge on use',
						'50 additional Aether Vent healing'
					],
					value: [
						0.25,
						50
					]
				},
				{
					description: [
						'25% chance not to consume an Aether Vent charge on use',
						'75 additional Aether Vent healing'
					],
					value: [
						0.25,
						75
					]
				},
				{
					description: [
						'25% chance not to consume an Aether Vent charge on use',
						'100 additional Aether Vent healing'
					],
					value: [
						0.25,
						100
					]
				},
				{
					description: [
						'25% chance not to consume an Aether Vent charge on use',
						'150 additional Aether Vent healing'
					],
					value: [
						0.25,
						150
					]
				},
				{
					description: [
						'25% chance not to consume an Aether Vent charge on use',
						'200 additional Aether Vent healing'
					],
					value: [
						0.25,
						200
					]
				}
			],
			map: 44,
			DBmap: 120
		},
		{
			name: 'Aetheric Attunement',
			type: {
				name: 'Utility'
			},
			description: 'Percent increase to Lantern Charge gained from attacks.',
			key: 'percent_lantern_charge',
			effect: [
				{
					description: '+10% Lantern Charge',
					value: 1.1
				},
				{
					description: '+15% Lantern Charge',
					value: 1.15
				},
				{
					description: '+20% Lantern Charge',
					value: 1.2
				},
				{
					description: '+30% Lantern Charge',
					value: 1.3
				},
				{
					description: '+40% Lantern Charge',
					value: 1.4
				},
				{
					description: '+50% Lantern Charge',
					value: 1.5
				}
			],
			map: 45,
			DBmap: 123
		},
		{
			name: 'Aetheric Frenzy',
			type: {
				name: 'Utility'
			},
			description: 'Gains a flat amount of Lantern Charge on each weapon hit.',
			key: 'flat_lantern_charge',
			effect: [
				{
					description: '+3 Lantern Charge on Hit',
					value: 3
				},
				{
					description: '+4 Lantern Charge on Hit',
					value: 4
				},
				{
					description: '+5 Lantern Charge on Hit',
					value: 5
				},
				{
					description: '+7.5 Lantern Charge on Hit',
					value: 7.5
				},
				{
					description: '+10 Lantern Charge on Hit',
					value: 10
				},
				{
					description: '+12.5 Lantern Charge on Hit',
					value: 12.5
				}
			],
			map: 46,
			DBmap: 126
		},
		{
			name: 'Conduit',
			type: {
				name: 'Utility'
			},
			description: 'Using a Lantern\'s hold ability increases all Slayers\' attack speed temporarily.',
			key: 'attack_speed_all_slayers',
			effect: [
				{
					description: 'Using your lantern hold ability grants 4% attack speed to all Slayers for 10 seconds.',
					value: 1.04
				},
				{
					description: 'Using your lantern hold ability grants 6% attack speed to all Slayers for 10 seconds.',
					value: 1.06
				},
				{
					description: 'Using your lantern hold ability grants 8% attack speed to all Slayers for 10 seconds.',
					value: 1.08
				},
				{
					description: 'Using your lantern hold ability grants 10% attack speed to all Slayers for 10 seconds.',
					value: 1.1
				},
				{
					description: 'Using your lantern hold ability grants 12.5% attack speed to all Slayers for 10 seconds.',
					value: 1.125
				},
				{
					description: 'Using your lantern hold ability grants 15% attack speed to all Slayers for 10 seconds.',
					value: 1.15
				}
			],
			map: 47,
			DBmap: 129
		},
		{
			name: 'Energized',
			type: {
				name: 'Utility'
			},
			description: 'Increase weapon meter gain rate.',
			key: 'weapon_charge_rate',
			effect: [
				{
					description: '+10% Weapon Charge rate',
					value: 0.1
				},
				{
					description: '+15% Weapon Charge rate',
					value: 0.15
				},
				{
					description: '+20% Weapon Charge rate',
					value: 0.2
				},
				{
					description: '+25% Weapon Charge rate',
					value: 0.25
				},
				{
					description: '+30% Weapon Charge rate',
					value: 0.3
				},
				{
					description: '+40% Weapon Charge rate',
					value: 0.4
				}
			],
			map: 48,
			DBmap: 132
		},
		{
			name: 'Engineer',
			type: {
				name: 'Utility'
			},
			description: 'Reduces healing from Slayer flask. Increases range of pylons.',
			key: [
				'FlaskLessHealing',
				'IncreasedPylonRange'
			],
			effect: [
				{
					description: [
						'Your Flask heals for 30 less',
						'+35% increase Pylon range'
					],
					value: [
						-30,
						0.35
					]
				},
				{
					description: [
						'Your Flask heals for 60 less',
						'+50% increase Pylon range'
					],
					value: [
						-60,
						0.5
					]
				},
				{
					description: [
						'Your Flask heals for 90 less',
						'+65% increase Pylon range'
					],
					value: [
						-90,
						0.65
					]
				},
				{
					description: [
						'Your Flask heals for 120 less',
						'+80% increase Pylon range'
					],
					value: [
						-120,
						0.8
					]
				},
				{
					description: [
						'Your Flask heals for 150 less',
						'+115% increase Pylon range'
					],
					value: [
						-150,
						1.15
					]
				},
				{
					description: [
						'Your Flask heals for 180 less',
						'+150% increase Pylon range'
					],
					value: [
						-180,
						1.5
					]
				}
			],
			map: 49,
			DBmap: 153
		},
		{
			name: 'Lucent',
			type: {
				name: 'Utility'
			},
			description: 'Flask heals over time and generates lantern charge.',
			key: [
				'increased_healing',
				'flat_lantern_charge'
			],
			effect: [
				{
					description: [
						'Your Flask heals over 20 seconds',
						'but for 20% increased healing. While this heal is active',
						'generate 8 Lantern Charge each second.',
						null
					],
					value: [
						1.2,
						8
					]
				},
				{
					description: [
						'Your Flask heals over 20 seconds',
						'but for 20% increased healing. While this heal is active',
						'generate 16 Lantern Charge each second.',
						null
					],
					value: [
						1.2,
						16
					]
				},
				{
					description: [
						'Your Flask heals over 20 seconds',
						'but for 20% increased healing. While this heal is active',
						'generate 25 Lantern Charge each second.',
						null
					],
					value: [
						1.2,
						25
					]
				},
				{
					description: [
						'Your Flask heals over 20 seconds',
						'but for 20% increased healing. While this heal is active',
						'generate 37.5 Lantern Charge each second.',
						null
					],
					value: [
						1.2,
						37.5
					]
				},
				{
					description: [
						'Your Flask heals over 20 seconds',
						'but for 20% increased healing. While this heal is active',
						'generate 50 Lantern Charge each second.',
						null
					],
					value: [
						1.2,
						50
					]
				},
				{
					description: [
						'Your Flask heals over 20 seconds',
						'but for 20% increased healing. While this heal is active',
						'generate 75 Lantern Charge each second.',
						null
					],
					value: [
						1.2,
						75
					]
				}
			],
			map: 50,
			DBmap: 135
		},
		{
			name: 'Medic',
			type: {
				name: 'Utility'
			},
			description: 'Improves your ability to revive allies.',
			key: [
				'revive_heal',
				'revive_speed',
				'revive_shield'
			],
			effect: [
				{
					description: [
						'When reviving an ally they are healed an additional 5%',
						null,
						null
					],
					value: [
						1.05,
						null,
						null
					]
				},
				{
					description: [
						'When reviving an ally they are healed an additional 10%',
						null,
						null
					],
					value: [
						1.1,
						null,
						null
					]
				},
				{
					description: [
						'When reviving an ally they are healed an additional 20%',
						null,
						null
					],
					value: [
						1.2,
						null,
						null
					]
				},
				{
					description: [
						'When reviving an ally they are healed an additional 20%',
						'Increases Revive Speed by 66%',
						null
					],
					value: [
						1.2,
						0.66,
						null
					]
				},
				{
					description: [
						'When reviving an ally they are healed an additional 30%',
						'Increases Revive Speed by 66%',
						null
					],
					value: [
						1.3,
						0.66,
						null
					]
				},
				{
					description: [
						'When reviving an ally they are healed an additional 40%',
						'Increases Revive Speed by 66%',
						'Grants a 300 health shield for 20 seconds after reviving an ally'
					],
					value: [
						1.4,
						0.66,
						300
					]
				}
			],
			map: 51,
			DBmap: 138
		},
		{
			name: 'Mender',
			type: {
				name: 'Utility'
			},
			description: 'Reduces healing from Slayer Flask. Using your flask restores other Slayers\' health.',
			key: [
				'LessFlaskHealing',
				'HealGroup'
			],
			effect: [
				{
					description: [
						'Your Flask heals for 30 less',
						'Using your Flask also heals all other Slayers for 270'
					],
					value: [
						30,
						270
					]
				},
				{
					description: [
						'Your Flask heals for 60 less',
						'Using your Flask also heals all other Slayers for 270'
					],
					value: [
						60,
						270
					]
				},
				{
					description: [
						'Your Flask heals for 90 less',
						'Using your Flask also heals all other Slayers for 270'
					],
					value: [
						90,
						270
					]
				},
				{
					description: [
						'Your Flask heals for 120 less',
						'Using your Flask also heals all other Slayers for 270'
					],
					value: [
						120,
						270
					]
				},
				{
					description: [
						'Your Flask heals for 150 less',
						'Using your Flask also heals all other Slayers for 270'
					],
					value: [
						150,
						270
					]
				},
				{
					description: [
						'Your Flask heals for 180 less',
						'Using your Flask also heals all other Slayers for 270'
					],
					value: [
						180,
						270
					]
				}
			],
			map: 52,
			DBmap: 162
		},
		{
			name: 'Stunning Vigour',
			type: {
				name: 'Utility'
			},
			description: 'Restores some health whenever a Behemoth is staggered.',
			key: 'stagger_heal',
			effect: [
				{
					description: 'Heal for 50 whenever a Behemoth is Staggered',
					value: 50
				},
				{
					description: 'Heal for 75 whenever a Behemoth is Staggered',
					value: 75
				},
				{
					description: 'Heal for 100 whenever a Behemoth is Staggered',
					value: 100
				},
				{
					description: 'Heal for 125 whenever a Behemoth is Staggered',
					value: 125
				},
				{
					description: 'Heal for 150 whenever a Behemoth is Staggered',
					value: 150
				},
				{
					description: 'Heal for 200 whenever a Behemoth is Staggered',
					value: 200
				}
			],
			map: 53,
			DBmap: 141
		},
		{
			name: 'Vampiric',
			type: {
				name: 'Utility'
			},
			description: 'Restores some health whenever a Behemoth part is Wounded.',
			key: 'wounded_heal',
			effect: [
				{
					description: 'Heal for 50 whenever a Behemoth is Wounded',
					value: 50
				},
				{
					description: 'Heal for 75 whenever a Behemoth is Wounded',
					value: 75
				},
				{
					description: 'Heal for 100 whenever a Behemoth is Wounded',
					value: 100
				},
				{
					description: 'Heal for 125 whenever a Behemoth is Wounded',
					value: 125
				},
				{
					description: 'Heal for 150 whenever a Behemoth is Wounded',
					value: 150
				},
				{
					description: 'Heal for 200 whenever a Behemoth is Wounded',
					value: 200
				}
			],
			map: 54,
			DBmap: 144
		}
	]
]
const head = 
[
	{
		type: 'Head',
		id: 'Boreus',
		name: 'Boreal Epiphany',
		description: 'Head protection forged from Boreus trophies.',
		icon: '/assets/icons/armours/boreus/BorealEpiphany.png',
		element: 'Frost',
		cell: 'Utility',
		perk: {
			name: 'Conditioning',
			type: 'Mobility'
		},
		effect: 0,
		map: 0,
		DBmap: 1
	},
	{
		type: 'Head',
		id: 'Charrogg Exotic',
		name: 'The Skullforge',
		description: 'The Skullforge is a piece of craftable Exotic armour in Dauntless. It is crafted from Firebrand Charrogg reagents.',
		icon: '/assets/icons/armours/charrogg/TheSkullforge.png',
		element: 'Blaze',
		cell: 'Defence',
		perk: {
			name: 'None',
			type: 'None'
		},
		effect: '1.5% of all damage dealt becomes a stamina shield (max 50) that depletes first when spending stamina. Depletes slowly after 5 seconds not dealing damage.',
		map: 1,
		DBmap: 5
	},
	{
		type: 'Head',
		id: 'Charrogg',
		name: 'Volcanic Helm',
		description: 'Head protection forged from Charrogg trophies.',
		icon: '/assets/icons/armours/charrogg/VolcanicHelm.png',
		element: 'Blaze',
		cell: 'Defence',
		perk: {
			name: 'Fireproof',
			type: 'Defence'
		},
		effect: 0,
		map: 2,
		DBmap: 8
	},
	{
		type: 'Head',
		id: 'Drask',
		name: 'Draskscale Helmet',
		description: 'Head protection forged from Drask trophies.',
		icon: '/assets/icons/armours/drask/DraskscaleHelmet.png',
		element: 'Shock',
		cell: 'Power',
		perk: {
			name: 'Aetheric Attunement',
			type: 'Utility'
		},
		effect: 0,
		map: 3,
		DBmap: 12
	},
	{
		type: 'Head',
		id: 'Embermane',
		name: 'Fiery Helm',
		description: 'Head protection forged from Embermane trophies.',
		icon: '/assets/icons/armours/embermane/FieryHelm.png',
		element: 'Blaze',
		cell: 'Mobility',
		perk: {
			name: 'Evasive Fury',
			type: 'Technique'
		},
		effect: 0,
		map: 4,
		DBmap: 17
	},
	{
		type: 'Head',
		id: 'Recruit\'s',
		name: 'Recruit\'s Mask',
		description: 'Light face protection for the novice Slayer.',
		icon: '/assets/icons/armours/generic/RecruitsMask.png',
		element: 'Neutral',
		cell: 'None',
		perk: {
			name: 'None',
			type: 'None'
		},
		effect: 0,
		map: 5,
		DBmap: 21
	},
	{
		type: 'Head',
		id: 'Gnasher',
		name: 'Gnasher Cap',
		description: 'Head protection forged from Gnasher trophies.',
		icon: '/assets/icons/armours/gnasher/GnasherCap.png',
		element: 'Neutral',
		cell: 'Defence',
		perk: {
			name: 'Bloodless',
			type: 'Defence'
		},
		effect: 0,
		map: 6,
		DBmap: 22
	},
	{
		type: 'Head',
		id: 'Hellion',
		name: 'Hellplate Casque',
		description: 'Head protection forged from Hellion trophies.',
		icon: '/assets/icons/armours/hellion/HellplateCasque.png',
		element: 'Blaze',
		cell: 'Technique',
		perk: {
			name: 'Ragehunter',
			type: 'Power'
		},
		effect: 0,
		map: 7,
		DBmap: 27
	},
	{
		type: 'Head',
		id: 'Kharabak',
		name: 'Eye of the Swarm',
		description: 'Head protection forged from Kharabak trophies.',
		icon: '/assets/icons/armours/kharabak/EyeOfTheSwarm.png',
		element: 'Terra',
		cell: 'Mobility',
		perk: {
			name: 'Shellshock Resist',
			type: 'Defence'
		},
		effect: 0,
		map: 8,
		DBmap: 32
	},
	{
		type: 'Head',
		id: 'Koshai',
		name: 'Visage of Thorns',
		description: 'Head protection forged from Koshai trophies.',
		icon: '/assets/icons/armours/koshai/VisageOfThorns.png',
		element: 'Terra',
		cell: 'Technique',
		perk: {
			name: 'Agility',
			type: 'Mobility'
		},
		effect: 0,
		map: 9,
		DBmap: 37
	},
	{
		type: 'Head',
		id: 'Nayzaga',
		name: 'Shocking Gaze',
		description: 'Head protection forged from Nayzaga trophies.',
		icon: '/assets/icons/armours/nayzaga/ShockingGaze.png',
		element: 'Shock',
		cell: 'Utility',
		perk: {
			name: 'Medic',
			type: 'Utility'
		},
		effect: 0,
		map: 10,
		DBmap: 38
	},
	{
		type: 'Head',
		id: 'Pangar',
		name: 'Brow of Ice',
		description: 'Head protection forged from Pangar trophies.',
		icon: '/assets/icons/armours/pangar/BrowOfIce.png',
		element: 'Frost',
		cell: 'Power',
		perk: {
			name: 'Knockout King',
			type: 'Power'
		},
		effect: 0,
		map: 11,
		DBmap: 43
	},
	{
		type: 'Head',
		id: 'Quillshot',
		name: 'Quillspike Mask',
		description: 'Head protection forged from Quillshot trophies.',
		icon: '/assets/icons/armours/quillshot/QuillspikeMask.png',
		element: 'Neutral',
		cell: 'Defence',
		perk: {
			name: 'Savagery',
			type: 'Technique'
		},
		effect: 0,
		map: 12,
		DBmap: 49
	},
	{
		type: 'Head',
		id: 'Rezakiri',
		name: 'Light\'s Crown',
		description: 'Head protection forged from Rezakiri trophies.',
		icon: '/assets/icons/armours/rezakiri/LightsCrown.png',
		element: 'Radiant',
		cell: 'Technique',
		perk: {
			name: 'Conduit',
			type: 'Utility'
		},
		effect: 0,
		map: 13,
		DBmap: 50
	},
	{
		type: 'Head',
		id: 'Rezakiri Exotic',
		name: 'Prismatic Grace',
		description: 'Prismatic Grace is a piece of craftable Exotic armour in Dauntless. It is crafted from Rezakiri reagents.',
		icon: '/assets/icons/armours/rezakiri/PrismaticGrace.png',
		element: 'Radiant',
		cell: 'Technique',
		perk: {
			name: 'None',
			type: 'None'
		},
		effect: 'After reviving another player, grant them a Radiant Prism that blocks incoming damage for 5 seconds.',
		map: 14,
		DBmap: 54
	},
	{
		type: 'Head',
		id: 'Riftstalker',
		name: 'Guise of the Rift',
		description: 'Head protection forged from Riftstalker trophies.',
		icon: '/assets/icons/armours/riftstalker/GuiseOfTheRift.png',
		element: 'Umbral',
		cell: 'Utility',
		perk: {
			name: 'Aetheric Attunement',
			type: 'Utility'
		},
		effect: 0,
		map: 15,
		DBmap: 55
	},
	{
		type: 'Head',
		id: 'Shrike',
		name: 'Shrikedown Helm',
		description: 'Head protection forged from Shrike trophies.',
		icon: '/assets/icons/armours/shrike/ShrikedownHelm.png',
		element: 'Neutral',
		cell: 'Technique',
		perk: {
			name: 'Evasion',
			type: 'Mobility'
		},
		effect: 0,
		map: 16,
		DBmap: 61
	},
	{
		type: 'Head',
		id: 'Shrowd',
		name: 'Dark Watch',
		description: 'Head protection forged from Shrowd trophies.',
		icon: '/assets/icons/armours/shrowd/DarkWatch.png',
		element: 'Umbral',
		cell: 'Power',
		perk: {
			name: 'Rage',
			type: 'Power'
		},
		effect: 0,
		map: 17,
		DBmap: 66
	},
	{
		type: 'Head',
		id: 'Shrowd Exotic',
		name: 'Tragic Echo',
		description: 'Tragic Echo is a piece of craftable Exotic armour in Dauntless. It is crafted from Shrowd reagents.',
		icon: '/assets/icons/armours/shrowd/TragicEcho.png',
		element: 'Umbral',
		cell: 'Power',
		perk: {
			name: 'None',
			type: 'None'
		},
		effect: 'Upon your first death, become a shadow clone that deals 100% increased damage for 15 seconds.',
		map: 18,
		DBmap: 67
	},
	{
		type: 'Head',
		id: 'Skarn',
		name: 'Sight of Stone',
		description: 'Head protection forged from Skarn trophies.',
		icon: '/assets/icons/armours/skarn/SightOfStone.png',
		element: 'Terra',
		cell: 'Defence',
		perk: {
			name: 'Tough',
			type: 'Defence'
		},
		effect: 0,
		map: 19,
		DBmap: 71
	},
	{
		type: 'Head',
		id: 'Skraev',
		name: 'Skraevwing Helmet',
		description: 'Head protection forged from Skraev trophies.',
		icon: '/assets/icons/armours/skraev/SkraevwingHelmet.png',
		element: 'Frost',
		cell: 'Mobility',
		perk: {
			name: 'Fleet Footed',
			type: 'Mobility'
		},
		effect: 0,
		map: 20,
		DBmap: 74
	},
	{
		type: 'Head',
		id: 'Stormclaw',
		name: 'Lightning Helm',
		description: 'Head protection forged from Stormclaw trophies.',
		icon: '/assets/icons/armours/stormclaw/LightningHelm.png',
		element: 'Shock',
		cell: 'Technique',
		perk: {
			name: 'Energized',
			type: 'Utility'
		},
		effect: 0,
		map: 21,
		DBmap: 78
	},
	{
		type: 'Head',
		id: 'Valomyr',
		name: 'Crest of Valour',
		description: 'Head protection forged from Valomyr trophies.',
		icon: '/assets/icons/armours/valomyr/CrestOfValour.png',
		element: 'Radiant',
		cell: 'Power',
		perk: {
			name: 'Lucent',
			type: 'Utility'
		},
		effect: 0,
		map: 22,
		DBmap: 81
	}
]
const torso = 
[
	{
		type: 'Torso',
		id: 'Boreus',
		name: 'Boreal Resolve',
		description: 'Torso protection forged from Boreus trophies.',
		icon: '/assets/icons/armours/boreus/BorealResolve.png',
		element: 'Frost',
		cell: 'Defence',
		perk: {
			name: 'Rage',
			type: 'Power'
		},
		effect: 0,
		map: 23,
		DBmap: 4
	},
	{
		type: 'Torso',
		id: 'Charrogg',
		name: 'Volcanic Aegis',
		description: 'Torso protection forged from Charrogg trophies.',
		icon: '/assets/icons/armours/charrogg/VolcanicAegis.png',
		element: 'Blaze',
		cell: 'Utility',
		perk: {
			name: 'Aetherhunter',
			type: 'Power'
		},
		effect: 0,
		map: 24,
		DBmap: 6
	},
	{
		type: 'Torso',
		id: 'Drask',
		name: 'Draskscale Plate',
		description: 'Torso protection forged from Drask trophies.',
		icon: '/assets/icons/armours/drask/DraskscalePlate.png',
		element: 'Shock',
		cell: 'Power',
		perk: {
			name: 'Aetheric Attunement',
			type: 'Utility'
		},
		effect: 0,
		map: 25,
		DBmap: 13
	},
	{
		type: 'Torso',
		id: 'Embermane',
		name: 'Fiery Breastplate',
		description: 'Torso protection forged from Embermane trophies.',
		icon: '/assets/icons/armours/embermane/FieryBreastplate.png',
		element: 'Blaze',
		cell: 'Mobility',
		perk: {
			name: 'Evasive Fury',
			type: 'Technique'
		},
		effect: 0,
		map: 26,
		DBmap: 14
	},
	{
		type: 'Torso',
		id: 'Recruit\'s',
		name: 'Recruit\'s Breastplate',
		description: 'Torso protection for the novice Slayer.',
		icon: '/assets/icons/armours/generic/RecruitsBreastplate.png',
		element: 'Neutral',
		cell: 'None',
		perk: {
			name: 'None',
			type: 'None'
		},
		effect: 0,
		map: 27,
		DBmap: 18
	},
	{
		type: 'Torso',
		id: 'Gnasher',
		name: 'Gnasher Cloak',
		description: 'Torso protection forged from Gnasher trophies.',
		icon: '/assets/icons/armours/gnasher/GnasherCloak.png',
		element: 'Neutral',
		cell: 'Defence',
		perk: {
			name: 'Tough',
			type: 'Defence'
		},
		effect: 0,
		map: 28,
		DBmap: 23
	},
	{
		type: 'Torso',
		id: 'Hellion',
		name: 'Hellplate Cuirass',
		description: 'Torso protection forged from Hellion trophies.',
		icon: '/assets/icons/armours/hellion/HellplateCuirass.png',
		element: 'Blaze',
		cell: 'Technique',
		perk: {
			name: 'Molten',
			type: 'Technique'
		},
		effect: 0,
		map: 29,
		DBmap: 28
	},
	{
		type: 'Torso',
		id: 'Kharabak',
		name: 'Shell of the Swarm',
		description: 'Torso protection forged from Kharabak trophies.',
		icon: '/assets/icons/armours/kharabak/ShellOfTheSwarm.png',
		element: 'Terra',
		cell: 'Technique',
		perk: {
			name: 'Bladestorm',
			type: 'Technique'
		},
		effect: 0,
		map: 30,
		DBmap: 33
	},
	{
		type: 'Torso',
		id: 'Koshai',
		name: 'Mantle of Thorns',
		description: 'Torso protection forged from Koshai trophies.',
		icon: '/assets/icons/armours/koshai/MantleOfThorns.png',
		element: 'Terra',
		cell: 'Utility',
		perk: {
			name: 'Predator',
			type: 'Technique'
		},
		effect: 0,
		map: 31,
		DBmap: 35
	},
	{
		type: 'Torso',
		id: 'Nayzaga',
		name: 'Shocking Heart',
		description: 'Torso protection forged from Nayzaga trophies.',
		icon: '/assets/icons/armours/nayzaga/ShockingHeart.png',
		element: 'Shock',
		cell: 'Defence',
		perk: {
			name: 'Medic',
			type: 'Utility'
		},
		effect: 0,
		map: 32,
		DBmap: 40
	},
	{
		type: 'Torso',
		id: 'Pangar',
		name: 'Core of Ice',
		description: 'Torso protection forged from Pangar trophies.',
		icon: '/assets/icons/armours/pangar/CoreOfIce.png',
		element: 'Frost',
		cell: 'Power',
		perk: {
			name: 'Fortress',
			type: 'Defence'
		},
		effect: 0,
		map: 33,
		DBmap: 44
	},
	{
		type: 'Torso',
		id: 'Quillshot',
		name: 'Quillspike Jacket',
		description: 'Torso protection forged from Quillshot trophies.',
		icon: '/assets/icons/armours/quillshot/QuillspikeJacket.png',
		element: 'Neutral',
		cell: 'Technique',
		perk: {
			name: 'Savagery',
			type: 'Technique'
		},
		effect: 0,
		map: 34,
		DBmap: 48
	},
	{
		type: 'Torso',
		id: 'Rezakiri',
		name: 'Light\'s Virtue',
		description: 'Torso protection forged from Rezakiri trophies.',
		icon: '/assets/icons/armours/rezakiri/LightsVirtue.png',
		element: 'Radiant',
		cell: 'Utility',
		perk: {
			name: 'Cunning',
			type: 'Technique'
		},
		effect: 0,
		map: 35,
		DBmap: 52
	},
	{
		type: 'Torso',
		id: 'Riftstalker',
		name: 'Mantle of the Rift',
		description: 'Torso protection forged from Riftstalker trophies.',
		icon: '/assets/icons/armours/riftstalker/MantleOfTheRift.png',
		element: 'Umbral',
		cell: 'Utility',
		perk: {
			name: 'Conduit',
			type: 'Utility'
		},
		effect: 0,
		map: 36,
		DBmap: 57
	},
	{
		type: 'Torso',
		id: 'Shrike',
		name: 'Shrikedown Plate',
		description: 'Torso protection forged from Shrike trophies.',
		icon: '/assets/icons/armours/shrike/ShrikedownPlate.png',
		element: 'Neutral',
		cell: 'Mobility',
		perk: {
			name: 'Evasion',
			type: 'Mobility'
		},
		effect: 0,
		map: 37,
		DBmap: 62
	},
	{
		type: 'Torso',
		id: 'Shrowd',
		name: 'Dark Marrow',
		description: 'Torso protection forged from Shrowd trophies.',
		icon: '/assets/icons/armours/shrowd/DarkMarrow.png',
		element: 'Umbral',
		cell: 'Power',
		perk: {
			name: 'Rage',
			type: 'Power'
		},
		effect: 0,
		map: 38,
		DBmap: 64
	},
	{
		type: 'Torso',
		id: 'Skarn',
		name: 'Heart of Stone',
		description: 'Torso protection forged from Skarn trophies.',
		icon: '/assets/icons/armours/skarn/HeartOfStone.png',
		element: 'Terra',
		cell: 'Defence',
		perk: {
			name: 'Guardian',
			type: 'Defence'
		},
		effect: 0,
		map: 39,
		DBmap: 68
	},
	{
		type: 'Torso',
		id: 'Skraev',
		name: 'Skraevwing Jacket',
		description: 'Torso protection forged from Skraev trophies.',
		icon: '/assets/icons/armours/skraev/SkraevwingJacket.png',
		element: 'Frost',
		cell: 'Mobility',
		perk: {
			name: 'Adrenaline',
			type: 'Technique'
		},
		effect: 0,
		map: 40,
		DBmap: 75
	},
	{
		type: 'Torso',
		id: 'Stormclaw',
		name: 'Lightning Plate',
		description: 'Torso protection forged from Stormclaw trophies.',
		icon: '/assets/icons/armours/stormclaw/LightningPlate.png',
		element: 'Shock',
		cell: 'Mobility',
		perk: {
			name: 'Energized',
			type: 'Utility'
		},
		effect: 0,
		map: 41,
		DBmap: 79
	},
	{
		type: 'Torso',
		id: 'Valomyr',
		name: 'Aegis of Valour',
		description: 'Torso protection forged from Valomyr trophies.',
		icon: '/assets/icons/armours/valomyr/AegisOfValour.png',
		element: 'Radiant',
		cell: 'Power',
		perk: {
			name: 'Nine Lives',
			type: 'Defence'
		},
		effect: 0,
		map: 42,
		DBmap: 80
	}
]
const arms = 
[
	{
		type: 'Arms',
		id: 'Boreus',
		name: 'Boreal Might',
		description: 'Arms protection forged from Boreus trophies.',
		icon: '/assets/icons/armours/boreus/BorealMight.png',
		element: 'Frost',
		cell: 'Power',
		perk: {
			name: 'Rage',
			type: 'Power'
		},
		effect: 0,
		map: 63,
		DBmap: 3
	},
	{
		type: 'Arms',
		id: 'Charrogg',
		name: 'Volcanic Grips',
		description: 'Arms protection forged from Charrogg trophies.',
		icon: '/assets/icons/armours/charrogg/VolcanicGrips.png',
		element: 'Blaze',
		cell: 'Utility',
		perk: {
			name: 'Rage',
			type: 'Power'
		},
		effect: 0,
		map: 64,
		DBmap: 7
	},
	{
		type: 'Arms',
		id: 'Drask',
		name: 'Draskscale Gauntlets',
		description: 'Arms protection forged from Drask trophies.',
		icon: '/assets/icons/armours/drask/DraskscaleGauntlets.png',
		element: 'Shock',
		cell: 'Utility',
		perk: {
			name: 'Sharpened',
			type: 'Power'
		},
		effect: 0,
		map: 65,
		DBmap: 10
	},
	{
		type: 'Arms',
		id: 'Embermane',
		name: 'Fiery Gauntlets',
		description: 'Arms protection forged from Embermane trophies.',
		icon: '/assets/icons/armours/embermane/FieryGauntlets.png',
		element: 'Blaze',
		cell: 'Technique',
		perk: {
			name: 'Fireproof',
			type: 'Defence'
		},
		effect: 0,
		map: 66,
		DBmap: 15
	},
	{
		type: 'Arms',
		id: 'Recruit\'s',
		name: 'Recruit\'s Gloves',
		description: 'Arm and hand protection for the novice Slayer.',
		icon: '/assets/icons/armours/generic/RecruitsGloves.png',
		element: 'Neutral',
		cell: 'None',
		perk: {
			name: 'None',
			type: 'None'
		},
		effect: 0,
		map: 67,
		DBmap: 19
	},
	{
		type: 'Arms',
		id: 'Gnasher',
		name: 'Gnasher Grips',
		description: 'Arms protection forged from Gnasher trophies.',
		icon: '/assets/icons/armours/gnasher/GnasherGrips.png',
		element: 'Neutral',
		cell: 'Power',
		perk: {
			name: 'Ragehunter',
			type: 'Power'
		},
		effect: 0,
		map: 68,
		DBmap: 24
	},
	{
		type: 'Arms',
		id: 'Hellion',
		name: 'Hellplate Bracers',
		description: 'Arms protection forged from Hellion trophies.',
		icon: '/assets/icons/armours/hellion/HellplateBracers.png',
		element: 'Blaze',
		cell: 'Power',
		perk: {
			name: 'Molten',
			type: 'Technique'
		},
		effect: 0,
		map: 69,
		DBmap: 26
	},
	{
		type: 'Arms',
		id: 'Kharabak',
		name: 'Clutches of the Swarm',
		description: 'Arms protection forged from Kharabak trophies.',
		icon: '/assets/icons/armours/kharabak/ClutchesOfTheSwarm.png',
		element: 'Terra',
		cell: 'Mobility',
		perk: {
			name: 'Conditioning',
			type: 'Mobility'
		},
		effect: 0,
		map: 70,
		DBmap: 30
	},
	{
		type: 'Arms',
		id: 'Koshai',
		name: 'Grasp of Thorns',
		description: 'Arms protection forged from Koshai trophies.',
		icon: '/assets/icons/armours/koshai/GraspOfThorns.png',
		element: 'Terra',
		cell: 'Power',
		perk: {
			name: 'Evasive Fury',
			type: 'Technique'
		},
		effect: 0,
		map: 71,
		DBmap: 34
	},
	{
		type: 'Arms',
		id: 'Nayzaga',
		name: 'Shocking Grasp',
		description: 'Arms protection forged from Nayzaga trophies.',
		icon: '/assets/icons/armours/nayzaga/ShockingGrasp.png',
		element: 'Shock',
		cell: 'Utility',
		perk: {
			name: 'Aetheric Attunement',
			type: 'Utility'
		},
		effect: 0,
		map: 72,
		DBmap: 39
	},
	{
		type: 'Arms',
		id: 'Pangar',
		name: 'Arms of Ice',
		description: 'Arms protection forged from Pangar trophies.',
		icon: '/assets/icons/armours/pangar/ArmsOfIce.png',
		element: 'Frost',
		cell: 'Defence',
		perk: {
			name: 'Knockout King',
			type: 'Power'
		},
		effect: 0,
		map: 73,
		DBmap: 42
	},
	{
		type: 'Arms',
		id: 'Quillshot',
		name: 'Quillspike Grips',
		description: 'Arms protection forged from Quillshot trophies.',
		icon: '/assets/icons/armours/quillshot/QuillspikeGrips.png',
		element: 'Neutral',
		cell: 'Technique',
		perk: {
			name: 'Barbed',
			type: 'Technique'
		},
		effect: 0,
		map: 74,
		DBmap: 47
	},
	{
		type: 'Arms',
		id: 'Rezakiri',
		name: 'Light\'s Refuge',
		description: 'Arms protection forged from Rezakiri trophies.',
		icon: '/assets/icons/armours/rezakiri/LightsRefuge.png',
		element: 'Radiant',
		cell: 'Technique',
		perk: {
			name: 'Conduit',
			type: 'Utility'
		},
		effect: 0,
		map: 75,
		DBmap: 51
	},
	{
		type: 'Arms',
		id: 'Riftstalker',
		name: 'Hands of the Rift',
		description: 'Arms protection forged from Riftstalker trophies.',
		icon: '/assets/icons/armours/riftstalker/HandsOfTheRift.png',
		element: 'Umbral',
		cell: 'Mobility',
		perk: {
			name: 'Evasion',
			type: 'Mobility'
		},
		effect: 0,
		map: 76,
		DBmap: 56
	},
	{
		type: 'Arms',
		id: 'Shrike',
		name: 'Shrikedown Gloves',
		description: 'Arms protection forged from Shrike trophies.',
		icon: '/assets/icons/armours/shrike/ShrikedownGloves.png',
		element: 'Neutral',
		cell: 'Mobility',
		perk: {
			name: 'Weighted Strikes',
			type: 'Technique'
		},
		effect: 0,
		map: 77,
		DBmap: 59
	},
	{
		type: 'Arms',
		id: 'Shrowd',
		name: 'Dark Embrace',
		description: 'Arms protection forged from Shrowd trophies.',
		icon: '/assets/icons/armours/shrowd/DarkEmbrace.png',
		element: 'Umbral',
		cell: 'Utility',
		perk: {
			name: 'Medic',
			type: 'Utility'
		},
		effect: 0,
		map: 78,
		DBmap: 63
	},
	{
		type: 'Arms',
		id: 'Skarn',
		name: 'Might of Stone',
		description: 'Arms protection forged from Skarn trophies.',
		icon: '/assets/icons/armours/skarn/MightOfStone.png',
		element: 'Terra',
		cell: 'Defence',
		perk: {
			name: 'Fortress',
			type: 'Defence'
		},
		effect: 0,
		map: 79,
		DBmap: 69
	},
	{
		type: 'Arms',
		id: 'Skraev',
		name: 'Skraevwing Gloves',
		description: 'Arms protection forged from Skraev trophies.',
		icon: '/assets/icons/armours/skraev/SkraevwingGloves.png',
		element: 'Frost',
		cell: 'Mobility',
		perk: {
			name: 'Warmth',
			type: 'Defence'
		},
		effect: 0,
		map: 80,
		DBmap: 73
	},
	{
		type: 'Arms',
		id: 'Stormclaw',
		name: 'Lightning Gloves',
		description: 'Arms protection forged from Stormclaw trophies.',
		icon: '/assets/icons/armours/stormclaw/LightningGloves.png',
		element: 'Shock',
		cell: 'Mobility',
		perk: {
			name: 'Insulated',
			type: 'Defence'
		},
		effect: 0,
		map: 81,
		DBmap: 77
	},
	{
		type: 'Arms',
		id: 'Valomyr',
		name: 'Gauntlets of Valour',
		description: 'Arms protection forged from Valomyr trophies.',
		icon: '/assets/icons/armours/valomyr/GauntletsOfValour.png',
		element: 'Radiant',
		cell: 'Defence',
		perk: {
			name: 'Lucent',
			type: 'Utility'
		},
		effect: 0,
		map: 82,
		DBmap: 82
	}
]
const legs = 
[
	{
		type: 'Legs',
		id: 'Boreus',
		name: 'Boreal March',
		description: 'Leg and foot protection forged from Boreus trophies.',
		icon: '/assets/icons/armours/boreus/BorealMarch.png',
		element: 'Frost',
		cell: 'Technique',
		perk: {
			name: 'Iceborne',
			type: 'Defence'
		},
		effect: 0,
		map: 43,
		DBmap: 2
	},
	{
		type: 'Legs',
		id: 'Charrogg',
		name: 'Volcanic Treads',
		description: 'Leg and foot protection forged from Charrogg trophies.',
		icon: '/assets/icons/armours/charrogg/VolcanicTreads.png',
		element: 'Blaze',
		cell: 'Power',
		perk: {
			name: 'Rage',
			type: 'Power'
		},
		effect: 0,
		map: 44,
		DBmap: 9
	},
	{
		type: 'Legs',
		id: 'Drask',
		name: 'Draskscale Greaves',
		description: 'Leg and foot protection forged from Drask trophies.',
		icon: '/assets/icons/armours/drask/DraskscaleGreaves.png',
		element: 'Shock',
		cell: 'Utility',
		perk: {
			name: 'Fleet Footed',
			type: 'Mobility'
		},
		effect: 0,
		map: 45,
		DBmap: 11
	},
	{
		type: 'Legs',
		id: 'Embermane',
		name: 'Fiery Greaves',
		description: 'Leg and foot protection forged from Embermane trophies.',
		icon: '/assets/icons/armours/embermane/FieryGreaves.png',
		element: 'Blaze',
		cell: 'Defence',
		perk: {
			name: 'Evasion',
			type: 'Mobility'
		},
		effect: 0,
		map: 46,
		DBmap: 16
	},
	{
		type: 'Legs',
		id: 'Recruit\'s',
		name: 'Recruit\'s Greaves',
		description: 'Leg and foot protection for the novice Slayer.',
		icon: '/assets/icons/armours/generic/RecruitsGreaves.png',
		element: 'Neutral',
		cell: 'None',
		perk: {
			name: 'None',
			type: 'None'
		},
		effect: 0,
		map: 47,
		DBmap: 20
	},
	{
		type: 'Legs',
		id: 'Gnasher',
		name: 'Gnasher Treads',
		description: 'Leg and foot protection forged from Gnasher trophies.',
		icon: '/assets/icons/armours/gnasher/GnasherTreads.png',
		element: 'Neutral',
		cell: 'Power',
		perk: {
			name: 'Tough',
			type: 'Defence'
		},
		effect: 0,
		map: 48,
		DBmap: 25
	},
	{
		type: 'Legs',
		id: 'Hellion',
		name: 'Hellplate Greaves',
		description: 'Leg and foot protection forged from Hellion trophies.',
		icon: '/assets/icons/armours/hellion/HellplateGreaves.png',
		element: 'Blaze',
		cell: 'Power',
		perk: {
			name: 'Fortress',
			type: 'Defence'
		},
		effect: 0,
		map: 49,
		DBmap: 29
	},
	{
		type: 'Legs',
		id: 'Kharabak',
		name: 'Dance of the Swarm',
		description: 'Leg and foot protection forged from Kharabak trophies.',
		icon: '/assets/icons/armours/kharabak/DanceOfTheSwarm.png',
		element: 'Terra',
		cell: 'Power',
		perk: {
			name: 'Conditioning',
			type: 'Mobility'
		},
		effect: 0,
		map: 50,
		DBmap: 31
	},
	{
		type: 'Legs',
		id: 'Koshai',
		name: 'Stride of Thorns',
		description: 'Leg and foot protection forged from Koshai trophies.',
		icon: '/assets/icons/armours/koshai/StrideOfThorns.png',
		element: 'Terra',
		cell: 'Utility',
		perk: {
			name: 'Predator',
			type: 'Technique'
		},
		effect: 0,
		map: 51,
		DBmap: 36
	},
	{
		type: 'Legs',
		id: 'Nayzaga',
		name: 'Shocking Stride',
		description: 'Leg and foot protection forged from Nayzaga trophies.',
		icon: '/assets/icons/armours/nayzaga/ShockingStride.png',
		element: 'Shock',
		cell: 'Defence',
		perk: {
			name: 'Insulated',
			type: 'Defence'
		},
		effect: 0,
		map: 52,
		DBmap: 41
	},
	{
		type: 'Legs',
		id: 'Pangar',
		name: 'Feet of Ice',
		description: 'Leg and foot protection forged from Pangar trophies.',
		icon: '/assets/icons/armours/pangar/FeetOfIce.png',
		element: 'Frost',
		cell: 'Defence',
		perk: {
			name: 'Warmth',
			type: 'Defence'
		},
		effect: 0,
		map: 53,
		DBmap: 45
	},
	{
		type: 'Legs',
		id: 'Quillshot',
		name: 'Quillspike Boots',
		description: 'Leg and foot protection forged from Quillshot trophies.',
		icon: '/assets/icons/armours/quillshot/QuillspikeBoots.png',
		element: 'Neutral',
		cell: 'Technique',
		perk: {
			name: 'Shellshock Resist',
			type: 'Defence'
		},
		effect: 0,
		map: 54,
		DBmap: 46
	},
	{
		type: 'Legs',
		id: 'Rezakiri',
		name: 'Light\'s Walk',
		description: 'Leg and foot protection forged from Rezakiri trophies.',
		icon: '/assets/icons/armours/rezakiri/LightsWalk.png',
		element: 'Radiant',
		cell: 'Mobility',
		perk: {
			name: 'Agility',
			type: 'Mobility'
		},
		effect: 0,
		map: 55,
		DBmap: 53
	},
	{
		type: 'Legs',
		id: 'Riftstalker',
		name: 'Striders of the Rift',
		description: 'Leg and foot protection forged from Riftstalker trophies.',
		icon: '/assets/icons/armours/riftstalker/StridersOfTheRift.png',
		element: 'Umbral',
		cell: 'Mobility',
		perk: {
			name: 'Conduit',
			type: 'Utility'
		},
		effect: 0,
		map: 56,
		DBmap: 58
	},
	{
		type: 'Legs',
		id: 'Shrike',
		name: 'Shrikedown Greaves',
		description: 'Leg and foot protection forged from Shrike trophies.',
		icon: '/assets/icons/armours/shrike/ShrikedownGreaves.png',
		element: 'Neutral',
		cell: 'Mobility',
		perk: {
			name: 'Bloodless',
			type: 'Defence'
		},
		effect: 0,
		map: 57,
		DBmap: 60
	},
	{
		type: 'Legs',
		id: 'Shrowd',
		name: 'Dark Path',
		description: 'Leg and foot protection forged from Shrowd trophies.',
		icon: '/assets/icons/armours/shrowd/DarkPath.png',
		element: 'Umbral',
		cell: 'Utility',
		perk: {
			name: 'Nine Lives',
			type: 'Defence'
		},
		effect: 0,
		map: 58,
		DBmap: 65
	},
	{
		type: 'Legs',
		id: 'Skarn',
		name: 'Pillars of Stone',
		description: 'Leg and foot protection forged from Skarn trophies.',
		icon: '/assets/icons/armours/skarn/PillarsOfStone.png',
		element: 'Terra',
		cell: 'Defence',
		perk: {
			name: 'Guardian',
			type: 'Defence'
		},
		effect: 0,
		map: 59,
		DBmap: 70
	},
	{
		type: 'Legs',
		id: 'Skraev',
		name: 'Skraevwing Boots',
		description: 'Leg and foot protection forged from Skraev trophies.',
		icon: '/assets/icons/armours/skraev/SkraevwingBoots.png',
		element: 'Frost',
		cell: 'Utility',
		perk: {
			name: 'Adrenaline',
			type: 'Technique'
		},
		effect: 0,
		map: 60,
		DBmap: 72
	},
	{
		type: 'Legs',
		id: 'Stormclaw',
		name: 'Lightning Boots',
		description: 'Leg and foot protection forged from Stormclaw trophies.',
		icon: '/assets/icons/armours/stormclaw/LightningBoots.png',
		element: 'Shock',
		cell: 'Mobility',
		perk: {
			name: 'Aetheric Frenzy',
			type: 'Utility'
		},
		effect: 0,
		map: 61,
		DBmap: 76
	},
	{
		type: 'Legs',
		id: 'Valomyr',
		name: 'Greaves of Valour',
		description: 'Leg and foot protection forged from Valomyr trophies.',
		icon: '/assets/icons/armours/valomyr/GreavesOfValour.png',
		element: 'Radiant',
		cell: 'Utility',
		perk: {
			name: 'Aetherhunter',
			type: 'Power'
		},
		effect: 0,
		map: 62,
		DBmap: 83
	}
]
const weapon = 
[
	[
		{
			type: 'Aether Strikers',
			id: 'Boreus',
			name: 'Brawlers of Boreus',
			description: 'A Slayer\'s aether strikers forged with Boreus trophies.',
			icon: '/assets/icons/weapons/boreus/BrawlersOfBoreus.png',
			element: 'Frost',
			cell: [
				'Power',
				'Defence'
			],
			perk: {
				name: 'Conditioning',
				type: 'Mobility'
			},
			effect: 'Using Ammo generate 2 Frost Sprite that cause your next attack to deal 50 bonus damage and minor frost damage. Max 4 Sprites. ',
			map: 83,
			DBmap: 114
		},
		{
			type: 'Aether Strikers',
			id: 'Charrogg',
			name: 'Charred Hands',
			description: 'A Slayer\'s aether strikers forged with Charrogg trophies.',
			icon: '/assets/icons/weapons/charrogg/CharredHands.png',
			element: 'Blaze',
			cell: [
				'Technique',
				'Defence'
			],
			perk: {
				name: 'Aetherhunter',
				type: 'Power'
			},
			effect: 0,
			map: 84,
			DBmap: 115
		},
		{
			type: 'Aether Strikers',
			id: 'Drask',
			name: 'Thundering Bolts',
			description: 'A Slayer\'s aether strikers forged with Drask trophies.',
			icon: '/assets/icons/weapons/drask/ThunderingBolts.png',
			element: 'Shock',
			cell: [
				'Technique',
				'Power'
			],
			perk: {
				name: 'Aetheric Attunement',
				type: 'Utility'
			},
			effect: '30% damage vs Behemoth Heads',
			map: 85,
			DBmap: 116
		},
		{
			type: 'Aether Strikers',
			id: 'Embermane',
			name: 'Ember Fists',
			description: 'A Slayer\'s aether strikers forged with Embermane trophies.',
			icon: '/assets/icons/weapons/embermane/EmberFists.png',
			element: 'Blaze',
			cell: [
				'Technique',
				'Mobility'
			],
			perk: {
				name: 'Evasive Fury',
				type: 'Technique'
			},
			effect: 'The fifth hit in a row deals +150% stagger damage',
			map: 86,
			DBmap: 117
		},
		{
			type: 'Aether Strikers',
			id: 'Recruit\'s',
			name: 'Recruit\'s Strikers',
			description: 'A simple pair of aether strikers for slaying Behemoths.',
			icon: '/assets/icons/weapons/generic/RecruitsStrikers.png',
			element: 'Neutral',
			cell: [
				'None',
				'None'
			],
			perk: {
				name: 'None',
				type: 'None'
			},
			effect: 0,
			map: 87,
			DBmap: 107
		},
		{
			type: 'Aether Strikers',
			id: 'Gnasher',
			name: 'Raging Fists',
			description: 'A Slayer\'s aether strikers forged with Gnasher trophies.',
			icon: '/assets/icons/weapons/gnasher/RagingFists.png',
			element: 'Neutral',
			cell: [
				'Technique',
				'Utility'
			],
			perk: {
				name: 'Ragehunter',
				type: 'Power'
			},
			effect: 0,
			map: 88,
			DBmap: 108
		},
		{
			type: 'Aether Strikers',
			id: 'Hellion',
			name: 'Inferno\'s Flames',
			description: 'A Slayer\'s aether strikers forged with Hellion trophies.',
			icon: '/assets/icons/weapons/hellion/InfernosFlames.png',
			element: 'Blaze',
			cell: [
				'Power',
				'Power'
			],
			perk: {
				name: 'Overpower',
				type: 'Power'
			},
			effect: 'The eighth hit in quick succession deals 250 bonus damage and major blaze damage',
			map: 89,
			DBmap: 118
		},
		{
			type: 'Aether Strikers',
			id: 'Kharabak',
			name: 'Kharabak\'s Pincers',
			description: 'A Slayer\'s aether strikers forged with Kharabak trophies.',
			icon: '/assets/icons/weapons/kharabak/KharabaksPincers.png',
			element: 'Terra',
			cell: [
				'Technique',
				'Mobility'
			],
			perk: {
				name: 'Bladestorm',
				type: 'Technique'
			},
			effect: 0,
			map: 90,
			DBmap: 119
		},
		{
			type: 'Aether Strikers',
			id: 'Koshai',
			name: 'Sovereign\'s Sceptres',
			description: 'A Slayer\'s axe forged with Koshai trophies.',
			icon: '/assets/icons/weapons/koshai/SovereignsSceptres.png',
			element: 'Terra',
			cell: [
				'Power',
				'Utility'
			],
			perk: {
				name: 'Sharpened',
				type: 'Power'
			},
			effect: 'After not dealing damage for 6 seconds, the next 5 attacks deal 25% increased damage.',
			map: 91,
			DBmap: 109
		},
		{
			type: 'Aether Strikers',
			id: 'Nayzaga',
			name: 'Nayzaga\'s Shockers',
			description: 'A Slayer\'s aether strikers forged with Nayzaga trophies.',
			icon: '/assets/icons/weapons/nayzaga/NayzagasShockers.png',
			element: 'Shock',
			cell: [
				'Technique',
				'Utility'
			],
			perk: {
				name: 'Savagery',
				type: 'Technique'
			},
			effect: 'Heal for 300 whenever a Behemoth is staggered.',
			map: 92,
			DBmap: 120
		},
		{
			type: 'Aether Strikers',
			id: 'Pangar',
			name: 'Pangar\'s Punishers',
			description: 'A Slayer\'s aether strikers forged with Pangar trophies.',
			icon: '/assets/icons/weapons/pangar/PangarsPunishers.png',
			element: 'Frost',
			cell: [
				'Technique',
				'Defence'
			],
			perk: {
				name: 'Knockout King',
				type: 'Power'
			},
			effect: 0,
			map: 93,
			DBmap: 121
		},
		{
			type: 'Aether Strikers',
			id: 'Quillshot',
			name: 'Quillshot\'s Shredders',
			description: 'A Slayer\'s aether strikers forged with Quillshot trophies.',
			icon: '/assets/icons/weapons/quillshot/QuillshotsShredders.png',
			element: 'Neutral',
			cell: [
				'Technique',
				'Defence'
			],
			perk: {
				name: 'Acidic',
				type: 'Technique'
			},
			effect: 0,
			map: 94,
			DBmap: 110
		},
		{
			type: 'Aether Strikers',
			id: 'Rezakiri',
			name: 'Hands of Dawn',
			description: 'A Slayer\'s aether strikers forged with Rezakiri trophies.',
			icon: '/assets/icons/weapons/rezakiri/HandsOfDawn.png',
			element: 'Radiant',
			cell: [
				'Technique',
				'Power'
			],
			perk: {
				name: 'Cunning',
				type: 'Technique'
			},
			effect: '10% chance for attacks to Hit twice.',
			map: 95,
			DBmap: 111
		},
		{
			type: 'Aether Strikers',
			id: 'Riftstalker',
			name: 'Stalker\'s Scorn',
			description: 'A Slayer\'s aether strikers forged with Riftstalker trophies.',
			icon: '/assets/icons/weapons/riftstalker/StalkersScorn.png',
			element: 'Umbral',
			cell: [
				'Technique',
				'Utility'
			],
			perk: {
				name: 'Wild Frenzy',
				type: 'Technique'
			},
			effect: 'Dealing damage has a chance (based on damage dealt) to generate a shadow orb that increases damage dealt by 2.5% for 5 seconds. If 5 or more orbs are present, the bonus doubles.',
			map: 96,
			DBmap: 112
		},
		{
			type: 'Aether Strikers',
			id: 'Shrike',
			name: 'Fists of the Shrike',
			description: 'A Slayer\'s aether strikers forged with Shrike trophies.',
			icon: '/assets/icons/weapons/shrike/FistsOfTheShrike.png',
			element: 'Neutral',
			cell: [
				'Technique',
				'Mobility'
			],
			perk: {
				name: 'Conditioning',
				type: 'Mobility'
			},
			effect: '+100 part damage on next hit after a dodge.',
			map: 97,
			DBmap: 113
		},
		{
			type: 'Aether Strikers',
			id: 'Shrowd',
			name: 'Hands of Night',
			description: 'A Slayer\'s aether strikers forged with Shrowd trophies.',
			icon: '/assets/icons/weapons/shrowd/HandsOfNight.png',
			element: 'Umbral',
			cell: [
				'Technique',
				'Utility'
			],
			perk: {
				name: 'Cunning',
				type: 'Technique'
			},
			effect: 'When under 20% health, deal +50% damage',
			map: 98,
			DBmap: 122
		},
		{
			type: 'Aether Strikers',
			id: 'Skarn',
			name: 'Skarn\'s Smashers',
			description: 'A Slayer\'s aether strikers forged with Skarn trophies.',
			icon: '/assets/icons/weapons/skarn/SkarnsSmashers.png',
			element: 'Terra',
			cell: [
				'Technique',
				'Defence'
			],
			perk: {
				name: 'Knockout King',
				type: 'Power'
			},
			effect: 'Dealing damage has a chance (based on damage dealt) to grant a stacking, refreshing 40 health shield that lasts for 12s',
			map: 99,
			DBmap: 123
		},
		{
			type: 'Aether Strikers',
			id: 'Skraev',
			name: 'Winter Wolves',
			description: 'A Slayer\'s aether strikers forged with Skraev trophies.',
			icon: '/assets/icons/weapons/skraev/WinterWolves.png',
			element: 'Frost',
			cell: [
				'Technique',
				'Mobility'
			],
			perk: {
				name: 'Nimble',
				type: 'Mobility'
			},
			effect: 'Evading drops 3 Ice Mines on a 30 second cooldown.',
			map: 100,
			DBmap: 124
		},
		{
			type: 'Aether Strikers',
			id: 'Stormclaw',
			name: 'Storm Breakers',
			description: 'A Slayer\'s aether strikers forged with Stormclaw trophies.',
			icon: '/assets/icons/weapons/stormclaw/StormBreakers.png',
			element: 'Shock',
			cell: [
				'Technique',
				'Mobility'
			],
			perk: {
				name: 'Aetheric Attunement',
				type: 'Utility'
			},
			effect: 'Reloads 3 hammer ammo after dodging through an attack',
			map: 101,
			DBmap: 125
		},
		{
			type: 'Aether Strikers',
			id: 'Valomyr',
			name: 'Valomyr\'s Visions',
			description: 'A Slayer\'s aether strikers forged with Valomyr trophies.',
			icon: '/assets/icons/weapons/valomyr/ValomyrsVisions.png',
			element: 'Radiant',
			cell: [
				'Power',
				'Utility'
			],
			perk: {
				name: 'Aetherhunter',
				type: 'Power'
			},
			effect: 'Once charged, your next attack will deal 550 bonus radiant damage. Charge rate increases with current health.',
			map: 102,
			DBmap: 126
		}
	],
	[
		{
			type: 'Axe',
			id: 'Boreus',
			name: 'Turmoil of Boreus',
			description: 'A Slayer\'s axe forged with Boreus trophies.',
			icon: '/assets/icons/weapons/boreus/TurmoilOfBoreus.png',
			element: 'Frost',
			cell: [
				'Power',
				'Defence'
			],
			perk: {
				name: 'Conditioning',
				type: 'Mobility'
			},
			effect: 'Charge Attacks generate Frost Sprites that cause your next attack to deal 50 bonus damage and minor frost damage. Max 4 Sprites.',
			map: 103,
			DBmap: 5
		},
		{
			type: 'Axe',
			id: 'Charrogg',
			name: 'Charred Cleaver',
			description: 'A Slayer\'s axe forged with Charrogg trophies.',
			icon: '/assets/icons/weapons/charrogg/CharredCleaver.png',
			element: 'Blaze',
			cell: [
				'Power',
				'Defence'
			],
			perk: {
				name: 'Aetherhunter',
				type: 'Power'
			},
			effect: 0,
			map: 104,
			DBmap: 7
		},
		{
			type: 'Axe',
			id: 'Drask',
			name: 'Thundering Scythe',
			description: 'A Slayer\'s axe forged with Drask trophies.',
			icon: '/assets/icons/weapons/drask/ThunderingScythe.png',
			element: 'Shock',
			cell: [
				'Power',
				'Defence'
			],
			perk: {
				name: 'Aetheric Attunement',
				type: 'Utility'
			},
			effect: '30% damage vs Behemoth Heads',
			map: 105,
			DBmap: 15
		},
		{
			type: 'Axe',
			id: 'Embermane',
			name: 'Ember Scythe',
			description: 'A Slayer\'s axe forged with Embermane trophies.',
			icon: '/assets/icons/weapons/embermane/EmberScythe.png',
			element: 'Blaze',
			cell: [
				'Power',
				'Mobility'
			],
			perk: {
				name: 'Evasive Fury',
				type: 'Technique'
			},
			effect: 'The fourth hit in quick succession deals 250 bonus part damage.',
			map: 106,
			DBmap: 21
		},
		{
			type: 'Axe',
			id: 'Recruit\'s',
			name: 'Recruit\'s Axe',
			description: 'A Slayer Recruit\'s axe.',
			icon: '/assets/icons/weapons/generic/RecruitsAxe.png',
			element: 'Neutral',
			cell: [
				'None',
				'None'
			],
			perk: {
				name: 'None',
				type: 'None'
			},
			effect: 0,
			map: 107,
			DBmap: 22
		},
		{
			type: 'Axe',
			id: 'Gnasher',
			name: 'Raging Bite',
			description: 'A Slayer\'s axe forged with Gnasher trophies.',
			icon: '/assets/icons/weapons/gnasher/RagingBite.png',
			element: 'Neutral',
			cell: [
				'Power',
				'Utility'
			],
			perk: {
				name: 'Ragehunter',
				type: 'Power'
			},
			effect: 0,
			map: 108,
			DBmap: 29
		},
		{
			type: 'Axe',
			id: 'Hellion',
			name: 'Inferno\'s Decree',
			description: 'A Slayer\'s axe forged with Hellion trophies.',
			icon: '/assets/icons/weapons/hellion/InfernosDecree.png',
			element: 'Blaze',
			cell: [
				'Power',
				'Power'
			],
			perk: {
				name: 'Overpower',
				type: 'Power'
			},
			effect: 'The sixth hit in quick succession deals 250 bonus damage and major blaze damage',
			map: 109,
			DBmap: 36
		},
		{
			type: 'Axe',
			id: 'Kharabak',
			name: 'Kharabak\'s Claw',
			description: 'A Slayer\'s axe forged with Kharabak trophies.',
			icon: '/assets/icons/weapons/kharabak/KharabaksClaw.png',
			element: 'Terra',
			cell: [
				'Power',
				'Technique'
			],
			perk: {
				name: 'Deconstruction',
				type: 'Power'
			},
			effect: 'Combo finishers deal 300 bonus part damage',
			map: 110,
			DBmap: 39
		},
		{
			type: 'Axe',
			id: 'Koshai',
			name: 'Sovereign\'s Wrath',
			description: 'A Slayer\'s axe forged with Koshai trophies.',
			icon: '/assets/icons/weapons/koshai/SovereignsWrath.png',
			element: 'Terra',
			cell: [
				'Power',
				'Utility'
			],
			perk: {
				name: 'Sharpened',
				type: 'Power'
			},
			effect: 'After not dealing damage for 6 seconds, the next 2 attacks deal 25% increased damage.',
			map: 111,
			DBmap: 48
		},
		{
			type: 'Axe',
			id: 'Nayzaga',
			name: 'Nayzaga\'s Scythe',
			description: 'A Slayer\'s axe forged with Nayzaga trophies.',
			icon: '/assets/icons/weapons/nayzaga/NayzagasScythe.png',
			element: 'Shock',
			cell: [
				'Power',
				'Utility'
			],
			perk: {
				name: 'Savagery',
				type: 'Technique'
			},
			effect: 'Heal 100 on perfectly charged vertical attacks',
			map: 112,
			DBmap: 53
		},
		{
			type: 'Axe',
			id: 'Pangar',
			name: 'Pangar\'s Grace',
			description: 'A Slayer\'s axe forged with Pangar trophies.',
			icon: '/assets/icons/weapons/pangar/PangarsGrace.png',
			element: 'Frost',
			cell: [
				'Power',
				'Defence'
			],
			perk: {
				name: 'Knockout King',
				type: 'Power'
			},
			effect: 0,
			map: 113,
			DBmap: 56
		},
		{
			type: 'Axe',
			id: 'Quillshot',
			name: 'Quillshot\'s Fury',
			description: 'A Slayer\'s axe forged with Quillshot trophies.',
			icon: '/assets/icons/weapons/quillshot/QuillshotsFury.png',
			element: 'Neutral',
			cell: [
				'Power',
				'Defence'
			],
			perk: {
				name: 'Acidic',
				type: 'Technique'
			},
			effect: 0,
			map: 114,
			DBmap: 60
		},
		{
			type: 'Axe',
			id: 'Rezakiri',
			name: 'Edge of Dawn',
			description: 'A Slayer\'s axe forged with Rezakiri trophies.',
			icon: '/assets/icons/weapons/rezakiri/EdgeOfDawn.png',
			element: 'Radiant',
			cell: [
				'Power',
				'Mobility'
			],
			perk: {
				name: 'Cunning',
				type: 'Technique'
			},
			effect: '10% chance for attacks to Hit twice.',
			map: 115,
			DBmap: 66
		},
		{
			type: 'Axe',
			id: 'Riftstalker',
			name: 'Stalker\'s Mercy',
			description: 'A Slayer\'s axe forged with Riftstalker trophies.',
			icon: '/assets/icons/weapons/riftstalker/StalkersMercy.png',
			element: 'Umbral',
			cell: [
				'Technique',
				'Utility'
			],
			perk: {
				name: 'Wild Frenzy',
				type: 'Technique'
			},
			effect: 'Dealing damage has a chance (based on damage dealt) to generate a shadow orb that increases damage dealt by 2.5% for 5 seconds. If 5 or more orbs are present, the bonus doubles.',
			map: 116,
			DBmap: 70
		},
		{
			type: 'Axe',
			id: 'Shrike',
			name: 'Song of the Shrike',
			description: 'A Slayer\'s axe forged with Shrike trophies.',
			icon: '/assets/icons/weapons/shrike/SongOfTheShrike.png',
			element: 'Neutral',
			cell: [
				'Power',
				'Mobility'
			],
			perk: {
				name: 'Conditioning',
				type: 'Mobility'
			},
			effect: '+100 part damage on next hit after a dodge.',
			map: 117,
			DBmap: 79
		},
		{
			type: 'Axe',
			id: 'Shrowd',
			name: 'Reaper of Night',
			description: 'A Slayer\'s axe forged with Shrowd trophies.',
			icon: '/assets/icons/weapons/shrowd/ReaperOfNight.png',
			element: 'Umbral',
			cell: [
				'Power',
				'Utility'
			],
			perk: {
				name: 'Cunning',
				type: 'Technique'
			},
			effect: 'When under 20% health, deal +50% damage',
			map: 118,
			DBmap: 83
		},
		{
			type: 'Axe',
			id: 'Skarn',
			name: 'Skarn\'s Judgment',
			description: 'A Slayer\'s axe forged with Skarn trophies.',
			icon: '/assets/icons/weapons/skarn/SkarnsJudgment.png',
			element: 'Terra',
			cell: [
				'Power',
				'Defence'
			],
			perk: {
				name: 'Knockout King',
				type: 'Power'
			},
			effect: 'Dealing damage has a chance (based on damage dealt) to grant a stacking, refreshing 40 health shield that lasts for 12s',
			map: 119,
			DBmap: 86
		},
		{
			type: 'Axe',
			id: 'Skraev',
			name: 'Winter Gale',
			description: 'A Slayer\'s axe forged with Skraev trophies.',
			icon: '/assets/icons/weapons/skraev/WinterGale.png',
			element: 'Frost',
			cell: [
				'Power',
				'Mobility'
			],
			perk: {
				name: 'Nimble',
				type: 'Mobility'
			},
			effect: 'Evading drops 3 Ice Mines on a 30 second cooldown.',
			map: 120,
			DBmap: 91
		},
		{
			type: 'Axe',
			id: 'Stormclaw',
			name: 'Storm Cutter',
			description: 'A Slayer\'s axe forged with Stormclaw trophies.',
			icon: '/assets/icons/weapons/stormclaw/StormCutter.png',
			element: 'Shock',
			cell: [
				'Power',
				'Mobility'
			],
			perk: {
				name: 'Energized',
				type: 'Utility'
			},
			effect: 'After dodging through an attack, the next weapon attack has 500% meter gain',
			map: 121,
			DBmap: 97
		},
		{
			type: 'Axe',
			id: 'Valomyr',
			name: 'Valomyr\'s Decree',
			description: 'A Slayer\'s axe forged with Valomyr trophies.',
			icon: '/assets/icons/weapons/valomyr/ValomyrsDecree.png',
			element: 'Radiant',
			cell: [
				'Power',
				'Utility'
			],
			perk: {
				name: 'Aetherhunter',
				type: 'Power'
			},
			effect: 'Once charged, your next attack will deal 550 bonus radiant damage. Charge rate increases with current health.',
			map: 122,
			DBmap: 102
		}
	],
	[
		{
			type: 'Chain Blades',
			id: 'Boreus',
			name: 'Destiny of Boreus',
			description: 'A Slayer\'s chain blades forged with Boreus trophies.',
			icon: '/assets/icons/weapons/boreus/DestinyOfBoreus.png',
			element: 'Frost',
			cell: [
				'Power',
				'Defence'
			],
			perk: {
				name: 'Conditioning',
				type: 'Mobility'
			},
			effect: 'Using Pips generates 2 Frost Sprites that cause your next attack to deal 50 bonus damage and minor frost damage each. Max 4 Sprites.',
			map: 123,
			DBmap: 2
		},
		{
			type: 'Chain Blades',
			id: 'Charrogg',
			name: 'Charred Blades',
			description: 'A Slayer\'s chain blades forged with Charrogg trophies.',
			icon: '/assets/icons/weapons/charrogg/CharredBlades.png',
			element: 'Blaze',
			cell: [
				'Technique',
				'Defence'
			],
			perk: {
				name: 'Aetherhunter',
				type: 'Power'
			},
			effect: 0,
			map: 124,
			DBmap: 6
		},
		{
			type: 'Chain Blades',
			id: 'Drask',
			name: 'Thundering Cutters',
			description: 'A Slayer\'s chain blades forged with Drask trophies.',
			icon: '/assets/icons/weapons/drask/ThunderingCutters.png',
			element: 'Shock',
			cell: [
				'Technique',
				'Power'
			],
			perk: {
				name: 'Aetheric Attunement',
				type: 'Utility'
			},
			effect: '30% damage vs Behemoth Tails',
			map: 125,
			DBmap: 13
		},
		{
			type: 'Chain Blades',
			id: 'Embermane',
			name: 'Ember Blades',
			description: 'A Slayer\'s chain blades forged with Embermane trophies.',
			icon: '/assets/icons/weapons/embermane/EmberBlades.png',
			element: 'Blaze',
			cell: [
				'Technique',
				'Mobility'
			],
			perk: {
				name: 'Evasive Fury',
				type: 'Technique'
			},
			effect: 'The tenth hit in quick succession deals 250 bonus part damage.',
			map: 126,
			DBmap: 17
		},
		{
			type: 'Chain Blades',
			id: 'Recruit\'s',
			name: 'Recruit\'s Chain Blades',
			description: 'A Slayer Recruit\'s chain blades.',
			icon: '/assets/icons/weapons/generic/RecruitsChainBlades.png',
			element: 'Neutral',
			cell: [
				'None',
				'None'
			],
			perk: {
				name: 'None',
				type: 'None'
			},
			effect: 0,
			map: 127,
			DBmap: 23
		},
		{
			type: 'Chain Blades',
			id: 'Gnasher',
			name: 'Raging Teeth',
			description: 'A Slayer\'s chain blades forged with Gnasher trophies.',
			icon: '/assets/icons/weapons/gnasher/RagingTeeth.png',
			element: 'Neutral',
			cell: [
				'Technique',
				'Utility'
			],
			perk: {
				name: 'Ragehunter',
				type: 'Power'
			},
			effect: 0,
			map: 128,
			DBmap: 33
		},
		{
			type: 'Chain Blades',
			id: 'Hellion',
			name: 'Inferno\'s Fangs',
			description: 'A Slayer\'s chain blades forged with Hellion trophies.',
			icon: '/assets/icons/weapons/hellion/InfernosFangs.png',
			element: 'Blaze',
			cell: [
				'Power',
				'Power'
			],
			perk: {
				name: 'Overpower',
				type: 'Power'
			},
			effect: 'The tenth hit in quick succession deals 250 bonus damage and major blaze damage',
			map: 129,
			DBmap: 37
		},
		{
			type: 'Chain Blades',
			id: 'Kharabak',
			name: 'Kharabak\'s Wings',
			description: 'A Slayer\'s chain blades forged with Kharabak trophies.',
			icon: '/assets/icons/weapons/kharabak/KharabaksWings.png',
			element: 'Terra',
			cell: [
				'Technique',
				'Mobility'
			],
			perk: {
				name: 'Bladestorm',
				type: 'Technique'
			},
			effect: 0,
			map: 130,
			DBmap: 43
		},
		{
			type: 'Chain Blades',
			id: 'Koshai',
			name: 'Sovereign\'s Lash',
			description: 'A Slayer\'s chain blades forged with Koshai trophies.',
			icon: '/assets/icons/weapons/koshai/SovereignsLash.png',
			element: 'Terra',
			cell: [
				'Power',
				'Utility'
			],
			perk: {
				name: 'Sharpened',
				type: 'Power'
			},
			effect: 'After not dealing damage for 6 seconds, the next 6 attacks deal 25% increased damage.',
			map: 131,
			DBmap: 45
		},
		{
			type: 'Chain Blades',
			id: 'Nayzaga',
			name: 'Nayzaga\'s Reach',
			description: 'A Slayer\'s chain blades forged with Nayzaga trophies.',
			icon: '/assets/icons/weapons/nayzaga/NayzagasReach.png',
			element: 'Shock',
			cell: [
				'Technique',
				'Utility'
			],
			perk: {
				name: 'Barbed',
				type: 'Technique'
			},
			effect: '+5% lifesteal vs wounded parts',
			map: 132,
			DBmap: 52
		},
		{
			type: 'Chain Blades',
			id: 'Pangar',
			name: 'Pangar\'s Claws',
			description: 'A Slayer\'s chain blades forged with Pangar trophies.',
			icon: '/assets/icons/weapons/pangar/PangarsClaws.png',
			element: 'Frost',
			cell: [
				'Technique',
				'Defence'
			],
			perk: {
				name: 'Weighted Strikes',
				type: 'Technique'
			},
			effect: 0,
			map: 133,
			DBmap: 55
		},
		{
			type: 'Chain Blades',
			id: 'Quillshot',
			name: 'Quillshot\'s Bonehooks',
			description: 'A Slayer\'s chain blades forged with Quillshot trophies.',
			icon: '/assets/icons/weapons/quillshot/QuillshotsBonehooks.png',
			element: 'Neutral',
			cell: [
				'Technique',
				'Defence'
			],
			perk: {
				name: 'Acidic',
				type: 'Technique'
			},
			effect: 0,
			map: 134,
			DBmap: 59
		},
		{
			type: 'Chain Blades',
			id: 'Rezakiri',
			name: 'Fangs of Dawn',
			description: 'A Slayer\'s chain blades forged with Rezakiri trophies.',
			icon: '/assets/icons/weapons/rezakiri/FangsOfDawn.png',
			element: 'Radiant',
			cell: [
				'Technique',
				'Power'
			],
			perk: {
				name: 'Cunning',
				type: 'Technique'
			},
			effect: '10% chance for attacks to Hit twice.',
			map: 135,
			DBmap: 67
		},
		{
			type: 'Chain Blades',
			id: 'Riftstalker',
			name: 'Stalker\'s Trap',
			description: 'A Slayer\'s chain blades forged with Riftstalker trophies.',
			icon: '/assets/icons/weapons/riftstalker/StalkersTrap.png',
			element: 'Umbral',
			cell: [
				'Technique',
				'Utility'
			],
			perk: {
				name: 'Wild Frenzy',
				type: 'Technique'
			},
			effect: 'Dealing damage has a chance (based on damage dealt) to generate a shadow orb that increases damage dealt by 2.5% for 5 seconds. If 5 or more orbs are present, the bonus doubles.',
			map: 136,
			DBmap: 74
		},
		{
			type: 'Chain Blades',
			id: 'Shrike',
			name: 'Flight of the Shrike',
			description: 'A Slayer\'s chain blades forged with Shrike trophies.',
			icon: '/assets/icons/weapons/shrike/FlightOfTheShrike.png',
			element: 'Neutral',
			cell: [
				'Technique',
				'Mobility'
			],
			perk: {
				name: 'Conditioning',
				type: 'Mobility'
			},
			effect: '+100 part damage on next hit after a dodge.',
			map: 137,
			DBmap: 77
		},
		{
			type: 'Chain Blades',
			id: 'Shrowd',
			name: 'Eyes of Night',
			description: 'A Slayer\'s chain blades forged with Shrowd trophies.',
			icon: '/assets/icons/weapons/shrowd/EyesOfNight.png',
			element: 'Umbral',
			cell: [
				'Technique',
				'Utility'
			],
			perk: {
				name: 'Cunning',
				type: 'Technique'
			},
			effect: 'When under 20% health, deal +50% damage',
			map: 138,
			DBmap: 80
		},
		{
			type: 'Chain Blades',
			id: 'Skarn',
			name: 'Skarn\'s Malice',
			description: 'A Slayer\'s chain blades forged with Skarn trophies.',
			icon: '/assets/icons/weapons/skarn/SkarnsMalice.png',
			element: 'Terra',
			cell: [
				'Technique',
				'Defence'
			],
			perk: {
				name: 'Weighted Strikes',
				type: 'Technique'
			},
			effect: 'Dealing damage has a chance (based on damage dealt) to grant a stacking, refreshing 40 health shield that lasts for 12s',
			map: 139,
			DBmap: 87
		},
		{
			type: 'Chain Blades',
			id: 'Skraev',
			name: 'Winter Winds',
			description: 'A Slayer\'s chain blades forged with Skraev trophies.',
			icon: '/assets/icons/weapons/skraev/WinterWinds.png',
			element: 'Frost',
			cell: [
				'Technique',
				'Mobility'
			],
			perk: {
				name: 'Nimble',
				type: 'Mobility'
			},
			effect: 'Evading drops 3 Ice Mines on a 30 second cooldown.',
			map: 140,
			DBmap: 95
		},
		{
			type: 'Chain Blades',
			id: 'Stormclaw',
			name: 'Storm Blades',
			description: 'A Slayer\'s chain blades forged with Stormclaw trophies.',
			icon: '/assets/icons/weapons/stormclaw/StormBlades.png',
			element: 'Shock',
			cell: [
				'Technique',
				'Mobility'
			],
			perk: {
				name: 'Energized',
				type: 'Utility'
			},
			effect: 'After dodging through an attack, the next weapon attack has 500% meter gain',
			map: 141,
			DBmap: 96
		},
		{
			type: 'Chain Blades',
			id: 'Valomyr',
			name: 'Valomyr\'s Revenge',
			description: 'A Slayer\'s chain blades forged with Valomyr trophies.',
			icon: '/assets/icons/weapons/valomyr/ValomyrsRevenge.png',
			element: 'Radiant',
			cell: [
				'Power',
				'Utility'
			],
			perk: {
				name: 'Aetherhunter',
				type: 'Power'
			},
			effect: 'Once charged, your next attack will deal 550 bonus radiant damage. Charge rate increases with current health.',
			map: 142,
			DBmap: 105
		}
	],
	[
		{
			type: 'Hammer',
			id: 'Boreus',
			name: 'Brutality of Boreus',
			description: 'A Slayer\'s hammer forged with Boreus trophies.',
			icon: '/assets/icons/weapons/boreus/BrutalityOfBoreus.png',
			element: 'Frost',
			cell: [
				'Power',
				'Defence'
			],
			perk: {
				name: 'Conditioning',
				type: 'Mobility'
			},
			effect: 'Using Ammo generates a Frost Sprite that cause your next attack to deal 50 bonus damage and minor frost damage. Max 4 Sprites. ',
			map: 143,
			DBmap: 1
		},
		{
			type: 'Hammer',
			id: 'Charrogg',
			name: 'Charred Crusher',
			description: 'A Slayer\'s hammer forged with Charrogg trophies.',
			icon: '/assets/icons/weapons/charrogg/CharredCrusher.png',
			element: 'Blaze',
			cell: [
				'Power',
				'Defence'
			],
			perk: {
				name: 'Aetherhunter',
				type: 'Power'
			},
			effect: 0,
			map: 144,
			DBmap: 8
		},
		{
			type: 'Hammer',
			id: 'Charrogg Exotic',
			name: 'Molten Edict',
			description: 'The Molten Edict is a craftable Exotic weapon in Dauntless. It is crafted from Firebrand Charrogg reagents.',
			icon: '/assets/icons/weapons/charrogg/MoltenEdict.png',
			element: 'Blaze',
			cell: [
				'Power',
				'Defence'
			],
			perk: {
				name: 'None',
				type: 'None'
			},
			effect: 'Replaces all hammer blasts with unique fireball abilities that deal blaze damage.',
			map: 145,
			DBmap: 11
		},
		{
			type: 'Hammer',
			id: 'Drask',
			name: 'Thundering Maul',
			description: 'A Slayer\'s hammer forged with Drask trophies.',
			icon: '/assets/icons/weapons/drask/ThunderingMaul.png',
			element: 'Shock',
			cell: [
				'Power',
				'Defence'
			],
			perk: {
				name: 'Aetheric Attunement',
				type: 'Utility'
			},
			effect: '30% damage vs Behemoth Heads',
			map: 146,
			DBmap: 14
		},
		{
			type: 'Hammer',
			id: 'Embermane',
			name: 'Ember Maul',
			description: 'A Slayer\'s hammer forged with Embermane trophies.',
			icon: '/assets/icons/weapons/embermane/EmberMaul.png',
			element: 'Blaze',
			cell: [
				'Power',
				'Mobility'
			],
			perk: {
				name: 'Evasive Fury',
				type: 'Technique'
			},
			effect: 'The fifth hit in a row deals +150% stagger damage',
			map: 147,
			DBmap: 19
		},
		{
			type: 'Hammer',
			id: 'Recruit\'s',
			name: 'Recruit\'s Hammer',
			description: 'A Slayer Recruit\'s hammer.',
			icon: '/assets/icons/weapons/generic/RecruitsHammer.png',
			element: 'Neutral',
			cell: [
				'None',
				'None'
			],
			perk: {
				name: 'None',
				type: 'None'
			},
			effect: 0,
			map: 148,
			DBmap: 24
		},
		{
			type: 'Hammer',
			id: 'Gnasher',
			name: 'Raging Crash',
			description: 'A Slayer\'s hammer forged with Gnasher trophies.',
			icon: '/assets/icons/weapons/gnasher/RagingCrash.png',
			element: 'Neutral',
			cell: [
				'Power',
				'Utility'
			],
			perk: {
				name: 'Ragehunter',
				type: 'Power'
			},
			effect: 0,
			map: 149,
			DBmap: 31
		},
		{
			type: 'Hammer',
			id: 'Hellion',
			name: 'Inferno\'s Burden',
			description: 'A Slayer\'s hammer forged with Hellion trophies.',
			icon: '/assets/icons/weapons/hellion/InfernosBurden.png',
			element: 'Blaze',
			cell: [
				'Power',
				'Power'
			],
			perk: {
				name: 'Overpower',
				type: 'Power'
			},
			effect: 'The sixth hit in quick succession deals 250 bonus damage and major blaze damage',
			map: 150,
			DBmap: 35
		},
		{
			type: 'Hammer',
			id: 'Kharabak',
			name: 'Kharabak\'s Jaw',
			description: 'A Slayer\'s hammer forged with Kharabak trophies.',
			icon: '/assets/icons/weapons/kharabak/KharabaksJaw.png',
			element: 'Terra',
			cell: [
				'Power',
				'Technique'
			],
			perk: {
				name: 'Deconstruction',
				type: 'Power'
			},
			effect: 'Restore 40 Stamina after reloading a shell',
			map: 151,
			DBmap: 40
		},
		{
			type: 'Hammer',
			id: 'Koshai',
			name: 'Sovereign\'s Grudge',
			description: 'A Slayer\'s hammer forged with Koshai trophies.',
			icon: '/assets/icons/weapons/koshai/SovereignsGrudge.png',
			element: 'Terra',
			cell: [
				'Power',
				'Utility'
			],
			perk: {
				name: 'Sharpened',
				type: 'Power'
			},
			effect: 'After not dealing damage for 6 seconds, the next 2 attacks deal 25% increased damage.',
			map: 152,
			DBmap: 44
		},
		{
			type: 'Hammer',
			id: 'Nayzaga',
			name: 'Nayzaga\'s Charge',
			description: 'A Slayer\'s hammer forged with Nayzaga trophies.',
			icon: '/assets/icons/weapons/nayzaga/NayzagasCharge.png',
			element: 'Shock',
			cell: [
				'Power',
				'Utility'
			],
			perk: {
				name: 'Savagery',
				type: 'Technique'
			},
			effect: 'Heal for 300 whenever a Behemoth is staggered.',
			map: 153,
			DBmap: 49
		},
		{
			type: 'Hammer',
			id: 'Pangar',
			name: 'Pangar\'s Rampage',
			description: 'A Slayer\'s hammer forged with Pangar trophies.',
			icon: '/assets/icons/weapons/pangar/PangarsRampage.png',
			element: 'Frost',
			cell: [
				'Power',
				'Defence'
			],
			perk: {
				name: 'Knockout King',
				type: 'Power'
			},
			effect: 0,
			map: 154,
			DBmap: 57
		},
		{
			type: 'Hammer',
			id: 'Quillshot',
			name: 'Quillshot\'s Roar',
			description: 'A Slayer\'s hammer forged with Quillshot trophies.',
			icon: '/assets/icons/weapons/quillshot/QuillshotsRoar.png',
			element: 'Neutral',
			cell: [
				'Power',
				'Defence'
			],
			perk: {
				name: 'Acidic',
				type: 'Technique'
			},
			effect: 0,
			map: 155,
			DBmap: 62
		},
		{
			type: 'Hammer',
			id: 'Rezakiri',
			name: 'Break of Dawn',
			description: 'A Slayer\'s hammer forged with Rezakiri trophies.',
			icon: '/assets/icons/weapons/rezakiri/BreakOfDawn.png',
			element: 'Radiant',
			cell: [
				'Power',
				'Mobility'
			],
			perk: {
				name: 'Cunning',
				type: 'Technique'
			},
			effect: '10% chance for attacks to Hit twice.',
			map: 156,
			DBmap: 64
		},
		{
			type: 'Hammer',
			id: 'Riftstalker',
			name: 'Stalker\'s Price',
			description: 'A Slayer\'s hammer forged with Riftstalker trophies.',
			icon: '/assets/icons/weapons/riftstalker/StalkersPrice.png',
			element: 'Umbral',
			cell: [
				'Technique',
				'Utility'
			],
			perk: {
				name: 'Wild Frenzy',
				type: 'Technique'
			},
			effect: 'Dealing damage has a chance (based on damage dealt) to generate a shadow orb that increases damage dealt by 2.5% for 5 seconds. If 5 or more orbs are present, the bonus doubles.',
			map: 157,
			DBmap: 71
		},
		{
			type: 'Hammer',
			id: 'Shrike',
			name: 'Fall of the Shrike',
			description: 'A Slayer\'s hammer forged with Shrike trophies.',
			icon: '/assets/icons/weapons/shrike/FallOfTheShrike.png',
			element: 'Neutral',
			cell: [
				'Power',
				'Mobility'
			],
			perk: {
				name: 'Conditioning',
				type: 'Mobility'
			},
			effect: '+100 part damage on next hit after a dodge.',
			map: 158,
			DBmap: 76
		},
		{
			type: 'Hammer',
			id: 'Shrowd',
			name: 'Fall of Night',
			description: 'A Slayer\'s hammer forged with Shrowd trophies.',
			icon: '/assets/icons/weapons/shrowd/FallOfNight.png',
			element: 'Umbral',
			cell: [
				'Power',
				'Utility'
			],
			perk: {
				name: 'Cunning',
				type: 'Technique'
			},
			effect: 'When under 20% health, deal +50% damage',
			map: 159,
			DBmap: 81
		},
		{
			type: 'Hammer',
			id: 'Skarn',
			name: 'Skarn\'s Vengeance',
			description: 'A Slayer\'s hammer forged with Skarn trophies.',
			icon: '/assets/icons/weapons/skarn/SkarnsVengeance.png',
			element: 'Terra',
			cell: [
				'Power',
				'Defence'
			],
			perk: {
				name: 'Knockout King',
				type: 'Power'
			},
			effect: 'Dealing damage has a chance (based on damage dealt) to grant a stacking, refreshing 40 health shield that lasts for 12s',
			map: 160,
			DBmap: 90
		},
		{
			type: 'Hammer',
			id: 'Skraev',
			name: 'Winter Squall',
			description: 'A Slayer\'s hammer forged with Skraev trophies.',
			icon: '/assets/icons/weapons/skraev/WinterSquall.png',
			element: 'Frost',
			cell: [
				'Power',
				'Mobility'
			],
			perk: {
				name: 'Nimble',
				type: 'Mobility'
			},
			effect: 'Evading drops 3 Ice Mines on a 30 second cooldown.',
			map: 161,
			DBmap: 93
		},
		{
			type: 'Hammer',
			id: 'Stormclaw',
			name: 'Storm Hammer',
			description: 'A Slayer\'s hammer forged with Stormclaw trophies.',
			icon: '/assets/icons/weapons/stormclaw/StormHammer.png',
			element: 'Shock',
			cell: [
				'Power',
				'Mobility'
			],
			perk: {
				name: 'Aetheric Attunement',
				type: 'Utility'
			},
			effect: 'Reloads 3 hammer ammo after dodging through an attack',
			map: 162,
			DBmap: 98
		},
		{
			type: 'Hammer',
			id: 'Valomyr',
			name: 'Valomyr\'s Burden',
			description: 'A Slayer\'s hammer forged with Valomyr trophies.',
			icon: '/assets/icons/weapons/valomyr/ValomyrsBurden.png',
			element: 'Radiant',
			cell: [
				'Power',
				'Utility'
			],
			perk: {
				name: 'Aetherhunter',
				type: 'Power'
			},
			effect: 'Once charged, your next attack will deal 550 bonus radiant damage. Charge rate increases with current health.',
			map: 163,
			DBmap: 101
		}
	],
	[
		{
			type: 'Repeater',
			id: 'Ostian',
			name: 'Repeater',
			description: 'An Ostian Repeater.',
			icon: '/assets/icons/weapons/generic/Repeater.png',
			element: 'Neutral',
			cell: [
				'Technique',
				'Mobility'
			],
			perk: {
				name: 'None',
				type: 'None'
			},
			effect: 0,
			map: 164,
			DBmap: 27
		},
		{
			type: 'Repeater',
			id: 'Exotic',
			name: 'The Twin Suns',
			description: 'Exotic Repeaters.',
			icon: '/assets/icons/weapons/generic/TheTwinSuns.png',
			element: 'Neutral',
			cell: [
				'Technique',
				'Mobility'
			],
			perk: {
				name: 'None',
				type: 'None'
			},
			effect: 'Dash in a direction, becoming invulnerable for the duration. After dodging through an attack, fire 6 mini-shots that always crit. While in Mag Bomb mode, fires 2 Mag Bombs instead.',
			map: 165,
			DBmap: 106
		}
	],
	[
		{
			type: 'Sword',
			id: 'Boreus',
			name: 'Onus of Boreus',
			description: 'A Slayer\'s sword forged with Boreus trophies.',
			icon: '/assets/icons/weapons/boreus/OnusOfBoreus.png',
			element: 'Frost',
			cell: [
				'Power',
				'Defence'
			],
			perk: {
				name: 'Conditioning',
				type: 'Mobility'
			},
			effect: 'Using a Special continually generates Frost Sprites that cause your next attack to deal 50 bonus damage and minor frost damage. Max 4 Sprites.',
			map: 166,
			DBmap: 3
		},
		{
			type: 'Sword',
			id: 'Charrogg',
			name: 'Charred Saber',
			description: 'A Slayer\'s sword forged with Charrogg trophies.',
			icon: '/assets/icons/weapons/charrogg/CharredSaber.png',
			element: 'Blaze',
			cell: [
				'Power',
				'Defence'
			],
			perk: {
				name: 'Aetherhunter',
				type: 'Power'
			},
			effect: 0,
			map: 167,
			DBmap: 9
		},
		{
			type: 'Sword',
			id: 'Drask',
			name: 'Thundering Blade',
			description: 'A Slayer\'s sword forged with Drask trophies.',
			icon: '/assets/icons/weapons/drask/ThunderingBlade.png',
			element: 'Shock',
			cell: [
				'Power',
				'Utility'
			],
			perk: {
				name: 'Aetheric Attunement',
				type: 'Utility'
			},
			effect: '30% damage vs Behemoth Tails',
			map: 168,
			DBmap: 12
		},
		{
			type: 'Sword',
			id: 'Embermane',
			name: 'Ember Cutlass',
			description: 'A Slayer\'s sword forged with Embermane trophies.',
			icon: '/assets/icons/weapons/embermane/EmberCutlass.png',
			element: 'Blaze',
			cell: [
				'Technique',
				'Mobility'
			],
			perk: {
				name: 'Evasive Fury',
				type: 'Technique'
			},
			effect: 'The seventh hit in a row deals +250% part damage',
			map: 169,
			DBmap: 18
		},
		{
			type: 'Sword',
			id: 'Recruit\'s',
			name: 'Recruit\'s Sword',
			description: 'A Simple blade for slaying behemoths.',
			icon: '/assets/icons/weapons/generic/RecruitsSword.png',
			element: 'Neutral',
			cell: [
				'None',
				'None'
			],
			perk: {
				name: 'None',
				type: 'None'
			},
			effect: 0,
			map: 170,
			DBmap: 25
		},
		{
			type: 'Sword',
			id: 'Recruit\'s',
			name: 'Training Sword',
			description: 'A dull and tarnished training blade.',
			icon: '/assets/icons/weapons/generic/TrainingSword.png',
			element: 'Neutral',
			cell: [
				'None',
				'None'
			],
			perk: {
				name: 'None',
				type: 'None'
			},
			effect: 0,
			map: 171,
			DBmap: 28
		},
		{
			type: 'Sword',
			id: 'Gnasher',
			name: 'Raging Blade',
			description: 'A Slayer\'s sword forged with Gnasher trophies.',
			icon: '/assets/icons/weapons/gnasher/RagingBlade.png',
			element: 'Neutral',
			cell: [
				'Utility',
				'Defence'
			],
			perk: {
				name: 'Ragehunter',
				type: 'Power'
			},
			effect: 0,
			map: 172,
			DBmap: 30
		},
		{
			type: 'Sword',
			id: 'Hellion',
			name: 'Inferno\'s Razor',
			description: 'A Slayer\'s sword forged with Hellion trophies.',
			icon: '/assets/icons/weapons/hellion/InfernosRazor.png',
			element: 'Blaze',
			cell: [
				'Power',
				'Power'
			],
			perk: {
				name: 'Overpower',
				type: 'Power'
			},
			effect: 'The eighth hit in quick succession deals 250 bonus damage and major blaze damage',
			map: 173,
			DBmap: 38
		},
		{
			type: 'Sword',
			id: 'Kharabak',
			name: 'Kharabak\'s Spur',
			description: 'A Slayer\'s sword forged with Kharabak trophies.',
			icon: '/assets/icons/weapons/kharabak/KharabaksSpur.png',
			element: 'Terra',
			cell: [
				'Technique',
				'Mobility'
			],
			perk: {
				name: 'Bladestorm',
				type: 'Technique'
			},
			effect: 0,
			map: 174,
			DBmap: 41
		},
		{
			type: 'Sword',
			id: 'Koshai',
			name: 'Sovereign\'s Torment',
			description: 'A Slayer\'s sword forged with Koshai trophies.',
			icon: '/assets/icons/weapons/koshai/SovereignsTorment.png',
			element: 'Terra',
			cell: [
				'Power',
				'Utility'
			],
			perk: {
				name: 'Sharpened',
				type: 'Power'
			},
			effect: 'After not dealing damage for 6 seconds, the next 4 attacks deal 25% increased damage.',
			map: 175,
			DBmap: 47
		},
		{
			type: 'Sword',
			id: 'Nayzaga',
			name: 'Nayzaga\'s Razor',
			description: 'A Slayer\'s sword forged with Nayzaga trophies.',
			icon: '/assets/icons/weapons/nayzaga/NayzagasRazor.png',
			element: 'Shock',
			cell: [
				'Utility',
				'Mobility'
			],
			perk: {
				name: 'Barbed',
				type: 'Technique'
			},
			effect: '+5% lifesteal vs wounded parts',
			map: 176,
			DBmap: 51
		},
		{
			type: 'Sword',
			id: 'Pangar',
			name: 'Pangar\'s Call',
			description: 'A Slayer\'s sword forged with Pangar trophies.',
			icon: '/assets/icons/weapons/pangar/PangarsCall.png',
			element: 'Frost',
			cell: [
				'Power',
				'Defence'
			],
			perk: {
				name: 'Knockout King',
				type: 'Power'
			},
			effect: 0,
			map: 177,
			DBmap: 54
		},
		{
			type: 'Sword',
			id: 'Quillshot',
			name: 'Quillshot\'s Tusk',
			description: 'A Slayer\'s sword forged with Quillshot trophies.',
			icon: '/assets/icons/weapons/quillshot/QuillshotsTusk.png',
			element: 'Neutral',
			cell: [
				'Technique',
				'Defence'
			],
			perk: {
				name: 'Acidic',
				type: 'Technique'
			},
			effect: 0,
			map: 178,
			DBmap: 63
		},
		{
			type: 'Sword',
			id: 'Rezakiri',
			name: 'Call of Dawn',
			description: 'A Slayer\'s sword forged with Rezakiri trophies.',
			icon: '/assets/icons/weapons/rezakiri/CallOfDawn.png',
			element: 'Radiant',
			cell: [
				'Technique',
				'Utility'
			],
			perk: {
				name: 'Cunning',
				type: 'Technique'
			},
			effect: '10% chance for attacks to Hit twice.',
			map: 179,
			DBmap: 65
		},
		{
			type: 'Sword',
			id: 'Riftstalker',
			name: 'Stalker\'s Strike',
			description: 'A Slayer\'s sword forged with Riftstalker trophies.',
			icon: '/assets/icons/weapons/riftstalker/StalkersStrike.png',
			element: 'Umbral',
			cell: [
				'Technique',
				'Utility'
			],
			perk: {
				name: 'Wild Frenzy',
				type: 'Technique'
			},
			effect: 'Dealing damage has a chance (based on damage dealt) to generate a shadow orb that increases damage dealt by 2.5% for 5 seconds. If 5 or more orbs are present, the bonus doubles.',
			map: 180,
			DBmap: 73
		},
		{
			type: 'Sword',
			id: 'Shrike',
			name: 'Cry of the Shrike',
			description: 'A Slayer\'s sword forged with Shrike trophies.',
			icon: '/assets/icons/weapons/shrike/CryOfTheShrike.png',
			element: 'Neutral',
			cell: [
				'Mobility',
				'Mobility'
			],
			perk: {
				name: 'Conditioning',
				type: 'Mobility'
			},
			effect: '+100 part damage on next hit after a dodge.',
			map: 181,
			DBmap: 75
		},
		{
			type: 'Sword',
			id: 'Shrowd Exotic',
			name: 'The Hunger',
			description: 'The Hunger is a craftable Exotic weapon in Dauntless. It is crafted from Shrowd reagents.',
			icon: '/assets/icons/weapons/shrowd/TheHunger.png',
			element: 'Umbral',
			cell: [
				'Power',
				'Utility'
			],
			perk: {
				name: 'None',
				type: 'None'
			},
			effect: 'Activate to enter Feast, taking damage over time but gaining significant lifesteal, attack speed, and creating aetheric waves with each attack that deal area damage.',
			map: 182,
			DBmap: 84
		},
		{
			type: 'Sword',
			id: 'Shrowd',
			name: 'Verge of Night',
			description: 'A Slayer\'s sword forged with Shrowd trophies.',
			icon: '/assets/icons/weapons/shrowd/VergeOfNight.png',
			element: 'Umbral',
			cell: [
				'Power',
				'Utility'
			],
			perk: {
				name: 'Cunning',
				type: 'Technique'
			},
			effect: 'When under 20% health, deal +50% damage',
			map: 183,
			DBmap: 85
		},
		{
			type: 'Sword',
			id: 'Skarn',
			name: 'Skarn\'s Rancor',
			description: 'A Slayer\'s sword forged with Skarn trophies.',
			icon: '/assets/icons/weapons/skarn/SkarnsRancor.png',
			element: 'Terra',
			cell: [
				'Power',
				'Defence'
			],
			perk: {
				name: 'Knockout King',
				type: 'Power'
			},
			effect: 'Dealing damage has a chance (based on damage dealt) to grant a stacking, refreshing 40 health shield that lasts for 12s',
			map: 184,
			DBmap: 88
		},
		{
			type: 'Sword',
			id: 'Skraev',
			name: 'Winter Ice',
			description: 'A Slayer\'s sword forged with Skraev trophies.',
			icon: '/assets/icons/weapons/skraev/WinterIce.png',
			element: 'Frost',
			cell: [
				'Technique',
				'Mobility'
			],
			perk: {
				name: 'Nimble',
				type: 'Mobility'
			},
			effect: 'Evading drops 3 Ice Mines on a 30 second cooldown.',
			map: 185,
			DBmap: 92
		},
		{
			type: 'Sword',
			id: 'Stormclaw',
			name: 'Storm Sword',
			description: 'A Slayer\'s sword forged with Stormclaw trophies.',
			icon: '/assets/icons/weapons/stormclaw/StormSword.png',
			element: 'Shock',
			cell: [
				'Technique',
				'Mobility'
			],
			perk: {
				name: 'Energized',
				type: 'Utility'
			},
			effect: 'After dodging through an attack, the next weapon attack has 500% meter gain',
			map: 186,
			DBmap: 100
		},
		{
			type: 'Sword',
			id: 'Valomyr',
			name: 'Valomyr\'s Regard',
			description: 'A Slayer\'s sword forged with Valomyr trophies.',
			icon: '/assets/icons/weapons/valomyr/ValomyrsRegard.png',
			element: 'Radiant',
			cell: [
				'Power',
				'Utility'
			],
			perk: {
				name: 'Aetherhunter',
				type: 'Power'
			},
			effect: 'Once charged, your next attack will deal 550 bonus radiant damage. Charge rate increases with current health.',
			map: 187,
			DBmap: 104
		}
	],
	[
		{
			type: 'War Pike',
			id: 'Boreus',
			name: 'Revolution of Boreus',
			description: 'A Slayer\'s war pike forged with Boreus trophies.',
			icon: '/assets/icons/weapons/boreus/RevolutionOfBoreus.png',
			element: 'Frost',
			cell: [
				'Power',
				'Defence'
			],
			perk: {
				name: 'Conditioning',
				type: 'Mobility'
			},
			effect: 'Using Ammo generates Frost Sprites (base on ammo quality) that cause your next attack to deal 50 bonus damage and minor frost damage. Max 4 Sprites. ',
			map: 188,
			DBmap: 4
		},
		{
			type: 'War Pike',
			id: 'Charrogg',
			name: 'Charred Spear',
			description: 'A Slayer\'s war pike forged with Charrogg trophies.',
			icon: '/assets/icons/weapons/charrogg/CharredSpear.png',
			element: 'Blaze',
			cell: [
				'Technique',
				'Defence'
			],
			perk: {
				name: 'Aetherhunter',
				type: 'Power'
			},
			effect: 0,
			map: 189,
			DBmap: 10
		},
		{
			type: 'War Pike',
			id: 'Drask',
			name: 'Thundering Spear',
			description: 'A Slayer\'s war pike forged with Drask trophies.',
			icon: '/assets/icons/weapons/drask/ThunderingSpear.png',
			element: 'Shock',
			cell: [
				'Technique',
				'Power'
			],
			perk: {
				name: 'Aetheric Attunement',
				type: 'Utility'
			},
			effect: '30% damage vs Behemoth Tails',
			map: 190,
			DBmap: 16
		},
		{
			type: 'War Pike',
			id: 'Embermane',
			name: 'Ember Pike',
			description: 'A Slayer\'s war pike forged with Embermane trophies.',
			icon: '/assets/icons/weapons/embermane/EmberPike.png',
			element: 'Blaze',
			cell: [
				'Technique',
				'Mobility'
			],
			perk: {
				name: 'Evasive Fury',
				type: 'Technique'
			},
			effect: 'The seventh hit in a row deals +300 wound damage',
			map: 191,
			DBmap: 20
		},
		{
			type: 'War Pike',
			id: 'Recruit\'s',
			name: 'Recruit\'s War Pike',
			description: 'A Slayer Recruit\'s war pike.',
			icon: '/assets/icons/weapons/generic/RecruitsWarPike.png',
			element: 'Neutral',
			cell: [
				'None',
				'None'
			],
			perk: {
				name: 'None',
				type: 'None'
			},
			effect: 0,
			map: 192,
			DBmap: 26
		},
		{
			type: 'War Pike',
			id: 'Gnasher',
			name: 'Raging Cruelty',
			description: 'A Slayer\'s war pike forged with Gnasher trophies.',
			icon: '/assets/icons/weapons/gnasher/RagingCruelty.png',
			element: 'Neutral',
			cell: [
				'Technique',
				'Utility'
			],
			perk: {
				name: 'Ragehunter',
				type: 'Power'
			},
			effect: 0,
			map: 193,
			DBmap: 32
		},
		{
			type: 'War Pike',
			id: 'Hellion',
			name: 'Inferno\'s Arrow',
			description: 'A Slayer\'s war pike forged with Hellion trophies.',
			icon: '/assets/icons/weapons/hellion/InfernosArrow.png',
			element: 'Blaze',
			cell: [
				'Power',
				'Power'
			],
			perk: {
				name: 'Overpower',
				type: 'Power'
			},
			effect: 'The eighth hit in quick succession deals 250 bonus damage and major blaze damage',
			map: 194,
			DBmap: 34
		},
		{
			type: 'War Pike',
			id: 'Kharabak',
			name: 'Kharabak\'s Sting',
			description: 'A Slayer\'s war pike forged with Kharabak trophies.',
			icon: '/assets/icons/weapons/kharabak/KharabaksSting.png',
			element: 'Terra',
			cell: [
				'Technique',
				'Mobility'
			],
			perk: {
				name: 'Bladestorm',
				type: 'Technique'
			},
			effect: 0,
			map: 195,
			DBmap: 42
		},
		{
			type: 'War Pike',
			id: 'Koshai',
			name: 'Sovereign\'s Sorrow',
			description: 'A Slayer\'s war pike forged with Koshai trophies.',
			icon: '/assets/icons/weapons/koshai/SovereignsSorrow.png',
			element: 'Terra',
			cell: [
				'Power',
				'Utility'
			],
			perk: {
				name: 'Sharpened',
				type: 'Power'
			},
			effect: 'After not dealing damage for 6 seconds, the next 5 attacks deal 25% increased damage.',
			map: 196,
			DBmap: 46
		},
		{
			type: 'War Pike',
			id: 'Nayzaga',
			name: 'Nayzaga\'s Fang',
			description: 'A Slayer\'s war pike forged with Nayzaga trophies.',
			icon: '/assets/icons/weapons/nayzaga/NayzagasFang.png',
			element: 'Shock',
			cell: [
				'Technique',
				'Utility'
			],
			perk: {
				name: 'Barbed',
				type: 'Technique'
			},
			effect: '+5% lifesteal vs wounded parts',
			map: 197,
			DBmap: 50
		},
		{
			type: 'War Pike',
			id: 'Pangar',
			name: 'Pangar\'s Tooth',
			description: 'A Slayer\'s war pike forged with Pangar trophies.',
			icon: '/assets/icons/weapons/pangar/PangarsTooth.png',
			element: 'Frost',
			cell: [
				'Technique',
				'Defence'
			],
			perk: {
				name: 'Weighted Strikes',
				type: 'Technique'
			},
			effect: 0,
			map: 198,
			DBmap: 58
		},
		{
			type: 'War Pike',
			id: 'Quillshot',
			name: 'Quillshot\'s Javelin',
			description: 'A Slayer\'s war pike forged with Quillshot trophies.',
			icon: '/assets/icons/weapons/quillshot/QuillshotsJavelin.png',
			element: 'Neutral',
			cell: [
				'Technique',
				'Defence'
			],
			perk: {
				name: 'Acidic',
				type: 'Technique'
			},
			effect: 0,
			map: 199,
			DBmap: 61
		},
		{
			type: 'War Pike',
			id: 'Rezakiri',
			name: 'Spire of Dawn',
			description: 'A Slayer\'s war pike forged with Rezakiri trophies.',
			icon: '/assets/icons/weapons/rezakiri/SpireOfDawn.png',
			element: 'Radiant',
			cell: [
				'Technique',
				'Power'
			],
			perk: {
				name: 'Cunning',
				type: 'Technique'
			},
			effect: '10% chance for attacks to Hit twice.',
			map: 200,
			DBmap: 68
		},
		{
			type: 'War Pike',
			id: 'Rezakiri Exotic',
			name: 'The Godhand',
			description: 'The Godhand is a craftable Exotic weapon in Dauntless. It is crafted from Rezakiri reagents.',
			icon: '/assets/icons/weapons/rezakiri/TheGodhand.png',
			element: 'Radiant',
			cell: [
				'Technique',
				'Power'
			],
			perk: {
				name: 'None',
				type: 'None'
			},
			effect: 'Channel a beam that deals increasing damage, up to 200%, while it continues to hit a target.',
			map: 201,
			DBmap: 69
		},
		{
			type: 'War Pike',
			id: 'Riftstalker',
			name: 'Stalker\'s Spike',
			description: 'A Slayer\'s war pike forged with Riftstalker trophies.',
			icon: '/assets/icons/weapons/riftstalker/StalkersSpike.png',
			element: 'Umbral',
			cell: [
				'Technique',
				'Utility'
			],
			perk: {
				name: 'Wild Frenzy',
				type: 'Technique'
			},
			effect: 'Dealing damage has a chance (based on damage dealt) to generate a shadow orb that increases damage dealt by 2.5% for 5 seconds. If 5 or more orbs are present, the bonus doubles.',
			map: 202,
			DBmap: 72
		},
		{
			type: 'War Pike',
			id: 'Shrike',
			name: 'Scream of the Shrike',
			description: 'A Slayer\'s war pike forged with Shrike trophies.',
			icon: '/assets/icons/weapons/shrike/ScreamOfTheShrike.png',
			element: 'Neutral',
			cell: [
				'Technique',
				'Mobility'
			],
			perk: {
				name: 'Conditioning',
				type: 'Mobility'
			},
			effect: '+100 part damage on next hit after a dodge.',
			map: 203,
			DBmap: 78
		},
		{
			type: 'War Pike',
			id: 'Shrowd',
			name: 'Gyre of Night',
			description: 'A Slayer\'s war pike forged with Shrowd trophies.',
			icon: '/assets/icons/weapons/shrowd/GyreOfNight.png',
			element: 'Umbral',
			cell: [
				'Technique',
				'Utility'
			],
			perk: {
				name: 'Cunning',
				type: 'Technique'
			},
			effect: 'When under 20% health, deal +50% damage',
			map: 204,
			DBmap: 82
		},
		{
			type: 'War Pike',
			id: 'Skarn',
			name: 'Skarn\'s Spite',
			description: 'A Slayer\'s war pike forged with Skarn trophies.',
			icon: '/assets/icons/weapons/skarn/SkarnsSpite.png',
			element: 'Terra',
			cell: [
				'Technique',
				'Defence'
			],
			perk: {
				name: 'Weighted Strikes',
				type: 'Technique'
			},
			effect: 'Dealing damage has a chance (based on damage dealt) to grant a stacking, refreshing 40 health shield that lasts for 12s',
			map: 205,
			DBmap: 89
		},
		{
			type: 'War Pike',
			id: 'Skraev',
			name: 'Winter Vortex',
			description: 'A Slayer\'s war pike forged with Skraev trophies.',
			icon: '/assets/icons/weapons/skraev/WinterVortex.png',
			element: 'Frost',
			cell: [
				'Technique',
				'Mobility'
			],
			perk: {
				name: 'Nimble',
				type: 'Mobility'
			},
			effect: 'Evading drops 3 Ice Mines on a 30 second cooldown.',
			map: 206,
			DBmap: 94
		},
		{
			type: 'War Pike',
			id: 'Stormclaw',
			name: 'Storm Pike',
			description: 'A Slayer\'s war pike forged with Stormclaw trophies.',
			icon: '/assets/icons/weapons/stormclaw/StormPike.png',
			element: 'Shock',
			cell: [
				'Technique',
				'Mobility'
			],
			perk: {
				name: 'Energized',
				type: 'Utility'
			},
			effect: 'After dodging through an attack, the next weapon attack has 500% meter gain',
			map: 207,
			DBmap: 99
		},
		{
			type: 'War Pike',
			id: 'Valomyr',
			name: 'Valomyr\'s Hope',
			description: 'A Slayer\'s war pike forged with Valomyr trophies.',
			icon: '/assets/icons/weapons/valomyr/ValomyrsHope.png',
			element: 'Radiant',
			cell: [
				'Power',
				'Utility'
			],
			perk: {
				name: 'Aetherhunter',
				type: 'Power'
			},
			effect: 'Once charged, your next attack will deal 550 bonus radiant damage. Charge rate increases with current health.',
			map: 208,
			DBmap: 103
		}
	]
]