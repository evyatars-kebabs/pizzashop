(()=>{var nh={schemaVersion:1,_comment:"All tunable values. Costs are baseCost * growth^currentLevel to go from currentLevel to currentLevel+1. Times are in seconds.",startingCash:30,bigSaleThreshold:20,time:{dayLengthSeconds:600,startDayClock:.3,offlineCapSeconds:28800,offlineBaseEfficiency:.5,offlineEfficiencyPerStaffRole:.25,autosaveSeconds:10,randomEventMinSeconds:300,randomEventMaxSeconds:600},customers:{spawnBaseSeconds:24,spawnJitter:.3,nightSpawnMult:.6,tipMax:.3,wrongToppingTipMult:.4,wrongToppingPayMult:.9,wrongToppingQuality:.55,angryPenalty:3,types:{hungry:{weight:3,patience:90,tipMult:1},chatty:{weight:2,patience:120,tipMult:1.3},grumpy:{weight:1,patience:45,tipMult:.7}},toppings:["pepperoni","mushroom","olive","basil","pepper"]},styles:{margherita:{basePrice:8,bakeSeconds:10,unlock:{type:"start"},enabled:!0},pepperoni:{basePrice:11,bakeSeconds:10,unlock:{type:"lifetime",value:600},enabled:!0},veggie:{basePrice:10,bakeSeconds:11,unlock:{type:"lifetime",value:2500},enabled:!1},seasonal:{basePrice:14,bakeSeconds:12,unlock:{type:"lifetime",value:8e3},enabled:!1}},pizzaQuality:{payBase:.6,payPerQuality:.6},stages:{autoDoughSeconds:4,autoToppingSeconds:3,autoDoughQuality:.7,autoToppingQuality:.75,autoLoadQuality:.7,perfectBakeQuality:.9,perfectBakeSpeedMult:.85,autoServeDelaySeconds:1},manual:{doughWindowSeconds:8,doughSwipesNeeded:1200,doughRushedQuality:.5,doughFinishMinQuality:.6,toppingCorrectQuality:1,toppingWrongQuality:.55,ovenSweetZone:.18,ovenMinQuality:.6,ovenMarkerPeriodSeconds:1.6,doughKeyStep:110},cashier:{orderSecondsBase:3,orderSpeedPerLevel:.5},cook:{speedPerLevel:.4},upgrades:{oven:{baseCost:40,growth:1.15,maxLevel:120,ovenSlotsBase:1,ovenSlotsPerLevel:1},counter:{baseCost:60,growth:1.15,maxLevel:120,maxQueueBase:3,maxQueuePerLevel:2},cheese:{baseCost:80,growth:1.14,maxLevel:120,cheeseMultPerLevel:.1},decor:{baseCost:120,growth:1.14,maxLevel:120,trafficPerLevel:.05,steps:["flowers","festoon","bunting","table","lanterns","carpet","secondTable","balloons","flags","statue"]},neon:{baseCost:300,growth:1.8,maxLevel:20,trafficPerLevel:.2},scooter:{baseCost:500,growth:2.2,maxLevel:5,enabled:!1,_note:"Delivery scooter: placeholder for post-prototype delivery kid."},marketing:{baseCost:15e4,growth:1.25,maxLevel:40,trafficMultPerLevel:.5,group:"empire",requires:{franchises:1}},pizzaSchool:{baseCost:4e5,growth:1.25,maxLevel:40,payMultPerLevel:.4,group:"empire",requires:{franchises:2}},megaOven:{baseCost:9e5,growth:1.3,maxLevel:30,ovenSlotsPerLevel:2,group:"empire",requires:{franchises:3}},terrace:{baseCost:2e10,growth:1.2,maxLevel:20,group:"city",effect:"traffic",perLevel:.05,requires:{city:"ravenna"}},delivery:{baseCost:2e14,growth:1.2,maxLevel:20,group:"city",effect:"pay",perLevel:.1,requires:{city:"florence"}},trattoria:{baseCost:2e18,growth:1.2,maxLevel:20,group:"city",effect:"oven",perLevel:1,requires:{city:"milan"}},rooftop:{baseCost:2e22,growth:1.2,maxLevel:20,group:"city",effect:"traffic",perLevel:.05,requires:{city:"rome"}},zurichUp:{baseCost:2e26,growth:1.2,maxLevel:20,group:"city",effect:"traffic",perLevel:.05,requires:{city:"zurich"}},monacoUp:{baseCost:2e30,growth:1.2,maxLevel:20,group:"city",effect:"pay",perLevel:.1,requires:{city:"monaco"}},barcelonaUp:{baseCost:2e34,growth:1.2,maxLevel:20,group:"city",effect:"traffic",perLevel:.05,requires:{city:"barcelona"}},madridUp:{baseCost:2e38,growth:1.2,maxLevel:20,group:"city",effect:"oven",perLevel:1,requires:{city:"madrid"}},lisbonUp:{baseCost:2e42,growth:1.2,maxLevel:20,group:"city",effect:"traffic",perLevel:.05,requires:{city:"lisbon"}},parisUp:{baseCost:2e46,growth:1.2,maxLevel:20,group:"city",effect:"traffic",perLevel:.05,requires:{city:"paris"}},brusselsUp:{baseCost:2e50,growth:1.2,maxLevel:20,group:"city",effect:"pay",perLevel:.1,requires:{city:"brussels"}},amsterdamUp:{baseCost:2e54,growth:1.2,maxLevel:20,group:"city",effect:"oven",perLevel:1,requires:{city:"amsterdam"}},londonUp:{baseCost:2e58,growth:1.2,maxLevel:20,group:"city",effect:"pay",perLevel:.1,requires:{city:"london"}},liverpoolUp:{baseCost:2e62,growth:1.2,maxLevel:20,group:"city",effect:"traffic",perLevel:.05,requires:{city:"liverpool"}},berlinUp:{baseCost:2e66,growth:1.2,maxLevel:20,group:"city",effect:"traffic",perLevel:.05,requires:{city:"berlin"}},warsawUp:{baseCost:2e70,growth:1.2,maxLevel:20,group:"city",effect:"oven",perLevel:1,requires:{city:"warsaw"}},minskUp:{baseCost:2e74,growth:1.2,maxLevel:20,group:"city",effect:"oven",perLevel:1,requires:{city:"minsk"}},budapestUp:{baseCost:2e78,growth:1.2,maxLevel:20,group:"city",effect:"pay",perLevel:.1,requires:{city:"budapest"}},zagrebUp:{baseCost:2e82,growth:1.2,maxLevel:20,group:"city",effect:"traffic",perLevel:.05,requires:{city:"zagreb"}},belgradeUp:{baseCost:2e86,growth:1.2,maxLevel:20,group:"city",effect:"pay",perLevel:.1,requires:{city:"belgrade"}},sofiaUp:{baseCost:2e90,growth:1.2,maxLevel:20,group:"city",effect:"oven",perLevel:1,requires:{city:"sofia"}},bucharestUp:{baseCost:2e94,growth:1.2,maxLevel:20,group:"city",effect:"traffic",perLevel:.05,requires:{city:"bucharest"}},istanbulUp:{baseCost:2e98,growth:1.2,maxLevel:20,group:"city",effect:"pay",perLevel:.1,requires:{city:"istanbul"}},athensUp:{baseCost:2e102,growth:1.2,maxLevel:20,group:"city",effect:"oven",perLevel:1,requires:{city:"athens"}},telavivUp:{baseCost:2e106,growth:1.2,maxLevel:20,group:"city",effect:"traffic",perLevel:.05,requires:{city:"telaviv"}}},staff:{cashier:{baseCost:150,growth:1.25,maxLevel:40},cook:{baseCost:250,growth:1.25,maxLevel:40}},prestige:{milestoneLifetimeCash:2e4,pointsDivisor:2e4,bonusPerPoint:.1,_tiersNote:"The stand grows with each franchise. Width/depth are metres; staffVisible is how many employees per role can be seen working; bonuses add to oven slots and queue size.",tiers:[{id:"cart",minFranchises:0,width:4.2,depth:2.6,staffVisible:1,ovenSlotsBonus:0,maxQueueBonus:0,cameraZoom:1,recruitCap:2},{id:"stand",minFranchises:1,width:5.8,depth:3.2,staffVisible:2,ovenSlotsBonus:1,maxQueueBonus:2,cameraZoom:1.16,recruitCap:4},{id:"shop",minFranchises:2,width:7.6,depth:5,staffVisible:3,ovenSlotsBonus:2,maxQueueBonus:4,cameraZoom:1.46,recruitCap:6}],requirementExponent:1.3,_requirementNote:"Each franchise must be earned again. The cash a stand must earn before franchising is milestoneLifetimeCash x (franchises so far + 1) ^ requirementExponent, so it grows steadily instead of exponentially.",trafficPerFranchise:.25,_trafficNote:'Each franchise brings more customers, with no upper limit: spawn rate x (1 + trafficPerFranchise * franchises). Add "trafficMaxMult" here to cap it.',ovenSpeedPerFranchise:.6,minBakeSeconds:1.5,_ovenNote:"Ovens bake faster with each franchise: bake time = style bake time / (1 + ovenSpeedPerFranchise x franchises), never below minBakeSeconds."},events:{rainyDay:{durationSeconds:150,weight:1,spawnMult:1.5,patienceDrainMult:1.25,cashMult:1,styleDemand:{}},foodFestival:{durationSeconds:150,weight:1,spawnMult:1.2,patienceDrainMult:1,cashMult:1.1,styleDemand:{pepperoni:3}},doubleCash:{durationSeconds:120,weight:0,spawnMult:1,patienceDrainMult:1,cashMult:2,styleDemand:{},_note:"Not picked at random (weight 0). Started by the happy-hour mini game."}},goals:[{id:"goal.cashier",condition:{type:"staffLevel",role:"cashier",value:1}},{id:"goal.pepperoni",condition:{type:"lifetime",value:600}},{id:"goal.cook",condition:{type:"staffLevel",role:"cook",value:1}},{id:"goal.neon",condition:{type:"upgradeLevel",upgrade:"neon",value:1}},{id:"goal.franchise",condition:{type:"lifetime",value:2e4}}],tutorial:[{id:"t1",textKey:"tut.1",highlight:"customers",check:{stat:"ordersTaken",gte:1}},{id:"t2",textKey:"tut.2",highlight:"stretch",check:{stat:"manualStretch",gte:1}},{id:"t3",textKey:"tut.3",highlight:"top",check:{stat:"manualTopping",gte:1}},{id:"t4",textKey:"tut.4",highlight:"oven",check:{stat:"manualLoad",gte:1}},{id:"t5",textKey:"tut.5",highlight:"serve",check:{stat:"served",gte:1}},{id:"t6",textKey:"tut.6",highlight:"shop",check:{stat:"upgradesBought",gte:1},ensureCash:{type:"upgrade",key:"oven"}},{id:"t7",textKey:"tut.7",highlight:"shop",check:{stat:"staffHired",gte:1}}],monetizationStubs:{offlineBoostAd:{multiplier:2,placeholderSeconds:1.5},starterPack:{priceLabel:"$2.99",placeholder:!0},ovenSkins:["skin.classic","skin.neon","skin.copper"]},_empireNote:'Empire upgrades (upgrades with group "empire") need a number of franchises before they can be bought, and they reset with each franchise like everything else.',recruit:{requiresFranchises:1,cashier:{baseCost:2500,growth:1.6},cook:{baseCost:3500,growth:1.6},offlineEfficiencyPerRecruit:.02,_note:"Extra employees, bought after franchising. Each one needs the role hired first. Caps per stand size are in prestige.tiers (recruitCap)."},happyHour:{intervalSeconds:480,targets:7,needed:4,spawnEverySeconds:.75,targetLifetimeSeconds:.95,_note:"A tap mini game that becomes available every intervalSeconds of game time. Hitting `needed` of `targets` doubles all money for the event duration."},shops:{maxShops:4,requiresFranchises:1,baseCost:2e5,growth:3,multiplierPerShop:2,_note:"Each extra shop doubles customers, employees, oven capacity and money per second. Shops after the first cost baseCost x growth^(shops already open - 1)."},queueHardCap:40,beginner:{startingCash:60,spawnMult:1.5,payMult:1.25,tutorialSpawnDelaySeconds:1.5,_note:"Easier first time: until the tutorial is finished, customers arrive one at a time and wait patiently, arrive a little less often, and pay more."},earlyFranchises:{count:3,payMult:2,customerMult:2,requirementMult:.5,_note:"Boost for the first few franchises: while fewer than `count` franchises have been done, pay and customers are multiplied, and the amount needed to franchise is multiplied by requirementMult."},cities:{mapUnlockLifetime:1e5,list:[{id:"riccione",order:0,background:"cityRiccione",relocationCost:0,multiplier:1,map:{lat:44,lon:12.65},upgrade:null,decorSteps:["parasol","sandcastle","buoys"]},{id:"ravenna",order:1,background:"cityRavenna",relocationCost:1e12,multiplier:1.5,map:{lat:44.42,lon:12.2},upgrade:"terrace",decorSteps:["mosaic","pottery","candles"],labelPos:"left"},{id:"florence",order:2,background:"cityFlorence",relocationCost:1e16,multiplier:2.5,map:{lat:43.77,lon:11.25},upgrade:"delivery",decorSteps:["lilies","banners","statuette"],labelPos:"left"},{id:"milan",order:3,background:"cityMilan",relocationCost:1e20,multiplier:4,map:{lat:45.46,lon:9.19},upgrade:"trattoria",decorSteps:["chandelier","planters","velvetRope"]},{id:"rome",order:4,background:"cityRome",relocationCost:1e24,multiplier:7,map:{lat:41.9,lon:12.5},upgrade:"rooftop",decorSteps:["fountain","laurels","amphora"]},{id:"zurich",order:5,background:"cityZurich",relocationCost:1e28,multiplier:8,map:{lat:47.37,lon:8.54},upgrade:"zurichUp",decorSteps:["zurich_flags","zurich_planters","zurich_fountain"],labelPos:"above"},{id:"monaco",order:6,background:"cityMonaco",relocationCost:1e32,multiplier:9,map:{lat:43.73,lon:7.42},upgrade:"monacoUp",decorSteps:["monaco_flags","monaco_umbrella","monaco_statue"],labelPos:"below"},{id:"barcelona",order:7,background:"cityBarcelona",relocationCost:1e36,multiplier:10,map:{lat:41.39,lon:2.17},upgrade:"barcelonaUp",decorSteps:["barcelona_banners","barcelona_planters","barcelona_lanterns"],labelPos:"right"},{id:"madrid",order:8,background:"cityMadrid",relocationCost:1e40,multiplier:11,map:{lat:40.42,lon:-3.7},upgrade:"madridUp",decorSteps:["madrid_umbrella","madrid_kiosk","madrid_flags"],labelPos:"left"},{id:"lisbon",order:9,background:"cityLisbon",relocationCost:1e44,multiplier:12,map:{lat:38.72,lon:-9.14},upgrade:"lisbonUp",decorSteps:["lisbon_banners","lisbon_planters","lisbon_lanterns"]},{id:"paris",order:10,background:"cityParis",relocationCost:1e48,multiplier:13,map:{lat:48.86,lon:2.35},upgrade:"parisUp",decorSteps:["paris_flags","paris_umbrella","paris_statue"]},{id:"brussels",order:11,background:"cityBrussels",relocationCost:1e52,multiplier:14,map:{lat:50.85,lon:4.35},upgrade:"brusselsUp",decorSteps:["brussels_banners","brussels_kiosk","brussels_wreath"]},{id:"amsterdam",order:12,background:"cityAmsterdam",relocationCost:1e56,multiplier:15,map:{lat:52.37,lon:4.9},upgrade:"amsterdamUp",decorSteps:["amsterdam_planters","amsterdam_lanterns","amsterdam_flags"]},{id:"london",order:13,background:"cityLondon",relocationCost:1e60,multiplier:16,map:{lat:51.51,lon:-.13},upgrade:"londonUp",decorSteps:["london_flags","london_lanterns","london_statue"],labelPos:"left"},{id:"liverpool",order:14,background:"cityLiverpool",relocationCost:1e64,multiplier:17,map:{lat:53.41,lon:-2.99},upgrade:"liverpoolUp",decorSteps:["liverpool_banners","liverpool_flags","liverpool_planters"],labelPos:"left"},{id:"berlin",order:15,background:"cityBerlin",relocationCost:1e68,multiplier:18,map:{lat:52.52,lon:13.4},upgrade:"berlinUp",decorSteps:["berlin_flags","berlin_umbrella","berlin_dome"]},{id:"warsaw",order:16,background:"cityWarsaw",relocationCost:1e72,multiplier:19,map:{lat:52.23,lon:21.01},upgrade:"warsawUp",decorSteps:["warsaw_banners","warsaw_planters","warsaw_statue"]},{id:"minsk",order:17,background:"cityMinsk",relocationCost:1e76,multiplier:20,map:{lat:53.9,lon:27.56},upgrade:"minskUp",decorSteps:["minsk_banners","minsk_kiosk","minsk_lanterns"]},{id:"budapest",order:18,background:"cityBudapest",relocationCost:1e80,multiplier:21,map:{lat:47.5,lon:19.04},upgrade:"budapestUp",decorSteps:["budapest_lanterns","budapest_dome","budapest_planters"]},{id:"zagreb",order:19,background:"cityZagreb",relocationCost:1e84,multiplier:22,map:{lat:45.81,lon:15.98},upgrade:"zagrebUp",decorSteps:["zagreb_flags","zagreb_umbrella","zagreb_wreath"]},{id:"belgrade",order:20,background:"cityBelgrade",relocationCost:1e88,multiplier:23,map:{lat:44.79,lon:20.45},upgrade:"belgradeUp",decorSteps:["belgrade_banners","belgrade_kiosk","belgrade_planters"]},{id:"sofia",order:21,background:"citySofia",relocationCost:1e92,multiplier:24,map:{lat:42.7,lon:23.32},upgrade:"sofiaUp",decorSteps:["sofia_dome","sofia_lanterns","sofia_statue"]},{id:"bucharest",order:22,background:"cityBucharest",relocationCost:1e96,multiplier:25,map:{lat:44.43,lon:26.1},upgrade:"bucharestUp",decorSteps:["bucharest_flags","bucharest_fountain","bucharest_umbrella"]},{id:"istanbul",order:23,background:"cityIstanbul",relocationCost:1e100,multiplier:26,map:{lat:41.01,lon:28.98},upgrade:"istanbulUp",decorSteps:["istanbul_flags","istanbul_dome","istanbul_lanterns"]},{id:"athens",order:24,background:"cityAthens",relocationCost:1e104,multiplier:27,map:{lat:37.98,lon:23.73},upgrade:"athensUp",decorSteps:["athens_wreath","athens_statue","athens_planters"]},{id:"telaviv",order:25,background:"cityTelaviv",relocationCost:1e108,multiplier:28,map:{lat:32.09,lon:34.78},upgrade:"telavivUp",decorSteps:["telaviv_umbrella","telaviv_banners","telaviv_fountain"],labelPos:"left"}]}};var ih={"app.title":"Slice Street","app.version":"Prototype v0.1","hud.cash":"Cash","hud.rate":"+{rate}/s","hud.goal":"Next: {goal}","hud.goalDone":"All goals done!","hud.paused":"Paused","action.customers":"Order","action.stretch":"Stretch","action.top":"Topping","action.oven":"Oven","action.serve":"Serve","action.shop":"Shop","action.settings":"Settings","action.close":"Close","action.buy":"Buy {cost}","action.maxed":"Max","action.hire":"Hire {cost}","action.upgrade":"Upgrade {cost}","action.collect":"Collect","action.adDouble":"Watch ad: 2x","action.adDoubleHint":"Optional. Ads are always player-initiated.","action.franchise":"Franchise","action.cancel":"Cancel","action.reset":"Reset save","action.confirmReset":"Really erase all progress?","shop.title":"Shop","shop.upgrades":"Upgrades","shop.staff":"Staff","shop.franchise":"Franchise","shop.starterPack":"Starter pack","shop.starterPackDesc":"Placeholder. Not available in the prototype.","shop.ovenSkins":"Oven skins","shop.ovenSkinsDesc":"Cosmetic only. Placeholder list.","upgrade.oven.name":"Bigger oven","upgrade.oven.desc":"Bake {slots} pizzas at once","upgrade.counter.name":"Wider counter","upgrade.counter.desc":"Queue up to {slots} customers","upgrade.cheese.name":"Better cheese","upgrade.cheese.desc":"+{pct}% pizza value","upgrade.decor.name":"Pretty decor","upgrade.decor.desc":"+{pct}% foot traffic{item}","upgrade.neon.name":"Neon sign","upgrade.neon.desc":"+{pct}% foot traffic","upgrade.scooter.name":"Delivery scooter","staff.cashier.name":"Cashier","staff.cashier.desc":"Takes orders and hands out finished pizzas. Order time {secs}s.","staff.cook.name":"Cook","staff.cook.desc":"Stretches dough, adds toppings, loads the oven. Speed x{speed}.","staff.level":"Level {level}","staff.hired":"Working","style.margherita":"Margherita","style.pepperoni":"Pepperoni","style.veggie":"Veggie","style.seasonal":"Seasonal special","topping.pepperoni":"Pepperoni","topping.mushroom":"Mushroom","topping.olive":"Olive","topping.basil":"Basil","topping.pepper":"Pepper","customer.hungry":"Hungry","customer.chatty":"Chatty","customer.grumpy":"Grumpy","customer.name.1":"Dana","customer.name.2":"Mo","customer.name.3":"Priya","customer.name.4":"Sam","customer.name.5":"Ferdi","customer.wants":"Wants {topping}","customer.turnedAway":"Queue full, someone walked off","tut.1":"Tap a customer to take their order.","tut.2":"Stretch the dough: scroll the wheel or tap the arrow keys.","tut.3":"Pick the topping they want, then put it on the pizza.","tut.4":"Load the pizza. Click or press Space when the marker is in the green.","tut.5":"Tap the finished pizza to hand it over.","tut.6":"Nice! Spend some cash in the Shop.","tut.7":"Hire a cashier so orders run themselves.","tut.done":"Tutorial complete. Your stand is on its own now!","mini.dough.title":"Stretch the dough","mini.dough.hint":"Scroll the mouse wheel or tap the left and right arrow keys. Touch: swipe.","mini.top.title":"Add topping","mini.top.hint":"Click a topping, then click the pizza. Keys 1 to 3 pick, Space places.","mini.oven.title":"Slide it in","mini.oven.hint":"Click or press Space when the marker is in the green.","mini.oven.tap":"Tap!","toast.sale":"+{amount}","toast.tip":"+{tip} tip","toast.angry":"{name} left angry (-{penalty})","toast.ovenFull":"Oven is full. Wait for a slot.","toast.noPizza":"Nothing needs that right now.","toast.notEnough":"Not enough cash yet.","toast.eventStart":"{event} started!","toast.eventEnd":"{event} is over.","toast.staffIdle":"{role} is idle. Give them work!","toast.bought":"Bought {item}.","toast.hired":"{role} hired!","toast.comingSoon":"Coming soon (placeholder).","toast.adStub":"Ad placeholder finished.","toast.franchised":"Franchised! Multiplier now x{mult}.","event.rainyDay.name":"Rainy day","event.rainyDay.desc":"More customers, but they are in a hurry.","event.foodFestival.name":"Food festival","event.foodFestival.desc":"Pepperoni demand is through the roof.","collect.title":"Welcome back!","collect.body":"Your stand kept busy for {duration}.","collect.earned":"You earned {amount}","collect.capped":"Away time is capped at {cap}.","collect.boosted":"Doubled with the ad boost.","franchise.title":"Franchise your stand","franchise.explain":"Start again from scratch and keep permanent bonuses. Each franchise adds +{bonus}% cash and +{traffic}% customers for good, and your place grows: cart, then a big stand, then a pizza shop with more staff. Every franchise has to be earned again, and each one needs more than the last.","franchise.resets":"Resets: cash, upgrades, staff, queue, pizzas, and you go back to the corner.","franchise.keeps":"Keeps: franchise points, unlocked pizza styles (recipes), unlocked locations, the tutorial, settings, and lifetime stats.","franchise.gain":"You will gain {points} franchise point(s).","franchise.locked":"Earn {target} at this stand to franchise. So far: {have}.","franchise.points":"Franchise points: {points}","settings.title":"Settings","settings.sound":"Sound","settings.notify":"Notify me (opt-in)","settings.notifyDesc":"Offline earnings and idle staff. Off by default.","settings.version":"Version","stats.lifetime":"Lifetime cash: {amount}","debug.title":"Debug","debug.addCash":"+1,000 cash","debug.addCashBig":"+20,000 cash","debug.skip":"Skip 1 hour","debug.rain":"Trigger rain","debug.festival":"Trigger festival","debug.night":"Toggle time of day","debug.away":"Simulate 8h away","debug.franchiseReady":"Make franchise-ready","debug.resetAll":"Wipe save","debug.close":"Close debug","welcome.step":"Your cart is wobbly, but the lunch crowd is coming.","offline.hint":"Earnings accrue while the app is closed, capped at 8 hours.","goal.cashier":"Hire a cashier","goal.pepperoni":"Unlock pepperoni","goal.cook":"Hire a cook","goal.neon":"Buy a neon sign","goal.franchise":"Reach franchise milestone","toast.customerLeft":"{name} left","action.soon":"Soon","toast.unlocked":"New recipe unlocked: {style}","toast.offlineSaved":"Stand is saved. Come back for offline earnings.","toast.cashDebug":"Added {amount}","staff.notHired":"Not hired","action.move":"Move here","action.locked":"Locked","settings.keys":"Keys: 1 to 6 for the action bar, M mute, Esc closes a window. Click the pizzas and customers directly.","sign.menu.title":"Menu","sign.neon":"Open!","sign.sandwich":"Fresh pizza, hot now!","mini.oven.stopped.good":"Perfect bake!","mini.oven.stopped.miss":"Close enough. It still bakes.","decor.step.flowers":"flower boxes","decor.step.festoon":"festoon lights","decor.step.bunting":"bunting","decor.step.table":"a bistro table","decor.step.lanterns":"lanterns","decor.step.carpet":"a red carpet","decor.step.secondTable":"a second table and olive trees","decor.step.balloons":"balloons","decor.step.flags":"rooftop flags","decor.step.statue":"a golden pizza","toast.decorAdded":"New decoration: {item}","tier.cart":"Pizza cart","tier.stand":"Big pizza stand","tier.shop":"Pizza shop","franchise.next":"Next: {tier}","franchise.now":"Now: {tier}","toast.tierUp":"Your place grew into: {tier}","sign.franchise":"Franchise {count}","staff.visible":"Up to {count} visible at this place","settings.graphics":"Graphics","settings.graphicsDesc":"Auto lowers detail if the game runs slowly.","settings.graphics.auto":"Auto","settings.graphics.high":"High","settings.graphics.low":"Low","franchise.ready":"Ready to franchise.","franchise.nextCost":"The next franchise will need {target} earned at the new stand.","toast.franchiseReady":"You can franchise now!","franchise.traffic":"Customers: +{pct}% from franchises.","franchise.trafficNext":"After this franchise: +{pct}% customers.","shop.empire":"Empire","shop.empireDesc":"Big upgrades that open up only after franchising. Each franchise resets them, like everything else.","shop.needsFranchise":"Needs {n} franchise(s)","upgrade.marketing.name":"Empire marketing","upgrade.marketing.desc":"+{pct}% customers on top of everything else","upgrade.pizzaSchool.name":"Pizza school","upgrade.pizzaSchool.desc":"+{pct}% pizza value","upgrade.megaOven.name":"Industrial ovens","upgrade.megaOven.desc":"Bake {slots} more pizzas at once","franchise.ovens":"Ovens: x{x} speed.","settings.look":"Art style","settings.lookDesc":"3D is the full look. 2D is flat storybook art, same game.","settings.look.3d":"3D","settings.look.2d":"2D","shop.recruit":"Recruit extra staff","shop.recruitLocked":"Franchise once to recruit extra staff.","recruit.cashier.name":"Extra cashier","recruit.cook.name":"Extra cook","recruit.cashier.desc":"Each extra cashier takes orders at the same time. Recruited: {n} of {max}.","recruit.cook.desc":"Each extra cook works on a different pizza at the same time. Recruited: {n} of {max}.","recruit.needHire":"Hire a {role} first.","action.recruit":"Recruit {cost}","toast.recruited":"Recruited an extra {role}.","bonus.label":"Happy hour","mini.happy.title":"Happy hour","mini.happy.hint":"Tap the gold coins before they fade. Get {needed} to double all money for 2 minutes.","mini.happy.count":"Coins: {hits} of {total}","mini.happy.coin":"Gold coin","mini.happy.win":"Happy hour! Double money for 2 minutes.","mini.happy.miss":"So close! Come back in a few minutes.","toast.bonusReady":"Happy hour is ready. Look for the x2 button.","event.doubleCash.name":"Double money","event.doubleCash.desc":"Every sale pays double.","shop.shops":"More shops","shop.openShop":"Open another shop","shop.shopsDesc":"Each shop doubles your customers, employees and money per second. Open: {open} of {max}. Each extra shop doubles again.","shop.shopsLocked":"Franchise {n} time(s) to open another shop.","shop.allOpen":"All shops are open.","action.open":"Open {cost}","toast.shopOpened":"Shop {n} is open! Customers now split between your shops.","sign.shop":"Shop {n}","tut.locked":"Not yet. Follow the tutorial banner first.","tut.progress":"Tutorial {n} of {total}.","action.hireFree":"Hire free","action.buyN":"Buy {n} \xB7 {cost}","action.amountMax":"Max","toast.boughtN":"Bought {n} \xD7 {item}.","franchise.early":"Early bonus: x{pay} pay and x{customers} customers, and {need}% less to earn for your first franchises.","action.map":"Map","city.riccione.name":"Riccione","city.riccione.desc":"A small seaside town. Every franchise starts here.","city.ravenna.name":"Ravenna","city.ravenna.desc":"A small historic town of mosaics and brick houses.","city.florence.name":"Florence","city.florence.desc":"A medium city of stone palazzi and busy markets.","city.milan.name":"Milan","city.milan.desc":"A big city of tall towers and fast lunches.","city.rome.name":"Rome","city.rome.desc":"The capital: ancient stone, domes and a crowd that never stops.","decor.step.parasol":"a beach umbrella","decor.step.sandcastle":"a sandcastle","decor.step.buoys":"painted buoys","decor.step.mosaic":"a mosaic arch","decor.step.pottery":"painted pots of basil","decor.step.candles":"candle lanterns","decor.step.lilies":"lily planters","decor.step.banners":"hanging banners","decor.step.statuette":"a bronze statuette","decor.step.chandelier":"a crystal chandelier","decor.step.planters":"tall planters","decor.step.velvetRope":"a velvet rope","decor.step.fountain":"a fountain","decor.step.laurels":"a laurel wreath","decor.step.amphora":"an amphora","upgrade.terrace.name":"Terrace seating","upgrade.terrace.desc":"+{pct}% foot traffic","upgrade.delivery.name":"Delivery bikes","upgrade.delivery.desc":"+{pct}% pizza value","upgrade.trattoria.name":"Trattoria ovens","upgrade.trattoria.desc":"Bake {slots} more pizzas at once","upgrade.rooftop.name":"Rooftop terrace","upgrade.rooftop.desc":"+{pct}% foot traffic","shop.cities":"Cities","shop.citiesDesc":"You are in {city}. Open the map to travel.","shop.cityUpgrades":"City upgrades","shop.cityUpgradesNone":"Reach a city to unlock its upgrades.","map.title":"Map","map.intro":"Your stands travel with you. Decorations come down when you move, but the decor upgrade stays, so you can put them back for free.","map.open":"Open map","map.here":"Here now","map.visited":"Visited","map.next":"Next city","map.locked":"Locked","map.multiplier":"\xD7{mult} income","map.requires":"Costs {cost} to move here.","map.needCash":"Not enough cash for the move ({cost}).","map.buy":"Move for {cost}","map.travel":"Travel (free)","map.unlocksUpgrade":"Unlocks: {upgrade}","map.notNext":"Reach the cities in order.","map.decorTitle":"Decorations","map.packed":"{n} decorations are packed up in {city}.","map.decorAll":"All your decorations are up.","map.decorate":"Decorate again (free)","map.decorFull":"Nothing to put back.","toast.cityMoved":"Welcome to {city}!","toast.decorBack":"Decorations are back up.","city.zurich.name":"Zurich","city.zurich.desc":"A clean lakeside city of clocks, chocolate and quiet lunches.","upgrade.zurichUp.name":"Chocolate counter","upgrade.zurichUp.desc":"+{pct}% foot traffic","decor.step.zurich_flags":"red flags","decor.step.zurich_planters":"clock-tower planters","decor.step.zurich_fountain":"a lake fountain","city.monaco.name":"Monaco","city.monaco.desc":"A tiny harbour principality where the yachts order at noon.","upgrade.monacoUp.name":"Yacht-club terrace","upgrade.monacoUp.desc":"+{pct}% pizza value","decor.step.monaco_flags":"harbour flags","decor.step.monaco_umbrella":"yacht-deck parasols","decor.step.monaco_statue":"a gilded statue","city.barcelona.name":"Barcelona","city.barcelona.desc":"Mosaic facades, late dinners and a street that never sleeps.","upgrade.barcelonaUp.name":"Tapas bar","upgrade.barcelonaUp.desc":"+{pct}% foot traffic","decor.step.barcelona_banners":"tiled banners","decor.step.barcelona_planters":"mosaic planters","decor.step.barcelona_lanterns":"wrought-iron lanterns","city.madrid.name":"Madrid","city.madrid.desc":"Wide boulevards, caf\xE9 terraces and a crowd that eats at ten.","upgrade.madridUp.name":"Late-night kitchen","upgrade.madridUp.desc":"Bake {slots} more pizzas at once","decor.step.madrid_umbrella":"caf\xE9 parasols","decor.step.madrid_kiosk":"a churros kiosk","decor.step.madrid_flags":"crown flags","city.lisbon.name":"Lisbon","city.lisbon.desc":"Hills, trams and tiled walls painted blue and white.","upgrade.lisbonUp.name":"Tram-stop stall","upgrade.lisbonUp.desc":"+{pct}% foot traffic","decor.step.lisbon_banners":"azulejo banners","decor.step.lisbon_planters":"tiled planters","decor.step.lisbon_lanterns":"tram-style lanterns","city.paris.name":"Paris","city.paris.desc":"Grand avenues, zinc rooftops and a caf\xE9 on every corner.","upgrade.parisUp.name":"Caf\xE9 terrace","upgrade.parisUp.desc":"+{pct}% foot traffic","decor.step.paris_flags":"tricolour flags","decor.step.paris_umbrella":"caf\xE9 parasols","decor.step.paris_statue":"a bronze statue","city.brussels.name":"Brussels","city.brussels.desc":"Guild halls, chocolate shops and waffles by the hundred.","upgrade.brusselsUp.name":"Waffle press","upgrade.brusselsUp.desc":"+{pct}% pizza value","decor.step.brussels_banners":"guild banners","decor.step.brussels_kiosk":"a waffle kiosk","decor.step.brussels_wreath":"a flower wreath","city.amsterdam.name":"Amsterdam","city.amsterdam.desc":"Narrow canal houses, bikes at every door and tulips in season.","upgrade.amsterdamUp.name":"Canal-boat kitchen","upgrade.amsterdamUp.desc":"Bake {slots} more pizzas at once","decor.step.amsterdam_planters":"tulip planters","decor.step.amsterdam_lanterns":"canal lanterns","decor.step.amsterdam_flags":"canal flags","city.london.name":"London","city.london.desc":"Red buses, black cabs and a lunch rush that starts at eleven.","upgrade.londonUp.name":"Pub partnership","upgrade.londonUp.desc":"+{pct}% pizza value","decor.step.london_flags":"Union flags","decor.step.london_lanterns":"black lanterns","decor.step.london_statue":"a bronze figure","city.liverpool.name":"Liverpool","city.liverpool.desc":"A river port with bold brick streets and loud match-day crowds.","upgrade.liverpoolUp.name":"Match-day menu","upgrade.liverpoolUp.desc":"+{pct}% foot traffic","decor.step.liverpool_banners":"football banners","decor.step.liverpool_flags":"club flags","decor.step.liverpool_planters":"hedge planters","city.berlin.name":"Berlin","city.berlin.desc":"Wide streets, beer gardens and a skyline of old and new.","upgrade.berlinUp.name":"Beer-garden seating","upgrade.berlinUp.desc":"+{pct}% foot traffic","decor.step.berlin_flags":"yellow flags","decor.step.berlin_umbrella":"beer-garden parasols","decor.step.berlin_dome":"a small dome","city.warsaw.name":"Warsaw","city.warsaw.desc":"A city rebuilt stone by stone, full of bakeries and parks.","upgrade.warsawUp.name":"Pierogi bake shelf","upgrade.warsawUp.desc":"Bake {slots} more pizzas at once","decor.step.warsaw_banners":"crimson banners","decor.step.warsaw_planters":"garden planters","decor.step.warsaw_statue":"a stone statue","city.minsk.name":"Minsk","city.minsk.desc":"Wide green avenues, park benches and fresh rye bread.","upgrade.minskUp.name":"Bread-oven hall","upgrade.minskUp.desc":"Bake {slots} more pizzas at once","decor.step.minsk_banners":"green banners","decor.step.minsk_kiosk":"a bread kiosk","decor.step.minsk_lanterns":"park lanterns","city.budapest.name":"Budapest","city.budapest.desc":"Thermal baths, domed palaces and bridges lit at night.","upgrade.budapestUp.name":"Thermal spa lounge","upgrade.budapestUp.desc":"+{pct}% pizza value","decor.step.budapest_lanterns":"bridge lights","decor.step.budapest_dome":"a copper dome","decor.step.budapest_planters":"riverside planters","city.zagreb.name":"Zagreb","city.zagreb.desc":"A cosy old town of caf\xE9s, red roofs and a funicular.","upgrade.zagrebUp.name":"Old-town tables","upgrade.zagrebUp.desc":"+{pct}% foot traffic","decor.step.zagreb_flags":"checkered flags","decor.step.zagreb_umbrella":"old-town parasols","decor.step.zagreb_wreath":"a laurel wreath","city.belgrade.name":"Belgrade","city.belgrade.desc":"Riverside fortress, grill smoke and a caf\xE9 that never closes.","upgrade.belgradeUp.name":"Kafana grill","upgrade.belgradeUp.desc":"+{pct}% pizza value","decor.step.belgrade_banners":"blue banners","decor.step.belgrade_kiosk":"a grill kiosk","decor.step.belgrade_planters":"fig planters","city.sofia.name":"Sofia","city.sofia.desc":"A green capital under Vitosha mountain, with domes and gardens.","upgrade.sofiaUp.name":"Market shelf","upgrade.sofiaUp.desc":"Bake {slots} more pizzas at once","decor.step.sofia_dome":"a small dome","decor.step.sofia_lanterns":"garden lanterns","decor.step.sofia_statue":"a stone statue","city.bucharest.name":"Bucharest","city.bucharest.desc":"Grand boulevards, palaces and fountains in every square.","upgrade.bucharestUp.name":"Boulevard kiosk","upgrade.bucharestUp.desc":"+{pct}% foot traffic","decor.step.bucharest_flags":"blue-and-yellow flags","decor.step.bucharest_fountain":"a boulevard fountain","decor.step.bucharest_umbrella":"boulevard parasols","city.istanbul.name":"Istanbul","city.istanbul.desc":"Two continents, a bazaar and a skyline of domes and minarets.","upgrade.istanbulUp.name":"Bazaar delivery","upgrade.istanbulUp.desc":"+{pct}% pizza value","decor.step.istanbul_flags":"crescent flags","decor.step.istanbul_dome":"a mosque dome","decor.step.istanbul_lanterns":"bazaar lanterns","city.athens.name":"Athens","city.athens.desc":"Ancient stone under a bright sky, with tavernas on every street.","upgrade.athensUp.name":"Taverna oven","upgrade.athensUp.desc":"Bake {slots} more pizzas at once","decor.step.athens_wreath":"an olive wreath","decor.step.athens_statue":"a marble statue","decor.step.athens_planters":"olive planters","city.telaviv.name":"Tel Aviv","city.telaviv.desc":"Sea breeze, white Bauhaus blocks and the beach by the caf\xE9.","upgrade.telavivUp.name":"Beachfront tables","upgrade.telavivUp.desc":"+{pct}% foot traffic","decor.step.telaviv_umbrella":"beach umbrellas","decor.step.telaviv_banners":"sea-blue banners","decor.step.telaviv_fountain":"a plaza fountain","settings.theme":"Theme","settings.themeDesc":"Light or dark colours for the menus and the stand screen.","settings.theme.light":"Light","settings.theme.dark":"Dark","settings.theme.system":"System"};var sh=["cityRiccione","cityRavenna","cityFlorence","cityMilan","cityRome","cityZurich","cityMonaco","cityBarcelona","cityMadrid","cityLisbon","cityParis","cityBrussels","cityAmsterdam","cityLondon","cityLiverpool","cityBerlin","cityWarsaw","cityMinsk","cityBudapest","cityZagreb","cityBelgrade","citySofia","cityBucharest","cityIstanbul","cityAthens","cityTelaviv"];var rh={id:"cityRiccione",nameKey:"city.riccione.name",descKey:"city.riccione.desc",unlock:{type:"city"},economy:{trafficMult:1,styleDemand:{}},_note:"Street behind the stand for this city. Generated from the corner street; the stand and its stations are laid out in code.",queueStart:[-2.2,0,4.4],queueStep:[.78,0,.9],queueRowLength:4,camera:{position:[0,6.6,12.8],target:[0,1.45,.7],fov:46},props:[{type:"road",z:-8,width:7},{type:"tree",pos:[-17,0,-12.4],scale:.95},{type:"tree",pos:[-10.5,0,-12.4],scale:.95},{type:"tree",pos:[-3.5,0,-12.4],scale:.95},{type:"tree",pos:[3.5,0,-12.4],scale:.95},{type:"tree",pos:[10,0,-12.4],scale:.95},{type:"tree",pos:[17,0,-12.4],scale:.95},{type:"car",pos:[-8.5,0,-5.6],color:"#d8402f",rot:0},{type:"car",pos:[8.8,0,-5.6],color:"#3d9a8b",rot:0},{type:"lamp",pos:[-6.2,0,-3.4],light:!0},{type:"lamp",pos:[6,0,-3.4],light:!0},{type:"lamp",pos:[-11.5,0,-3.4]},{type:"lamp",pos:[12,0,-3.4]},{type:"tree",pos:[-7.2,0,1.2],scale:1.05},{type:"tree",pos:[8.2,0,2.2],scale:1},{type:"bush",pos:[-8.6,0,3.4]},{type:"bush",pos:[9.4,0,4.6]},{type:"bench",pos:[6.6,0,5.6]},{type:"bin",pos:[-5.8,0,3.6]},{type:"hydrant",pos:[4.9,0,-3.5]},{type:"planter",pos:[-5.4,0,6.2]},{type:"planter",pos:[5.6,0,7.4]},{type:"sandwichBoard",pos:[1.9,0,6.6]},{type:"building",pos:[-31.2,0,-16.2],size:[6,4.3,6],color:"#f6d8a8",awning:"#2f7d6a"},{type:"building",pos:[-24.8,0,-16.2],size:[4.7,4.5,6],color:"#f2a7a0",awning:"#d8402f"},{type:"building",pos:[-18.1,0,-16.2],size:[4.7,5.1,6],color:"#a8dadc",awning:"#4a6fa5"},{type:"building",pos:[-12.2,0,-16.2],size:[5.8,4.8,6],color:"#f7e7b5",awning:"#2f7d6a"},{type:"building",pos:[-6.4,0,-16.2],size:[4.8,4.8,6],color:"#bfe3d0",awning:"#d8402f"},{type:"building",pos:[.1,0,-16.2],size:[5.5,4.6,6],color:"#f9c8b0",awning:"#4a6fa5"},{type:"building",pos:[6.6,0,-16.2],size:[5,6,6],color:"#f6d8a8",awning:"#2f7d6a"},{type:"building",pos:[12.3,0,-16.2],size:[5.5,4.8,6],color:"#f2a7a0",awning:"#d8402f"},{type:"building",pos:[18.8,0,-16.2],size:[5.4,4.7,6],color:"#a8dadc",awning:"#4a6fa5"},{type:"building",pos:[24.6,0,-16.2],size:[5.5,5.4,6],color:"#f7e7b5",awning:"#2f7d6a"},{type:"building",pos:[30.6,0,-16.2],size:[4.6,6.2,6],color:"#bfe3d0",awning:"#d8402f"},{type:"stall",pos:[-5.4,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"}]};var oh={id:"cityRavenna",nameKey:"city.ravenna.name",descKey:"city.ravenna.desc",unlock:{type:"city"},economy:{trafficMult:1,styleDemand:{}},_note:"Street behind the stand for this city. Generated from the corner street; the stand and its stations are laid out in code.",queueStart:[-2.2,0,4.4],queueStep:[.78,0,.9],queueRowLength:4,camera:{position:[0,6.6,12.8],target:[0,1.45,.7],fov:46},props:[{type:"road",z:-8,width:7},{type:"tree",pos:[-17,0,-12.4],scale:.95},{type:"tree",pos:[-10.5,0,-12.4],scale:.95},{type:"tree",pos:[-3.5,0,-12.4],scale:.95},{type:"tree",pos:[3.5,0,-12.4],scale:.95},{type:"tree",pos:[10,0,-12.4],scale:.95},{type:"tree",pos:[17,0,-12.4],scale:.95},{type:"car",pos:[-8.5,0,-5.6],color:"#d8402f",rot:0},{type:"car",pos:[8.8,0,-5.6],color:"#3d9a8b",rot:0},{type:"lamp",pos:[-6.2,0,-3.4],light:!0},{type:"lamp",pos:[6,0,-3.4],light:!0},{type:"lamp",pos:[-11.5,0,-3.4]},{type:"lamp",pos:[12,0,-3.4]},{type:"tree",pos:[-7.2,0,1.2],scale:1.05},{type:"tree",pos:[8.2,0,2.2],scale:1},{type:"bush",pos:[-8.6,0,3.4]},{type:"bush",pos:[9.4,0,4.6]},{type:"bench",pos:[6.6,0,5.6]},{type:"bin",pos:[-5.8,0,3.6]},{type:"hydrant",pos:[4.9,0,-3.5]},{type:"planter",pos:[-5.4,0,6.2]},{type:"planter",pos:[5.6,0,7.4]},{type:"sandwichBoard",pos:[1.9,0,6.6]},{type:"building",pos:[-40.8,0,-16.2],size:[5.9,9.1,6],color:"#d9a07a",awning:"#2f7d6a"},{type:"building",pos:[-34,0,-16.2],size:[6.1,8.7,6],color:"#c97b5a",awning:"#8c3b2e"},{type:"building",pos:[-27.5,0,-16.2],size:[5.2,6.1,6],color:"#e7c9a0",awning:"#e9a23b"},{type:"building",pos:[-20,0,-16.2],size:[6.1,6.2,6],color:"#b5654a",awning:"#2f7d6a"},{type:"building",pos:[-13.1,0,-16.2],size:[5.9,8.4,6],color:"#f0d2a6",awning:"#8c3b2e"},{type:"building",pos:[-7.1,0,-16.2],size:[5.8,8.3,6],color:"#d9a07a",awning:"#e9a23b"},{type:"building",pos:[.2,0,-16.2],size:[5.3,9.4,6],color:"#c97b5a",awning:"#2f7d6a"},{type:"building",pos:[6.8,0,-16.2],size:[6.1,7,6],color:"#e7c9a0",awning:"#8c3b2e"},{type:"building",pos:[13.3,0,-16.2],size:[5.4,7.4,6],color:"#b5654a",awning:"#e9a23b"},{type:"building",pos:[20.6,0,-16.2],size:[5.9,7.2,6],color:"#f0d2a6",awning:"#2f7d6a"},{type:"building",pos:[26.8,0,-16.2],size:[5.4,8.4,6],color:"#d9a07a",awning:"#8c3b2e"},{type:"building",pos:[33.5,0,-16.2],size:[5.3,8.3,6],color:"#c97b5a",awning:"#e9a23b"},{type:"building",pos:[40.2,0,-16.2],size:[5.9,6.4,6],color:"#e7c9a0",awning:"#2f7d6a"},{type:"stall",pos:[-5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"}]};var ah={id:"cityFlorence",nameKey:"city.florence.name",descKey:"city.florence.desc",unlock:{type:"city"},economy:{trafficMult:1,styleDemand:{}},_note:"Street behind the stand for this city. Generated from the corner street; the stand and its stations are laid out in code.",queueStart:[-2.2,0,4.4],queueStep:[.78,0,.9],queueRowLength:4,camera:{position:[0,6.6,12.8],target:[0,1.45,.7],fov:46},props:[{type:"road",z:-8,width:7},{type:"tree",pos:[-17,0,-12.4],scale:.95},{type:"tree",pos:[-10.5,0,-12.4],scale:.95},{type:"tree",pos:[-3.5,0,-12.4],scale:.95},{type:"tree",pos:[3.5,0,-12.4],scale:.95},{type:"tree",pos:[10,0,-12.4],scale:.95},{type:"tree",pos:[17,0,-12.4],scale:.95},{type:"car",pos:[-8.5,0,-5.6],color:"#d8402f",rot:0},{type:"car",pos:[8.8,0,-5.6],color:"#3d9a8b",rot:0},{type:"lamp",pos:[-6.2,0,-3.4],light:!0},{type:"lamp",pos:[6,0,-3.4],light:!0},{type:"lamp",pos:[-11.5,0,-3.4]},{type:"lamp",pos:[12,0,-3.4]},{type:"tree",pos:[-7.2,0,1.2],scale:1.05},{type:"tree",pos:[8.2,0,2.2],scale:1},{type:"bush",pos:[-8.6,0,3.4]},{type:"bush",pos:[9.4,0,4.6]},{type:"bench",pos:[6.6,0,5.6]},{type:"bin",pos:[-5.8,0,3.6]},{type:"hydrant",pos:[4.9,0,-3.5]},{type:"planter",pos:[-5.4,0,6.2]},{type:"planter",pos:[5.6,0,7.4]},{type:"sandwichBoard",pos:[1.9,0,6.6]},{type:"building",pos:[-48.8,0,-16.2],size:[6.7,13.3,6],color:"#e7d3a7",awning:"#4a6fa5"},{type:"building",pos:[-41.6,0,-16.2],size:[7.4,10,6],color:"#d9b98a",awning:"#8c3b2e"},{type:"building",pos:[-34.5,0,-16.2],size:[7.5,11.3,6],color:"#c9a77a",awning:"#2f7d6a"},{type:"building",pos:[-27.4,0,-16.2],size:[7.3,9.3,6],color:"#eadbbd",awning:"#4a6fa5"},{type:"building",pos:[-21.1,0,-16.2],size:[8,10.2,6],color:"#d4b08a",awning:"#8c3b2e"},{type:"building",pos:[-13.9,0,-16.2],size:[6.5,10.4,6],color:"#e7d3a7",awning:"#2f7d6a"},{type:"building",pos:[-7.3,0,-16.2],size:[7.7,11.9,6],color:"#d9b98a",awning:"#4a6fa5"},{type:"building",pos:[.2,0,-16.2],size:[6.6,11.9,6],color:"#c9a77a",awning:"#8c3b2e"},{type:"building",pos:[6.7,0,-16.2],size:[6.7,12.4,6],color:"#eadbbd",awning:"#2f7d6a"},{type:"building",pos:[13.8,0,-16.2],size:[7.8,9.1,6],color:"#d4b08a",awning:"#4a6fa5"},{type:"building",pos:[20.8,0,-16.2],size:[7.3,12.7,6],color:"#e7d3a7",awning:"#8c3b2e"},{type:"building",pos:[28.1,0,-16.2],size:[6.1,9.4,6],color:"#d9b98a",awning:"#2f7d6a"},{type:"building",pos:[34.5,0,-16.2],size:[6.1,9.7,6],color:"#c9a77a",awning:"#4a6fa5"},{type:"building",pos:[41.6,0,-16.2],size:[6.2,11.7,6],color:"#eadbbd",awning:"#8c3b2e"},{type:"building",pos:[48.9,0,-16.2],size:[6.9,10.3,6],color:"#d4b08a",awning:"#2f7d6a"}]};var ch={id:"cityMilan",nameKey:"city.milan.name",descKey:"city.milan.desc",unlock:{type:"city"},economy:{trafficMult:1,styleDemand:{}},_note:"Street behind the stand for this city. Generated from the corner street; the stand and its stations are laid out in code.",queueStart:[-2.2,0,4.4],queueStep:[.78,0,.9],queueRowLength:4,camera:{position:[0,6.6,12.8],target:[0,1.45,.7],fov:46},props:[{type:"road",z:-8,width:7},{type:"car",pos:[-8.5,0,-5.6],color:"#d8402f",rot:0},{type:"car",pos:[8.8,0,-5.6],color:"#3d9a8b",rot:0},{type:"lamp",pos:[-6.2,0,-3.4],light:!0},{type:"lamp",pos:[6,0,-3.4],light:!0},{type:"lamp",pos:[-11.5,0,-3.4]},{type:"lamp",pos:[12,0,-3.4]},{type:"bush",pos:[-8.6,0,3.4]},{type:"bush",pos:[9.4,0,4.6]},{type:"bench",pos:[6.6,0,5.6]},{type:"bin",pos:[-5.8,0,3.6]},{type:"hydrant",pos:[4.9,0,-3.5]},{type:"planter",pos:[-5.4,0,6.2]},{type:"planter",pos:[5.6,0,7.4]},{type:"sandwichBoard",pos:[1.9,0,6.6]},{type:"building",pos:[-66.3,0,-16.2],size:[8.4,24.1,6],color:"#9fb4c7",awning:"#2f3238"},{type:"building",pos:[-59.2,0,-16.2],size:[7,20.3,6],color:"#c9d3dc",awning:"#4a6fa5"},{type:"building",pos:[-51.9,0,-16.2],size:[6,18.5,6],color:"#8aa0b5",awning:"#577590"},{type:"building",pos:[-44.4,0,-16.2],size:[7.1,25.1,6],color:"#b8c2cc",awning:"#2f3238"},{type:"building",pos:[-37,0,-16.2],size:[6.9,24.5,6],color:"#d7dde3",awning:"#4a6fa5"},{type:"building",pos:[-29.7,0,-16.2],size:[7.6,21.6,6],color:"#7d93a8",awning:"#577590"},{type:"building",pos:[-21.7,0,-16.2],size:[8,23.1,6],color:"#9fb4c7",awning:"#2f3238"},{type:"building",pos:[-14.6,0,-16.2],size:[6.7,20,6],color:"#c9d3dc",awning:"#4a6fa5"},{type:"building",pos:[-7.6,0,-16.2],size:[7.4,24.1,6],color:"#8aa0b5",awning:"#577590"},{type:"building",pos:[-.1,0,-16.2],size:[6.4,17.4,6],color:"#b8c2cc",awning:"#2f3238"},{type:"building",pos:[7.3,0,-16.2],size:[6.4,18.5,6],color:"#d7dde3",awning:"#4a6fa5"},{type:"building",pos:[14.9,0,-16.2],size:[7.5,16.4,6],color:"#7d93a8",awning:"#577590"},{type:"building",pos:[22.5,0,-16.2],size:[8.2,17,6],color:"#9fb4c7",awning:"#2f3238"},{type:"building",pos:[29.4,0,-16.2],size:[6.8,19,6],color:"#c9d3dc",awning:"#4a6fa5"},{type:"building",pos:[37.2,0,-16.2],size:[7.7,22.3,6],color:"#8aa0b5",awning:"#577590"},{type:"building",pos:[44.4,0,-16.2],size:[7.3,23.2,6],color:"#b8c2cc",awning:"#2f3238"},{type:"building",pos:[51.2,0,-16.2],size:[8,24.4,6],color:"#d7dde3",awning:"#4a6fa5"},{type:"building",pos:[59.1,0,-16.2],size:[6.1,22.4,6],color:"#7d93a8",awning:"#577590"},{type:"building",pos:[66,0,-16.2],size:[6.5,16.2,6],color:"#9fb4c7",awning:"#2f3238"}]};var lh={id:"cityRome",nameKey:"city.rome.name",descKey:"city.rome.desc",unlock:{type:"city"},economy:{trafficMult:1,styleDemand:{}},_note:"Street behind the stand for this city. Generated from the corner street; the stand and its stations are laid out in code.",queueStart:[-2.2,0,4.4],queueStep:[.78,0,.9],queueRowLength:4,camera:{position:[0,6.6,12.8],target:[0,1.45,.7],fov:46},props:[{type:"road",z:-8,width:7},{type:"tree",pos:[-17,0,-12.4],scale:.95},{type:"tree",pos:[-10.5,0,-12.4],scale:.95},{type:"tree",pos:[-3.5,0,-12.4],scale:.95},{type:"tree",pos:[3.5,0,-12.4],scale:.95},{type:"tree",pos:[10,0,-12.4],scale:.95},{type:"tree",pos:[17,0,-12.4],scale:.95},{type:"car",pos:[-8.5,0,-5.6],color:"#d8402f",rot:0},{type:"car",pos:[8.8,0,-5.6],color:"#3d9a8b",rot:0},{type:"lamp",pos:[-6.2,0,-3.4],light:!0},{type:"lamp",pos:[6,0,-3.4],light:!0},{type:"lamp",pos:[-11.5,0,-3.4]},{type:"lamp",pos:[12,0,-3.4]},{type:"tree",pos:[-7.2,0,1.2],scale:1.05},{type:"tree",pos:[8.2,0,2.2],scale:1},{type:"bush",pos:[-8.6,0,3.4]},{type:"bush",pos:[9.4,0,4.6]},{type:"bench",pos:[6.6,0,5.6]},{type:"bin",pos:[-5.8,0,3.6]},{type:"hydrant",pos:[4.9,0,-3.5]},{type:"planter",pos:[-5.4,0,6.2]},{type:"planter",pos:[5.6,0,7.4]},{type:"sandwichBoard",pos:[1.9,0,6.6]},{type:"building",pos:[-69.5,0,-16.2],size:[7.5,18.6,6],color:"#e8c9a0",awning:"#8c3b2e"},{type:"building",pos:[-60.5,0,-16.2],size:[8.2,11.1,6],color:"#d9b48c",awning:"#d8402f"},{type:"building",pos:[-52.1,0,-16.2],size:[8.2,18.4,6],color:"#f0dcb8",awning:"#2f7d6a"},{type:"building",pos:[-43.7,0,-16.2],size:[8.6,19.2,6],color:"#c9a27a",awning:"#8c3b2e"},{type:"building",pos:[-35.1,0,-16.2],size:[9.9,13.7,6],color:"#e3c7a1",awning:"#d8402f"},{type:"building",pos:[-25.7,0,-16.2],size:[9.8,19.5,6],color:"#e8c9a0",awning:"#2f7d6a"},{type:"building",pos:[-17.3,0,-16.2],size:[7.5,12,6],color:"#d9b48c",awning:"#8c3b2e"},{type:"building",pos:[-8.7,0,-16.2],size:[9.2,11.9,6],color:"#f0dcb8",awning:"#d8402f"},{type:"building",pos:[17,0,-16.2],size:[9.4,12.9,6],color:"#e8c9a0",awning:"#d8402f"},{type:"building",pos:[26.5,0,-16.2],size:[9.4,16.6,6],color:"#d9b48c",awning:"#2f7d6a"},{type:"building",pos:[34.9,0,-16.2],size:[8.3,11.8,6],color:"#f0dcb8",awning:"#8c3b2e"},{type:"building",pos:[43.9,0,-16.2],size:[8.9,13.4,6],color:"#c9a27a",awning:"#d8402f"},{type:"building",pos:[51.8,0,-16.2],size:[9.8,14.7,6],color:"#e3c7a1",awning:"#2f7d6a"},{type:"building",pos:[61,0,-16.2],size:[8.6,18.1,6],color:"#e8c9a0",awning:"#8c3b2e"},{type:"building",pos:[70,0,-16.2],size:[9.4,15,6],color:"#d9b48c",awning:"#d8402f"},{type:"dome",pos:[-3.5,0,-16.2],radius:3.2,height:4.2},{type:"dome",pos:[11.5,0,-16.2],radius:3.2,height:4.2}]};var hh={id:"cityZurich",nameKey:"city.zurich.name",descKey:"city.zurich.desc",unlock:{type:"city"},economy:{trafficMult:1,styleDemand:{}},_note:"Street behind the stand for this city. Generated from the corner street; the stand and its stations are laid out in code.",queueStart:[-2.2,0,4.4],queueStep:[.78,0,.9],queueRowLength:4,camera:{position:[0,6.6,12.8],target:[0,1.45,.7],fov:46},props:[{type:"road",z:-8,width:7},{type:"tree",pos:[-17,0,-12.4],scale:.95},{type:"tree",pos:[-10.5,0,-12.4],scale:.95},{type:"tree",pos:[-3.5,0,-12.4],scale:.95},{type:"tree",pos:[3.5,0,-12.4],scale:.95},{type:"tree",pos:[10,0,-12.4],scale:.95},{type:"tree",pos:[17,0,-12.4],scale:.95},{type:"car",pos:[-8.5,0,-5.6],color:"#d8402f",rot:0},{type:"car",pos:[8.8,0,-5.6],color:"#3d9a8b",rot:0},{type:"lamp",pos:[-6.2,0,-3.4],light:!0},{type:"lamp",pos:[6,0,-3.4],light:!0},{type:"lamp",pos:[-11.5,0,-3.4]},{type:"lamp",pos:[12,0,-3.4]},{type:"tree",pos:[-7.2,0,1.2],scale:1.05},{type:"tree",pos:[8.2,0,2.2],scale:1},{type:"bush",pos:[-8.6,0,3.4]},{type:"bush",pos:[9.4,0,4.6]},{type:"bench",pos:[6.6,0,5.6]},{type:"bin",pos:[-5.8,0,3.6]},{type:"hydrant",pos:[4.9,0,-3.5]},{type:"planter",pos:[-5.4,0,6.2]},{type:"planter",pos:[5.6,0,7.4]},{type:"sandwichBoard",pos:[1.9,0,6.6]},{type:"stall",pos:[-5.4,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"building",pos:[-32.6,0,-16.2],size:[6.2,6.7,6],color:"#e6e2d6",awning:"#2f7d6a"},{type:"building",pos:[-25.8,0,-16.2],size:[5.1,6.7,6],color:"#c9d3c4",awning:"#d8402f"},{type:"building",pos:[-19.7,0,-16.2],size:[5.9,5.6,6],color:"#f0ead8",awning:"#4a6fa5"},{type:"building",pos:[-12.8,0,-16.2],size:[5,6.3,6],color:"#e6e2d6",awning:"#8c3b2e"},{type:"building",pos:[-6.1,0,-16.2],size:[4.8,5.7,6],color:"#c9d3c4",awning:"#e9a23b"},{type:"building",pos:[.2,0,-16.2],size:[5.3,7.1,6],color:"#f0ead8",awning:"#2f7d6a"},{type:"building",pos:[6.6,0,-16.2],size:[6.1,6.3,6],color:"#e6e2d6",awning:"#d8402f"},{type:"building",pos:[13.5,0,-16.2],size:[5.1,5.7,6],color:"#c9d3c4",awning:"#4a6fa5"},{type:"building",pos:[19.5,0,-16.2],size:[5.3,8,6],color:"#f0ead8",awning:"#8c3b2e"},{type:"building",pos:[26.5,0,-16.2],size:[5.8,7.7,6],color:"#e6e2d6",awning:"#e9a23b"},{type:"building",pos:[32.5,0,-16.2],size:[5.1,7.4,6],color:"#c9d3c4",awning:"#2f7d6a"}]};var uh={id:"cityMonaco",nameKey:"city.monaco.name",descKey:"city.monaco.desc",unlock:{type:"city"},economy:{trafficMult:1,styleDemand:{}},_note:"Street behind the stand for this city. Generated from the corner street; the stand and its stations are laid out in code.",queueStart:[-2.2,0,4.4],queueStep:[.78,0,.9],queueRowLength:4,camera:{position:[0,6.6,12.8],target:[0,1.45,.7],fov:46},props:[{type:"road",z:-8,width:7},{type:"tree",pos:[-17,0,-12.4],scale:.95},{type:"tree",pos:[-10.5,0,-12.4],scale:.95},{type:"tree",pos:[-3.5,0,-12.4],scale:.95},{type:"tree",pos:[3.5,0,-12.4],scale:.95},{type:"tree",pos:[10,0,-12.4],scale:.95},{type:"tree",pos:[17,0,-12.4],scale:.95},{type:"car",pos:[-8.5,0,-5.6],color:"#d8402f",rot:0},{type:"car",pos:[8.8,0,-5.6],color:"#3d9a8b",rot:0},{type:"lamp",pos:[-6.2,0,-3.4],light:!0},{type:"lamp",pos:[6,0,-3.4],light:!0},{type:"lamp",pos:[-11.5,0,-3.4]},{type:"lamp",pos:[12,0,-3.4]},{type:"tree",pos:[-7.2,0,1.2],scale:1.05},{type:"tree",pos:[8.2,0,2.2],scale:1},{type:"bush",pos:[-8.6,0,3.4]},{type:"bush",pos:[9.4,0,4.6]},{type:"bench",pos:[6.6,0,5.6]},{type:"bin",pos:[-5.8,0,3.6]},{type:"hydrant",pos:[4.9,0,-3.5]},{type:"planter",pos:[-5.4,0,6.2]},{type:"planter",pos:[5.6,0,7.4]},{type:"sandwichBoard",pos:[1.9,0,6.6]},{type:"stall",pos:[-5.4,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"building",pos:[-32.6,0,-16.2],size:[6.2,6.7,6],color:"#f4e1c1",awning:"#2f7d6a"},{type:"building",pos:[-25.8,0,-16.2],size:[5.1,6.7,6],color:"#e8d3b5",awning:"#d8402f"},{type:"building",pos:[-19.7,0,-16.2],size:[5.9,5.6,6],color:"#fff1d6",awning:"#4a6fa5"},{type:"building",pos:[-12.8,0,-16.2],size:[5,6.3,6],color:"#f4e1c1",awning:"#8c3b2e"},{type:"building",pos:[-6.1,0,-16.2],size:[4.8,5.7,6],color:"#e8d3b5",awning:"#e9a23b"},{type:"building",pos:[.2,0,-16.2],size:[5.3,7.1,6],color:"#fff1d6",awning:"#2f7d6a"},{type:"building",pos:[6.6,0,-16.2],size:[6.1,6.3,6],color:"#f4e1c1",awning:"#d8402f"},{type:"building",pos:[13.5,0,-16.2],size:[5.1,5.7,6],color:"#e8d3b5",awning:"#4a6fa5"},{type:"building",pos:[19.5,0,-16.2],size:[5.3,8,6],color:"#fff1d6",awning:"#8c3b2e"},{type:"building",pos:[26.5,0,-16.2],size:[5.8,7.7,6],color:"#f4e1c1",awning:"#e9a23b"},{type:"building",pos:[32.5,0,-16.2],size:[5.1,7.4,6],color:"#e8d3b5",awning:"#2f7d6a"},{type:"stall",pos:[-5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#2f7d6a",awning:"#fff3dc"}]};var dh={id:"cityBarcelona",nameKey:"city.barcelona.name",descKey:"city.barcelona.desc",unlock:{type:"city"},economy:{trafficMult:1,styleDemand:{}},_note:"Street behind the stand for this city. Generated from the corner street; the stand and its stations are laid out in code.",queueStart:[-2.2,0,4.4],queueStep:[.78,0,.9],queueRowLength:4,camera:{position:[0,6.6,12.8],target:[0,1.45,.7],fov:46},props:[{type:"road",z:-8,width:7},{type:"car",pos:[-8.5,0,-5.6],color:"#d8402f",rot:0},{type:"car",pos:[8.8,0,-5.6],color:"#3d9a8b",rot:0},{type:"lamp",pos:[-6.2,0,-3.4],light:!0},{type:"lamp",pos:[6,0,-3.4],light:!0},{type:"lamp",pos:[-11.5,0,-3.4]},{type:"lamp",pos:[12,0,-3.4]},{type:"bush",pos:[-8.6,0,3.4]},{type:"bush",pos:[9.4,0,4.6]},{type:"bench",pos:[6.6,0,5.6]},{type:"bin",pos:[-5.8,0,3.6]},{type:"hydrant",pos:[4.9,0,-3.5]},{type:"planter",pos:[-5.4,0,6.2]},{type:"planter",pos:[5.6,0,7.4]},{type:"sandwichBoard",pos:[1.9,0,6.6]},{type:"stall",pos:[-5.4,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"building",pos:[-66,0,-16.2],size:[7.4,22.7,6],color:"#e9b8a0",awning:"#2f7d6a"},{type:"building",pos:[-58.9,0,-16.2],size:[7.9,25.3,6],color:"#f2d7a8",awning:"#d8402f"},{type:"building",pos:[-51.2,0,-16.2],size:[6.5,24.1,6],color:"#bcd6c6",awning:"#4a6fa5"},{type:"building",pos:[-44.6,0,-16.2],size:[8.2,26,6],color:"#e7c6a5",awning:"#8c3b2e"},{type:"building",pos:[-37.2,0,-16.2],size:[8.4,20.2,6],color:"#e9b8a0",awning:"#e9a23b"},{type:"building",pos:[-29.5,0,-16.2],size:[6.2,25.4,6],color:"#f2d7a8",awning:"#2f7d6a"},{type:"building",pos:[-22.1,0,-16.2],size:[6.6,17.2,6],color:"#bcd6c6",awning:"#d8402f"},{type:"building",pos:[-14.6,0,-16.2],size:[6.7,20.1,6],color:"#e7c6a5",awning:"#4a6fa5"},{type:"building",pos:[-7.6,0,-16.2],size:[8.4,16.1,6],color:"#e9b8a0",awning:"#8c3b2e"},{type:"building",pos:[-.1,0,-16.2],size:[8.2,19.2,6],color:"#f2d7a8",awning:"#e9a23b"},{type:"building",pos:[7.5,0,-16.2],size:[7.7,25.1,6],color:"#bcd6c6",awning:"#2f7d6a"},{type:"building",pos:[14.4,0,-16.2],size:[8,20,6],color:"#e7c6a5",awning:"#d8402f"},{type:"building",pos:[22.3,0,-16.2],size:[7.6,18.5,6],color:"#e9b8a0",awning:"#4a6fa5"},{type:"building",pos:[29.7,0,-16.2],size:[6.6,22.9,6],color:"#f2d7a8",awning:"#8c3b2e"},{type:"building",pos:[36.7,0,-16.2],size:[7.5,20,6],color:"#bcd6c6",awning:"#e9a23b"},{type:"building",pos:[44.3,0,-16.2],size:[7.2,24.3,6],color:"#e7c6a5",awning:"#2f7d6a"},{type:"building",pos:[51.3,0,-16.2],size:[7,22.5,6],color:"#e9b8a0",awning:"#d8402f"},{type:"building",pos:[58.6,0,-16.2],size:[7.8,19.7,6],color:"#f2d7a8",awning:"#4a6fa5"},{type:"building",pos:[66.4,0,-16.2],size:[6.4,20.7,6],color:"#bcd6c6",awning:"#8c3b2e"}]};var ph={id:"cityMadrid",nameKey:"city.madrid.name",descKey:"city.madrid.desc",unlock:{type:"city"},economy:{trafficMult:1,styleDemand:{}},_note:"Street behind the stand for this city. Generated from the corner street; the stand and its stations are laid out in code.",queueStart:[-2.2,0,4.4],queueStep:[.78,0,.9],queueRowLength:4,camera:{position:[0,6.6,12.8],target:[0,1.45,.7],fov:46},props:[{type:"road",z:-8,width:7},{type:"car",pos:[-8.5,0,-5.6],color:"#d8402f",rot:0},{type:"car",pos:[8.8,0,-5.6],color:"#3d9a8b",rot:0},{type:"lamp",pos:[-6.2,0,-3.4],light:!0},{type:"lamp",pos:[6,0,-3.4],light:!0},{type:"lamp",pos:[-11.5,0,-3.4]},{type:"lamp",pos:[12,0,-3.4]},{type:"bush",pos:[-8.6,0,3.4]},{type:"bush",pos:[9.4,0,4.6]},{type:"bench",pos:[6.6,0,5.6]},{type:"bin",pos:[-5.8,0,3.6]},{type:"hydrant",pos:[4.9,0,-3.5]},{type:"planter",pos:[-5.4,0,6.2]},{type:"planter",pos:[5.6,0,7.4]},{type:"sandwichBoard",pos:[1.9,0,6.6]},{type:"stall",pos:[-5.4,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"building",pos:[-66.2,0,-16.2],size:[7.8,16.6,6],color:"#e8d0a9",awning:"#2f7d6a"},{type:"building",pos:[-59.2,0,-16.2],size:[7.3,21.6,6],color:"#d9b99b",awning:"#d8402f"},{type:"building",pos:[-51.3,0,-16.2],size:[6.3,18.6,6],color:"#f0e0c4",awning:"#4a6fa5"},{type:"building",pos:[-44.4,0,-16.2],size:[7.8,25.1,6],color:"#c9a98a",awning:"#8c3b2e"},{type:"building",pos:[-36.6,0,-16.2],size:[7.6,16.6,6],color:"#e8d0a9",awning:"#e9a23b"},{type:"building",pos:[-29.5,0,-16.2],size:[7.5,24.3,6],color:"#d9b99b",awning:"#2f7d6a"},{type:"building",pos:[-21.7,0,-16.2],size:[8.5,25.6,6],color:"#f0e0c4",awning:"#d8402f"},{type:"building",pos:[-14.8,0,-16.2],size:[7.4,24.1,6],color:"#c9a98a",awning:"#4a6fa5"},{type:"building",pos:[-7.6,0,-16.2],size:[8.2,23.9,6],color:"#e8d0a9",awning:"#8c3b2e"},{type:"building",pos:[.4,0,-16.2],size:[6.5,24.3,6],color:"#d9b99b",awning:"#e9a23b"},{type:"building",pos:[7.7,0,-16.2],size:[7.1,21,6],color:"#f0e0c4",awning:"#2f7d6a"},{type:"building",pos:[14.3,0,-16.2],size:[6.9,22.6,6],color:"#c9a98a",awning:"#d8402f"},{type:"building",pos:[21.8,0,-16.2],size:[6.9,24.5,6],color:"#e8d0a9",awning:"#4a6fa5"},{type:"building",pos:[29.9,0,-16.2],size:[6.5,23.9,6],color:"#d9b99b",awning:"#8c3b2e"},{type:"building",pos:[36.7,0,-16.2],size:[6.5,23.8,6],color:"#f0e0c4",awning:"#e9a23b"},{type:"building",pos:[44.5,0,-16.2],size:[6.5,20,6],color:"#c9a98a",awning:"#2f7d6a"},{type:"building",pos:[51.8,0,-16.2],size:[6.9,23,6],color:"#e8d0a9",awning:"#d8402f"},{type:"building",pos:[58.7,0,-16.2],size:[7.1,16.1,6],color:"#d9b99b",awning:"#4a6fa5"},{type:"building",pos:[66.3,0,-16.2],size:[7.5,25,6],color:"#f0e0c4",awning:"#8c3b2e"}]};var fh={id:"cityLisbon",nameKey:"city.lisbon.name",descKey:"city.lisbon.desc",unlock:{type:"city"},economy:{trafficMult:1,styleDemand:{}},_note:"Street behind the stand for this city. Generated from the corner street; the stand and its stations are laid out in code.",queueStart:[-2.2,0,4.4],queueStep:[.78,0,.9],queueRowLength:4,camera:{position:[0,6.6,12.8],target:[0,1.45,.7],fov:46},props:[{type:"road",z:-8,width:7},{type:"tree",pos:[-17,0,-12.4],scale:.95},{type:"tree",pos:[-10.5,0,-12.4],scale:.95},{type:"tree",pos:[-3.5,0,-12.4],scale:.95},{type:"tree",pos:[3.5,0,-12.4],scale:.95},{type:"tree",pos:[10,0,-12.4],scale:.95},{type:"tree",pos:[17,0,-12.4],scale:.95},{type:"car",pos:[-8.5,0,-5.6],color:"#d8402f",rot:0},{type:"car",pos:[8.8,0,-5.6],color:"#3d9a8b",rot:0},{type:"lamp",pos:[-6.2,0,-3.4],light:!0},{type:"lamp",pos:[6,0,-3.4],light:!0},{type:"lamp",pos:[-11.5,0,-3.4]},{type:"lamp",pos:[12,0,-3.4]},{type:"tree",pos:[-7.2,0,1.2],scale:1.05},{type:"tree",pos:[8.2,0,2.2],scale:1},{type:"bush",pos:[-8.6,0,3.4]},{type:"bush",pos:[9.4,0,4.6]},{type:"bench",pos:[6.6,0,5.6]},{type:"bin",pos:[-5.8,0,3.6]},{type:"hydrant",pos:[4.9,0,-3.5]},{type:"planter",pos:[-5.4,0,6.2]},{type:"planter",pos:[5.6,0,7.4]},{type:"sandwichBoard",pos:[1.9,0,6.6]},{type:"stall",pos:[-5.4,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"building",pos:[-48.1,0,-16.2],size:[6.5,12.2,6],color:"#f2e4c9",awning:"#2f7d6a"},{type:"building",pos:[-40.4,0,-16.2],size:[6.4,13.1,6],color:"#9ec5d8",awning:"#d8402f"},{type:"building",pos:[-33.3,0,-16.2],size:[7.1,12.6,6],color:"#f4d6b0",awning:"#4a6fa5"},{type:"building",pos:[-25.6,0,-16.2],size:[6.9,11.5,6],color:"#c6dfe6",awning:"#8c3b2e"},{type:"building",pos:[-18.2,0,-16.2],size:[7.7,13.6,6],color:"#f2e4c9",awning:"#e9a23b"},{type:"building",pos:[-11.5,0,-16.2],size:[7.6,12.8,6],color:"#9ec5d8",awning:"#2f7d6a"},{type:"building",pos:[-3.7,0,-16.2],size:[7.1,11.5,6],color:"#f4d6b0",awning:"#d8402f"},{type:"building",pos:[3.9,0,-16.2],size:[6.4,11.3,6],color:"#c6dfe6",awning:"#4a6fa5"},{type:"building",pos:[11.3,0,-16.2],size:[7.3,13,6],color:"#f2e4c9",awning:"#8c3b2e"},{type:"building",pos:[18.3,0,-16.2],size:[6.3,12.7,6],color:"#9ec5d8",awning:"#e9a23b"},{type:"building",pos:[26.4,0,-16.2],size:[7.4,12.4,6],color:"#f4d6b0",awning:"#2f7d6a"},{type:"building",pos:[33.9,0,-16.2],size:[6.8,9.2,6],color:"#c6dfe6",awning:"#d8402f"},{type:"building",pos:[41.2,0,-16.2],size:[6.5,10.8,6],color:"#f2e4c9",awning:"#4a6fa5"},{type:"building",pos:[48.1,0,-16.2],size:[7.1,10.7,6],color:"#9ec5d8",awning:"#8c3b2e"},{type:"stall",pos:[-5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#2f7d6a",awning:"#fff3dc"}]};var mh={id:"cityParis",nameKey:"city.paris.name",descKey:"city.paris.desc",unlock:{type:"city"},economy:{trafficMult:1,styleDemand:{}},_note:"Street behind the stand for this city. Generated from the corner street; the stand and its stations are laid out in code.",queueStart:[-2.2,0,4.4],queueStep:[.78,0,.9],queueRowLength:4,camera:{position:[0,6.6,12.8],target:[0,1.45,.7],fov:46},props:[{type:"road",z:-8,width:7},{type:"car",pos:[-8.5,0,-5.6],color:"#d8402f",rot:0},{type:"car",pos:[8.8,0,-5.6],color:"#3d9a8b",rot:0},{type:"lamp",pos:[-6.2,0,-3.4],light:!0},{type:"lamp",pos:[6,0,-3.4],light:!0},{type:"lamp",pos:[-11.5,0,-3.4]},{type:"lamp",pos:[12,0,-3.4]},{type:"bush",pos:[-8.6,0,3.4]},{type:"bush",pos:[9.4,0,4.6]},{type:"bench",pos:[6.6,0,5.6]},{type:"bin",pos:[-5.8,0,3.6]},{type:"hydrant",pos:[4.9,0,-3.5]},{type:"planter",pos:[-5.4,0,6.2]},{type:"planter",pos:[5.6,0,7.4]},{type:"sandwichBoard",pos:[1.9,0,6.6]},{type:"stall",pos:[-5.4,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"building",pos:[-66.2,0,-16.2],size:[7,24.5,6],color:"#d8cbb4",awning:"#2f7d6a"},{type:"building",pos:[-59.4,0,-16.2],size:[7.9,20.4,6],color:"#e6dccb",awning:"#d8402f"},{type:"building",pos:[-51.6,0,-16.2],size:[6.3,23.5,6],color:"#c8bca6",awning:"#4a6fa5"},{type:"building",pos:[-44.3,0,-16.2],size:[7.7,24.9,6],color:"#ddd0bb",awning:"#8c3b2e"},{type:"building",pos:[-36.4,0,-16.2],size:[6.5,25.4,6],color:"#d8cbb4",awning:"#e9a23b"},{type:"building",pos:[-29.6,0,-16.2],size:[7.9,20.6,6],color:"#e6dccb",awning:"#2f7d6a"},{type:"building",pos:[-22.1,0,-16.2],size:[7.4,18.4,6],color:"#c8bca6",awning:"#d8402f"},{type:"building",pos:[-14.8,0,-16.2],size:[8.5,25.4,6],color:"#ddd0bb",awning:"#4a6fa5"},{type:"building",pos:[-7.3,0,-16.2],size:[6.4,23.2,6],color:"#d8cbb4",awning:"#8c3b2e"},{type:"building",pos:[0,0,-16.2],size:[8.4,19.4,6],color:"#e6dccb",awning:"#e9a23b"},{type:"building",pos:[7.5,0,-16.2],size:[6.1,16.3,6],color:"#c8bca6",awning:"#2f7d6a"},{type:"building",pos:[14.3,0,-16.2],size:[7.4,20.1,6],color:"#ddd0bb",awning:"#d8402f"},{type:"building",pos:[22.5,0,-16.2],size:[8.3,16.5,6],color:"#d8cbb4",awning:"#4a6fa5"},{type:"building",pos:[29.7,0,-16.2],size:[7.3,24.2,6],color:"#e6dccb",awning:"#8c3b2e"},{type:"building",pos:[37.3,0,-16.2],size:[7.8,18.5,6],color:"#c8bca6",awning:"#e9a23b"},{type:"building",pos:[44.5,0,-16.2],size:[7.1,25.2,6],color:"#ddd0bb",awning:"#2f7d6a"},{type:"building",pos:[52,0,-16.2],size:[6.8,23.1,6],color:"#d8cbb4",awning:"#d8402f"},{type:"building",pos:[58.8,0,-16.2],size:[6,18.3,6],color:"#e6dccb",awning:"#4a6fa5"},{type:"building",pos:[66.5,0,-16.2],size:[7.8,23.1,6],color:"#c8bca6",awning:"#8c3b2e"}]};var gh={id:"cityBrussels",nameKey:"city.brussels.name",descKey:"city.brussels.desc",unlock:{type:"city"},economy:{trafficMult:1,styleDemand:{}},_note:"Street behind the stand for this city. Generated from the corner street; the stand and its stations are laid out in code.",queueStart:[-2.2,0,4.4],queueStep:[.78,0,.9],queueRowLength:4,camera:{position:[0,6.6,12.8],target:[0,1.45,.7],fov:46},props:[{type:"road",z:-8,width:7},{type:"tree",pos:[-17,0,-12.4],scale:.95},{type:"tree",pos:[-10.5,0,-12.4],scale:.95},{type:"tree",pos:[-3.5,0,-12.4],scale:.95},{type:"tree",pos:[3.5,0,-12.4],scale:.95},{type:"tree",pos:[10,0,-12.4],scale:.95},{type:"tree",pos:[17,0,-12.4],scale:.95},{type:"car",pos:[-8.5,0,-5.6],color:"#d8402f",rot:0},{type:"car",pos:[8.8,0,-5.6],color:"#3d9a8b",rot:0},{type:"lamp",pos:[-6.2,0,-3.4],light:!0},{type:"lamp",pos:[6,0,-3.4],light:!0},{type:"lamp",pos:[-11.5,0,-3.4]},{type:"lamp",pos:[12,0,-3.4]},{type:"tree",pos:[-7.2,0,1.2],scale:1.05},{type:"tree",pos:[8.2,0,2.2],scale:1},{type:"bush",pos:[-8.6,0,3.4]},{type:"bush",pos:[9.4,0,4.6]},{type:"bench",pos:[6.6,0,5.6]},{type:"bin",pos:[-5.8,0,3.6]},{type:"hydrant",pos:[4.9,0,-3.5]},{type:"planter",pos:[-5.4,0,6.2]},{type:"planter",pos:[5.6,0,7.4]},{type:"sandwichBoard",pos:[1.9,0,6.6]},{type:"stall",pos:[-5.4,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"building",pos:[-48,0,-16.2],size:[7.6,9.2,6],color:"#e9d6a6",awning:"#2f7d6a"},{type:"building",pos:[-41.1,0,-16.2],size:[7.4,9.3,6],color:"#d9c28f",awning:"#d8402f"},{type:"building",pos:[-33.5,0,-16.2],size:[7.2,12.8,6],color:"#f1e2b8",awning:"#4a6fa5"},{type:"building",pos:[-25.7,0,-16.2],size:[7.2,11.7,6],color:"#c9b07f",awning:"#8c3b2e"},{type:"building",pos:[-18.7,0,-16.2],size:[7.5,9.8,6],color:"#e9d6a6",awning:"#e9a23b"},{type:"building",pos:[-11.5,0,-16.2],size:[7,11.5,6],color:"#d9c28f",awning:"#2f7d6a"},{type:"building",pos:[-3.7,0,-16.2],size:[6.8,13.7,6],color:"#f1e2b8",awning:"#d8402f"},{type:"building",pos:[3.9,0,-16.2],size:[6.7,9.9,6],color:"#c9b07f",awning:"#4a6fa5"},{type:"building",pos:[10.7,0,-16.2],size:[6.1,13.7,6],color:"#e9d6a6",awning:"#8c3b2e"},{type:"building",pos:[18.2,0,-16.2],size:[7.2,12.7,6],color:"#d9c28f",awning:"#e9a23b"},{type:"building",pos:[25.9,0,-16.2],size:[7,12.1,6],color:"#f1e2b8",awning:"#2f7d6a"},{type:"building",pos:[33,0,-16.2],size:[8,11.7,6],color:"#c9b07f",awning:"#d8402f"},{type:"building",pos:[40.7,0,-16.2],size:[6.2,13.8,6],color:"#e9d6a6",awning:"#4a6fa5"},{type:"building",pos:[48.5,0,-16.2],size:[7.8,10.4,6],color:"#d9c28f",awning:"#8c3b2e"}]};var yh={id:"cityAmsterdam",nameKey:"city.amsterdam.name",descKey:"city.amsterdam.desc",unlock:{type:"city"},economy:{trafficMult:1,styleDemand:{}},_note:"Street behind the stand for this city. Generated from the corner street; the stand and its stations are laid out in code.",queueStart:[-2.2,0,4.4],queueStep:[.78,0,.9],queueRowLength:4,camera:{position:[0,6.6,12.8],target:[0,1.45,.7],fov:46},props:[{type:"road",z:-8,width:7},{type:"tree",pos:[-17,0,-12.4],scale:.95},{type:"tree",pos:[-10.5,0,-12.4],scale:.95},{type:"tree",pos:[-3.5,0,-12.4],scale:.95},{type:"tree",pos:[3.5,0,-12.4],scale:.95},{type:"tree",pos:[10,0,-12.4],scale:.95},{type:"tree",pos:[17,0,-12.4],scale:.95},{type:"car",pos:[-8.5,0,-5.6],color:"#d8402f",rot:0},{type:"car",pos:[8.8,0,-5.6],color:"#3d9a8b",rot:0},{type:"lamp",pos:[-6.2,0,-3.4],light:!0},{type:"lamp",pos:[6,0,-3.4],light:!0},{type:"lamp",pos:[-11.5,0,-3.4]},{type:"lamp",pos:[12,0,-3.4]},{type:"tree",pos:[-7.2,0,1.2],scale:1.05},{type:"tree",pos:[8.2,0,2.2],scale:1},{type:"bush",pos:[-8.6,0,3.4]},{type:"bush",pos:[9.4,0,4.6]},{type:"bench",pos:[6.6,0,5.6]},{type:"bin",pos:[-5.8,0,3.6]},{type:"hydrant",pos:[4.9,0,-3.5]},{type:"planter",pos:[-5.4,0,6.2]},{type:"planter",pos:[5.6,0,7.4]},{type:"sandwichBoard",pos:[1.9,0,6.6]},{type:"stall",pos:[-5.4,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"building",pos:[-48,0,-16.2],size:[6.2,10.2,6],color:"#b8553f",awning:"#2f7d6a"},{type:"building",pos:[-41,0,-16.2],size:[6.9,10,6],color:"#d7a07a",awning:"#d8402f"},{type:"building",pos:[-33.1,0,-16.2],size:[7.2,10.3,6],color:"#c9b08f",awning:"#4a6fa5"},{type:"building",pos:[-25.7,0,-16.2],size:[7.3,11.9,6],color:"#9c6b4f",awning:"#8c3b2e"},{type:"building",pos:[-18.9,0,-16.2],size:[6.4,10.4,6],color:"#b8553f",awning:"#e9a23b"},{type:"building",pos:[-11.5,0,-16.2],size:[6.6,13.3,6],color:"#d7a07a",awning:"#2f7d6a"},{type:"building",pos:[-3.3,0,-16.2],size:[7.6,12.3,6],color:"#c9b08f",awning:"#d8402f"},{type:"building",pos:[4,0,-16.2],size:[7.9,9.3,6],color:"#9c6b4f",awning:"#4a6fa5"},{type:"building",pos:[11.3,0,-16.2],size:[7.5,9,6],color:"#b8553f",awning:"#8c3b2e"},{type:"building",pos:[18.6,0,-16.2],size:[7.7,10.2,6],color:"#d7a07a",awning:"#e9a23b"},{type:"building",pos:[26.2,0,-16.2],size:[7.8,9.5,6],color:"#c9b08f",awning:"#2f7d6a"},{type:"building",pos:[33,0,-16.2],size:[7.6,13,6],color:"#9c6b4f",awning:"#d8402f"},{type:"building",pos:[40.8,0,-16.2],size:[7.1,12.8,6],color:"#b8553f",awning:"#4a6fa5"},{type:"building",pos:[47.9,0,-16.2],size:[7.2,10.2,6],color:"#d7a07a",awning:"#8c3b2e"}]};var _h={id:"cityLondon",nameKey:"city.london.name",descKey:"city.london.desc",unlock:{type:"city"},economy:{trafficMult:1,styleDemand:{}},_note:"Street behind the stand for this city. Generated from the corner street; the stand and its stations are laid out in code.",queueStart:[-2.2,0,4.4],queueStep:[.78,0,.9],queueRowLength:4,camera:{position:[0,6.6,12.8],target:[0,1.45,.7],fov:46},props:[{type:"road",z:-8,width:7},{type:"car",pos:[-8.5,0,-5.6],color:"#d8402f",rot:0},{type:"car",pos:[8.8,0,-5.6],color:"#3d9a8b",rot:0},{type:"lamp",pos:[-6.2,0,-3.4],light:!0},{type:"lamp",pos:[6,0,-3.4],light:!0},{type:"lamp",pos:[-11.5,0,-3.4]},{type:"lamp",pos:[12,0,-3.4]},{type:"bush",pos:[-8.6,0,3.4]},{type:"bush",pos:[9.4,0,4.6]},{type:"bench",pos:[6.6,0,5.6]},{type:"bin",pos:[-5.8,0,3.6]},{type:"hydrant",pos:[4.9,0,-3.5]},{type:"planter",pos:[-5.4,0,6.2]},{type:"planter",pos:[5.6,0,7.4]},{type:"sandwichBoard",pos:[1.9,0,6.6]},{type:"stall",pos:[-5.4,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"building",pos:[-66.2,0,-16.2],size:[7.8,16.6,6],color:"#b98a6a",awning:"#2f7d6a"},{type:"building",pos:[-59.2,0,-16.2],size:[7.3,21.6,6],color:"#c9a27a",awning:"#d8402f"},{type:"building",pos:[-51.3,0,-16.2],size:[6.3,18.6,6],color:"#9d7b63",awning:"#4a6fa5"},{type:"building",pos:[-44.4,0,-16.2],size:[7.8,25.1,6],color:"#d3b48f",awning:"#8c3b2e"},{type:"building",pos:[-36.6,0,-16.2],size:[7.6,16.6,6],color:"#a88a70",awning:"#e9a23b"},{type:"building",pos:[-29.5,0,-16.2],size:[7.5,24.3,6],color:"#b98a6a",awning:"#2f7d6a"},{type:"building",pos:[-21.7,0,-16.2],size:[8.5,25.6,6],color:"#c9a27a",awning:"#d8402f"},{type:"building",pos:[-14.8,0,-16.2],size:[7.4,24.1,6],color:"#9d7b63",awning:"#4a6fa5"},{type:"building",pos:[-7.6,0,-16.2],size:[8.2,23.9,6],color:"#d3b48f",awning:"#8c3b2e"},{type:"building",pos:[.4,0,-16.2],size:[6.5,24.3,6],color:"#a88a70",awning:"#e9a23b"},{type:"building",pos:[7.7,0,-16.2],size:[7.1,21,6],color:"#b98a6a",awning:"#2f7d6a"},{type:"building",pos:[14.3,0,-16.2],size:[6.9,22.6,6],color:"#c9a27a",awning:"#d8402f"},{type:"building",pos:[21.8,0,-16.2],size:[6.9,24.5,6],color:"#9d7b63",awning:"#4a6fa5"},{type:"building",pos:[29.9,0,-16.2],size:[6.5,23.9,6],color:"#d3b48f",awning:"#8c3b2e"},{type:"building",pos:[36.7,0,-16.2],size:[6.5,23.8,6],color:"#a88a70",awning:"#e9a23b"},{type:"building",pos:[44.5,0,-16.2],size:[6.5,20,6],color:"#b98a6a",awning:"#2f7d6a"},{type:"building",pos:[51.8,0,-16.2],size:[6.9,23,6],color:"#c9a27a",awning:"#d8402f"},{type:"building",pos:[58.7,0,-16.2],size:[7.1,16.1,6],color:"#9d7b63",awning:"#4a6fa5"},{type:"building",pos:[66.3,0,-16.2],size:[7.5,25,6],color:"#d3b48f",awning:"#8c3b2e"}]};var bh={id:"cityLiverpool",nameKey:"city.liverpool.name",descKey:"city.liverpool.desc",unlock:{type:"city"},economy:{trafficMult:1,styleDemand:{}},_note:"Street behind the stand for this city. Generated from the corner street; the stand and its stations are laid out in code.",queueStart:[-2.2,0,4.4],queueStep:[.78,0,.9],queueRowLength:4,camera:{position:[0,6.6,12.8],target:[0,1.45,.7],fov:46},props:[{type:"road",z:-8,width:7},{type:"tree",pos:[-17,0,-12.4],scale:.95},{type:"tree",pos:[-10.5,0,-12.4],scale:.95},{type:"tree",pos:[-3.5,0,-12.4],scale:.95},{type:"tree",pos:[3.5,0,-12.4],scale:.95},{type:"tree",pos:[10,0,-12.4],scale:.95},{type:"tree",pos:[17,0,-12.4],scale:.95},{type:"car",pos:[-8.5,0,-5.6],color:"#d8402f",rot:0},{type:"car",pos:[8.8,0,-5.6],color:"#3d9a8b",rot:0},{type:"lamp",pos:[-6.2,0,-3.4],light:!0},{type:"lamp",pos:[6,0,-3.4],light:!0},{type:"lamp",pos:[-11.5,0,-3.4]},{type:"lamp",pos:[12,0,-3.4]},{type:"tree",pos:[-7.2,0,1.2],scale:1.05},{type:"tree",pos:[8.2,0,2.2],scale:1},{type:"bush",pos:[-8.6,0,3.4]},{type:"bush",pos:[9.4,0,4.6]},{type:"bench",pos:[6.6,0,5.6]},{type:"bin",pos:[-5.8,0,3.6]},{type:"hydrant",pos:[4.9,0,-3.5]},{type:"planter",pos:[-5.4,0,6.2]},{type:"planter",pos:[5.6,0,7.4]},{type:"sandwichBoard",pos:[1.9,0,6.6]},{type:"stall",pos:[-5.4,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"building",pos:[-48,0,-16.2],size:[6.2,10.2,6],color:"#b5654a",awning:"#2f7d6a"},{type:"building",pos:[-41,0,-16.2],size:[6.9,10,6],color:"#c9826a",awning:"#d8402f"},{type:"building",pos:[-33.1,0,-16.2],size:[7.2,10.3,6],color:"#d9b48c",awning:"#4a6fa5"},{type:"building",pos:[-25.7,0,-16.2],size:[7.3,11.9,6],color:"#9c5a46",awning:"#8c3b2e"},{type:"building",pos:[-18.9,0,-16.2],size:[6.4,10.4,6],color:"#b5654a",awning:"#e9a23b"},{type:"building",pos:[-11.5,0,-16.2],size:[6.6,13.3,6],color:"#c9826a",awning:"#2f7d6a"},{type:"building",pos:[-3.3,0,-16.2],size:[7.6,12.3,6],color:"#d9b48c",awning:"#d8402f"},{type:"building",pos:[4,0,-16.2],size:[7.9,9.3,6],color:"#9c5a46",awning:"#4a6fa5"},{type:"building",pos:[11.3,0,-16.2],size:[7.5,9,6],color:"#b5654a",awning:"#8c3b2e"},{type:"building",pos:[18.6,0,-16.2],size:[7.7,10.2,6],color:"#c9826a",awning:"#e9a23b"},{type:"building",pos:[26.2,0,-16.2],size:[7.8,9.5,6],color:"#d9b48c",awning:"#2f7d6a"},{type:"building",pos:[33,0,-16.2],size:[7.6,13,6],color:"#9c5a46",awning:"#d8402f"},{type:"building",pos:[40.8,0,-16.2],size:[7.1,12.8,6],color:"#b5654a",awning:"#4a6fa5"},{type:"building",pos:[47.9,0,-16.2],size:[7.2,10.2,6],color:"#c9826a",awning:"#8c3b2e"}]};var vh={id:"cityBerlin",nameKey:"city.berlin.name",descKey:"city.berlin.desc",unlock:{type:"city"},economy:{trafficMult:1,styleDemand:{}},_note:"Street behind the stand for this city. Generated from the corner street; the stand and its stations are laid out in code.",queueStart:[-2.2,0,4.4],queueStep:[.78,0,.9],queueRowLength:4,camera:{position:[0,6.6,12.8],target:[0,1.45,.7],fov:46},props:[{type:"road",z:-8,width:7},{type:"car",pos:[-8.5,0,-5.6],color:"#d8402f",rot:0},{type:"car",pos:[8.8,0,-5.6],color:"#3d9a8b",rot:0},{type:"lamp",pos:[-6.2,0,-3.4],light:!0},{type:"lamp",pos:[6,0,-3.4],light:!0},{type:"lamp",pos:[-11.5,0,-3.4]},{type:"lamp",pos:[12,0,-3.4]},{type:"bush",pos:[-8.6,0,3.4]},{type:"bush",pos:[9.4,0,4.6]},{type:"bench",pos:[6.6,0,5.6]},{type:"bin",pos:[-5.8,0,3.6]},{type:"hydrant",pos:[4.9,0,-3.5]},{type:"planter",pos:[-5.4,0,6.2]},{type:"planter",pos:[5.6,0,7.4]},{type:"sandwichBoard",pos:[1.9,0,6.6]},{type:"stall",pos:[-5.4,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"building",pos:[-66.2,0,-16.2],size:[7.8,16.6,6],color:"#c9c4bb",awning:"#2f7d6a"},{type:"building",pos:[-59.2,0,-16.2],size:[7.3,21.6,6],color:"#b5afa4",awning:"#d8402f"},{type:"building",pos:[-51.3,0,-16.2],size:[6.3,18.6,6],color:"#d9d3c7",awning:"#4a6fa5"},{type:"building",pos:[-44.4,0,-16.2],size:[7.8,25.1,6],color:"#a9a399",awning:"#8c3b2e"},{type:"building",pos:[-36.6,0,-16.2],size:[7.6,16.6,6],color:"#c9c4bb",awning:"#e9a23b"},{type:"building",pos:[-29.5,0,-16.2],size:[7.5,24.3,6],color:"#b5afa4",awning:"#2f7d6a"},{type:"building",pos:[-21.7,0,-16.2],size:[8.5,25.6,6],color:"#d9d3c7",awning:"#d8402f"},{type:"building",pos:[-14.8,0,-16.2],size:[7.4,24.1,6],color:"#a9a399",awning:"#4a6fa5"},{type:"building",pos:[-7.6,0,-16.2],size:[8.2,23.9,6],color:"#c9c4bb",awning:"#8c3b2e"},{type:"building",pos:[.4,0,-16.2],size:[6.5,24.3,6],color:"#b5afa4",awning:"#e9a23b"},{type:"building",pos:[7.7,0,-16.2],size:[7.1,21,6],color:"#d9d3c7",awning:"#2f7d6a"},{type:"building",pos:[14.3,0,-16.2],size:[6.9,22.6,6],color:"#a9a399",awning:"#d8402f"},{type:"building",pos:[21.8,0,-16.2],size:[6.9,24.5,6],color:"#c9c4bb",awning:"#4a6fa5"},{type:"building",pos:[29.9,0,-16.2],size:[6.5,23.9,6],color:"#b5afa4",awning:"#8c3b2e"},{type:"building",pos:[36.7,0,-16.2],size:[6.5,23.8,6],color:"#d9d3c7",awning:"#e9a23b"},{type:"building",pos:[44.5,0,-16.2],size:[6.5,20,6],color:"#a9a399",awning:"#2f7d6a"},{type:"building",pos:[51.8,0,-16.2],size:[6.9,23,6],color:"#c9c4bb",awning:"#d8402f"},{type:"building",pos:[58.7,0,-16.2],size:[7.1,16.1,6],color:"#b5afa4",awning:"#4a6fa5"},{type:"building",pos:[66.3,0,-16.2],size:[7.5,25,6],color:"#d9d3c7",awning:"#8c3b2e"}]};var xh={id:"cityWarsaw",nameKey:"city.warsaw.name",descKey:"city.warsaw.desc",unlock:{type:"city"},economy:{trafficMult:1,styleDemand:{}},_note:"Street behind the stand for this city. Generated from the corner street; the stand and its stations are laid out in code.",queueStart:[-2.2,0,4.4],queueStep:[.78,0,.9],queueRowLength:4,camera:{position:[0,6.6,12.8],target:[0,1.45,.7],fov:46},props:[{type:"road",z:-8,width:7},{type:"car",pos:[-8.5,0,-5.6],color:"#d8402f",rot:0},{type:"car",pos:[8.8,0,-5.6],color:"#3d9a8b",rot:0},{type:"lamp",pos:[-6.2,0,-3.4],light:!0},{type:"lamp",pos:[6,0,-3.4],light:!0},{type:"lamp",pos:[-11.5,0,-3.4]},{type:"lamp",pos:[12,0,-3.4]},{type:"bush",pos:[-8.6,0,3.4]},{type:"bush",pos:[9.4,0,4.6]},{type:"bench",pos:[6.6,0,5.6]},{type:"bin",pos:[-5.8,0,3.6]},{type:"hydrant",pos:[4.9,0,-3.5]},{type:"planter",pos:[-5.4,0,6.2]},{type:"planter",pos:[5.6,0,7.4]},{type:"sandwichBoard",pos:[1.9,0,6.6]},{type:"stall",pos:[-5.4,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"building",pos:[-66.2,0,-16.2],size:[7.8,16.6,6],color:"#e6d3b3",awning:"#2f7d6a"},{type:"building",pos:[-59.2,0,-16.2],size:[7.3,21.6,6],color:"#d7c09a",awning:"#d8402f"},{type:"building",pos:[-51.3,0,-16.2],size:[6.3,18.6,6],color:"#f0e2c8",awning:"#4a6fa5"},{type:"building",pos:[-44.4,0,-16.2],size:[7.8,25.1,6],color:"#c8b08a",awning:"#8c3b2e"},{type:"building",pos:[-36.6,0,-16.2],size:[7.6,16.6,6],color:"#e6d3b3",awning:"#e9a23b"},{type:"building",pos:[-29.5,0,-16.2],size:[7.5,24.3,6],color:"#d7c09a",awning:"#2f7d6a"},{type:"building",pos:[-21.7,0,-16.2],size:[8.5,25.6,6],color:"#f0e2c8",awning:"#d8402f"},{type:"building",pos:[-14.8,0,-16.2],size:[7.4,24.1,6],color:"#c8b08a",awning:"#4a6fa5"},{type:"building",pos:[-7.6,0,-16.2],size:[8.2,23.9,6],color:"#e6d3b3",awning:"#8c3b2e"},{type:"building",pos:[.4,0,-16.2],size:[6.5,24.3,6],color:"#d7c09a",awning:"#e9a23b"},{type:"building",pos:[7.7,0,-16.2],size:[7.1,21,6],color:"#f0e2c8",awning:"#2f7d6a"},{type:"building",pos:[14.3,0,-16.2],size:[6.9,22.6,6],color:"#c8b08a",awning:"#d8402f"},{type:"building",pos:[21.8,0,-16.2],size:[6.9,24.5,6],color:"#e6d3b3",awning:"#4a6fa5"},{type:"building",pos:[29.9,0,-16.2],size:[6.5,23.9,6],color:"#d7c09a",awning:"#8c3b2e"},{type:"building",pos:[36.7,0,-16.2],size:[6.5,23.8,6],color:"#f0e2c8",awning:"#e9a23b"},{type:"building",pos:[44.5,0,-16.2],size:[6.5,20,6],color:"#c8b08a",awning:"#2f7d6a"},{type:"building",pos:[51.8,0,-16.2],size:[6.9,23,6],color:"#e6d3b3",awning:"#d8402f"},{type:"building",pos:[58.7,0,-16.2],size:[7.1,16.1,6],color:"#d7c09a",awning:"#4a6fa5"},{type:"building",pos:[66.3,0,-16.2],size:[7.5,25,6],color:"#f0e2c8",awning:"#8c3b2e"}]};var Mh={id:"cityMinsk",nameKey:"city.minsk.name",descKey:"city.minsk.desc",unlock:{type:"city"},economy:{trafficMult:1,styleDemand:{}},_note:"Street behind the stand for this city. Generated from the corner street; the stand and its stations are laid out in code.",queueStart:[-2.2,0,4.4],queueStep:[.78,0,.9],queueRowLength:4,camera:{position:[0,6.6,12.8],target:[0,1.45,.7],fov:46},props:[{type:"road",z:-8,width:7},{type:"tree",pos:[-17,0,-12.4],scale:.95},{type:"tree",pos:[-10.5,0,-12.4],scale:.95},{type:"tree",pos:[-3.5,0,-12.4],scale:.95},{type:"tree",pos:[3.5,0,-12.4],scale:.95},{type:"tree",pos:[10,0,-12.4],scale:.95},{type:"tree",pos:[17,0,-12.4],scale:.95},{type:"car",pos:[-8.5,0,-5.6],color:"#d8402f",rot:0},{type:"car",pos:[8.8,0,-5.6],color:"#3d9a8b",rot:0},{type:"lamp",pos:[-6.2,0,-3.4],light:!0},{type:"lamp",pos:[6,0,-3.4],light:!0},{type:"lamp",pos:[-11.5,0,-3.4]},{type:"lamp",pos:[12,0,-3.4]},{type:"tree",pos:[-7.2,0,1.2],scale:1.05},{type:"tree",pos:[8.2,0,2.2],scale:1},{type:"bush",pos:[-8.6,0,3.4]},{type:"bush",pos:[9.4,0,4.6]},{type:"bench",pos:[6.6,0,5.6]},{type:"bin",pos:[-5.8,0,3.6]},{type:"hydrant",pos:[4.9,0,-3.5]},{type:"planter",pos:[-5.4,0,6.2]},{type:"planter",pos:[5.6,0,7.4]},{type:"sandwichBoard",pos:[1.9,0,6.6]},{type:"stall",pos:[-5.4,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"building",pos:[-48.2,0,-16.2],size:[7.9,11.1,6],color:"#d9d1bf",awning:"#2f7d6a"},{type:"building",pos:[-40.5,0,-16.2],size:[6.9,12.5,6],color:"#c4bca8",awning:"#d8402f"},{type:"building",pos:[-33.6,0,-16.2],size:[7.1,10,6],color:"#e8e0cf",awning:"#4a6fa5"},{type:"building",pos:[-26.4,0,-16.2],size:[6.8,11.3,6],color:"#b7ae9a",awning:"#8c3b2e"},{type:"building",pos:[-18.9,0,-16.2],size:[6.9,13,6],color:"#d9d1bf",awning:"#e9a23b"},{type:"building",pos:[-11.5,0,-16.2],size:[8,10.9,6],color:"#c4bca8",awning:"#2f7d6a"},{type:"building",pos:[-4.2,0,-16.2],size:[6.3,12.9,6],color:"#e8e0cf",awning:"#d8402f"},{type:"building",pos:[3.8,0,-16.2],size:[7.3,11.9,6],color:"#b7ae9a",awning:"#4a6fa5"},{type:"building",pos:[10.7,0,-16.2],size:[7.9,12.6,6],color:"#d9d1bf",awning:"#8c3b2e"},{type:"building",pos:[18.7,0,-16.2],size:[7.8,10.3,6],color:"#c4bca8",awning:"#e9a23b"},{type:"building",pos:[26.2,0,-16.2],size:[6.5,10.1,6],color:"#e8e0cf",awning:"#2f7d6a"},{type:"building",pos:[33.9,0,-16.2],size:[7.2,13,6],color:"#b7ae9a",awning:"#d8402f"},{type:"building",pos:[41,0,-16.2],size:[7.7,11.8,6],color:"#d9d1bf",awning:"#4a6fa5"},{type:"building",pos:[48.7,0,-16.2],size:[7.7,10.9,6],color:"#c4bca8",awning:"#8c3b2e"},{type:"stall",pos:[-5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#2f7d6a",awning:"#fff3dc"}]};var wh={id:"cityBudapest",nameKey:"city.budapest.name",descKey:"city.budapest.desc",unlock:{type:"city"},economy:{trafficMult:1,styleDemand:{}},_note:"Street behind the stand for this city. Generated from the corner street; the stand and its stations are laid out in code.",queueStart:[-2.2,0,4.4],queueStep:[.78,0,.9],queueRowLength:4,camera:{position:[0,6.6,12.8],target:[0,1.45,.7],fov:46},props:[{type:"road",z:-8,width:7},{type:"tree",pos:[-17,0,-12.4],scale:.95},{type:"tree",pos:[-10.5,0,-12.4],scale:.95},{type:"tree",pos:[-3.5,0,-12.4],scale:.95},{type:"tree",pos:[3.5,0,-12.4],scale:.95},{type:"tree",pos:[10,0,-12.4],scale:.95},{type:"tree",pos:[17,0,-12.4],scale:.95},{type:"car",pos:[-8.5,0,-5.6],color:"#d8402f",rot:0},{type:"car",pos:[8.8,0,-5.6],color:"#3d9a8b",rot:0},{type:"lamp",pos:[-6.2,0,-3.4],light:!0},{type:"lamp",pos:[6,0,-3.4],light:!0},{type:"lamp",pos:[-11.5,0,-3.4]},{type:"lamp",pos:[12,0,-3.4]},{type:"tree",pos:[-7.2,0,1.2],scale:1.05},{type:"tree",pos:[8.2,0,2.2],scale:1},{type:"bush",pos:[-8.6,0,3.4]},{type:"bush",pos:[9.4,0,4.6]},{type:"bench",pos:[6.6,0,5.6]},{type:"bin",pos:[-5.8,0,3.6]},{type:"hydrant",pos:[4.9,0,-3.5]},{type:"planter",pos:[-5.4,0,6.2]},{type:"planter",pos:[5.6,0,7.4]},{type:"sandwichBoard",pos:[1.9,0,6.6]},{type:"stall",pos:[-5.4,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"building",pos:[-48,0,-16.2],size:[7.6,9.2,6],color:"#e8d7b0",awning:"#2f7d6a"},{type:"building",pos:[-41.1,0,-16.2],size:[7.4,9.3,6],color:"#d9c39a",awning:"#d8402f"},{type:"building",pos:[-33.5,0,-16.2],size:[7.2,12.8,6],color:"#f3e6c6",awning:"#4a6fa5"},{type:"building",pos:[-25.7,0,-16.2],size:[7.2,11.7,6],color:"#c9b28a",awning:"#8c3b2e"},{type:"building",pos:[-18.7,0,-16.2],size:[7.5,9.8,6],color:"#e8d7b0",awning:"#e9a23b"},{type:"building",pos:[-11.5,0,-16.2],size:[7,11.5,6],color:"#d9c39a",awning:"#2f7d6a"},{type:"building",pos:[-3.7,0,-16.2],size:[6.8,13.7,6],color:"#f3e6c6",awning:"#d8402f"},{type:"building",pos:[3.9,0,-16.2],size:[6.7,9.9,6],color:"#c9b28a",awning:"#4a6fa5"},{type:"building",pos:[10.7,0,-16.2],size:[6.1,13.7,6],color:"#e8d7b0",awning:"#8c3b2e"},{type:"building",pos:[18.2,0,-16.2],size:[7.2,12.7,6],color:"#d9c39a",awning:"#e9a23b"},{type:"building",pos:[25.9,0,-16.2],size:[7,12.1,6],color:"#f3e6c6",awning:"#2f7d6a"},{type:"building",pos:[33,0,-16.2],size:[8,11.7,6],color:"#c9b28a",awning:"#d8402f"},{type:"building",pos:[40.7,0,-16.2],size:[6.2,13.8,6],color:"#e8d7b0",awning:"#4a6fa5"},{type:"building",pos:[48.5,0,-16.2],size:[7.8,10.4,6],color:"#d9c39a",awning:"#8c3b2e"},{type:"dome",pos:[-3.5,0,-16.2],radius:3.2,height:4.2}]};var Sh={id:"cityZagreb",nameKey:"city.zagreb.name",descKey:"city.zagreb.desc",unlock:{type:"city"},economy:{trafficMult:1,styleDemand:{}},_note:"Street behind the stand for this city. Generated from the corner street; the stand and its stations are laid out in code.",queueStart:[-2.2,0,4.4],queueStep:[.78,0,.9],queueRowLength:4,camera:{position:[0,6.6,12.8],target:[0,1.45,.7],fov:46},props:[{type:"road",z:-8,width:7},{type:"tree",pos:[-17,0,-12.4],scale:.95},{type:"tree",pos:[-10.5,0,-12.4],scale:.95},{type:"tree",pos:[-3.5,0,-12.4],scale:.95},{type:"tree",pos:[3.5,0,-12.4],scale:.95},{type:"tree",pos:[10,0,-12.4],scale:.95},{type:"tree",pos:[17,0,-12.4],scale:.95},{type:"car",pos:[-8.5,0,-5.6],color:"#d8402f",rot:0},{type:"car",pos:[8.8,0,-5.6],color:"#3d9a8b",rot:0},{type:"lamp",pos:[-6.2,0,-3.4],light:!0},{type:"lamp",pos:[6,0,-3.4],light:!0},{type:"lamp",pos:[-11.5,0,-3.4]},{type:"lamp",pos:[12,0,-3.4]},{type:"tree",pos:[-7.2,0,1.2],scale:1.05},{type:"tree",pos:[8.2,0,2.2],scale:1},{type:"bush",pos:[-8.6,0,3.4]},{type:"bush",pos:[9.4,0,4.6]},{type:"bench",pos:[6.6,0,5.6]},{type:"bin",pos:[-5.8,0,3.6]},{type:"hydrant",pos:[4.9,0,-3.5]},{type:"planter",pos:[-5.4,0,6.2]},{type:"planter",pos:[5.6,0,7.4]},{type:"sandwichBoard",pos:[1.9,0,6.6]},{type:"stall",pos:[-5.4,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"building",pos:[-32.6,0,-16.2],size:[6.2,6.7,6],color:"#e8c6a8",awning:"#2f7d6a"},{type:"building",pos:[-25.8,0,-16.2],size:[5.1,6.7,6],color:"#d9b08f",awning:"#d8402f"},{type:"building",pos:[-19.7,0,-16.2],size:[5.9,5.6,6],color:"#f2dcc4",awning:"#4a6fa5"},{type:"building",pos:[-12.8,0,-16.2],size:[5,6.3,6],color:"#c99a7e",awning:"#8c3b2e"},{type:"building",pos:[-6.1,0,-16.2],size:[4.8,5.7,6],color:"#e8c6a8",awning:"#e9a23b"},{type:"building",pos:[.2,0,-16.2],size:[5.3,7.1,6],color:"#d9b08f",awning:"#2f7d6a"},{type:"building",pos:[6.6,0,-16.2],size:[6.1,6.3,6],color:"#f2dcc4",awning:"#d8402f"},{type:"building",pos:[13.5,0,-16.2],size:[5.1,5.7,6],color:"#c99a7e",awning:"#4a6fa5"},{type:"building",pos:[19.5,0,-16.2],size:[5.3,8,6],color:"#e8c6a8",awning:"#8c3b2e"},{type:"building",pos:[26.5,0,-16.2],size:[5.8,7.7,6],color:"#d9b08f",awning:"#e9a23b"},{type:"building",pos:[32.5,0,-16.2],size:[5.1,7.4,6],color:"#f2dcc4",awning:"#2f7d6a"},{type:"stall",pos:[-5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#2f7d6a",awning:"#fff3dc"}]};var Eh={id:"cityBelgrade",nameKey:"city.belgrade.name",descKey:"city.belgrade.desc",unlock:{type:"city"},economy:{trafficMult:1,styleDemand:{}},_note:"Street behind the stand for this city. Generated from the corner street; the stand and its stations are laid out in code.",queueStart:[-2.2,0,4.4],queueStep:[.78,0,.9],queueRowLength:4,camera:{position:[0,6.6,12.8],target:[0,1.45,.7],fov:46},props:[{type:"road",z:-8,width:7},{type:"tree",pos:[-17,0,-12.4],scale:.95},{type:"tree",pos:[-10.5,0,-12.4],scale:.95},{type:"tree",pos:[-3.5,0,-12.4],scale:.95},{type:"tree",pos:[3.5,0,-12.4],scale:.95},{type:"tree",pos:[10,0,-12.4],scale:.95},{type:"tree",pos:[17,0,-12.4],scale:.95},{type:"car",pos:[-8.5,0,-5.6],color:"#d8402f",rot:0},{type:"car",pos:[8.8,0,-5.6],color:"#3d9a8b",rot:0},{type:"lamp",pos:[-6.2,0,-3.4],light:!0},{type:"lamp",pos:[6,0,-3.4],light:!0},{type:"lamp",pos:[-11.5,0,-3.4]},{type:"lamp",pos:[12,0,-3.4]},{type:"tree",pos:[-7.2,0,1.2],scale:1.05},{type:"tree",pos:[8.2,0,2.2],scale:1},{type:"bush",pos:[-8.6,0,3.4]},{type:"bush",pos:[9.4,0,4.6]},{type:"bench",pos:[6.6,0,5.6]},{type:"bin",pos:[-5.8,0,3.6]},{type:"hydrant",pos:[4.9,0,-3.5]},{type:"planter",pos:[-5.4,0,6.2]},{type:"planter",pos:[5.6,0,7.4]},{type:"sandwichBoard",pos:[1.9,0,6.6]},{type:"stall",pos:[-5.4,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"building",pos:[-48,0,-16.2],size:[7.6,9.2,6],color:"#d9c2a2",awning:"#2f7d6a"},{type:"building",pos:[-41.1,0,-16.2],size:[7.4,9.3,6],color:"#c9ab88",awning:"#d8402f"},{type:"building",pos:[-33.5,0,-16.2],size:[7.2,12.8,6],color:"#e8d5b8",awning:"#4a6fa5"},{type:"building",pos:[-25.7,0,-16.2],size:[7.2,11.7,6],color:"#b89a78",awning:"#8c3b2e"},{type:"building",pos:[-18.7,0,-16.2],size:[7.5,9.8,6],color:"#d9c2a2",awning:"#e9a23b"},{type:"building",pos:[-11.5,0,-16.2],size:[7,11.5,6],color:"#c9ab88",awning:"#2f7d6a"},{type:"building",pos:[-3.7,0,-16.2],size:[6.8,13.7,6],color:"#e8d5b8",awning:"#d8402f"},{type:"building",pos:[3.9,0,-16.2],size:[6.7,9.9,6],color:"#b89a78",awning:"#4a6fa5"},{type:"building",pos:[10.7,0,-16.2],size:[6.1,13.7,6],color:"#d9c2a2",awning:"#8c3b2e"},{type:"building",pos:[18.2,0,-16.2],size:[7.2,12.7,6],color:"#c9ab88",awning:"#e9a23b"},{type:"building",pos:[25.9,0,-16.2],size:[7,12.1,6],color:"#e8d5b8",awning:"#2f7d6a"},{type:"building",pos:[33,0,-16.2],size:[8,11.7,6],color:"#b89a78",awning:"#d8402f"},{type:"building",pos:[40.7,0,-16.2],size:[6.2,13.8,6],color:"#d9c2a2",awning:"#4a6fa5"},{type:"building",pos:[48.5,0,-16.2],size:[7.8,10.4,6],color:"#c9ab88",awning:"#8c3b2e"},{type:"stall",pos:[-5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#2f7d6a",awning:"#fff3dc"}]};var Th={id:"citySofia",nameKey:"city.sofia.name",descKey:"city.sofia.desc",unlock:{type:"city"},economy:{trafficMult:1,styleDemand:{}},_note:"Street behind the stand for this city. Generated from the corner street; the stand and its stations are laid out in code.",queueStart:[-2.2,0,4.4],queueStep:[.78,0,.9],queueRowLength:4,camera:{position:[0,6.6,12.8],target:[0,1.45,.7],fov:46},props:[{type:"road",z:-8,width:7},{type:"tree",pos:[-17,0,-12.4],scale:.95},{type:"tree",pos:[-10.5,0,-12.4],scale:.95},{type:"tree",pos:[-3.5,0,-12.4],scale:.95},{type:"tree",pos:[3.5,0,-12.4],scale:.95},{type:"tree",pos:[10,0,-12.4],scale:.95},{type:"tree",pos:[17,0,-12.4],scale:.95},{type:"car",pos:[-8.5,0,-5.6],color:"#d8402f",rot:0},{type:"car",pos:[8.8,0,-5.6],color:"#3d9a8b",rot:0},{type:"lamp",pos:[-6.2,0,-3.4],light:!0},{type:"lamp",pos:[6,0,-3.4],light:!0},{type:"lamp",pos:[-11.5,0,-3.4]},{type:"lamp",pos:[12,0,-3.4]},{type:"tree",pos:[-7.2,0,1.2],scale:1.05},{type:"tree",pos:[8.2,0,2.2],scale:1},{type:"bush",pos:[-8.6,0,3.4]},{type:"bush",pos:[9.4,0,4.6]},{type:"bench",pos:[6.6,0,5.6]},{type:"bin",pos:[-5.8,0,3.6]},{type:"hydrant",pos:[4.9,0,-3.5]},{type:"planter",pos:[-5.4,0,6.2]},{type:"planter",pos:[5.6,0,7.4]},{type:"sandwichBoard",pos:[1.9,0,6.6]},{type:"stall",pos:[-5.4,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"building",pos:[-48.2,0,-16.2],size:[7.9,11.1,6],color:"#e3d0ad",awning:"#2f7d6a"},{type:"building",pos:[-40.5,0,-16.2],size:[6.9,12.5,6],color:"#d4bd98",awning:"#d8402f"},{type:"building",pos:[-33.6,0,-16.2],size:[7.1,10,6],color:"#efe2c8",awning:"#4a6fa5"},{type:"building",pos:[-26.4,0,-16.2],size:[6.8,11.3,6],color:"#c4ab84",awning:"#8c3b2e"},{type:"building",pos:[-18.9,0,-16.2],size:[6.9,13,6],color:"#e3d0ad",awning:"#e9a23b"},{type:"building",pos:[-11.5,0,-16.2],size:[8,10.9,6],color:"#d4bd98",awning:"#2f7d6a"},{type:"building",pos:[-4.2,0,-16.2],size:[6.3,12.9,6],color:"#efe2c8",awning:"#d8402f"},{type:"building",pos:[3.8,0,-16.2],size:[7.3,11.9,6],color:"#c4ab84",awning:"#4a6fa5"},{type:"building",pos:[10.7,0,-16.2],size:[7.9,12.6,6],color:"#e3d0ad",awning:"#8c3b2e"},{type:"building",pos:[18.7,0,-16.2],size:[7.8,10.3,6],color:"#d4bd98",awning:"#e9a23b"},{type:"building",pos:[26.2,0,-16.2],size:[6.5,10.1,6],color:"#efe2c8",awning:"#2f7d6a"},{type:"building",pos:[33.9,0,-16.2],size:[7.2,13,6],color:"#c4ab84",awning:"#d8402f"},{type:"building",pos:[41,0,-16.2],size:[7.7,11.8,6],color:"#e3d0ad",awning:"#4a6fa5"},{type:"building",pos:[48.7,0,-16.2],size:[7.7,10.9,6],color:"#d4bd98",awning:"#8c3b2e"},{type:"dome",pos:[-3.5,0,-16.2],radius:3.2,height:4.2}]};var Ah={id:"cityBucharest",nameKey:"city.bucharest.name",descKey:"city.bucharest.desc",unlock:{type:"city"},economy:{trafficMult:1,styleDemand:{}},_note:"Street behind the stand for this city. Generated from the corner street; the stand and its stations are laid out in code.",queueStart:[-2.2,0,4.4],queueStep:[.78,0,.9],queueRowLength:4,camera:{position:[0,6.6,12.8],target:[0,1.45,.7],fov:46},props:[{type:"road",z:-8,width:7},{type:"tree",pos:[-17,0,-12.4],scale:.95},{type:"tree",pos:[-10.5,0,-12.4],scale:.95},{type:"tree",pos:[-3.5,0,-12.4],scale:.95},{type:"tree",pos:[3.5,0,-12.4],scale:.95},{type:"tree",pos:[10,0,-12.4],scale:.95},{type:"tree",pos:[17,0,-12.4],scale:.95},{type:"car",pos:[-8.5,0,-5.6],color:"#d8402f",rot:0},{type:"car",pos:[8.8,0,-5.6],color:"#3d9a8b",rot:0},{type:"lamp",pos:[-6.2,0,-3.4],light:!0},{type:"lamp",pos:[6,0,-3.4],light:!0},{type:"lamp",pos:[-11.5,0,-3.4]},{type:"lamp",pos:[12,0,-3.4]},{type:"tree",pos:[-7.2,0,1.2],scale:1.05},{type:"tree",pos:[8.2,0,2.2],scale:1},{type:"bush",pos:[-8.6,0,3.4]},{type:"bush",pos:[9.4,0,4.6]},{type:"bench",pos:[6.6,0,5.6]},{type:"bin",pos:[-5.8,0,3.6]},{type:"hydrant",pos:[4.9,0,-3.5]},{type:"planter",pos:[-5.4,0,6.2]},{type:"planter",pos:[5.6,0,7.4]},{type:"sandwichBoard",pos:[1.9,0,6.6]},{type:"stall",pos:[-5.4,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"building",pos:[-48,0,-16.2],size:[6.2,10.2,6],color:"#e6d2a8",awning:"#2f7d6a"},{type:"building",pos:[-41,0,-16.2],size:[6.9,10,6],color:"#d4bc90",awning:"#d8402f"},{type:"building",pos:[-33.1,0,-16.2],size:[7.2,10.3,6],color:"#f2e4c4",awning:"#4a6fa5"},{type:"building",pos:[-25.7,0,-16.2],size:[7.3,11.9,6],color:"#c4a97c",awning:"#8c3b2e"},{type:"building",pos:[-18.9,0,-16.2],size:[6.4,10.4,6],color:"#e6d2a8",awning:"#e9a23b"},{type:"building",pos:[-11.5,0,-16.2],size:[6.6,13.3,6],color:"#d4bc90",awning:"#2f7d6a"},{type:"building",pos:[-3.3,0,-16.2],size:[7.6,12.3,6],color:"#f2e4c4",awning:"#d8402f"},{type:"building",pos:[4,0,-16.2],size:[7.9,9.3,6],color:"#c4a97c",awning:"#4a6fa5"},{type:"building",pos:[11.3,0,-16.2],size:[7.5,9,6],color:"#e6d2a8",awning:"#8c3b2e"},{type:"building",pos:[18.6,0,-16.2],size:[7.7,10.2,6],color:"#d4bc90",awning:"#e9a23b"},{type:"building",pos:[26.2,0,-16.2],size:[7.8,9.5,6],color:"#f2e4c4",awning:"#2f7d6a"},{type:"building",pos:[33,0,-16.2],size:[7.6,13,6],color:"#c4a97c",awning:"#d8402f"},{type:"building",pos:[40.8,0,-16.2],size:[7.1,12.8,6],color:"#e6d2a8",awning:"#4a6fa5"},{type:"building",pos:[47.9,0,-16.2],size:[7.2,10.2,6],color:"#d4bc90",awning:"#8c3b2e"},{type:"dome",pos:[-3.5,0,-16.2],radius:3.2,height:4.2}]};var Ch={id:"cityIstanbul",nameKey:"city.istanbul.name",descKey:"city.istanbul.desc",unlock:{type:"city"},economy:{trafficMult:1,styleDemand:{}},_note:"Street behind the stand for this city. Generated from the corner street; the stand and its stations are laid out in code.",queueStart:[-2.2,0,4.4],queueStep:[.78,0,.9],queueRowLength:4,camera:{position:[0,6.6,12.8],target:[0,1.45,.7],fov:46},props:[{type:"road",z:-8,width:7},{type:"car",pos:[-8.5,0,-5.6],color:"#d8402f",rot:0},{type:"car",pos:[8.8,0,-5.6],color:"#3d9a8b",rot:0},{type:"lamp",pos:[-6.2,0,-3.4],light:!0},{type:"lamp",pos:[6,0,-3.4],light:!0},{type:"lamp",pos:[-11.5,0,-3.4]},{type:"lamp",pos:[12,0,-3.4]},{type:"bush",pos:[-8.6,0,3.4]},{type:"bush",pos:[9.4,0,4.6]},{type:"bench",pos:[6.6,0,5.6]},{type:"bin",pos:[-5.8,0,3.6]},{type:"hydrant",pos:[4.9,0,-3.5]},{type:"planter",pos:[-5.4,0,6.2]},{type:"planter",pos:[5.6,0,7.4]},{type:"sandwichBoard",pos:[1.9,0,6.6]},{type:"stall",pos:[-5.4,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"building",pos:[-66,0,-16.2],size:[6.7,20.7,6],color:"#e8d6b8",awning:"#2f7d6a"},{type:"building",pos:[-59,0,-16.2],size:[6,24.1,6],color:"#d9c4a2",awning:"#d8402f"},{type:"building",pos:[-51.5,0,-16.2],size:[6.4,18.9,6],color:"#f3e6d2",awning:"#4a6fa5"},{type:"building",pos:[-44.5,0,-16.2],size:[8.1,25.7,6],color:"#c9b08c",awning:"#8c3b2e"},{type:"building",pos:[-37,0,-16.2],size:[7.3,19,6],color:"#e8d6b8",awning:"#e9a23b"},{type:"building",pos:[-29.5,0,-16.2],size:[6.6,21.7,6],color:"#d9c4a2",awning:"#2f7d6a"},{type:"building",pos:[-21.7,0,-16.2],size:[8.1,20,6],color:"#f3e6d2",awning:"#d8402f"},{type:"building",pos:[-14.7,0,-16.2],size:[7.8,21.4,6],color:"#c9b08c",awning:"#4a6fa5"},{type:"building",pos:[-7.3,0,-16.2],size:[6.7,25.3,6],color:"#e8d6b8",awning:"#8c3b2e"},{type:"building",pos:[.4,0,-16.2],size:[7.6,24.2,6],color:"#d9c4a2",awning:"#e9a23b"},{type:"building",pos:[7.3,0,-16.2],size:[6.7,20.4,6],color:"#f3e6d2",awning:"#2f7d6a"},{type:"building",pos:[14.4,0,-16.2],size:[8.4,17.6,6],color:"#c9b08c",awning:"#d8402f"},{type:"building",pos:[22.2,0,-16.2],size:[6.6,20.5,6],color:"#e8d6b8",awning:"#4a6fa5"},{type:"building",pos:[29.5,0,-16.2],size:[7.4,23.2,6],color:"#d9c4a2",awning:"#8c3b2e"},{type:"building",pos:[36.4,0,-16.2],size:[6.3,24.6,6],color:"#f3e6d2",awning:"#e9a23b"},{type:"building",pos:[44.4,0,-16.2],size:[7.8,19.5,6],color:"#c9b08c",awning:"#2f7d6a"},{type:"building",pos:[51.5,0,-16.2],size:[7,22.6,6],color:"#e8d6b8",awning:"#d8402f"},{type:"building",pos:[58.7,0,-16.2],size:[6.8,21.9,6],color:"#d9c4a2",awning:"#4a6fa5"},{type:"building",pos:[66.7,0,-16.2],size:[6.8,18.8,6],color:"#f3e6d2",awning:"#8c3b2e"},{type:"dome",pos:[-3.5,0,-16.2],radius:3.2,height:4.2}]};var Rh={id:"cityAthens",nameKey:"city.athens.name",descKey:"city.athens.desc",unlock:{type:"city"},economy:{trafficMult:1,styleDemand:{}},_note:"Street behind the stand for this city. Generated from the corner street; the stand and its stations are laid out in code.",queueStart:[-2.2,0,4.4],queueStep:[.78,0,.9],queueRowLength:4,camera:{position:[0,6.6,12.8],target:[0,1.45,.7],fov:46},props:[{type:"road",z:-8,width:7},{type:"tree",pos:[-17,0,-12.4],scale:.95},{type:"tree",pos:[-10.5,0,-12.4],scale:.95},{type:"tree",pos:[-3.5,0,-12.4],scale:.95},{type:"tree",pos:[3.5,0,-12.4],scale:.95},{type:"tree",pos:[10,0,-12.4],scale:.95},{type:"tree",pos:[17,0,-12.4],scale:.95},{type:"car",pos:[-8.5,0,-5.6],color:"#d8402f",rot:0},{type:"car",pos:[8.8,0,-5.6],color:"#3d9a8b",rot:0},{type:"lamp",pos:[-6.2,0,-3.4],light:!0},{type:"lamp",pos:[6,0,-3.4],light:!0},{type:"lamp",pos:[-11.5,0,-3.4]},{type:"lamp",pos:[12,0,-3.4]},{type:"tree",pos:[-7.2,0,1.2],scale:1.05},{type:"tree",pos:[8.2,0,2.2],scale:1},{type:"bush",pos:[-8.6,0,3.4]},{type:"bush",pos:[9.4,0,4.6]},{type:"bench",pos:[6.6,0,5.6]},{type:"bin",pos:[-5.8,0,3.6]},{type:"hydrant",pos:[4.9,0,-3.5]},{type:"planter",pos:[-5.4,0,6.2]},{type:"planter",pos:[5.6,0,7.4]},{type:"sandwichBoard",pos:[1.9,0,6.6]},{type:"stall",pos:[-5.4,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"building",pos:[-48.1,0,-16.2],size:[6.5,12.2,6],color:"#f0e6d2",awning:"#2f7d6a"},{type:"building",pos:[-40.4,0,-16.2],size:[6.4,13.1,6],color:"#e0d4bb",awning:"#d8402f"},{type:"building",pos:[-33.3,0,-16.2],size:[7.1,12.6,6],color:"#f7efdf",awning:"#4a6fa5"},{type:"building",pos:[-25.6,0,-16.2],size:[6.9,11.5,6],color:"#d4c6a8",awning:"#8c3b2e"},{type:"building",pos:[-18.2,0,-16.2],size:[7.7,13.6,6],color:"#f0e6d2",awning:"#e9a23b"},{type:"building",pos:[-11.5,0,-16.2],size:[7.6,12.8,6],color:"#e0d4bb",awning:"#2f7d6a"},{type:"building",pos:[-3.7,0,-16.2],size:[7.1,11.5,6],color:"#f7efdf",awning:"#d8402f"},{type:"building",pos:[3.9,0,-16.2],size:[6.4,11.3,6],color:"#d4c6a8",awning:"#4a6fa5"},{type:"building",pos:[11.3,0,-16.2],size:[7.3,13,6],color:"#f0e6d2",awning:"#8c3b2e"},{type:"building",pos:[18.3,0,-16.2],size:[6.3,12.7,6],color:"#e0d4bb",awning:"#e9a23b"},{type:"building",pos:[26.4,0,-16.2],size:[7.4,12.4,6],color:"#f7efdf",awning:"#2f7d6a"},{type:"building",pos:[33.9,0,-16.2],size:[6.8,9.2,6],color:"#d4c6a8",awning:"#d8402f"},{type:"building",pos:[41.2,0,-16.2],size:[6.5,10.8,6],color:"#f0e6d2",awning:"#4a6fa5"},{type:"building",pos:[48.1,0,-16.2],size:[7.1,10.7,6],color:"#e0d4bb",awning:"#8c3b2e"},{type:"dome",pos:[-3.5,0,-16.2],radius:3.2,height:4.2}]};var Ph={id:"cityTelaviv",nameKey:"city.telaviv.name",descKey:"city.telaviv.desc",unlock:{type:"city"},economy:{trafficMult:1,styleDemand:{}},_note:"Street behind the stand for this city. Generated from the corner street; the stand and its stations are laid out in code.",queueStart:[-2.2,0,4.4],queueStep:[.78,0,.9],queueRowLength:4,camera:{position:[0,6.6,12.8],target:[0,1.45,.7],fov:46},props:[{type:"road",z:-8,width:7},{type:"car",pos:[-8.5,0,-5.6],color:"#d8402f",rot:0},{type:"car",pos:[8.8,0,-5.6],color:"#3d9a8b",rot:0},{type:"lamp",pos:[-6.2,0,-3.4],light:!0},{type:"lamp",pos:[6,0,-3.4],light:!0},{type:"lamp",pos:[-11.5,0,-3.4]},{type:"lamp",pos:[12,0,-3.4]},{type:"bush",pos:[-8.6,0,3.4]},{type:"bush",pos:[9.4,0,4.6]},{type:"bench",pos:[6.6,0,5.6]},{type:"bin",pos:[-5.8,0,3.6]},{type:"hydrant",pos:[4.9,0,-3.5]},{type:"planter",pos:[-5.4,0,6.2]},{type:"planter",pos:[5.6,0,7.4]},{type:"sandwichBoard",pos:[1.9,0,6.6]},{type:"stall",pos:[-5.4,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"stall",pos:[5.6,0,-3.7],color:"#d8402f",awning:"#fff3dc"},{type:"building",pos:[-66.1,0,-16.2],size:[8.5,18.6,6],color:"#f4f1ea",awning:"#2f7d6a"},{type:"building",pos:[-59.1,0,-16.2],size:[6.7,22.8,6],color:"#e8e3d6",awning:"#d8402f"},{type:"building",pos:[-51.8,0,-16.2],size:[6.4,23.8,6],color:"#dfe7e4",awning:"#4a6fa5"},{type:"building",pos:[-44.5,0,-16.2],size:[8,25.4,6],color:"#f0e6d6",awning:"#8c3b2e"},{type:"building",pos:[-36.8,0,-16.2],size:[6.2,17.8,6],color:"#f4f1ea",awning:"#e9a23b"},{type:"building",pos:[-29.5,0,-16.2],size:[7,18,6],color:"#e8e3d6",awning:"#2f7d6a"},{type:"building",pos:[-22.1,0,-16.2],size:[7,22.8,6],color:"#dfe7e4",awning:"#d8402f"},{type:"building",pos:[-14.7,0,-16.2],size:[6.4,22.8,6],color:"#f0e6d6",awning:"#4a6fa5"},{type:"building",pos:[-7,0,-16.2],size:[7.4,24.6,6],color:"#f4f1ea",awning:"#8c3b2e"},{type:"building",pos:[0,0,-16.2],size:[7.1,19.3,6],color:"#e8e3d6",awning:"#e9a23b"},{type:"building",pos:[7.1,0,-16.2],size:[8.2,25.7,6],color:"#dfe7e4",awning:"#2f7d6a"},{type:"building",pos:[14.3,0,-16.2],size:[6.4,25.1,6],color:"#f0e6d6",awning:"#d8402f"},{type:"building",pos:[22,0,-16.2],size:[8,22.5,6],color:"#f4f1ea",awning:"#4a6fa5"},{type:"building",pos:[29.2,0,-16.2],size:[8.2,23.5,6],color:"#e8e3d6",awning:"#8c3b2e"},{type:"building",pos:[37,0,-16.2],size:[7.7,19.2,6],color:"#dfe7e4",awning:"#e9a23b"},{type:"building",pos:[44.4,0,-16.2],size:[8.4,24.8,6],color:"#f0e6d6",awning:"#2f7d6a"},{type:"building",pos:[51.7,0,-16.2],size:[6.9,22.8,6],color:"#f4f1ea",awning:"#d8402f"},{type:"building",pos:[58.7,0,-16.2],size:[8.2,24,6],color:"#e8e3d6",awning:"#4a6fa5"},{type:"building",pos:[66,0,-16.2],size:[7.1,16.9,6],color:"#dfe7e4",awning:"#8c3b2e"}]};var Ma={cityRiccione:rh,cityRavenna:oh,cityFlorence:ah,cityMilan:ch,cityRome:lh,cityZurich:hh,cityMonaco:uh,cityBarcelona:dh,cityMadrid:ph,cityLisbon:fh,cityParis:mh,cityBrussels:gh,cityAmsterdam:yh,cityLondon:_h,cityLiverpool:bh,cityBerlin:vh,cityWarsaw:xh,cityMinsk:Mh,cityBudapest:wh,cityZagreb:Sh,cityBelgrade:Eh,citySofia:Th,cityBucharest:Ah,cityIstanbul:Ch,cityAthens:Rh,cityTelaviv:Ph},Lh={};for(let n of sh)Ma[n]?Lh[Ma[n].id]=Ma[n]:console.warn("[bundle] location listed in index.json but not bundled:",n);globalThis.__PIZZA_DATA__={economy:nh,strings:ih,locations:Lh};var jc="160";var Yf=0,Ih=1,Zf=2;var Uo=1,$f=2,Nn=3,ii=0,Ht=1,gn=2;var ei=0,ps=1,Kr=2,zh=3,Dh=4,Kf=5,wi=100,Jf=101,Qf=102,Uh=103,Nh=104,jf=200,e0=201,t0=202,n0=203,oc=204,ac=205,i0=206,s0=207,r0=208,o0=209,a0=210,c0=211,l0=212,h0=213,u0=214,d0=0,p0=1,f0=2,Jr=3,m0=4,g0=5,y0=6,_0=7,No=0,b0=1,v0=2,ti=0,x0=1,M0=2,w0=3,el=4,S0=5,E0=6;var dd=300,gs=301,ys=302,cc=303,lc=304,ko=306,Ys=1e3,yn=1001,hc=1002,qt=1003,kh=1004;var wa=1005;var tn=1006,T0=1007;var Zs=1008;var ni=1009,A0=1010,C0=1011,tl=1012,pd=1013,Qn=1014,jn=1015,$s=1016,fd=1017,md=1018,Ei=1020,R0=1021,_n=1023,P0=1024,L0=1025,Ti=1026,_s=1027,I0=1028,gd=1029,z0=1030,yd=1031,_d=1033,Sa=33776,Ea=33777,Ta=33778,Aa=33779,Fh=35840,Oh=35841,Bh=35842,Hh=35843,bd=36196,Vh=37492,Gh=37496,Wh=37808,qh=37809,Xh=37810,Yh=37811,Zh=37812,$h=37813,Kh=37814,Jh=37815,Qh=37816,jh=37817,eu=37818,tu=37819,nu=37820,iu=37821,Ca=36492,su=36494,ru=36495,D0=36283,ou=36284,au=36285,cu=36286;var Qr=2300,jr=2301,Ra=2302,lu=2400,hu=2401,uu=2402;var vd=3e3,Ai=3001,U0=3200,N0=3201,nl=0,k0=1,nn="",bt="srgb",On="srgb-linear",il="display-p3",Fo="display-p3-linear",eo="linear",ht="srgb",to="rec709",no="p3";var Zi=7680;var du=519,F0=512,O0=513,B0=514,xd=515,H0=516,V0=517,G0=518,W0=519,pu=35044;var fu="300 es",uc=1035,Fn=2e3,io=2001,si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Pa=Math.PI/180,dc=180/Math.PI;function rr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function It(n,e,t){return Math.max(e,Math.min(t,n))}function q0(n,e){return(n%e+e)%e}function La(n,e,t){return(1-t)*n+t*e}function mu(n){return(n&n-1)===0&&n!==0}function pc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ks(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var de=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class n{constructor(e,t,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],y=s[0],m=s[3],f=s[6],b=s[1],_=s[4],M=s[7],C=s[2],E=s[5],A=s[8];return r[0]=o*y+a*b+c*C,r[3]=o*m+a*_+c*E,r[6]=o*f+a*M+c*A,r[1]=l*y+h*b+u*C,r[4]=l*m+h*_+u*E,r[7]=l*f+h*M+u*A,r[2]=d*y+p*b+g*C,r[5]=d*m+p*_+g*E,r[8]=d*f+p*M+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,g=t*u+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(s*l-h*i)*y,e[2]=(a*i-s*o)*y,e[3]=d*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-a*t)*y,e[6]=p*y,e[7]=(i*c-l*t)*y,e[8]=(o*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ia.makeScale(e,t)),this}rotate(e){return this.premultiply(Ia.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ia=new We;function Md(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function so(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function X0(){let n=so("canvas");return n.style.display="block",n}var gu={};function Gs(n){n in gu||(gu[n]=!0,console.warn(n))}var yu=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_u=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wr={[On]:{transfer:eo,primaries:to,toReference:n=>n,fromReference:n=>n},[bt]:{transfer:ht,primaries:to,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Fo]:{transfer:eo,primaries:no,toReference:n=>n.applyMatrix3(_u),fromReference:n=>n.applyMatrix3(yu)},[il]:{transfer:ht,primaries:no,toReference:n=>n.convertSRGBToLinear().applyMatrix3(_u),fromReference:n=>n.applyMatrix3(yu).convertLinearToSRGB()}},Y0=new Set([On,Fo]),nt={enabled:!0,_workingColorSpace:On,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Y0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=wr[e].toReference,s=wr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return wr[n].primaries},getTransfer:function(n){return n===nn?eo:wr[n].transfer}};function fs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function za(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var $i,ro=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$i===void 0&&($i=so("canvas")),$i.width=e.width,$i.height=e.height;let i=$i.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=$i}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=so("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=fs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(fs(t[i]/255)*255):t[i]=fs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Z0=0,oo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=rr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Da(s[o].image)):r.push(Da(s[o]))}else r=Da(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Da(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ro.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var $0=0,sn=class n extends si{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=yn,s=yn,r=tn,o=Zs,a=_n,c=ni,l=n.DEFAULT_ANISOTROPY,h=nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=rr(),this.name="",this.source=new oo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Gs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ai?bt:nn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ys:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case hc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ys:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case hc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Gs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===bt?Ai:vd}set encoding(e){Gs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ai?bt:nn}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=dd;sn.DEFAULT_ANISOTROPY=1;var pt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],y=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,M=(p+1)/2,C=(f+1)/2,E=(h+d)/4,A=(u+y)/4,D=(g+m)/4;return _>M&&_>C?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=E/i,r=A/i):M>C?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=E/s,r=D/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=A/r,s=D/r),this.set(i,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-y)/b,this.z=(d-h)/b,this.w=Math.acos((l+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},fc=class extends si{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(Gs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ai?bt:nn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new sn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new oo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bn=class extends fc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ao=class extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mc=class extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],p=r[o+1],g=r[o+2],y=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(u!==y||c!==d||l!==p||h!==g){let m=1-a,f=c*d+l*p+h*g+u*y,b=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){let C=Math.sqrt(_),E=Math.atan2(C,f*b);m=Math.sin(m*E)/C,a=Math.sin(a*E)/C}let M=a*b;if(c=c*m+d*M,l=l*m+p*M,h=h*m+g*M,u=u*m+y*M,m===1-a){let C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*p-l*d,e[t+1]=c*g+h*d+l*u-a*p,e[t+2]=l*g+h*p+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),d=c(i/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ua.copy(this).projectOnVector(e),this.sub(Ua)}reflect(e){return this.sub(Ua.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ua=new P,bu=new Sn,Ci=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pn):pn.fromBufferAttribute(r,o),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sr.copy(i.boundingBox)),Sr.applyMatrix4(e.matrixWorld),this.union(Sr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),Er.subVectors(this.max,Fs),Ki.subVectors(e.a,Fs),Ji.subVectors(e.b,Fs),Qi.subVectors(e.c,Fs),Yn.subVectors(Ji,Ki),Zn.subVectors(Qi,Ji),_i.subVectors(Ki,Qi);let t=[0,-Yn.z,Yn.y,0,-Zn.z,Zn.y,0,-_i.z,_i.y,Yn.z,0,-Yn.x,Zn.z,0,-Zn.x,_i.z,0,-_i.x,-Yn.y,Yn.x,0,-Zn.y,Zn.x,0,-_i.y,_i.x,0];return!Na(t,Ki,Ji,Qi,Er)||(t=[1,0,0,0,1,0,0,0,1],!Na(t,Ki,Ji,Qi,Er))?!1:(Tr.crossVectors(Yn,Zn),t=[Tr.x,Tr.y,Tr.z],Na(t,Ki,Ji,Qi,Er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ln=[new P,new P,new P,new P,new P,new P,new P,new P],pn=new P,Sr=new Ci,Ki=new P,Ji=new P,Qi=new P,Yn=new P,Zn=new P,_i=new P,Fs=new P,Er=new P,Tr=new P,bi=new P;function Na(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){bi.fromArray(n,r);let a=s.x*Math.abs(bi.x)+s.y*Math.abs(bi.y)+s.z*Math.abs(bi.z),c=e.dot(bi),l=t.dot(bi),h=i.dot(bi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var K0=new Ci,Os=new P,ka=new P,Ri=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):K0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Os.subVectors(e,this.center);let t=Os.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Os,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Os.copy(e.center).add(ka)),this.expandByPoint(Os.copy(e.center).sub(ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},In=new P,Fa=new P,Ar=new P,$n=new P,Oa=new P,Cr=new P,Ba=new P,bs=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Fa.copy(e).add(t).multiplyScalar(.5),Ar.copy(t).sub(e).normalize(),$n.copy(this.origin).sub(Fa);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ar),a=$n.dot(this.direction),c=-$n.dot(Ar),l=$n.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Fa).addScaledVector(Ar,d),p}intersectSphere(e,t){In.subVectors(e.center,this.origin);let i=In.dot(this.direction),s=In.dot(In)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,i,s,r){Oa.subVectors(t,e),Cr.subVectors(i,e),Ba.crossVectors(Oa,Cr);let o=this.direction.dot(Ba),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$n.subVectors(this.origin,e);let c=a*this.direction.dot(Cr.crossVectors($n,Cr));if(c<0)return null;let l=a*this.direction.dot(Oa.cross($n));if(l<0||c+l>o)return null;let h=-a*$n.dot(Ba);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ft=class n{constructor(e,t,i,s,r,o,a,c,l,h,u,d,p,g,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,u,d,p,g,y,m)}set(e,t,i,s,r,o,a,c,l,h,u,d,p,g,y,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/ji.setFromMatrixColumn(e,0).length(),r=1/ji.setFromMatrixColumn(e,1).length(),o=1/ji.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,p=o*u,g=a*h,y=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=d-y*l,t[9]=-a*c,t[2]=y-d*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,g=l*h,y=l*u;t[0]=d+y*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=y+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,g=l*h,y=l*u;t[0]=d-y*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=y-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,p=o*u,g=a*h,y=a*u;t[0]=c*h,t[4]=g*l-p,t[8]=d*l+y,t[1]=c*u,t[5]=y*l+d,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,p=o*l,g=a*c,y=a*l;t[0]=c*h,t[4]=y-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+g,t[10]=d-y*u}else if(e.order==="XZY"){let d=o*c,p=o*l,g=a*c,y=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+y,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(J0,e,Q0)}lookAt(e,t,i){let s=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),Kn.crossVectors(i,Kt),Kn.lengthSq()===0&&(Math.abs(i.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),Kn.crossVectors(i,Kt)),Kn.normalize(),Rr.crossVectors(Kt,Kn),s[0]=Kn.x,s[4]=Rr.x,s[8]=Kt.x,s[1]=Kn.y,s[5]=Rr.y,s[9]=Kt.y,s[2]=Kn.z,s[6]=Rr.z,s[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],y=i[6],m=i[10],f=i[14],b=i[3],_=i[7],M=i[11],C=i[15],E=s[0],A=s[4],D=s[8],x=s[12],w=s[1],F=s[5],U=s[9],W=s[13],L=s[2],k=s[6],G=s[10],K=s[14],Y=s[3],Z=s[7],j=s[11],te=s[15];return r[0]=o*E+a*w+c*L+l*Y,r[4]=o*A+a*F+c*k+l*Z,r[8]=o*D+a*U+c*G+l*j,r[12]=o*x+a*W+c*K+l*te,r[1]=h*E+u*w+d*L+p*Y,r[5]=h*A+u*F+d*k+p*Z,r[9]=h*D+u*U+d*G+p*j,r[13]=h*x+u*W+d*K+p*te,r[2]=g*E+y*w+m*L+f*Y,r[6]=g*A+y*F+m*k+f*Z,r[10]=g*D+y*U+m*G+f*j,r[14]=g*x+y*W+m*K+f*te,r[3]=b*E+_*w+M*L+C*Y,r[7]=b*A+_*F+M*k+C*Z,r[11]=b*D+_*U+M*G+C*j,r[15]=b*x+_*W+M*K+C*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],y=e[7],m=e[11],f=e[15];return g*(+r*c*u-s*l*u-r*a*d+i*l*d+s*a*p-i*c*p)+y*(+t*c*p-t*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+m*(+t*l*u-t*a*p-r*o*u+i*o*p+r*a*h-i*l*h)+f*(-s*a*h-t*c*u+t*a*d+s*o*u-i*o*d+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],y=e[13],m=e[14],f=e[15],b=u*m*l-y*d*l+y*c*p-a*m*p-u*c*f+a*d*f,_=g*d*l-h*m*l-g*c*p+o*m*p+h*c*f-o*d*f,M=h*y*l-g*u*l+g*a*p-o*y*p-h*a*f+o*u*f,C=g*u*c-h*y*c-g*a*d+o*y*d+h*a*m-o*u*m,E=t*b+i*_+s*M+r*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/E;return e[0]=b*A,e[1]=(y*d*r-u*m*r-y*s*p+i*m*p+u*s*f-i*d*f)*A,e[2]=(a*m*r-y*c*r+y*s*l-i*m*l-a*s*f+i*c*f)*A,e[3]=(u*c*r-a*d*r-u*s*l+i*d*l+a*s*p-i*c*p)*A,e[4]=_*A,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*f+t*d*f)*A,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*f-t*c*f)*A,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*p+t*c*p)*A,e[8]=M*A,e[9]=(g*u*r-h*y*r-g*i*p+t*y*p+h*i*f-t*u*f)*A,e[10]=(o*y*r-g*a*r+g*i*l-t*y*l-o*i*f+t*a*f)*A,e[11]=(h*a*r-o*u*r-h*i*l+t*u*l+o*i*p-t*a*p)*A,e[12]=C*A,e[13]=(h*y*s-g*u*s+g*i*d-t*y*d-h*i*m+t*u*m)*A,e[14]=(g*a*s-o*y*s-g*i*c+t*y*c+o*i*m-t*a*m)*A,e[15]=(o*u*s-h*a*s+h*i*c-t*u*c-o*i*d+t*a*d)*A,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,g=r*u,y=o*h,m=o*u,f=a*u,b=c*l,_=c*h,M=c*u,C=i.x,E=i.y,A=i.z;return s[0]=(1-(y+f))*C,s[1]=(p+M)*C,s[2]=(g-_)*C,s[3]=0,s[4]=(p-M)*E,s[5]=(1-(d+f))*E,s[6]=(m+b)*E,s[7]=0,s[8]=(g+_)*A,s[9]=(m-b)*A,s[10]=(1-(d+y))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=ji.set(s[0],s[1],s[2]).length(),o=ji.set(s[4],s[5],s[6]).length(),a=ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],fn.copy(this);let l=1/r,h=1/o,u=1/a;return fn.elements[0]*=l,fn.elements[1]*=l,fn.elements[2]*=l,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,t.setFromRotationMatrix(fn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Fn){let c=this.elements,l=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),p,g;if(a===Fn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===io)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Fn){let c=this.elements,l=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*l,p=(i+s)*h,g,y;if(a===Fn)g=(o+r)*u,y=-2*u;else if(a===io)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ji=new P,fn=new ft,J0=new P(0,0,0),Q0=new P(1,1,1),Kn=new P,Rr=new P,Kt=new P,vu=new ft,xu=new Sn,vs=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(It(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(It(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xu.setFromEuler(this),this.setFromQuaternion(xu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vs.DEFAULT_ORDER="XYZ";var Ks=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},j0=0,Mu=new P,es=new Sn,zn=new ft,Pr=new P,Bs=new P,em=new P,tm=new Sn,wu=new P(1,0,0),Su=new P(0,1,0),Eu=new P(0,0,1),nm={type:"added"},im={type:"removed"},zt=class n extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new P,t=new vs,i=new Sn,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new We}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ks,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(wu,e)}rotateY(e){return this.rotateOnAxis(Su,e)}rotateZ(e){return this.rotateOnAxis(Eu,e)}translateOnAxis(e,t){return Mu.copy(e).applyQuaternion(this.quaternion),this.position.add(Mu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wu,e)}translateY(e){return this.translateOnAxis(Su,e)}translateZ(e){return this.translateOnAxis(Eu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Pr.copy(e):Pr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Bs,Pr,this.up):zn.lookAt(Pr,Bs,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),es.setFromRotationMatrix(zn),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(nm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(im)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,em),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,tm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};zt.DEFAULT_UP=new P(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=new P,Dn=new P,Ha=new P,Un=new P,ts=new P,ns=new P,Tu=new P,Va=new P,Ga=new P,Wa=new P,Lr=!1,hs=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),mn.subVectors(e,t),s.cross(mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){mn.subVectors(s,t),Dn.subVectors(i,t),Ha.subVectors(e,t);let o=mn.dot(mn),a=mn.dot(Dn),c=mn.dot(Ha),l=Dn.dot(Dn),h=Dn.dot(Ha),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getUV(e,t,i,s,r,o,a,c){return Lr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Lr=!0),this.getInterpolation(e,t,i,s,r,o,a,c)}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Un.x),c.addScaledVector(o,Un.y),c.addScaledVector(a,Un.z),c)}static isFrontFacing(e,t,i,s){return mn.subVectors(i,t),Dn.subVectors(e,t),mn.cross(Dn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),mn.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Lr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Lr=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;ts.subVectors(s,i),ns.subVectors(r,i),Va.subVectors(e,i);let c=ts.dot(Va),l=ns.dot(Va);if(c<=0&&l<=0)return t.copy(i);Ga.subVectors(e,s);let h=ts.dot(Ga),u=ns.dot(Ga);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(ts,o);Wa.subVectors(e,r);let p=ts.dot(Wa),g=ns.dot(Wa);if(g>=0&&p<=g)return t.copy(r);let y=p*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(ns,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Tu.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(Tu,a);let f=1/(m+y+d);return o=y*f,a=d*f,t.copy(i).addScaledVector(ts,o).addScaledVector(ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function qa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var me=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=nt.workingColorSpace){if(e=q0(e,1),t=It(t,0,1),i=It(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=qa(o,r,e+1/3),this.g=qa(o,r,e),this.b=qa(o,r,e-1/3)}return nt.toWorkingColorSpace(this,s),this}setStyle(e,t=bt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){let i=wd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}copyLinearToSRGB(e){return this.r=za(e.r),this.g=za(e.g),this.b=za(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return nt.fromWorkingColorSpace(Ot.copy(this),e),Math.round(It(Ot.r*255,0,255))*65536+Math.round(It(Ot.g*255,0,255))*256+Math.round(It(Ot.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Ot.copy(this),t);let i=Ot.r,s=Ot.g,r=Ot.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=bt){nt.fromWorkingColorSpace(Ot.copy(this),e);let t=Ot.r,i=Ot.g,s=Ot.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(Ir);let i=La(Jn.h,Ir.h,t),s=La(Jn.s,Ir.s,t),r=La(Jn.l,Ir.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ot=new me;me.NAMES=wd;var sm=0,En=class extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=ps,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oc,this.blendDst=ac,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=Jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(i.blending=this.blending),this.side!==ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==oc&&(i.blendSrc=this.blendSrc),this.blendDst!==ac&&(i.blendDst=this.blendDst),this.blendEquation!==wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Jr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==du&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Mt=class extends En{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=No,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var wt=new P,zr=new de,Yt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=pu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)zr.fromBufferAttribute(this,t),zr.applyMatrix3(e),this.setXY(t,zr.x,zr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ks(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ks(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ks(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ks(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ks(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),s=Xt(s,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pu&&(e.usage=this.usage),e}};var co=class extends Yt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var lo=class extends Yt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var $e=class extends Yt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var rm=0,en=new ft,Xa=new zt,is=new P,Jt=new Ci,Hs=new Ci,Pt=new P,vt=class n extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Md(e)?lo:co)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new We().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,i){return en.makeTranslation(e,t,i),this.applyMatrix4(en),this}scale(e,t,i){return en.makeScale(e,t,i),this.applyMatrix4(en),this}lookAt(e){return Xa.lookAt(e),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new $e(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Hs.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(Jt.min,Hs.min),Jt.expandByPoint(Pt),Pt.addVectors(Jt.max,Hs.max),Jt.expandByPoint(Pt)):(Jt.expandByPoint(Hs.min),Jt.expandByPoint(Hs.max))}Jt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Pt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Pt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Pt.fromBufferAttribute(a,l),c&&(is.fromBufferAttribute(e,l),Pt.add(is)),s=Math.max(s,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let w=0;w<a;w++)l[w]=new P,h[w]=new P;let u=new P,d=new P,p=new P,g=new de,y=new de,m=new de,f=new P,b=new P;function _(w,F,U){u.fromArray(s,w*3),d.fromArray(s,F*3),p.fromArray(s,U*3),g.fromArray(o,w*2),y.fromArray(o,F*2),m.fromArray(o,U*2),d.sub(u),p.sub(u),y.sub(g),m.sub(g);let W=1/(y.x*m.y-m.x*y.y);isFinite(W)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-y.y).multiplyScalar(W),b.copy(p).multiplyScalar(y.x).addScaledVector(d,-m.x).multiplyScalar(W),l[w].add(f),l[F].add(f),l[U].add(f),h[w].add(b),h[F].add(b),h[U].add(b))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let w=0,F=M.length;w<F;++w){let U=M[w],W=U.start,L=U.count;for(let k=W,G=W+L;k<G;k+=3)_(i[k+0],i[k+1],i[k+2])}let C=new P,E=new P,A=new P,D=new P;function x(w){A.fromArray(r,w*3),D.copy(A);let F=l[w];C.copy(F),C.sub(A.multiplyScalar(A.dot(F))).normalize(),E.crossVectors(D,F);let W=E.dot(h[w])<0?-1:1;c[w*4]=C.x,c[w*4+1]=C.y,c[w*4+2]=C.z,c[w*4+3]=W}for(let w=0,F=M.length;w<F;++w){let U=M[w],W=U.start,L=U.count;for(let k=W,G=W+L;k<G;k+=3)x(i[k+0]),x(i[k+1]),x(i[k+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),p=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?p=c[y]*a.data.stride+a.offset:p=c[y]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new Yt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=e(d,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Au=new ft,vi=new bs,Dr=new Ri,Cu=new P,ss=new P,rs=new P,os=new P,Ya=new P,Ur=new P,Nr=new de,kr=new de,Fr=new de,Ru=new P,Pu=new P,Lu=new P,Or=new P,Br=new P,Pe=class extends zt{constructor(e=new vt,t=new Mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ur.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Ya.fromBufferAttribute(u,e),o?Ur.addScaledVector(Ya,h):Ur.addScaledVector(Ya.sub(t),h))}t.add(Ur)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Dr.copy(i.boundingSphere),Dr.applyMatrix4(r),vi.copy(e.ray).recast(e.near),!(Dr.containsPoint(vi.origin)===!1&&(vi.intersectSphere(Dr,Cu)===null||vi.origin.distanceToSquared(Cu)>(e.far-e.near)**2))&&(Au.copy(r).invert(),vi.copy(e.ray).applyMatrix4(Au),!(i.boundingBox!==null&&vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=o[m.materialIndex],b=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=b,C=_;M<C;M+=3){let E=a.getX(M),A=a.getX(M+1),D=a.getX(M+2);s=Hr(this,f,e,i,l,h,u,E,A,D),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let b=a.getX(m),_=a.getX(m+1),M=a.getX(m+2);s=Hr(this,o,e,i,l,h,u,b,_,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=o[m.materialIndex],b=Math.max(m.start,p.start),_=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=b,C=_;M<C;M+=3){let E=M,A=M+1,D=M+2;s=Hr(this,f,e,i,l,h,u,E,A,D),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let b=m,_=m+1,M=m+2;s=Hr(this,o,e,i,l,h,u,b,_,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function om(n,e,t,i,s,r,o,a){let c;if(e.side===Ht?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===ii,a),c===null)return null;Br.copy(a),Br.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Br);return l<t.near||l>t.far?null:{distance:l,point:Br.clone(),object:n}}function Hr(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,ss),n.getVertexPosition(c,rs),n.getVertexPosition(l,os);let h=om(n,e,t,i,ss,rs,os,Or);if(h){s&&(Nr.fromBufferAttribute(s,a),kr.fromBufferAttribute(s,c),Fr.fromBufferAttribute(s,l),h.uv=hs.getInterpolation(Or,ss,rs,os,Nr,kr,Fr,new de)),r&&(Nr.fromBufferAttribute(r,a),kr.fromBufferAttribute(r,c),Fr.fromBufferAttribute(r,l),h.uv1=hs.getInterpolation(Or,ss,rs,os,Nr,kr,Fr,new de),h.uv2=h.uv1),o&&(Ru.fromBufferAttribute(o,a),Pu.fromBufferAttribute(o,c),Lu.fromBufferAttribute(o,l),h.normal=hs.getInterpolation(Or,ss,rs,os,Ru,Pu,Lu,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new P,materialIndex:0};hs.getNormal(ss,rs,os,u.normal),h.face=u}return h}var Pi=class n extends vt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(u,2));function g(y,m,f,b,_,M,C,E,A,D,x){let w=M/A,F=C/D,U=M/2,W=C/2,L=E/2,k=A+1,G=D+1,K=0,Y=0,Z=new P;for(let j=0;j<G;j++){let te=j*F-W;for(let ce=0;ce<k;ce++){let X=ce*w-U;Z[y]=X*b,Z[m]=te*_,Z[f]=L,l.push(Z.x,Z.y,Z.z),Z[y]=0,Z[m]=0,Z[f]=E>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(ce/A),u.push(1-j/D),K+=1}}for(let j=0;j<D;j++)for(let te=0;te<A;te++){let ce=d+te+k*j,X=d+te+k*(j+1),Q=d+(te+1)+k*(j+1),ue=d+(te+1)+k*j;c.push(ce,X,ue),c.push(X,Q,ue),Y+=6}a.addGroup(p,Y,x),p+=Y,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function xs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Wt(n){let e={};for(let t=0;t<n.length;t++){let i=xs(n[t]);for(let s in i)e[s]=i[s]}return e}function am(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Sd(n){return n.getRenderTarget()===null?n.outputColorSpace:nt.workingColorSpace}var cm={clone:xs,merge:Wt},lm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bn=class extends En{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lm,this.fragmentShader=hm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=am(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ho=class extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Fn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Bt=class extends ho{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=dc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dc*2*Math.atan(Math.tan(Pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Pa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},as=-90,cs=1,gc=class extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bt(as,cs,e,t);s.layers=this.layers,this.add(s);let r=new Bt(as,cs,e,t);r.layers=this.layers,this.add(r);let o=new Bt(as,cs,e,t);o.layers=this.layers,this.add(o);let a=new Bt(as,cs,e,t);a.layers=this.layers,this.add(a);let c=new Bt(as,cs,e,t);c.layers=this.layers,this.add(c);let l=new Bt(as,cs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Fn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===io)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},uo=class extends sn{constructor(e,t,i,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:gs,super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},yc=class extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Gs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ai?bt:nn),this.texture=new uo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Pi(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:ei});r.uniforms.tEquirect.value=t;let o=new Pe(s,r),a=t.minFilter;return t.minFilter===Zs&&(t.minFilter=tn),new gc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Za=new P,um=new P,dm=new We,kn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Za.subVectors(i,t).cross(um.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Za),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||dm.getNormalMatrix(e),s=this.coplanarPoint(Za).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},xi=new Ri,Vr=new P,Js=class{constructor(e=new kn,t=new kn,i=new kn,s=new kn,r=new kn,o=new kn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Fn){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],y=s[10],m=s[11],f=s[12],b=s[13],_=s[14],M=s[15];if(i[0].setComponents(c-r,d-l,m-p,M-f).normalize(),i[1].setComponents(c+r,d+l,m+p,M+f).normalize(),i[2].setComponents(c+o,d+h,m+g,M+b).normalize(),i[3].setComponents(c-o,d-h,m-g,M-b).normalize(),i[4].setComponents(c-a,d-u,m-y,M-_).normalize(),t===Fn)i[5].setComponents(c+a,d+u,m+y,M+_).normalize();else if(t===io)i[5].setComponents(a,u,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Vr.x=s.normal.x>0?e.max.x:e.min.x,Vr.y=s.normal.y>0?e.max.y:e.min.y,Vr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ed(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function pm(n,e){let t=e.isWebGL2,i=new WeakMap;function s(l,h){let u=l.array,d=l.usage,p=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),l.onUploadCallback();let y;if(u instanceof Float32Array)y=n.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)y=n.SHORT;else if(u instanceof Uint32Array)y=n.UNSIGNED_INT;else if(u instanceof Int32Array)y=n.INT;else if(u instanceof Int8Array)y=n.BYTE;else if(u instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:y,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,h,u){let d=h.array,p=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,l),p.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let y=0,m=g.length;y<m;y++){let f=g[y];t?n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);if(u===void 0)i.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var Tn=class n extends vt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,p=[],g=[],y=[],m=[];for(let f=0;f<h;f++){let b=f*d-o;for(let _=0;_<l;_++){let M=_*u-r;g.push(M,-b,0),y.push(0,0,1),m.push(_/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<a;b++){let _=b+l*f,M=b+l*(f+1),C=b+1+l*(f+1),E=b+1+l*f;p.push(_,M,E),p.push(M,C,E)}this.setIndex(p),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(y,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},fm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ym=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_m=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,bm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mm=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Sm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Em=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Am=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Cm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Um=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,km=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Fm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Om=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",qm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Xm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$m=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Km=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ng=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ig=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,og=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ag=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ug=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_g=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,vg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ag=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Rg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Pg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ig=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ng=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Og=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Gg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$g=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Kg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ey=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ty=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ny=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,iy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ry=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ay=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,py=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,my=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_y=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,by=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,xy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,My=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ey=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ty=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ay=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ry=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Py=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ly=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Iy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Dy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Uy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ny=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ky=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,By=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:fm,alphahash_pars_fragment:mm,alphamap_fragment:gm,alphamap_pars_fragment:ym,alphatest_fragment:_m,alphatest_pars_fragment:bm,aomap_fragment:vm,aomap_pars_fragment:xm,batching_pars_vertex:Mm,batching_vertex:wm,begin_vertex:Sm,beginnormal_vertex:Em,bsdfs:Tm,iridescence_fragment:Am,bumpmap_pars_fragment:Cm,clipping_planes_fragment:Rm,clipping_planes_pars_fragment:Pm,clipping_planes_pars_vertex:Lm,clipping_planes_vertex:Im,color_fragment:zm,color_pars_fragment:Dm,color_pars_vertex:Um,color_vertex:Nm,common:km,cube_uv_reflection_fragment:Fm,defaultnormal_vertex:Om,displacementmap_pars_vertex:Bm,displacementmap_vertex:Hm,emissivemap_fragment:Vm,emissivemap_pars_fragment:Gm,colorspace_fragment:Wm,colorspace_pars_fragment:qm,envmap_fragment:Xm,envmap_common_pars_fragment:Ym,envmap_pars_fragment:Zm,envmap_pars_vertex:$m,envmap_physical_pars_fragment:ag,envmap_vertex:Km,fog_vertex:Jm,fog_pars_vertex:Qm,fog_fragment:jm,fog_pars_fragment:eg,gradientmap_pars_fragment:tg,lightmap_fragment:ng,lightmap_pars_fragment:ig,lights_lambert_fragment:sg,lights_lambert_pars_fragment:rg,lights_pars_begin:og,lights_toon_fragment:cg,lights_toon_pars_fragment:lg,lights_phong_fragment:hg,lights_phong_pars_fragment:ug,lights_physical_fragment:dg,lights_physical_pars_fragment:pg,lights_fragment_begin:fg,lights_fragment_maps:mg,lights_fragment_end:gg,logdepthbuf_fragment:yg,logdepthbuf_pars_fragment:_g,logdepthbuf_pars_vertex:bg,logdepthbuf_vertex:vg,map_fragment:xg,map_pars_fragment:Mg,map_particle_fragment:wg,map_particle_pars_fragment:Sg,metalnessmap_fragment:Eg,metalnessmap_pars_fragment:Tg,morphcolor_vertex:Ag,morphnormal_vertex:Cg,morphtarget_pars_vertex:Rg,morphtarget_vertex:Pg,normal_fragment_begin:Lg,normal_fragment_maps:Ig,normal_pars_fragment:zg,normal_pars_vertex:Dg,normal_vertex:Ug,normalmap_pars_fragment:Ng,clearcoat_normal_fragment_begin:kg,clearcoat_normal_fragment_maps:Fg,clearcoat_pars_fragment:Og,iridescence_pars_fragment:Bg,opaque_fragment:Hg,packing:Vg,premultiplied_alpha_fragment:Gg,project_vertex:Wg,dithering_fragment:qg,dithering_pars_fragment:Xg,roughnessmap_fragment:Yg,roughnessmap_pars_fragment:Zg,shadowmap_pars_fragment:$g,shadowmap_pars_vertex:Kg,shadowmap_vertex:Jg,shadowmask_pars_fragment:Qg,skinbase_vertex:jg,skinning_pars_vertex:ey,skinning_vertex:ty,skinnormal_vertex:ny,specularmap_fragment:iy,specularmap_pars_fragment:sy,tonemapping_fragment:ry,tonemapping_pars_fragment:oy,transmission_fragment:ay,transmission_pars_fragment:cy,uv_pars_fragment:ly,uv_pars_vertex:hy,uv_vertex:uy,worldpos_vertex:dy,background_vert:py,background_frag:fy,backgroundCube_vert:my,backgroundCube_frag:gy,cube_vert:yy,cube_frag:_y,depth_vert:by,depth_frag:vy,distanceRGBA_vert:xy,distanceRGBA_frag:My,equirect_vert:wy,equirect_frag:Sy,linedashed_vert:Ey,linedashed_frag:Ty,meshbasic_vert:Ay,meshbasic_frag:Cy,meshlambert_vert:Ry,meshlambert_frag:Py,meshmatcap_vert:Ly,meshmatcap_frag:Iy,meshnormal_vert:zy,meshnormal_frag:Dy,meshphong_vert:Uy,meshphong_frag:Ny,meshphysical_vert:ky,meshphysical_frag:Fy,meshtoon_vert:Oy,meshtoon_frag:By,points_vert:Hy,points_frag:Vy,shadow_vert:Gy,shadow_frag:Wy,sprite_vert:qy,sprite_frag:Xy},oe={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},wn={basic:{uniforms:Wt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Wt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new me(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Wt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Wt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Wt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new me(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Wt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Wt([oe.points,oe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Wt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Wt([oe.common,oe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Wt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Wt([oe.sprite,oe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Wt([oe.common,oe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Wt([oe.lights,oe.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};wn.physical={uniforms:Wt([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var Gr={r:0,b:0,g:0};function Yy(n,e,t,i,s,r,o){let a=new me(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(m,f){let b=!1,_=f.isScene===!0?f.background:null;_&&_.isTexture&&(_=(f.backgroundBlurriness>0?t:e).get(_)),_===null?y(a,c):_&&_.isColor&&(y(_,1),b=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===ko)?(h===void 0&&(h=new Pe(new Pi(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:xs(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=nt.getTransfer(_.colorSpace)!==ht,(u!==_||d!==_.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,p=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Pe(new Tn(2,2),new bn({name:"BackgroundMaterial",uniforms:xs(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=nt.getTransfer(_.colorSpace)!==ht,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,p=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function y(m,f){m.getRGB(Gr,Sd(n)),i.buffers.color.setClear(Gr.r,Gr.g,Gr.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),c=f,y(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,y(a,c)},render:g}}function Zy(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function u(L,k,G,K,Y){let Z=!1;if(o){let j=y(K,G,k);l!==j&&(l=j,p(l.object)),Z=f(L,K,G,Y),Z&&b(L,K,G,Y)}else{let j=k.wireframe===!0;(l.geometry!==K.id||l.program!==G.id||l.wireframe!==j)&&(l.geometry=K.id,l.program=G.id,l.wireframe=j,Z=!0)}Y!==null&&t.update(Y,n.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,D(L,k,G,K),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(L){return i.isWebGL2?n.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function y(L,k,G){let K=G.wireframe===!0,Y=a[L.id];Y===void 0&&(Y={},a[L.id]=Y);let Z=Y[k.id];Z===void 0&&(Z={},Y[k.id]=Z);let j=Z[K];return j===void 0&&(j=m(d()),Z[K]=j),j}function m(L){let k=[],G=[],K=[];for(let Y=0;Y<s;Y++)k[Y]=0,G[Y]=0,K[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:G,attributeDivisors:K,object:L,attributes:{},index:null}}function f(L,k,G,K){let Y=l.attributes,Z=k.attributes,j=0,te=G.getAttributes();for(let ce in te)if(te[ce].location>=0){let Q=Y[ce],ue=Z[ce];if(ue===void 0&&(ce==="instanceMatrix"&&L.instanceMatrix&&(ue=L.instanceMatrix),ce==="instanceColor"&&L.instanceColor&&(ue=L.instanceColor)),Q===void 0||Q.attribute!==ue||ue&&Q.data!==ue.data)return!0;j++}return l.attributesNum!==j||l.index!==K}function b(L,k,G,K){let Y={},Z=k.attributes,j=0,te=G.getAttributes();for(let ce in te)if(te[ce].location>=0){let Q=Z[ce];Q===void 0&&(ce==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),ce==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor));let ue={};ue.attribute=Q,Q&&Q.data&&(ue.data=Q.data),Y[ce]=ue,j++}l.attributes=Y,l.attributesNum=j,l.index=K}function _(){let L=l.newAttributes;for(let k=0,G=L.length;k<G;k++)L[k]=0}function M(L){C(L,0)}function C(L,k){let G=l.newAttributes,K=l.enabledAttributes,Y=l.attributeDivisors;G[L]=1,K[L]===0&&(n.enableVertexAttribArray(L),K[L]=1),Y[L]!==k&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,k),Y[L]=k)}function E(){let L=l.newAttributes,k=l.enabledAttributes;for(let G=0,K=k.length;G<K;G++)k[G]!==L[G]&&(n.disableVertexAttribArray(G),k[G]=0)}function A(L,k,G,K,Y,Z,j){j===!0?n.vertexAttribIPointer(L,k,G,Y,Z):n.vertexAttribPointer(L,k,G,K,Y,Z)}function D(L,k,G,K){if(i.isWebGL2===!1&&(L.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let Y=K.attributes,Z=G.getAttributes(),j=k.defaultAttributeValues;for(let te in Z){let ce=Z[te];if(ce.location>=0){let X=Y[te];if(X===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(X=L.instanceColor)),X!==void 0){let Q=X.normalized,ue=X.itemSize,Me=t.get(X);if(Me===void 0)continue;let ve=Me.buffer,Te=Me.type,ze=Me.bytesPerElement,Le=i.isWebGL2===!0&&(Te===n.INT||Te===n.UNSIGNED_INT||X.gpuType===pd);if(X.isInterleavedBufferAttribute){let Je=X.data,B=Je.stride,Lt=X.offset;if(Je.isInstancedInterleavedBuffer){for(let ye=0;ye<ce.locationSize;ye++)C(ce.location+ye,Je.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Je.meshPerAttribute*Je.count)}else for(let ye=0;ye<ce.locationSize;ye++)M(ce.location+ye);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let ye=0;ye<ce.locationSize;ye++)A(ce.location+ye,ue/ce.locationSize,Te,Q,B*ze,(Lt+ue/ce.locationSize*ye)*ze,Le)}else{if(X.isInstancedBufferAttribute){for(let Je=0;Je<ce.locationSize;Je++)C(ce.location+Je,X.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Je=0;Je<ce.locationSize;Je++)M(ce.location+Je);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let Je=0;Je<ce.locationSize;Je++)A(ce.location+Je,ue/ce.locationSize,Te,Q,ue*ze,ue/ce.locationSize*Je*ze,Le)}}else if(j!==void 0){let Q=j[te];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(ce.location,Q);break;case 3:n.vertexAttrib3fv(ce.location,Q);break;case 4:n.vertexAttrib4fv(ce.location,Q);break;default:n.vertexAttrib1fv(ce.location,Q)}}}}E()}function x(){U();for(let L in a){let k=a[L];for(let G in k){let K=k[G];for(let Y in K)g(K[Y].object),delete K[Y];delete k[G]}delete a[L]}}function w(L){if(a[L.id]===void 0)return;let k=a[L.id];for(let G in k){let K=k[G];for(let Y in K)g(K[Y].object),delete K[Y];delete k[G]}delete a[L.id]}function F(L){for(let k in a){let G=a[k];if(G[L.id]===void 0)continue;let K=G[L.id];for(let Y in K)g(K[Y].object),delete K[Y];delete G[L.id]}}function U(){W(),h=!0,l!==c&&(l=c,p(l.object))}function W(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:U,resetDefaultState:W,dispose:x,releaseStatesOfGeometry:w,releaseStatesOfProgram:F,initAttributes:_,enableAttribute:M,disableUnusedAttributes:E}}function $y(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,d){if(d===0)return;let p,g;if(s)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,d),t.update(u,r,d)}function l(h,u,d){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let y=0;y<d;y++)g+=u[y];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Ky(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,M=o||e.has("OES_texture_float"),C=_&&M,E=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:b,vertexTextures:_,floatFragmentTextures:M,floatVertexTextures:C,maxSamples:E}}function Jy(n){let e=this,t=null,i=0,s=!1,r=!1,o=new kn,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let b=r?0:i,_=b*4,M=f.clippingState||null;c.value=M,M=h(g,d,_,p);for(let C=0;C!==_;++C)M[C]=t[C];f.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let f=p+y*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,M=p;_!==y;++_,M+=4)o.copy(u[_]).applyMatrix4(b,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function Qy(n){let e=new WeakMap;function t(o,a){return a===cc?o.mapping=gs:a===lc&&(o.mapping=ys),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===cc||a===lc)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new yc(c.height/2);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var po=class extends ho{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},us=4,Iu=[.125,.215,.35,.446,.526,.582],Si=20,$a=new po,zu=new me,Ka=null,Ja=0,Qa=0,Mi=(1+Math.sqrt(5))/2,ls=1/Mi,Du=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Mi,ls),new P(0,Mi,-ls),new P(ls,0,Mi),new P(-ls,0,Mi),new P(Mi,ls,0),new P(-Mi,ls,0)],fo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Ka=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ka,Ja,Qa),e.scissorTest=!1,Wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gs||e.mapping===ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ka=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:$s,format:_n,colorSpace:On,depthBuffer:!1},s=Uu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uu(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jy(r)),this._blurMaterial=e_(r,e,t)}return s}_compileMaterial(e){let t=new Pe(this._lodPlanes[0],e);this._renderer.compile(t,$a)}_sceneToCubeUV(e,t,i,s){let a=new Bt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(zu),h.toneMapping=ti,h.autoClear=!1;let p=new Mt({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),g=new Pe(new Pi,p),y=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(zu),y=!0);for(let f=0;f<6;f++){let b=f%3;b===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):b===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let _=this._cubeSize;Wr(s,b*_,f>2?_:0,_,_),h.setRenderTarget(s),y&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===gs||e.mapping===ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ku()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Pe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Wr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,$a)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Du[(s-1)%Du.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Pe(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Si-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):Si;m>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Si}`);let f=[],b=0;for(let A=0;A<Si;++A){let D=A/y,x=Math.exp(-D*D/2);f.push(x),A===0?b+=x:A<m&&(b+=2*x)}for(let A=0;A<f.length;A++)f[A]=f[A]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;let M=this._sizeLods[s],C=3*M*(s>_-us?s-_+us:0),E=4*(this._cubeSize-M);Wr(t,C,E,3*M,2*M),c.setRenderTarget(t),c.render(u,$a)}};function jy(n){let e=[],t=[],i=[],s=n,r=n-us+1+Iu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>n-us?c=Iu[o-n+us-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,y=3,m=2,f=1,b=new Float32Array(y*g*p),_=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let E=0;E<p;E++){let A=E%3*2/3-1,D=E>2?0:-1,x=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];b.set(x,y*g*E),_.set(d,m*g*E);let w=[E,E,E,E,E,E];M.set(w,f*g*E)}let C=new vt;C.setAttribute("position",new Yt(b,y)),C.setAttribute("uv",new Yt(_,m)),C.setAttribute("faceIndex",new Yt(M,f)),e.push(C),s>us&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Uu(n,e,t){let i=new Bn(n,e,t);return i.texture.mapping=ko,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function e_(n,e,t){let i=new Float32Array(Si),s=new P(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Nu(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function ku(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function sl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function t_(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===cc||c===lc,h=c===gs||c===ys;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new fo(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new fo(n));let d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function n_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function i_(n,e,t,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let y=d.morphAttributes[g];for(let m=0,f=y.length;m<f;m++)e.remove(y[m])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let y=p[g];for(let m=0,f=y.length;m<f;m++)e.update(y[m],n.ARRAY_BUFFER)}}function l(u){let d=[],p=u.index,g=u.attributes.position,y=0;if(p!==null){let b=p.array;y=p.version;for(let _=0,M=b.length;_<M;_+=3){let C=b[_+0],E=b[_+1],A=b[_+2];d.push(C,E,E,A,A,C)}}else if(g!==void 0){let b=g.array;y=g.version;for(let _=0,M=b.length/3-1;_<M;_+=3){let C=_+0,E=_+1,A=_+2;d.push(C,E,E,A,A,C)}}else return;let m=new(Md(d)?lo:co)(d,1);m.version=y;let f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function s_(n,e,t,i){let s=i.isWebGL2,r;function o(p){r=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function h(p,g){n.drawElements(r,g,a,p*c),t.update(g,r,1)}function u(p,g,y){if(y===0)return;let m,f;if(s)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,a,p*c,y),t.update(g,r,y)}function d(p,g,y){if(y===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<y;f++)this.render(p[f]/c,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,y);let f=0;for(let b=0;b<y;b++)f+=g[b];t.update(f,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function r_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function o_(n,e){return n[0]-e[0]}function a_(n,e){return Math.abs(e[1])-Math.abs(n[1])}function c_(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new pt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,y=r.get(h);if(y===void 0||y.count!==g){let L=function(){U.dispose(),r.delete(h),h.removeEventListener("dispose",L)};y!==void 0&&y.texture.dispose();let b=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],D=0;b===!0&&(D=1),_===!0&&(D=2),M===!0&&(D=3);let x=h.attributes.position.count*D,w=1;x>e.maxTextureSize&&(w=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let F=new Float32Array(x*w*4*g),U=new ao(F,x,w,g);U.type=jn,U.needsUpdate=!0;let W=D*4;for(let k=0;k<g;k++){let G=C[k],K=E[k],Y=A[k],Z=x*w*4*k;for(let j=0;j<G.count;j++){let te=j*W;b===!0&&(o.fromBufferAttribute(G,j),F[Z+te+0]=o.x,F[Z+te+1]=o.y,F[Z+te+2]=o.z,F[Z+te+3]=0),_===!0&&(o.fromBufferAttribute(K,j),F[Z+te+4]=o.x,F[Z+te+5]=o.y,F[Z+te+6]=o.z,F[Z+te+7]=0),M===!0&&(o.fromBufferAttribute(Y,j),F[Z+te+8]=o.x,F[Z+te+9]=o.y,F[Z+te+10]=o.z,F[Z+te+11]=Y.itemSize===4?o.w:1)}}y={count:g,texture:U,size:new de(x,w)},r.set(h,y),h.addEventListener("dispose",L)}let m=0;for(let b=0;b<d.length;b++)m+=d[b];let f=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",f),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",y.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",y.size)}else{let p=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==p){g=[];for(let _=0;_<p;_++)g[_]=[_,0];i[h.id]=g}for(let _=0;_<p;_++){let M=g[_];M[0]=_,M[1]=d[_]}g.sort(a_);for(let _=0;_<8;_++)_<p&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(o_);let y=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let _=0;_<8;_++){let M=a[_],C=M[0],E=M[1];C!==Number.MAX_SAFE_INTEGER&&E?(y&&h.getAttribute("morphTarget"+_)!==y[C]&&h.setAttribute("morphTarget"+_,y[C]),m&&h.getAttribute("morphNormal"+_)!==m[C]&&h.setAttribute("morphNormal"+_,m[C]),s[_]=E,f+=E):(y&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let b=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",b),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function l_(n,e,t,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var mo=class extends sn{constructor(e,t,i,s,r,o,a,c,l,h){if(h=h!==void 0?h:Ti,h!==Ti&&h!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ti&&(i=Qn),i===void 0&&h===_s&&(i=Ei),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:qt,this.minFilter=c!==void 0?c:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Td=new sn,Ad=new mo(1,1);Ad.compareFunction=xd;var Cd=new ao,Rd=new mc,Pd=new uo,Fu=[],Ou=[],Bu=new Float32Array(16),Hu=new Float32Array(9),Vu=new Float32Array(4);function Ss(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Fu[s];if(r===void 0&&(r=new Float32Array(s),Fu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Tt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function At(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Oo(n,e){let t=Ou[e];t===void 0&&(t=new Int32Array(e),Ou[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function h_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function u_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2fv(this.addr,e),At(t,e)}}function d_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;n.uniform3fv(this.addr,e),At(t,e)}}function p_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4fv(this.addr,e),At(t,e)}}function f_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;Vu.set(i),n.uniformMatrix2fv(this.addr,!1,Vu),At(t,i)}}function m_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;Hu.set(i),n.uniformMatrix3fv(this.addr,!1,Hu),At(t,i)}}function g_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;Bu.set(i),n.uniformMatrix4fv(this.addr,!1,Bu),At(t,i)}}function y_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function __(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2iv(this.addr,e),At(t,e)}}function b_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3iv(this.addr,e),At(t,e)}}function v_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4iv(this.addr,e),At(t,e)}}function x_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function M_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2uiv(this.addr,e),At(t,e)}}function w_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3uiv(this.addr,e),At(t,e)}}function S_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4uiv(this.addr,e),At(t,e)}}function E_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Ad:Td;t.setTexture2D(e||r,s)}function T_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Rd,s)}function A_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Pd,s)}function C_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Cd,s)}function R_(n){switch(n){case 5126:return h_;case 35664:return u_;case 35665:return d_;case 35666:return p_;case 35674:return f_;case 35675:return m_;case 35676:return g_;case 5124:case 35670:return y_;case 35667:case 35671:return __;case 35668:case 35672:return b_;case 35669:case 35673:return v_;case 5125:return x_;case 36294:return M_;case 36295:return w_;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return E_;case 35679:case 36299:case 36307:return T_;case 35680:case 36300:case 36308:case 36293:return A_;case 36289:case 36303:case 36311:case 36292:return C_}}function P_(n,e){n.uniform1fv(this.addr,e)}function L_(n,e){let t=Ss(e,this.size,2);n.uniform2fv(this.addr,t)}function I_(n,e){let t=Ss(e,this.size,3);n.uniform3fv(this.addr,t)}function z_(n,e){let t=Ss(e,this.size,4);n.uniform4fv(this.addr,t)}function D_(n,e){let t=Ss(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function U_(n,e){let t=Ss(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function N_(n,e){let t=Ss(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function k_(n,e){n.uniform1iv(this.addr,e)}function F_(n,e){n.uniform2iv(this.addr,e)}function O_(n,e){n.uniform3iv(this.addr,e)}function B_(n,e){n.uniform4iv(this.addr,e)}function H_(n,e){n.uniform1uiv(this.addr,e)}function V_(n,e){n.uniform2uiv(this.addr,e)}function G_(n,e){n.uniform3uiv(this.addr,e)}function W_(n,e){n.uniform4uiv(this.addr,e)}function q_(n,e,t){let i=this.cache,s=e.length,r=Oo(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Td,r[o])}function X_(n,e,t){let i=this.cache,s=e.length,r=Oo(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Rd,r[o])}function Y_(n,e,t){let i=this.cache,s=e.length,r=Oo(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Pd,r[o])}function Z_(n,e,t){let i=this.cache,s=e.length,r=Oo(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Cd,r[o])}function $_(n){switch(n){case 5126:return P_;case 35664:return L_;case 35665:return I_;case 35666:return z_;case 35674:return D_;case 35675:return U_;case 35676:return N_;case 5124:case 35670:return k_;case 35667:case 35671:return F_;case 35668:case 35672:return O_;case 35669:case 35673:return B_;case 5125:return H_;case 36294:return V_;case 36295:return G_;case 36296:return W_;case 35678:case 36198:case 36298:case 36306:case 35682:return q_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return Y_;case 36289:case 36303:case 36311:case 36292:return Z_}}var _c=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=R_(t.type)}},bc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$_(t.type)}},vc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},ja=/(\w+)(\])?(\[|\.)?/g;function Gu(n,e){n.seq.push(e),n.map[e.id]=e}function K_(n,e,t){let i=n.name,s=i.length;for(ja.lastIndex=0;;){let r=ja.exec(i),o=ja.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Gu(t,l===void 0?new _c(a,n,e):new bc(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new vc(a),Gu(t,u)),t=u}}}var ms=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);K_(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Wu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var J_=37297,Q_=0;function j_(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function e1(n){let e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(n),i;switch(e===t?i="":e===no&&t===to?i="LinearDisplayP3ToLinearSRGB":e===to&&t===no&&(i="LinearSRGBToLinearDisplayP3"),n){case On:case Fo:return[i,"LinearTransferOETF"];case bt:case il:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function qu(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+j_(n.getShaderSource(e),o)}else return s}function t1(n,e){let t=e1(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function n1(n,e){let t;switch(e){case x0:t="Linear";break;case M0:t="Reinhard";break;case w0:t="OptimizedCineon";break;case el:t="ACESFilmic";break;case E0:t="AgX";break;case S0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function i1(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ds).join(`
`)}function s1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ds).join(`
`)}function r1(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function o1(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ds(n){return n!==""}function Xu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var a1=/^[ \t]*#include +<([\w\d./]+)>/gm;function xc(n){return n.replace(a1,l1)}var c1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function l1(n,e){let t=Ge[e];if(t===void 0){let i=c1.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return xc(t)}var h1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zu(n){return n.replace(h1,u1)}function u1(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $u(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function d1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Uo?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===$f?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Nn&&(e="SHADOWMAP_TYPE_VSM"),e}function p1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case gs:case ys:e="ENVMAP_TYPE_CUBE";break;case ko:e="ENVMAP_TYPE_CUBE_UV";break}return e}function f1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ys:e="ENVMAP_MODE_REFRACTION";break}return e}function m1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case No:e="ENVMAP_BLENDING_MULTIPLY";break;case b0:e="ENVMAP_BLENDING_MIX";break;case v0:e="ENVMAP_BLENDING_ADD";break}return e}function g1(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function y1(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=d1(t),l=p1(t),h=f1(t),u=m1(t),d=g1(t),p=t.isWebGL2?"":i1(t),g=s1(t),y=r1(r),m=s.createProgram(),f,b,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(ds).join(`
`),f.length>0&&(f+=`
`),b=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(ds).join(`
`),b.length>0&&(b+=`
`)):(f=[$u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),b=[p,$u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?Ge.tonemapping_pars_fragment:"",t.toneMapping!==ti?n1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,t1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ds).join(`
`)),o=xc(o),o=Xu(o,t),o=Yu(o,t),a=xc(a),a=Xu(a,t),a=Yu(a,t),o=Zu(o),a=Zu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);let M=_+f+o,C=_+b+a,E=Wu(s,s.VERTEX_SHADER,M),A=Wu(s,s.FRAGMENT_SHADER,C);s.attachShader(m,E),s.attachShader(m,A),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function D(U){if(n.debug.checkShaderErrors){let W=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(E).trim(),k=s.getShaderInfoLog(A).trim(),G=!0,K=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,E,A);else{let Y=qu(s,E,"vertex"),Z=qu(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+W+`
`+Y+`
`+Z)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(L===""||k==="")&&(K=!1);K&&(U.diagnostics={runnable:G,programLog:W,vertexShader:{log:L,prefix:f},fragmentShader:{log:k,prefix:b}})}s.deleteShader(E),s.deleteShader(A),x=new ms(s,m),w=o1(s,m)}let x;this.getUniforms=function(){return x===void 0&&D(this),x};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(m,J_)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Q_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=A,this}var _1=0,Mc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new wc(e),t.set(e,i)),i}},wc=class{constructor(e){this.id=_1++,this.code=e,this.usedTimes=0}};function b1(n,e,t,i,s,r,o){let a=new Ks,c=new Mc,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(x){return x===0?"uv":`uv${x}`}function m(x,w,F,U,W){let L=U.fog,k=W.geometry,G=x.isMeshStandardMaterial?U.environment:null,K=(x.isMeshStandardMaterial?t:e).get(x.envMap||G),Y=K&&K.mapping===ko?K.image.height:null,Z=g[x.type];x.precision!==null&&(p=s.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));let j=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,te=j!==void 0?j.length:0,ce=0;k.morphAttributes.position!==void 0&&(ce=1),k.morphAttributes.normal!==void 0&&(ce=2),k.morphAttributes.color!==void 0&&(ce=3);let X,Q,ue,Me;if(Z){let Vt=wn[Z];X=Vt.vertexShader,Q=Vt.fragmentShader}else X=x.vertexShader,Q=x.fragmentShader,c.update(x),ue=c.getVertexShaderID(x),Me=c.getFragmentShaderID(x);let ve=n.getRenderTarget(),Te=W.isInstancedMesh===!0,ze=W.isBatchedMesh===!0,Le=!!x.map,Je=!!x.matcap,B=!!K,Lt=!!x.aoMap,ye=!!x.lightMap,Ne=!!x.bumpMap,_e=!!x.normalMap,lt=!!x.displacementMap,Be=!!x.emissiveMap,T=!!x.metalnessMap,v=!!x.roughnessMap,z=x.anisotropy>0,J=x.clearcoat>0,$=x.iridescence>0,ee=x.sheen>0,xe=x.transmission>0,ae=z&&!!x.anisotropyMap,fe=J&&!!x.clearcoatMap,Ce=J&&!!x.clearcoatNormalMap,we=J&&!!x.clearcoatRoughnessMap,ne=$&&!!x.iridescenceMap,tt=$&&!!x.iridescenceThicknessMap,Ke=ee&&!!x.sheenColorMap,ke=ee&&!!x.sheenRoughnessMap,Ae=!!x.specularMap,be=!!x.specularColorMap,Ve=!!x.specularIntensityMap,et=xe&&!!x.transmissionMap,yt=xe&&!!x.thicknessMap,Ye=!!x.gradientMap,re=!!x.alphaMap,I=x.alphaTest>0,le=!!x.alphaHash,he=!!x.extensions,De=!!k.attributes.uv1,Re=!!k.attributes.uv2,rt=!!k.attributes.uv3,ot=ti;return x.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(ot=n.toneMapping),{isWebGL2:h,shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:X,fragmentShader:Q,defines:x.defines,customVertexShaderID:ue,customFragmentShaderID:Me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:ze,instancing:Te,instancingColor:Te&&W.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:On,map:Le,matcap:Je,envMap:B,envMapMode:B&&K.mapping,envMapCubeUVHeight:Y,aoMap:Lt,lightMap:ye,bumpMap:Ne,normalMap:_e,displacementMap:d&&lt,emissiveMap:Be,normalMapObjectSpace:_e&&x.normalMapType===k0,normalMapTangentSpace:_e&&x.normalMapType===nl,metalnessMap:T,roughnessMap:v,anisotropy:z,anisotropyMap:ae,clearcoat:J,clearcoatMap:fe,clearcoatNormalMap:Ce,clearcoatRoughnessMap:we,iridescence:$,iridescenceMap:ne,iridescenceThicknessMap:tt,sheen:ee,sheenColorMap:Ke,sheenRoughnessMap:ke,specularMap:Ae,specularColorMap:be,specularIntensityMap:Ve,transmission:xe,transmissionMap:et,thicknessMap:yt,gradientMap:Ye,opaque:x.transparent===!1&&x.blending===ps,alphaMap:re,alphaTest:I,alphaHash:le,combine:x.combine,mapUv:Le&&y(x.map.channel),aoMapUv:Lt&&y(x.aoMap.channel),lightMapUv:ye&&y(x.lightMap.channel),bumpMapUv:Ne&&y(x.bumpMap.channel),normalMapUv:_e&&y(x.normalMap.channel),displacementMapUv:lt&&y(x.displacementMap.channel),emissiveMapUv:Be&&y(x.emissiveMap.channel),metalnessMapUv:T&&y(x.metalnessMap.channel),roughnessMapUv:v&&y(x.roughnessMap.channel),anisotropyMapUv:ae&&y(x.anisotropyMap.channel),clearcoatMapUv:fe&&y(x.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&y(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&y(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&y(x.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&y(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&y(x.sheenColorMap.channel),sheenRoughnessMapUv:ke&&y(x.sheenRoughnessMap.channel),specularMapUv:Ae&&y(x.specularMap.channel),specularColorMapUv:be&&y(x.specularColorMap.channel),specularIntensityMapUv:Ve&&y(x.specularIntensityMap.channel),transmissionMapUv:et&&y(x.transmissionMap.channel),thicknessMapUv:yt&&y(x.thicknessMap.channel),alphaMapUv:re&&y(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(_e||z),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:De,vertexUv2s:Re,vertexUv3s:rt,pointsUvs:W.isPoints===!0&&!!k.attributes.uv&&(Le||re),fog:!!L,useFog:x.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:W.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ce,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:ot,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Le&&x.map.isVideoTexture===!0&&nt.getTransfer(x.map.colorSpace)===ht,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===gn,flipSided:x.side===Ht,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:he&&x.extensions.derivatives===!0,extensionFragDepth:he&&x.extensions.fragDepth===!0,extensionDrawBuffers:he&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:he&&x.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let F in x.defines)w.push(F),w.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(b(w,x),_(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function b(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function _(x,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function M(x){let w=g[x.type],F;if(w){let U=wn[w];F=cm.clone(U.uniforms)}else F=x.uniforms;return F}function C(x,w){let F;for(let U=0,W=l.length;U<W;U++){let L=l[U];if(L.cacheKey===w){F=L,++F.usedTimes;break}}return F===void 0&&(F=new y1(n,w,x,r),l.push(F)),F}function E(x){if(--x.usedTimes===0){let w=l.indexOf(x);l[w]=l[l.length-1],l.pop(),x.destroy()}}function A(x){c.remove(x)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:C,releaseProgram:E,releaseShaderCache:A,programs:l,dispose:D}}function v1(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function x1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ku(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ju(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,p,g,y,m){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=y,f.group=m),e++,f}function a(u,d,p,g,y,m){let f=o(u,d,p,g,y,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function c(u,d,p,g,y,m){let f=o(u,d,p,g,y,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||x1),i.length>1&&i.sort(d||Ku),s.length>1&&s.sort(d||Ku)}function h(){for(let u=e,d=n.length;u<d;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function M1(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Ju,n.set(i,[o])):s>=r.length?(o=new Ju,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function w1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new me};break;case"SpotLight":t={position:new P,direction:new P,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new me,groundColor:new me};break;case"RectAreaLight":t={color:new me,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function S1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var E1=0;function T1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function A1(n,e){let t=new w1,i=S1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new P);let r=new P,o=new ft,a=new ft;function c(h,u){let d=0,p=0,g=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let y=0,m=0,f=0,b=0,_=0,M=0,C=0,E=0,A=0,D=0,x=0;h.sort(T1);let w=u===!0?Math.PI:1;for(let U=0,W=h.length;U<W;U++){let L=h[U],k=L.color,G=L.intensity,K=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=k.r*G*w,p+=k.g*G*w,g+=k.b*G*w;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)s.probe[Z].addScaledVector(L.sh.coefficients[Z],G);x++}else if(L.isDirectionalLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){let j=L.shadow,te=i.get(L);te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,s.directionalShadow[y]=te,s.directionalShadowMap[y]=Y,s.directionalShadowMatrix[y]=L.shadow.matrix,M++}s.directional[y]=Z,y++}else if(L.isSpotLight){let Z=t.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(k).multiplyScalar(G*w),Z.distance=K,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,s.spot[f]=Z;let j=L.shadow;if(L.map&&(s.spotLightMap[A]=L.map,A++,j.updateMatrices(L),L.castShadow&&D++),s.spotLightMatrix[f]=j.matrix,L.castShadow){let te=i.get(L);te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,s.spotShadow[f]=te,s.spotShadowMap[f]=Y,E++}f++}else if(L.isRectAreaLight){let Z=t.get(L);Z.color.copy(k).multiplyScalar(G),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),s.rectArea[b]=Z,b++}else if(L.isPointLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity*w),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){let j=L.shadow,te=i.get(L);te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,te.shadowCameraNear=j.camera.near,te.shadowCameraFar=j.camera.far,s.pointShadow[m]=te,s.pointShadowMap[m]=Y,s.pointShadowMatrix[m]=L.shadow.matrix,C++}s.point[m]=Z,m++}else if(L.isHemisphereLight){let Z=t.get(L);Z.skyColor.copy(L.color).multiplyScalar(G*w),Z.groundColor.copy(L.groundColor).multiplyScalar(G*w),s.hemi[_]=Z,_++}}b>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=oe.LTC_FLOAT_1,s.rectAreaLTC2=oe.LTC_FLOAT_2):(s.rectAreaLTC1=oe.LTC_HALF_1,s.rectAreaLTC2=oe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=oe.LTC_FLOAT_1,s.rectAreaLTC2=oe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=oe.LTC_HALF_1,s.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;let F=s.hash;(F.directionalLength!==y||F.pointLength!==m||F.spotLength!==f||F.rectAreaLength!==b||F.hemiLength!==_||F.numDirectionalShadows!==M||F.numPointShadows!==C||F.numSpotShadows!==E||F.numSpotMaps!==A||F.numLightProbes!==x)&&(s.directional.length=y,s.spot.length=f,s.rectArea.length=b,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=E+A-D,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=x,F.directionalLength=y,F.pointLength=m,F.spotLength=f,F.rectAreaLength=b,F.hemiLength=_,F.numDirectionalShadows=M,F.numPointShadows=C,F.numSpotShadows=E,F.numSpotMaps=A,F.numLightProbes=x,s.version=E1++)}function l(h,u){let d=0,p=0,g=0,y=0,m=0,f=u.matrixWorldInverse;for(let b=0,_=h.length;b<_;b++){let M=h[b];if(M.isDirectionalLight){let C=s.directional[d];C.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),d++}else if(M.isSpotLight){let C=s.spot[g];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(f),C.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),g++}else if(M.isRectAreaLight){let C=s.rectArea[y];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(f),a.identity(),o.copy(M.matrixWorld),o.premultiply(f),a.extractRotation(o),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){let C=s.point[p];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(f),p++}else if(M.isHemisphereLight){let C=s.hemi[m];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(f),m++}}}return{setup:c,setupView:l,state:s}}function Qu(n,e){let t=new A1(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function c(u){t.setup(i,u)}function l(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function C1(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),c;return a===void 0?(c=new Qu(n,e),t.set(r,[c])):o>=a.length?(c=new Qu(n,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:i,dispose:s}}var Sc=class extends En{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=U0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ec=class extends En{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},R1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function L1(n,e,t){let i=new Js,s=new de,r=new de,o=new pt,a=new Sc({depthPacking:N0}),c=new Ec,l={},h=t.maxTextureSize,u={[ii]:Ht,[Ht]:ii,[gn]:gn},d=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:R1,fragmentShader:P1}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new vt;g.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Pe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uo;let f=this.type;this.render=function(E,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let x=n.getRenderTarget(),w=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),U=n.state;U.setBlending(ei),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let W=f!==Nn&&this.type===Nn,L=f===Nn&&this.type!==Nn;for(let k=0,G=E.length;k<G;k++){let K=E[k],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let Z=Y.getFrameExtents();if(s.multiply(Z),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,Y.mapSize.y=r.y)),Y.map===null||W===!0||L===!0){let te=this.type!==Nn?{minFilter:qt,magFilter:qt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Bn(s.x,s.y,te),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();let j=Y.getViewportCount();for(let te=0;te<j;te++){let ce=Y.getViewport(te);o.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),U.viewport(o),Y.updateMatrices(K,te),i=Y.getFrustum(),M(A,D,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===Nn&&b(Y,D),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(x,w,F)};function b(E,A){let D=e.update(y);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Bn(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(A,null,D,d,y,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(A,null,D,p,y,null)}function _(E,A,D,x){let w=null,F=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(F!==void 0)w=F;else if(w=D.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let U=w.uuid,W=A.uuid,L=l[U];L===void 0&&(L={},l[U]=L);let k=L[W];k===void 0&&(k=w.clone(),L[W]=k,A.addEventListener("dispose",C)),w=k}if(w.visible=A.visible,w.wireframe=A.wireframe,x===Nn?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:u[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let U=n.properties.get(w);U.light=D}return w}function M(E,A,D,x,w){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===Nn)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);let W=e.update(E),L=E.material;if(Array.isArray(L)){let k=W.groups;for(let G=0,K=k.length;G<K;G++){let Y=k[G],Z=L[Y.materialIndex];if(Z&&Z.visible){let j=_(E,Z,x,w);E.onBeforeShadow(n,E,A,D,W,j,Y),n.renderBufferDirect(D,null,W,j,E,Y),E.onAfterShadow(n,E,A,D,W,j,Y)}}}else if(L.visible){let k=_(E,L,x,w);E.onBeforeShadow(n,E,A,D,W,k,null),n.renderBufferDirect(D,null,W,k,E,null),E.onAfterShadow(n,E,A,D,W,k,null)}}let U=E.children;for(let W=0,L=U.length;W<L;W++)M(U[W],A,D,x,w)}function C(E){E.target.removeEventListener("dispose",C);for(let D in l){let x=l[D],w=E.target.uuid;w in x&&(x[w].dispose(),delete x[w])}}}function I1(n,e,t){let i=t.isWebGL2;function s(){let I=!1,le=new pt,he=null,De=new pt(0,0,0,0);return{setMask:function(Re){he!==Re&&!I&&(n.colorMask(Re,Re,Re,Re),he=Re)},setLocked:function(Re){I=Re},setClear:function(Re,rt,ot,Ct,Vt){Vt===!0&&(Re*=Ct,rt*=Ct,ot*=Ct),le.set(Re,rt,ot,Ct),De.equals(le)===!1&&(n.clearColor(Re,rt,ot,Ct),De.copy(le))},reset:function(){I=!1,he=null,De.set(-1,0,0,0)}}}function r(){let I=!1,le=null,he=null,De=null;return{setTest:function(Re){Re?ze(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(Re){le!==Re&&!I&&(n.depthMask(Re),le=Re)},setFunc:function(Re){if(he!==Re){switch(Re){case d0:n.depthFunc(n.NEVER);break;case p0:n.depthFunc(n.ALWAYS);break;case f0:n.depthFunc(n.LESS);break;case Jr:n.depthFunc(n.LEQUAL);break;case m0:n.depthFunc(n.EQUAL);break;case g0:n.depthFunc(n.GEQUAL);break;case y0:n.depthFunc(n.GREATER);break;case _0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=Re}},setLocked:function(Re){I=Re},setClear:function(Re){De!==Re&&(n.clearDepth(Re),De=Re)},reset:function(){I=!1,le=null,he=null,De=null}}}function o(){let I=!1,le=null,he=null,De=null,Re=null,rt=null,ot=null,Ct=null,Vt=null;return{setTest:function(at){I||(at?ze(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function(at){le!==at&&!I&&(n.stencilMask(at),le=at)},setFunc:function(at,Gt,Mn){(he!==at||De!==Gt||Re!==Mn)&&(n.stencilFunc(at,Gt,Mn),he=at,De=Gt,Re=Mn)},setOp:function(at,Gt,Mn){(rt!==at||ot!==Gt||Ct!==Mn)&&(n.stencilOp(at,Gt,Mn),rt=at,ot=Gt,Ct=Mn)},setLocked:function(at){I=at},setClear:function(at){Vt!==at&&(n.clearStencil(at),Vt=at)},reset:function(){I=!1,le=null,he=null,De=null,Re=null,rt=null,ot=null,Ct=null,Vt=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,d={},p={},g=new WeakMap,y=[],m=null,f=!1,b=null,_=null,M=null,C=null,E=null,A=null,D=null,x=new me(0,0,0),w=0,F=!1,U=null,W=null,L=null,k=null,G=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,Z=0,j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(j)[1]),Y=Z>=1):j.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Y=Z>=2);let te=null,ce={},X=n.getParameter(n.SCISSOR_BOX),Q=n.getParameter(n.VIEWPORT),ue=new pt().fromArray(X),Me=new pt().fromArray(Q);function ve(I,le,he,De){let Re=new Uint8Array(4),rt=n.createTexture();n.bindTexture(I,rt),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ot=0;ot<he;ot++)i&&(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)?n.texImage3D(le,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(le+ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return rt}let Te={};Te[n.TEXTURE_2D]=ve(n.TEXTURE_2D,n.TEXTURE_2D,1),Te[n.TEXTURE_CUBE_MAP]=ve(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Te[n.TEXTURE_2D_ARRAY]=ve(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Te[n.TEXTURE_3D]=ve(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ze(n.DEPTH_TEST),c.setFunc(Jr),Be(!1),T(Ih),ze(n.CULL_FACE),_e(ei);function ze(I){d[I]!==!0&&(n.enable(I),d[I]=!0)}function Le(I){d[I]!==!1&&(n.disable(I),d[I]=!1)}function Je(I,le){return p[I]!==le?(n.bindFramebuffer(I,le),p[I]=le,i&&(I===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=le),I===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=le)),!0):!1}function B(I,le){let he=y,De=!1;if(I)if(he=g.get(le),he===void 0&&(he=[],g.set(le,he)),I.isWebGLMultipleRenderTargets){let Re=I.texture;if(he.length!==Re.length||he[0]!==n.COLOR_ATTACHMENT0){for(let rt=0,ot=Re.length;rt<ot;rt++)he[rt]=n.COLOR_ATTACHMENT0+rt;he.length=Re.length,De=!0}}else he[0]!==n.COLOR_ATTACHMENT0&&(he[0]=n.COLOR_ATTACHMENT0,De=!0);else he[0]!==n.BACK&&(he[0]=n.BACK,De=!0);De&&(t.isWebGL2?n.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function Lt(I){return m!==I?(n.useProgram(I),m=I,!0):!1}let ye={[wi]:n.FUNC_ADD,[Jf]:n.FUNC_SUBTRACT,[Qf]:n.FUNC_REVERSE_SUBTRACT};if(i)ye[Uh]=n.MIN,ye[Nh]=n.MAX;else{let I=e.get("EXT_blend_minmax");I!==null&&(ye[Uh]=I.MIN_EXT,ye[Nh]=I.MAX_EXT)}let Ne={[jf]:n.ZERO,[e0]:n.ONE,[t0]:n.SRC_COLOR,[oc]:n.SRC_ALPHA,[a0]:n.SRC_ALPHA_SATURATE,[r0]:n.DST_COLOR,[i0]:n.DST_ALPHA,[n0]:n.ONE_MINUS_SRC_COLOR,[ac]:n.ONE_MINUS_SRC_ALPHA,[o0]:n.ONE_MINUS_DST_COLOR,[s0]:n.ONE_MINUS_DST_ALPHA,[c0]:n.CONSTANT_COLOR,[l0]:n.ONE_MINUS_CONSTANT_COLOR,[h0]:n.CONSTANT_ALPHA,[u0]:n.ONE_MINUS_CONSTANT_ALPHA};function _e(I,le,he,De,Re,rt,ot,Ct,Vt,at){if(I===ei){f===!0&&(Le(n.BLEND),f=!1);return}if(f===!1&&(ze(n.BLEND),f=!0),I!==Kf){if(I!==b||at!==F){if((_!==wi||E!==wi)&&(n.blendEquation(n.FUNC_ADD),_=wi,E=wi),at)switch(I){case ps:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kr:n.blendFunc(n.ONE,n.ONE);break;case zh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ps:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case zh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,C=null,A=null,D=null,x.set(0,0,0),w=0,b=I,F=at}return}Re=Re||le,rt=rt||he,ot=ot||De,(le!==_||Re!==E)&&(n.blendEquationSeparate(ye[le],ye[Re]),_=le,E=Re),(he!==M||De!==C||rt!==A||ot!==D)&&(n.blendFuncSeparate(Ne[he],Ne[De],Ne[rt],Ne[ot]),M=he,C=De,A=rt,D=ot),(Ct.equals(x)===!1||Vt!==w)&&(n.blendColor(Ct.r,Ct.g,Ct.b,Vt),x.copy(Ct),w=Vt),b=I,F=!1}function lt(I,le){I.side===gn?Le(n.CULL_FACE):ze(n.CULL_FACE);let he=I.side===Ht;le&&(he=!he),Be(he),I.blending===ps&&I.transparent===!1?_e(ei):_e(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),a.setMask(I.colorWrite);let De=I.stencilWrite;l.setTest(De),De&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),z(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ze(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(I){U!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),U=I)}function T(I){I!==Yf?(ze(n.CULL_FACE),I!==W&&(I===Ih?n.cullFace(n.BACK):I===Zf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),W=I}function v(I){I!==L&&(Y&&n.lineWidth(I),L=I)}function z(I,le,he){I?(ze(n.POLYGON_OFFSET_FILL),(k!==le||G!==he)&&(n.polygonOffset(le,he),k=le,G=he)):Le(n.POLYGON_OFFSET_FILL)}function J(I){I?ze(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function $(I){I===void 0&&(I=n.TEXTURE0+K-1),te!==I&&(n.activeTexture(I),te=I)}function ee(I,le,he){he===void 0&&(te===null?he=n.TEXTURE0+K-1:he=te);let De=ce[he];De===void 0&&(De={type:void 0,texture:void 0},ce[he]=De),(De.type!==I||De.texture!==le)&&(te!==he&&(n.activeTexture(he),te=he),n.bindTexture(I,le||Te[I]),De.type=I,De.texture=le)}function xe(){let I=ce[te];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ae(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ke(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ke(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ve(I){ue.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),ue.copy(I))}function et(I){Me.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Me.copy(I))}function yt(I,le){let he=u.get(le);he===void 0&&(he=new WeakMap,u.set(le,he));let De=he.get(I);De===void 0&&(De=n.getUniformBlockIndex(le,I.name),he.set(I,De))}function Ye(I,le){let De=u.get(le).get(I);h.get(le)!==De&&(n.uniformBlockBinding(le,De,I.__bindingPointIndex),h.set(le,De))}function re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},te=null,ce={},p={},g=new WeakMap,y=[],m=null,f=!1,b=null,_=null,M=null,C=null,E=null,A=null,D=null,x=new me(0,0,0),w=0,F=!1,U=null,W=null,L=null,k=null,G=null,ue.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:ze,disable:Le,bindFramebuffer:Je,drawBuffers:B,useProgram:Lt,setBlending:_e,setMaterial:lt,setFlipSided:Be,setCullFace:T,setLineWidth:v,setPolygonOffset:z,setScissorTest:J,activeTexture:$,bindTexture:ee,unbindTexture:xe,compressedTexImage2D:ae,compressedTexImage3D:fe,texImage2D:Ae,texImage3D:be,updateUBOMapping:yt,uniformBlockBinding:Ye,texStorage2D:Ke,texStorage3D:ke,texSubImage2D:Ce,texSubImage3D:we,compressedTexSubImage2D:ne,compressedTexSubImage3D:tt,scissor:Ve,viewport:et,reset:re}}function z1(n,e,t,i,s,r,o){let a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return p?new OffscreenCanvas(T,v):so("canvas")}function y(T,v,z,J){let $=1;if((T.width>J||T.height>J)&&($=J/Math.max(T.width,T.height)),$<1||v===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){let ee=v?pc:Math.floor,xe=ee($*T.width),ae=ee($*T.height);u===void 0&&(u=g(xe,ae));let fe=z?g(xe,ae):u;return fe.width=xe,fe.height=ae,fe.getContext("2d").drawImage(T,0,0,xe,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+xe+"x"+ae+")."),fe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return mu(T.width)&&mu(T.height)}function f(T){return a?!1:T.wrapS!==yn||T.wrapT!==yn||T.minFilter!==qt&&T.minFilter!==tn}function b(T,v){return T.generateMipmaps&&v&&T.minFilter!==qt&&T.minFilter!==tn}function _(T){n.generateMipmap(T)}function M(T,v,z,J,$=!1){if(a===!1)return v;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ee=v;if(v===n.RED&&(z===n.FLOAT&&(ee=n.R32F),z===n.HALF_FLOAT&&(ee=n.R16F),z===n.UNSIGNED_BYTE&&(ee=n.R8)),v===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(ee=n.R8UI),z===n.UNSIGNED_SHORT&&(ee=n.R16UI),z===n.UNSIGNED_INT&&(ee=n.R32UI),z===n.BYTE&&(ee=n.R8I),z===n.SHORT&&(ee=n.R16I),z===n.INT&&(ee=n.R32I)),v===n.RG&&(z===n.FLOAT&&(ee=n.RG32F),z===n.HALF_FLOAT&&(ee=n.RG16F),z===n.UNSIGNED_BYTE&&(ee=n.RG8)),v===n.RGBA){let xe=$?eo:nt.getTransfer(J);z===n.FLOAT&&(ee=n.RGBA32F),z===n.HALF_FLOAT&&(ee=n.RGBA16F),z===n.UNSIGNED_BYTE&&(ee=xe===ht?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function C(T,v,z){return b(T,z)===!0||T.isFramebufferTexture&&T.minFilter!==qt&&T.minFilter!==tn?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function E(T){return T===qt||T===kh||T===wa?n.NEAREST:n.LINEAR}function A(T){let v=T.target;v.removeEventListener("dispose",A),x(v),v.isVideoTexture&&h.delete(v)}function D(T){let v=T.target;v.removeEventListener("dispose",D),F(v)}function x(T){let v=i.get(T);if(v.__webglInit===void 0)return;let z=T.source,J=d.get(z);if(J){let $=J[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&w(T),Object.keys(J).length===0&&d.delete(z)}i.remove(T)}function w(T){let v=i.get(T);n.deleteTexture(v.__webglTexture);let z=T.source,J=d.get(z);delete J[v.__cacheKey],o.memory.textures--}function F(T){let v=T.texture,z=i.get(T),J=i.get(v);if(J.__webglTexture!==void 0&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(z.__webglFramebuffer[$]))for(let ee=0;ee<z.__webglFramebuffer[$].length;ee++)n.deleteFramebuffer(z.__webglFramebuffer[$][ee]);else n.deleteFramebuffer(z.__webglFramebuffer[$]);z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer[$])}else{if(Array.isArray(z.__webglFramebuffer))for(let $=0;$<z.__webglFramebuffer.length;$++)n.deleteFramebuffer(z.__webglFramebuffer[$]);else n.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let $=0;$<z.__webglColorRenderbuffer.length;$++)z.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(z.__webglColorRenderbuffer[$]);z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let $=0,ee=v.length;$<ee;$++){let xe=i.get(v[$]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(v[$])}i.remove(v),i.remove(T)}let U=0;function W(){U=0}function L(){let T=U;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),U+=1,T}function k(T){let v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function G(T,v){let z=i.get(T);if(T.isVideoTexture&&lt(T),T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){let J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(z,T,v);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+v)}function K(T,v){let z=i.get(T);if(T.version>0&&z.__version!==T.version){ue(z,T,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+v)}function Y(T,v){let z=i.get(T);if(T.version>0&&z.__version!==T.version){ue(z,T,v);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+v)}function Z(T,v){let z=i.get(T);if(T.version>0&&z.__version!==T.version){Me(z,T,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+v)}let j={[Ys]:n.REPEAT,[yn]:n.CLAMP_TO_EDGE,[hc]:n.MIRRORED_REPEAT},te={[qt]:n.NEAREST,[kh]:n.NEAREST_MIPMAP_NEAREST,[wa]:n.NEAREST_MIPMAP_LINEAR,[tn]:n.LINEAR,[T0]:n.LINEAR_MIPMAP_NEAREST,[Zs]:n.LINEAR_MIPMAP_LINEAR},ce={[F0]:n.NEVER,[W0]:n.ALWAYS,[O0]:n.LESS,[xd]:n.LEQUAL,[B0]:n.EQUAL,[G0]:n.GEQUAL,[H0]:n.GREATER,[V0]:n.NOTEQUAL};function X(T,v,z){if(z?(n.texParameteri(T,n.TEXTURE_WRAP_S,j[v.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,j[v.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,j[v.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,te[v.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,te[v.minFilter])):(n.texParameteri(T,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(T,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==yn||v.wrapT!==yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,n.TEXTURE_MAG_FILTER,E(v.magFilter)),n.texParameteri(T,n.TEXTURE_MIN_FILTER,E(v.minFilter)),v.minFilter!==qt&&v.minFilter!==tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,ce[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let J=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===qt||v.minFilter!==wa&&v.minFilter!==Zs||v.type===jn&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===$s&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(T,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function Q(T,v){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",A));let J=v.source,$=d.get(J);$===void 0&&($={},d.set(J,$));let ee=k(v);if(ee!==T.__cacheKey){$[ee]===void 0&&($[ee]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),$[ee].usedTimes++;let xe=$[T.__cacheKey];xe!==void 0&&($[T.__cacheKey].usedTimes--,xe.usedTimes===0&&w(v)),T.__cacheKey=ee,T.__webglTexture=$[ee].texture}return z}function ue(T,v,z){let J=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=n.TEXTURE_3D);let $=Q(T,v),ee=v.source;t.bindTexture(J,T.__webglTexture,n.TEXTURE0+z);let xe=i.get(ee);if(ee.version!==xe.__version||$===!0){t.activeTexture(n.TEXTURE0+z);let ae=nt.getPrimaries(nt.workingColorSpace),fe=v.colorSpace===nn?null:nt.getPrimaries(v.colorSpace),Ce=v.colorSpace===nn||ae===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let we=f(v)&&m(v.image)===!1,ne=y(v.image,we,!1,s.maxTextureSize);ne=Be(v,ne);let tt=m(ne)||a,Ke=r.convert(v.format,v.colorSpace),ke=r.convert(v.type),Ae=M(v.internalFormat,Ke,ke,v.colorSpace,v.isVideoTexture);X(J,v,tt);let be,Ve=v.mipmaps,et=a&&v.isVideoTexture!==!0&&Ae!==bd,yt=xe.__version===void 0||$===!0,Ye=C(v,ne,tt);if(v.isDepthTexture)Ae=n.DEPTH_COMPONENT,a?v.type===jn?Ae=n.DEPTH_COMPONENT32F:v.type===Qn?Ae=n.DEPTH_COMPONENT24:v.type===Ei?Ae=n.DEPTH24_STENCIL8:Ae=n.DEPTH_COMPONENT16:v.type===jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Ti&&Ae===n.DEPTH_COMPONENT&&v.type!==tl&&v.type!==Qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Qn,ke=r.convert(v.type)),v.format===_s&&Ae===n.DEPTH_COMPONENT&&(Ae=n.DEPTH_STENCIL,v.type!==Ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Ei,ke=r.convert(v.type))),yt&&(et?t.texStorage2D(n.TEXTURE_2D,1,Ae,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Ae,ne.width,ne.height,0,Ke,ke,null));else if(v.isDataTexture)if(Ve.length>0&&tt){et&&yt&&t.texStorage2D(n.TEXTURE_2D,Ye,Ae,Ve[0].width,Ve[0].height);for(let re=0,I=Ve.length;re<I;re++)be=Ve[re],et?t.texSubImage2D(n.TEXTURE_2D,re,0,0,be.width,be.height,Ke,ke,be.data):t.texImage2D(n.TEXTURE_2D,re,Ae,be.width,be.height,0,Ke,ke,be.data);v.generateMipmaps=!1}else et?(yt&&t.texStorage2D(n.TEXTURE_2D,Ye,Ae,ne.width,ne.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,Ke,ke,ne.data)):t.texImage2D(n.TEXTURE_2D,0,Ae,ne.width,ne.height,0,Ke,ke,ne.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){et&&yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ye,Ae,Ve[0].width,Ve[0].height,ne.depth);for(let re=0,I=Ve.length;re<I;re++)be=Ve[re],v.format!==_n?Ke!==null?et?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,be.width,be.height,ne.depth,Ke,be.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,Ae,be.width,be.height,ne.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,be.width,be.height,ne.depth,Ke,ke,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,Ae,be.width,be.height,ne.depth,0,Ke,ke,be.data)}else{et&&yt&&t.texStorage2D(n.TEXTURE_2D,Ye,Ae,Ve[0].width,Ve[0].height);for(let re=0,I=Ve.length;re<I;re++)be=Ve[re],v.format!==_n?Ke!==null?et?t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,be.width,be.height,Ke,be.data):t.compressedTexImage2D(n.TEXTURE_2D,re,Ae,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage2D(n.TEXTURE_2D,re,0,0,be.width,be.height,Ke,ke,be.data):t.texImage2D(n.TEXTURE_2D,re,Ae,be.width,be.height,0,Ke,ke,be.data)}else if(v.isDataArrayTexture)et?(yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ye,Ae,ne.width,ne.height,ne.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Ke,ke,ne.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,ne.width,ne.height,ne.depth,0,Ke,ke,ne.data);else if(v.isData3DTexture)et?(yt&&t.texStorage3D(n.TEXTURE_3D,Ye,Ae,ne.width,ne.height,ne.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Ke,ke,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,ne.width,ne.height,ne.depth,0,Ke,ke,ne.data);else if(v.isFramebufferTexture){if(yt)if(et)t.texStorage2D(n.TEXTURE_2D,Ye,Ae,ne.width,ne.height);else{let re=ne.width,I=ne.height;for(let le=0;le<Ye;le++)t.texImage2D(n.TEXTURE_2D,le,Ae,re,I,0,Ke,ke,null),re>>=1,I>>=1}}else if(Ve.length>0&&tt){et&&yt&&t.texStorage2D(n.TEXTURE_2D,Ye,Ae,Ve[0].width,Ve[0].height);for(let re=0,I=Ve.length;re<I;re++)be=Ve[re],et?t.texSubImage2D(n.TEXTURE_2D,re,0,0,Ke,ke,be):t.texImage2D(n.TEXTURE_2D,re,Ae,Ke,ke,be);v.generateMipmaps=!1}else et?(yt&&t.texStorage2D(n.TEXTURE_2D,Ye,Ae,ne.width,ne.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ke,ke,ne)):t.texImage2D(n.TEXTURE_2D,0,Ae,Ke,ke,ne);b(v,tt)&&_(J),xe.__version=ee.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Me(T,v,z){if(v.image.length!==6)return;let J=Q(T,v),$=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+z);let ee=i.get($);if($.version!==ee.__version||J===!0){t.activeTexture(n.TEXTURE0+z);let xe=nt.getPrimaries(nt.workingColorSpace),ae=v.colorSpace===nn?null:nt.getPrimaries(v.colorSpace),fe=v.colorSpace===nn||xe===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Ce=v.isCompressedTexture||v.image[0].isCompressedTexture,we=v.image[0]&&v.image[0].isDataTexture,ne=[];for(let re=0;re<6;re++)!Ce&&!we?ne[re]=y(v.image[re],!1,!0,s.maxCubemapSize):ne[re]=we?v.image[re].image:v.image[re],ne[re]=Be(v,ne[re]);let tt=ne[0],Ke=m(tt)||a,ke=r.convert(v.format,v.colorSpace),Ae=r.convert(v.type),be=M(v.internalFormat,ke,Ae,v.colorSpace),Ve=a&&v.isVideoTexture!==!0,et=ee.__version===void 0||J===!0,yt=C(v,tt,Ke);X(n.TEXTURE_CUBE_MAP,v,Ke);let Ye;if(Ce){Ve&&et&&t.texStorage2D(n.TEXTURE_CUBE_MAP,yt,be,tt.width,tt.height);for(let re=0;re<6;re++){Ye=ne[re].mipmaps;for(let I=0;I<Ye.length;I++){let le=Ye[I];v.format!==_n?ke!==null?Ve?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,I,0,0,le.width,le.height,ke,le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,I,be,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,I,0,0,le.width,le.height,ke,Ae,le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,I,be,le.width,le.height,0,ke,Ae,le.data)}}}else{Ye=v.mipmaps,Ve&&et&&(Ye.length>0&&yt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,yt,be,ne[0].width,ne[0].height));for(let re=0;re<6;re++)if(we){Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ne[re].width,ne[re].height,ke,Ae,ne[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,be,ne[re].width,ne[re].height,0,ke,Ae,ne[re].data);for(let I=0;I<Ye.length;I++){let he=Ye[I].image[re].image;Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,I+1,0,0,he.width,he.height,ke,Ae,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,I+1,be,he.width,he.height,0,ke,Ae,he.data)}}else{Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ke,Ae,ne[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,be,ke,Ae,ne[re]);for(let I=0;I<Ye.length;I++){let le=Ye[I];Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,I+1,0,0,ke,Ae,le.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,I+1,be,ke,Ae,le.image[re])}}}b(v,Ke)&&_(n.TEXTURE_CUBE_MAP),ee.__version=$.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function ve(T,v,z,J,$,ee){let xe=r.convert(z.format,z.colorSpace),ae=r.convert(z.type),fe=M(z.internalFormat,xe,ae,z.colorSpace);if(!i.get(v).__hasExternalTextures){let we=Math.max(1,v.width>>ee),ne=Math.max(1,v.height>>ee);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,ee,fe,we,ne,v.depth,0,xe,ae,null):t.texImage2D($,ee,fe,we,ne,0,xe,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),_e(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,$,i.get(z).__webglTexture,0,Ne(v)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,$,i.get(z).__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Te(T,v,z){if(n.bindRenderbuffer(n.RENDERBUFFER,T),v.depthBuffer&&!v.stencilBuffer){let J=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(z||_e(v)){let $=v.depthTexture;$&&$.isDepthTexture&&($.type===jn?J=n.DEPTH_COMPONENT32F:$.type===Qn&&(J=n.DEPTH_COMPONENT24));let ee=Ne(v);_e(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,J,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,J,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,J,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,T)}else if(v.depthBuffer&&v.stencilBuffer){let J=Ne(v);z&&_e(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,J,n.DEPTH24_STENCIL8,v.width,v.height):_e(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,T)}else{let J=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let $=0;$<J.length;$++){let ee=J[$],xe=r.convert(ee.format,ee.colorSpace),ae=r.convert(ee.type),fe=M(ee.internalFormat,xe,ae,ee.colorSpace),Ce=Ne(v);z&&_e(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,fe,v.width,v.height):_e(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce,fe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,fe,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ze(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G(v.depthTexture,0);let J=i.get(v.depthTexture).__webglTexture,$=Ne(v);if(v.depthTexture.format===Ti)_e(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(v.depthTexture.format===_s)_e(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Le(T){let v=i.get(T),z=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ze(v.__webglFramebuffer,T)}else if(z){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]=n.createRenderbuffer(),Te(v.__webglDepthbuffer[J],T,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),Te(v.__webglDepthbuffer,T,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Je(T,v,z){let J=i.get(T);v!==void 0&&ve(J.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Le(T)}function B(T){let v=T.texture,z=i.get(T),J=i.get(v);T.addEventListener("dispose",D),T.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=v.version,o.memory.textures++);let $=T.isWebGLCubeRenderTarget===!0,ee=T.isWebGLMultipleRenderTargets===!0,xe=m(T)||a;if($){z.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(a&&v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer[ae]=[];for(let fe=0;fe<v.mipmaps.length;fe++)z.__webglFramebuffer[ae][fe]=n.createFramebuffer()}else z.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)z.__webglFramebuffer[ae]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ee)if(s.drawBuffers){let ae=T.texture;for(let fe=0,Ce=ae.length;fe<Ce;fe++){let we=i.get(ae[fe]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&_e(T)===!1){let ae=ee?v:[v];z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let fe=0;fe<ae.length;fe++){let Ce=ae[fe];z.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[fe]);let we=r.convert(Ce.format,Ce.colorSpace),ne=r.convert(Ce.type),tt=M(Ce.internalFormat,we,ne,Ce.colorSpace,T.isXRRenderTarget===!0),Ke=Ne(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke,tt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,z.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Te(z.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),X(n.TEXTURE_CUBE_MAP,v,xe);for(let ae=0;ae<6;ae++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)ve(z.__webglFramebuffer[ae][fe],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,fe);else ve(z.__webglFramebuffer[ae],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);b(v,xe)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){let ae=T.texture;for(let fe=0,Ce=ae.length;fe<Ce;fe++){let we=ae[fe],ne=i.get(we);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),X(n.TEXTURE_2D,we,xe),ve(z.__webglFramebuffer,T,we,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),b(we,xe)&&_(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?ae=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,J.__webglTexture),X(ae,v,xe),a&&v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)ve(z.__webglFramebuffer[fe],T,v,n.COLOR_ATTACHMENT0,ae,fe);else ve(z.__webglFramebuffer,T,v,n.COLOR_ATTACHMENT0,ae,0);b(v,xe)&&_(ae),t.unbindTexture()}T.depthBuffer&&Le(T)}function Lt(T){let v=m(T)||a,z=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let J=0,$=z.length;J<$;J++){let ee=z[J];if(b(ee,v)){let xe=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ae=i.get(ee).__webglTexture;t.bindTexture(xe,ae),_(xe),t.unbindTexture()}}}function ye(T){if(a&&T.samples>0&&_e(T)===!1){let v=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],z=T.width,J=T.height,$=n.COLOR_BUFFER_BIT,ee=[],xe=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=i.get(T),fe=T.isWebGLMultipleRenderTargets===!0;if(fe)for(let Ce=0;Ce<v.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Ce=0;Ce<v.length;Ce++){ee.push(n.COLOR_ATTACHMENT0+Ce),T.depthBuffer&&ee.push(xe);let we=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(we===!1&&(T.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),fe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[Ce]),we===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[xe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[xe])),fe){let ne=i.get(v[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,z,J,0,0,z,J,$,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Ce=0;Ce<v.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,ae.__webglColorRenderbuffer[Ce]);let we=i.get(v[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,we,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Ne(T){return Math.min(s.maxSamples,T.samples)}function _e(T){let v=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function lt(T){let v=o.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function Be(T,v){let z=T.colorSpace,J=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===uc||z!==On&&z!==nn&&(nt.getTransfer(z)===ht?a===!1?e.has("EXT_sRGB")===!0&&J===_n?(T.format=uc,T.minFilter=tn,T.generateMipmaps=!1):v=ro.sRGBToLinear(v):(J!==_n||$!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),v}this.allocateTextureUnit=L,this.resetTextureUnits=W,this.setTexture2D=G,this.setTexture2DArray=K,this.setTexture3D=Y,this.setTextureCube=Z,this.rebindTextures=Je,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=_e}function D1(n,e,t){let i=t.isWebGL2;function s(r,o=nn){let a,c=nt.getTransfer(o);if(r===ni)return n.UNSIGNED_BYTE;if(r===fd)return n.UNSIGNED_SHORT_4_4_4_4;if(r===md)return n.UNSIGNED_SHORT_5_5_5_1;if(r===A0)return n.BYTE;if(r===C0)return n.SHORT;if(r===tl)return n.UNSIGNED_SHORT;if(r===pd)return n.INT;if(r===Qn)return n.UNSIGNED_INT;if(r===jn)return n.FLOAT;if(r===$s)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===R0)return n.ALPHA;if(r===_n)return n.RGBA;if(r===P0)return n.LUMINANCE;if(r===L0)return n.LUMINANCE_ALPHA;if(r===Ti)return n.DEPTH_COMPONENT;if(r===_s)return n.DEPTH_STENCIL;if(r===uc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===I0)return n.RED;if(r===gd)return n.RED_INTEGER;if(r===z0)return n.RG;if(r===yd)return n.RG_INTEGER;if(r===_d)return n.RGBA_INTEGER;if(r===Sa||r===Ea||r===Ta||r===Aa)if(c===ht)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Sa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ea)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Aa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Sa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ea)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ta)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Aa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Fh||r===Oh||r===Bh||r===Hh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Fh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Oh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Bh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===bd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Vh||r===Gh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Vh)return c===ht?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Gh)return c===ht?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Wh||r===qh||r===Xh||r===Yh||r===Zh||r===$h||r===Kh||r===Jh||r===Qh||r===jh||r===eu||r===tu||r===nu||r===iu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Wh)return c===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===qh)return c===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xh)return c===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Yh)return c===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Zh)return c===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===$h)return c===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Kh)return c===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Jh)return c===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Qh)return c===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jh)return c===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===eu)return c===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===tu)return c===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===nu)return c===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===iu)return c===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ca||r===su||r===ru)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ca)return c===ht?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===su)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ru)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===D0||r===ou||r===au||r===cu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ca)return a.COMPRESSED_RED_RGTC1_EXT;if(r===ou)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===au)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===cu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ei?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Tc=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ct=class extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},U1={type:"move"},Ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),f=this._getHandJoint(l,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(U1)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ct;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Ac=class extends si{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null,y=t.getContextAttributes(),m=null,f=null,b=[],_=[],M=new de,C=null,E=new Bt;E.layers.enable(1),E.viewport=new pt;let A=new Bt;A.layers.enable(2),A.viewport=new pt;let D=[E,A],x=new Tc;x.layers.enable(1),x.layers.enable(2);let w=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=b[X];return Q===void 0&&(Q=new Ws,b[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=b[X];return Q===void 0&&(Q=new Ws,b[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=b[X];return Q===void 0&&(Q=new Ws,b[X]=Q),Q.getHandSpace()};function U(X){let Q=_.indexOf(X.inputSource);if(Q===-1)return;let ue=b[Q];ue!==void 0&&(ue.update(X.inputSource,X.frame,l||o),ue.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",L);for(let X=0;X<b.length;X++){let Q=_[X];Q!==null&&(_[X]=null,b[X].disconnect(Q))}w=null,F=null,e.setRenderTarget(m),p=null,d=null,u=null,s=null,f=null,ce.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",W),s.addEventListener("inputsourceschange",L),y.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(M),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Q={antialias:s.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Q),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Bn(p.framebufferWidth,p.framebufferHeight,{format:_n,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let Q=null,ue=null,Me=null;y.depth&&(Me=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=y.stencil?_s:Ti,ue=y.stencil?Ei:Qn);let ve={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(ve),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new Bn(d.textureWidth,d.textureHeight,{format:_n,type:ni,depthTexture:new mo(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});let Te=e.properties.get(f);Te.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ce.setContext(s),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(X){for(let Q=0;Q<X.removed.length;Q++){let ue=X.removed[Q],Me=_.indexOf(ue);Me>=0&&(_[Me]=null,b[Me].disconnect(ue))}for(let Q=0;Q<X.added.length;Q++){let ue=X.added[Q],Me=_.indexOf(ue);if(Me===-1){for(let Te=0;Te<b.length;Te++)if(Te>=_.length){_.push(ue),Me=Te;break}else if(_[Te]===null){_[Te]=ue,Me=Te;break}if(Me===-1)break}let ve=b[Me];ve&&ve.connect(ue)}}let k=new P,G=new P;function K(X,Q,ue){k.setFromMatrixPosition(Q.matrixWorld),G.setFromMatrixPosition(ue.matrixWorld);let Me=k.distanceTo(G),ve=Q.projectionMatrix.elements,Te=ue.projectionMatrix.elements,ze=ve[14]/(ve[10]-1),Le=ve[14]/(ve[10]+1),Je=(ve[9]+1)/ve[5],B=(ve[9]-1)/ve[5],Lt=(ve[8]-1)/ve[0],ye=(Te[8]+1)/Te[0],Ne=ze*Lt,_e=ze*ye,lt=Me/(-Lt+ye),Be=lt*-Lt;Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Be),X.translateZ(lt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();let T=ze+lt,v=Le+lt,z=Ne-Be,J=_e+(Me-Be),$=Je*Le/v*T,ee=B*Le/v*T;X.projectionMatrix.makePerspective(z,J,$,ee,T,v),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function Y(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;x.near=A.near=E.near=X.near,x.far=A.far=E.far=X.far,(w!==x.near||F!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,F=x.far);let Q=X.parent,ue=x.cameras;Y(x,Q);for(let Me=0;Me<ue.length;Me++)Y(ue[Me],Q);ue.length===2?K(x,E,A):x.projectionMatrix.copy(E.projectionMatrix),Z(X,x,Q)};function Z(X,Q,ue){ue===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(ue.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=dc*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)};let j=null;function te(X,Q){if(h=Q.getViewerPose(l||o),g=Q,h!==null){let ue=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let Me=!1;ue.length!==x.cameras.length&&(x.cameras.length=0,Me=!0);for(let ve=0;ve<ue.length;ve++){let Te=ue[ve],ze=null;if(p!==null)ze=p.getViewport(Te);else{let Je=u.getViewSubImage(d,Te);ze=Je.viewport,ve===0&&(e.setRenderTargetTextures(f,Je.colorTexture,d.ignoreDepthValues?void 0:Je.depthStencilTexture),e.setRenderTarget(f))}let Le=D[ve];Le===void 0&&(Le=new Bt,Le.layers.enable(ve),Le.viewport=new pt,D[ve]=Le),Le.matrix.fromArray(Te.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(Te.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(ze.x,ze.y,ze.width,ze.height),ve===0&&(x.matrix.copy(Le.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Me===!0&&x.cameras.push(Le)}}for(let ue=0;ue<b.length;ue++){let Me=_[ue],ve=b[ue];Me!==null&&ve!==void 0&&ve.update(Me,Q,l||o)}j&&j(X,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}let ce=new Ed;ce.setAnimationLoop(te),this.setAnimationLoop=function(X){j=X},this.dispose=function(){}}};function N1(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Sd(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,b,_,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,b,_):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ht&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ht&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let b=e.get(f).envMap;if(b&&(m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let _=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*_,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,b,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=_*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ht&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){let b=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function k1(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(b,_){let M=_.program;i.uniformBlockBinding(b,M)}function l(b,_){let M=s[b.id];M===void 0&&(g(b),M=h(b),s[b.id]=M,b.addEventListener("dispose",m));let C=_.program;i.updateUBOMapping(b,C);let E=e.render.frame;r[b.id]!==E&&(d(b),r[b.id]=E)}function h(b){let _=u();b.__bindingPointIndex=_;let M=n.createBuffer(),C=b.__size,E=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,C,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,M),M}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let _=s[b.id],M=b.uniforms,C=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let E=0,A=M.length;E<A;E++){let D=Array.isArray(M[E])?M[E]:[M[E]];for(let x=0,w=D.length;x<w;x++){let F=D[x];if(p(F,E,x,C)===!0){let U=F.__offset,W=Array.isArray(F.value)?F.value:[F.value],L=0;for(let k=0;k<W.length;k++){let G=W[k],K=y(G);typeof G=="number"||typeof G=="boolean"?(F.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,U+L,F.__data)):G.isMatrix3?(F.__data[0]=G.elements[0],F.__data[1]=G.elements[1],F.__data[2]=G.elements[2],F.__data[3]=0,F.__data[4]=G.elements[3],F.__data[5]=G.elements[4],F.__data[6]=G.elements[5],F.__data[7]=0,F.__data[8]=G.elements[6],F.__data[9]=G.elements[7],F.__data[10]=G.elements[8],F.__data[11]=0):(G.toArray(F.__data,L),L+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,_,M,C){let E=b.value,A=_+"_"+M;if(C[A]===void 0)return typeof E=="number"||typeof E=="boolean"?C[A]=E:C[A]=E.clone(),!0;{let D=C[A];if(typeof E=="number"||typeof E=="boolean"){if(D!==E)return C[A]=E,!0}else if(D.equals(E)===!1)return D.copy(E),!0}return!1}function g(b){let _=b.uniforms,M=0,C=16;for(let A=0,D=_.length;A<D;A++){let x=Array.isArray(_[A])?_[A]:[_[A]];for(let w=0,F=x.length;w<F;w++){let U=x[w],W=Array.isArray(U.value)?U.value:[U.value];for(let L=0,k=W.length;L<k;L++){let G=W[L],K=y(G),Y=M%C;Y!==0&&C-Y<K.boundary&&(M+=C-Y),U.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=K.storage}}}let E=M%C;return E>0&&(M+=C-E),b.__size=M,b.__cache={},this}function y(b){let _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function m(b){let _=b.target;_.removeEventListener("dispose",m);let M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(let b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}var Qs=class{constructor(e={}){let{canvas:t=X0(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let p=new Uint32Array(4),g=new Int32Array(4),y=null,m=null,f=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bt,this._useLegacyLights=!1,this.toneMapping=ti,this.toneMappingExposure=1;let _=this,M=!1,C=0,E=0,A=null,D=-1,x=null,w=new pt,F=new pt,U=null,W=new me(0),L=0,k=t.width,G=t.height,K=1,Y=null,Z=null,j=new pt(0,0,k,G),te=new pt(0,0,k,G),ce=!1,X=new Js,Q=!1,ue=!1,Me=null,ve=new ft,Te=new de,ze=new P,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Je(){return A===null?K:1}let B=i;function Lt(S,N){for(let V=0;V<S.length;V++){let q=S[V],H=t.getContext(q,N);if(H!==null)return H}return null}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jc}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",le,!1),B===null){let N=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&N.shift(),B=Lt(N,S),B===null)throw Lt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ye,Ne,_e,lt,Be,T,v,z,J,$,ee,xe,ae,fe,Ce,we,ne,tt,Ke,ke,Ae,be,Ve,et;function yt(){ye=new n_(B),Ne=new Ky(B,ye,e),ye.init(Ne),be=new D1(B,ye,Ne),_e=new I1(B,ye,Ne),lt=new r_(B),Be=new v1,T=new z1(B,ye,_e,Be,Ne,be,lt),v=new Qy(_),z=new t_(_),J=new pm(B,Ne),Ve=new Zy(B,ye,J,Ne),$=new i_(B,J,lt,Ve),ee=new l_(B,$,J,lt),Ke=new c_(B,Ne,T),we=new Jy(Be),xe=new b1(_,v,z,ye,Ne,Ve,we),ae=new N1(_,Be),fe=new M1,Ce=new C1(ye,Ne),tt=new Yy(_,v,z,_e,ee,d,c),ne=new L1(_,ee,Ne),et=new k1(B,lt,Ne,_e),ke=new $y(B,ye,lt,Ne),Ae=new s_(B,ye,lt,Ne),lt.programs=xe.programs,_.capabilities=Ne,_.extensions=ye,_.properties=Be,_.renderLists=fe,_.shadowMap=ne,_.state=_e,_.info=lt}yt();let Ye=new Ac(_,B);this.xr=Ye,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let S=ye.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ye.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(S){S!==void 0&&(K=S,this.setSize(k,G,!1))},this.getSize=function(S){return S.set(k,G)},this.setSize=function(S,N,V=!0){if(Ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=S,G=N,t.width=Math.floor(S*K),t.height=Math.floor(N*K),V===!0&&(t.style.width=S+"px",t.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(k*K,G*K).floor()},this.setDrawingBufferSize=function(S,N,V){k=S,G=N,K=V,t.width=Math.floor(S*V),t.height=Math.floor(N*V),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(w)},this.getViewport=function(S){return S.copy(j)},this.setViewport=function(S,N,V,q){S.isVector4?j.set(S.x,S.y,S.z,S.w):j.set(S,N,V,q),_e.viewport(w.copy(j).multiplyScalar(K).floor())},this.getScissor=function(S){return S.copy(te)},this.setScissor=function(S,N,V,q){S.isVector4?te.set(S.x,S.y,S.z,S.w):te.set(S,N,V,q),_e.scissor(F.copy(te).multiplyScalar(K).floor())},this.getScissorTest=function(){return ce},this.setScissorTest=function(S){_e.setScissorTest(ce=S)},this.setOpaqueSort=function(S){Y=S},this.setTransparentSort=function(S){Z=S},this.getClearColor=function(S){return S.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(S=!0,N=!0,V=!0){let q=0;if(S){let H=!1;if(A!==null){let pe=A.texture.format;H=pe===_d||pe===yd||pe===gd}if(H){let pe=A.texture.type,Se=pe===ni||pe===Qn||pe===tl||pe===Ei||pe===fd||pe===md,Ie=tt.getClearColor(),Ue=tt.getClearAlpha(),qe=Ie.r,Fe=Ie.g,He=Ie.b;Se?(p[0]=qe,p[1]=Fe,p[2]=He,p[3]=Ue,B.clearBufferuiv(B.COLOR,0,p)):(g[0]=qe,g[1]=Fe,g[2]=He,g[3]=Ue,B.clearBufferiv(B.COLOR,0,g))}else q|=B.COLOR_BUFFER_BIT}N&&(q|=B.DEPTH_BUFFER_BIT),V&&(q|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",le,!1),fe.dispose(),Ce.dispose(),Be.dispose(),v.dispose(),z.dispose(),ee.dispose(),Ve.dispose(),et.dispose(),xe.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",Vt),Ye.removeEventListener("sessionend",at),Me&&(Me.dispose(),Me=null),Gt.stop()};function re(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let S=lt.autoReset,N=ne.enabled,V=ne.autoUpdate,q=ne.needsUpdate,H=ne.type;yt(),lt.autoReset=S,ne.enabled=N,ne.autoUpdate=V,ne.needsUpdate=q,ne.type=H}function le(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function he(S){let N=S.target;N.removeEventListener("dispose",he),De(N)}function De(S){Re(S),Be.remove(S)}function Re(S){let N=Be.get(S).programs;N!==void 0&&(N.forEach(function(V){xe.releaseProgram(V)}),S.isShaderMaterial&&xe.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,V,q,H,pe){N===null&&(N=Le);let Se=H.isMesh&&H.matrixWorld.determinant()<0,Ie=ff(S,N,V,q,H);_e.setMaterial(q,Se);let Ue=V.index,qe=1;if(q.wireframe===!0){if(Ue=$.getWireframeAttribute(V),Ue===void 0)return;qe=2}let Fe=V.drawRange,He=V.attributes.position,xt=Fe.start*qe,$t=(Fe.start+Fe.count)*qe;pe!==null&&(xt=Math.max(xt,pe.start*qe),$t=Math.min($t,(pe.start+pe.count)*qe)),Ue!==null?(xt=Math.max(xt,0),$t=Math.min($t,Ue.count)):He!=null&&(xt=Math.max(xt,0),$t=Math.min($t,He.count));let Rt=$t-xt;if(Rt<0||Rt===1/0)return;Ve.setup(H,q,Ie,V,Ue);let Pn,mt=ke;if(Ue!==null&&(Pn=J.get(Ue),mt=Ae,mt.setIndex(Pn)),H.isMesh)q.wireframe===!0?(_e.setLineWidth(q.wireframeLinewidth*Je()),mt.setMode(B.LINES)):mt.setMode(B.TRIANGLES);else if(H.isLine){let Ze=q.linewidth;Ze===void 0&&(Ze=1),_e.setLineWidth(Ze*Je()),H.isLineSegments?mt.setMode(B.LINES):H.isLineLoop?mt.setMode(B.LINE_LOOP):mt.setMode(B.LINE_STRIP)}else H.isPoints?mt.setMode(B.POINTS):H.isSprite&&mt.setMode(B.TRIANGLES);if(H.isBatchedMesh)mt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)mt.renderInstances(xt,Rt,H.count);else if(V.isInstancedBufferGeometry){let Ze=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,_a=Math.min(V.instanceCount,Ze);mt.renderInstances(xt,Rt,_a)}else mt.render(xt,Rt)};function rt(S,N,V){S.transparent===!0&&S.side===gn&&S.forceSinglePass===!1?(S.side=Ht,S.needsUpdate=!0,Mr(S,N,V),S.side=ii,S.needsUpdate=!0,Mr(S,N,V),S.side=gn):Mr(S,N,V)}this.compile=function(S,N,V=null){V===null&&(V=S),m=Ce.get(V),m.init(),b.push(m),V.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),S!==V&&S.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(_._useLegacyLights);let q=new Set;return S.traverse(function(H){let pe=H.material;if(pe)if(Array.isArray(pe))for(let Se=0;Se<pe.length;Se++){let Ie=pe[Se];rt(Ie,V,H),q.add(Ie)}else rt(pe,V,H),q.add(pe)}),b.pop(),m=null,q},this.compileAsync=function(S,N,V=null){let q=this.compile(S,N,V);return new Promise(H=>{function pe(){if(q.forEach(function(Se){Be.get(Se).currentProgram.isReady()&&q.delete(Se)}),q.size===0){H(S);return}setTimeout(pe,10)}ye.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let ot=null;function Ct(S){ot&&ot(S)}function Vt(){Gt.stop()}function at(){Gt.start()}let Gt=new Ed;Gt.setAnimationLoop(Ct),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(S){ot=S,Ye.setAnimationLoop(S),S===null?Gt.stop():Gt.start()},Ye.addEventListener("sessionstart",Vt),Ye.addEventListener("sessionend",at),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(N),N=Ye.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,N,A),m=Ce.get(S,b.length),m.init(),b.push(m),ve.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),X.setFromProjectionMatrix(ve),ue=this.localClippingEnabled,Q=we.init(this.clippingPlanes,ue),y=fe.get(S,f.length),y.init(),f.push(y),Mn(S,N,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(Y,Z),this.info.render.frame++,Q===!0&&we.beginShadows();let V=m.state.shadowsArray;if(ne.render(V,S,N),Q===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),tt.render(y,S),m.setupLights(_._useLegacyLights),N.isArrayCamera){let q=N.cameras;for(let H=0,pe=q.length;H<pe;H++){let Se=q[H];Kl(y,S,Se,Se.viewport)}}else Kl(y,S,N);A!==null&&(T.updateMultisampleRenderTarget(A),T.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(_,S,N),Ve.resetDefaultState(),D=-1,x=null,b.pop(),b.length>0?m=b[b.length-1]:m=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function Mn(S,N,V,q){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||X.intersectsSprite(S)){q&&ze.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ve);let Se=ee.update(S),Ie=S.material;Ie.visible&&y.push(S,Se,Ie,V,ze.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||X.intersectsObject(S))){let Se=ee.update(S),Ie=S.material;if(q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ze.copy(S.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),ze.copy(Se.boundingSphere.center)),ze.applyMatrix4(S.matrixWorld).applyMatrix4(ve)),Array.isArray(Ie)){let Ue=Se.groups;for(let qe=0,Fe=Ue.length;qe<Fe;qe++){let He=Ue[qe],xt=Ie[He.materialIndex];xt&&xt.visible&&y.push(S,Se,xt,V,ze.z,He)}}else Ie.visible&&y.push(S,Se,Ie,V,ze.z,null)}}let pe=S.children;for(let Se=0,Ie=pe.length;Se<Ie;Se++)Mn(pe[Se],N,V,q)}function Kl(S,N,V,q){let H=S.opaque,pe=S.transmissive,Se=S.transparent;m.setupLightsView(V),Q===!0&&we.setGlobalState(_.clippingPlanes,V),pe.length>0&&pf(H,pe,N,V),q&&_e.viewport(w.copy(q)),H.length>0&&xr(H,N,V),pe.length>0&&xr(pe,N,V),Se.length>0&&xr(Se,N,V),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function pf(S,N,V,q){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;let pe=Ne.isWebGL2;Me===null&&(Me=new Bn(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?$s:ni,minFilter:Zs,samples:pe?4:0})),_.getDrawingBufferSize(Te),pe?Me.setSize(Te.x,Te.y):Me.setSize(pc(Te.x),pc(Te.y));let Se=_.getRenderTarget();_.setRenderTarget(Me),_.getClearColor(W),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear();let Ie=_.toneMapping;_.toneMapping=ti,xr(S,V,q),T.updateMultisampleRenderTarget(Me),T.updateRenderTargetMipmap(Me);let Ue=!1;for(let qe=0,Fe=N.length;qe<Fe;qe++){let He=N[qe],xt=He.object,$t=He.geometry,Rt=He.material,Pn=He.group;if(Rt.side===gn&&xt.layers.test(q.layers)){let mt=Rt.side;Rt.side=Ht,Rt.needsUpdate=!0,Jl(xt,V,q,$t,Rt,Pn),Rt.side=mt,Rt.needsUpdate=!0,Ue=!0}}Ue===!0&&(T.updateMultisampleRenderTarget(Me),T.updateRenderTargetMipmap(Me)),_.setRenderTarget(Se),_.setClearColor(W,L),_.toneMapping=Ie}function xr(S,N,V){let q=N.isScene===!0?N.overrideMaterial:null;for(let H=0,pe=S.length;H<pe;H++){let Se=S[H],Ie=Se.object,Ue=Se.geometry,qe=q===null?Se.material:q,Fe=Se.group;Ie.layers.test(V.layers)&&Jl(Ie,N,V,Ue,qe,Fe)}}function Jl(S,N,V,q,H,pe){S.onBeforeRender(_,N,V,q,H,pe),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(_,N,V,q,S,pe),H.transparent===!0&&H.side===gn&&H.forceSinglePass===!1?(H.side=Ht,H.needsUpdate=!0,_.renderBufferDirect(V,N,q,H,S,pe),H.side=ii,H.needsUpdate=!0,_.renderBufferDirect(V,N,q,H,S,pe),H.side=gn):_.renderBufferDirect(V,N,q,H,S,pe),S.onAfterRender(_,N,V,q,H,pe)}function Mr(S,N,V){N.isScene!==!0&&(N=Le);let q=Be.get(S),H=m.state.lights,pe=m.state.shadowsArray,Se=H.state.version,Ie=xe.getParameters(S,H.state,pe,N,V),Ue=xe.getProgramCacheKey(Ie),qe=q.programs;q.environment=S.isMeshStandardMaterial?N.environment:null,q.fog=N.fog,q.envMap=(S.isMeshStandardMaterial?z:v).get(S.envMap||q.environment),qe===void 0&&(S.addEventListener("dispose",he),qe=new Map,q.programs=qe);let Fe=qe.get(Ue);if(Fe!==void 0){if(q.currentProgram===Fe&&q.lightsStateVersion===Se)return jl(S,Ie),Fe}else Ie.uniforms=xe.getUniforms(S),S.onBuild(V,Ie,_),S.onBeforeCompile(Ie,_),Fe=xe.acquireProgram(Ie,Ue),qe.set(Ue,Fe),q.uniforms=Ie.uniforms;let He=q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(He.clippingPlanes=we.uniform),jl(S,Ie),q.needsLights=gf(S),q.lightsStateVersion=Se,q.needsLights&&(He.ambientLightColor.value=H.state.ambient,He.lightProbe.value=H.state.probe,He.directionalLights.value=H.state.directional,He.directionalLightShadows.value=H.state.directionalShadow,He.spotLights.value=H.state.spot,He.spotLightShadows.value=H.state.spotShadow,He.rectAreaLights.value=H.state.rectArea,He.ltc_1.value=H.state.rectAreaLTC1,He.ltc_2.value=H.state.rectAreaLTC2,He.pointLights.value=H.state.point,He.pointLightShadows.value=H.state.pointShadow,He.hemisphereLights.value=H.state.hemi,He.directionalShadowMap.value=H.state.directionalShadowMap,He.directionalShadowMatrix.value=H.state.directionalShadowMatrix,He.spotShadowMap.value=H.state.spotShadowMap,He.spotLightMatrix.value=H.state.spotLightMatrix,He.spotLightMap.value=H.state.spotLightMap,He.pointShadowMap.value=H.state.pointShadowMap,He.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=Fe,q.uniformsList=null,Fe}function Ql(S){if(S.uniformsList===null){let N=S.currentProgram.getUniforms();S.uniformsList=ms.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function jl(S,N){let V=Be.get(S);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function ff(S,N,V,q,H){N.isScene!==!0&&(N=Le),T.resetTextureUnits();let pe=N.fog,Se=q.isMeshStandardMaterial?N.environment:null,Ie=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:On,Ue=(q.isMeshStandardMaterial?z:v).get(q.envMap||Se),qe=q.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Fe=!!V.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),He=!!V.morphAttributes.position,xt=!!V.morphAttributes.normal,$t=!!V.morphAttributes.color,Rt=ti;q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Rt=_.toneMapping);let Pn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,mt=Pn!==void 0?Pn.length:0,Ze=Be.get(q),_a=m.state.lights;if(Q===!0&&(ue===!0||S!==x)){let jt=S===x&&q.id===D;we.setState(q,S,jt)}let _t=!1;q.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==_a.state.version||Ze.outputColorSpace!==Ie||H.isBatchedMesh&&Ze.batching===!1||!H.isBatchedMesh&&Ze.batching===!0||H.isInstancedMesh&&Ze.instancing===!1||!H.isInstancedMesh&&Ze.instancing===!0||H.isSkinnedMesh&&Ze.skinning===!1||!H.isSkinnedMesh&&Ze.skinning===!0||H.isInstancedMesh&&Ze.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ze.instancingColor===!1&&H.instanceColor!==null||Ze.envMap!==Ue||q.fog===!0&&Ze.fog!==pe||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==we.numPlanes||Ze.numIntersection!==we.numIntersection)||Ze.vertexAlphas!==qe||Ze.vertexTangents!==Fe||Ze.morphTargets!==He||Ze.morphNormals!==xt||Ze.morphColors!==$t||Ze.toneMapping!==Rt||Ne.isWebGL2===!0&&Ze.morphTargetsCount!==mt)&&(_t=!0):(_t=!0,Ze.__version=q.version);let gi=Ze.currentProgram;_t===!0&&(gi=Mr(q,N,H));let eh=!1,Ns=!1,ba=!1,kt=gi.getUniforms(),yi=Ze.uniforms;if(_e.useProgram(gi.program)&&(eh=!0,Ns=!0,ba=!0),q.id!==D&&(D=q.id,Ns=!0),eh||x!==S){kt.setValue(B,"projectionMatrix",S.projectionMatrix),kt.setValue(B,"viewMatrix",S.matrixWorldInverse);let jt=kt.map.cameraPosition;jt!==void 0&&jt.setValue(B,ze.setFromMatrixPosition(S.matrixWorld)),Ne.logarithmicDepthBuffer&&kt.setValue(B,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&kt.setValue(B,"isOrthographic",S.isOrthographicCamera===!0),x!==S&&(x=S,Ns=!0,ba=!0)}if(H.isSkinnedMesh){kt.setOptional(B,H,"bindMatrix"),kt.setOptional(B,H,"bindMatrixInverse");let jt=H.skeleton;jt&&(Ne.floatVertexTextures?(jt.boneTexture===null&&jt.computeBoneTexture(),kt.setValue(B,"boneTexture",jt.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(kt.setOptional(B,H,"batchingTexture"),kt.setValue(B,"batchingTexture",H._matricesTexture,T));let va=V.morphAttributes;if((va.position!==void 0||va.normal!==void 0||va.color!==void 0&&Ne.isWebGL2===!0)&&Ke.update(H,V,gi),(Ns||Ze.receiveShadow!==H.receiveShadow)&&(Ze.receiveShadow=H.receiveShadow,kt.setValue(B,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(yi.envMap.value=Ue,yi.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Ns&&(kt.setValue(B,"toneMappingExposure",_.toneMappingExposure),Ze.needsLights&&mf(yi,ba),pe&&q.fog===!0&&ae.refreshFogUniforms(yi,pe),ae.refreshMaterialUniforms(yi,q,K,G,Me),ms.upload(B,Ql(Ze),yi,T)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ms.upload(B,Ql(Ze),yi,T),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&kt.setValue(B,"center",H.center),kt.setValue(B,"modelViewMatrix",H.modelViewMatrix),kt.setValue(B,"normalMatrix",H.normalMatrix),kt.setValue(B,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let jt=q.uniformsGroups;for(let xa=0,yf=jt.length;xa<yf;xa++)if(Ne.isWebGL2){let th=jt[xa];et.update(th,gi),et.bind(th,gi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gi}function mf(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function gf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,N,V){Be.get(S.texture).__webglTexture=N,Be.get(S.depthTexture).__webglTexture=V;let q=Be.get(S);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=V===void 0,q.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,N){let V=Be.get(S);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,V=0){A=S,C=N,E=V;let q=!0,H=null,pe=!1,Se=!1;if(S){let Ue=Be.get(S);Ue.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(B.FRAMEBUFFER,null),q=!1):Ue.__webglFramebuffer===void 0?T.setupRenderTarget(S):Ue.__hasExternalTextures&&T.rebindTextures(S,Be.get(S.texture).__webglTexture,Be.get(S.depthTexture).__webglTexture);let qe=S.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Se=!0);let Fe=Be.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Fe[N])?H=Fe[N][V]:H=Fe[N],pe=!0):Ne.isWebGL2&&S.samples>0&&T.useMultisampledRTT(S)===!1?H=Be.get(S).__webglMultisampledFramebuffer:Array.isArray(Fe)?H=Fe[V]:H=Fe,w.copy(S.viewport),F.copy(S.scissor),U=S.scissorTest}else w.copy(j).multiplyScalar(K).floor(),F.copy(te).multiplyScalar(K).floor(),U=ce;if(_e.bindFramebuffer(B.FRAMEBUFFER,H)&&Ne.drawBuffers&&q&&_e.drawBuffers(S,H),_e.viewport(w),_e.scissor(F),_e.setScissorTest(U),pe){let Ue=Be.get(S.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ue.__webglTexture,V)}else if(Se){let Ue=Be.get(S.texture),qe=N||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ue.__webglTexture,V||0,qe)}D=-1},this.readRenderTargetPixels=function(S,N,V,q,H,pe,Se){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Be.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(Ie=Ie[Se]),Ie){_e.bindFramebuffer(B.FRAMEBUFFER,Ie);try{let Ue=S.texture,qe=Ue.format,Fe=Ue.type;if(qe!==_n&&be.convert(qe)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let He=Fe===$s&&(ye.has("EXT_color_buffer_half_float")||Ne.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Fe!==ni&&be.convert(Fe)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===jn&&(Ne.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-q&&V>=0&&V<=S.height-H&&B.readPixels(N,V,q,H,be.convert(qe),be.convert(Fe),pe)}finally{let Ue=A!==null?Be.get(A).__webglFramebuffer:null;_e.bindFramebuffer(B.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(S,N,V=0){let q=Math.pow(2,-V),H=Math.floor(N.image.width*q),pe=Math.floor(N.image.height*q);T.setTexture2D(N,0),B.copyTexSubImage2D(B.TEXTURE_2D,V,0,0,S.x,S.y,H,pe),_e.unbindTexture()},this.copyTextureToTexture=function(S,N,V,q=0){let H=N.image.width,pe=N.image.height,Se=be.convert(V.format),Ie=be.convert(V.type);T.setTexture2D(V,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment),N.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,q,S.x,S.y,H,pe,Se,Ie,N.image.data):N.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,q,S.x,S.y,N.mipmaps[0].width,N.mipmaps[0].height,Se,N.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,q,S.x,S.y,Se,Ie,N.image),q===0&&V.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(S,N,V,q,H=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let pe=S.max.x-S.min.x+1,Se=S.max.y-S.min.y+1,Ie=S.max.z-S.min.z+1,Ue=be.convert(q.format),qe=be.convert(q.type),Fe;if(q.isData3DTexture)T.setTexture3D(q,0),Fe=B.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)T.setTexture2DArray(q,0),Fe=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,q.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,q.unpackAlignment);let He=B.getParameter(B.UNPACK_ROW_LENGTH),xt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),$t=B.getParameter(B.UNPACK_SKIP_PIXELS),Rt=B.getParameter(B.UNPACK_SKIP_ROWS),Pn=B.getParameter(B.UNPACK_SKIP_IMAGES),mt=V.isCompressedTexture?V.mipmaps[H]:V.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,mt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,mt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,S.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,S.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,S.min.z),V.isDataTexture||V.isData3DTexture?B.texSubImage3D(Fe,H,N.x,N.y,N.z,pe,Se,Ie,Ue,qe,mt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Fe,H,N.x,N.y,N.z,pe,Se,Ie,Ue,mt.data)):B.texSubImage3D(Fe,H,N.x,N.y,N.z,pe,Se,Ie,Ue,qe,mt),B.pixelStorei(B.UNPACK_ROW_LENGTH,He),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,xt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,$t),B.pixelStorei(B.UNPACK_SKIP_ROWS,Rt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Pn),H===0&&q.generateMipmaps&&B.generateMipmap(Fe),_e.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),_e.unbindTexture()},this.resetState=function(){C=0,E=0,A=null,_e.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===il?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===Fo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===bt?Ai:vd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ai?bt:On}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Cc=class extends Qs{};Cc.prototype.isWebGL1Renderer=!0;var go=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new me(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},yo=class extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var js=class extends En{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ju=new P,ed=new P,td=new ft,ec=new bs,qr=new Ri,Rc=class extends zt{constructor(e=new vt,t=new js){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)ju.fromBufferAttribute(t,s-1),ed.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ju.distanceTo(ed);e.setAttribute("lineDistance",new $e(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qr.copy(i.boundingSphere),qr.applyMatrix4(s),qr.radius+=r,e.ray.intersectsSphere(qr)===!1)return;td.copy(s).invert(),ec.copy(e.ray).applyMatrix4(td);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new P,h=new P,u=new P,d=new P,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let f=Math.max(0,o.start),b=Math.min(g.count,o.start+o.count);for(let _=f,M=b-1;_<M;_+=p){let C=g.getX(_),E=g.getX(_+1);if(l.fromBufferAttribute(m,C),h.fromBufferAttribute(m,E),ec.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,o.start),b=Math.min(m.count,o.start+o.count);for(let _=f,M=b-1;_<M;_+=p){if(l.fromBufferAttribute(m,_),h.fromBufferAttribute(m,_+1),ec.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||t.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},nd=new P,id=new P,_o=class extends Rc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)nd.fromBufferAttribute(t,s),id.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+nd.distanceTo(id);e.setAttribute("lineDistance",new $e(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var er=class extends En{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},sd=new ft,Pc=new bs,Xr=new Ri,Yr=new P,bo=class extends zt{constructor(e=new vt,t=new er){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere),Xr.applyMatrix4(s),Xr.radius+=r,e.ray.intersectsSphere(Xr)===!1)return;sd.copy(s).invert(),Pc.copy(e.ray).applyMatrix4(sd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){let d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,y=p;g<y;g++){let m=l.getX(g);Yr.fromBufferAttribute(u,m),rd(Yr,m,c,s,e,t,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,y=p;g<y;g++)Yr.fromBufferAttribute(u,g),rd(Yr,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function rd(n,e,t,i,s,r,o){let a=Pc.distanceSqToPoint(n);if(a<t){let c=new P;Pc.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}var tr=class extends sn{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new de:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new P,s=[],r=[],o=[],a=new P,c=new ft;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(It(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(It(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},nr=class extends rn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){let i=t||new de,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Lc=class extends nr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function rl(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Zr=new P,tc=new rl,nc=new rl,ic=new rl,Ic=class extends rn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new P){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Zr.subVectors(s[0],s[1]).add(s[0]),l=Zr);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Zr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Zr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),tc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,y,m),nc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,y,m),ic.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(tc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),nc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ic.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(tc.calc(c),nc.calc(c),ic.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function od(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function F1(n,e){let t=1-n;return t*t*e}function O1(n,e){return 2*(1-n)*n*e}function B1(n,e){return n*n*e}function qs(n,e,t,i){return F1(n,e)+O1(n,t)+B1(n,i)}function H1(n,e){let t=1-n;return t*t*t*e}function V1(n,e){let t=1-n;return 3*t*t*n*e}function G1(n,e){return 3*(1-n)*n*n*e}function W1(n,e){return n*n*n*e}function Xs(n,e,t,i,s){return H1(n,e)+V1(n,t)+G1(n,i)+W1(n,s)}var vo=class extends rn{constructor(e=new de,t=new de,i=new de,s=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new de){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Xs(e,s.x,r.x,o.x,a.x),Xs(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},zc=class extends rn{constructor(e=new P,t=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Xs(e,s.x,r.x,o.x,a.x),Xs(e,s.y,r.y,o.y,a.y),Xs(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xo=class extends rn{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dc=class extends rn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mo=class extends rn{constructor(e=new de,t=new de,i=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new de){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(qs(e,s.x,r.x,o.x),qs(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uc=class extends rn{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(qs(e,s.x,r.x,o.x),qs(e,s.y,r.y,o.y),qs(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wo=class extends rn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(od(a,c.x,l.x,h.x,u.x),od(a,c.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new de().fromArray(s))}return this}},ad=Object.freeze({__proto__:null,ArcCurve:Lc,CatmullRomCurve3:Ic,CubicBezierCurve:vo,CubicBezierCurve3:zc,EllipseCurve:nr,LineCurve:xo,LineCurve3:Dc,QuadraticBezierCurve:Mo,QuadraticBezierCurve3:Uc,SplineCurve:wo}),Nc=class extends rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ad[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new ad[s.type]().fromJSON(s))}return this}},kc=class extends Nc{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new xo(this.currentPoint.clone(),new de(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Mo(this.currentPoint.clone(),new de(e,t),new de(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new vo(this.currentPoint.clone(),new de(e,t),new de(i,s),new de(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new wo(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){let l=new nr(e,t,i,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Fc=class n extends vt{constructor(e=[new de(0,-.5),new de(.5,0),new de(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=It(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,u=new P,d=new de,p=new P,g=new P,y=new P,m=0,f=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:m=e[b+1].x-e[b].x,f=e[b+1].y-e[b].y,p.x=f*1,p.y=-m,p.z=f*0,y.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(y.x,y.y,y.z);break;default:m=e[b+1].x-e[b].x,f=e[b+1].y-e[b].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),c.push(p.x,p.y,p.z),y.copy(g)}for(let b=0;b<=t;b++){let _=i+b*h*s,M=Math.sin(_),C=Math.cos(_);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*M,u.y=e[E].y,u.z=e[E].x*C,o.push(u.x,u.y,u.z),d.x=b/t,d.y=E/(e.length-1),a.push(d.x,d.y);let A=c[3*E+0]*M,D=c[3*E+1],x=c[3*E+0]*C;l.push(A,D,x)}}for(let b=0;b<t;b++)for(let _=0;_<e.length-1;_++){let M=_+b*e.length,C=M,E=M+e.length,A=M+e.length+1,D=M+1;r.push(C,E,D),r.push(A,D,E)}this.setIndex(r),this.setAttribute("position",new $e(o,3)),this.setAttribute("uv",new $e(a,2)),this.setAttribute("normal",new $e(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},So=class n extends Fc{constructor(e=1,t=1,i=4,s=8){let r=new kc;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},Eo=class n extends vt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new P,h=new de;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=i+u/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new $e(o,3)),this.setAttribute("normal",new $e(a,3)),this.setAttribute("uv",new $e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ri=class n extends vt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,y=[],m=i/2,f=0;b(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(d,3)),this.setAttribute("uv",new $e(p,2));function b(){let M=new P,C=new P,E=0,A=(t-e)/i;for(let D=0;D<=r;D++){let x=[],w=D/r,F=w*(t-e)+e;for(let U=0;U<=s;U++){let W=U/s,L=W*c+a,k=Math.sin(L),G=Math.cos(L);C.x=F*k,C.y=-w*i+m,C.z=F*G,u.push(C.x,C.y,C.z),M.set(k,A,G).normalize(),d.push(M.x,M.y,M.z),p.push(W,1-w),x.push(g++)}y.push(x)}for(let D=0;D<s;D++)for(let x=0;x<r;x++){let w=y[x][D],F=y[x+1][D],U=y[x+1][D+1],W=y[x][D+1];h.push(w,F,W),h.push(F,U,W),E+=6}l.addGroup(f,E,0),f+=E}function _(M){let C=g,E=new de,A=new P,D=0,x=M===!0?e:t,w=M===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*w,0),d.push(0,w,0),p.push(.5,.5),g++;let F=g;for(let U=0;U<=s;U++){let L=U/s*c+a,k=Math.cos(L),G=Math.sin(L);A.x=x*G,A.y=m*w,A.z=x*k,u.push(A.x,A.y,A.z),d.push(0,w,0),E.x=k*.5+.5,E.y=G*.5*w+.5,p.push(E.x,E.y),g++}for(let U=0;U<s;U++){let W=C+U,L=F+U;M===!0?h.push(L,L+1,W):h.push(L+1,L,W),D+=3}l.addGroup(f,D,M===!0?1:2),f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},To=class n extends ri{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Oc=class n extends vt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new $e(r,3)),this.setAttribute("normal",new $e(r.slice(),3)),this.setAttribute("uv",new $e(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let _=new P,M=new P,C=new P;for(let E=0;E<t.length;E+=3)p(t[E+0],_),p(t[E+1],M),p(t[E+2],C),c(_,M,C,b)}function c(b,_,M,C){let E=C+1,A=[];for(let D=0;D<=E;D++){A[D]=[];let x=b.clone().lerp(M,D/E),w=_.clone().lerp(M,D/E),F=E-D;for(let U=0;U<=F;U++)U===0&&D===E?A[D][U]=x:A[D][U]=x.clone().lerp(w,U/F)}for(let D=0;D<E;D++)for(let x=0;x<2*(E-D)-1;x++){let w=Math.floor(x/2);x%2===0?(d(A[D][w+1]),d(A[D+1][w]),d(A[D][w])):(d(A[D][w+1]),d(A[D+1][w+1]),d(A[D+1][w]))}}function l(b){let _=new P;for(let M=0;M<r.length;M+=3)_.x=r[M+0],_.y=r[M+1],_.z=r[M+2],_.normalize().multiplyScalar(b),r[M+0]=_.x,r[M+1]=_.y,r[M+2]=_.z}function h(){let b=new P;for(let _=0;_<r.length;_+=3){b.x=r[_+0],b.y=r[_+1],b.z=r[_+2];let M=m(b)/2/Math.PI+.5,C=f(b)/Math.PI+.5;o.push(M,1-C)}g(),u()}function u(){for(let b=0;b<o.length;b+=6){let _=o[b+0],M=o[b+2],C=o[b+4],E=Math.max(_,M,C),A=Math.min(_,M,C);E>.9&&A<.1&&(_<.2&&(o[b+0]+=1),M<.2&&(o[b+2]+=1),C<.2&&(o[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function p(b,_){let M=b*3;_.x=e[M+0],_.y=e[M+1],_.z=e[M+2]}function g(){let b=new P,_=new P,M=new P,C=new P,E=new de,A=new de,D=new de;for(let x=0,w=0;x<r.length;x+=9,w+=6){b.set(r[x+0],r[x+1],r[x+2]),_.set(r[x+3],r[x+4],r[x+5]),M.set(r[x+6],r[x+7],r[x+8]),E.set(o[w+0],o[w+1]),A.set(o[w+2],o[w+3]),D.set(o[w+4],o[w+5]),C.copy(b).add(_).add(M).divideScalar(3);let F=m(C);y(E,w+0,b,F),y(A,w+2,_,F),y(D,w+4,M,F)}}function y(b,_,M,C){C<0&&b.x===1&&(o[_]=b.x-1),M.x===0&&M.z===0&&(o[_]=C/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function f(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Ao=class n extends Oc{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Co=class n extends vt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=e,d=(t-e)/s,p=new P,g=new de;for(let y=0;y<=s;y++){for(let m=0;m<=i;m++){let f=r+m/i*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let y=0;y<s;y++){let m=y*(i+1);for(let f=0;f<i;f++){let b=f+m,_=b,M=b+i+1,C=b+i+2,E=b+1;a.push(_,M,E),a.push(M,C,E)}}this.setIndex(a),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(l,3)),this.setAttribute("uv",new $e(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Li=class n extends vt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new P,d=new P,p=[],g=[],y=[],m=[];for(let f=0;f<=i;f++){let b=[],_=f/i,M=0;f===0&&o===0?M=.5/t:f===i&&c===Math.PI&&(M=-.5/t);for(let C=0;C<=t;C++){let E=C/t;u.x=-e*Math.cos(s+E*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(s+E*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(E+M,1-_),b.push(l++)}h.push(b)}for(let f=0;f<i;f++)for(let b=0;b<t;b++){let _=h[f][b+1],M=h[f][b],C=h[f+1][b],E=h[f+1][b+1];(f!==0||o>0)&&p.push(_,M,E),(f!==i-1||c<Math.PI)&&p.push(M,C,E)}this.setIndex(p),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(y,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ro=class n extends vt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new P,u=new P,d=new P;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let y=g/s*r,m=p/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(y),u.y=(e+t*Math.cos(m))*Math.sin(y),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let y=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,b=(s+1)*p+g;o.push(y,m,b),o.push(m,f,b)}this.setIndex(o),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ms=class extends En{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new me(16777215),this.specular=new me(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=No,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Qt=class extends En{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=No,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function $r(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function q1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ws=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Bc=class extends ws{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lu,endingEnd:lu}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case hu:r=e,a=2*t-i;break;case uu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case hu:o=e,c=2*i-t;break;case uu:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),y=g*g,m=y*g,f=-d*m+2*d*y-d*g,b=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,_=(-1-p)*m+(1.5+p)*y+.5*g,M=p*m-p*y;for(let C=0;C!==a;++C)r[C]=f*o[h+C]+b*o[l+C]+_*o[c+C]+M*o[u+C];return r}},Hc=class extends ws{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Vc=class extends ws{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},vn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$r(t,this.TimeBufferType),this.values=$r(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:$r(e.times,Array),values:$r(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Vc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qr:t=this.InterpolantFactoryMethodDiscrete;break;case jr:t=this.InterpolantFactoryMethodLinear;break;case Ra:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qr;case this.InterpolantFactoryMethodLinear:return jr;case this.InterpolantFactoryMethodSmooth:return Ra}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&q1(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ra,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){let y=t[u+g];if(y!==t[d+g]||y!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let p=0;p!==i;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=jr;var Ii=class extends vn{};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=Qr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Gc=class extends vn{};Gc.prototype.ValueTypeName="color";var Wc=class extends vn{};Wc.prototype.ValueTypeName="number";var qc=class extends ws{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Sn.slerpFlat(r,0,o,l-a,o,l,c);return r}},ir=class extends vn{InterpolantFactoryMethodLinear(e){return new qc(this.times,this.values,this.getValueSize(),e)}};ir.prototype.ValueTypeName="quaternion";ir.prototype.DefaultInterpolation=jr;ir.prototype.InterpolantFactoryMethodSmooth=void 0;var zi=class extends vn{};zi.prototype.ValueTypeName="string";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=Qr;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Xc=class extends vn{};Xc.prototype.ValueTypeName="vector";var Yc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},X1=new Yc,Zc=class{constructor(e){this.manager=e!==void 0?e:X1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Zc.DEFAULT_MATERIAL_NAME="__DEFAULT";var sr=class extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Po=class extends sr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},sc=new ft,cd=new P,ld=new P,Lo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Js,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;cd.setFromMatrixPosition(e.matrixWorld),t.position.copy(cd),ld.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ld),t.updateMatrixWorld(),sc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(sc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var hd=new ft,Vs=new P,rc=new P,$c=class extends Lo{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new de(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Vs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Vs),rc.copy(i.position),rc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(rc),i.updateMatrixWorld(),s.makeTranslation(-Vs.x,-Vs.y,-Vs.z),hd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hd)}},Io=class extends sr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new $c}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Kc=class extends Lo{constructor(){super(new po(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zo=class extends sr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new Kc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ol="\\[\\]\\.:\\/",Y1=new RegExp("["+ol+"]","g"),al="[^"+ol+"]",Z1="[^"+ol.replace("\\.","")+"]",$1=/((?:WC+[\/:])*)/.source.replace("WC",al),K1=/(WCOD+)?/.source.replace("WCOD",Z1),J1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",al),Q1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",al),j1=new RegExp("^"+$1+K1+J1+Q1+"$"),eb=["material","materials","bones","map"],Jc=class{constructor(e,t,i){let s=i||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},dt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Y1,"")}static parseTrackName(e){let t=j1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);eb.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=Jc;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Bx=new Float32Array(1);var Do=class{constructor(e,t,i=0,s=1/0){this.ray=new bs(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ks,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Qc(e,this,i,t),i.sort(ud),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Qc(e[s],this,i,t);return i.sort(ud),i}};function ud(n,e){return n.distance-e.distance}function Qc(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)Qc(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jc);async function Bo(n){let e=await fetch(n,{cache:"no-cache"});if(!e.ok)throw new Error(`Failed to load ${n}: ${e.status}`);return e.json()}async function Ld(){if(globalThis.__PIZZA_DATA__)return globalThis.__PIZZA_DATA__;let[n,e,t]=await Promise.all([Bo("data/economy.json"),Bo("data/strings/en.json"),Bo("data/locations/index.json")]),i=await Promise.all(t.map(r=>Bo(`data/locations/${r}.json`))),s=Object.fromEntries(i.map(r=>[r.id,r]));return{economy:n,strings:e,locations:s}}var Id={};function zd(n){Id=n}function R(n,e={}){let t=Id[n];if(t===void 0)return console.warn("[i18n] missing key",n),n;for(let i of Object.keys(e))t=t.split("{"+i+"}").join(String(e[i]));return t}var tb=new Intl.NumberFormat(void 0,{notation:"compact",maximumFractionDigits:1}),nb=new Intl.NumberFormat(void 0,{maximumFractionDigits:0}),ib=[[1e9,"B"],[1e12,"T"],[1e15,"Qa"],[1e18,"Qi"],[1e21,"Sx"],[1e24,"Sp"],[1e27,"Oc"],[1e30,"No"],[1e33,"Dc"],[1e36,"Ud"],[1e39,"Dd"],[1e42,"Td"],[1e45,"Qad"],[1e48,"Qid"],[1e51,"Sxd"],[1e54,"Spd"],[1e57,"Ocd"],[1e60,"Nod"],[1e63,"Vg"]];function Dd(n){let e=Math.abs(n);if(e>=1e66)return n.toExponential(2).replace("e+","e");let t=null;for(let s of ib)e>=s[0]&&(t=s);return t?parseFloat((n/t[0]).toFixed(2))+t[1]:null}function cl(n){let e=Math.floor(n);return Dd(e)??tb.format(e)}function gt(n){let e=Math.floor(n);return Dd(e)??nb.format(e)}function ll(n){let e=Math.floor(n/3600),t=Math.floor(n%3600/60);return e>0?`${e}h ${t}m`:`${t}m`}function Ud(n){return n<10?n.toFixed(1):cl(n)}var hl={schemaVersion:3,rngSeed:1234567,cash:0,lifetimeCash:0,gameTime:0,dayClock:.3,savedAt:0,createdAt:0,city:"riccione",cityVisited:["riccione"],location:"cityRiccione",decorShown:0,upgrades:{oven:0,counter:0,cheese:0,decor:0,neon:0,scooter:0,marketing:0,pizzaSchool:0,megaOven:0,terrace:0,delivery:0,trattoria:0,rooftop:0,zurichUp:0,monacoUp:0,barcelonaUp:0,madridUp:0,lisbonUp:0,parisUp:0,brusselsUp:0,amsterdamUp:0,londonUp:0,liverpoolUp:0,berlinUp:0,warsawUp:0,minskUp:0,budapestUp:0,zagrebUp:0,belgradeUp:0,sofiaUp:0,bucharestUp:0,istanbulUp:0,athensUp:0,telavivUp:0},staff:{cashier:0,cook:0},staffing:{cashier:0,cook:0},shops:1,styles:{margherita:!0,pepperoni:!1,veggie:!1,seasonal:!1},franchise:{points:0,count:0,lifetimeAtLast:0,readyNotified:!1},tutorialStep:0,tutorialDone:!1,stats:{ordersTaken:0,manualStretch:0,manualTopping:0,manualLoad:0,served:0,angry:0,turnedAway:0,upgradesBought:0,staffHired:0},flags:{firstPurchase:!1},events:{active:[],nextAt:240},bonus:{nextAt:240,readyNotified:!1},customers:[],pizzas:[],nextId:1,cashierTimers:[],cashierIdle:0,cookIdle:0,idleNotified:{cashier:!1,cook:!1},spawnTimer:4,tutorialSpawnTimer:1.5,settings:{sound:!0,notify:!1,graphics:"auto",look:"3d",theme:"light"},cosmetics:{ovenSkin:"skin.classic"}};function Ho(n,e=Date.now()){let t=structuredClone(hl);return t.cash=n.economy.beginner?.startingCash??n.economy.startingCash,t.dayClock=n.economy.time.startDayClock,t.rngSeed=e%2147483647|0||1,t.createdAt=e,t.savedAt=e,t}var ul=3,dl="pizzastand.save",sb={1:n=>{let e=n.franchise||(n.franchise={points:0,count:0});return e.lifetimeAtLast=e.count>0&&n.lifetimeCash||0,e.readyNotified=!1,delete e.unlocked,n},2:n=>(n.city="riccione",n.cityVisited=["riccione"],n.location="cityRiccione",n.decorShown=n.upgrades?.decor||0,delete n.unlockedLocations,n)};function Nd(n,e){for(let t of Object.keys(e)){let i=e[t];n[t]===void 0?n[t]=structuredClone(i):i&&typeof i=="object"&&!Array.isArray(i)&&typeof n[t]=="object"&&Nd(n[t],i)}return n}function rb(n){let e=n.schemaVersion??0;for(;e<ul;){let t=sb[e];t&&(n=t(n)),e++}return n.schemaVersion=ul,Nd(n,hl)}function kd(){try{let n=globalThis.localStorage?.getItem(dl);if(!n)return null;let e=JSON.parse(n);return typeof e.schemaVersion=="number"&&e.schemaVersion>ul?(console.warn("[save] save is from a newer version; ignoring"),null):rb(e)}catch(n){return console.warn("[save] could not read save",n),null}}function Fd(n){try{return globalThis.localStorage?.setItem(dl,JSON.stringify(n)),!0}catch(e){return console.warn("[save] could not write save",e),!1}}function Od(){try{globalThis.localStorage?.removeItem(dl)}catch{}}var Bd="pizzastand.analytics";var Hd=null,Vd=Date.now();function it(n,e={}){let t={name:n,props:e,t:Date.now()};try{let i=JSON.parse(globalThis.localStorage?.getItem(Bd)||"[]");for(i.push(t);i.length>200;)i.shift();globalThis.localStorage?.setItem(Bd,JSON.stringify(i))}catch{}if(Hd)try{Hd(t)}catch{}}function pl(){Vd=Date.now(),it("session_start")}function Gd(n={}){it("session_end",{durationSeconds:Math.round((Date.now()-Vd)/1e3),...n})}var or=null,Wd=!0;function Vo(n){Wd=n}function ob(){if(!Wd)return null;if(!or){let n=globalThis.AudioContext||globalThis.webkitAudioContext;if(!n)return null;or=new n}return or.state==="suspended"&&or.resume(),or}function oi(n,e,t,i="sine",s=.2,r=null){let o=ob();if(!o)return;let a=o.createOscillator(),c=o.createGain();a.type=i,a.frequency.setValueAtTime(n,o.currentTime+e),r&&a.frequency.exponentialRampToValueAtTime(r,o.currentTime+e+t),c.gain.setValueAtTime(s,o.currentTime+e),c.gain.exponentialRampToValueAtTime(1e-4,o.currentTime+e+t),a.connect(c).connect(o.destination),a.start(o.currentTime+e),a.stop(o.currentTime+e+t+.02)}var St={cash(){oi(1318,0,.12,"triangle",.25),oi(1760,.07,.25,"triangle",.22)},click(){oi(520,0,.05,"square",.08,380)},bell(){oi(880,0,.5,"sine",.18),oi(1320,.02,.4,"sine",.08)},pop(){oi(300,0,.12,"sine",.15,600)},angry(){oi(220,0,.3,"sawtooth",.1,140)},whoosh(){oi(180,0,.25,"sine",.08,420)}};function Es(n,e,t,i,s=r=>Vn(n,r)){let o=Math.min(t==="max"?1/0:t,n.maxLevel-e),a=0,c=0;for(let l=0;l<o;l++){let h=s(e+l);if(a+h>i)break;a+=h,c++}return{n:c,cost:a}}function Vn(n,e){return Math.ceil(n.baseCost*Math.pow(n.growth,e))}function Go(n){let e=Math.sin(2*Math.PI*(n-.25)),t=Math.min(1,Math.max(0,(e+.2)/.5));return t*t*(3-2*t)}function fl(n,e){if(!e)return!0;switch(e.type){case"start":return!0;case"lifetime":return n.lifetimeCash>=e.value;case"staffLevel":return(n.staff[e.role]||0)>=e.value;case"upgradeLevel":return(n.upgrades[e.upgrade]||0)>=e.value;case"franchise":return n.franchise.count>=e.value;default:return!1}}function ab(n,e){return e.locations?.[n.location]}function cb(n,e){return ab(n,e)?.economy??{trafficMult:1,styleDemand:{}}}function lb(n,e,t){let i=0;for(let[s,r]of Object.entries(e.economy.upgrades))r.group==="city"&&r.effect===t&&(i+=r.perLevel*(n.upgrades[s]||0));return i}function Ts(n){return[...n.economy.cities.list].sort((e,t)=>e.order-t.order)}function ml(n,e){return Ts(n).find(t=>t.id===e)}function Di(n,e){return ml(e,n.city)||Ts(e)[0]}function ai(n,e){return[...Di(n,e).decorSteps||[],...e.economy.upgrades.decor.steps]}function Wo(n,e){let t=Ts(e),i=Math.max(0,...t.filter(s=>(n.cityVisited||[]).includes(s.id)).map(s=>s.order));return t.find(s=>s.order===i+1)||null}function qo(n,e){return n.lifetimeCash>=(e.economy.cities.mapUnlockLifetime||0)}function ci(n,e){let t=e.economy.prestige.tiers,i=0;return t.forEach((s,r)=>{n.franchise.count>=s.minFranchises&&(i=r)}),i}function ar(n,e){return e.economy.prestige.tiers[ci(n,e)]}function Ui(n){return Math.max(0,n.lifetimeCash-(n.franchise.lifetimeAtLast||0))}function Xo(n,e){return n.franchise.count<(e.economy.earlyFranchises?.count??0)}function Ni(n,e){let t=e.economy.prestige,i=t.milestoneLifetimeCash*Math.pow(n.franchise.count+1,t.requirementExponent??1.3),s=Xo(n,e)?e.economy.earlyFranchises.requirementMult??1:1;return Math.round(i*s)}function As(n,e){return Ui(n)>=Ni(n,e)}function cr(n,e){return 1+(e.economy.prestige.ovenSpeedPerFranchise||0)*n.franchise.count}function Yo(n,e,t=n.franchise.count){let i=e.economy.prestige;return Math.min(i.trafficMaxMult??1/0,1+(i.trafficPerFranchise||0)*t)}function hb(n,e){return 1+e.economy.prestige.bonusPerPoint*n.franchise.points}function qd(n,e){let t=e.economy.shops?.multiplierPerShop||2;return Math.pow(t,Math.max(0,(n.shops||1)-1))}function gl(n,e){let t=qd(n,e),i=n.staff.cashier>0?1+(n.staffing?.cashier||0):0,s=n.staff.cook>0?1+(n.staffing?.cook||0):0;return{cashier:Math.round(i*t),cook:Math.round(s*t)}}function on(n,e){let t=e.economy,i=t.upgrades,s=n.upgrades,r=n.staff.cashier,o=n.staff.cook,a=Di(n,e),c=Te=>lb(n,e,Te),l=i.decor.trafficPerLevel*s.decor+i.neon.trafficPerLevel*s.neon+c("traffic"),h=cb(n,e),u=Yo(n,e),d=cr(n,e),p=i.marketing?1+i.marketing.trafficMultPerLevel*(s.marketing||0):1,g=(i.pizzaSchool?1+i.pizzaSchool.payMultPerLevel*(s.pizzaSchool||0):1)*(1+c("pay"))*a.multiplier,y=qd(n,e),m=!n.tutorialDone,f=m&&t.beginner?.spawnMult||1,b=Xo(n,e)?t.earlyFranchises||{}:null,_=b?.payMult||1,M=b?.customerMult||1,C=(m&&t.beginner?.payMult||1)*_,E=t.customers.spawnBaseSeconds*f/((1+l)*h.trafficMult*u*p*y*M),A=ar(n,e),D=(i.oven.ovenSlotsBase+i.oven.ovenSlotsPerLevel*s.oven+A.ovenSlotsBonus+(i.megaOven?i.megaOven.ovenSlotsPerLevel*(s.megaOven||0):0)+c("oven"))*y,x=Math.min((i.counter.maxQueueBase+i.counter.maxQueuePerLevel*s.counter+A.maxQueueBonus)*y,t.queueHardCap||40),w=1+i.cheese.cheeseMultPerLevel*s.cheese,F=hb(n,e),U=t.cashier.orderSecondsBase/(1+t.cashier.orderSpeedPerLevel*r),W=1+t.cook.speedPerLevel*o,L=Object.entries(t.styles).filter(([Te,ze])=>ze.enabled&&n.styles[Te]).map(([,Te])=>Te.basePrice),k=L.length?L.reduce((Te,ze)=>Te+ze,0)/L.length:t.styles.margherita.basePrice,G=Math.max(t.prestige.minBakeSeconds||0,10/d),K=1/E,Y=D/G,Z=Math.min(K,Y),j=k*(t.pizzaQuality.payBase+t.pizzaQuality.payPerQuality*.8)*w*F*g,te=Z*j*1.1,ce=(r>0?1:0)+(o>0?1:0),X=(n.staffing?.cashier||0)+(n.staffing?.cook||0),Q=gl(n,e),ue=Q.cashier,Me=Q.cook,ve=Math.min(1,t.time.offlineBaseEfficiency+t.time.offlineEfficiencyPerStaffRole*ce+(t.recruit?.offlineEfficiencyPerRecruit||0)*X);return{traffic:l,locEcon:h,tier:A,frTraffic:u,empireTraffic:p,empirePay:g,cityMult:a.multiplier,beginnerPay:C,bakeSpeed:d,spawnBase:E,ovenSlots:D,maxQueue:x,cheeseMult:w,prestigeMult:F,cashierOrderSec:U,cashierLvl:r,cashierCount:ue,cookSpeed:W,cookLvl:o,cookCount:Me,idleRate:te,offlineEfficiency:ve}}function Xd(n,e,t,i,s,r){let o=r.economy,a=o.styles[n].basePrice,c=o.pizzaQuality.payBase+o.pizzaQuality.payPerQuality*e,l=s?o.customers.wrongToppingPayMult:1;return a*c*t.cheeseMult*t.prestigeMult*(t.empirePay||1)*(t.beginnerPay||1)*i.cashMult*l}function ki(n,e){return Math.max(1,Math.floor(Ui(n)/e.economy.prestige.pointsDivisor))}function Yd(n,e){for(let t of e.economy.goals)if(!fl(n,t.condition))return t;return null}function Fi(n){n.rngSeed=n.rngSeed+1831565813|0;let e=n.rngSeed;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lr(n,e){let t=e.reduce((s,r)=>s+r.weight,0),i=Fi(n)*t;for(let s of e)if(i-=s.weight,i<=0)return s.key;return e[e.length-1].key}function hr(n,e,t){let i=t.economy.events[e];return i?(n.events.active.push({id:e,endsAt:n.gameTime+i.durationSeconds}),!0):!1}function Zd(n,e,t,i){let s=t.economy.time;if(n.events.active=n.events.active.filter(r=>n.gameTime>=r.endsAt?(i.push({type:"event_end",id:r.id}),!1):!0),n.events.active.length===0&&n.gameTime>=n.events.nextAt){let r=Object.entries(t.economy.events).filter(([,c])=>c.weight>0).map(([c,l])=>({key:c,weight:l.weight})),o=lr(n,r);hr(n,o,t),i.push({type:"event_start",id:o});let a=s.randomEventMinSeconds+(s.randomEventMaxSeconds-s.randomEventMinSeconds)*Fi(n);n.events.nextAt=n.gameTime+a}}function Zo(n,e){let t={spawnMult:1,patienceDrainMult:1,cashMult:1,styleDemand:{}};for(let i of n.events.active){let s=e.economy.events[i.id];if(s){t.spawnMult*=s.spawnMult,t.patienceDrainMult*=s.patienceDrainMult,t.cashMult*=s.cashMult;for(let[r,o]of Object.entries(s.styleDemand||{}))t.styleDemand[r]=(t.styleDemand[r]||1)*o}}return t}function li(n,e){return n.customers.find(t=>t.id===e)}function ub(n,e){return n.pizzas.find(t=>t.id===e)}function db(n){return n.nextId++}function $o(n,e,t){let i=li(n,e);if(!i||i.state!=="waiting")return{ok:!1};if(n.pizzas.length>=(t.economy.queueHardCap||40))return{ok:!1,reason:"kitchenFull"};i.state="ordered";let s={id:db(n),customerId:i.id,style:i.style,stage:"dough",work:0,q:{dough:0,top:0,bake:0},topping:null,bakeLeft:0,readyTimer:0};return n.pizzas.push(s),n.stats.ordersTaken++,{ok:!0,type:"order_taken",customerId:i.id,pizzaId:s.id}}function ur(n,e,t,i,s){let r=ub(n,e);if(!r)return{ok:!1,reason:"noPizza"};let o=s.economy.manual,a=s.economy.stages;if(t==="stretch"){if(r.stage!=="dough")return{ok:!1,reason:"wrongStage"};let c=Math.max(0,Math.min(1,i.timeLeftFrac??0));return r.q.dough=i.finished?o.doughFinishMinQuality+(1-o.doughFinishMinQuality)*c:o.doughRushedQuality,r.work=0,r.stage="topping",n.stats.manualStretch++,{ok:!0,type:"stage",pizzaId:e,stage:"topping",auto:!1}}if(t==="topping"){if(r.stage!=="topping")return{ok:!1,reason:"wrongStage"};let c=li(n,r.customerId),l=c&&i.topping===c.topping;return r.topping=i.topping,r.q.top=l?o.toppingCorrectQuality:o.toppingWrongQuality,r.work=0,r.stage="load",n.stats.manualTopping++,{ok:!0,type:"stage",pizzaId:e,stage:"load",auto:!1,correct:l}}if(t==="load"){if(r.stage!=="load")return{ok:!1,reason:"wrongStage"};let c=on(n,s);if(pb(n)>=c.ovenSlots)return{ok:!1,reason:"ovenFull"};let l=o.ovenSweetZone/2,h=Math.abs((i.markerPos??.5)-.5),u=h<=l?1:Math.max(o.ovenMinQuality,1-(h-l)*2.2);return $d(n,r,u,s,"manual")}return t==="serve"?r.stage!=="ready"?{ok:!1,reason:"wrongStage"}:yl(n,r,s):{ok:!1,reason:"unknownAction"}}function pb(n){return n.pizzas.filter(e=>e.stage==="baking").length}function $d(n,e,t,i,s){let r=i.economy.stages,o=i.economy.styles[e.style];e.q.bake=t,e.stage="baking";let a=i.economy.prestige.minBakeSeconds||0,c=Math.max(a,o.bakeSeconds/cr(n,i));return e.bakeLeft=c*(t>=r.perfectBakeQuality?r.perfectBakeSpeedMult:1),e.bakeTotal=e.bakeLeft,e.work=0,s==="manual"&&n.stats.manualLoad++,{ok:!0,type:"stage",pizzaId:e.id,stage:"baking",auto:s!=="manual",quality:t}}function yl(n,e,t){let i=li(n,e.customerId);if(n.pizzas=n.pizzas.filter(y=>y.id!==e.id),!i)return{ok:!1,reason:"noCustomer"};n.customers=n.customers.filter(y=>y.id!==i.id);let s=on(n,t),r=Zo(n,t),o=t.economy,a=(e.q.dough+e.q.top+e.q.bake)/3,c=e.topping!==i.topping,l=Xd(e.style,a,s,r,c,t),h=Math.max(0,i.patience/i.maxPatience),u=o.customers.types[i.type].tipMult,d=c?o.customers.wrongToppingTipMult:1,p=l*o.customers.tipMax*h*u*d,g=l+p;return n.cash+=g,n.lifetimeCash+=g,n.stats.served++,{ok:!0,type:"served",pizzaId:e.id,customerId:i.id,customerType:i.type,amount:l,tip:p,total:g,big:g>=o.bigSaleThreshold,wrongTopping:c}}function Kd(n,e,t){let i=t.economy.stages,s=li(n,e.customerId);return e.stage==="dough"?(e.q.dough=i.autoDoughQuality,e.stage="topping",e.work=0,{ok:!0,type:"stage",pizzaId:e.id,stage:"topping",auto:!0}):e.stage==="topping"?(e.topping=s?s.topping:null,e.q.top=i.autoToppingQuality,e.stage="load",e.work=0,{ok:!0,type:"stage",pizzaId:e.id,stage:"load",auto:!0}):{ok:!1}}function Jd(n,e,t){return $d(n,e,t.economy.stages.autoLoadQuality,t,"auto")}function Qd(n,e,t,i=1,s=Date.now()){let r=t.economy.upgrades[e];if(!r||r.enabled===!1)return{ok:!1,reason:"locked"};if(r.requires&&n.franchise.count<(r.requires.franchises||0))return{ok:!1,reason:"needsFranchise",need:r.requires.franchises};if(r.requires?.city&&!(n.cityVisited||[]).includes(r.requires.city))return{ok:!1,reason:"needsCity",city:r.requires.city};let o=n.upgrades[e];if(o>=r.maxLevel)return{ok:!1,reason:"maxed"};let a=Es(r,o,i,n.cash);return a.n===0?{ok:!1,reason:"cash",cost:Vn(r,o)}:(n.cash-=a.cost,n.upgrades[e]=o+a.n,e==="decor"&&(n.decorShown=(n.decorShown||0)+a.n),n.stats.upgradesBought+=a.n,{ok:!0,type:"bought",key:e,cost:a.cost,bought:a.n,first:ep(n)})}function Ko(n,e,t){return e==="cashier"&&t===0&&!n.tutorialDone}function jd(n,e,t,i=1){let s=t.economy.staff[e],r=n.staff[e];if(r>=s.maxLevel)return{ok:!1,reason:"maxed"};let o=c=>Ko(n,e,c)?0:Vn(s,c),a=Es(s,r,i,n.cash,o);return a.n===0?{ok:!1,reason:"cash",cost:o(r)}:(n.cash-=a.cost,n.staff[e]=r+a.n,r===0&&n.stats.staffHired++,{ok:!0,type:"hired",role:e,cost:a.cost,bought:a.n,first:ep(n)})}function ep(n){return n.flags.firstPurchase?!1:(n.flags.firstPurchase=!0,!0)}function tp(n,e,t){let i=t.economy.recruit;if(!i||!i[e])return{ok:!1,reason:"unknown"};if(n.franchise.count<i.requiresFranchises)return{ok:!1,reason:"needsFranchise",need:i.requiresFranchises};if((n.staff[e]||0)<1)return{ok:!1,reason:"needsHire"};let s=ar(n,t).recruitCap,r=n.staffing[e]||0;if(r>=s)return{ok:!1,reason:"maxed",cap:s};let o=Math.ceil(i[e].baseCost*Math.pow(i[e].growth,r));return n.cash<o?{ok:!1,reason:"cash",cost:o}:(n.cash-=o,n.staffing[e]=r+1,{ok:!0,type:"recruited",role:e,cost:o,count:r+1,cap:s})}function _l(n,e){return As(n,e)}function np(n,e,t,i=Date.now()){let s=ki(n,e),r=t(e,i);return r.franchise={points:n.franchise.points+s,count:n.franchise.count+1,lifetimeAtLast:n.lifetimeCash,readyNotified:!1},r.styles={...n.styles},r.tutorialStep=n.tutorialStep,r.tutorialDone=n.tutorialDone,r.cash=e.economy.startingCash,r.stats={...n.stats},r.lifetimeCash=n.lifetimeCash,r.settings={...n.settings},r.cosmetics={...n.cosmetics},r.flags={...n.flags},r.rngSeed=n.rngSeed,r.gameTime=n.gameTime,r.dayClock=n.dayClock,r.createdAt=n.createdAt,r.events={active:[],nextAt:n.gameTime+240},{state:r,gain:s}}function ip(n,e,t){let i=ml(e,t);if(!i)return{ok:!1,reason:"unknown"};if(n.city===t)return{ok:!1,reason:"current"};let s=!(n.cityVisited||[]).includes(t),r=0;if(s){let o=Wo(n,e);if(!o||o.id!==t)return{ok:!1,reason:"order",next:o?.id||null};if(n.cash<i.relocationCost)return{ok:!1,reason:"cash",cost:i.relocationCost};r=i.relocationCost,n.cash-=r,n.cityVisited=[...n.cityVisited||[],t]}return n.city=t,n.location=i.background,n.decorShown=0,n.customers=[],n.pizzas=[],n.cashierTimer=0,n.spawnTimer=e.economy.customers.spawnBaseSeconds,{ok:!0,type:"moved",city:t,cost:r,first:s}}function sp(n,e){let t=ai(n,e).length,i=Math.min(n.upgrades.decor,t),s=i-(n.decorShown||0);return s<=0?{ok:!1,reason:"none"}:(n.decorShown=i,{ok:!0,type:"decorated",n:s})}function rp(n,e){let t=e.economy.shops;if(!t)return{ok:!1,reason:"unknown"};if(n.franchise.count<t.requiresFranchises)return{ok:!1,reason:"needsFranchise",need:t.requiresFranchises};let i=n.shops||1;if(i>=t.maxShops)return{ok:!1,reason:"maxed",cap:t.maxShops};let s=Math.ceil(t.baseCost*Math.pow(t.growth,i-1));return n.cash<s?{ok:!1,reason:"cash",cost:s}:(n.cash-=s,n.shops=i+1,{ok:!0,type:"shop",shops:n.shops,cost:s})}function bl(n,e){return n.gameTime>=n.bonus.nextAt&&!n.events.active.some(t=>t.id==="doubleCash")}function op(n,e,t){let i=t.economy.happyHour;n.bonus.nextAt=n.gameTime+i.intervalSeconds,n.bonus.readyNotified=!1;let s=e>=i.needed;return s&&hr(n,"doubleCash",t),{ok:!0,won:s,hits:e}}var fb=12;function vl(n,e,t,i=[]){let s=t.economy;n.gameTime+=e,n.dayClock=(n.dayClock+e/s.time.dayLengthSeconds)%1,Zd(n,e,t,i);let r=Zo(n,t),o=on(n,t),a=Go(n.dayClock);return mb(n,t,i),!n.bonus.readyNotified&&n.gameTime>=n.bonus.nextAt&&(n.bonus.readyNotified=!0,i.push({type:"bonus_ready"})),!n.franchise.readyNotified&&As(n,t)&&(n.franchise.readyNotified=!0,i.push({type:"franchise_ready"})),gb(n,e,r,t,i),yb(n,e,r,o,a,t,i),bb(n,e,o,t,i),vb(n,e,o,t,i),xb(n,e,i),wb(n,t,i),i}function mb(n,e,t){for(let[i,s]of Object.entries(e.economy.styles))s.enabled&&!n.styles[i]&&fl(n,s.unlock)&&(n.styles[i]=!0,t.push({type:"style_unlocked",style:i}))}function gb(n,e,t,i,s){if(n.tutorialDone){for(let r of[...n.customers])if(r.patience-=e*t.patienceDrainMult,r.patience<=0){let o=Math.min(n.cash,i.economy.customers.angryPenalty);n.cash-=o,n.customers=n.customers.filter(a=>a.id!==r.id),n.pizzas=n.pizzas.filter(a=>a.customerId!==r.id),n.stats.angry++,s.push({type:"angry",customerId:r.id,customerType:r.type,nameIdx:r.nameIdx,penalty:o})}}}function yb(n,e,t,i,s,r,o){if(!n.tutorialDone)return _b(n,e,t,i,r,o);let a=n.customers.filter(d=>d.state==="waiting").sort((d,p)=>d.id-p.id),c=a.length-i.maxQueue;if(c>0){let d=new Set(a.slice(i.maxQueue).map(p=>p.id));n.customers=n.customers.filter(p=>!d.has(p.id)),n.stats.turnedAway+=c,o.push({type:"turned_away"})}let l=r.economy.customers,h=l.nightSpawnMult+(1-l.nightSpawnMult)*s;n.spawnTimer-=e*t.spawnMult*h;let u=0;for(;n.spawnTimer<=0&&u++<20;){let d=i.spawnBase*(1+(Fi(n)*2-1)*l.spawnJitter);if(n.spawnTimer+=d,n.customers.filter(g=>g.state==="waiting").length>=i.maxQueue){n.stats.turnedAway++,o.push({type:"turned_away"});continue}ap(n,t,i,r,o)}}function ap(n,e,t,i,s){let r=i.economy.customers;{let o=lr(n,Object.entries(r.types).map(([u,d])=>({key:u,weight:d.weight}))),a=Object.keys(i.economy.styles).filter(u=>n.styles[u]).map(u=>({key:u,weight:(e.styleDemand[u]||1)*(t.locEcon.styleDemand[u]||1)})),c=lr(n,a),l=r.toppings[Math.floor(Fi(n)*r.toppings.length)],h={id:n.nextId++,type:o,style:c,topping:l,nameIdx:1+Math.floor(Fi(n)*5),patience:r.types[o].patience,maxPatience:r.types[o].patience,state:"waiting"};n.customers.push(h),s.push({type:"arrived",customerId:h.id})}}function _b(n,e,t,i,s,r){n.customers.length>0||(n.tutorialSpawnTimer-=e,!(n.tutorialSpawnTimer>0)&&(n.tutorialSpawnTimer=s.economy.beginner.tutorialSpawnDelaySeconds,ap(n,t,i,s,r)))}function bb(n,e,t,i,s){let r=t.cashierCount;if(r===0)return;let o=()=>n.customers.filter(c=>c.state==="waiting").sort((c,l)=>c.id-l.id),a=n.pizzas.filter(c=>c.stage==="ready");for(;n.cashierTimers.length<r;)n.cashierTimers.push(0);n.cashierTimers.length=r;for(let c=0;c<r;c++)if(o().length>0){if(n.cashierTimers[c]+=e,n.cashierTimers[c]>=t.cashierOrderSec){n.cashierTimers[c]=0;let l=o()[0],h=$o(n,l.id,i);h.ok&&s.push({...h,auto:!0})}}else n.cashierTimers[c]=0;o().length===0&&a.length===0?(n.cashierIdle+=e,cp(n,"cashier",s)):(n.cashierIdle=0,n.idleNotified.cashier=!1);for(let c of a)if(c.readyTimer+=e,c.readyTimer>=i.economy.stages.autoServeDelaySeconds){let l=yl(n,c,i);l.ok&&s.push({...l,auto:!0})}}function vb(n,e,t,i,s){let r=t.cookCount;if(r===0)return;let o=i.economy.stages,a=n.pizzas.filter(l=>l.stage==="dough"||l.stage==="topping").sort((l,h)=>l.id-h.id).slice(0,r);if(a.length>0){n.cookIdle=0,n.idleNotified.cook=!1;for(let l of a){l.work+=e*t.cookSpeed;let h=l.stage==="dough"?o.autoDoughSeconds:o.autoToppingSeconds;if(l.work>=h){let u=Kd(n,l,i);u.ok&&s.push({...u,auto:!0})}}}else n.cookIdle+=e,cp(n,"cook",s);let c=n.pizzas.filter(l=>l.stage==="load").sort((l,h)=>l.id-h.id);for(let l of c){if(n.pizzas.filter(d=>d.stage==="baking").length>=t.ovenSlots)break;let u=Jd(n,l,i);u.ok&&s.push(u)}}function cp(n,e,t){(e==="cook"?n.cookIdle:n.cashierIdle)>=fb&&!n.idleNotified[e]&&(n.idleNotified[e]=!0,t.push({type:"idle_staff",role:e}))}function xb(n,e,t){for(let i of n.pizzas)i.stage==="baking"&&(i.bakeLeft-=e,i.bakeLeft<=0&&(i.stage="ready",i.bakeLeft=0,t.push({type:"stage",pizzaId:i.id,stage:"ready",auto:!1})))}function Mb(n,e,t){if(!e||!e.ensureCash)return;let i=e.ensureCash,s=i.type==="upgrade"?t.economy.upgrades[i.key]:t.economy.staff[i.role],r=i.type==="upgrade"?n.upgrades[i.key]:n.staff[i.role],o=Vn(s,r);n.cash<o&&(n.cash=o)}function wb(n,e,t){if(n.tutorialDone)return;let i=e.economy.tutorial;for(;n.tutorialStep<i.length;){let s=i[n.tutorialStep].check;if((n.stats[s.stat]||0)<s.gte)break;n.tutorialStep++,t.push({type:"tutorial_step",step:n.tutorialStep}),Mb(n,i[n.tutorialStep],e)}n.tutorialStep>=i.length&&(n.tutorialDone=!0,t.push({type:"tutorial_done"}))}function lp(n,e,t){let i=t.economy.time,s=Math.max(0,(e-n.savedAt)/1e3),r=Math.min(s,i.offlineCapSeconds),o=on(n,t),a=Math.floor(r*o.idleRate*o.offlineEfficiency);return{rawSeconds:s,elapsed:r,capped:s>i.offlineCapSeconds,earned:a,rate:o.idleRate*o.offlineEfficiency}}function xl(n,e,t,i=1){let s=Math.floor(e.earned*i);return n.cash+=s,n.lifetimeCash+=s,n.customers=[],n.pizzas=[],n.cashierTimer=0,n.spawnTimer=t.economy.customers.spawnBaseSeconds,n.gameTime+=e.elapsed,n.dayClock=(n.dayClock+e.elapsed/t.economy.time.dayLengthSeconds)%1,n.events.active=[],n.events.nextAt=n.gameTime+240,s}var Ml=new Map;function ta(n){let{roughness:e,metalness:t,...i}=n;return i}function mp(n,e={}){let t=n+"|"+JSON.stringify(e);return Ml.has(t)||Ml.set(t,new Qt({color:n,...ta(e)})),Ml.get(t)}function Rs(n,e={}){return new Qt({color:n,...ta(e)})}function Gn(n,e,t,i=1,s={}){let r=new Qt({color:e,emissive:new me(t),emissiveIntensity:.2,...ta(s)});return r.userData.glow=i,n.glowMats.push(r),r}var an=new Qt({vertexColors:!0}),Hi=new Qt({vertexColors:!0,flatShading:!0}),Al=new Ms({vertexColors:!0,shininess:60,specular:new me("#555555")}),wl=new Map;function Dt(n,e){return wl.has(n)||wl.set(n,e()),wl.get(n)}var Oe={box:()=>Dt("box",()=>new Pi(1,1,1)),cyl:(n=14)=>Dt("cyl"+n,()=>new ri(1,1,1,n)),cone:(n=14)=>Dt("cone"+n,()=>new To(1,1,n)),sphere:(n=16,e=12)=>Dt(`sph${n}_${e}`,()=>new Li(1,n,e)),dome:(n=16,e=8)=>Dt(`dome${n}_${e}`,()=>new Li(1,n,e,0,Math.PI*2,0,Math.PI/2)),ico:(n=0)=>Dt("ico"+n,()=>new Ao(1,n)),torus:(n=.2,e=20)=>Dt(`tor${n}_${e}`,()=>new Ro(1,n,8,e)),capsule:(n,e)=>Dt(`cap${n}_${e}`,()=>new So(n,e,5,12)),ring:()=>Dt("ring",()=>new Co(.5,.56,32)),circle:()=>Dt("circle",()=>new Eo(1,24))},Sl=new WeakMap;function Sb(n){return n.index?(Sl.has(n)||Sl.set(n,n.toNonIndexed()),Sl.get(n)):n}var El=new ft,hp=new Sn,up=new vs,dp=new P,pp=new P,Jo=new P,Qo=new P,fp=new We,jo=new me,Qe=class{constructor(){this.pos=[],this.nor=[],this.col=[]}add(e,t,i=[0,0,0],s=[0,0,0],r=[1,1,1]){let o=Sb(e);up.set(s[0],s[1],s[2]),hp.setFromEuler(up),dp.set(i[0],i[1],i[2]),pp.set(r[0],r[1],r[2]),El.compose(dp,hp,pp),fp.getNormalMatrix(El),jo.set(t);let a=o.attributes.position,c=o.attributes.normal;for(let l=0;l<a.count;l++)Jo.fromBufferAttribute(a,l).applyMatrix4(El),Qo.fromBufferAttribute(c,l).applyMatrix3(fp).normalize(),this.pos.push(Jo.x,Jo.y,Jo.z),this.nor.push(Qo.x,Qo.y,Qo.z),this.col.push(jo.r,jo.g,jo.b);return this}box(e,t,i,s=[0,0,0]){return this.add(Oe.box(),t,[i[0],i[1]+e[1]/2,i[2]],s,e)}boxC(e,t,i,s=[0,0,0]){return this.add(Oe.box(),t,i,s,e)}cyl(e,t,i,s,r,o=[0,0,0],a=14){let c=e===t?Oe.cyl(a):Dt(`cylT${(e/t).toFixed(3)}_${a}`,()=>new ri(e/t,1,1,a));return this.add(c,s,[r[0],r[1]+i/2,r[2]],o,[t,i,t])}cylC(e,t,i,s,r=[0,0,0],o=12){return this.add(Oe.cyl(o),i,s,r,[e,t,e])}cone(e,t,i,s,r=[0,0,0],o=14){return this.add(Oe.cone(o),i,[s[0],s[1]+t/2,s[2]],r,[e,t,e])}sphere(e,t,i,s=[1,1,1],r=[16,12]){return this.add(Oe.sphere(r[0],r[1]),t,i,[0,0,0],[e*s[0],e*s[1],e*s[2]])}dome(e,t,i,s=[1,1,1],r=[0,0,0]){return this.add(Oe.dome(),t,i,r,[e*s[0],e*s[1],e*s[2]])}ico(e,t,i,s=[1,1,1],r=[0,0,0]){return this.add(Oe.ico(1),t,i,r,[e*s[0],e*s[1],e*s[2]])}torus(e,t,i,s,r=[0,0,0],o=20){let a=Oe.torus(Number((t/e).toFixed(3)),o);return this.add(a,i,s,r,[e,e,e])}get empty(){return this.pos.length===0}geometry(){let e=new vt;return e.setAttribute("position",new $e(this.pos,3)),e.setAttribute("normal",new $e(this.nor,3)),e.setAttribute("color",new $e(this.col,3)),e.computeBoundingSphere(),e}mesh(e=an,{cast:t=!0,receive:i=!0}={}){let s=new Pe(this.geometry(),e);return s.castShadow=t,s.receiveShadow=i,s}},Cs=new Map;function Eb(n,e){let t=document.createElement("canvas");t.width=t.height=n;let i=t.getContext("2d");e(i,n);let s=new tr(t);return s.colorSpace=bt,s.wrapS=s.wrapT=Ys,s.anisotropy=2,s}function Oi(n){let e=n;return()=>(e=(e*1664525+1013904223)%4294967296,e/4294967296)}function Bi(n,e,t,i,s,r=!0){for(let o=0;o<i;o++){let a=t()*s;n.fillStyle=r?`rgba(255,255,255,${a})`:`rgba(0,0,0,${a})`,n.fillRect(t()*e,t()*e,1+t()*2,1+t()*2)}}var Tb={pavers(n,e){let t=Oi(7);n.fillStyle="#b89a78",n.fillRect(0,0,e,e);let i=4,s=e/i;for(let r=0;r<i*2;r++)for(let o=-1;o<i;o++){let a=r%2*(s/2),c=196+Math.floor(t()*34);n.fillStyle=`rgb(${c+22},${c-6},${c-44})`,n.fillRect(o*s+a+2,r*(s/2)+2,s-4,s/2-4)}Bi(n,e,t,900,.07,!1),Bi(n,e,t,500,.06,!0)},asphalt(n,e){let t=Oi(11);n.fillStyle="#4b4e55",n.fillRect(0,0,e,e),Bi(n,e,t,2600,.09,!0),Bi(n,e,t,2600,.14,!1)},brick(n,e){let t=Oi(3);n.fillStyle="#d9c7b0",n.fillRect(0,0,e,e);let i=8,s=e/i,r=e/4;for(let o=0;o<i;o++)for(let a=-1;a<4;a++){let c=o%2*(r/2),l=t();n.fillStyle=`rgb(${150+l*40},${66+l*26},${48+l*18})`,n.fillRect(a*r+c+2,o*s+2,r-4,s-4)}Bi(n,e,t,700,.08,!1)},wood(n,e){let t=Oi(5),i=4,s=e/i;for(let r=0;r<i;r++){let o=t();n.fillStyle=`rgb(${176+o*26},${118+o*22},${66+o*16})`,n.fillRect(r*s,0,s,e),n.fillStyle="rgba(70,40,15,0.5)",n.fillRect(r*s,0,2,e);for(let a=0;a<14;a++)n.fillStyle=`rgba(90,55,25,${.05+t()*.1})`,n.fillRect(r*s+t()*s,0,1+t()*2,e)}},plaster(n,e){let t=Oi(9);n.fillStyle="#ffffff",n.fillRect(0,0,e,e),Bi(n,e,t,2200,.05,!1);for(let i=0;i<14;i++)n.fillStyle=`rgba(0,0,0,${.015+t()*.02})`,n.fillRect(t()*e,t()*e,30+t()*80,8+t()*30)},tiles(n,e){n.fillStyle="#d7d2c8",n.fillRect(0,0,e,e);let t=4,i=e/t;for(let s=0;s<t;s++)for(let r=0;r<t;r++)n.fillStyle=(r+s)%2?"#fbf7ee":"#f1ebde",n.fillRect(r*i+2,s*i+2,i-4,i-4)},checker(n,e){let i=e/4;for(let s=0;s<4;s++)for(let r=0;r<4;r++)n.fillStyle=(r+s)%2?"#f4ead8":"#b5483a",n.fillRect(r*i,s*i,i,i)},stripes(n,e){n.fillStyle="#fff6e6",n.fillRect(0,0,e,e),n.fillStyle="#d8402f",n.fillRect(0,0,e/2,e);let t=Oi(2);Bi(n,e,t,500,.04,!1)},rooftiles(n,e){let t=Oi(13);n.fillStyle="#8f3f2a",n.fillRect(0,0,e,e);let i=6,s=e/i,r=e/6;for(let o=0;o<i;o++)for(let a=-1;a<6;a++){let c=o%2*(r/2),l=t();n.fillStyle=`rgb(${186+l*30},${92+l*24},${58+l*16})`,n.beginPath(),n.ellipse(a*r+c+r/2,o*s+s*.35,r/2-1.5,s*.62,0,0,Math.PI),n.fill()}}};function Ab(n,e=1,t=1){Cs.has(n)||Cs.set(n,Eb(256,Tb[n]));let i=`${n}|${e}|${t}`;if(!Cs.has(i)){let s=Cs.get(n).clone();s.repeat.set(e,t),s.needsUpdate=!0,Cs.set(i,s)}return Cs.get(i)}var Tl=new Map;function An(n,e=1,t=1,i={}){let s=`${n}|${e}|${t}|${JSON.stringify(i)}`;return Tl.has(s)||Tl.set(s,new Qt({map:Ab(n,e,t),...ta(i)})),Tl.get(s)}function Cn(n,e,t,i=[1,1],s={},r=[0,0,0]){let o=new Pe(Oe.box(),An(e,i[0],i[1],s));return o.scale.set(n[0],n[1],n[2]),o.position.set(t[0],t[1]+n[1]/2,t[2]),o.rotation.set(r[0],r[1],r[2]),o.castShadow=!0,o.receiveShadow=!0,o}var Cb=new Mt({color:"#000000",transparent:!0,opacity:.2,depthWrite:!1});function gp(n=.34){let e=new Pe(Oe.circle(),Cb);return e.rotation.x=-Math.PI/2,e.scale.setScalar(n),e.position.y=.02,e.renderOrder=1,e}var ea=null;function na(n,e,t="#ffc56b",i=.55){if(!ea){let o=document.createElement("canvas");o.width=o.height=128;let a=o.getContext("2d"),c=a.createRadialGradient(64,64,0,64,64,64);c.addColorStop(0,"rgba(255,255,255,1)"),c.addColorStop(.5,"rgba(255,255,255,0.35)"),c.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=c,a.fillRect(0,0,128,128),ea=new tr(o),ea.colorSpace=bt}let s=new Mt({map:ea,color:t,transparent:!0,opacity:0,depthWrite:!1,blending:Kr,toneMapped:!1});s.userData.base=i,n.nightFades.push(s);let r=new Pe(new Tn(e*2,e*2),s);return r.rotation.x=-Math.PI/2,r.renderOrder=2,r}var Cl=new Map;function Rb(n){if(!Cl.has(n.uuid)){let e=new Mt({transparent:n.transparent,opacity:n.opacity,side:n.side,depthWrite:n.depthWrite,toneMapped:!1});e.color=n.color,e.map=n.map||null,e.vertexColors=!!n.vertexColors,Cl.set(n.uuid,e)}return Cl.get(n.uuid)}function Rl(n){n.traverse(e=>{!e.isMesh||!e.material||Array.isArray(e.material)||e.material.isShaderMaterial||e.userData.origMat||(e.userData.origMat=e.material,e.material=Rb(e.material))})}function yp(n){n.traverse(e=>{e.userData.origMat&&(e.material=e.userData.origMat,delete e.userData.origMat)})}var Wn=new P,Ut=n=>new me(n),qn={dayTop:Ut("#2f86d9"),dayHorizon:Ut("#c9ebfb"),duskTop:Ut("#3d4f9a"),duskHorizon:Ut("#ffab6b"),nightTop:Ut("#060a1c"),nightHorizon:Ut("#1b2a52")},Pb=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Lb=`
uniform vec3 top;
uniform vec3 horizon;
uniform vec3 sunDir;
uniform vec3 sunColor;
uniform float sunPower;
varying vec3 vDir;
void main() {
  vec3 d = normalize(vDir);
  float h = clamp(d.y * 1.5 + 0.06, 0.0, 1.0);
  vec3 c = mix(horizon, top, pow(h, 0.55));
  float s = max(dot(d, normalize(sunDir)), 0.0);
  c += sunColor * (pow(s, 900.0) * 4.0 + pow(s, 24.0) * 0.35 + pow(s, 4.0) * 0.12) * sunPower;
  gl_FragColor = vec4(c, 1.0);
  #include <colorspace_fragment>
}`;function _p(n,e){let t=new Qs({canvas:n,antialias:!0,powerPreference:"high-performance"}),i=Math.min(globalThis.devicePixelRatio||1,2),s=i,r="auto";t.setPixelRatio(s),t.shadowMap.enabled=!0,t.shadowMap.type=Uo,t.shadowMap.autoUpdate=!1,t.outputColorSpace=bt,t.toneMapping=el,t.toneMappingExposure=1.05;let o=new yo,a=new go(qn.dayHorizon.clone(),45,150);o.fog=a;let c=new Bt(e.camera.fov,1,.2,400),l=new Po(16777215,11569512,1),h=new zo(16774108,3);h.castShadow=!0,h.shadow.mapSize.set(1536,1536),Object.assign(h.shadow.camera,{left:-15,right:15,top:15,bottom:-15,near:1,far:90}),h.shadow.bias=-4e-4,h.shadow.normalBias=.035,h.shadow.radius=2.5;let u=new Io(16757865,0,16,1.6);u.position.set(.2,2.6,1.6),o.add(l,h,h.target,u);let d=new bn({uniforms:{top:{value:qn.dayTop.clone()},horizon:{value:qn.dayHorizon.clone()},sunDir:{value:new P(0,1,0)},sunColor:{value:Ut("#fff1c4")},sunPower:{value:1}},vertexShader:Pb,fragmentShader:Lb,side:Ht,depthWrite:!1,fog:!1,toneMapped:!1}),p=new Pe(new Li(300,24,16),d);p.frustumCulled=!1,o.add(p);let g=[];for(let v=0;v<420;v++){let z=Math.random()*Math.PI*2,J=.08+Math.random()*.92,$=Math.sqrt(1-J*J);g.push(Math.cos(z)*$*280,J*280,Math.sin(z)*$*280)}let y=new vt;y.setAttribute("position",new $e(g,3));let m=new er({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),f=new bo(y,m);f.frustumCulled=!1,o.add(f);let b={sky:p,stars:f,moon:null,clouds:[]},_=new Pe(Oe.sphere(),new Mt({color:"#f4f1de",fog:!1}));_.scale.setScalar(9),o.add(_),b.moon=_;let M=new Qt({color:16777215,fog:!1}),C=[];for(let v=0;v<9;v++){let z=new Qe,J=4+Math.floor(Math.random()*3);for(let ee=0;ee<J;ee++)z.sphere(2.2+Math.random()*2.2,"#ffffff",[(ee-J/2)*2.6+Math.random(),Math.random()*1.2,Math.random()*2],[1.25,.62,1],[10,8]);let $=new Pe(z.geometry(),M);$.position.set(-110+Math.random()*220,26+Math.random()*26,-60-Math.random()*90),$.scale.setScalar(1+Math.random()*1.4),$.userData.speed=.35+Math.random()*.5,o.add($),C.push($),b.clouds.push($)}let E={pos:new P,target:new P,fov:46,zoom:1},A={pos:new P,look:new P},D={pos:new P,look:new P},x={amount:0,time:0},w={renderer:t,scene:o,camera:c,hemi:l,sun:h,daylight:.8,time:0,look:"3d",lastLayout:null,glowMats:[],nightFades:[],updaters:[],signs:[]};function F(v,z){t.setSize(v,z,!1),c.aspect=v/z;let J=Math.max(0,.75-c.aspect);c.fov=E.fov+J*(w.look==="2d"?6:40),c.updateProjectionMatrix(),U()}function U(){let v=(1+Math.max(0,.75-c.aspect)*1.2)*E.zoom,z=E.pos.clone().sub(E.target);D.pos.copy(E.target).add(z.multiplyScalar(v)),D.look.copy(E.target)}function W(v){if(!v)return U();let z=new P(...v);D.look.copy(z).add(new P(0,.25,0)),w.look==="2d"?D.pos.copy(z).add(new P(0,.8,24)):D.pos.copy(z).add(new P(0,2.2,4.2))}function L(v,z=!0){w.lastLayout=v,E.zoom=v.camera.zoom||1,E.target.set(...v.camera.target),w.look==="2d"?(E.fov=13,E.pos.copy(E.target).add(new P(0,1.6,40))):(E.fov=v.camera.fov,E.pos.set(...v.camera.position)),u.position.set(v.cx??.2,2.7,1.4),U(),z&&(A.pos.copy(D.pos),A.look.copy(D.look)),_e()}function k(v){x.amount=Math.max(x.amount,v),x.time=.35}let G=new P,K=new me,Y=new me,Z=new me,j=Ut("#ffffff"),te=Ut("#2c3558"),ce=Ut("#ffc0a0"),X=Ut("#fff3dc"),Q=Ut("#ff9a55"),ue=Ut("#9db8ff"),Me=Ut("#b08968"),ve=Ut("#3a4468"),Te=Ut("#ffffff"),ze=Ut("#8ea2dc");function Le(v,z){w.time+=v;let J=1-Math.exp(-v*4);if(A.pos.lerp(D.pos,J),A.look.lerp(D.look,J),c.position.copy(A.pos),c.position.x+=Math.sin(w.time*.22)*.12,x.time>0){x.time-=v;let we=x.amount*Math.max(0,x.time/.35);c.position.x+=(Math.random()-.5)*we,c.position.y+=(Math.random()-.5)*we}else x.amount=0;c.lookAt(A.look);let $=Go(z),ee=1-$;w.daylight=$;let xe=2*Math.PI*(z-.25);G.set(Math.cos(xe)*.6,Math.sin(xe),.55).normalize();let ae=Math.max(0,1-Math.abs($-.3)*3.2);K.copy(qn.nightTop).lerp(qn.dayTop,$).lerp(qn.duskTop,ae*.6),Y.copy(qn.nightHorizon).lerp(qn.dayHorizon,$).lerp(qn.duskHorizon,ae*.85),d.uniforms.top.value.copy(K),d.uniforms.horizon.value.copy(Y),d.uniforms.sunDir.value.copy(G),d.uniforms.sunPower.value=Math.min(1,$*1.6+ae*.6),d.uniforms.sunColor.value.copy(X).lerp(Q,ae),o.fog&&o.fog.color.copy(Y),w.look==="2d"&&o.background&&o.background.copy(Y);let fe=G.y>-.02;fe?(Wn.copy(G),Wn.y=Math.max(.62,Wn.y)):Wn.set(-.45,.8,.6),h.position.copy(Wn.normalize()).multiplyScalar(40),h.target.position.set(0,0,0),fe?(h.color.copy(Q).lerp(X,Math.min(1,$*1.4)),h.intensity=.3+2.3*$):(h.color.copy(ue),h.intensity=1),l.color.copy(ze).lerp(Te,$),l.groundColor.copy(ve).lerp(Me,$),l.intensity=1.2+.55*$,t.toneMappingExposure=1.02+ee*.2,_.position.copy(G).multiplyScalar(-250),_.visible=G.y<.25,m.opacity=Math.pow(ee,2.2),Z.copy(te).lerp(j,$).lerp(ce,ae*.55),M.color.copy(Z);for(let we of C)we.position.x+=we.userData.speed*v,we.position.x>130&&(we.position.x=-130);let Ce=.08+1.7*ee;for(let we of w.glowMats)we.emissiveIntensity=Ce*(we.userData.glow??1);u.intensity=38*ee;for(let we of w.nightFades)we.opacity=(we.userData.base||.5)*ee;for(let we of w.updaters)we(v,w.time,$);Je++,Je%2===0&&(t.shadowMap.needsUpdate=!0),r==="auto"&&Ne(v)}let Je=0;function B(v){t.shadowMap.enabled!==v&&(t.shadowMap.enabled=v,h.castShadow=v,o.traverse(z=>{z.material&&(Array.isArray(z.material)?z.material:[z.material]).forEach(J=>{J.needsUpdate=!0})}))}function Lt(v){r=v,ye.frames=0,ye.time=0,ye.warmup=3,s=v==="low"?1:i,t.setPixelRatio(s),u.visible=v!=="low",B(v!=="low"),_e()}let ye={frames:0,time:0,warmup:3};function Ne(v){if(ye.warmup>0){ye.warmup-=v;return}if(ye.frames++,ye.time+=v,ye.time<2)return;let z=ye.frames/ye.time;ye.frames=0,ye.time=0,z<45&&s>1?(s=Math.max(1,s-.25),t.setPixelRatio(s),_e(),w.pixelRatio=s):z<30&&t.shadowMap.enabled&&s<=1&&B(!1)}function _e(){let v=n.clientWidth||globalThis.innerWidth,z=n.clientHeight||globalThis.innerHeight;F(v,z)}function lt(v){Wn.set(v[0],v[1],v[2]).project(c);let z=n.clientWidth,J=n.clientHeight;return{x:(Wn.x*.5+.5)*z,y:(-Wn.y*.5+.5)*J,front:Wn.z<1,w:z,h:J}}function Be(v){let z=v==="2d";w.look=z?"2d":"3d",z?Rl(o):yp(o),b.sky.visible=!z,b.stars.visible=!z,b.moon&&(b.moon.visible=!z);for(let J of b.clouds)J.visible=!z;o.fog=z?null:a,o.background=z?new me("#bfe6fb"):null,B(!z&&r!=="low"),w.lastLayout&&L(w.lastLayout,!0)}function T(v){w.look==="2d"&&Rl(v)}return Object.assign(w,{update:Le,focus:W,shakeCam:k,resize:_e,toScreen:lt,recomputeGoal:U,setLocation:L,setQuality:Lt,setLook:Be,styleNew:T}),L(e),w}var Vi="#f3ede0",bp=new me;function hi(n,e,t=0){return bp.set(n).offsetHSL(0,t,e),"#"+bp.getHexString()}function vp(n){let e=(Math.abs(Math.round(n))*9301+49297)%4294967296;return()=>(e=(e*1664525+1013904223)%4294967296,e/4294967296)}function xp(n,e){let t=new ct;t.name="location:"+n.id;let i=new Pe(new Tn(200,200),An("pavers",90,90));i.rotation.x=-Math.PI/2,i.receiveShadow=!0,t.add(i);let s={env:e,group:t,solid:new Qe,flat:new Qe,glassDark:new Qe,glassLit:new Qe,lampGlow:new Qe,lights:0};for(let r of n.props){let o=Ib[r.type];o?o(r,s):console.warn("[props] unknown prop type",r.type)}if(s.solid.empty||t.add(s.solid.mesh(an)),s.flat.empty||t.add(s.flat.mesh(Hi)),s.glassDark.empty||t.add(s.glassDark.mesh(an,{cast:!1})),!s.glassLit.empty){let r=Gn(e,"#ffffff","#ffb45e",.5,{vertexColors:!0,roughness:.3});t.add(s.glassLit.mesh(r,{cast:!1}))}if(!s.lampGlow.empty){let r=Gn(e,"#fff3d0","#ffc56b",2.2);t.add(s.lampGlow.mesh(r,{cast:!1,receive:!1}))}return t}var Ib={road(n,{group:e,solid:t,env:i}){let s=n.z,r=n.width,o=new Pe(new Tn(200,r),An("asphalt",60,3));o.rotation.x=-Math.PI/2,o.position.set(0,.012,s),o.receiveShadow=!0,e.add(o);for(let a=-96;a<=96;a+=4.5)t.box([1.9,.012,.14],"#f2e3a6",[a,.014,s]);for(let a of[-1,1])t.box([200,.16,.34],"#cfc8bc",[0,0,s+a*(r/2+.17)]),t.box([200,.012,.1],"#e9e4d8",[0,.014,s+a*(r/2-.35)]);for(let a=0;a<6;a++)t.box([.55,.012,r-1.2],"#ecebe4",[9.5+a*1.05,.015,s]);t.cyl(.45,.45,.012,"#3a3c42",[-3.5,.016,s+1.2],[0,0,0],16),zb(n,e,i)},building(n,{solid:e,glassDark:t,glassLit:i}){let[s,r,o]=n.size,[a,,c]=n.pos,l=n.color,h=vp(Math.round(a*7+r*13+5)),u=c+o/2,d=3.3;e.box([s,r,o],l,[a,0,c]),e.box([s+.08,d,o+.08],hi(l,-.13,-.05),[a,0,c]),e.box([s+.3,.18,o+.3],Vi,[a,d,c]),e.box([s+.5,.26,o+.5],Vi,[a,r,c]),e.box([s+.16,.55,o+.16],hi(l,-.08),[a,r+.26,c]),e.box([s-.4,.1,o-.4],"#6b6f76",[a,r+.3,c]);let p=n.awning||["#d8402f","#2f7d6a","#e9a23b","#4a6fa5"][Math.floor(h()*4)],g=s*.5,y=a-s*.16;e.box([g+.24,2.15,.1],Vi,[y,.45,u+.02]),(h()<.7?i:t).box([g,1.9,.08],"#9fc3d6",[y,.58,u+.06]),e.box([g+.3,.45,.2],hi(l,-.22),[y,0,u+.06]),e.box([1.15,2.4,.1],Vi,[a+s*.33,0,u+.02]),e.box([.95,2.25,.1],hi(p,-.18),[a+s*.33,0,u+.06]),t.box([.6,.8,.06],"#9fc3d6",[a+s*.33,1.2,u+.1]),e.boxC([g+.6,.07,1.25],p,[y,2.82,u+.58],[.34,0,0]),e.box([g+.6,.22,.05],hi(p,.1),[y,2.48,u+1.16]);let m=Math.max(1,Math.floor((r-d-.9)/2.25)),f=Math.max(1,Math.floor((s-.7)/1.75)),b=["#2f6b5a","#8a3b2a","#3d5a80","#5b4636"][Math.floor(h()*4)],_=h()<.6;for(let C=0;C<m;C++)for(let E=0;E<f;E++){let A=a-(f-1)*1.75/2+E*1.75,D=d+.75+C*2.25;e.box([1.06,1.46,.08],Vi,[A,D-.08,u+.01]),(h()<.42?i:t).box([.88,1.3,.06],"#8fb4cc",[A,D,u+.05]),e.box([.05,1.3,.04],Vi,[A,D,u+.09]),e.box([1.2,.09,.2],Vi,[A,D-.12,u+.06]),_?(e.box([.22,1.32,.05],b,[A-.58,D,u+.05]),e.box([.22,1.32,.05],b,[A+.58,D,u+.05])):h()<.3&&(e.box([1.4,.08,.5],"#4a4e57",[A,D-.2,u+.28]),e.box([1.4,.5,.04],"#4a4e57",[A,D-.12,u+.52]))}let M=Math.max(1,Math.floor((o-.8)/2.1));for(let C of[-1,1])for(let E=0;E<m;E++)for(let A=0;A<M;A++){let D=c-(M-1)*2.1/2+A*2.1,x=d+.75+E*2.25;(h()<.35?i:t).box([.06,1.3,.88],"#8fb4cc",[a+C*(s/2+.02),x,D])}h()<.7&&e.box([1.1,.7,.9],"#9aa0a8",[a-s*.22,r+.4,c-o*.1]),h()<.6&&(e.cyl(.6,.6,1.2,"#7b5a3c",[a+s*.2,r+.9,c+o*.1]),e.cone(.68,.45,"#5b4636",[a+s*.2,r+2.1,c+o*.1]),e.cyl(.05,.05,.5,"#4a4e57",[a+s*.2-.4,r+.4,c+o*.1]),e.cyl(.05,.05,.5,"#4a4e57",[a+s*.2+.4,r+.4,c+o*.1])),h()<.5&&e.box([.5,1.3,.5],hi(l,-.2),[a+s*.36,r+.3,c-o*.25])},tree(n,{solid:e,flat:t}){let[i,,s]=n.pos,r=n.scale||1,o=vp(Math.round(i*31+s*17)),a=["#5fa052","#6fb35f","#4f8f47","#7dbb62"];e.cyl(.92,.92,.03,"#5a5148",[i,.012,s],[0,0,0],16),e.cyl(.13*r,.2*r,1.9*r,"#7b5236",[i,0,s]);let c=[[0,2.7,0,1.3],[.75,2.25,.25,.95],[-.7,2.3,-.2,.9],[.1,3.5,.05,.85],[-.15,2.3,.7,.8]];for(let[l,h,u,d]of c)t.ico(d*r,a[Math.floor(o()*a.length)],[i+l*r,h*r,s+u*r],[1,.92,1],[o()*3,o()*3,0])},bush(n,{flat:e}){let[t,,i]=n.pos;e.ico(.55,"#5fa052",[t,.4,i],[1.2,.8,1]),e.ico(.42,"#6fb35f",[t+.5,.33,i+.15],[1,.8,1],[1,2,0]),e.ico(.4,"#4f8f47",[t-.45,.3,i-.1],[1,.8,1],[2,1,0])},lamp(n,{solid:e,lampGlow:t,group:i,env:s}){let[r,,o]=n.pos,a="#2f3238";e.cyl(.12,.2,.35,a,[r,0,o]),e.cyl(.06,.07,3.5,a,[r,.3,o]),e.boxC([.7,.06,.06],a,[r+.3,3.75,o]),e.cyl(.2,.12,.1,a,[r+.62,3.6,o]),e.cone(.22,.16,a,[r+.62,3.7,o]),t.sphere(.16,"#fff3d0",[r+.62,3.5,o],[1,1.15,1],[10,8]);let c=na(s,n.light?4.2:3.2);c.position.set(r+.62,.03,o),i.add(c)},bench(n,{solid:e}){let[t,,i]=n.pos,s="#a8703f";for(let r=0;r<3;r++)e.box([1.7,.05,.13],s,[t,.46,i-.16+r*.16]);for(let r=0;r<2;r++)e.box([1.7,.13,.05],s,[t,.62+r*.2,i-.28]);for(let r of[-.7,.7])e.box([.07,.46,.45],"#2f3238",[t+r,0,i]),e.box([.07,.55,.07],"#2f3238",[t+r,.46,i-.28])},bin(n,{solid:e}){let[t,,i]=n.pos;e.cyl(.3,.26,.85,"#3f6d7c",[t,0,i],[0,0,0],12),e.cyl(.33,.33,.08,"#2c4e59",[t,.85,i],[0,0,0],12),e.cyl(.2,.2,.02,"#14242a",[t,.93,i],[0,0,0],12)},hydrant(n,{solid:e}){let[t,,i]=n.pos;e.cyl(.13,.16,.55,"#d8402f",[t,0,i]),e.dome(.14,"#d8402f",[t,.55,i]),e.cylC(.06,.42,"#b53324",[t,.36,i],[0,0,Math.PI/2]),e.cyl(.19,.19,.05,"#b53324",[t,0,i])},planter(n,{solid:e,flat:t}){let[i,,s]=n.pos;e.box([1.3,.5,.55],"#8d5a3b",[i,0,s]),e.box([1.36,.07,.61],"#a8703f",[i,.5,s]),t.ico(.3,"#4f8f47",[i-.3,.68,s],[1.3,.7,1]),t.ico(.3,"#5fa052",[i+.3,.68,s],[1.3,.7,1],[1,1,0]);let r=["#ef476f","#ffd166","#f78c6b","#c77dff","#ffffff"];for(let o=0;o<6;o++)t.ico(.11,r[o%r.length],[i-.5+o*.2,.86+o%2*.09,s+(o%3-1)*.12])},sandwichBoard(n,{solid:e,env:t}){let[i,,s]=n.pos,r=1.6;for(let o of[-1,1])e.boxC([.8*r,1.1*r,.05*r],"#3a2a1d",[i,.55*r,s+o*.17*r],[o*.3,0,0]),e.boxC([.68*r,.8*r,.02*r],"#fff3c4",[i,.6*r,s+o*.215*r],[o*.3,0,0]);t.signs.push({id:"sandwich",pos:[i,.6*r,s+.23*r],size:[.62*r,.74*r],kind:"street"})},stall(n,{solid:e}){let[t,,i]=n.pos,s=n.color||"#d8402f",r=n.awning||"#fff3dc";e.box([1.7,.9,.8],"#a8703f",[t,.45,i]),e.box([1.8,.06,.9],"#f2e3a6",[t,.93,i]);for(let a of[-.8,.8])e.cyl(.04,.04,2.2,"#2f3238",[t+a,1.1,i-.4]);e.box([2.1,.08,1.3],r,[t,2.2,i]);for(let a=0;a<5;a++)e.box([.2,.5,.04],a%2?r:s,[t-.84+a*.42,1.85,i+.67]);let o=["#f4a261","#d8402f","#4f8f47","#ffd166"];for(let a=0;a<6;a++)e.cyl(.06,.06,.08,o[a%o.length],[t-.6+a*.24,1,i+.1])},dome(n,{solid:e}){let[t,,i]=n.pos,s=n.radius||3,r=n.height||4;e.cyl(s,s,r,"#f3ede0",[t,r/2,i],[0,0,0],20);for(let o=0;o<8;o++){let a=o/8*Math.PI*2;e.cyl(.22,.22,r,"#e9e4d8",[t+Math.cos(a)*(s+.3),r/2,i+Math.sin(a)*(s+.3)],[0,0,0],8)}e.dome(s+.2,"#9aa3ab",[t,r,i],[1,.8,1])},car(n,{group:e}){let t=Mp(n.color||"#d8402f");t.position.set(n.pos[0],0,n.pos[2]),t.rotation.y=n.rot||0,e.add(t)}};function Mp(n){let e=new Qe,t="#2d3f52";e.box([3.7,.5,1.62],n,[0,.32,0]),e.box([3.5,.12,1.5],hi(n,-.12),[0,.22,0]),e.box([2,.52,1.46],n,[-.2,.82,0]),e.box([2.06,.36,1.5],t,[-.2,.86,0]),e.box([1.6,.04,1.3],hi(n,.06),[-.2,1.34,0]);for(let i of[-1.15,1.15])for(let s of[-.8,.8])e.cylC(.34,.24,"#1d1f24",[i,.34,s],[Math.PI/2,0,0],14),e.cylC(.17,.26,"#b9bec6",[i,.34,s],[Math.PI/2,0,0],10);return e.box([.08,.14,.34],"#fff3c4",[1.84,.52,.5]),e.box([.08,.14,.34],"#fff3c4",[1.84,.52,-.5]),e.box([.08,.14,.34],"#c0392b",[-1.84,.52,.5]),e.box([.08,.14,.34],"#c0392b",[-1.84,.52,-.5]),e.box([.14,.14,1.66],"#8f949c",[1.82,.28,0]),e.box([.14,.14,1.66],"#8f949c",[-1.82,.28,0]),e.mesh(an)}function zb(n,e,t){let i=["#e9c46a","#4a6fa5","#f4f1de","#2f7d6a"],s=[{z:n.z+n.width*.24,dir:1},{z:n.z-n.width*.24,dir:-1}],r=Gn(t,"#fff8d8","#fff0b0",2.5),o=[];s.forEach((a,c)=>{for(let l=0;l<2;l++){let h=Mp(i[(c*2+l)%i.length]);h.rotation.y=a.dir>0?0:Math.PI,h.position.set(-70+Math.random()*140,0,a.z);for(let u of[-.5,.5]){let d=new Pe(Oe.sphere(8,6),r);d.scale.set(.06,.1,.16),d.position.set(1.9,.59,u),h.add(d)}e.add(h),o.push({m:h,dir:a.dir,speed:5+Math.random()*3})}}),t.updaters.push(a=>{for(let c of o)c.m.position.x+=c.dir*c.speed*a,c.m.position.x>80&&(c.m.position.x=-80),c.m.position.x<-80&&(c.m.position.x=80)})}var Ps=new Map;function Db(n,e){let t="leg|"+n+"|"+e;if(!Ps.has(t)){let i=new Qe;i.add(Oe.capsule(.085,.36),n,[0,-.27,0]),i.box([.15,.09,.26],e,[0,-.58,.04]),Ps.set(t,i.geometry())}return Ps.get(t)}function Ub(n,e){let t="arm|"+n+"|"+e;if(!Ps.has(t)){let i=new Qe;i.add(Oe.capsule(.065,.3),n,[0,-.2,0]),i.sphere(.072,e,[0,-.45,0]),Ps.set(t,i.geometry())}return Ps.get(t)}var Pl=new Map,Nb=400;function dr(n){let e=new ct,t=JSON.stringify(n),i=Pl.get(t),s=new Qe,r=n.skin||"#e0ac7e";s.add(Oe.capsule(.2,.4),n.shirt,[0,.98,0],[0,0,0],[1.05,1,.8]),s.cyl(.07,.07,.1,r,[0,1.34,0]),s.sphere(.2,r,[0,1.6,0],[1,1.05,.98]),s.sphere(.027,"#2a1d14",[-.075,1.62,.178]),s.sphere(.027,"#2a1d14",[.075,1.62,.178]),s.boxC([.09,.016,.02],"#8a3b2a",[0,1.525,.186]),s.sphere(.04,r,[-.2,1.6,0]),s.sphere(.04,r,[.2,1.6,0]);let o=n.hair||"#3b2a1e",a=n.hairStyle||"short";if(a!=="bald"&&(s.dome(.215,o,[0,1.63,-.015],[1,1.02,1.02],[-.25,0,0]),a==="bun"&&s.sphere(.1,o,[0,1.86,-.08]),a==="long"&&s.add(Oe.capsule(.15,.22),o,[0,1.45,-.12],[0,0,0],[1.25,1,.6])),n.hat==="cap"){let f=n.hatColor||"#d8402f";s.dome(.21,f,[0,1.7,0],[1,.75,1]),s.boxC([.26,.03,.2],f,[0,1.71,.2],[.15,0,0])}else n.hat==="toque"&&(s.cyl(.17,.165,.2,"#ffffff",[0,1.74,0]),s.sphere(.21,"#ffffff",[0,2,0],[1,.72,1]));n.apron&&(s.boxC([.32,.5,.04],n.apron,[0,.9,.165]),s.boxC([.34,.04,.05],n.apron,[0,1.12,.165])),s.add(Oe.capsule(.17,.08),n.pants||"#3d4a66",[0,.66,0],[0,0,Math.PI/2],[1,1,.85]);let c=i?new Pe(i,an):s.mesh(an);!i&&Pl.size<Nb&&Pl.set(t,c.geometry),c.castShadow=!0,e.add(c);let l=an,h=(f,b,_)=>{let M=new ct;M.position.set(b,_,0);let C=new Pe(f,l);return C.castShadow=!0,M.add(C),e.add(M),M},u=Db(n.pants||"#3d4a66",n.shoe||"#2b2b33"),d=Ub(n.shirt,r),p=h(u,-.105,.62),g=h(u,.105,.62),y=h(d,-.275,1.27),m=h(d,.275,1.27);return y.rotation.z=-.12,m.rotation.z=.12,e.add(gp(.36)),n.scale&&e.scale.setScalar(n.scale),{group:e,body:c,armL:y,armR:m,legL:p,legR:g}}function Ll(n,e,t){let i=Math.sin(e)*.65*t;n.legL.rotation.x=i,n.legR.rotation.x=-i,n.armL.rotation.x=-i*.8,n.armR.rotation.x=i*.8}var kb=["#f2c9a0","#e0ac7e","#c68a5c","#8d5a3b","#f7d9bd","#a8704a"],Fb=["#2b1d14","#5a3a22","#8a5a2b","#c9a15a","#1c1c22","#7a2f1e","#d9d9d9"],wp=["#4ea8de","#ef476f","#ffd166","#06d6a0","#9b5de5","#f78c6b","#3d9a8b","#f4f1de","#e76f51","#577590"],Ob=["#3d4a66","#2f3e46","#6b4f3a","#4a4e69","#1f2a44","#7a8aa0"],Bb=["short","short","bun","long","short","bald","long"];function Sp(n){let e=s=>Math.abs(Math.sin(n*12.9898+s*78.233)*43758.5453)%1,t=(s,r)=>s[Math.floor(e(r)*s.length)],i=e(6);return{skin:t(kb,1),hair:t(Fb,2),shirt:t(wp,3),pants:t(Ob,4),hairStyle:t(Bb,5),hat:i>.84?"cap":"none",hatColor:t(wp,7),scale:.94+e(8)*.12}}var se=.2,st=1.5,ln="#c8392b",cn="#fff3dc",Ep="#2f6b5a",Dl="#a8703f",ui="#6b4428",ia="#b9aea0",je="#2f3238",pr="#f3ede0";function Pp(n,e,t){let i=e.width,s=e.id==="cart",r=s?.42:e.id==="stand"?.3:.15,o=s?se+i/2+.45:se+i/2-1.05,a={dough:[se-i*.29,1.15,.7],load:[se+i*.19,1.15,.7],oven:[o,.86,.72],pass:[se,1.25,1.55]},c=n.camera;return{...n,tier:e,tierIdx:t,cx:se,W:i,D:e.depth,back:st-e.depth,floorY:r,ovenX:o,stations:a,window:[se-.4,0,2.9],register:[se+.8,1.2,1.55],camera:{...c,zoom:e.cameraZoom,target:[c.target[0],c.target[1]+t*.6,c.target[2]]}}}function Lp(n,e,t={}){let i=new ct;i.name="stand:"+n.tier.id;let s={g:i,env:e,L:n,S:new Qe,F:new Qe,M:new Qe,warm:new Qe,win:new Qe,cw:n.W-.6};Hb[n.tier.id](s),Vb(s),Gb(s),Wb(s),Kb(s,t.decor||0),Xb(s,t.empire||{}),i.add(s.S.mesh(an)),s.F.empty||i.add(s.F.mesh(Hi)),s.M.empty||i.add(s.M.mesh(Al)),s.warm.empty||i.add(s.warm.mesh(Gn(e,"#ffffff","#ffc978",2.2,{vertexColors:!0}),{cast:!1,receive:!1})),s.win.empty||i.add(s.win.mesh(Gn(e,"#ffffff","#ffb45e",.55,{vertexColors:!0,roughness:.3}),{cast:!1}));let r=na(e,5.5,"#ffb469",.45);return r.position.set(se,.03,3.4),i.add(r),Jb(s),i}function Il(n,e,t,i,s){let r=Math.round((t-e)/.36),o=(t-e)/r;n.S.box([t-e,.1,.04],ln,[(e+t)/2,i+.06,s]);for(let a=0;a<r;a++)n.S.cylC(o/2,.035,a%2?cn:"#d8402f",[e+o*(a+.5),i+.06,s],[Math.PI/2,0,0],12)}function Tp(n,e,t,i){let s=new Pe(Oe.box(),An("stripes",e[0]/.8,1));s.scale.set(e[0],e[1],e[2]),s.position.set(t[0],t[1],t[2]),s.rotation.x=i,s.castShadow=!0,s.receiveShadow=!0,n.g.add(s);let r=e[2]/2;return{y:t[1]-Math.sin(i)*r,z:t[2]+Math.cos(i)*r}}function fr(n,e,t,i,s){let{S:r}=n;r.box([t-e,.05,.3],ui,[(e+t)/2,i,s]);let o=["#c0392b","#e9c46a","#2e8b57","#f4f1de","#e67e22","#7a4a2b","#b8d8a8"],a=0;for(let c=e+.25;c<t-.15;c+=.34){let l=.2+a*7%3*.06;a%4===3?(r.cyl(.05,.07,l+.12,"#3b6b4a",[c,i+.05,s]),r.cyl(.025,.03,.1,"#3b6b4a",[c,i+.17+l,s])):(r.cyl(.09,.09,l,o[a%o.length],[c,i+.05,s]),r.cyl(.095,.095,.04,"#d9cbb2",[c,i+.05+l,s])),a++}}function Ap(n,e,t,i,s){let{S:r,M:o}=n;o.torus(s,.06,je,[e,t,i]),r.cylC(.11,.16,ui,[e,t,i],[Math.PI/2,0,0]);for(let a=0;a<4;a++)r.boxC([s*1.9,.07,.06],Dl,[e,t,i],[0,0,a*Math.PI/4])}var Hb={cart(n){let{S:e,M:t,L:i,g:s}=n,{W:r}=i,o=se-r/2,a=se+r/2,c=-1.1;s.add(Cn([r,.22,2.6],"wood",[se,.2,.2],[r/1.3,2])),e.box([r-.5,.12,.16],ui,[se,.1,-.5]);for(let h of[se-1.35,se+1.35])Ap(n,h,.56,2.13,.52),Ap(n,h,.56,c-.06,.52);t.cylC(.035,1.5,je,[o-.42,1.25,.2],[Math.PI/2,0,0]);for(let h of[-.5,.9])t.cylC(.03,.5,je,[o-.2,1.2,h],[0,0,Math.PI/2.4]);e.box([r,2.55,.12],ln,[se,i.floorY,c]),e.box([r+.06,.16,.16],cn,[se,i.floorY+2.5,c]),e.box([r+.04,.5,.14],cn,[se,i.floorY,c+.01]),fr(n,o+.3,a-.3,2.05,c+.2);for(let h of[o+.05,a-.05])e.box([.1,.8,2.45],ln,[h,i.floorY,.2]);for(let h of[o+.08,a-.08])for(let u of[st-.08,c+.1])t.cyl(.045,.045,3.15,je,[h,i.floorY,u]);let l=Tp(n,[r+.7,.07,3.1],[se,3.5,.3],.1);Il(n,o-.35,a+.35,l.y-.2,l.z),Object.assign(n,{eave:{y:l.y-.2,z:l.z,x0:o-.3,x1:a+.3},neonPos:[se,4,-.7],flagBase:{y:3.6,z:c,n:4},statuePos:[o+.45,4.05,-.7],chimneyTop:3.2,counterBase:.2});for(let h of[se-.9,se+.9])t.cyl(.035,.035,.5,je,[h,3.62,-.7])},stand(n){let{S:e,L:t,g:i}=n,{W:s,D:r,back:o}=t,a=se-s/2,c=se+s/2,l=(st+o)/2;i.add(Cn([s+.5,.3,r+.7],"wood",[se,0,l+.1],[s/1.3,3])),e.box([s+.6,.08,r+.8],ui,[se,0,l+.1]),e.box([s,3.5,.14],ln,[se,t.floorY,o+.07]),e.box([s+.02,1,.16],cn,[se,t.floorY,o+.08]),e.box([s+.04,.08,.2],Ep,[se,t.floorY+1,o+.09]),fr(n,a+.4,c-1.9,1.95,o+.3),fr(n,a+.4,c-1.9,2.55,o+.3);for(let p of[a+.07,c-.07]){e.box([.14,1.15,r-.1],ln,[p,t.floorY,l]),e.box([.2,.08,r],cn,[p,t.floorY+1.15,l]);for(let g of[st-.1,o+.1])e.box([.18,3.6,.18],ui,[p,t.floorY,g])}let h=new Pe(Oe.box(),An("rooftiles",(s+1)/1.2,3));h.scale.set(s+1,.16,r+.9),h.position.set(se,4.05,l+.15),h.rotation.x=.07,h.castShadow=!0,h.receiveShadow=!0,i.add(h);let u=l+.15+(r+.9)/2,d=4.05-(r+.9)/2*.07;e.box([s+1,.2,.08],cn,[se,d-.24,u-.02]),Il(n,a-.5,c+.5,d-.44,u),e.box([3.7,.95,.14],ln,[se,4.2,st+.1]),e.box([3.45,.7,.16],cn,[se,4.32,st+.12]);for(let p of[se-1.6,se+1.6])e.box([.12,.5,.12],ui,[p,3.85,st+.1]);n.env.signs.push({id:"name",pos:[se,4.68,st+.25],kind:"shopname"}),n.env.signs.push({id:"franchise",pos:[c-.12,2.55,st+.05],size:[.64,.44],kind:"franchise"}),e.box([.7,.5,.05],"#d4af37",[c-.12,2.3,st+.02]),Object.assign(n,{eave:{y:d-.44,z:u,x0:a-.45,x1:c+.45},neonPos:[se,5.65,st+.1],flagBase:{y:4.15,z:o+.2,n:5},statuePos:[a+.6,4.75,l],chimneyTop:5,counterBase:0})},shop(n){let{S:e,F:t,M:i,L:s,g:r,warm:o,win:a}=n,{W:c,D:l,back:h}=s,u=se-c/2,d=se+c/2,p=(st+h)/2,g="#f1d9a8",y=3.6,m=6.1;e.box([c+.8,.15,l+1.3],ia,[se,0,p+.35]);let f=new Pe(new Tn(c-.4,l-.3),An("checker",c/1.6,l/1.6));f.rotation.x=-Math.PI/2,f.position.set(se,.16,p),f.receiveShadow=!0,r.add(f),r.add(Cn([c,y-.15,.2],"tiles",[se,.15,h+.1],[c/1.2,3]));for(let M of[u+.12,d-.12])r.add(Cn([.24,y-.15,l],"plaster",[M,.15,p],[4,3],{color:g}));for(let M of[u+.27,d-.27])e.box([.54,y-.15,.54],"#e6c990",[M,.15,st-.05]),e.box([.62,.3,.62],ia,[M,.15,st-.05]),i.box([.06,.3,.16],je,[M,2.35,st+.26]),o.box([.2,.28,.2],"#fff0c8",[M,2.3,st+.42]),i.cone(.2,.14,je,[M,2.58,st+.42],[0,0,0],4);e.box([c,.5,.44],"#e6c990",[se,y-.5,st-.08]),fr(n,u+.5,d-2.2,1.95,h+.36),fr(n,u+.5,d-2.2,2.6,h+.36);for(let M=0;M<4;M++)i.cylC(.19,.03,"#8a8d93",[u+1.2+M*.62,3.05,h+.26],[Math.PI/2,0,0],14),i.box([.04,.26,.03],"#5a5d63",[u+1.2+M*.62,3.18,h+.26]);r.add(Cn([c+.1,m-y,l+.1],"plaster",[se,y,p],[5,2],{color:"#f6e3b4"})),e.box([c+.4,.16,l+.4],pr,[se,y-.02,p]);let b=st+.06;for(let M of[-2.45,0,2.45]){let C=se+M;e.box([1.36,1.66,.08],pr,[C,4.2,b]),a.box([1.14,1.46,.06],"#bcd3e0",[C,4.3,b+.04]),e.box([.06,1.46,.04],pr,[C,4.3,b+.08]),e.box([1.14,.06,.04],pr,[C,5,b+.08]);for(let E of[-1,1])e.box([.3,1.5,.06],Ep,[C+E*.76,4.28,b+.04]);e.box([1.5,.2,.3],"#8d5a3b",[C,3.98,b+.2]),["#ef476f","#ffd166","#ffffff","#f78c6b","#ef476f"].forEach((E,A)=>{t.ico(.12,E,[C-.52+A*.26,4.28+A%2*.06,b+.24])}),t.ico(.2,"#4f8f47",[C,4.2,b+.22],[3.2,.6,.8])}e.box([c+.7,.26,l+.7],pr,[se,m,p]),e.box([c+.3,.5,l+.3],"#e6c990",[se,m+.26,p]),e.box([c-.2,.1,l-.2],"#8d7b68",[se,m+.3,p]);for(let M of[se-2.1,se+2.1])i.cyl(.05,.05,1,je,[M,m+.7,st-.5]);e.box([4.9,1.05,.16],ln,[se,m+.8,st-.5]),e.box([4.6,.8,.18],cn,[se,m+.93,st-.49]),n.env.signs.push({id:"name",pos:[se,m+1.33,st-.35],kind:"shopname"}),e.box([.64,.48,.05],"#d4af37",[d-.3,1.5,st+.24]),n.env.signs.push({id:"franchise",pos:[d-.3,1.74,st+.27],size:[.58,.42],kind:"franchise"});let _=Tp(n,[c+.5,.08,1.5],[se,y+.12,st+.72],.2);Il(n,u-.25,d+.25,_.y-.2,_.z),Object.assign(n,{eave:{y:_.y-.2,z:_.z,x0:u-.2,x1:d+.2},neonPos:[se,m+2.3,st-.5],flagBase:{y:m+.76,z:h+.3,n:6},statuePos:[u+.9,m+1.25,p+.6],chimneyTop:m+1.5,counterBase:0})}};function Vb(n){let{S:e,M:t,F:i,L:s,g:r,env:o,cw:a,warm:c}=n,{stations:l,floorY:h}=s,u=n.counterBase;e.box([a,1.12-u,.75],"#f6ead2",[se,u,1.7]),e.box([a+.04,.14,.78],ui,[se,u,1.7]),e.box([a+.02,.1,.02],ln,[se,.93,2.08]);let d=Math.max(3,Math.round(a/.95));for(let W=0;W<d;W++){let L=se-a/2+a/d*(W+.5);e.box([a/d-.18,.5,.03],"#ead9b8",[L,Math.max(u+.2,.34),2.075])}r.add(Cn([a+.16,.08,1],"wood",[se,1.12,1.6],[a/1.3,1]));let[p,,g]=l.dough;r.add(Cn([1.2,.07,.98],"wood",[p,1.03,g],[1,1]));for(let W of[-.52,.52])for(let L of[-.4,.4])e.box([.07,1.03-h,.07],ui,[p+W,h,g+L]);e.box([.3,.34,.2],"#efe6d2",[p-.4,1.1,g-.36]),e.box([.3,.05,.2],"#d9cbb2",[p-.4,1.4,g-.36],[0,0,.2]),e.cylC(.045,.5,Dl,[p+.05,1.15,g-.38],[0,0,Math.PI/2]),t.cyl(.13,.09,.1,"#c9ccd2",[p+.42,1.1,g-.36]),e.cyl(.115,.115,.02,"#c0392b",[p+.42,1.18,g-.36]),e.sphere(.09,"#f1dfb8",[p-.08,1.17,g-.36],[1,.7,1]);let[y,,m]=l.load;t.box([1,.05,.9],"#b9bec6",[y,1.05,m]),t.box([1,.04,.9],"#b9bec6",[y,.6,m]);for(let W of[-.46,.46])for(let L of[-.41,.41])t.box([.05,1.05-h,.05],"#8a8d93",[y+W,h,m+L]);e.cylC(.025,1.3,Dl,[y+.42,1.55,m-.5],[.25,0,.12]),e.cyl(.27,.27,.025,"#caa26a",[y+.5,2.15,m-.66],[.25+Math.PI/2,0,.12],16);let f=s.ovenX,b=-.1;e.box([1.84,.56,1.5],ia,[f,0,b]),r.add(Cn([1.74,1,1.42],"brick",[f,.56,b],[1.6,1.2]));let _=new Pe(Oe.dome(18,10),An("brick",3,1.4));_.scale.set(.87,.72,.71),_.position.set(f,1.56,b),_.castShadow=!0,r.add(_),e.box([1,.6,.06],"#140d0a",[f,.82,b+.7]),e.box([1.2,.14,.14],"#cfc3b2",[f,1.42,b+.72]);for(let W of[-1,1])e.box([.14,.62,.14],"#cfc3b2",[f+W*.57,.8,b+.72]);e.box([1.4,.07,.42],"#cfc3b2",[f,.76,b+.9]);let M=Rs("#3a1a0c",{emissive:new me("#ff7a1f"),emissiveIntensity:.5});o.ovenMouthMat=M;let C=new Pe(Oe.box(),M);C.scale.set(.9,.5,.03),C.position.set(f,1.1,b+.74),r.add(C);for(let W=0;W<3;W++)e.cylC(.07,.5,"#7b5236",[f-.3+W*.16,.64,b+.95],[Math.PI/2,0,0],8);let E=f+.4,A=b-.35;e.cyl(.17,.21,n.chimneyTop-1.9,"#6e4a3a",[E,1.9,A]),e.cyl(.24,.24,.1,"#4e342a",[E,n.chimneyTop,A]),o.smokeAt=[E,n.chimneyTop+.2,A];let[D,,x]=s.register;t.box([.52,.2,.44],"#4a5563",[D,1.2,x]),t.boxC([.44,.26,.05],"#2f3640",[D,1.52,x-.1],[-.35,0,0]),e.boxC([.36,.18,.02],"#9fe3c0",[D,1.52,x-.07],[-.35,0,0]),e.box([.4,.03,.2],"#d9dde3",[D,1.4,x+.08]),t.cyl(.11,.1,.22,"#f6e7b0",[D+.5,1.2,1.95]),e.cyl(.08,.08,.06,"#e9c46a",[D+.5,1.2,1.95]),e.box([.2,.16,.14],"#ffffff",[se-.55,1.2,1.95]);let w=se-a/2+.55;[0,1,2].forEach(W=>e.box([.72,.1,.72],"#f2d7a7",[w,1.2+W*.1,1.62],[0,W*.1,0])),e.box([.5,.012,.5],ln,[w,1.5,1.62],[0,.2,0]);for(let W of[se-a/2+.1,se+a/2-.1])e.cyl(.17,.13,.26,"#b5562c",[W,1.2,2]),i.ico(.24,"#4f9d4a",[W,1.62,2],[1,.95,1]),i.ico(.16,"#62b35a",[W+.1,1.78,2.02]);let F=n.eave,U=Math.round((F.x1-F.x0)/.48);for(let W=0;W<=U;W++){let L=W/U;c.sphere(.06,"#fff0c8",[F.x0+(F.x1-F.x0)*L,F.y-.1-Math.sin(L*Math.PI*U)*0,F.z-.06],[1,1.2,1],[8,6])}}function Gb(n){let{S:e,L:t,env:i}=n,s=1.5,r=se-t.W/2-.75,o=3.5,a=1*s,c=1*s,l=a+c/2;for(let h of[-.5,.5])e.box([.08*s,a+.2,.08*s],je,[r+h*s,0,o]);e.box([1.36*s,c,.08],"#2b2d42",[r,a,o]),e.box([1.2*s,.84*s,.03],"#f7f1e1",[r,l-.42*s,o+.045]),i.signs.push({id:"menu",pos:[r,l,o+.06],size:[1.6,1.16],kind:"menu"})}function Wb(n){let{g:e,env:t}=n,[i,s,r]=n.neonPos,o=new ct,a=new ct,c=new Qe;c.boxC([2.5,.78,.08],"#1d1a26",[i,s,r]),o.add(c.mesh(an));let l=new Qe;l.boxC([2.3,.05,.05],"#ff7ab5",[i,s+.31,r+.06]),l.boxC([2.3,.05,.05],"#ff7ab5",[i,s-.31,r+.06]),l.boxC([.05,.62,.05],"#ff7ab5",[i-1.15,s,r+.06]),l.boxC([.05,.62,.05],"#ff7ab5",[i+1.15,s,r+.06]),l.torus(.2,.035,"#ff7ab5",[i-.85,s,r+.07]),o.add(l.mesh(Gn(t,"#ff7ab5","#ff3d94",3.2),{cast:!1}));let h=new Qe;h.torus(.62,.04,"#7ff6ff",[i+1.75,s,r+.05]),h.torus(.62,.04,"#7ff6ff",[i-1.75,s,r+.05]);for(let u of[-1,1])h.boxC([.5,.06,.05],"#7ff6ff",[i+u*1.75,s,r+.06],[0,0,.6]),h.boxC([.5,.06,.05],"#7ff6ff",[i+u*1.75,s,r+.06],[0,0,-.6]),h.boxC([.06,.5,.05],"#7ff6ff",[i+u*1.75,s,r+.06]);a.add(h.mesh(Gn(t,"#7ff6ff","#2fe6ff",3.2),{cast:!1})),o.visible=!1,a.visible=!1,e.add(o,a),t.neon={l1:o,l2:a},t.signs.push({id:"neon",pos:[i+.2,s,r+.1],kind:"neon"})}function Cp(n,e,t){let{S:i,M:s,F:r}=n;s.cyl(.24,.26,.04,je,[e,0,t]),s.cyl(.035,.035,2.5,je,[e,0,t]),i.cyl(.46,.46,.05,"#f6ead2",[e,.74,t],[0,0,0],18),r.add(Oe.cone(8),ln,[e,2.42,t],[0,0,0],[.92,.4,.92]),r.add(Oe.cone(8),cn,[e,2.36,t],[0,Math.PI/8,0],[.95,.28,.95]),i.cyl(.16,.16,.02,"#e9b45a",[e-.1,.79,t+.05],[0,0,0],12),i.cyl(.04,.035,.1,"#ffffff",[e+.22,.79,t-.1]);for(let o of[-1,1]){let a=e+o*.72;i.cyl(.2,.2,.05,ln,[a,.46,t+.1],[0,0,0],12);for(let[c,l]of[[-.14,-.14],[.14,-.14],[-.14,.14],[.14,.14]])s.cyl(.02,.02,.46,je,[a+c,0,t+.1+l]);s.box([.04,.42,.34],je,[a+o*.17,.5,t+.1])}}function Rp(n,e,t){let{S:i,F:s}=n;i.cyl(.3,.22,.42,"#b5562c",[e,0,t]),i.cyl(.32,.32,.05,"#9c4826",[e,.42,t]),i.cyl(.05,.07,.95,"#6b5a45",[e,.42,t]),s.ico(.42,"#7d9460",[e,1.6,t]),s.ico(.3,"#8fa873",[e+.25,1.4,t+.1],[1,1,1],[1,1,0]),s.ico(.28,"#6f8754",[e-.24,1.42,t-.08],[1,1,1],[2,0,1])}var mr={flowers(n){let{S:e,F:t,M:i,cw:s,eave:r}=n,o=Math.max(2,Math.round(s/1.25)),a=["#ef476f","#ffd166","#ffffff","#f78c6b","#c77dff"];for(let c=0;c<o;c++){let l=se-s/2+s/o*(c+.5);e.box([.92,.2,.24],"#8d5a3b",[l,.56,2.2]),t.ico(.16,"#4f8f47",[l,.8,2.2],[2.7,.7,.8]);for(let h=0;h<5;h++)t.ico(.1,a[(c+h)%a.length],[l-.34+h*.17,.9+h%2*.06,2.24])}for(let c of[r.x0+.35,r.x1-.35]){i.cylC(.012,.5,je,[c,r.y-.35,r.z-.25]),e.dome(.2,"#7b5236",[c,r.y-.62,r.z-.25],[1,1,1],[Math.PI,0,0]),t.ico(.24,"#4f8f47",[c,r.y-.52,r.z-.25],[1,.7,1]);for(let l=0;l<5;l++){let h=l/5*Math.PI*2;t.ico(.09,a[l%a.length],[c+Math.cos(h)*.17,r.y-.46,r.z-.25+Math.sin(h)*.17])}}},festoon(n){let{M:e,warm:t,L:i,eave:s}=n,r=se-i.W/2-.5,o=se+i.W/2+.5,a=2.7,c=Math.max(4.1,s.y+.9);for(let h of[r,o])e.cyl(.05,.07,c,je,[h,0,a]),e.sphere(.09,"#d4af37",[h,c+.05,a]);let l=16;for(let h=1;h<l;h++){let u=h/l,d=c-.02-Math.sin(u*Math.PI)*.55;t.sphere(.085,"#fff0c8",[r+(o-r)*u,d,a],[1,1.25,1],[8,6]),e.cylC(.01,(o-r)/l,je,[r+(o-r)*(u-.5/l),d+.1,a],[0,0,Math.PI/2],4)}},bunting(n){let{F:e,eave:t}=n,i=["#ef476f","#ffd166","#06d6a0","#4ea8de","#9b5de5"],s=Math.round((t.x1-t.x0)/.34);for(let r=0;r<s;r++){let o=t.x0+(t.x1-t.x0)/s*(r+.5);e.add(Oe.cone(3),i[r%i.length],[o,t.y-.36,t.z+.04],[Math.PI,0,0],[.15,.3,.02])}},table(n){Cp(n,se+3,4.2)},lanterns(n){let{M:e,warm:t,cw:i}=n;for(let s of[se-i/2-.32,se+i/2+.32]){e.box([.3,.06,.3],je,[s,0,2.5]);for(let[r,o]of[[-.12,-.12],[.12,-.12],[-.12,.12],[.12,.12]])e.box([.03,.56,.03],je,[s+r,.06,2.5+o]);t.box([.2,.46,.2],"#ffe9b0",[s,.1,2.5]),e.cone(.24,.16,je,[s,.62,2.5],[0,Math.PI/4,0],4),e.torus(.07,.012,je,[s,.84,2.5])}},carpet(n){let{S:e,M:t,L:i}=n,s=i.queueStart[0]+i.queueStep[0]*(i.queueRowLength-1)/2,r=3.3,o=i.queueStart[2]+i.queueStep[2]*3.3,a=Math.abs(i.queueStep[0])*i.queueRowLength+.5;e.box([a,.012,o-r],"#a82a2a",[s,.014,(r+o)/2]);for(let c of[-1,1])e.box([.1,.014,o-r],"#d4af37",[s+c*(a/2-.12),.016,(r+o)/2]);for(let c of[-1,1]){let l=s+c*(a/2+.18),h=[r+.6,(r+o)/2+.2,o-.2];h.forEach((u,d)=>{t.cyl(.16,.18,.04,"#d4af37",[l,0,u]),t.cyl(.03,.03,.95,"#d4af37",[l,0,u]),t.sphere(.07,"#d4af37",[l,1,u]),d>0&&n.S.cylC(.03,u-h[d-1],"#8a1f2b",[l,.82,(u+h[d-1])/2],[Math.PI/2,0,0],6)})}},secondTable(n){let{L:e}=n;Cp(n,se+3.5,6.3),Rp(n,se+e.W/2+.75,2),Rp(n,se-e.W/2-.75,2.2)},balloons(n){let{g:e,env:t,cw:i}=n,s=new Qe,r=["#ef476f","#ffd166","#06d6a0","#4ea8de","#9b5de5","#f78c6b"];[[0,2.2,0],[.32,2,.1],[-.3,1.95,-.05],[.12,2.6,-.1],[-.16,2.48,.14],[.36,2.45,-.12]].forEach(([c,l,h],u)=>{s.sphere(.24,r[u],[c,l,h],[1,1.2,1]),s.cone(.05,.07,r[u],[c,l-.33,h]),s.cylC(.006,l-.3,"#eeeeee",[c/2,(l-.3)/2,h/2],[-(h/l)*.9,0,c/l*.9],4)});let a=s.mesh(Al);a.position.set(se+i/2+.05,1.2,2.1),e.add(a),t.updaters.push((c,l)=>{a.rotation.z=Math.sin(l*1.3)*.07,a.rotation.x=Math.sin(l*.9+1)*.05})},flags(n){let{M:e,g:t,env:i,L:s}=n,r=n.flagBase,o=[];for(let a=0;a<r.n;a++){let c=se-s.W/2+.4+(s.W-.8)/(r.n-1)*a;e.cyl(.03,.035,1.5,"#d9dde3",[c,r.y,r.z]),e.sphere(.055,"#d4af37",[c,r.y+1.53,r.z]);let l=new Qe;["#2e8b57","#ffffff","#d8402f"].forEach((u,d)=>l.boxC([.22,.42,.02],u,[.13+d*.22,0,0]));let h=l.mesh(Hi);h.position.set(c+.03,r.y+1.26,r.z),t.add(h),o.push(h)}i.updaters.push((a,c)=>{o.forEach((l,h)=>{l.rotation.y=Math.sin(c*2.2+h*.9)*.35})})},statue(n){let{M:e,g:t,env:i}=n,[s,r,o]=n.statuePos;e.cyl(.06,.09,.9,"#d9dde3",[s,r-.9,o]),e.cyl(.26,.3,.1,"#d4af37",[s,r-.05,o]);let a=new Qe,c="#f2c230";a.cylC(.62,.1,c,[0,.72,0],[Math.PI/2,0,0],24),a.torus(.62,.075,"#e0a81e",[0,.72,0]);for(let h=0;h<6;h++){let u=h/6*Math.PI*2;for(let d of[-1,1])a.cylC(.11,.05,"#e0a81e",[Math.cos(u)*.34,.72+Math.sin(u)*.34,d*.06],[Math.PI/2,0,0],10)}for(let h=0;h<8;h++){let u=h/8*Math.PI*2;a.boxC([.06,.26,.04],c,[Math.cos(u)*.86,.72+Math.sin(u)*.86,0],[0,0,u-Math.PI/2])}let l=a.mesh(new Ms({vertexColors:!0,shininess:90,specular:new me("#fff2b0"),emissive:new me("#6b4a00"),emissiveIntensity:.6}));l.position.set(s,r,o),t.add(l),i.updaters.push(h=>{l.rotation.y+=h*.9})}},qb=-.1;function Xb(n,e){let{S:t,M:i,F:s,warm:r,L:o,g:a}=n,{marketing:c=0,pizzaSchool:l=0,megaOven:h=0}=e,u=["#ef476f","#ffd166","#06d6a0","#4ea8de","#9b5de5"],d=se+o.W/2+.25,p=Math.min(c,5);for(let g=0;g<p;g++){let y=d+g*.42-(p-1)*.21+.6,m=(n.eave?n.eave.y:3.2)-.7;i.cylC(.012,.9,je,[y,m+.45,n.eave?n.eave.z:.4]),t.box([.36,1.2,.03],u[g%u.length],[y,m-.6,(n.eave?n.eave.z:.4)+.02]),t.box([.3,.06,.04],"#ffffff",[y,m-.36,(n.eave?n.eave.z:.4)+.04])}for(let g=0;g<Math.min(l,5);g++){let y=se-.8+g*.42,m=o.back+.16;t.box([.4,.5,.05],"#d4af37",[y,1.45+.25,m]),t.box([.32,.4,.04],"#fff8e7",[y,1.45+.25,m+.02]),t.box([.2,.04,.04],"#b5372a",[y,1.45+.34,m+.03]),t.box([.2,.03,.04],"#6b4428",[y,1.45+.2,m+.03])}for(let g=0;g<Math.min(h,4);g++){let y=o.ovenX+1.35+g*1.35,m=qb;t.box([1.1,.5,1],ia,[y,0,m]),a.add(Cn([1.05,.9,.95],"brick",[y,.5,m],[1.2,1]));let f=new Pe(Oe.dome(14,8),An("brick",2,1));f.scale.set(.58,.5,.52),f.position.set(y,1.4,m),f.castShadow=!0,a.add(f),t.box([.72,.44,.05],"#140d0a",[y,.66,m+.52]),r.box([.62,.3,.03],"#ffb35a",[y,.72,m+.55]),i.cylC(.04,.5,je,[y+.36,1.9,m-.3])}}var ut=(n,e,t,i)=>[se+e*(n.L.W/2+t),n.L.floorY,i],Yb={parasol(n){let{S:e,M:t}=n,[i,s,r]=ut(n,1,1.3,.6);t.cylC(.025,2.2,je,[i,s+1.1,r]),e.dome(1.05,ln,[i,s+2.25,r],[1,.4,1]),e.dome(.5,cn,[i,s+2.3,r],[1,.3,1])},sandcastle(n){let{S:e}=n,[t,i,s]=ut(n,-1,1.1,.5);e.box([.9,.22,.8],"#e8cf8f",[t,i+.11,s]),e.cyl(.13,.13,.42,"#e8cf8f",[t-.2,i+.32,s]),e.cyl(.13,.13,.42,"#e8cf8f",[t+.2,i+.32,s]),e.dome(.1,"#d8402f",[t+.2,i+.6,s],[1,1.2,1])},buoys(n){let{S:e}=n,[t,i,s]=ut(n,-1,.9,-.4);e.cyl(.2,.2,.46,"#ef476f",[t,i+.23,s]),e.cyl(.2,.2,.12,"#ffffff",[t,i+.5,s]),e.cyl(.2,.2,.46,"#ffd166",[t+.5,i+.23,s+.1])},mosaic(n){let{S:e}=n,[t,i,s]=ut(n,-1,1.3,-.9);e.box([1.3,1.9,.12],"#b5654a",[t,i+.95,s]),e.dome(.65,"#d9a07a",[t,i+1.9,s],[1,.45,.2]),e.box([1,.1,.14],"#f0d2a6",[t,i+.25,s])},pottery(n){let{S:e,F:t}=n,[i,s,r]=ut(n,-1,.7,1.7);for(let[o,a,c]of[[0,0,"#c97b5a"],[.45,.1,"#b5654a"],[.22,-.25,"#e7c9a0"]])e.cyl(.17,.12,.42,c,[i+o,s+.21,r+a]),t.ico(.15,"#4f8f47",[i+o,s+.5,r+a],[1,.7,1])},candles(n){let{S:e,F:t}=n,[i,s,r]=ut(n,1,.9,1.4);for(let o=0;o<3;o++){let a=i+(o-1)*.4;e.cyl(.07,.07,.22,cn,[a,s+.11,r]),t.ico(.04,"#ffd166",[a,s+.27,r])}},lilies(n){let{S:e,F:t}=n;for(let i of[1.8,.4]){let[s,r,o]=ut(n,-1,.8,i);e.box([.9,.3,.4],"#8d5a3b",[s,r+.15,o]);for(let a=0;a<4;a++)t.ico(.12,a%2?"#ffffff":"#f78c6b",[s-.3+a*.2,r+.42,o+a%2*.1])}},banners(n){let{S:e,M:t}=n;for(let i of[1.7,.9]){let[s,r,o]=ut(n,-1,-.15,i);t.cylC(.02,2.4,je,[s,r+1.2,o]),e.box([.5,1.2,.04],"#4a6fa5",[s+.25,r+1.5,o]),e.box([.14,.4,.05],"#e9c46a",[s+.25,r+1.5,o+.01])}},statuette(n){let{S:e}=n,[t,i,s]=ut(n,1,.9,-.2);e.cyl(.25,.3,.3,"#6b4f3a",[t,i+.15,s]),e.cyl(.12,.16,.5,"#b08d4a",[t,i+.55,s]),e.dome(.14,"#b08d4a",[t,i+.9,s])},chandelier(n){let{S:e,M:t,eave:i}=n;t.cylC(.012,.8,je,[se,i.y-.4,i.z-.5]),e.dome(.32,"#f6e7c1",[se,i.y-.95,i.z-.5],[1,.6,1],[Math.PI,0,0])},planters(n){let{S:e,F:t}=n;for(let i of[-1,1]){let[s,r,o]=ut(n,i,.9,2.2);e.box([.6,.9,.6],"#f2e3a6",[s,r+.45,o]),t.ico(.45,"#4f8f47",[s,r+1.25,o],[1,1.2,1])}},velvetRope(n){let{S:e,M:t}=n,i=[n.L.W/2+.6,n.L.W/2+2.4];for(let a of i){let[c,l,h]=ut(n,1,a,3);t.cylC(.02,1,je,[c,l+.5,h])}let[s,r,o]=ut(n,1,(i[0]+i[1])/2,3);e.box([i[1]-i[0],.04,.04],"#8c1d2e",[s,r+.9,o])},fountain(n){let{S:e}=n,[t,i,s]=ut(n,1,2.6,-.6);e.cyl(1,1,.25,"#d9d4c7",[t,i+.12,s]),e.cyl(.15,.15,.9,"#d9d4c7",[t,i+.6,s]),e.dome(.25,"#9fd3e6",[t,i+1,s],[1,.4,1])},laurels(n){let{S:e,F:t}=n,[i,s,r]=ut(n,-1,1.2,-1);e.box([.9,.9,.06],"#b08d4a",[i,s+1.6,r]);for(let o=0;o<10;o++){let a=o/10*Math.PI*2;t.ico(.09,"#4f8f47",[i+Math.cos(a)*.3,s+1.6+Math.sin(a)*.3,r+.05])}},amphora(n){let{S:e}=n,[t,i,s]=ut(n,1,.9,1.6);e.cyl(.14,.22,.6,"#c96a3d",[t,i+.3,s]),e.cyl(.08,.14,.2,"#c96a3d",[t,i+.7,s]),e.box([.2,.06,.06],"#c96a3d",[t-.22,i+.5,s]),e.box([.2,.06,.06],"#c96a3d",[t+.22,i+.5,s])}};Object.assign(mr,Yb);var Rn=[[1,1.2,.6],[-1,1.1,.4],[1,1,2.2]],Zb={flags(n,e,t){let{S:i,M:s}=n,[r,o,a]=ut(n,...Rn[t]);s.cylC(.02,2.4,je,[r,o+1.2,a]),i.box([.5,.3,.03],e,[r+.25,o+2.2,a])},umbrella(n,e,t){let{S:i,M:s}=n,[r,o,a]=ut(n,...Rn[t]);s.cylC(.025,2.2,je,[r,o+1.1,a]),i.dome(1,e,[r,o+2.2,a],[1,.4,1]),s.cylC(.02,.7,je,[r+.5,o+.35,a+.4]),i.cyl(.25,.25,.05,"#f6ead2",[r+.5,o+.72,a+.4])},planters(n,e,t){let{S:i,F:s}=n,[r,o,a]=ut(n,...Rn[t]);i.box([.8,.35,.5],"#8d5a3b",[r,o+.18,a]),s.ico(.3,e,[r,o+.5,a],[1.2,.8,1.2]),s.ico(.08,"#ffd166",[r-.2,o+.7,a]),s.ico(.08,"#ef476f",[r+.2,o+.66,a])},fountain(n,e,t){let{S:i}=n,[s,r,o]=ut(n,...Rn[t]);i.cyl(.9,.9,.22,"#d9d4c7",[s,r+.11,o]),i.cyl(.12,.12,.7,"#d9d4c7",[s,r+.5,o]),i.dome(.22,e,[s,r+.9,o],[1,.4,1])},statue(n,e,t){let{S:i}=n,[s,r,o]=ut(n,...Rn[t]);i.box([.6,.3,.6],"#d9d4c7",[s,r+.15,o]),i.cyl(.15,.2,.7,e,[s,r+.65,o]),i.dome(.15,e,[s,r+1.1,o])},banners(n,e,t){let{S:i,M:s}=n,[r,o,a]=ut(n,...Rn[t]);s.cylC(.02,2.6,je,[r,o+1.3,a]),i.box([.45,1.1,.04],e,[r+.25,o+1.6,a])},lanterns(n,e,t){let{S:i,M:s}=n,[r,o,a]=ut(n,...Rn[t]);s.cylC(.02,2,je,[r,o+1,a]),i.box([.2,.25,.2],e,[r,o+2.1,a])},kiosk(n,e,t){let{S:i}=n,[s,r,o]=ut(n,...Rn[t]);i.box([1.2,.9,.8],"#f6ead2",[s,r+.45,o]),i.box([1.4,.1,1],e,[s,r+1,o]),i.box([1,.08,.6],"#a8703f",[s,r+.92,o+.1])},dome(n,e,t){let{S:i}=n,[s,r,o]=ut(n,...Rn[t]);i.cyl(.6,.6,.8,"#f3ede0",[s,r+.4,o]),i.dome(.62,e,[s,r+.8,o],[1,.9,1])},wreath(n,e,t){let{S:i,F:s}=n,[r,o,a]=ut(n,...Rn[t]);i.box([.9,.9,.06],"#b08d4a",[r,o+1.6,a]);for(let c=0;c<10;c++){let l=c/10*Math.PI*2;s.ico(.09,e,[r+Math.cos(l)*.3,o+1.6+Math.sin(l)*.3,a+.05])}}},$b={zurich_flags:["flags","#d8402f",0],zurich_planters:["planters","#4f8f47",1],zurich_fountain:["fountain","#9fd3e6",2],monaco_flags:["flags","#d8402f",0],monaco_umbrella:["umbrella","#ffffff",1],monaco_statue:["statue","#c9a227",2],barcelona_banners:["banners","#f4a261",0],barcelona_planters:["planters","#4f8f47",1],barcelona_lanterns:["lanterns","#ffd166",2],madrid_umbrella:["umbrella","#d8402f",0],madrid_kiosk:["kiosk","#ffffff",1],madrid_flags:["flags","#ffd166",2],lisbon_banners:["banners","#2f7d6a",0],lisbon_planters:["planters","#4a6fa5",1],lisbon_lanterns:["lanterns","#ffd166",2],paris_flags:["flags","#1d4ed8",0],paris_umbrella:["umbrella","#ffffff",1],paris_statue:["statue","#8c7a5b",2],brussels_banners:["banners","#ffd166",0],brussels_kiosk:["kiosk","#d8402f",1],brussels_wreath:["wreath","#4f8f47",2],amsterdam_planters:["planters","#d8402f",0],amsterdam_lanterns:["lanterns","#ffd166",1],amsterdam_flags:["flags","#d8402f",2],london_flags:["flags","#d8402f",0],london_lanterns:["lanterns","#1d3557",1],london_statue:["statue","#8c7a5b",2],liverpool_banners:["banners","#d8402f",0],liverpool_flags:["flags","#1d4ed8",1],liverpool_planters:["planters","#4f8f47",2],berlin_flags:["flags","#ffd166",0],berlin_umbrella:["umbrella","#4f8f47",1],berlin_dome:["dome","#9aa3ab",2],warsaw_banners:["banners","#d8402f",0],warsaw_planters:["planters","#4f8f47",1],warsaw_statue:["statue","#8c7a5b",2],minsk_banners:["banners","#4f8f47",0],minsk_kiosk:["kiosk","#ffffff",1],minsk_lanterns:["lanterns","#ffd166",2],budapest_lanterns:["lanterns","#ffd166",0],budapest_dome:["dome","#9aa3ab",1],budapest_planters:["planters","#4f8f47",2],zagreb_flags:["flags","#d8402f",0],zagreb_umbrella:["umbrella","#ffffff",1],zagreb_wreath:["wreath","#4f8f47",2],belgrade_banners:["banners","#1d4ed8",0],belgrade_kiosk:["kiosk","#d8402f",1],belgrade_planters:["planters","#4f8f47",2],sofia_dome:["dome","#9aa3ab",0],sofia_lanterns:["lanterns","#ffd166",1],sofia_statue:["statue","#8c7a5b",2],bucharest_flags:["flags","#1d4ed8",0],bucharest_fountain:["fountain","#9fd3e6",1],bucharest_umbrella:["umbrella","#ffd166",2],istanbul_flags:["flags","#d8402f",0],istanbul_dome:["dome","#f3ede0",1],istanbul_lanterns:["lanterns","#ffd166",2],athens_wreath:["wreath","#4f8f47",0],athens_statue:["statue","#e9e4d8",1],athens_planters:["planters","#4f8f47",2],telaviv_umbrella:["umbrella","#1d4ed8",0],telaviv_banners:["banners","#ffffff",1],telaviv_fountain:["fountain","#9fd3e6",2]};for(let[n,[e,t,i]]of Object.entries($b))mr[n]=s=>Zb[e](s,t,i);function Kb(n,e){(n.L.decorSteps||Object.keys(mr)).slice(0,e).forEach(i=>{mr[i]&&mr[i](n)})}var zl=7;function Jb(n){let{g:e,env:t,L:i}=n,s=i.floorY,r=i.W,o=[{shirt:"#ef476f",hat:"cap",hatColor:"#ffd166",hair:"#3b2a1e",skin:"#c68a5c",hairStyle:"short"},{shirt:"#4ea8de",hat:"cap",hatColor:"#d8402f",hair:"#5a3a22",skin:"#f2c9a0",hairStyle:"long"},{shirt:"#2f6b5a",hat:"none",hair:"#1c1c22",skin:"#e0ac7e",hairStyle:"bun"}],a=[{skin:"#8d5a3b",hair:"#1c1c22"},{skin:"#f2c9a0",hair:"#7a2f1e"},{skin:"#e0ac7e",hair:"#2b1d14"}],c=p=>se-r*.36+p*(r*.72)/(zl-1),l=p=>se-r*.42+p*(r*.5)/(zl-1),h=(p,g)=>(p.group.position.set(g[0],g[1],g[2]),p.group.rotation.y=g[3],p.group.visible=!1,p.baseY=g[1],e.add(p.group),p),u=[],d=[];for(let p=0;p<zl;p++){let g=o[p%o.length];u.push(h(dr({...g,pants:"#2f3e46",apron:cn}),[c(p),s,.42,0]));let y=a[p%a.length];d.push(h(dr({...y,shirt:"#fdfdfd",pants:"#3d4a66",hat:"toque",apron:"#e9e2d2",hairStyle:"short"}),[l(p),s,-.3,0]))}t.staff={cashiers:u,cooks:d}}function Ip(n,e,t,i){let s=n.staff;if(!s)return;let r=i?gl(e,i):{cashier:0,cook:0},o=r.cashier,a=r.cook,c=e.customers.some(d=>d.state==="waiting"),l=e.pizzas.some(d=>d.stage==="ready"),h=e.pizzas.some(d=>d.stage==="dough"||d.stage==="topping"),u=e.pizzas.some(d=>d.stage==="load"||d.stage==="baking");s.cashiers.forEach((d,p)=>{if(d.group.visible=p<o,!d.group.visible)return;let g=p===0?c:p===1?l||c:!0,y=t*8+p*1.7;d.armR.rotation.x=g?-1+Math.sin(y)*.45:-.1+Math.sin(t*1.6+p)*.04,d.armL.rotation.x=g?-.5+Math.cos(y)*.25:-.1,d.group.position.y=d.baseY+(g?Math.abs(Math.sin(y*.5))*.02:Math.sin(t*1.4+p)*.006)}),s.cooks.forEach((d,p)=>{if(d.group.visible=p<a,!d.group.visible)return;let g=p===1?u:h,y=t*9+p*2.1;d.armR.rotation.x=g?-.95+Math.sin(y)*.5:-.1,d.armL.rotation.x=g?-.95+Math.sin(y+Math.PI)*.5:-.1,d.group.position.y=d.baseY+Math.sin(t*1.5+p*2)*.006})}function zp(n,e){n.neon&&(n.neon.l1.visible=e>=1,n.neon.l2.visible=e>=2)}function Dp(n,e,t=0){let i=.85+Math.sin(t*11)*.1+Math.sin(t*23)*.05;n.ovenMouthMat&&(n.ovenMouthMat.emissiveIntensity=(e?3.2:.7)*i)}var Up={pepperoni:"#b83227",mushroom:"#d8c7a8",olive:"#2f3d1c",basil:"#2e9a57",pepper:"#f0902a"},Qb=new me("#f3e2bd"),jb=new me("#d2893a"),ev=new me("#fff0b8"),tv=new me("#ffc94d"),nv=new Set(["dough","topping","load","ready"]),iv=14,sv=20,rv=new Mt({vertexColors:!0,toneMapped:!1}),Ul=new Mt({color:"#2b2d42",toneMapped:!1}),ov=mp("#c23b22",{roughness:.6});function av(n){return Dt("bubble|"+n,()=>{let e=new Qe,t=[Math.PI/2,0,0];e.cylC(.3,.02,"#2b2d42",[0,0,-.012],t,22),e.cylC(.27,.02,"#ffffff",[0,0,0],t,22),e.add(Oe.cone(3),"#ffffff",[0,-.3,0],[Math.PI,0,0],[.1,.14,.01]),e.cylC(.19,.02,"#d9993f",[0,0,.012],t,20),e.cylC(.155,.02,"#ffd76a",[0,0,.02],t,20);let i=Up[n]||"#ffffff";return[[0,.07],[-.07,-.04],[.07,-.04]].forEach(([s,r])=>e.cylC(.045,.02,i,[s,r,.03],t,10)),e.geometry()})}var gr={base:()=>Dt("pz-base",()=>{let n=new Qe;return n.cylC(.39,.035,"#ffffff",[0,0,0],[0,0,0],22),n.torus(.37,.058,"#e9dcc4",[0,.02,0],[Math.PI/2,0,0],22),n.geometry()}),ball:()=>Dt("pz-ball",()=>new Qe().sphere(.24,"#ffffff",[0,0,0],[1,1,1],[14,10]).geometry()),disc:()=>Dt("pz-disc",()=>new ri(1,1,1,22)),toppings:()=>Dt("pz-top",()=>{let n=new Qe;n.cylC(.058,.03,"#ffffff",[0,0,0],[0,0,0],8);for(let e=0;e<6;e++){let t=e/6*Math.PI*2+.3;n.cylC(.055,.03,"#ffffff",[Math.cos(t)*.2,0,Math.sin(t)*.2],[0,t,0],8)}return n.geometry()})},sa=class{constructor(e,t,i){this.env=e,this.camera=e.camera,this.loc=t,this.cfg=i,this.customers=new Map,this.pizzas=new Map,this.root=new ct,e.scene.add(this.root),this.time=0}setLocation(e){this.loc=e}sync(e){let t=[...e.customers].sort((o,a)=>o.id-a.id).slice(0,iv),i=new Set(t.map(o=>o.id));for(let[o,a]of this.customers)!i.has(o)&&!a.leaving&&this.removeView(this.customers,o);for(let o of t)this.customers.has(o.id)||this.customers.set(o.id,this.makeCustomer(o)),this.customers.get(o.id).data=o;let s=[...e.pizzas].sort((o,a)=>o.id-a.id).slice(0,sv),r=new Set(s.map(o=>o.id));for(let[o,a]of this.pizzas)!r.has(o)&&!a.leaving&&this.removeView(this.pizzas,o);for(let o of s){this.pizzas.has(o.id)||this.pizzas.set(o.id,this.makePizza(o));let a=this.pizzas.get(o.id);a.stage!==o.stage&&(a.pop=1,a.stage=o.stage),a.data=o}}leaveCustomer(e,t){let i=this.customers.get(e);i&&(i.leaving=!0,i.leaveHappy=t,i.leaveT=0,i.overhead.visible=!1)}leavePizza(e){let t=this.pizzas.get(e);t&&(t.leaving=!0,t.leaveT=0)}removeView(e,t){let i=e.get(t);i&&(this.root.remove(i.group),e.delete(t),i.fill&&i.fill.material.dispose(),i.crustMat&&(i.crustMat.dispose(),i.cheeseMat.dispose(),i.topMat.dispose()))}makeCustomer(e){let t=new ct,i=dr(Sp(e.id));t.add(i.group);let s=new ct;s.position.y=2.35;let r=new Pe(av(e.topping),rv),o=new ct;o.position.y=.46;let a=new Pe(Oe.box(),Ul);a.scale.set(.66,.11,.02);let c=new Pe(Oe.box(),new Mt({color:"#06d6a0",toneMapped:!1}));c.scale.set(.6,.065,.03),c.position.z=.012,o.add(a,c),s.add(r,o),t.add(s);let l=new Pe(Oe.cyl(8),Ul);l.scale.set(.5,2.9,.5),l.position.y=1.45,l.visible=!1,l.userData={kind:"customer",id:e.id},t.add(l);let h=this.queueSpot(0),u=h[0]+5+e.id%3,d=h[2]+3.5;return t.position.set(u,0,d),this.env.styleNew(t),this.root.add(t),{group:t,person:i,overhead:s,bubble:r,fill:c,hit:l,x:u,z:d,heading:Math.PI,id:e.id,data:e,leaving:!1,leaveT:0,phase:e.id*1.7%6.28,turn:e.id*37%100/100-.5}}makePizza(e){let t=new ct,i=Rs("#f3e2bd",{vertexColors:!0}),s=Rs("#fff0b8",{roughness:.55}),r=Rs("#ffffff",{vertexColors:!0,roughness:.6}),o=new Pe(gr.ball(),i);o.scale.set(1,.6,1),o.position.y=.1;let a=new Pe(gr.base(),i),c=new Pe(gr.disc(),ov);c.scale.set(.325,.03,.325),c.position.y=.012;let l=new Pe(gr.disc(),s);l.scale.set(.3,.03,.3),l.position.y=.02;let h=new Pe(gr.toppings(),r);h.position.y=.036;let u=new Pe(Oe.ring(),new Mt({color:"#ffd60a",toneMapped:!1,side:gn}));u.rotation.x=-Math.PI/2,u.position.y=.5,u.visible=!1;for(let p of[o,a])p.castShadow=!0;t.add(o,a,c,l,h,u);let d=new Pe(Oe.cyl(8),Ul);return d.scale.set(.5,.7,.5),d.position.y=.2,d.visible=!1,d.userData={kind:"pizza",id:e.id},t.add(d),this.env.styleNew(t),this.root.add(t),{group:t,crustMat:i,cheeseMat:s,topMat:r,ball:o,base:a,sauce:c,cheese:l,toppings:h,ring:u,hit:d,stage:e.stage,pop:0,leaving:!1,leaveT:0,id:e.id,data:e,x:0,y:0,z:0,s:1,inited:!1}}queueSpot(e){let t=this.loc.queueRowLength,i=e%t,s=Math.floor(e/t),r=this.loc.queueStart,o=this.loc.queueStep;return[r[0]+o[0]*i,0,r[2]+o[2]*s]}stationFor(e){let t=this.loc.stations;switch(e){case"dough":case"topping":return t.dough;case"load":return t.load;case"baking":return t.oven;default:return t.pass}}update(e,t){this.time+=e;let i=1-Math.exp(-e*6),s=t.customers.filter(l=>l.state==="waiting").sort((l,h)=>l.id-h.id),r=t.customers.filter(l=>l.state==="ordered").sort((l,h)=>l.id-h.id),o=new Map(s.map((l,h)=>[l.id,h])),a=new Map(r.map((l,h)=>[l.id,h]));for(let l of this.customers.values()){if(l.leaving){l.leaveT+=e;let C=l.leaveHappy?1:-1;l.x+=C*e*2.6,l.z+=e*1.1,l.group.position.set(l.x,0,l.z),l.person.group.rotation.y=C*1.1,Ll(l.person,this.time*11+l.phase,1),l.leaveHappy||(l.person.group.rotation.z=Math.sin(l.leaveT*26)*.08),l.group.scale.setScalar(Math.max(.001,1-Math.max(0,l.leaveT-1.1)*3)),l.leaveT>1.4&&this.removeView(this.customers,l.id);continue}let h=o.get(l.id),u,d;if(h!==void 0)[u,,d]=this.queueSpot(h);else{let C=a.get(l.id)||0;u=this.loc.window[0]+.5+C%4*.72,d=this.loc.window[2]+Math.floor(C/4)*.7}let p=u-l.x,g=d-l.z,y=Math.hypot(p,g),m=y>.06,f=Math.min(y,e*2.4);m&&(l.x+=p/y*f,l.z+=g/y*f),l.group.position.set(l.x,0,l.z);let _=(m?Math.atan2(p,g):Math.PI+l.turn*1.1+Math.sin(this.time*.6+l.phase)*.15)-l.heading;for(;_>Math.PI;)_-=Math.PI*2;for(;_<-Math.PI;)_+=Math.PI*2;l.heading+=_*Math.min(1,e*8),l.person.group.rotation.y=l.heading,Ll(l.person,this.time*10+l.phase,m?1:0),l.person.group.position.y=m?Math.abs(Math.sin(this.time*10+l.phase))*.035:Math.sin(this.time*1.5+l.phase)*.006,l.group.scale.setScalar(1);let M=Math.max(0,l.data.patience/l.data.maxPatience);l.fill.scale.x=Math.max(.001,.6*M),l.fill.position.x=-(.6-.6*M)/2,l.fill.material.color.set(M>.5?"#06d6a0":M>.25?"#ffd166":"#ef476f"),l.overhead.quaternion.copy(this.camera.quaternion),l.bubble.position.y=Math.sin(this.time*2.2+l.phase)*.03,l.bubble.rotation.z=M<.25?Math.sin(this.time*18)*.12:0}let c=new Map;for(let l of this.pizzas.values()){if(l.leaving)continue;let h=this.stationFor(l.data.stage);c.has(h)||c.set(h,[]),c.get(h).push(l)}for(let[l,h]of c){h.sort((p,g)=>p.id-g.id);let u=l===this.loc.stations.oven,d=u?.3:.56;h.forEach((p,g)=>{let y=(g-(h.length-1)/2)*d,m=l[0]+y,f=l[1]+(u?g%2*.012:0),b=l[2]+(u?0:g%2*.12-.06),_=u?.6:1;p.inited||(p.x=m,p.y=f,p.z=b,p.s=_,p.inited=!0),p.x+=(m-p.x)*i,p.y+=(f-p.y)*i,p.z+=(b-p.z)*i,p.s+=(_-p.s)*i,p.group.position.set(p.x,p.y,p.z)})}for(let l of this.pizzas.values()){if(l.leaving){l.leaveT+=e,l.group.scale.setScalar(Math.max(.001,l.s*(1-l.leaveT*3))),l.group.position.y+=e*1.5,l.leaveT>.34&&this.removeView(this.pizzas,l.id);continue}let h=l.data,u=h.q.dough>0,d=h.q.top>0;l.ball.visible=!u,l.base.visible=u,l.sauce.visible=u,l.cheese.visible=u,l.toppings.visible=d&&!!h.topping;let p=this.cfg.economy.styles[h.style],g=h.bakeTotal||(p?p.bakeSeconds:10),y=h.stage==="baking"?1-Math.max(0,h.bakeLeft)/g:h.stage==="ready"?1:0,m=Math.min(1,Math.max(0,y));l.crustMat.color.copy(Qb).lerp(jb,m),l.cheeseMat.color.copy(ev).lerp(tv,m),h.topping&&l.topMat.color.set(Up[h.topping]||"#ffffff"),l.pop=Math.max(0,l.pop-e*3.5);let f=Math.sin(l.pop*Math.PI)*.25;l.group.scale.set(l.s*(1+f),l.s*(1-f*.6),l.s*(1+f));let b=nv.has(h.stage);if(l.ring.visible=b,b){let _=1+Math.sin(this.time*6)*.08;l.ring.scale.setScalar(.95*_),l.ring.position.y=.3+Math.sin(this.time*3)*.03}}}pick(e){let t=[];for(let o of this.pizzas.values())o.leaving||t.push(o.hit);for(let o of this.customers.values())o.leaving||t.push(o.hit);let i=e.intersectObjects(t,!1),r=i.find(o=>o.object.userData.kind==="pizza")||i[0];return r?{kind:r.object.userData.kind,id:r.object.userData.id}:null}positionOf(e,t){let s=(e==="customer"?this.customers:this.pizzas).get(t);return s?[s.group.position.x,s.group.position.y+(e==="customer"?1.9:.3),s.group.position.z]:null}steamPoints(){let e=[];for(let t of this.pizzas.values())!t.leaving&&t.data.stage==="ready"&&e.push([t.x,t.y+.12,t.z]);return e}};var cv=36,lv=30,hv=34,ra=class{constructor(e){this.env=e,this.root=new ct,e.scene.add(this.root);let t=new Qt({color:"#ffd24a",emissive:new me("#8a5a00"),emissiveIntensity:.7});this.coins=[];for(let i=0;i<cv;i++){let s=new Pe(Oe.cyl(12),t);s.visible=!1,this.root.add(s),this.coins.push({m:s,life:0,vx:0,vy:0,vz:0,spin:0})}this.sparkMats={green:new Mt({color:"#8fe3a0",toneMapped:!1}),red:new Mt({color:"#ff6b81",toneMapped:!1}),gold:new Mt({color:"#ffe08a",toneMapped:!1})},this.sparks=[];for(let i=0;i<lv;i++){let s=new Pe(Oe.ico(0),this.sparkMats.green);s.visible=!1,this.root.add(s),this.sparks.push({m:s,life:0,vx:0,vy:0,vz:0})}this.puffs=[];for(let i=0;i<hv;i++){let s=new Mt({color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1}),r=new Pe(Oe.sphere(8,6),s);r.visible=!1,this.root.add(r),this.puffs.push({m:r,mat:s,life:0,max:1,vx:0,vy:0,vz:0,size:.2,grow:1})}this.smoke={pos:null,strength:0,timer:0},this.steam={points:[],timer:0},this.rain=this.buildRain(),this.bunting=this.buildBunting()}puff(e,t="gold",i=6){if(t==="gold"){let r=0;for(let o of this.coins)if(!(o.life>0)&&(o.m.position.set(e[0]+(Math.random()-.5)*.3,e[1],e[2]+(Math.random()-.5)*.3),o.m.scale.set(.085,.02,.085),o.m.visible=!0,o.life=.9+Math.random()*.4,o.vx=(Math.random()-.5)*2.2,o.vy=3+Math.random()*2.2,o.vz=(Math.random()-.2)*1.8,o.spin=8+Math.random()*10,++r>=i))break}let s=0;for(let r of this.sparks)if(!(r.life>0)&&(r.m.material=this.sparkMats[t]||this.sparkMats.green,r.m.position.set(e[0]+(Math.random()-.5)*.4,e[1]+.1,e[2]+(Math.random()-.5)*.4),r.m.visible=!0,r.life=.5+Math.random()*.3,r.vx=(Math.random()-.5)*2.4,r.vy=1.4+Math.random()*2,r.vz=(Math.random()-.5)*2.4,++s>=Math.ceil(i/2)+2))break}emitPuff(e,t,i,s,r,o,a){for(let c of this.puffs)if(!(c.life>0)){c.m.position.set(e[0]+(Math.random()-.5)*.1,e[1],e[2]+(Math.random()-.5)*.1),c.mat.color.set(t),c.size=i,c.grow=o,c.life=s,c.max=s,c.opacity=a,c.vx=.18+Math.random()*.2,c.vy=r*(.8+Math.random()*.4),c.vz=(Math.random()-.5)*.15,c.m.visible=!0;return}}setSmoke(e,t){this.smoke.pos=e,this.smoke.strength=t}setSteam(e){this.steam.points=e}buildRain(){let t=new Float32Array(2520);for(let r=0;r<420;r++){let o=(Math.random()-.5)*34,a=Math.random()*14,c=-8+Math.random()*24;t.set([o,a,c,o-.06,a+.6,c],r*6)}let i=new vt;i.setAttribute("position",new Yt(t,3));let s=new _o(i,new js({color:"#cfe6ff",transparent:!0,opacity:.5}));return s.visible=!1,s.frustumCulled=!1,this.root.add(s),s}buildBunting(){let e=new ct,t=new Qe,i=["#ef476f","#ffd166","#06d6a0","#4ea8de","#9b5de5"];for(let s of[-3.2,7.5])for(let r=0;r<26;r++){let o=r/25,a=-11+o*22.4,c=6.6-Math.sin(o*Math.PI)*1.1;t.add(Oe.cone(3),i[r%i.length],[a,c,s],[Math.PI,0,0],[.26,.5,.03])}return e.add(t.mesh(Hi,{cast:!1})),e.visible=!1,this.root.add(e),e}setEvents(e){let t=new Set(e.map(i=>i.id));this.rain.visible=t.has("rainyDay"),this.bunting.visible=t.has("foodFestival")}update(e){for(let s of this.coins){if(s.life<=0)continue;s.life-=e,s.vy-=9*e,s.m.position.x+=s.vx*e,s.m.position.y+=s.vy*e,s.m.position.z+=s.vz*e,s.m.rotation.x+=s.spin*e,s.m.rotation.z+=s.spin*.6*e;let r=Math.min(1,s.life*3);s.m.scale.set(.085*r,.02*r,.085*r),s.life<=0&&(s.m.visible=!1)}for(let s of this.sparks)s.life<=0||(s.life-=e,s.vy-=5*e,s.m.position.x+=s.vx*e,s.m.position.y+=s.vy*e,s.m.position.z+=s.vz*e,s.m.scale.setScalar(Math.max(1e-4,Math.min(1,s.life*2.4))*.07),s.life<=0&&(s.m.visible=!1));let t=this.smoke;if(t.pos&&(t.timer-=e,t.timer<=0)){t.timer=t.strength>.5?.14:.5;let s=1-(this.env.daylight??1),r=Math.round(215-s*120);this.emitPuff(t.pos,`rgb(${r},${r},${r+6})`,.2,2.6,.95,2.4,t.strength>.5?.5:.3)}let i=this.steam;if(i.timer-=e,i.timer<=0&&i.points.length){i.timer=.28;let s=i.points[Math.floor(Math.random()*i.points.length)];this.emitPuff(s,"#ffffff",.07,.9,.55,1.6,.4)}for(let s of this.puffs){if(s.life<=0)continue;s.life-=e;let r=1-s.life/s.max;s.m.position.x+=s.vx*e,s.m.position.y+=s.vy*e,s.m.position.z+=s.vz*e,s.m.scale.setScalar(s.size*(1+r*s.grow)),s.mat.opacity=s.opacity*Math.sin(Math.min(1,r*6)*Math.PI/2)*(1-r),s.life<=0&&(s.m.visible=!1)}if(this.rain.visible){let s=this.rain.geometry.attributes.position.array;for(let r=0;r<s.length;r+=6)s[r+1]-=e*16,s[r+4]-=e*16,s[r+1]<0&&(s[r+1]+=14,s[r+4]+=14);this.rain.geometry.attributes.position.needsUpdate=!0}this.bunting.visible&&(this.bunting.rotation.x=Math.sin(this.env.time*1.2)*.015)}};var Gi=n=>document.getElementById(n),uv=["customers","stretch","top","oven","serve","shop"];function Np(n){let e={};for(let r of uv){let o=document.querySelector(`#actions [data-action="${r}"]`);e[r]=o,o.addEventListener("click",()=>n(r))}let t=null,i=0;function s(r){t===null&&(t=r),t+=(r-t)*.25,Math.abs(r-t)<.5&&(t=r),Gi("cash").textContent=gt(t)}return{tickCash:s,setRate(r){Gi("rate").textContent=R("hud.rate",{rate:Ud(r)})},setGoal(r,o){Gi("goal").textContent=r?R("hud.goal",{goal:R(r.id)}):R("hud.goalDone")},setBadges(r){for(let[o,a]of Object.entries(r)){let c=e[o];if(!c)continue;let l=c.querySelector(".badge");l.textContent=a,l.hidden=a===0}},setHighlight(r){for(let[o,a]of Object.entries(e))a.classList.toggle("pulse",o===r)},setHint(r){let o=Gi("hint");r?(o.textContent=r,o.classList.remove("hidden")):o.classList.add("hidden")},setEvents(r){let o=Gi("events");o.innerHTML="";for(let a of r){let c=document.createElement("div");c.className="chip-event",c.textContent=`${R("event."+a.id+".name")} \xB7 ${Math.max(0,Math.ceil(a.left))}s`,o.appendChild(c)}},toast(r,o=""){if(i>=3)return;i++;let a=document.createElement("div");a.className="toast "+o,a.textContent=r,Gi("toasts").appendChild(a),setTimeout(()=>{a.classList.add("out"),setTimeout(()=>{a.remove(),i--},300)},2200)},float(r,o,a="gold"){let c=document.createElement("div");c.className="float "+a,c.textContent=o,c.style.left=r.x+"px",c.style.top=r.y+"px",Gi("floats").appendChild(c),setTimeout(()=>c.remove(),1100)},setPaused(r){document.body.classList.toggle("paused",r)}}}function kp(){document.querySelectorAll("[data-i18n]").forEach(n=>{n.textContent=R(n.dataset.i18n)}),document.querySelectorAll("[data-i18n-aria]").forEach(n=>{n.setAttribute("aria-label",R(n.dataset.i18nAria))}),document.title=R("app.title")}var Wi=n=>document.getElementById(n),di=null,Nl={onOpen:()=>{},onClose:()=>{}},aa=null;function Fp(n,e){aa=n,Nl=e,Wi("miniClose").addEventListener("click",()=>oa())}function Op(){oa()}function ca(){return di!==null}function oa(){if(!di)return;let n=di;di=null;for(let e of n.cleanups)e();Wi("mini").classList.add("hidden"),Wi("miniBody").innerHTML="",Nl.onClose()}function la({station:n,title:e,hint:t,build:i,onDone:s}){di&&oa(),Wi("miniTitle").textContent=e,Wi("miniHint").textContent=t;let r=Wi("miniBody");r.innerHTML="";let o={frames:[],cleanups:[],raf:0,done:!1};di=o,i(r,{finish:h=>{o.done||(o.done=!0,oa(),s(h))},frame:h=>o.frames.push(h),cleanup:h=>o.cleanups.push(h)}),Wi("mini").classList.remove("hidden"),Nl.onOpen(n);let c=performance.now(),l=h=>{if(di!==o)return;let u=Math.min(.1,(h-c)/1e3);c=h;for(let d of o.frames)d(u);di===o&&(o.raf=requestAnimationFrame(l))};o.raf=requestAnimationFrame(l),o.cleanups.push(()=>cancelAnimationFrame(o.raf))}function kl(n,e){let t=i=>e(i);window.addEventListener("keydown",t),n(()=>window.removeEventListener("keydown",t))}function Bp(n){let e=aa.economy.happyHour;la({station:null,title:R("mini.happy.title"),hint:R("mini.happy.hint",{needed:e.needed}),onDone:n,build(t,{finish:i,frame:s,cleanup:r}){let o=Et("div","happy-board"),a=Et("div","happy-count",R("mini.happy.count",{hits:0,total:e.targets}));t.append(o,a);let c=0,l=0,h=.3,u=!1,d=[],p=()=>{l++;let g=Et("button","coin-target");g.setAttribute("aria-label",R("mini.happy.coin")),g.style.left=14+Math.random()*68+"%",g.style.top=20+Math.random()*58+"%";let y={b:g,life:e.targetLifetimeSeconds,gone:!1};g.addEventListener("pointerdown",m=>{m.preventDefault(),!y.gone&&(y.gone=!0,c++,g.remove(),a.textContent=R("mini.happy.count",{hits:c,total:e.targets}))}),o.append(g),d.push(y)};s(g=>{if(!u){l<e.targets&&(h-=g,h<=0&&(p(),h=e.spawnEverySeconds));for(let y=d.length-1;y>=0;y--){let m=d[y];m.life-=g,(m.gone||m.life<=0)&&(m.b.remove(),d.splice(y,1))}l>=e.targets&&d.length===0&&(u=!0,i({hits:c,total:e.targets}))}}),r(()=>{u=!0})}})}function Hp(n){let e=aa.economy.manual;la({station:"dough",title:R("mini.dough.title"),hint:R("mini.dough.hint"),onDone:n,build(t,{finish:i,frame:s,cleanup:r}){let o=Et("div","dough-area"),a=Et("div","dough-blob");o.appendChild(a);let c=Et("div","bar"),l=Et("div","fill");c.appendChild(l);let h=Et("div","bar time"),u=Et("div","fill");h.appendChild(u),t.append(o,c,h);let d=0,p=e.doughWindowSeconds,g=null,y=f=>{d=Math.min(1,d+f/e.doughSwipesNeeded)};o.addEventListener("wheel",f=>{f.preventDefault(),y(Math.abs(f.deltaX)+Math.abs(f.deltaY))},{passive:!1}),kl(r,f=>{["ArrowLeft","ArrowRight","a","d","A","D"].includes(f.key)&&(f.preventDefault(),y(e.doughKeyStep))}),o.addEventListener("pointerdown",f=>{g=f.clientX;try{o.setPointerCapture(f.pointerId)}catch{}}),o.addEventListener("pointermove",f=>{g!==null&&(y(Math.abs(f.clientX-g)),g=f.clientX)});let m=()=>{g=null};o.addEventListener("pointerup",m),o.addEventListener("pointercancel",m),s(f=>{p-=f,a.style.transform=`scale(${1+d*.45}, ${1-d*.2})`,l.style.width=d*100+"%",u.style.width=Math.max(0,p/e.doughWindowSeconds)*100+"%",d>=1?i({finished:!0,timeLeftFrac:Math.max(0,p)/e.doughWindowSeconds}):p<=0&&i({finished:!1,timeLeftFrac:0})})}})}function Vp(n,e,t){la({station:"dough",title:R("mini.top.title"),hint:R("mini.top.hint"),onDone:t,build(i,{finish:s,cleanup:r}){let o=Et("div","wants",R("customer.wants",{topping:R("topping."+n.topping)})),a=Et("div","pizza-target"),c=Et("div","chips"),l=dv([n.topping,...e.filter(b=>b!==n.topping).slice(0,2)]),h=null,u=null,d=null,p=!1,g=b=>{h=b;for(let _ of c.children)_.classList.toggle("selected",_.dataset.topping===b)},y=()=>{h&&s({topping:h})},m=b=>{u&&(!p&&Math.hypot(b.clientX-d.x,b.clientY-d.y)<6||(p=!0,u.style.display="",u.style.left=b.clientX-40+"px",u.style.top=b.clientY-40+"px"))},f=b=>{if(!u)return;let _=u.dataset.topping,M=p;if(u.remove(),u=null,p=!1,!M)return g(h===_?null:_);let C=a.getBoundingClientRect();Math.hypot(b.clientX-(C.left+C.width/2),b.clientY-(C.top+C.height/2))<C.width/2+24&&s({topping:_})};window.addEventListener("pointermove",m),window.addEventListener("pointerup",f),r(()=>{window.removeEventListener("pointermove",m),window.removeEventListener("pointerup",f),u&&u.remove()}),a.addEventListener("click",y),kl(r,b=>{/^[1-3]$/.test(b.key)&&l[Number(b.key)-1]?g(l[Number(b.key)-1]):(b.key===" "||b.key==="Enter")&&(b.preventDefault(),y())});for(let b of l){let _=Et("div","chip-topping "+b,R("topping."+b));_.dataset.topping=b,_.addEventListener("pointerdown",M=>{M.preventDefault(),d={x:M.clientX,y:M.clientY},p=!1,u=Et("div","chip-topping ghost "+b,R("topping."+b)),u.dataset.topping=b,u.style.display="none",u.style.left=M.clientX-40+"px",u.style.top=M.clientY-40+"px",document.body.appendChild(u)}),c.appendChild(_)}i.append(o,a,c)}})}function Gp(n){let e=aa.economy.manual;la({station:"oven",title:R("mini.oven.title"),hint:R("mini.oven.hint"),onDone:n,build(t,{finish:i,frame:s,cleanup:r}){let o=Et("div","oven-track"),a=Et("div","zone");a.style.left=50-e.ovenSweetZone*100/2+"%",a.style.width=e.ovenSweetZone*100+"%";let c=Et("div","marker");o.append(a,c);let l=Et("button","big-tap",R("mini.oven.tap"));t.append(o,l);let h=0,u=0;s(y=>{d||(h+=y,u=(1-Math.cos(2*Math.PI*h/e.ovenMarkerPeriodSeconds))/2,c.style.left=u*100+"%")});let d=!1,p=0,g=()=>{if(d)return;d=!0,l.disabled=!0;let m=Math.abs(u-.5)<=e.ovenSweetZone/2,f=Et("div","stop-mark "+(m?"good":"miss"));f.style.left=u*100+"%",o.appendChild(f);let b=Et("div","stop-note "+(m?"good":"miss"),R(m?"mini.oven.stopped.good":"mini.oven.stopped.miss"));t.insertBefore(b,l),c.classList.add("frozen"),c.style.left=u*100+"%",p=setTimeout(()=>i({markerPos:u}),900)};r(()=>clearTimeout(p)),l.addEventListener("click",g),o.addEventListener("pointerdown",g),kl(r,y=>{(y.key===" "||y.key==="Enter")&&(y.preventDefault(),g())})}})}function Et(n,e,t){let i=document.createElement(n);return e&&(i.className=e),t!==void 0&&(i.textContent=t),i}function dv(n){let e=[...n];for(let t=e.length-1;t>0;t--){let i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}var yr=n=>document.getElementById(n),qi=null,Is=null,Ol="",pi=1;var ha=null;function zs(){return Is!==null}function ua(){return Is}function xn(){let n=ha;ha=null,Is=null,qi=null,yr("modal").classList.add("hidden"),yr("modalBody").innerHTML="",n&&n()}function Ds(n,e,t){Is=n,yr("modalTitle").textContent=e,yr("modal").classList.remove("hidden");let i=yr("modalBody");i.innerHTML="",Ol="",qi=()=>{i.innerHTML="",t(i)},qi()}function Xp(n){qi&&Is!=="collect"&&n!==Ol&&(Ol=n,qi())}function ie(n,e,t){let i=document.createElement(n);return e&&(i.className=e),t!==void 0&&(i.textContent=t),i}function Nt(n,e,{disabled:t=!1,primary:i=!1}={}){let s=ie("button","btn"+(i?" primary":""),n);return s.disabled=t,s.addEventListener("click",e),s}function pv(n){let e=ie("div","segmented amount");for(let t of[1,5,10,"max"]){let i=ie("button","seg"+(pi===t?" on":""),t==="max"?R("action.amountMax"):"\xD7"+t);i.addEventListener("click",()=>{pi=t,n()}),e.append(i)}return e}function Wp(n,e,t){return n===0?R("action.buy",{cost:gt(t)}):pi===1?R("action.buy",{cost:gt(e)}):R("action.buyN",{n,cost:gt(e)})}function fv(n,e,t,i){let s=t.economy.upgrades[n],r=e+1;switch(n){case"oven":return{slots:s.ovenSlotsBase+s.ovenSlotsPerLevel*r};case"counter":return{slots:s.maxQueueBase+s.maxQueuePerLevel*r};case"cheese":return{pct:Math.round(s.cheeseMultPerLevel*r*100)};case"decor":{let o=ai(i,t);return{pct:Math.round(s.trafficPerLevel*r*100),item:i.decorShown<o.length?". Adds: "+R("decor.step."+o[i.decorShown]):""}}case"neon":return{pct:Math.round(s.trafficPerLevel*100)};case"marketing":return{pct:Math.round(s.trafficMultPerLevel*r*100)};case"pizzaSchool":return{pct:Math.round(s.payMultPerLevel*r*100)};case"megaOven":return{slots:s.ovenSlotsPerLevel*r};default:return s.group!=="city"?{}:s.effect==="oven"?{slots:s.perLevel*r}:{pct:Math.round(s.perLevel*r*100)}}}function Yp(n,e,t){Ds("shop",R("shop.title"),i=>{let s=on(n,e);i.append(ie("h3","",R("shop.upgrades"))),i.append(pv(()=>qi()));let r=(U,W)=>{let L=e.economy.upgrades[U],k=n.upgrades[U],G=k>=L.maxLevel,K=L.requires?.franchises||0,Y=W&&n.franchise.count<K,Z=Y||G?{n:0,cost:0}:Es(L,k,pi,n.cash),j=Z.cost||Vn(L,k),te=ie("div","row"+(Y?" locked":"")),ce=ie("div","info");ce.append(ie("b","",R("upgrade."+U+".name")),ie("small","",Y?R("shop.needsFranchise",{n:K}):G?R("action.maxed"):R("upgrade."+U+".desc",fv(U,k,e,n))),ie("small","lvl",`${k}/${L.maxLevel}`));let X=Y?R("action.locked"):G?R("action.maxed"):Wp(Z.n,Z.cost,j);return te.append(ce,Nt(X,()=>t.buy(U,pi),{disabled:G||Y||Z.n===0})),te};for(let U of Object.keys(e.economy.upgrades)){let W=e.economy.upgrades[U];W.enabled===!1||W.group==="empire"||W.group==="city"||i.append(r(U,!1))}i.append(ie("h3","",R("shop.empire"))),i.append(ie("p","muted",R("shop.empireDesc")));for(let U of Object.keys(e.economy.upgrades)){let W=e.economy.upgrades[U];W.enabled===!1||W.group!=="empire"||i.append(r(U,!0))}let o=Object.keys(e.economy.upgrades).filter(U=>{let W=e.economy.upgrades[U];return W.group==="city"&&W.enabled!==!1&&(n.cityVisited||[]).includes(W.requires.city)});i.append(ie("h3","",R("shop.cityUpgrades"))),o.length===0&&i.append(ie("p","muted",R("shop.cityUpgradesNone")));for(let U of o)i.append(r(U,!1));i.append(ie("h3","",R("shop.cities"))),i.append(ie("p","muted",R("shop.citiesDesc",{city:R("city."+Di(n,e).id+".name")}))),i.append(Nt(R("map.open"),()=>t.openMap(),{primary:!0})),i.append(ie("h3","",R("shop.staff")));for(let U of Object.keys(e.economy.staff)){let W=e.economy.staff[U],L=n.staff[U],k=L>=W.maxLevel,G=Ko(n,U,L),K=Q=>Ko(n,U,Q)?0:Vn(W,Q),Y=k?{n:0,cost:0}:Es(W,L,pi,n.cash,K),Z=Y.cost||K(L),j=U==="cashier"?R("staff.cashier.desc",{secs:s.cashierOrderSec.toFixed(1)}):R("staff.cook.desc",{speed:s.cookSpeed.toFixed(1)}),te=ie("div","row"),ce=ie("div","info");ce.append(ie("b","",R("staff."+U+".name")),ie("small","",j),ie("small","lvl",L===0?R("staff.notHired"):R("staff.level",{level:L})));let X=G&&pi===1?R("action.hireFree"):Wp(Y.n,Y.cost,K(L));te.append(ce,Nt(k?R("action.maxed"):X,()=>t.hire(U,pi),{disabled:k||Y.n===0,primary:L===0})),i.append(te)}i.append(ie("h3","",R("shop.shops")));let a=e.economy.shops,c=n.shops||1,l=n.franchise.count>=a.requiresFranchises,h=c>=a.maxShops,u=h?0:Math.ceil(a.baseCost*Math.pow(a.growth,c-1)),d=ie("div","row"+(l?"":" locked")),p=ie("div","info");p.append(ie("b","",R("shop.openShop")),ie("small","",h?R("shop.allOpen"):l?R("shop.shopsDesc",{open:c,max:a.maxShops,mult:a.multiplierPerShop}):R("shop.shopsLocked",{n:a.requiresFranchises})),ie("small","lvl",`${c}/${a.maxShops}`));let g=l?h?R("action.maxed"):R("action.open",{cost:gt(u)}):R("action.locked");d.append(p,Nt(g,()=>t.openShop(),{disabled:!l||h||n.cash<u,primary:l&&!h})),i.append(d),i.append(ie("h3","",R("shop.recruit")));let y=e.economy.recruit,m=n.franchise.count>=y.requiresFranchises;m||i.append(ie("p","muted",R("shop.recruitLocked")));let f=ar(n,e).recruitCap;for(let U of["cashier","cook"]){let W=n.staffing[U]||0,L=W>=f,k=n.staff[U]>0,G=L?0:Math.ceil(y[U].baseCost*Math.pow(y[U].growth,W)),K=ie("div","row"+(m?"":" locked")),Y=ie("div","info");Y.append(ie("b","",R("recruit."+U+".name")),ie("small","",k?R("recruit."+U+".desc",{n:W,max:f}):R("recruit.needHire",{role:R("staff."+U+".name")})));let Z=m?L?R("action.maxed"):R("action.recruit",{cost:gt(G)}):R("action.locked");K.append(Y,Nt(Z,()=>t.recruit(U),{disabled:!m||L||!k||n.cash<G,primary:m&&k&&!L})),i.append(K)}i.append(ie("h3","",R("shop.franchise")));let b=ie("div","row"),_=ie("div","info"),M=As(n,e),C=e.economy.prestige.tiers,E=ci(n,e),A=C.find(U=>U.minFranchises>n.franchise.count);_.append(ie("b","",R("franchise.title")),ie("small","",M?R("franchise.ready")+" "+R("franchise.gain",{points:ki(n,e)}):R("franchise.locked",{target:gt(Ni(n,e)),have:gt(Ui(n))})),ie("small","",R("franchise.now",{tier:R("tier."+C[E].id)})+(A?". "+R("franchise.next",{tier:R("tier."+A.id)}):"")),ie("small","lvl",R("franchise.points",{points:n.franchise.points})+" "+R("franchise.traffic",{pct:Math.round((Yo(n,e)-1)*100)})+" "+R("franchise.ovens",{x:cr(n,e).toFixed(1)}))),b.append(_,Nt(R("action.franchise"),()=>t.franchise(),{disabled:!M})),i.append(b),i.append(ie("h3","",R("shop.starterPack")));let D=ie("div","row"),x=ie("div","info");x.append(ie("b","",R("shop.starterPack")),ie("small","",R("shop.starterPackDesc"))),D.append(x,Nt(mv(e),()=>t.stub("starterPack"))),i.append(D),i.append(ie("h3","",R("shop.ovenSkins")));let w=ie("div","row"),F=ie("div","info");F.append(ie("b","",R("shop.ovenSkins")),ie("small","",R("shop.ovenSkinsDesc"))),w.append(F,Nt(R("action.soon"),()=>t.stub("ovenSkins"))),i.append(w)})}function mv(n){return n.economy.monetizationStubs.starterPack.priceLabel}function Zp(n,e,t){let i=1;Ds("collect",R("collect.title"),s=>{s.innerHTML="",s.append(ie("p","lead",R("collect.body",{duration:ll(n.elapsed)})));let r=ie("div","big-amount",R("collect.earned",{amount:cl(n.earned*i)}));s.append(r),n.capped&&s.append(ie("p","muted",R("collect.capped",{cap:ll(e.economy.time.offlineCapSeconds)}))),i>1&&s.append(ie("p","muted",R("collect.boosted")));let o=ie("div","stack"),a=Nt(i>1?`${R("action.collect")} x${i}`:R("action.collect"),()=>{ha=null,xn(),t.collect(i)},{primary:!0});if(o.append(a),i===1){let c=Nt(R("action.adDouble"),async()=>{c.disabled=!0;let l=await t.watchAd();Is==="collect"&&(l&&(i=2),qi())});o.append(c,ie("small","muted",R("action.adDoubleHint")))}s.append(o)}),ha=()=>t.collect(1)}function $p(n,e,t){Ds("franchise",R("franchise.title"),i=>{let s=ki(n,e),o=e.economy.prestige.tiers.find(c=>c.minFranchises>n.franchise.count);i.append(Xo(n,e)?ie("p","lead",R("franchise.early",{pay:e.economy.earlyFranchises.payMult,customers:e.economy.earlyFranchises.customerMult,need:Math.round((1-e.economy.earlyFranchises.requirementMult)*100)})):null,ie("p","lead",R("franchise.explain",{bonus:Math.round(e.economy.prestige.bonusPerPoint*100),traffic:Math.round((e.economy.prestige.trafficPerFranchise||0)*100)})),ie("p","",R("franchise.trafficNext",{pct:Math.round((Yo(n,e,n.franchise.count+1)-1)*100)})),ie("p","",R("franchise.nextCost",{target:gt(Ni({franchise:{count:n.franchise.count+1}},e))})),ie("p","",R("franchise.gain",{points:s})+(o?" "+R("franchise.next",{tier:R("tier."+o.id)})+".":"")),ie("p","muted",R("franchise.resets")),ie("p","muted",R("franchise.keeps")),ie("p","muted",R("franchise.points",{points:n.franchise.points})));let a=ie("div","stack");a.append(Nt(R("action.franchise"),()=>{xn(),t.confirmFranchise()},{primary:!0})),a.append(Nt(R("action.cancel"),()=>xn())),i.append(a)})}function Xi(n,e){Ds("settings",R("settings.title"),t=>{t.append(qp(R("settings.sound"),n.settings.sound,o=>e.setSound(o)),qp(R("settings.notify"),n.settings.notify,o=>e.setNotify(o),R("settings.notifyDesc")),Fl(R("settings.look"),R("settings.lookDesc"),["3d","2d"],n.settings.look||"3d",o=>e.setLook(o),o=>R("settings.look."+o)),Fl(R("settings.graphics"),R("settings.graphicsDesc"),["auto","high","low"],n.settings.graphics||"auto",o=>e.setGraphics(o),o=>R("settings.graphics."+o)),Fl(R("settings.theme"),R("settings.themeDesc"),["light","dark","system"],n.settings.theme||"light",o=>e.setTheme(o),o=>R("settings.theme."+o)));let i=ie("button","version-tap",`${R("app.version")}`),s=0;i.addEventListener("click",()=>{s++,s>=5&&(s=0,e.openDebug())}),t.append(i),t.append(ie("p","keys-help",R("settings.keys")));let r=ie("div","stack");r.append(Nt(R("action.reset"),()=>{globalThis.confirm(R("action.confirmReset"))&&e.reset()})),t.append(r)})}function Fl(n,e,t,i,s,r){let o=ie("div","row"),a=ie("div","info");a.append(ie("b","",n),ie("small","",e));let c=ie("div","segmented");for(let l of t){let h=ie("button","seg"+(l===i?" on":""),r(l));h.addEventListener("click",()=>s(l)),c.append(h)}return o.append(a,c),o}function qp(n,e,t,i){let s=ie("div","row"),r=ie("div","info");r.append(ie("b","",n)),i&&r.append(ie("small","",i));let o=ie("button","switch"+(e?" on":""));return o.setAttribute("role","switch"),o.setAttribute("aria-checked",String(e)),o.addEventListener("click",()=>t(!o.classList.contains("on"))),s.append(r,o),s}function Bl(n){Ds("debug",R("debug.title"),e=>{let t=[["debug.addCash",n.addCash,1e3],["debug.addCashBig",n.addCash,2e4],["debug.skip",n.skipHour],["debug.rain",n.event,"rainyDay"],["debug.festival",n.event,"foodFestival"],["debug.night",n.toggleNight],["debug.away",n.simulateAway],["debug.franchiseReady",n.franchiseReady],["debug.resetAll",n.wipe]],i=ie("div","stack");for(let[s,r,o]of t)i.append(Nt(R(s),()=>r(o)));e.append(i)})}var gv="http://www.w3.org/2000/svg";function Ls(n,e={}){let t=document.createElementNS(gv,n);for(let[i,s]of Object.entries(e))t.setAttribute(i,String(s));return t}function yv(n,e,t,i){let a=Ts(e),c=-10,l=36,h=57,u=30,d=m=>24+(m.map.lon-c)/(l-c)*(300-24*2),p=m=>24+(h-m.map.lat)/(h-u)*(230-24*2),g=a.filter(m=>(n.cityVisited||[]).includes(m.id)),y=Ls("svg",{viewBox:"0 0 300 230",class:"citymap",role:"img","aria-label":R("map.title")});y.append(Ls("rect",{x:0,y:0,width:300,height:230,rx:14,class:"cm-sea"})),g.length>1&&y.append(Ls("polyline",{class:"cm-route",points:g.map(m=>`${d(m)},${p(m)}`).join(" ")}));for(let m of a){let f=m.id===t.id?"here":(n.cityVisited||[]).includes(m.id)?"visited":m.id===i?.id?"next":"locked",b=Ls("g",{class:"cm-city "+f});if(b.append(Ls("circle",{cx:d(m),cy:p(m),r:f==="here"?8:f==="locked"?4.5:6.5})),f!=="locked"){let _=m.labelPos||"right",M=_==="left"?-10:_==="right"?10:0,C=_==="above"?-11:_==="below"?17:4,E=_==="left"?"end":_==="right"?"start":"middle",A=Ls("text",{x:d(m)+M,y:p(m)+C,"text-anchor":E});A.textContent=R("city."+m.id+".name"),b.append(A)}y.append(b)}return y}function _v(n,e,t,i,s,r){let o=(n.cityVisited||[]).includes(t.id),a=t.id===i.id?R("map.here"):o?R("map.visited"):t.id===s?.id?R("map.next"):R("map.locked"),c=ie("div","info");c.append(ie("b","",R("city."+t.id+".name")),ie("small","",R("map.multiplier",{mult:t.multiplier})+" \xB7 "+a));let l=R("action.locked"),h=!0,u=()=>{};if(t.id===i.id)l=R("map.here");else if(o)l=R("map.travel"),h=!1,u=()=>r.move(t.id);else if(t.id===s?.id){let p=n.cash<t.relocationCost;c.append(ie("small","lvl",R("map.requires",{cost:gt(t.relocationCost)}))),p&&c.append(ie("small","lvl",R("map.needCash",{cost:gt(t.relocationCost)}))),l=R("map.buy",{cost:gt(t.relocationCost)}),h=p,u=()=>r.move(t.id)}t.upgrade&&c.append(ie("small","",R("map.unlocksUpgrade",{upgrade:R("upgrade."+t.upgrade+".name")})));let d=ie("div","row"+(t.id===i.id?" current":""));return d.append(c,Nt(l,u,{disabled:h,primary:!h&&t.id!==i.id})),d}function Hl(n,e,t){qo(n,e)&&Ds("map",R("map.title"),i=>{let s=Di(n,e),r=Wo(n,e);i.append(ie("p","lead",R("map.intro"))),i.append(yv(n,e,s,r));for(let c of Ts(e))i.append(_v(n,e,c,s,r,t));let o=ai(n,e).length,a=Math.min(n.upgrades.decor,o)-(n.decorShown||0);i.append(ie("h3","",R("map.decorTitle"))),a>0?(i.append(ie("p","",R("map.packed",{n:a,city:R("city."+s.id+".name")}))),i.append(Nt(R("map.decorate"),()=>t.redecorate(),{primary:!0}))):i.append(ie("p","muted",R("map.decorAll"))),i.append(Nt(R("action.close"),()=>xn()))})}var fi=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function vv(n){n.style.fontSize="22px";let e=22;for(;(n.scrollHeight>n.clientHeight||n.scrollWidth>n.clientWidth)&&e>4;)e-=.5,n.style.fontSize=e+"px"}function Kp(){let n=document.getElementById("signs"),e=[];function t(r){n.innerHTML="",e=r.map(o=>{let a=document.createElement("div");return a.className="sign-label "+o.kind+(o.size?" board":""),n.appendChild(a),{spec:o,el:a,html:""}})}function i(r,o,a){if(r.kind==="menu"){let c=Object.entries(a.economy.styles).filter(([l,h])=>h.enabled&&o.styles[l]).slice(0,3).map(([l,h])=>`<div class="line"><span>${fi(R("style."+l))}</span><b>${gt(h.basePrice)}</b></div>`);return`<div class="title">${fi(R("sign.menu.title"))}</div>${c.join("")}`}return r.kind==="neon"?fi(R("sign.neon")):r.kind==="shop"?fi(R("sign.shop",{n:r.n})):r.kind==="shop"?fi(R("sign.shop",{n:r.n})):r.kind==="shopname"?fi(R("app.title")):r.kind==="franchise"?fi(R("sign.franchise",{count:o.franchise.count})):fi(R("sign.sandwich"))}function s(r,o,a){let c=o.upgrades.neon>=1;for(let l of e){if(!(l.spec.kind!=="neon"||c)){l.el.style.display="none";continue}let u=i(l.spec,o,a);u!==l.html&&(l.el.innerHTML=u,l.html=u);let d=r.toScreen(l.spec.pos);if(l.el.style.display=d.front?"":"none",l.spec.size){let[g,y]=l.spec.size,m=l.spec.pos,f=r.toScreen([m[0]+g/2,m[1],m[2]]),b=r.toScreen([m[0],m[1]+y/2,m[2]]),_=2*Math.abs(f.x-d.x),M=2*Math.abs(b.y-d.y);l.el.style.left=d.x+"px",l.el.style.top=d.y+"px",l.el.style.width=_+"px",l.el.style.height=M+"px";let C=Math.round(_)+"x"+Math.round(M)+"|"+l.html;C!==l.fitKey&&(l.fitKey=C,vv(l.el));continue}let p=(l.el.offsetWidth||100)/2+6;l.el.style.left=Math.min(d.w-p,Math.max(p,d.x))+"px",l.el.style.top=d.y+"px"}}return{setSpecs:t,update:s}}var Vl=.1,Jp=20,xv=60,Zt=n=>document.getElementById(n),ge,O,Xe,Qp,mi=null,hn=null,nf="",Xl=null,un,Yi,Ee,Xn=null,da=0,ql=performance.now(),Gl=0,jp="",ef=-1e9;async function Mv(){ge=await Ld(),zd(ge.strings),kp();let n=kd(),e=Date.now();O=n||Ho(ge,e),ge.locations[O.location]||(O.location=Di(O,ge).background),hn=sf(),Xe=_p(Zt("scene"),hn),un=new sa(Xe,hn,ge),Yi=new ra(Xe),Ee=Np(cf),Xl=Kp(),ya(),Fp(ge,{onOpen:t=>Xe.focus(t?hn.stations[t]:null),onClose:()=>Xe.focus(null)}),Vo(O.settings.sound),Zl(O.settings.theme||"light"),Xe.setQuality(O.settings.graphics||"auto"),Xe.setLook(O.settings.look||"3d"),pl(),it("session_start_state",{fresh:!n}),window.addEventListener("resize",()=>Xe.resize()),window.addEventListener("orientationchange",()=>Xe.resize()),Xe.resize(),zv(),Dv(),n&&Yl(e),Zt("loading").classList.add("hidden"),requestAnimationFrame(df),new URLSearchParams(location.search).has("debug")&&Zt("btnDebug").classList.remove("hidden"),window.pizzaStand={get state(){return O},get layout(){return hn},cfg:ge,debug:$l(),env:Xe,actors:un}}function wv(){return ge.locations[O.location]}function sf(){let n=ci(O,ge),e=Pp(wv(),ge.economy.prestige.tiers[n],n);return e.decorSteps=ai(O,ge),e}function rf(){return`${O.location}|${O.shops}|${ci(O,ge)}|${O.decorShown}|${O.upgrades.marketing}|${O.upgrades.pizzaSchool}|${O.upgrades.megaOven}`}function ya(n=!0){hn=sf(),mi&&(Xe.scene.remove(mi),mi.traverse(e=>{e.geometry&&e.geometry.dispose()})),Xe.glowMats.length=0,Xe.nightFades.length=0,Xe.updaters.length=0,Xe.signs=[],mi=new ct,mi.add(xp(hn,Xe)),Qp=Lp(hn,Xe,{decor:O.decorShown,empire:{marketing:O.upgrades.marketing,pizzaSchool:O.upgrades.pizzaSchool,megaOven:O.upgrades.megaOven}}),mi.add(Qp),Xe.styleNew(mi),Xe.scene.add(mi),Xe.setLocation(hn,n),un.setLocation(hn),Xl.setSpecs(Xe.signs),nf=rf()}function of(n){let e=ip(O,ge,n);if(!e.ok)return e.reason==="cash"?Ee.toast(R("toast.notEnough")):e.reason==="order"?Ee.toast(R("map.notNext")):void 0;ya(),St.whoosh(),Ee.toast(R("toast.cityMoved",{city:R("city."+e.city+".name")})),it(e.first?"city_reached":"city_visit",{city:e.city,cost:e.cost}),dn()}function af(){if(!sp(O,ge).ok)return Ee.toast(R("map.decorFull"));ya(!1),St.bell(),Ee.toast(R("toast.decorBack")),dn()}function dn(){let n=Date.now();Xn||(O.savedAt=n),Fd(O)}function Yl(n=Date.now()){let e=lp(O,n,ge);if(!(e.rawSeconds<xv)){if(e.earned<=0){xl(O,e,ge,1),O.savedAt=n;return}Xn=e,Zp(e,ge,{collect:t=>{Xn&&(xl(O,e,ge,t),Xn=null,O.savedAt=Date.now(),it("offline_collect",{seconds:Math.round(e.elapsed),earned:Math.floor(e.earned*t),multiplier:t,capped:e.capped}),dn())},watchAd:()=>Sv(ge.economy.monetizationStubs.offlineBoostAd)})}}function Sv(n){return it("ad_offline_boost_requested"),new Promise(e=>{setTimeout(()=>{it("ad_offline_boost_completed"),Ee.toast(R("toast.adStub")),e(!0)},n.placeholderSeconds*1e3)})}function br(n){switch(n.type){case"arrived":case"order_taken":St.pop();break;case"stage":n.stage==="ready"&&St.bell();break;case"served":{St.cash(),un.leaveCustomer(n.customerId,!0),un.leavePizza(n.pizzaId);let e=hn.register,t=un.positionOf("customer",n.customerId)||[e[0],1.6,e[2]],i=Xe.toScreen([t[0],t[1]+.4,t[2]]);Ee.float(i,"+"+gt(n.amount),"gold"),n.tip>=.5&&Ee.float({x:i.x,y:i.y-26},R("toast.tip",{tip:gt(n.tip)}),"tip"),Yi.puff([e[0],1.5,e[2]+.2],"gold",n.big?16:7),n.big&&Xe.shakeCam(.12),it("sale",{total:Math.floor(n.total),customerType:n.customerType,wrongTopping:n.wrongTopping,auto:!!n.auto}),O.flags.firstSale||(O.flags.firstSale=!0,it("first_sale"));break}case"angry":St.angry(),un.leaveCustomer(n.customerId,!1),Ee.toast(R("toast.angry",{name:R("customer.name."+n.nameIdx),penalty:gt(n.penalty)}),"bad"),Xe.shakeCam(.04),it("customer_angry",{customerType:n.customerType});break;case"turned_away":{let e=performance.now();e-ef>8e3&&(ef=e,Ee.toast(R("customer.turnedAway"),"bad"),it("customer_turned_away",{queueFull:!0}));break}case"event_start":St.bell(),Ee.toast(R("toast.eventStart",{event:R("event."+n.id+".name")})),it("event_start",{id:n.id});break;case"event_end":Ee.toast(R("toast.eventEnd",{event:R("event."+n.id+".name")}));break;case"style_unlocked":Ee.toast(R("toast.unlocked",{style:R("style."+n.style)}));break;case"bonus_ready":St.bell(),Ee.toast(R("toast.bonusReady"));break;case"franchise_ready":St.bell(),Ee.toast(R("toast.franchiseReady")),it("franchise_ready",{count:O.franchise.count});break;case"tutorial_step":it("tutorial_step",{step:n.step});break;case"tutorial_done":Ee.toast(R("tut.done")),it("tutorial_done");break;case"idle_staff":{let e=R("staff."+n.role+".name");Ee.toast(R("toast.staffIdle",{role:e})),Ev(R("toast.staffIdle",{role:e}));break}default:break}}function Ev(n){if(!(!O.settings.notify||!document.hidden)&&!(typeof Notification>"u"||Notification.permission!=="granted"))try{new Notification(R("app.title"),{body:n})}catch{}}function Tv(){return O.customers.filter(n=>n.state==="waiting").sort((n,e)=>n.id-e.id)[0]}function Av(n){return O.pizzas.filter(e=>e.stage===n).sort((e,t)=>e.id-t.id)[0]}function vr(n){if(O.tutorialDone||n==="shop"||n==="settings")return!0;let e=ge.economy.tutorial[O.tutorialStep];return!e||e.highlight===n}var Cv={dough:"stretch",topping:"top",load:"oven",ready:"serve"};function ga(){Ee.toast(R("tut.locked"),"bad"),St.angry()}function cf(n){if(!vr(n))return ga();if(St.click(),n==="customers")return lf();if(n==="shop")return Rv();if(n==="stretch")return _r("dough");if(n==="top")return _r("topping");if(n==="oven")return _r("load");if(n==="serve")return _r("ready")}function lf(n){let e=n?li(O,n):Tv();if(!e||e.state!=="waiting")return Ee.toast(R("toast.noPizza"));let t=$o(O,e.id,ge);t.ok&&br({...t,type:"order_taken"})}function _r(n,e){let t=e?O.pizzas.find(i=>i.id===e):Av(n);if(!t||t.stage!==n)return Ee.toast(R("toast.noPizza"));if(n==="dough")Hp(i=>pa(ur(O,t.id,"stretch",i,ge)));else if(n==="topping"){let i=li(O,t.customerId);Vp(i,ge.economy.customers.toppings,s=>pa(ur(O,t.id,"topping",s,ge)))}else if(n==="load"){if(O.pizzas.filter(i=>i.stage==="baking").length>=on(O,ge).ovenSlots)return Ee.toast(R("toast.ovenFull"));Gp(i=>pa(ur(O,t.id,"load",i,ge)))}else n==="ready"&&pa(ur(O,t.id,"serve",{},ge))}function pa(n){if(!n.ok){Ee.toast(n.reason==="ovenFull"?R("toast.ovenFull"):R("toast.noPizza"));return}if(n.type==="served")return br(n);if(n.type==="stage"){let e=n.stage==="baking"?tf("oven"):tf(n.stage==="load"?"load":"dough");Yi.puff(e,"green",4),St.pop()}}function tf(n){return hn.stations[n]}function Rv(){if(ua()==="shop")return xn();Yp(O,ge,{buy:(n,e=1)=>{let t=Qd(O,n,ge,e);if(!t.ok)return Ee.toast(t.reason==="cash"?R("toast.notEnough"):R("toast.noPizza"));if(St.bell(),n==="decor"){let i=ai(O,ge);Ee.toast(R("toast.decorAdded",{item:R("decor.step."+i[Math.max(0,Math.min(i.length,O.decorShown)-1)])}))}else Ee.toast(t.bought>1?R("toast.boughtN",{n:t.bought,item:R("upgrade."+n+".name")}):R("toast.bought",{item:R("upgrade."+n+".name")}));t.first&&it("first_purchase",{item:n,cost:t.cost}),dn()},openShop:()=>{let n=rp(O,ge);if(!n.ok){let e=n.reason==="cash"?R("toast.notEnough"):n.reason==="needsFranchise"?R("shop.shopsLocked",{n:n.need}):R("shop.allOpen");return Ee.toast(e)}St.bell(),Ee.toast(R("toast.shopOpened",{n:n.shops})),it("shop_opened",{shops:n.shops,cost:n.cost}),dn()},recruit:n=>{let e=tp(O,n,ge);if(!e.ok){let t=e.reason==="cash"?R("toast.notEnough"):e.reason==="needsFranchise"?R("shop.recruitLocked"):e.reason==="needsHire"?R("recruit.needHire",{role:R("staff."+n+".name")}):R("action.maxed");return Ee.toast(t)}St.bell(),Ee.toast(R("toast.recruited",{role:R("staff."+n+".name")})),dn()},hire:(n,e=1)=>{let t=jd(O,n,ge,e);if(!t.ok)return Ee.toast(t.reason==="cash"?R("toast.notEnough"):R("toast.noPizza"));St.bell(),Ee.toast(R("toast.hired",{role:R("staff."+n+".name")})),t.first&&it("first_purchase",{item:n,cost:t.cost}),dn()},franchise:()=>$p(O,ge,{confirmFranchise:Pv}),openMap:()=>Hl(O,ge,hf()),move:n=>of(n),redecorate:()=>af(),stub:n=>{it("monetization_stub_tap",{name:n}),Ee.toast(R("toast.comingSoon"))}})}function Pv(){if(!_l(O,ge))return Ee.toast(R("franchise.locked",{target:gt(Ni(O,ge)),have:gt(Ui(O))}));let n=ki(O,ge),e=ci(O,ge);O=np(O,ge,Ho).state;let i=ci(O,ge);it("prestige",{points:O.franchise.points,gain:n,count:O.franchise.count,tier:ge.economy.prestige.tiers[i].id,lifetimeCash:Math.floor(O.lifetimeCash)}),St.bell(),Ee.toast(R("toast.franchised",{mult:(1+ge.economy.prestige.bonusPerPoint*O.franchise.points).toFixed(1)})),i!==e&&Ee.toast(R("toast.tierUp",{tier:R("tier."+ge.economy.prestige.tiers[i].id)})),dn()}function hf(){return{move:n=>of(n),redecorate:()=>af()}}var fa=null;function Zl(n){fa===null&&globalThis.matchMedia&&(fa=globalThis.matchMedia("(prefers-color-scheme: dark)"),fa.addEventListener?.("change",()=>{O?.settings?.theme==="system"&&Zl("system")}));let e=n==="dark"||n==="system"&&!!fa?.matches;document.documentElement.dataset.theme=e?"dark":"light",document.querySelector('meta[name="theme-color"]')?.setAttribute("content",e?"#241f2b":"#ffd9a0"),document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]')?.setAttribute("content",e?"black":"default")}function Us(){return{setTheme:n=>{O.settings.theme=n,Zl(n),Xi(O,Us())},setSound:n=>{O.settings.sound=n,Vo(n),Xi(O,Us())},setNotify:async n=>{if(!n)O.settings.notify=!1;else if(typeof Notification<"u"){let e=await Notification.requestPermission();O.settings.notify=e==="granted"}it("notify_opt_in",{on:O.settings.notify}),ua()==="settings"&&Xi(O,Us())},setLook:n=>{O.settings.look=n,Xe.setLook(n),it("art_style",{look:n}),Xi(O,Us())},setGraphics:n=>{O.settings.graphics=n,Xe.setQuality(n),it("graphics_quality",{quality:n}),Xi(O,Us())},reset:()=>uf(),openDebug:()=>Bl($l())}}function uf(){Od(),Xn=null,O=Ho(ge),it("save_reset"),xn(),Ee.toast(R("action.reset"))}function $l(){return{addCash:n=>{O.cash+=n,O.lifetimeCash+=n,Ee.toast(R("toast.cashDebug",{amount:gt(n)}))},skipHour:()=>{for(let n=0;n<7200;n++){let e=vl(O,.5,ge,[]);for(let t of e)(t.type==="event_start"||t.type==="event_end"||t.type==="tutorial_done")&&br(t)}Ee.toast("+1h")},event:n=>{hr(O,n,ge),br({type:"event_start",id:n})},toggleNight:()=>{O.dayClock=(O.dayClock+.5)%1},simulateAway:()=>{xn(),O.savedAt-=8*3600*1e3,Yl()},franchiseReady:()=>{O.lifetimeCash=Math.max(O.lifetimeCash,(O.franchise.lifetimeAtLast||0)+Ni(O,ge))},wipe:uf}}var ma={1:"customers",2:"stretch",3:"top",4:"oven",5:"serve",6:"shop"};function Lv(){window.addEventListener("keydown",n=>{if(!(n.ctrlKey||n.metaKey||n.altKey)){if(n.key==="Escape")return ca()?Op():zs()?Zt("modalClose").click():void 0;if(n.key==="6"&&ua()==="shop")return n.preventDefault(),xn();if(!(zs()||ca()||Xn)){if(ma[n.key]&&!vr(ma[n.key]))return ga();if(ma[n.key])return n.preventDefault(),cf(ma[n.key]);(n.key==="m"||n.key==="M")&&(O.settings.sound=!O.settings.sound,Vo(O.settings.sound),Ee.toast(R("settings.sound")+": "+(O.settings.sound?"on":"off")))}}})}function Iv(){zs()||ca()||Xn||!O.tutorialDone||!bl(O,ge)||(St.click(),Bp(n=>{let e=op(O,n.hits,ge);e.won?(St.bell(),Ee.toast(R("mini.happy.win")),it("happy_hour_won",{hits:e.hits})):(Ee.toast(R("mini.happy.miss")),it("happy_hour_missed",{hits:e.hits})),dn()}))}function zv(){Lv(),Zt("btnBonus").addEventListener("click",Iv),Zt("btnSettings").addEventListener("click",()=>Xi(O,Us())),Zt("btnMap").addEventListener("click",()=>Hl(O,ge,hf())),Zt("btnDebug").addEventListener("click",()=>Bl($l())),Zt("modalClose").addEventListener("click",()=>xn()),Zt("modal").addEventListener("pointerdown",n=>{n.target.id==="modal"&&xn()})}function Dv(){let n=Zt("scene"),e=new Do,t=new de,i=null;n.addEventListener("pointerdown",s=>{i={x:s.clientX,y:s.clientY,t:performance.now()}}),n.addEventListener("pointerup",s=>{if(!i)return;let r=Math.hypot(s.clientX-i.x,s.clientY-i.y),o=performance.now()-i.t<450;if(i=null,r>12||!o||zs())return;let a=n.getBoundingClientRect();t.set((s.clientX-a.left)/a.width*2-1,-((s.clientY-a.top)/a.height)*2+1),e.setFromCamera(t,Xe.camera);let c=un.pick(e);if(c){if(c.kind==="customer"){let l=li(O,c.id);return l&&l.state==="waiting"?vr("customers")?lf(l.id):ga():void 0}if(c.kind==="pizza"){let l=O.pizzas.find(h=>h.id===c.id);if(!l)return;if(["dough","topping","load","ready"].includes(l.stage)){if(!vr(Cv[l.stage]))return ga();_r(l.stage,l.id)}}}}),n.addEventListener("pointercancel",()=>{i=null}),n.addEventListener("pointermove",s=>{if(s.pointerType!=="mouse"||zs()){n.style.cursor="";return}let r=n.getBoundingClientRect();t.set((s.clientX-r.left)/r.width*2-1,-((s.clientY-r.top)/r.height)*2+1),e.setFromCamera(t,Xe.camera),n.style.cursor=un.pick(e)?"pointer":"default"}),n.addEventListener("touchmove",s=>s.preventDefault(),{passive:!1})}function df(n){requestAnimationFrame(df);let e=Math.min(.1,(n-ql)/1e3);if(ql=n,!Xn){da+=e;let i=0;for(;da>=Vl&&i<Jp;){let s=vl(O,Vl,ge,[]);for(let r of s)br(r);da-=Vl,i++}i===Jp&&(da=0)}nf!==rf()&&ya(!1);let t=O.pizzas.some(i=>i.stage==="baking");un.sync(O),un.update(e,O),Yi.setSmoke(Xe.smokeAt,t?1:.2),Yi.setSteam(un.steamPoints()),Yi.update(e),Yi.setEvents(O.events.active),Xe.update(e,O.dayClock),zp(Xe,O.upgrades.neon),Dp(Xe,t,Xe.time),Xl.update(Xe,O,ge),Ip(Xe,O,performance.now()/1e3,ge),Gl+=e,Gl>=ge.economy.time.autosaveSeconds&&(Gl=0,dn()),Xn||Uv(),Xe.renderer.render(Xe.scene,Xe.camera)}var Wl=0;function Uv(){if(Wl-=1,Wl>0)return;Wl=4;let n=on(O,ge);Ee.tickCash(O.cash),Ee.setRate(n.idleRate),Ee.setGoal(Yd(O,ge)),Ee.setBadges({customers:O.customers.filter(i=>i.state==="waiting").length,stretch:O.pizzas.filter(i=>i.stage==="dough").length,top:O.pizzas.filter(i=>i.stage==="topping").length,oven:O.pizzas.filter(i=>i.stage==="load").length,serve:O.pizzas.filter(i=>i.stage==="ready").length});let e=ge.economy.tutorial[O.tutorialStep];if(!O.tutorialDone&&e){Ee.setHint(R("tut.progress",{n:O.tutorialStep+1,total:ge.economy.tutorial.length})+"  "+R(e.textKey)),Ee.setHighlight(e.highlight);for(let i of["customers","stretch","top","oven","serve","shop"]){let s=document.querySelector(`#actions [data-action="${i}"]`);s&&s.classList.toggle("tut-off",!vr(i))}}else document.querySelectorAll("#actions .tut-off").forEach(i=>i.classList.remove("tut-off")),Ee.setHint(null),Ee.setHighlight(null);Ee.setEvents(O.events.active.map(i=>({id:i.id,left:i.endsAt-O.gameTime}))),Zt("btnBonus").classList.toggle("hidden",!O.tutorialDone||!bl(O,ge)),Zt("btnMap").classList.toggle("hidden",!qo(O,ge));let t=`${O.location}|${O.city}|${(O.cityVisited||[]).join(",")}|${O.decorShown}|${Math.floor(O.cash)}|${JSON.stringify(O.upgrades)}|${JSON.stringify(O.staff)}|${JSON.stringify(O.staffing)}|${O.franchise.points}|${O.franchise.count}|${_l(O,ge)}|${Math.floor(Ui(O)/500)}`;t!==jp&&(jp=t,Xp(t))}document.addEventListener("visibilitychange",()=>{document.hidden?(Ee.setPaused(!0),O.tutorialDone||it("churn_point",{where:"tutorial_step_"+O.tutorialStep}),Gd({gameTime:Math.round(O.gameTime)}),dn()):(Ee.setPaused(!1),ql=performance.now(),pl(),Yl())});window.addEventListener("pagehide",()=>dn());Mv().catch(n=>{console.error(n);let e=n&&n.message?n.message:String(n);window.__pizzaFail?window.__pizzaFail(e):Zt("loading").textContent="The game could not start: "+e});})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
