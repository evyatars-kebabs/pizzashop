(()=>{var Vl={schemaVersion:1,_comment:"All tunable values. Costs are baseCost * growth^currentLevel to go from currentLevel to currentLevel+1. Times are in seconds.",startingCash:30,bigSaleThreshold:20,time:{dayLengthSeconds:600,startDayClock:.3,offlineCapSeconds:28800,offlineBaseEfficiency:.5,offlineEfficiencyPerStaffRole:.25,autosaveSeconds:10,randomEventMinSeconds:300,randomEventMaxSeconds:600},customers:{spawnBaseSeconds:24,spawnJitter:.3,nightSpawnMult:.6,tipMax:.3,wrongToppingTipMult:.4,wrongToppingPayMult:.9,wrongToppingQuality:.55,angryPenalty:3,types:{hungry:{weight:3,patience:90,tipMult:1},chatty:{weight:2,patience:120,tipMult:1.3},grumpy:{weight:1,patience:45,tipMult:.7}},toppings:["pepperoni","mushroom","olive","basil","pepper"]},styles:{margherita:{basePrice:8,bakeSeconds:10,unlock:{type:"start"},enabled:!0},pepperoni:{basePrice:11,bakeSeconds:10,unlock:{type:"lifetime",value:600},enabled:!0},veggie:{basePrice:10,bakeSeconds:11,unlock:{type:"lifetime",value:2500},enabled:!1},seasonal:{basePrice:14,bakeSeconds:12,unlock:{type:"lifetime",value:8e3},enabled:!1}},pizzaQuality:{payBase:.6,payPerQuality:.6},stages:{autoDoughSeconds:4,autoToppingSeconds:3,autoDoughQuality:.7,autoToppingQuality:.75,autoLoadQuality:.7,perfectBakeQuality:.9,perfectBakeSpeedMult:.85,autoServeDelaySeconds:1},manual:{doughWindowSeconds:8,doughSwipesNeeded:1200,doughRushedQuality:.5,doughFinishMinQuality:.6,toppingCorrectQuality:1,toppingWrongQuality:.55,ovenSweetZone:.18,ovenMinQuality:.6,ovenMarkerPeriodSeconds:1.6,doughKeyStep:110},cashier:{orderSecondsBase:3,orderSpeedPerLevel:.5},cook:{speedPerLevel:.4},upgrades:{oven:{baseCost:40,growth:1.15,maxLevel:120,ovenSlotsBase:1,ovenSlotsPerLevel:1},counter:{baseCost:60,growth:1.15,maxLevel:120,maxQueueBase:3,maxQueuePerLevel:2},cheese:{baseCost:80,growth:1.14,maxLevel:120,cheeseMultPerLevel:.1},decor:{baseCost:120,growth:1.14,maxLevel:120,trafficPerLevel:.05,steps:["flowers","festoon","bunting","table","lanterns","carpet","secondTable","balloons","flags","statue"]},neon:{baseCost:300,growth:1.8,maxLevel:20,trafficPerLevel:.2},scooter:{baseCost:500,growth:2.2,maxLevel:5,enabled:!1,_note:"Delivery scooter: placeholder for post-prototype delivery kid."},marketing:{baseCost:15e4,growth:1.25,maxLevel:40,trafficMultPerLevel:.5,group:"empire",requires:{franchises:1}},pizzaSchool:{baseCost:4e5,growth:1.25,maxLevel:40,payMultPerLevel:.4,group:"empire",requires:{franchises:2}},megaOven:{baseCost:9e5,growth:1.3,maxLevel:30,ovenSlotsPerLevel:2,group:"empire",requires:{franchises:3}}},staff:{cashier:{baseCost:150,growth:1.25,maxLevel:40},cook:{baseCost:250,growth:1.25,maxLevel:40}},prestige:{milestoneLifetimeCash:2e4,pointsDivisor:2e4,bonusPerPoint:.1,_tiersNote:"The stand grows with each franchise. Width/depth are metres; staffVisible is how many employees per role can be seen working; bonuses add to oven slots and queue size.",tiers:[{id:"cart",minFranchises:0,width:4.2,depth:2.6,staffVisible:1,ovenSlotsBonus:0,maxQueueBonus:0,cameraZoom:1,recruitCap:2},{id:"stand",minFranchises:1,width:5.8,depth:3.2,staffVisible:2,ovenSlotsBonus:1,maxQueueBonus:2,cameraZoom:1.16,recruitCap:4},{id:"shop",minFranchises:2,width:7.6,depth:5,staffVisible:3,ovenSlotsBonus:2,maxQueueBonus:4,cameraZoom:1.46,recruitCap:6}],requirementExponent:1.3,_requirementNote:"Each franchise must be earned again. The cash a stand must earn before franchising is milestoneLifetimeCash x (franchises so far + 1) ^ requirementExponent, so it grows steadily instead of exponentially.",trafficPerFranchise:.25,_trafficNote:'Each franchise brings more customers, with no upper limit: spawn rate x (1 + trafficPerFranchise * franchises). Add "trafficMaxMult" here to cap it.',ovenSpeedPerFranchise:.6,minBakeSeconds:1.5,_ovenNote:"Ovens bake faster with each franchise: bake time = style bake time / (1 + ovenSpeedPerFranchise x franchises), never below minBakeSeconds."},events:{rainyDay:{durationSeconds:150,weight:1,spawnMult:1.5,patienceDrainMult:1.25,cashMult:1,styleDemand:{}},foodFestival:{durationSeconds:150,weight:1,spawnMult:1.2,patienceDrainMult:1,cashMult:1.1,styleDemand:{pepperoni:3}},doubleCash:{durationSeconds:120,weight:0,spawnMult:1,patienceDrainMult:1,cashMult:2,styleDemand:{},_note:"Not picked at random (weight 0). Started by the happy-hour mini game."}},goals:[{id:"goal.cashier",condition:{type:"staffLevel",role:"cashier",value:1}},{id:"goal.pepperoni",condition:{type:"lifetime",value:600}},{id:"goal.cook",condition:{type:"staffLevel",role:"cook",value:1}},{id:"goal.neon",condition:{type:"upgradeLevel",upgrade:"neon",value:1}},{id:"goal.franchise",condition:{type:"lifetime",value:2e4}}],tutorial:[{id:"t1",textKey:"tut.1",highlight:"customers",check:{stat:"ordersTaken",gte:1}},{id:"t2",textKey:"tut.2",highlight:"stretch",check:{stat:"manualStretch",gte:1}},{id:"t3",textKey:"tut.3",highlight:"top",check:{stat:"manualTopping",gte:1}},{id:"t4",textKey:"tut.4",highlight:"oven",check:{stat:"manualLoad",gte:1}},{id:"t5",textKey:"tut.5",highlight:"serve",check:{stat:"served",gte:1}},{id:"t6",textKey:"tut.6",highlight:"shop",check:{stat:"upgradesBought",gte:1},ensureCash:{type:"upgrade",key:"oven"}},{id:"t7",textKey:"tut.7",highlight:"shop",check:{stat:"staffHired",gte:1}}],monetizationStubs:{offlineBoostAd:{multiplier:2,placeholderSeconds:1.5},starterPack:{priceLabel:"$2.99",placeholder:!0},ovenSkins:["skin.classic","skin.neon","skin.copper"]},_empireNote:'Empire upgrades (upgrades with group "empire") need a number of franchises before they can be bought, and they reset with each franchise like everything else.',recruit:{requiresFranchises:1,cashier:{baseCost:2500,growth:1.6},cook:{baseCost:3500,growth:1.6},offlineEfficiencyPerRecruit:.02,_note:"Extra employees, bought after franchising. Each one needs the role hired first. Caps per stand size are in prestige.tiers (recruitCap)."},happyHour:{intervalSeconds:480,targets:7,needed:4,spawnEverySeconds:.75,targetLifetimeSeconds:.95,_note:"A tap mini game that becomes available every intervalSeconds of game time. Hitting `needed` of `targets` doubles all money for the event duration."},shops:{maxShops:4,requiresFranchises:1,baseCost:2e5,growth:3,multiplierPerShop:2,_note:"Each extra shop doubles customers, employees, oven capacity and money per second. Shops after the first cost baseCost x growth^(shops already open - 1)."},queueHardCap:40,beginner:{startingCash:60,spawnMult:1.5,payMult:1.25,tutorialSpawnDelaySeconds:1.5,_note:"Easier first time: until the tutorial is finished, customers arrive one at a time and wait patiently, arrive a little less often, and pay more."}};var Gl={"app.title":"Slice Street","app.version":"Prototype v0.1","hud.cash":"Cash","hud.rate":"+{rate}/s","hud.goal":"Next: {goal}","hud.goalDone":"All goals done!","hud.paused":"Paused","action.customers":"Order","action.stretch":"Stretch","action.top":"Topping","action.oven":"Oven","action.serve":"Serve","action.shop":"Shop","action.settings":"Settings","action.close":"Close","action.buy":"Buy {cost}","action.maxed":"Max","action.hire":"Hire {cost}","action.upgrade":"Upgrade {cost}","action.collect":"Collect","action.adDouble":"Watch ad: 2x","action.adDoubleHint":"Optional. Ads are always player-initiated.","action.franchise":"Franchise","action.cancel":"Cancel","action.reset":"Reset save","action.confirmReset":"Really erase all progress?","shop.title":"Shop","shop.upgrades":"Upgrades","shop.staff":"Staff","shop.franchise":"Franchise","shop.starterPack":"Starter pack","shop.starterPackDesc":"Placeholder. Not available in the prototype.","shop.ovenSkins":"Oven skins","shop.ovenSkinsDesc":"Cosmetic only. Placeholder list.","upgrade.oven.name":"Bigger oven","upgrade.oven.desc":"Bake {slots} pizzas at once","upgrade.counter.name":"Wider counter","upgrade.counter.desc":"Queue up to {slots} customers","upgrade.cheese.name":"Better cheese","upgrade.cheese.desc":"+{pct}% pizza value","upgrade.decor.name":"Pretty decor","upgrade.decor.desc":"+{pct}% foot traffic{item}","upgrade.neon.name":"Neon sign","upgrade.neon.desc":"+{pct}% foot traffic","upgrade.scooter.name":"Delivery scooter","staff.cashier.name":"Cashier","staff.cashier.desc":"Takes orders and hands out finished pizzas. Order time {secs}s.","staff.cook.name":"Cook","staff.cook.desc":"Stretches dough, adds toppings, loads the oven. Speed x{speed}.","staff.level":"Level {level}","staff.hired":"Working","style.margherita":"Margherita","style.pepperoni":"Pepperoni","style.veggie":"Veggie","style.seasonal":"Seasonal special","topping.pepperoni":"Pepperoni","topping.mushroom":"Mushroom","topping.olive":"Olive","topping.basil":"Basil","topping.pepper":"Pepper","customer.hungry":"Hungry","customer.chatty":"Chatty","customer.grumpy":"Grumpy","customer.name.1":"Dana","customer.name.2":"Mo","customer.name.3":"Priya","customer.name.4":"Sam","customer.name.5":"Ferdi","customer.wants":"Wants {topping}","customer.turnedAway":"Queue full, someone walked off","tut.1":"Tap a customer to take their order.","tut.2":"Stretch the dough: scroll the wheel or tap the arrow keys.","tut.3":"Pick the topping they want, then put it on the pizza.","tut.4":"Load the pizza. Click or press Space when the marker is in the green.","tut.5":"Tap the finished pizza to hand it over.","tut.6":"Nice! Spend some cash in the Shop.","tut.7":"Hire a cashier so orders run themselves.","tut.done":"Tutorial complete. Your stand is on its own now!","mini.dough.title":"Stretch the dough","mini.dough.hint":"Scroll the mouse wheel or tap the left and right arrow keys. Touch: swipe.","mini.top.title":"Add topping","mini.top.hint":"Click a topping, then click the pizza. Keys 1 to 3 pick, Space places.","mini.oven.title":"Slide it in","mini.oven.hint":"Click or press Space when the marker is in the green.","mini.oven.tap":"Tap!","toast.sale":"+{amount}","toast.tip":"+{tip} tip","toast.angry":"{name} left angry (-{penalty})","toast.ovenFull":"Oven is full. Wait for a slot.","toast.noPizza":"Nothing needs that right now.","toast.notEnough":"Not enough cash yet.","toast.eventStart":"{event} started!","toast.eventEnd":"{event} is over.","toast.staffIdle":"{role} is idle. Give them work!","toast.bought":"Bought {item}.","toast.hired":"{role} hired!","toast.comingSoon":"Coming soon (placeholder).","toast.adStub":"Ad placeholder finished.","toast.franchised":"Franchised! Multiplier now x{mult}.","event.rainyDay.name":"Rainy day","event.rainyDay.desc":"More customers, but they are in a hurry.","event.foodFestival.name":"Food festival","event.foodFestival.desc":"Pepperoni demand is through the roof.","collect.title":"Welcome back!","collect.body":"Your stand kept busy for {duration}.","collect.earned":"You earned {amount}","collect.capped":"Away time is capped at {cap}.","collect.boosted":"Doubled with the ad boost.","franchise.title":"Franchise your stand","franchise.explain":"Start again from scratch and keep permanent bonuses. Each franchise adds +{bonus}% cash and +{traffic}% customers for good, and your place grows: cart, then a big stand, then a pizza shop with more staff. Every franchise has to be earned again, and each one needs more than the last.","franchise.resets":"Resets: cash, upgrades, staff, queue, pizzas, and you go back to the corner.","franchise.keeps":"Keeps: franchise points, unlocked pizza styles (recipes), unlocked locations, the tutorial, settings, and lifetime stats.","franchise.gain":"You will gain {points} franchise point(s).","franchise.locked":"Earn {target} at this stand to franchise. So far: {have}.","franchise.points":"Franchise points: {points}","settings.title":"Settings","settings.sound":"Sound","settings.notify":"Notify me (opt-in)","settings.notifyDesc":"Offline earnings and idle staff. Off by default.","settings.version":"Version","stats.lifetime":"Lifetime cash: {amount}","debug.title":"Debug","debug.addCash":"+1,000 cash","debug.addCashBig":"+20,000 cash","debug.skip":"Skip 1 hour","debug.rain":"Trigger rain","debug.festival":"Trigger festival","debug.night":"Toggle time of day","debug.away":"Simulate 8h away","debug.franchiseReady":"Make franchise-ready","debug.resetAll":"Wipe save","debug.close":"Close debug","welcome.step":"Your cart is wobbly, but the lunch crowd is coming.","offline.hint":"Earnings accrue while the app is closed, capped at 8 hours.","location.corner.name":"Corner of Main & Sunny","goal.cashier":"Hire a cashier","goal.pepperoni":"Unlock pepperoni","goal.cook":"Hire a cook","goal.neon":"Buy a neon sign","goal.franchise":"Reach franchise milestone","toast.customerLeft":"{name} left","action.soon":"Soon","toast.unlocked":"New recipe unlocked: {style}","toast.offlineSaved":"Stand is saved. Come back for offline earnings.","toast.cashDebug":"Added {amount}","staff.notHired":"Not hired","location.corner.desc":"Your first stand. Steady lunch crowd.","location.side.name":"Side street","location.side.desc":"Busier foot traffic and a pepperoni-hungry lunch crowd. Unlocks at 3,000 lifetime cash.","location.current":"Here now","location.locked":"Reach {target} lifetime cash to unlock.","shop.locations":"Locations","action.move":"Move here","toast.locationMoved":"Stand moved to {location}. Queue cleared.","toast.locationUnlocked":"New location unlocked: {location}","action.locked":"Locked","settings.keys":"Keys: 1 to 6 for the action bar, M mute, Esc closes a window. Click the pizzas and customers directly.","sign.menu.title":"Menu","sign.neon":"Open!","sign.sandwich":"Fresh pizza, hot now!","mini.oven.stopped.good":"Perfect bake!","mini.oven.stopped.miss":"Close enough. It still bakes.","decor.step.flowers":"flower boxes","decor.step.festoon":"festoon lights","decor.step.bunting":"bunting","decor.step.table":"a bistro table","decor.step.lanterns":"lanterns","decor.step.carpet":"a red carpet","decor.step.secondTable":"a second table and olive trees","decor.step.balloons":"balloons","decor.step.flags":"rooftop flags","decor.step.statue":"a golden pizza","toast.decorAdded":"New decoration: {item}","tier.cart":"Pizza cart","tier.stand":"Big pizza stand","tier.shop":"Pizza shop","franchise.next":"Next: {tier}","franchise.now":"Now: {tier}","toast.tierUp":"Your place grew into: {tier}","sign.franchise":"Franchise {count}","staff.visible":"Up to {count} visible at this place","settings.graphics":"Graphics","settings.graphicsDesc":"Auto lowers detail if the game runs slowly.","settings.graphics.auto":"Auto","settings.graphics.high":"High","settings.graphics.low":"Low","franchise.ready":"Ready to franchise.","franchise.nextCost":"The next franchise will need {target} earned at the new stand.","toast.franchiseReady":"You can franchise now!","franchise.traffic":"Customers: +{pct}% from franchises.","franchise.trafficNext":"After this franchise: +{pct}% customers.","shop.empire":"Empire","shop.empireDesc":"Big upgrades that open up only after franchising. Each franchise resets them, like everything else.","shop.needsFranchise":"Needs {n} franchise(s)","upgrade.marketing.name":"Empire marketing","upgrade.marketing.desc":"+{pct}% customers on top of everything else","upgrade.pizzaSchool.name":"Pizza school","upgrade.pizzaSchool.desc":"+{pct}% pizza value","upgrade.megaOven.name":"Industrial ovens","upgrade.megaOven.desc":"Bake {slots} more pizzas at once","franchise.ovens":"Ovens: x{x} speed.","settings.look":"Art style","settings.lookDesc":"3D is the full look. 2D is flat storybook art, same game.","settings.look.3d":"3D","settings.look.2d":"2D","shop.recruit":"Recruit extra staff","shop.recruitLocked":"Franchise once to recruit extra staff.","recruit.cashier.name":"Extra cashier","recruit.cook.name":"Extra cook","recruit.cashier.desc":"Each extra cashier takes orders at the same time. Recruited: {n} of {max}.","recruit.cook.desc":"Each extra cook works on a different pizza at the same time. Recruited: {n} of {max}.","recruit.needHire":"Hire a {role} first.","action.recruit":"Recruit {cost}","toast.recruited":"Recruited an extra {role}.","bonus.label":"Happy hour","mini.happy.title":"Happy hour","mini.happy.hint":"Tap the gold coins before they fade. Get {needed} to double all money for 2 minutes.","mini.happy.count":"Coins: {hits} of {total}","mini.happy.coin":"Gold coin","mini.happy.win":"Happy hour! Double money for 2 minutes.","mini.happy.miss":"So close! Come back in a few minutes.","toast.bonusReady":"Happy hour is ready. Look for the x2 button.","event.doubleCash.name":"Double money","event.doubleCash.desc":"Every sale pays double.","shop.shops":"More shops","shop.openShop":"Open another shop","shop.shopsDesc":"Each shop doubles your customers, employees and money per second. Open: {open} of {max}. Each extra shop doubles again.","shop.shopsLocked":"Franchise {n} time(s) to open another shop.","shop.allOpen":"All shops are open.","action.open":"Open {cost}","toast.shopOpened":"Shop {n} is open! Customers now split between your shops.","sign.shop":"Shop {n}","tut.locked":"Not yet. Follow the tutorial banner first.","tut.progress":"Tutorial {n} of {total}.","action.hireFree":"Hire free","action.buyN":"Buy {n} \xB7 {cost}","action.amountMax":"Max","toast.boughtN":"Bought {n} \xD7 {item}."};var Wl=["corner","sideStreet"];var Xl={id:"corner",nameKey:"location.corner.name",descKey:"location.corner.desc",unlock:{type:"start"},economy:{trafficMult:1,styleDemand:{}},_note:"Stations and the stand itself are laid out in code (src/render/stand.js layoutFor), because they depend on the stand tier. This file is the street around it.",queueStart:[-2.2,0,4.4],queueStep:[.78,0,.9],_queueNote:"queueStep: x = column step (queueRowLength per row, filling left to right), z = row depth, toward the camera.",queueRowLength:4,camera:{position:[0,6.6,12.8],target:[0,1.45,.7],fov:46},props:[{type:"road",z:-8,width:7},{type:"building",pos:[-27.5,0,-16.2],size:[7,9.5,6],color:"#e07a5f",awning:"#d8402f"},{type:"building",pos:[-20.5,0,-16.2],size:[7,12.5,6],color:"#f2cc8f",awning:"#2f7d6a"},{type:"building",pos:[-14,0,-16.2],size:[6,8.5,6],color:"#81b29a",awning:"#e9a23b"},{type:"building",pos:[-7,0,-16.2],size:[8,13.5,6],color:"#e9c46a",awning:"#4a6fa5"},{type:"building",pos:[0,0,-16.2],size:[6,10,6],color:"#d9a5a0",awning:"#d8402f"},{type:"building",pos:[6.5,0,-16.2],size:[7,11.5,6],color:"#a8c5da",awning:"#2f7d6a"},{type:"building",pos:[13,0,-16.2],size:[6,9,6],color:"#f4a261",awning:"#e9a23b"},{type:"building",pos:[19.5,0,-16.2],size:[7,12,6],color:"#c9b8e0",awning:"#4a6fa5"},{type:"building",pos:[26.5,0,-16.2],size:[7,10.5,6],color:"#f0d9b5",awning:"#d8402f"},{type:"tree",pos:[-17,0,-12.4],scale:.95},{type:"tree",pos:[-10.5,0,-12.4],scale:.95},{type:"tree",pos:[-3.5,0,-12.4],scale:.95},{type:"tree",pos:[3.5,0,-12.4],scale:.95},{type:"tree",pos:[10,0,-12.4],scale:.95},{type:"tree",pos:[17,0,-12.4],scale:.95},{type:"building",pos:[-17.5,0,1.5],size:[7,11,12],color:"#f0d9b5",awning:"#2f7d6a"},{type:"building",pos:[18,0,1],size:[7,13,12],color:"#d9a5a0",awning:"#4a6fa5"},{type:"car",pos:[-8.5,0,-5.6],color:"#d8402f",rot:0},{type:"car",pos:[8.8,0,-5.6],color:"#3d9a8b",rot:0},{type:"lamp",pos:[-6.2,0,-3.4],light:!0},{type:"lamp",pos:[6,0,-3.4],light:!0},{type:"lamp",pos:[-11.5,0,-3.4]},{type:"lamp",pos:[12,0,-3.4]},{type:"tree",pos:[-7.2,0,1.2],scale:1.05},{type:"tree",pos:[8.2,0,2.2],scale:1},{type:"bush",pos:[-8.6,0,3.4]},{type:"bush",pos:[9.4,0,4.6]},{type:"bench",pos:[6.6,0,5.6]},{type:"bin",pos:[-5.8,0,3.6]},{type:"hydrant",pos:[4.9,0,-3.5]},{type:"planter",pos:[-5.4,0,6.2]},{type:"planter",pos:[5.6,0,7.4]},{type:"sandwichBoard",pos:[1.9,0,6.6]}]};var ql={id:"sideStreet",nameKey:"location.side.name",descKey:"location.side.desc",unlock:{type:"lifetime",value:3e3},economy:{trafficMult:1.35,styleDemand:{pepperoni:2}},_note:"Stations and the stand itself are laid out in code (src/render/stand.js layoutFor), because they depend on the stand tier. This file is the street around it.",queueStart:[-2.2,0,4.4],queueStep:[.78,0,.9],_queueNote:"queueStep: x = column step (queueRowLength per row, filling left to right), z = row depth, toward the camera.",queueRowLength:4,camera:{position:[0,6.6,12.8],target:[0,1.45,.7],fov:46},props:[{type:"road",z:-8,width:7},{type:"building",pos:[-27.5,0,-16.2],size:[7,11,6],color:"#8ab17d",awning:"#4a6fa5"},{type:"building",pos:[-20.5,0,-16.2],size:[7,8.5,6],color:"#c9ada7",awning:"#d8402f"},{type:"building",pos:[-14,0,-16.2],size:[6,13,6],color:"#f2cc8f",awning:"#2f7d6a"},{type:"building",pos:[-7,0,-16.2],size:[8,9.5,6],color:"#e07a5f",awning:"#e9a23b"},{type:"building",pos:[0,0,-16.2],size:[6,12,6],color:"#9ec5d8",awning:"#4a6fa5"},{type:"building",pos:[6.5,0,-16.2],size:[7,10,6],color:"#f6bd60",awning:"#d8402f"},{type:"building",pos:[13,0,-16.2],size:[6,14,6],color:"#b8a9c9",awning:"#2f7d6a"},{type:"building",pos:[19.5,0,-16.2],size:[7,9,6],color:"#e5989b",awning:"#e9a23b"},{type:"building",pos:[26.5,0,-16.2],size:[7,11.5,6],color:"#a3b18a",awning:"#4a6fa5"},{type:"tree",pos:[-17,0,-12.4],scale:.95},{type:"tree",pos:[-10.5,0,-12.4],scale:.95},{type:"tree",pos:[-3.5,0,-12.4],scale:.95},{type:"tree",pos:[3.5,0,-12.4],scale:.95},{type:"tree",pos:[10,0,-12.4],scale:.95},{type:"tree",pos:[17,0,-12.4],scale:.95},{type:"building",pos:[-17.5,0,1.5],size:[7,13,12],color:"#c9ada7",awning:"#d8402f"},{type:"building",pos:[18,0,1],size:[7,10.5,12],color:"#8ab17d",awning:"#e9a23b"},{type:"car",pos:[-9.5,0,-5.6],color:"#e9c46a",rot:0},{type:"car",pos:[7.2,0,-5.6],color:"#4a6fa5",rot:0},{type:"lamp",pos:[-5.6,0,-3.4],light:!0},{type:"lamp",pos:[6.6,0,-3.4],light:!0},{type:"lamp",pos:[-12,0,-3.4]},{type:"lamp",pos:[12.5,0,-3.4]},{type:"tree",pos:[-8,0,2.4],scale:1},{type:"tree",pos:[7.6,0,1],scale:1.1},{type:"bush",pos:[8.8,0,3.6]},{type:"bush",pos:[-9.2,0,4.8]},{type:"bench",pos:[-6.4,0,5.2]},{type:"bin",pos:[6,0,3.4]},{type:"hydrant",pos:[-4.9,0,-3.5]},{type:"planter",pos:[5.6,0,6.4]},{type:"planter",pos:[-5.6,0,7.2]},{type:"sandwichBoard",pos:[1.9,0,6.6]}]};var ua={corner:Xl,sideStreet:ql},Yl={};for(let n of Wl)ua[n]?Yl[ua[n].id]=ua[n]:console.warn("[bundle] location listed in index.json but not bundled:",n);globalThis.__PIZZA_DATA__={economy:Vl,strings:Gl,locations:Yl};var Vc="160";var Ff=0,Zl=1,zf=2;var Ro=1,kf=2,Un=3,ti=0,kt=1,dn=2;var Qn=0,cs=1,Gr=2,$l=3,Jl=4,Bf=5,vi=100,Hf=101,Vf=102,Kl=103,Ql=104,Gf=200,Wf=201,Xf=202,qf=203,$a=204,Ja=205,Yf=206,Zf=207,$f=208,Jf=209,Kf=210,Qf=211,jf=212,ep=213,tp=214,np=0,ip=1,sp=2,Wr=3,rp=4,op=5,ap=6,cp=7,Co=0,lp=1,hp=2,jn=0,up=1,dp=2,fp=3,Gc=4,pp=5,mp=6;var Ru=300,us=301,ds=302,Ka=303,Qa=304,Po=306,ks=1e3,fn=1001,ja=1002,Gt=1003,jl=1004;var da=1005;var jt=1006,gp=1007;var Bs=1008;var ei=1009,yp=1010,_p=1011,Wc=1012,Cu=1013,Jn=1014,Kn=1015,Hs=1016,Pu=1017,Lu=1018,bi=1020,xp=1021,pn=1023,vp=1024,Mp=1025,Si=1026,fs=1027,bp=1028,Iu=1029,Sp=1030,Du=1031,Uu=1033,fa=33776,pa=33777,ma=33778,ga=33779,eh=35840,th=35841,nh=35842,ih=35843,Nu=36196,sh=37492,rh=37496,oh=37808,ah=37809,ch=37810,lh=37811,hh=37812,uh=37813,dh=37814,fh=37815,ph=37816,mh=37817,gh=37818,yh=37819,_h=37820,xh=37821,ya=36492,vh=36494,Mh=36495,wp=36283,bh=36284,Sh=36285,wh=36286;var Xr=2300,qr=2301,_a=2302,Eh=2400,Th=2401,Ah=2402;var Ou=3e3,wi=3001,Ep=3200,Tp=3201,Xc=0,Ap=1,en="",gt="srgb",Fn="srgb-linear",qc="display-p3",Lo="display-p3-linear",Yr="linear",lt="srgb",Zr="rec709",$r="p3";var Gi=7680;var Rh=519,Rp=512,Cp=513,Pp=514,Fu=515,Lp=516,Ip=517,Dp=518,Up=519,Ch=35044;var Ph="300 es",ec=1035,On=2e3,Jr=2001,ni=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var xa=Math.PI/180,tc=180/Math.PI;function Ks(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Lt(n,e,t){return Math.max(e,Math.min(t,n))}function Np(n,e){return(n%e+e)%e}function va(n,e,t){return(1-t)*n+t*e}function Lh(n){return(n&n-1)===0&&n!==0}function nc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Cs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var de=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class n{constructor(e,t,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],y=s[0],m=s[3],p=s[6],x=s[1],_=s[4],b=s[7],R=s[2],E=s[5],A=s[8];return r[0]=o*y+a*x+c*R,r[3]=o*m+a*_+c*E,r[6]=o*p+a*b+c*A,r[1]=l*y+h*x+u*R,r[4]=l*m+h*_+u*E,r[7]=l*p+h*b+u*A,r[2]=d*y+f*x+g*R,r[5]=d*m+f*_+g*E,r[8]=d*p+f*b+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(s*l-h*i)*y,e[2]=(a*i-s*o)*y,e[3]=d*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-a*t)*y,e[6]=f*y,e[7]=(i*c-l*t)*y,e[8]=(o*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ma.makeScale(e,t)),this}rotate(e){return this.premultiply(Ma.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ma.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ma=new We;function zu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Kr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Op(){let n=Kr("canvas");return n.style.display="block",n}var Ih={};function Ns(n){n in Ih||(Ih[n]=!0,console.warn(n))}var Dh=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Uh=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),gr={[Fn]:{transfer:Yr,primaries:Zr,toReference:n=>n,fromReference:n=>n},[gt]:{transfer:lt,primaries:Zr,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Lo]:{transfer:Yr,primaries:$r,toReference:n=>n.applyMatrix3(Uh),fromReference:n=>n.applyMatrix3(Dh)},[qc]:{transfer:lt,primaries:$r,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Uh),fromReference:n=>n.applyMatrix3(Dh).convertLinearToSRGB()}},Fp=new Set([Fn,Lo]),nt={enabled:!0,_workingColorSpace:Fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Fp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=gr[e].toReference,s=gr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return gr[n].primaries},getTransfer:function(n){return n===en?Yr:gr[n].transfer}};function ls(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ba(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Wi,Qr=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wi===void 0&&(Wi=Kr("canvas")),Wi.width=e.width,Wi.height=e.height;let i=Wi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Wi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Kr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ls(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ls(t[i]/255)*255):t[i]=ls(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},zp=0,jr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=Ks(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Sa(s[o].image)):r.push(Sa(s[o]))}else r=Sa(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Sa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qr.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var kp=0,tn=class n extends ni{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=fn,s=fn,r=jt,o=Bs,a=pn,c=ei,l=n.DEFAULT_ANISOTROPY,h=en){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Ks(),this.name="",this.source=new jr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===wi?gt:en),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ru)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ks:e.x=e.x-Math.floor(e.x);break;case fn:e.x=e.x<0?0:1;break;case ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ks:e.y=e.y-Math.floor(e.y);break;case fn:e.y=e.y<0?0:1;break;case ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===gt?wi:Ou}set encoding(e){Ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===wi?gt:en}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Ru;tn.DEFAULT_ANISOTROPY=1;var ut=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,b=(f+1)/2,R=(p+1)/2,E=(h+d)/4,A=(u+y)/4,N=(g+m)/4;return _>b&&_>R?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=E/i,r=A/i):b>R?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=E/s,r=N/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=A/r,s=N/r),this.set(i,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-y)/x,this.z=(d-h)/x,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ic=class extends ni{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(Ns("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===wi?gt:en),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new tn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new jr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},zn=class extends ic{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},eo=class extends tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sc=class extends tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],g=r[o+2],y=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=y;return}if(u!==y||c!==d||l!==f||h!==g){let m=1-a,p=c*d+l*f+h*g+u*y,x=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let R=Math.sqrt(_),E=Math.atan2(R,p*x);m=Math.sin(m*E)/R,a=Math.sin(a*E)/R}let b=a*x;if(c=c*m+d*b,l=l*m+f*b,h=h*m+g*b,u=u*m+y*b,m===1-a){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),d=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wa.copy(this).projectOnVector(e),this.sub(wa)}reflect(e){return this.sub(wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},wa=new C,Nh=new Mn,Ei=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ln):ln.fromBufferAttribute(r,o),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yr.copy(i.boundingBox)),yr.applyMatrix4(e.matrixWorld),this.union(yr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ps),_r.subVectors(this.max,Ps),Xi.subVectors(e.a,Ps),qi.subVectors(e.b,Ps),Yi.subVectors(e.c,Ps),Xn.subVectors(qi,Xi),qn.subVectors(Yi,qi),mi.subVectors(Xi,Yi);let t=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-mi.z,mi.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,mi.z,0,-mi.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-mi.y,mi.x,0];return!Ea(t,Xi,qi,Yi,_r)||(t=[1,0,0,0,1,0,0,0,1],!Ea(t,Xi,qi,Yi,_r))?!1:(xr.crossVectors(Xn,qn),t=[xr.x,xr.y,xr.z],Ea(t,Xi,qi,Yi,_r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Cn=[new C,new C,new C,new C,new C,new C,new C,new C],ln=new C,yr=new Ei,Xi=new C,qi=new C,Yi=new C,Xn=new C,qn=new C,mi=new C,Ps=new C,_r=new C,xr=new C,gi=new C;function Ea(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){gi.fromArray(n,r);let a=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),c=e.dot(gi),l=t.dot(gi),h=i.dot(gi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Bp=new Ei,Ls=new C,Ta=new C,Ti=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Bp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ls.subVectors(e,this.center);let t=Ls.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ls,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ta.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ls.copy(e.center).add(Ta)),this.expandByPoint(Ls.copy(e.center).sub(Ta))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Pn=new C,Aa=new C,vr=new C,Yn=new C,Ra=new C,Mr=new C,Ca=new C,ps=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Aa.copy(e).add(t).multiplyScalar(.5),vr.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(Aa);let r=e.distanceTo(t)*.5,o=-this.direction.dot(vr),a=Yn.dot(this.direction),c=-Yn.dot(vr),l=Yn.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Aa).addScaledVector(vr,d),f}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);let i=Pn.dot(this.direction),s=Pn.dot(Pn)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,i,s,r){Ra.subVectors(t,e),Mr.subVectors(i,e),Ca.crossVectors(Ra,Mr);let o=this.direction.dot(Ca),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,e);let c=a*this.direction.dot(Mr.crossVectors(Yn,Mr));if(c<0)return null;let l=a*this.direction.dot(Ra.cross(Yn));if(l<0||c+l>o)return null;let h=-a*Yn.dot(Ca);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},dt=class n{constructor(e,t,i,s,r,o,a,c,l,h,u,d,f,g,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,u,d,f,g,y,m)}set(e,t,i,s,r,o,a,c,l,h,u,d,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Zi.setFromMatrixColumn(e,0).length(),r=1/Zi.setFromMatrixColumn(e,1).length(),o=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,y=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-y*l,t[9]=-a*c,t[2]=y-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,y=l*u;t[0]=d+y*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=y+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,y=l*u;t[0]=d-y*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=y-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,y=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+y,t[1]=c*u,t[5]=y*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,y=a*l;t[0]=c*h,t[4]=y-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-y*u}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,y=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+y,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hp,e,Vp)}lookAt(e,t,i){let s=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),Zn.crossVectors(i,Zt),Zn.lengthSq()===0&&(Math.abs(i.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),Zn.crossVectors(i,Zt)),Zn.normalize(),br.crossVectors(Zt,Zn),s[0]=Zn.x,s[4]=br.x,s[8]=Zt.x,s[1]=Zn.y,s[5]=br.y,s[9]=Zt.y,s[2]=Zn.z,s[6]=br.z,s[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],y=i[6],m=i[10],p=i[14],x=i[3],_=i[7],b=i[11],R=i[15],E=s[0],A=s[4],N=s[8],M=s[12],S=s[1],D=s[5],z=s[9],G=s[13],P=s[2],F=s[6],B=s[10],Z=s[14],Y=s[3],$=s[7],Q=s[11],te=s[15];return r[0]=o*E+a*S+c*P+l*Y,r[4]=o*A+a*D+c*F+l*$,r[8]=o*N+a*z+c*B+l*Q,r[12]=o*M+a*G+c*Z+l*te,r[1]=h*E+u*S+d*P+f*Y,r[5]=h*A+u*D+d*F+f*$,r[9]=h*N+u*z+d*B+f*Q,r[13]=h*M+u*G+d*Z+f*te,r[2]=g*E+y*S+m*P+p*Y,r[6]=g*A+y*D+m*F+p*$,r[10]=g*N+y*z+m*B+p*Q,r[14]=g*M+y*G+m*Z+p*te,r[3]=x*E+_*S+b*P+R*Y,r[7]=x*A+_*D+b*F+R*$,r[11]=x*N+_*z+b*B+R*Q,r[15]=x*M+_*G+b*Z+R*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*a*d+i*l*d+s*a*f-i*c*f)+y*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+t*l*u-t*a*f-r*o*u+i*o*f+r*a*h-i*l*h)+p*(-s*a*h-t*c*u+t*a*d+s*o*u-i*o*d+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],x=u*m*l-y*d*l+y*c*f-a*m*f-u*c*p+a*d*p,_=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,b=h*y*l-g*u*l+g*a*f-o*y*f-h*a*p+o*u*p,R=g*u*c-h*y*c-g*a*d+o*y*d+h*a*m-o*u*m,E=t*x+i*_+s*b+r*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/E;return e[0]=x*A,e[1]=(y*d*r-u*m*r-y*s*f+i*m*f+u*s*p-i*d*p)*A,e[2]=(a*m*r-y*c*r+y*s*l-i*m*l-a*s*p+i*c*p)*A,e[3]=(u*c*r-a*d*r-u*s*l+i*d*l+a*s*f-i*c*f)*A,e[4]=_*A,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*A,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*A,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*f+t*c*f)*A,e[8]=b*A,e[9]=(g*u*r-h*y*r-g*i*f+t*y*f+h*i*p-t*u*p)*A,e[10]=(o*y*r-g*a*r+g*i*l-t*y*l-o*i*p+t*a*p)*A,e[11]=(h*a*r-o*u*r-h*i*l+t*u*l+o*i*f-t*a*f)*A,e[12]=R*A,e[13]=(h*y*s-g*u*s+g*i*d-t*y*d-h*i*m+t*u*m)*A,e[14]=(g*a*s-o*y*s-g*i*c+t*y*c+o*i*m-t*a*m)*A,e[15]=(o*u*s-h*a*s+h*i*c-t*u*c-o*i*d+t*a*d)*A,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,y=o*h,m=o*u,p=a*u,x=c*l,_=c*h,b=c*u,R=i.x,E=i.y,A=i.z;return s[0]=(1-(y+p))*R,s[1]=(f+b)*R,s[2]=(g-_)*R,s[3]=0,s[4]=(f-b)*E,s[5]=(1-(d+p))*E,s[6]=(m+x)*E,s[7]=0,s[8]=(g+_)*A,s[9]=(m-x)*A,s[10]=(1-(d+y))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Zi.set(s[0],s[1],s[2]).length(),o=Zi.set(s[4],s[5],s[6]).length(),a=Zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],hn.copy(this);let l=1/r,h=1/o,u=1/a;return hn.elements[0]*=l,hn.elements[1]*=l,hn.elements[2]*=l,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,t.setFromRotationMatrix(hn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=On){let c=this.elements,l=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),f,g;if(a===On)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Jr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=On){let c=this.elements,l=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*l,f=(i+s)*h,g,y;if(a===On)g=(o+r)*u,y=-2*u;else if(a===Jr)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Zi=new C,hn=new dt,Hp=new C(0,0,0),Vp=new C(1,1,1),Zn=new C,br=new C,Zt=new C,Oh=new dt,Fh=new Mn,ms=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Oh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fh.setFromEuler(this),this.setFromQuaternion(Fh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ms.DEFAULT_ORDER="XYZ";var Vs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Gp=0,zh=new C,$i=new Mn,Ln=new dt,Sr=new C,Is=new C,Wp=new C,Xp=new Mn,kh=new C(1,0,0),Bh=new C(0,1,0),Hh=new C(0,0,1),qp={type:"added"},Yp={type:"removed"},It=class n extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=Ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new C,t=new ms,i=new Mn,s=new C(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new We}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(kh,e)}rotateY(e){return this.rotateOnAxis(Bh,e)}rotateZ(e){return this.rotateOnAxis(Hh,e)}translateOnAxis(e,t){return zh.copy(e).applyQuaternion(this.quaternion),this.position.add(zh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kh,e)}translateY(e){return this.translateOnAxis(Bh,e)}translateZ(e){return this.translateOnAxis(Hh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Sr.copy(e):Sr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Is,Sr,this.up):Ln.lookAt(Sr,Is,this.up),this.quaternion.setFromRotationMatrix(Ln),s&&(Ln.extractRotation(s.matrixWorld),$i.setFromRotationMatrix(Ln),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(qp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yp)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,e,Wp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,Xp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};It.DEFAULT_UP=new C(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var un=new C,In=new C,Pa=new C,Dn=new C,Ji=new C,Ki=new C,Vh=new C,La=new C,Ia=new C,Da=new C,wr=!1,rs=class n{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),un.subVectors(e,t),s.cross(un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){un.subVectors(s,t),In.subVectors(i,t),Pa.subVectors(e,t);let o=un.dot(un),a=un.dot(In),c=un.dot(Pa),l=In.dot(In),h=In.dot(Pa),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getUV(e,t,i,s,r,o,a,c){return wr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wr=!0),this.getInterpolation(e,t,i,s,r,o,a,c)}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Dn.x),c.addScaledVector(o,Dn.y),c.addScaledVector(a,Dn.z),c)}static isFrontFacing(e,t,i,s){return un.subVectors(i,t),In.subVectors(e,t),un.cross(In).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),In.subVectors(this.a,this.b),un.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return wr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wr=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Ji.subVectors(s,i),Ki.subVectors(r,i),La.subVectors(e,i);let c=Ji.dot(La),l=Ki.dot(La);if(c<=0&&l<=0)return t.copy(i);Ia.subVectors(e,s);let h=Ji.dot(Ia),u=Ki.dot(Ia);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(Ji,o);Da.subVectors(e,r);let f=Ji.dot(Da),g=Ki.dot(Da);if(g>=0&&f<=g)return t.copy(r);let y=f*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Ki,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Vh.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Vh,a);let p=1/(m+y+d);return o=y*p,a=d*p,t.copy(i).addScaledVector(Ji,o).addScaledVector(Ki,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},Er={h:0,s:0,l:0};function Ua(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var me=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=nt.workingColorSpace){if(e=Np(e,1),t=Lt(t,0,1),i=Lt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ua(o,r,e+1/3),this.g=Ua(o,r,e),this.b=Ua(o,r,e-1/3)}return nt.toWorkingColorSpace(this,s),this}setStyle(e,t=gt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){let i=ku[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}copyLinearToSRGB(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return nt.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Lt(Ft.r*255,0,255))*65536+Math.round(Lt(Ft.g*255,0,255))*256+Math.round(Lt(Ft.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Ft.copy(this),t);let i=Ft.r,s=Ft.g,r=Ft.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=gt){nt.fromWorkingColorSpace(Ft.copy(this),e);let t=Ft.r,i=Ft.g,s=Ft.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(Er);let i=va($n.h,Er.h,t),s=va($n.s,Er.s,t),r=va($n.l,Er.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ft=new me;me.NAMES=ku;var Zp=0,bn=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=Ks(),this.name="",this.type="Material",this.blending=cs,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$a,this.blendDst=Ja,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(i.blending=this.blending),this.side!==ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$a&&(i.blendSrc=this.blendSrc),this.blendDst!==Ja&&(i.blendDst=this.blendDst),this.blendEquation!==vi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Wr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},vt=class extends bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var bt=new C,Tr=new de,Xt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ch,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Tr.fromBufferAttribute(this,t),Tr.applyMatrix3(e),this.setXY(t,Tr.x,Tr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Cs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),s=Wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),s=Wt(s,this.array),r=Wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ch&&(e.usage=this.usage),e}};var to=class extends Xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var no=class extends Xt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var $e=class extends Xt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var $p=0,Qt=new dt,Na=new It,Qi=new C,$t=new Ei,Ds=new Ei,Ct=new C,yt=class n extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Ks(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zu(e)?no:to)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new We().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,i){return Qt.makeTranslation(e,t,i),this.applyMatrix4(Qt),this}scale(e,t,i){return Qt.makeScale(e,t,i),this.applyMatrix4(Qt),this}lookAt(e){return Na.lookAt(e),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new $e(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){let i=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ds.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors($t.min,Ds.min),$t.expandByPoint(Ct),Ct.addVectors($t.max,Ds.max),$t.expandByPoint(Ct)):($t.expandByPoint(Ds.min),$t.expandByPoint(Ds.max))}$t.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ct.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ct));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ct.fromBufferAttribute(a,l),c&&(Qi.fromBufferAttribute(e,l),Ct.add(Qi)),s=Math.max(s,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let S=0;S<a;S++)l[S]=new C,h[S]=new C;let u=new C,d=new C,f=new C,g=new de,y=new de,m=new de,p=new C,x=new C;function _(S,D,z){u.fromArray(s,S*3),d.fromArray(s,D*3),f.fromArray(s,z*3),g.fromArray(o,S*2),y.fromArray(o,D*2),m.fromArray(o,z*2),d.sub(u),f.sub(u),y.sub(g),m.sub(g);let G=1/(y.x*m.y-m.x*y.y);isFinite(G)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-y.y).multiplyScalar(G),x.copy(f).multiplyScalar(y.x).addScaledVector(d,-m.x).multiplyScalar(G),l[S].add(p),l[D].add(p),l[z].add(p),h[S].add(x),h[D].add(x),h[z].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let S=0,D=b.length;S<D;++S){let z=b[S],G=z.start,P=z.count;for(let F=G,B=G+P;F<B;F+=3)_(i[F+0],i[F+1],i[F+2])}let R=new C,E=new C,A=new C,N=new C;function M(S){A.fromArray(r,S*3),N.copy(A);let D=l[S];R.copy(D),R.sub(A.multiplyScalar(A.dot(D))).normalize(),E.crossVectors(N,D);let G=E.dot(h[S])<0?-1:1;c[S*4]=R.x,c[S*4+1]=R.y,c[S*4+2]=R.z,c[S*4+3]=G}for(let S=0,D=b.length;S<D;++S){let z=b[S],G=z.start,P=z.count;for(let F=G,B=G+P;F<B;F+=3)M(i[F+0]),M(i[F+1]),M(i[F+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new C,r=new C,o=new C,a=new C,c=new C,l=new C,h=new C,u=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?f=c[y]*a.data.stride+a.offset:f=c[y]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Xt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gh=new dt,yi=new ps,Ar=new Ti,Wh=new C,ji=new C,es=new C,ts=new C,Oa=new C,Rr=new C,Cr=new de,Pr=new de,Lr=new de,Xh=new C,qh=new C,Yh=new C,Ir=new C,Dr=new C,Ce=class extends It{constructor(e=new yt,t=new vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Rr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Oa.fromBufferAttribute(u,e),o?Rr.addScaledVector(Oa,h):Rr.addScaledVector(Oa.sub(t),h))}t.add(Rr)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ar.copy(i.boundingSphere),Ar.applyMatrix4(r),yi.copy(e.ray).recast(e.near),!(Ar.containsPoint(yi.origin)===!1&&(yi.intersectSphere(Ar,Wh)===null||yi.origin.distanceToSquared(Wh)>(e.far-e.near)**2))&&(Gh.copy(r).invert(),yi.copy(e.ray).applyMatrix4(Gh),!(i.boundingBox!==null&&yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=x,R=_;b<R;b+=3){let E=a.getX(b),A=a.getX(b+1),N=a.getX(b+2);s=Ur(this,p,e,i,l,h,u,E,A,N),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let x=a.getX(m),_=a.getX(m+1),b=a.getX(m+2);s=Ur(this,o,e,i,l,h,u,x,_,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let b=x,R=_;b<R;b+=3){let E=b,A=b+1,N=b+2;s=Ur(this,p,e,i,l,h,u,E,A,N),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let x=m,_=m+1,b=m+2;s=Ur(this,o,e,i,l,h,u,x,_,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Jp(n,e,t,i,s,r,o,a){let c;if(e.side===kt?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===ti,a),c===null)return null;Dr.copy(a),Dr.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Dr);return l<t.near||l>t.far?null:{distance:l,point:Dr.clone(),object:n}}function Ur(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,ji),n.getVertexPosition(c,es),n.getVertexPosition(l,ts);let h=Jp(n,e,t,i,ji,es,ts,Ir);if(h){s&&(Cr.fromBufferAttribute(s,a),Pr.fromBufferAttribute(s,c),Lr.fromBufferAttribute(s,l),h.uv=rs.getInterpolation(Ir,ji,es,ts,Cr,Pr,Lr,new de)),r&&(Cr.fromBufferAttribute(r,a),Pr.fromBufferAttribute(r,c),Lr.fromBufferAttribute(r,l),h.uv1=rs.getInterpolation(Ir,ji,es,ts,Cr,Pr,Lr,new de),h.uv2=h.uv1),o&&(Xh.fromBufferAttribute(o,a),qh.fromBufferAttribute(o,c),Yh.fromBufferAttribute(o,l),h.normal=rs.getInterpolation(Ir,ji,es,ts,Xh,qh,Yh,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new C,materialIndex:0};rs.getNormal(ji,es,ts,u.normal),h.face=u}return h}var Ai=class n extends yt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(u,2));function g(y,m,p,x,_,b,R,E,A,N,M){let S=b/A,D=R/N,z=b/2,G=R/2,P=E/2,F=A+1,B=N+1,Z=0,Y=0,$=new C;for(let Q=0;Q<B;Q++){let te=Q*D-G;for(let ce=0;ce<F;ce++){let W=ce*S-z;$[y]=W*x,$[m]=te*_,$[p]=P,l.push($.x,$.y,$.z),$[y]=0,$[m]=0,$[p]=E>0?1:-1,h.push($.x,$.y,$.z),u.push(ce/A),u.push(1-Q/N),Z+=1}}for(let Q=0;Q<N;Q++)for(let te=0;te<A;te++){let ce=d+te+F*Q,W=d+te+F*(Q+1),j=d+(te+1)+F*(Q+1),ue=d+(te+1)+F*Q;c.push(ce,W,ue),c.push(W,j,ue),Y+=6}a.addGroup(f,Y,M),f+=Y,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function gs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Vt(n){let e={};for(let t=0;t<n.length;t++){let i=gs(n[t]);for(let s in i)e[s]=i[s]}return e}function Kp(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Bu(n){return n.getRenderTarget()===null?n.outputColorSpace:nt.workingColorSpace}var Qp={clone:gs,merge:Vt},jp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jp,this.fragmentShader=em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=Kp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},io=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=On}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},zt=class extends io{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=tc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tc*2*Math.atan(Math.tan(xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ns=-90,is=1,rc=class extends It{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new zt(ns,is,e,t);s.layers=this.layers,this.add(s);let r=new zt(ns,is,e,t);r.layers=this.layers,this.add(r);let o=new zt(ns,is,e,t);o.layers=this.layers,this.add(o);let a=new zt(ns,is,e,t);a.layers=this.layers,this.add(a);let c=new zt(ns,is,e,t);c.layers=this.layers,this.add(c);let l=new zt(ns,is,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===On)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Jr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},so=class extends tn{constructor(e,t,i,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:us,super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},oc=class extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Ns("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===wi?gt:en),this.texture=new so(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ai(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kt,blending:Qn});r.uniforms.tEquirect.value=t;let o=new Ce(s,r),a=t.minFilter;return t.minFilter===Bs&&(t.minFilter=jt),new rc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Fa=new C,tm=new C,nm=new We,Nn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Fa.subVectors(i,t).cross(tm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Fa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||nm.getNormalMatrix(e),s=this.coplanarPoint(Fa).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},_i=new Ti,Nr=new C,Gs=class{constructor(e=new Nn,t=new Nn,i=new Nn,s=new Nn,r=new Nn,o=new Nn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=On){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],y=s[10],m=s[11],p=s[12],x=s[13],_=s[14],b=s[15];if(i[0].setComponents(c-r,d-l,m-f,b-p).normalize(),i[1].setComponents(c+r,d+l,m+f,b+p).normalize(),i[2].setComponents(c+o,d+h,m+g,b+x).normalize(),i[3].setComponents(c-o,d-h,m-g,b-x).normalize(),i[4].setComponents(c-a,d-u,m-y,b-_).normalize(),t===On)i[5].setComponents(c+a,d+u,m+y,b+_).normalize();else if(t===Jr)i[5].setComponents(a,u,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Nr.x=s.normal.x>0?e.max.x:e.min.x,Nr.y=s.normal.y>0?e.max.y:e.min.y,Nr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Nr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Hu(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function im(n,e){let t=e.isWebGL2,i=new WeakMap;function s(l,h){let u=l.array,d=l.usage,f=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),l.onUploadCallback();let y;if(u instanceof Float32Array)y=n.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)y=n.SHORT;else if(u instanceof Uint32Array)y=n.UNSIGNED_INT;else if(u instanceof Int32Array)y=n.INT;else if(u instanceof Int8Array)y=n.BYTE;else if(u instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:y,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,l),f.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let y=0,m=g.length;y<m;y++){let p=g[y];t?n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);if(u===void 0)i.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var Sn=class n extends yt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let x=p*d-o;for(let _=0;_<l;_++){let b=_*u-r;g.push(b,-x,0),y.push(0,0,1),m.push(_/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){let _=x+l*p,b=x+l*(p+1),R=x+1+l*(p+1),E=x+1+l*p;f.push(_,b,E),f.push(b,R,E)}this.setIndex(f),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(y,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},sm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rm=`#ifdef USE_ALPHAHASH
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
#endif`,om=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,am=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,lm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hm=`#ifdef USE_AOMAP
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
#endif`,um=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dm=`#ifdef USE_BATCHING
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
#endif`,fm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,pm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ym=`#ifdef USE_IRIDESCENCE
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
#endif`,_m=`#ifdef USE_BUMPMAP
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
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Am=`#define PI 3.141592653589793
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
} // validated`,Rm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cm=`vec3 transformedNormal = objectNormal;
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
#endif`,Pm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Um="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nm=`
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
}`,Om=`#ifdef USE_ENVMAP
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
#endif`,Fm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zm=`#ifdef USE_ENVMAP
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
#endif`,km=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
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
#endif`,Hm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xm=`#ifdef USE_GRADIENTMAP
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
}`,qm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ym=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jm=`uniform bool receiveShadow;
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
#endif`,Km=`#ifdef USE_ENVMAP
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
#endif`,Qm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,e0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,t0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,n0=`PhysicalMaterial material;
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
#endif`,i0=`struct PhysicalMaterial {
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
}`,s0=`
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
#endif`,r0=`#if defined( RE_IndirectDiffuse )
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
#endif`,o0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,h0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,u0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,p0=`#if defined( USE_POINTS_UV )
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
#endif`,m0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_0=`#ifdef USE_MORPHNORMALS
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
#endif`,x0=`#ifdef USE_MORPHTARGETS
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
#endif`,v0=`#ifdef USE_MORPHTARGETS
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
#endif`,M0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,b0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,S0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,T0=`#ifdef USE_NORMALMAP
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
#endif`,A0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,R0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,L0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,D0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,U0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,V0=`float getShadowMask() {
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
}`,G0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W0=`#ifdef USE_SKINNING
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
#endif`,X0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q0=`#ifdef USE_SKINNING
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
#endif`,Y0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,K0=`#ifdef USE_TRANSMISSION
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
#endif`,Q0=`#ifdef USE_TRANSMISSION
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
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ig=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sg=`uniform sampler2D t2D;
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,og=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`#include <common>
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
}`,hg=`#if DEPTH_PACKING == 3200
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
}`,ug=`#define DISTANCE
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
}`,dg=`#define DISTANCE
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
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mg=`uniform float scale;
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
}`,gg=`uniform vec3 diffuse;
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
}`,yg=`#include <common>
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
}`,_g=`uniform vec3 diffuse;
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
}`,xg=`#define LAMBERT
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
}`,vg=`#define LAMBERT
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
}`,Mg=`#define MATCAP
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
}`,bg=`#define MATCAP
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
}`,Sg=`#define NORMAL
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
}`,wg=`#define NORMAL
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
}`,Eg=`#define PHONG
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
}`,Tg=`#define PHONG
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
}`,Ag=`#define STANDARD
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
}`,Rg=`#define STANDARD
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
}`,Cg=`#define TOON
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
}`,Pg=`#define TOON
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
}`,Lg=`uniform float size;
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
}`,Ig=`uniform vec3 diffuse;
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
}`,Dg=`#include <common>
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
}`,Ug=`uniform vec3 color;
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
}`,Ng=`uniform float rotation;
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
}`,Og=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:sm,alphahash_pars_fragment:rm,alphamap_fragment:om,alphamap_pars_fragment:am,alphatest_fragment:cm,alphatest_pars_fragment:lm,aomap_fragment:hm,aomap_pars_fragment:um,batching_pars_vertex:dm,batching_vertex:fm,begin_vertex:pm,beginnormal_vertex:mm,bsdfs:gm,iridescence_fragment:ym,bumpmap_pars_fragment:_m,clipping_planes_fragment:xm,clipping_planes_pars_fragment:vm,clipping_planes_pars_vertex:Mm,clipping_planes_vertex:bm,color_fragment:Sm,color_pars_fragment:wm,color_pars_vertex:Em,color_vertex:Tm,common:Am,cube_uv_reflection_fragment:Rm,defaultnormal_vertex:Cm,displacementmap_pars_vertex:Pm,displacementmap_vertex:Lm,emissivemap_fragment:Im,emissivemap_pars_fragment:Dm,colorspace_fragment:Um,colorspace_pars_fragment:Nm,envmap_fragment:Om,envmap_common_pars_fragment:Fm,envmap_pars_fragment:zm,envmap_pars_vertex:km,envmap_physical_pars_fragment:Km,envmap_vertex:Bm,fog_vertex:Hm,fog_pars_vertex:Vm,fog_fragment:Gm,fog_pars_fragment:Wm,gradientmap_pars_fragment:Xm,lightmap_fragment:qm,lightmap_pars_fragment:Ym,lights_lambert_fragment:Zm,lights_lambert_pars_fragment:$m,lights_pars_begin:Jm,lights_toon_fragment:Qm,lights_toon_pars_fragment:jm,lights_phong_fragment:e0,lights_phong_pars_fragment:t0,lights_physical_fragment:n0,lights_physical_pars_fragment:i0,lights_fragment_begin:s0,lights_fragment_maps:r0,lights_fragment_end:o0,logdepthbuf_fragment:a0,logdepthbuf_pars_fragment:c0,logdepthbuf_pars_vertex:l0,logdepthbuf_vertex:h0,map_fragment:u0,map_pars_fragment:d0,map_particle_fragment:f0,map_particle_pars_fragment:p0,metalnessmap_fragment:m0,metalnessmap_pars_fragment:g0,morphcolor_vertex:y0,morphnormal_vertex:_0,morphtarget_pars_vertex:x0,morphtarget_vertex:v0,normal_fragment_begin:M0,normal_fragment_maps:b0,normal_pars_fragment:S0,normal_pars_vertex:w0,normal_vertex:E0,normalmap_pars_fragment:T0,clearcoat_normal_fragment_begin:A0,clearcoat_normal_fragment_maps:R0,clearcoat_pars_fragment:C0,iridescence_pars_fragment:P0,opaque_fragment:L0,packing:I0,premultiplied_alpha_fragment:D0,project_vertex:U0,dithering_fragment:N0,dithering_pars_fragment:O0,roughnessmap_fragment:F0,roughnessmap_pars_fragment:z0,shadowmap_pars_fragment:k0,shadowmap_pars_vertex:B0,shadowmap_vertex:H0,shadowmask_pars_fragment:V0,skinbase_vertex:G0,skinning_pars_vertex:W0,skinning_vertex:X0,skinnormal_vertex:q0,specularmap_fragment:Y0,specularmap_pars_fragment:Z0,tonemapping_fragment:$0,tonemapping_pars_fragment:J0,transmission_fragment:K0,transmission_pars_fragment:Q0,uv_pars_fragment:j0,uv_pars_vertex:eg,uv_vertex:tg,worldpos_vertex:ng,background_vert:ig,background_frag:sg,backgroundCube_vert:rg,backgroundCube_frag:og,cube_vert:ag,cube_frag:cg,depth_vert:lg,depth_frag:hg,distanceRGBA_vert:ug,distanceRGBA_frag:dg,equirect_vert:fg,equirect_frag:pg,linedashed_vert:mg,linedashed_frag:gg,meshbasic_vert:yg,meshbasic_frag:_g,meshlambert_vert:xg,meshlambert_frag:vg,meshmatcap_vert:Mg,meshmatcap_frag:bg,meshnormal_vert:Sg,meshnormal_frag:wg,meshphong_vert:Eg,meshphong_frag:Tg,meshphysical_vert:Ag,meshphysical_frag:Rg,meshtoon_vert:Cg,meshtoon_frag:Pg,points_vert:Lg,points_frag:Ig,shadow_vert:Dg,shadow_frag:Ug,sprite_vert:Ng,sprite_frag:Og},oe={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},vn={basic:{uniforms:Vt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Vt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new me(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Vt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Vt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Vt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new me(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Vt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Vt([oe.points,oe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Vt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Vt([oe.common,oe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Vt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Vt([oe.sprite,oe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Vt([oe.common,oe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Vt([oe.lights,oe.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};vn.physical={uniforms:Vt([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var Or={r:0,b:0,g:0};function Fg(n,e,t,i,s,r,o){let a=new me(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(m,p){let x=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_)),_===null?y(a,c):_&&_.isColor&&(y(_,1),x=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Po)?(h===void 0&&(h=new Ce(new Ai(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:gs(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=nt.getTransfer(_.colorSpace)!==lt,(u!==_||d!==_.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ce(new Sn(2,2),new mn({name:"BackgroundMaterial",uniforms:gs(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=nt.getTransfer(_.colorSpace)!==lt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function y(m,p){m.getRGB(Or,Bu(n)),i.buffers.color.setClear(Or.r,Or.g,Or.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,y(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,y(a,c)},render:g}}function zg(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function u(P,F,B,Z,Y){let $=!1;if(o){let Q=y(Z,B,F);l!==Q&&(l=Q,f(l.object)),$=p(P,Z,B,Y),$&&x(P,Z,B,Y)}else{let Q=F.wireframe===!0;(l.geometry!==Z.id||l.program!==B.id||l.wireframe!==Q)&&(l.geometry=Z.id,l.program=B.id,l.wireframe=Q,$=!0)}Y!==null&&t.update(Y,n.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,N(P,F,B,Z),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function f(P){return i.isWebGL2?n.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?n.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function y(P,F,B){let Z=B.wireframe===!0,Y=a[P.id];Y===void 0&&(Y={},a[P.id]=Y);let $=Y[F.id];$===void 0&&($={},Y[F.id]=$);let Q=$[Z];return Q===void 0&&(Q=m(d()),$[Z]=Q),Q}function m(P){let F=[],B=[],Z=[];for(let Y=0;Y<s;Y++)F[Y]=0,B[Y]=0,Z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:B,attributeDivisors:Z,object:P,attributes:{},index:null}}function p(P,F,B,Z){let Y=l.attributes,$=F.attributes,Q=0,te=B.getAttributes();for(let ce in te)if(te[ce].location>=0){let j=Y[ce],ue=$[ce];if(ue===void 0&&(ce==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),ce==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor)),j===void 0||j.attribute!==ue||ue&&j.data!==ue.data)return!0;Q++}return l.attributesNum!==Q||l.index!==Z}function x(P,F,B,Z){let Y={},$=F.attributes,Q=0,te=B.getAttributes();for(let ce in te)if(te[ce].location>=0){let j=$[ce];j===void 0&&(ce==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),ce==="instanceColor"&&P.instanceColor&&(j=P.instanceColor));let ue={};ue.attribute=j,j&&j.data&&(ue.data=j.data),Y[ce]=ue,Q++}l.attributes=Y,l.attributesNum=Q,l.index=Z}function _(){let P=l.newAttributes;for(let F=0,B=P.length;F<B;F++)P[F]=0}function b(P){R(P,0)}function R(P,F){let B=l.newAttributes,Z=l.enabledAttributes,Y=l.attributeDivisors;B[P]=1,Z[P]===0&&(n.enableVertexAttribArray(P),Z[P]=1),Y[P]!==F&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,F),Y[P]=F)}function E(){let P=l.newAttributes,F=l.enabledAttributes;for(let B=0,Z=F.length;B<Z;B++)F[B]!==P[B]&&(n.disableVertexAttribArray(B),F[B]=0)}function A(P,F,B,Z,Y,$,Q){Q===!0?n.vertexAttribIPointer(P,F,B,Y,$):n.vertexAttribPointer(P,F,B,Z,Y,$)}function N(P,F,B,Z){if(i.isWebGL2===!1&&(P.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let Y=Z.attributes,$=B.getAttributes(),Q=F.defaultAttributeValues;for(let te in $){let ce=$[te];if(ce.location>=0){let W=Y[te];if(W===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(W=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(W=P.instanceColor)),W!==void 0){let j=W.normalized,ue=W.itemSize,be=t.get(W);if(be===void 0)continue;let Me=be.buffer,Ne=be.type,Fe=be.bytesPerElement,Pe=i.isWebGL2===!0&&(Ne===n.INT||Ne===n.UNSIGNED_INT||W.gpuType===Cu);if(W.isInterleavedBufferAttribute){let Ke=W.data,k=Ke.stride,Pt=W.offset;if(Ke.isInstancedInterleavedBuffer){for(let ge=0;ge<ce.locationSize;ge++)R(ce.location+ge,Ke.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Ke.meshPerAttribute*Ke.count)}else for(let ge=0;ge<ce.locationSize;ge++)b(ce.location+ge);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let ge=0;ge<ce.locationSize;ge++)A(ce.location+ge,ue/ce.locationSize,Ne,j,k*Fe,(Pt+ue/ce.locationSize*ge)*Fe,Pe)}else{if(W.isInstancedBufferAttribute){for(let Ke=0;Ke<ce.locationSize;Ke++)R(ce.location+Ke,W.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Ke=0;Ke<ce.locationSize;Ke++)b(ce.location+Ke);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let Ke=0;Ke<ce.locationSize;Ke++)A(ce.location+Ke,ue/ce.locationSize,Ne,j,ue*Fe,ue/ce.locationSize*Ke*Fe,Pe)}}else if(Q!==void 0){let j=Q[te];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(ce.location,j);break;case 3:n.vertexAttrib3fv(ce.location,j);break;case 4:n.vertexAttrib4fv(ce.location,j);break;default:n.vertexAttrib1fv(ce.location,j)}}}}E()}function M(){z();for(let P in a){let F=a[P];for(let B in F){let Z=F[B];for(let Y in Z)g(Z[Y].object),delete Z[Y];delete F[B]}delete a[P]}}function S(P){if(a[P.id]===void 0)return;let F=a[P.id];for(let B in F){let Z=F[B];for(let Y in Z)g(Z[Y].object),delete Z[Y];delete F[B]}delete a[P.id]}function D(P){for(let F in a){let B=a[F];if(B[P.id]===void 0)continue;let Z=B[P.id];for(let Y in Z)g(Z[Y].object),delete Z[Y];delete B[P.id]}}function z(){G(),h=!0,l!==c&&(l=c,f(l.object))}function G(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:z,resetDefaultState:G,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:b,disableUnusedAttributes:E}}function kg(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,d){if(d===0)return;let f,g;if(s)f=n,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),t.update(u,r,d)}function l(h,u,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let y=0;y<d;y++)g+=u[y];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Bg(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,b=o||e.has("OES_texture_float"),R=_&&b,E=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:b,floatVertexTextures:R,maxSamples:E}}function Hg(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Nn,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let x=r?0:i,_=x*4,b=p.clippingState||null;c.value=b,b=h(g,d,_,f);for(let R=0;R!==_;++R)b[R]=t[R];p.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=f+y*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,b=f;_!==y;++_,b+=4)o.copy(u[_]).applyMatrix4(x,a),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function Vg(n){let e=new WeakMap;function t(o,a){return a===Ka?o.mapping=us:a===Qa&&(o.mapping=ds),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ka||a===Qa)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new oc(c.height/2);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var ro=class extends io{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},os=4,Zh=[.125,.215,.35,.446,.526,.582],Mi=20,za=new ro,$h=new me,ka=null,Ba=0,Ha=0,xi=(1+Math.sqrt(5))/2,ss=1/xi,Jh=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,xi,ss),new C(0,xi,-ss),new C(ss,0,xi),new C(-ss,0,xi),new C(xi,ss,0),new C(-xi,ss,0)],oo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){ka=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ka,Ba,Ha),e.scissorTest=!1,Fr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===us||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ka=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Hs,format:pn,colorSpace:Fn,depthBuffer:!1},s=Kh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kh(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gg(r)),this._blurMaterial=Wg(r,e,t)}return s}_compileMaterial(e){let t=new Ce(this._lodPlanes[0],e);this._renderer.compile(t,za)}_sceneToCubeUV(e,t,i,s){let a=new zt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor($h),h.toneMapping=jn,h.autoClear=!1;let f=new vt({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),g=new Ce(new Ai,f),y=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,y=!0):(f.color.copy($h),y=!0);for(let p=0;p<6;p++){let x=p%3;x===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):x===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let _=this._cubeSize;Fr(s,x*_,p>2?_:0,_,_),h.setRenderTarget(s),y&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===us||e.mapping===ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ce(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Fr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,za)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Jh[(s-1)%Jh.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ce(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Mi-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):Mi;m>Mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);let p=[],x=0;for(let A=0;A<Mi;++A){let N=A/y,M=Math.exp(-N*N/2);p.push(M),A===0?x+=M:A<m&&(x+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;let b=this._sizeLods[s],R=3*b*(s>_-os?s-_+os:0),E=4*(this._cubeSize-b);Fr(t,R,E,3*b,2*b),c.setRenderTarget(t),c.render(u,za)}};function Gg(n){let e=[],t=[],i=[],s=n,r=n-os+1+Zh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>n-os?c=Zh[o-n+os-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,y=3,m=2,p=1,x=new Float32Array(y*g*f),_=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let E=0;E<f;E++){let A=E%3*2/3-1,N=E>2?0:-1,M=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];x.set(M,y*g*E),_.set(d,m*g*E);let S=[E,E,E,E,E,E];b.set(S,p*g*E)}let R=new yt;R.setAttribute("position",new Xt(x,y)),R.setAttribute("uv",new Xt(_,m)),R.setAttribute("faceIndex",new Xt(b,p)),e.push(R),s>os&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Kh(n,e,t){let i=new zn(n,e,t);return i.texture.mapping=Po,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Wg(n,e,t){let i=new Float32Array(Mi),s=new C(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Qh(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function jh(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Yc(){return`

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
	`}function Xg(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ka||c===Qa,h=c===us||c===ds;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new oo(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new oo(n));let d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function qg(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Yg(n,e,t,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let y=d.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)e.remove(y[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let y=f[g];for(let m=0,p=y.length;m<p;m++)e.update(y[m],n.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,y=0;if(f!==null){let x=f.array;y=f.version;for(let _=0,b=x.length;_<b;_+=3){let R=x[_+0],E=x[_+1],A=x[_+2];d.push(R,E,E,A,A,R)}}else if(g!==void 0){let x=g.array;y=g.version;for(let _=0,b=x.length/3-1;_<b;_+=3){let R=_+0,E=_+1,A=_+2;d.push(R,E,E,A,A,R)}}else return;let m=new(zu(d)?no:to)(d,1);m.version=y;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Zg(n,e,t,i){let s=i.isWebGL2,r;function o(f){r=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,g){n.drawElements(r,g,a,f*c),t.update(g,r,1)}function u(f,g,y){if(y===0)return;let m,p;if(s)m=n,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,f*c,y),t.update(g,r,y)}function d(f,g,y){if(y===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<y;p++)this.render(f[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,f,0,y);let p=0;for(let x=0;x<y;x++)p+=g[x];t.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function $g(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Jg(n,e){return n[0]-e[0]}function Kg(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Qg(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new ut,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,y=r.get(h);if(y===void 0||y.count!==g){let P=function(){z.dispose(),r.delete(h),h.removeEventListener("dispose",P)};y!==void 0&&y.texture.dispose();let x=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],N=0;x===!0&&(N=1),_===!0&&(N=2),b===!0&&(N=3);let M=h.attributes.position.count*N,S=1;M>e.maxTextureSize&&(S=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let D=new Float32Array(M*S*4*g),z=new eo(D,M,S,g);z.type=Kn,z.needsUpdate=!0;let G=N*4;for(let F=0;F<g;F++){let B=R[F],Z=E[F],Y=A[F],$=M*S*4*F;for(let Q=0;Q<B.count;Q++){let te=Q*G;x===!0&&(o.fromBufferAttribute(B,Q),D[$+te+0]=o.x,D[$+te+1]=o.y,D[$+te+2]=o.z,D[$+te+3]=0),_===!0&&(o.fromBufferAttribute(Z,Q),D[$+te+4]=o.x,D[$+te+5]=o.y,D[$+te+6]=o.z,D[$+te+7]=0),b===!0&&(o.fromBufferAttribute(Y,Q),D[$+te+8]=o.x,D[$+te+9]=o.y,D[$+te+10]=o.z,D[$+te+11]=Y.itemSize===4?o.w:1)}}y={count:g,texture:z,size:new de(M,S)},r.set(h,y),h.addEventListener("dispose",P)}let m=0;for(let x=0;x<d.length;x++)m+=d[x];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",p),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",y.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",y.size)}else{let f=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==f){g=[];for(let _=0;_<f;_++)g[_]=[_,0];i[h.id]=g}for(let _=0;_<f;_++){let b=g[_];b[0]=_,b[1]=d[_]}g.sort(Kg);for(let _=0;_<8;_++)_<f&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(Jg);let y=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let _=0;_<8;_++){let b=a[_],R=b[0],E=b[1];R!==Number.MAX_SAFE_INTEGER&&E?(y&&h.getAttribute("morphTarget"+_)!==y[R]&&h.setAttribute("morphTarget"+_,y[R]),m&&h.getAttribute("morphNormal"+_)!==m[R]&&h.setAttribute("morphNormal"+_,m[R]),s[_]=E,p+=E):(y&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let x=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",x),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function jg(n,e,t,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var ao=class extends tn{constructor(e,t,i,s,r,o,a,c,l,h){if(h=h!==void 0?h:Si,h!==Si&&h!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Si&&(i=Jn),i===void 0&&h===fs&&(i=bi),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Gt,this.minFilter=c!==void 0?c:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Vu=new tn,Gu=new ao(1,1);Gu.compareFunction=Fu;var Wu=new eo,Xu=new sc,qu=new so,eu=[],tu=[],nu=new Float32Array(16),iu=new Float32Array(9),su=new Float32Array(4);function xs(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=eu[s];if(r===void 0&&(r=new Float32Array(s),eu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Tt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Io(n,e){let t=tu[e];t===void 0&&(t=new Int32Array(e),tu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ey(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ty(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),Tt(t,e)}}function ny(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),Tt(t,e)}}function iy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),Tt(t,e)}}function sy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;su.set(i),n.uniformMatrix2fv(this.addr,!1,su),Tt(t,i)}}function ry(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;iu.set(i),n.uniformMatrix3fv(this.addr,!1,iu),Tt(t,i)}}function oy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;nu.set(i),n.uniformMatrix4fv(this.addr,!1,nu),Tt(t,i)}}function ay(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function cy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),Tt(t,e)}}function ly(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),Tt(t,e)}}function hy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),Tt(t,e)}}function uy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function dy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),Tt(t,e)}}function fy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),Tt(t,e)}}function py(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),Tt(t,e)}}function my(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Gu:Vu;t.setTexture2D(e||r,s)}function gy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Xu,s)}function yy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||qu,s)}function _y(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Wu,s)}function xy(n){switch(n){case 5126:return ey;case 35664:return ty;case 35665:return ny;case 35666:return iy;case 35674:return sy;case 35675:return ry;case 35676:return oy;case 5124:case 35670:return ay;case 35667:case 35671:return cy;case 35668:case 35672:return ly;case 35669:case 35673:return hy;case 5125:return uy;case 36294:return dy;case 36295:return fy;case 36296:return py;case 35678:case 36198:case 36298:case 36306:case 35682:return my;case 35679:case 36299:case 36307:return gy;case 35680:case 36300:case 36308:case 36293:return yy;case 36289:case 36303:case 36311:case 36292:return _y}}function vy(n,e){n.uniform1fv(this.addr,e)}function My(n,e){let t=xs(e,this.size,2);n.uniform2fv(this.addr,t)}function by(n,e){let t=xs(e,this.size,3);n.uniform3fv(this.addr,t)}function Sy(n,e){let t=xs(e,this.size,4);n.uniform4fv(this.addr,t)}function wy(n,e){let t=xs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ey(n,e){let t=xs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ty(n,e){let t=xs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ay(n,e){n.uniform1iv(this.addr,e)}function Ry(n,e){n.uniform2iv(this.addr,e)}function Cy(n,e){n.uniform3iv(this.addr,e)}function Py(n,e){n.uniform4iv(this.addr,e)}function Ly(n,e){n.uniform1uiv(this.addr,e)}function Iy(n,e){n.uniform2uiv(this.addr,e)}function Dy(n,e){n.uniform3uiv(this.addr,e)}function Uy(n,e){n.uniform4uiv(this.addr,e)}function Ny(n,e,t){let i=this.cache,s=e.length,r=Io(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Vu,r[o])}function Oy(n,e,t){let i=this.cache,s=e.length,r=Io(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Xu,r[o])}function Fy(n,e,t){let i=this.cache,s=e.length,r=Io(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||qu,r[o])}function zy(n,e,t){let i=this.cache,s=e.length,r=Io(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Wu,r[o])}function ky(n){switch(n){case 5126:return vy;case 35664:return My;case 35665:return by;case 35666:return Sy;case 35674:return wy;case 35675:return Ey;case 35676:return Ty;case 5124:case 35670:return Ay;case 35667:case 35671:return Ry;case 35668:case 35672:return Cy;case 35669:case 35673:return Py;case 5125:return Ly;case 36294:return Iy;case 36295:return Dy;case 36296:return Uy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ny;case 35679:case 36299:case 36307:return Oy;case 35680:case 36300:case 36308:case 36293:return Fy;case 36289:case 36303:case 36311:case 36292:return zy}}var ac=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=xy(t.type)}},cc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ky(t.type)}},lc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Va=/(\w+)(\])?(\[|\.)?/g;function ru(n,e){n.seq.push(e),n.map[e.id]=e}function By(n,e,t){let i=n.name,s=i.length;for(Va.lastIndex=0;;){let r=Va.exec(i),o=Va.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ru(t,l===void 0?new ac(a,n,e):new cc(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new lc(a),ru(t,u)),t=u}}}var hs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);By(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function ou(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Hy=37297,Vy=0;function Gy(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Wy(n){let e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(n),i;switch(e===t?i="":e===$r&&t===Zr?i="LinearDisplayP3ToLinearSRGB":e===Zr&&t===$r&&(i="LinearSRGBToLinearDisplayP3"),n){case Fn:case Lo:return[i,"LinearTransferOETF"];case gt:case qc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function au(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Gy(n.getShaderSource(e),o)}else return s}function Xy(n,e){let t=Wy(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function qy(n,e){let t;switch(e){case up:t="Linear";break;case dp:t="Reinhard";break;case fp:t="OptimizedCineon";break;case Gc:t="ACESFilmic";break;case mp:t="AgX";break;case pp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Yy(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(as).join(`
`)}function Zy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(as).join(`
`)}function $y(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Jy(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function as(n){return n!==""}function cu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ky=/^[ \t]*#include +<([\w\d./]+)>/gm;function hc(n){return n.replace(Ky,jy)}var Qy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function jy(n,e){let t=Ge[e];if(t===void 0){let i=Qy.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return hc(t)}var e_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hu(n){return n.replace(e_,t_)}function t_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function n_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ro?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===kf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Un&&(e="SHADOWMAP_TYPE_VSM"),e}function i_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case us:case ds:e="ENVMAP_TYPE_CUBE";break;case Po:e="ENVMAP_TYPE_CUBE_UV";break}return e}function s_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ds:e="ENVMAP_MODE_REFRACTION";break}return e}function r_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Co:e="ENVMAP_BLENDING_MULTIPLY";break;case lp:e="ENVMAP_BLENDING_MIX";break;case hp:e="ENVMAP_BLENDING_ADD";break}return e}function o_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function a_(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=n_(t),l=i_(t),h=s_(t),u=r_(t),d=o_(t),f=t.isWebGL2?"":Yy(t),g=Zy(t),y=$y(r),m=s.createProgram(),p,x,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(as).join(`
`),p.length>0&&(p+=`
`),x=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(as).join(`
`),x.length>0&&(x+=`
`)):(p=[uu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(as).join(`
`),x=[f,uu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==jn?qy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Xy("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(as).join(`
`)),o=hc(o),o=cu(o,t),o=lu(o,t),a=hc(a),a=cu(a,t),a=lu(a,t),o=hu(o),a=hu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let b=_+p+o,R=_+x+a,E=ou(s,s.VERTEX_SHADER,b),A=ou(s,s.FRAGMENT_SHADER,R);s.attachShader(m,E),s.attachShader(m,A),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function N(z){if(n.debug.checkShaderErrors){let G=s.getProgramInfoLog(m).trim(),P=s.getShaderInfoLog(E).trim(),F=s.getShaderInfoLog(A).trim(),B=!0,Z=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,E,A);else{let Y=au(s,E,"vertex"),$=au(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+G+`
`+Y+`
`+$)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(P===""||F==="")&&(Z=!1);Z&&(z.diagnostics={runnable:B,programLog:G,vertexShader:{log:P,prefix:p},fragmentShader:{log:F,prefix:x}})}s.deleteShader(E),s.deleteShader(A),M=new hs(s,m),S=Jy(s,m)}let M;this.getUniforms=function(){return M===void 0&&N(this),M};let S;this.getAttributes=function(){return S===void 0&&N(this),S};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(m,Hy)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vy++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=A,this}var c_=0,uc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new dc(e),t.set(e,i)),i}},dc=class{constructor(e){this.id=c_++,this.code=e,this.usedTimes=0}};function l_(n,e,t,i,s,r,o){let a=new Vs,c=new uc,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===0?"uv":`uv${M}`}function m(M,S,D,z,G){let P=z.fog,F=G.geometry,B=M.isMeshStandardMaterial?z.environment:null,Z=(M.isMeshStandardMaterial?t:e).get(M.envMap||B),Y=Z&&Z.mapping===Po?Z.image.height:null,$=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let Q=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,te=Q!==void 0?Q.length:0,ce=0;F.morphAttributes.position!==void 0&&(ce=1),F.morphAttributes.normal!==void 0&&(ce=2),F.morphAttributes.color!==void 0&&(ce=3);let W,j,ue,be;if($){let Bt=vn[$];W=Bt.vertexShader,j=Bt.fragmentShader}else W=M.vertexShader,j=M.fragmentShader,c.update(M),ue=c.getVertexShaderID(M),be=c.getFragmentShaderID(M);let Me=n.getRenderTarget(),Ne=G.isInstancedMesh===!0,Fe=G.isBatchedMesh===!0,Pe=!!M.map,Ke=!!M.matcap,k=!!Z,Pt=!!M.aoMap,ge=!!M.lightMap,Ue=!!M.bumpMap,ye=!!M.normalMap,ct=!!M.displacementMap,Be=!!M.emissiveMap,T=!!M.metalnessMap,v=!!M.roughnessMap,U=M.anisotropy>0,K=M.clearcoat>0,J=M.iridescence>0,ee=M.sheen>0,ve=M.transmission>0,ae=U&&!!M.anisotropyMap,pe=K&&!!M.clearcoatMap,Ae=K&&!!M.clearcoatNormalMap,Se=K&&!!M.clearcoatRoughnessMap,ne=J&&!!M.iridescenceMap,tt=J&&!!M.iridescenceThicknessMap,Je=ee&&!!M.sheenColorMap,Oe=ee&&!!M.sheenRoughnessMap,Ee=!!M.specularMap,_e=!!M.specularColorMap,Ve=!!M.specularIntensityMap,je=ve&&!!M.transmissionMap,pt=ve&&!!M.thicknessMap,Ye=!!M.gradientMap,re=!!M.alphaMap,I=M.alphaTest>0,le=!!M.alphaHash,he=!!M.extensions,Ie=!!F.attributes.uv1,Re=!!F.attributes.uv2,st=!!F.attributes.uv3,rt=jn;return M.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(rt=n.toneMapping),{isWebGL2:h,shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:W,fragmentShader:j,defines:M.defines,customVertexShaderID:ue,customFragmentShaderID:be,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Fe,instancing:Ne,instancingColor:Ne&&G.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Me===null?n.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Fn,map:Pe,matcap:Ke,envMap:k,envMapMode:k&&Z.mapping,envMapCubeUVHeight:Y,aoMap:Pt,lightMap:ge,bumpMap:Ue,normalMap:ye,displacementMap:d&&ct,emissiveMap:Be,normalMapObjectSpace:ye&&M.normalMapType===Ap,normalMapTangentSpace:ye&&M.normalMapType===Xc,metalnessMap:T,roughnessMap:v,anisotropy:U,anisotropyMap:ae,clearcoat:K,clearcoatMap:pe,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Se,iridescence:J,iridescenceMap:ne,iridescenceThicknessMap:tt,sheen:ee,sheenColorMap:Je,sheenRoughnessMap:Oe,specularMap:Ee,specularColorMap:_e,specularIntensityMap:Ve,transmission:ve,transmissionMap:je,thicknessMap:pt,gradientMap:Ye,opaque:M.transparent===!1&&M.blending===cs,alphaMap:re,alphaTest:I,alphaHash:le,combine:M.combine,mapUv:Pe&&y(M.map.channel),aoMapUv:Pt&&y(M.aoMap.channel),lightMapUv:ge&&y(M.lightMap.channel),bumpMapUv:Ue&&y(M.bumpMap.channel),normalMapUv:ye&&y(M.normalMap.channel),displacementMapUv:ct&&y(M.displacementMap.channel),emissiveMapUv:Be&&y(M.emissiveMap.channel),metalnessMapUv:T&&y(M.metalnessMap.channel),roughnessMapUv:v&&y(M.roughnessMap.channel),anisotropyMapUv:ae&&y(M.anisotropyMap.channel),clearcoatMapUv:pe&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&y(M.sheenRoughnessMap.channel),specularMapUv:Ee&&y(M.specularMap.channel),specularColorMapUv:_e&&y(M.specularColorMap.channel),specularIntensityMapUv:Ve&&y(M.specularIntensityMap.channel),transmissionMapUv:je&&y(M.transmissionMap.channel),thicknessMapUv:pt&&y(M.thicknessMap.channel),alphaMapUv:re&&y(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ye||U),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Ie,vertexUv2s:Re,vertexUv3s:st,pointsUvs:G.isPoints===!0&&!!F.attributes.uv&&(Pe||re),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:G.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ce,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:rt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Pe&&M.map.isVideoTexture===!0&&nt.getTransfer(M.map.colorSpace)===lt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===dn,flipSided:M.side===kt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:he&&M.extensions.derivatives===!0,extensionFragDepth:he&&M.extensions.fragDepth===!0,extensionDrawBuffers:he&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:he&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let D in M.defines)S.push(D),S.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(x(S,M),_(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function x(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function _(M,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function b(M){let S=g[M.type],D;if(S){let z=vn[S];D=Qp.clone(z.uniforms)}else D=M.uniforms;return D}function R(M,S){let D;for(let z=0,G=l.length;z<G;z++){let P=l[z];if(P.cacheKey===S){D=P,++D.usedTimes;break}}return D===void 0&&(D=new a_(n,S,M,r),l.push(D)),D}function E(M){if(--M.usedTimes===0){let S=l.indexOf(M);l[S]=l[l.length-1],l.pop(),M.destroy()}}function A(M){c.remove(M)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:R,releaseProgram:E,releaseShaderCache:A,programs:l,dispose:N}}function h_(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function u_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function du(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function fu(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,f,g,y,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=y,p.group=m),e++,p}function a(u,d,f,g,y,m){let p=o(u,d,f,g,y,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,g,y,m){let p=o(u,d,f,g,y,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||u_),i.length>1&&i.sort(d||du),s.length>1&&s.sort(d||du)}function h(){for(let u=e,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function d_(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new fu,n.set(i,[o])):s>=r.length?(o=new fu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function f_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new me};break;case"SpotLight":t={position:new C,direction:new C,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new me,groundColor:new me};break;case"RectAreaLight":t={color:new me,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function p_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var m_=0;function g_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function y_(n,e){let t=new f_,i=p_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new C);let r=new C,o=new dt,a=new dt;function c(h,u){let d=0,f=0,g=0;for(let z=0;z<9;z++)s.probe[z].set(0,0,0);let y=0,m=0,p=0,x=0,_=0,b=0,R=0,E=0,A=0,N=0,M=0;h.sort(g_);let S=u===!0?Math.PI:1;for(let z=0,G=h.length;z<G;z++){let P=h[z],F=P.color,B=P.intensity,Z=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=F.r*B*S,f+=F.g*B*S,g+=F.b*B*S;else if(P.isLightProbe){for(let $=0;$<9;$++)s.probe[$].addScaledVector(P.sh.coefficients[$],B);M++}else if(P.isDirectionalLight){let $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*S),P.castShadow){let Q=P.shadow,te=i.get(P);te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,s.directionalShadow[y]=te,s.directionalShadowMap[y]=Y,s.directionalShadowMatrix[y]=P.shadow.matrix,b++}s.directional[y]=$,y++}else if(P.isSpotLight){let $=t.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(F).multiplyScalar(B*S),$.distance=Z,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,s.spot[p]=$;let Q=P.shadow;if(P.map&&(s.spotLightMap[A]=P.map,A++,Q.updateMatrices(P),P.castShadow&&N++),s.spotLightMatrix[p]=Q.matrix,P.castShadow){let te=i.get(P);te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,s.spotShadow[p]=te,s.spotShadowMap[p]=Y,E++}p++}else if(P.isRectAreaLight){let $=t.get(P);$.color.copy(F).multiplyScalar(B),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),s.rectArea[x]=$,x++}else if(P.isPointLight){let $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*S),$.distance=P.distance,$.decay=P.decay,P.castShadow){let Q=P.shadow,te=i.get(P);te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,s.pointShadow[m]=te,s.pointShadowMap[m]=Y,s.pointShadowMatrix[m]=P.shadow.matrix,R++}s.point[m]=$,m++}else if(P.isHemisphereLight){let $=t.get(P);$.skyColor.copy(P.color).multiplyScalar(B*S),$.groundColor.copy(P.groundColor).multiplyScalar(B*S),s.hemi[_]=$,_++}}x>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=oe.LTC_FLOAT_1,s.rectAreaLTC2=oe.LTC_FLOAT_2):(s.rectAreaLTC1=oe.LTC_HALF_1,s.rectAreaLTC2=oe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=oe.LTC_FLOAT_1,s.rectAreaLTC2=oe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=oe.LTC_HALF_1,s.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;let D=s.hash;(D.directionalLength!==y||D.pointLength!==m||D.spotLength!==p||D.rectAreaLength!==x||D.hemiLength!==_||D.numDirectionalShadows!==b||D.numPointShadows!==R||D.numSpotShadows!==E||D.numSpotMaps!==A||D.numLightProbes!==M)&&(s.directional.length=y,s.spot.length=p,s.rectArea.length=x,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=E+A-N,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=M,D.directionalLength=y,D.pointLength=m,D.spotLength=p,D.rectAreaLength=x,D.hemiLength=_,D.numDirectionalShadows=b,D.numPointShadows=R,D.numSpotShadows=E,D.numSpotMaps=A,D.numLightProbes=M,s.version=m_++)}function l(h,u){let d=0,f=0,g=0,y=0,m=0,p=u.matrixWorldInverse;for(let x=0,_=h.length;x<_;x++){let b=h[x];if(b.isDirectionalLight){let R=s.directional[d];R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),d++}else if(b.isSpotLight){let R=s.spot[g];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let R=s.rectArea[y];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(p),a.identity(),o.copy(b.matrixWorld),o.premultiply(p),a.extractRotation(o),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(b.isPointLight){let R=s.point[f];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let R=s.hemi[m];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function pu(n,e){let t=new y_(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function c(u){t.setup(i,u)}function l(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function __(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),c;return a===void 0?(c=new pu(n,e),t.set(r,[c])):o>=a.length?(c=new pu(n,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:i,dispose:s}}var fc=class extends bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ep,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pc=class extends bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},x_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v_=`uniform sampler2D shadow_pass;
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
}`;function M_(n,e,t){let i=new Gs,s=new de,r=new de,o=new ut,a=new fc({depthPacking:Tp}),c=new pc,l={},h=t.maxTextureSize,u={[ti]:kt,[kt]:ti,[dn]:dn},d=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:x_,fragmentShader:v_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new yt;g.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ce(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ro;let p=this.type;this.render=function(E,A,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let M=n.getRenderTarget(),S=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Qn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let G=p!==Un&&this.type===Un,P=p===Un&&this.type!==Un;for(let F=0,B=E.length;F<B;F++){let Z=E[F],Y=Z.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let $=Y.getFrameExtents();if(s.multiply($),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,Y.mapSize.y=r.y)),Y.map===null||G===!0||P===!0){let te=this.type!==Un?{minFilter:Gt,magFilter:Gt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new zn(s.x,s.y,te),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();let Q=Y.getViewportCount();for(let te=0;te<Q;te++){let ce=Y.getViewport(te);o.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),z.viewport(o),Y.updateMatrices(Z,te),i=Y.getFrustum(),b(A,N,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===Un&&x(Y,N),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,S,D)};function x(E,A){let N=e.update(y);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new zn(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(A,null,N,d,y,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(A,null,N,f,y,null)}function _(E,A,N,M){let S=null,D=N.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)S=D;else if(S=N.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let z=S.uuid,G=A.uuid,P=l[z];P===void 0&&(P={},l[z]=P);let F=P[G];F===void 0&&(F=S.clone(),P[G]=F,A.addEventListener("dispose",R)),S=F}if(S.visible=A.visible,S.wireframe=A.wireframe,M===Un?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let z=n.properties.get(S);z.light=N}return S}function b(E,A,N,M,S){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Un)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,E.matrixWorld);let G=e.update(E),P=E.material;if(Array.isArray(P)){let F=G.groups;for(let B=0,Z=F.length;B<Z;B++){let Y=F[B],$=P[Y.materialIndex];if($&&$.visible){let Q=_(E,$,M,S);E.onBeforeShadow(n,E,A,N,G,Q,Y),n.renderBufferDirect(N,null,G,Q,E,Y),E.onAfterShadow(n,E,A,N,G,Q,Y)}}}else if(P.visible){let F=_(E,P,M,S);E.onBeforeShadow(n,E,A,N,G,F,null),n.renderBufferDirect(N,null,G,F,E,null),E.onAfterShadow(n,E,A,N,G,F,null)}}let z=E.children;for(let G=0,P=z.length;G<P;G++)b(z[G],A,N,M,S)}function R(E){E.target.removeEventListener("dispose",R);for(let N in l){let M=l[N],S=E.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function b_(n,e,t){let i=t.isWebGL2;function s(){let I=!1,le=new ut,he=null,Ie=new ut(0,0,0,0);return{setMask:function(Re){he!==Re&&!I&&(n.colorMask(Re,Re,Re,Re),he=Re)},setLocked:function(Re){I=Re},setClear:function(Re,st,rt,At,Bt){Bt===!0&&(Re*=At,st*=At,rt*=At),le.set(Re,st,rt,At),Ie.equals(le)===!1&&(n.clearColor(Re,st,rt,At),Ie.copy(le))},reset:function(){I=!1,he=null,Ie.set(-1,0,0,0)}}}function r(){let I=!1,le=null,he=null,Ie=null;return{setTest:function(Re){Re?Fe(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(Re){le!==Re&&!I&&(n.depthMask(Re),le=Re)},setFunc:function(Re){if(he!==Re){switch(Re){case np:n.depthFunc(n.NEVER);break;case ip:n.depthFunc(n.ALWAYS);break;case sp:n.depthFunc(n.LESS);break;case Wr:n.depthFunc(n.LEQUAL);break;case rp:n.depthFunc(n.EQUAL);break;case op:n.depthFunc(n.GEQUAL);break;case ap:n.depthFunc(n.GREATER);break;case cp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=Re}},setLocked:function(Re){I=Re},setClear:function(Re){Ie!==Re&&(n.clearDepth(Re),Ie=Re)},reset:function(){I=!1,le=null,he=null,Ie=null}}}function o(){let I=!1,le=null,he=null,Ie=null,Re=null,st=null,rt=null,At=null,Bt=null;return{setTest:function(ot){I||(ot?Fe(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(ot){le!==ot&&!I&&(n.stencilMask(ot),le=ot)},setFunc:function(ot,Ht,xn){(he!==ot||Ie!==Ht||Re!==xn)&&(n.stencilFunc(ot,Ht,xn),he=ot,Ie=Ht,Re=xn)},setOp:function(ot,Ht,xn){(st!==ot||rt!==Ht||At!==xn)&&(n.stencilOp(ot,Ht,xn),st=ot,rt=Ht,At=xn)},setLocked:function(ot){I=ot},setClear:function(ot){Bt!==ot&&(n.clearStencil(ot),Bt=ot)},reset:function(){I=!1,le=null,he=null,Ie=null,Re=null,st=null,rt=null,At=null,Bt=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,y=[],m=null,p=!1,x=null,_=null,b=null,R=null,E=null,A=null,N=null,M=new me(0,0,0),S=0,D=!1,z=null,G=null,P=null,F=null,B=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,$=0,Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Q)[1]),Y=$>=1):Q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),Y=$>=2);let te=null,ce={},W=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),ue=new ut().fromArray(W),be=new ut().fromArray(j);function Me(I,le,he,Ie){let Re=new Uint8Array(4),st=n.createTexture();n.bindTexture(I,st),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let rt=0;rt<he;rt++)i&&(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)?n.texImage3D(le,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(le+rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return st}let Ne={};Ne[n.TEXTURE_2D]=Me(n.TEXTURE_2D,n.TEXTURE_2D,1),Ne[n.TEXTURE_CUBE_MAP]=Me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ne[n.TEXTURE_2D_ARRAY]=Me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ne[n.TEXTURE_3D]=Me(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Fe(n.DEPTH_TEST),c.setFunc(Wr),Be(!1),T(Zl),Fe(n.CULL_FACE),ye(Qn);function Fe(I){d[I]!==!0&&(n.enable(I),d[I]=!0)}function Pe(I){d[I]!==!1&&(n.disable(I),d[I]=!1)}function Ke(I,le){return f[I]!==le?(n.bindFramebuffer(I,le),f[I]=le,i&&(I===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=le),I===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=le)),!0):!1}function k(I,le){let he=y,Ie=!1;if(I)if(he=g.get(le),he===void 0&&(he=[],g.set(le,he)),I.isWebGLMultipleRenderTargets){let Re=I.texture;if(he.length!==Re.length||he[0]!==n.COLOR_ATTACHMENT0){for(let st=0,rt=Re.length;st<rt;st++)he[st]=n.COLOR_ATTACHMENT0+st;he.length=Re.length,Ie=!0}}else he[0]!==n.COLOR_ATTACHMENT0&&(he[0]=n.COLOR_ATTACHMENT0,Ie=!0);else he[0]!==n.BACK&&(he[0]=n.BACK,Ie=!0);Ie&&(t.isWebGL2?n.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function Pt(I){return m!==I?(n.useProgram(I),m=I,!0):!1}let ge={[vi]:n.FUNC_ADD,[Hf]:n.FUNC_SUBTRACT,[Vf]:n.FUNC_REVERSE_SUBTRACT};if(i)ge[Kl]=n.MIN,ge[Ql]=n.MAX;else{let I=e.get("EXT_blend_minmax");I!==null&&(ge[Kl]=I.MIN_EXT,ge[Ql]=I.MAX_EXT)}let Ue={[Gf]:n.ZERO,[Wf]:n.ONE,[Xf]:n.SRC_COLOR,[$a]:n.SRC_ALPHA,[Kf]:n.SRC_ALPHA_SATURATE,[$f]:n.DST_COLOR,[Yf]:n.DST_ALPHA,[qf]:n.ONE_MINUS_SRC_COLOR,[Ja]:n.ONE_MINUS_SRC_ALPHA,[Jf]:n.ONE_MINUS_DST_COLOR,[Zf]:n.ONE_MINUS_DST_ALPHA,[Qf]:n.CONSTANT_COLOR,[jf]:n.ONE_MINUS_CONSTANT_COLOR,[ep]:n.CONSTANT_ALPHA,[tp]:n.ONE_MINUS_CONSTANT_ALPHA};function ye(I,le,he,Ie,Re,st,rt,At,Bt,ot){if(I===Qn){p===!0&&(Pe(n.BLEND),p=!1);return}if(p===!1&&(Fe(n.BLEND),p=!0),I!==Bf){if(I!==x||ot!==D){if((_!==vi||E!==vi)&&(n.blendEquation(n.FUNC_ADD),_=vi,E=vi),ot)switch(I){case cs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gr:n.blendFunc(n.ONE,n.ONE);break;case $l:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case cs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case $l:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,R=null,A=null,N=null,M.set(0,0,0),S=0,x=I,D=ot}return}Re=Re||le,st=st||he,rt=rt||Ie,(le!==_||Re!==E)&&(n.blendEquationSeparate(ge[le],ge[Re]),_=le,E=Re),(he!==b||Ie!==R||st!==A||rt!==N)&&(n.blendFuncSeparate(Ue[he],Ue[Ie],Ue[st],Ue[rt]),b=he,R=Ie,A=st,N=rt),(At.equals(M)===!1||Bt!==S)&&(n.blendColor(At.r,At.g,At.b,Bt),M.copy(At),S=Bt),x=I,D=!1}function ct(I,le){I.side===dn?Pe(n.CULL_FACE):Fe(n.CULL_FACE);let he=I.side===kt;le&&(he=!he),Be(he),I.blending===cs&&I.transparent===!1?ye(Qn):ye(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),a.setMask(I.colorWrite);let Ie=I.stencilWrite;l.setTest(Ie),Ie&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),U(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Fe(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(I){z!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),z=I)}function T(I){I!==Ff?(Fe(n.CULL_FACE),I!==G&&(I===Zl?n.cullFace(n.BACK):I===zf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),G=I}function v(I){I!==P&&(Y&&n.lineWidth(I),P=I)}function U(I,le,he){I?(Fe(n.POLYGON_OFFSET_FILL),(F!==le||B!==he)&&(n.polygonOffset(le,he),F=le,B=he)):Pe(n.POLYGON_OFFSET_FILL)}function K(I){I?Fe(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function J(I){I===void 0&&(I=n.TEXTURE0+Z-1),te!==I&&(n.activeTexture(I),te=I)}function ee(I,le,he){he===void 0&&(te===null?he=n.TEXTURE0+Z-1:he=te);let Ie=ce[he];Ie===void 0&&(Ie={type:void 0,texture:void 0},ce[he]=Ie),(Ie.type!==I||Ie.texture!==le)&&(te!==he&&(n.activeTexture(he),te=he),n.bindTexture(I,le||Ne[I]),Ie.type=I,Ie.texture=le)}function ve(){let I=ce[te];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ae(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Je(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Oe(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ve(I){ue.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),ue.copy(I))}function je(I){be.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),be.copy(I))}function pt(I,le){let he=u.get(le);he===void 0&&(he=new WeakMap,u.set(le,he));let Ie=he.get(I);Ie===void 0&&(Ie=n.getUniformBlockIndex(le,I.name),he.set(I,Ie))}function Ye(I,le){let Ie=u.get(le).get(I);h.get(le)!==Ie&&(n.uniformBlockBinding(le,Ie,I.__bindingPointIndex),h.set(le,Ie))}function re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},te=null,ce={},f={},g=new WeakMap,y=[],m=null,p=!1,x=null,_=null,b=null,R=null,E=null,A=null,N=null,M=new me(0,0,0),S=0,D=!1,z=null,G=null,P=null,F=null,B=null,ue.set(0,0,n.canvas.width,n.canvas.height),be.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Fe,disable:Pe,bindFramebuffer:Ke,drawBuffers:k,useProgram:Pt,setBlending:ye,setMaterial:ct,setFlipSided:Be,setCullFace:T,setLineWidth:v,setPolygonOffset:U,setScissorTest:K,activeTexture:J,bindTexture:ee,unbindTexture:ve,compressedTexImage2D:ae,compressedTexImage3D:pe,texImage2D:Ee,texImage3D:_e,updateUBOMapping:pt,uniformBlockBinding:Ye,texStorage2D:Je,texStorage3D:Oe,texSubImage2D:Ae,texSubImage3D:Se,compressedTexSubImage2D:ne,compressedTexSubImage3D:tt,scissor:Ve,viewport:je,reset:re}}function S_(n,e,t,i,s,r,o){let a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return f?new OffscreenCanvas(T,v):Kr("canvas")}function y(T,v,U,K){let J=1;if((T.width>K||T.height>K)&&(J=K/Math.max(T.width,T.height)),J<1||v===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){let ee=v?nc:Math.floor,ve=ee(J*T.width),ae=ee(J*T.height);u===void 0&&(u=g(ve,ae));let pe=U?g(ve,ae):u;return pe.width=ve,pe.height=ae,pe.getContext("2d").drawImage(T,0,0,ve,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+ve+"x"+ae+")."),pe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return Lh(T.width)&&Lh(T.height)}function p(T){return a?!1:T.wrapS!==fn||T.wrapT!==fn||T.minFilter!==Gt&&T.minFilter!==jt}function x(T,v){return T.generateMipmaps&&v&&T.minFilter!==Gt&&T.minFilter!==jt}function _(T){n.generateMipmap(T)}function b(T,v,U,K,J=!1){if(a===!1)return v;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ee=v;if(v===n.RED&&(U===n.FLOAT&&(ee=n.R32F),U===n.HALF_FLOAT&&(ee=n.R16F),U===n.UNSIGNED_BYTE&&(ee=n.R8)),v===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(ee=n.R8UI),U===n.UNSIGNED_SHORT&&(ee=n.R16UI),U===n.UNSIGNED_INT&&(ee=n.R32UI),U===n.BYTE&&(ee=n.R8I),U===n.SHORT&&(ee=n.R16I),U===n.INT&&(ee=n.R32I)),v===n.RG&&(U===n.FLOAT&&(ee=n.RG32F),U===n.HALF_FLOAT&&(ee=n.RG16F),U===n.UNSIGNED_BYTE&&(ee=n.RG8)),v===n.RGBA){let ve=J?Yr:nt.getTransfer(K);U===n.FLOAT&&(ee=n.RGBA32F),U===n.HALF_FLOAT&&(ee=n.RGBA16F),U===n.UNSIGNED_BYTE&&(ee=ve===lt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function R(T,v,U){return x(T,U)===!0||T.isFramebufferTexture&&T.minFilter!==Gt&&T.minFilter!==jt?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function E(T){return T===Gt||T===jl||T===da?n.NEAREST:n.LINEAR}function A(T){let v=T.target;v.removeEventListener("dispose",A),M(v),v.isVideoTexture&&h.delete(v)}function N(T){let v=T.target;v.removeEventListener("dispose",N),D(v)}function M(T){let v=i.get(T);if(v.__webglInit===void 0)return;let U=T.source,K=d.get(U);if(K){let J=K[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(T),Object.keys(K).length===0&&d.delete(U)}i.remove(T)}function S(T){let v=i.get(T);n.deleteTexture(v.__webglTexture);let U=T.source,K=d.get(U);delete K[v.__cacheKey],o.memory.textures--}function D(T){let v=T.texture,U=i.get(T),K=i.get(v);if(K.__webglTexture!==void 0&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(U.__webglFramebuffer[J]))for(let ee=0;ee<U.__webglFramebuffer[J].length;ee++)n.deleteFramebuffer(U.__webglFramebuffer[J][ee]);else n.deleteFramebuffer(U.__webglFramebuffer[J]);U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer[J])}else{if(Array.isArray(U.__webglFramebuffer))for(let J=0;J<U.__webglFramebuffer.length;J++)n.deleteFramebuffer(U.__webglFramebuffer[J]);else n.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&n.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let J=0;J<U.__webglColorRenderbuffer.length;J++)U.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(U.__webglColorRenderbuffer[J]);U.__webglDepthRenderbuffer&&n.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let J=0,ee=v.length;J<ee;J++){let ve=i.get(v[J]);ve.__webglTexture&&(n.deleteTexture(ve.__webglTexture),o.memory.textures--),i.remove(v[J])}i.remove(v),i.remove(T)}let z=0;function G(){z=0}function P(){let T=z;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),z+=1,T}function F(T){let v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function B(T,v){let U=i.get(T);if(T.isVideoTexture&&ct(T),T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){let K=T.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(U,T,v);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+v)}function Z(T,v){let U=i.get(T);if(T.version>0&&U.__version!==T.version){ue(U,T,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+v)}function Y(T,v){let U=i.get(T);if(T.version>0&&U.__version!==T.version){ue(U,T,v);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+v)}function $(T,v){let U=i.get(T);if(T.version>0&&U.__version!==T.version){be(U,T,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+v)}let Q={[ks]:n.REPEAT,[fn]:n.CLAMP_TO_EDGE,[ja]:n.MIRRORED_REPEAT},te={[Gt]:n.NEAREST,[jl]:n.NEAREST_MIPMAP_NEAREST,[da]:n.NEAREST_MIPMAP_LINEAR,[jt]:n.LINEAR,[gp]:n.LINEAR_MIPMAP_NEAREST,[Bs]:n.LINEAR_MIPMAP_LINEAR},ce={[Rp]:n.NEVER,[Up]:n.ALWAYS,[Cp]:n.LESS,[Fu]:n.LEQUAL,[Pp]:n.EQUAL,[Dp]:n.GEQUAL,[Lp]:n.GREATER,[Ip]:n.NOTEQUAL};function W(T,v,U){if(U?(n.texParameteri(T,n.TEXTURE_WRAP_S,Q[v.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Q[v.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Q[v.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,te[v.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,te[v.minFilter])):(n.texParameteri(T,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(T,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==fn||v.wrapT!==fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,n.TEXTURE_MAG_FILTER,E(v.magFilter)),n.texParameteri(T,n.TEXTURE_MIN_FILTER,E(v.minFilter)),v.minFilter!==Gt&&v.minFilter!==jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,ce[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let K=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Gt||v.minFilter!==da&&v.minFilter!==Bs||v.type===Kn&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===Hs&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(T,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function j(T,v){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",A));let K=v.source,J=d.get(K);J===void 0&&(J={},d.set(K,J));let ee=F(v);if(ee!==T.__cacheKey){J[ee]===void 0&&(J[ee]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),J[ee].usedTimes++;let ve=J[T.__cacheKey];ve!==void 0&&(J[T.__cacheKey].usedTimes--,ve.usedTimes===0&&S(v)),T.__cacheKey=ee,T.__webglTexture=J[ee].texture}return U}function ue(T,v,U){let K=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=n.TEXTURE_3D);let J=j(T,v),ee=v.source;t.bindTexture(K,T.__webglTexture,n.TEXTURE0+U);let ve=i.get(ee);if(ee.version!==ve.__version||J===!0){t.activeTexture(n.TEXTURE0+U);let ae=nt.getPrimaries(nt.workingColorSpace),pe=v.colorSpace===en?null:nt.getPrimaries(v.colorSpace),Ae=v.colorSpace===en||ae===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let Se=p(v)&&m(v.image)===!1,ne=y(v.image,Se,!1,s.maxTextureSize);ne=Be(v,ne);let tt=m(ne)||a,Je=r.convert(v.format,v.colorSpace),Oe=r.convert(v.type),Ee=b(v.internalFormat,Je,Oe,v.colorSpace,v.isVideoTexture);W(K,v,tt);let _e,Ve=v.mipmaps,je=a&&v.isVideoTexture!==!0&&Ee!==Nu,pt=ve.__version===void 0||J===!0,Ye=R(v,ne,tt);if(v.isDepthTexture)Ee=n.DEPTH_COMPONENT,a?v.type===Kn?Ee=n.DEPTH_COMPONENT32F:v.type===Jn?Ee=n.DEPTH_COMPONENT24:v.type===bi?Ee=n.DEPTH24_STENCIL8:Ee=n.DEPTH_COMPONENT16:v.type===Kn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Si&&Ee===n.DEPTH_COMPONENT&&v.type!==Wc&&v.type!==Jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Jn,Oe=r.convert(v.type)),v.format===fs&&Ee===n.DEPTH_COMPONENT&&(Ee=n.DEPTH_STENCIL,v.type!==bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=bi,Oe=r.convert(v.type))),pt&&(je?t.texStorage2D(n.TEXTURE_2D,1,Ee,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Ee,ne.width,ne.height,0,Je,Oe,null));else if(v.isDataTexture)if(Ve.length>0&&tt){je&&pt&&t.texStorage2D(n.TEXTURE_2D,Ye,Ee,Ve[0].width,Ve[0].height);for(let re=0,I=Ve.length;re<I;re++)_e=Ve[re],je?t.texSubImage2D(n.TEXTURE_2D,re,0,0,_e.width,_e.height,Je,Oe,_e.data):t.texImage2D(n.TEXTURE_2D,re,Ee,_e.width,_e.height,0,Je,Oe,_e.data);v.generateMipmaps=!1}else je?(pt&&t.texStorage2D(n.TEXTURE_2D,Ye,Ee,ne.width,ne.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,Je,Oe,ne.data)):t.texImage2D(n.TEXTURE_2D,0,Ee,ne.width,ne.height,0,Je,Oe,ne.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){je&&pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ye,Ee,Ve[0].width,Ve[0].height,ne.depth);for(let re=0,I=Ve.length;re<I;re++)_e=Ve[re],v.format!==pn?Je!==null?je?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,_e.width,_e.height,ne.depth,Je,_e.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,Ee,_e.width,_e.height,ne.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,_e.width,_e.height,ne.depth,Je,Oe,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,Ee,_e.width,_e.height,ne.depth,0,Je,Oe,_e.data)}else{je&&pt&&t.texStorage2D(n.TEXTURE_2D,Ye,Ee,Ve[0].width,Ve[0].height);for(let re=0,I=Ve.length;re<I;re++)_e=Ve[re],v.format!==pn?Je!==null?je?t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,_e.width,_e.height,Je,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,re,Ee,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(n.TEXTURE_2D,re,0,0,_e.width,_e.height,Je,Oe,_e.data):t.texImage2D(n.TEXTURE_2D,re,Ee,_e.width,_e.height,0,Je,Oe,_e.data)}else if(v.isDataArrayTexture)je?(pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ye,Ee,ne.width,ne.height,ne.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Je,Oe,ne.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,ne.width,ne.height,ne.depth,0,Je,Oe,ne.data);else if(v.isData3DTexture)je?(pt&&t.texStorage3D(n.TEXTURE_3D,Ye,Ee,ne.width,ne.height,ne.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Je,Oe,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,ne.width,ne.height,ne.depth,0,Je,Oe,ne.data);else if(v.isFramebufferTexture){if(pt)if(je)t.texStorage2D(n.TEXTURE_2D,Ye,Ee,ne.width,ne.height);else{let re=ne.width,I=ne.height;for(let le=0;le<Ye;le++)t.texImage2D(n.TEXTURE_2D,le,Ee,re,I,0,Je,Oe,null),re>>=1,I>>=1}}else if(Ve.length>0&&tt){je&&pt&&t.texStorage2D(n.TEXTURE_2D,Ye,Ee,Ve[0].width,Ve[0].height);for(let re=0,I=Ve.length;re<I;re++)_e=Ve[re],je?t.texSubImage2D(n.TEXTURE_2D,re,0,0,Je,Oe,_e):t.texImage2D(n.TEXTURE_2D,re,Ee,Je,Oe,_e);v.generateMipmaps=!1}else je?(pt&&t.texStorage2D(n.TEXTURE_2D,Ye,Ee,ne.width,ne.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Je,Oe,ne)):t.texImage2D(n.TEXTURE_2D,0,Ee,Je,Oe,ne);x(v,tt)&&_(K),ve.__version=ee.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function be(T,v,U){if(v.image.length!==6)return;let K=j(T,v),J=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+U);let ee=i.get(J);if(J.version!==ee.__version||K===!0){t.activeTexture(n.TEXTURE0+U);let ve=nt.getPrimaries(nt.workingColorSpace),ae=v.colorSpace===en?null:nt.getPrimaries(v.colorSpace),pe=v.colorSpace===en||ve===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Ae=v.isCompressedTexture||v.image[0].isCompressedTexture,Se=v.image[0]&&v.image[0].isDataTexture,ne=[];for(let re=0;re<6;re++)!Ae&&!Se?ne[re]=y(v.image[re],!1,!0,s.maxCubemapSize):ne[re]=Se?v.image[re].image:v.image[re],ne[re]=Be(v,ne[re]);let tt=ne[0],Je=m(tt)||a,Oe=r.convert(v.format,v.colorSpace),Ee=r.convert(v.type),_e=b(v.internalFormat,Oe,Ee,v.colorSpace),Ve=a&&v.isVideoTexture!==!0,je=ee.__version===void 0||K===!0,pt=R(v,tt,Je);W(n.TEXTURE_CUBE_MAP,v,Je);let Ye;if(Ae){Ve&&je&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pt,_e,tt.width,tt.height);for(let re=0;re<6;re++){Ye=ne[re].mipmaps;for(let I=0;I<Ye.length;I++){let le=Ye[I];v.format!==pn?Oe!==null?Ve?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,I,0,0,le.width,le.height,Oe,le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,I,_e,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,I,0,0,le.width,le.height,Oe,Ee,le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,I,_e,le.width,le.height,0,Oe,Ee,le.data)}}}else{Ye=v.mipmaps,Ve&&je&&(Ye.length>0&&pt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,pt,_e,ne[0].width,ne[0].height));for(let re=0;re<6;re++)if(Se){Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ne[re].width,ne[re].height,Oe,Ee,ne[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,_e,ne[re].width,ne[re].height,0,Oe,Ee,ne[re].data);for(let I=0;I<Ye.length;I++){let he=Ye[I].image[re].image;Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,I+1,0,0,he.width,he.height,Oe,Ee,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,I+1,_e,he.width,he.height,0,Oe,Ee,he.data)}}else{Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Oe,Ee,ne[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,_e,Oe,Ee,ne[re]);for(let I=0;I<Ye.length;I++){let le=Ye[I];Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,I+1,0,0,Oe,Ee,le.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,I+1,_e,Oe,Ee,le.image[re])}}}x(v,Je)&&_(n.TEXTURE_CUBE_MAP),ee.__version=J.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Me(T,v,U,K,J,ee){let ve=r.convert(U.format,U.colorSpace),ae=r.convert(U.type),pe=b(U.internalFormat,ve,ae,U.colorSpace);if(!i.get(v).__hasExternalTextures){let Se=Math.max(1,v.width>>ee),ne=Math.max(1,v.height>>ee);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,ee,pe,Se,ne,v.depth,0,ve,ae,null):t.texImage2D(J,ee,pe,Se,ne,0,ve,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),ye(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,J,i.get(U).__webglTexture,0,Ue(v)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,J,i.get(U).__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(T,v,U){if(n.bindRenderbuffer(n.RENDERBUFFER,T),v.depthBuffer&&!v.stencilBuffer){let K=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(U||ye(v)){let J=v.depthTexture;J&&J.isDepthTexture&&(J.type===Kn?K=n.DEPTH_COMPONENT32F:J.type===Jn&&(K=n.DEPTH_COMPONENT24));let ee=Ue(v);ye(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,K,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,K,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,K,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,T)}else if(v.depthBuffer&&v.stencilBuffer){let K=Ue(v);U&&ye(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,K,n.DEPTH24_STENCIL8,v.width,v.height):ye(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,K,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,T)}else{let K=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let J=0;J<K.length;J++){let ee=K[J],ve=r.convert(ee.format,ee.colorSpace),ae=r.convert(ee.type),pe=b(ee.internalFormat,ve,ae,ee.colorSpace),Ae=Ue(v);U&&ye(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,pe,v.width,v.height):ye(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,pe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,pe,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Fe(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),B(v.depthTexture,0);let K=i.get(v.depthTexture).__webglTexture,J=Ue(v);if(v.depthTexture.format===Si)ye(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(v.depthTexture.format===fs)ye(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Pe(T){let v=i.get(T),U=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Fe(v.__webglFramebuffer,T)}else if(U){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]=n.createRenderbuffer(),Ne(v.__webglDepthbuffer[K],T,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),Ne(v.__webglDepthbuffer,T,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ke(T,v,U){let K=i.get(T);v!==void 0&&Me(K.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&Pe(T)}function k(T){let v=T.texture,U=i.get(T),K=i.get(v);T.addEventListener("dispose",N),T.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=v.version,o.memory.textures++);let J=T.isWebGLCubeRenderTarget===!0,ee=T.isWebGLMultipleRenderTargets===!0,ve=m(T)||a;if(J){U.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(a&&v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[ae]=[];for(let pe=0;pe<v.mipmaps.length;pe++)U.__webglFramebuffer[ae][pe]=n.createFramebuffer()}else U.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)U.__webglFramebuffer[ae]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(ee)if(s.drawBuffers){let ae=T.texture;for(let pe=0,Ae=ae.length;pe<Ae;pe++){let Se=i.get(ae[pe]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&ye(T)===!1){let ae=ee?v:[v];U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let pe=0;pe<ae.length;pe++){let Ae=ae[pe];U.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[pe]);let Se=r.convert(Ae.format,Ae.colorSpace),ne=r.convert(Ae.type),tt=b(Ae.internalFormat,Se,ne,Ae.colorSpace,T.isXRRenderTarget===!0),Je=Ue(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Je,tt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,U.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Ne(U.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),W(n.TEXTURE_CUBE_MAP,v,ve);for(let ae=0;ae<6;ae++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let pe=0;pe<v.mipmaps.length;pe++)Me(U.__webglFramebuffer[ae][pe],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,pe);else Me(U.__webglFramebuffer[ae],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);x(v,ve)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){let ae=T.texture;for(let pe=0,Ae=ae.length;pe<Ae;pe++){let Se=ae[pe],ne=i.get(Se);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),W(n.TEXTURE_2D,Se,ve),Me(U.__webglFramebuffer,T,Se,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),x(Se,ve)&&_(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?ae=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,K.__webglTexture),W(ae,v,ve),a&&v.mipmaps&&v.mipmaps.length>0)for(let pe=0;pe<v.mipmaps.length;pe++)Me(U.__webglFramebuffer[pe],T,v,n.COLOR_ATTACHMENT0,ae,pe);else Me(U.__webglFramebuffer,T,v,n.COLOR_ATTACHMENT0,ae,0);x(v,ve)&&_(ae),t.unbindTexture()}T.depthBuffer&&Pe(T)}function Pt(T){let v=m(T)||a,U=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let K=0,J=U.length;K<J;K++){let ee=U[K];if(x(ee,v)){let ve=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ae=i.get(ee).__webglTexture;t.bindTexture(ve,ae),_(ve),t.unbindTexture()}}}function ge(T){if(a&&T.samples>0&&ye(T)===!1){let v=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],U=T.width,K=T.height,J=n.COLOR_BUFFER_BIT,ee=[],ve=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=i.get(T),pe=T.isWebGLMultipleRenderTargets===!0;if(pe)for(let Ae=0;Ae<v.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Ae=0;Ae<v.length;Ae++){ee.push(n.COLOR_ATTACHMENT0+Ae),T.depthBuffer&&ee.push(ve);let Se=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(Se===!1&&(T.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),pe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[Ae]),Se===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ve]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ve])),pe){let ne=i.get(v[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,U,K,0,0,U,K,J,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Ae=0;Ae<v.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,ae.__webglColorRenderbuffer[Ae]);let Se=i.get(v[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,Se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Ue(T){return Math.min(s.maxSamples,T.samples)}function ye(T){let v=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ct(T){let v=o.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function Be(T,v){let U=T.colorSpace,K=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===ec||U!==Fn&&U!==en&&(nt.getTransfer(U)===lt?a===!1?e.has("EXT_sRGB")===!0&&K===pn?(T.format=ec,T.minFilter=jt,T.generateMipmaps=!1):v=Qr.sRGBToLinear(v):(K!==pn||J!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}this.allocateTextureUnit=P,this.resetTextureUnits=G,this.setTexture2D=B,this.setTexture2DArray=Z,this.setTexture3D=Y,this.setTextureCube=$,this.rebindTextures=Ke,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ye}function w_(n,e,t){let i=t.isWebGL2;function s(r,o=en){let a,c=nt.getTransfer(o);if(r===ei)return n.UNSIGNED_BYTE;if(r===Pu)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Lu)return n.UNSIGNED_SHORT_5_5_5_1;if(r===yp)return n.BYTE;if(r===_p)return n.SHORT;if(r===Wc)return n.UNSIGNED_SHORT;if(r===Cu)return n.INT;if(r===Jn)return n.UNSIGNED_INT;if(r===Kn)return n.FLOAT;if(r===Hs)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===xp)return n.ALPHA;if(r===pn)return n.RGBA;if(r===vp)return n.LUMINANCE;if(r===Mp)return n.LUMINANCE_ALPHA;if(r===Si)return n.DEPTH_COMPONENT;if(r===fs)return n.DEPTH_STENCIL;if(r===ec)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===bp)return n.RED;if(r===Iu)return n.RED_INTEGER;if(r===Sp)return n.RG;if(r===Du)return n.RG_INTEGER;if(r===Uu)return n.RGBA_INTEGER;if(r===fa||r===pa||r===ma||r===ga)if(c===lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===fa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===pa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ma)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ga)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===fa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===pa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ma)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ga)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===eh||r===th||r===nh||r===ih)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===eh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===th)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===nh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ih)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Nu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===sh||r===rh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===sh)return c===lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===rh)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===oh||r===ah||r===ch||r===lh||r===hh||r===uh||r===dh||r===fh||r===ph||r===mh||r===gh||r===yh||r===_h||r===xh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===oh)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ah)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ch)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===lh)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hh)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===uh)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===dh)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===fh)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ph)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===mh)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===gh)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===yh)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_h)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===xh)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ya||r===vh||r===Mh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===ya)return c===lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===vh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Mh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===wp||r===bh||r===Sh||r===wh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===ya)return a.COMPRESSED_RED_RGTC1_EXT;if(r===bh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Sh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===wh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===bi?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var mc=class extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},at=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},E_={type:"move"},Os=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new at,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new at,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new at,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(E_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new at;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},gc=class extends ni{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,y=t.getContextAttributes(),m=null,p=null,x=[],_=[],b=new de,R=null,E=new zt;E.layers.enable(1),E.viewport=new ut;let A=new zt;A.layers.enable(2),A.viewport=new ut;let N=[E,A],M=new mc;M.layers.enable(1),M.layers.enable(2);let S=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let j=x[W];return j===void 0&&(j=new Os,x[W]=j),j.getTargetRaySpace()},this.getControllerGrip=function(W){let j=x[W];return j===void 0&&(j=new Os,x[W]=j),j.getGripSpace()},this.getHand=function(W){let j=x[W];return j===void 0&&(j=new Os,x[W]=j),j.getHandSpace()};function z(W){let j=_.indexOf(W.inputSource);if(j===-1)return;let ue=x[j];ue!==void 0&&(ue.update(W.inputSource,W.frame,l||o),ue.dispatchEvent({type:W.type,data:W.inputSource}))}function G(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",P);for(let W=0;W<x.length;W++){let j=_[W];j!==null&&(_[W]=null,x[W].disconnect(j))}S=null,D=null,e.setRenderTarget(m),f=null,d=null,u=null,s=null,p=null,ce.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",G),s.addEventListener("inputsourceschange",P),y.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(b),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let j={antialias:s.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new zn(f.framebufferWidth,f.framebufferHeight,{format:pn,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let j=null,ue=null,be=null;y.depth&&(be=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=y.stencil?fs:Si,ue=y.stencil?bi:Jn);let Me={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Me),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new zn(d.textureWidth,d.textureHeight,{format:pn,type:ei,depthTexture:new ao(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});let Ne=e.properties.get(p);Ne.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ce.setContext(s),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(W){for(let j=0;j<W.removed.length;j++){let ue=W.removed[j],be=_.indexOf(ue);be>=0&&(_[be]=null,x[be].disconnect(ue))}for(let j=0;j<W.added.length;j++){let ue=W.added[j],be=_.indexOf(ue);if(be===-1){for(let Ne=0;Ne<x.length;Ne++)if(Ne>=_.length){_.push(ue),be=Ne;break}else if(_[Ne]===null){_[Ne]=ue,be=Ne;break}if(be===-1)break}let Me=x[be];Me&&Me.connect(ue)}}let F=new C,B=new C;function Z(W,j,ue){F.setFromMatrixPosition(j.matrixWorld),B.setFromMatrixPosition(ue.matrixWorld);let be=F.distanceTo(B),Me=j.projectionMatrix.elements,Ne=ue.projectionMatrix.elements,Fe=Me[14]/(Me[10]-1),Pe=Me[14]/(Me[10]+1),Ke=(Me[9]+1)/Me[5],k=(Me[9]-1)/Me[5],Pt=(Me[8]-1)/Me[0],ge=(Ne[8]+1)/Ne[0],Ue=Fe*Pt,ye=Fe*ge,ct=be/(-Pt+ge),Be=ct*-Pt;j.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Be),W.translateZ(ct),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let T=Fe+ct,v=Pe+ct,U=Ue-Be,K=ye+(be-Be),J=Ke*Pe/v*T,ee=k*Pe/v*T;W.projectionMatrix.makePerspective(U,K,J,ee,T,v),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function Y(W,j){j===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(j.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;M.near=A.near=E.near=W.near,M.far=A.far=E.far=W.far,(S!==M.near||D!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,D=M.far);let j=W.parent,ue=M.cameras;Y(M,j);for(let be=0;be<ue.length;be++)Y(ue[be],j);ue.length===2?Z(M,E,A):M.projectionMatrix.copy(E.projectionMatrix),$(W,M,j)};function $(W,j,ue){ue===null?W.matrix.copy(j.matrixWorld):(W.matrix.copy(ue.matrixWorld),W.matrix.invert(),W.matrix.multiply(j.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(j.projectionMatrix),W.projectionMatrixInverse.copy(j.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=tc*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)};let Q=null;function te(W,j){if(h=j.getViewerPose(l||o),g=j,h!==null){let ue=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let be=!1;ue.length!==M.cameras.length&&(M.cameras.length=0,be=!0);for(let Me=0;Me<ue.length;Me++){let Ne=ue[Me],Fe=null;if(f!==null)Fe=f.getViewport(Ne);else{let Ke=u.getViewSubImage(d,Ne);Fe=Ke.viewport,Me===0&&(e.setRenderTargetTextures(p,Ke.colorTexture,d.ignoreDepthValues?void 0:Ke.depthStencilTexture),e.setRenderTarget(p))}let Pe=N[Me];Pe===void 0&&(Pe=new zt,Pe.layers.enable(Me),Pe.viewport=new ut,N[Me]=Pe),Pe.matrix.fromArray(Ne.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(Ne.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Me===0&&(M.matrix.copy(Pe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),be===!0&&M.cameras.push(Pe)}}for(let ue=0;ue<x.length;ue++){let be=_[ue],Me=x[ue];be!==null&&Me!==void 0&&Me.update(be,j,l||o)}Q&&Q(W,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}let ce=new Hu;ce.setAnimationLoop(te),this.setAnimationLoop=function(W){Q=W},this.dispose=function(){}}};function T_(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Bu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,_,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,x,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=e.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let _=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function A_(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,_){let b=_.program;i.uniformBlockBinding(x,b)}function l(x,_){let b=s[x.id];b===void 0&&(g(x),b=h(x),s[x.id]=b,x.addEventListener("dispose",m));let R=_.program;i.updateUBOMapping(x,R);let E=e.render.frame;r[x.id]!==E&&(d(x),r[x.id]=E)}function h(x){let _=u();x.__bindingPointIndex=_;let b=n.createBuffer(),R=x.__size,E=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,R,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,b),b}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let _=s[x.id],b=x.uniforms,R=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let E=0,A=b.length;E<A;E++){let N=Array.isArray(b[E])?b[E]:[b[E]];for(let M=0,S=N.length;M<S;M++){let D=N[M];if(f(D,E,M,R)===!0){let z=D.__offset,G=Array.isArray(D.value)?D.value:[D.value],P=0;for(let F=0;F<G.length;F++){let B=G[F],Z=y(B);typeof B=="number"||typeof B=="boolean"?(D.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,z+P,D.__data)):B.isMatrix3?(D.__data[0]=B.elements[0],D.__data[1]=B.elements[1],D.__data[2]=B.elements[2],D.__data[3]=0,D.__data[4]=B.elements[3],D.__data[5]=B.elements[4],D.__data[6]=B.elements[5],D.__data[7]=0,D.__data[8]=B.elements[6],D.__data[9]=B.elements[7],D.__data[10]=B.elements[8],D.__data[11]=0):(B.toArray(D.__data,P),P+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,_,b,R){let E=x.value,A=_+"_"+b;if(R[A]===void 0)return typeof E=="number"||typeof E=="boolean"?R[A]=E:R[A]=E.clone(),!0;{let N=R[A];if(typeof E=="number"||typeof E=="boolean"){if(N!==E)return R[A]=E,!0}else if(N.equals(E)===!1)return N.copy(E),!0}return!1}function g(x){let _=x.uniforms,b=0,R=16;for(let A=0,N=_.length;A<N;A++){let M=Array.isArray(_[A])?_[A]:[_[A]];for(let S=0,D=M.length;S<D;S++){let z=M[S],G=Array.isArray(z.value)?z.value:[z.value];for(let P=0,F=G.length;P<F;P++){let B=G[P],Z=y(B),Y=b%R;Y!==0&&R-Y<Z.boundary&&(b+=R-Y),z.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=b,b+=Z.storage}}}let E=b%R;return E>0&&(b+=R-E),x.__size=b,x.__cache={},this}function y(x){let _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){let _=x.target;_.removeEventListener("dispose",m);let b=o.indexOf(_.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Ws=class{constructor(e={}){let{canvas:t=Op(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let f=new Uint32Array(4),g=new Int32Array(4),y=null,m=null,p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gt,this._useLegacyLights=!1,this.toneMapping=jn,this.toneMappingExposure=1;let _=this,b=!1,R=0,E=0,A=null,N=-1,M=null,S=new ut,D=new ut,z=null,G=new me(0),P=0,F=t.width,B=t.height,Z=1,Y=null,$=null,Q=new ut(0,0,F,B),te=new ut(0,0,F,B),ce=!1,W=new Gs,j=!1,ue=!1,be=null,Me=new dt,Ne=new de,Fe=new C,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ke(){return A===null?Z:1}let k=i;function Pt(w,O){for(let V=0;V<w.length;V++){let X=w[V],H=t.getContext(X,O);if(H!==null)return H}return null}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vc}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",le,!1),k===null){let O=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&O.shift(),k=Pt(O,w),k===null)throw Pt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ge,Ue,ye,ct,Be,T,v,U,K,J,ee,ve,ae,pe,Ae,Se,ne,tt,Je,Oe,Ee,_e,Ve,je;function pt(){ge=new qg(k),Ue=new Bg(k,ge,e),ge.init(Ue),_e=new w_(k,ge,Ue),ye=new b_(k,ge,Ue),ct=new $g(k),Be=new h_,T=new S_(k,ge,ye,Be,Ue,_e,ct),v=new Vg(_),U=new Xg(_),K=new im(k,Ue),Ve=new zg(k,ge,K,Ue),J=new Yg(k,K,ct,Ve),ee=new jg(k,J,K,ct),Je=new Qg(k,Ue,T),Se=new Hg(Be),ve=new l_(_,v,U,ge,Ue,Ve,Se),ae=new T_(_,Be),pe=new d_,Ae=new __(ge,Ue),tt=new Fg(_,v,U,ye,ee,d,c),ne=new M_(_,ee,Ue),je=new A_(k,ct,Ue,ye),Oe=new kg(k,ge,ct,Ue),Ee=new Zg(k,ge,ct,Ue),ct.programs=ve.programs,_.capabilities=Ue,_.extensions=ge,_.properties=Be,_.renderLists=pe,_.shadowMap=ne,_.state=ye,_.info=ct}pt();let Ye=new gc(_,k);this.xr=Ye,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let w=ge.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ge.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(w){w!==void 0&&(Z=w,this.setSize(F,B,!1))},this.getSize=function(w){return w.set(F,B)},this.setSize=function(w,O,V=!0){if(Ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,B=O,t.width=Math.floor(w*Z),t.height=Math.floor(O*Z),V===!0&&(t.style.width=w+"px",t.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(F*Z,B*Z).floor()},this.setDrawingBufferSize=function(w,O,V){F=w,B=O,Z=V,t.width=Math.floor(w*V),t.height=Math.floor(O*V),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(Q)},this.setViewport=function(w,O,V,X){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,O,V,X),ye.viewport(S.copy(Q).multiplyScalar(Z).floor())},this.getScissor=function(w){return w.copy(te)},this.setScissor=function(w,O,V,X){w.isVector4?te.set(w.x,w.y,w.z,w.w):te.set(w,O,V,X),ye.scissor(D.copy(te).multiplyScalar(Z).floor())},this.getScissorTest=function(){return ce},this.setScissorTest=function(w){ye.setScissorTest(ce=w)},this.setOpaqueSort=function(w){Y=w},this.setTransparentSort=function(w){$=w},this.getClearColor=function(w){return w.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(w=!0,O=!0,V=!0){let X=0;if(w){let H=!1;if(A!==null){let fe=A.texture.format;H=fe===Uu||fe===Du||fe===Iu}if(H){let fe=A.texture.type,we=fe===ei||fe===Jn||fe===Wc||fe===bi||fe===Pu||fe===Lu,Le=tt.getClearColor(),De=tt.getClearAlpha(),Xe=Le.r,ze=Le.g,He=Le.b;we?(f[0]=Xe,f[1]=ze,f[2]=He,f[3]=De,k.clearBufferuiv(k.COLOR,0,f)):(g[0]=Xe,g[1]=ze,g[2]=He,g[3]=De,k.clearBufferiv(k.COLOR,0,g))}else X|=k.COLOR_BUFFER_BIT}O&&(X|=k.DEPTH_BUFFER_BIT),V&&(X|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",le,!1),pe.dispose(),Ae.dispose(),Be.dispose(),v.dispose(),U.dispose(),ee.dispose(),Ve.dispose(),je.dispose(),ve.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",Bt),Ye.removeEventListener("sessionend",ot),be&&(be.dispose(),be=null),Ht.stop()};function re(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let w=ct.autoReset,O=ne.enabled,V=ne.autoUpdate,X=ne.needsUpdate,H=ne.type;pt(),ct.autoReset=w,ne.enabled=O,ne.autoUpdate=V,ne.needsUpdate=X,ne.type=H}function le(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function he(w){let O=w.target;O.removeEventListener("dispose",he),Ie(O)}function Ie(w){Re(w),Be.remove(w)}function Re(w){let O=Be.get(w).programs;O!==void 0&&(O.forEach(function(V){ve.releaseProgram(V)}),w.isShaderMaterial&&ve.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,V,X,H,fe){O===null&&(O=Pe);let we=H.isMesh&&H.matrixWorld.determinant()<0,Le=Rf(w,O,V,X,H);ye.setMaterial(X,we);let De=V.index,Xe=1;if(X.wireframe===!0){if(De=J.getWireframeAttribute(V),De===void 0)return;Xe=2}let ze=V.drawRange,He=V.attributes.position,xt=ze.start*Xe,Yt=(ze.start+ze.count)*Xe;fe!==null&&(xt=Math.max(xt,fe.start*Xe),Yt=Math.min(Yt,(fe.start+fe.count)*Xe)),De!==null?(xt=Math.max(xt,0),Yt=Math.min(Yt,De.count)):He!=null&&(xt=Math.max(xt,0),Yt=Math.min(Yt,He.count));let Rt=Yt-xt;if(Rt<0||Rt===1/0)return;Ve.setup(H,X,Le,V,De);let Rn,ft=Oe;if(De!==null&&(Rn=K.get(De),ft=Ee,ft.setIndex(Rn)),H.isMesh)X.wireframe===!0?(ye.setLineWidth(X.wireframeLinewidth*Ke()),ft.setMode(k.LINES)):ft.setMode(k.TRIANGLES);else if(H.isLine){let Ze=X.linewidth;Ze===void 0&&(Ze=1),ye.setLineWidth(Ze*Ke()),H.isLineSegments?ft.setMode(k.LINES):H.isLineLoop?ft.setMode(k.LINE_LOOP):ft.setMode(k.LINE_STRIP)}else H.isPoints?ft.setMode(k.POINTS):H.isSprite&&ft.setMode(k.TRIANGLES);if(H.isBatchedMesh)ft.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)ft.renderInstances(xt,Rt,H.count);else if(V.isInstancedBufferGeometry){let Ze=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,aa=Math.min(V.instanceCount,Ze);ft.renderInstances(xt,Rt,aa)}else ft.render(xt,Rt)};function st(w,O,V){w.transparent===!0&&w.side===dn&&w.forceSinglePass===!1?(w.side=kt,w.needsUpdate=!0,mr(w,O,V),w.side=ti,w.needsUpdate=!0,mr(w,O,V),w.side=dn):mr(w,O,V)}this.compile=function(w,O,V=null){V===null&&(V=w),m=Ae.get(V),m.init(),x.push(m),V.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),w!==V&&w.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(_._useLegacyLights);let X=new Set;return w.traverse(function(H){let fe=H.material;if(fe)if(Array.isArray(fe))for(let we=0;we<fe.length;we++){let Le=fe[we];st(Le,V,H),X.add(Le)}else st(fe,V,H),X.add(fe)}),x.pop(),m=null,X},this.compileAsync=function(w,O,V=null){let X=this.compile(w,O,V);return new Promise(H=>{function fe(){if(X.forEach(function(we){Be.get(we).currentProgram.isReady()&&X.delete(we)}),X.size===0){H(w);return}setTimeout(fe,10)}ge.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let rt=null;function At(w){rt&&rt(w)}function Bt(){Ht.stop()}function ot(){Ht.start()}let Ht=new Hu;Ht.setAnimationLoop(At),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(w){rt=w,Ye.setAnimationLoop(w),w===null?Ht.stop():Ht.start()},Ye.addEventListener("sessionstart",Bt),Ye.addEventListener("sessionend",ot),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(O),O=Ye.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,O,A),m=Ae.get(w,x.length),m.init(),x.push(m),Me.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),W.setFromProjectionMatrix(Me),ue=this.localClippingEnabled,j=Se.init(this.clippingPlanes,ue),y=pe.get(w,p.length),y.init(),p.push(y),xn(w,O,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(Y,$),this.info.render.frame++,j===!0&&Se.beginShadows();let V=m.state.shadowsArray;if(ne.render(V,w,O),j===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),tt.render(y,w),m.setupLights(_._useLegacyLights),O.isArrayCamera){let X=O.cameras;for(let H=0,fe=X.length;H<fe;H++){let we=X[H];Ol(y,w,we,we.viewport)}}else Ol(y,w,O);A!==null&&(T.updateMultisampleRenderTarget(A),T.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(_,w,O),Ve.resetDefaultState(),N=-1,M=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function xn(w,O,V,X){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||W.intersectsSprite(w)){X&&Fe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Me);let we=ee.update(w),Le=w.material;Le.visible&&y.push(w,we,Le,V,Fe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||W.intersectsObject(w))){let we=ee.update(w),Le=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Fe.copy(w.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Fe.copy(we.boundingSphere.center)),Fe.applyMatrix4(w.matrixWorld).applyMatrix4(Me)),Array.isArray(Le)){let De=we.groups;for(let Xe=0,ze=De.length;Xe<ze;Xe++){let He=De[Xe],xt=Le[He.materialIndex];xt&&xt.visible&&y.push(w,we,xt,V,Fe.z,He)}}else Le.visible&&y.push(w,we,Le,V,Fe.z,null)}}let fe=w.children;for(let we=0,Le=fe.length;we<Le;we++)xn(fe[we],O,V,X)}function Ol(w,O,V,X){let H=w.opaque,fe=w.transmissive,we=w.transparent;m.setupLightsView(V),j===!0&&Se.setGlobalState(_.clippingPlanes,V),fe.length>0&&Af(H,fe,O,V),X&&ye.viewport(S.copy(X)),H.length>0&&pr(H,O,V),fe.length>0&&pr(fe,O,V),we.length>0&&pr(we,O,V),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Af(w,O,V,X){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;let fe=Ue.isWebGL2;be===null&&(be=new zn(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?Hs:ei,minFilter:Bs,samples:fe?4:0})),_.getDrawingBufferSize(Ne),fe?be.setSize(Ne.x,Ne.y):be.setSize(nc(Ne.x),nc(Ne.y));let we=_.getRenderTarget();_.setRenderTarget(be),_.getClearColor(G),P=_.getClearAlpha(),P<1&&_.setClearColor(16777215,.5),_.clear();let Le=_.toneMapping;_.toneMapping=jn,pr(w,V,X),T.updateMultisampleRenderTarget(be),T.updateRenderTargetMipmap(be);let De=!1;for(let Xe=0,ze=O.length;Xe<ze;Xe++){let He=O[Xe],xt=He.object,Yt=He.geometry,Rt=He.material,Rn=He.group;if(Rt.side===dn&&xt.layers.test(X.layers)){let ft=Rt.side;Rt.side=kt,Rt.needsUpdate=!0,Fl(xt,V,X,Yt,Rt,Rn),Rt.side=ft,Rt.needsUpdate=!0,De=!0}}De===!0&&(T.updateMultisampleRenderTarget(be),T.updateRenderTargetMipmap(be)),_.setRenderTarget(we),_.setClearColor(G,P),_.toneMapping=Le}function pr(w,O,V){let X=O.isScene===!0?O.overrideMaterial:null;for(let H=0,fe=w.length;H<fe;H++){let we=w[H],Le=we.object,De=we.geometry,Xe=X===null?we.material:X,ze=we.group;Le.layers.test(V.layers)&&Fl(Le,O,V,De,Xe,ze)}}function Fl(w,O,V,X,H,fe){w.onBeforeRender(_,O,V,X,H,fe),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(_,O,V,X,w,fe),H.transparent===!0&&H.side===dn&&H.forceSinglePass===!1?(H.side=kt,H.needsUpdate=!0,_.renderBufferDirect(V,O,X,H,w,fe),H.side=ti,H.needsUpdate=!0,_.renderBufferDirect(V,O,X,H,w,fe),H.side=dn):_.renderBufferDirect(V,O,X,H,w,fe),w.onAfterRender(_,O,V,X,H,fe)}function mr(w,O,V){O.isScene!==!0&&(O=Pe);let X=Be.get(w),H=m.state.lights,fe=m.state.shadowsArray,we=H.state.version,Le=ve.getParameters(w,H.state,fe,O,V),De=ve.getProgramCacheKey(Le),Xe=X.programs;X.environment=w.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(w.isMeshStandardMaterial?U:v).get(w.envMap||X.environment),Xe===void 0&&(w.addEventListener("dispose",he),Xe=new Map,X.programs=Xe);let ze=Xe.get(De);if(ze!==void 0){if(X.currentProgram===ze&&X.lightsStateVersion===we)return kl(w,Le),ze}else Le.uniforms=ve.getUniforms(w),w.onBuild(V,Le,_),w.onBeforeCompile(Le,_),ze=ve.acquireProgram(Le,De),Xe.set(De,ze),X.uniforms=Le.uniforms;let He=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(He.clippingPlanes=Se.uniform),kl(w,Le),X.needsLights=Pf(w),X.lightsStateVersion=we,X.needsLights&&(He.ambientLightColor.value=H.state.ambient,He.lightProbe.value=H.state.probe,He.directionalLights.value=H.state.directional,He.directionalLightShadows.value=H.state.directionalShadow,He.spotLights.value=H.state.spot,He.spotLightShadows.value=H.state.spotShadow,He.rectAreaLights.value=H.state.rectArea,He.ltc_1.value=H.state.rectAreaLTC1,He.ltc_2.value=H.state.rectAreaLTC2,He.pointLights.value=H.state.point,He.pointLightShadows.value=H.state.pointShadow,He.hemisphereLights.value=H.state.hemi,He.directionalShadowMap.value=H.state.directionalShadowMap,He.directionalShadowMatrix.value=H.state.directionalShadowMatrix,He.spotShadowMap.value=H.state.spotShadowMap,He.spotLightMatrix.value=H.state.spotLightMatrix,He.spotLightMap.value=H.state.spotLightMap,He.pointShadowMap.value=H.state.pointShadowMap,He.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=ze,X.uniformsList=null,ze}function zl(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=hs.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function kl(w,O){let V=Be.get(w);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function Rf(w,O,V,X,H){O.isScene!==!0&&(O=Pe),T.resetTextureUnits();let fe=O.fog,we=X.isMeshStandardMaterial?O.environment:null,Le=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Fn,De=(X.isMeshStandardMaterial?U:v).get(X.envMap||we),Xe=X.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ze=!!V.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),He=!!V.morphAttributes.position,xt=!!V.morphAttributes.normal,Yt=!!V.morphAttributes.color,Rt=jn;X.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Rt=_.toneMapping);let Rn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ft=Rn!==void 0?Rn.length:0,Ze=Be.get(X),aa=m.state.lights;if(j===!0&&(ue===!0||w!==M)){let Kt=w===M&&X.id===N;Se.setState(X,w,Kt)}let mt=!1;X.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==aa.state.version||Ze.outputColorSpace!==Le||H.isBatchedMesh&&Ze.batching===!1||!H.isBatchedMesh&&Ze.batching===!0||H.isInstancedMesh&&Ze.instancing===!1||!H.isInstancedMesh&&Ze.instancing===!0||H.isSkinnedMesh&&Ze.skinning===!1||!H.isSkinnedMesh&&Ze.skinning===!0||H.isInstancedMesh&&Ze.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ze.instancingColor===!1&&H.instanceColor!==null||Ze.envMap!==De||X.fog===!0&&Ze.fog!==fe||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Se.numPlanes||Ze.numIntersection!==Se.numIntersection)||Ze.vertexAlphas!==Xe||Ze.vertexTangents!==ze||Ze.morphTargets!==He||Ze.morphNormals!==xt||Ze.morphColors!==Yt||Ze.toneMapping!==Rt||Ue.isWebGL2===!0&&Ze.morphTargetsCount!==ft)&&(mt=!0):(mt=!0,Ze.__version=X.version);let fi=Ze.currentProgram;mt===!0&&(fi=mr(X,O,H));let Bl=!1,Rs=!1,ca=!1,Nt=fi.getUniforms(),pi=Ze.uniforms;if(ye.useProgram(fi.program)&&(Bl=!0,Rs=!0,ca=!0),X.id!==N&&(N=X.id,Rs=!0),Bl||M!==w){Nt.setValue(k,"projectionMatrix",w.projectionMatrix),Nt.setValue(k,"viewMatrix",w.matrixWorldInverse);let Kt=Nt.map.cameraPosition;Kt!==void 0&&Kt.setValue(k,Fe.setFromMatrixPosition(w.matrixWorld)),Ue.logarithmicDepthBuffer&&Nt.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Nt.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Rs=!0,ca=!0)}if(H.isSkinnedMesh){Nt.setOptional(k,H,"bindMatrix"),Nt.setOptional(k,H,"bindMatrixInverse");let Kt=H.skeleton;Kt&&(Ue.floatVertexTextures?(Kt.boneTexture===null&&Kt.computeBoneTexture(),Nt.setValue(k,"boneTexture",Kt.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Nt.setOptional(k,H,"batchingTexture"),Nt.setValue(k,"batchingTexture",H._matricesTexture,T));let la=V.morphAttributes;if((la.position!==void 0||la.normal!==void 0||la.color!==void 0&&Ue.isWebGL2===!0)&&Je.update(H,V,fi),(Rs||Ze.receiveShadow!==H.receiveShadow)&&(Ze.receiveShadow=H.receiveShadow,Nt.setValue(k,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(pi.envMap.value=De,pi.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Rs&&(Nt.setValue(k,"toneMappingExposure",_.toneMappingExposure),Ze.needsLights&&Cf(pi,ca),fe&&X.fog===!0&&ae.refreshFogUniforms(pi,fe),ae.refreshMaterialUniforms(pi,X,Z,B,be),hs.upload(k,zl(Ze),pi,T)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(hs.upload(k,zl(Ze),pi,T),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Nt.setValue(k,"center",H.center),Nt.setValue(k,"modelViewMatrix",H.modelViewMatrix),Nt.setValue(k,"normalMatrix",H.normalMatrix),Nt.setValue(k,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let Kt=X.uniformsGroups;for(let ha=0,Lf=Kt.length;ha<Lf;ha++)if(Ue.isWebGL2){let Hl=Kt[ha];je.update(Hl,fi),je.bind(Hl,fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fi}function Cf(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Pf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,O,V){Be.get(w.texture).__webglTexture=O,Be.get(w.depthTexture).__webglTexture=V;let X=Be.get(w);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=V===void 0,X.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,O){let V=Be.get(w);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,V=0){A=w,R=O,E=V;let X=!0,H=null,fe=!1,we=!1;if(w){let De=Be.get(w);De.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(k.FRAMEBUFFER,null),X=!1):De.__webglFramebuffer===void 0?T.setupRenderTarget(w):De.__hasExternalTextures&&T.rebindTextures(w,Be.get(w.texture).__webglTexture,Be.get(w.depthTexture).__webglTexture);let Xe=w.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(we=!0);let ze=Be.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ze[O])?H=ze[O][V]:H=ze[O],fe=!0):Ue.isWebGL2&&w.samples>0&&T.useMultisampledRTT(w)===!1?H=Be.get(w).__webglMultisampledFramebuffer:Array.isArray(ze)?H=ze[V]:H=ze,S.copy(w.viewport),D.copy(w.scissor),z=w.scissorTest}else S.copy(Q).multiplyScalar(Z).floor(),D.copy(te).multiplyScalar(Z).floor(),z=ce;if(ye.bindFramebuffer(k.FRAMEBUFFER,H)&&Ue.drawBuffers&&X&&ye.drawBuffers(w,H),ye.viewport(S),ye.scissor(D),ye.setScissorTest(z),fe){let De=Be.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+O,De.__webglTexture,V)}else if(we){let De=Be.get(w.texture),Xe=O||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,De.__webglTexture,V||0,Xe)}N=-1},this.readRenderTargetPixels=function(w,O,V,X,H,fe,we){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we]),Le){ye.bindFramebuffer(k.FRAMEBUFFER,Le);try{let De=w.texture,Xe=De.format,ze=De.type;if(Xe!==pn&&_e.convert(Xe)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let He=ze===Hs&&(ge.has("EXT_color_buffer_half_float")||Ue.isWebGL2&&ge.has("EXT_color_buffer_float"));if(ze!==ei&&_e.convert(ze)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===Kn&&(Ue.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-X&&V>=0&&V<=w.height-H&&k.readPixels(O,V,X,H,_e.convert(Xe),_e.convert(ze),fe)}finally{let De=A!==null?Be.get(A).__webglFramebuffer:null;ye.bindFramebuffer(k.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(w,O,V=0){let X=Math.pow(2,-V),H=Math.floor(O.image.width*X),fe=Math.floor(O.image.height*X);T.setTexture2D(O,0),k.copyTexSubImage2D(k.TEXTURE_2D,V,0,0,w.x,w.y,H,fe),ye.unbindTexture()},this.copyTextureToTexture=function(w,O,V,X=0){let H=O.image.width,fe=O.image.height,we=_e.convert(V.format),Le=_e.convert(V.type);T.setTexture2D(V,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,V.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,V.unpackAlignment),O.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,X,w.x,w.y,H,fe,we,Le,O.image.data):O.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,X,w.x,w.y,O.mipmaps[0].width,O.mipmaps[0].height,we,O.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,X,w.x,w.y,we,Le,O.image),X===0&&V.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(w,O,V,X,H=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let fe=w.max.x-w.min.x+1,we=w.max.y-w.min.y+1,Le=w.max.z-w.min.z+1,De=_e.convert(X.format),Xe=_e.convert(X.type),ze;if(X.isData3DTexture)T.setTexture3D(X,0),ze=k.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)T.setTexture2DArray(X,0),ze=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment);let He=k.getParameter(k.UNPACK_ROW_LENGTH),xt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Yt=k.getParameter(k.UNPACK_SKIP_PIXELS),Rt=k.getParameter(k.UNPACK_SKIP_ROWS),Rn=k.getParameter(k.UNPACK_SKIP_IMAGES),ft=V.isCompressedTexture?V.mipmaps[H]:V.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,ft.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ft.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,w.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,w.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,w.min.z),V.isDataTexture||V.isData3DTexture?k.texSubImage3D(ze,H,O.x,O.y,O.z,fe,we,Le,De,Xe,ft.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(ze,H,O.x,O.y,O.z,fe,we,Le,De,ft.data)):k.texSubImage3D(ze,H,O.x,O.y,O.z,fe,we,Le,De,Xe,ft),k.pixelStorei(k.UNPACK_ROW_LENGTH,He),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,xt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Yt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Rt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Rn),H===0&&X.generateMipmaps&&k.generateMipmap(ze),ye.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),ye.unbindTexture()},this.resetState=function(){R=0,E=0,A=null,ye.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===qc?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===Lo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===gt?wi:Ou}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===wi?gt:Fn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},yc=class extends Ws{};yc.prototype.isWebGL1Renderer=!0;var co=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new me(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},lo=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Xs=class extends bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},mu=new C,gu=new C,yu=new dt,Ga=new ps,zr=new Ti,_c=class extends It{constructor(e=new yt,t=new Xs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)mu.fromBufferAttribute(t,s-1),gu.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=mu.distanceTo(gu);e.setAttribute("lineDistance",new $e(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zr.copy(i.boundingSphere),zr.applyMatrix4(s),zr.radius+=r,e.ray.intersectsSphere(zr)===!1)return;yu.copy(s).invert(),Ga.copy(e.ray).applyMatrix4(yu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new C,h=new C,u=new C,d=new C,f=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let p=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let _=p,b=x-1;_<b;_+=f){let R=g.getX(_),E=g.getX(_+1);if(l.fromBufferAttribute(m,R),h.fromBufferAttribute(m,E),Ga.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let N=e.ray.origin.distanceTo(d);N<e.near||N>e.far||t.push({distance:N,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let _=p,b=x-1;_<b;_+=f){if(l.fromBufferAttribute(m,_),h.fromBufferAttribute(m,_+1),Ga.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||t.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},_u=new C,xu=new C,ho=class extends _c{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)_u.fromBufferAttribute(t,s),xu.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+_u.distanceTo(xu);e.setAttribute("lineDistance",new $e(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var qs=class extends bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},vu=new dt,xc=new ps,kr=new Ti,Br=new C,uo=class extends It{constructor(e=new yt,t=new qs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),kr.copy(i.boundingSphere),kr.applyMatrix4(s),kr.radius+=r,e.ray.intersectsSphere(kr)===!1)return;vu.copy(s).invert(),xc.copy(e.ray).applyMatrix4(vu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,y=f;g<y;g++){let m=l.getX(g);Br.fromBufferAttribute(u,m),Mu(Br,m,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,y=f;g<y;g++)Br.fromBufferAttribute(u,g),Mu(Br,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Mu(n,e,t,i,s,r,o){let a=xc.distanceSqToPoint(n);if(a<t){let c=new C;xc.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}var Ys=class extends tn{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new de:new C);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new C,s=[],r=[],o=[],a=new C,c=new dt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Lt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Lt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Zs=class extends nn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){let i=t||new de,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},vc=class extends Zs{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Zc(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Hr=new C,Wa=new Zc,Xa=new Zc,qa=new Zc,Mc=class extends nn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new C){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Hr.subVectors(s[0],s[1]).add(s[0]),l=Hr);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Hr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Hr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Wa.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,y,m),Xa.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,y,m),qa.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Wa.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Xa.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),qa.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(Wa.calc(c),Xa.calc(c),qa.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function bu(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function R_(n,e){let t=1-n;return t*t*e}function C_(n,e){return 2*(1-n)*n*e}function P_(n,e){return n*n*e}function Fs(n,e,t,i){return R_(n,e)+C_(n,t)+P_(n,i)}function L_(n,e){let t=1-n;return t*t*t*e}function I_(n,e){let t=1-n;return 3*t*t*n*e}function D_(n,e){return 3*(1-n)*n*n*e}function U_(n,e){return n*n*n*e}function zs(n,e,t,i,s){return L_(n,e)+I_(n,t)+D_(n,i)+U_(n,s)}var fo=class extends nn{constructor(e=new de,t=new de,i=new de,s=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new de){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(zs(e,s.x,r.x,o.x,a.x),zs(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},bc=class extends nn{constructor(e=new C,t=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(zs(e,s.x,r.x,o.x,a.x),zs(e,s.y,r.y,o.y,a.y),zs(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},po=class extends nn{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sc=class extends nn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mo=class extends nn{constructor(e=new de,t=new de,i=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new de){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Fs(e,s.x,r.x,o.x),Fs(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wc=class extends nn{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Fs(e,s.x,r.x,o.x),Fs(e,s.y,r.y,o.y),Fs(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},go=class extends nn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(bu(a,c.x,l.x,h.x,u.x),bu(a,c.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new de().fromArray(s))}return this}},Su=Object.freeze({__proto__:null,ArcCurve:vc,CatmullRomCurve3:Mc,CubicBezierCurve:fo,CubicBezierCurve3:bc,EllipseCurve:Zs,LineCurve:po,LineCurve3:Sc,QuadraticBezierCurve:mo,QuadraticBezierCurve3:wc,SplineCurve:go}),Ec=class extends nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Su[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Su[s.type]().fromJSON(s))}return this}},Tc=class extends Ec{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new po(this.currentPoint.clone(),new de(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new mo(this.currentPoint.clone(),new de(e,t),new de(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new fo(this.currentPoint.clone(),new de(e,t),new de(i,s),new de(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new go(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){let l=new Zs(e,t,i,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ac=class n extends yt{constructor(e=[new de(0,-.5),new de(.5,0),new de(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Lt(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,u=new C,d=new de,f=new C,g=new C,y=new C,m=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(y.x,y.y,y.z);break;default:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),c.push(f.x,f.y,f.z),y.copy(g)}for(let x=0;x<=t;x++){let _=i+x*h*s,b=Math.sin(_),R=Math.cos(_);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*b,u.y=e[E].y,u.z=e[E].x*R,o.push(u.x,u.y,u.z),d.x=x/t,d.y=E/(e.length-1),a.push(d.x,d.y);let A=c[3*E+0]*b,N=c[3*E+1],M=c[3*E+0]*R;l.push(A,N,M)}}for(let x=0;x<t;x++)for(let _=0;_<e.length-1;_++){let b=_+x*e.length,R=b,E=b+e.length,A=b+e.length+1,N=b+1;r.push(R,E,N),r.push(A,N,E)}this.setIndex(r),this.setAttribute("position",new $e(o,3)),this.setAttribute("uv",new $e(a,2)),this.setAttribute("normal",new $e(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},yo=class n extends Ac{constructor(e=1,t=1,i=4,s=8){let r=new Tc;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},_o=class n extends yt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new C,h=new de;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new $e(o,3)),this.setAttribute("normal",new $e(a,3)),this.setAttribute("uv",new $e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ii=class n extends yt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,y=[],m=i/2,p=0;x(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(d,3)),this.setAttribute("uv",new $e(f,2));function x(){let b=new C,R=new C,E=0,A=(t-e)/i;for(let N=0;N<=r;N++){let M=[],S=N/r,D=S*(t-e)+e;for(let z=0;z<=s;z++){let G=z/s,P=G*c+a,F=Math.sin(P),B=Math.cos(P);R.x=D*F,R.y=-S*i+m,R.z=D*B,u.push(R.x,R.y,R.z),b.set(F,A,B).normalize(),d.push(b.x,b.y,b.z),f.push(G,1-S),M.push(g++)}y.push(M)}for(let N=0;N<s;N++)for(let M=0;M<r;M++){let S=y[M][N],D=y[M+1][N],z=y[M+1][N+1],G=y[M][N+1];h.push(S,D,G),h.push(D,z,G),E+=6}l.addGroup(p,E,0),p+=E}function _(b){let R=g,E=new de,A=new C,N=0,M=b===!0?e:t,S=b===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;let D=g;for(let z=0;z<=s;z++){let P=z/s*c+a,F=Math.cos(P),B=Math.sin(P);A.x=M*B,A.y=m*S,A.z=M*F,u.push(A.x,A.y,A.z),d.push(0,S,0),E.x=F*.5+.5,E.y=B*.5*S+.5,f.push(E.x,E.y),g++}for(let z=0;z<s;z++){let G=R+z,P=D+z;b===!0?h.push(P,P+1,G):h.push(P+1,P,G),N+=3}l.addGroup(p,N,b===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},xo=class n extends ii{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Rc=class n extends yt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new $e(r,3)),this.setAttribute("normal",new $e(r.slice(),3)),this.setAttribute("uv",new $e(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let _=new C,b=new C,R=new C;for(let E=0;E<t.length;E+=3)f(t[E+0],_),f(t[E+1],b),f(t[E+2],R),c(_,b,R,x)}function c(x,_,b,R){let E=R+1,A=[];for(let N=0;N<=E;N++){A[N]=[];let M=x.clone().lerp(b,N/E),S=_.clone().lerp(b,N/E),D=E-N;for(let z=0;z<=D;z++)z===0&&N===E?A[N][z]=M:A[N][z]=M.clone().lerp(S,z/D)}for(let N=0;N<E;N++)for(let M=0;M<2*(E-N)-1;M++){let S=Math.floor(M/2);M%2===0?(d(A[N][S+1]),d(A[N+1][S]),d(A[N][S])):(d(A[N][S+1]),d(A[N+1][S+1]),d(A[N+1][S]))}}function l(x){let _=new C;for(let b=0;b<r.length;b+=3)_.x=r[b+0],_.y=r[b+1],_.z=r[b+2],_.normalize().multiplyScalar(x),r[b+0]=_.x,r[b+1]=_.y,r[b+2]=_.z}function h(){let x=new C;for(let _=0;_<r.length;_+=3){x.x=r[_+0],x.y=r[_+1],x.z=r[_+2];let b=m(x)/2/Math.PI+.5,R=p(x)/Math.PI+.5;o.push(b,1-R)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){let _=o[x+0],b=o[x+2],R=o[x+4],E=Math.max(_,b,R),A=Math.min(_,b,R);E>.9&&A<.1&&(_<.2&&(o[x+0]+=1),b<.2&&(o[x+2]+=1),R<.2&&(o[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,_){let b=x*3;_.x=e[b+0],_.y=e[b+1],_.z=e[b+2]}function g(){let x=new C,_=new C,b=new C,R=new C,E=new de,A=new de,N=new de;for(let M=0,S=0;M<r.length;M+=9,S+=6){x.set(r[M+0],r[M+1],r[M+2]),_.set(r[M+3],r[M+4],r[M+5]),b.set(r[M+6],r[M+7],r[M+8]),E.set(o[S+0],o[S+1]),A.set(o[S+2],o[S+3]),N.set(o[S+4],o[S+5]),R.copy(x).add(_).add(b).divideScalar(3);let D=m(R);y(E,S+0,x,D),y(A,S+2,_,D),y(N,S+4,b,D)}}function y(x,_,b,R){R<0&&x.x===1&&(o[_]=x.x-1),b.x===0&&b.z===0&&(o[_]=R/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var vo=class n extends Rc{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Mo=class n extends yt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=e,d=(t-e)/s,f=new C,g=new de;for(let y=0;y<=s;y++){for(let m=0;m<=i;m++){let p=r+m/i*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let y=0;y<s;y++){let m=y*(i+1);for(let p=0;p<i;p++){let x=p+m,_=x,b=x+i+1,R=x+i+2,E=x+1;a.push(_,b,E),a.push(b,R,E)}}this.setIndex(a),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(l,3)),this.setAttribute("uv",new $e(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Ri=class n extends yt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new C,d=new C,f=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){let x=[],_=p/i,b=0;p===0&&o===0?b=.5/t:p===i&&c===Math.PI&&(b=-.5/t);for(let R=0;R<=t;R++){let E=R/t;u.x=-e*Math.cos(s+E*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(s+E*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(E+b,1-_),x.push(l++)}h.push(x)}for(let p=0;p<i;p++)for(let x=0;x<t;x++){let _=h[p][x+1],b=h[p][x],R=h[p+1][x],E=h[p+1][x+1];(p!==0||o>0)&&f.push(_,b,E),(p!==i-1||c<Math.PI)&&f.push(b,R,E)}this.setIndex(f),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(y,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var bo=class n extends yt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new C,u=new C,d=new C;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let y=g/s*r,m=f/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(y),u.y=(e+t*Math.cos(m))*Math.sin(y),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let y=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,x=(s+1)*f+g;o.push(y,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ys=class extends bn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new me(16777215),this.specular=new me(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xc,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Jt=class extends bn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xc,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Vr(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function N_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var _s=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Cc=class extends _s{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Eh,endingEnd:Eh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Th:r=e,a=2*t-i;break;case Ah:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Th:o=e,c=2*i-t;break;case Ah:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,x=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*y+.5*g,b=f*m-f*y;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+x*o[l+R]+_*o[c+R]+b*o[u+R];return r}},Pc=class extends _s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Lc=class extends _s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},gn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Vr(t,this.TimeBufferType),this.values=Vr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Vr(e.times,Array),values:Vr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Cc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Xr:t=this.InterpolantFactoryMethodDiscrete;break;case qr:t=this.InterpolantFactoryMethodLinear;break;case _a:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xr;case this.InterpolantFactoryMethodLinear:return qr;case this.InterpolantFactoryMethodSmooth:return _a}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&N_(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===_a,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let y=t[u+g];if(y!==t[d+g]||y!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=qr;var Ci=class extends gn{};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Xr;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Ic=class extends gn{};Ic.prototype.ValueTypeName="color";var Dc=class extends gn{};Dc.prototype.ValueTypeName="number";var Uc=class extends _s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Mn.slerpFlat(r,0,o,l-a,o,l,c);return r}},$s=class extends gn{InterpolantFactoryMethodLinear(e){return new Uc(this.times,this.values,this.getValueSize(),e)}};$s.prototype.ValueTypeName="quaternion";$s.prototype.DefaultInterpolation=qr;$s.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends gn{};Pi.prototype.ValueTypeName="string";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=Xr;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Nc=class extends gn{};Nc.prototype.ValueTypeName="vector";var Oc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},O_=new Oc,Fc=class{constructor(e){this.manager=e!==void 0?e:O_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Fc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Js=class extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},So=class extends Js{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ya=new dt,wu=new C,Eu=new C,wo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gs,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;wu.setFromMatrixPosition(e.matrixWorld),t.position.copy(wu),Eu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Eu),t.updateMatrixWorld(),Ya.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ya),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ya)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Tu=new dt,Us=new C,Za=new C,zc=class extends wo{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new de(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Us.setFromMatrixPosition(e.matrixWorld),i.position.copy(Us),Za.copy(i.position),Za.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Za),i.updateMatrixWorld(),s.makeTranslation(-Us.x,-Us.y,-Us.z),Tu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tu)}},Eo=class extends Js{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new zc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},kc=class extends wo{constructor(){super(new ro(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},To=class extends Js{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new kc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var $c="\\[\\]\\.:\\/",F_=new RegExp("["+$c+"]","g"),Jc="[^"+$c+"]",z_="[^"+$c.replace("\\.","")+"]",k_=/((?:WC+[\/:])*)/.source.replace("WC",Jc),B_=/(WCOD+)?/.source.replace("WCOD",z_),H_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jc),V_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jc),G_=new RegExp("^"+k_+B_+H_+V_+"$"),W_=["material","materials","bones","map"],Bc=class{constructor(e,t,i){let s=i||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ht=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(F_,"")}static parseTrackName(e){let t=G_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);W_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ht.Composite=Bc;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Pv=new Float32Array(1);var Ao=class{constructor(e,t,i=0,s=1/0){this.ray=new ps(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Vs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Hc(e,this,i,t),i.sort(Au),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Hc(e[s],this,i,t);return i.sort(Au),i}};function Au(n,e){return n.distance-e.distance}function Hc(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)Hc(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vc);async function Do(n){let e=await fetch(n,{cache:"no-cache"});if(!e.ok)throw new Error(`Failed to load ${n}: ${e.status}`);return e.json()}async function Yu(){if(globalThis.__PIZZA_DATA__)return globalThis.__PIZZA_DATA__;let[n,e,t]=await Promise.all([Do("data/economy.json"),Do("data/strings/en.json"),Do("data/locations/index.json")]),i=await Promise.all(t.map(r=>Do(`data/locations/${r}.json`))),s=Object.fromEntries(i.map(r=>[r.id,r]));return{economy:n,strings:e,locations:s}}var Zu={};function $u(n){Zu=n}function L(n,e={}){let t=Zu[n];if(t===void 0)return console.warn("[i18n] missing key",n),n;for(let i of Object.keys(e))t=t.split("{"+i+"}").join(String(e[i]));return t}var X_=new Intl.NumberFormat(void 0,{notation:"compact",maximumFractionDigits:1}),q_=new Intl.NumberFormat(void 0,{maximumFractionDigits:0}),Y_=[[1e9,"B"],[1e12,"T"],[1e15,"Qa"],[1e18,"Qi"],[1e21,"Sx"],[1e24,"Sp"],[1e27,"Oc"],[1e30,"No"],[1e33,"Dc"]];function Ju(n){let e=Math.abs(n),t=null;for(let s of Y_)e>=s[0]&&(t=s);return t?parseFloat((n/t[0]).toFixed(2))+t[1]:null}function Kc(n){let e=Math.floor(n);return Ju(e)??X_.format(e)}function Mt(n){let e=Math.floor(n);return Ju(e)??q_.format(e)}function Qc(n){let e=Math.floor(n/3600),t=Math.floor(n%3600/60);return e>0?`${e}h ${t}m`:`${t}m`}function Ku(n){return n<10?n.toFixed(1):Kc(n)}var jc={schemaVersion:2,rngSeed:1234567,cash:0,lifetimeCash:0,gameTime:0,dayClock:.3,savedAt:0,createdAt:0,location:"corner",unlockedLocations:{corner:!0,sideStreet:!1},upgrades:{oven:0,counter:0,cheese:0,decor:0,neon:0,scooter:0,marketing:0,pizzaSchool:0,megaOven:0},staff:{cashier:0,cook:0},staffing:{cashier:0,cook:0},shops:1,styles:{margherita:!0,pepperoni:!1,veggie:!1,seasonal:!1},franchise:{points:0,count:0,lifetimeAtLast:0,readyNotified:!1},tutorialStep:0,tutorialDone:!1,stats:{ordersTaken:0,manualStretch:0,manualTopping:0,manualLoad:0,served:0,angry:0,turnedAway:0,upgradesBought:0,staffHired:0},flags:{firstPurchase:!1},events:{active:[],nextAt:240},bonus:{nextAt:240,readyNotified:!1},customers:[],pizzas:[],nextId:1,cashierTimers:[],cashierIdle:0,cookIdle:0,idleNotified:{cashier:!1,cook:!1},spawnTimer:4,tutorialSpawnTimer:1.5,settings:{sound:!0,notify:!1,graphics:"auto",look:"3d"},cosmetics:{ovenSkin:"skin.classic"}};function Uo(n,e=Date.now()){let t=structuredClone(jc);return t.cash=n.economy.beginner?.startingCash??n.economy.startingCash,t.dayClock=n.economy.time.startDayClock,t.rngSeed=e%2147483647|0||1,t.createdAt=e,t.savedAt=e,t}var el=2,tl="pizzastand.save",Z_={1:n=>{let e=n.franchise||(n.franchise={points:0,count:0});return e.lifetimeAtLast=e.count>0&&n.lifetimeCash||0,e.readyNotified=!1,delete e.unlocked,n}};function Qu(n,e){for(let t of Object.keys(e)){let i=e[t];n[t]===void 0?n[t]=structuredClone(i):i&&typeof i=="object"&&!Array.isArray(i)&&typeof n[t]=="object"&&Qu(n[t],i)}return n}function $_(n){let e=n.schemaVersion??0;for(;e<el;){let t=Z_[e];t&&(n=t(n)),e++}return n.schemaVersion=el,Qu(n,jc)}function ju(){try{let n=globalThis.localStorage?.getItem(tl);if(!n)return null;let e=JSON.parse(n);return typeof e.schemaVersion=="number"&&e.schemaVersion>el?(console.warn("[save] save is from a newer version; ignoring"),null):$_(e)}catch(n){return console.warn("[save] could not read save",n),null}}function ed(n){try{return globalThis.localStorage?.setItem(tl,JSON.stringify(n)),!0}catch(e){return console.warn("[save] could not write save",e),!1}}function td(){try{globalThis.localStorage?.removeItem(tl)}catch{}}var nd="pizzastand.analytics";var id=null,sd=Date.now();function et(n,e={}){let t={name:n,props:e,t:Date.now()};try{let i=JSON.parse(globalThis.localStorage?.getItem(nd)||"[]");for(i.push(t);i.length>200;)i.shift();globalThis.localStorage?.setItem(nd,JSON.stringify(i))}catch{}if(id)try{id(t)}catch{}}function nl(){sd=Date.now(),et("session_start")}function rd(n={}){et("session_end",{durationSeconds:Math.round((Date.now()-sd)/1e3),...n})}var Qs=null,od=!0;function No(n){od=n}function J_(){if(!od)return null;if(!Qs){let n=globalThis.AudioContext||globalThis.webkitAudioContext;if(!n)return null;Qs=new n}return Qs.state==="suspended"&&Qs.resume(),Qs}function si(n,e,t,i="sine",s=.2,r=null){let o=J_();if(!o)return;let a=o.createOscillator(),c=o.createGain();a.type=i,a.frequency.setValueAtTime(n,o.currentTime+e),r&&a.frequency.exponentialRampToValueAtTime(r,o.currentTime+e+t),c.gain.setValueAtTime(s,o.currentTime+e),c.gain.exponentialRampToValueAtTime(1e-4,o.currentTime+e+t),a.connect(c).connect(o.destination),a.start(o.currentTime+e),a.stop(o.currentTime+e+t+.02)}var St={cash(){si(1318,0,.12,"triangle",.25),si(1760,.07,.25,"triangle",.22)},click(){si(520,0,.05,"square",.08,380)},bell(){si(880,0,.5,"sine",.18),si(1320,.02,.4,"sine",.08)},pop(){si(300,0,.12,"sine",.15,600)},angry(){si(220,0,.3,"sawtooth",.1,140)},whoosh(){si(180,0,.25,"sine",.08,420)}};function vs(n,e,t,i,s=r=>Bn(n,r)){let o=Math.min(t==="max"?1/0:t,n.maxLevel-e),a=0,c=0;for(let l=0;l<o;l++){let h=s(e+l);if(a+h>i)break;a+=h,c++}return{n:c,cost:a}}function Bn(n,e){return Math.ceil(n.baseCost*Math.pow(n.growth,e))}function Oo(n){let e=Math.sin(2*Math.PI*(n-.25)),t=Math.min(1,Math.max(0,(e+.2)/.5));return t*t*(3-2*t)}function Fo(n,e){if(!e)return!0;switch(e.type){case"start":return!0;case"lifetime":return n.lifetimeCash>=e.value;case"staffLevel":return(n.staff[e.role]||0)>=e.value;case"upgradeLevel":return(n.upgrades[e.upgrade]||0)>=e.value;case"franchise":return n.franchise.count>=e.value;default:return!1}}function K_(n,e){return e.locations?.[n.location]}function Q_(n,e){return K_(n,e)?.economy??{trafficMult:1,styleDemand:{}}}function ri(n,e){let t=e.economy.prestige.tiers,i=0;return t.forEach((s,r)=>{n.franchise.count>=s.minFranchises&&(i=r)}),i}function js(n,e){return e.economy.prestige.tiers[ri(n,e)]}function Li(n){return Math.max(0,n.lifetimeCash-(n.franchise.lifetimeAtLast||0))}function Ii(n,e){let t=e.economy.prestige;return Math.round(t.milestoneLifetimeCash*Math.pow(n.franchise.count+1,t.requirementExponent??1.3))}function Ms(n,e){return Li(n)>=Ii(n,e)}function er(n,e){return 1+(e.economy.prestige.ovenSpeedPerFranchise||0)*n.franchise.count}function zo(n,e,t=n.franchise.count){let i=e.economy.prestige;return Math.min(i.trafficMaxMult??1/0,1+(i.trafficPerFranchise||0)*t)}function j_(n,e){return 1+e.economy.prestige.bonusPerPoint*n.franchise.points}function ad(n,e){let t=e.economy.shops?.multiplierPerShop||2;return Math.pow(t,Math.max(0,(n.shops||1)-1))}function il(n,e){let t=ad(n,e),i=n.staff.cashier>0?1+(n.staffing?.cashier||0):0,s=n.staff.cook>0?1+(n.staffing?.cook||0):0;return{cashier:Math.round(i*t),cook:Math.round(s*t)}}function sn(n,e){let t=e.economy,i=t.upgrades,s=n.upgrades,r=n.staff.cashier,o=n.staff.cook,a=i.decor.trafficPerLevel*s.decor+i.neon.trafficPerLevel*s.neon,c=Q_(n,e),l=zo(n,e),h=er(n,e),u=i.marketing?1+i.marketing.trafficMultPerLevel*(s.marketing||0):1,d=i.pizzaSchool?1+i.pizzaSchool.payMultPerLevel*(s.pizzaSchool||0):1,f=ad(n,e),g=!n.tutorialDone,y=g&&t.beginner?.spawnMult||1,m=g&&t.beginner?.payMult||1,p=t.customers.spawnBaseSeconds*y/((1+a)*c.trafficMult*l*u*f),x=js(n,e),_=(i.oven.ovenSlotsBase+i.oven.ovenSlotsPerLevel*s.oven+x.ovenSlotsBonus+(i.megaOven?i.megaOven.ovenSlotsPerLevel*(s.megaOven||0):0))*f,b=Math.min((i.counter.maxQueueBase+i.counter.maxQueuePerLevel*s.counter+x.maxQueueBonus)*f,t.queueHardCap||40),R=1+i.cheese.cheeseMultPerLevel*s.cheese,E=j_(n,e),A=t.cashier.orderSecondsBase/(1+t.cashier.orderSpeedPerLevel*r),N=1+t.cook.speedPerLevel*o,M=Object.entries(t.styles).filter(([W,j])=>j.enabled&&n.styles[W]).map(([,W])=>W.basePrice),S=M.length?M.reduce((W,j)=>W+j,0)/M.length:t.styles.margherita.basePrice,D=Math.max(t.prestige.minBakeSeconds||0,10/h),z=1/p,G=_/D,P=Math.min(z,G),F=S*(t.pizzaQuality.payBase+t.pizzaQuality.payPerQuality*.8)*R*E*d,B=P*F*1.1,Z=(r>0?1:0)+(o>0?1:0),Y=(n.staffing?.cashier||0)+(n.staffing?.cook||0),$=il(n,e),Q=$.cashier,te=$.cook,ce=Math.min(1,t.time.offlineBaseEfficiency+t.time.offlineEfficiencyPerStaffRole*Z+(t.recruit?.offlineEfficiencyPerRecruit||0)*Y);return{traffic:a,locEcon:c,tier:x,frTraffic:l,empireTraffic:u,empirePay:d,beginnerPay:m,bakeSpeed:h,spawnBase:p,ovenSlots:_,maxQueue:b,cheeseMult:R,prestigeMult:E,cashierOrderSec:A,cashierLvl:r,cashierCount:Q,cookSpeed:N,cookLvl:o,cookCount:te,idleRate:B,offlineEfficiency:ce}}function cd(n,e,t,i,s,r){let o=r.economy,a=o.styles[n].basePrice,c=o.pizzaQuality.payBase+o.pizzaQuality.payPerQuality*e,l=s?o.customers.wrongToppingPayMult:1;return a*c*t.cheeseMult*t.prestigeMult*(t.empirePay||1)*(t.beginnerPay||1)*i.cashMult*l}function Di(n,e){return Math.max(1,Math.floor(Li(n)/e.economy.prestige.pointsDivisor))}function ld(n,e){for(let t of e.economy.goals)if(!Fo(n,t.condition))return t;return null}function Ui(n){n.rngSeed=n.rngSeed+1831565813|0;let e=n.rngSeed;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tr(n,e){let t=e.reduce((s,r)=>s+r.weight,0),i=Ui(n)*t;for(let s of e)if(i-=s.weight,i<=0)return s.key;return e[e.length-1].key}function nr(n,e,t){let i=t.economy.events[e];return i?(n.events.active.push({id:e,endsAt:n.gameTime+i.durationSeconds}),!0):!1}function hd(n,e,t,i){let s=t.economy.time;if(n.events.active=n.events.active.filter(r=>n.gameTime>=r.endsAt?(i.push({type:"event_end",id:r.id}),!1):!0),n.events.active.length===0&&n.gameTime>=n.events.nextAt){let r=Object.entries(t.economy.events).filter(([,c])=>c.weight>0).map(([c,l])=>({key:c,weight:l.weight})),o=tr(n,r);nr(n,o,t),i.push({type:"event_start",id:o});let a=s.randomEventMinSeconds+(s.randomEventMaxSeconds-s.randomEventMinSeconds)*Ui(n);n.events.nextAt=n.gameTime+a}}function ko(n,e){let t={spawnMult:1,patienceDrainMult:1,cashMult:1,styleDemand:{}};for(let i of n.events.active){let s=e.economy.events[i.id];if(s){t.spawnMult*=s.spawnMult,t.patienceDrainMult*=s.patienceDrainMult,t.cashMult*=s.cashMult;for(let[r,o]of Object.entries(s.styleDemand||{}))t.styleDemand[r]=(t.styleDemand[r]||1)*o}}return t}function oi(n,e){return n.customers.find(t=>t.id===e)}function ex(n,e){return n.pizzas.find(t=>t.id===e)}function tx(n){return n.nextId++}function Bo(n,e,t){let i=oi(n,e);if(!i||i.state!=="waiting")return{ok:!1};if(n.pizzas.length>=(t.economy.queueHardCap||40))return{ok:!1,reason:"kitchenFull"};i.state="ordered";let s={id:tx(n),customerId:i.id,style:i.style,stage:"dough",work:0,q:{dough:0,top:0,bake:0},topping:null,bakeLeft:0,readyTimer:0};return n.pizzas.push(s),n.stats.ordersTaken++,{ok:!0,type:"order_taken",customerId:i.id,pizzaId:s.id}}function ir(n,e,t,i,s){let r=ex(n,e);if(!r)return{ok:!1,reason:"noPizza"};let o=s.economy.manual,a=s.economy.stages;if(t==="stretch"){if(r.stage!=="dough")return{ok:!1,reason:"wrongStage"};let c=Math.max(0,Math.min(1,i.timeLeftFrac??0));return r.q.dough=i.finished?o.doughFinishMinQuality+(1-o.doughFinishMinQuality)*c:o.doughRushedQuality,r.work=0,r.stage="topping",n.stats.manualStretch++,{ok:!0,type:"stage",pizzaId:e,stage:"topping",auto:!1}}if(t==="topping"){if(r.stage!=="topping")return{ok:!1,reason:"wrongStage"};let c=oi(n,r.customerId),l=c&&i.topping===c.topping;return r.topping=i.topping,r.q.top=l?o.toppingCorrectQuality:o.toppingWrongQuality,r.work=0,r.stage="load",n.stats.manualTopping++,{ok:!0,type:"stage",pizzaId:e,stage:"load",auto:!1,correct:l}}if(t==="load"){if(r.stage!=="load")return{ok:!1,reason:"wrongStage"};let c=sn(n,s);if(nx(n)>=c.ovenSlots)return{ok:!1,reason:"ovenFull"};let l=o.ovenSweetZone/2,h=Math.abs((i.markerPos??.5)-.5),u=h<=l?1:Math.max(o.ovenMinQuality,1-(h-l)*2.2);return ud(n,r,u,s,"manual")}return t==="serve"?r.stage!=="ready"?{ok:!1,reason:"wrongStage"}:sl(n,r,s):{ok:!1,reason:"unknownAction"}}function nx(n){return n.pizzas.filter(e=>e.stage==="baking").length}function ud(n,e,t,i,s){let r=i.economy.stages,o=i.economy.styles[e.style];e.q.bake=t,e.stage="baking";let a=i.economy.prestige.minBakeSeconds||0,c=Math.max(a,o.bakeSeconds/er(n,i));return e.bakeLeft=c*(t>=r.perfectBakeQuality?r.perfectBakeSpeedMult:1),e.bakeTotal=e.bakeLeft,e.work=0,s==="manual"&&n.stats.manualLoad++,{ok:!0,type:"stage",pizzaId:e.id,stage:"baking",auto:s!=="manual",quality:t}}function sl(n,e,t){let i=oi(n,e.customerId);if(n.pizzas=n.pizzas.filter(y=>y.id!==e.id),!i)return{ok:!1,reason:"noCustomer"};n.customers=n.customers.filter(y=>y.id!==i.id);let s=sn(n,t),r=ko(n,t),o=t.economy,a=(e.q.dough+e.q.top+e.q.bake)/3,c=e.topping!==i.topping,l=cd(e.style,a,s,r,c,t),h=Math.max(0,i.patience/i.maxPatience),u=o.customers.types[i.type].tipMult,d=c?o.customers.wrongToppingTipMult:1,f=l*o.customers.tipMax*h*u*d,g=l+f;return n.cash+=g,n.lifetimeCash+=g,n.stats.served++,{ok:!0,type:"served",pizzaId:e.id,customerId:i.id,customerType:i.type,amount:l,tip:f,total:g,big:g>=o.bigSaleThreshold,wrongTopping:c}}function dd(n,e,t){let i=t.economy.stages,s=oi(n,e.customerId);return e.stage==="dough"?(e.q.dough=i.autoDoughQuality,e.stage="topping",e.work=0,{ok:!0,type:"stage",pizzaId:e.id,stage:"topping",auto:!0}):e.stage==="topping"?(e.topping=s?s.topping:null,e.q.top=i.autoToppingQuality,e.stage="load",e.work=0,{ok:!0,type:"stage",pizzaId:e.id,stage:"load",auto:!0}):{ok:!1}}function fd(n,e,t){return ud(n,e,t.economy.stages.autoLoadQuality,t,"auto")}function pd(n,e,t,i=1,s=Date.now()){let r=t.economy.upgrades[e];if(!r||r.enabled===!1)return{ok:!1,reason:"locked"};if(r.requires&&n.franchise.count<(r.requires.franchises||0))return{ok:!1,reason:"needsFranchise",need:r.requires.franchises};let o=n.upgrades[e];if(o>=r.maxLevel)return{ok:!1,reason:"maxed"};let a=vs(r,o,i,n.cash);return a.n===0?{ok:!1,reason:"cash",cost:Bn(r,o)}:(n.cash-=a.cost,n.upgrades[e]=o+a.n,n.stats.upgradesBought+=a.n,{ok:!0,type:"bought",key:e,cost:a.cost,bought:a.n,first:gd(n)})}function Ho(n,e,t){return e==="cashier"&&t===0&&!n.tutorialDone}function md(n,e,t,i=1){let s=t.economy.staff[e],r=n.staff[e];if(r>=s.maxLevel)return{ok:!1,reason:"maxed"};let o=c=>Ho(n,e,c)?0:Bn(s,c),a=vs(s,r,i,n.cash,o);return a.n===0?{ok:!1,reason:"cash",cost:o(r)}:(n.cash-=a.cost,n.staff[e]=r+a.n,r===0&&n.stats.staffHired++,{ok:!0,type:"hired",role:e,cost:a.cost,bought:a.n,first:gd(n)})}function gd(n){return n.flags.firstPurchase?!1:(n.flags.firstPurchase=!0,!0)}function yd(n,e,t){let i=t.economy.recruit;if(!i||!i[e])return{ok:!1,reason:"unknown"};if(n.franchise.count<i.requiresFranchises)return{ok:!1,reason:"needsFranchise",need:i.requiresFranchises};if((n.staff[e]||0)<1)return{ok:!1,reason:"needsHire"};let s=js(n,t).recruitCap,r=n.staffing[e]||0;if(r>=s)return{ok:!1,reason:"maxed",cap:s};let o=Math.ceil(i[e].baseCost*Math.pow(i[e].growth,r));return n.cash<o?{ok:!1,reason:"cash",cost:o}:(n.cash-=o,n.staffing[e]=r+1,{ok:!0,type:"recruited",role:e,cost:o,count:r+1,cap:s})}function rl(n,e){return Ms(n,e)}function _d(n,e,t,i=Date.now()){let s=Di(n,e),r=t(e,i);return r.unlockedLocations={...n.unlockedLocations},r.franchise={points:n.franchise.points+s,count:n.franchise.count+1,lifetimeAtLast:n.lifetimeCash,readyNotified:!1},r.styles={...n.styles},r.tutorialStep=n.tutorialStep,r.tutorialDone=n.tutorialDone,r.cash=e.economy.startingCash,r.stats={...n.stats},r.lifetimeCash=n.lifetimeCash,r.settings={...n.settings},r.cosmetics={...n.cosmetics},r.flags={...n.flags},r.rngSeed=n.rngSeed,r.gameTime=n.gameTime,r.dayClock=n.dayClock,r.createdAt=n.createdAt,r.events={active:[],nextAt:n.gameTime+240},{state:r,gain:s}}function xd(n,e,t){return t.locations?.[e]?n.unlockedLocations[e]?n.location===e?{ok:!1,reason:"current"}:(n.location=e,n.customers=[],n.pizzas=[],n.cashierTimer=0,n.spawnTimer=t.economy.customers.spawnBaseSeconds,{ok:!0,type:"moved",location:e}):{ok:!1,reason:"locked"}:{ok:!1,reason:"unknown"}}function vd(n,e){let t=e.economy.shops;if(!t)return{ok:!1,reason:"unknown"};if(n.franchise.count<t.requiresFranchises)return{ok:!1,reason:"needsFranchise",need:t.requiresFranchises};let i=n.shops||1;if(i>=t.maxShops)return{ok:!1,reason:"maxed",cap:t.maxShops};let s=Math.ceil(t.baseCost*Math.pow(t.growth,i-1));return n.cash<s?{ok:!1,reason:"cash",cost:s}:(n.cash-=s,n.shops=i+1,{ok:!0,type:"shop",shops:n.shops,cost:s})}function ol(n,e){return n.gameTime>=n.bonus.nextAt&&!n.events.active.some(t=>t.id==="doubleCash")}function Md(n,e,t){let i=t.economy.happyHour;n.bonus.nextAt=n.gameTime+i.intervalSeconds,n.bonus.readyNotified=!1;let s=e>=i.needed;return s&&nr(n,"doubleCash",t),{ok:!0,won:s,hits:e}}var ix=12;function al(n,e,t,i=[]){let s=t.economy;n.gameTime+=e,n.dayClock=(n.dayClock+e/s.time.dayLengthSeconds)%1,hd(n,e,t,i);let r=ko(n,t),o=sn(n,t),a=Oo(n.dayClock);return sx(n,t,i),rx(n,t,i),!n.bonus.readyNotified&&n.gameTime>=n.bonus.nextAt&&(n.bonus.readyNotified=!0,i.push({type:"bonus_ready"})),!n.franchise.readyNotified&&Ms(n,t)&&(n.franchise.readyNotified=!0,i.push({type:"franchise_ready"})),ox(n,e,r,t,i),ax(n,e,r,o,a,t,i),lx(n,e,o,t,i),hx(n,e,o,t,i),ux(n,e,i),fx(n,t,i),i}function sx(n,e,t){for(let[i,s]of Object.entries(e.economy.styles))s.enabled&&!n.styles[i]&&Fo(n,s.unlock)&&(n.styles[i]=!0,t.push({type:"style_unlocked",style:i}))}function rx(n,e,t){if(e.locations)for(let[i,s]of Object.entries(e.locations))!n.unlockedLocations[i]&&Fo(n,s.unlock)&&(n.unlockedLocations[i]=!0,t.push({type:"location_unlocked",location:i}))}function ox(n,e,t,i,s){if(n.tutorialDone){for(let r of[...n.customers])if(r.patience-=e*t.patienceDrainMult,r.patience<=0){let o=Math.min(n.cash,i.economy.customers.angryPenalty);n.cash-=o,n.customers=n.customers.filter(a=>a.id!==r.id),n.pizzas=n.pizzas.filter(a=>a.customerId!==r.id),n.stats.angry++,s.push({type:"angry",customerId:r.id,customerType:r.type,nameIdx:r.nameIdx,penalty:o})}}}function ax(n,e,t,i,s,r,o){if(!n.tutorialDone)return cx(n,e,t,i,r,o);let a=n.customers.filter(d=>d.state==="waiting").sort((d,f)=>d.id-f.id),c=a.length-i.maxQueue;if(c>0){let d=new Set(a.slice(i.maxQueue).map(f=>f.id));n.customers=n.customers.filter(f=>!d.has(f.id)),n.stats.turnedAway+=c,o.push({type:"turned_away"})}let l=r.economy.customers,h=l.nightSpawnMult+(1-l.nightSpawnMult)*s;n.spawnTimer-=e*t.spawnMult*h;let u=0;for(;n.spawnTimer<=0&&u++<20;){let d=i.spawnBase*(1+(Ui(n)*2-1)*l.spawnJitter);if(n.spawnTimer+=d,n.customers.filter(g=>g.state==="waiting").length>=i.maxQueue){n.stats.turnedAway++,o.push({type:"turned_away"});continue}bd(n,t,i,r,o)}}function bd(n,e,t,i,s){let r=i.economy.customers;{let o=tr(n,Object.entries(r.types).map(([u,d])=>({key:u,weight:d.weight}))),a=Object.keys(i.economy.styles).filter(u=>n.styles[u]).map(u=>({key:u,weight:(e.styleDemand[u]||1)*(t.locEcon.styleDemand[u]||1)})),c=tr(n,a),l=r.toppings[Math.floor(Ui(n)*r.toppings.length)],h={id:n.nextId++,type:o,style:c,topping:l,nameIdx:1+Math.floor(Ui(n)*5),patience:r.types[o].patience,maxPatience:r.types[o].patience,state:"waiting"};n.customers.push(h),s.push({type:"arrived",customerId:h.id})}}function cx(n,e,t,i,s,r){n.customers.length>0||(n.tutorialSpawnTimer-=e,!(n.tutorialSpawnTimer>0)&&(n.tutorialSpawnTimer=s.economy.beginner.tutorialSpawnDelaySeconds,bd(n,t,i,s,r)))}function lx(n,e,t,i,s){let r=t.cashierCount;if(r===0)return;let o=()=>n.customers.filter(c=>c.state==="waiting").sort((c,l)=>c.id-l.id),a=n.pizzas.filter(c=>c.stage==="ready");for(;n.cashierTimers.length<r;)n.cashierTimers.push(0);n.cashierTimers.length=r;for(let c=0;c<r;c++)if(o().length>0){if(n.cashierTimers[c]+=e,n.cashierTimers[c]>=t.cashierOrderSec){n.cashierTimers[c]=0;let l=o()[0],h=Bo(n,l.id,i);h.ok&&s.push({...h,auto:!0})}}else n.cashierTimers[c]=0;o().length===0&&a.length===0?(n.cashierIdle+=e,Sd(n,"cashier",s)):(n.cashierIdle=0,n.idleNotified.cashier=!1);for(let c of a)if(c.readyTimer+=e,c.readyTimer>=i.economy.stages.autoServeDelaySeconds){let l=sl(n,c,i);l.ok&&s.push({...l,auto:!0})}}function hx(n,e,t,i,s){let r=t.cookCount;if(r===0)return;let o=i.economy.stages,a=n.pizzas.filter(l=>l.stage==="dough"||l.stage==="topping").sort((l,h)=>l.id-h.id).slice(0,r);if(a.length>0){n.cookIdle=0,n.idleNotified.cook=!1;for(let l of a){l.work+=e*t.cookSpeed;let h=l.stage==="dough"?o.autoDoughSeconds:o.autoToppingSeconds;if(l.work>=h){let u=dd(n,l,i);u.ok&&s.push({...u,auto:!0})}}}else n.cookIdle+=e,Sd(n,"cook",s);let c=n.pizzas.filter(l=>l.stage==="load").sort((l,h)=>l.id-h.id);for(let l of c){if(n.pizzas.filter(d=>d.stage==="baking").length>=t.ovenSlots)break;let u=fd(n,l,i);u.ok&&s.push(u)}}function Sd(n,e,t){(e==="cook"?n.cookIdle:n.cashierIdle)>=ix&&!n.idleNotified[e]&&(n.idleNotified[e]=!0,t.push({type:"idle_staff",role:e}))}function ux(n,e,t){for(let i of n.pizzas)i.stage==="baking"&&(i.bakeLeft-=e,i.bakeLeft<=0&&(i.stage="ready",i.bakeLeft=0,t.push({type:"stage",pizzaId:i.id,stage:"ready",auto:!1})))}function dx(n,e,t){if(!e||!e.ensureCash)return;let i=e.ensureCash,s=i.type==="upgrade"?t.economy.upgrades[i.key]:t.economy.staff[i.role],r=i.type==="upgrade"?n.upgrades[i.key]:n.staff[i.role],o=Bn(s,r);n.cash<o&&(n.cash=o)}function fx(n,e,t){if(n.tutorialDone)return;let i=e.economy.tutorial;for(;n.tutorialStep<i.length;){let s=i[n.tutorialStep].check;if((n.stats[s.stat]||0)<s.gte)break;n.tutorialStep++,t.push({type:"tutorial_step",step:n.tutorialStep}),dx(n,i[n.tutorialStep],e)}n.tutorialStep>=i.length&&(n.tutorialDone=!0,t.push({type:"tutorial_done"}))}function wd(n,e,t){let i=t.economy.time,s=Math.max(0,(e-n.savedAt)/1e3),r=Math.min(s,i.offlineCapSeconds),o=sn(n,t),a=Math.floor(r*o.idleRate*o.offlineEfficiency);return{rawSeconds:s,elapsed:r,capped:s>i.offlineCapSeconds,earned:a,rate:o.idleRate*o.offlineEfficiency}}function cl(n,e,t,i=1){let s=Math.floor(e.earned*i);return n.cash+=s,n.lifetimeCash+=s,n.customers=[],n.pizzas=[],n.cashierTimer=0,n.spawnTimer=t.economy.customers.spawnBaseSeconds,n.gameTime+=e.elapsed,n.dayClock=(n.dayClock+e.elapsed/t.economy.time.dayLengthSeconds)%1,n.events.active=[],n.events.nextAt=n.gameTime+240,s}var ll=new Map;function qo(n){let{roughness:e,metalness:t,...i}=n;return i}function Pd(n,e={}){let t=n+"|"+JSON.stringify(e);return ll.has(t)||ll.set(t,new Jt({color:n,...qo(e)})),ll.get(t)}function Ss(n,e={}){return new Jt({color:n,...qo(e)})}function Hn(n,e,t,i=1,s={}){let r=new Jt({color:e,emissive:new me(t),emissiveIntensity:.2,...qo(s)});return r.userData.glow=i,n.glowMats.push(r),r}var rn=new Jt({vertexColors:!0}),Fi=new Jt({vertexColors:!0,flatShading:!0}),pl=new ys({vertexColors:!0,shininess:60,specular:new me("#555555")}),hl=new Map;function Dt(n,e){return hl.has(n)||hl.set(n,e()),hl.get(n)}var ke={box:()=>Dt("box",()=>new Ai(1,1,1)),cyl:(n=14)=>Dt("cyl"+n,()=>new ii(1,1,1,n)),cone:(n=14)=>Dt("cone"+n,()=>new xo(1,1,n)),sphere:(n=16,e=12)=>Dt(`sph${n}_${e}`,()=>new Ri(1,n,e)),dome:(n=16,e=8)=>Dt(`dome${n}_${e}`,()=>new Ri(1,n,e,0,Math.PI*2,0,Math.PI/2)),ico:(n=0)=>Dt("ico"+n,()=>new vo(1,n)),torus:(n=.2,e=20)=>Dt(`tor${n}_${e}`,()=>new bo(1,n,8,e)),capsule:(n,e)=>Dt(`cap${n}_${e}`,()=>new yo(n,e,5,12)),ring:()=>Dt("ring",()=>new Mo(.5,.56,32)),circle:()=>Dt("circle",()=>new _o(1,24))},ul=new WeakMap;function px(n){return n.index?(ul.has(n)||ul.set(n,n.toNonIndexed()),ul.get(n)):n}var dl=new dt,Ed=new Mn,Td=new ms,Ad=new C,Rd=new C,Vo=new C,Go=new C,Cd=new We,Wo=new me,Qe=class{constructor(){this.pos=[],this.nor=[],this.col=[]}add(e,t,i=[0,0,0],s=[0,0,0],r=[1,1,1]){let o=px(e);Td.set(s[0],s[1],s[2]),Ed.setFromEuler(Td),Ad.set(i[0],i[1],i[2]),Rd.set(r[0],r[1],r[2]),dl.compose(Ad,Ed,Rd),Cd.getNormalMatrix(dl),Wo.set(t);let a=o.attributes.position,c=o.attributes.normal;for(let l=0;l<a.count;l++)Vo.fromBufferAttribute(a,l).applyMatrix4(dl),Go.fromBufferAttribute(c,l).applyMatrix3(Cd).normalize(),this.pos.push(Vo.x,Vo.y,Vo.z),this.nor.push(Go.x,Go.y,Go.z),this.col.push(Wo.r,Wo.g,Wo.b);return this}box(e,t,i,s=[0,0,0]){return this.add(ke.box(),t,[i[0],i[1]+e[1]/2,i[2]],s,e)}boxC(e,t,i,s=[0,0,0]){return this.add(ke.box(),t,i,s,e)}cyl(e,t,i,s,r,o=[0,0,0],a=14){let c=e===t?ke.cyl(a):Dt(`cylT${(e/t).toFixed(3)}_${a}`,()=>new ii(e/t,1,1,a));return this.add(c,s,[r[0],r[1]+i/2,r[2]],o,[t,i,t])}cylC(e,t,i,s,r=[0,0,0],o=12){return this.add(ke.cyl(o),i,s,r,[e,t,e])}cone(e,t,i,s,r=[0,0,0],o=14){return this.add(ke.cone(o),i,[s[0],s[1]+t/2,s[2]],r,[e,t,e])}sphere(e,t,i,s=[1,1,1],r=[16,12]){return this.add(ke.sphere(r[0],r[1]),t,i,[0,0,0],[e*s[0],e*s[1],e*s[2]])}dome(e,t,i,s=[1,1,1],r=[0,0,0]){return this.add(ke.dome(),t,i,r,[e*s[0],e*s[1],e*s[2]])}ico(e,t,i,s=[1,1,1],r=[0,0,0]){return this.add(ke.ico(1),t,i,r,[e*s[0],e*s[1],e*s[2]])}torus(e,t,i,s,r=[0,0,0],o=20){let a=ke.torus(Number((t/e).toFixed(3)),o);return this.add(a,i,s,r,[e,e,e])}get empty(){return this.pos.length===0}geometry(){let e=new yt;return e.setAttribute("position",new $e(this.pos,3)),e.setAttribute("normal",new $e(this.nor,3)),e.setAttribute("color",new $e(this.col,3)),e.computeBoundingSphere(),e}mesh(e=rn,{cast:t=!0,receive:i=!0}={}){let s=new Ce(this.geometry(),e);return s.castShadow=t,s.receiveShadow=i,s}},bs=new Map;function mx(n,e){let t=document.createElement("canvas");t.width=t.height=n;let i=t.getContext("2d");e(i,n);let s=new Ys(t);return s.colorSpace=gt,s.wrapS=s.wrapT=ks,s.anisotropy=2,s}function Ni(n){let e=n;return()=>(e=(e*1664525+1013904223)%4294967296,e/4294967296)}function Oi(n,e,t,i,s,r=!0){for(let o=0;o<i;o++){let a=t()*s;n.fillStyle=r?`rgba(255,255,255,${a})`:`rgba(0,0,0,${a})`,n.fillRect(t()*e,t()*e,1+t()*2,1+t()*2)}}var gx={pavers(n,e){let t=Ni(7);n.fillStyle="#b89a78",n.fillRect(0,0,e,e);let i=4,s=e/i;for(let r=0;r<i*2;r++)for(let o=-1;o<i;o++){let a=r%2*(s/2),c=196+Math.floor(t()*34);n.fillStyle=`rgb(${c+22},${c-6},${c-44})`,n.fillRect(o*s+a+2,r*(s/2)+2,s-4,s/2-4)}Oi(n,e,t,900,.07,!1),Oi(n,e,t,500,.06,!0)},asphalt(n,e){let t=Ni(11);n.fillStyle="#4b4e55",n.fillRect(0,0,e,e),Oi(n,e,t,2600,.09,!0),Oi(n,e,t,2600,.14,!1)},brick(n,e){let t=Ni(3);n.fillStyle="#d9c7b0",n.fillRect(0,0,e,e);let i=8,s=e/i,r=e/4;for(let o=0;o<i;o++)for(let a=-1;a<4;a++){let c=o%2*(r/2),l=t();n.fillStyle=`rgb(${150+l*40},${66+l*26},${48+l*18})`,n.fillRect(a*r+c+2,o*s+2,r-4,s-4)}Oi(n,e,t,700,.08,!1)},wood(n,e){let t=Ni(5),i=4,s=e/i;for(let r=0;r<i;r++){let o=t();n.fillStyle=`rgb(${176+o*26},${118+o*22},${66+o*16})`,n.fillRect(r*s,0,s,e),n.fillStyle="rgba(70,40,15,0.5)",n.fillRect(r*s,0,2,e);for(let a=0;a<14;a++)n.fillStyle=`rgba(90,55,25,${.05+t()*.1})`,n.fillRect(r*s+t()*s,0,1+t()*2,e)}},plaster(n,e){let t=Ni(9);n.fillStyle="#ffffff",n.fillRect(0,0,e,e),Oi(n,e,t,2200,.05,!1);for(let i=0;i<14;i++)n.fillStyle=`rgba(0,0,0,${.015+t()*.02})`,n.fillRect(t()*e,t()*e,30+t()*80,8+t()*30)},tiles(n,e){n.fillStyle="#d7d2c8",n.fillRect(0,0,e,e);let t=4,i=e/t;for(let s=0;s<t;s++)for(let r=0;r<t;r++)n.fillStyle=(r+s)%2?"#fbf7ee":"#f1ebde",n.fillRect(r*i+2,s*i+2,i-4,i-4)},checker(n,e){let i=e/4;for(let s=0;s<4;s++)for(let r=0;r<4;r++)n.fillStyle=(r+s)%2?"#f4ead8":"#b5483a",n.fillRect(r*i,s*i,i,i)},stripes(n,e){n.fillStyle="#fff6e6",n.fillRect(0,0,e,e),n.fillStyle="#d8402f",n.fillRect(0,0,e/2,e);let t=Ni(2);Oi(n,e,t,500,.04,!1)},rooftiles(n,e){let t=Ni(13);n.fillStyle="#8f3f2a",n.fillRect(0,0,e,e);let i=6,s=e/i,r=e/6;for(let o=0;o<i;o++)for(let a=-1;a<6;a++){let c=o%2*(r/2),l=t();n.fillStyle=`rgb(${186+l*30},${92+l*24},${58+l*16})`,n.beginPath(),n.ellipse(a*r+c+r/2,o*s+s*.35,r/2-1.5,s*.62,0,0,Math.PI),n.fill()}}};function yx(n,e=1,t=1){bs.has(n)||bs.set(n,mx(256,gx[n]));let i=`${n}|${e}|${t}`;if(!bs.has(i)){let s=bs.get(n).clone();s.repeat.set(e,t),s.needsUpdate=!0,bs.set(i,s)}return bs.get(i)}var fl=new Map;function wn(n,e=1,t=1,i={}){let s=`${n}|${e}|${t}|${JSON.stringify(i)}`;return fl.has(s)||fl.set(s,new Jt({map:yx(n,e,t),...qo(i)})),fl.get(s)}function En(n,e,t,i=[1,1],s={},r=[0,0,0]){let o=new Ce(ke.box(),wn(e,i[0],i[1],s));return o.scale.set(n[0],n[1],n[2]),o.position.set(t[0],t[1]+n[1]/2,t[2]),o.rotation.set(r[0],r[1],r[2]),o.castShadow=!0,o.receiveShadow=!0,o}var _x=new vt({color:"#000000",transparent:!0,opacity:.2,depthWrite:!1});function Ld(n=.34){let e=new Ce(ke.circle(),_x);return e.rotation.x=-Math.PI/2,e.scale.setScalar(n),e.position.y=.02,e.renderOrder=1,e}var Xo=null;function Yo(n,e,t="#ffc56b",i=.55){if(!Xo){let o=document.createElement("canvas");o.width=o.height=128;let a=o.getContext("2d"),c=a.createRadialGradient(64,64,0,64,64,64);c.addColorStop(0,"rgba(255,255,255,1)"),c.addColorStop(.5,"rgba(255,255,255,0.35)"),c.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=c,a.fillRect(0,0,128,128),Xo=new Ys(o),Xo.colorSpace=gt}let s=new vt({map:Xo,color:t,transparent:!0,opacity:0,depthWrite:!1,blending:Gr,toneMapped:!1});s.userData.base=i,n.nightFades.push(s);let r=new Ce(new Sn(e*2,e*2),s);return r.rotation.x=-Math.PI/2,r.renderOrder=2,r}var ml=new Map;function xx(n){if(!ml.has(n.uuid)){let e=new vt({transparent:n.transparent,opacity:n.opacity,side:n.side,depthWrite:n.depthWrite,toneMapped:!1});e.color=n.color,e.map=n.map||null,e.vertexColors=!!n.vertexColors,ml.set(n.uuid,e)}return ml.get(n.uuid)}function gl(n){n.traverse(e=>{!e.isMesh||!e.material||Array.isArray(e.material)||e.material.isShaderMaterial||e.userData.origMat||(e.userData.origMat=e.material,e.material=xx(e.material))})}function Id(n){n.traverse(e=>{e.userData.origMat&&(e.material=e.userData.origMat,delete e.userData.origMat)})}var Vn=new C,Ut=n=>new me(n),Gn={dayTop:Ut("#2f86d9"),dayHorizon:Ut("#c9ebfb"),duskTop:Ut("#3d4f9a"),duskHorizon:Ut("#ffab6b"),nightTop:Ut("#060a1c"),nightHorizon:Ut("#1b2a52")},vx=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Mx=`
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
}`;function Dd(n,e){let t=new Ws({canvas:n,antialias:!0,powerPreference:"high-performance"}),i=Math.min(globalThis.devicePixelRatio||1,2),s=i,r="auto";t.setPixelRatio(s),t.shadowMap.enabled=!0,t.shadowMap.type=Ro,t.shadowMap.autoUpdate=!1,t.outputColorSpace=gt,t.toneMapping=Gc,t.toneMappingExposure=1.05;let o=new lo,a=new co(Gn.dayHorizon.clone(),45,150);o.fog=a;let c=new zt(e.camera.fov,1,.2,400),l=new So(16777215,11569512,1),h=new To(16774108,3);h.castShadow=!0,h.shadow.mapSize.set(1536,1536),Object.assign(h.shadow.camera,{left:-15,right:15,top:15,bottom:-15,near:1,far:90}),h.shadow.bias=-4e-4,h.shadow.normalBias=.035,h.shadow.radius=2.5;let u=new Eo(16757865,0,16,1.6);u.position.set(.2,2.6,1.6),o.add(l,h,h.target,u);let d=new mn({uniforms:{top:{value:Gn.dayTop.clone()},horizon:{value:Gn.dayHorizon.clone()},sunDir:{value:new C(0,1,0)},sunColor:{value:Ut("#fff1c4")},sunPower:{value:1}},vertexShader:vx,fragmentShader:Mx,side:kt,depthWrite:!1,fog:!1,toneMapped:!1}),f=new Ce(new Ri(300,24,16),d);f.frustumCulled=!1,o.add(f);let g=[];for(let v=0;v<420;v++){let U=Math.random()*Math.PI*2,K=.08+Math.random()*.92,J=Math.sqrt(1-K*K);g.push(Math.cos(U)*J*280,K*280,Math.sin(U)*J*280)}let y=new yt;y.setAttribute("position",new $e(g,3));let m=new qs({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),p=new uo(y,m);p.frustumCulled=!1,o.add(p);let x={sky:f,stars:p,moon:null,clouds:[]},_=new Ce(ke.sphere(),new vt({color:"#f4f1de",fog:!1}));_.scale.setScalar(9),o.add(_),x.moon=_;let b=new Jt({color:16777215,fog:!1}),R=[];for(let v=0;v<9;v++){let U=new Qe,K=4+Math.floor(Math.random()*3);for(let ee=0;ee<K;ee++)U.sphere(2.2+Math.random()*2.2,"#ffffff",[(ee-K/2)*2.6+Math.random(),Math.random()*1.2,Math.random()*2],[1.25,.62,1],[10,8]);let J=new Ce(U.geometry(),b);J.position.set(-110+Math.random()*220,26+Math.random()*26,-60-Math.random()*90),J.scale.setScalar(1+Math.random()*1.4),J.userData.speed=.35+Math.random()*.5,o.add(J),R.push(J),x.clouds.push(J)}let E={pos:new C,target:new C,fov:46,zoom:1},A={pos:new C,look:new C},N={pos:new C,look:new C},M={amount:0,time:0},S={renderer:t,scene:o,camera:c,hemi:l,sun:h,daylight:.8,time:0,look:"3d",lastLayout:null,glowMats:[],nightFades:[],updaters:[],signs:[]};function D(v,U){t.setSize(v,U,!1),c.aspect=v/U;let K=Math.max(0,.75-c.aspect);c.fov=E.fov+K*(S.look==="2d"?6:40),c.updateProjectionMatrix(),z()}function z(){let v=(1+Math.max(0,.75-c.aspect)*1.2)*E.zoom,U=E.pos.clone().sub(E.target);N.pos.copy(E.target).add(U.multiplyScalar(v)),N.look.copy(E.target)}function G(v){if(!v)return z();let U=new C(...v);N.look.copy(U).add(new C(0,.25,0)),S.look==="2d"?N.pos.copy(U).add(new C(0,.8,24)):N.pos.copy(U).add(new C(0,2.2,4.2))}function P(v,U=!0){S.lastLayout=v,E.zoom=v.camera.zoom||1,E.target.set(...v.camera.target),S.look==="2d"?(E.fov=13,E.pos.copy(E.target).add(new C(0,1.6,40))):(E.fov=v.camera.fov,E.pos.set(...v.camera.position)),u.position.set(v.cx??.2,2.7,1.4),z(),U&&(A.pos.copy(N.pos),A.look.copy(N.look)),ye()}function F(v){M.amount=Math.max(M.amount,v),M.time=.35}let B=new C,Z=new me,Y=new me,$=new me,Q=Ut("#ffffff"),te=Ut("#2c3558"),ce=Ut("#ffc0a0"),W=Ut("#fff3dc"),j=Ut("#ff9a55"),ue=Ut("#9db8ff"),be=Ut("#b08968"),Me=Ut("#3a4468"),Ne=Ut("#ffffff"),Fe=Ut("#8ea2dc");function Pe(v,U){S.time+=v;let K=1-Math.exp(-v*4);if(A.pos.lerp(N.pos,K),A.look.lerp(N.look,K),c.position.copy(A.pos),c.position.x+=Math.sin(S.time*.22)*.12,M.time>0){M.time-=v;let Se=M.amount*Math.max(0,M.time/.35);c.position.x+=(Math.random()-.5)*Se,c.position.y+=(Math.random()-.5)*Se}else M.amount=0;c.lookAt(A.look);let J=Oo(U),ee=1-J;S.daylight=J;let ve=2*Math.PI*(U-.25);B.set(Math.cos(ve)*.6,Math.sin(ve),.55).normalize();let ae=Math.max(0,1-Math.abs(J-.3)*3.2);Z.copy(Gn.nightTop).lerp(Gn.dayTop,J).lerp(Gn.duskTop,ae*.6),Y.copy(Gn.nightHorizon).lerp(Gn.dayHorizon,J).lerp(Gn.duskHorizon,ae*.85),d.uniforms.top.value.copy(Z),d.uniforms.horizon.value.copy(Y),d.uniforms.sunDir.value.copy(B),d.uniforms.sunPower.value=Math.min(1,J*1.6+ae*.6),d.uniforms.sunColor.value.copy(W).lerp(j,ae),o.fog&&o.fog.color.copy(Y),S.look==="2d"&&o.background&&o.background.copy(Y);let pe=B.y>-.02;pe?(Vn.copy(B),Vn.y=Math.max(.62,Vn.y)):Vn.set(-.45,.8,.6),h.position.copy(Vn.normalize()).multiplyScalar(40),h.target.position.set(0,0,0),pe?(h.color.copy(j).lerp(W,Math.min(1,J*1.4)),h.intensity=.3+2.3*J):(h.color.copy(ue),h.intensity=1),l.color.copy(Fe).lerp(Ne,J),l.groundColor.copy(Me).lerp(be,J),l.intensity=1.2+.55*J,t.toneMappingExposure=1.02+ee*.2,_.position.copy(B).multiplyScalar(-250),_.visible=B.y<.25,m.opacity=Math.pow(ee,2.2),$.copy(te).lerp(Q,J).lerp(ce,ae*.55),b.color.copy($);for(let Se of R)Se.position.x+=Se.userData.speed*v,Se.position.x>130&&(Se.position.x=-130);let Ae=.08+1.7*ee;for(let Se of S.glowMats)Se.emissiveIntensity=Ae*(Se.userData.glow??1);u.intensity=38*ee;for(let Se of S.nightFades)Se.opacity=(Se.userData.base||.5)*ee;for(let Se of S.updaters)Se(v,S.time,J);Ke++,Ke%2===0&&(t.shadowMap.needsUpdate=!0),r==="auto"&&Ue(v)}let Ke=0;function k(v){t.shadowMap.enabled!==v&&(t.shadowMap.enabled=v,h.castShadow=v,o.traverse(U=>{U.material&&(Array.isArray(U.material)?U.material:[U.material]).forEach(K=>{K.needsUpdate=!0})}))}function Pt(v){r=v,ge.frames=0,ge.time=0,ge.warmup=3,s=v==="low"?1:i,t.setPixelRatio(s),u.visible=v!=="low",k(v!=="low"),ye()}let ge={frames:0,time:0,warmup:3};function Ue(v){if(ge.warmup>0){ge.warmup-=v;return}if(ge.frames++,ge.time+=v,ge.time<2)return;let U=ge.frames/ge.time;ge.frames=0,ge.time=0,U<45&&s>1?(s=Math.max(1,s-.25),t.setPixelRatio(s),ye(),S.pixelRatio=s):U<30&&t.shadowMap.enabled&&s<=1&&k(!1)}function ye(){let v=n.clientWidth||globalThis.innerWidth,U=n.clientHeight||globalThis.innerHeight;D(v,U)}function ct(v){Vn.set(v[0],v[1],v[2]).project(c);let U=n.clientWidth,K=n.clientHeight;return{x:(Vn.x*.5+.5)*U,y:(-Vn.y*.5+.5)*K,front:Vn.z<1,w:U,h:K}}function Be(v){let U=v==="2d";S.look=U?"2d":"3d",U?gl(o):Id(o),x.sky.visible=!U,x.stars.visible=!U,x.moon&&(x.moon.visible=!U);for(let K of x.clouds)K.visible=!U;o.fog=U?null:a,o.background=U?new me("#bfe6fb"):null,k(!U&&r!=="low"),S.lastLayout&&P(S.lastLayout,!0)}function T(v){S.look==="2d"&&gl(v)}return Object.assign(S,{update:Pe,focus:G,shakeCam:F,resize:ye,toScreen:ct,recomputeGoal:z,setLocation:P,setQuality:Pt,setLook:Be,styleNew:T}),P(e),S}var zi="#f3ede0",Ud=new me;function ai(n,e,t=0){return Ud.set(n).offsetHSL(0,t,e),"#"+Ud.getHexString()}function Nd(n){let e=(Math.abs(Math.round(n))*9301+49297)%4294967296;return()=>(e=(e*1664525+1013904223)%4294967296,e/4294967296)}function Od(n,e){let t=new at;t.name="location:"+n.id;let i=new Ce(new Sn(200,200),wn("pavers",90,90));i.rotation.x=-Math.PI/2,i.receiveShadow=!0,t.add(i);let s={env:e,group:t,solid:new Qe,flat:new Qe,glassDark:new Qe,glassLit:new Qe,lampGlow:new Qe,lights:0};for(let r of n.props){let o=bx[r.type];o?o(r,s):console.warn("[props] unknown prop type",r.type)}if(s.solid.empty||t.add(s.solid.mesh(rn)),s.flat.empty||t.add(s.flat.mesh(Fi)),s.glassDark.empty||t.add(s.glassDark.mesh(rn,{cast:!1})),!s.glassLit.empty){let r=Hn(e,"#ffffff","#ffb45e",.5,{vertexColors:!0,roughness:.3});t.add(s.glassLit.mesh(r,{cast:!1}))}if(!s.lampGlow.empty){let r=Hn(e,"#fff3d0","#ffc56b",2.2);t.add(s.lampGlow.mesh(r,{cast:!1,receive:!1}))}return t}var bx={road(n,{group:e,solid:t,env:i}){let s=n.z,r=n.width,o=new Ce(new Sn(200,r),wn("asphalt",60,3));o.rotation.x=-Math.PI/2,o.position.set(0,.012,s),o.receiveShadow=!0,e.add(o);for(let a=-96;a<=96;a+=4.5)t.box([1.9,.012,.14],"#f2e3a6",[a,.014,s]);for(let a of[-1,1])t.box([200,.16,.34],"#cfc8bc",[0,0,s+a*(r/2+.17)]),t.box([200,.012,.1],"#e9e4d8",[0,.014,s+a*(r/2-.35)]);for(let a=0;a<6;a++)t.box([.55,.012,r-1.2],"#ecebe4",[9.5+a*1.05,.015,s]);t.cyl(.45,.45,.012,"#3a3c42",[-3.5,.016,s+1.2],[0,0,0],16),Sx(n,e,i)},building(n,{solid:e,glassDark:t,glassLit:i}){let[s,r,o]=n.size,[a,,c]=n.pos,l=n.color,h=Nd(Math.round(a*7+r*13+5)),u=c+o/2,d=3.3;e.box([s,r,o],l,[a,0,c]),e.box([s+.08,d,o+.08],ai(l,-.13,-.05),[a,0,c]),e.box([s+.3,.18,o+.3],zi,[a,d,c]),e.box([s+.5,.26,o+.5],zi,[a,r,c]),e.box([s+.16,.55,o+.16],ai(l,-.08),[a,r+.26,c]),e.box([s-.4,.1,o-.4],"#6b6f76",[a,r+.3,c]);let f=n.awning||["#d8402f","#2f7d6a","#e9a23b","#4a6fa5"][Math.floor(h()*4)],g=s*.5,y=a-s*.16;e.box([g+.24,2.15,.1],zi,[y,.45,u+.02]),(h()<.7?i:t).box([g,1.9,.08],"#9fc3d6",[y,.58,u+.06]),e.box([g+.3,.45,.2],ai(l,-.22),[y,0,u+.06]),e.box([1.15,2.4,.1],zi,[a+s*.33,0,u+.02]),e.box([.95,2.25,.1],ai(f,-.18),[a+s*.33,0,u+.06]),t.box([.6,.8,.06],"#9fc3d6",[a+s*.33,1.2,u+.1]),e.boxC([g+.6,.07,1.25],f,[y,2.82,u+.58],[.34,0,0]),e.box([g+.6,.22,.05],ai(f,.1),[y,2.48,u+1.16]);let m=Math.max(1,Math.floor((r-d-.9)/2.25)),p=Math.max(1,Math.floor((s-.7)/1.75)),x=["#2f6b5a","#8a3b2a","#3d5a80","#5b4636"][Math.floor(h()*4)],_=h()<.6;for(let R=0;R<m;R++)for(let E=0;E<p;E++){let A=a-(p-1)*1.75/2+E*1.75,N=d+.75+R*2.25;e.box([1.06,1.46,.08],zi,[A,N-.08,u+.01]),(h()<.42?i:t).box([.88,1.3,.06],"#8fb4cc",[A,N,u+.05]),e.box([.05,1.3,.04],zi,[A,N,u+.09]),e.box([1.2,.09,.2],zi,[A,N-.12,u+.06]),_?(e.box([.22,1.32,.05],x,[A-.58,N,u+.05]),e.box([.22,1.32,.05],x,[A+.58,N,u+.05])):h()<.3&&(e.box([1.4,.08,.5],"#4a4e57",[A,N-.2,u+.28]),e.box([1.4,.5,.04],"#4a4e57",[A,N-.12,u+.52]))}let b=Math.max(1,Math.floor((o-.8)/2.1));for(let R of[-1,1])for(let E=0;E<m;E++)for(let A=0;A<b;A++){let N=c-(b-1)*2.1/2+A*2.1,M=d+.75+E*2.25;(h()<.35?i:t).box([.06,1.3,.88],"#8fb4cc",[a+R*(s/2+.02),M,N])}h()<.7&&e.box([1.1,.7,.9],"#9aa0a8",[a-s*.22,r+.4,c-o*.1]),h()<.6&&(e.cyl(.6,.6,1.2,"#7b5a3c",[a+s*.2,r+.9,c+o*.1]),e.cone(.68,.45,"#5b4636",[a+s*.2,r+2.1,c+o*.1]),e.cyl(.05,.05,.5,"#4a4e57",[a+s*.2-.4,r+.4,c+o*.1]),e.cyl(.05,.05,.5,"#4a4e57",[a+s*.2+.4,r+.4,c+o*.1])),h()<.5&&e.box([.5,1.3,.5],ai(l,-.2),[a+s*.36,r+.3,c-o*.25])},tree(n,{solid:e,flat:t}){let[i,,s]=n.pos,r=n.scale||1,o=Nd(Math.round(i*31+s*17)),a=["#5fa052","#6fb35f","#4f8f47","#7dbb62"];e.cyl(.92,.92,.03,"#5a5148",[i,.012,s],[0,0,0],16),e.cyl(.13*r,.2*r,1.9*r,"#7b5236",[i,0,s]);let c=[[0,2.7,0,1.3],[.75,2.25,.25,.95],[-.7,2.3,-.2,.9],[.1,3.5,.05,.85],[-.15,2.3,.7,.8]];for(let[l,h,u,d]of c)t.ico(d*r,a[Math.floor(o()*a.length)],[i+l*r,h*r,s+u*r],[1,.92,1],[o()*3,o()*3,0])},bush(n,{flat:e}){let[t,,i]=n.pos;e.ico(.55,"#5fa052",[t,.4,i],[1.2,.8,1]),e.ico(.42,"#6fb35f",[t+.5,.33,i+.15],[1,.8,1],[1,2,0]),e.ico(.4,"#4f8f47",[t-.45,.3,i-.1],[1,.8,1],[2,1,0])},lamp(n,{solid:e,lampGlow:t,group:i,env:s}){let[r,,o]=n.pos,a="#2f3238";e.cyl(.12,.2,.35,a,[r,0,o]),e.cyl(.06,.07,3.5,a,[r,.3,o]),e.boxC([.7,.06,.06],a,[r+.3,3.75,o]),e.cyl(.2,.12,.1,a,[r+.62,3.6,o]),e.cone(.22,.16,a,[r+.62,3.7,o]),t.sphere(.16,"#fff3d0",[r+.62,3.5,o],[1,1.15,1],[10,8]);let c=Yo(s,n.light?4.2:3.2);c.position.set(r+.62,.03,o),i.add(c)},bench(n,{solid:e}){let[t,,i]=n.pos,s="#a8703f";for(let r=0;r<3;r++)e.box([1.7,.05,.13],s,[t,.46,i-.16+r*.16]);for(let r=0;r<2;r++)e.box([1.7,.13,.05],s,[t,.62+r*.2,i-.28]);for(let r of[-.7,.7])e.box([.07,.46,.45],"#2f3238",[t+r,0,i]),e.box([.07,.55,.07],"#2f3238",[t+r,.46,i-.28])},bin(n,{solid:e}){let[t,,i]=n.pos;e.cyl(.3,.26,.85,"#3f6d7c",[t,0,i],[0,0,0],12),e.cyl(.33,.33,.08,"#2c4e59",[t,.85,i],[0,0,0],12),e.cyl(.2,.2,.02,"#14242a",[t,.93,i],[0,0,0],12)},hydrant(n,{solid:e}){let[t,,i]=n.pos;e.cyl(.13,.16,.55,"#d8402f",[t,0,i]),e.dome(.14,"#d8402f",[t,.55,i]),e.cylC(.06,.42,"#b53324",[t,.36,i],[0,0,Math.PI/2]),e.cyl(.19,.19,.05,"#b53324",[t,0,i])},planter(n,{solid:e,flat:t}){let[i,,s]=n.pos;e.box([1.3,.5,.55],"#8d5a3b",[i,0,s]),e.box([1.36,.07,.61],"#a8703f",[i,.5,s]),t.ico(.3,"#4f8f47",[i-.3,.68,s],[1.3,.7,1]),t.ico(.3,"#5fa052",[i+.3,.68,s],[1.3,.7,1],[1,1,0]);let r=["#ef476f","#ffd166","#f78c6b","#c77dff","#ffffff"];for(let o=0;o<6;o++)t.ico(.11,r[o%r.length],[i-.5+o*.2,.86+o%2*.09,s+(o%3-1)*.12])},sandwichBoard(n,{solid:e,env:t}){let[i,,s]=n.pos,r=1.6;for(let o of[-1,1])e.boxC([.8*r,1.1*r,.05*r],"#3a2a1d",[i,.55*r,s+o*.17*r],[o*.3,0,0]),e.boxC([.68*r,.8*r,.02*r],"#fff3c4",[i,.6*r,s+o*.215*r],[o*.3,0,0]);t.signs.push({id:"sandwich",pos:[i,.6*r,s+.23*r],size:[.62*r,.74*r],kind:"street"})},car(n,{group:e}){let t=Fd(n.color||"#d8402f");t.position.set(n.pos[0],0,n.pos[2]),t.rotation.y=n.rot||0,e.add(t)}};function Fd(n){let e=new Qe,t="#2d3f52";e.box([3.7,.5,1.62],n,[0,.32,0]),e.box([3.5,.12,1.5],ai(n,-.12),[0,.22,0]),e.box([2,.52,1.46],n,[-.2,.82,0]),e.box([2.06,.36,1.5],t,[-.2,.86,0]),e.box([1.6,.04,1.3],ai(n,.06),[-.2,1.34,0]);for(let i of[-1.15,1.15])for(let s of[-.8,.8])e.cylC(.34,.24,"#1d1f24",[i,.34,s],[Math.PI/2,0,0],14),e.cylC(.17,.26,"#b9bec6",[i,.34,s],[Math.PI/2,0,0],10);return e.box([.08,.14,.34],"#fff3c4",[1.84,.52,.5]),e.box([.08,.14,.34],"#fff3c4",[1.84,.52,-.5]),e.box([.08,.14,.34],"#c0392b",[-1.84,.52,.5]),e.box([.08,.14,.34],"#c0392b",[-1.84,.52,-.5]),e.box([.14,.14,1.66],"#8f949c",[1.82,.28,0]),e.box([.14,.14,1.66],"#8f949c",[-1.82,.28,0]),e.mesh(rn)}function Sx(n,e,t){let i=["#e9c46a","#4a6fa5","#f4f1de","#2f7d6a"],s=[{z:n.z+n.width*.24,dir:1},{z:n.z-n.width*.24,dir:-1}],r=Hn(t,"#fff8d8","#fff0b0",2.5),o=[];s.forEach((a,c)=>{for(let l=0;l<2;l++){let h=Fd(i[(c*2+l)%i.length]);h.rotation.y=a.dir>0?0:Math.PI,h.position.set(-70+Math.random()*140,0,a.z);for(let u of[-.5,.5]){let d=new Ce(ke.sphere(8,6),r);d.scale.set(.06,.1,.16),d.position.set(1.9,.59,u),h.add(d)}e.add(h),o.push({m:h,dir:a.dir,speed:5+Math.random()*3})}}),t.updaters.push(a=>{for(let c of o)c.m.position.x+=c.dir*c.speed*a,c.m.position.x>80&&(c.m.position.x=-80),c.m.position.x<-80&&(c.m.position.x=80)})}var ws=new Map;function wx(n,e){let t="leg|"+n+"|"+e;if(!ws.has(t)){let i=new Qe;i.add(ke.capsule(.085,.36),n,[0,-.27,0]),i.box([.15,.09,.26],e,[0,-.58,.04]),ws.set(t,i.geometry())}return ws.get(t)}function Ex(n,e){let t="arm|"+n+"|"+e;if(!ws.has(t)){let i=new Qe;i.add(ke.capsule(.065,.3),n,[0,-.2,0]),i.sphere(.072,e,[0,-.45,0]),ws.set(t,i.geometry())}return ws.get(t)}var yl=new Map,Tx=400;function sr(n){let e=new at,t=JSON.stringify(n),i=yl.get(t),s=new Qe,r=n.skin||"#e0ac7e";s.add(ke.capsule(.2,.4),n.shirt,[0,.98,0],[0,0,0],[1.05,1,.8]),s.cyl(.07,.07,.1,r,[0,1.34,0]),s.sphere(.2,r,[0,1.6,0],[1,1.05,.98]),s.sphere(.027,"#2a1d14",[-.075,1.62,.178]),s.sphere(.027,"#2a1d14",[.075,1.62,.178]),s.boxC([.09,.016,.02],"#8a3b2a",[0,1.525,.186]),s.sphere(.04,r,[-.2,1.6,0]),s.sphere(.04,r,[.2,1.6,0]);let o=n.hair||"#3b2a1e",a=n.hairStyle||"short";if(a!=="bald"&&(s.dome(.215,o,[0,1.63,-.015],[1,1.02,1.02],[-.25,0,0]),a==="bun"&&s.sphere(.1,o,[0,1.86,-.08]),a==="long"&&s.add(ke.capsule(.15,.22),o,[0,1.45,-.12],[0,0,0],[1.25,1,.6])),n.hat==="cap"){let p=n.hatColor||"#d8402f";s.dome(.21,p,[0,1.7,0],[1,.75,1]),s.boxC([.26,.03,.2],p,[0,1.71,.2],[.15,0,0])}else n.hat==="toque"&&(s.cyl(.17,.165,.2,"#ffffff",[0,1.74,0]),s.sphere(.21,"#ffffff",[0,2,0],[1,.72,1]));n.apron&&(s.boxC([.32,.5,.04],n.apron,[0,.9,.165]),s.boxC([.34,.04,.05],n.apron,[0,1.12,.165])),s.add(ke.capsule(.17,.08),n.pants||"#3d4a66",[0,.66,0],[0,0,Math.PI/2],[1,1,.85]);let c=i?new Ce(i,rn):s.mesh(rn);!i&&yl.size<Tx&&yl.set(t,c.geometry),c.castShadow=!0,e.add(c);let l=rn,h=(p,x,_)=>{let b=new at;b.position.set(x,_,0);let R=new Ce(p,l);return R.castShadow=!0,b.add(R),e.add(b),b},u=wx(n.pants||"#3d4a66",n.shoe||"#2b2b33"),d=Ex(n.shirt,r),f=h(u,-.105,.62),g=h(u,.105,.62),y=h(d,-.275,1.27),m=h(d,.275,1.27);return y.rotation.z=-.12,m.rotation.z=.12,e.add(Ld(.36)),n.scale&&e.scale.setScalar(n.scale),{group:e,body:c,armL:y,armR:m,legL:f,legR:g}}function _l(n,e,t){let i=Math.sin(e)*.65*t;n.legL.rotation.x=i,n.legR.rotation.x=-i,n.armL.rotation.x=-i*.8,n.armR.rotation.x=i*.8}var Ax=["#f2c9a0","#e0ac7e","#c68a5c","#8d5a3b","#f7d9bd","#a8704a"],Rx=["#2b1d14","#5a3a22","#8a5a2b","#c9a15a","#1c1c22","#7a2f1e","#d9d9d9"],zd=["#4ea8de","#ef476f","#ffd166","#06d6a0","#9b5de5","#f78c6b","#3d9a8b","#f4f1de","#e76f51","#577590"],Cx=["#3d4a66","#2f3e46","#6b4f3a","#4a4e69","#1f2a44","#7a8aa0"],Px=["short","short","bun","long","short","bald","long"];function kd(n){let e=s=>Math.abs(Math.sin(n*12.9898+s*78.233)*43758.5453)%1,t=(s,r)=>s[Math.floor(e(r)*s.length)],i=e(6);return{skin:t(Ax,1),hair:t(Rx,2),shirt:t(zd,3),pants:t(Cx,4),hairStyle:t(Px,5),hat:i>.84?"cap":"none",hatColor:t(zd,7),scale:.94+e(8)*.12}}var ie=.2,it=1.5,yn="#c8392b",Tn="#fff3dc",Bd="#2f6b5a",bl="#a8703f",ci="#6b4428",Zo="#b9aea0",_t="#2f3238",rr="#f3ede0";function Xd(n,e,t){let i=e.width,s=e.id==="cart",r=s?.42:e.id==="stand"?.3:.15,o=s?ie+i/2+.45:ie+i/2-1.05,a={dough:[ie-i*.29,1.15,.7],load:[ie+i*.19,1.15,.7],oven:[o,.86,.72],pass:[ie,1.25,1.55]},c=n.camera;return{...n,tier:e,tierIdx:t,cx:ie,W:i,D:e.depth,back:it-e.depth,floorY:r,ovenX:o,stations:a,window:[ie-.4,0,2.9],register:[ie+.8,1.2,1.55],camera:{...c,zoom:e.cameraZoom,target:[c.target[0],c.target[1]+t*.6,c.target[2]]}}}function qd(n,e,t={}){let i=new at;i.name="stand:"+n.tier.id;let s={g:i,env:e,L:n,S:new Qe,F:new Qe,M:new Qe,warm:new Qe,win:new Qe,cw:n.W-.6};Lx[n.tier.id](s),Ix(s),Dx(s),Ux(s),Fx(s,t.decor||0),Ox(s,t.empire||{}),i.add(s.S.mesh(rn)),s.F.empty||i.add(s.F.mesh(Fi)),s.M.empty||i.add(s.M.mesh(pl)),s.warm.empty||i.add(s.warm.mesh(Hn(e,"#ffffff","#ffc978",2.2,{vertexColors:!0}),{cast:!1,receive:!1})),s.win.empty||i.add(s.win.mesh(Hn(e,"#ffffff","#ffb45e",.55,{vertexColors:!0,roughness:.3}),{cast:!1}));let r=Yo(e,5.5,"#ffb469",.45);return r.position.set(ie,.03,3.4),i.add(r),zx(s),i}function xl(n,e,t,i,s){let r=Math.round((t-e)/.36),o=(t-e)/r;n.S.box([t-e,.1,.04],yn,[(e+t)/2,i+.06,s]);for(let a=0;a<r;a++)n.S.cylC(o/2,.035,a%2?Tn:"#d8402f",[e+o*(a+.5),i+.06,s],[Math.PI/2,0,0],12)}function Hd(n,e,t,i){let s=new Ce(ke.box(),wn("stripes",e[0]/.8,1));s.scale.set(e[0],e[1],e[2]),s.position.set(t[0],t[1],t[2]),s.rotation.x=i,s.castShadow=!0,s.receiveShadow=!0,n.g.add(s);let r=e[2]/2;return{y:t[1]-Math.sin(i)*r,z:t[2]+Math.cos(i)*r}}function or(n,e,t,i,s){let{S:r}=n;r.box([t-e,.05,.3],ci,[(e+t)/2,i,s]);let o=["#c0392b","#e9c46a","#2e8b57","#f4f1de","#e67e22","#7a4a2b","#b8d8a8"],a=0;for(let c=e+.25;c<t-.15;c+=.34){let l=.2+a*7%3*.06;a%4===3?(r.cyl(.05,.07,l+.12,"#3b6b4a",[c,i+.05,s]),r.cyl(.025,.03,.1,"#3b6b4a",[c,i+.17+l,s])):(r.cyl(.09,.09,l,o[a%o.length],[c,i+.05,s]),r.cyl(.095,.095,.04,"#d9cbb2",[c,i+.05+l,s])),a++}}function Vd(n,e,t,i,s){let{S:r,M:o}=n;o.torus(s,.06,_t,[e,t,i]),r.cylC(.11,.16,ci,[e,t,i],[Math.PI/2,0,0]);for(let a=0;a<4;a++)r.boxC([s*1.9,.07,.06],bl,[e,t,i],[0,0,a*Math.PI/4])}var Lx={cart(n){let{S:e,M:t,L:i,g:s}=n,{W:r}=i,o=ie-r/2,a=ie+r/2,c=-1.1;s.add(En([r,.22,2.6],"wood",[ie,.2,.2],[r/1.3,2])),e.box([r-.5,.12,.16],ci,[ie,.1,-.5]);for(let h of[ie-1.35,ie+1.35])Vd(n,h,.56,2.13,.52),Vd(n,h,.56,c-.06,.52);t.cylC(.035,1.5,_t,[o-.42,1.25,.2],[Math.PI/2,0,0]);for(let h of[-.5,.9])t.cylC(.03,.5,_t,[o-.2,1.2,h],[0,0,Math.PI/2.4]);e.box([r,2.55,.12],yn,[ie,i.floorY,c]),e.box([r+.06,.16,.16],Tn,[ie,i.floorY+2.5,c]),e.box([r+.04,.5,.14],Tn,[ie,i.floorY,c+.01]),or(n,o+.3,a-.3,2.05,c+.2);for(let h of[o+.05,a-.05])e.box([.1,.8,2.45],yn,[h,i.floorY,.2]);for(let h of[o+.08,a-.08])for(let u of[it-.08,c+.1])t.cyl(.045,.045,3.15,_t,[h,i.floorY,u]);let l=Hd(n,[r+.7,.07,3.1],[ie,3.5,.3],.1);xl(n,o-.35,a+.35,l.y-.2,l.z),Object.assign(n,{eave:{y:l.y-.2,z:l.z,x0:o-.3,x1:a+.3},neonPos:[ie,4,-.7],flagBase:{y:3.6,z:c,n:4},statuePos:[o+.45,4.05,-.7],chimneyTop:3.2,counterBase:.2});for(let h of[ie-.9,ie+.9])t.cyl(.035,.035,.5,_t,[h,3.62,-.7])},stand(n){let{S:e,L:t,g:i}=n,{W:s,D:r,back:o}=t,a=ie-s/2,c=ie+s/2,l=(it+o)/2;i.add(En([s+.5,.3,r+.7],"wood",[ie,0,l+.1],[s/1.3,3])),e.box([s+.6,.08,r+.8],ci,[ie,0,l+.1]),e.box([s,3.5,.14],yn,[ie,t.floorY,o+.07]),e.box([s+.02,1,.16],Tn,[ie,t.floorY,o+.08]),e.box([s+.04,.08,.2],Bd,[ie,t.floorY+1,o+.09]),or(n,a+.4,c-1.9,1.95,o+.3),or(n,a+.4,c-1.9,2.55,o+.3);for(let f of[a+.07,c-.07]){e.box([.14,1.15,r-.1],yn,[f,t.floorY,l]),e.box([.2,.08,r],Tn,[f,t.floorY+1.15,l]);for(let g of[it-.1,o+.1])e.box([.18,3.6,.18],ci,[f,t.floorY,g])}let h=new Ce(ke.box(),wn("rooftiles",(s+1)/1.2,3));h.scale.set(s+1,.16,r+.9),h.position.set(ie,4.05,l+.15),h.rotation.x=.07,h.castShadow=!0,h.receiveShadow=!0,i.add(h);let u=l+.15+(r+.9)/2,d=4.05-(r+.9)/2*.07;e.box([s+1,.2,.08],Tn,[ie,d-.24,u-.02]),xl(n,a-.5,c+.5,d-.44,u),e.box([3.7,.95,.14],yn,[ie,4.2,it+.1]),e.box([3.45,.7,.16],Tn,[ie,4.32,it+.12]);for(let f of[ie-1.6,ie+1.6])e.box([.12,.5,.12],ci,[f,3.85,it+.1]);n.env.signs.push({id:"name",pos:[ie,4.68,it+.25],kind:"shopname"}),n.env.signs.push({id:"franchise",pos:[c-.12,2.55,it+.05],size:[.64,.44],kind:"franchise"}),e.box([.7,.5,.05],"#d4af37",[c-.12,2.3,it+.02]),Object.assign(n,{eave:{y:d-.44,z:u,x0:a-.45,x1:c+.45},neonPos:[ie,5.65,it+.1],flagBase:{y:4.15,z:o+.2,n:5},statuePos:[a+.6,4.75,l],chimneyTop:5,counterBase:0})},shop(n){let{S:e,F:t,M:i,L:s,g:r,warm:o,win:a}=n,{W:c,D:l,back:h}=s,u=ie-c/2,d=ie+c/2,f=(it+h)/2,g="#f1d9a8",y=3.6,m=6.1;e.box([c+.8,.15,l+1.3],Zo,[ie,0,f+.35]);let p=new Ce(new Sn(c-.4,l-.3),wn("checker",c/1.6,l/1.6));p.rotation.x=-Math.PI/2,p.position.set(ie,.16,f),p.receiveShadow=!0,r.add(p),r.add(En([c,y-.15,.2],"tiles",[ie,.15,h+.1],[c/1.2,3]));for(let b of[u+.12,d-.12])r.add(En([.24,y-.15,l],"plaster",[b,.15,f],[4,3],{color:g}));for(let b of[u+.27,d-.27])e.box([.54,y-.15,.54],"#e6c990",[b,.15,it-.05]),e.box([.62,.3,.62],Zo,[b,.15,it-.05]),i.box([.06,.3,.16],_t,[b,2.35,it+.26]),o.box([.2,.28,.2],"#fff0c8",[b,2.3,it+.42]),i.cone(.2,.14,_t,[b,2.58,it+.42],[0,0,0],4);e.box([c,.5,.44],"#e6c990",[ie,y-.5,it-.08]),or(n,u+.5,d-2.2,1.95,h+.36),or(n,u+.5,d-2.2,2.6,h+.36);for(let b=0;b<4;b++)i.cylC(.19,.03,"#8a8d93",[u+1.2+b*.62,3.05,h+.26],[Math.PI/2,0,0],14),i.box([.04,.26,.03],"#5a5d63",[u+1.2+b*.62,3.18,h+.26]);r.add(En([c+.1,m-y,l+.1],"plaster",[ie,y,f],[5,2],{color:"#f6e3b4"})),e.box([c+.4,.16,l+.4],rr,[ie,y-.02,f]);let x=it+.06;for(let b of[-2.45,0,2.45]){let R=ie+b;e.box([1.36,1.66,.08],rr,[R,4.2,x]),a.box([1.14,1.46,.06],"#bcd3e0",[R,4.3,x+.04]),e.box([.06,1.46,.04],rr,[R,4.3,x+.08]),e.box([1.14,.06,.04],rr,[R,5,x+.08]);for(let E of[-1,1])e.box([.3,1.5,.06],Bd,[R+E*.76,4.28,x+.04]);e.box([1.5,.2,.3],"#8d5a3b",[R,3.98,x+.2]),["#ef476f","#ffd166","#ffffff","#f78c6b","#ef476f"].forEach((E,A)=>{t.ico(.12,E,[R-.52+A*.26,4.28+A%2*.06,x+.24])}),t.ico(.2,"#4f8f47",[R,4.2,x+.22],[3.2,.6,.8])}e.box([c+.7,.26,l+.7],rr,[ie,m,f]),e.box([c+.3,.5,l+.3],"#e6c990",[ie,m+.26,f]),e.box([c-.2,.1,l-.2],"#8d7b68",[ie,m+.3,f]);for(let b of[ie-2.1,ie+2.1])i.cyl(.05,.05,1,_t,[b,m+.7,it-.5]);e.box([4.9,1.05,.16],yn,[ie,m+.8,it-.5]),e.box([4.6,.8,.18],Tn,[ie,m+.93,it-.49]),n.env.signs.push({id:"name",pos:[ie,m+1.33,it-.35],kind:"shopname"}),e.box([.64,.48,.05],"#d4af37",[d-.3,1.5,it+.24]),n.env.signs.push({id:"franchise",pos:[d-.3,1.74,it+.27],size:[.58,.42],kind:"franchise"});let _=Hd(n,[c+.5,.08,1.5],[ie,y+.12,it+.72],.2);xl(n,u-.25,d+.25,_.y-.2,_.z),Object.assign(n,{eave:{y:_.y-.2,z:_.z,x0:u-.2,x1:d+.2},neonPos:[ie,m+2.3,it-.5],flagBase:{y:m+.76,z:h+.3,n:6},statuePos:[u+.9,m+1.25,f+.6],chimneyTop:m+1.5,counterBase:0})}};function Ix(n){let{S:e,M:t,F:i,L:s,g:r,env:o,cw:a,warm:c}=n,{stations:l,floorY:h}=s,u=n.counterBase;e.box([a,1.12-u,.75],"#f6ead2",[ie,u,1.7]),e.box([a+.04,.14,.78],ci,[ie,u,1.7]),e.box([a+.02,.1,.02],yn,[ie,.93,2.08]);let d=Math.max(3,Math.round(a/.95));for(let G=0;G<d;G++){let P=ie-a/2+a/d*(G+.5);e.box([a/d-.18,.5,.03],"#ead9b8",[P,Math.max(u+.2,.34),2.075])}r.add(En([a+.16,.08,1],"wood",[ie,1.12,1.6],[a/1.3,1]));let[f,,g]=l.dough;r.add(En([1.2,.07,.98],"wood",[f,1.03,g],[1,1]));for(let G of[-.52,.52])for(let P of[-.4,.4])e.box([.07,1.03-h,.07],ci,[f+G,h,g+P]);e.box([.3,.34,.2],"#efe6d2",[f-.4,1.1,g-.36]),e.box([.3,.05,.2],"#d9cbb2",[f-.4,1.4,g-.36],[0,0,.2]),e.cylC(.045,.5,bl,[f+.05,1.15,g-.38],[0,0,Math.PI/2]),t.cyl(.13,.09,.1,"#c9ccd2",[f+.42,1.1,g-.36]),e.cyl(.115,.115,.02,"#c0392b",[f+.42,1.18,g-.36]),e.sphere(.09,"#f1dfb8",[f-.08,1.17,g-.36],[1,.7,1]);let[y,,m]=l.load;t.box([1,.05,.9],"#b9bec6",[y,1.05,m]),t.box([1,.04,.9],"#b9bec6",[y,.6,m]);for(let G of[-.46,.46])for(let P of[-.41,.41])t.box([.05,1.05-h,.05],"#8a8d93",[y+G,h,m+P]);e.cylC(.025,1.3,bl,[y+.42,1.55,m-.5],[.25,0,.12]),e.cyl(.27,.27,.025,"#caa26a",[y+.5,2.15,m-.66],[.25+Math.PI/2,0,.12],16);let p=s.ovenX,x=-.1;e.box([1.84,.56,1.5],Zo,[p,0,x]),r.add(En([1.74,1,1.42],"brick",[p,.56,x],[1.6,1.2]));let _=new Ce(ke.dome(18,10),wn("brick",3,1.4));_.scale.set(.87,.72,.71),_.position.set(p,1.56,x),_.castShadow=!0,r.add(_),e.box([1,.6,.06],"#140d0a",[p,.82,x+.7]),e.box([1.2,.14,.14],"#cfc3b2",[p,1.42,x+.72]);for(let G of[-1,1])e.box([.14,.62,.14],"#cfc3b2",[p+G*.57,.8,x+.72]);e.box([1.4,.07,.42],"#cfc3b2",[p,.76,x+.9]);let b=Ss("#3a1a0c",{emissive:new me("#ff7a1f"),emissiveIntensity:.5});o.ovenMouthMat=b;let R=new Ce(ke.box(),b);R.scale.set(.9,.5,.03),R.position.set(p,1.1,x+.74),r.add(R);for(let G=0;G<3;G++)e.cylC(.07,.5,"#7b5236",[p-.3+G*.16,.64,x+.95],[Math.PI/2,0,0],8);let E=p+.4,A=x-.35;e.cyl(.17,.21,n.chimneyTop-1.9,"#6e4a3a",[E,1.9,A]),e.cyl(.24,.24,.1,"#4e342a",[E,n.chimneyTop,A]),o.smokeAt=[E,n.chimneyTop+.2,A];let[N,,M]=s.register;t.box([.52,.2,.44],"#4a5563",[N,1.2,M]),t.boxC([.44,.26,.05],"#2f3640",[N,1.52,M-.1],[-.35,0,0]),e.boxC([.36,.18,.02],"#9fe3c0",[N,1.52,M-.07],[-.35,0,0]),e.box([.4,.03,.2],"#d9dde3",[N,1.4,M+.08]),t.cyl(.11,.1,.22,"#f6e7b0",[N+.5,1.2,1.95]),e.cyl(.08,.08,.06,"#e9c46a",[N+.5,1.2,1.95]),e.box([.2,.16,.14],"#ffffff",[ie-.55,1.2,1.95]);let S=ie-a/2+.55;[0,1,2].forEach(G=>e.box([.72,.1,.72],"#f2d7a7",[S,1.2+G*.1,1.62],[0,G*.1,0])),e.box([.5,.012,.5],yn,[S,1.5,1.62],[0,.2,0]);for(let G of[ie-a/2+.1,ie+a/2-.1])e.cyl(.17,.13,.26,"#b5562c",[G,1.2,2]),i.ico(.24,"#4f9d4a",[G,1.62,2],[1,.95,1]),i.ico(.16,"#62b35a",[G+.1,1.78,2.02]);let D=n.eave,z=Math.round((D.x1-D.x0)/.48);for(let G=0;G<=z;G++){let P=G/z;c.sphere(.06,"#fff0c8",[D.x0+(D.x1-D.x0)*P,D.y-.1-Math.sin(P*Math.PI*z)*0,D.z-.06],[1,1.2,1],[8,6])}}function Dx(n){let{S:e,L:t,env:i}=n,s=1.5,r=ie-t.W/2-.75,o=3.5,a=1*s,c=1*s,l=a+c/2;for(let h of[-.5,.5])e.box([.08*s,a+.2,.08*s],_t,[r+h*s,0,o]);e.box([1.36*s,c,.08],"#2b2d42",[r,a,o]),e.box([1.2*s,.84*s,.03],"#f7f1e1",[r,l-.42*s,o+.045]),i.signs.push({id:"menu",pos:[r,l,o+.06],size:[1.6,1.16],kind:"menu"})}function Ux(n){let{g:e,env:t}=n,[i,s,r]=n.neonPos,o=new at,a=new at,c=new Qe;c.boxC([2.5,.78,.08],"#1d1a26",[i,s,r]),o.add(c.mesh(rn));let l=new Qe;l.boxC([2.3,.05,.05],"#ff7ab5",[i,s+.31,r+.06]),l.boxC([2.3,.05,.05],"#ff7ab5",[i,s-.31,r+.06]),l.boxC([.05,.62,.05],"#ff7ab5",[i-1.15,s,r+.06]),l.boxC([.05,.62,.05],"#ff7ab5",[i+1.15,s,r+.06]),l.torus(.2,.035,"#ff7ab5",[i-.85,s,r+.07]),o.add(l.mesh(Hn(t,"#ff7ab5","#ff3d94",3.2),{cast:!1}));let h=new Qe;h.torus(.62,.04,"#7ff6ff",[i+1.75,s,r+.05]),h.torus(.62,.04,"#7ff6ff",[i-1.75,s,r+.05]);for(let u of[-1,1])h.boxC([.5,.06,.05],"#7ff6ff",[i+u*1.75,s,r+.06],[0,0,.6]),h.boxC([.5,.06,.05],"#7ff6ff",[i+u*1.75,s,r+.06],[0,0,-.6]),h.boxC([.06,.5,.05],"#7ff6ff",[i+u*1.75,s,r+.06]);a.add(h.mesh(Hn(t,"#7ff6ff","#2fe6ff",3.2),{cast:!1})),o.visible=!1,a.visible=!1,e.add(o,a),t.neon={l1:o,l2:a},t.signs.push({id:"neon",pos:[i+.2,s,r+.1],kind:"neon"})}function Gd(n,e,t){let{S:i,M:s,F:r}=n;s.cyl(.24,.26,.04,_t,[e,0,t]),s.cyl(.035,.035,2.5,_t,[e,0,t]),i.cyl(.46,.46,.05,"#f6ead2",[e,.74,t],[0,0,0],18),r.add(ke.cone(8),yn,[e,2.42,t],[0,0,0],[.92,.4,.92]),r.add(ke.cone(8),Tn,[e,2.36,t],[0,Math.PI/8,0],[.95,.28,.95]),i.cyl(.16,.16,.02,"#e9b45a",[e-.1,.79,t+.05],[0,0,0],12),i.cyl(.04,.035,.1,"#ffffff",[e+.22,.79,t-.1]);for(let o of[-1,1]){let a=e+o*.72;i.cyl(.2,.2,.05,yn,[a,.46,t+.1],[0,0,0],12);for(let[c,l]of[[-.14,-.14],[.14,-.14],[-.14,.14],[.14,.14]])s.cyl(.02,.02,.46,_t,[a+c,0,t+.1+l]);s.box([.04,.42,.34],_t,[a+o*.17,.5,t+.1])}}function Wd(n,e,t){let{S:i,F:s}=n;i.cyl(.3,.22,.42,"#b5562c",[e,0,t]),i.cyl(.32,.32,.05,"#9c4826",[e,.42,t]),i.cyl(.05,.07,.95,"#6b5a45",[e,.42,t]),s.ico(.42,"#7d9460",[e,1.6,t]),s.ico(.3,"#8fa873",[e+.25,1.4,t+.1],[1,1,1],[1,1,0]),s.ico(.28,"#6f8754",[e-.24,1.42,t-.08],[1,1,1],[2,0,1])}var vl={flowers(n){let{S:e,F:t,M:i,cw:s,eave:r}=n,o=Math.max(2,Math.round(s/1.25)),a=["#ef476f","#ffd166","#ffffff","#f78c6b","#c77dff"];for(let c=0;c<o;c++){let l=ie-s/2+s/o*(c+.5);e.box([.92,.2,.24],"#8d5a3b",[l,.56,2.2]),t.ico(.16,"#4f8f47",[l,.8,2.2],[2.7,.7,.8]);for(let h=0;h<5;h++)t.ico(.1,a[(c+h)%a.length],[l-.34+h*.17,.9+h%2*.06,2.24])}for(let c of[r.x0+.35,r.x1-.35]){i.cylC(.012,.5,_t,[c,r.y-.35,r.z-.25]),e.dome(.2,"#7b5236",[c,r.y-.62,r.z-.25],[1,1,1],[Math.PI,0,0]),t.ico(.24,"#4f8f47",[c,r.y-.52,r.z-.25],[1,.7,1]);for(let l=0;l<5;l++){let h=l/5*Math.PI*2;t.ico(.09,a[l%a.length],[c+Math.cos(h)*.17,r.y-.46,r.z-.25+Math.sin(h)*.17])}}},festoon(n){let{M:e,warm:t,L:i,eave:s}=n,r=ie-i.W/2-.5,o=ie+i.W/2+.5,a=2.7,c=Math.max(4.1,s.y+.9);for(let h of[r,o])e.cyl(.05,.07,c,_t,[h,0,a]),e.sphere(.09,"#d4af37",[h,c+.05,a]);let l=16;for(let h=1;h<l;h++){let u=h/l,d=c-.02-Math.sin(u*Math.PI)*.55;t.sphere(.085,"#fff0c8",[r+(o-r)*u,d,a],[1,1.25,1],[8,6]),e.cylC(.01,(o-r)/l,_t,[r+(o-r)*(u-.5/l),d+.1,a],[0,0,Math.PI/2],4)}},bunting(n){let{F:e,eave:t}=n,i=["#ef476f","#ffd166","#06d6a0","#4ea8de","#9b5de5"],s=Math.round((t.x1-t.x0)/.34);for(let r=0;r<s;r++){let o=t.x0+(t.x1-t.x0)/s*(r+.5);e.add(ke.cone(3),i[r%i.length],[o,t.y-.36,t.z+.04],[Math.PI,0,0],[.15,.3,.02])}},table(n){Gd(n,ie+3,4.2)},lanterns(n){let{M:e,warm:t,cw:i}=n;for(let s of[ie-i/2-.32,ie+i/2+.32]){e.box([.3,.06,.3],_t,[s,0,2.5]);for(let[r,o]of[[-.12,-.12],[.12,-.12],[-.12,.12],[.12,.12]])e.box([.03,.56,.03],_t,[s+r,.06,2.5+o]);t.box([.2,.46,.2],"#ffe9b0",[s,.1,2.5]),e.cone(.24,.16,_t,[s,.62,2.5],[0,Math.PI/4,0],4),e.torus(.07,.012,_t,[s,.84,2.5])}},carpet(n){let{S:e,M:t,L:i}=n,s=i.queueStart[0]+i.queueStep[0]*(i.queueRowLength-1)/2,r=3.3,o=i.queueStart[2]+i.queueStep[2]*3.3,a=Math.abs(i.queueStep[0])*i.queueRowLength+.5;e.box([a,.012,o-r],"#a82a2a",[s,.014,(r+o)/2]);for(let c of[-1,1])e.box([.1,.014,o-r],"#d4af37",[s+c*(a/2-.12),.016,(r+o)/2]);for(let c of[-1,1]){let l=s+c*(a/2+.18),h=[r+.6,(r+o)/2+.2,o-.2];h.forEach((u,d)=>{t.cyl(.16,.18,.04,"#d4af37",[l,0,u]),t.cyl(.03,.03,.95,"#d4af37",[l,0,u]),t.sphere(.07,"#d4af37",[l,1,u]),d>0&&n.S.cylC(.03,u-h[d-1],"#8a1f2b",[l,.82,(u+h[d-1])/2],[Math.PI/2,0,0],6)})}},secondTable(n){let{L:e}=n;Gd(n,ie+3.5,6.3),Wd(n,ie+e.W/2+.75,2),Wd(n,ie-e.W/2-.75,2.2)},balloons(n){let{g:e,env:t,cw:i}=n,s=new Qe,r=["#ef476f","#ffd166","#06d6a0","#4ea8de","#9b5de5","#f78c6b"];[[0,2.2,0],[.32,2,.1],[-.3,1.95,-.05],[.12,2.6,-.1],[-.16,2.48,.14],[.36,2.45,-.12]].forEach(([c,l,h],u)=>{s.sphere(.24,r[u],[c,l,h],[1,1.2,1]),s.cone(.05,.07,r[u],[c,l-.33,h]),s.cylC(.006,l-.3,"#eeeeee",[c/2,(l-.3)/2,h/2],[-(h/l)*.9,0,c/l*.9],4)});let a=s.mesh(pl);a.position.set(ie+i/2+.05,1.2,2.1),e.add(a),t.updaters.push((c,l)=>{a.rotation.z=Math.sin(l*1.3)*.07,a.rotation.x=Math.sin(l*.9+1)*.05})},flags(n){let{M:e,g:t,env:i,L:s}=n,r=n.flagBase,o=[];for(let a=0;a<r.n;a++){let c=ie-s.W/2+.4+(s.W-.8)/(r.n-1)*a;e.cyl(.03,.035,1.5,"#d9dde3",[c,r.y,r.z]),e.sphere(.055,"#d4af37",[c,r.y+1.53,r.z]);let l=new Qe;["#2e8b57","#ffffff","#d8402f"].forEach((u,d)=>l.boxC([.22,.42,.02],u,[.13+d*.22,0,0]));let h=l.mesh(Fi);h.position.set(c+.03,r.y+1.26,r.z),t.add(h),o.push(h)}i.updaters.push((a,c)=>{o.forEach((l,h)=>{l.rotation.y=Math.sin(c*2.2+h*.9)*.35})})},statue(n){let{M:e,g:t,env:i}=n,[s,r,o]=n.statuePos;e.cyl(.06,.09,.9,"#d9dde3",[s,r-.9,o]),e.cyl(.26,.3,.1,"#d4af37",[s,r-.05,o]);let a=new Qe,c="#f2c230";a.cylC(.62,.1,c,[0,.72,0],[Math.PI/2,0,0],24),a.torus(.62,.075,"#e0a81e",[0,.72,0]);for(let h=0;h<6;h++){let u=h/6*Math.PI*2;for(let d of[-1,1])a.cylC(.11,.05,"#e0a81e",[Math.cos(u)*.34,.72+Math.sin(u)*.34,d*.06],[Math.PI/2,0,0],10)}for(let h=0;h<8;h++){let u=h/8*Math.PI*2;a.boxC([.06,.26,.04],c,[Math.cos(u)*.86,.72+Math.sin(u)*.86,0],[0,0,u-Math.PI/2])}let l=a.mesh(new ys({vertexColors:!0,shininess:90,specular:new me("#fff2b0"),emissive:new me("#6b4a00"),emissiveIntensity:.6}));l.position.set(s,r,o),t.add(l),i.updaters.push(h=>{l.rotation.y+=h*.9})}},Nx=-.1;function Ox(n,e){let{S:t,M:i,F:s,warm:r,L:o,g:a}=n,{marketing:c=0,pizzaSchool:l=0,megaOven:h=0}=e,u=["#ef476f","#ffd166","#06d6a0","#4ea8de","#9b5de5"],d=ie+o.W/2+.25,f=Math.min(c,5);for(let g=0;g<f;g++){let y=d+g*.42-(f-1)*.21+.6,m=(n.eave?n.eave.y:3.2)-.7;i.cylC(.012,.9,_t,[y,m+.45,n.eave?n.eave.z:.4]),t.box([.36,1.2,.03],u[g%u.length],[y,m-.6,(n.eave?n.eave.z:.4)+.02]),t.box([.3,.06,.04],"#ffffff",[y,m-.36,(n.eave?n.eave.z:.4)+.04])}for(let g=0;g<Math.min(l,5);g++){let y=ie-.8+g*.42,m=o.back+.16;t.box([.4,.5,.05],"#d4af37",[y,1.45+.25,m]),t.box([.32,.4,.04],"#fff8e7",[y,1.45+.25,m+.02]),t.box([.2,.04,.04],"#b5372a",[y,1.45+.34,m+.03]),t.box([.2,.03,.04],"#6b4428",[y,1.45+.2,m+.03])}for(let g=0;g<Math.min(h,4);g++){let y=o.ovenX+1.35+g*1.35,m=Nx;t.box([1.1,.5,1],Zo,[y,0,m]),a.add(En([1.05,.9,.95],"brick",[y,.5,m],[1.2,1]));let p=new Ce(ke.dome(14,8),wn("brick",2,1));p.scale.set(.58,.5,.52),p.position.set(y,1.4,m),p.castShadow=!0,a.add(p),t.box([.72,.44,.05],"#140d0a",[y,.66,m+.52]),r.box([.62,.3,.03],"#ffb35a",[y,.72,m+.55]),i.cylC(.04,.5,_t,[y+.36,1.9,m-.3])}}function Fx(n,e){(n.L.decorSteps||Object.keys(vl)).slice(0,e).forEach(i=>{vl[i]&&vl[i](n)})}var Ml=7;function zx(n){let{g:e,env:t,L:i}=n,s=i.floorY,r=i.W,o=[{shirt:"#ef476f",hat:"cap",hatColor:"#ffd166",hair:"#3b2a1e",skin:"#c68a5c",hairStyle:"short"},{shirt:"#4ea8de",hat:"cap",hatColor:"#d8402f",hair:"#5a3a22",skin:"#f2c9a0",hairStyle:"long"},{shirt:"#2f6b5a",hat:"none",hair:"#1c1c22",skin:"#e0ac7e",hairStyle:"bun"}],a=[{skin:"#8d5a3b",hair:"#1c1c22"},{skin:"#f2c9a0",hair:"#7a2f1e"},{skin:"#e0ac7e",hair:"#2b1d14"}],c=f=>ie-r*.36+f*(r*.72)/(Ml-1),l=f=>ie-r*.42+f*(r*.5)/(Ml-1),h=(f,g)=>(f.group.position.set(g[0],g[1],g[2]),f.group.rotation.y=g[3],f.group.visible=!1,f.baseY=g[1],e.add(f.group),f),u=[],d=[];for(let f=0;f<Ml;f++){let g=o[f%o.length];u.push(h(sr({...g,pants:"#2f3e46",apron:Tn}),[c(f),s,.42,0]));let y=a[f%a.length];d.push(h(sr({...y,shirt:"#fdfdfd",pants:"#3d4a66",hat:"toque",apron:"#e9e2d2",hairStyle:"short"}),[l(f),s,-.3,0]))}t.staff={cashiers:u,cooks:d}}function Yd(n,e,t,i){let s=n.staff;if(!s)return;let r=i?il(e,i):{cashier:0,cook:0},o=r.cashier,a=r.cook,c=e.customers.some(d=>d.state==="waiting"),l=e.pizzas.some(d=>d.stage==="ready"),h=e.pizzas.some(d=>d.stage==="dough"||d.stage==="topping"),u=e.pizzas.some(d=>d.stage==="load"||d.stage==="baking");s.cashiers.forEach((d,f)=>{if(d.group.visible=f<o,!d.group.visible)return;let g=f===0?c:f===1?l||c:!0,y=t*8+f*1.7;d.armR.rotation.x=g?-1+Math.sin(y)*.45:-.1+Math.sin(t*1.6+f)*.04,d.armL.rotation.x=g?-.5+Math.cos(y)*.25:-.1,d.group.position.y=d.baseY+(g?Math.abs(Math.sin(y*.5))*.02:Math.sin(t*1.4+f)*.006)}),s.cooks.forEach((d,f)=>{if(d.group.visible=f<a,!d.group.visible)return;let g=f===1?u:h,y=t*9+f*2.1;d.armR.rotation.x=g?-.95+Math.sin(y)*.5:-.1,d.armL.rotation.x=g?-.95+Math.sin(y+Math.PI)*.5:-.1,d.group.position.y=d.baseY+Math.sin(t*1.5+f*2)*.006})}function Zd(n,e){n.neon&&(n.neon.l1.visible=e>=1,n.neon.l2.visible=e>=2)}function $d(n,e,t=0){let i=.85+Math.sin(t*11)*.1+Math.sin(t*23)*.05;n.ovenMouthMat&&(n.ovenMouthMat.emissiveIntensity=(e?3.2:.7)*i)}var Jd={pepperoni:"#b83227",mushroom:"#d8c7a8",olive:"#2f3d1c",basil:"#2e9a57",pepper:"#f0902a"},kx=new me("#f3e2bd"),Bx=new me("#d2893a"),Hx=new me("#fff0b8"),Vx=new me("#ffc94d"),Gx=new Set(["dough","topping","load","ready"]),Wx=14,Xx=20,qx=new vt({vertexColors:!0,toneMapped:!1}),Sl=new vt({color:"#2b2d42",toneMapped:!1}),Yx=Pd("#c23b22",{roughness:.6});function Zx(n){return Dt("bubble|"+n,()=>{let e=new Qe,t=[Math.PI/2,0,0];e.cylC(.3,.02,"#2b2d42",[0,0,-.012],t,22),e.cylC(.27,.02,"#ffffff",[0,0,0],t,22),e.add(ke.cone(3),"#ffffff",[0,-.3,0],[Math.PI,0,0],[.1,.14,.01]),e.cylC(.19,.02,"#d9993f",[0,0,.012],t,20),e.cylC(.155,.02,"#ffd76a",[0,0,.02],t,20);let i=Jd[n]||"#ffffff";return[[0,.07],[-.07,-.04],[.07,-.04]].forEach(([s,r])=>e.cylC(.045,.02,i,[s,r,.03],t,10)),e.geometry()})}var ar={base:()=>Dt("pz-base",()=>{let n=new Qe;return n.cylC(.39,.035,"#ffffff",[0,0,0],[0,0,0],22),n.torus(.37,.058,"#e9dcc4",[0,.02,0],[Math.PI/2,0,0],22),n.geometry()}),ball:()=>Dt("pz-ball",()=>new Qe().sphere(.24,"#ffffff",[0,0,0],[1,1,1],[14,10]).geometry()),disc:()=>Dt("pz-disc",()=>new ii(1,1,1,22)),toppings:()=>Dt("pz-top",()=>{let n=new Qe;n.cylC(.058,.03,"#ffffff",[0,0,0],[0,0,0],8);for(let e=0;e<6;e++){let t=e/6*Math.PI*2+.3;n.cylC(.055,.03,"#ffffff",[Math.cos(t)*.2,0,Math.sin(t)*.2],[0,t,0],8)}return n.geometry()})},$o=class{constructor(e,t,i){this.env=e,this.camera=e.camera,this.loc=t,this.cfg=i,this.customers=new Map,this.pizzas=new Map,this.root=new at,e.scene.add(this.root),this.time=0}setLocation(e){this.loc=e}sync(e){let t=[...e.customers].sort((o,a)=>o.id-a.id).slice(0,Wx),i=new Set(t.map(o=>o.id));for(let[o,a]of this.customers)!i.has(o)&&!a.leaving&&this.removeView(this.customers,o);for(let o of t)this.customers.has(o.id)||this.customers.set(o.id,this.makeCustomer(o)),this.customers.get(o.id).data=o;let s=[...e.pizzas].sort((o,a)=>o.id-a.id).slice(0,Xx),r=new Set(s.map(o=>o.id));for(let[o,a]of this.pizzas)!r.has(o)&&!a.leaving&&this.removeView(this.pizzas,o);for(let o of s){this.pizzas.has(o.id)||this.pizzas.set(o.id,this.makePizza(o));let a=this.pizzas.get(o.id);a.stage!==o.stage&&(a.pop=1,a.stage=o.stage),a.data=o}}leaveCustomer(e,t){let i=this.customers.get(e);i&&(i.leaving=!0,i.leaveHappy=t,i.leaveT=0,i.overhead.visible=!1)}leavePizza(e){let t=this.pizzas.get(e);t&&(t.leaving=!0,t.leaveT=0)}removeView(e,t){let i=e.get(t);i&&(this.root.remove(i.group),e.delete(t),i.fill&&i.fill.material.dispose(),i.crustMat&&(i.crustMat.dispose(),i.cheeseMat.dispose(),i.topMat.dispose()))}makeCustomer(e){let t=new at,i=sr(kd(e.id));t.add(i.group);let s=new at;s.position.y=2.35;let r=new Ce(Zx(e.topping),qx),o=new at;o.position.y=.46;let a=new Ce(ke.box(),Sl);a.scale.set(.66,.11,.02);let c=new Ce(ke.box(),new vt({color:"#06d6a0",toneMapped:!1}));c.scale.set(.6,.065,.03),c.position.z=.012,o.add(a,c),s.add(r,o),t.add(s);let l=new Ce(ke.cyl(8),Sl);l.scale.set(.5,2.9,.5),l.position.y=1.45,l.visible=!1,l.userData={kind:"customer",id:e.id},t.add(l);let h=this.queueSpot(0),u=h[0]+5+e.id%3,d=h[2]+3.5;return t.position.set(u,0,d),this.env.styleNew(t),this.root.add(t),{group:t,person:i,overhead:s,bubble:r,fill:c,hit:l,x:u,z:d,heading:Math.PI,id:e.id,data:e,leaving:!1,leaveT:0,phase:e.id*1.7%6.28,turn:e.id*37%100/100-.5}}makePizza(e){let t=new at,i=Ss("#f3e2bd",{vertexColors:!0}),s=Ss("#fff0b8",{roughness:.55}),r=Ss("#ffffff",{vertexColors:!0,roughness:.6}),o=new Ce(ar.ball(),i);o.scale.set(1,.6,1),o.position.y=.1;let a=new Ce(ar.base(),i),c=new Ce(ar.disc(),Yx);c.scale.set(.325,.03,.325),c.position.y=.012;let l=new Ce(ar.disc(),s);l.scale.set(.3,.03,.3),l.position.y=.02;let h=new Ce(ar.toppings(),r);h.position.y=.036;let u=new Ce(ke.ring(),new vt({color:"#ffd60a",toneMapped:!1,side:dn}));u.rotation.x=-Math.PI/2,u.position.y=.5,u.visible=!1;for(let f of[o,a])f.castShadow=!0;t.add(o,a,c,l,h,u);let d=new Ce(ke.cyl(8),Sl);return d.scale.set(.5,.7,.5),d.position.y=.2,d.visible=!1,d.userData={kind:"pizza",id:e.id},t.add(d),this.env.styleNew(t),this.root.add(t),{group:t,crustMat:i,cheeseMat:s,topMat:r,ball:o,base:a,sauce:c,cheese:l,toppings:h,ring:u,hit:d,stage:e.stage,pop:0,leaving:!1,leaveT:0,id:e.id,data:e,x:0,y:0,z:0,s:1,inited:!1}}queueSpot(e){let t=this.loc.queueRowLength,i=e%t,s=Math.floor(e/t),r=this.loc.queueStart,o=this.loc.queueStep;return[r[0]+o[0]*i,0,r[2]+o[2]*s]}stationFor(e){let t=this.loc.stations;switch(e){case"dough":case"topping":return t.dough;case"load":return t.load;case"baking":return t.oven;default:return t.pass}}update(e,t){this.time+=e;let i=1-Math.exp(-e*6),s=t.customers.filter(l=>l.state==="waiting").sort((l,h)=>l.id-h.id),r=t.customers.filter(l=>l.state==="ordered").sort((l,h)=>l.id-h.id),o=new Map(s.map((l,h)=>[l.id,h])),a=new Map(r.map((l,h)=>[l.id,h]));for(let l of this.customers.values()){if(l.leaving){l.leaveT+=e;let R=l.leaveHappy?1:-1;l.x+=R*e*2.6,l.z+=e*1.1,l.group.position.set(l.x,0,l.z),l.person.group.rotation.y=R*1.1,_l(l.person,this.time*11+l.phase,1),l.leaveHappy||(l.person.group.rotation.z=Math.sin(l.leaveT*26)*.08),l.group.scale.setScalar(Math.max(.001,1-Math.max(0,l.leaveT-1.1)*3)),l.leaveT>1.4&&this.removeView(this.customers,l.id);continue}let h=o.get(l.id),u,d;if(h!==void 0)[u,,d]=this.queueSpot(h);else{let R=a.get(l.id)||0;u=this.loc.window[0]+.5+R%4*.72,d=this.loc.window[2]+Math.floor(R/4)*.7}let f=u-l.x,g=d-l.z,y=Math.hypot(f,g),m=y>.06,p=Math.min(y,e*2.4);m&&(l.x+=f/y*p,l.z+=g/y*p),l.group.position.set(l.x,0,l.z);let _=(m?Math.atan2(f,g):Math.PI+l.turn*1.1+Math.sin(this.time*.6+l.phase)*.15)-l.heading;for(;_>Math.PI;)_-=Math.PI*2;for(;_<-Math.PI;)_+=Math.PI*2;l.heading+=_*Math.min(1,e*8),l.person.group.rotation.y=l.heading,_l(l.person,this.time*10+l.phase,m?1:0),l.person.group.position.y=m?Math.abs(Math.sin(this.time*10+l.phase))*.035:Math.sin(this.time*1.5+l.phase)*.006,l.group.scale.setScalar(1);let b=Math.max(0,l.data.patience/l.data.maxPatience);l.fill.scale.x=Math.max(.001,.6*b),l.fill.position.x=-(.6-.6*b)/2,l.fill.material.color.set(b>.5?"#06d6a0":b>.25?"#ffd166":"#ef476f"),l.overhead.quaternion.copy(this.camera.quaternion),l.bubble.position.y=Math.sin(this.time*2.2+l.phase)*.03,l.bubble.rotation.z=b<.25?Math.sin(this.time*18)*.12:0}let c=new Map;for(let l of this.pizzas.values()){if(l.leaving)continue;let h=this.stationFor(l.data.stage);c.has(h)||c.set(h,[]),c.get(h).push(l)}for(let[l,h]of c){h.sort((f,g)=>f.id-g.id);let u=l===this.loc.stations.oven,d=u?.3:.56;h.forEach((f,g)=>{let y=(g-(h.length-1)/2)*d,m=l[0]+y,p=l[1]+(u?g%2*.012:0),x=l[2]+(u?0:g%2*.12-.06),_=u?.6:1;f.inited||(f.x=m,f.y=p,f.z=x,f.s=_,f.inited=!0),f.x+=(m-f.x)*i,f.y+=(p-f.y)*i,f.z+=(x-f.z)*i,f.s+=(_-f.s)*i,f.group.position.set(f.x,f.y,f.z)})}for(let l of this.pizzas.values()){if(l.leaving){l.leaveT+=e,l.group.scale.setScalar(Math.max(.001,l.s*(1-l.leaveT*3))),l.group.position.y+=e*1.5,l.leaveT>.34&&this.removeView(this.pizzas,l.id);continue}let h=l.data,u=h.q.dough>0,d=h.q.top>0;l.ball.visible=!u,l.base.visible=u,l.sauce.visible=u,l.cheese.visible=u,l.toppings.visible=d&&!!h.topping;let f=this.cfg.economy.styles[h.style],g=h.bakeTotal||(f?f.bakeSeconds:10),y=h.stage==="baking"?1-Math.max(0,h.bakeLeft)/g:h.stage==="ready"?1:0,m=Math.min(1,Math.max(0,y));l.crustMat.color.copy(kx).lerp(Bx,m),l.cheeseMat.color.copy(Hx).lerp(Vx,m),h.topping&&l.topMat.color.set(Jd[h.topping]||"#ffffff"),l.pop=Math.max(0,l.pop-e*3.5);let p=Math.sin(l.pop*Math.PI)*.25;l.group.scale.set(l.s*(1+p),l.s*(1-p*.6),l.s*(1+p));let x=Gx.has(h.stage);if(l.ring.visible=x,x){let _=1+Math.sin(this.time*6)*.08;l.ring.scale.setScalar(.95*_),l.ring.position.y=.3+Math.sin(this.time*3)*.03}}}pick(e){let t=[];for(let o of this.pizzas.values())o.leaving||t.push(o.hit);for(let o of this.customers.values())o.leaving||t.push(o.hit);let i=e.intersectObjects(t,!1),r=i.find(o=>o.object.userData.kind==="pizza")||i[0];return r?{kind:r.object.userData.kind,id:r.object.userData.id}:null}positionOf(e,t){let s=(e==="customer"?this.customers:this.pizzas).get(t);return s?[s.group.position.x,s.group.position.y+(e==="customer"?1.9:.3),s.group.position.z]:null}steamPoints(){let e=[];for(let t of this.pizzas.values())!t.leaving&&t.data.stage==="ready"&&e.push([t.x,t.y+.12,t.z]);return e}};var $x=36,Jx=30,Kx=34,Jo=class{constructor(e){this.env=e,this.root=new at,e.scene.add(this.root);let t=new Jt({color:"#ffd24a",emissive:new me("#8a5a00"),emissiveIntensity:.7});this.coins=[];for(let i=0;i<$x;i++){let s=new Ce(ke.cyl(12),t);s.visible=!1,this.root.add(s),this.coins.push({m:s,life:0,vx:0,vy:0,vz:0,spin:0})}this.sparkMats={green:new vt({color:"#8fe3a0",toneMapped:!1}),red:new vt({color:"#ff6b81",toneMapped:!1}),gold:new vt({color:"#ffe08a",toneMapped:!1})},this.sparks=[];for(let i=0;i<Jx;i++){let s=new Ce(ke.ico(0),this.sparkMats.green);s.visible=!1,this.root.add(s),this.sparks.push({m:s,life:0,vx:0,vy:0,vz:0})}this.puffs=[];for(let i=0;i<Kx;i++){let s=new vt({color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1}),r=new Ce(ke.sphere(8,6),s);r.visible=!1,this.root.add(r),this.puffs.push({m:r,mat:s,life:0,max:1,vx:0,vy:0,vz:0,size:.2,grow:1})}this.smoke={pos:null,strength:0,timer:0},this.steam={points:[],timer:0},this.rain=this.buildRain(),this.bunting=this.buildBunting()}puff(e,t="gold",i=6){if(t==="gold"){let r=0;for(let o of this.coins)if(!(o.life>0)&&(o.m.position.set(e[0]+(Math.random()-.5)*.3,e[1],e[2]+(Math.random()-.5)*.3),o.m.scale.set(.085,.02,.085),o.m.visible=!0,o.life=.9+Math.random()*.4,o.vx=(Math.random()-.5)*2.2,o.vy=3+Math.random()*2.2,o.vz=(Math.random()-.2)*1.8,o.spin=8+Math.random()*10,++r>=i))break}let s=0;for(let r of this.sparks)if(!(r.life>0)&&(r.m.material=this.sparkMats[t]||this.sparkMats.green,r.m.position.set(e[0]+(Math.random()-.5)*.4,e[1]+.1,e[2]+(Math.random()-.5)*.4),r.m.visible=!0,r.life=.5+Math.random()*.3,r.vx=(Math.random()-.5)*2.4,r.vy=1.4+Math.random()*2,r.vz=(Math.random()-.5)*2.4,++s>=Math.ceil(i/2)+2))break}emitPuff(e,t,i,s,r,o,a){for(let c of this.puffs)if(!(c.life>0)){c.m.position.set(e[0]+(Math.random()-.5)*.1,e[1],e[2]+(Math.random()-.5)*.1),c.mat.color.set(t),c.size=i,c.grow=o,c.life=s,c.max=s,c.opacity=a,c.vx=.18+Math.random()*.2,c.vy=r*(.8+Math.random()*.4),c.vz=(Math.random()-.5)*.15,c.m.visible=!0;return}}setSmoke(e,t){this.smoke.pos=e,this.smoke.strength=t}setSteam(e){this.steam.points=e}buildRain(){let t=new Float32Array(2520);for(let r=0;r<420;r++){let o=(Math.random()-.5)*34,a=Math.random()*14,c=-8+Math.random()*24;t.set([o,a,c,o-.06,a+.6,c],r*6)}let i=new yt;i.setAttribute("position",new Xt(t,3));let s=new ho(i,new Xs({color:"#cfe6ff",transparent:!0,opacity:.5}));return s.visible=!1,s.frustumCulled=!1,this.root.add(s),s}buildBunting(){let e=new at,t=new Qe,i=["#ef476f","#ffd166","#06d6a0","#4ea8de","#9b5de5"];for(let s of[-3.2,7.5])for(let r=0;r<26;r++){let o=r/25,a=-11+o*22.4,c=6.6-Math.sin(o*Math.PI)*1.1;t.add(ke.cone(3),i[r%i.length],[a,c,s],[Math.PI,0,0],[.26,.5,.03])}return e.add(t.mesh(Fi,{cast:!1})),e.visible=!1,this.root.add(e),e}setEvents(e){let t=new Set(e.map(i=>i.id));this.rain.visible=t.has("rainyDay"),this.bunting.visible=t.has("foodFestival")}update(e){for(let s of this.coins){if(s.life<=0)continue;s.life-=e,s.vy-=9*e,s.m.position.x+=s.vx*e,s.m.position.y+=s.vy*e,s.m.position.z+=s.vz*e,s.m.rotation.x+=s.spin*e,s.m.rotation.z+=s.spin*.6*e;let r=Math.min(1,s.life*3);s.m.scale.set(.085*r,.02*r,.085*r),s.life<=0&&(s.m.visible=!1)}for(let s of this.sparks)s.life<=0||(s.life-=e,s.vy-=5*e,s.m.position.x+=s.vx*e,s.m.position.y+=s.vy*e,s.m.position.z+=s.vz*e,s.m.scale.setScalar(Math.max(1e-4,Math.min(1,s.life*2.4))*.07),s.life<=0&&(s.m.visible=!1));let t=this.smoke;if(t.pos&&(t.timer-=e,t.timer<=0)){t.timer=t.strength>.5?.14:.5;let s=1-(this.env.daylight??1),r=Math.round(215-s*120);this.emitPuff(t.pos,`rgb(${r},${r},${r+6})`,.2,2.6,.95,2.4,t.strength>.5?.5:.3)}let i=this.steam;if(i.timer-=e,i.timer<=0&&i.points.length){i.timer=.28;let s=i.points[Math.floor(Math.random()*i.points.length)];this.emitPuff(s,"#ffffff",.07,.9,.55,1.6,.4)}for(let s of this.puffs){if(s.life<=0)continue;s.life-=e;let r=1-s.life/s.max;s.m.position.x+=s.vx*e,s.m.position.y+=s.vy*e,s.m.position.z+=s.vz*e,s.m.scale.setScalar(s.size*(1+r*s.grow)),s.mat.opacity=s.opacity*Math.sin(Math.min(1,r*6)*Math.PI/2)*(1-r),s.life<=0&&(s.m.visible=!1)}if(this.rain.visible){let s=this.rain.geometry.attributes.position.array;for(let r=0;r<s.length;r+=6)s[r+1]-=e*16,s[r+4]-=e*16,s[r+1]<0&&(s[r+1]+=14,s[r+4]+=14);this.rain.geometry.attributes.position.needsUpdate=!0}this.bunting.visible&&(this.bunting.rotation.x=Math.sin(this.env.time*1.2)*.015)}};var ki=n=>document.getElementById(n),Qx=["customers","stretch","top","oven","serve","shop"];function Kd(n){let e={};for(let r of Qx){let o=document.querySelector(`#actions [data-action="${r}"]`);e[r]=o,o.addEventListener("click",()=>n(r))}let t=null,i=0;function s(r){t===null&&(t=r),t+=(r-t)*.25,Math.abs(r-t)<.5&&(t=r),ki("cash").textContent=Mt(t)}return{tickCash:s,setRate(r){ki("rate").textContent=L("hud.rate",{rate:Ku(r)})},setGoal(r,o){ki("goal").textContent=r?L("hud.goal",{goal:L(r.id)}):L("hud.goalDone")},setBadges(r){for(let[o,a]of Object.entries(r)){let c=e[o];if(!c)continue;let l=c.querySelector(".badge");l.textContent=a,l.hidden=a===0}},setHighlight(r){for(let[o,a]of Object.entries(e))a.classList.toggle("pulse",o===r)},setHint(r){let o=ki("hint");r?(o.textContent=r,o.classList.remove("hidden")):o.classList.add("hidden")},setEvents(r){let o=ki("events");o.innerHTML="";for(let a of r){let c=document.createElement("div");c.className="chip-event",c.textContent=`${L("event."+a.id+".name")} \xB7 ${Math.max(0,Math.ceil(a.left))}s`,o.appendChild(c)}},toast(r,o=""){if(i>=3)return;i++;let a=document.createElement("div");a.className="toast "+o,a.textContent=r,ki("toasts").appendChild(a),setTimeout(()=>{a.classList.add("out"),setTimeout(()=>{a.remove(),i--},300)},2200)},float(r,o,a="gold"){let c=document.createElement("div");c.className="float "+a,c.textContent=o,c.style.left=r.x+"px",c.style.top=r.y+"px",ki("floats").appendChild(c),setTimeout(()=>c.remove(),1100)},setPaused(r){document.body.classList.toggle("paused",r)}}}function Qd(){document.querySelectorAll("[data-i18n]").forEach(n=>{n.textContent=L(n.dataset.i18n)}),document.querySelectorAll("[data-i18n-aria]").forEach(n=>{n.setAttribute("aria-label",L(n.dataset.i18nAria))}),document.title=L("app.title")}var Bi=n=>document.getElementById(n),li=null,wl={onOpen:()=>{},onClose:()=>{}},Qo=null;function jd(n,e){Qo=n,wl=e,Bi("miniClose").addEventListener("click",()=>Ko())}function ef(){Ko()}function jo(){return li!==null}function Ko(){if(!li)return;let n=li;li=null;for(let e of n.cleanups)e();Bi("mini").classList.add("hidden"),Bi("miniBody").innerHTML="",wl.onClose()}function ea({station:n,title:e,hint:t,build:i,onDone:s}){li&&Ko(),Bi("miniTitle").textContent=e,Bi("miniHint").textContent=t;let r=Bi("miniBody");r.innerHTML="";let o={frames:[],cleanups:[],raf:0,done:!1};li=o,i(r,{finish:h=>{o.done||(o.done=!0,Ko(),s(h))},frame:h=>o.frames.push(h),cleanup:h=>o.cleanups.push(h)}),Bi("mini").classList.remove("hidden"),wl.onOpen(n);let c=performance.now(),l=h=>{if(li!==o)return;let u=Math.min(.1,(h-c)/1e3);c=h;for(let d of o.frames)d(u);li===o&&(o.raf=requestAnimationFrame(l))};o.raf=requestAnimationFrame(l),o.cleanups.push(()=>cancelAnimationFrame(o.raf))}function El(n,e){let t=i=>e(i);window.addEventListener("keydown",t),n(()=>window.removeEventListener("keydown",t))}function tf(n){let e=Qo.economy.happyHour;ea({station:null,title:L("mini.happy.title"),hint:L("mini.happy.hint",{needed:e.needed}),onDone:n,build(t,{finish:i,frame:s,cleanup:r}){let o=wt("div","happy-board"),a=wt("div","happy-count",L("mini.happy.count",{hits:0,total:e.targets}));t.append(o,a);let c=0,l=0,h=.3,u=!1,d=[],f=()=>{l++;let g=wt("button","coin-target");g.setAttribute("aria-label",L("mini.happy.coin")),g.style.left=14+Math.random()*68+"%",g.style.top=20+Math.random()*58+"%";let y={b:g,life:e.targetLifetimeSeconds,gone:!1};g.addEventListener("pointerdown",m=>{m.preventDefault(),!y.gone&&(y.gone=!0,c++,g.remove(),a.textContent=L("mini.happy.count",{hits:c,total:e.targets}))}),o.append(g),d.push(y)};s(g=>{if(!u){l<e.targets&&(h-=g,h<=0&&(f(),h=e.spawnEverySeconds));for(let y=d.length-1;y>=0;y--){let m=d[y];m.life-=g,(m.gone||m.life<=0)&&(m.b.remove(),d.splice(y,1))}l>=e.targets&&d.length===0&&(u=!0,i({hits:c,total:e.targets}))}}),r(()=>{u=!0})}})}function nf(n){let e=Qo.economy.manual;ea({station:"dough",title:L("mini.dough.title"),hint:L("mini.dough.hint"),onDone:n,build(t,{finish:i,frame:s,cleanup:r}){let o=wt("div","dough-area"),a=wt("div","dough-blob");o.appendChild(a);let c=wt("div","bar"),l=wt("div","fill");c.appendChild(l);let h=wt("div","bar time"),u=wt("div","fill");h.appendChild(u),t.append(o,c,h);let d=0,f=e.doughWindowSeconds,g=null,y=p=>{d=Math.min(1,d+p/e.doughSwipesNeeded)};o.addEventListener("wheel",p=>{p.preventDefault(),y(Math.abs(p.deltaX)+Math.abs(p.deltaY))},{passive:!1}),El(r,p=>{["ArrowLeft","ArrowRight","a","d","A","D"].includes(p.key)&&(p.preventDefault(),y(e.doughKeyStep))}),o.addEventListener("pointerdown",p=>{g=p.clientX;try{o.setPointerCapture(p.pointerId)}catch{}}),o.addEventListener("pointermove",p=>{g!==null&&(y(Math.abs(p.clientX-g)),g=p.clientX)});let m=()=>{g=null};o.addEventListener("pointerup",m),o.addEventListener("pointercancel",m),s(p=>{f-=p,a.style.transform=`scale(${1+d*.45}, ${1-d*.2})`,l.style.width=d*100+"%",u.style.width=Math.max(0,f/e.doughWindowSeconds)*100+"%",d>=1?i({finished:!0,timeLeftFrac:Math.max(0,f)/e.doughWindowSeconds}):f<=0&&i({finished:!1,timeLeftFrac:0})})}})}function sf(n,e,t){ea({station:"dough",title:L("mini.top.title"),hint:L("mini.top.hint"),onDone:t,build(i,{finish:s,cleanup:r}){let o=wt("div","wants",L("customer.wants",{topping:L("topping."+n.topping)})),a=wt("div","pizza-target"),c=wt("div","chips"),l=jx([n.topping,...e.filter(x=>x!==n.topping).slice(0,2)]),h=null,u=null,d=null,f=!1,g=x=>{h=x;for(let _ of c.children)_.classList.toggle("selected",_.dataset.topping===x)},y=()=>{h&&s({topping:h})},m=x=>{u&&(!f&&Math.hypot(x.clientX-d.x,x.clientY-d.y)<6||(f=!0,u.style.display="",u.style.left=x.clientX-40+"px",u.style.top=x.clientY-40+"px"))},p=x=>{if(!u)return;let _=u.dataset.topping,b=f;if(u.remove(),u=null,f=!1,!b)return g(h===_?null:_);let R=a.getBoundingClientRect();Math.hypot(x.clientX-(R.left+R.width/2),x.clientY-(R.top+R.height/2))<R.width/2+24&&s({topping:_})};window.addEventListener("pointermove",m),window.addEventListener("pointerup",p),r(()=>{window.removeEventListener("pointermove",m),window.removeEventListener("pointerup",p),u&&u.remove()}),a.addEventListener("click",y),El(r,x=>{/^[1-3]$/.test(x.key)&&l[Number(x.key)-1]?g(l[Number(x.key)-1]):(x.key===" "||x.key==="Enter")&&(x.preventDefault(),y())});for(let x of l){let _=wt("div","chip-topping "+x,L("topping."+x));_.dataset.topping=x,_.addEventListener("pointerdown",b=>{b.preventDefault(),d={x:b.clientX,y:b.clientY},f=!1,u=wt("div","chip-topping ghost "+x,L("topping."+x)),u.dataset.topping=x,u.style.display="none",u.style.left=b.clientX-40+"px",u.style.top=b.clientY-40+"px",document.body.appendChild(u)}),c.appendChild(_)}i.append(o,a,c)}})}function rf(n){let e=Qo.economy.manual;ea({station:"oven",title:L("mini.oven.title"),hint:L("mini.oven.hint"),onDone:n,build(t,{finish:i,frame:s,cleanup:r}){let o=wt("div","oven-track"),a=wt("div","zone");a.style.left=50-e.ovenSweetZone*100/2+"%",a.style.width=e.ovenSweetZone*100+"%";let c=wt("div","marker");o.append(a,c);let l=wt("button","big-tap",L("mini.oven.tap"));t.append(o,l);let h=0,u=0;s(y=>{d||(h+=y,u=(1-Math.cos(2*Math.PI*h/e.ovenMarkerPeriodSeconds))/2,c.style.left=u*100+"%")});let d=!1,f=0,g=()=>{if(d)return;d=!0,l.disabled=!0;let m=Math.abs(u-.5)<=e.ovenSweetZone/2,p=wt("div","stop-mark "+(m?"good":"miss"));p.style.left=u*100+"%",o.appendChild(p);let x=wt("div","stop-note "+(m?"good":"miss"),L(m?"mini.oven.stopped.good":"mini.oven.stopped.miss"));t.insertBefore(x,l),c.classList.add("frozen"),c.style.left=u*100+"%",f=setTimeout(()=>i({markerPos:u}),900)};r(()=>clearTimeout(f)),l.addEventListener("click",g),o.addEventListener("pointerdown",g),El(r,y=>{(y.key===" "||y.key==="Enter")&&(y.preventDefault(),g())})}})}function wt(n,e,t){let i=document.createElement(n);return e&&(i.className=e),t!==void 0&&(i.textContent=t),i}function jx(n){let e=[...n];for(let t=e.length-1;t>0;t--){let i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}var cr=n=>document.getElementById(n),Hi=null,Es=null,Tl="",hi=1;var ta=null;function Ts(){return Es!==null}function na(){return Es}function An(){let n=ta;ta=null,Es=null,Hi=null,cr("modal").classList.add("hidden"),cr("modalBody").innerHTML="",n&&n()}function lr(n,e,t){Es=n,cr("modalTitle").textContent=e,cr("modal").classList.remove("hidden");let i=cr("modalBody");i.innerHTML="",Tl="",Hi=()=>{i.innerHTML="",t(i)},Hi()}function lf(n){Hi&&Es!=="collect"&&n!==Tl&&(Tl=n,Hi())}function se(n,e,t){let i=document.createElement(n);return e&&(i.className=e),t!==void 0&&(i.textContent=t),i}function qt(n,e,{disabled:t=!1,primary:i=!1}={}){let s=se("button","btn"+(i?" primary":""),n);return s.disabled=t,s.addEventListener("click",e),s}function ev(n){let e=se("div","segmented amount");for(let t of[1,5,10,"max"]){let i=se("button","seg"+(hi===t?" on":""),t==="max"?L("action.amountMax"):"\xD7"+t);i.addEventListener("click",()=>{hi=t,n()}),e.append(i)}return e}function of(n,e,t){return n===0?L("action.buy",{cost:Mt(t)}):hi===1?L("action.buy",{cost:Mt(e)}):L("action.buyN",{n,cost:Mt(e)})}function tv(n,e,t){let i=t.economy.upgrades[n],s=e+1;switch(n){case"oven":return{slots:i.ovenSlotsBase+i.ovenSlotsPerLevel*s};case"counter":return{slots:i.maxQueueBase+i.maxQueuePerLevel*s};case"cheese":return{pct:Math.round(i.cheeseMultPerLevel*s*100)};case"decor":return{pct:Math.round(i.trafficPerLevel*s*100),item:e<i.steps.length?". Adds: "+L("decor.step."+i.steps[e]):""};case"neon":return{pct:Math.round(i.trafficPerLevel*100)};case"marketing":return{pct:Math.round(i.trafficMultPerLevel*s*100)};case"pizzaSchool":return{pct:Math.round(i.payMultPerLevel*s*100)};case"megaOven":return{slots:i.ovenSlotsPerLevel*s};default:return{}}}function hf(n,e,t){lr("shop",L("shop.title"),i=>{let s=sn(n,e);i.append(se("h3","",L("shop.upgrades"))),i.append(ev(()=>Hi()));let r=(D,z)=>{let G=e.economy.upgrades[D],P=n.upgrades[D],F=P>=G.maxLevel,B=G.requires?.franchises||0,Z=z&&n.franchise.count<B,Y=Z||F?{n:0,cost:0}:vs(G,P,hi,n.cash),$=Y.cost||Bn(G,P),Q=se("div","row"+(Z?" locked":"")),te=se("div","info");te.append(se("b","",L("upgrade."+D+".name")),se("small","",Z?L("shop.needsFranchise",{n:B}):F?L("action.maxed"):L("upgrade."+D+".desc",tv(D,P,e))),se("small","lvl",`${P}/${G.maxLevel}`));let ce=Z?L("action.locked"):F?L("action.maxed"):of(Y.n,Y.cost,$);return Q.append(te,qt(ce,()=>t.buy(D,hi),{disabled:F||Z||Y.n===0})),Q};for(let D of Object.keys(e.economy.upgrades)){let z=e.economy.upgrades[D];z.enabled===!1||z.group==="empire"||i.append(r(D,!1))}i.append(se("h3","",L("shop.empire"))),i.append(se("p","muted",L("shop.empireDesc")));for(let D of Object.keys(e.economy.upgrades)){let z=e.economy.upgrades[D];z.enabled===!1||z.group!=="empire"||i.append(r(D,!0))}i.append(se("h3","",L("shop.locations")));for(let D of Object.keys(e.locations)){let z=e.locations[D],G=!!n.unlockedLocations[D],P=n.location===D,F=se("div","row"),B=se("div","info");B.append(se("b","",L(z.nameKey)),se("small","",L(z.descKey)));let Z=L("action.move"),Y=!1;P?(Z=L("location.current"),Y=!0):G||(Z=L("action.locked"),Y=!0,B.append(se("small","lvl",L("location.locked",{target:Mt(z.unlock?.value??0)})))),F.append(B,qt(Z,()=>t.move(D),{disabled:Y,primary:!P&&G})),i.append(F)}i.append(se("h3","",L("shop.staff")));for(let D of Object.keys(e.economy.staff)){let z=e.economy.staff[D],G=n.staff[D],P=G>=z.maxLevel,F=Ho(n,D,G),B=W=>Ho(n,D,W)?0:Bn(z,W),Z=P?{n:0,cost:0}:vs(z,G,hi,n.cash,B),Y=Z.cost||B(G),$=D==="cashier"?L("staff.cashier.desc",{secs:s.cashierOrderSec.toFixed(1)}):L("staff.cook.desc",{speed:s.cookSpeed.toFixed(1)}),Q=se("div","row"),te=se("div","info");te.append(se("b","",L("staff."+D+".name")),se("small","",$),se("small","lvl",G===0?L("staff.notHired"):L("staff.level",{level:G})));let ce=F&&hi===1?L("action.hireFree"):of(Z.n,Z.cost,B(G));Q.append(te,qt(P?L("action.maxed"):ce,()=>t.hire(D,hi),{disabled:P||Z.n===0,primary:G===0})),i.append(Q)}i.append(se("h3","",L("shop.shops")));let o=e.economy.shops,a=n.shops||1,c=n.franchise.count>=o.requiresFranchises,l=a>=o.maxShops,h=l?0:Math.ceil(o.baseCost*Math.pow(o.growth,a-1)),u=se("div","row"+(c?"":" locked")),d=se("div","info");d.append(se("b","",L("shop.openShop")),se("small","",l?L("shop.allOpen"):c?L("shop.shopsDesc",{open:a,max:o.maxShops,mult:o.multiplierPerShop}):L("shop.shopsLocked",{n:o.requiresFranchises})),se("small","lvl",`${a}/${o.maxShops}`));let f=c?l?L("action.maxed"):L("action.open",{cost:Mt(h)}):L("action.locked");u.append(d,qt(f,()=>t.openShop(),{disabled:!c||l||n.cash<h,primary:c&&!l})),i.append(u),i.append(se("h3","",L("shop.recruit")));let g=e.economy.recruit,y=n.franchise.count>=g.requiresFranchises;y||i.append(se("p","muted",L("shop.recruitLocked")));let m=js(n,e).recruitCap;for(let D of["cashier","cook"]){let z=n.staffing[D]||0,G=z>=m,P=n.staff[D]>0,F=G?0:Math.ceil(g[D].baseCost*Math.pow(g[D].growth,z)),B=se("div","row"+(y?"":" locked")),Z=se("div","info");Z.append(se("b","",L("recruit."+D+".name")),se("small","",P?L("recruit."+D+".desc",{n:z,max:m}):L("recruit.needHire",{role:L("staff."+D+".name")})));let Y=y?G?L("action.maxed"):L("action.recruit",{cost:Mt(F)}):L("action.locked");B.append(Z,qt(Y,()=>t.recruit(D),{disabled:!y||G||!P||n.cash<F,primary:y&&P&&!G})),i.append(B)}i.append(se("h3","",L("shop.franchise")));let p=se("div","row"),x=se("div","info"),_=Ms(n,e),b=e.economy.prestige.tiers,R=ri(n,e),E=b.find(D=>D.minFranchises>n.franchise.count);x.append(se("b","",L("franchise.title")),se("small","",_?L("franchise.ready")+" "+L("franchise.gain",{points:Di(n,e)}):L("franchise.locked",{target:Mt(Ii(n,e)),have:Mt(Li(n))})),se("small","",L("franchise.now",{tier:L("tier."+b[R].id)})+(E?". "+L("franchise.next",{tier:L("tier."+E.id)}):"")),se("small","lvl",L("franchise.points",{points:n.franchise.points})+" "+L("franchise.traffic",{pct:Math.round((zo(n,e)-1)*100)})+" "+L("franchise.ovens",{x:er(n,e).toFixed(1)}))),p.append(x,qt(L("action.franchise"),()=>t.franchise(),{disabled:!_})),i.append(p),i.append(se("h3","",L("shop.starterPack")));let A=se("div","row"),N=se("div","info");N.append(se("b","",L("shop.starterPack")),se("small","",L("shop.starterPackDesc"))),A.append(N,qt(nv(e),()=>t.stub("starterPack"))),i.append(A),i.append(se("h3","",L("shop.ovenSkins")));let M=se("div","row"),S=se("div","info");S.append(se("b","",L("shop.ovenSkins")),se("small","",L("shop.ovenSkinsDesc"))),M.append(S,qt(L("action.soon"),()=>t.stub("ovenSkins"))),i.append(M)})}function nv(n){return n.economy.monetizationStubs.starterPack.priceLabel}function uf(n,e,t){let i=1;lr("collect",L("collect.title"),s=>{s.innerHTML="",s.append(se("p","lead",L("collect.body",{duration:Qc(n.elapsed)})));let r=se("div","big-amount",L("collect.earned",{amount:Kc(n.earned*i)}));s.append(r),n.capped&&s.append(se("p","muted",L("collect.capped",{cap:Qc(e.economy.time.offlineCapSeconds)}))),i>1&&s.append(se("p","muted",L("collect.boosted")));let o=se("div","stack"),a=qt(i>1?`${L("action.collect")} x${i}`:L("action.collect"),()=>{ta=null,An(),t.collect(i)},{primary:!0});if(o.append(a),i===1){let c=qt(L("action.adDouble"),async()=>{c.disabled=!0;let l=await t.watchAd();Es==="collect"&&(l&&(i=2),Hi())});o.append(c,se("small","muted",L("action.adDoubleHint")))}s.append(o)}),ta=()=>t.collect(1)}function df(n,e,t){lr("franchise",L("franchise.title"),i=>{let s=Di(n,e),o=e.economy.prestige.tiers.find(c=>c.minFranchises>n.franchise.count);i.append(se("p","lead",L("franchise.explain",{bonus:Math.round(e.economy.prestige.bonusPerPoint*100),traffic:Math.round((e.economy.prestige.trafficPerFranchise||0)*100)})),se("p","",L("franchise.trafficNext",{pct:Math.round((zo(n,e,n.franchise.count+1)-1)*100)})),se("p","",L("franchise.nextCost",{target:Mt(Ii({franchise:{count:n.franchise.count+1}},e))})),se("p","",L("franchise.gain",{points:s})+(o?" "+L("franchise.next",{tier:L("tier."+o.id)})+".":"")),se("p","muted",L("franchise.resets")),se("p","muted",L("franchise.keeps")),se("p","muted",L("franchise.points",{points:n.franchise.points})));let a=se("div","stack");a.append(qt(L("action.franchise"),()=>{An(),t.confirmFranchise()},{primary:!0})),a.append(qt(L("action.cancel"),()=>An())),i.append(a)})}function As(n,e){lr("settings",L("settings.title"),t=>{t.append(cf(L("settings.sound"),n.settings.sound,o=>e.setSound(o)),cf(L("settings.notify"),n.settings.notify,o=>e.setNotify(o),L("settings.notifyDesc")),af(L("settings.look"),L("settings.lookDesc"),["3d","2d"],n.settings.look||"3d",o=>e.setLook(o),o=>L("settings.look."+o)),af(L("settings.graphics"),L("settings.graphicsDesc"),["auto","high","low"],n.settings.graphics||"auto",o=>e.setGraphics(o),o=>L("settings.graphics."+o)));let i=se("button","version-tap",`${L("app.version")}`),s=0;i.addEventListener("click",()=>{s++,s>=5&&(s=0,e.openDebug())}),t.append(i),t.append(se("p","keys-help",L("settings.keys")));let r=se("div","stack");r.append(qt(L("action.reset"),()=>{globalThis.confirm(L("action.confirmReset"))&&e.reset()})),t.append(r)})}function af(n,e,t,i,s,r){let o=se("div","row"),a=se("div","info");a.append(se("b","",n),se("small","",e));let c=se("div","segmented");for(let l of t){let h=se("button","seg"+(l===i?" on":""),r(l));h.addEventListener("click",()=>s(l)),c.append(h)}return o.append(a,c),o}function cf(n,e,t,i){let s=se("div","row"),r=se("div","info");r.append(se("b","",n)),i&&r.append(se("small","",i));let o=se("button","switch"+(e?" on":""));return o.setAttribute("role","switch"),o.setAttribute("aria-checked",String(e)),o.addEventListener("click",()=>t(!o.classList.contains("on"))),s.append(r,o),s}function Al(n){lr("debug",L("debug.title"),e=>{let t=[["debug.addCash",n.addCash,1e3],["debug.addCashBig",n.addCash,2e4],["debug.skip",n.skipHour],["debug.rain",n.event,"rainyDay"],["debug.festival",n.event,"foodFestival"],["debug.night",n.toggleNight],["debug.away",n.simulateAway],["debug.franchiseReady",n.franchiseReady],["debug.resetAll",n.wipe]],i=se("div","stack");for(let[s,r,o]of t)i.append(qt(L(s),()=>r(o)));e.append(i)})}var ui=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function sv(n){n.style.fontSize="22px";let e=22;for(;(n.scrollHeight>n.clientHeight||n.scrollWidth>n.clientWidth)&&e>4;)e-=.5,n.style.fontSize=e+"px"}function ff(){let n=document.getElementById("signs"),e=[];function t(r){n.innerHTML="",e=r.map(o=>{let a=document.createElement("div");return a.className="sign-label "+o.kind+(o.size?" board":""),n.appendChild(a),{spec:o,el:a,html:""}})}function i(r,o,a){if(r.kind==="menu"){let c=Object.entries(a.economy.styles).filter(([l,h])=>h.enabled&&o.styles[l]).slice(0,3).map(([l,h])=>`<div class="line"><span>${ui(L("style."+l))}</span><b>${Mt(h.basePrice)}</b></div>`);return`<div class="title">${ui(L("sign.menu.title"))}</div>${c.join("")}`}return r.kind==="neon"?ui(L("sign.neon")):r.kind==="shop"?ui(L("sign.shop",{n:r.n})):r.kind==="shop"?ui(L("sign.shop",{n:r.n})):r.kind==="shopname"?ui(L("app.title")):r.kind==="franchise"?ui(L("sign.franchise",{count:o.franchise.count})):ui(L("sign.sandwich"))}function s(r,o,a){let c=o.upgrades.neon>=1;for(let l of e){if(!(l.spec.kind!=="neon"||c)){l.el.style.display="none";continue}let u=i(l.spec,o,a);u!==l.html&&(l.el.innerHTML=u,l.html=u);let d=r.toScreen(l.spec.pos);if(l.el.style.display=d.front?"":"none",l.spec.size){let[g,y]=l.spec.size,m=l.spec.pos,p=r.toScreen([m[0]+g/2,m[1],m[2]]),x=r.toScreen([m[0],m[1]+y/2,m[2]]),_=2*Math.abs(p.x-d.x),b=2*Math.abs(x.y-d.y);l.el.style.left=d.x+"px",l.el.style.top=d.y+"px",l.el.style.width=_+"px",l.el.style.height=b+"px";let R=Math.round(_)+"x"+Math.round(b)+"|"+l.html;R!==l.fitKey&&(l.fitKey=R,sv(l.el));continue}let f=(l.el.offsetWidth||100)/2+6;l.el.style.left=Math.min(d.w-f,Math.max(f,d.x))+"px",l.el.style.top=d.y+"px"}}return{setSpecs:t,update:s}}var Rl=.1,pf=20,rv=60,on=n=>document.getElementById(n),xe,q,qe,mf,di=null,an=null,xf="",Il=null,cn,Vi,Te,Wn=null,ia=0,Ll=performance.now(),Cl=0,gf="",yf=-1e9;async function ov(){xe=await Yu(),$u(xe.strings),Qd();let n=ju(),e=Date.now();q=n||Uo(xe,e),xe.locations[q.location]||(q.location="corner"),an=Mf(),qe=Dd(on("scene"),an),cn=new $o(qe,an,xe),Vi=new Jo(qe),Te=Kd(Sf),Il=ff(),Dl(),jd(xe,{onOpen:t=>qe.focus(t?an.stations[t]:null),onClose:()=>qe.focus(null)}),No(q.settings.sound),qe.setQuality(q.settings.graphics||"auto"),qe.setLook(q.settings.look||"3d"),nl(),et("session_start_state",{fresh:!n}),window.addEventListener("resize",()=>qe.resize()),window.addEventListener("orientationchange",()=>qe.resize()),qe.resize(),yv(),_v(),n&&Ul(e),on("loading").classList.add("hidden"),requestAnimationFrame(Tf),new URLSearchParams(location.search).has("debug")&&on("btnDebug").classList.remove("hidden"),window.pizzaStand={get state(){return q},get layout(){return an},cfg:xe,debug:Nl(),env:qe,actors:cn}}function vf(){return xe.locations[q.location]}function Mf(){let n=ri(q,xe),e=Xd(vf(),xe.economy.prestige.tiers[n],n);return e.decorSteps=xe.economy.upgrades.decor.steps,e}function bf(){return`${q.location}|${q.shops}|${ri(q,xe)}|${q.upgrades.decor}|${q.upgrades.marketing}|${q.upgrades.pizzaSchool}|${q.upgrades.megaOven}`}function Dl(n=!0){an=Mf(),di&&(qe.scene.remove(di),di.traverse(e=>{e.geometry&&e.geometry.dispose()})),qe.glowMats.length=0,qe.nightFades.length=0,qe.updaters.length=0,qe.signs=[],di=new at,di.add(Od(an,qe)),mf=qd(an,qe,{decor:q.upgrades.decor,empire:{marketing:q.upgrades.marketing,pizzaSchool:q.upgrades.pizzaSchool,megaOven:q.upgrades.megaOven}}),di.add(mf),qe.styleNew(di),qe.scene.add(di),qe.setLocation(an,n),cn.setLocation(an),Il.setSpecs(qe.signs),xf=bf()}function av(n){if(!xd(q,n,xe).ok)return Te.toast(L("toast.noPizza"));Dl(),St.whoosh(),Te.toast(L("toast.locationMoved",{location:L(vf().nameKey)})),et("location_move",{to:n}),_n()}function _n(){let n=Date.now();Wn||(q.savedAt=n),ed(q)}function Ul(n=Date.now()){let e=wd(q,n,xe);if(!(e.rawSeconds<rv)){if(e.earned<=0){cl(q,e,xe,1),q.savedAt=n;return}Wn=e,uf(e,xe,{collect:t=>{Wn&&(cl(q,e,xe,t),Wn=null,q.savedAt=Date.now(),et("offline_collect",{seconds:Math.round(e.elapsed),earned:Math.floor(e.earned*t),multiplier:t,capped:e.capped}),_n())},watchAd:()=>cv(xe.economy.monetizationStubs.offlineBoostAd)})}}function cv(n){return et("ad_offline_boost_requested"),new Promise(e=>{setTimeout(()=>{et("ad_offline_boost_completed"),Te.toast(L("toast.adStub")),e(!0)},n.placeholderSeconds*1e3)})}function dr(n){switch(n.type){case"arrived":case"order_taken":St.pop();break;case"stage":n.stage==="ready"&&St.bell();break;case"served":{St.cash(),cn.leaveCustomer(n.customerId,!0),cn.leavePizza(n.pizzaId);let e=an.register,t=cn.positionOf("customer",n.customerId)||[e[0],1.6,e[2]],i=qe.toScreen([t[0],t[1]+.4,t[2]]);Te.float(i,"+"+Mt(n.amount),"gold"),n.tip>=.5&&Te.float({x:i.x,y:i.y-26},L("toast.tip",{tip:Mt(n.tip)}),"tip"),Vi.puff([e[0],1.5,e[2]+.2],"gold",n.big?16:7),n.big&&qe.shakeCam(.12),et("sale",{total:Math.floor(n.total),customerType:n.customerType,wrongTopping:n.wrongTopping,auto:!!n.auto}),q.flags.firstSale||(q.flags.firstSale=!0,et("first_sale"));break}case"angry":St.angry(),cn.leaveCustomer(n.customerId,!1),Te.toast(L("toast.angry",{name:L("customer.name."+n.nameIdx),penalty:Mt(n.penalty)}),"bad"),qe.shakeCam(.04),et("customer_angry",{customerType:n.customerType});break;case"turned_away":{let e=performance.now();e-yf>8e3&&(yf=e,Te.toast(L("customer.turnedAway"),"bad"),et("customer_turned_away",{queueFull:!0}));break}case"event_start":St.bell(),Te.toast(L("toast.eventStart",{event:L("event."+n.id+".name")})),et("event_start",{id:n.id});break;case"event_end":Te.toast(L("toast.eventEnd",{event:L("event."+n.id+".name")}));break;case"style_unlocked":Te.toast(L("toast.unlocked",{style:L("style."+n.style)}));break;case"location_unlocked":St.bell(),Te.toast(L("toast.locationUnlocked",{location:L(xe.locations[n.location].nameKey)})),et("location_unlocked",{location:n.location});break;case"bonus_ready":St.bell(),Te.toast(L("toast.bonusReady"));break;case"franchise_ready":St.bell(),Te.toast(L("toast.franchiseReady")),et("franchise_ready",{count:q.franchise.count});break;case"tutorial_step":et("tutorial_step",{step:n.step});break;case"tutorial_done":Te.toast(L("tut.done")),et("tutorial_done");break;case"idle_staff":{let e=L("staff."+n.role+".name");Te.toast(L("toast.staffIdle",{role:e})),lv(L("toast.staffIdle",{role:e}));break}default:break}}function lv(n){if(!(!q.settings.notify||!document.hidden)&&!(typeof Notification>"u"||Notification.permission!=="granted"))try{new Notification(L("app.title"),{body:n})}catch{}}function hv(){return q.customers.filter(n=>n.state==="waiting").sort((n,e)=>n.id-e.id)[0]}function uv(n){return q.pizzas.filter(e=>e.stage===n).sort((e,t)=>e.id-t.id)[0]}function fr(n){if(q.tutorialDone||n==="shop"||n==="settings")return!0;let e=xe.economy.tutorial[q.tutorialStep];return!e||e.highlight===n}var dv={dough:"stretch",topping:"top",load:"oven",ready:"serve"};function oa(){Te.toast(L("tut.locked"),"bad"),St.angry()}function Sf(n){if(!fr(n))return oa();if(St.click(),n==="customers")return wf();if(n==="shop")return fv();if(n==="stretch")return hr("dough");if(n==="top")return hr("topping");if(n==="oven")return hr("load");if(n==="serve")return hr("ready")}function wf(n){let e=n?oi(q,n):hv();if(!e||e.state!=="waiting")return Te.toast(L("toast.noPizza"));let t=Bo(q,e.id,xe);t.ok&&dr({...t,type:"order_taken"})}function hr(n,e){let t=e?q.pizzas.find(i=>i.id===e):uv(n);if(!t||t.stage!==n)return Te.toast(L("toast.noPizza"));if(n==="dough")nf(i=>sa(ir(q,t.id,"stretch",i,xe)));else if(n==="topping"){let i=oi(q,t.customerId);sf(i,xe.economy.customers.toppings,s=>sa(ir(q,t.id,"topping",s,xe)))}else if(n==="load"){if(q.pizzas.filter(i=>i.stage==="baking").length>=sn(q,xe).ovenSlots)return Te.toast(L("toast.ovenFull"));rf(i=>sa(ir(q,t.id,"load",i,xe)))}else n==="ready"&&sa(ir(q,t.id,"serve",{},xe))}function sa(n){if(!n.ok){Te.toast(n.reason==="ovenFull"?L("toast.ovenFull"):L("toast.noPizza"));return}if(n.type==="served")return dr(n);if(n.type==="stage"){let e=n.stage==="baking"?_f("oven"):_f(n.stage==="load"?"load":"dough");Vi.puff(e,"green",4),St.pop()}}function _f(n){return an.stations[n]}function fv(){if(na()==="shop")return An();hf(q,xe,{buy:(n,e=1)=>{let t=pd(q,n,xe,e);if(!t.ok)return Te.toast(t.reason==="cash"?L("toast.notEnough"):L("toast.noPizza"));if(St.bell(),n==="decor"){let i=xe.economy.upgrades.decor.steps;Te.toast(L("toast.decorAdded",{item:L("decor.step."+i[Math.min(i.length,q.upgrades.decor)-1])}))}else Te.toast(t.bought>1?L("toast.boughtN",{n:t.bought,item:L("upgrade."+n+".name")}):L("toast.bought",{item:L("upgrade."+n+".name")}));t.first&&et("first_purchase",{item:n,cost:t.cost}),_n()},openShop:()=>{let n=vd(q,xe);if(!n.ok){let e=n.reason==="cash"?L("toast.notEnough"):n.reason==="needsFranchise"?L("shop.shopsLocked",{n:n.need}):L("shop.allOpen");return Te.toast(e)}St.bell(),Te.toast(L("toast.shopOpened",{n:n.shops})),et("shop_opened",{shops:n.shops,cost:n.cost}),_n()},recruit:n=>{let e=yd(q,n,xe);if(!e.ok){let t=e.reason==="cash"?L("toast.notEnough"):e.reason==="needsFranchise"?L("shop.recruitLocked"):e.reason==="needsHire"?L("recruit.needHire",{role:L("staff."+n+".name")}):L("action.maxed");return Te.toast(t)}St.bell(),Te.toast(L("toast.recruited",{role:L("staff."+n+".name")})),_n()},hire:(n,e=1)=>{let t=md(q,n,xe,e);if(!t.ok)return Te.toast(t.reason==="cash"?L("toast.notEnough"):L("toast.noPizza"));St.bell(),Te.toast(L("toast.hired",{role:L("staff."+n+".name")})),t.first&&et("first_purchase",{item:n,cost:t.cost}),_n()},franchise:()=>df(q,xe,{confirmFranchise:pv}),move:n=>av(n),stub:n=>{et("monetization_stub_tap",{name:n}),Te.toast(L("toast.comingSoon"))}})}function pv(){if(!rl(q,xe))return Te.toast(L("franchise.locked",{target:Mt(Ii(q,xe)),have:Mt(Li(q))}));let n=Di(q,xe),e=ri(q,xe);q=_d(q,xe,Uo).state;let i=ri(q,xe);et("prestige",{points:q.franchise.points,gain:n,count:q.franchise.count,tier:xe.economy.prestige.tiers[i].id,lifetimeCash:Math.floor(q.lifetimeCash)}),St.bell(),Te.toast(L("toast.franchised",{mult:(1+xe.economy.prestige.bonusPerPoint*q.franchise.points).toFixed(1)})),i!==e&&Te.toast(L("toast.tierUp",{tier:L("tier."+xe.economy.prestige.tiers[i].id)})),_n()}function ur(){return{setSound:n=>{q.settings.sound=n,No(n),As(q,ur())},setNotify:async n=>{if(!n)q.settings.notify=!1;else if(typeof Notification<"u"){let e=await Notification.requestPermission();q.settings.notify=e==="granted"}et("notify_opt_in",{on:q.settings.notify}),na()==="settings"&&As(q,ur())},setLook:n=>{q.settings.look=n,qe.setLook(n),et("art_style",{look:n}),As(q,ur())},setGraphics:n=>{q.settings.graphics=n,qe.setQuality(n),et("graphics_quality",{quality:n}),As(q,ur())},reset:()=>Ef(),openDebug:()=>Al(Nl())}}function Ef(){td(),Wn=null,q=Uo(xe),et("save_reset"),An(),Te.toast(L("action.reset"))}function Nl(){return{addCash:n=>{q.cash+=n,q.lifetimeCash+=n,Te.toast(L("toast.cashDebug",{amount:Mt(n)}))},skipHour:()=>{for(let n=0;n<7200;n++){let e=al(q,.5,xe,[]);for(let t of e)(t.type==="event_start"||t.type==="event_end"||t.type==="tutorial_done")&&dr(t)}Te.toast("+1h")},event:n=>{nr(q,n,xe),dr({type:"event_start",id:n})},toggleNight:()=>{q.dayClock=(q.dayClock+.5)%1},simulateAway:()=>{An(),q.savedAt-=8*3600*1e3,Ul()},franchiseReady:()=>{q.lifetimeCash=Math.max(q.lifetimeCash,(q.franchise.lifetimeAtLast||0)+Ii(q,xe))},wipe:Ef}}var ra={1:"customers",2:"stretch",3:"top",4:"oven",5:"serve",6:"shop"};function mv(){window.addEventListener("keydown",n=>{if(!(n.ctrlKey||n.metaKey||n.altKey)){if(n.key==="Escape")return jo()?ef():Ts()?on("modalClose").click():void 0;if(n.key==="6"&&na()==="shop")return n.preventDefault(),An();if(!(Ts()||jo()||Wn)){if(ra[n.key]&&!fr(ra[n.key]))return oa();if(ra[n.key])return n.preventDefault(),Sf(ra[n.key]);(n.key==="m"||n.key==="M")&&(q.settings.sound=!q.settings.sound,No(q.settings.sound),Te.toast(L("settings.sound")+": "+(q.settings.sound?"on":"off")))}}})}function gv(){Ts()||jo()||Wn||!q.tutorialDone||!ol(q,xe)||(St.click(),tf(n=>{let e=Md(q,n.hits,xe);e.won?(St.bell(),Te.toast(L("mini.happy.win")),et("happy_hour_won",{hits:e.hits})):(Te.toast(L("mini.happy.miss")),et("happy_hour_missed",{hits:e.hits})),_n()}))}function yv(){mv(),on("btnBonus").addEventListener("click",gv),on("btnSettings").addEventListener("click",()=>As(q,ur())),on("btnDebug").addEventListener("click",()=>Al(Nl())),on("modalClose").addEventListener("click",()=>An()),on("modal").addEventListener("pointerdown",n=>{n.target.id==="modal"&&An()})}function _v(){let n=on("scene"),e=new Ao,t=new de,i=null;n.addEventListener("pointerdown",s=>{i={x:s.clientX,y:s.clientY,t:performance.now()}}),n.addEventListener("pointerup",s=>{if(!i)return;let r=Math.hypot(s.clientX-i.x,s.clientY-i.y),o=performance.now()-i.t<450;if(i=null,r>12||!o||Ts())return;let a=n.getBoundingClientRect();t.set((s.clientX-a.left)/a.width*2-1,-((s.clientY-a.top)/a.height)*2+1),e.setFromCamera(t,qe.camera);let c=cn.pick(e);if(c){if(c.kind==="customer"){let l=oi(q,c.id);return l&&l.state==="waiting"?fr("customers")?wf(l.id):oa():void 0}if(c.kind==="pizza"){let l=q.pizzas.find(h=>h.id===c.id);if(!l)return;if(["dough","topping","load","ready"].includes(l.stage)){if(!fr(dv[l.stage]))return oa();hr(l.stage,l.id)}}}}),n.addEventListener("pointercancel",()=>{i=null}),n.addEventListener("pointermove",s=>{if(s.pointerType!=="mouse"||Ts()){n.style.cursor="";return}let r=n.getBoundingClientRect();t.set((s.clientX-r.left)/r.width*2-1,-((s.clientY-r.top)/r.height)*2+1),e.setFromCamera(t,qe.camera),n.style.cursor=cn.pick(e)?"pointer":"default"}),n.addEventListener("touchmove",s=>s.preventDefault(),{passive:!1})}function Tf(n){requestAnimationFrame(Tf);let e=Math.min(.1,(n-Ll)/1e3);if(Ll=n,!Wn){ia+=e;let i=0;for(;ia>=Rl&&i<pf;){let s=al(q,Rl,xe,[]);for(let r of s)dr(r);ia-=Rl,i++}i===pf&&(ia=0)}xf!==bf()&&Dl(!1);let t=q.pizzas.some(i=>i.stage==="baking");cn.sync(q),cn.update(e,q),Vi.setSmoke(qe.smokeAt,t?1:.2),Vi.setSteam(cn.steamPoints()),Vi.update(e),Vi.setEvents(q.events.active),qe.update(e,q.dayClock),Zd(qe,q.upgrades.neon),$d(qe,t,qe.time),Il.update(qe,q,xe),Yd(qe,q,performance.now()/1e3,xe),Cl+=e,Cl>=xe.economy.time.autosaveSeconds&&(Cl=0,_n()),Wn||xv(),qe.renderer.render(qe.scene,qe.camera)}var Pl=0;function xv(){if(Pl-=1,Pl>0)return;Pl=4;let n=sn(q,xe);Te.tickCash(q.cash),Te.setRate(n.idleRate),Te.setGoal(ld(q,xe)),Te.setBadges({customers:q.customers.filter(i=>i.state==="waiting").length,stretch:q.pizzas.filter(i=>i.stage==="dough").length,top:q.pizzas.filter(i=>i.stage==="topping").length,oven:q.pizzas.filter(i=>i.stage==="load").length,serve:q.pizzas.filter(i=>i.stage==="ready").length});let e=xe.economy.tutorial[q.tutorialStep];if(!q.tutorialDone&&e){Te.setHint(L("tut.progress",{n:q.tutorialStep+1,total:xe.economy.tutorial.length})+"  "+L(e.textKey)),Te.setHighlight(e.highlight);for(let i of["customers","stretch","top","oven","serve","shop"]){let s=document.querySelector(`#actions [data-action="${i}"]`);s&&s.classList.toggle("tut-off",!fr(i))}}else document.querySelectorAll("#actions .tut-off").forEach(i=>i.classList.remove("tut-off")),Te.setHint(null),Te.setHighlight(null);Te.setEvents(q.events.active.map(i=>({id:i.id,left:i.endsAt-q.gameTime}))),on("btnBonus").classList.toggle("hidden",!q.tutorialDone||!ol(q,xe));let t=`${q.location}|${JSON.stringify(q.unlockedLocations)}|${Math.floor(q.cash)}|${JSON.stringify(q.upgrades)}|${JSON.stringify(q.staff)}|${JSON.stringify(q.staffing)}|${q.franchise.points}|${q.franchise.count}|${rl(q,xe)}|${Math.floor(Li(q)/500)}`;t!==gf&&(gf=t,lf(t))}document.addEventListener("visibilitychange",()=>{document.hidden?(Te.setPaused(!0),q.tutorialDone||et("churn_point",{where:"tutorial_step_"+q.tutorialStep}),rd({gameTime:Math.round(q.gameTime)}),_n()):(Te.setPaused(!1),Ll=performance.now(),nl(),Ul())});window.addEventListener("pagehide",()=>_n());ov().catch(n=>{console.error(n);let e=n&&n.message?n.message:String(n);window.__pizzaFail?window.__pizzaFail(e):on("loading").textContent="The game could not start: "+e});})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
