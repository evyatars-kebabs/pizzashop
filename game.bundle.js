(()=>{var Nl={schemaVersion:1,_comment:"All tunable values. Costs are baseCost * growth^currentLevel to go from currentLevel to currentLevel+1. Times are in seconds.",startingCash:30,bigSaleThreshold:20,time:{dayLengthSeconds:600,startDayClock:.3,offlineCapSeconds:28800,offlineBaseEfficiency:.5,offlineEfficiencyPerStaffRole:.25,autosaveSeconds:10,randomEventMinSeconds:300,randomEventMaxSeconds:600},customers:{spawnBaseSeconds:24,spawnJitter:.3,nightSpawnMult:.6,tipMax:.3,wrongToppingTipMult:.4,wrongToppingPayMult:.9,wrongToppingQuality:.55,angryPenalty:3,types:{hungry:{weight:3,patience:90,tipMult:1},chatty:{weight:2,patience:120,tipMult:1.3},grumpy:{weight:1,patience:45,tipMult:.7}},toppings:["pepperoni","mushroom","olive","basil","pepper"]},styles:{margherita:{basePrice:8,bakeSeconds:10,unlock:{type:"start"},enabled:!0},pepperoni:{basePrice:11,bakeSeconds:10,unlock:{type:"lifetime",value:600},enabled:!0},veggie:{basePrice:10,bakeSeconds:11,unlock:{type:"lifetime",value:2500},enabled:!1},seasonal:{basePrice:14,bakeSeconds:12,unlock:{type:"lifetime",value:8e3},enabled:!1}},pizzaQuality:{payBase:.6,payPerQuality:.6},stages:{autoDoughSeconds:4,autoToppingSeconds:3,autoDoughQuality:.7,autoToppingQuality:.75,autoLoadQuality:.7,perfectBakeQuality:.9,perfectBakeSpeedMult:.85,autoServeDelaySeconds:1},manual:{doughWindowSeconds:8,doughSwipesNeeded:1200,doughRushedQuality:.5,doughFinishMinQuality:.6,toppingCorrectQuality:1,toppingWrongQuality:.55,ovenSweetZone:.18,ovenMinQuality:.6,ovenMarkerPeriodSeconds:1.6,doughKeyStep:110},cashier:{orderSecondsBase:3,orderSpeedPerLevel:.5},cook:{speedPerLevel:.4},upgrades:{oven:{baseCost:40,growth:1.15,maxLevel:120,ovenSlotsBase:1,ovenSlotsPerLevel:1},counter:{baseCost:60,growth:1.15,maxLevel:120,maxQueueBase:3,maxQueuePerLevel:2},cheese:{baseCost:80,growth:1.14,maxLevel:120,cheeseMultPerLevel:.1},decor:{baseCost:120,growth:1.14,maxLevel:120,trafficPerLevel:.05,steps:["flowers","festoon","bunting","table","lanterns","carpet","secondTable","balloons","flags","statue"]},neon:{baseCost:300,growth:1.8,maxLevel:20,trafficPerLevel:.2},scooter:{baseCost:500,growth:2.2,maxLevel:5,enabled:!1,_note:"Delivery scooter: placeholder for post-prototype delivery kid."},marketing:{baseCost:15e4,growth:1.25,maxLevel:40,trafficMultPerLevel:.5,group:"empire",requires:{franchises:1}},pizzaSchool:{baseCost:4e5,growth:1.25,maxLevel:40,payMultPerLevel:.4,group:"empire",requires:{franchises:2}},megaOven:{baseCost:9e5,growth:1.3,maxLevel:30,ovenSlotsPerLevel:2,group:"empire",requires:{franchises:3}}},staff:{cashier:{baseCost:150,growth:1.25,maxLevel:40},cook:{baseCost:250,growth:1.25,maxLevel:40}},prestige:{milestoneLifetimeCash:2e4,pointsDivisor:2e4,bonusPerPoint:.1,_tiersNote:"The stand grows with each franchise. Width/depth are metres; staffVisible is how many employees per role can be seen working; bonuses add to oven slots and queue size.",tiers:[{id:"cart",minFranchises:0,width:4.2,depth:2.6,staffVisible:1,ovenSlotsBonus:0,maxQueueBonus:0,cameraZoom:1,recruitCap:2},{id:"stand",minFranchises:1,width:5.8,depth:3.2,staffVisible:2,ovenSlotsBonus:1,maxQueueBonus:2,cameraZoom:1.16,recruitCap:4},{id:"shop",minFranchises:2,width:7.6,depth:5,staffVisible:3,ovenSlotsBonus:2,maxQueueBonus:4,cameraZoom:1.46,recruitCap:6}],requirementExponent:1.3,_requirementNote:"Each franchise must be earned again. The cash a stand must earn before franchising is milestoneLifetimeCash x (franchises so far + 1) ^ requirementExponent, so it grows steadily instead of exponentially.",trafficPerFranchise:.25,_trafficNote:'Each franchise brings more customers, with no upper limit: spawn rate x (1 + trafficPerFranchise * franchises). Add "trafficMaxMult" here to cap it.',ovenSpeedPerFranchise:.6,minBakeSeconds:1.5,_ovenNote:"Ovens bake faster with each franchise: bake time = style bake time / (1 + ovenSpeedPerFranchise x franchises), never below minBakeSeconds."},events:{rainyDay:{durationSeconds:150,weight:1,spawnMult:1.5,patienceDrainMult:1.25,cashMult:1,styleDemand:{}},foodFestival:{durationSeconds:150,weight:1,spawnMult:1.2,patienceDrainMult:1,cashMult:1.1,styleDemand:{pepperoni:3}},doubleCash:{durationSeconds:120,weight:0,spawnMult:1,patienceDrainMult:1,cashMult:2,styleDemand:{},_note:"Not picked at random (weight 0). Started by the happy-hour mini game."}},goals:[{id:"goal.cashier",condition:{type:"staffLevel",role:"cashier",value:1}},{id:"goal.pepperoni",condition:{type:"lifetime",value:600}},{id:"goal.cook",condition:{type:"staffLevel",role:"cook",value:1}},{id:"goal.neon",condition:{type:"upgradeLevel",upgrade:"neon",value:1}},{id:"goal.franchise",condition:{type:"lifetime",value:2e4}}],tutorial:[{id:"t1",textKey:"tut.1",highlight:"customers",check:{stat:"ordersTaken",gte:1}},{id:"t2",textKey:"tut.2",highlight:"stretch",check:{stat:"manualStretch",gte:1}},{id:"t3",textKey:"tut.3",highlight:"top",check:{stat:"manualTopping",gte:1}},{id:"t4",textKey:"tut.4",highlight:"oven",check:{stat:"manualLoad",gte:1}},{id:"t5",textKey:"tut.5",highlight:"serve",check:{stat:"served",gte:1}},{id:"t6",textKey:"tut.6",highlight:"shop",check:{stat:"upgradesBought",gte:1}},{id:"t7",textKey:"tut.7",highlight:"shop",check:{stat:"staffHired",gte:1}}],monetizationStubs:{offlineBoostAd:{multiplier:2,placeholderSeconds:1.5},starterPack:{priceLabel:"$2.99",placeholder:!0},ovenSkins:["skin.classic","skin.neon","skin.copper"]},_empireNote:'Empire upgrades (upgrades with group "empire") need a number of franchises before they can be bought, and they reset with each franchise like everything else.',recruit:{requiresFranchises:1,cashier:{baseCost:2500,growth:1.6},cook:{baseCost:3500,growth:1.6},offlineEfficiencyPerRecruit:.02,_note:"Extra employees, bought after franchising. Each one needs the role hired first. Caps per stand size are in prestige.tiers (recruitCap)."},happyHour:{intervalSeconds:480,targets:7,needed:4,spawnEverySeconds:.75,targetLifetimeSeconds:.95,_note:"A tap mini game that becomes available every intervalSeconds of game time. Hitting `needed` of `targets` doubles all money for the event duration."},shops:{maxShops:4,requiresFranchises:1,baseCost:2e5,growth:3,multiplierPerShop:2,_note:"Each extra shop doubles customers, employees, oven capacity and money per second. Shops after the first cost baseCost x growth^(shops already open - 1)."},queueHardCap:40};var Ol={"app.title":"Slice Street","app.version":"Prototype v0.1","hud.cash":"Cash","hud.rate":"+{rate}/s","hud.goal":"Next: {goal}","hud.goalDone":"All goals done!","hud.paused":"Paused","action.customers":"Order","action.stretch":"Stretch","action.top":"Topping","action.oven":"Oven","action.serve":"Serve","action.shop":"Shop","action.settings":"Settings","action.close":"Close","action.buy":"Buy {cost}","action.maxed":"Max","action.hire":"Hire {cost}","action.upgrade":"Upgrade {cost}","action.collect":"Collect","action.adDouble":"Watch ad: 2x","action.adDoubleHint":"Optional. Ads are always player-initiated.","action.franchise":"Franchise","action.cancel":"Cancel","action.reset":"Reset save","action.confirmReset":"Really erase all progress?","shop.title":"Shop","shop.upgrades":"Upgrades","shop.staff":"Staff","shop.franchise":"Franchise","shop.starterPack":"Starter pack","shop.starterPackDesc":"Placeholder. Not available in the prototype.","shop.ovenSkins":"Oven skins","shop.ovenSkinsDesc":"Cosmetic only. Placeholder list.","upgrade.oven.name":"Bigger oven","upgrade.oven.desc":"Bake {slots} pizzas at once","upgrade.counter.name":"Wider counter","upgrade.counter.desc":"Queue up to {slots} customers","upgrade.cheese.name":"Better cheese","upgrade.cheese.desc":"+{pct}% pizza value","upgrade.decor.name":"Pretty decor","upgrade.decor.desc":"+{pct}% foot traffic{item}","upgrade.neon.name":"Neon sign","upgrade.neon.desc":"+{pct}% foot traffic","upgrade.scooter.name":"Delivery scooter","staff.cashier.name":"Cashier","staff.cashier.desc":"Takes orders and hands out finished pizzas. Order time {secs}s.","staff.cook.name":"Cook","staff.cook.desc":"Stretches dough, adds toppings, loads the oven. Speed x{speed}.","staff.level":"Level {level}","staff.hired":"Working","style.margherita":"Margherita","style.pepperoni":"Pepperoni","style.veggie":"Veggie","style.seasonal":"Seasonal special","topping.pepperoni":"Pepperoni","topping.mushroom":"Mushroom","topping.olive":"Olive","topping.basil":"Basil","topping.pepper":"Pepper","customer.hungry":"Hungry","customer.chatty":"Chatty","customer.grumpy":"Grumpy","customer.name.1":"Dana","customer.name.2":"Mo","customer.name.3":"Priya","customer.name.4":"Sam","customer.name.5":"Ferdi","customer.wants":"Wants {topping}","customer.turnedAway":"Queue full, someone walked off","tut.1":"Tap a customer to take their order.","tut.2":"Stretch the dough: scroll the wheel or tap the arrow keys.","tut.3":"Pick the topping they want, then put it on the pizza.","tut.4":"Load the pizza. Click or press Space when the marker is in the green.","tut.5":"Tap the finished pizza to hand it over.","tut.6":"Nice! Spend some cash in the Shop.","tut.7":"Hire a cashier so orders run themselves.","tut.done":"Tutorial complete. Your stand is on its own now!","mini.dough.title":"Stretch the dough","mini.dough.hint":"Scroll the mouse wheel or tap the left and right arrow keys. Touch: swipe.","mini.top.title":"Add topping","mini.top.hint":"Click a topping, then click the pizza. Keys 1 to 3 pick, Space places.","mini.oven.title":"Slide it in","mini.oven.hint":"Click or press Space when the marker is in the green.","mini.oven.tap":"Tap!","toast.sale":"+{amount}","toast.tip":"+{tip} tip","toast.angry":"{name} left angry (-{penalty})","toast.ovenFull":"Oven is full. Wait for a slot.","toast.noPizza":"Nothing needs that right now.","toast.notEnough":"Not enough cash yet.","toast.eventStart":"{event} started!","toast.eventEnd":"{event} is over.","toast.staffIdle":"{role} is idle. Give them work!","toast.bought":"Bought {item}.","toast.hired":"{role} hired!","toast.comingSoon":"Coming soon (placeholder).","toast.adStub":"Ad placeholder finished.","toast.franchised":"Franchised! Multiplier now x{mult}.","event.rainyDay.name":"Rainy day","event.rainyDay.desc":"More customers, but they are in a hurry.","event.foodFestival.name":"Food festival","event.foodFestival.desc":"Pepperoni demand is through the roof.","collect.title":"Welcome back!","collect.body":"Your stand kept busy for {duration}.","collect.earned":"You earned {amount}","collect.capped":"Away time is capped at {cap}.","collect.boosted":"Doubled with the ad boost.","franchise.title":"Franchise your stand","franchise.explain":"Start again from scratch and keep permanent bonuses. Each franchise adds +{bonus}% cash and +{traffic}% customers for good, and your place grows: cart, then a big stand, then a pizza shop with more staff. Every franchise has to be earned again, and each one needs more than the last.","franchise.resets":"Resets: cash, upgrades, staff, queue, pizzas, and you go back to the corner.","franchise.keeps":"Keeps: franchise points, unlocked pizza styles (recipes), unlocked locations, the tutorial, settings, and lifetime stats.","franchise.gain":"You will gain {points} franchise point(s).","franchise.locked":"Earn {target} at this stand to franchise. So far: {have}.","franchise.points":"Franchise points: {points}","settings.title":"Settings","settings.sound":"Sound","settings.notify":"Notify me (opt-in)","settings.notifyDesc":"Offline earnings and idle staff. Off by default.","settings.version":"Version","stats.lifetime":"Lifetime cash: {amount}","debug.title":"Debug","debug.addCash":"+1,000 cash","debug.addCashBig":"+20,000 cash","debug.skip":"Skip 1 hour","debug.rain":"Trigger rain","debug.festival":"Trigger festival","debug.night":"Toggle time of day","debug.away":"Simulate 8h away","debug.franchiseReady":"Make franchise-ready","debug.resetAll":"Wipe save","debug.close":"Close debug","welcome.step":"Your cart is wobbly, but the lunch crowd is coming.","offline.hint":"Earnings accrue while the app is closed, capped at 8 hours.","location.corner.name":"Corner of Main & Sunny","goal.cashier":"Hire a cashier","goal.pepperoni":"Unlock pepperoni","goal.cook":"Hire a cook","goal.neon":"Buy a neon sign","goal.franchise":"Reach franchise milestone","toast.customerLeft":"{name} left","action.soon":"Soon","toast.unlocked":"New recipe unlocked: {style}","toast.offlineSaved":"Stand is saved. Come back for offline earnings.","toast.cashDebug":"Added {amount}","staff.notHired":"Not hired","location.corner.desc":"Your first stand. Steady lunch crowd.","location.side.name":"Side street","location.side.desc":"Busier foot traffic and a pepperoni-hungry lunch crowd. Unlocks at 3,000 lifetime cash.","location.current":"Here now","location.locked":"Reach {target} lifetime cash to unlock.","shop.locations":"Locations","action.move":"Move here","toast.locationMoved":"Stand moved to {location}. Queue cleared.","toast.locationUnlocked":"New location unlocked: {location}","action.locked":"Locked","settings.keys":"Keys: 1 to 6 for the action bar, M mute, Esc closes a window. Click the pizzas and customers directly.","sign.menu.title":"Menu","sign.neon":"Open!","sign.sandwich":"Fresh pizza, hot now!","mini.oven.stopped.good":"Perfect bake!","mini.oven.stopped.miss":"Close enough. It still bakes.","decor.step.flowers":"flower boxes","decor.step.festoon":"festoon lights","decor.step.bunting":"bunting","decor.step.table":"a bistro table","decor.step.lanterns":"lanterns","decor.step.carpet":"a red carpet","decor.step.secondTable":"a second table and olive trees","decor.step.balloons":"balloons","decor.step.flags":"rooftop flags","decor.step.statue":"a golden pizza","toast.decorAdded":"New decoration: {item}","tier.cart":"Pizza cart","tier.stand":"Big pizza stand","tier.shop":"Pizza shop","franchise.next":"Next: {tier}","franchise.now":"Now: {tier}","toast.tierUp":"Your place grew into: {tier}","sign.franchise":"Franchise {count}","staff.visible":"Up to {count} visible at this place","settings.graphics":"Graphics","settings.graphicsDesc":"Auto lowers detail if the game runs slowly.","settings.graphics.auto":"Auto","settings.graphics.high":"High","settings.graphics.low":"Low","franchise.ready":"Ready to franchise.","franchise.nextCost":"The next franchise will need {target} earned at the new stand.","toast.franchiseReady":"You can franchise now!","franchise.traffic":"Customers: +{pct}% from franchises.","franchise.trafficNext":"After this franchise: +{pct}% customers.","shop.empire":"Empire","shop.empireDesc":"Big upgrades that open up only after franchising. Each franchise resets them, like everything else.","shop.needsFranchise":"Needs {n} franchise(s)","upgrade.marketing.name":"Empire marketing","upgrade.marketing.desc":"+{pct}% customers on top of everything else","upgrade.pizzaSchool.name":"Pizza school","upgrade.pizzaSchool.desc":"+{pct}% pizza value","upgrade.megaOven.name":"Industrial ovens","upgrade.megaOven.desc":"Bake {slots} more pizzas at once","franchise.ovens":"Ovens: x{x} speed.","settings.look":"Art style","settings.lookDesc":"3D is the full look. 2D is flat storybook art, same game.","settings.look.3d":"3D","settings.look.2d":"2D","shop.recruit":"Recruit extra staff","shop.recruitLocked":"Franchise once to recruit extra staff.","recruit.cashier.name":"Extra cashier","recruit.cook.name":"Extra cook","recruit.cashier.desc":"Each extra cashier takes orders at the same time. Recruited: {n} of {max}.","recruit.cook.desc":"Each extra cook works on a different pizza at the same time. Recruited: {n} of {max}.","recruit.needHire":"Hire a {role} first.","action.recruit":"Recruit {cost}","toast.recruited":"Recruited an extra {role}.","bonus.label":"Happy hour","mini.happy.title":"Happy hour","mini.happy.hint":"Tap the gold coins before they fade. Get {needed} to double all money for 2 minutes.","mini.happy.count":"Coins: {hits} of {total}","mini.happy.coin":"Gold coin","mini.happy.win":"Happy hour! Double money for 2 minutes.","mini.happy.miss":"So close! Come back in a few minutes.","toast.bonusReady":"Happy hour is ready. Look for the x2 button.","event.doubleCash.name":"Double money","event.doubleCash.desc":"Every sale pays double.","shop.shops":"More shops","shop.openShop":"Open another shop","shop.shopsDesc":"Each shop doubles your customers, employees and money per second. Open: {open} of {max}. Each extra shop doubles again.","shop.shopsLocked":"Franchise {n} time(s) to open another shop.","shop.allOpen":"All shops are open.","action.open":"Open {cost}","toast.shopOpened":"Shop {n} is open! Customers now split between your shops.","sign.shop":"Shop {n}"};var Fl=["corner","sideStreet"];var zl={id:"corner",nameKey:"location.corner.name",descKey:"location.corner.desc",unlock:{type:"start"},economy:{trafficMult:1,styleDemand:{}},_note:"Stations and the stand itself are laid out in code (src/render/stand.js layoutFor), because they depend on the stand tier. This file is the street around it.",queueStart:[-2.2,0,4.4],queueStep:[.78,0,.9],_queueNote:"queueStep: x = column step (queueRowLength per row, filling left to right), z = row depth, toward the camera.",queueRowLength:4,camera:{position:[0,6.6,12.8],target:[0,1.45,.7],fov:46},props:[{type:"road",z:-8,width:7},{type:"building",pos:[-27.5,0,-16.2],size:[7,9.5,6],color:"#e07a5f",awning:"#d8402f"},{type:"building",pos:[-20.5,0,-16.2],size:[7,12.5,6],color:"#f2cc8f",awning:"#2f7d6a"},{type:"building",pos:[-14,0,-16.2],size:[6,8.5,6],color:"#81b29a",awning:"#e9a23b"},{type:"building",pos:[-7,0,-16.2],size:[8,13.5,6],color:"#e9c46a",awning:"#4a6fa5"},{type:"building",pos:[0,0,-16.2],size:[6,10,6],color:"#d9a5a0",awning:"#d8402f"},{type:"building",pos:[6.5,0,-16.2],size:[7,11.5,6],color:"#a8c5da",awning:"#2f7d6a"},{type:"building",pos:[13,0,-16.2],size:[6,9,6],color:"#f4a261",awning:"#e9a23b"},{type:"building",pos:[19.5,0,-16.2],size:[7,12,6],color:"#c9b8e0",awning:"#4a6fa5"},{type:"building",pos:[26.5,0,-16.2],size:[7,10.5,6],color:"#f0d9b5",awning:"#d8402f"},{type:"tree",pos:[-17,0,-12.4],scale:.95},{type:"tree",pos:[-10.5,0,-12.4],scale:.95},{type:"tree",pos:[-3.5,0,-12.4],scale:.95},{type:"tree",pos:[3.5,0,-12.4],scale:.95},{type:"tree",pos:[10,0,-12.4],scale:.95},{type:"tree",pos:[17,0,-12.4],scale:.95},{type:"building",pos:[-17.5,0,1.5],size:[7,11,12],color:"#f0d9b5",awning:"#2f7d6a"},{type:"building",pos:[18,0,1],size:[7,13,12],color:"#d9a5a0",awning:"#4a6fa5"},{type:"car",pos:[-8.5,0,-5.6],color:"#d8402f",rot:0},{type:"car",pos:[8.8,0,-5.6],color:"#3d9a8b",rot:0},{type:"lamp",pos:[-6.2,0,-3.4],light:!0},{type:"lamp",pos:[6,0,-3.4],light:!0},{type:"lamp",pos:[-11.5,0,-3.4]},{type:"lamp",pos:[12,0,-3.4]},{type:"tree",pos:[-7.2,0,1.2],scale:1.05},{type:"tree",pos:[8.2,0,2.2],scale:1},{type:"bush",pos:[-8.6,0,3.4]},{type:"bush",pos:[9.4,0,4.6]},{type:"bench",pos:[6.6,0,5.6]},{type:"bin",pos:[-5.8,0,3.6]},{type:"hydrant",pos:[4.9,0,-3.5]},{type:"planter",pos:[-5.4,0,6.2]},{type:"planter",pos:[5.6,0,7.4]},{type:"sandwichBoard",pos:[1.9,0,6.6]}]};var kl={id:"sideStreet",nameKey:"location.side.name",descKey:"location.side.desc",unlock:{type:"lifetime",value:3e3},economy:{trafficMult:1.35,styleDemand:{pepperoni:2}},_note:"Stations and the stand itself are laid out in code (src/render/stand.js layoutFor), because they depend on the stand tier. This file is the street around it.",queueStart:[-2.2,0,4.4],queueStep:[.78,0,.9],_queueNote:"queueStep: x = column step (queueRowLength per row, filling left to right), z = row depth, toward the camera.",queueRowLength:4,camera:{position:[0,6.6,12.8],target:[0,1.45,.7],fov:46},props:[{type:"road",z:-8,width:7},{type:"building",pos:[-27.5,0,-16.2],size:[7,11,6],color:"#8ab17d",awning:"#4a6fa5"},{type:"building",pos:[-20.5,0,-16.2],size:[7,8.5,6],color:"#c9ada7",awning:"#d8402f"},{type:"building",pos:[-14,0,-16.2],size:[6,13,6],color:"#f2cc8f",awning:"#2f7d6a"},{type:"building",pos:[-7,0,-16.2],size:[8,9.5,6],color:"#e07a5f",awning:"#e9a23b"},{type:"building",pos:[0,0,-16.2],size:[6,12,6],color:"#9ec5d8",awning:"#4a6fa5"},{type:"building",pos:[6.5,0,-16.2],size:[7,10,6],color:"#f6bd60",awning:"#d8402f"},{type:"building",pos:[13,0,-16.2],size:[6,14,6],color:"#b8a9c9",awning:"#2f7d6a"},{type:"building",pos:[19.5,0,-16.2],size:[7,9,6],color:"#e5989b",awning:"#e9a23b"},{type:"building",pos:[26.5,0,-16.2],size:[7,11.5,6],color:"#a3b18a",awning:"#4a6fa5"},{type:"tree",pos:[-17,0,-12.4],scale:.95},{type:"tree",pos:[-10.5,0,-12.4],scale:.95},{type:"tree",pos:[-3.5,0,-12.4],scale:.95},{type:"tree",pos:[3.5,0,-12.4],scale:.95},{type:"tree",pos:[10,0,-12.4],scale:.95},{type:"tree",pos:[17,0,-12.4],scale:.95},{type:"building",pos:[-17.5,0,1.5],size:[7,13,12],color:"#c9ada7",awning:"#d8402f"},{type:"building",pos:[18,0,1],size:[7,10.5,12],color:"#8ab17d",awning:"#e9a23b"},{type:"car",pos:[-9.5,0,-5.6],color:"#e9c46a",rot:0},{type:"car",pos:[7.2,0,-5.6],color:"#4a6fa5",rot:0},{type:"lamp",pos:[-5.6,0,-3.4],light:!0},{type:"lamp",pos:[6.6,0,-3.4],light:!0},{type:"lamp",pos:[-12,0,-3.4]},{type:"lamp",pos:[12.5,0,-3.4]},{type:"tree",pos:[-8,0,2.4],scale:1},{type:"tree",pos:[7.6,0,1],scale:1.1},{type:"bush",pos:[8.8,0,3.6]},{type:"bush",pos:[-9.2,0,4.8]},{type:"bench",pos:[-6.4,0,5.2]},{type:"bin",pos:[6,0,3.4]},{type:"hydrant",pos:[-4.9,0,-3.5]},{type:"planter",pos:[5.6,0,6.4]},{type:"planter",pos:[-5.6,0,7.2]},{type:"sandwichBoard",pos:[1.9,0,6.6]}]};var sa={corner:zl,sideStreet:kl},Bl={};for(let n of Fl)sa[n]?Bl[sa[n].id]=sa[n]:console.warn("[bundle] location listed in index.json but not bundled:",n);globalThis.__PIZZA_DATA__={economy:Nl,strings:Ol,locations:Bl};var Nc="160";var Cf=0,Hl=1,Pf=2;var wo=1,Lf=2,Dn=3,jn=0,kt=1,dn=2;var Jn=0,rs=1,kr=2,Vl=3,Gl=4,If=5,yi=100,Df=101,Uf=102,Wl=103,Xl=104,Nf=200,Of=201,Ff=202,zf=203,Va=204,Ga=205,kf=206,Bf=207,Hf=208,Vf=209,Gf=210,Wf=211,Xf=212,qf=213,Yf=214,Zf=0,$f=1,Jf=2,Br=3,Kf=4,Qf=5,jf=6,ep=7,Eo=0,tp=1,np=2,Kn=0,ip=1,sp=2,rp=3,Oc=4,op=5,ap=6;var Mu=300,cs=301,ls=302,Wa=303,Xa=304,To=306,Os=1e3,fn=1001,qa=1002,Gt=1003,ql=1004;var ra=1005;var jt=1006,cp=1007;var Fs=1008;var Qn=1009,lp=1010,hp=1011,Fc=1012,bu=1013,Zn=1014,$n=1015,zs=1016,Su=1017,wu=1018,vi=1020,up=1021,pn=1023,dp=1024,fp=1025,Mi=1026,hs=1027,pp=1028,Eu=1029,mp=1030,Tu=1031,Au=1033,oa=33776,aa=33777,ca=33778,la=33779,Yl=35840,Zl=35841,$l=35842,Jl=35843,Ru=36196,Kl=37492,Ql=37496,jl=37808,eh=37809,th=37810,nh=37811,ih=37812,sh=37813,rh=37814,oh=37815,ah=37816,ch=37817,lh=37818,hh=37819,uh=37820,dh=37821,ha=36492,fh=36494,ph=36495,gp=36283,mh=36284,gh=36285,_h=36286;var Hr=2300,Vr=2301,ua=2302,yh=2400,xh=2401,vh=2402;var Cu=3e3,bi=3001,_p=3200,yp=3201,zc=0,xp=1,en="",gt="srgb",On="srgb-linear",kc="display-p3",Ao="display-p3-linear",Gr="linear",lt="srgb",Wr="rec709",Xr="p3";var Bi=7680;var Mh=519,vp=512,Mp=513,bp=514,Pu=515,Sp=516,wp=517,Ep=518,Tp=519,bh=35044;var Sh="300 es",Ya=1035,Nn=2e3,qr=2001,ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var da=Math.PI/180,Za=180/Math.PI;function Zs(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Lt(n,e,t){return Math.max(e,Math.min(t,n))}function Ap(n,e){return(n%e+e)%e}function fa(n,e,t){return(1-t)*n+t*e}function wh(n){return(n&n-1)===0&&n!==0}function $a(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ts(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ue=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],x=s[1],y=s[4],b=s[7],R=s[2],E=s[5],A=s[8];return r[0]=o*_+a*x+l*R,r[3]=o*m+a*y+l*E,r[6]=o*p+a*b+l*A,r[1]=c*_+h*x+u*R,r[4]=c*m+h*y+u*E,r[7]=c*p+h*b+u*A,r[2]=d*_+f*x+g*R,r[5]=d*m+f*y+g*E,r[8]=d*p+f*b+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*c-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=d*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(pa.makeScale(e,t)),this}rotate(e){return this.premultiply(pa.makeRotation(-e)),this}translate(e,t){return this.premultiply(pa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},pa=new We;function Lu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Yr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Rp(){let n=Yr("canvas");return n.style.display="block",n}var Eh={};function Is(n){n in Eh||(Eh[n]=!0,console.warn(n))}var Th=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ah=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),dr={[On]:{transfer:Gr,primaries:Wr,toReference:n=>n,fromReference:n=>n},[gt]:{transfer:lt,primaries:Wr,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ao]:{transfer:Gr,primaries:Xr,toReference:n=>n.applyMatrix3(Ah),fromReference:n=>n.applyMatrix3(Th)},[kc]:{transfer:lt,primaries:Xr,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ah),fromReference:n=>n.applyMatrix3(Th).convertLinearToSRGB()}},Cp=new Set([On,Ao]),nt={enabled:!0,_workingColorSpace:On,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Cp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=dr[e].toReference,s=dr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return dr[n].primaries},getTransfer:function(n){return n===en?Gr:dr[n].transfer}};function os(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ma(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Hi,Zr=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hi===void 0&&(Hi=Yr("canvas")),Hi.width=e.width,Hi.height=e.height;let i=Hi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Hi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Yr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=os(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(os(t[i]/255)*255):t[i]=os(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Pp=0,$r=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Zs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ga(s[o].image)):r.push(ga(s[o]))}else r=ga(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function ga(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Zr.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Lp=0,tn=class n extends ei{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=fn,s=fn,r=jt,o=Fs,a=pn,l=Qn,c=n.DEFAULT_ANISOTROPY,h=en){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Zs(),this.name="",this.source=new $r(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===bi?gt:en),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Os:e.x=e.x-Math.floor(e.x);break;case fn:e.x=e.x<0?0:1;break;case qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Os:e.y=e.y-Math.floor(e.y);break;case fn:e.y=e.y<0?0:1;break;case qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===gt?bi:Cu}set encoding(e){Is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===bi?gt:en}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Mu;tn.DEFAULT_ANISOTROPY=1;var ut=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,b=(f+1)/2,R=(p+1)/2,E=(h+d)/4,A=(u+_)/4,N=(g+m)/4;return y>b&&y>R?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=E/i,r=A/i):b>R?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=E/s,r=N/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=A/r,s=N/r),this.set(i,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ja=class extends ei{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(Is("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===bi?gt:en),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new tn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new $r(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fn=class extends Ja{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Jr=class extends tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ka=class extends tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a,p=l*d+c*f+h*g+u*_,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let R=Math.sqrt(y),E=Math.atan2(R,p*x);m=Math.sin(m*E)/R,a=Math.sin(a*E)/R}let b=a*x;if(l=l*m+d*b,c=c*m+f*b,h=h*m+g*b,u=u*m+_*b,m===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _a.copy(this).projectOnVector(e),this.sub(_a)}reflect(e){return this.sub(_a.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_a=new C,Rh=new Mn,Si=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ln):ln.fromBufferAttribute(r,o),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fr.copy(i.boundingBox)),fr.applyMatrix4(e.matrixWorld),this.union(fr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(As),pr.subVectors(this.max,As),Vi.subVectors(e.a,As),Gi.subVectors(e.b,As),Wi.subVectors(e.c,As),Gn.subVectors(Gi,Vi),Wn.subVectors(Wi,Gi),fi.subVectors(Vi,Wi);let t=[0,-Gn.z,Gn.y,0,-Wn.z,Wn.y,0,-fi.z,fi.y,Gn.z,0,-Gn.x,Wn.z,0,-Wn.x,fi.z,0,-fi.x,-Gn.y,Gn.x,0,-Wn.y,Wn.x,0,-fi.y,fi.x,0];return!ya(t,Vi,Gi,Wi,pr)||(t=[1,0,0,0,1,0,0,0,1],!ya(t,Vi,Gi,Wi,pr))?!1:(mr.crossVectors(Gn,Wn),t=[mr.x,mr.y,mr.z],ya(t,Vi,Gi,Wi,pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Rn=[new C,new C,new C,new C,new C,new C,new C,new C],ln=new C,fr=new Si,Vi=new C,Gi=new C,Wi=new C,Gn=new C,Wn=new C,fi=new C,As=new C,pr=new C,mr=new C,pi=new C;function ya(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){pi.fromArray(n,r);let a=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),l=e.dot(pi),c=t.dot(pi),h=i.dot(pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ip=new Si,Rs=new C,xa=new C,wi=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Ip.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rs.subVectors(e,this.center);let t=Rs.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Rs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rs.copy(e.center).add(xa)),this.expandByPoint(Rs.copy(e.center).sub(xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Cn=new C,va=new C,gr=new C,Xn=new C,Ma=new C,_r=new C,ba=new C,us=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){va.copy(e).add(t).multiplyScalar(.5),gr.copy(t).sub(e).normalize(),Xn.copy(this.origin).sub(va);let r=e.distanceTo(t)*.5,o=-this.direction.dot(gr),a=Xn.dot(this.direction),l=-Xn.dot(gr),c=Xn.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(va).addScaledVector(gr,d),f}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);let i=Cn.dot(this.direction),s=Cn.dot(Cn)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,i,s,r){Ma.subVectors(t,e),_r.subVectors(i,e),ba.crossVectors(Ma,_r);let o=this.direction.dot(ba),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xn.subVectors(this.origin,e);let l=a*this.direction.dot(_r.crossVectors(Xn,_r));if(l<0)return null;let c=a*this.direction.dot(Ma.cross(Xn));if(c<0||l+c>o)return null;let h=-a*Xn.dot(ba);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},dt=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,d,f,g,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,d,f,g,_,m)}set(e,t,i,s,r,o,a,l,c,h,u,d,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Xi.setFromMatrixColumn(e,0).length(),r=1/Xi.setFromMatrixColumn(e,1).length(),o=1/Xi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dp,e,Up)}lookAt(e,t,i){let s=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),qn.crossVectors(i,Zt),qn.lengthSq()===0&&(Math.abs(i.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),qn.crossVectors(i,Zt)),qn.normalize(),yr.crossVectors(Zt,qn),s[0]=qn.x,s[4]=yr.x,s[8]=Zt.x,s[1]=qn.y,s[5]=yr.y,s[9]=Zt.y,s[2]=qn.z,s[6]=yr.z,s[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],x=i[3],y=i[7],b=i[11],R=i[15],E=s[0],A=s[4],N=s[8],M=s[12],S=s[1],D=s[5],z=s[9],W=s[13],P=s[2],F=s[6],H=s[10],$=s[14],Y=s[3],Z=s[7],Q=s[11],te=s[15];return r[0]=o*E+a*S+l*P+c*Y,r[4]=o*A+a*D+l*F+c*Z,r[8]=o*N+a*z+l*H+c*Q,r[12]=o*M+a*W+l*$+c*te,r[1]=h*E+u*S+d*P+f*Y,r[5]=h*A+u*D+d*F+f*Z,r[9]=h*N+u*z+d*H+f*Q,r[13]=h*M+u*W+d*$+f*te,r[2]=g*E+_*S+m*P+p*Y,r[6]=g*A+_*D+m*F+p*Z,r[10]=g*N+_*z+m*H+p*Q,r[14]=g*M+_*W+m*$+p*te,r[3]=x*E+y*S+b*P+R*Y,r[7]=x*A+y*D+b*F+R*Z,r[11]=x*N+y*z+b*H+R*Q,r[15]=x*M+y*W+b*$+R*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+_*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+t*c*u-t*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+p*(-s*a*h-t*l*u+t*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],x=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,y=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,b=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,R=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,E=t*x+i*y+s*b+r*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/E;return e[0]=x*A,e[1]=(_*d*r-u*m*r-_*s*f+i*m*f+u*s*p-i*d*p)*A,e[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*A,e[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*A,e[4]=y*A,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*A,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*A,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*A,e[8]=b*A,e[9]=(g*u*r-h*_*r-g*i*f+t*_*f+h*i*p-t*u*p)*A,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*p+t*a*p)*A,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*f-t*a*f)*A,e[12]=R*A,e[13]=(h*_*s-g*u*s+g*i*d-t*_*d-h*i*m+t*u*m)*A,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*m-t*a*m)*A,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*d+t*a*d)*A,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,x=l*c,y=l*h,b=l*u,R=i.x,E=i.y,A=i.z;return s[0]=(1-(_+p))*R,s[1]=(f+b)*R,s[2]=(g-y)*R,s[3]=0,s[4]=(f-b)*E,s[5]=(1-(d+p))*E,s[6]=(m+x)*E,s[7]=0,s[8]=(g+y)*A,s[9]=(m-x)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Xi.set(s[0],s[1],s[2]).length(),o=Xi.set(s[4],s[5],s[6]).length(),a=Xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],hn.copy(this);let c=1/r,h=1/o,u=1/a;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,t.setFromRotationMatrix(hn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Nn){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),f,g;if(a===Nn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===qr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Nn){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*c,f=(i+s)*h,g,_;if(a===Nn)g=(o+r)*u,_=-2*u;else if(a===qr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Xi=new C,hn=new dt,Dp=new C(0,0,0),Up=new C(1,1,1),qn=new C,yr=new C,Zt=new C,Ch=new dt,Ph=new Mn,ds=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ch.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ch,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ph.setFromEuler(this),this.setFromQuaternion(Ph,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ds.DEFAULT_ORDER="XYZ";var ks=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Np=0,Lh=new C,qi=new Mn,Pn=new dt,xr=new C,Cs=new C,Op=new C,Fp=new Mn,Ih=new C(1,0,0),Dh=new C(0,1,0),Uh=new C(0,0,1),zp={type:"added"},kp={type:"removed"},It=class n extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=Zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new C,t=new ds,i=new Mn,s=new C(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new We}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ks,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.multiply(qi),this}rotateOnWorldAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.premultiply(qi),this}rotateX(e){return this.rotateOnAxis(Ih,e)}rotateY(e){return this.rotateOnAxis(Dh,e)}rotateZ(e){return this.rotateOnAxis(Uh,e)}translateOnAxis(e,t){return Lh.copy(e).applyQuaternion(this.quaternion),this.position.add(Lh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ih,e)}translateY(e){return this.translateOnAxis(Dh,e)}translateZ(e){return this.translateOnAxis(Uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?xr.copy(e):xr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(Cs,xr,this.up):Pn.lookAt(xr,Cs,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(Pn),this.quaternion.premultiply(qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(zp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kp)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,Op),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,Fp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};It.DEFAULT_UP=new C(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var un=new C,Ln=new C,Sa=new C,In=new C,Yi=new C,Zi=new C,Nh=new C,wa=new C,Ea=new C,Ta=new C,vr=!1,ns=class n{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),un.subVectors(e,t),s.cross(un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){un.subVectors(s,t),Ln.subVectors(i,t),Sa.subVectors(e,t);let o=un.dot(un),a=un.dot(Ln),l=un.dot(Sa),c=Ln.dot(Ln),h=Ln.dot(Sa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getUV(e,t,i,s,r,o,a,l){return vr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vr=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,In.x),l.addScaledVector(o,In.y),l.addScaledVector(a,In.z),l)}static isFrontFacing(e,t,i,s){return un.subVectors(i,t),Ln.subVectors(e,t),un.cross(Ln).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),un.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return vr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vr=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Yi.subVectors(s,i),Zi.subVectors(r,i),wa.subVectors(e,i);let l=Yi.dot(wa),c=Zi.dot(wa);if(l<=0&&c<=0)return t.copy(i);Ea.subVectors(e,s);let h=Yi.dot(Ea),u=Zi.dot(Ea);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Yi,o);Ta.subVectors(e,r);let f=Yi.dot(Ta),g=Zi.dot(Ta);if(g>=0&&f<=g)return t.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Zi,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Nh.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Nh,a);let p=1/(m+_+d);return o=_*p,a=d*p,t.copy(i).addScaledVector(Yi,o).addScaledVector(Zi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function Aa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var me=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=nt.workingColorSpace){if(e=Ap(e,1),t=Lt(t,0,1),i=Lt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Aa(o,r,e+1/3),this.g=Aa(o,r,e),this.b=Aa(o,r,e-1/3)}return nt.toWorkingColorSpace(this,s),this}setStyle(e,t=gt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){let i=Iu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}copyLinearToSRGB(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return nt.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Lt(Ft.r*255,0,255))*65536+Math.round(Lt(Ft.g*255,0,255))*256+Math.round(Lt(Ft.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Ft.copy(this),t);let i=Ft.r,s=Ft.g,r=Ft.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=gt){nt.fromWorkingColorSpace(Ft.copy(this),e);let t=Ft.r,i=Ft.g,s=Ft.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(Mr);let i=fa(Yn.h,Mr.h,t),s=fa(Yn.s,Mr.s,t),r=fa(Yn.l,Mr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ft=new me;me.NAMES=Iu;var Bp=0,bn=class extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Zs(),this.name="",this.type="Material",this.blending=rs,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Va,this.blendDst=Ga,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(i.blending=this.blending),this.side!==jn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Va&&(i.blendSrc=this.blendSrc),this.blendDst!==Ga&&(i.blendDst=this.blendDst),this.blendEquation!==yi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Br&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},vt=class extends bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var bt=new C,br=new ue,Xt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=bh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXY(t,br.x,br.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ts(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ts(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ts(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ts(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ts(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),s=Wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),s=Wt(s,this.array),r=Wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bh&&(e.usage=this.usage),e}};var Kr=class extends Xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Qr=class extends Xt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var $e=class extends Xt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var Hp=0,Qt=new dt,Ra=new It,$i=new C,$t=new Si,Ps=new Si,Ct=new C,_t=class n extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=Zs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lu(e)?Qr:Kr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new We().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,i){return Qt.makeTranslation(e,t,i),this.applyMatrix4(Qt),this}scale(e,t,i){return Qt.makeScale(e,t,i),this.applyMatrix4(Qt),this}lookAt(e){return Ra.lookAt(e),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new $e(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){let i=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ps.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors($t.min,Ps.min),$t.expandByPoint(Ct),Ct.addVectors($t.max,Ps.max),$t.expandByPoint(Ct)):($t.expandByPoint(Ps.min),$t.expandByPoint(Ps.max))}$t.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ct.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ct));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ct.fromBufferAttribute(a,c),l&&($i.fromBufferAttribute(e,c),Ct.add($i)),s=Math.max(s,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let S=0;S<a;S++)c[S]=new C,h[S]=new C;let u=new C,d=new C,f=new C,g=new ue,_=new ue,m=new ue,p=new C,x=new C;function y(S,D,z){u.fromArray(s,S*3),d.fromArray(s,D*3),f.fromArray(s,z*3),g.fromArray(o,S*2),_.fromArray(o,D*2),m.fromArray(o,z*2),d.sub(u),f.sub(u),_.sub(g),m.sub(g);let W=1/(_.x*m.y-m.x*_.y);isFinite(W)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(W),x.copy(f).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(W),c[S].add(p),c[D].add(p),c[z].add(p),h[S].add(x),h[D].add(x),h[z].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let S=0,D=b.length;S<D;++S){let z=b[S],W=z.start,P=z.count;for(let F=W,H=W+P;F<H;F+=3)y(i[F+0],i[F+1],i[F+2])}let R=new C,E=new C,A=new C,N=new C;function M(S){A.fromArray(r,S*3),N.copy(A);let D=c[S];R.copy(D),R.sub(A.multiplyScalar(A.dot(D))).normalize(),E.crossVectors(N,D);let W=E.dot(h[S])<0?-1:1;l[S*4]=R.x,l[S*4+1]=R.y,l[S*4+2]=R.z,l[S*4+3]=W}for(let S=0,D=b.length;S<D;++S){let z=b[S],W=z.start,P=z.count;for(let F=W,H=W+P;F<H;F+=3)M(i[F+0]),M(i[F+1]),M(i[F+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Xt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oh=new dt,mi=new us,Sr=new wi,Fh=new C,Ji=new C,Ki=new C,Qi=new C,Ca=new C,wr=new C,Er=new ue,Tr=new ue,Ar=new ue,zh=new C,kh=new C,Bh=new C,Rr=new C,Cr=new C,Ce=class extends It{constructor(e=new _t,t=new vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){wr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Ca.fromBufferAttribute(u,e),o?wr.addScaledVector(Ca,h):wr.addScaledVector(Ca.sub(t),h))}t.add(wr)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sr.copy(i.boundingSphere),Sr.applyMatrix4(r),mi.copy(e.ray).recast(e.near),!(Sr.containsPoint(mi.origin)===!1&&(mi.intersectSphere(Sr,Fh)===null||mi.origin.distanceToSquared(Fh)>(e.far-e.near)**2))&&(Oh.copy(r).invert(),mi.copy(e.ray).applyMatrix4(Oh),!(i.boundingBox!==null&&mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=x,R=y;b<R;b+=3){let E=a.getX(b),A=a.getX(b+1),N=a.getX(b+2);s=Pr(this,p,e,i,c,h,u,E,A,N),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let x=a.getX(m),y=a.getX(m+1),b=a.getX(m+2);s=Pr(this,o,e,i,c,h,u,x,y,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=x,R=y;b<R;b+=3){let E=b,A=b+1,N=b+2;s=Pr(this,p,e,i,c,h,u,E,A,N),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let x=m,y=m+1,b=m+2;s=Pr(this,o,e,i,c,h,u,x,y,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Vp(n,e,t,i,s,r,o,a){let l;if(e.side===kt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===jn,a),l===null)return null;Cr.copy(a),Cr.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Cr);return c<t.near||c>t.far?null:{distance:c,point:Cr.clone(),object:n}}function Pr(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ji),n.getVertexPosition(l,Ki),n.getVertexPosition(c,Qi);let h=Vp(n,e,t,i,Ji,Ki,Qi,Rr);if(h){s&&(Er.fromBufferAttribute(s,a),Tr.fromBufferAttribute(s,l),Ar.fromBufferAttribute(s,c),h.uv=ns.getInterpolation(Rr,Ji,Ki,Qi,Er,Tr,Ar,new ue)),r&&(Er.fromBufferAttribute(r,a),Tr.fromBufferAttribute(r,l),Ar.fromBufferAttribute(r,c),h.uv1=ns.getInterpolation(Rr,Ji,Ki,Qi,Er,Tr,Ar,new ue),h.uv2=h.uv1),o&&(zh.fromBufferAttribute(o,a),kh.fromBufferAttribute(o,l),Bh.fromBufferAttribute(o,c),h.normal=ns.getInterpolation(Rr,Ji,Ki,Qi,zh,kh,Bh,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new C,materialIndex:0};ns.getNormal(Ji,Ki,Qi,u.normal),h.face=u}return h}var Ei=class n extends _t{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(u,2));function g(_,m,p,x,y,b,R,E,A,N,M){let S=b/A,D=R/N,z=b/2,W=R/2,P=E/2,F=A+1,H=N+1,$=0,Y=0,Z=new C;for(let Q=0;Q<H;Q++){let te=Q*D-W;for(let de=0;de<F;de++){let q=de*S-z;Z[_]=q*x,Z[m]=te*y,Z[p]=P,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[p]=E>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(de/A),u.push(1-Q/N),$+=1}}for(let Q=0;Q<N;Q++)for(let te=0;te<A;te++){let de=d+te+F*Q,q=d+te+F*(Q+1),ee=d+(te+1)+F*(Q+1),he=d+(te+1)+F*Q;l.push(de,q,he),l.push(q,ee,he),Y+=6}a.addGroup(f,Y,M),f+=Y,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function fs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Vt(n){let e={};for(let t=0;t<n.length;t++){let i=fs(n[t]);for(let s in i)e[s]=i[s]}return e}function Gp(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Du(n){return n.getRenderTarget()===null?n.outputColorSpace:nt.workingColorSpace}var Wp={clone:fs,merge:Vt},Xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xp,this.fragmentShader=qp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fs(e.uniforms),this.uniformsGroups=Gp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},jr=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=Nn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},zt=class extends jr{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Za*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(da*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Za*2*Math.atan(Math.tan(da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(da*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ji=-90,es=1,Qa=class extends It{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new zt(ji,es,e,t);s.layers=this.layers,this.add(s);let r=new zt(ji,es,e,t);r.layers=this.layers,this.add(r);let o=new zt(ji,es,e,t);o.layers=this.layers,this.add(o);let a=new zt(ji,es,e,t);a.layers=this.layers,this.add(a);let l=new zt(ji,es,e,t);l.layers=this.layers,this.add(l);let c=new zt(ji,es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Nn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},eo=class extends tn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:cs,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ja=class extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Is("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===bi?gt:en),this.texture=new eo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ei(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kt,blending:Jn});r.uniforms.tEquirect.value=t;let o=new Ce(s,r),a=t.minFilter;return t.minFilter===Fs&&(t.minFilter=jt),new Qa(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Pa=new C,Yp=new C,Zp=new We,Un=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Pa.subVectors(i,t).cross(Yp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Pa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Zp.getNormalMatrix(e),s=this.coplanarPoint(Pa).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},gi=new wi,Lr=new C,Bs=class{constructor(e=new Un,t=new Un,i=new Un,s=new Un,r=new Un,o=new Un){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Nn){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],x=s[13],y=s[14],b=s[15];if(i[0].setComponents(l-r,d-c,m-f,b-p).normalize(),i[1].setComponents(l+r,d+c,m+f,b+p).normalize(),i[2].setComponents(l+o,d+h,m+g,b+x).normalize(),i[3].setComponents(l-o,d-h,m-g,b-x).normalize(),i[4].setComponents(l-a,d-u,m-_,b-y).normalize(),t===Nn)i[5].setComponents(l+a,d+u,m+_,b+y).normalize();else if(t===qr)i[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Lr.x=s.normal.x>0?e.max.x:e.min.x,Lr.y=s.normal.y>0?e.max.y:e.min.y,Lr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Uu(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function $p(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,d=c.usage,f=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=n.SHORT;else if(u instanceof Uint32Array)_=n.UNSIGNED_INT;else if(u instanceof Int32Array)_=n.INT;else if(u instanceof Int8Array)_=n.BYTE;else if(u instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,c),f.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){let p=g[_];t?n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var Sn=class n extends _t{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let x=p*d-o;for(let y=0;y<c;y++){let b=y*u-r;g.push(b,-x,0),_.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){let y=x+c*p,b=x+c*(p+1),R=x+1+c*(p+1),E=x+1+c*p;f.push(y,b,E),f.push(b,R,E)}this.setIndex(f),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Jp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kp=`#ifdef USE_ALPHAHASH
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
#endif`,Qp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,em=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,tm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nm=`#ifdef USE_AOMAP
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
#endif`,im=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sm=`#ifdef USE_BATCHING
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
#endif`,rm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,om=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,am=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lm=`#ifdef USE_IRIDESCENCE
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
#endif`,hm=`#ifdef USE_BUMPMAP
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
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xm=`#define PI 3.141592653589793
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
} // validated`,vm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mm=`vec3 transformedNormal = objectNormal;
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
#endif`,bm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Em=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Am=`
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
}`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Lm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
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
#endif`,Dm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Um=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Om=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fm=`#ifdef USE_GRADIENTMAP
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
}`,zm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,km=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vm=`uniform bool receiveShadow;
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
#endif`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Wm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zm=`PhysicalMaterial material;
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
#endif`,$m=`struct PhysicalMaterial {
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
}`,Jm=`
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
#endif`,Km=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,n0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,i0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,o0=`#if defined( USE_POINTS_UV )
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
#endif`,a0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h0=`#ifdef USE_MORPHNORMALS
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
#endif`,u0=`#ifdef USE_MORPHTARGETS
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
#endif`,d0=`#ifdef USE_MORPHTARGETS
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
#endif`,f0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,p0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,m0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,y0=`#ifdef USE_NORMALMAP
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
#endif`,x0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,v0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,E0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,U0=`float getShadowMask() {
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
}`,N0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O0=`#ifdef USE_SKINNING
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
#endif`,F0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,z0=`#ifdef USE_SKINNING
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
#endif`,k0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,G0=`#ifdef USE_TRANSMISSION
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
#endif`,W0=`#ifdef USE_TRANSMISSION
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
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J0=`uniform sampler2D t2D;
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
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`#include <common>
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
}`,ng=`#if DEPTH_PACKING == 3200
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
}`,ig=`#define DISTANCE
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
}`,sg=`#define DISTANCE
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`uniform float scale;
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
}`,cg=`uniform vec3 diffuse;
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
}`,lg=`#include <common>
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
}`,hg=`uniform vec3 diffuse;
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
}`,ug=`#define LAMBERT
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
}`,dg=`#define LAMBERT
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
}`,fg=`#define MATCAP
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
}`,pg=`#define MATCAP
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
}`,mg=`#define NORMAL
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
}`,gg=`#define NORMAL
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
}`,_g=`#define PHONG
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
}`,yg=`#define PHONG
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
}`,xg=`#define STANDARD
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
}`,vg=`#define STANDARD
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
}`,Mg=`#define TOON
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
}`,bg=`#define TOON
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
}`,Sg=`uniform float size;
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
}`,wg=`uniform vec3 diffuse;
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
}`,Eg=`#include <common>
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
}`,Tg=`uniform vec3 color;
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
}`,Ag=`uniform float rotation;
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:Jp,alphahash_pars_fragment:Kp,alphamap_fragment:Qp,alphamap_pars_fragment:jp,alphatest_fragment:em,alphatest_pars_fragment:tm,aomap_fragment:nm,aomap_pars_fragment:im,batching_pars_vertex:sm,batching_vertex:rm,begin_vertex:om,beginnormal_vertex:am,bsdfs:cm,iridescence_fragment:lm,bumpmap_pars_fragment:hm,clipping_planes_fragment:um,clipping_planes_pars_fragment:dm,clipping_planes_pars_vertex:fm,clipping_planes_vertex:pm,color_fragment:mm,color_pars_fragment:gm,color_pars_vertex:_m,color_vertex:ym,common:xm,cube_uv_reflection_fragment:vm,defaultnormal_vertex:Mm,displacementmap_pars_vertex:bm,displacementmap_vertex:Sm,emissivemap_fragment:wm,emissivemap_pars_fragment:Em,colorspace_fragment:Tm,colorspace_pars_fragment:Am,envmap_fragment:Rm,envmap_common_pars_fragment:Cm,envmap_pars_fragment:Pm,envmap_pars_vertex:Lm,envmap_physical_pars_fragment:Gm,envmap_vertex:Im,fog_vertex:Dm,fog_pars_vertex:Um,fog_fragment:Nm,fog_pars_fragment:Om,gradientmap_pars_fragment:Fm,lightmap_fragment:zm,lightmap_pars_fragment:km,lights_lambert_fragment:Bm,lights_lambert_pars_fragment:Hm,lights_pars_begin:Vm,lights_toon_fragment:Wm,lights_toon_pars_fragment:Xm,lights_phong_fragment:qm,lights_phong_pars_fragment:Ym,lights_physical_fragment:Zm,lights_physical_pars_fragment:$m,lights_fragment_begin:Jm,lights_fragment_maps:Km,lights_fragment_end:Qm,logdepthbuf_fragment:jm,logdepthbuf_pars_fragment:e0,logdepthbuf_pars_vertex:t0,logdepthbuf_vertex:n0,map_fragment:i0,map_pars_fragment:s0,map_particle_fragment:r0,map_particle_pars_fragment:o0,metalnessmap_fragment:a0,metalnessmap_pars_fragment:c0,morphcolor_vertex:l0,morphnormal_vertex:h0,morphtarget_pars_vertex:u0,morphtarget_vertex:d0,normal_fragment_begin:f0,normal_fragment_maps:p0,normal_pars_fragment:m0,normal_pars_vertex:g0,normal_vertex:_0,normalmap_pars_fragment:y0,clearcoat_normal_fragment_begin:x0,clearcoat_normal_fragment_maps:v0,clearcoat_pars_fragment:M0,iridescence_pars_fragment:b0,opaque_fragment:S0,packing:w0,premultiplied_alpha_fragment:E0,project_vertex:T0,dithering_fragment:A0,dithering_pars_fragment:R0,roughnessmap_fragment:C0,roughnessmap_pars_fragment:P0,shadowmap_pars_fragment:L0,shadowmap_pars_vertex:I0,shadowmap_vertex:D0,shadowmask_pars_fragment:U0,skinbase_vertex:N0,skinning_pars_vertex:O0,skinning_vertex:F0,skinnormal_vertex:z0,specularmap_fragment:k0,specularmap_pars_fragment:B0,tonemapping_fragment:H0,tonemapping_pars_fragment:V0,transmission_fragment:G0,transmission_pars_fragment:W0,uv_pars_fragment:X0,uv_pars_vertex:q0,uv_vertex:Y0,worldpos_vertex:Z0,background_vert:$0,background_frag:J0,backgroundCube_vert:K0,backgroundCube_frag:Q0,cube_vert:j0,cube_frag:eg,depth_vert:tg,depth_frag:ng,distanceRGBA_vert:ig,distanceRGBA_frag:sg,equirect_vert:rg,equirect_frag:og,linedashed_vert:ag,linedashed_frag:cg,meshbasic_vert:lg,meshbasic_frag:hg,meshlambert_vert:ug,meshlambert_frag:dg,meshmatcap_vert:fg,meshmatcap_frag:pg,meshnormal_vert:mg,meshnormal_frag:gg,meshphong_vert:_g,meshphong_frag:yg,meshphysical_vert:xg,meshphysical_frag:vg,meshtoon_vert:Mg,meshtoon_frag:bg,points_vert:Sg,points_frag:wg,shadow_vert:Eg,shadow_frag:Tg,sprite_vert:Ag,sprite_frag:Rg},re={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},vn={basic:{uniforms:Vt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Vt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new me(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Vt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Vt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Vt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new me(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Vt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Vt([re.points,re.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Vt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Vt([re.common,re.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Vt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Vt([re.sprite,re.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Vt([re.common,re.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Vt([re.lights,re.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};vn.physical={uniforms:Vt([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var Ir={r:0,b:0,g:0};function Cg(n,e,t,i,s,r,o){let a=new me(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(m,p){let x=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?_(a,l):y&&y.isColor&&(_(y,1),x=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===To)?(h===void 0&&(h=new Ce(new Ei(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:fs(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=nt.getTransfer(y.colorSpace)!==lt,(u!==y||d!==y.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ce(new Sn(2,2),new mn({name:"BackgroundMaterial",uniforms:fs(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=nt.getTransfer(y.colorSpace)!==lt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(Ir,Du(n)),i.buffers.color.setClear(Ir.r,Ir.g,Ir.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function Pg(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(P,F,H,$,Y){let Z=!1;if(o){let Q=_($,H,F);c!==Q&&(c=Q,f(c.object)),Z=p(P,$,H,Y),Z&&x(P,$,H,Y)}else{let Q=F.wireframe===!0;(c.geometry!==$.id||c.program!==H.id||c.wireframe!==Q)&&(c.geometry=$.id,c.program=H.id,c.wireframe=Q,Z=!0)}Y!==null&&t.update(Y,n.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,N(P,F,H,$),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function f(P){return i.isWebGL2?n.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?n.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,F,H){let $=H.wireframe===!0,Y=a[P.id];Y===void 0&&(Y={},a[P.id]=Y);let Z=Y[F.id];Z===void 0&&(Z={},Y[F.id]=Z);let Q=Z[$];return Q===void 0&&(Q=m(d()),Z[$]=Q),Q}function m(P){let F=[],H=[],$=[];for(let Y=0;Y<s;Y++)F[Y]=0,H[Y]=0,$[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:$,object:P,attributes:{},index:null}}function p(P,F,H,$){let Y=c.attributes,Z=F.attributes,Q=0,te=H.getAttributes();for(let de in te)if(te[de].location>=0){let ee=Y[de],he=Z[de];if(he===void 0&&(de==="instanceMatrix"&&P.instanceMatrix&&(he=P.instanceMatrix),de==="instanceColor"&&P.instanceColor&&(he=P.instanceColor)),ee===void 0||ee.attribute!==he||he&&ee.data!==he.data)return!0;Q++}return c.attributesNum!==Q||c.index!==$}function x(P,F,H,$){let Y={},Z=F.attributes,Q=0,te=H.getAttributes();for(let de in te)if(te[de].location>=0){let ee=Z[de];ee===void 0&&(de==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),de==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor));let he={};he.attribute=ee,ee&&ee.data&&(he.data=ee.data),Y[de]=he,Q++}c.attributes=Y,c.attributesNum=Q,c.index=$}function y(){let P=c.newAttributes;for(let F=0,H=P.length;F<H;F++)P[F]=0}function b(P){R(P,0)}function R(P,F){let H=c.newAttributes,$=c.enabledAttributes,Y=c.attributeDivisors;H[P]=1,$[P]===0&&(n.enableVertexAttribArray(P),$[P]=1),Y[P]!==F&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,F),Y[P]=F)}function E(){let P=c.newAttributes,F=c.enabledAttributes;for(let H=0,$=F.length;H<$;H++)F[H]!==P[H]&&(n.disableVertexAttribArray(H),F[H]=0)}function A(P,F,H,$,Y,Z,Q){Q===!0?n.vertexAttribIPointer(P,F,H,Y,Z):n.vertexAttribPointer(P,F,H,$,Y,Z)}function N(P,F,H,$){if(i.isWebGL2===!1&&(P.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let Y=$.attributes,Z=H.getAttributes(),Q=F.defaultAttributeValues;for(let te in Z){let de=Z[te];if(de.location>=0){let q=Y[te];if(q===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(q=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(q=P.instanceColor)),q!==void 0){let ee=q.normalized,he=q.itemSize,be=t.get(q);if(be===void 0)continue;let Me=be.buffer,Ne=be.type,Fe=be.bytesPerElement,Pe=i.isWebGL2===!0&&(Ne===n.INT||Ne===n.UNSIGNED_INT||q.gpuType===bu);if(q.isInterleavedBufferAttribute){let Ke=q.data,k=Ke.stride,Pt=q.offset;if(Ke.isInstancedInterleavedBuffer){for(let ge=0;ge<de.locationSize;ge++)R(de.location+ge,Ke.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ke.meshPerAttribute*Ke.count)}else for(let ge=0;ge<de.locationSize;ge++)b(de.location+ge);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let ge=0;ge<de.locationSize;ge++)A(de.location+ge,he/de.locationSize,Ne,ee,k*Fe,(Pt+he/de.locationSize*ge)*Fe,Pe)}else{if(q.isInstancedBufferAttribute){for(let Ke=0;Ke<de.locationSize;Ke++)R(de.location+Ke,q.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Ke=0;Ke<de.locationSize;Ke++)b(de.location+Ke);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let Ke=0;Ke<de.locationSize;Ke++)A(de.location+Ke,he/de.locationSize,Ne,ee,he*Fe,he/de.locationSize*Ke*Fe,Pe)}}else if(Q!==void 0){let ee=Q[te];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(de.location,ee);break;case 3:n.vertexAttrib3fv(de.location,ee);break;case 4:n.vertexAttrib4fv(de.location,ee);break;default:n.vertexAttrib1fv(de.location,ee)}}}}E()}function M(){z();for(let P in a){let F=a[P];for(let H in F){let $=F[H];for(let Y in $)g($[Y].object),delete $[Y];delete F[H]}delete a[P]}}function S(P){if(a[P.id]===void 0)return;let F=a[P.id];for(let H in F){let $=F[H];for(let Y in $)g($[Y].object),delete $[Y];delete F[H]}delete a[P.id]}function D(P){for(let F in a){let H=a[F];if(H[P.id]===void 0)continue;let $=H[P.id];for(let Y in $)g($[Y].object),delete $[Y];delete H[P.id]}}function z(){W(),h=!0,c!==l&&(c=l,f(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:z,resetDefaultState:W,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:b,disableUnusedAttributes:E}}function Lg(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let f,g;if(s)f=n,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Ig(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,b=o||e.has("OES_texture_float"),R=y&&b,E=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:R,maxSamples:E}}function Dg(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Un,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let x=r?0:i,y=x*4,b=p.clippingState||null;l.value=b,b=h(g,d,y,f);for(let R=0;R!==y;++R)b[R]=t[R];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,b=f;y!==_;++y,b+=4)o.copy(u[y]).applyMatrix4(x,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Ug(n){let e=new WeakMap;function t(o,a){return a===Wa?o.mapping=cs:a===Xa&&(o.mapping=ls),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Wa||a===Xa)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ja(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var to=class extends jr{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},is=4,Hh=[.125,.215,.35,.446,.526,.582],xi=20,La=new to,Vh=new me,Ia=null,Da=0,Ua=0,_i=(1+Math.sqrt(5))/2,ts=1/_i,Gh=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,_i,ts),new C(0,_i,-ts),new C(ts,0,_i),new C(-ts,0,_i),new C(_i,ts,0),new C(-_i,ts,0)],no=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Ia=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ia,Da,Ua),e.scissorTest=!1,Dr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cs||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ia=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:zs,format:pn,colorSpace:On,depthBuffer:!1},s=Wh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wh(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ng(r)),this._blurMaterial=Og(r,e,t)}return s}_compileMaterial(e){let t=new Ce(this._lodPlanes[0],e);this._renderer.compile(t,La)}_sceneToCubeUV(e,t,i,s){let a=new zt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Vh),h.toneMapping=Kn,h.autoClear=!1;let f=new vt({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),g=new Ce(new Ei,f),_=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Vh),_=!0);for(let p=0;p<6;p++){let x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let y=this._cubeSize;Dr(s,x*y,p>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===cs||e.mapping===ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ce(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Dr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,La)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Gh[(s-1)%Gh.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ce(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*xi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):xi;m>xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xi}`);let p=[],x=0;for(let A=0;A<xi;++A){let N=A/_,M=Math.exp(-N*N/2);p.push(M),A===0?x+=M:A<m&&(x+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;let b=this._sizeLods[s],R=3*b*(s>y-is?s-y+is:0),E=4*(this._cubeSize-b);Dr(t,R,E,3*b,2*b),l.setRenderTarget(t),l.render(u,La)}};function Ng(n){let e=[],t=[],i=[],s=n,r=n-is+1+Hh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-is?l=Hh[o-n+is-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),y=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let E=0;E<f;E++){let A=E%3*2/3-1,N=E>2?0:-1,M=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];x.set(M,_*g*E),y.set(d,m*g*E);let S=[E,E,E,E,E,E];b.set(S,p*g*E)}let R=new _t;R.setAttribute("position",new Xt(x,_)),R.setAttribute("uv",new Xt(y,m)),R.setAttribute("faceIndex",new Xt(b,p)),e.push(R),s>is&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Wh(n,e,t){let i=new Fn(n,e,t);return i.texture.mapping=To,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Dr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Og(n,e,t){let i=new Float32Array(xi),s=new C(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Xh(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function qh(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Bc(){return`

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
	`}function Fg(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Wa||l===Xa,h=l===cs||l===ls;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new no(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new no(n));let d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function zg(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function kg(n,e,t,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let x=f.array;_=f.version;for(let y=0,b=x.length;y<b;y+=3){let R=x[y+0],E=x[y+1],A=x[y+2];d.push(R,E,E,A,A,R)}}else if(g!==void 0){let x=g.array;_=g.version;for(let y=0,b=x.length/3-1;y<b;y+=3){let R=y+0,E=y+1,A=y+2;d.push(R,E,E,A,A,R)}}else return;let m=new(Lu(d)?Qr:Kr)(d,1);m.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Bg(n,e,t,i){let s=i.isWebGL2,r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,g){n.drawElements(r,g,a,f*l),t.update(g,r,1)}function u(f,g,_){if(_===0)return;let m,p;if(s)m=n,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,f*l,_),t.update(g,r,_)}function d(f,g,_){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,f,0,_);let p=0;for(let x=0;x<_;x++)p+=g[x];t.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Hg(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Vg(n,e){return n[0]-e[0]}function Gg(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Wg(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new ut,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,_=r.get(h);if(_===void 0||_.count!==g){let P=function(){z.dispose(),r.delete(h),h.removeEventListener("dispose",P)};_!==void 0&&_.texture.dispose();let x=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],N=0;x===!0&&(N=1),y===!0&&(N=2),b===!0&&(N=3);let M=h.attributes.position.count*N,S=1;M>e.maxTextureSize&&(S=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let D=new Float32Array(M*S*4*g),z=new Jr(D,M,S,g);z.type=$n,z.needsUpdate=!0;let W=N*4;for(let F=0;F<g;F++){let H=R[F],$=E[F],Y=A[F],Z=M*S*4*F;for(let Q=0;Q<H.count;Q++){let te=Q*W;x===!0&&(o.fromBufferAttribute(H,Q),D[Z+te+0]=o.x,D[Z+te+1]=o.y,D[Z+te+2]=o.z,D[Z+te+3]=0),y===!0&&(o.fromBufferAttribute($,Q),D[Z+te+4]=o.x,D[Z+te+5]=o.y,D[Z+te+6]=o.z,D[Z+te+7]=0),b===!0&&(o.fromBufferAttribute(Y,Q),D[Z+te+8]=o.x,D[Z+te+9]=o.y,D[Z+te+10]=o.z,D[Z+te+11]=Y.itemSize===4?o.w:1)}}_={count:g,texture:z,size:new ue(M,S)},r.set(h,_),h.addEventListener("dispose",P)}let m=0;for(let x=0;x<d.length;x++)m+=d[x];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",p),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{let f=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==f){g=[];for(let y=0;y<f;y++)g[y]=[y,0];i[h.id]=g}for(let y=0;y<f;y++){let b=g[y];b[0]=y,b[1]=d[y]}g.sort(Gg);for(let y=0;y<8;y++)y<f&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Vg);let _=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let y=0;y<8;y++){let b=a[y],R=b[0],E=b[1];R!==Number.MAX_SAFE_INTEGER&&E?(_&&h.getAttribute("morphTarget"+y)!==_[R]&&h.setAttribute("morphTarget"+y,_[R]),m&&h.getAttribute("morphNormal"+y)!==m[R]&&h.setAttribute("morphNormal"+y,m[R]),s[y]=E,p+=E):(_&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}let x=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",x),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Xg(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var io=class extends tn{constructor(e,t,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:Mi,h!==Mi&&h!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Mi&&(i=Zn),i===void 0&&h===hs&&(i=vi),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Gt,this.minFilter=l!==void 0?l:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Nu=new tn,Ou=new io(1,1);Ou.compareFunction=Pu;var Fu=new Jr,zu=new Ka,ku=new eo,Yh=[],Zh=[],$h=new Float32Array(16),Jh=new Float32Array(9),Kh=new Float32Array(4);function gs(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Yh[s];if(r===void 0&&(r=new Float32Array(s),Yh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Et(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ro(n,e){let t=Zh[e];t===void 0&&(t=new Int32Array(e),Zh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function qg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Yg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2fv(this.addr,e),Et(t,e)}}function Zg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;n.uniform3fv(this.addr,e),Et(t,e)}}function $g(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4fv(this.addr,e),Et(t,e)}}function Jg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(wt(t,i))return;Kh.set(i),n.uniformMatrix2fv(this.addr,!1,Kh),Et(t,i)}}function Kg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(wt(t,i))return;Jh.set(i),n.uniformMatrix3fv(this.addr,!1,Jh),Et(t,i)}}function Qg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(wt(t,i))return;$h.set(i),n.uniformMatrix4fv(this.addr,!1,$h),Et(t,i)}}function jg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function e_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2iv(this.addr,e),Et(t,e)}}function t_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3iv(this.addr,e),Et(t,e)}}function n_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4iv(this.addr,e),Et(t,e)}}function i_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function s_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2uiv(this.addr,e),Et(t,e)}}function r_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3uiv(this.addr,e),Et(t,e)}}function o_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4uiv(this.addr,e),Et(t,e)}}function a_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Ou:Nu;t.setTexture2D(e||r,s)}function c_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||zu,s)}function l_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||ku,s)}function h_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Fu,s)}function u_(n){switch(n){case 5126:return qg;case 35664:return Yg;case 35665:return Zg;case 35666:return $g;case 35674:return Jg;case 35675:return Kg;case 35676:return Qg;case 5124:case 35670:return jg;case 35667:case 35671:return e_;case 35668:case 35672:return t_;case 35669:case 35673:return n_;case 5125:return i_;case 36294:return s_;case 36295:return r_;case 36296:return o_;case 35678:case 36198:case 36298:case 36306:case 35682:return a_;case 35679:case 36299:case 36307:return c_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return h_}}function d_(n,e){n.uniform1fv(this.addr,e)}function f_(n,e){let t=gs(e,this.size,2);n.uniform2fv(this.addr,t)}function p_(n,e){let t=gs(e,this.size,3);n.uniform3fv(this.addr,t)}function m_(n,e){let t=gs(e,this.size,4);n.uniform4fv(this.addr,t)}function g_(n,e){let t=gs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function __(n,e){let t=gs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function y_(n,e){let t=gs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function x_(n,e){n.uniform1iv(this.addr,e)}function v_(n,e){n.uniform2iv(this.addr,e)}function M_(n,e){n.uniform3iv(this.addr,e)}function b_(n,e){n.uniform4iv(this.addr,e)}function S_(n,e){n.uniform1uiv(this.addr,e)}function w_(n,e){n.uniform2uiv(this.addr,e)}function E_(n,e){n.uniform3uiv(this.addr,e)}function T_(n,e){n.uniform4uiv(this.addr,e)}function A_(n,e,t){let i=this.cache,s=e.length,r=Ro(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Nu,r[o])}function R_(n,e,t){let i=this.cache,s=e.length,r=Ro(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||zu,r[o])}function C_(n,e,t){let i=this.cache,s=e.length,r=Ro(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ku,r[o])}function P_(n,e,t){let i=this.cache,s=e.length,r=Ro(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Fu,r[o])}function L_(n){switch(n){case 5126:return d_;case 35664:return f_;case 35665:return p_;case 35666:return m_;case 35674:return g_;case 35675:return __;case 35676:return y_;case 5124:case 35670:return x_;case 35667:case 35671:return v_;case 35668:case 35672:return M_;case 35669:case 35673:return b_;case 5125:return S_;case 36294:return w_;case 36295:return E_;case 36296:return T_;case 35678:case 36198:case 36298:case 36306:case 35682:return A_;case 35679:case 36299:case 36307:return R_;case 35680:case 36300:case 36308:case 36293:return C_;case 36289:case 36303:case 36311:case 36292:return P_}}var ec=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=u_(t.type)}},tc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=L_(t.type)}},nc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Na=/(\w+)(\])?(\[|\.)?/g;function Qh(n,e){n.seq.push(e),n.map[e.id]=e}function I_(n,e,t){let i=n.name,s=i.length;for(Na.lastIndex=0;;){let r=Na.exec(i),o=Na.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Qh(t,c===void 0?new ec(a,n,e):new tc(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new nc(a),Qh(t,u)),t=u}}}var as=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);I_(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function jh(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var D_=37297,U_=0;function N_(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function O_(n){let e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(n),i;switch(e===t?i="":e===Xr&&t===Wr?i="LinearDisplayP3ToLinearSRGB":e===Wr&&t===Xr&&(i="LinearSRGBToLinearDisplayP3"),n){case On:case Ao:return[i,"LinearTransferOETF"];case gt:case kc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function eu(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+N_(n.getShaderSource(e),o)}else return s}function F_(n,e){let t=O_(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function z_(n,e){let t;switch(e){case ip:t="Linear";break;case sp:t="Reinhard";break;case rp:t="OptimizedCineon";break;case Oc:t="ACESFilmic";break;case ap:t="AgX";break;case op:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function k_(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ss).join(`
`)}function B_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ss).join(`
`)}function H_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function V_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ss(n){return n!==""}function tu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var G_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ic(n){return n.replace(G_,X_)}var W_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function X_(n,e){let t=Ge[e];if(t===void 0){let i=W_.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ic(t)}var q_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iu(n){return n.replace(q_,Y_)}function Y_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function su(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Z_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===wo?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Lf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Dn&&(e="SHADOWMAP_TYPE_VSM"),e}function $_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case cs:case ls:e="ENVMAP_TYPE_CUBE";break;case To:e="ENVMAP_TYPE_CUBE_UV";break}return e}function J_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ls:e="ENVMAP_MODE_REFRACTION";break}return e}function K_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Eo:e="ENVMAP_BLENDING_MULTIPLY";break;case tp:e="ENVMAP_BLENDING_MIX";break;case np:e="ENVMAP_BLENDING_ADD";break}return e}function Q_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function j_(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Z_(t),c=$_(t),h=J_(t),u=K_(t),d=Q_(t),f=t.isWebGL2?"":k_(t),g=B_(t),_=H_(r),m=s.createProgram(),p,x,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ss).join(`
`),p.length>0&&(p+=`
`),x=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ss).join(`
`),x.length>0&&(x+=`
`)):(p=[su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),x=[f,su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Kn?z_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,F_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ss).join(`
`)),o=ic(o),o=tu(o,t),o=nu(o,t),a=ic(a),a=tu(a,t),a=nu(a,t),o=iu(o),a=iu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let b=y+p+o,R=y+x+a,E=jh(s,s.VERTEX_SHADER,b),A=jh(s,s.FRAGMENT_SHADER,R);s.attachShader(m,E),s.attachShader(m,A),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function N(z){if(n.debug.checkShaderErrors){let W=s.getProgramInfoLog(m).trim(),P=s.getShaderInfoLog(E).trim(),F=s.getShaderInfoLog(A).trim(),H=!0,$=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,E,A);else{let Y=eu(s,E,"vertex"),Z=eu(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+W+`
`+Y+`
`+Z)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(P===""||F==="")&&($=!1);$&&(z.diagnostics={runnable:H,programLog:W,vertexShader:{log:P,prefix:p},fragmentShader:{log:F,prefix:x}})}s.deleteShader(E),s.deleteShader(A),M=new as(s,m),S=V_(s,m)}let M;this.getUniforms=function(){return M===void 0&&N(this),M};let S;this.getAttributes=function(){return S===void 0&&N(this),S};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(m,D_)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=U_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=A,this}var ey=0,sc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new rc(e),t.set(e,i)),i}},rc=class{constructor(e){this.id=ey++,this.code=e,this.usedTimes=0}};function ty(n,e,t,i,s,r,o){let a=new ks,l=new sc,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,S,D,z,W){let P=z.fog,F=W.geometry,H=M.isMeshStandardMaterial?z.environment:null,$=(M.isMeshStandardMaterial?t:e).get(M.envMap||H),Y=$&&$.mapping===To?$.image.height:null,Z=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let Q=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,te=Q!==void 0?Q.length:0,de=0;F.morphAttributes.position!==void 0&&(de=1),F.morphAttributes.normal!==void 0&&(de=2),F.morphAttributes.color!==void 0&&(de=3);let q,ee,he,be;if(Z){let Bt=vn[Z];q=Bt.vertexShader,ee=Bt.fragmentShader}else q=M.vertexShader,ee=M.fragmentShader,l.update(M),he=l.getVertexShaderID(M),be=l.getFragmentShaderID(M);let Me=n.getRenderTarget(),Ne=W.isInstancedMesh===!0,Fe=W.isBatchedMesh===!0,Pe=!!M.map,Ke=!!M.matcap,k=!!$,Pt=!!M.aoMap,ge=!!M.lightMap,Ue=!!M.bumpMap,_e=!!M.normalMap,ct=!!M.displacementMap,Be=!!M.emissiveMap,T=!!M.metalnessMap,v=!!M.roughnessMap,U=M.anisotropy>0,K=M.clearcoat>0,J=M.iridescence>0,j=M.sheen>0,xe=M.transmission>0,ae=U&&!!M.anisotropyMap,pe=K&&!!M.clearcoatMap,Ae=K&&!!M.clearcoatNormalMap,Se=K&&!!M.clearcoatRoughnessMap,ne=J&&!!M.iridescenceMap,tt=J&&!!M.iridescenceThicknessMap,Je=j&&!!M.sheenColorMap,Oe=j&&!!M.sheenRoughnessMap,Ee=!!M.specularMap,ye=!!M.specularColorMap,Ve=!!M.specularIntensityMap,je=xe&&!!M.transmissionMap,pt=xe&&!!M.thicknessMap,Ye=!!M.gradientMap,se=!!M.alphaMap,I=M.alphaTest>0,ce=!!M.alphaHash,le=!!M.extensions,Ie=!!F.attributes.uv1,Re=!!F.attributes.uv2,st=!!F.attributes.uv3,rt=Kn;return M.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(rt=n.toneMapping),{isWebGL2:h,shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:q,fragmentShader:ee,defines:M.defines,customVertexShaderID:he,customFragmentShaderID:be,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Fe,instancing:Ne,instancingColor:Ne&&W.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Me===null?n.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:On,map:Pe,matcap:Ke,envMap:k,envMapMode:k&&$.mapping,envMapCubeUVHeight:Y,aoMap:Pt,lightMap:ge,bumpMap:Ue,normalMap:_e,displacementMap:d&&ct,emissiveMap:Be,normalMapObjectSpace:_e&&M.normalMapType===xp,normalMapTangentSpace:_e&&M.normalMapType===zc,metalnessMap:T,roughnessMap:v,anisotropy:U,anisotropyMap:ae,clearcoat:K,clearcoatMap:pe,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Se,iridescence:J,iridescenceMap:ne,iridescenceThicknessMap:tt,sheen:j,sheenColorMap:Je,sheenRoughnessMap:Oe,specularMap:Ee,specularColorMap:ye,specularIntensityMap:Ve,transmission:xe,transmissionMap:je,thicknessMap:pt,gradientMap:Ye,opaque:M.transparent===!1&&M.blending===rs,alphaMap:se,alphaTest:I,alphaHash:ce,combine:M.combine,mapUv:Pe&&_(M.map.channel),aoMapUv:Pt&&_(M.aoMap.channel),lightMapUv:ge&&_(M.lightMap.channel),bumpMapUv:Ue&&_(M.bumpMap.channel),normalMapUv:_e&&_(M.normalMap.channel),displacementMapUv:ct&&_(M.displacementMap.channel),emissiveMapUv:Be&&_(M.emissiveMap.channel),metalnessMapUv:T&&_(M.metalnessMap.channel),roughnessMapUv:v&&_(M.roughnessMap.channel),anisotropyMapUv:ae&&_(M.anisotropyMap.channel),clearcoatMapUv:pe&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&_(M.sheenRoughnessMap.channel),specularMapUv:Ee&&_(M.specularMap.channel),specularColorMapUv:ye&&_(M.specularColorMap.channel),specularIntensityMapUv:Ve&&_(M.specularIntensityMap.channel),transmissionMapUv:je&&_(M.transmissionMap.channel),thicknessMapUv:pt&&_(M.thicknessMap.channel),alphaMapUv:se&&_(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(_e||U),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Ie,vertexUv2s:Re,vertexUv3s:st,pointsUvs:W.isPoints===!0&&!!F.attributes.uv&&(Pe||se),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:W.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:de,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:rt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Pe&&M.map.isVideoTexture===!0&&nt.getTransfer(M.map.colorSpace)===lt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===dn,flipSided:M.side===kt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:le&&M.extensions.derivatives===!0,extensionFragDepth:le&&M.extensions.fragDepth===!0,extensionDrawBuffers:le&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let D in M.defines)S.push(D),S.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(x(S,M),y(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function x(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function b(M){let S=g[M.type],D;if(S){let z=vn[S];D=Wp.clone(z.uniforms)}else D=M.uniforms;return D}function R(M,S){let D;for(let z=0,W=c.length;z<W;z++){let P=c[z];if(P.cacheKey===S){D=P,++D.usedTimes;break}}return D===void 0&&(D=new j_(n,S,M,r),c.push(D)),D}function E(M){if(--M.usedTimes===0){let S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:R,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:N}}function ny(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function iy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ru(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ou(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,f,g,_,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||iy),i.length>1&&i.sort(d||ru),s.length>1&&s.sort(d||ru)}function h(){for(let u=e,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function sy(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new ou,n.set(i,[o])):s>=r.length?(o=new ou,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ry(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new me};break;case"SpotLight":t={position:new C,direction:new C,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new me,groundColor:new me};break;case"RectAreaLight":t={color:new me,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function oy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var ay=0;function cy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ly(n,e){let t=new ry,i=oy(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new C);let r=new C,o=new dt,a=new dt;function l(h,u){let d=0,f=0,g=0;for(let z=0;z<9;z++)s.probe[z].set(0,0,0);let _=0,m=0,p=0,x=0,y=0,b=0,R=0,E=0,A=0,N=0,M=0;h.sort(cy);let S=u===!0?Math.PI:1;for(let z=0,W=h.length;z<W;z++){let P=h[z],F=P.color,H=P.intensity,$=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=F.r*H*S,f+=F.g*H*S,g+=F.b*H*S;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)s.probe[Z].addScaledVector(P.sh.coefficients[Z],H);M++}else if(P.isDirectionalLight){let Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity*S),P.castShadow){let Q=P.shadow,te=i.get(P);te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,s.directionalShadow[_]=te,s.directionalShadowMap[_]=Y,s.directionalShadowMatrix[_]=P.shadow.matrix,b++}s.directional[_]=Z,_++}else if(P.isSpotLight){let Z=t.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(F).multiplyScalar(H*S),Z.distance=$,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,s.spot[p]=Z;let Q=P.shadow;if(P.map&&(s.spotLightMap[A]=P.map,A++,Q.updateMatrices(P),P.castShadow&&N++),s.spotLightMatrix[p]=Q.matrix,P.castShadow){let te=i.get(P);te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,s.spotShadow[p]=te,s.spotShadowMap[p]=Y,E++}p++}else if(P.isRectAreaLight){let Z=t.get(P);Z.color.copy(F).multiplyScalar(H),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),s.rectArea[x]=Z,x++}else if(P.isPointLight){let Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity*S),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){let Q=P.shadow,te=i.get(P);te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,s.pointShadow[m]=te,s.pointShadowMap[m]=Y,s.pointShadowMatrix[m]=P.shadow.matrix,R++}s.point[m]=Z,m++}else if(P.isHemisphereLight){let Z=t.get(P);Z.skyColor.copy(P.color).multiplyScalar(H*S),Z.groundColor.copy(P.groundColor).multiplyScalar(H*S),s.hemi[y]=Z,y++}}x>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=re.LTC_FLOAT_1,s.rectAreaLTC2=re.LTC_FLOAT_2):(s.rectAreaLTC1=re.LTC_HALF_1,s.rectAreaLTC2=re.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=re.LTC_FLOAT_1,s.rectAreaLTC2=re.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=re.LTC_HALF_1,s.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;let D=s.hash;(D.directionalLength!==_||D.pointLength!==m||D.spotLength!==p||D.rectAreaLength!==x||D.hemiLength!==y||D.numDirectionalShadows!==b||D.numPointShadows!==R||D.numSpotShadows!==E||D.numSpotMaps!==A||D.numLightProbes!==M)&&(s.directional.length=_,s.spot.length=p,s.rectArea.length=x,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=E+A-N,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=M,D.directionalLength=_,D.pointLength=m,D.spotLength=p,D.rectAreaLength=x,D.hemiLength=y,D.numDirectionalShadows=b,D.numPointShadows=R,D.numSpotShadows=E,D.numSpotMaps=A,D.numLightProbes=M,s.version=ay++)}function c(h,u){let d=0,f=0,g=0,_=0,m=0,p=u.matrixWorldInverse;for(let x=0,y=h.length;x<y;x++){let b=h[x];if(b.isDirectionalLight){let R=s.directional[d];R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),d++}else if(b.isSpotLight){let R=s.spot[g];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let R=s.rectArea[_];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(p),a.identity(),o.copy(b.matrixWorld),o.premultiply(p),a.extractRotation(o),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){let R=s.point[f];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let R=s.hemi[m];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function au(n,e){let t=new ly(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function hy(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new au(n,e),t.set(r,[l])):o>=a.length?(l=new au(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var oc=class extends bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_p,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ac=class extends bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},uy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dy=`uniform sampler2D shadow_pass;
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
}`;function fy(n,e,t){let i=new Bs,s=new ue,r=new ue,o=new ut,a=new oc({depthPacking:yp}),l=new ac,c={},h=t.maxTextureSize,u={[jn]:kt,[kt]:jn,[dn]:dn},d=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:uy,fragmentShader:dy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new _t;g.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ce(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wo;let p=this.type;this.render=function(E,A,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let M=n.getRenderTarget(),S=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Jn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let W=p!==Dn&&this.type===Dn,P=p===Dn&&this.type!==Dn;for(let F=0,H=E.length;F<H;F++){let $=E[F],Y=$.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let Z=Y.getFrameExtents();if(s.multiply(Z),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,Y.mapSize.y=r.y)),Y.map===null||W===!0||P===!0){let te=this.type!==Dn?{minFilter:Gt,magFilter:Gt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Fn(s.x,s.y,te),Y.map.texture.name=$.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();let Q=Y.getViewportCount();for(let te=0;te<Q;te++){let de=Y.getViewport(te);o.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),z.viewport(o),Y.updateMatrices($,te),i=Y.getFrustum(),b(A,N,Y.camera,$,this.type)}Y.isPointLightShadow!==!0&&this.type===Dn&&x(Y,N),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,S,D)};function x(E,A){let N=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Fn(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(A,null,N,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(A,null,N,f,_,null)}function y(E,A,N,M){let S=null,D=N.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)S=D;else if(S=N.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let z=S.uuid,W=A.uuid,P=c[z];P===void 0&&(P={},c[z]=P);let F=P[W];F===void 0&&(F=S.clone(),P[W]=F,A.addEventListener("dispose",R)),S=F}if(S.visible=A.visible,S.wireframe=A.wireframe,M===Dn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let z=n.properties.get(S);z.light=N}return S}function b(E,A,N,M,S){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Dn)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,E.matrixWorld);let W=e.update(E),P=E.material;if(Array.isArray(P)){let F=W.groups;for(let H=0,$=F.length;H<$;H++){let Y=F[H],Z=P[Y.materialIndex];if(Z&&Z.visible){let Q=y(E,Z,M,S);E.onBeforeShadow(n,E,A,N,W,Q,Y),n.renderBufferDirect(N,null,W,Q,E,Y),E.onAfterShadow(n,E,A,N,W,Q,Y)}}}else if(P.visible){let F=y(E,P,M,S);E.onBeforeShadow(n,E,A,N,W,F,null),n.renderBufferDirect(N,null,W,F,E,null),E.onAfterShadow(n,E,A,N,W,F,null)}}let z=E.children;for(let W=0,P=z.length;W<P;W++)b(z[W],A,N,M,S)}function R(E){E.target.removeEventListener("dispose",R);for(let N in c){let M=c[N],S=E.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function py(n,e,t){let i=t.isWebGL2;function s(){let I=!1,ce=new ut,le=null,Ie=new ut(0,0,0,0);return{setMask:function(Re){le!==Re&&!I&&(n.colorMask(Re,Re,Re,Re),le=Re)},setLocked:function(Re){I=Re},setClear:function(Re,st,rt,At,Bt){Bt===!0&&(Re*=At,st*=At,rt*=At),ce.set(Re,st,rt,At),Ie.equals(ce)===!1&&(n.clearColor(Re,st,rt,At),Ie.copy(ce))},reset:function(){I=!1,le=null,Ie.set(-1,0,0,0)}}}function r(){let I=!1,ce=null,le=null,Ie=null;return{setTest:function(Re){Re?Fe(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(Re){ce!==Re&&!I&&(n.depthMask(Re),ce=Re)},setFunc:function(Re){if(le!==Re){switch(Re){case Zf:n.depthFunc(n.NEVER);break;case $f:n.depthFunc(n.ALWAYS);break;case Jf:n.depthFunc(n.LESS);break;case Br:n.depthFunc(n.LEQUAL);break;case Kf:n.depthFunc(n.EQUAL);break;case Qf:n.depthFunc(n.GEQUAL);break;case jf:n.depthFunc(n.GREATER);break;case ep:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=Re}},setLocked:function(Re){I=Re},setClear:function(Re){Ie!==Re&&(n.clearDepth(Re),Ie=Re)},reset:function(){I=!1,ce=null,le=null,Ie=null}}}function o(){let I=!1,ce=null,le=null,Ie=null,Re=null,st=null,rt=null,At=null,Bt=null;return{setTest:function(ot){I||(ot?Fe(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(ot){ce!==ot&&!I&&(n.stencilMask(ot),ce=ot)},setFunc:function(ot,Ht,xn){(le!==ot||Ie!==Ht||Re!==xn)&&(n.stencilFunc(ot,Ht,xn),le=ot,Ie=Ht,Re=xn)},setOp:function(ot,Ht,xn){(st!==ot||rt!==Ht||At!==xn)&&(n.stencilOp(ot,Ht,xn),st=ot,rt=Ht,At=xn)},setLocked:function(ot){I=ot},setClear:function(ot){Bt!==ot&&(n.clearStencil(ot),Bt=ot)},reset:function(){I=!1,ce=null,le=null,Ie=null,Re=null,st=null,rt=null,At=null,Bt=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,_=[],m=null,p=!1,x=null,y=null,b=null,R=null,E=null,A=null,N=null,M=new me(0,0,0),S=0,D=!1,z=null,W=null,P=null,F=null,H=null,$=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,Z=0,Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Q)[1]),Y=Z>=1):Q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),Y=Z>=2);let te=null,de={},q=n.getParameter(n.SCISSOR_BOX),ee=n.getParameter(n.VIEWPORT),he=new ut().fromArray(q),be=new ut().fromArray(ee);function Me(I,ce,le,Ie){let Re=new Uint8Array(4),st=n.createTexture();n.bindTexture(I,st),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let rt=0;rt<le;rt++)i&&(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)?n.texImage3D(ce,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(ce+rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return st}let Ne={};Ne[n.TEXTURE_2D]=Me(n.TEXTURE_2D,n.TEXTURE_2D,1),Ne[n.TEXTURE_CUBE_MAP]=Me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ne[n.TEXTURE_2D_ARRAY]=Me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ne[n.TEXTURE_3D]=Me(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Fe(n.DEPTH_TEST),l.setFunc(Br),Be(!1),T(Hl),Fe(n.CULL_FACE),_e(Jn);function Fe(I){d[I]!==!0&&(n.enable(I),d[I]=!0)}function Pe(I){d[I]!==!1&&(n.disable(I),d[I]=!1)}function Ke(I,ce){return f[I]!==ce?(n.bindFramebuffer(I,ce),f[I]=ce,i&&(I===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ce),I===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ce)),!0):!1}function k(I,ce){let le=_,Ie=!1;if(I)if(le=g.get(ce),le===void 0&&(le=[],g.set(ce,le)),I.isWebGLMultipleRenderTargets){let Re=I.texture;if(le.length!==Re.length||le[0]!==n.COLOR_ATTACHMENT0){for(let st=0,rt=Re.length;st<rt;st++)le[st]=n.COLOR_ATTACHMENT0+st;le.length=Re.length,Ie=!0}}else le[0]!==n.COLOR_ATTACHMENT0&&(le[0]=n.COLOR_ATTACHMENT0,Ie=!0);else le[0]!==n.BACK&&(le[0]=n.BACK,Ie=!0);Ie&&(t.isWebGL2?n.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function Pt(I){return m!==I?(n.useProgram(I),m=I,!0):!1}let ge={[yi]:n.FUNC_ADD,[Df]:n.FUNC_SUBTRACT,[Uf]:n.FUNC_REVERSE_SUBTRACT};if(i)ge[Wl]=n.MIN,ge[Xl]=n.MAX;else{let I=e.get("EXT_blend_minmax");I!==null&&(ge[Wl]=I.MIN_EXT,ge[Xl]=I.MAX_EXT)}let Ue={[Nf]:n.ZERO,[Of]:n.ONE,[Ff]:n.SRC_COLOR,[Va]:n.SRC_ALPHA,[Gf]:n.SRC_ALPHA_SATURATE,[Hf]:n.DST_COLOR,[kf]:n.DST_ALPHA,[zf]:n.ONE_MINUS_SRC_COLOR,[Ga]:n.ONE_MINUS_SRC_ALPHA,[Vf]:n.ONE_MINUS_DST_COLOR,[Bf]:n.ONE_MINUS_DST_ALPHA,[Wf]:n.CONSTANT_COLOR,[Xf]:n.ONE_MINUS_CONSTANT_COLOR,[qf]:n.CONSTANT_ALPHA,[Yf]:n.ONE_MINUS_CONSTANT_ALPHA};function _e(I,ce,le,Ie,Re,st,rt,At,Bt,ot){if(I===Jn){p===!0&&(Pe(n.BLEND),p=!1);return}if(p===!1&&(Fe(n.BLEND),p=!0),I!==If){if(I!==x||ot!==D){if((y!==yi||E!==yi)&&(n.blendEquation(n.FUNC_ADD),y=yi,E=yi),ot)switch(I){case rs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case kr:n.blendFunc(n.ONE,n.ONE);break;case Vl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case rs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case kr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Vl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,R=null,A=null,N=null,M.set(0,0,0),S=0,x=I,D=ot}return}Re=Re||ce,st=st||le,rt=rt||Ie,(ce!==y||Re!==E)&&(n.blendEquationSeparate(ge[ce],ge[Re]),y=ce,E=Re),(le!==b||Ie!==R||st!==A||rt!==N)&&(n.blendFuncSeparate(Ue[le],Ue[Ie],Ue[st],Ue[rt]),b=le,R=Ie,A=st,N=rt),(At.equals(M)===!1||Bt!==S)&&(n.blendColor(At.r,At.g,At.b,Bt),M.copy(At),S=Bt),x=I,D=!1}function ct(I,ce){I.side===dn?Pe(n.CULL_FACE):Fe(n.CULL_FACE);let le=I.side===kt;ce&&(le=!le),Be(le),I.blending===rs&&I.transparent===!1?_e(Jn):_e(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);let Ie=I.stencilWrite;c.setTest(Ie),Ie&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),U(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Fe(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(I){z!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),z=I)}function T(I){I!==Cf?(Fe(n.CULL_FACE),I!==W&&(I===Hl?n.cullFace(n.BACK):I===Pf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),W=I}function v(I){I!==P&&(Y&&n.lineWidth(I),P=I)}function U(I,ce,le){I?(Fe(n.POLYGON_OFFSET_FILL),(F!==ce||H!==le)&&(n.polygonOffset(ce,le),F=ce,H=le)):Pe(n.POLYGON_OFFSET_FILL)}function K(I){I?Fe(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function J(I){I===void 0&&(I=n.TEXTURE0+$-1),te!==I&&(n.activeTexture(I),te=I)}function j(I,ce,le){le===void 0&&(te===null?le=n.TEXTURE0+$-1:le=te);let Ie=de[le];Ie===void 0&&(Ie={type:void 0,texture:void 0},de[le]=Ie),(Ie.type!==I||Ie.texture!==ce)&&(te!==le&&(n.activeTexture(le),te=le),n.bindTexture(I,ce||Ne[I]),Ie.type=I,Ie.texture=ce)}function xe(){let I=de[te];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ae(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Je(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Oe(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ve(I){he.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),he.copy(I))}function je(I){be.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),be.copy(I))}function pt(I,ce){let le=u.get(ce);le===void 0&&(le=new WeakMap,u.set(ce,le));let Ie=le.get(I);Ie===void 0&&(Ie=n.getUniformBlockIndex(ce,I.name),le.set(I,Ie))}function Ye(I,ce){let Ie=u.get(ce).get(I);h.get(ce)!==Ie&&(n.uniformBlockBinding(ce,Ie,I.__bindingPointIndex),h.set(ce,Ie))}function se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},te=null,de={},f={},g=new WeakMap,_=[],m=null,p=!1,x=null,y=null,b=null,R=null,E=null,A=null,N=null,M=new me(0,0,0),S=0,D=!1,z=null,W=null,P=null,F=null,H=null,he.set(0,0,n.canvas.width,n.canvas.height),be.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Fe,disable:Pe,bindFramebuffer:Ke,drawBuffers:k,useProgram:Pt,setBlending:_e,setMaterial:ct,setFlipSided:Be,setCullFace:T,setLineWidth:v,setPolygonOffset:U,setScissorTest:K,activeTexture:J,bindTexture:j,unbindTexture:xe,compressedTexImage2D:ae,compressedTexImage3D:pe,texImage2D:Ee,texImage3D:ye,updateUBOMapping:pt,uniformBlockBinding:Ye,texStorage2D:Je,texStorage3D:Oe,texSubImage2D:Ae,texSubImage3D:Se,compressedTexSubImage2D:ne,compressedTexSubImage3D:tt,scissor:Ve,viewport:je,reset:se}}function my(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return f?new OffscreenCanvas(T,v):Yr("canvas")}function _(T,v,U,K){let J=1;if((T.width>K||T.height>K)&&(J=K/Math.max(T.width,T.height)),J<1||v===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){let j=v?$a:Math.floor,xe=j(J*T.width),ae=j(J*T.height);u===void 0&&(u=g(xe,ae));let pe=U?g(xe,ae):u;return pe.width=xe,pe.height=ae,pe.getContext("2d").drawImage(T,0,0,xe,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+xe+"x"+ae+")."),pe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return wh(T.width)&&wh(T.height)}function p(T){return a?!1:T.wrapS!==fn||T.wrapT!==fn||T.minFilter!==Gt&&T.minFilter!==jt}function x(T,v){return T.generateMipmaps&&v&&T.minFilter!==Gt&&T.minFilter!==jt}function y(T){n.generateMipmap(T)}function b(T,v,U,K,J=!1){if(a===!1)return v;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let j=v;if(v===n.RED&&(U===n.FLOAT&&(j=n.R32F),U===n.HALF_FLOAT&&(j=n.R16F),U===n.UNSIGNED_BYTE&&(j=n.R8)),v===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(j=n.R8UI),U===n.UNSIGNED_SHORT&&(j=n.R16UI),U===n.UNSIGNED_INT&&(j=n.R32UI),U===n.BYTE&&(j=n.R8I),U===n.SHORT&&(j=n.R16I),U===n.INT&&(j=n.R32I)),v===n.RG&&(U===n.FLOAT&&(j=n.RG32F),U===n.HALF_FLOAT&&(j=n.RG16F),U===n.UNSIGNED_BYTE&&(j=n.RG8)),v===n.RGBA){let xe=J?Gr:nt.getTransfer(K);U===n.FLOAT&&(j=n.RGBA32F),U===n.HALF_FLOAT&&(j=n.RGBA16F),U===n.UNSIGNED_BYTE&&(j=xe===lt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function R(T,v,U){return x(T,U)===!0||T.isFramebufferTexture&&T.minFilter!==Gt&&T.minFilter!==jt?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function E(T){return T===Gt||T===ql||T===ra?n.NEAREST:n.LINEAR}function A(T){let v=T.target;v.removeEventListener("dispose",A),M(v),v.isVideoTexture&&h.delete(v)}function N(T){let v=T.target;v.removeEventListener("dispose",N),D(v)}function M(T){let v=i.get(T);if(v.__webglInit===void 0)return;let U=T.source,K=d.get(U);if(K){let J=K[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(T),Object.keys(K).length===0&&d.delete(U)}i.remove(T)}function S(T){let v=i.get(T);n.deleteTexture(v.__webglTexture);let U=T.source,K=d.get(U);delete K[v.__cacheKey],o.memory.textures--}function D(T){let v=T.texture,U=i.get(T),K=i.get(v);if(K.__webglTexture!==void 0&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(U.__webglFramebuffer[J]))for(let j=0;j<U.__webglFramebuffer[J].length;j++)n.deleteFramebuffer(U.__webglFramebuffer[J][j]);else n.deleteFramebuffer(U.__webglFramebuffer[J]);U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer[J])}else{if(Array.isArray(U.__webglFramebuffer))for(let J=0;J<U.__webglFramebuffer.length;J++)n.deleteFramebuffer(U.__webglFramebuffer[J]);else n.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&n.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let J=0;J<U.__webglColorRenderbuffer.length;J++)U.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(U.__webglColorRenderbuffer[J]);U.__webglDepthRenderbuffer&&n.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let J=0,j=v.length;J<j;J++){let xe=i.get(v[J]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(v[J])}i.remove(v),i.remove(T)}let z=0;function W(){z=0}function P(){let T=z;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),z+=1,T}function F(T){let v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function H(T,v){let U=i.get(T);if(T.isVideoTexture&&ct(T),T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){let K=T.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(U,T,v);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+v)}function $(T,v){let U=i.get(T);if(T.version>0&&U.__version!==T.version){he(U,T,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+v)}function Y(T,v){let U=i.get(T);if(T.version>0&&U.__version!==T.version){he(U,T,v);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+v)}function Z(T,v){let U=i.get(T);if(T.version>0&&U.__version!==T.version){be(U,T,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+v)}let Q={[Os]:n.REPEAT,[fn]:n.CLAMP_TO_EDGE,[qa]:n.MIRRORED_REPEAT},te={[Gt]:n.NEAREST,[ql]:n.NEAREST_MIPMAP_NEAREST,[ra]:n.NEAREST_MIPMAP_LINEAR,[jt]:n.LINEAR,[cp]:n.LINEAR_MIPMAP_NEAREST,[Fs]:n.LINEAR_MIPMAP_LINEAR},de={[vp]:n.NEVER,[Tp]:n.ALWAYS,[Mp]:n.LESS,[Pu]:n.LEQUAL,[bp]:n.EQUAL,[Ep]:n.GEQUAL,[Sp]:n.GREATER,[wp]:n.NOTEQUAL};function q(T,v,U){if(U?(n.texParameteri(T,n.TEXTURE_WRAP_S,Q[v.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Q[v.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Q[v.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,te[v.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,te[v.minFilter])):(n.texParameteri(T,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(T,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==fn||v.wrapT!==fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,n.TEXTURE_MAG_FILTER,E(v.magFilter)),n.texParameteri(T,n.TEXTURE_MIN_FILTER,E(v.minFilter)),v.minFilter!==Gt&&v.minFilter!==jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,de[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let K=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Gt||v.minFilter!==ra&&v.minFilter!==Fs||v.type===$n&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===zs&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(T,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function ee(T,v){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",A));let K=v.source,J=d.get(K);J===void 0&&(J={},d.set(K,J));let j=F(v);if(j!==T.__cacheKey){J[j]===void 0&&(J[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),J[j].usedTimes++;let xe=J[T.__cacheKey];xe!==void 0&&(J[T.__cacheKey].usedTimes--,xe.usedTimes===0&&S(v)),T.__cacheKey=j,T.__webglTexture=J[j].texture}return U}function he(T,v,U){let K=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=n.TEXTURE_3D);let J=ee(T,v),j=v.source;t.bindTexture(K,T.__webglTexture,n.TEXTURE0+U);let xe=i.get(j);if(j.version!==xe.__version||J===!0){t.activeTexture(n.TEXTURE0+U);let ae=nt.getPrimaries(nt.workingColorSpace),pe=v.colorSpace===en?null:nt.getPrimaries(v.colorSpace),Ae=v.colorSpace===en||ae===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let Se=p(v)&&m(v.image)===!1,ne=_(v.image,Se,!1,s.maxTextureSize);ne=Be(v,ne);let tt=m(ne)||a,Je=r.convert(v.format,v.colorSpace),Oe=r.convert(v.type),Ee=b(v.internalFormat,Je,Oe,v.colorSpace,v.isVideoTexture);q(K,v,tt);let ye,Ve=v.mipmaps,je=a&&v.isVideoTexture!==!0&&Ee!==Ru,pt=xe.__version===void 0||J===!0,Ye=R(v,ne,tt);if(v.isDepthTexture)Ee=n.DEPTH_COMPONENT,a?v.type===$n?Ee=n.DEPTH_COMPONENT32F:v.type===Zn?Ee=n.DEPTH_COMPONENT24:v.type===vi?Ee=n.DEPTH24_STENCIL8:Ee=n.DEPTH_COMPONENT16:v.type===$n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Mi&&Ee===n.DEPTH_COMPONENT&&v.type!==Fc&&v.type!==Zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Zn,Oe=r.convert(v.type)),v.format===hs&&Ee===n.DEPTH_COMPONENT&&(Ee=n.DEPTH_STENCIL,v.type!==vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=vi,Oe=r.convert(v.type))),pt&&(je?t.texStorage2D(n.TEXTURE_2D,1,Ee,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Ee,ne.width,ne.height,0,Je,Oe,null));else if(v.isDataTexture)if(Ve.length>0&&tt){je&&pt&&t.texStorage2D(n.TEXTURE_2D,Ye,Ee,Ve[0].width,Ve[0].height);for(let se=0,I=Ve.length;se<I;se++)ye=Ve[se],je?t.texSubImage2D(n.TEXTURE_2D,se,0,0,ye.width,ye.height,Je,Oe,ye.data):t.texImage2D(n.TEXTURE_2D,se,Ee,ye.width,ye.height,0,Je,Oe,ye.data);v.generateMipmaps=!1}else je?(pt&&t.texStorage2D(n.TEXTURE_2D,Ye,Ee,ne.width,ne.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,Je,Oe,ne.data)):t.texImage2D(n.TEXTURE_2D,0,Ee,ne.width,ne.height,0,Je,Oe,ne.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){je&&pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ye,Ee,Ve[0].width,Ve[0].height,ne.depth);for(let se=0,I=Ve.length;se<I;se++)ye=Ve[se],v.format!==pn?Je!==null?je?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,ye.width,ye.height,ne.depth,Je,ye.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,Ee,ye.width,ye.height,ne.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,ye.width,ye.height,ne.depth,Je,Oe,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,Ee,ye.width,ye.height,ne.depth,0,Je,Oe,ye.data)}else{je&&pt&&t.texStorage2D(n.TEXTURE_2D,Ye,Ee,Ve[0].width,Ve[0].height);for(let se=0,I=Ve.length;se<I;se++)ye=Ve[se],v.format!==pn?Je!==null?je?t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,ye.width,ye.height,Je,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,se,Ee,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(n.TEXTURE_2D,se,0,0,ye.width,ye.height,Je,Oe,ye.data):t.texImage2D(n.TEXTURE_2D,se,Ee,ye.width,ye.height,0,Je,Oe,ye.data)}else if(v.isDataArrayTexture)je?(pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ye,Ee,ne.width,ne.height,ne.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Je,Oe,ne.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,ne.width,ne.height,ne.depth,0,Je,Oe,ne.data);else if(v.isData3DTexture)je?(pt&&t.texStorage3D(n.TEXTURE_3D,Ye,Ee,ne.width,ne.height,ne.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Je,Oe,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,ne.width,ne.height,ne.depth,0,Je,Oe,ne.data);else if(v.isFramebufferTexture){if(pt)if(je)t.texStorage2D(n.TEXTURE_2D,Ye,Ee,ne.width,ne.height);else{let se=ne.width,I=ne.height;for(let ce=0;ce<Ye;ce++)t.texImage2D(n.TEXTURE_2D,ce,Ee,se,I,0,Je,Oe,null),se>>=1,I>>=1}}else if(Ve.length>0&&tt){je&&pt&&t.texStorage2D(n.TEXTURE_2D,Ye,Ee,Ve[0].width,Ve[0].height);for(let se=0,I=Ve.length;se<I;se++)ye=Ve[se],je?t.texSubImage2D(n.TEXTURE_2D,se,0,0,Je,Oe,ye):t.texImage2D(n.TEXTURE_2D,se,Ee,Je,Oe,ye);v.generateMipmaps=!1}else je?(pt&&t.texStorage2D(n.TEXTURE_2D,Ye,Ee,ne.width,ne.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Je,Oe,ne)):t.texImage2D(n.TEXTURE_2D,0,Ee,Je,Oe,ne);x(v,tt)&&y(K),xe.__version=j.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function be(T,v,U){if(v.image.length!==6)return;let K=ee(T,v),J=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+U);let j=i.get(J);if(J.version!==j.__version||K===!0){t.activeTexture(n.TEXTURE0+U);let xe=nt.getPrimaries(nt.workingColorSpace),ae=v.colorSpace===en?null:nt.getPrimaries(v.colorSpace),pe=v.colorSpace===en||xe===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Ae=v.isCompressedTexture||v.image[0].isCompressedTexture,Se=v.image[0]&&v.image[0].isDataTexture,ne=[];for(let se=0;se<6;se++)!Ae&&!Se?ne[se]=_(v.image[se],!1,!0,s.maxCubemapSize):ne[se]=Se?v.image[se].image:v.image[se],ne[se]=Be(v,ne[se]);let tt=ne[0],Je=m(tt)||a,Oe=r.convert(v.format,v.colorSpace),Ee=r.convert(v.type),ye=b(v.internalFormat,Oe,Ee,v.colorSpace),Ve=a&&v.isVideoTexture!==!0,je=j.__version===void 0||K===!0,pt=R(v,tt,Je);q(n.TEXTURE_CUBE_MAP,v,Je);let Ye;if(Ae){Ve&&je&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pt,ye,tt.width,tt.height);for(let se=0;se<6;se++){Ye=ne[se].mipmaps;for(let I=0;I<Ye.length;I++){let ce=Ye[I];v.format!==pn?Oe!==null?Ve?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,I,0,0,ce.width,ce.height,Oe,ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,I,ye,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,I,0,0,ce.width,ce.height,Oe,Ee,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,I,ye,ce.width,ce.height,0,Oe,Ee,ce.data)}}}else{Ye=v.mipmaps,Ve&&je&&(Ye.length>0&&pt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,pt,ye,ne[0].width,ne[0].height));for(let se=0;se<6;se++)if(Se){Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ne[se].width,ne[se].height,Oe,Ee,ne[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ye,ne[se].width,ne[se].height,0,Oe,Ee,ne[se].data);for(let I=0;I<Ye.length;I++){let le=Ye[I].image[se].image;Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,I+1,0,0,le.width,le.height,Oe,Ee,le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,I+1,ye,le.width,le.height,0,Oe,Ee,le.data)}}else{Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Oe,Ee,ne[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ye,Oe,Ee,ne[se]);for(let I=0;I<Ye.length;I++){let ce=Ye[I];Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,I+1,0,0,Oe,Ee,ce.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,I+1,ye,Oe,Ee,ce.image[se])}}}x(v,Je)&&y(n.TEXTURE_CUBE_MAP),j.__version=J.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Me(T,v,U,K,J,j){let xe=r.convert(U.format,U.colorSpace),ae=r.convert(U.type),pe=b(U.internalFormat,xe,ae,U.colorSpace);if(!i.get(v).__hasExternalTextures){let Se=Math.max(1,v.width>>j),ne=Math.max(1,v.height>>j);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,j,pe,Se,ne,v.depth,0,xe,ae,null):t.texImage2D(J,j,pe,Se,ne,0,xe,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),_e(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,J,i.get(U).__webglTexture,0,Ue(v)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,J,i.get(U).__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(T,v,U){if(n.bindRenderbuffer(n.RENDERBUFFER,T),v.depthBuffer&&!v.stencilBuffer){let K=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(U||_e(v)){let J=v.depthTexture;J&&J.isDepthTexture&&(J.type===$n?K=n.DEPTH_COMPONENT32F:J.type===Zn&&(K=n.DEPTH_COMPONENT24));let j=Ue(v);_e(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,j,K,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,j,K,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,K,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,T)}else if(v.depthBuffer&&v.stencilBuffer){let K=Ue(v);U&&_e(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,K,n.DEPTH24_STENCIL8,v.width,v.height):_e(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,K,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,T)}else{let K=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let J=0;J<K.length;J++){let j=K[J],xe=r.convert(j.format,j.colorSpace),ae=r.convert(j.type),pe=b(j.internalFormat,xe,ae,j.colorSpace),Ae=Ue(v);U&&_e(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,pe,v.width,v.height):_e(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,pe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,pe,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Fe(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),H(v.depthTexture,0);let K=i.get(v.depthTexture).__webglTexture,J=Ue(v);if(v.depthTexture.format===Mi)_e(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(v.depthTexture.format===hs)_e(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Pe(T){let v=i.get(T),U=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Fe(v.__webglFramebuffer,T)}else if(U){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]=n.createRenderbuffer(),Ne(v.__webglDepthbuffer[K],T,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),Ne(v.__webglDepthbuffer,T,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ke(T,v,U){let K=i.get(T);v!==void 0&&Me(K.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&Pe(T)}function k(T){let v=T.texture,U=i.get(T),K=i.get(v);T.addEventListener("dispose",N),T.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=v.version,o.memory.textures++);let J=T.isWebGLCubeRenderTarget===!0,j=T.isWebGLMultipleRenderTargets===!0,xe=m(T)||a;if(J){U.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(a&&v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[ae]=[];for(let pe=0;pe<v.mipmaps.length;pe++)U.__webglFramebuffer[ae][pe]=n.createFramebuffer()}else U.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)U.__webglFramebuffer[ae]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(j)if(s.drawBuffers){let ae=T.texture;for(let pe=0,Ae=ae.length;pe<Ae;pe++){let Se=i.get(ae[pe]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&_e(T)===!1){let ae=j?v:[v];U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let pe=0;pe<ae.length;pe++){let Ae=ae[pe];U.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[pe]);let Se=r.convert(Ae.format,Ae.colorSpace),ne=r.convert(Ae.type),tt=b(Ae.internalFormat,Se,ne,Ae.colorSpace,T.isXRRenderTarget===!0),Je=Ue(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Je,tt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,U.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Ne(U.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),q(n.TEXTURE_CUBE_MAP,v,xe);for(let ae=0;ae<6;ae++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let pe=0;pe<v.mipmaps.length;pe++)Me(U.__webglFramebuffer[ae][pe],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,pe);else Me(U.__webglFramebuffer[ae],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);x(v,xe)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(j){let ae=T.texture;for(let pe=0,Ae=ae.length;pe<Ae;pe++){let Se=ae[pe],ne=i.get(Se);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),q(n.TEXTURE_2D,Se,xe),Me(U.__webglFramebuffer,T,Se,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),x(Se,xe)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?ae=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,K.__webglTexture),q(ae,v,xe),a&&v.mipmaps&&v.mipmaps.length>0)for(let pe=0;pe<v.mipmaps.length;pe++)Me(U.__webglFramebuffer[pe],T,v,n.COLOR_ATTACHMENT0,ae,pe);else Me(U.__webglFramebuffer,T,v,n.COLOR_ATTACHMENT0,ae,0);x(v,xe)&&y(ae),t.unbindTexture()}T.depthBuffer&&Pe(T)}function Pt(T){let v=m(T)||a,U=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let K=0,J=U.length;K<J;K++){let j=U[K];if(x(j,v)){let xe=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ae=i.get(j).__webglTexture;t.bindTexture(xe,ae),y(xe),t.unbindTexture()}}}function ge(T){if(a&&T.samples>0&&_e(T)===!1){let v=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],U=T.width,K=T.height,J=n.COLOR_BUFFER_BIT,j=[],xe=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=i.get(T),pe=T.isWebGLMultipleRenderTargets===!0;if(pe)for(let Ae=0;Ae<v.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Ae=0;Ae<v.length;Ae++){j.push(n.COLOR_ATTACHMENT0+Ae),T.depthBuffer&&j.push(xe);let Se=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(Se===!1&&(T.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),pe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[Ae]),Se===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[xe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[xe])),pe){let ne=i.get(v[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,U,K,0,0,U,K,J,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,j)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Ae=0;Ae<v.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,ae.__webglColorRenderbuffer[Ae]);let Se=i.get(v[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,Se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Ue(T){return Math.min(s.maxSamples,T.samples)}function _e(T){let v=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ct(T){let v=o.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function Be(T,v){let U=T.colorSpace,K=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Ya||U!==On&&U!==en&&(nt.getTransfer(U)===lt?a===!1?e.has("EXT_sRGB")===!0&&K===pn?(T.format=Ya,T.minFilter=jt,T.generateMipmaps=!1):v=Zr.sRGBToLinear(v):(K!==pn||J!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}this.allocateTextureUnit=P,this.resetTextureUnits=W,this.setTexture2D=H,this.setTexture2DArray=$,this.setTexture3D=Y,this.setTextureCube=Z,this.rebindTextures=Ke,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=_e}function gy(n,e,t){let i=t.isWebGL2;function s(r,o=en){let a,l=nt.getTransfer(o);if(r===Qn)return n.UNSIGNED_BYTE;if(r===Su)return n.UNSIGNED_SHORT_4_4_4_4;if(r===wu)return n.UNSIGNED_SHORT_5_5_5_1;if(r===lp)return n.BYTE;if(r===hp)return n.SHORT;if(r===Fc)return n.UNSIGNED_SHORT;if(r===bu)return n.INT;if(r===Zn)return n.UNSIGNED_INT;if(r===$n)return n.FLOAT;if(r===zs)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===up)return n.ALPHA;if(r===pn)return n.RGBA;if(r===dp)return n.LUMINANCE;if(r===fp)return n.LUMINANCE_ALPHA;if(r===Mi)return n.DEPTH_COMPONENT;if(r===hs)return n.DEPTH_STENCIL;if(r===Ya)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===pp)return n.RED;if(r===Eu)return n.RED_INTEGER;if(r===mp)return n.RG;if(r===Tu)return n.RG_INTEGER;if(r===Au)return n.RGBA_INTEGER;if(r===oa||r===aa||r===ca||r===la)if(l===lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===oa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===aa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ca)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===la)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===oa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===aa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ca)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===la)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Yl||r===Zl||r===$l||r===Jl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Yl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Zl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===$l)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Jl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ru)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Kl||r===Ql)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Kl)return l===lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ql)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===jl||r===eh||r===th||r===nh||r===ih||r===sh||r===rh||r===oh||r===ah||r===ch||r===lh||r===hh||r===uh||r===dh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===jl)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===eh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===th)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===nh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ih)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===sh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===rh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===oh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ah)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ch)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===lh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===hh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===uh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===dh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ha||r===fh||r===ph)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===ha)return l===lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===fh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ph)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===gp||r===mh||r===gh||r===_h)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===ha)return a.COMPRESSED_RED_RGTC1_EXT;if(r===mh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===gh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===_h)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===vi?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var cc=class extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},at=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},_y={type:"move"},Ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new at,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new at,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new at,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_y)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new at;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},lc=class extends ei{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,_=t.getContextAttributes(),m=null,p=null,x=[],y=[],b=new ue,R=null,E=new zt;E.layers.enable(1),E.viewport=new ut;let A=new zt;A.layers.enable(2),A.viewport=new ut;let N=[E,A],M=new cc;M.layers.enable(1),M.layers.enable(2);let S=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=x[q];return ee===void 0&&(ee=new Ds,x[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=x[q];return ee===void 0&&(ee=new Ds,x[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=x[q];return ee===void 0&&(ee=new Ds,x[q]=ee),ee.getHandSpace()};function z(q){let ee=y.indexOf(q.inputSource);if(ee===-1)return;let he=x[ee];he!==void 0&&(he.update(q.inputSource,q.frame,c||o),he.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",P);for(let q=0;q<x.length;q++){let ee=y[q];ee!==null&&(y[q]=null,x[q].disconnect(ee))}S=null,D=null,e.setRenderTarget(m),f=null,d=null,u=null,s=null,p=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",W),s.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(b),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ee={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Fn(f.framebufferWidth,f.framebufferHeight,{format:pn,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ee=null,he=null,be=null;_.depth&&(be=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=_.stencil?hs:Mi,he=_.stencil?vi:Zn);let Me={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Me),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new Fn(d.textureWidth,d.textureHeight,{format:pn,type:Qn,depthTexture:new io(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let Ne=e.properties.get(p);Ne.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),de.setContext(s),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(q){for(let ee=0;ee<q.removed.length;ee++){let he=q.removed[ee],be=y.indexOf(he);be>=0&&(y[be]=null,x[be].disconnect(he))}for(let ee=0;ee<q.added.length;ee++){let he=q.added[ee],be=y.indexOf(he);if(be===-1){for(let Ne=0;Ne<x.length;Ne++)if(Ne>=y.length){y.push(he),be=Ne;break}else if(y[Ne]===null){y[Ne]=he,be=Ne;break}if(be===-1)break}let Me=x[be];Me&&Me.connect(he)}}let F=new C,H=new C;function $(q,ee,he){F.setFromMatrixPosition(ee.matrixWorld),H.setFromMatrixPosition(he.matrixWorld);let be=F.distanceTo(H),Me=ee.projectionMatrix.elements,Ne=he.projectionMatrix.elements,Fe=Me[14]/(Me[10]-1),Pe=Me[14]/(Me[10]+1),Ke=(Me[9]+1)/Me[5],k=(Me[9]-1)/Me[5],Pt=(Me[8]-1)/Me[0],ge=(Ne[8]+1)/Ne[0],Ue=Fe*Pt,_e=Fe*ge,ct=be/(-Pt+ge),Be=ct*-Pt;ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Be),q.translateZ(ct),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();let T=Fe+ct,v=Pe+ct,U=Ue-Be,K=_e+(be-Be),J=Ke*Pe/v*T,j=k*Pe/v*T;q.projectionMatrix.makePerspective(U,K,J,j,T,v),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function Y(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;M.near=A.near=E.near=q.near,M.far=A.far=E.far=q.far,(S!==M.near||D!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,D=M.far);let ee=q.parent,he=M.cameras;Y(M,ee);for(let be=0;be<he.length;be++)Y(he[be],ee);he.length===2?$(M,E,A):M.projectionMatrix.copy(E.projectionMatrix),Z(q,M,ee)};function Z(q,ee,he){he===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(he.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Za*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)};let Q=null;function te(q,ee){if(h=ee.getViewerPose(c||o),g=ee,h!==null){let he=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let be=!1;he.length!==M.cameras.length&&(M.cameras.length=0,be=!0);for(let Me=0;Me<he.length;Me++){let Ne=he[Me],Fe=null;if(f!==null)Fe=f.getViewport(Ne);else{let Ke=u.getViewSubImage(d,Ne);Fe=Ke.viewport,Me===0&&(e.setRenderTargetTextures(p,Ke.colorTexture,d.ignoreDepthValues?void 0:Ke.depthStencilTexture),e.setRenderTarget(p))}let Pe=N[Me];Pe===void 0&&(Pe=new zt,Pe.layers.enable(Me),Pe.viewport=new ut,N[Me]=Pe),Pe.matrix.fromArray(Ne.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(Ne.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Me===0&&(M.matrix.copy(Pe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),be===!0&&M.cameras.push(Pe)}}for(let he=0;he<x.length;he++){let be=y[he],Me=x[he];be!==null&&Me!==void 0&&Me.update(be,ee,c||o)}Q&&Q(q,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}let de=new Uu;de.setAnimationLoop(te),this.setAnimationLoop=function(q){Q=q},this.dispose=function(){}}};function yy(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Du(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,y,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=e.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let y=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function xy(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,y){let b=y.program;i.uniformBlockBinding(x,b)}function c(x,y){let b=s[x.id];b===void 0&&(g(x),b=h(x),s[x.id]=b,x.addEventListener("dispose",m));let R=y.program;i.updateUBOMapping(x,R);let E=e.render.frame;r[x.id]!==E&&(d(x),r[x.id]=E)}function h(x){let y=u();x.__bindingPointIndex=y;let b=n.createBuffer(),R=x.__size,E=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,R,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,b),b}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let y=s[x.id],b=x.uniforms,R=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let E=0,A=b.length;E<A;E++){let N=Array.isArray(b[E])?b[E]:[b[E]];for(let M=0,S=N.length;M<S;M++){let D=N[M];if(f(D,E,M,R)===!0){let z=D.__offset,W=Array.isArray(D.value)?D.value:[D.value],P=0;for(let F=0;F<W.length;F++){let H=W[F],$=_(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,z+P,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,P),P+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,y,b,R){let E=x.value,A=y+"_"+b;if(R[A]===void 0)return typeof E=="number"||typeof E=="boolean"?R[A]=E:R[A]=E.clone(),!0;{let N=R[A];if(typeof E=="number"||typeof E=="boolean"){if(N!==E)return R[A]=E,!0}else if(N.equals(E)===!1)return N.copy(E),!0}return!1}function g(x){let y=x.uniforms,b=0,R=16;for(let A=0,N=y.length;A<N;A++){let M=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,D=M.length;S<D;S++){let z=M[S],W=Array.isArray(z.value)?z.value:[z.value];for(let P=0,F=W.length;P<F;P++){let H=W[P],$=_(H),Y=b%R;Y!==0&&R-Y<$.boundary&&(b+=R-Y),z.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=b,b+=$.storage}}}let E=b%R;return E>0&&(b+=R-E),x.__size=b,x.__cache={},this}function _(x){let y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){let y=x.target;y.removeEventListener("dispose",m);let b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Hs=class{constructor(e={}){let{canvas:t=Rp(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let f=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gt,this._useLegacyLights=!1,this.toneMapping=Kn,this.toneMappingExposure=1;let y=this,b=!1,R=0,E=0,A=null,N=-1,M=null,S=new ut,D=new ut,z=null,W=new me(0),P=0,F=t.width,H=t.height,$=1,Y=null,Z=null,Q=new ut(0,0,F,H),te=new ut(0,0,F,H),de=!1,q=new Bs,ee=!1,he=!1,be=null,Me=new dt,Ne=new ue,Fe=new C,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ke(){return A===null?$:1}let k=i;function Pt(w,O){for(let V=0;V<w.length;V++){let G=w[V],B=t.getContext(G,O);if(B!==null)return B}return null}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nc}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",ce,!1),k===null){let O=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&O.shift(),k=Pt(O,w),k===null)throw Pt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ge,Ue,_e,ct,Be,T,v,U,K,J,j,xe,ae,pe,Ae,Se,ne,tt,Je,Oe,Ee,ye,Ve,je;function pt(){ge=new zg(k),Ue=new Ig(k,ge,e),ge.init(Ue),ye=new gy(k,ge,Ue),_e=new py(k,ge,Ue),ct=new Hg(k),Be=new ny,T=new my(k,ge,_e,Be,Ue,ye,ct),v=new Ug(y),U=new Fg(y),K=new $p(k,Ue),Ve=new Pg(k,ge,K,Ue),J=new kg(k,K,ct,Ve),j=new Xg(k,J,K,ct),Je=new Wg(k,Ue,T),Se=new Dg(Be),xe=new ty(y,v,U,ge,Ue,Ve,Se),ae=new yy(y,Be),pe=new sy,Ae=new hy(ge,Ue),tt=new Cg(y,v,U,_e,j,d,l),ne=new fy(y,j,Ue),je=new xy(k,ct,Ue,_e),Oe=new Lg(k,ge,ct,Ue),Ee=new Bg(k,ge,ct,Ue),ct.programs=xe.programs,y.capabilities=Ue,y.extensions=ge,y.properties=Be,y.renderLists=pe,y.shadowMap=ne,y.state=_e,y.info=ct}pt();let Ye=new lc(y,k);this.xr=Ye,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let w=ge.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ge.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(F,H,!1))},this.getSize=function(w){return w.set(F,H)},this.setSize=function(w,O,V=!0){if(Ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,H=O,t.width=Math.floor(w*$),t.height=Math.floor(O*$),V===!0&&(t.style.width=w+"px",t.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(F*$,H*$).floor()},this.setDrawingBufferSize=function(w,O,V){F=w,H=O,$=V,t.width=Math.floor(w*V),t.height=Math.floor(O*V),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(Q)},this.setViewport=function(w,O,V,G){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,O,V,G),_e.viewport(S.copy(Q).multiplyScalar($).floor())},this.getScissor=function(w){return w.copy(te)},this.setScissor=function(w,O,V,G){w.isVector4?te.set(w.x,w.y,w.z,w.w):te.set(w,O,V,G),_e.scissor(D.copy(te).multiplyScalar($).floor())},this.getScissorTest=function(){return de},this.setScissorTest=function(w){_e.setScissorTest(de=w)},this.setOpaqueSort=function(w){Y=w},this.setTransparentSort=function(w){Z=w},this.getClearColor=function(w){return w.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(w=!0,O=!0,V=!0){let G=0;if(w){let B=!1;if(A!==null){let fe=A.texture.format;B=fe===Au||fe===Tu||fe===Eu}if(B){let fe=A.texture.type,we=fe===Qn||fe===Zn||fe===Fc||fe===vi||fe===Su||fe===wu,Le=tt.getClearColor(),De=tt.getClearAlpha(),Xe=Le.r,ze=Le.g,He=Le.b;we?(f[0]=Xe,f[1]=ze,f[2]=He,f[3]=De,k.clearBufferuiv(k.COLOR,0,f)):(g[0]=Xe,g[1]=ze,g[2]=He,g[3]=De,k.clearBufferiv(k.COLOR,0,g))}else G|=k.COLOR_BUFFER_BIT}O&&(G|=k.DEPTH_BUFFER_BIT),V&&(G|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),pe.dispose(),Ae.dispose(),Be.dispose(),v.dispose(),U.dispose(),j.dispose(),Ve.dispose(),je.dispose(),xe.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",Bt),Ye.removeEventListener("sessionend",ot),be&&(be.dispose(),be=null),Ht.stop()};function se(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let w=ct.autoReset,O=ne.enabled,V=ne.autoUpdate,G=ne.needsUpdate,B=ne.type;pt(),ct.autoReset=w,ne.enabled=O,ne.autoUpdate=V,ne.needsUpdate=G,ne.type=B}function ce(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function le(w){let O=w.target;O.removeEventListener("dispose",le),Ie(O)}function Ie(w){Re(w),Be.remove(w)}function Re(w){let O=Be.get(w).programs;O!==void 0&&(O.forEach(function(V){xe.releaseProgram(V)}),w.isShaderMaterial&&xe.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,V,G,B,fe){O===null&&(O=Pe);let we=B.isMesh&&B.matrixWorld.determinant()<0,Le=vf(w,O,V,G,B);_e.setMaterial(G,we);let De=V.index,Xe=1;if(G.wireframe===!0){if(De=J.getWireframeAttribute(V),De===void 0)return;Xe=2}let ze=V.drawRange,He=V.attributes.position,xt=ze.start*Xe,Yt=(ze.start+ze.count)*Xe;fe!==null&&(xt=Math.max(xt,fe.start*Xe),Yt=Math.min(Yt,(fe.start+fe.count)*Xe)),De!==null?(xt=Math.max(xt,0),Yt=Math.min(Yt,De.count)):He!=null&&(xt=Math.max(xt,0),Yt=Math.min(Yt,He.count));let Rt=Yt-xt;if(Rt<0||Rt===1/0)return;Ve.setup(B,G,Le,V,De);let An,ft=Oe;if(De!==null&&(An=K.get(De),ft=Ee,ft.setIndex(An)),B.isMesh)G.wireframe===!0?(_e.setLineWidth(G.wireframeLinewidth*Ke()),ft.setMode(k.LINES)):ft.setMode(k.TRIANGLES);else if(B.isLine){let Ze=G.linewidth;Ze===void 0&&(Ze=1),_e.setLineWidth(Ze*Ke()),B.isLineSegments?ft.setMode(k.LINES):B.isLineLoop?ft.setMode(k.LINE_LOOP):ft.setMode(k.LINE_STRIP)}else B.isPoints?ft.setMode(k.POINTS):B.isSprite&&ft.setMode(k.TRIANGLES);if(B.isBatchedMesh)ft.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)ft.renderInstances(xt,Rt,B.count);else if(V.isInstancedBufferGeometry){let Ze=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ea=Math.min(V.instanceCount,Ze);ft.renderInstances(xt,Rt,ea)}else ft.render(xt,Rt)};function st(w,O,V){w.transparent===!0&&w.side===dn&&w.forceSinglePass===!1?(w.side=kt,w.needsUpdate=!0,ur(w,O,V),w.side=jn,w.needsUpdate=!0,ur(w,O,V),w.side=dn):ur(w,O,V)}this.compile=function(w,O,V=null){V===null&&(V=w),m=Ae.get(V),m.init(),x.push(m),V.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),w!==V&&w.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(y._useLegacyLights);let G=new Set;return w.traverse(function(B){let fe=B.material;if(fe)if(Array.isArray(fe))for(let we=0;we<fe.length;we++){let Le=fe[we];st(Le,V,B),G.add(Le)}else st(fe,V,B),G.add(fe)}),x.pop(),m=null,G},this.compileAsync=function(w,O,V=null){let G=this.compile(w,O,V);return new Promise(B=>{function fe(){if(G.forEach(function(we){Be.get(we).currentProgram.isReady()&&G.delete(we)}),G.size===0){B(w);return}setTimeout(fe,10)}ge.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let rt=null;function At(w){rt&&rt(w)}function Bt(){Ht.stop()}function ot(){Ht.start()}let Ht=new Uu;Ht.setAnimationLoop(At),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(w){rt=w,Ye.setAnimationLoop(w),w===null?Ht.stop():Ht.start()},Ye.addEventListener("sessionstart",Bt),Ye.addEventListener("sessionend",ot),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(O),O=Ye.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,O,A),m=Ae.get(w,x.length),m.init(),x.push(m),Me.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),q.setFromProjectionMatrix(Me),he=this.localClippingEnabled,ee=Se.init(this.clippingPlanes,he),_=pe.get(w,p.length),_.init(),p.push(_),xn(w,O,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(Y,Z),this.info.render.frame++,ee===!0&&Se.beginShadows();let V=m.state.shadowsArray;if(ne.render(V,w,O),ee===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),tt.render(_,w),m.setupLights(y._useLegacyLights),O.isArrayCamera){let G=O.cameras;for(let B=0,fe=G.length;B<fe;B++){let we=G[B];Cl(_,w,we,we.viewport)}}else Cl(_,w,O);A!==null&&(T.updateMultisampleRenderTarget(A),T.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(y,w,O),Ve.resetDefaultState(),N=-1,M=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function xn(w,O,V,G){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){G&&Fe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Me);let we=j.update(w),Le=w.material;Le.visible&&_.push(w,we,Le,V,Fe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||q.intersectsObject(w))){let we=j.update(w),Le=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Fe.copy(w.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Fe.copy(we.boundingSphere.center)),Fe.applyMatrix4(w.matrixWorld).applyMatrix4(Me)),Array.isArray(Le)){let De=we.groups;for(let Xe=0,ze=De.length;Xe<ze;Xe++){let He=De[Xe],xt=Le[He.materialIndex];xt&&xt.visible&&_.push(w,we,xt,V,Fe.z,He)}}else Le.visible&&_.push(w,we,Le,V,Fe.z,null)}}let fe=w.children;for(let we=0,Le=fe.length;we<Le;we++)xn(fe[we],O,V,G)}function Cl(w,O,V,G){let B=w.opaque,fe=w.transmissive,we=w.transparent;m.setupLightsView(V),ee===!0&&Se.setGlobalState(y.clippingPlanes,V),fe.length>0&&xf(B,fe,O,V),G&&_e.viewport(S.copy(G)),B.length>0&&hr(B,O,V),fe.length>0&&hr(fe,O,V),we.length>0&&hr(we,O,V),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function xf(w,O,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;let fe=Ue.isWebGL2;be===null&&(be=new Fn(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?zs:Qn,minFilter:Fs,samples:fe?4:0})),y.getDrawingBufferSize(Ne),fe?be.setSize(Ne.x,Ne.y):be.setSize($a(Ne.x),$a(Ne.y));let we=y.getRenderTarget();y.setRenderTarget(be),y.getClearColor(W),P=y.getClearAlpha(),P<1&&y.setClearColor(16777215,.5),y.clear();let Le=y.toneMapping;y.toneMapping=Kn,hr(w,V,G),T.updateMultisampleRenderTarget(be),T.updateRenderTargetMipmap(be);let De=!1;for(let Xe=0,ze=O.length;Xe<ze;Xe++){let He=O[Xe],xt=He.object,Yt=He.geometry,Rt=He.material,An=He.group;if(Rt.side===dn&&xt.layers.test(G.layers)){let ft=Rt.side;Rt.side=kt,Rt.needsUpdate=!0,Pl(xt,V,G,Yt,Rt,An),Rt.side=ft,Rt.needsUpdate=!0,De=!0}}De===!0&&(T.updateMultisampleRenderTarget(be),T.updateRenderTargetMipmap(be)),y.setRenderTarget(we),y.setClearColor(W,P),y.toneMapping=Le}function hr(w,O,V){let G=O.isScene===!0?O.overrideMaterial:null;for(let B=0,fe=w.length;B<fe;B++){let we=w[B],Le=we.object,De=we.geometry,Xe=G===null?we.material:G,ze=we.group;Le.layers.test(V.layers)&&Pl(Le,O,V,De,Xe,ze)}}function Pl(w,O,V,G,B,fe){w.onBeforeRender(y,O,V,G,B,fe),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(y,O,V,G,w,fe),B.transparent===!0&&B.side===dn&&B.forceSinglePass===!1?(B.side=kt,B.needsUpdate=!0,y.renderBufferDirect(V,O,G,B,w,fe),B.side=jn,B.needsUpdate=!0,y.renderBufferDirect(V,O,G,B,w,fe),B.side=dn):y.renderBufferDirect(V,O,G,B,w,fe),w.onAfterRender(y,O,V,G,B,fe)}function ur(w,O,V){O.isScene!==!0&&(O=Pe);let G=Be.get(w),B=m.state.lights,fe=m.state.shadowsArray,we=B.state.version,Le=xe.getParameters(w,B.state,fe,O,V),De=xe.getProgramCacheKey(Le),Xe=G.programs;G.environment=w.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(w.isMeshStandardMaterial?U:v).get(w.envMap||G.environment),Xe===void 0&&(w.addEventListener("dispose",le),Xe=new Map,G.programs=Xe);let ze=Xe.get(De);if(ze!==void 0){if(G.currentProgram===ze&&G.lightsStateVersion===we)return Il(w,Le),ze}else Le.uniforms=xe.getUniforms(w),w.onBuild(V,Le,y),w.onBeforeCompile(Le,y),ze=xe.acquireProgram(Le,De),Xe.set(De,ze),G.uniforms=Le.uniforms;let He=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(He.clippingPlanes=Se.uniform),Il(w,Le),G.needsLights=bf(w),G.lightsStateVersion=we,G.needsLights&&(He.ambientLightColor.value=B.state.ambient,He.lightProbe.value=B.state.probe,He.directionalLights.value=B.state.directional,He.directionalLightShadows.value=B.state.directionalShadow,He.spotLights.value=B.state.spot,He.spotLightShadows.value=B.state.spotShadow,He.rectAreaLights.value=B.state.rectArea,He.ltc_1.value=B.state.rectAreaLTC1,He.ltc_2.value=B.state.rectAreaLTC2,He.pointLights.value=B.state.point,He.pointLightShadows.value=B.state.pointShadow,He.hemisphereLights.value=B.state.hemi,He.directionalShadowMap.value=B.state.directionalShadowMap,He.directionalShadowMatrix.value=B.state.directionalShadowMatrix,He.spotShadowMap.value=B.state.spotShadowMap,He.spotLightMatrix.value=B.state.spotLightMatrix,He.spotLightMap.value=B.state.spotLightMap,He.pointShadowMap.value=B.state.pointShadowMap,He.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=ze,G.uniformsList=null,ze}function Ll(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=as.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Il(w,O){let V=Be.get(w);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function vf(w,O,V,G,B){O.isScene!==!0&&(O=Pe),T.resetTextureUnits();let fe=O.fog,we=G.isMeshStandardMaterial?O.environment:null,Le=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:On,De=(G.isMeshStandardMaterial?U:v).get(G.envMap||we),Xe=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ze=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),He=!!V.morphAttributes.position,xt=!!V.morphAttributes.normal,Yt=!!V.morphAttributes.color,Rt=Kn;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Rt=y.toneMapping);let An=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ft=An!==void 0?An.length:0,Ze=Be.get(G),ea=m.state.lights;if(ee===!0&&(he===!0||w!==M)){let Kt=w===M&&G.id===N;Se.setState(G,w,Kt)}let mt=!1;G.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==ea.state.version||Ze.outputColorSpace!==Le||B.isBatchedMesh&&Ze.batching===!1||!B.isBatchedMesh&&Ze.batching===!0||B.isInstancedMesh&&Ze.instancing===!1||!B.isInstancedMesh&&Ze.instancing===!0||B.isSkinnedMesh&&Ze.skinning===!1||!B.isSkinnedMesh&&Ze.skinning===!0||B.isInstancedMesh&&Ze.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ze.instancingColor===!1&&B.instanceColor!==null||Ze.envMap!==De||G.fog===!0&&Ze.fog!==fe||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Se.numPlanes||Ze.numIntersection!==Se.numIntersection)||Ze.vertexAlphas!==Xe||Ze.vertexTangents!==ze||Ze.morphTargets!==He||Ze.morphNormals!==xt||Ze.morphColors!==Yt||Ze.toneMapping!==Rt||Ue.isWebGL2===!0&&Ze.morphTargetsCount!==ft)&&(mt=!0):(mt=!0,Ze.__version=G.version);let ui=Ze.currentProgram;mt===!0&&(ui=ur(G,O,B));let Dl=!1,Es=!1,ta=!1,Nt=ui.getUniforms(),di=Ze.uniforms;if(_e.useProgram(ui.program)&&(Dl=!0,Es=!0,ta=!0),G.id!==N&&(N=G.id,Es=!0),Dl||M!==w){Nt.setValue(k,"projectionMatrix",w.projectionMatrix),Nt.setValue(k,"viewMatrix",w.matrixWorldInverse);let Kt=Nt.map.cameraPosition;Kt!==void 0&&Kt.setValue(k,Fe.setFromMatrixPosition(w.matrixWorld)),Ue.logarithmicDepthBuffer&&Nt.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Nt.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Es=!0,ta=!0)}if(B.isSkinnedMesh){Nt.setOptional(k,B,"bindMatrix"),Nt.setOptional(k,B,"bindMatrixInverse");let Kt=B.skeleton;Kt&&(Ue.floatVertexTextures?(Kt.boneTexture===null&&Kt.computeBoneTexture(),Nt.setValue(k,"boneTexture",Kt.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Nt.setOptional(k,B,"batchingTexture"),Nt.setValue(k,"batchingTexture",B._matricesTexture,T));let na=V.morphAttributes;if((na.position!==void 0||na.normal!==void 0||na.color!==void 0&&Ue.isWebGL2===!0)&&Je.update(B,V,ui),(Es||Ze.receiveShadow!==B.receiveShadow)&&(Ze.receiveShadow=B.receiveShadow,Nt.setValue(k,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(di.envMap.value=De,di.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Es&&(Nt.setValue(k,"toneMappingExposure",y.toneMappingExposure),Ze.needsLights&&Mf(di,ta),fe&&G.fog===!0&&ae.refreshFogUniforms(di,fe),ae.refreshMaterialUniforms(di,G,$,H,be),as.upload(k,Ll(Ze),di,T)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(as.upload(k,Ll(Ze),di,T),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Nt.setValue(k,"center",B.center),Nt.setValue(k,"modelViewMatrix",B.modelViewMatrix),Nt.setValue(k,"normalMatrix",B.normalMatrix),Nt.setValue(k,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Kt=G.uniformsGroups;for(let ia=0,Sf=Kt.length;ia<Sf;ia++)if(Ue.isWebGL2){let Ul=Kt[ia];je.update(Ul,ui),je.bind(Ul,ui)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ui}function Mf(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function bf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,O,V){Be.get(w.texture).__webglTexture=O,Be.get(w.depthTexture).__webglTexture=V;let G=Be.get(w);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,O){let V=Be.get(w);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,V=0){A=w,R=O,E=V;let G=!0,B=null,fe=!1,we=!1;if(w){let De=Be.get(w);De.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(k.FRAMEBUFFER,null),G=!1):De.__webglFramebuffer===void 0?T.setupRenderTarget(w):De.__hasExternalTextures&&T.rebindTextures(w,Be.get(w.texture).__webglTexture,Be.get(w.depthTexture).__webglTexture);let Xe=w.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(we=!0);let ze=Be.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ze[O])?B=ze[O][V]:B=ze[O],fe=!0):Ue.isWebGL2&&w.samples>0&&T.useMultisampledRTT(w)===!1?B=Be.get(w).__webglMultisampledFramebuffer:Array.isArray(ze)?B=ze[V]:B=ze,S.copy(w.viewport),D.copy(w.scissor),z=w.scissorTest}else S.copy(Q).multiplyScalar($).floor(),D.copy(te).multiplyScalar($).floor(),z=de;if(_e.bindFramebuffer(k.FRAMEBUFFER,B)&&Ue.drawBuffers&&G&&_e.drawBuffers(w,B),_e.viewport(S),_e.scissor(D),_e.setScissorTest(z),fe){let De=Be.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+O,De.__webglTexture,V)}else if(we){let De=Be.get(w.texture),Xe=O||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,De.__webglTexture,V||0,Xe)}N=-1},this.readRenderTargetPixels=function(w,O,V,G,B,fe,we){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we]),Le){_e.bindFramebuffer(k.FRAMEBUFFER,Le);try{let De=w.texture,Xe=De.format,ze=De.type;if(Xe!==pn&&ye.convert(Xe)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let He=ze===zs&&(ge.has("EXT_color_buffer_half_float")||Ue.isWebGL2&&ge.has("EXT_color_buffer_float"));if(ze!==Qn&&ye.convert(ze)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===$n&&(Ue.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-G&&V>=0&&V<=w.height-B&&k.readPixels(O,V,G,B,ye.convert(Xe),ye.convert(ze),fe)}finally{let De=A!==null?Be.get(A).__webglFramebuffer:null;_e.bindFramebuffer(k.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(w,O,V=0){let G=Math.pow(2,-V),B=Math.floor(O.image.width*G),fe=Math.floor(O.image.height*G);T.setTexture2D(O,0),k.copyTexSubImage2D(k.TEXTURE_2D,V,0,0,w.x,w.y,B,fe),_e.unbindTexture()},this.copyTextureToTexture=function(w,O,V,G=0){let B=O.image.width,fe=O.image.height,we=ye.convert(V.format),Le=ye.convert(V.type);T.setTexture2D(V,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,V.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,V.unpackAlignment),O.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,G,w.x,w.y,B,fe,we,Le,O.image.data):O.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,G,w.x,w.y,O.mipmaps[0].width,O.mipmaps[0].height,we,O.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,G,w.x,w.y,we,Le,O.image),G===0&&V.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(w,O,V,G,B=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let fe=w.max.x-w.min.x+1,we=w.max.y-w.min.y+1,Le=w.max.z-w.min.z+1,De=ye.convert(G.format),Xe=ye.convert(G.type),ze;if(G.isData3DTexture)T.setTexture3D(G,0),ze=k.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)T.setTexture2DArray(G,0),ze=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,G.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,G.unpackAlignment);let He=k.getParameter(k.UNPACK_ROW_LENGTH),xt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Yt=k.getParameter(k.UNPACK_SKIP_PIXELS),Rt=k.getParameter(k.UNPACK_SKIP_ROWS),An=k.getParameter(k.UNPACK_SKIP_IMAGES),ft=V.isCompressedTexture?V.mipmaps[B]:V.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,ft.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ft.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,w.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,w.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,w.min.z),V.isDataTexture||V.isData3DTexture?k.texSubImage3D(ze,B,O.x,O.y,O.z,fe,we,Le,De,Xe,ft.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(ze,B,O.x,O.y,O.z,fe,we,Le,De,ft.data)):k.texSubImage3D(ze,B,O.x,O.y,O.z,fe,we,Le,De,Xe,ft),k.pixelStorei(k.UNPACK_ROW_LENGTH,He),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,xt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Yt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Rt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,An),B===0&&G.generateMipmaps&&k.generateMipmap(ze),_e.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),_e.unbindTexture()},this.resetState=function(){R=0,E=0,A=null,_e.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===kc?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===Ao?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===gt?bi:Cu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===bi?gt:On}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},hc=class extends Hs{};hc.prototype.isWebGL1Renderer=!0;var so=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new me(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ro=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Vs=class extends bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},cu=new C,lu=new C,hu=new dt,Oa=new us,Ur=new wi,uc=class extends It{constructor(e=new _t,t=new Vs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)cu.fromBufferAttribute(t,s-1),lu.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=cu.distanceTo(lu);e.setAttribute("lineDistance",new $e(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ur.copy(i.boundingSphere),Ur.applyMatrix4(s),Ur.radius+=r,e.ray.intersectsSphere(Ur)===!1)return;hu.copy(s).invert(),Oa.copy(e.ray).applyMatrix4(hu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new C,h=new C,u=new C,d=new C,f=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let p=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let y=p,b=x-1;y<b;y+=f){let R=g.getX(y),E=g.getX(y+1);if(c.fromBufferAttribute(m,R),h.fromBufferAttribute(m,E),Oa.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let N=e.ray.origin.distanceTo(d);N<e.near||N>e.far||t.push({distance:N,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let y=p,b=x-1;y<b;y+=f){if(c.fromBufferAttribute(m,y),h.fromBufferAttribute(m,y+1),Oa.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||t.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},uu=new C,du=new C,oo=class extends uc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)uu.fromBufferAttribute(t,s),du.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+uu.distanceTo(du);e.setAttribute("lineDistance",new $e(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Gs=class extends bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},fu=new dt,dc=new us,Nr=new wi,Or=new C,ao=class extends It{constructor(e=new _t,t=new Gs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nr.copy(i.boundingSphere),Nr.applyMatrix4(s),Nr.radius+=r,e.ray.intersectsSphere(Nr)===!1)return;fu.copy(s).invert(),dc.copy(e.ray).applyMatrix4(fu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){let m=c.getX(g);Or.fromBufferAttribute(u,m),pu(Or,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Or.fromBufferAttribute(u,g),pu(Or,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function pu(n,e,t,i,s,r,o){let a=dc.distanceSqToPoint(n);if(a<t){let l=new C;dc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var Ws=class extends tn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ue:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new C,s=[],r=[],o=[],a=new C,l=new dt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Lt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Lt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Xs=class extends nn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let i=t||new ue,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},fc=class extends Xs{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Hc(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Fr=new C,Fa=new Hc,za=new Hc,ka=new Hc,pc=class extends nn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new C){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Fr.subVectors(s[0],s[1]).add(s[0]),c=Fr);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Fr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Fr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Fa.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),za.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),ka.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Fa.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),za.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ka.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Fa.calc(l),za.calc(l),ka.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function mu(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function vy(n,e){let t=1-n;return t*t*e}function My(n,e){return 2*(1-n)*n*e}function by(n,e){return n*n*e}function Us(n,e,t,i){return vy(n,e)+My(n,t)+by(n,i)}function Sy(n,e){let t=1-n;return t*t*t*e}function wy(n,e){let t=1-n;return 3*t*t*n*e}function Ey(n,e){return 3*(1-n)*n*n*e}function Ty(n,e){return n*n*n*e}function Ns(n,e,t,i,s){return Sy(n,e)+wy(n,t)+Ey(n,i)+Ty(n,s)}var co=class extends nn{constructor(e=new ue,t=new ue,i=new ue,s=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ue){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ns(e,s.x,r.x,o.x,a.x),Ns(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},mc=class extends nn{constructor(e=new C,t=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ns(e,s.x,r.x,o.x,a.x),Ns(e,s.y,r.y,o.y,a.y),Ns(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},lo=class extends nn{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gc=class extends nn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ho=class extends nn{constructor(e=new ue,t=new ue,i=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ue){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Us(e,s.x,r.x,o.x),Us(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_c=class extends nn{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Us(e,s.x,r.x,o.x),Us(e,s.y,r.y,o.y),Us(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},uo=class extends nn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(mu(a,l.x,c.x,h.x,u.x),mu(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ue().fromArray(s))}return this}},gu=Object.freeze({__proto__:null,ArcCurve:fc,CatmullRomCurve3:pc,CubicBezierCurve:co,CubicBezierCurve3:mc,EllipseCurve:Xs,LineCurve:lo,LineCurve3:gc,QuadraticBezierCurve:ho,QuadraticBezierCurve3:_c,SplineCurve:uo}),yc=class extends nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gu[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new gu[s.type]().fromJSON(s))}return this}},xc=class extends yc{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new lo(this.currentPoint.clone(),new ue(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new ho(this.currentPoint.clone(),new ue(e,t),new ue(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new co(this.currentPoint.clone(),new ue(e,t),new ue(i,s),new ue(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new uo(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Xs(e,t,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},vc=class n extends _t{constructor(e=[new ue(0,-.5),new ue(.5,0),new ue(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Lt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new C,d=new ue,f=new C,g=new C,_=new C,m=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let x=0;x<=t;x++){let y=i+x*h*s,b=Math.sin(y),R=Math.cos(y);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*b,u.y=e[E].y,u.z=e[E].x*R,o.push(u.x,u.y,u.z),d.x=x/t,d.y=E/(e.length-1),a.push(d.x,d.y);let A=l[3*E+0]*b,N=l[3*E+1],M=l[3*E+0]*R;c.push(A,N,M)}}for(let x=0;x<t;x++)for(let y=0;y<e.length-1;y++){let b=y+x*e.length,R=b,E=b+e.length,A=b+e.length+1,N=b+1;r.push(R,E,N),r.push(A,N,E)}this.setIndex(r),this.setAttribute("position",new $e(o,3)),this.setAttribute("uv",new $e(a,2)),this.setAttribute("normal",new $e(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},fo=class n extends vc{constructor(e=1,t=1,i=4,s=8){let r=new xc;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},po=class n extends _t{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new C,h=new ue;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new $e(o,3)),this.setAttribute("normal",new $e(a,3)),this.setAttribute("uv",new $e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ti=class n extends _t{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,_=[],m=i/2,p=0;x(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(d,3)),this.setAttribute("uv",new $e(f,2));function x(){let b=new C,R=new C,E=0,A=(t-e)/i;for(let N=0;N<=r;N++){let M=[],S=N/r,D=S*(t-e)+e;for(let z=0;z<=s;z++){let W=z/s,P=W*l+a,F=Math.sin(P),H=Math.cos(P);R.x=D*F,R.y=-S*i+m,R.z=D*H,u.push(R.x,R.y,R.z),b.set(F,A,H).normalize(),d.push(b.x,b.y,b.z),f.push(W,1-S),M.push(g++)}_.push(M)}for(let N=0;N<s;N++)for(let M=0;M<r;M++){let S=_[M][N],D=_[M+1][N],z=_[M+1][N+1],W=_[M][N+1];h.push(S,D,W),h.push(D,z,W),E+=6}c.addGroup(p,E,0),p+=E}function y(b){let R=g,E=new ue,A=new C,N=0,M=b===!0?e:t,S=b===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;let D=g;for(let z=0;z<=s;z++){let P=z/s*l+a,F=Math.cos(P),H=Math.sin(P);A.x=M*H,A.y=m*S,A.z=M*F,u.push(A.x,A.y,A.z),d.push(0,S,0),E.x=F*.5+.5,E.y=H*.5*S+.5,f.push(E.x,E.y),g++}for(let z=0;z<s;z++){let W=R+z,P=D+z;b===!0?h.push(P,P+1,W):h.push(P+1,P,W),N+=3}c.addGroup(p,N,b===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},mo=class n extends ti{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Mc=class n extends _t{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new $e(r,3)),this.setAttribute("normal",new $e(r.slice(),3)),this.setAttribute("uv",new $e(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let y=new C,b=new C,R=new C;for(let E=0;E<t.length;E+=3)f(t[E+0],y),f(t[E+1],b),f(t[E+2],R),l(y,b,R,x)}function l(x,y,b,R){let E=R+1,A=[];for(let N=0;N<=E;N++){A[N]=[];let M=x.clone().lerp(b,N/E),S=y.clone().lerp(b,N/E),D=E-N;for(let z=0;z<=D;z++)z===0&&N===E?A[N][z]=M:A[N][z]=M.clone().lerp(S,z/D)}for(let N=0;N<E;N++)for(let M=0;M<2*(E-N)-1;M++){let S=Math.floor(M/2);M%2===0?(d(A[N][S+1]),d(A[N+1][S]),d(A[N][S])):(d(A[N][S+1]),d(A[N+1][S+1]),d(A[N+1][S]))}}function c(x){let y=new C;for(let b=0;b<r.length;b+=3)y.x=r[b+0],y.y=r[b+1],y.z=r[b+2],y.normalize().multiplyScalar(x),r[b+0]=y.x,r[b+1]=y.y,r[b+2]=y.z}function h(){let x=new C;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];let b=m(x)/2/Math.PI+.5,R=p(x)/Math.PI+.5;o.push(b,1-R)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){let y=o[x+0],b=o[x+2],R=o[x+4],E=Math.max(y,b,R),A=Math.min(y,b,R);E>.9&&A<.1&&(y<.2&&(o[x+0]+=1),b<.2&&(o[x+2]+=1),R<.2&&(o[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,y){let b=x*3;y.x=e[b+0],y.y=e[b+1],y.z=e[b+2]}function g(){let x=new C,y=new C,b=new C,R=new C,E=new ue,A=new ue,N=new ue;for(let M=0,S=0;M<r.length;M+=9,S+=6){x.set(r[M+0],r[M+1],r[M+2]),y.set(r[M+3],r[M+4],r[M+5]),b.set(r[M+6],r[M+7],r[M+8]),E.set(o[S+0],o[S+1]),A.set(o[S+2],o[S+3]),N.set(o[S+4],o[S+5]),R.copy(x).add(y).add(b).divideScalar(3);let D=m(R);_(E,S+0,x,D),_(A,S+2,y,D),_(N,S+4,b,D)}}function _(x,y,b,R){R<0&&x.x===1&&(o[y]=x.x-1),b.x===0&&b.z===0&&(o[y]=R/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var go=class n extends Mc{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var _o=class n extends _t{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new C,g=new ue;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){let p=r+m/i*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){let m=_*(i+1);for(let p=0;p<i;p++){let x=p+m,y=x,b=x+i+1,R=x+i+2,E=x+1;a.push(y,b,E),a.push(b,R,E)}}this.setIndex(a),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Ti=class n extends _t{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new C,d=new C,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){let x=[],y=p/i,b=0;p===0&&o===0?b=.5/t:p===i&&l===Math.PI&&(b=-.5/t);for(let R=0;R<=t;R++){let E=R/t;u.x=-e*Math.cos(s+E*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+E*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(E+b,1-y),x.push(c++)}h.push(x)}for(let p=0;p<i;p++)for(let x=0;x<t;x++){let y=h[p][x+1],b=h[p][x],R=h[p+1][x],E=h[p+1][x+1];(p!==0||o>0)&&f.push(y,b,E),(p!==i-1||l<Math.PI)&&f.push(b,R,E)}this.setIndex(f),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var yo=class n extends _t{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new C,u=new C,d=new C;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let _=g/s*r,m=f/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,x=(s+1)*f+g;o.push(_,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(l,3)),this.setAttribute("uv",new $e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ps=class extends bn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new me(16777215),this.specular=new me(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zc,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Jt=class extends bn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zc,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function zr(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Ay(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ms=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},bc=class extends ms{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yh,endingEnd:yh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case xh:r=e,a=2*t-i;break;case vh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case xh:o=e,l=2*i-t;break;case vh:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,x=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*_+.5*g,b=f*m-f*_;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+x*o[c+R]+y*o[l+R]+b*o[u+R];return r}},Sc=class extends ms{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},wc=class extends ms{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},gn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zr(t,this.TimeBufferType),this.values=zr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:zr(e.times,Array),values:zr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new wc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Sc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Hr:t=this.InterpolantFactoryMethodDiscrete;break;case Vr:t=this.InterpolantFactoryMethodLinear;break;case ua:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hr;case this.InterpolantFactoryMethodLinear:return Vr;case this.InterpolantFactoryMethodSmooth:return ua}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Ay(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ua,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=Vr;var Ai=class extends gn{};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=Hr;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Ec=class extends gn{};Ec.prototype.ValueTypeName="color";var Tc=class extends gn{};Tc.prototype.ValueTypeName="number";var Ac=class extends ms{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Mn.slerpFlat(r,0,o,c-a,o,c,l);return r}},qs=class extends gn{InterpolantFactoryMethodLinear(e){return new Ac(this.times,this.values,this.getValueSize(),e)}};qs.prototype.ValueTypeName="quaternion";qs.prototype.DefaultInterpolation=Vr;qs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends gn{};Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=Hr;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Rc=class extends gn{};Rc.prototype.ValueTypeName="vector";var Cc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Ry=new Cc,Pc=class{constructor(e){this.manager=e!==void 0?e:Ry,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Pc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ys=class extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},xo=class extends Ys{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ba=new dt,_u=new C,yu=new C,vo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bs,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;_u.setFromMatrixPosition(e.matrixWorld),t.position.copy(_u),yu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yu),t.updateMatrixWorld(),Ba.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ba),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ba)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var xu=new dt,Ls=new C,Ha=new C,Lc=class extends vo{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ls.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ls),Ha.copy(i.position),Ha.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ha),i.updateMatrixWorld(),s.makeTranslation(-Ls.x,-Ls.y,-Ls.z),xu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xu)}},Mo=class extends Ys{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Lc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ic=class extends vo{constructor(){super(new to(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},bo=class extends Ys{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new Ic}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Vc="\\[\\]\\.:\\/",Cy=new RegExp("["+Vc+"]","g"),Gc="[^"+Vc+"]",Py="[^"+Vc.replace("\\.","")+"]",Ly=/((?:WC+[\/:])*)/.source.replace("WC",Gc),Iy=/(WCOD+)?/.source.replace("WCOD",Py),Dy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gc),Uy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gc),Ny=new RegExp("^"+Ly+Iy+Dy+Uy+"$"),Oy=["material","materials","bones","map"],Dc=class{constructor(e,t,i){let s=i||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ht=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cy,"")}static parseTrackName(e){let t=Ny.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Oy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ht.Composite=Dc;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yv=new Float32Array(1);var So=class{constructor(e,t,i=0,s=1/0){this.ray=new us(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new ks,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Uc(e,this,i,t),i.sort(vu),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Uc(e[s],this,i,t);return i.sort(vu),i}};function vu(n,e){return n.distance-e.distance}function Uc(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)Uc(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nc);async function Co(n){let e=await fetch(n,{cache:"no-cache"});if(!e.ok)throw new Error(`Failed to load ${n}: ${e.status}`);return e.json()}async function Bu(){if(globalThis.__PIZZA_DATA__)return globalThis.__PIZZA_DATA__;let[n,e,t]=await Promise.all([Co("data/economy.json"),Co("data/strings/en.json"),Co("data/locations/index.json")]),i=await Promise.all(t.map(r=>Co(`data/locations/${r}.json`))),s=Object.fromEntries(i.map(r=>[r.id,r]));return{economy:n,strings:e,locations:s}}var Hu={};function Vu(n){Hu=n}function L(n,e={}){let t=Hu[n];if(t===void 0)return console.warn("[i18n] missing key",n),n;for(let i of Object.keys(e))t=t.split("{"+i+"}").join(String(e[i]));return t}var Fy=new Intl.NumberFormat(void 0,{notation:"compact",maximumFractionDigits:1}),zy=new Intl.NumberFormat(void 0,{maximumFractionDigits:0}),ky=[[1e9,"B"],[1e12,"T"],[1e15,"Qa"],[1e18,"Qi"],[1e21,"Sx"],[1e24,"Sp"],[1e27,"Oc"],[1e30,"No"],[1e33,"Dc"]];function Gu(n){let e=Math.abs(n),t=null;for(let s of ky)e>=s[0]&&(t=s);return t?parseFloat((n/t[0]).toFixed(2))+t[1]:null}function Wc(n){let e=Math.floor(n);return Gu(e)??Fy.format(e)}function Mt(n){let e=Math.floor(n);return Gu(e)??zy.format(e)}function Xc(n){let e=Math.floor(n/3600),t=Math.floor(n%3600/60);return e>0?`${e}h ${t}m`:`${t}m`}function Wu(n){return n<10?n.toFixed(1):Wc(n)}var qc={schemaVersion:2,rngSeed:1234567,cash:0,lifetimeCash:0,gameTime:0,dayClock:.3,savedAt:0,createdAt:0,location:"corner",unlockedLocations:{corner:!0,sideStreet:!1},upgrades:{oven:0,counter:0,cheese:0,decor:0,neon:0,scooter:0,marketing:0,pizzaSchool:0,megaOven:0},staff:{cashier:0,cook:0},staffing:{cashier:0,cook:0},shops:1,styles:{margherita:!0,pepperoni:!1,veggie:!1,seasonal:!1},franchise:{points:0,count:0,lifetimeAtLast:0,readyNotified:!1},tutorialStep:0,tutorialDone:!1,stats:{ordersTaken:0,manualStretch:0,manualTopping:0,manualLoad:0,served:0,angry:0,turnedAway:0,upgradesBought:0,staffHired:0},flags:{firstPurchase:!1},events:{active:[],nextAt:240},bonus:{nextAt:240,readyNotified:!1},customers:[],pizzas:[],nextId:1,cashierTimers:[],cashierIdle:0,cookIdle:0,idleNotified:{cashier:!1,cook:!1},spawnTimer:4,settings:{sound:!0,notify:!1,graphics:"auto",look:"3d"},cosmetics:{ovenSkin:"skin.classic"}};function Po(n,e=Date.now()){let t=structuredClone(qc);return t.cash=n.economy.startingCash,t.dayClock=n.economy.time.startDayClock,t.rngSeed=e%2147483647|0||1,t.createdAt=e,t.savedAt=e,t}var Yc=2,Zc="pizzastand.save",By={1:n=>{let e=n.franchise||(n.franchise={points:0,count:0});return e.lifetimeAtLast=e.count>0&&n.lifetimeCash||0,e.readyNotified=!1,delete e.unlocked,n}};function Xu(n,e){for(let t of Object.keys(e)){let i=e[t];n[t]===void 0?n[t]=structuredClone(i):i&&typeof i=="object"&&!Array.isArray(i)&&typeof n[t]=="object"&&Xu(n[t],i)}return n}function Hy(n){let e=n.schemaVersion??0;for(;e<Yc;){let t=By[e];t&&(n=t(n)),e++}return n.schemaVersion=Yc,Xu(n,qc)}function qu(){try{let n=globalThis.localStorage?.getItem(Zc);if(!n)return null;let e=JSON.parse(n);return typeof e.schemaVersion=="number"&&e.schemaVersion>Yc?(console.warn("[save] save is from a newer version; ignoring"),null):Hy(e)}catch(n){return console.warn("[save] could not read save",n),null}}function Yu(n){try{return globalThis.localStorage?.setItem(Zc,JSON.stringify(n)),!0}catch(e){return console.warn("[save] could not write save",e),!1}}function Zu(){try{globalThis.localStorage?.removeItem(Zc)}catch{}}var $u="pizzastand.analytics";var Ju=null,Ku=Date.now();function et(n,e={}){let t={name:n,props:e,t:Date.now()};try{let i=JSON.parse(globalThis.localStorage?.getItem($u)||"[]");for(i.push(t);i.length>200;)i.shift();globalThis.localStorage?.setItem($u,JSON.stringify(i))}catch{}if(Ju)try{Ju(t)}catch{}}function $c(){Ku=Date.now(),et("session_start")}function Qu(n={}){et("session_end",{durationSeconds:Math.round((Date.now()-Ku)/1e3),...n})}var $s=null,ju=!0;function Lo(n){ju=n}function Vy(){if(!ju)return null;if(!$s){let n=globalThis.AudioContext||globalThis.webkitAudioContext;if(!n)return null;$s=new n}return $s.state==="suspended"&&$s.resume(),$s}function ni(n,e,t,i="sine",s=.2,r=null){let o=Vy();if(!o)return;let a=o.createOscillator(),l=o.createGain();a.type=i,a.frequency.setValueAtTime(n,o.currentTime+e),r&&a.frequency.exponentialRampToValueAtTime(r,o.currentTime+e+t),l.gain.setValueAtTime(s,o.currentTime+e),l.gain.exponentialRampToValueAtTime(1e-4,o.currentTime+e+t),a.connect(l).connect(o.destination),a.start(o.currentTime+e),a.stop(o.currentTime+e+t+.02)}var Tt={cash(){ni(1318,0,.12,"triangle",.25),ni(1760,.07,.25,"triangle",.22)},click(){ni(520,0,.05,"square",.08,380)},bell(){ni(880,0,.5,"sine",.18),ni(1320,.02,.4,"sine",.08)},pop(){ni(300,0,.12,"sine",.15,600)},angry(){ni(220,0,.3,"sawtooth",.1,140)},whoosh(){ni(180,0,.25,"sine",.08,420)}};function _s(n,e){return Math.ceil(n.baseCost*Math.pow(n.growth,e))}function Io(n){let e=Math.sin(2*Math.PI*(n-.25)),t=Math.min(1,Math.max(0,(e+.2)/.5));return t*t*(3-2*t)}function Do(n,e){if(!e)return!0;switch(e.type){case"start":return!0;case"lifetime":return n.lifetimeCash>=e.value;case"staffLevel":return(n.staff[e.role]||0)>=e.value;case"upgradeLevel":return(n.upgrades[e.upgrade]||0)>=e.value;case"franchise":return n.franchise.count>=e.value;default:return!1}}function Gy(n,e){return e.locations?.[n.location]}function Wy(n,e){return Gy(n,e)?.economy??{trafficMult:1,styleDemand:{}}}function ii(n,e){let t=e.economy.prestige.tiers,i=0;return t.forEach((s,r)=>{n.franchise.count>=s.minFranchises&&(i=r)}),i}function Js(n,e){return e.economy.prestige.tiers[ii(n,e)]}function Ci(n){return Math.max(0,n.lifetimeCash-(n.franchise.lifetimeAtLast||0))}function Pi(n,e){let t=e.economy.prestige;return Math.round(t.milestoneLifetimeCash*Math.pow(n.franchise.count+1,t.requirementExponent??1.3))}function ys(n,e){return Ci(n)>=Pi(n,e)}function Ks(n,e){return 1+(e.economy.prestige.ovenSpeedPerFranchise||0)*n.franchise.count}function Uo(n,e,t=n.franchise.count){let i=e.economy.prestige;return Math.min(i.trafficMaxMult??1/0,1+(i.trafficPerFranchise||0)*t)}function Xy(n,e){return 1+e.economy.prestige.bonusPerPoint*n.franchise.points}function ed(n,e){let t=e.economy.shops?.multiplierPerShop||2;return Math.pow(t,Math.max(0,(n.shops||1)-1))}function Jc(n,e){let t=ed(n,e),i=n.staff.cashier>0?1+(n.staffing?.cashier||0):0,s=n.staff.cook>0?1+(n.staffing?.cook||0):0;return{cashier:Math.round(i*t),cook:Math.round(s*t)}}function sn(n,e){let t=e.economy,i=t.upgrades,s=n.upgrades,r=n.staff.cashier,o=n.staff.cook,a=i.decor.trafficPerLevel*s.decor+i.neon.trafficPerLevel*s.neon,l=Wy(n,e),c=Uo(n,e),h=Ks(n,e),u=i.marketing?1+i.marketing.trafficMultPerLevel*(s.marketing||0):1,d=i.pizzaSchool?1+i.pizzaSchool.payMultPerLevel*(s.pizzaSchool||0):1,f=ed(n,e),g=t.customers.spawnBaseSeconds/((1+a)*l.trafficMult*c*u*f),_=Js(n,e),m=(i.oven.ovenSlotsBase+i.oven.ovenSlotsPerLevel*s.oven+_.ovenSlotsBonus+(i.megaOven?i.megaOven.ovenSlotsPerLevel*(s.megaOven||0):0))*f,p=Math.min((i.counter.maxQueueBase+i.counter.maxQueuePerLevel*s.counter+_.maxQueueBonus)*f,t.queueHardCap||40),x=1+i.cheese.cheeseMultPerLevel*s.cheese,y=Xy(n,e),b=t.cashier.orderSecondsBase/(1+t.cashier.orderSpeedPerLevel*r),R=1+t.cook.speedPerLevel*o,E=Object.entries(t.styles).filter(([Q,te])=>te.enabled&&n.styles[Q]).map(([,Q])=>Q.basePrice),A=E.length?E.reduce((Q,te)=>Q+te,0)/E.length:t.styles.margherita.basePrice,N=Math.max(t.prestige.minBakeSeconds||0,10/h),M=1/g,S=m/N,D=Math.min(M,S),z=A*(t.pizzaQuality.payBase+t.pizzaQuality.payPerQuality*.8)*x*y*d,W=D*z*1.1,P=(r>0?1:0)+(o>0?1:0),F=(n.staffing?.cashier||0)+(n.staffing?.cook||0),H=Jc(n,e),$=H.cashier,Y=H.cook,Z=Math.min(1,t.time.offlineBaseEfficiency+t.time.offlineEfficiencyPerStaffRole*P+(t.recruit?.offlineEfficiencyPerRecruit||0)*F);return{traffic:a,locEcon:l,tier:_,frTraffic:c,empireTraffic:u,empirePay:d,bakeSpeed:h,spawnBase:g,ovenSlots:m,maxQueue:p,cheeseMult:x,prestigeMult:y,cashierOrderSec:b,cashierLvl:r,cashierCount:$,cookSpeed:R,cookLvl:o,cookCount:Y,idleRate:W,offlineEfficiency:Z}}function td(n,e,t,i,s,r){let o=r.economy,a=o.styles[n].basePrice,l=o.pizzaQuality.payBase+o.pizzaQuality.payPerQuality*e,c=s?o.customers.wrongToppingPayMult:1;return a*l*t.cheeseMult*t.prestigeMult*(t.empirePay||1)*i.cashMult*c}function Li(n,e){return Math.max(1,Math.floor(Ci(n)/e.economy.prestige.pointsDivisor))}function nd(n,e){for(let t of e.economy.goals)if(!Do(n,t.condition))return t;return null}function Ii(n){n.rngSeed=n.rngSeed+1831565813|0;let e=n.rngSeed;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qs(n,e){let t=e.reduce((s,r)=>s+r.weight,0),i=Ii(n)*t;for(let s of e)if(i-=s.weight,i<=0)return s.key;return e[e.length-1].key}function js(n,e,t){let i=t.economy.events[e];return i?(n.events.active.push({id:e,endsAt:n.gameTime+i.durationSeconds}),!0):!1}function id(n,e,t,i){let s=t.economy.time;if(n.events.active=n.events.active.filter(r=>n.gameTime>=r.endsAt?(i.push({type:"event_end",id:r.id}),!1):!0),n.events.active.length===0&&n.gameTime>=n.events.nextAt){let r=Object.entries(t.economy.events).filter(([,l])=>l.weight>0).map(([l,c])=>({key:l,weight:c.weight})),o=Qs(n,r);js(n,o,t),i.push({type:"event_start",id:o});let a=s.randomEventMinSeconds+(s.randomEventMaxSeconds-s.randomEventMinSeconds)*Ii(n);n.events.nextAt=n.gameTime+a}}function No(n,e){let t={spawnMult:1,patienceDrainMult:1,cashMult:1,styleDemand:{}};for(let i of n.events.active){let s=e.economy.events[i.id];if(s){t.spawnMult*=s.spawnMult,t.patienceDrainMult*=s.patienceDrainMult,t.cashMult*=s.cashMult;for(let[r,o]of Object.entries(s.styleDemand||{}))t.styleDemand[r]=(t.styleDemand[r]||1)*o}}return t}function si(n,e){return n.customers.find(t=>t.id===e)}function qy(n,e){return n.pizzas.find(t=>t.id===e)}function Yy(n){return n.nextId++}function Oo(n,e,t){let i=si(n,e);if(!i||i.state!=="waiting")return{ok:!1};if(n.pizzas.length>=(t.economy.queueHardCap||40))return{ok:!1,reason:"kitchenFull"};i.state="ordered";let s={id:Yy(n),customerId:i.id,style:i.style,stage:"dough",work:0,q:{dough:0,top:0,bake:0},topping:null,bakeLeft:0,readyTimer:0};return n.pizzas.push(s),n.stats.ordersTaken++,{ok:!0,type:"order_taken",customerId:i.id,pizzaId:s.id}}function er(n,e,t,i,s){let r=qy(n,e);if(!r)return{ok:!1,reason:"noPizza"};let o=s.economy.manual,a=s.economy.stages;if(t==="stretch"){if(r.stage!=="dough")return{ok:!1,reason:"wrongStage"};let l=Math.max(0,Math.min(1,i.timeLeftFrac??0));return r.q.dough=i.finished?o.doughFinishMinQuality+(1-o.doughFinishMinQuality)*l:o.doughRushedQuality,r.work=0,r.stage="topping",n.stats.manualStretch++,{ok:!0,type:"stage",pizzaId:e,stage:"topping",auto:!1}}if(t==="topping"){if(r.stage!=="topping")return{ok:!1,reason:"wrongStage"};let l=si(n,r.customerId),c=l&&i.topping===l.topping;return r.topping=i.topping,r.q.top=c?o.toppingCorrectQuality:o.toppingWrongQuality,r.work=0,r.stage="load",n.stats.manualTopping++,{ok:!0,type:"stage",pizzaId:e,stage:"load",auto:!1,correct:c}}if(t==="load"){if(r.stage!=="load")return{ok:!1,reason:"wrongStage"};let l=sn(n,s);if(Zy(n)>=l.ovenSlots)return{ok:!1,reason:"ovenFull"};let c=o.ovenSweetZone/2,h=Math.abs((i.markerPos??.5)-.5),u=h<=c?1:Math.max(o.ovenMinQuality,1-(h-c)*2.2);return sd(n,r,u,s,"manual")}return t==="serve"?r.stage!=="ready"?{ok:!1,reason:"wrongStage"}:Kc(n,r,s):{ok:!1,reason:"unknownAction"}}function Zy(n){return n.pizzas.filter(e=>e.stage==="baking").length}function sd(n,e,t,i,s){let r=i.economy.stages,o=i.economy.styles[e.style];e.q.bake=t,e.stage="baking";let a=i.economy.prestige.minBakeSeconds||0,l=Math.max(a,o.bakeSeconds/Ks(n,i));return e.bakeLeft=l*(t>=r.perfectBakeQuality?r.perfectBakeSpeedMult:1),e.bakeTotal=e.bakeLeft,e.work=0,s==="manual"&&n.stats.manualLoad++,{ok:!0,type:"stage",pizzaId:e.id,stage:"baking",auto:s!=="manual",quality:t}}function Kc(n,e,t){let i=si(n,e.customerId);if(n.pizzas=n.pizzas.filter(_=>_.id!==e.id),!i)return{ok:!1,reason:"noCustomer"};n.customers=n.customers.filter(_=>_.id!==i.id);let s=sn(n,t),r=No(n,t),o=t.economy,a=(e.q.dough+e.q.top+e.q.bake)/3,l=e.topping!==i.topping,c=td(e.style,a,s,r,l,t),h=Math.max(0,i.patience/i.maxPatience),u=o.customers.types[i.type].tipMult,d=l?o.customers.wrongToppingTipMult:1,f=c*o.customers.tipMax*h*u*d,g=c+f;return n.cash+=g,n.lifetimeCash+=g,n.stats.served++,{ok:!0,type:"served",pizzaId:e.id,customerId:i.id,customerType:i.type,amount:c,tip:f,total:g,big:g>=o.bigSaleThreshold,wrongTopping:l}}function rd(n,e,t){let i=t.economy.stages,s=si(n,e.customerId);return e.stage==="dough"?(e.q.dough=i.autoDoughQuality,e.stage="topping",e.work=0,{ok:!0,type:"stage",pizzaId:e.id,stage:"topping",auto:!0}):e.stage==="topping"?(e.topping=s?s.topping:null,e.q.top=i.autoToppingQuality,e.stage="load",e.work=0,{ok:!0,type:"stage",pizzaId:e.id,stage:"load",auto:!0}):{ok:!1}}function od(n,e,t){return sd(n,e,t.economy.stages.autoLoadQuality,t,"auto")}function ad(n,e,t,i=Date.now()){let s=t.economy.upgrades[e];if(!s||s.enabled===!1)return{ok:!1,reason:"locked"};if(s.requires&&n.franchise.count<(s.requires.franchises||0))return{ok:!1,reason:"needsFranchise",need:s.requires.franchises};let r=n.upgrades[e];if(r>=s.maxLevel)return{ok:!1,reason:"maxed"};let o=_s(s,r);return n.cash<o?{ok:!1,reason:"cash",cost:o}:(n.cash-=o,n.upgrades[e]=r+1,n.stats.upgradesBought++,{ok:!0,type:"bought",key:e,cost:o,first:ld(n)})}function cd(n,e,t){let i=t.economy.staff[e],s=n.staff[e];if(s>=i.maxLevel)return{ok:!1,reason:"maxed"};let r=_s(i,s);return n.cash<r?{ok:!1,reason:"cash",cost:r}:(n.cash-=r,n.staff[e]=s+1,s===0&&n.stats.staffHired++,{ok:!0,type:"hired",role:e,cost:r,first:ld(n)})}function ld(n){return n.flags.firstPurchase?!1:(n.flags.firstPurchase=!0,!0)}function hd(n,e,t){let i=t.economy.recruit;if(!i||!i[e])return{ok:!1,reason:"unknown"};if(n.franchise.count<i.requiresFranchises)return{ok:!1,reason:"needsFranchise",need:i.requiresFranchises};if((n.staff[e]||0)<1)return{ok:!1,reason:"needsHire"};let s=Js(n,t).recruitCap,r=n.staffing[e]||0;if(r>=s)return{ok:!1,reason:"maxed",cap:s};let o=Math.ceil(i[e].baseCost*Math.pow(i[e].growth,r));return n.cash<o?{ok:!1,reason:"cash",cost:o}:(n.cash-=o,n.staffing[e]=r+1,{ok:!0,type:"recruited",role:e,cost:o,count:r+1,cap:s})}function Qc(n,e){return ys(n,e)}function ud(n,e,t,i=Date.now()){let s=Li(n,e),r=t(e,i);return r.unlockedLocations={...n.unlockedLocations},r.franchise={points:n.franchise.points+s,count:n.franchise.count+1,lifetimeAtLast:n.lifetimeCash,readyNotified:!1},r.styles={...n.styles},r.tutorialStep=n.tutorialStep,r.tutorialDone=n.tutorialDone,r.stats={...n.stats},r.lifetimeCash=n.lifetimeCash,r.settings={...n.settings},r.cosmetics={...n.cosmetics},r.flags={...n.flags},r.rngSeed=n.rngSeed,r.gameTime=n.gameTime,r.dayClock=n.dayClock,r.createdAt=n.createdAt,r.events={active:[],nextAt:n.gameTime+240},{state:r,gain:s}}function dd(n,e,t){return t.locations?.[e]?n.unlockedLocations[e]?n.location===e?{ok:!1,reason:"current"}:(n.location=e,n.customers=[],n.pizzas=[],n.cashierTimer=0,n.spawnTimer=t.economy.customers.spawnBaseSeconds,{ok:!0,type:"moved",location:e}):{ok:!1,reason:"locked"}:{ok:!1,reason:"unknown"}}function fd(n,e){let t=e.economy.shops;if(!t)return{ok:!1,reason:"unknown"};if(n.franchise.count<t.requiresFranchises)return{ok:!1,reason:"needsFranchise",need:t.requiresFranchises};let i=n.shops||1;if(i>=t.maxShops)return{ok:!1,reason:"maxed",cap:t.maxShops};let s=Math.ceil(t.baseCost*Math.pow(t.growth,i-1));return n.cash<s?{ok:!1,reason:"cash",cost:s}:(n.cash-=s,n.shops=i+1,{ok:!0,type:"shop",shops:n.shops,cost:s})}function jc(n,e){return n.gameTime>=n.bonus.nextAt&&!n.events.active.some(t=>t.id==="doubleCash")}function pd(n,e,t){let i=t.economy.happyHour;n.bonus.nextAt=n.gameTime+i.intervalSeconds,n.bonus.readyNotified=!1;let s=e>=i.needed;return s&&js(n,"doubleCash",t),{ok:!0,won:s,hits:e}}var $y=12;function el(n,e,t,i=[]){let s=t.economy;n.gameTime+=e,n.dayClock=(n.dayClock+e/s.time.dayLengthSeconds)%1,id(n,e,t,i);let r=No(n,t),o=sn(n,t),a=Io(n.dayClock);return Jy(n,t,i),Ky(n,t,i),!n.bonus.readyNotified&&n.gameTime>=n.bonus.nextAt&&(n.bonus.readyNotified=!0,i.push({type:"bonus_ready"})),!n.franchise.readyNotified&&ys(n,t)&&(n.franchise.readyNotified=!0,i.push({type:"franchise_ready"})),Qy(n,e,r,t,i),jy(n,e,r,o,a,t,i),ex(n,e,o,t,i),tx(n,e,o,t,i),nx(n,e,i),ix(n,t,i),i}function Jy(n,e,t){for(let[i,s]of Object.entries(e.economy.styles))s.enabled&&!n.styles[i]&&Do(n,s.unlock)&&(n.styles[i]=!0,t.push({type:"style_unlocked",style:i}))}function Ky(n,e,t){if(e.locations)for(let[i,s]of Object.entries(e.locations))!n.unlockedLocations[i]&&Do(n,s.unlock)&&(n.unlockedLocations[i]=!0,t.push({type:"location_unlocked",location:i}))}function Qy(n,e,t,i,s){for(let r of[...n.customers])if(r.patience-=e*t.patienceDrainMult,r.patience<=0){let o=Math.min(n.cash,i.economy.customers.angryPenalty);n.cash-=o,n.customers=n.customers.filter(a=>a.id!==r.id),n.pizzas=n.pizzas.filter(a=>a.customerId!==r.id),n.stats.angry++,s.push({type:"angry",customerId:r.id,customerType:r.type,nameIdx:r.nameIdx,penalty:o})}}function jy(n,e,t,i,s,r,o){let a=n.customers.filter(d=>d.state==="waiting").sort((d,f)=>d.id-f.id),l=a.length-i.maxQueue;if(l>0){let d=new Set(a.slice(i.maxQueue).map(f=>f.id));n.customers=n.customers.filter(f=>!d.has(f.id)),n.stats.turnedAway+=l,o.push({type:"turned_away"})}let c=r.economy.customers,h=c.nightSpawnMult+(1-c.nightSpawnMult)*s;n.spawnTimer-=e*t.spawnMult*h;let u=0;for(;n.spawnTimer<=0&&u++<20;){let d=i.spawnBase*(1+(Ii(n)*2-1)*c.spawnJitter);if(n.spawnTimer+=d,n.customers.filter(y=>y.state==="waiting").length>=i.maxQueue){n.stats.turnedAway++,o.push({type:"turned_away"});continue}let g=Qs(n,Object.entries(c.types).map(([y,b])=>({key:y,weight:b.weight}))),_=Object.keys(r.economy.styles).filter(y=>n.styles[y]).map(y=>({key:y,weight:(t.styleDemand[y]||1)*(i.locEcon.styleDemand[y]||1)})),m=Qs(n,_),p=c.toppings[Math.floor(Ii(n)*c.toppings.length)],x={id:n.nextId++,type:g,style:m,topping:p,nameIdx:1+Math.floor(Ii(n)*5),patience:c.types[g].patience,maxPatience:c.types[g].patience,state:"waiting"};n.customers.push(x),o.push({type:"arrived",customerId:x.id})}}function ex(n,e,t,i,s){let r=t.cashierCount;if(r===0)return;let o=()=>n.customers.filter(l=>l.state==="waiting").sort((l,c)=>l.id-c.id),a=n.pizzas.filter(l=>l.stage==="ready");for(;n.cashierTimers.length<r;)n.cashierTimers.push(0);n.cashierTimers.length=r;for(let l=0;l<r;l++)if(o().length>0){if(n.cashierTimers[l]+=e,n.cashierTimers[l]>=t.cashierOrderSec){n.cashierTimers[l]=0;let c=o()[0],h=Oo(n,c.id,i);h.ok&&s.push({...h,auto:!0})}}else n.cashierTimers[l]=0;o().length===0&&a.length===0?(n.cashierIdle+=e,md(n,"cashier",s)):(n.cashierIdle=0,n.idleNotified.cashier=!1);for(let l of a)if(l.readyTimer+=e,l.readyTimer>=i.economy.stages.autoServeDelaySeconds){let c=Kc(n,l,i);c.ok&&s.push({...c,auto:!0})}}function tx(n,e,t,i,s){let r=t.cookCount;if(r===0)return;let o=i.economy.stages,a=n.pizzas.filter(c=>c.stage==="dough"||c.stage==="topping").sort((c,h)=>c.id-h.id).slice(0,r);if(a.length>0){n.cookIdle=0,n.idleNotified.cook=!1;for(let c of a){c.work+=e*t.cookSpeed;let h=c.stage==="dough"?o.autoDoughSeconds:o.autoToppingSeconds;if(c.work>=h){let u=rd(n,c,i);u.ok&&s.push({...u,auto:!0})}}}else n.cookIdle+=e,md(n,"cook",s);let l=n.pizzas.filter(c=>c.stage==="load").sort((c,h)=>c.id-h.id);for(let c of l){if(n.pizzas.filter(d=>d.stage==="baking").length>=t.ovenSlots)break;let u=od(n,c,i);u.ok&&s.push(u)}}function md(n,e,t){(e==="cook"?n.cookIdle:n.cashierIdle)>=$y&&!n.idleNotified[e]&&(n.idleNotified[e]=!0,t.push({type:"idle_staff",role:e}))}function nx(n,e,t){for(let i of n.pizzas)i.stage==="baking"&&(i.bakeLeft-=e,i.bakeLeft<=0&&(i.stage="ready",i.bakeLeft=0,t.push({type:"stage",pizzaId:i.id,stage:"ready",auto:!1})))}function ix(n,e,t){if(n.tutorialDone)return;let i=e.economy.tutorial;for(;n.tutorialStep<i.length;){let s=i[n.tutorialStep].check;if((n.stats[s.stat]||0)<s.gte)break;n.tutorialStep++,t.push({type:"tutorial_step",step:n.tutorialStep})}n.tutorialStep>=i.length&&(n.tutorialDone=!0,t.push({type:"tutorial_done"}))}function gd(n,e,t){let i=t.economy.time,s=Math.max(0,(e-n.savedAt)/1e3),r=Math.min(s,i.offlineCapSeconds),o=sn(n,t),a=Math.floor(r*o.idleRate*o.offlineEfficiency);return{rawSeconds:s,elapsed:r,capped:s>i.offlineCapSeconds,earned:a,rate:o.idleRate*o.offlineEfficiency}}function tl(n,e,t,i=1){let s=Math.floor(e.earned*i);return n.cash+=s,n.lifetimeCash+=s,n.customers=[],n.pizzas=[],n.cashierTimer=0,n.spawnTimer=t.economy.customers.spawnBaseSeconds,n.gameTime+=e.elapsed,n.dayClock=(n.dayClock+e.elapsed/t.economy.time.dayLengthSeconds)%1,n.events.active=[],n.events.nextAt=n.gameTime+240,s}var nl=new Map;function Ho(n){let{roughness:e,metalness:t,...i}=n;return i}function bd(n,e={}){let t=n+"|"+JSON.stringify(e);return nl.has(t)||nl.set(t,new Jt({color:n,...Ho(e)})),nl.get(t)}function vs(n,e={}){return new Jt({color:n,...Ho(e)})}function kn(n,e,t,i=1,s={}){let r=new Jt({color:e,emissive:new me(t),emissiveIntensity:.2,...Ho(s)});return r.userData.glow=i,n.glowMats.push(r),r}var rn=new Jt({vertexColors:!0}),Ni=new Jt({vertexColors:!0,flatShading:!0}),al=new ps({vertexColors:!0,shininess:60,specular:new me("#555555")}),il=new Map;function Dt(n,e){return il.has(n)||il.set(n,e()),il.get(n)}var ke={box:()=>Dt("box",()=>new Ei(1,1,1)),cyl:(n=14)=>Dt("cyl"+n,()=>new ti(1,1,1,n)),cone:(n=14)=>Dt("cone"+n,()=>new mo(1,1,n)),sphere:(n=16,e=12)=>Dt(`sph${n}_${e}`,()=>new Ti(1,n,e)),dome:(n=16,e=8)=>Dt(`dome${n}_${e}`,()=>new Ti(1,n,e,0,Math.PI*2,0,Math.PI/2)),ico:(n=0)=>Dt("ico"+n,()=>new go(1,n)),torus:(n=.2,e=20)=>Dt(`tor${n}_${e}`,()=>new yo(1,n,8,e)),capsule:(n,e)=>Dt(`cap${n}_${e}`,()=>new fo(n,e,5,12)),ring:()=>Dt("ring",()=>new _o(.5,.56,32)),circle:()=>Dt("circle",()=>new po(1,24))},sl=new WeakMap;function sx(n){return n.index?(sl.has(n)||sl.set(n,n.toNonIndexed()),sl.get(n)):n}var rl=new dt,_d=new Mn,yd=new ds,xd=new C,vd=new C,Fo=new C,zo=new C,Md=new We,ko=new me,Qe=class{constructor(){this.pos=[],this.nor=[],this.col=[]}add(e,t,i=[0,0,0],s=[0,0,0],r=[1,1,1]){let o=sx(e);yd.set(s[0],s[1],s[2]),_d.setFromEuler(yd),xd.set(i[0],i[1],i[2]),vd.set(r[0],r[1],r[2]),rl.compose(xd,_d,vd),Md.getNormalMatrix(rl),ko.set(t);let a=o.attributes.position,l=o.attributes.normal;for(let c=0;c<a.count;c++)Fo.fromBufferAttribute(a,c).applyMatrix4(rl),zo.fromBufferAttribute(l,c).applyMatrix3(Md).normalize(),this.pos.push(Fo.x,Fo.y,Fo.z),this.nor.push(zo.x,zo.y,zo.z),this.col.push(ko.r,ko.g,ko.b);return this}box(e,t,i,s=[0,0,0]){return this.add(ke.box(),t,[i[0],i[1]+e[1]/2,i[2]],s,e)}boxC(e,t,i,s=[0,0,0]){return this.add(ke.box(),t,i,s,e)}cyl(e,t,i,s,r,o=[0,0,0],a=14){let l=e===t?ke.cyl(a):Dt(`cylT${(e/t).toFixed(3)}_${a}`,()=>new ti(e/t,1,1,a));return this.add(l,s,[r[0],r[1]+i/2,r[2]],o,[t,i,t])}cylC(e,t,i,s,r=[0,0,0],o=12){return this.add(ke.cyl(o),i,s,r,[e,t,e])}cone(e,t,i,s,r=[0,0,0],o=14){return this.add(ke.cone(o),i,[s[0],s[1]+t/2,s[2]],r,[e,t,e])}sphere(e,t,i,s=[1,1,1],r=[16,12]){return this.add(ke.sphere(r[0],r[1]),t,i,[0,0,0],[e*s[0],e*s[1],e*s[2]])}dome(e,t,i,s=[1,1,1],r=[0,0,0]){return this.add(ke.dome(),t,i,r,[e*s[0],e*s[1],e*s[2]])}ico(e,t,i,s=[1,1,1],r=[0,0,0]){return this.add(ke.ico(1),t,i,r,[e*s[0],e*s[1],e*s[2]])}torus(e,t,i,s,r=[0,0,0],o=20){let a=ke.torus(Number((t/e).toFixed(3)),o);return this.add(a,i,s,r,[e,e,e])}get empty(){return this.pos.length===0}geometry(){let e=new _t;return e.setAttribute("position",new $e(this.pos,3)),e.setAttribute("normal",new $e(this.nor,3)),e.setAttribute("color",new $e(this.col,3)),e.computeBoundingSphere(),e}mesh(e=rn,{cast:t=!0,receive:i=!0}={}){let s=new Ce(this.geometry(),e);return s.castShadow=t,s.receiveShadow=i,s}},xs=new Map;function rx(n,e){let t=document.createElement("canvas");t.width=t.height=n;let i=t.getContext("2d");e(i,n);let s=new Ws(t);return s.colorSpace=gt,s.wrapS=s.wrapT=Os,s.anisotropy=2,s}function Di(n){let e=n;return()=>(e=(e*1664525+1013904223)%4294967296,e/4294967296)}function Ui(n,e,t,i,s,r=!0){for(let o=0;o<i;o++){let a=t()*s;n.fillStyle=r?`rgba(255,255,255,${a})`:`rgba(0,0,0,${a})`,n.fillRect(t()*e,t()*e,1+t()*2,1+t()*2)}}var ox={pavers(n,e){let t=Di(7);n.fillStyle="#b89a78",n.fillRect(0,0,e,e);let i=4,s=e/i;for(let r=0;r<i*2;r++)for(let o=-1;o<i;o++){let a=r%2*(s/2),l=196+Math.floor(t()*34);n.fillStyle=`rgb(${l+22},${l-6},${l-44})`,n.fillRect(o*s+a+2,r*(s/2)+2,s-4,s/2-4)}Ui(n,e,t,900,.07,!1),Ui(n,e,t,500,.06,!0)},asphalt(n,e){let t=Di(11);n.fillStyle="#4b4e55",n.fillRect(0,0,e,e),Ui(n,e,t,2600,.09,!0),Ui(n,e,t,2600,.14,!1)},brick(n,e){let t=Di(3);n.fillStyle="#d9c7b0",n.fillRect(0,0,e,e);let i=8,s=e/i,r=e/4;for(let o=0;o<i;o++)for(let a=-1;a<4;a++){let l=o%2*(r/2),c=t();n.fillStyle=`rgb(${150+c*40},${66+c*26},${48+c*18})`,n.fillRect(a*r+l+2,o*s+2,r-4,s-4)}Ui(n,e,t,700,.08,!1)},wood(n,e){let t=Di(5),i=4,s=e/i;for(let r=0;r<i;r++){let o=t();n.fillStyle=`rgb(${176+o*26},${118+o*22},${66+o*16})`,n.fillRect(r*s,0,s,e),n.fillStyle="rgba(70,40,15,0.5)",n.fillRect(r*s,0,2,e);for(let a=0;a<14;a++)n.fillStyle=`rgba(90,55,25,${.05+t()*.1})`,n.fillRect(r*s+t()*s,0,1+t()*2,e)}},plaster(n,e){let t=Di(9);n.fillStyle="#ffffff",n.fillRect(0,0,e,e),Ui(n,e,t,2200,.05,!1);for(let i=0;i<14;i++)n.fillStyle=`rgba(0,0,0,${.015+t()*.02})`,n.fillRect(t()*e,t()*e,30+t()*80,8+t()*30)},tiles(n,e){n.fillStyle="#d7d2c8",n.fillRect(0,0,e,e);let t=4,i=e/t;for(let s=0;s<t;s++)for(let r=0;r<t;r++)n.fillStyle=(r+s)%2?"#fbf7ee":"#f1ebde",n.fillRect(r*i+2,s*i+2,i-4,i-4)},checker(n,e){let i=e/4;for(let s=0;s<4;s++)for(let r=0;r<4;r++)n.fillStyle=(r+s)%2?"#f4ead8":"#b5483a",n.fillRect(r*i,s*i,i,i)},stripes(n,e){n.fillStyle="#fff6e6",n.fillRect(0,0,e,e),n.fillStyle="#d8402f",n.fillRect(0,0,e/2,e);let t=Di(2);Ui(n,e,t,500,.04,!1)},rooftiles(n,e){let t=Di(13);n.fillStyle="#8f3f2a",n.fillRect(0,0,e,e);let i=6,s=e/i,r=e/6;for(let o=0;o<i;o++)for(let a=-1;a<6;a++){let l=o%2*(r/2),c=t();n.fillStyle=`rgb(${186+c*30},${92+c*24},${58+c*16})`,n.beginPath(),n.ellipse(a*r+l+r/2,o*s+s*.35,r/2-1.5,s*.62,0,0,Math.PI),n.fill()}}};function ax(n,e=1,t=1){xs.has(n)||xs.set(n,rx(256,ox[n]));let i=`${n}|${e}|${t}`;if(!xs.has(i)){let s=xs.get(n).clone();s.repeat.set(e,t),s.needsUpdate=!0,xs.set(i,s)}return xs.get(i)}var ol=new Map;function wn(n,e=1,t=1,i={}){let s=`${n}|${e}|${t}|${JSON.stringify(i)}`;return ol.has(s)||ol.set(s,new Jt({map:ax(n,e,t),...Ho(i)})),ol.get(s)}function En(n,e,t,i=[1,1],s={},r=[0,0,0]){let o=new Ce(ke.box(),wn(e,i[0],i[1],s));return o.scale.set(n[0],n[1],n[2]),o.position.set(t[0],t[1]+n[1]/2,t[2]),o.rotation.set(r[0],r[1],r[2]),o.castShadow=!0,o.receiveShadow=!0,o}var cx=new vt({color:"#000000",transparent:!0,opacity:.2,depthWrite:!1});function Sd(n=.34){let e=new Ce(ke.circle(),cx);return e.rotation.x=-Math.PI/2,e.scale.setScalar(n),e.position.y=.02,e.renderOrder=1,e}var Bo=null;function Vo(n,e,t="#ffc56b",i=.55){if(!Bo){let o=document.createElement("canvas");o.width=o.height=128;let a=o.getContext("2d"),l=a.createRadialGradient(64,64,0,64,64,64);l.addColorStop(0,"rgba(255,255,255,1)"),l.addColorStop(.5,"rgba(255,255,255,0.35)"),l.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=l,a.fillRect(0,0,128,128),Bo=new Ws(o),Bo.colorSpace=gt}let s=new vt({map:Bo,color:t,transparent:!0,opacity:0,depthWrite:!1,blending:kr,toneMapped:!1});s.userData.base=i,n.nightFades.push(s);let r=new Ce(new Sn(e*2,e*2),s);return r.rotation.x=-Math.PI/2,r.renderOrder=2,r}var cl=new Map;function lx(n){if(!cl.has(n.uuid)){let e=new vt({transparent:n.transparent,opacity:n.opacity,side:n.side,depthWrite:n.depthWrite,toneMapped:!1});e.color=n.color,e.map=n.map||null,e.vertexColors=!!n.vertexColors,cl.set(n.uuid,e)}return cl.get(n.uuid)}function ll(n){n.traverse(e=>{!e.isMesh||!e.material||Array.isArray(e.material)||e.material.isShaderMaterial||e.userData.origMat||(e.userData.origMat=e.material,e.material=lx(e.material))})}function wd(n){n.traverse(e=>{e.userData.origMat&&(e.material=e.userData.origMat,delete e.userData.origMat)})}var Bn=new C,Ut=n=>new me(n),Hn={dayTop:Ut("#2f86d9"),dayHorizon:Ut("#c9ebfb"),duskTop:Ut("#3d4f9a"),duskHorizon:Ut("#ffab6b"),nightTop:Ut("#060a1c"),nightHorizon:Ut("#1b2a52")},hx=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,ux=`
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
}`;function Ed(n,e){let t=new Hs({canvas:n,antialias:!0,powerPreference:"high-performance"}),i=Math.min(globalThis.devicePixelRatio||1,2),s=i,r="auto";t.setPixelRatio(s),t.shadowMap.enabled=!0,t.shadowMap.type=wo,t.shadowMap.autoUpdate=!1,t.outputColorSpace=gt,t.toneMapping=Oc,t.toneMappingExposure=1.05;let o=new ro,a=new so(Hn.dayHorizon.clone(),45,150);o.fog=a;let l=new zt(e.camera.fov,1,.2,400),c=new xo(16777215,11569512,1),h=new bo(16774108,3);h.castShadow=!0,h.shadow.mapSize.set(1536,1536),Object.assign(h.shadow.camera,{left:-15,right:15,top:15,bottom:-15,near:1,far:90}),h.shadow.bias=-4e-4,h.shadow.normalBias=.035,h.shadow.radius=2.5;let u=new Mo(16757865,0,16,1.6);u.position.set(.2,2.6,1.6),o.add(c,h,h.target,u);let d=new mn({uniforms:{top:{value:Hn.dayTop.clone()},horizon:{value:Hn.dayHorizon.clone()},sunDir:{value:new C(0,1,0)},sunColor:{value:Ut("#fff1c4")},sunPower:{value:1}},vertexShader:hx,fragmentShader:ux,side:kt,depthWrite:!1,fog:!1,toneMapped:!1}),f=new Ce(new Ti(300,24,16),d);f.frustumCulled=!1,o.add(f);let g=[];for(let v=0;v<420;v++){let U=Math.random()*Math.PI*2,K=.08+Math.random()*.92,J=Math.sqrt(1-K*K);g.push(Math.cos(U)*J*280,K*280,Math.sin(U)*J*280)}let _=new _t;_.setAttribute("position",new $e(g,3));let m=new Gs({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),p=new ao(_,m);p.frustumCulled=!1,o.add(p);let x={sky:f,stars:p,moon:null,clouds:[]},y=new Ce(ke.sphere(),new vt({color:"#f4f1de",fog:!1}));y.scale.setScalar(9),o.add(y),x.moon=y;let b=new Jt({color:16777215,fog:!1}),R=[];for(let v=0;v<9;v++){let U=new Qe,K=4+Math.floor(Math.random()*3);for(let j=0;j<K;j++)U.sphere(2.2+Math.random()*2.2,"#ffffff",[(j-K/2)*2.6+Math.random(),Math.random()*1.2,Math.random()*2],[1.25,.62,1],[10,8]);let J=new Ce(U.geometry(),b);J.position.set(-110+Math.random()*220,26+Math.random()*26,-60-Math.random()*90),J.scale.setScalar(1+Math.random()*1.4),J.userData.speed=.35+Math.random()*.5,o.add(J),R.push(J),x.clouds.push(J)}let E={pos:new C,target:new C,fov:46,zoom:1},A={pos:new C,look:new C},N={pos:new C,look:new C},M={amount:0,time:0},S={renderer:t,scene:o,camera:l,hemi:c,sun:h,daylight:.8,time:0,look:"3d",lastLayout:null,glowMats:[],nightFades:[],updaters:[],signs:[]};function D(v,U){t.setSize(v,U,!1),l.aspect=v/U;let K=Math.max(0,.75-l.aspect);l.fov=E.fov+K*(S.look==="2d"?6:40),l.updateProjectionMatrix(),z()}function z(){let v=(1+Math.max(0,.75-l.aspect)*1.2)*E.zoom,U=E.pos.clone().sub(E.target);N.pos.copy(E.target).add(U.multiplyScalar(v)),N.look.copy(E.target)}function W(v){if(!v)return z();let U=new C(...v);N.look.copy(U).add(new C(0,.25,0)),S.look==="2d"?N.pos.copy(U).add(new C(0,.8,24)):N.pos.copy(U).add(new C(0,2.2,4.2))}function P(v,U=!0){S.lastLayout=v,E.zoom=v.camera.zoom||1,E.target.set(...v.camera.target),S.look==="2d"?(E.fov=13,E.pos.copy(E.target).add(new C(0,1.6,40))):(E.fov=v.camera.fov,E.pos.set(...v.camera.position)),u.position.set(v.cx??.2,2.7,1.4),z(),U&&(A.pos.copy(N.pos),A.look.copy(N.look)),_e()}function F(v){M.amount=Math.max(M.amount,v),M.time=.35}let H=new C,$=new me,Y=new me,Z=new me,Q=Ut("#ffffff"),te=Ut("#2c3558"),de=Ut("#ffc0a0"),q=Ut("#fff3dc"),ee=Ut("#ff9a55"),he=Ut("#9db8ff"),be=Ut("#b08968"),Me=Ut("#3a4468"),Ne=Ut("#ffffff"),Fe=Ut("#8ea2dc");function Pe(v,U){S.time+=v;let K=1-Math.exp(-v*4);if(A.pos.lerp(N.pos,K),A.look.lerp(N.look,K),l.position.copy(A.pos),l.position.x+=Math.sin(S.time*.22)*.12,M.time>0){M.time-=v;let Se=M.amount*Math.max(0,M.time/.35);l.position.x+=(Math.random()-.5)*Se,l.position.y+=(Math.random()-.5)*Se}else M.amount=0;l.lookAt(A.look);let J=Io(U),j=1-J;S.daylight=J;let xe=2*Math.PI*(U-.25);H.set(Math.cos(xe)*.6,Math.sin(xe),.55).normalize();let ae=Math.max(0,1-Math.abs(J-.3)*3.2);$.copy(Hn.nightTop).lerp(Hn.dayTop,J).lerp(Hn.duskTop,ae*.6),Y.copy(Hn.nightHorizon).lerp(Hn.dayHorizon,J).lerp(Hn.duskHorizon,ae*.85),d.uniforms.top.value.copy($),d.uniforms.horizon.value.copy(Y),d.uniforms.sunDir.value.copy(H),d.uniforms.sunPower.value=Math.min(1,J*1.6+ae*.6),d.uniforms.sunColor.value.copy(q).lerp(ee,ae),o.fog&&o.fog.color.copy(Y),S.look==="2d"&&o.background&&o.background.copy(Y);let pe=H.y>-.02;pe?(Bn.copy(H),Bn.y=Math.max(.62,Bn.y)):Bn.set(-.45,.8,.6),h.position.copy(Bn.normalize()).multiplyScalar(40),h.target.position.set(0,0,0),pe?(h.color.copy(ee).lerp(q,Math.min(1,J*1.4)),h.intensity=.3+2.3*J):(h.color.copy(he),h.intensity=1),c.color.copy(Fe).lerp(Ne,J),c.groundColor.copy(Me).lerp(be,J),c.intensity=1.2+.55*J,t.toneMappingExposure=1.02+j*.2,y.position.copy(H).multiplyScalar(-250),y.visible=H.y<.25,m.opacity=Math.pow(j,2.2),Z.copy(te).lerp(Q,J).lerp(de,ae*.55),b.color.copy(Z);for(let Se of R)Se.position.x+=Se.userData.speed*v,Se.position.x>130&&(Se.position.x=-130);let Ae=.08+1.7*j;for(let Se of S.glowMats)Se.emissiveIntensity=Ae*(Se.userData.glow??1);u.intensity=38*j;for(let Se of S.nightFades)Se.opacity=(Se.userData.base||.5)*j;for(let Se of S.updaters)Se(v,S.time,J);Ke++,Ke%2===0&&(t.shadowMap.needsUpdate=!0),r==="auto"&&Ue(v)}let Ke=0;function k(v){t.shadowMap.enabled!==v&&(t.shadowMap.enabled=v,h.castShadow=v,o.traverse(U=>{U.material&&(Array.isArray(U.material)?U.material:[U.material]).forEach(K=>{K.needsUpdate=!0})}))}function Pt(v){r=v,ge.frames=0,ge.time=0,ge.warmup=3,s=v==="low"?1:i,t.setPixelRatio(s),u.visible=v!=="low",k(v!=="low"),_e()}let ge={frames:0,time:0,warmup:3};function Ue(v){if(ge.warmup>0){ge.warmup-=v;return}if(ge.frames++,ge.time+=v,ge.time<2)return;let U=ge.frames/ge.time;ge.frames=0,ge.time=0,U<45&&s>1?(s=Math.max(1,s-.25),t.setPixelRatio(s),_e(),S.pixelRatio=s):U<30&&t.shadowMap.enabled&&s<=1&&k(!1)}function _e(){let v=n.clientWidth||globalThis.innerWidth,U=n.clientHeight||globalThis.innerHeight;D(v,U)}function ct(v){Bn.set(v[0],v[1],v[2]).project(l);let U=n.clientWidth,K=n.clientHeight;return{x:(Bn.x*.5+.5)*U,y:(-Bn.y*.5+.5)*K,front:Bn.z<1,w:U,h:K}}function Be(v){let U=v==="2d";S.look=U?"2d":"3d",U?ll(o):wd(o),x.sky.visible=!U,x.stars.visible=!U,x.moon&&(x.moon.visible=!U);for(let K of x.clouds)K.visible=!U;o.fog=U?null:a,o.background=U?new me("#bfe6fb"):null,k(!U&&r!=="low"),S.lastLayout&&P(S.lastLayout,!0)}function T(v){S.look==="2d"&&ll(v)}return Object.assign(S,{update:Pe,focus:W,shakeCam:F,resize:_e,toScreen:ct,recomputeGoal:z,setLocation:P,setQuality:Pt,setLook:Be,styleNew:T}),P(e),S}var Oi="#f3ede0",Td=new me;function ri(n,e,t=0){return Td.set(n).offsetHSL(0,t,e),"#"+Td.getHexString()}function Ad(n){let e=(Math.abs(Math.round(n))*9301+49297)%4294967296;return()=>(e=(e*1664525+1013904223)%4294967296,e/4294967296)}function Rd(n,e){let t=new at;t.name="location:"+n.id;let i=new Ce(new Sn(200,200),wn("pavers",90,90));i.rotation.x=-Math.PI/2,i.receiveShadow=!0,t.add(i);let s={env:e,group:t,solid:new Qe,flat:new Qe,glassDark:new Qe,glassLit:new Qe,lampGlow:new Qe,lights:0};for(let r of n.props){let o=dx[r.type];o?o(r,s):console.warn("[props] unknown prop type",r.type)}if(s.solid.empty||t.add(s.solid.mesh(rn)),s.flat.empty||t.add(s.flat.mesh(Ni)),s.glassDark.empty||t.add(s.glassDark.mesh(rn,{cast:!1})),!s.glassLit.empty){let r=kn(e,"#ffffff","#ffb45e",.5,{vertexColors:!0,roughness:.3});t.add(s.glassLit.mesh(r,{cast:!1}))}if(!s.lampGlow.empty){let r=kn(e,"#fff3d0","#ffc56b",2.2);t.add(s.lampGlow.mesh(r,{cast:!1,receive:!1}))}return t}var dx={road(n,{group:e,solid:t,env:i}){let s=n.z,r=n.width,o=new Ce(new Sn(200,r),wn("asphalt",60,3));o.rotation.x=-Math.PI/2,o.position.set(0,.012,s),o.receiveShadow=!0,e.add(o);for(let a=-96;a<=96;a+=4.5)t.box([1.9,.012,.14],"#f2e3a6",[a,.014,s]);for(let a of[-1,1])t.box([200,.16,.34],"#cfc8bc",[0,0,s+a*(r/2+.17)]),t.box([200,.012,.1],"#e9e4d8",[0,.014,s+a*(r/2-.35)]);for(let a=0;a<6;a++)t.box([.55,.012,r-1.2],"#ecebe4",[9.5+a*1.05,.015,s]);t.cyl(.45,.45,.012,"#3a3c42",[-3.5,.016,s+1.2],[0,0,0],16),fx(n,e,i)},building(n,{solid:e,glassDark:t,glassLit:i}){let[s,r,o]=n.size,[a,,l]=n.pos,c=n.color,h=Ad(Math.round(a*7+r*13+5)),u=l+o/2,d=3.3;e.box([s,r,o],c,[a,0,l]),e.box([s+.08,d,o+.08],ri(c,-.13,-.05),[a,0,l]),e.box([s+.3,.18,o+.3],Oi,[a,d,l]),e.box([s+.5,.26,o+.5],Oi,[a,r,l]),e.box([s+.16,.55,o+.16],ri(c,-.08),[a,r+.26,l]),e.box([s-.4,.1,o-.4],"#6b6f76",[a,r+.3,l]);let f=n.awning||["#d8402f","#2f7d6a","#e9a23b","#4a6fa5"][Math.floor(h()*4)],g=s*.5,_=a-s*.16;e.box([g+.24,2.15,.1],Oi,[_,.45,u+.02]),(h()<.7?i:t).box([g,1.9,.08],"#9fc3d6",[_,.58,u+.06]),e.box([g+.3,.45,.2],ri(c,-.22),[_,0,u+.06]),e.box([1.15,2.4,.1],Oi,[a+s*.33,0,u+.02]),e.box([.95,2.25,.1],ri(f,-.18),[a+s*.33,0,u+.06]),t.box([.6,.8,.06],"#9fc3d6",[a+s*.33,1.2,u+.1]),e.boxC([g+.6,.07,1.25],f,[_,2.82,u+.58],[.34,0,0]),e.box([g+.6,.22,.05],ri(f,.1),[_,2.48,u+1.16]);let m=Math.max(1,Math.floor((r-d-.9)/2.25)),p=Math.max(1,Math.floor((s-.7)/1.75)),x=["#2f6b5a","#8a3b2a","#3d5a80","#5b4636"][Math.floor(h()*4)],y=h()<.6;for(let R=0;R<m;R++)for(let E=0;E<p;E++){let A=a-(p-1)*1.75/2+E*1.75,N=d+.75+R*2.25;e.box([1.06,1.46,.08],Oi,[A,N-.08,u+.01]),(h()<.42?i:t).box([.88,1.3,.06],"#8fb4cc",[A,N,u+.05]),e.box([.05,1.3,.04],Oi,[A,N,u+.09]),e.box([1.2,.09,.2],Oi,[A,N-.12,u+.06]),y?(e.box([.22,1.32,.05],x,[A-.58,N,u+.05]),e.box([.22,1.32,.05],x,[A+.58,N,u+.05])):h()<.3&&(e.box([1.4,.08,.5],"#4a4e57",[A,N-.2,u+.28]),e.box([1.4,.5,.04],"#4a4e57",[A,N-.12,u+.52]))}let b=Math.max(1,Math.floor((o-.8)/2.1));for(let R of[-1,1])for(let E=0;E<m;E++)for(let A=0;A<b;A++){let N=l-(b-1)*2.1/2+A*2.1,M=d+.75+E*2.25;(h()<.35?i:t).box([.06,1.3,.88],"#8fb4cc",[a+R*(s/2+.02),M,N])}h()<.7&&e.box([1.1,.7,.9],"#9aa0a8",[a-s*.22,r+.4,l-o*.1]),h()<.6&&(e.cyl(.6,.6,1.2,"#7b5a3c",[a+s*.2,r+.9,l+o*.1]),e.cone(.68,.45,"#5b4636",[a+s*.2,r+2.1,l+o*.1]),e.cyl(.05,.05,.5,"#4a4e57",[a+s*.2-.4,r+.4,l+o*.1]),e.cyl(.05,.05,.5,"#4a4e57",[a+s*.2+.4,r+.4,l+o*.1])),h()<.5&&e.box([.5,1.3,.5],ri(c,-.2),[a+s*.36,r+.3,l-o*.25])},tree(n,{solid:e,flat:t}){let[i,,s]=n.pos,r=n.scale||1,o=Ad(Math.round(i*31+s*17)),a=["#5fa052","#6fb35f","#4f8f47","#7dbb62"];e.cyl(.92,.92,.03,"#5a5148",[i,.012,s],[0,0,0],16),e.cyl(.13*r,.2*r,1.9*r,"#7b5236",[i,0,s]);let l=[[0,2.7,0,1.3],[.75,2.25,.25,.95],[-.7,2.3,-.2,.9],[.1,3.5,.05,.85],[-.15,2.3,.7,.8]];for(let[c,h,u,d]of l)t.ico(d*r,a[Math.floor(o()*a.length)],[i+c*r,h*r,s+u*r],[1,.92,1],[o()*3,o()*3,0])},bush(n,{flat:e}){let[t,,i]=n.pos;e.ico(.55,"#5fa052",[t,.4,i],[1.2,.8,1]),e.ico(.42,"#6fb35f",[t+.5,.33,i+.15],[1,.8,1],[1,2,0]),e.ico(.4,"#4f8f47",[t-.45,.3,i-.1],[1,.8,1],[2,1,0])},lamp(n,{solid:e,lampGlow:t,group:i,env:s}){let[r,,o]=n.pos,a="#2f3238";e.cyl(.12,.2,.35,a,[r,0,o]),e.cyl(.06,.07,3.5,a,[r,.3,o]),e.boxC([.7,.06,.06],a,[r+.3,3.75,o]),e.cyl(.2,.12,.1,a,[r+.62,3.6,o]),e.cone(.22,.16,a,[r+.62,3.7,o]),t.sphere(.16,"#fff3d0",[r+.62,3.5,o],[1,1.15,1],[10,8]);let l=Vo(s,n.light?4.2:3.2);l.position.set(r+.62,.03,o),i.add(l)},bench(n,{solid:e}){let[t,,i]=n.pos,s="#a8703f";for(let r=0;r<3;r++)e.box([1.7,.05,.13],s,[t,.46,i-.16+r*.16]);for(let r=0;r<2;r++)e.box([1.7,.13,.05],s,[t,.62+r*.2,i-.28]);for(let r of[-.7,.7])e.box([.07,.46,.45],"#2f3238",[t+r,0,i]),e.box([.07,.55,.07],"#2f3238",[t+r,.46,i-.28])},bin(n,{solid:e}){let[t,,i]=n.pos;e.cyl(.3,.26,.85,"#3f6d7c",[t,0,i],[0,0,0],12),e.cyl(.33,.33,.08,"#2c4e59",[t,.85,i],[0,0,0],12),e.cyl(.2,.2,.02,"#14242a",[t,.93,i],[0,0,0],12)},hydrant(n,{solid:e}){let[t,,i]=n.pos;e.cyl(.13,.16,.55,"#d8402f",[t,0,i]),e.dome(.14,"#d8402f",[t,.55,i]),e.cylC(.06,.42,"#b53324",[t,.36,i],[0,0,Math.PI/2]),e.cyl(.19,.19,.05,"#b53324",[t,0,i])},planter(n,{solid:e,flat:t}){let[i,,s]=n.pos;e.box([1.3,.5,.55],"#8d5a3b",[i,0,s]),e.box([1.36,.07,.61],"#a8703f",[i,.5,s]),t.ico(.3,"#4f8f47",[i-.3,.68,s],[1.3,.7,1]),t.ico(.3,"#5fa052",[i+.3,.68,s],[1.3,.7,1],[1,1,0]);let r=["#ef476f","#ffd166","#f78c6b","#c77dff","#ffffff"];for(let o=0;o<6;o++)t.ico(.11,r[o%r.length],[i-.5+o*.2,.86+o%2*.09,s+(o%3-1)*.12])},sandwichBoard(n,{solid:e,env:t}){let[i,,s]=n.pos,r=1.6;for(let o of[-1,1])e.boxC([.8*r,1.1*r,.05*r],"#3a2a1d",[i,.55*r,s+o*.17*r],[o*.3,0,0]),e.boxC([.68*r,.8*r,.02*r],"#fff3c4",[i,.6*r,s+o*.215*r],[o*.3,0,0]);t.signs.push({id:"sandwich",pos:[i,.6*r,s+.23*r],size:[.62*r,.74*r],kind:"street"})},car(n,{group:e}){let t=Cd(n.color||"#d8402f");t.position.set(n.pos[0],0,n.pos[2]),t.rotation.y=n.rot||0,e.add(t)}};function Cd(n){let e=new Qe,t="#2d3f52";e.box([3.7,.5,1.62],n,[0,.32,0]),e.box([3.5,.12,1.5],ri(n,-.12),[0,.22,0]),e.box([2,.52,1.46],n,[-.2,.82,0]),e.box([2.06,.36,1.5],t,[-.2,.86,0]),e.box([1.6,.04,1.3],ri(n,.06),[-.2,1.34,0]);for(let i of[-1.15,1.15])for(let s of[-.8,.8])e.cylC(.34,.24,"#1d1f24",[i,.34,s],[Math.PI/2,0,0],14),e.cylC(.17,.26,"#b9bec6",[i,.34,s],[Math.PI/2,0,0],10);return e.box([.08,.14,.34],"#fff3c4",[1.84,.52,.5]),e.box([.08,.14,.34],"#fff3c4",[1.84,.52,-.5]),e.box([.08,.14,.34],"#c0392b",[-1.84,.52,.5]),e.box([.08,.14,.34],"#c0392b",[-1.84,.52,-.5]),e.box([.14,.14,1.66],"#8f949c",[1.82,.28,0]),e.box([.14,.14,1.66],"#8f949c",[-1.82,.28,0]),e.mesh(rn)}function fx(n,e,t){let i=["#e9c46a","#4a6fa5","#f4f1de","#2f7d6a"],s=[{z:n.z+n.width*.24,dir:1},{z:n.z-n.width*.24,dir:-1}],r=kn(t,"#fff8d8","#fff0b0",2.5),o=[];s.forEach((a,l)=>{for(let c=0;c<2;c++){let h=Cd(i[(l*2+c)%i.length]);h.rotation.y=a.dir>0?0:Math.PI,h.position.set(-70+Math.random()*140,0,a.z);for(let u of[-.5,.5]){let d=new Ce(ke.sphere(8,6),r);d.scale.set(.06,.1,.16),d.position.set(1.9,.59,u),h.add(d)}e.add(h),o.push({m:h,dir:a.dir,speed:5+Math.random()*3})}}),t.updaters.push(a=>{for(let l of o)l.m.position.x+=l.dir*l.speed*a,l.m.position.x>80&&(l.m.position.x=-80),l.m.position.x<-80&&(l.m.position.x=80)})}var Ms=new Map;function px(n,e){let t="leg|"+n+"|"+e;if(!Ms.has(t)){let i=new Qe;i.add(ke.capsule(.085,.36),n,[0,-.27,0]),i.box([.15,.09,.26],e,[0,-.58,.04]),Ms.set(t,i.geometry())}return Ms.get(t)}function mx(n,e){let t="arm|"+n+"|"+e;if(!Ms.has(t)){let i=new Qe;i.add(ke.capsule(.065,.3),n,[0,-.2,0]),i.sphere(.072,e,[0,-.45,0]),Ms.set(t,i.geometry())}return Ms.get(t)}var hl=new Map,gx=400;function tr(n){let e=new at,t=JSON.stringify(n),i=hl.get(t),s=new Qe,r=n.skin||"#e0ac7e";s.add(ke.capsule(.2,.4),n.shirt,[0,.98,0],[0,0,0],[1.05,1,.8]),s.cyl(.07,.07,.1,r,[0,1.34,0]),s.sphere(.2,r,[0,1.6,0],[1,1.05,.98]),s.sphere(.027,"#2a1d14",[-.075,1.62,.178]),s.sphere(.027,"#2a1d14",[.075,1.62,.178]),s.boxC([.09,.016,.02],"#8a3b2a",[0,1.525,.186]),s.sphere(.04,r,[-.2,1.6,0]),s.sphere(.04,r,[.2,1.6,0]);let o=n.hair||"#3b2a1e",a=n.hairStyle||"short";if(a!=="bald"&&(s.dome(.215,o,[0,1.63,-.015],[1,1.02,1.02],[-.25,0,0]),a==="bun"&&s.sphere(.1,o,[0,1.86,-.08]),a==="long"&&s.add(ke.capsule(.15,.22),o,[0,1.45,-.12],[0,0,0],[1.25,1,.6])),n.hat==="cap"){let p=n.hatColor||"#d8402f";s.dome(.21,p,[0,1.7,0],[1,.75,1]),s.boxC([.26,.03,.2],p,[0,1.71,.2],[.15,0,0])}else n.hat==="toque"&&(s.cyl(.17,.165,.2,"#ffffff",[0,1.74,0]),s.sphere(.21,"#ffffff",[0,2,0],[1,.72,1]));n.apron&&(s.boxC([.32,.5,.04],n.apron,[0,.9,.165]),s.boxC([.34,.04,.05],n.apron,[0,1.12,.165])),s.add(ke.capsule(.17,.08),n.pants||"#3d4a66",[0,.66,0],[0,0,Math.PI/2],[1,1,.85]);let l=i?new Ce(i,rn):s.mesh(rn);!i&&hl.size<gx&&hl.set(t,l.geometry),l.castShadow=!0,e.add(l);let c=rn,h=(p,x,y)=>{let b=new at;b.position.set(x,y,0);let R=new Ce(p,c);return R.castShadow=!0,b.add(R),e.add(b),b},u=px(n.pants||"#3d4a66",n.shoe||"#2b2b33"),d=mx(n.shirt,r),f=h(u,-.105,.62),g=h(u,.105,.62),_=h(d,-.275,1.27),m=h(d,.275,1.27);return _.rotation.z=-.12,m.rotation.z=.12,e.add(Sd(.36)),n.scale&&e.scale.setScalar(n.scale),{group:e,body:l,armL:_,armR:m,legL:f,legR:g}}function ul(n,e,t){let i=Math.sin(e)*.65*t;n.legL.rotation.x=i,n.legR.rotation.x=-i,n.armL.rotation.x=-i*.8,n.armR.rotation.x=i*.8}var _x=["#f2c9a0","#e0ac7e","#c68a5c","#8d5a3b","#f7d9bd","#a8704a"],yx=["#2b1d14","#5a3a22","#8a5a2b","#c9a15a","#1c1c22","#7a2f1e","#d9d9d9"],Pd=["#4ea8de","#ef476f","#ffd166","#06d6a0","#9b5de5","#f78c6b","#3d9a8b","#f4f1de","#e76f51","#577590"],xx=["#3d4a66","#2f3e46","#6b4f3a","#4a4e69","#1f2a44","#7a8aa0"],vx=["short","short","bun","long","short","bald","long"];function Ld(n){let e=s=>Math.abs(Math.sin(n*12.9898+s*78.233)*43758.5453)%1,t=(s,r)=>s[Math.floor(e(r)*s.length)],i=e(6);return{skin:t(_x,1),hair:t(yx,2),shirt:t(Pd,3),pants:t(xx,4),hairStyle:t(vx,5),hat:i>.84?"cap":"none",hatColor:t(Pd,7),scale:.94+e(8)*.12}}var ie=.2,it=1.5,_n="#c8392b",Tn="#fff3dc",Id="#2f6b5a",ml="#a8703f",oi="#6b4428",Go="#b9aea0",yt="#2f3238",nr="#f3ede0";function Fd(n,e,t){let i=e.width,s=e.id==="cart",r=s?.42:e.id==="stand"?.3:.15,o=s?ie+i/2+.45:ie+i/2-1.05,a={dough:[ie-i*.29,1.15,.7],load:[ie+i*.19,1.15,.7],oven:[o,.86,.72],pass:[ie,1.25,1.55]},l=n.camera;return{...n,tier:e,tierIdx:t,cx:ie,W:i,D:e.depth,back:it-e.depth,floorY:r,ovenX:o,stations:a,window:[ie-.4,0,2.9],register:[ie+.8,1.2,1.55],camera:{...l,zoom:e.cameraZoom,target:[l.target[0],l.target[1]+t*.6,l.target[2]]}}}function zd(n,e,t={}){let i=new at;i.name="stand:"+n.tier.id;let s={g:i,env:e,L:n,S:new Qe,F:new Qe,M:new Qe,warm:new Qe,win:new Qe,cw:n.W-.6};Mx[n.tier.id](s),bx(s),Sx(s),wx(s),Ax(s,t.decor||0),Tx(s,t.empire||{}),i.add(s.S.mesh(rn)),s.F.empty||i.add(s.F.mesh(Ni)),s.M.empty||i.add(s.M.mesh(al)),s.warm.empty||i.add(s.warm.mesh(kn(e,"#ffffff","#ffc978",2.2,{vertexColors:!0}),{cast:!1,receive:!1})),s.win.empty||i.add(s.win.mesh(kn(e,"#ffffff","#ffb45e",.55,{vertexColors:!0,roughness:.3}),{cast:!1}));let r=Vo(e,5.5,"#ffb469",.45);return r.position.set(ie,.03,3.4),i.add(r),Rx(s),i}function dl(n,e,t,i,s){let r=Math.round((t-e)/.36),o=(t-e)/r;n.S.box([t-e,.1,.04],_n,[(e+t)/2,i+.06,s]);for(let a=0;a<r;a++)n.S.cylC(o/2,.035,a%2?Tn:"#d8402f",[e+o*(a+.5),i+.06,s],[Math.PI/2,0,0],12)}function Dd(n,e,t,i){let s=new Ce(ke.box(),wn("stripes",e[0]/.8,1));s.scale.set(e[0],e[1],e[2]),s.position.set(t[0],t[1],t[2]),s.rotation.x=i,s.castShadow=!0,s.receiveShadow=!0,n.g.add(s);let r=e[2]/2;return{y:t[1]-Math.sin(i)*r,z:t[2]+Math.cos(i)*r}}function ir(n,e,t,i,s){let{S:r}=n;r.box([t-e,.05,.3],oi,[(e+t)/2,i,s]);let o=["#c0392b","#e9c46a","#2e8b57","#f4f1de","#e67e22","#7a4a2b","#b8d8a8"],a=0;for(let l=e+.25;l<t-.15;l+=.34){let c=.2+a*7%3*.06;a%4===3?(r.cyl(.05,.07,c+.12,"#3b6b4a",[l,i+.05,s]),r.cyl(.025,.03,.1,"#3b6b4a",[l,i+.17+c,s])):(r.cyl(.09,.09,c,o[a%o.length],[l,i+.05,s]),r.cyl(.095,.095,.04,"#d9cbb2",[l,i+.05+c,s])),a++}}function Ud(n,e,t,i,s){let{S:r,M:o}=n;o.torus(s,.06,yt,[e,t,i]),r.cylC(.11,.16,oi,[e,t,i],[Math.PI/2,0,0]);for(let a=0;a<4;a++)r.boxC([s*1.9,.07,.06],ml,[e,t,i],[0,0,a*Math.PI/4])}var Mx={cart(n){let{S:e,M:t,L:i,g:s}=n,{W:r}=i,o=ie-r/2,a=ie+r/2,l=-1.1;s.add(En([r,.22,2.6],"wood",[ie,.2,.2],[r/1.3,2])),e.box([r-.5,.12,.16],oi,[ie,.1,-.5]);for(let h of[ie-1.35,ie+1.35])Ud(n,h,.56,2.13,.52),Ud(n,h,.56,l-.06,.52);t.cylC(.035,1.5,yt,[o-.42,1.25,.2],[Math.PI/2,0,0]);for(let h of[-.5,.9])t.cylC(.03,.5,yt,[o-.2,1.2,h],[0,0,Math.PI/2.4]);e.box([r,2.55,.12],_n,[ie,i.floorY,l]),e.box([r+.06,.16,.16],Tn,[ie,i.floorY+2.5,l]),e.box([r+.04,.5,.14],Tn,[ie,i.floorY,l+.01]),ir(n,o+.3,a-.3,2.05,l+.2);for(let h of[o+.05,a-.05])e.box([.1,.8,2.45],_n,[h,i.floorY,.2]);for(let h of[o+.08,a-.08])for(let u of[it-.08,l+.1])t.cyl(.045,.045,3.15,yt,[h,i.floorY,u]);let c=Dd(n,[r+.7,.07,3.1],[ie,3.5,.3],.1);dl(n,o-.35,a+.35,c.y-.2,c.z),Object.assign(n,{eave:{y:c.y-.2,z:c.z,x0:o-.3,x1:a+.3},neonPos:[ie,4,-.7],flagBase:{y:3.6,z:l,n:4},statuePos:[o+.45,4.05,-.7],chimneyTop:3.2,counterBase:.2});for(let h of[ie-.9,ie+.9])t.cyl(.035,.035,.5,yt,[h,3.62,-.7])},stand(n){let{S:e,L:t,g:i}=n,{W:s,D:r,back:o}=t,a=ie-s/2,l=ie+s/2,c=(it+o)/2;i.add(En([s+.5,.3,r+.7],"wood",[ie,0,c+.1],[s/1.3,3])),e.box([s+.6,.08,r+.8],oi,[ie,0,c+.1]),e.box([s,3.5,.14],_n,[ie,t.floorY,o+.07]),e.box([s+.02,1,.16],Tn,[ie,t.floorY,o+.08]),e.box([s+.04,.08,.2],Id,[ie,t.floorY+1,o+.09]),ir(n,a+.4,l-1.9,1.95,o+.3),ir(n,a+.4,l-1.9,2.55,o+.3);for(let f of[a+.07,l-.07]){e.box([.14,1.15,r-.1],_n,[f,t.floorY,c]),e.box([.2,.08,r],Tn,[f,t.floorY+1.15,c]);for(let g of[it-.1,o+.1])e.box([.18,3.6,.18],oi,[f,t.floorY,g])}let h=new Ce(ke.box(),wn("rooftiles",(s+1)/1.2,3));h.scale.set(s+1,.16,r+.9),h.position.set(ie,4.05,c+.15),h.rotation.x=.07,h.castShadow=!0,h.receiveShadow=!0,i.add(h);let u=c+.15+(r+.9)/2,d=4.05-(r+.9)/2*.07;e.box([s+1,.2,.08],Tn,[ie,d-.24,u-.02]),dl(n,a-.5,l+.5,d-.44,u),e.box([3.7,.95,.14],_n,[ie,4.2,it+.1]),e.box([3.45,.7,.16],Tn,[ie,4.32,it+.12]);for(let f of[ie-1.6,ie+1.6])e.box([.12,.5,.12],oi,[f,3.85,it+.1]);n.env.signs.push({id:"name",pos:[ie,4.68,it+.25],kind:"shopname"}),n.env.signs.push({id:"franchise",pos:[l-.12,2.55,it+.05],size:[.64,.44],kind:"franchise"}),e.box([.7,.5,.05],"#d4af37",[l-.12,2.3,it+.02]),Object.assign(n,{eave:{y:d-.44,z:u,x0:a-.45,x1:l+.45},neonPos:[ie,5.65,it+.1],flagBase:{y:4.15,z:o+.2,n:5},statuePos:[a+.6,4.75,c],chimneyTop:5,counterBase:0})},shop(n){let{S:e,F:t,M:i,L:s,g:r,warm:o,win:a}=n,{W:l,D:c,back:h}=s,u=ie-l/2,d=ie+l/2,f=(it+h)/2,g="#f1d9a8",_=3.6,m=6.1;e.box([l+.8,.15,c+1.3],Go,[ie,0,f+.35]);let p=new Ce(new Sn(l-.4,c-.3),wn("checker",l/1.6,c/1.6));p.rotation.x=-Math.PI/2,p.position.set(ie,.16,f),p.receiveShadow=!0,r.add(p),r.add(En([l,_-.15,.2],"tiles",[ie,.15,h+.1],[l/1.2,3]));for(let b of[u+.12,d-.12])r.add(En([.24,_-.15,c],"plaster",[b,.15,f],[4,3],{color:g}));for(let b of[u+.27,d-.27])e.box([.54,_-.15,.54],"#e6c990",[b,.15,it-.05]),e.box([.62,.3,.62],Go,[b,.15,it-.05]),i.box([.06,.3,.16],yt,[b,2.35,it+.26]),o.box([.2,.28,.2],"#fff0c8",[b,2.3,it+.42]),i.cone(.2,.14,yt,[b,2.58,it+.42],[0,0,0],4);e.box([l,.5,.44],"#e6c990",[ie,_-.5,it-.08]),ir(n,u+.5,d-2.2,1.95,h+.36),ir(n,u+.5,d-2.2,2.6,h+.36);for(let b=0;b<4;b++)i.cylC(.19,.03,"#8a8d93",[u+1.2+b*.62,3.05,h+.26],[Math.PI/2,0,0],14),i.box([.04,.26,.03],"#5a5d63",[u+1.2+b*.62,3.18,h+.26]);r.add(En([l+.1,m-_,c+.1],"plaster",[ie,_,f],[5,2],{color:"#f6e3b4"})),e.box([l+.4,.16,c+.4],nr,[ie,_-.02,f]);let x=it+.06;for(let b of[-2.45,0,2.45]){let R=ie+b;e.box([1.36,1.66,.08],nr,[R,4.2,x]),a.box([1.14,1.46,.06],"#bcd3e0",[R,4.3,x+.04]),e.box([.06,1.46,.04],nr,[R,4.3,x+.08]),e.box([1.14,.06,.04],nr,[R,5,x+.08]);for(let E of[-1,1])e.box([.3,1.5,.06],Id,[R+E*.76,4.28,x+.04]);e.box([1.5,.2,.3],"#8d5a3b",[R,3.98,x+.2]),["#ef476f","#ffd166","#ffffff","#f78c6b","#ef476f"].forEach((E,A)=>{t.ico(.12,E,[R-.52+A*.26,4.28+A%2*.06,x+.24])}),t.ico(.2,"#4f8f47",[R,4.2,x+.22],[3.2,.6,.8])}e.box([l+.7,.26,c+.7],nr,[ie,m,f]),e.box([l+.3,.5,c+.3],"#e6c990",[ie,m+.26,f]),e.box([l-.2,.1,c-.2],"#8d7b68",[ie,m+.3,f]);for(let b of[ie-2.1,ie+2.1])i.cyl(.05,.05,1,yt,[b,m+.7,it-.5]);e.box([4.9,1.05,.16],_n,[ie,m+.8,it-.5]),e.box([4.6,.8,.18],Tn,[ie,m+.93,it-.49]),n.env.signs.push({id:"name",pos:[ie,m+1.33,it-.35],kind:"shopname"}),e.box([.64,.48,.05],"#d4af37",[d-.3,1.5,it+.24]),n.env.signs.push({id:"franchise",pos:[d-.3,1.74,it+.27],size:[.58,.42],kind:"franchise"});let y=Dd(n,[l+.5,.08,1.5],[ie,_+.12,it+.72],.2);dl(n,u-.25,d+.25,y.y-.2,y.z),Object.assign(n,{eave:{y:y.y-.2,z:y.z,x0:u-.2,x1:d+.2},neonPos:[ie,m+2.3,it-.5],flagBase:{y:m+.76,z:h+.3,n:6},statuePos:[u+.9,m+1.25,f+.6],chimneyTop:m+1.5,counterBase:0})}};function bx(n){let{S:e,M:t,F:i,L:s,g:r,env:o,cw:a,warm:l}=n,{stations:c,floorY:h}=s,u=n.counterBase;e.box([a,1.12-u,.75],"#f6ead2",[ie,u,1.7]),e.box([a+.04,.14,.78],oi,[ie,u,1.7]),e.box([a+.02,.1,.02],_n,[ie,.93,2.08]);let d=Math.max(3,Math.round(a/.95));for(let W=0;W<d;W++){let P=ie-a/2+a/d*(W+.5);e.box([a/d-.18,.5,.03],"#ead9b8",[P,Math.max(u+.2,.34),2.075])}r.add(En([a+.16,.08,1],"wood",[ie,1.12,1.6],[a/1.3,1]));let[f,,g]=c.dough;r.add(En([1.2,.07,.98],"wood",[f,1.03,g],[1,1]));for(let W of[-.52,.52])for(let P of[-.4,.4])e.box([.07,1.03-h,.07],oi,[f+W,h,g+P]);e.box([.3,.34,.2],"#efe6d2",[f-.4,1.1,g-.36]),e.box([.3,.05,.2],"#d9cbb2",[f-.4,1.4,g-.36],[0,0,.2]),e.cylC(.045,.5,ml,[f+.05,1.15,g-.38],[0,0,Math.PI/2]),t.cyl(.13,.09,.1,"#c9ccd2",[f+.42,1.1,g-.36]),e.cyl(.115,.115,.02,"#c0392b",[f+.42,1.18,g-.36]),e.sphere(.09,"#f1dfb8",[f-.08,1.17,g-.36],[1,.7,1]);let[_,,m]=c.load;t.box([1,.05,.9],"#b9bec6",[_,1.05,m]),t.box([1,.04,.9],"#b9bec6",[_,.6,m]);for(let W of[-.46,.46])for(let P of[-.41,.41])t.box([.05,1.05-h,.05],"#8a8d93",[_+W,h,m+P]);e.cylC(.025,1.3,ml,[_+.42,1.55,m-.5],[.25,0,.12]),e.cyl(.27,.27,.025,"#caa26a",[_+.5,2.15,m-.66],[.25+Math.PI/2,0,.12],16);let p=s.ovenX,x=-.1;e.box([1.84,.56,1.5],Go,[p,0,x]),r.add(En([1.74,1,1.42],"brick",[p,.56,x],[1.6,1.2]));let y=new Ce(ke.dome(18,10),wn("brick",3,1.4));y.scale.set(.87,.72,.71),y.position.set(p,1.56,x),y.castShadow=!0,r.add(y),e.box([1,.6,.06],"#140d0a",[p,.82,x+.7]),e.box([1.2,.14,.14],"#cfc3b2",[p,1.42,x+.72]);for(let W of[-1,1])e.box([.14,.62,.14],"#cfc3b2",[p+W*.57,.8,x+.72]);e.box([1.4,.07,.42],"#cfc3b2",[p,.76,x+.9]);let b=vs("#3a1a0c",{emissive:new me("#ff7a1f"),emissiveIntensity:.5});o.ovenMouthMat=b;let R=new Ce(ke.box(),b);R.scale.set(.9,.5,.03),R.position.set(p,1.1,x+.74),r.add(R);for(let W=0;W<3;W++)e.cylC(.07,.5,"#7b5236",[p-.3+W*.16,.64,x+.95],[Math.PI/2,0,0],8);let E=p+.4,A=x-.35;e.cyl(.17,.21,n.chimneyTop-1.9,"#6e4a3a",[E,1.9,A]),e.cyl(.24,.24,.1,"#4e342a",[E,n.chimneyTop,A]),o.smokeAt=[E,n.chimneyTop+.2,A];let[N,,M]=s.register;t.box([.52,.2,.44],"#4a5563",[N,1.2,M]),t.boxC([.44,.26,.05],"#2f3640",[N,1.52,M-.1],[-.35,0,0]),e.boxC([.36,.18,.02],"#9fe3c0",[N,1.52,M-.07],[-.35,0,0]),e.box([.4,.03,.2],"#d9dde3",[N,1.4,M+.08]),t.cyl(.11,.1,.22,"#f6e7b0",[N+.5,1.2,1.95]),e.cyl(.08,.08,.06,"#e9c46a",[N+.5,1.2,1.95]),e.box([.2,.16,.14],"#ffffff",[ie-.55,1.2,1.95]);let S=ie-a/2+.55;[0,1,2].forEach(W=>e.box([.72,.1,.72],"#f2d7a7",[S,1.2+W*.1,1.62],[0,W*.1,0])),e.box([.5,.012,.5],_n,[S,1.5,1.62],[0,.2,0]);for(let W of[ie-a/2+.1,ie+a/2-.1])e.cyl(.17,.13,.26,"#b5562c",[W,1.2,2]),i.ico(.24,"#4f9d4a",[W,1.62,2],[1,.95,1]),i.ico(.16,"#62b35a",[W+.1,1.78,2.02]);let D=n.eave,z=Math.round((D.x1-D.x0)/.48);for(let W=0;W<=z;W++){let P=W/z;l.sphere(.06,"#fff0c8",[D.x0+(D.x1-D.x0)*P,D.y-.1-Math.sin(P*Math.PI*z)*0,D.z-.06],[1,1.2,1],[8,6])}}function Sx(n){let{S:e,L:t,env:i}=n,s=1.5,r=ie-t.W/2-.75,o=3.5,a=1*s,l=1*s,c=a+l/2;for(let h of[-.5,.5])e.box([.08*s,a+.2,.08*s],yt,[r+h*s,0,o]);e.box([1.36*s,l,.08],"#2b2d42",[r,a,o]),e.box([1.2*s,.84*s,.03],"#f7f1e1",[r,c-.42*s,o+.045]),i.signs.push({id:"menu",pos:[r,c,o+.06],size:[1.6,1.16],kind:"menu"})}function wx(n){let{g:e,env:t}=n,[i,s,r]=n.neonPos,o=new at,a=new at,l=new Qe;l.boxC([2.5,.78,.08],"#1d1a26",[i,s,r]),o.add(l.mesh(rn));let c=new Qe;c.boxC([2.3,.05,.05],"#ff7ab5",[i,s+.31,r+.06]),c.boxC([2.3,.05,.05],"#ff7ab5",[i,s-.31,r+.06]),c.boxC([.05,.62,.05],"#ff7ab5",[i-1.15,s,r+.06]),c.boxC([.05,.62,.05],"#ff7ab5",[i+1.15,s,r+.06]),c.torus(.2,.035,"#ff7ab5",[i-.85,s,r+.07]),o.add(c.mesh(kn(t,"#ff7ab5","#ff3d94",3.2),{cast:!1}));let h=new Qe;h.torus(.62,.04,"#7ff6ff",[i+1.75,s,r+.05]),h.torus(.62,.04,"#7ff6ff",[i-1.75,s,r+.05]);for(let u of[-1,1])h.boxC([.5,.06,.05],"#7ff6ff",[i+u*1.75,s,r+.06],[0,0,.6]),h.boxC([.5,.06,.05],"#7ff6ff",[i+u*1.75,s,r+.06],[0,0,-.6]),h.boxC([.06,.5,.05],"#7ff6ff",[i+u*1.75,s,r+.06]);a.add(h.mesh(kn(t,"#7ff6ff","#2fe6ff",3.2),{cast:!1})),o.visible=!1,a.visible=!1,e.add(o,a),t.neon={l1:o,l2:a},t.signs.push({id:"neon",pos:[i+.2,s,r+.1],kind:"neon"})}function Nd(n,e,t){let{S:i,M:s,F:r}=n;s.cyl(.24,.26,.04,yt,[e,0,t]),s.cyl(.035,.035,2.5,yt,[e,0,t]),i.cyl(.46,.46,.05,"#f6ead2",[e,.74,t],[0,0,0],18),r.add(ke.cone(8),_n,[e,2.42,t],[0,0,0],[.92,.4,.92]),r.add(ke.cone(8),Tn,[e,2.36,t],[0,Math.PI/8,0],[.95,.28,.95]),i.cyl(.16,.16,.02,"#e9b45a",[e-.1,.79,t+.05],[0,0,0],12),i.cyl(.04,.035,.1,"#ffffff",[e+.22,.79,t-.1]);for(let o of[-1,1]){let a=e+o*.72;i.cyl(.2,.2,.05,_n,[a,.46,t+.1],[0,0,0],12);for(let[l,c]of[[-.14,-.14],[.14,-.14],[-.14,.14],[.14,.14]])s.cyl(.02,.02,.46,yt,[a+l,0,t+.1+c]);s.box([.04,.42,.34],yt,[a+o*.17,.5,t+.1])}}function Od(n,e,t){let{S:i,F:s}=n;i.cyl(.3,.22,.42,"#b5562c",[e,0,t]),i.cyl(.32,.32,.05,"#9c4826",[e,.42,t]),i.cyl(.05,.07,.95,"#6b5a45",[e,.42,t]),s.ico(.42,"#7d9460",[e,1.6,t]),s.ico(.3,"#8fa873",[e+.25,1.4,t+.1],[1,1,1],[1,1,0]),s.ico(.28,"#6f8754",[e-.24,1.42,t-.08],[1,1,1],[2,0,1])}var fl={flowers(n){let{S:e,F:t,M:i,cw:s,eave:r}=n,o=Math.max(2,Math.round(s/1.25)),a=["#ef476f","#ffd166","#ffffff","#f78c6b","#c77dff"];for(let l=0;l<o;l++){let c=ie-s/2+s/o*(l+.5);e.box([.92,.2,.24],"#8d5a3b",[c,.56,2.2]),t.ico(.16,"#4f8f47",[c,.8,2.2],[2.7,.7,.8]);for(let h=0;h<5;h++)t.ico(.1,a[(l+h)%a.length],[c-.34+h*.17,.9+h%2*.06,2.24])}for(let l of[r.x0+.35,r.x1-.35]){i.cylC(.012,.5,yt,[l,r.y-.35,r.z-.25]),e.dome(.2,"#7b5236",[l,r.y-.62,r.z-.25],[1,1,1],[Math.PI,0,0]),t.ico(.24,"#4f8f47",[l,r.y-.52,r.z-.25],[1,.7,1]);for(let c=0;c<5;c++){let h=c/5*Math.PI*2;t.ico(.09,a[c%a.length],[l+Math.cos(h)*.17,r.y-.46,r.z-.25+Math.sin(h)*.17])}}},festoon(n){let{M:e,warm:t,L:i,eave:s}=n,r=ie-i.W/2-.5,o=ie+i.W/2+.5,a=2.7,l=Math.max(4.1,s.y+.9);for(let h of[r,o])e.cyl(.05,.07,l,yt,[h,0,a]),e.sphere(.09,"#d4af37",[h,l+.05,a]);let c=16;for(let h=1;h<c;h++){let u=h/c,d=l-.02-Math.sin(u*Math.PI)*.55;t.sphere(.085,"#fff0c8",[r+(o-r)*u,d,a],[1,1.25,1],[8,6]),e.cylC(.01,(o-r)/c,yt,[r+(o-r)*(u-.5/c),d+.1,a],[0,0,Math.PI/2],4)}},bunting(n){let{F:e,eave:t}=n,i=["#ef476f","#ffd166","#06d6a0","#4ea8de","#9b5de5"],s=Math.round((t.x1-t.x0)/.34);for(let r=0;r<s;r++){let o=t.x0+(t.x1-t.x0)/s*(r+.5);e.add(ke.cone(3),i[r%i.length],[o,t.y-.36,t.z+.04],[Math.PI,0,0],[.15,.3,.02])}},table(n){Nd(n,ie+3,4.2)},lanterns(n){let{M:e,warm:t,cw:i}=n;for(let s of[ie-i/2-.32,ie+i/2+.32]){e.box([.3,.06,.3],yt,[s,0,2.5]);for(let[r,o]of[[-.12,-.12],[.12,-.12],[-.12,.12],[.12,.12]])e.box([.03,.56,.03],yt,[s+r,.06,2.5+o]);t.box([.2,.46,.2],"#ffe9b0",[s,.1,2.5]),e.cone(.24,.16,yt,[s,.62,2.5],[0,Math.PI/4,0],4),e.torus(.07,.012,yt,[s,.84,2.5])}},carpet(n){let{S:e,M:t,L:i}=n,s=i.queueStart[0]+i.queueStep[0]*(i.queueRowLength-1)/2,r=3.3,o=i.queueStart[2]+i.queueStep[2]*3.3,a=Math.abs(i.queueStep[0])*i.queueRowLength+.5;e.box([a,.012,o-r],"#a82a2a",[s,.014,(r+o)/2]);for(let l of[-1,1])e.box([.1,.014,o-r],"#d4af37",[s+l*(a/2-.12),.016,(r+o)/2]);for(let l of[-1,1]){let c=s+l*(a/2+.18),h=[r+.6,(r+o)/2+.2,o-.2];h.forEach((u,d)=>{t.cyl(.16,.18,.04,"#d4af37",[c,0,u]),t.cyl(.03,.03,.95,"#d4af37",[c,0,u]),t.sphere(.07,"#d4af37",[c,1,u]),d>0&&n.S.cylC(.03,u-h[d-1],"#8a1f2b",[c,.82,(u+h[d-1])/2],[Math.PI/2,0,0],6)})}},secondTable(n){let{L:e}=n;Nd(n,ie+3.5,6.3),Od(n,ie+e.W/2+.75,2),Od(n,ie-e.W/2-.75,2.2)},balloons(n){let{g:e,env:t,cw:i}=n,s=new Qe,r=["#ef476f","#ffd166","#06d6a0","#4ea8de","#9b5de5","#f78c6b"];[[0,2.2,0],[.32,2,.1],[-.3,1.95,-.05],[.12,2.6,-.1],[-.16,2.48,.14],[.36,2.45,-.12]].forEach(([l,c,h],u)=>{s.sphere(.24,r[u],[l,c,h],[1,1.2,1]),s.cone(.05,.07,r[u],[l,c-.33,h]),s.cylC(.006,c-.3,"#eeeeee",[l/2,(c-.3)/2,h/2],[-(h/c)*.9,0,l/c*.9],4)});let a=s.mesh(al);a.position.set(ie+i/2+.05,1.2,2.1),e.add(a),t.updaters.push((l,c)=>{a.rotation.z=Math.sin(c*1.3)*.07,a.rotation.x=Math.sin(c*.9+1)*.05})},flags(n){let{M:e,g:t,env:i,L:s}=n,r=n.flagBase,o=[];for(let a=0;a<r.n;a++){let l=ie-s.W/2+.4+(s.W-.8)/(r.n-1)*a;e.cyl(.03,.035,1.5,"#d9dde3",[l,r.y,r.z]),e.sphere(.055,"#d4af37",[l,r.y+1.53,r.z]);let c=new Qe;["#2e8b57","#ffffff","#d8402f"].forEach((u,d)=>c.boxC([.22,.42,.02],u,[.13+d*.22,0,0]));let h=c.mesh(Ni);h.position.set(l+.03,r.y+1.26,r.z),t.add(h),o.push(h)}i.updaters.push((a,l)=>{o.forEach((c,h)=>{c.rotation.y=Math.sin(l*2.2+h*.9)*.35})})},statue(n){let{M:e,g:t,env:i}=n,[s,r,o]=n.statuePos;e.cyl(.06,.09,.9,"#d9dde3",[s,r-.9,o]),e.cyl(.26,.3,.1,"#d4af37",[s,r-.05,o]);let a=new Qe,l="#f2c230";a.cylC(.62,.1,l,[0,.72,0],[Math.PI/2,0,0],24),a.torus(.62,.075,"#e0a81e",[0,.72,0]);for(let h=0;h<6;h++){let u=h/6*Math.PI*2;for(let d of[-1,1])a.cylC(.11,.05,"#e0a81e",[Math.cos(u)*.34,.72+Math.sin(u)*.34,d*.06],[Math.PI/2,0,0],10)}for(let h=0;h<8;h++){let u=h/8*Math.PI*2;a.boxC([.06,.26,.04],l,[Math.cos(u)*.86,.72+Math.sin(u)*.86,0],[0,0,u-Math.PI/2])}let c=a.mesh(new ps({vertexColors:!0,shininess:90,specular:new me("#fff2b0"),emissive:new me("#6b4a00"),emissiveIntensity:.6}));c.position.set(s,r,o),t.add(c),i.updaters.push(h=>{c.rotation.y+=h*.9})}},Ex=-.1;function Tx(n,e){let{S:t,M:i,F:s,warm:r,L:o,g:a}=n,{marketing:l=0,pizzaSchool:c=0,megaOven:h=0}=e,u=["#ef476f","#ffd166","#06d6a0","#4ea8de","#9b5de5"],d=ie+o.W/2+.25,f=Math.min(l,5);for(let g=0;g<f;g++){let _=d+g*.42-(f-1)*.21+.6,m=(n.eave?n.eave.y:3.2)-.7;i.cylC(.012,.9,yt,[_,m+.45,n.eave?n.eave.z:.4]),t.box([.36,1.2,.03],u[g%u.length],[_,m-.6,(n.eave?n.eave.z:.4)+.02]),t.box([.3,.06,.04],"#ffffff",[_,m-.36,(n.eave?n.eave.z:.4)+.04])}for(let g=0;g<Math.min(c,5);g++){let _=ie-.8+g*.42,m=o.back+.16;t.box([.4,.5,.05],"#d4af37",[_,1.45+.25,m]),t.box([.32,.4,.04],"#fff8e7",[_,1.45+.25,m+.02]),t.box([.2,.04,.04],"#b5372a",[_,1.45+.34,m+.03]),t.box([.2,.03,.04],"#6b4428",[_,1.45+.2,m+.03])}for(let g=0;g<Math.min(h,4);g++){let _=o.ovenX+1.35+g*1.35,m=Ex;t.box([1.1,.5,1],Go,[_,0,m]),a.add(En([1.05,.9,.95],"brick",[_,.5,m],[1.2,1]));let p=new Ce(ke.dome(14,8),wn("brick",2,1));p.scale.set(.58,.5,.52),p.position.set(_,1.4,m),p.castShadow=!0,a.add(p),t.box([.72,.44,.05],"#140d0a",[_,.66,m+.52]),r.box([.62,.3,.03],"#ffb35a",[_,.72,m+.55]),i.cylC(.04,.5,yt,[_+.36,1.9,m-.3])}}function Ax(n,e){(n.L.decorSteps||Object.keys(fl)).slice(0,e).forEach(i=>{fl[i]&&fl[i](n)})}var pl=7;function Rx(n){let{g:e,env:t,L:i}=n,s=i.floorY,r=i.W,o=[{shirt:"#ef476f",hat:"cap",hatColor:"#ffd166",hair:"#3b2a1e",skin:"#c68a5c",hairStyle:"short"},{shirt:"#4ea8de",hat:"cap",hatColor:"#d8402f",hair:"#5a3a22",skin:"#f2c9a0",hairStyle:"long"},{shirt:"#2f6b5a",hat:"none",hair:"#1c1c22",skin:"#e0ac7e",hairStyle:"bun"}],a=[{skin:"#8d5a3b",hair:"#1c1c22"},{skin:"#f2c9a0",hair:"#7a2f1e"},{skin:"#e0ac7e",hair:"#2b1d14"}],l=f=>ie-r*.36+f*(r*.72)/(pl-1),c=f=>ie-r*.42+f*(r*.5)/(pl-1),h=(f,g)=>(f.group.position.set(g[0],g[1],g[2]),f.group.rotation.y=g[3],f.group.visible=!1,f.baseY=g[1],e.add(f.group),f),u=[],d=[];for(let f=0;f<pl;f++){let g=o[f%o.length];u.push(h(tr({...g,pants:"#2f3e46",apron:Tn}),[l(f),s,.42,0]));let _=a[f%a.length];d.push(h(tr({..._,shirt:"#fdfdfd",pants:"#3d4a66",hat:"toque",apron:"#e9e2d2",hairStyle:"short"}),[c(f),s,-.3,0]))}t.staff={cashiers:u,cooks:d}}function kd(n,e,t,i){let s=n.staff;if(!s)return;let r=i?Jc(e,i):{cashier:0,cook:0},o=r.cashier,a=r.cook,l=e.customers.some(d=>d.state==="waiting"),c=e.pizzas.some(d=>d.stage==="ready"),h=e.pizzas.some(d=>d.stage==="dough"||d.stage==="topping"),u=e.pizzas.some(d=>d.stage==="load"||d.stage==="baking");s.cashiers.forEach((d,f)=>{if(d.group.visible=f<o,!d.group.visible)return;let g=f===0?l:f===1?c||l:!0,_=t*8+f*1.7;d.armR.rotation.x=g?-1+Math.sin(_)*.45:-.1+Math.sin(t*1.6+f)*.04,d.armL.rotation.x=g?-.5+Math.cos(_)*.25:-.1,d.group.position.y=d.baseY+(g?Math.abs(Math.sin(_*.5))*.02:Math.sin(t*1.4+f)*.006)}),s.cooks.forEach((d,f)=>{if(d.group.visible=f<a,!d.group.visible)return;let g=f===1?u:h,_=t*9+f*2.1;d.armR.rotation.x=g?-.95+Math.sin(_)*.5:-.1,d.armL.rotation.x=g?-.95+Math.sin(_+Math.PI)*.5:-.1,d.group.position.y=d.baseY+Math.sin(t*1.5+f*2)*.006})}function Bd(n,e){n.neon&&(n.neon.l1.visible=e>=1,n.neon.l2.visible=e>=2)}function Hd(n,e,t=0){let i=.85+Math.sin(t*11)*.1+Math.sin(t*23)*.05;n.ovenMouthMat&&(n.ovenMouthMat.emissiveIntensity=(e?3.2:.7)*i)}var Vd={pepperoni:"#b83227",mushroom:"#d8c7a8",olive:"#2f3d1c",basil:"#2e9a57",pepper:"#f0902a"},Cx=new me("#f3e2bd"),Px=new me("#d2893a"),Lx=new me("#fff0b8"),Ix=new me("#ffc94d"),Dx=new Set(["dough","topping","load","ready"]),Ux=14,Nx=20,Ox=new vt({vertexColors:!0,toneMapped:!1}),gl=new vt({color:"#2b2d42",toneMapped:!1}),Fx=bd("#c23b22",{roughness:.6});function zx(n){return Dt("bubble|"+n,()=>{let e=new Qe,t=[Math.PI/2,0,0];e.cylC(.3,.02,"#2b2d42",[0,0,-.012],t,22),e.cylC(.27,.02,"#ffffff",[0,0,0],t,22),e.add(ke.cone(3),"#ffffff",[0,-.3,0],[Math.PI,0,0],[.1,.14,.01]),e.cylC(.19,.02,"#d9993f",[0,0,.012],t,20),e.cylC(.155,.02,"#ffd76a",[0,0,.02],t,20);let i=Vd[n]||"#ffffff";return[[0,.07],[-.07,-.04],[.07,-.04]].forEach(([s,r])=>e.cylC(.045,.02,i,[s,r,.03],t,10)),e.geometry()})}var sr={base:()=>Dt("pz-base",()=>{let n=new Qe;return n.cylC(.39,.035,"#ffffff",[0,0,0],[0,0,0],22),n.torus(.37,.058,"#e9dcc4",[0,.02,0],[Math.PI/2,0,0],22),n.geometry()}),ball:()=>Dt("pz-ball",()=>new Qe().sphere(.24,"#ffffff",[0,0,0],[1,1,1],[14,10]).geometry()),disc:()=>Dt("pz-disc",()=>new ti(1,1,1,22)),toppings:()=>Dt("pz-top",()=>{let n=new Qe;n.cylC(.058,.03,"#ffffff",[0,0,0],[0,0,0],8);for(let e=0;e<6;e++){let t=e/6*Math.PI*2+.3;n.cylC(.055,.03,"#ffffff",[Math.cos(t)*.2,0,Math.sin(t)*.2],[0,t,0],8)}return n.geometry()})},Wo=class{constructor(e,t,i){this.env=e,this.camera=e.camera,this.loc=t,this.cfg=i,this.customers=new Map,this.pizzas=new Map,this.root=new at,e.scene.add(this.root),this.time=0}setLocation(e){this.loc=e}sync(e){let t=[...e.customers].sort((o,a)=>o.id-a.id).slice(0,Ux),i=new Set(t.map(o=>o.id));for(let[o,a]of this.customers)!i.has(o)&&!a.leaving&&this.removeView(this.customers,o);for(let o of t)this.customers.has(o.id)||this.customers.set(o.id,this.makeCustomer(o)),this.customers.get(o.id).data=o;let s=[...e.pizzas].sort((o,a)=>o.id-a.id).slice(0,Nx),r=new Set(s.map(o=>o.id));for(let[o,a]of this.pizzas)!r.has(o)&&!a.leaving&&this.removeView(this.pizzas,o);for(let o of s){this.pizzas.has(o.id)||this.pizzas.set(o.id,this.makePizza(o));let a=this.pizzas.get(o.id);a.stage!==o.stage&&(a.pop=1,a.stage=o.stage),a.data=o}}leaveCustomer(e,t){let i=this.customers.get(e);i&&(i.leaving=!0,i.leaveHappy=t,i.leaveT=0,i.overhead.visible=!1)}leavePizza(e){let t=this.pizzas.get(e);t&&(t.leaving=!0,t.leaveT=0)}removeView(e,t){let i=e.get(t);i&&(this.root.remove(i.group),e.delete(t),i.fill&&i.fill.material.dispose(),i.crustMat&&(i.crustMat.dispose(),i.cheeseMat.dispose(),i.topMat.dispose()))}makeCustomer(e){let t=new at,i=tr(Ld(e.id));t.add(i.group);let s=new at;s.position.y=2.35;let r=new Ce(zx(e.topping),Ox),o=new at;o.position.y=.46;let a=new Ce(ke.box(),gl);a.scale.set(.66,.11,.02);let l=new Ce(ke.box(),new vt({color:"#06d6a0",toneMapped:!1}));l.scale.set(.6,.065,.03),l.position.z=.012,o.add(a,l),s.add(r,o),t.add(s);let c=new Ce(ke.cyl(8),gl);c.scale.set(.5,2.9,.5),c.position.y=1.45,c.visible=!1,c.userData={kind:"customer",id:e.id},t.add(c);let h=this.queueSpot(0),u=h[0]+5+e.id%3,d=h[2]+3.5;return t.position.set(u,0,d),this.env.styleNew(t),this.root.add(t),{group:t,person:i,overhead:s,bubble:r,fill:l,hit:c,x:u,z:d,heading:Math.PI,id:e.id,data:e,leaving:!1,leaveT:0,phase:e.id*1.7%6.28,turn:e.id*37%100/100-.5}}makePizza(e){let t=new at,i=vs("#f3e2bd",{vertexColors:!0}),s=vs("#fff0b8",{roughness:.55}),r=vs("#ffffff",{vertexColors:!0,roughness:.6}),o=new Ce(sr.ball(),i);o.scale.set(1,.6,1),o.position.y=.1;let a=new Ce(sr.base(),i),l=new Ce(sr.disc(),Fx);l.scale.set(.325,.03,.325),l.position.y=.012;let c=new Ce(sr.disc(),s);c.scale.set(.3,.03,.3),c.position.y=.02;let h=new Ce(sr.toppings(),r);h.position.y=.036;let u=new Ce(ke.ring(),new vt({color:"#ffd60a",toneMapped:!1,side:dn}));u.rotation.x=-Math.PI/2,u.position.y=.5,u.visible=!1;for(let f of[o,a])f.castShadow=!0;t.add(o,a,l,c,h,u);let d=new Ce(ke.cyl(8),gl);return d.scale.set(.5,.7,.5),d.position.y=.2,d.visible=!1,d.userData={kind:"pizza",id:e.id},t.add(d),this.env.styleNew(t),this.root.add(t),{group:t,crustMat:i,cheeseMat:s,topMat:r,ball:o,base:a,sauce:l,cheese:c,toppings:h,ring:u,hit:d,stage:e.stage,pop:0,leaving:!1,leaveT:0,id:e.id,data:e,x:0,y:0,z:0,s:1,inited:!1}}queueSpot(e){let t=this.loc.queueRowLength,i=e%t,s=Math.floor(e/t),r=this.loc.queueStart,o=this.loc.queueStep;return[r[0]+o[0]*i,0,r[2]+o[2]*s]}stationFor(e){let t=this.loc.stations;switch(e){case"dough":case"topping":return t.dough;case"load":return t.load;case"baking":return t.oven;default:return t.pass}}update(e,t){this.time+=e;let i=1-Math.exp(-e*6),s=t.customers.filter(c=>c.state==="waiting").sort((c,h)=>c.id-h.id),r=t.customers.filter(c=>c.state==="ordered").sort((c,h)=>c.id-h.id),o=new Map(s.map((c,h)=>[c.id,h])),a=new Map(r.map((c,h)=>[c.id,h]));for(let c of this.customers.values()){if(c.leaving){c.leaveT+=e;let R=c.leaveHappy?1:-1;c.x+=R*e*2.6,c.z+=e*1.1,c.group.position.set(c.x,0,c.z),c.person.group.rotation.y=R*1.1,ul(c.person,this.time*11+c.phase,1),c.leaveHappy||(c.person.group.rotation.z=Math.sin(c.leaveT*26)*.08),c.group.scale.setScalar(Math.max(.001,1-Math.max(0,c.leaveT-1.1)*3)),c.leaveT>1.4&&this.removeView(this.customers,c.id);continue}let h=o.get(c.id),u,d;if(h!==void 0)[u,,d]=this.queueSpot(h);else{let R=a.get(c.id)||0;u=this.loc.window[0]+.5+R%4*.72,d=this.loc.window[2]+Math.floor(R/4)*.7}let f=u-c.x,g=d-c.z,_=Math.hypot(f,g),m=_>.06,p=Math.min(_,e*2.4);m&&(c.x+=f/_*p,c.z+=g/_*p),c.group.position.set(c.x,0,c.z);let y=(m?Math.atan2(f,g):Math.PI+c.turn*1.1+Math.sin(this.time*.6+c.phase)*.15)-c.heading;for(;y>Math.PI;)y-=Math.PI*2;for(;y<-Math.PI;)y+=Math.PI*2;c.heading+=y*Math.min(1,e*8),c.person.group.rotation.y=c.heading,ul(c.person,this.time*10+c.phase,m?1:0),c.person.group.position.y=m?Math.abs(Math.sin(this.time*10+c.phase))*.035:Math.sin(this.time*1.5+c.phase)*.006,c.group.scale.setScalar(1);let b=Math.max(0,c.data.patience/c.data.maxPatience);c.fill.scale.x=Math.max(.001,.6*b),c.fill.position.x=-(.6-.6*b)/2,c.fill.material.color.set(b>.5?"#06d6a0":b>.25?"#ffd166":"#ef476f"),c.overhead.quaternion.copy(this.camera.quaternion),c.bubble.position.y=Math.sin(this.time*2.2+c.phase)*.03,c.bubble.rotation.z=b<.25?Math.sin(this.time*18)*.12:0}let l=new Map;for(let c of this.pizzas.values()){if(c.leaving)continue;let h=this.stationFor(c.data.stage);l.has(h)||l.set(h,[]),l.get(h).push(c)}for(let[c,h]of l){h.sort((f,g)=>f.id-g.id);let u=c===this.loc.stations.oven,d=u?.3:.56;h.forEach((f,g)=>{let _=(g-(h.length-1)/2)*d,m=c[0]+_,p=c[1]+(u?g%2*.012:0),x=c[2]+(u?0:g%2*.12-.06),y=u?.6:1;f.inited||(f.x=m,f.y=p,f.z=x,f.s=y,f.inited=!0),f.x+=(m-f.x)*i,f.y+=(p-f.y)*i,f.z+=(x-f.z)*i,f.s+=(y-f.s)*i,f.group.position.set(f.x,f.y,f.z)})}for(let c of this.pizzas.values()){if(c.leaving){c.leaveT+=e,c.group.scale.setScalar(Math.max(.001,c.s*(1-c.leaveT*3))),c.group.position.y+=e*1.5,c.leaveT>.34&&this.removeView(this.pizzas,c.id);continue}let h=c.data,u=h.q.dough>0,d=h.q.top>0;c.ball.visible=!u,c.base.visible=u,c.sauce.visible=u,c.cheese.visible=u,c.toppings.visible=d&&!!h.topping;let f=this.cfg.economy.styles[h.style],g=h.bakeTotal||(f?f.bakeSeconds:10),_=h.stage==="baking"?1-Math.max(0,h.bakeLeft)/g:h.stage==="ready"?1:0,m=Math.min(1,Math.max(0,_));c.crustMat.color.copy(Cx).lerp(Px,m),c.cheeseMat.color.copy(Lx).lerp(Ix,m),h.topping&&c.topMat.color.set(Vd[h.topping]||"#ffffff"),c.pop=Math.max(0,c.pop-e*3.5);let p=Math.sin(c.pop*Math.PI)*.25;c.group.scale.set(c.s*(1+p),c.s*(1-p*.6),c.s*(1+p));let x=Dx.has(h.stage);if(c.ring.visible=x,x){let y=1+Math.sin(this.time*6)*.08;c.ring.scale.setScalar(.95*y),c.ring.position.y=.3+Math.sin(this.time*3)*.03}}}pick(e){let t=[];for(let o of this.pizzas.values())o.leaving||t.push(o.hit);for(let o of this.customers.values())o.leaving||t.push(o.hit);let i=e.intersectObjects(t,!1),r=i.find(o=>o.object.userData.kind==="pizza")||i[0];return r?{kind:r.object.userData.kind,id:r.object.userData.id}:null}positionOf(e,t){let s=(e==="customer"?this.customers:this.pizzas).get(t);return s?[s.group.position.x,s.group.position.y+(e==="customer"?1.9:.3),s.group.position.z]:null}steamPoints(){let e=[];for(let t of this.pizzas.values())!t.leaving&&t.data.stage==="ready"&&e.push([t.x,t.y+.12,t.z]);return e}};var kx=36,Bx=30,Hx=34,Xo=class{constructor(e){this.env=e,this.root=new at,e.scene.add(this.root);let t=new Jt({color:"#ffd24a",emissive:new me("#8a5a00"),emissiveIntensity:.7});this.coins=[];for(let i=0;i<kx;i++){let s=new Ce(ke.cyl(12),t);s.visible=!1,this.root.add(s),this.coins.push({m:s,life:0,vx:0,vy:0,vz:0,spin:0})}this.sparkMats={green:new vt({color:"#8fe3a0",toneMapped:!1}),red:new vt({color:"#ff6b81",toneMapped:!1}),gold:new vt({color:"#ffe08a",toneMapped:!1})},this.sparks=[];for(let i=0;i<Bx;i++){let s=new Ce(ke.ico(0),this.sparkMats.green);s.visible=!1,this.root.add(s),this.sparks.push({m:s,life:0,vx:0,vy:0,vz:0})}this.puffs=[];for(let i=0;i<Hx;i++){let s=new vt({color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1}),r=new Ce(ke.sphere(8,6),s);r.visible=!1,this.root.add(r),this.puffs.push({m:r,mat:s,life:0,max:1,vx:0,vy:0,vz:0,size:.2,grow:1})}this.smoke={pos:null,strength:0,timer:0},this.steam={points:[],timer:0},this.rain=this.buildRain(),this.bunting=this.buildBunting()}puff(e,t="gold",i=6){if(t==="gold"){let r=0;for(let o of this.coins)if(!(o.life>0)&&(o.m.position.set(e[0]+(Math.random()-.5)*.3,e[1],e[2]+(Math.random()-.5)*.3),o.m.scale.set(.085,.02,.085),o.m.visible=!0,o.life=.9+Math.random()*.4,o.vx=(Math.random()-.5)*2.2,o.vy=3+Math.random()*2.2,o.vz=(Math.random()-.2)*1.8,o.spin=8+Math.random()*10,++r>=i))break}let s=0;for(let r of this.sparks)if(!(r.life>0)&&(r.m.material=this.sparkMats[t]||this.sparkMats.green,r.m.position.set(e[0]+(Math.random()-.5)*.4,e[1]+.1,e[2]+(Math.random()-.5)*.4),r.m.visible=!0,r.life=.5+Math.random()*.3,r.vx=(Math.random()-.5)*2.4,r.vy=1.4+Math.random()*2,r.vz=(Math.random()-.5)*2.4,++s>=Math.ceil(i/2)+2))break}emitPuff(e,t,i,s,r,o,a){for(let l of this.puffs)if(!(l.life>0)){l.m.position.set(e[0]+(Math.random()-.5)*.1,e[1],e[2]+(Math.random()-.5)*.1),l.mat.color.set(t),l.size=i,l.grow=o,l.life=s,l.max=s,l.opacity=a,l.vx=.18+Math.random()*.2,l.vy=r*(.8+Math.random()*.4),l.vz=(Math.random()-.5)*.15,l.m.visible=!0;return}}setSmoke(e,t){this.smoke.pos=e,this.smoke.strength=t}setSteam(e){this.steam.points=e}buildRain(){let t=new Float32Array(2520);for(let r=0;r<420;r++){let o=(Math.random()-.5)*34,a=Math.random()*14,l=-8+Math.random()*24;t.set([o,a,l,o-.06,a+.6,l],r*6)}let i=new _t;i.setAttribute("position",new Xt(t,3));let s=new oo(i,new Vs({color:"#cfe6ff",transparent:!0,opacity:.5}));return s.visible=!1,s.frustumCulled=!1,this.root.add(s),s}buildBunting(){let e=new at,t=new Qe,i=["#ef476f","#ffd166","#06d6a0","#4ea8de","#9b5de5"];for(let s of[-3.2,7.5])for(let r=0;r<26;r++){let o=r/25,a=-11+o*22.4,l=6.6-Math.sin(o*Math.PI)*1.1;t.add(ke.cone(3),i[r%i.length],[a,l,s],[Math.PI,0,0],[.26,.5,.03])}return e.add(t.mesh(Ni,{cast:!1})),e.visible=!1,this.root.add(e),e}setEvents(e){let t=new Set(e.map(i=>i.id));this.rain.visible=t.has("rainyDay"),this.bunting.visible=t.has("foodFestival")}update(e){for(let s of this.coins){if(s.life<=0)continue;s.life-=e,s.vy-=9*e,s.m.position.x+=s.vx*e,s.m.position.y+=s.vy*e,s.m.position.z+=s.vz*e,s.m.rotation.x+=s.spin*e,s.m.rotation.z+=s.spin*.6*e;let r=Math.min(1,s.life*3);s.m.scale.set(.085*r,.02*r,.085*r),s.life<=0&&(s.m.visible=!1)}for(let s of this.sparks)s.life<=0||(s.life-=e,s.vy-=5*e,s.m.position.x+=s.vx*e,s.m.position.y+=s.vy*e,s.m.position.z+=s.vz*e,s.m.scale.setScalar(Math.max(1e-4,Math.min(1,s.life*2.4))*.07),s.life<=0&&(s.m.visible=!1));let t=this.smoke;if(t.pos&&(t.timer-=e,t.timer<=0)){t.timer=t.strength>.5?.14:.5;let s=1-(this.env.daylight??1),r=Math.round(215-s*120);this.emitPuff(t.pos,`rgb(${r},${r},${r+6})`,.2,2.6,.95,2.4,t.strength>.5?.5:.3)}let i=this.steam;if(i.timer-=e,i.timer<=0&&i.points.length){i.timer=.28;let s=i.points[Math.floor(Math.random()*i.points.length)];this.emitPuff(s,"#ffffff",.07,.9,.55,1.6,.4)}for(let s of this.puffs){if(s.life<=0)continue;s.life-=e;let r=1-s.life/s.max;s.m.position.x+=s.vx*e,s.m.position.y+=s.vy*e,s.m.position.z+=s.vz*e,s.m.scale.setScalar(s.size*(1+r*s.grow)),s.mat.opacity=s.opacity*Math.sin(Math.min(1,r*6)*Math.PI/2)*(1-r),s.life<=0&&(s.m.visible=!1)}if(this.rain.visible){let s=this.rain.geometry.attributes.position.array;for(let r=0;r<s.length;r+=6)s[r+1]-=e*16,s[r+4]-=e*16,s[r+1]<0&&(s[r+1]+=14,s[r+4]+=14);this.rain.geometry.attributes.position.needsUpdate=!0}this.bunting.visible&&(this.bunting.rotation.x=Math.sin(this.env.time*1.2)*.015)}};var Fi=n=>document.getElementById(n),Vx=["customers","stretch","top","oven","serve","shop"];function Gd(n){let e={};for(let r of Vx){let o=document.querySelector(`#actions [data-action="${r}"]`);e[r]=o,o.addEventListener("click",()=>n(r))}let t=null,i=0;function s(r){t===null&&(t=r),t+=(r-t)*.25,Math.abs(r-t)<.5&&(t=r),Fi("cash").textContent=Mt(t)}return{tickCash:s,setRate(r){Fi("rate").textContent=L("hud.rate",{rate:Wu(r)})},setGoal(r,o){Fi("goal").textContent=r?L("hud.goal",{goal:L(r.id)}):L("hud.goalDone")},setBadges(r){for(let[o,a]of Object.entries(r)){let l=e[o];if(!l)continue;let c=l.querySelector(".badge");c.textContent=a,c.hidden=a===0}},setHighlight(r){for(let[o,a]of Object.entries(e))a.classList.toggle("pulse",o===r)},setHint(r){let o=Fi("hint");r?(o.textContent=r,o.classList.remove("hidden")):o.classList.add("hidden")},setEvents(r){let o=Fi("events");o.innerHTML="";for(let a of r){let l=document.createElement("div");l.className="chip-event",l.textContent=`${L("event."+a.id+".name")} \xB7 ${Math.max(0,Math.ceil(a.left))}s`,o.appendChild(l)}},toast(r,o=""){if(i>=3)return;i++;let a=document.createElement("div");a.className="toast "+o,a.textContent=r,Fi("toasts").appendChild(a),setTimeout(()=>{a.classList.add("out"),setTimeout(()=>{a.remove(),i--},300)},2200)},float(r,o,a="gold"){let l=document.createElement("div");l.className="float "+a,l.textContent=o,l.style.left=r.x+"px",l.style.top=r.y+"px",Fi("floats").appendChild(l),setTimeout(()=>l.remove(),1100)},setPaused(r){document.body.classList.toggle("paused",r)}}}function Wd(){document.querySelectorAll("[data-i18n]").forEach(n=>{n.textContent=L(n.dataset.i18n)}),document.querySelectorAll("[data-i18n-aria]").forEach(n=>{n.setAttribute("aria-label",L(n.dataset.i18nAria))}),document.title=L("app.title")}var zi=n=>document.getElementById(n),ai=null,_l={onOpen:()=>{},onClose:()=>{}},Yo=null;function Xd(n,e){Yo=n,_l=e,zi("miniClose").addEventListener("click",()=>qo())}function qd(){qo()}function Zo(){return ai!==null}function qo(){if(!ai)return;let n=ai;ai=null;for(let e of n.cleanups)e();zi("mini").classList.add("hidden"),zi("miniBody").innerHTML="",_l.onClose()}function $o({station:n,title:e,hint:t,build:i,onDone:s}){ai&&qo(),zi("miniTitle").textContent=e,zi("miniHint").textContent=t;let r=zi("miniBody");r.innerHTML="";let o={frames:[],cleanups:[],raf:0,done:!1};ai=o,i(r,{finish:h=>{o.done||(o.done=!0,qo(),s(h))},frame:h=>o.frames.push(h),cleanup:h=>o.cleanups.push(h)}),zi("mini").classList.remove("hidden"),_l.onOpen(n);let l=performance.now(),c=h=>{if(ai!==o)return;let u=Math.min(.1,(h-l)/1e3);l=h;for(let d of o.frames)d(u);ai===o&&(o.raf=requestAnimationFrame(c))};o.raf=requestAnimationFrame(c),o.cleanups.push(()=>cancelAnimationFrame(o.raf))}function yl(n,e){let t=i=>e(i);window.addEventListener("keydown",t),n(()=>window.removeEventListener("keydown",t))}function Yd(n){let e=Yo.economy.happyHour;$o({station:null,title:L("mini.happy.title"),hint:L("mini.happy.hint",{needed:e.needed}),onDone:n,build(t,{finish:i,frame:s,cleanup:r}){let o=St("div","happy-board"),a=St("div","happy-count",L("mini.happy.count",{hits:0,total:e.targets}));t.append(o,a);let l=0,c=0,h=.3,u=!1,d=[],f=()=>{c++;let g=St("button","coin-target");g.setAttribute("aria-label",L("mini.happy.coin")),g.style.left=14+Math.random()*68+"%",g.style.top=20+Math.random()*58+"%";let _={b:g,life:e.targetLifetimeSeconds,gone:!1};g.addEventListener("pointerdown",m=>{m.preventDefault(),!_.gone&&(_.gone=!0,l++,g.remove(),a.textContent=L("mini.happy.count",{hits:l,total:e.targets}))}),o.append(g),d.push(_)};s(g=>{if(!u){c<e.targets&&(h-=g,h<=0&&(f(),h=e.spawnEverySeconds));for(let _=d.length-1;_>=0;_--){let m=d[_];m.life-=g,(m.gone||m.life<=0)&&(m.b.remove(),d.splice(_,1))}c>=e.targets&&d.length===0&&(u=!0,i({hits:l,total:e.targets}))}}),r(()=>{u=!0})}})}function Zd(n){let e=Yo.economy.manual;$o({station:"dough",title:L("mini.dough.title"),hint:L("mini.dough.hint"),onDone:n,build(t,{finish:i,frame:s,cleanup:r}){let o=St("div","dough-area"),a=St("div","dough-blob");o.appendChild(a);let l=St("div","bar"),c=St("div","fill");l.appendChild(c);let h=St("div","bar time"),u=St("div","fill");h.appendChild(u),t.append(o,l,h);let d=0,f=e.doughWindowSeconds,g=null,_=p=>{d=Math.min(1,d+p/e.doughSwipesNeeded)};o.addEventListener("wheel",p=>{p.preventDefault(),_(Math.abs(p.deltaX)+Math.abs(p.deltaY))},{passive:!1}),yl(r,p=>{["ArrowLeft","ArrowRight","a","d","A","D"].includes(p.key)&&(p.preventDefault(),_(e.doughKeyStep))}),o.addEventListener("pointerdown",p=>{g=p.clientX;try{o.setPointerCapture(p.pointerId)}catch{}}),o.addEventListener("pointermove",p=>{g!==null&&(_(Math.abs(p.clientX-g)),g=p.clientX)});let m=()=>{g=null};o.addEventListener("pointerup",m),o.addEventListener("pointercancel",m),s(p=>{f-=p,a.style.transform=`scale(${1+d*.45}, ${1-d*.2})`,c.style.width=d*100+"%",u.style.width=Math.max(0,f/e.doughWindowSeconds)*100+"%",d>=1?i({finished:!0,timeLeftFrac:Math.max(0,f)/e.doughWindowSeconds}):f<=0&&i({finished:!1,timeLeftFrac:0})})}})}function $d(n,e,t){$o({station:"dough",title:L("mini.top.title"),hint:L("mini.top.hint"),onDone:t,build(i,{finish:s,cleanup:r}){let o=St("div","wants",L("customer.wants",{topping:L("topping."+n.topping)})),a=St("div","pizza-target"),l=St("div","chips"),c=Gx([n.topping,...e.filter(x=>x!==n.topping).slice(0,2)]),h=null,u=null,d=null,f=!1,g=x=>{h=x;for(let y of l.children)y.classList.toggle("selected",y.dataset.topping===x)},_=()=>{h&&s({topping:h})},m=x=>{u&&(!f&&Math.hypot(x.clientX-d.x,x.clientY-d.y)<6||(f=!0,u.style.display="",u.style.left=x.clientX-40+"px",u.style.top=x.clientY-40+"px"))},p=x=>{if(!u)return;let y=u.dataset.topping,b=f;if(u.remove(),u=null,f=!1,!b)return g(h===y?null:y);let R=a.getBoundingClientRect();Math.hypot(x.clientX-(R.left+R.width/2),x.clientY-(R.top+R.height/2))<R.width/2+24&&s({topping:y})};window.addEventListener("pointermove",m),window.addEventListener("pointerup",p),r(()=>{window.removeEventListener("pointermove",m),window.removeEventListener("pointerup",p),u&&u.remove()}),a.addEventListener("click",_),yl(r,x=>{/^[1-3]$/.test(x.key)&&c[Number(x.key)-1]?g(c[Number(x.key)-1]):(x.key===" "||x.key==="Enter")&&(x.preventDefault(),_())});for(let x of c){let y=St("div","chip-topping "+x,L("topping."+x));y.dataset.topping=x,y.addEventListener("pointerdown",b=>{b.preventDefault(),d={x:b.clientX,y:b.clientY},f=!1,u=St("div","chip-topping ghost "+x,L("topping."+x)),u.dataset.topping=x,u.style.display="none",u.style.left=b.clientX-40+"px",u.style.top=b.clientY-40+"px",document.body.appendChild(u)}),l.appendChild(y)}i.append(o,a,l)}})}function Jd(n){let e=Yo.economy.manual;$o({station:"oven",title:L("mini.oven.title"),hint:L("mini.oven.hint"),onDone:n,build(t,{finish:i,frame:s,cleanup:r}){let o=St("div","oven-track"),a=St("div","zone");a.style.left=50-e.ovenSweetZone*100/2+"%",a.style.width=e.ovenSweetZone*100+"%";let l=St("div","marker");o.append(a,l);let c=St("button","big-tap",L("mini.oven.tap"));t.append(o,c);let h=0,u=0;s(_=>{d||(h+=_,u=(1-Math.cos(2*Math.PI*h/e.ovenMarkerPeriodSeconds))/2,l.style.left=u*100+"%")});let d=!1,f=0,g=()=>{if(d)return;d=!0,c.disabled=!0;let m=Math.abs(u-.5)<=e.ovenSweetZone/2,p=St("div","stop-mark "+(m?"good":"miss"));p.style.left=u*100+"%",o.appendChild(p);let x=St("div","stop-note "+(m?"good":"miss"),L(m?"mini.oven.stopped.good":"mini.oven.stopped.miss"));t.insertBefore(x,c),l.classList.add("frozen"),l.style.left=u*100+"%",f=setTimeout(()=>i({markerPos:u}),900)};r(()=>clearTimeout(f)),c.addEventListener("click",g),o.addEventListener("pointerdown",g),yl(r,_=>{(_.key===" "||_.key==="Enter")&&(_.preventDefault(),g())})}})}function St(n,e,t){let i=document.createElement(n);return e&&(i.className=e),t!==void 0&&(i.textContent=t),i}function Gx(n){let e=[...n];for(let t=e.length-1;t>0;t--){let i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}var rr=n=>document.getElementById(n),bs=null,Ko=null,xl="",Jo=null;function Ss(){return Ko!==null}function ci(){let n=Jo;Jo=null,Ko=null,bs=null,rr("modal").classList.add("hidden"),rr("modalBody").innerHTML="",n&&n()}function or(n,e,t){Ko=n,rr("modalTitle").textContent=e,rr("modal").classList.remove("hidden");let i=rr("modalBody");i.innerHTML="",xl="",bs=()=>{i.innerHTML="",t(i)},bs()}function jd(n){bs&&Ko!=="collect"&&n!==xl&&(xl=n,bs())}function oe(n,e,t){let i=document.createElement(n);return e&&(i.className=e),t!==void 0&&(i.textContent=t),i}function qt(n,e,{disabled:t=!1,primary:i=!1}={}){let s=oe("button","btn"+(i?" primary":""),n);return s.disabled=t,s.addEventListener("click",e),s}function Wx(n,e,t){let i=t.economy.upgrades[n],s=e+1;switch(n){case"oven":return{slots:i.ovenSlotsBase+i.ovenSlotsPerLevel*s};case"counter":return{slots:i.maxQueueBase+i.maxQueuePerLevel*s};case"cheese":return{pct:Math.round(i.cheeseMultPerLevel*s*100)};case"decor":return{pct:Math.round(i.trafficPerLevel*s*100),item:e<i.steps.length?". Adds: "+L("decor.step."+i.steps[e]):""};case"neon":return{pct:Math.round(i.trafficPerLevel*100)};case"marketing":return{pct:Math.round(i.trafficMultPerLevel*s*100)};case"pizzaSchool":return{pct:Math.round(i.payMultPerLevel*s*100)};case"megaOven":return{slots:i.ovenSlotsPerLevel*s};default:return{}}}function ef(n,e,t){or("shop",L("shop.title"),i=>{let s=sn(n,e);i.append(oe("h3","",L("shop.upgrades")));let r=(D,z)=>{let W=e.economy.upgrades[D],P=n.upgrades[D],F=P>=W.maxLevel,H=W.requires?.franchises||0,$=z&&n.franchise.count<H,Y=F?0:_s(W,P),Z=oe("div","row"+($?" locked":"")),Q=oe("div","info");Q.append(oe("b","",L("upgrade."+D+".name")),oe("small","",$?L("shop.needsFranchise",{n:H}):F?L("action.maxed"):L("upgrade."+D+".desc",Wx(D,P,e))),oe("small","lvl",`${P}/${W.maxLevel}`));let te=$?L("action.locked"):F?L("action.maxed"):L("action.buy",{cost:Mt(Y)});return Z.append(Q,qt(te,()=>t.buy(D),{disabled:F||$||n.cash<Y})),Z};for(let D of Object.keys(e.economy.upgrades)){let z=e.economy.upgrades[D];z.enabled===!1||z.group==="empire"||i.append(r(D,!1))}i.append(oe("h3","",L("shop.empire"))),i.append(oe("p","muted",L("shop.empireDesc")));for(let D of Object.keys(e.economy.upgrades)){let z=e.economy.upgrades[D];z.enabled===!1||z.group!=="empire"||i.append(r(D,!0))}i.append(oe("h3","",L("shop.locations")));for(let D of Object.keys(e.locations)){let z=e.locations[D],W=!!n.unlockedLocations[D],P=n.location===D,F=oe("div","row"),H=oe("div","info");H.append(oe("b","",L(z.nameKey)),oe("small","",L(z.descKey)));let $=L("action.move"),Y=!1;P?($=L("location.current"),Y=!0):W||($=L("action.locked"),Y=!0,H.append(oe("small","lvl",L("location.locked",{target:Mt(z.unlock?.value??0)})))),F.append(H,qt($,()=>t.move(D),{disabled:Y,primary:!P&&W})),i.append(F)}i.append(oe("h3","",L("shop.staff")));for(let D of Object.keys(e.economy.staff)){let z=e.economy.staff[D],W=n.staff[D],P=W>=z.maxLevel,F=P?0:_s(z,W),H=D==="cashier"?L("staff.cashier.desc",{secs:s.cashierOrderSec.toFixed(1)}):L("staff.cook.desc",{speed:s.cookSpeed.toFixed(1)}),$=oe("div","row"),Y=oe("div","info");Y.append(oe("b","",L("staff."+D+".name")),oe("small","",H),oe("small","lvl",W===0?L("staff.notHired"):L("staff.level",{level:W})));let Z=W===0?L("action.hire",{cost:Mt(F)}):L("action.upgrade",{cost:Mt(F)});$.append(Y,qt(P?L("action.maxed"):Z,()=>t.hire(D),{disabled:P||n.cash<F,primary:W===0})),i.append($)}i.append(oe("h3","",L("shop.shops")));let o=e.economy.shops,a=n.shops||1,l=n.franchise.count>=o.requiresFranchises,c=a>=o.maxShops,h=c?0:Math.ceil(o.baseCost*Math.pow(o.growth,a-1)),u=oe("div","row"+(l?"":" locked")),d=oe("div","info");d.append(oe("b","",L("shop.openShop")),oe("small","",c?L("shop.allOpen"):l?L("shop.shopsDesc",{open:a,max:o.maxShops,mult:o.multiplierPerShop}):L("shop.shopsLocked",{n:o.requiresFranchises})),oe("small","lvl",`${a}/${o.maxShops}`));let f=l?c?L("action.maxed"):L("action.open",{cost:Mt(h)}):L("action.locked");u.append(d,qt(f,()=>t.openShop(),{disabled:!l||c||n.cash<h,primary:l&&!c})),i.append(u),i.append(oe("h3","",L("shop.recruit")));let g=e.economy.recruit,_=n.franchise.count>=g.requiresFranchises;_||i.append(oe("p","muted",L("shop.recruitLocked")));let m=Js(n,e).recruitCap;for(let D of["cashier","cook"]){let z=n.staffing[D]||0,W=z>=m,P=n.staff[D]>0,F=W?0:Math.ceil(g[D].baseCost*Math.pow(g[D].growth,z)),H=oe("div","row"+(_?"":" locked")),$=oe("div","info");$.append(oe("b","",L("recruit."+D+".name")),oe("small","",P?L("recruit."+D+".desc",{n:z,max:m}):L("recruit.needHire",{role:L("staff."+D+".name")})));let Y=_?W?L("action.maxed"):L("action.recruit",{cost:Mt(F)}):L("action.locked");H.append($,qt(Y,()=>t.recruit(D),{disabled:!_||W||!P||n.cash<F,primary:_&&P&&!W})),i.append(H)}i.append(oe("h3","",L("shop.franchise")));let p=oe("div","row"),x=oe("div","info"),y=ys(n,e),b=e.economy.prestige.tiers,R=ii(n,e),E=b.find(D=>D.minFranchises>n.franchise.count);x.append(oe("b","",L("franchise.title")),oe("small","",y?L("franchise.ready")+" "+L("franchise.gain",{points:Li(n,e)}):L("franchise.locked",{target:Mt(Pi(n,e)),have:Mt(Ci(n))})),oe("small","",L("franchise.now",{tier:L("tier."+b[R].id)})+(E?". "+L("franchise.next",{tier:L("tier."+E.id)}):"")),oe("small","lvl",L("franchise.points",{points:n.franchise.points})+" "+L("franchise.traffic",{pct:Math.round((Uo(n,e)-1)*100)})+" "+L("franchise.ovens",{x:Ks(n,e).toFixed(1)}))),p.append(x,qt(L("action.franchise"),()=>t.franchise(),{disabled:!y})),i.append(p),i.append(oe("h3","",L("shop.starterPack")));let A=oe("div","row"),N=oe("div","info");N.append(oe("b","",L("shop.starterPack")),oe("small","",L("shop.starterPackDesc"))),A.append(N,qt(Xx(e),()=>t.stub("starterPack"))),i.append(A),i.append(oe("h3","",L("shop.ovenSkins")));let M=oe("div","row"),S=oe("div","info");S.append(oe("b","",L("shop.ovenSkins")),oe("small","",L("shop.ovenSkinsDesc"))),M.append(S,qt(L("action.soon"),()=>t.stub("ovenSkins"))),i.append(M)})}function Xx(n){return n.economy.monetizationStubs.starterPack.priceLabel}function tf(n,e,t){let i=1;or("collect",L("collect.title"),s=>{s.innerHTML="",s.append(oe("p","lead",L("collect.body",{duration:Xc(n.elapsed)})));let r=oe("div","big-amount",L("collect.earned",{amount:Wc(n.earned*i)}));s.append(r),n.capped&&s.append(oe("p","muted",L("collect.capped",{cap:Xc(e.economy.time.offlineCapSeconds)}))),i>1&&s.append(oe("p","muted",L("collect.boosted")));let o=oe("div","stack"),a=qt(i>1?`${L("action.collect")} x${i}`:L("action.collect"),()=>{Jo=null,ci(),t.collect(i)},{primary:!0});if(o.append(a),i===1){let l=qt(L("action.adDouble"),async()=>{l.disabled=!0,await t.watchAd()&&(i=2),bs()});o.append(l,oe("small","muted",L("action.adDoubleHint")))}s.append(o)}),Jo=()=>t.collect(1)}function nf(n,e,t){or("franchise",L("franchise.title"),i=>{let s=Li(n,e),o=e.economy.prestige.tiers.find(l=>l.minFranchises>n.franchise.count);i.append(oe("p","lead",L("franchise.explain",{bonus:Math.round(e.economy.prestige.bonusPerPoint*100),traffic:Math.round((e.economy.prestige.trafficPerFranchise||0)*100)})),oe("p","",L("franchise.trafficNext",{pct:Math.round((Uo(n,e,n.franchise.count+1)-1)*100)})),oe("p","",L("franchise.nextCost",{target:Mt(Pi({franchise:{count:n.franchise.count+1}},e))})),oe("p","",L("franchise.gain",{points:s})+(o?" "+L("franchise.next",{tier:L("tier."+o.id)})+".":"")),oe("p","muted",L("franchise.resets")),oe("p","muted",L("franchise.keeps")),oe("p","muted",L("franchise.points",{points:n.franchise.points})));let a=oe("div","stack");a.append(qt(L("action.franchise"),()=>{ci(),t.confirmFranchise()},{primary:!0})),a.append(qt(L("action.cancel"),()=>ci())),i.append(a)})}function ws(n,e){or("settings",L("settings.title"),t=>{t.append(Qd(L("settings.sound"),n.settings.sound,o=>e.setSound(o)),Qd(L("settings.notify"),n.settings.notify,o=>e.setNotify(o),L("settings.notifyDesc")),Kd(L("settings.look"),L("settings.lookDesc"),["3d","2d"],n.settings.look||"3d",o=>e.setLook(o),o=>L("settings.look."+o)),Kd(L("settings.graphics"),L("settings.graphicsDesc"),["auto","high","low"],n.settings.graphics||"auto",o=>e.setGraphics(o),o=>L("settings.graphics."+o)));let i=oe("button","version-tap",`${L("app.version")}`),s=0;i.addEventListener("click",()=>{s++,s>=5&&(s=0,e.openDebug())}),t.append(i),t.append(oe("p","keys-help",L("settings.keys")));let r=oe("div","stack");r.append(qt(L("action.reset"),()=>{globalThis.confirm(L("action.confirmReset"))&&e.reset()})),t.append(r)})}function Kd(n,e,t,i,s,r){let o=oe("div","row"),a=oe("div","info");a.append(oe("b","",n),oe("small","",e));let l=oe("div","segmented");for(let c of t){let h=oe("button","seg"+(c===i?" on":""),r(c));h.addEventListener("click",()=>s(c)),l.append(h)}return o.append(a,l),o}function Qd(n,e,t,i){let s=oe("div","row"),r=oe("div","info");r.append(oe("b","",n)),i&&r.append(oe("small","",i));let o=oe("button","switch"+(e?" on":""));return o.setAttribute("role","switch"),o.setAttribute("aria-checked",String(e)),o.addEventListener("click",()=>t(!o.classList.contains("on"))),s.append(r,o),s}function vl(n){or("debug",L("debug.title"),e=>{let t=[["debug.addCash",n.addCash,1e3],["debug.addCashBig",n.addCash,2e4],["debug.skip",n.skipHour],["debug.rain",n.event,"rainyDay"],["debug.festival",n.event,"foodFestival"],["debug.night",n.toggleNight],["debug.away",n.simulateAway],["debug.franchiseReady",n.franchiseReady],["debug.resetAll",n.wipe]],i=oe("div","stack");for(let[s,r,o]of t)i.append(qt(L(s),()=>r(o)));e.append(i)})}var li=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function Yx(n){n.style.fontSize="22px";let e=22;for(;(n.scrollHeight>n.clientHeight||n.scrollWidth>n.clientWidth)&&e>4;)e-=.5,n.style.fontSize=e+"px"}function sf(){let n=document.getElementById("signs"),e=[];function t(r){n.innerHTML="",e=r.map(o=>{let a=document.createElement("div");return a.className="sign-label "+o.kind+(o.size?" board":""),n.appendChild(a),{spec:o,el:a,html:""}})}function i(r,o,a){if(r.kind==="menu"){let l=Object.entries(a.economy.styles).filter(([c,h])=>h.enabled&&o.styles[c]).slice(0,3).map(([c,h])=>`<div class="line"><span>${li(L("style."+c))}</span><b>${Mt(h.basePrice)}</b></div>`);return`<div class="title">${li(L("sign.menu.title"))}</div>${l.join("")}`}return r.kind==="neon"?li(L("sign.neon")):r.kind==="shop"?li(L("sign.shop",{n:r.n})):r.kind==="shop"?li(L("sign.shop",{n:r.n})):r.kind==="shopname"?li(L("app.title")):r.kind==="franchise"?li(L("sign.franchise",{count:o.franchise.count})):li(L("sign.sandwich"))}function s(r,o,a){let l=o.upgrades.neon>=1;for(let c of e){if(!(c.spec.kind!=="neon"||l)){c.el.style.display="none";continue}let u=i(c.spec,o,a);u!==c.html&&(c.el.innerHTML=u,c.html=u);let d=r.toScreen(c.spec.pos);if(c.el.style.display=d.front?"":"none",c.spec.size){let[g,_]=c.spec.size,m=c.spec.pos,p=r.toScreen([m[0]+g/2,m[1],m[2]]),x=r.toScreen([m[0],m[1]+_/2,m[2]]),y=2*Math.abs(p.x-d.x),b=2*Math.abs(x.y-d.y);c.el.style.left=d.x+"px",c.el.style.top=d.y+"px",c.el.style.width=y+"px",c.el.style.height=b+"px";let R=Math.round(y)+"x"+Math.round(b)+"|"+c.html;R!==c.fitKey&&(c.fitKey=R,Yx(c.el));continue}let f=(c.el.offsetWidth||100)/2+6;c.el.style.left=Math.min(d.w-f,Math.max(f,d.x))+"px",c.el.style.top=d.y+"px"}}return{setSpecs:t,update:s}}var Ml=.1,rf=20,Zx=60,on=n=>document.getElementById(n),ve,X,qe,of,hi=null,an=null,uf="",El=null,cn,ki,Te,Vn=null,Qo=0,wl=performance.now(),bl=0,af="",cf=-1e9;async function $x(){ve=await Bu(),Vu(ve.strings),Wd();let n=qu(),e=Date.now();X=n||Po(ve,e),ve.locations[X.location]||(X.location="corner"),an=ff(),qe=Ed(on("scene"),an),cn=new Wo(qe,an,ve),ki=new Xo(qe),Te=Gd(mf),El=sf(),Tl(),Xd(ve,{onOpen:t=>qe.focus(t?an.stations[t]:null),onClose:()=>qe.focus(null)}),Lo(X.settings.sound),qe.setQuality(X.settings.graphics||"auto"),qe.setLook(X.settings.look||"3d"),$c(),et("session_start_state",{fresh:!n}),window.addEventListener("resize",()=>qe.resize()),window.addEventListener("orientationchange",()=>qe.resize()),qe.resize(),rv(),ov(),n&&Al(e),on("loading").classList.add("hidden"),requestAnimationFrame(yf),new URLSearchParams(location.search).has("debug")&&on("btnDebug").classList.remove("hidden"),window.pizzaStand={get state(){return X},get layout(){return an},cfg:ve,debug:Rl(),env:qe,actors:cn}}function df(){return ve.locations[X.location]}function ff(){let n=ii(X,ve),e=Fd(df(),ve.economy.prestige.tiers[n],n);return e.decorSteps=ve.economy.upgrades.decor.steps,e}function pf(){return`${X.location}|${X.shops}|${ii(X,ve)}|${X.upgrades.decor}|${X.upgrades.marketing}|${X.upgrades.pizzaSchool}|${X.upgrades.megaOven}`}function Tl(n=!0){an=ff(),hi&&(qe.scene.remove(hi),hi.traverse(e=>{e.geometry&&e.geometry.dispose()})),qe.glowMats.length=0,qe.nightFades.length=0,qe.updaters.length=0,qe.signs=[],hi=new at,hi.add(Rd(an,qe)),of=zd(an,qe,{decor:X.upgrades.decor,empire:{marketing:X.upgrades.marketing,pizzaSchool:X.upgrades.pizzaSchool,megaOven:X.upgrades.megaOven}}),hi.add(of),qe.styleNew(hi),qe.scene.add(hi),qe.setLocation(an,n),cn.setLocation(an),El.setSpecs(qe.signs),uf=pf()}function Jx(n){if(!dd(X,n,ve).ok)return Te.toast(L("toast.noPizza"));Tl(),Tt.whoosh(),Te.toast(L("toast.locationMoved",{location:L(df().nameKey)})),et("location_move",{to:n}),yn()}function yn(){let n=Date.now();Vn||(X.savedAt=n),Yu(X)}function Al(n=Date.now()){let e=gd(X,n,ve);if(!(e.rawSeconds<Zx)){if(e.earned<=0){tl(X,e,ve,1),X.savedAt=n;return}Vn=e,tf(e,ve,{collect:t=>{Vn&&(tl(X,e,ve,t),Vn=null,X.savedAt=Date.now(),et("offline_collect",{seconds:Math.round(e.elapsed),earned:Math.floor(e.earned*t),multiplier:t,capped:e.capped}),yn())},watchAd:()=>Kx(ve.economy.monetizationStubs.offlineBoostAd)})}}function Kx(n){return et("ad_offline_boost_requested"),new Promise(e=>{setTimeout(()=>{et("ad_offline_boost_completed"),Te.toast(L("toast.adStub")),e(!0)},n.placeholderSeconds*1e3)})}function lr(n){switch(n.type){case"arrived":case"order_taken":Tt.pop();break;case"stage":n.stage==="ready"&&Tt.bell();break;case"served":{Tt.cash(),cn.leaveCustomer(n.customerId,!0),cn.leavePizza(n.pizzaId);let e=an.register,t=cn.positionOf("customer",n.customerId)||[e[0],1.6,e[2]],i=qe.toScreen([t[0],t[1]+.4,t[2]]);Te.float(i,"+"+Mt(n.amount),"gold"),n.tip>=.5&&Te.float({x:i.x,y:i.y-26},L("toast.tip",{tip:Mt(n.tip)}),"tip"),ki.puff([e[0],1.5,e[2]+.2],"gold",n.big?16:7),n.big&&qe.shakeCam(.12),et("sale",{total:Math.floor(n.total),customerType:n.customerType,wrongTopping:n.wrongTopping,auto:!!n.auto}),X.flags.firstSale||(X.flags.firstSale=!0,et("first_sale"));break}case"angry":Tt.angry(),cn.leaveCustomer(n.customerId,!1),Te.toast(L("toast.angry",{name:L("customer.name."+n.nameIdx),penalty:Mt(n.penalty)}),"bad"),qe.shakeCam(.04),et("customer_angry",{customerType:n.customerType});break;case"turned_away":{let e=performance.now();e-cf>8e3&&(cf=e,Te.toast(L("customer.turnedAway"),"bad"),et("customer_turned_away",{queueFull:!0}));break}case"event_start":Tt.bell(),Te.toast(L("toast.eventStart",{event:L("event."+n.id+".name")})),et("event_start",{id:n.id});break;case"event_end":Te.toast(L("toast.eventEnd",{event:L("event."+n.id+".name")}));break;case"style_unlocked":Te.toast(L("toast.unlocked",{style:L("style."+n.style)}));break;case"location_unlocked":Tt.bell(),Te.toast(L("toast.locationUnlocked",{location:L(ve.locations[n.location].nameKey)})),et("location_unlocked",{location:n.location});break;case"bonus_ready":Tt.bell(),Te.toast(L("toast.bonusReady"));break;case"franchise_ready":Tt.bell(),Te.toast(L("toast.franchiseReady")),et("franchise_ready",{count:X.franchise.count});break;case"tutorial_step":et("tutorial_step",{step:n.step});break;case"tutorial_done":Te.toast(L("tut.done")),et("tutorial_done");break;case"idle_staff":{let e=L("staff."+n.role+".name");Te.toast(L("toast.staffIdle",{role:e})),Qx(L("toast.staffIdle",{role:e}));break}default:break}}function Qx(n){if(!(!X.settings.notify||!document.hidden)&&!(typeof Notification>"u"||Notification.permission!=="granted"))try{new Notification(L("app.title"),{body:n})}catch{}}function jx(){return X.customers.filter(n=>n.state==="waiting").sort((n,e)=>n.id-e.id)[0]}function ev(n){return X.pizzas.filter(e=>e.stage===n).sort((e,t)=>e.id-t.id)[0]}function mf(n){if(Tt.click(),n==="customers")return gf();if(n==="shop")return tv();if(n==="stretch")return ar("dough");if(n==="top")return ar("topping");if(n==="oven")return ar("load");if(n==="serve")return ar("ready")}function gf(n){let e=n?si(X,n):jx();if(!e||e.state!=="waiting")return Te.toast(L("toast.noPizza"));let t=Oo(X,e.id,ve);t.ok&&lr({...t,type:"order_taken"})}function ar(n,e){let t=e?X.pizzas.find(i=>i.id===e):ev(n);if(!t||t.stage!==n)return Te.toast(L("toast.noPizza"));if(n==="dough")Zd(i=>jo(er(X,t.id,"stretch",i,ve)));else if(n==="topping"){let i=si(X,t.customerId);$d(i,ve.economy.customers.toppings,s=>jo(er(X,t.id,"topping",s,ve)))}else if(n==="load"){if(X.pizzas.filter(i=>i.stage==="baking").length>=sn(X,ve).ovenSlots)return Te.toast(L("toast.ovenFull"));Jd(i=>jo(er(X,t.id,"load",i,ve)))}else n==="ready"&&jo(er(X,t.id,"serve",{},ve))}function jo(n){if(!n.ok){Te.toast(n.reason==="ovenFull"?L("toast.ovenFull"):L("toast.noPizza"));return}if(n.type==="served")return lr(n);if(n.type==="stage"){let e=n.stage==="baking"?lf("oven"):lf(n.stage==="load"?"load":"dough");ki.puff(e,"green",4),Tt.pop()}}function lf(n){return an.stations[n]}function tv(){ef(X,ve,{buy:n=>{let e=ad(X,n,ve);if(!e.ok)return Te.toast(e.reason==="cash"?L("toast.notEnough"):L("toast.noPizza"));if(Tt.bell(),n==="decor"){let t=ve.economy.upgrades.decor.steps;Te.toast(L("toast.decorAdded",{item:L("decor.step."+t[Math.min(t.length,X.upgrades.decor)-1])}))}else Te.toast(L("toast.bought",{item:L("upgrade."+n+".name")}));e.first&&et("first_purchase",{item:n,cost:e.cost}),yn()},openShop:()=>{let n=fd(X,ve);if(!n.ok){let e=n.reason==="cash"?L("toast.notEnough"):n.reason==="needsFranchise"?L("shop.shopsLocked",{n:n.need}):L("shop.allOpen");return Te.toast(e)}Tt.bell(),Te.toast(L("toast.shopOpened",{n:n.shops})),et("shop_opened",{shops:n.shops,cost:n.cost}),yn()},recruit:n=>{let e=hd(X,n,ve);if(!e.ok){let t=e.reason==="cash"?L("toast.notEnough"):e.reason==="needsFranchise"?L("shop.recruitLocked"):e.reason==="needsHire"?L("recruit.needHire",{role:L("staff."+n+".name")}):L("action.maxed");return Te.toast(t)}Tt.bell(),Te.toast(L("toast.recruited",{role:L("staff."+n+".name")})),yn()},hire:n=>{let e=cd(X,n,ve);if(!e.ok)return Te.toast(e.reason==="cash"?L("toast.notEnough"):L("toast.noPizza"));Tt.bell(),Te.toast(L("toast.hired",{role:L("staff."+n+".name")})),e.first&&et("first_purchase",{item:n,cost:e.cost}),yn()},franchise:()=>nf(X,ve,{confirmFranchise:nv}),move:n=>Jx(n),stub:n=>{et("monetization_stub_tap",{name:n}),Te.toast(L("toast.comingSoon"))}})}function nv(){if(!Qc(X,ve))return Te.toast(L("franchise.locked",{target:Mt(Pi(X,ve)),have:Mt(Ci(X))}));let n=Li(X,ve),e=ii(X,ve);X=ud(X,ve,Po).state;let i=ii(X,ve);et("prestige",{points:X.franchise.points,gain:n,count:X.franchise.count,tier:ve.economy.prestige.tiers[i].id,lifetimeCash:Math.floor(X.lifetimeCash)}),Tt.bell(),Te.toast(L("toast.franchised",{mult:(1+ve.economy.prestige.bonusPerPoint*X.franchise.points).toFixed(1)})),i!==e&&Te.toast(L("toast.tierUp",{tier:L("tier."+ve.economy.prestige.tiers[i].id)})),yn()}function cr(){return{setSound:n=>{X.settings.sound=n,Lo(n),ws(X,cr())},setNotify:async n=>{if(!n)X.settings.notify=!1;else if(typeof Notification<"u"){let e=await Notification.requestPermission();X.settings.notify=e==="granted"}et("notify_opt_in",{on:X.settings.notify}),ws(X,cr())},setLook:n=>{X.settings.look=n,qe.setLook(n),et("art_style",{look:n}),ws(X,cr())},setGraphics:n=>{X.settings.graphics=n,qe.setQuality(n),et("graphics_quality",{quality:n}),ws(X,cr())},reset:()=>_f(),openDebug:()=>vl(Rl())}}function _f(){Zu(),Vn=null,X=Po(ve),et("save_reset"),ci(),Te.toast(L("action.reset"))}function Rl(){return{addCash:n=>{X.cash+=n,X.lifetimeCash+=n,Te.toast(L("toast.cashDebug",{amount:Mt(n)}))},skipHour:()=>{for(let n=0;n<7200;n++){let e=el(X,.5,ve,[]);for(let t of e)(t.type==="event_start"||t.type==="event_end"||t.type==="tutorial_done")&&lr(t)}Te.toast("+1h")},event:n=>{js(X,n,ve),lr({type:"event_start",id:n})},toggleNight:()=>{X.dayClock=(X.dayClock+.5)%1},simulateAway:()=>{ci(),X.savedAt-=8*3600*1e3,Al()},franchiseReady:()=>{X.lifetimeCash=Math.max(X.lifetimeCash,(X.franchise.lifetimeAtLast||0)+Pi(X,ve))},wipe:_f}}var hf={1:"customers",2:"stretch",3:"top",4:"oven",5:"serve",6:"shop"};function iv(){window.addEventListener("keydown",n=>{if(!(n.ctrlKey||n.metaKey||n.altKey)){if(n.key==="Escape")return Zo()?qd():Ss()?on("modalClose").click():void 0;if(!(Ss()||Zo()||Vn)){if(hf[n.key])return n.preventDefault(),mf(hf[n.key]);(n.key==="m"||n.key==="M")&&(X.settings.sound=!X.settings.sound,Lo(X.settings.sound),Te.toast(L("settings.sound")+": "+(X.settings.sound?"on":"off")))}}})}function sv(){Ss()||Zo()||Vn||!jc(X,ve)||(Tt.click(),Yd(n=>{let e=pd(X,n.hits,ve);e.won?(Tt.bell(),Te.toast(L("mini.happy.win")),et("happy_hour_won",{hits:e.hits})):(Te.toast(L("mini.happy.miss")),et("happy_hour_missed",{hits:e.hits})),yn()}))}function rv(){iv(),on("btnBonus").addEventListener("click",sv),on("btnSettings").addEventListener("click",()=>ws(X,cr())),on("btnDebug").addEventListener("click",()=>vl(Rl())),on("modalClose").addEventListener("click",()=>ci()),on("modal").addEventListener("pointerdown",n=>{n.target.id==="modal"&&ci()})}function ov(){let n=on("scene"),e=new So,t=new ue,i=null;n.addEventListener("pointerdown",s=>{i={x:s.clientX,y:s.clientY,t:performance.now()}}),n.addEventListener("pointerup",s=>{if(!i)return;let r=Math.hypot(s.clientX-i.x,s.clientY-i.y),o=performance.now()-i.t<450;if(i=null,r>12||!o||Ss())return;let a=n.getBoundingClientRect();t.set((s.clientX-a.left)/a.width*2-1,-((s.clientY-a.top)/a.height)*2+1),e.setFromCamera(t,qe.camera);let l=cn.pick(e);if(l){if(l.kind==="customer"){let c=si(X,l.id);return c&&c.state==="waiting"?gf(c.id):void 0}if(l.kind==="pizza"){let c=X.pizzas.find(h=>h.id===l.id);if(!c)return;["dough","topping","load","ready"].includes(c.stage)&&ar(c.stage,c.id)}}}),n.addEventListener("pointercancel",()=>{i=null}),n.addEventListener("pointermove",s=>{if(s.pointerType!=="mouse"||Ss()){n.style.cursor="";return}let r=n.getBoundingClientRect();t.set((s.clientX-r.left)/r.width*2-1,-((s.clientY-r.top)/r.height)*2+1),e.setFromCamera(t,qe.camera),n.style.cursor=cn.pick(e)?"pointer":"default"}),n.addEventListener("touchmove",s=>s.preventDefault(),{passive:!1})}function yf(n){requestAnimationFrame(yf);let e=Math.min(.1,(n-wl)/1e3);if(wl=n,!Vn){Qo+=e;let i=0;for(;Qo>=Ml&&i<rf;){let s=el(X,Ml,ve,[]);for(let r of s)lr(r);Qo-=Ml,i++}i===rf&&(Qo=0)}uf!==pf()&&Tl(!1);let t=X.pizzas.some(i=>i.stage==="baking");cn.sync(X),cn.update(e,X),ki.setSmoke(qe.smokeAt,t?1:.2),ki.setSteam(cn.steamPoints()),ki.update(e),ki.setEvents(X.events.active),qe.update(e,X.dayClock),Bd(qe,X.upgrades.neon),Hd(qe,t,qe.time),El.update(qe,X,ve),kd(qe,X,performance.now()/1e3,ve),bl+=e,bl>=ve.economy.time.autosaveSeconds&&(bl=0,yn()),Vn||av(),qe.renderer.render(qe.scene,qe.camera)}var Sl=0;function av(){if(Sl-=1,Sl>0)return;Sl=4;let n=sn(X,ve);Te.tickCash(X.cash),Te.setRate(n.idleRate),Te.setGoal(nd(X,ve)),Te.setBadges({customers:X.customers.filter(i=>i.state==="waiting").length,stretch:X.pizzas.filter(i=>i.stage==="dough").length,top:X.pizzas.filter(i=>i.stage==="topping").length,oven:X.pizzas.filter(i=>i.stage==="load").length,serve:X.pizzas.filter(i=>i.stage==="ready").length});let e=ve.economy.tutorial[X.tutorialStep];!X.tutorialDone&&e?(Te.setHint(L(e.textKey)),Te.setHighlight(e.highlight)):(Te.setHint(null),Te.setHighlight(null)),Te.setEvents(X.events.active.map(i=>({id:i.id,left:i.endsAt-X.gameTime}))),on("btnBonus").classList.toggle("hidden",!jc(X,ve));let t=`${X.location}|${JSON.stringify(X.unlockedLocations)}|${Math.floor(X.cash)}|${JSON.stringify(X.upgrades)}|${JSON.stringify(X.staff)}|${JSON.stringify(X.staffing)}|${X.franchise.points}|${X.franchise.count}|${Qc(X,ve)}|${Math.floor(Ci(X)/500)}`;t!==af&&(af=t,jd(t))}document.addEventListener("visibilitychange",()=>{document.hidden?(Te.setPaused(!0),X.tutorialDone||et("churn_point",{where:"tutorial_step_"+X.tutorialStep}),Qu({gameTime:Math.round(X.gameTime)}),yn()):(Te.setPaused(!1),wl=performance.now(),$c(),Al())});window.addEventListener("pagehide",()=>yn());$x().catch(n=>{console.error(n);let e=n&&n.message?n.message:String(n);window.__pizzaFail?window.__pizzaFail(e):on("loading").textContent="The game could not start: "+e});})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
