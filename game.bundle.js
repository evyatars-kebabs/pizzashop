(()=>{var Al={schemaVersion:1,_comment:"All tunable values. Costs are baseCost * growth^currentLevel to go from currentLevel to currentLevel+1. Times are in seconds.",startingCash:30,bigSaleThreshold:20,time:{dayLengthSeconds:600,startDayClock:.3,offlineCapSeconds:28800,offlineBaseEfficiency:.5,offlineEfficiencyPerStaffRole:.25,autosaveSeconds:10,randomEventMinSeconds:300,randomEventMaxSeconds:600},customers:{spawnBaseSeconds:24,spawnJitter:.3,nightSpawnMult:.6,tipMax:.3,wrongToppingTipMult:.4,wrongToppingPayMult:.9,wrongToppingQuality:.55,angryPenalty:3,types:{hungry:{weight:3,patience:90,tipMult:1},chatty:{weight:2,patience:120,tipMult:1.3},grumpy:{weight:1,patience:45,tipMult:.7}},toppings:["pepperoni","mushroom","olive","basil","pepper"]},styles:{margherita:{basePrice:8,bakeSeconds:10,unlock:{type:"start"},enabled:!0},pepperoni:{basePrice:11,bakeSeconds:10,unlock:{type:"lifetime",value:600},enabled:!0},veggie:{basePrice:10,bakeSeconds:11,unlock:{type:"lifetime",value:2500},enabled:!1},seasonal:{basePrice:14,bakeSeconds:12,unlock:{type:"lifetime",value:8e3},enabled:!1}},pizzaQuality:{payBase:.6,payPerQuality:.6},stages:{autoDoughSeconds:4,autoToppingSeconds:3,autoDoughQuality:.7,autoToppingQuality:.75,autoLoadQuality:.7,perfectBakeQuality:.9,perfectBakeSpeedMult:.85,autoServeDelaySeconds:1},manual:{doughWindowSeconds:8,doughSwipesNeeded:1200,doughRushedQuality:.5,doughFinishMinQuality:.6,toppingCorrectQuality:1,toppingWrongQuality:.55,ovenSweetZone:.18,ovenMinQuality:.6,ovenMarkerPeriodSeconds:1.6,doughKeyStep:110},cashier:{orderSecondsBase:3,orderSpeedPerLevel:.5},cook:{speedPerLevel:.4},upgrades:{oven:{baseCost:40,growth:1.7,maxLevel:5,ovenSlotsBase:1,ovenSlotsPerLevel:1},counter:{baseCost:60,growth:1.8,maxLevel:5,maxQueueBase:3,maxQueuePerLevel:2},cheese:{baseCost:80,growth:1.9,maxLevel:10,cheeseMultPerLevel:.1},decor:{baseCost:120,growth:2,maxLevel:10,trafficPerLevel:.05,steps:["flowers","festoon","bunting","table","lanterns","carpet","secondTable","balloons","flags","statue"]},neon:{baseCost:300,growth:2.5,maxLevel:2,trafficPerLevel:.2},scooter:{baseCost:500,growth:2.2,maxLevel:5,enabled:!1,_note:"Delivery scooter: placeholder for post-prototype delivery kid."},marketing:{baseCost:15e4,growth:2.5,maxLevel:5,trafficMultPerLevel:.5,group:"empire",requires:{franchises:1}},pizzaSchool:{baseCost:4e5,growth:2.5,maxLevel:5,payMultPerLevel:.4,group:"empire",requires:{franchises:2}},megaOven:{baseCost:9e5,growth:2.5,maxLevel:4,ovenSlotsPerLevel:2,group:"empire",requires:{franchises:3}}},staff:{cashier:{baseCost:150,growth:1.8,maxLevel:5},cook:{baseCost:250,growth:1.9,maxLevel:5}},prestige:{milestoneLifetimeCash:2e4,pointsDivisor:2e4,bonusPerPoint:.1,_tiersNote:"The stand grows with each franchise. Width/depth are metres; staffVisible is how many employees per role can be seen working; bonuses add to oven slots and queue size.",tiers:[{id:"cart",minFranchises:0,width:4.2,depth:2.6,staffVisible:1,ovenSlotsBonus:0,maxQueueBonus:0,cameraZoom:1},{id:"stand",minFranchises:1,width:5.8,depth:3.2,staffVisible:2,ovenSlotsBonus:1,maxQueueBonus:2,cameraZoom:1.16},{id:"shop",minFranchises:2,width:7.6,depth:5,staffVisible:3,ovenSlotsBonus:2,maxQueueBonus:4,cameraZoom:1.46}],requirementGrowth:1.6,_requirementNote:"Each franchise must be earned again: cash earned at the current stand must reach milestoneLifetimeCash * requirementGrowth^(franchises so far). The point gain is floor(cash earned at this stand / pointsDivisor).",trafficPerFranchise:.25,_trafficNote:'Each franchise brings more customers, with no upper limit: spawn rate x (1 + trafficPerFranchise * franchises). Add "trafficMaxMult" here to cap it.'},events:{rainyDay:{durationSeconds:150,weight:1,spawnMult:1.5,patienceDrainMult:1.25,cashMult:1,styleDemand:{}},foodFestival:{durationSeconds:150,weight:1,spawnMult:1.2,patienceDrainMult:1,cashMult:1.1,styleDemand:{pepperoni:3}}},goals:[{id:"goal.cashier",condition:{type:"staffLevel",role:"cashier",value:1}},{id:"goal.pepperoni",condition:{type:"lifetime",value:600}},{id:"goal.cook",condition:{type:"staffLevel",role:"cook",value:1}},{id:"goal.neon",condition:{type:"upgradeLevel",upgrade:"neon",value:1}},{id:"goal.franchise",condition:{type:"lifetime",value:2e4}}],tutorial:[{id:"t1",textKey:"tut.1",highlight:"customers",check:{stat:"ordersTaken",gte:1}},{id:"t2",textKey:"tut.2",highlight:"stretch",check:{stat:"manualStretch",gte:1}},{id:"t3",textKey:"tut.3",highlight:"top",check:{stat:"manualTopping",gte:1}},{id:"t4",textKey:"tut.4",highlight:"oven",check:{stat:"manualLoad",gte:1}},{id:"t5",textKey:"tut.5",highlight:"serve",check:{stat:"served",gte:1}},{id:"t6",textKey:"tut.6",highlight:"shop",check:{stat:"upgradesBought",gte:1}},{id:"t7",textKey:"tut.7",highlight:"shop",check:{stat:"staffHired",gte:1}}],monetizationStubs:{offlineBoostAd:{multiplier:2,placeholderSeconds:1.5},starterPack:{priceLabel:"$2.99",placeholder:!0},ovenSkins:["skin.classic","skin.neon","skin.copper"]},_empireNote:'Empire upgrades (upgrades with group "empire") need a number of franchises before they can be bought, and they reset with each franchise like everything else.'};var Rl={"app.title":"Slice Street","app.version":"Prototype v0.1","hud.cash":"Cash","hud.rate":"+{rate}/s","hud.goal":"Next: {goal}","hud.goalDone":"All goals done!","hud.paused":"Paused","action.customers":"Order","action.stretch":"Stretch","action.top":"Topping","action.oven":"Oven","action.serve":"Serve","action.shop":"Shop","action.settings":"Settings","action.close":"Close","action.buy":"Buy {cost}","action.maxed":"Max","action.hire":"Hire {cost}","action.upgrade":"Upgrade {cost}","action.collect":"Collect","action.adDouble":"Watch ad: 2x","action.adDoubleHint":"Optional. Ads are always player-initiated.","action.franchise":"Franchise","action.cancel":"Cancel","action.reset":"Reset save","action.confirmReset":"Really erase all progress?","shop.title":"Shop","shop.upgrades":"Upgrades","shop.staff":"Staff","shop.franchise":"Franchise","shop.starterPack":"Starter pack","shop.starterPackDesc":"Placeholder. Not available in the prototype.","shop.ovenSkins":"Oven skins","shop.ovenSkinsDesc":"Cosmetic only. Placeholder list.","upgrade.oven.name":"Bigger oven","upgrade.oven.desc":"Bake {slots} pizzas at once","upgrade.counter.name":"Wider counter","upgrade.counter.desc":"Queue up to {slots} customers","upgrade.cheese.name":"Better cheese","upgrade.cheese.desc":"+{pct}% pizza value","upgrade.decor.name":"Pretty decor","upgrade.decor.desc":"+{pct}% foot traffic. Adds: {item}","upgrade.neon.name":"Neon sign","upgrade.neon.desc":"+{pct}% foot traffic","upgrade.scooter.name":"Delivery scooter","staff.cashier.name":"Cashier","staff.cashier.desc":"Takes orders and hands out finished pizzas. Order time {secs}s.","staff.cook.name":"Cook","staff.cook.desc":"Stretches dough, adds toppings, loads the oven. Speed x{speed}.","staff.level":"Level {level}","staff.hired":"Working","style.margherita":"Margherita","style.pepperoni":"Pepperoni","style.veggie":"Veggie","style.seasonal":"Seasonal special","topping.pepperoni":"Pepperoni","topping.mushroom":"Mushroom","topping.olive":"Olive","topping.basil":"Basil","topping.pepper":"Pepper","customer.hungry":"Hungry","customer.chatty":"Chatty","customer.grumpy":"Grumpy","customer.name.1":"Dana","customer.name.2":"Mo","customer.name.3":"Priya","customer.name.4":"Sam","customer.name.5":"Ferdi","customer.wants":"Wants {topping}","customer.turnedAway":"Queue full, someone walked off","tut.1":"Tap a customer to take their order.","tut.2":"Stretch the dough: scroll the wheel or tap the arrow keys.","tut.3":"Pick the topping they want, then put it on the pizza.","tut.4":"Load the pizza. Click or press Space when the marker is in the green.","tut.5":"Tap the finished pizza to hand it over.","tut.6":"Nice! Spend some cash in the Shop.","tut.7":"Hire a cashier so orders run themselves.","tut.done":"Tutorial complete. Your stand is on its own now!","mini.dough.title":"Stretch the dough","mini.dough.hint":"Scroll the mouse wheel or tap the left and right arrow keys. Touch: swipe.","mini.top.title":"Add topping","mini.top.hint":"Click a topping, then click the pizza. Keys 1 to 3 pick, Space places.","mini.oven.title":"Slide it in","mini.oven.hint":"Click or press Space when the marker is in the green.","mini.oven.tap":"Tap!","toast.sale":"+{amount}","toast.tip":"+{tip} tip","toast.angry":"{name} left angry (-{penalty})","toast.ovenFull":"Oven is full. Wait for a slot.","toast.noPizza":"Nothing needs that right now.","toast.notEnough":"Not enough cash yet.","toast.eventStart":"{event} started!","toast.eventEnd":"{event} is over.","toast.staffIdle":"{role} is idle. Give them work!","toast.bought":"Bought {item}.","toast.hired":"{role} hired!","toast.comingSoon":"Coming soon (placeholder).","toast.adStub":"Ad placeholder finished.","toast.franchised":"Franchised! Multiplier now x{mult}.","event.rainyDay.name":"Rainy day","event.rainyDay.desc":"More customers, but they are in a hurry.","event.foodFestival.name":"Food festival","event.foodFestival.desc":"Pepperoni demand is through the roof.","collect.title":"Welcome back!","collect.body":"Your stand kept busy for {duration}.","collect.earned":"You earned {amount}","collect.capped":"Away time is capped at {cap}.","collect.boosted":"Doubled with the ad boost.","franchise.title":"Franchise your stand","franchise.explain":"Start again from scratch and keep permanent bonuses. Each franchise adds +{bonus}% cash and +{traffic}% customers for good, and your place grows: cart, then a big stand, then a pizza shop with more staff. Every franchise has to be earned again, and each one needs more than the last.","franchise.resets":"Resets: cash, upgrades, staff, queue, pizzas, and you go back to the corner.","franchise.keeps":"Keeps: franchise points, unlocked pizza styles (recipes), unlocked locations, the tutorial, settings, and lifetime stats.","franchise.gain":"You will gain {points} franchise point(s).","franchise.locked":"Earn {target} at this stand to franchise. So far: {have}.","franchise.points":"Franchise points: {points}","settings.title":"Settings","settings.sound":"Sound","settings.notify":"Notify me (opt-in)","settings.notifyDesc":"Offline earnings and idle staff. Off by default.","settings.version":"Version","stats.lifetime":"Lifetime cash: {amount}","debug.title":"Debug","debug.addCash":"+1,000 cash","debug.addCashBig":"+20,000 cash","debug.skip":"Skip 1 hour","debug.rain":"Trigger rain","debug.festival":"Trigger festival","debug.night":"Toggle time of day","debug.away":"Simulate 8h away","debug.franchiseReady":"Make franchise-ready","debug.resetAll":"Wipe save","debug.close":"Close debug","welcome.step":"Your cart is wobbly, but the lunch crowd is coming.","offline.hint":"Earnings accrue while the app is closed, capped at 8 hours.","location.corner.name":"Corner of Main & Sunny","goal.cashier":"Hire a cashier","goal.pepperoni":"Unlock pepperoni","goal.cook":"Hire a cook","goal.neon":"Buy a neon sign","goal.franchise":"Reach franchise milestone","toast.customerLeft":"{name} left","action.soon":"Soon","toast.unlocked":"New recipe unlocked: {style}","toast.offlineSaved":"Stand is saved. Come back for offline earnings.","toast.cashDebug":"Added {amount}","staff.notHired":"Not hired","location.corner.desc":"Your first stand. Steady lunch crowd.","location.side.name":"Side street","location.side.desc":"Busier foot traffic and a pepperoni-hungry lunch crowd. Unlocks at 3,000 lifetime cash.","location.current":"Here now","location.locked":"Reach {target} lifetime cash to unlock.","shop.locations":"Locations","action.move":"Move here","toast.locationMoved":"Stand moved to {location}. Queue cleared.","toast.locationUnlocked":"New location unlocked: {location}","action.locked":"Locked","settings.keys":"Keys: 1 to 6 for the action bar, M mute, Esc closes a window. Click the pizzas and customers directly.","sign.menu.title":"Menu","sign.neon":"Open!","sign.sandwich":"Fresh pizza, hot now!","mini.oven.stopped.good":"Perfect bake!","mini.oven.stopped.miss":"Close enough. It still bakes.","decor.step.flowers":"flower boxes","decor.step.festoon":"festoon lights","decor.step.bunting":"bunting","decor.step.table":"a bistro table","decor.step.lanterns":"lanterns","decor.step.carpet":"a red carpet","decor.step.secondTable":"a second table and olive trees","decor.step.balloons":"balloons","decor.step.flags":"rooftop flags","decor.step.statue":"a golden pizza","toast.decorAdded":"New decoration: {item}","tier.cart":"Pizza cart","tier.stand":"Big pizza stand","tier.shop":"Pizza shop","franchise.next":"Next: {tier}","franchise.now":"Now: {tier}","toast.tierUp":"Your place grew into: {tier}","sign.franchise":"Franchise No. {count}","staff.visible":"Up to {count} visible at this place","settings.graphics":"Graphics","settings.graphicsDesc":"Auto lowers detail if the game runs slowly.","settings.graphics.auto":"Auto","settings.graphics.high":"High","settings.graphics.low":"Low","franchise.ready":"Ready to franchise.","franchise.nextCost":"The next franchise will need {target} earned at the new stand.","toast.franchiseReady":"You can franchise now!","franchise.traffic":"Customers: +{pct}% from franchises.","franchise.trafficNext":"After this franchise: +{pct}% customers.","shop.empire":"Empire","shop.empireDesc":"Big upgrades that open up only after franchising. Each franchise resets them, like everything else.","shop.needsFranchise":"Needs {n} franchise(s)","upgrade.marketing.name":"Empire marketing","upgrade.marketing.desc":"+{pct}% customers on top of everything else","upgrade.pizzaSchool.name":"Pizza school","upgrade.pizzaSchool.desc":"+{pct}% pizza value","upgrade.megaOven.name":"Industrial ovens","upgrade.megaOven.desc":"Bake {slots} more pizzas at once"};var Cl=["corner","sideStreet"];var Pl={id:"corner",nameKey:"location.corner.name",descKey:"location.corner.desc",unlock:{type:"start"},economy:{trafficMult:1,styleDemand:{}},_note:"Stations and the stand itself are laid out in code (src/render/stand.js layoutFor), because they depend on the stand tier. This file is the street around it.",queueStart:[-2.2,0,4.4],queueStep:[.78,0,.9],_queueNote:"queueStep: x = column step (queueRowLength per row, filling left to right), z = row depth, toward the camera.",queueRowLength:4,camera:{position:[0,6.6,12.8],target:[0,1.45,.7],fov:46},props:[{type:"road",z:-8,width:7},{type:"building",pos:[-27.5,0,-16.2],size:[7,9.5,6],color:"#e07a5f",awning:"#d8402f"},{type:"building",pos:[-20.5,0,-16.2],size:[7,12.5,6],color:"#f2cc8f",awning:"#2f7d6a"},{type:"building",pos:[-14,0,-16.2],size:[6,8.5,6],color:"#81b29a",awning:"#e9a23b"},{type:"building",pos:[-7,0,-16.2],size:[8,13.5,6],color:"#e9c46a",awning:"#4a6fa5"},{type:"building",pos:[0,0,-16.2],size:[6,10,6],color:"#d9a5a0",awning:"#d8402f"},{type:"building",pos:[6.5,0,-16.2],size:[7,11.5,6],color:"#a8c5da",awning:"#2f7d6a"},{type:"building",pos:[13,0,-16.2],size:[6,9,6],color:"#f4a261",awning:"#e9a23b"},{type:"building",pos:[19.5,0,-16.2],size:[7,12,6],color:"#c9b8e0",awning:"#4a6fa5"},{type:"building",pos:[26.5,0,-16.2],size:[7,10.5,6],color:"#f0d9b5",awning:"#d8402f"},{type:"tree",pos:[-17,0,-12.4],scale:.95},{type:"tree",pos:[-10.5,0,-12.4],scale:.95},{type:"tree",pos:[-3.5,0,-12.4],scale:.95},{type:"tree",pos:[3.5,0,-12.4],scale:.95},{type:"tree",pos:[10,0,-12.4],scale:.95},{type:"tree",pos:[17,0,-12.4],scale:.95},{type:"building",pos:[-17.5,0,1.5],size:[7,11,12],color:"#f0d9b5",awning:"#2f7d6a"},{type:"building",pos:[18,0,1],size:[7,13,12],color:"#d9a5a0",awning:"#4a6fa5"},{type:"car",pos:[-8.5,0,-5.6],color:"#d8402f",rot:0},{type:"car",pos:[8.8,0,-5.6],color:"#3d9a8b",rot:0},{type:"lamp",pos:[-6.2,0,-3.4],light:!0},{type:"lamp",pos:[6,0,-3.4],light:!0},{type:"lamp",pos:[-11.5,0,-3.4]},{type:"lamp",pos:[12,0,-3.4]},{type:"tree",pos:[-7.2,0,1.2],scale:1.05},{type:"tree",pos:[8.2,0,2.2],scale:1},{type:"bush",pos:[-8.6,0,3.4]},{type:"bush",pos:[9.4,0,4.6]},{type:"bench",pos:[6.6,0,5.6]},{type:"bin",pos:[-5.8,0,3.6]},{type:"hydrant",pos:[4.9,0,-3.5]},{type:"planter",pos:[-5.4,0,6.2]},{type:"planter",pos:[5.6,0,7.4]},{type:"sandwichBoard",pos:[1.9,0,6.6]}]};var Ll={id:"sideStreet",nameKey:"location.side.name",descKey:"location.side.desc",unlock:{type:"lifetime",value:3e3},economy:{trafficMult:1.35,styleDemand:{pepperoni:2}},_note:"Stations and the stand itself are laid out in code (src/render/stand.js layoutFor), because they depend on the stand tier. This file is the street around it.",queueStart:[-2.2,0,4.4],queueStep:[.78,0,.9],_queueNote:"queueStep: x = column step (queueRowLength per row, filling left to right), z = row depth, toward the camera.",queueRowLength:4,camera:{position:[0,6.6,12.8],target:[0,1.45,.7],fov:46},props:[{type:"road",z:-8,width:7},{type:"building",pos:[-27.5,0,-16.2],size:[7,11,6],color:"#8ab17d",awning:"#4a6fa5"},{type:"building",pos:[-20.5,0,-16.2],size:[7,8.5,6],color:"#c9ada7",awning:"#d8402f"},{type:"building",pos:[-14,0,-16.2],size:[6,13,6],color:"#f2cc8f",awning:"#2f7d6a"},{type:"building",pos:[-7,0,-16.2],size:[8,9.5,6],color:"#e07a5f",awning:"#e9a23b"},{type:"building",pos:[0,0,-16.2],size:[6,12,6],color:"#9ec5d8",awning:"#4a6fa5"},{type:"building",pos:[6.5,0,-16.2],size:[7,10,6],color:"#f6bd60",awning:"#d8402f"},{type:"building",pos:[13,0,-16.2],size:[6,14,6],color:"#b8a9c9",awning:"#2f7d6a"},{type:"building",pos:[19.5,0,-16.2],size:[7,9,6],color:"#e5989b",awning:"#e9a23b"},{type:"building",pos:[26.5,0,-16.2],size:[7,11.5,6],color:"#a3b18a",awning:"#4a6fa5"},{type:"tree",pos:[-17,0,-12.4],scale:.95},{type:"tree",pos:[-10.5,0,-12.4],scale:.95},{type:"tree",pos:[-3.5,0,-12.4],scale:.95},{type:"tree",pos:[3.5,0,-12.4],scale:.95},{type:"tree",pos:[10,0,-12.4],scale:.95},{type:"tree",pos:[17,0,-12.4],scale:.95},{type:"building",pos:[-17.5,0,1.5],size:[7,13,12],color:"#c9ada7",awning:"#d8402f"},{type:"building",pos:[18,0,1],size:[7,10.5,12],color:"#8ab17d",awning:"#e9a23b"},{type:"car",pos:[-9.5,0,-5.6],color:"#e9c46a",rot:0},{type:"car",pos:[7.2,0,-5.6],color:"#4a6fa5",rot:0},{type:"lamp",pos:[-5.6,0,-3.4],light:!0},{type:"lamp",pos:[6.6,0,-3.4],light:!0},{type:"lamp",pos:[-12,0,-3.4]},{type:"lamp",pos:[12.5,0,-3.4]},{type:"tree",pos:[-8,0,2.4],scale:1},{type:"tree",pos:[7.6,0,1],scale:1.1},{type:"bush",pos:[8.8,0,3.6]},{type:"bush",pos:[-9.2,0,4.8]},{type:"bench",pos:[-6.4,0,5.2]},{type:"bin",pos:[6,0,3.4]},{type:"hydrant",pos:[-4.9,0,-3.5]},{type:"planter",pos:[5.6,0,6.4]},{type:"planter",pos:[-5.6,0,7.2]},{type:"sandwichBoard",pos:[1.9,0,6.6]}]};var Qo={corner:Pl,sideStreet:Ll},Il={};for(let n of Cl)Qo[n]?Il[Qo[n].id]=Qo[n]:console.warn("[bundle] location listed in index.json but not bundled:",n);globalThis.__PIZZA_DATA__={economy:Al,strings:Rl,locations:Il};var Cc="160";var ff=0,Dl=1,pf=2;var vo=1,mf=2,In=3,Jn=0,zt=1,hn=2;var Yn=0,ss=1,Nr=2,Ul=3,Nl=4,gf=5,gi=100,_f=101,yf=102,Ol=103,Fl=104,xf=200,vf=201,Mf=202,bf=203,Oa=204,Fa=205,Sf=206,wf=207,Ef=208,Tf=209,Af=210,Rf=211,Cf=212,Pf=213,Lf=214,If=0,Df=1,Uf=2,Or=3,Nf=4,Of=5,Ff=6,zf=7,Mo=0,Bf=1,kf=2,Zn=0,Hf=1,Vf=2,Gf=3,Pc=4,Wf=5,Xf=6;var fu=300,as=301,cs=302,za=303,Ba=304,bo=306,Us=1e3,un=1001,ka=1002,Vt=1003,zl=1004;var jo=1005;var Qt=1006,qf=1007;var Ns=1008;var $n=1009,Yf=1010,Zf=1011,Lc=1012,pu=1013,Xn=1014,qn=1015,Os=1016,mu=1017,gu=1018,yi=1020,$f=1021,dn=1023,Jf=1024,Kf=1025,xi=1026,ls=1027,Qf=1028,_u=1029,jf=1030,yu=1031,xu=1033,ea=33776,ta=33777,na=33778,ia=33779,Bl=35840,kl=35841,Hl=35842,Vl=35843,vu=36196,Gl=37492,Wl=37496,Xl=37808,ql=37809,Yl=37810,Zl=37811,$l=37812,Jl=37813,Kl=37814,Ql=37815,jl=37816,eh=37817,th=37818,nh=37819,ih=37820,sh=37821,sa=36492,rh=36494,oh=36495,ep=36283,ah=36284,ch=36285,lh=36286;var Fr=2300,zr=2301,ra=2302,hh=2400,uh=2401,dh=2402;var Mu=3e3,vi=3001,tp=3200,np=3201,Ic=0,ip=1,jt="",gt="srgb",Nn="srgb-linear",Dc="display-p3",So="display-p3-linear",Br="linear",ct="srgb",kr="rec709",Hr="p3";var Bi=7680;var fh=519,sp=512,rp=513,op=514,bu=515,ap=516,cp=517,lp=518,hp=519,ph=35044;var mh="300 es",Ha=1035,Un=2e3,Vr=2001,Kn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var oa=Math.PI/180,Va=180/Math.PI;function qs(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function Ct(n,e,t){return Math.max(e,Math.min(t,n))}function up(n,e){return(n%e+e)%e}function aa(n,e,t){return(1-t)*n+t*e}function gh(n){return(n&n-1)===0&&n!==0}function Ga(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ws(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Gt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var fe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class n{constructor(e,t,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],p=i[5],g=i[8],_=s[0],m=s[3],d=s[6],x=s[1],y=s[4],b=s[7],R=s[2],T=s[5],A=s[8];return r[0]=o*_+a*x+c*R,r[3]=o*m+a*y+c*T,r[6]=o*d+a*b+c*A,r[1]=l*_+h*x+u*R,r[4]=l*m+h*y+u*T,r[7]=l*d+h*b+u*A,r[2]=f*_+p*x+g*R,r[5]=f*m+p*y+g*T,r[8]=f*d+p*b+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,p=l*r-o*c,g=t*u+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*l-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=f*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ca.makeScale(e,t)),this}rotate(e){return this.premultiply(ca.makeRotation(-e)),this}translate(e,t){return this.premultiply(ca.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ca=new We;function Su(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Gr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function dp(){let n=Gr("canvas");return n.style.display="block",n}var _h={};function Ps(n){n in _h||(_h[n]=!0,console.warn(n))}var yh=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xh=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),cr={[Nn]:{transfer:Br,primaries:kr,toReference:n=>n,fromReference:n=>n},[gt]:{transfer:ct,primaries:kr,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[So]:{transfer:Br,primaries:Hr,toReference:n=>n.applyMatrix3(xh),fromReference:n=>n.applyMatrix3(yh)},[Dc]:{transfer:ct,primaries:Hr,toReference:n=>n.convertSRGBToLinear().applyMatrix3(xh),fromReference:n=>n.applyMatrix3(yh).convertLinearToSRGB()}},fp=new Set([Nn,So]),nt={enabled:!0,_workingColorSpace:Nn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!fp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=cr[e].toReference,s=cr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return cr[n].primaries},getTransfer:function(n){return n===jt?Br:cr[n].transfer}};function rs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function la(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ki,Wr=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ki===void 0&&(ki=Gr("canvas")),ki.width=e.width,ki.height=e.height;let i=ki.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Gr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=rs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(rs(t[i]/255)*255):t[i]=rs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},pp=0,Xr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=qs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ha(s[o].image)):r.push(ha(s[o]))}else r=ha(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function ha(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wr.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var mp=0,en=class n extends Kn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=un,s=un,r=Qt,o=Ns,a=dn,c=$n,l=n.DEFAULT_ANISOTROPY,h=jt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=qs(),this.name="",this.source=new Xr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ps("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===vi?gt:jt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Us:e.x=e.x-Math.floor(e.x);break;case un:e.x=e.x<0?0:1;break;case ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Us:e.y=e.y-Math.floor(e.y);break;case un:e.y=e.y<0?0:1;break;case ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ps("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===gt?vi:Mu}set encoding(e){Ps("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===vi?gt:jt}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=fu;en.DEFAULT_ANISOTROPY=1;var ut=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,b=(p+1)/2,R=(d+1)/2,T=(h+f)/4,A=(u+_)/4,I=(g+m)/4;return y>b&&y>R?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=T/i,r=A/i):b>R?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=T/s,r=I/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=A/r,s=I/r),this.set(i,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(f-h)/x,this.w=Math.acos((l+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wa=class extends Kn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(Ps("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===vi?gt:jt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new en(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Xr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},On=class extends Wa{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},qr=class extends en{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xa=class extends en{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==f||l!==p||h!==g){let m=1-a,d=c*f+l*p+h*g+u*_,x=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){let R=Math.sqrt(y),T=Math.atan2(R,d*x);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}let b=a*x;if(c=c*m+f*b,l=l*m+p*b,h=h*m+g*b,u=u*m+_*b,m===1-a){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*p-l*f,e[t+1]=c*g+h*f+l*u-a*p,e[t+2]=l*g+h*p+a*f-c*u,e[t+3]=h*g-a*u-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),f=c(i/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ua.copy(this).projectOnVector(e),this.sub(ua)}reflect(e){return this.sub(ua.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ua=new C,vh=new xn,Mi=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,an):an.fromBufferAttribute(r,o),an.applyMatrix4(e.matrixWorld),this.expandByPoint(an);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),lr.copy(i.boundingBox)),lr.applyMatrix4(e.matrixWorld),this.union(lr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Es),hr.subVectors(this.max,Es),Hi.subVectors(e.a,Es),Vi.subVectors(e.b,Es),Gi.subVectors(e.c,Es),kn.subVectors(Vi,Hi),Hn.subVectors(Gi,Vi),ui.subVectors(Hi,Gi);let t=[0,-kn.z,kn.y,0,-Hn.z,Hn.y,0,-ui.z,ui.y,kn.z,0,-kn.x,Hn.z,0,-Hn.x,ui.z,0,-ui.x,-kn.y,kn.x,0,-Hn.y,Hn.x,0,-ui.y,ui.x,0];return!da(t,Hi,Vi,Gi,hr)||(t=[1,0,0,0,1,0,0,0,1],!da(t,Hi,Vi,Gi,hr))?!1:(ur.crossVectors(kn,Hn),t=[ur.x,ur.y,ur.z],da(t,Hi,Vi,Gi,hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},An=[new C,new C,new C,new C,new C,new C,new C,new C],an=new C,lr=new Mi,Hi=new C,Vi=new C,Gi=new C,kn=new C,Hn=new C,ui=new C,Es=new C,hr=new C,ur=new C,di=new C;function da(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){di.fromArray(n,r);let a=s.x*Math.abs(di.x)+s.y*Math.abs(di.y)+s.z*Math.abs(di.z),c=e.dot(di),l=t.dot(di),h=i.dot(di);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var gp=new Mi,Ts=new C,fa=new C,bi=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):gp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ts.subVectors(e,this.center);let t=Ts.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ts,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ts.copy(e.center).add(fa)),this.expandByPoint(Ts.copy(e.center).sub(fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Rn=new C,pa=new C,dr=new C,Vn=new C,ma=new C,fr=new C,ga=new C,hs=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){pa.copy(e).add(t).multiplyScalar(.5),dr.copy(t).sub(e).normalize(),Vn.copy(this.origin).sub(pa);let r=e.distanceTo(t)*.5,o=-this.direction.dot(dr),a=Vn.dot(this.direction),c=-Vn.dot(dr),l=Vn.lengthSq(),h=Math.abs(1-o*o),u,f,p,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(pa).addScaledVector(dr,f),p}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);let i=Rn.dot(this.direction),s=Rn.dot(Rn)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,i,s,r){ma.subVectors(t,e),fr.subVectors(i,e),ga.crossVectors(ma,fr);let o=this.direction.dot(ga),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vn.subVectors(this.origin,e);let c=a*this.direction.dot(fr.crossVectors(Vn,fr));if(c<0)return null;let l=a*this.direction.dot(ma.cross(Vn));if(l<0||c+l>o)return null;let h=-a*Vn.dot(ga);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},dt=class n{constructor(e,t,i,s,r,o,a,c,l,h,u,f,p,g,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,u,f,p,g,_,m)}set(e,t,i,s,r,o,a,c,l,h,u,f,p,g,_,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Wi.setFromMatrixColumn(e,0).length(),r=1/Wi.setFromMatrixColumn(e,1).length(),o=1/Wi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,p=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,p=c*u,g=l*h,_=l*u;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,p=c*u,g=l*h,_=l*u;t[0]=f-_*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,p=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-p,t[8]=f*l+_,t[1]=c*u,t[5]=_*l+f,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-f*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+g,t[10]=f-_*u}else if(e.order==="XZY"){let f=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+_,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_p,e,yp)}lookAt(e,t,i){let s=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Gn.crossVectors(i,Yt),Gn.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Gn.crossVectors(i,Yt)),Gn.normalize(),pr.crossVectors(Yt,Gn),s[0]=Gn.x,s[4]=pr.x,s[8]=Yt.x,s[1]=Gn.y,s[5]=pr.y,s[9]=Yt.y,s[2]=Gn.z,s[6]=pr.z,s[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],x=i[3],y=i[7],b=i[11],R=i[15],T=s[0],A=s[4],I=s[8],M=s[12],E=s[1],O=s[5],V=s[9],q=s[13],P=s[2],F=s[6],W=s[10],J=s[14],Z=s[3],Y=s[7],ee=s[11],ie=s[15];return r[0]=o*T+a*E+c*P+l*Z,r[4]=o*A+a*O+c*F+l*Y,r[8]=o*I+a*V+c*W+l*ee,r[12]=o*M+a*q+c*J+l*ie,r[1]=h*T+u*E+f*P+p*Z,r[5]=h*A+u*O+f*F+p*Y,r[9]=h*I+u*V+f*W+p*ee,r[13]=h*M+u*q+f*J+p*ie,r[2]=g*T+_*E+m*P+d*Z,r[6]=g*A+_*O+m*F+d*Y,r[10]=g*I+_*V+m*W+d*ee,r[14]=g*M+_*q+m*J+d*ie,r[3]=x*T+y*E+b*P+R*Z,r[7]=x*A+y*O+b*F+R*Y,r[11]=x*I+y*V+b*W+R*ee,r[15]=x*M+y*q+b*J+R*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+r*c*u-s*l*u-r*a*f+i*l*f+s*a*p-i*c*p)+_*(+t*c*p-t*l*f+r*o*f-s*o*p+s*l*h-r*c*h)+m*(+t*l*u-t*a*p-r*o*u+i*o*p+r*a*h-i*l*h)+d*(-s*a*h-t*c*u+t*a*f+s*o*u-i*o*f+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],x=u*m*l-_*f*l+_*c*p-a*m*p-u*c*d+a*f*d,y=g*f*l-h*m*l-g*c*p+o*m*p+h*c*d-o*f*d,b=h*_*l-g*u*l+g*a*p-o*_*p-h*a*d+o*u*d,R=g*u*c-h*_*c-g*a*f+o*_*f+h*a*m-o*u*m,T=t*x+i*y+s*b+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return e[0]=x*A,e[1]=(_*f*r-u*m*r-_*s*p+i*m*p+u*s*d-i*f*d)*A,e[2]=(a*m*r-_*c*r+_*s*l-i*m*l-a*s*d+i*c*d)*A,e[3]=(u*c*r-a*f*r-u*s*l+i*f*l+a*s*p-i*c*p)*A,e[4]=y*A,e[5]=(h*m*r-g*f*r+g*s*p-t*m*p-h*s*d+t*f*d)*A,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*d-t*c*d)*A,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*p+t*c*p)*A,e[8]=b*A,e[9]=(g*u*r-h*_*r-g*i*p+t*_*p+h*i*d-t*u*d)*A,e[10]=(o*_*r-g*a*r+g*i*l-t*_*l-o*i*d+t*a*d)*A,e[11]=(h*a*r-o*u*r-h*i*l+t*u*l+o*i*p-t*a*p)*A,e[12]=R*A,e[13]=(h*_*s-g*u*s+g*i*f-t*_*f-h*i*m+t*u*m)*A,e[14]=(g*a*s-o*_*s-g*i*c+t*_*c+o*i*m-t*a*m)*A,e[15]=(o*u*s-h*a*s+h*i*c-t*u*c-o*i*f+t*a*f)*A,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,p=r*h,g=r*u,_=o*h,m=o*u,d=a*u,x=c*l,y=c*h,b=c*u,R=i.x,T=i.y,A=i.z;return s[0]=(1-(_+d))*R,s[1]=(p+b)*R,s[2]=(g-y)*R,s[3]=0,s[4]=(p-b)*T,s[5]=(1-(f+d))*T,s[6]=(m+x)*T,s[7]=0,s[8]=(g+y)*A,s[9]=(m-x)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Wi.set(s[0],s[1],s[2]).length(),o=Wi.set(s[4],s[5],s[6]).length(),a=Wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],cn.copy(this);let l=1/r,h=1/o,u=1/a;return cn.elements[0]*=l,cn.elements[1]*=l,cn.elements[2]*=l,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=u,cn.elements[9]*=u,cn.elements[10]*=u,t.setFromRotationMatrix(cn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Un){let c=this.elements,l=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),p,g;if(a===Un)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Vr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Un){let c=this.elements,l=1/(t-e),h=1/(i-s),u=1/(o-r),f=(t+e)*l,p=(i+s)*h,g,_;if(a===Un)g=(o+r)*u,_=-2*u;else if(a===Vr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Wi=new C,cn=new dt,_p=new C(0,0,0),yp=new C(1,1,1),Gn=new C,pr=new C,Yt=new C,Mh=new dt,bh=new xn,us=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Mh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bh.setFromEuler(this),this.setFromQuaternion(bh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};us.DEFAULT_ORDER="XYZ";var Fs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},xp=0,Sh=new C,Xi=new xn,Cn=new dt,mr=new C,As=new C,vp=new C,Mp=new xn,wh=new C(1,0,0),Eh=new C(0,1,0),Th=new C(0,0,1),bp={type:"added"},Sp={type:"removed"},Pt=class n extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new C,t=new us,i=new xn,s=new C(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new We}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(wh,e)}rotateY(e){return this.rotateOnAxis(Eh,e)}rotateZ(e){return this.rotateOnAxis(Th,e)}translateOnAxis(e,t){return Sh.copy(e).applyQuaternion(this.quaternion),this.position.add(Sh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wh,e)}translateY(e){return this.translateOnAxis(Eh,e)}translateZ(e){return this.translateOnAxis(Th,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?mr.copy(e):mr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(As,mr,this.up):Cn.lookAt(mr,As,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Xi.setFromRotationMatrix(Cn),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sp)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,e,vp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,Mp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Pt.DEFAULT_UP=new C(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ln=new C,Pn=new C,_a=new C,Ln=new C,qi=new C,Yi=new C,Ah=new C,ya=new C,xa=new C,va=new C,gr=!1,ts=class n{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ln.subVectors(e,t),s.cross(ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ln.subVectors(s,t),Pn.subVectors(i,t),_a.subVectors(e,t);let o=ln.dot(ln),a=ln.dot(Pn),c=ln.dot(_a),l=Pn.dot(Pn),h=Pn.dot(_a),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getUV(e,t,i,s,r,o,a,c){return gr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gr=!0),this.getInterpolation(e,t,i,s,r,o,a,c)}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ln.x),c.addScaledVector(o,Ln.y),c.addScaledVector(a,Ln.z),c)}static isFrontFacing(e,t,i,s){return ln.subVectors(i,t),Pn.subVectors(e,t),ln.cross(Pn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),ln.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return gr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gr=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;qi.subVectors(s,i),Yi.subVectors(r,i),ya.subVectors(e,i);let c=qi.dot(ya),l=Yi.dot(ya);if(c<=0&&l<=0)return t.copy(i);xa.subVectors(e,s);let h=qi.dot(xa),u=Yi.dot(xa);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(qi,o);va.subVectors(e,r);let p=qi.dot(va),g=Yi.dot(va);if(g>=0&&p<=g)return t.copy(r);let _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Yi,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Ah.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(Ah,a);let d=1/(m+_+f);return o=_*d,a=f*d,t.copy(i).addScaledVector(qi,o).addScaledVector(Yi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},wu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},_r={h:0,s:0,l:0};function Ma(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ge=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=nt.workingColorSpace){if(e=up(e,1),t=Ct(t,0,1),i=Ct(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ma(o,r,e+1/3),this.g=Ma(o,r,e),this.b=Ma(o,r,e-1/3)}return nt.toWorkingColorSpace(this,s),this}setStyle(e,t=gt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){let i=wu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}copyLinearToSRGB(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return nt.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Ct(Ot.r*255,0,255))*65536+Math.round(Ct(Ot.g*255,0,255))*256+Math.round(Ct(Ot.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Ot.copy(this),t);let i=Ot.r,s=Ot.g,r=Ot.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=gt){nt.fromWorkingColorSpace(Ot.copy(this),e);let t=Ot.r,i=Ot.g,s=Ot.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Wn),this.setHSL(Wn.h+e,Wn.s+t,Wn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wn),e.getHSL(_r);let i=aa(Wn.h,_r.h,t),s=aa(Wn.s,_r.s,t),r=aa(Wn.l,_r.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ot=new ge;ge.NAMES=wu;var wp=0,vn=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=qs(),this.name="",this.type="Material",this.blending=ss,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oa,this.blendDst=Fa,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(i.blending=this.blending),this.side!==Jn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Oa&&(i.blendSrc=this.blendSrc),this.blendDst!==Fa&&(i.blendDst=this.blendDst),this.blendEquation!==gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Or&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Mt=class extends vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var vt=new C,yr=new fe,Wt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ph,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)yr.fromBufferAttribute(this,t),yr.applyMatrix3(e),this.setXY(t,yr.x,yr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ws(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ws(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ws(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ws(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ws(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),s=Gt(s,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ph&&(e.usage=this.usage),e}};var Yr=class extends Wt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Zr=class extends Wt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var $e=class extends Wt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var Ep=0,Kt=new dt,ba=new Pt,Zi=new C,Zt=new Mi,Rs=new Mi,At=new C,_t=class n extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=qs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Su(e)?Zr:Yr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new We().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,i){return Kt.makeTranslation(e,t,i),this.applyMatrix4(Kt),this}scale(e,t,i){return Kt.makeScale(e,t,i),this.applyMatrix4(Kt),this}lookAt(e){return ba.lookAt(e),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new $e(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Zt.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){let i=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Rs.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(Zt.min,Rs.min),Zt.expandByPoint(At),At.addVectors(Zt.max,Rs.max),Zt.expandByPoint(At)):(Zt.expandByPoint(Rs.min),Zt.expandByPoint(Rs.max))}Zt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)At.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(At));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)At.fromBufferAttribute(a,l),c&&(Zi.fromBufferAttribute(e,l),At.add(Zi)),s=Math.max(s,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let E=0;E<a;E++)l[E]=new C,h[E]=new C;let u=new C,f=new C,p=new C,g=new fe,_=new fe,m=new fe,d=new C,x=new C;function y(E,O,V){u.fromArray(s,E*3),f.fromArray(s,O*3),p.fromArray(s,V*3),g.fromArray(o,E*2),_.fromArray(o,O*2),m.fromArray(o,V*2),f.sub(u),p.sub(u),_.sub(g),m.sub(g);let q=1/(_.x*m.y-m.x*_.y);isFinite(q)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(q),x.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(q),l[E].add(d),l[O].add(d),l[V].add(d),h[E].add(x),h[O].add(x),h[V].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let E=0,O=b.length;E<O;++E){let V=b[E],q=V.start,P=V.count;for(let F=q,W=q+P;F<W;F+=3)y(i[F+0],i[F+1],i[F+2])}let R=new C,T=new C,A=new C,I=new C;function M(E){A.fromArray(r,E*3),I.copy(A);let O=l[E];R.copy(O),R.sub(A.multiplyScalar(A.dot(O))).normalize(),T.crossVectors(I,O);let q=T.dot(h[E])<0?-1:1;c[E*4]=R.x,c[E*4+1]=R.y,c[E*4+2]=R.z,c[E*4+3]=q}for(let E=0,O=b.length;E<O;++E){let V=b[E],q=V.start,P=V.count;for(let F=q,W=q+P;F<W;F+=3)M(i[F+0]),M(i[F+1]),M(i[F+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new C,r=new C,o=new C,a=new C,c=new C,l=new C,h=new C,u=new C;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let d=0;d<h;d++)f[g++]=l[p++]}return new Wt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],p=e(f,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rh=new dt,fi=new hs,xr=new bi,Ch=new C,$i=new C,Ji=new C,Ki=new C,Sa=new C,vr=new C,Mr=new fe,br=new fe,Sr=new fe,Ph=new C,Lh=new C,Ih=new C,wr=new C,Er=new C,Pe=class extends Pt{constructor(e=new _t,t=new Mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){vr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Sa.fromBufferAttribute(u,e),o?vr.addScaledVector(Sa,h):vr.addScaledVector(Sa.sub(t),h))}t.add(vr)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xr.copy(i.boundingSphere),xr.applyMatrix4(r),fi.copy(e.ray).recast(e.near),!(xr.containsPoint(fi.origin)===!1&&(fi.intersectSphere(xr,Ch)===null||fi.origin.distanceToSquared(Ch)>(e.far-e.near)**2))&&(Rh.copy(r).invert(),fi.copy(e.ray).applyMatrix4(Rh),!(i.boundingBox!==null&&fi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,fi)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],d=o[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=x,R=y;b<R;b+=3){let T=a.getX(b),A=a.getX(b+1),I=a.getX(b+2);s=Tr(this,d,e,i,l,h,u,T,A,I),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let x=a.getX(m),y=a.getX(m+1),b=a.getX(m+2);s=Tr(this,o,e,i,l,h,u,x,y,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],d=o[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let b=x,R=y;b<R;b+=3){let T=b,A=b+1,I=b+2;s=Tr(this,d,e,i,l,h,u,T,A,I),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let x=m,y=m+1,b=m+2;s=Tr(this,o,e,i,l,h,u,x,y,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Tp(n,e,t,i,s,r,o,a){let c;if(e.side===zt?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Jn,a),c===null)return null;Er.copy(a),Er.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Er);return l<t.near||l>t.far?null:{distance:l,point:Er.clone(),object:n}}function Tr(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,$i),n.getVertexPosition(c,Ji),n.getVertexPosition(l,Ki);let h=Tp(n,e,t,i,$i,Ji,Ki,wr);if(h){s&&(Mr.fromBufferAttribute(s,a),br.fromBufferAttribute(s,c),Sr.fromBufferAttribute(s,l),h.uv=ts.getInterpolation(wr,$i,Ji,Ki,Mr,br,Sr,new fe)),r&&(Mr.fromBufferAttribute(r,a),br.fromBufferAttribute(r,c),Sr.fromBufferAttribute(r,l),h.uv1=ts.getInterpolation(wr,$i,Ji,Ki,Mr,br,Sr,new fe),h.uv2=h.uv1),o&&(Ph.fromBufferAttribute(o,a),Lh.fromBufferAttribute(o,c),Ih.fromBufferAttribute(o,l),h.normal=ts.getInterpolation(wr,$i,Ji,Ki,Ph,Lh,Ih,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new C,materialIndex:0};ts.getNormal($i,Ji,Ki,u.normal),h.face=u}return h}var Si=class n extends _t{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(u,2));function g(_,m,d,x,y,b,R,T,A,I,M){let E=b/A,O=R/I,V=b/2,q=R/2,P=T/2,F=A+1,W=I+1,J=0,Z=0,Y=new C;for(let ee=0;ee<W;ee++){let ie=ee*O-q;for(let de=0;de<F;de++){let G=de*E-V;Y[_]=G*x,Y[m]=ie*y,Y[d]=P,l.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[d]=T>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(de/A),u.push(1-ee/I),J+=1}}for(let ee=0;ee<I;ee++)for(let ie=0;ie<A;ie++){let de=f+ie+F*ee,G=f+ie+F*(ee+1),K=f+(ie+1)+F*(ee+1),ue=f+(ie+1)+F*ee;c.push(de,G,ue),c.push(G,K,ue),Z+=6}a.addGroup(p,Z,M),p+=Z,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ds(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Ht(n){let e={};for(let t=0;t<n.length;t++){let i=ds(n[t]);for(let s in i)e[s]=i[s]}return e}function Ap(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Eu(n){return n.getRenderTarget()===null?n.outputColorSpace:nt.workingColorSpace}var Rp={clone:ds,merge:Ht},Cp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cp,this.fragmentShader=Pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=Ap(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},$r=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=Un}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ft=class extends $r{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Va*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Va*2*Math.atan(Math.tan(oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(oa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Qi=-90,ji=1,qa=class extends Pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ft(Qi,ji,e,t);s.layers=this.layers,this.add(s);let r=new Ft(Qi,ji,e,t);r.layers=this.layers,this.add(r);let o=new Ft(Qi,ji,e,t);o.layers=this.layers,this.add(o);let a=new Ft(Qi,ji,e,t);a.layers=this.layers,this.add(a);let c=new Ft(Qi,ji,e,t);c.layers=this.layers,this.add(c);let l=new Ft(Qi,ji,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Un)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Vr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Jr=class extends en{constructor(e,t,i,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:as,super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ya=class extends On{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Ps("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===vi?gt:jt),this.texture=new Jr(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Si(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zt,blending:Yn});r.uniforms.tEquirect.value=t;let o=new Pe(s,r),a=t.minFilter;return t.minFilter===Ns&&(t.minFilter=Qt),new qa(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},wa=new C,Lp=new C,Ip=new We,Dn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=wa.subVectors(i,t).cross(Lp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(wa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Ip.getNormalMatrix(e),s=this.coplanarPoint(wa).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},pi=new bi,Ar=new C,zs=class{constructor(e=new Dn,t=new Dn,i=new Dn,s=new Dn,r=new Dn,o=new Dn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Un){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],x=s[13],y=s[14],b=s[15];if(i[0].setComponents(c-r,f-l,m-p,b-d).normalize(),i[1].setComponents(c+r,f+l,m+p,b+d).normalize(),i[2].setComponents(c+o,f+h,m+g,b+x).normalize(),i[3].setComponents(c-o,f-h,m-g,b-x).normalize(),i[4].setComponents(c-a,f-u,m-_,b-y).normalize(),t===Un)i[5].setComponents(c+a,f+u,m+_,b+y).normalize();else if(t===Vr)i[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ar.x=s.normal.x>0?e.max.x:e.min.x,Ar.y=s.normal.y>0?e.max.y:e.min.y,Ar.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ar)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Tu(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Dp(n,e){let t=e.isWebGL2,i=new WeakMap;function s(l,h){let u=l.array,f=l.usage,p=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,f),l.onUploadCallback();let _;if(u instanceof Float32Array)_=n.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=n.SHORT;else if(u instanceof Uint32Array)_=n.UNSIGNED_INT;else if(u instanceof Int32Array)_=n.INT;else if(u instanceof Int8Array)_=n.BYTE;else if(u instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,h,u){let f=h.array,p=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,l),p.count===-1&&g.length===0&&n.bufferSubData(u,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){let d=g[_];t?n.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):n.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):n.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=i.get(l);(!f||f.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);if(u===void 0)i.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var Mn=class n extends _t{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){let x=d*f-o;for(let y=0;y<l;y++){let b=y*u-r;g.push(b,-x,0),_.push(0,0,1),m.push(y/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let x=0;x<a;x++){let y=x+l*d,b=x+l*(d+1),R=x+1+l*(d+1),T=x+1+l*d;p.push(y,b,T),p.push(b,R,T)}this.setIndex(p),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Up=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Np=`#ifdef USE_ALPHAHASH
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
#endif`,Op=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kp=`#ifdef USE_AOMAP
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
#endif`,Hp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vp=`#ifdef USE_BATCHING
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
#endif`,Gp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Wp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yp=`#ifdef USE_IRIDESCENCE
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
#endif`,Zp=`#ifdef USE_BUMPMAP
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
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,nm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,im=`#define PI 3.141592653589793
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
} // validated`,sm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rm=`vec3 transformedNormal = objectNormal;
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
#endif`,om=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,am=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hm="gl_FragColor = linearToOutputTexel( gl_FragColor );",um=`
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
}`,dm=`#ifdef USE_ENVMAP
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
#endif`,fm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pm=`#ifdef USE_ENVMAP
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
#endif`,mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gm=`#ifdef USE_ENVMAP
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
#endif`,_m=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ym=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mm=`#ifdef USE_GRADIENTMAP
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
}`,bm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Sm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tm=`uniform bool receiveShadow;
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
#endif`,Am=`#ifdef USE_ENVMAP
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
#endif`,Rm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Im=`PhysicalMaterial material;
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
#endif`,Dm=`struct PhysicalMaterial {
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
}`,Um=`
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
#endif`,Nm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Om=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,km=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Hm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wm=`#if defined( USE_POINTS_UV )
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
#endif`,Xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ym=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zm=`#ifdef USE_MORPHNORMALS
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
#endif`,$m=`#ifdef USE_MORPHTARGETS
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
#endif`,Jm=`#ifdef USE_MORPHTARGETS
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
#endif`,Km=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,n0=`#ifdef USE_NORMALMAP
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
#endif`,i0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,s0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,r0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,o0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,a0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,c0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,l0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,f0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,g0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,y0=`float getShadowMask() {
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
}`,x0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,v0=`#ifdef USE_SKINNING
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
#endif`,M0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,b0=`#ifdef USE_SKINNING
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
#endif`,S0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,E0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,T0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,A0=`#ifdef USE_TRANSMISSION
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
#endif`,R0=`#ifdef USE_TRANSMISSION
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
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,D0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U0=`uniform sampler2D t2D;
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
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B0=`#include <common>
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
}`,k0=`#if DEPTH_PACKING == 3200
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
}`,H0=`#define DISTANCE
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
}`,V0=`#define DISTANCE
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
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,W0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`uniform float scale;
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
}`,q0=`uniform vec3 diffuse;
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
}`,Y0=`#include <common>
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
}`,Z0=`uniform vec3 diffuse;
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
}`,$0=`#define LAMBERT
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
}`,J0=`#define LAMBERT
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
}`,K0=`#define MATCAP
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
}`,Q0=`#define MATCAP
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
}`,j0=`#define NORMAL
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
}`,eg=`#define NORMAL
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
}`,tg=`#define PHONG
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
}`,ng=`#define PHONG
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
}`,ig=`#define STANDARD
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
}`,sg=`#define STANDARD
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
}`,rg=`#define TOON
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
}`,og=`#define TOON
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
}`,ag=`uniform float size;
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
}`,cg=`uniform vec3 diffuse;
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
}`,lg=`#include <common>
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
}`,hg=`uniform vec3 color;
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
}`,ug=`uniform float rotation;
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
}`,dg=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:Up,alphahash_pars_fragment:Np,alphamap_fragment:Op,alphamap_pars_fragment:Fp,alphatest_fragment:zp,alphatest_pars_fragment:Bp,aomap_fragment:kp,aomap_pars_fragment:Hp,batching_pars_vertex:Vp,batching_vertex:Gp,begin_vertex:Wp,beginnormal_vertex:Xp,bsdfs:qp,iridescence_fragment:Yp,bumpmap_pars_fragment:Zp,clipping_planes_fragment:$p,clipping_planes_pars_fragment:Jp,clipping_planes_pars_vertex:Kp,clipping_planes_vertex:Qp,color_fragment:jp,color_pars_fragment:em,color_pars_vertex:tm,color_vertex:nm,common:im,cube_uv_reflection_fragment:sm,defaultnormal_vertex:rm,displacementmap_pars_vertex:om,displacementmap_vertex:am,emissivemap_fragment:cm,emissivemap_pars_fragment:lm,colorspace_fragment:hm,colorspace_pars_fragment:um,envmap_fragment:dm,envmap_common_pars_fragment:fm,envmap_pars_fragment:pm,envmap_pars_vertex:mm,envmap_physical_pars_fragment:Am,envmap_vertex:gm,fog_vertex:_m,fog_pars_vertex:ym,fog_fragment:xm,fog_pars_fragment:vm,gradientmap_pars_fragment:Mm,lightmap_fragment:bm,lightmap_pars_fragment:Sm,lights_lambert_fragment:wm,lights_lambert_pars_fragment:Em,lights_pars_begin:Tm,lights_toon_fragment:Rm,lights_toon_pars_fragment:Cm,lights_phong_fragment:Pm,lights_phong_pars_fragment:Lm,lights_physical_fragment:Im,lights_physical_pars_fragment:Dm,lights_fragment_begin:Um,lights_fragment_maps:Nm,lights_fragment_end:Om,logdepthbuf_fragment:Fm,logdepthbuf_pars_fragment:zm,logdepthbuf_pars_vertex:Bm,logdepthbuf_vertex:km,map_fragment:Hm,map_pars_fragment:Vm,map_particle_fragment:Gm,map_particle_pars_fragment:Wm,metalnessmap_fragment:Xm,metalnessmap_pars_fragment:qm,morphcolor_vertex:Ym,morphnormal_vertex:Zm,morphtarget_pars_vertex:$m,morphtarget_vertex:Jm,normal_fragment_begin:Km,normal_fragment_maps:Qm,normal_pars_fragment:jm,normal_pars_vertex:e0,normal_vertex:t0,normalmap_pars_fragment:n0,clearcoat_normal_fragment_begin:i0,clearcoat_normal_fragment_maps:s0,clearcoat_pars_fragment:r0,iridescence_pars_fragment:o0,opaque_fragment:a0,packing:c0,premultiplied_alpha_fragment:l0,project_vertex:h0,dithering_fragment:u0,dithering_pars_fragment:d0,roughnessmap_fragment:f0,roughnessmap_pars_fragment:p0,shadowmap_pars_fragment:m0,shadowmap_pars_vertex:g0,shadowmap_vertex:_0,shadowmask_pars_fragment:y0,skinbase_vertex:x0,skinning_pars_vertex:v0,skinning_vertex:M0,skinnormal_vertex:b0,specularmap_fragment:S0,specularmap_pars_fragment:w0,tonemapping_fragment:E0,tonemapping_pars_fragment:T0,transmission_fragment:A0,transmission_pars_fragment:R0,uv_pars_fragment:C0,uv_pars_vertex:P0,uv_vertex:L0,worldpos_vertex:I0,background_vert:D0,background_frag:U0,backgroundCube_vert:N0,backgroundCube_frag:O0,cube_vert:F0,cube_frag:z0,depth_vert:B0,depth_frag:k0,distanceRGBA_vert:H0,distanceRGBA_frag:V0,equirect_vert:G0,equirect_frag:W0,linedashed_vert:X0,linedashed_frag:q0,meshbasic_vert:Y0,meshbasic_frag:Z0,meshlambert_vert:$0,meshlambert_frag:J0,meshmatcap_vert:K0,meshmatcap_frag:Q0,meshnormal_vert:j0,meshnormal_frag:eg,meshphong_vert:tg,meshphong_frag:ng,meshphysical_vert:ig,meshphysical_frag:sg,meshtoon_vert:rg,meshtoon_frag:og,points_vert:ag,points_frag:cg,shadow_vert:lg,shadow_frag:hg,sprite_vert:ug,sprite_frag:dg},oe={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},yn={basic:{uniforms:Ht([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Ht([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new ge(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Ht([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Ht([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Ht([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new ge(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Ht([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Ht([oe.points,oe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Ht([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Ht([oe.common,oe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Ht([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Ht([oe.sprite,oe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Ht([oe.common,oe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Ht([oe.lights,oe.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};yn.physical={uniforms:Ht([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var Rr={r:0,b:0,g:0};function fg(n,e,t,i,s,r,o){let a=new ge(0),c=r===!0?0:1,l,h,u=null,f=0,p=null;function g(m,d){let x=!1,y=d.isScene===!0?d.background:null;y&&y.isTexture&&(y=(d.backgroundBlurriness>0?t:e).get(y)),y===null?_(a,c):y&&y.isColor&&(_(y,1),x=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===bo)?(h===void 0&&(h=new Pe(new Si(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:ds(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=nt.getTransfer(y.colorSpace)!==ct,(u!==y||f!==y.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,p=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Pe(new Mn(2,2),new fn({name:"BackgroundMaterial",uniforms:ds(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=nt.getTransfer(y.colorSpace)!==ct,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,p=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,d){m.getRGB(Rr,Eu(n)),i.buffers.color.setClear(Rr.r,Rr.g,Rr.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),c=d,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function pg(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function u(P,F,W,J,Z){let Y=!1;if(o){let ee=_(J,W,F);l!==ee&&(l=ee,p(l.object)),Y=d(P,J,W,Z),Y&&x(P,J,W,Z)}else{let ee=F.wireframe===!0;(l.geometry!==J.id||l.program!==W.id||l.wireframe!==ee)&&(l.geometry=J.id,l.program=W.id,l.wireframe=ee,Y=!0)}Z!==null&&t.update(Z,n.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,I(P,F,W,J),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(P){return i.isWebGL2?n.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?n.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,F,W){let J=W.wireframe===!0,Z=a[P.id];Z===void 0&&(Z={},a[P.id]=Z);let Y=Z[F.id];Y===void 0&&(Y={},Z[F.id]=Y);let ee=Y[J];return ee===void 0&&(ee=m(f()),Y[J]=ee),ee}function m(P){let F=[],W=[],J=[];for(let Z=0;Z<s;Z++)F[Z]=0,W[Z]=0,J[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:J,object:P,attributes:{},index:null}}function d(P,F,W,J){let Z=l.attributes,Y=F.attributes,ee=0,ie=W.getAttributes();for(let de in ie)if(ie[de].location>=0){let K=Z[de],ue=Y[de];if(ue===void 0&&(de==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),de==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor)),K===void 0||K.attribute!==ue||ue&&K.data!==ue.data)return!0;ee++}return l.attributesNum!==ee||l.index!==J}function x(P,F,W,J){let Z={},Y=F.attributes,ee=0,ie=W.getAttributes();for(let de in ie)if(ie[de].location>=0){let K=Y[de];K===void 0&&(de==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),de==="instanceColor"&&P.instanceColor&&(K=P.instanceColor));let ue={};ue.attribute=K,K&&K.data&&(ue.data=K.data),Z[de]=ue,ee++}l.attributes=Z,l.attributesNum=ee,l.index=J}function y(){let P=l.newAttributes;for(let F=0,W=P.length;F<W;F++)P[F]=0}function b(P){R(P,0)}function R(P,F){let W=l.newAttributes,J=l.enabledAttributes,Z=l.attributeDivisors;W[P]=1,J[P]===0&&(n.enableVertexAttribArray(P),J[P]=1),Z[P]!==F&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,F),Z[P]=F)}function T(){let P=l.newAttributes,F=l.enabledAttributes;for(let W=0,J=F.length;W<J;W++)F[W]!==P[W]&&(n.disableVertexAttribArray(W),F[W]=0)}function A(P,F,W,J,Z,Y,ee){ee===!0?n.vertexAttribIPointer(P,F,W,Z,Y):n.vertexAttribPointer(P,F,W,J,Z,Y)}function I(P,F,W,J){if(i.isWebGL2===!1&&(P.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let Z=J.attributes,Y=W.getAttributes(),ee=F.defaultAttributeValues;for(let ie in Y){let de=Y[ie];if(de.location>=0){let G=Z[ie];if(G===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&(G=P.instanceColor)),G!==void 0){let K=G.normalized,ue=G.itemSize,Me=t.get(G);if(Me===void 0)continue;let xe=Me.buffer,Ne=Me.type,Oe=Me.bytesPerElement,Ae=i.isWebGL2===!0&&(Ne===n.INT||Ne===n.UNSIGNED_INT||G.gpuType===pu);if(G.isInterleavedBufferAttribute){let Qe=G.data,N=Qe.stride,Rt=G.offset;if(Qe.isInstancedInterleavedBuffer){for(let we=0;we<de.locationSize;we++)R(de.location+we,Qe.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Qe.meshPerAttribute*Qe.count)}else for(let we=0;we<de.locationSize;we++)b(de.location+we);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let we=0;we<de.locationSize;we++)A(de.location+we,ue/de.locationSize,Ne,K,N*Oe,(Rt+ue/de.locationSize*we)*Oe,Ae)}else{if(G.isInstancedBufferAttribute){for(let Qe=0;Qe<de.locationSize;Qe++)R(de.location+Qe,G.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Qe=0;Qe<de.locationSize;Qe++)b(de.location+Qe);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let Qe=0;Qe<de.locationSize;Qe++)A(de.location+Qe,ue/de.locationSize,Ne,K,ue*Oe,ue/de.locationSize*Qe*Oe,Ae)}}else if(ee!==void 0){let K=ee[ie];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(de.location,K);break;case 3:n.vertexAttrib3fv(de.location,K);break;case 4:n.vertexAttrib4fv(de.location,K);break;default:n.vertexAttrib1fv(de.location,K)}}}}T()}function M(){V();for(let P in a){let F=a[P];for(let W in F){let J=F[W];for(let Z in J)g(J[Z].object),delete J[Z];delete F[W]}delete a[P]}}function E(P){if(a[P.id]===void 0)return;let F=a[P.id];for(let W in F){let J=F[W];for(let Z in J)g(J[Z].object),delete J[Z];delete F[W]}delete a[P.id]}function O(P){for(let F in a){let W=a[F];if(W[P.id]===void 0)continue;let J=W[P.id];for(let Z in J)g(J[Z].object),delete J[Z];delete W[P.id]}}function V(){q(),h=!0,l!==c&&(l=c,p(l.object))}function q(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:V,resetDefaultState:q,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:O,initAttributes:y,enableAttribute:b,disableUnusedAttributes:T}}function mg(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,f){if(f===0)return;let p,g;if(s)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,f),t.update(u,r,f)}function l(h,u,f){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function gg(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,b=o||e.has("OES_texture_float"),R=y&&b,T=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:x,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:R,maxSamples:T}}function _g(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Dn,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||i!==0||s;return s=f,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let x=r?0:i,y=x*4,b=d.clippingState||null;c.value=b,b=h(g,f,y,p);for(let R=0;R!==y;++R)b[R]=t[R];d.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,p,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let d=p+_*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,b=p;y!==_;++y,b+=4)o.copy(u[y]).applyMatrix4(x,a),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function yg(n){let e=new WeakMap;function t(o,a){return a===za?o.mapping=as:a===Ba&&(o.mapping=cs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===za||a===Ba)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Ya(c.height/2);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Kr=class extends $r{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ns=4,Dh=[.125,.215,.35,.446,.526,.582],_i=20,Ea=new Kr,Uh=new ge,Ta=null,Aa=0,Ra=0,mi=(1+Math.sqrt(5))/2,es=1/mi,Nh=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,mi,es),new C(0,mi,-es),new C(es,0,mi),new C(-es,0,mi),new C(mi,es,0),new C(-mi,es,0)],Qr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ta,Aa,Ra),e.scissorTest=!1,Cr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===as||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Os,format:dn,colorSpace:Nn,depthBuffer:!1},s=Oh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oh(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xg(r)),this._blurMaterial=vg(r,e,t)}return s}_compileMaterial(e){let t=new Pe(this._lodPlanes[0],e);this._renderer.compile(t,Ea)}_sceneToCubeUV(e,t,i,s){let a=new Ft(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Uh),h.toneMapping=Zn,h.autoClear=!1;let p=new Mt({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),g=new Pe(new Si,p),_=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Uh),_=!0);for(let d=0;d<6;d++){let x=d%3;x===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):x===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));let y=this._cubeSize;Cr(s,x*y,d>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===as||e.mapping===cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Pe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Cr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Ea)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Nh[(s-1)%Nh.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Pe(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*_i-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):_i;m>_i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_i}`);let d=[],x=0;for(let A=0;A<_i;++A){let I=A/_,M=Math.exp(-I*I/2);d.push(M),A===0?x+=M:A<m&&(x+=2*M)}for(let A=0;A<d.length;A++)d[A]=d[A]/x;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;let b=this._sizeLods[s],R=3*b*(s>y-ns?s-y+ns:0),T=4*(this._cubeSize-b);Cr(t,R,T,3*b,2*b),c.setRenderTarget(t),c.render(u,Ea)}};function xg(n){let e=[],t=[],i=[],s=n,r=n-ns+1+Dh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>n-ns?c=Dh[o-n+ns-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,x=new Float32Array(_*g*p),y=new Float32Array(m*g*p),b=new Float32Array(d*g*p);for(let T=0;T<p;T++){let A=T%3*2/3-1,I=T>2?0:-1,M=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];x.set(M,_*g*T),y.set(f,m*g*T);let E=[T,T,T,T,T,T];b.set(E,d*g*T)}let R=new _t;R.setAttribute("position",new Wt(x,_)),R.setAttribute("uv",new Wt(y,m)),R.setAttribute("faceIndex",new Wt(b,d)),e.push(R),s>ns&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Oh(n,e,t){let i=new On(n,e,t);return i.texture.mapping=bo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function vg(n,e,t){let i=new Float32Array(_i),s=new C(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Fh(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function zh(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Uc(){return`

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
	`}function Mg(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===za||c===Ba,h=c===as||c===cs;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Qr(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new Qr(n));let f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function bg(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Sg(n,e,t,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],n.ARRAY_BUFFER)}}function l(u){let f=[],p=u.index,g=u.attributes.position,_=0;if(p!==null){let x=p.array;_=p.version;for(let y=0,b=x.length;y<b;y+=3){let R=x[y+0],T=x[y+1],A=x[y+2];f.push(R,T,T,A,A,R)}}else if(g!==void 0){let x=g.array;_=g.version;for(let y=0,b=x.length/3-1;y<b;y+=3){let R=y+0,T=y+1,A=y+2;f.push(R,T,T,A,A,R)}}else return;let m=new(Su(f)?Zr:Yr)(f,1);m.version=_;let d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function wg(n,e,t,i){let s=i.isWebGL2,r;function o(p){r=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function h(p,g){n.drawElements(r,g,a,p*c),t.update(g,r,1)}function u(p,g,_){if(_===0)return;let m,d;if(s)m=n,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,g,a,p*c,_),t.update(g,r,_)}function f(p,g,_){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<_;d++)this.render(p[d]/c,g[d]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,_);let d=0;for(let x=0;x<_;x++)d+=g[x];t.update(d,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Eg(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Tg(n,e){return n[0]-e[0]}function Ag(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Rg(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new ut,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let f=l.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,_=r.get(h);if(_===void 0||_.count!==g){let P=function(){V.dispose(),r.delete(h),h.removeEventListener("dispose",P)};_!==void 0&&_.texture.dispose();let x=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],I=0;x===!0&&(I=1),y===!0&&(I=2),b===!0&&(I=3);let M=h.attributes.position.count*I,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let O=new Float32Array(M*E*4*g),V=new qr(O,M,E,g);V.type=qn,V.needsUpdate=!0;let q=I*4;for(let F=0;F<g;F++){let W=R[F],J=T[F],Z=A[F],Y=M*E*4*F;for(let ee=0;ee<W.count;ee++){let ie=ee*q;x===!0&&(o.fromBufferAttribute(W,ee),O[Y+ie+0]=o.x,O[Y+ie+1]=o.y,O[Y+ie+2]=o.z,O[Y+ie+3]=0),y===!0&&(o.fromBufferAttribute(J,ee),O[Y+ie+4]=o.x,O[Y+ie+5]=o.y,O[Y+ie+6]=o.z,O[Y+ie+7]=0),b===!0&&(o.fromBufferAttribute(Z,ee),O[Y+ie+8]=o.x,O[Y+ie+9]=o.y,O[Y+ie+10]=o.z,O[Y+ie+11]=Z.itemSize===4?o.w:1)}}_={count:g,texture:V,size:new fe(M,E)},r.set(h,_),h.addEventListener("dispose",P)}let m=0;for(let x=0;x<f.length;x++)m+=f[x];let d=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",d),u.getUniforms().setValue(n,"morphTargetInfluences",f),u.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{let p=f===void 0?0:f.length,g=i[h.id];if(g===void 0||g.length!==p){g=[];for(let y=0;y<p;y++)g[y]=[y,0];i[h.id]=g}for(let y=0;y<p;y++){let b=g[y];b[0]=y,b[1]=f[y]}g.sort(Ag);for(let y=0;y<8;y++)y<p&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Tg);let _=h.morphAttributes.position,m=h.morphAttributes.normal,d=0;for(let y=0;y<8;y++){let b=a[y],R=b[0],T=b[1];R!==Number.MAX_SAFE_INTEGER&&T?(_&&h.getAttribute("morphTarget"+y)!==_[R]&&h.setAttribute("morphTarget"+y,_[R]),m&&h.getAttribute("morphNormal"+y)!==m[R]&&h.setAttribute("morphNormal"+y,m[R]),s[y]=T,d+=T):(_&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}let x=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(n,"morphTargetBaseInfluence",x),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function Cg(n,e,t,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var jr=class extends en{constructor(e,t,i,s,r,o,a,c,l,h){if(h=h!==void 0?h:xi,h!==xi&&h!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===xi&&(i=Xn),i===void 0&&h===ls&&(i=yi),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Vt,this.minFilter=c!==void 0?c:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Au=new en,Ru=new jr(1,1);Ru.compareFunction=bu;var Cu=new qr,Pu=new Xa,Lu=new Jr,Bh=[],kh=[],Hh=new Float32Array(16),Vh=new Float32Array(9),Gh=new Float32Array(4);function ms(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Bh[s];if(r===void 0&&(r=new Float32Array(s),Bh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function St(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function wo(n,e){let t=kh[e];t===void 0&&(t=new Int32Array(e),kh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Pg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Lg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2fv(this.addr,e),St(t,e)}}function Ig(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;n.uniform3fv(this.addr,e),St(t,e)}}function Dg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4fv(this.addr,e),St(t,e)}}function Ug(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(bt(t,i))return;Gh.set(i),n.uniformMatrix2fv(this.addr,!1,Gh),St(t,i)}}function Ng(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(bt(t,i))return;Vh.set(i),n.uniformMatrix3fv(this.addr,!1,Vh),St(t,i)}}function Og(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(bt(t,i))return;Hh.set(i),n.uniformMatrix4fv(this.addr,!1,Hh),St(t,i)}}function Fg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function zg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2iv(this.addr,e),St(t,e)}}function Bg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3iv(this.addr,e),St(t,e)}}function kg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4iv(this.addr,e),St(t,e)}}function Hg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Vg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2uiv(this.addr,e),St(t,e)}}function Gg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3uiv(this.addr,e),St(t,e)}}function Wg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4uiv(this.addr,e),St(t,e)}}function Xg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Ru:Au;t.setTexture2D(e||r,s)}function qg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Pu,s)}function Yg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Lu,s)}function Zg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Cu,s)}function $g(n){switch(n){case 5126:return Pg;case 35664:return Lg;case 35665:return Ig;case 35666:return Dg;case 35674:return Ug;case 35675:return Ng;case 35676:return Og;case 5124:case 35670:return Fg;case 35667:case 35671:return zg;case 35668:case 35672:return Bg;case 35669:case 35673:return kg;case 5125:return Hg;case 36294:return Vg;case 36295:return Gg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return Zg}}function Jg(n,e){n.uniform1fv(this.addr,e)}function Kg(n,e){let t=ms(e,this.size,2);n.uniform2fv(this.addr,t)}function Qg(n,e){let t=ms(e,this.size,3);n.uniform3fv(this.addr,t)}function jg(n,e){let t=ms(e,this.size,4);n.uniform4fv(this.addr,t)}function e_(n,e){let t=ms(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function t_(n,e){let t=ms(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function n_(n,e){let t=ms(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function i_(n,e){n.uniform1iv(this.addr,e)}function s_(n,e){n.uniform2iv(this.addr,e)}function r_(n,e){n.uniform3iv(this.addr,e)}function o_(n,e){n.uniform4iv(this.addr,e)}function a_(n,e){n.uniform1uiv(this.addr,e)}function c_(n,e){n.uniform2uiv(this.addr,e)}function l_(n,e){n.uniform3uiv(this.addr,e)}function h_(n,e){n.uniform4uiv(this.addr,e)}function u_(n,e,t){let i=this.cache,s=e.length,r=wo(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),St(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Au,r[o])}function d_(n,e,t){let i=this.cache,s=e.length,r=wo(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),St(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Pu,r[o])}function f_(n,e,t){let i=this.cache,s=e.length,r=wo(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),St(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Lu,r[o])}function p_(n,e,t){let i=this.cache,s=e.length,r=wo(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),St(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Cu,r[o])}function m_(n){switch(n){case 5126:return Jg;case 35664:return Kg;case 35665:return Qg;case 35666:return jg;case 35674:return e_;case 35675:return t_;case 35676:return n_;case 5124:case 35670:return i_;case 35667:case 35671:return s_;case 35668:case 35672:return r_;case 35669:case 35673:return o_;case 5125:return a_;case 36294:return c_;case 36295:return l_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return d_;case 35680:case 36300:case 36308:case 36293:return f_;case 36289:case 36303:case 36311:case 36292:return p_}}var Za=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$g(t.type)}},$a=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=m_(t.type)}},Ja=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Ca=/(\w+)(\])?(\[|\.)?/g;function Wh(n,e){n.seq.push(e),n.map[e.id]=e}function g_(n,e,t){let i=n.name,s=i.length;for(Ca.lastIndex=0;;){let r=Ca.exec(i),o=Ca.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Wh(t,l===void 0?new Za(a,n,e):new $a(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Ja(a),Wh(t,u)),t=u}}}var os=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);g_(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Xh(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var __=37297,y_=0;function x_(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function v_(n){let e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(n),i;switch(e===t?i="":e===Hr&&t===kr?i="LinearDisplayP3ToLinearSRGB":e===kr&&t===Hr&&(i="LinearSRGBToLinearDisplayP3"),n){case Nn:case So:return[i,"LinearTransferOETF"];case gt:case Dc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function qh(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+x_(n.getShaderSource(e),o)}else return s}function M_(n,e){let t=v_(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function b_(n,e){let t;switch(e){case Hf:t="Linear";break;case Vf:t="Reinhard";break;case Gf:t="OptimizedCineon";break;case Pc:t="ACESFilmic";break;case Xf:t="AgX";break;case Wf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function S_(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(is).join(`
`)}function w_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(is).join(`
`)}function E_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function T_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function is(n){return n!==""}function Yh(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var A_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ka(n){return n.replace(A_,C_)}var R_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function C_(n,e){let t=Ge[e];if(t===void 0){let i=R_.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ka(t)}var P_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $h(n){return n.replace(P_,L_)}function L_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jh(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function I_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vo?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===mf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===In&&(e="SHADOWMAP_TYPE_VSM"),e}function D_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case as:case cs:e="ENVMAP_TYPE_CUBE";break;case bo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function U_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case cs:e="ENVMAP_MODE_REFRACTION";break}return e}function N_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Mo:e="ENVMAP_BLENDING_MULTIPLY";break;case Bf:e="ENVMAP_BLENDING_MIX";break;case kf:e="ENVMAP_BLENDING_ADD";break}return e}function O_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function F_(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=I_(t),l=D_(t),h=U_(t),u=N_(t),f=O_(t),p=t.isWebGL2?"":S_(t),g=w_(t),_=E_(r),m=s.createProgram(),d,x,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(is).join(`
`),d.length>0&&(d+=`
`),x=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(is).join(`
`),x.length>0&&(x+=`
`)):(d=[Jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),x=[p,Jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Zn?b_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,M_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(is).join(`
`)),o=Ka(o),o=Yh(o,t),o=Zh(o,t),a=Ka(a),a=Yh(a,t),a=Zh(a,t),o=$h(o),a=$h(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let b=y+d+o,R=y+x+a,T=Xh(s,s.VERTEX_SHADER,b),A=Xh(s,s.FRAGMENT_SHADER,R);s.attachShader(m,T),s.attachShader(m,A),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function I(V){if(n.debug.checkShaderErrors){let q=s.getProgramInfoLog(m).trim(),P=s.getShaderInfoLog(T).trim(),F=s.getShaderInfoLog(A).trim(),W=!0,J=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,T,A);else{let Z=qh(s,T,"vertex"),Y=qh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+Z+`
`+Y)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(P===""||F==="")&&(J=!1);J&&(V.diagnostics={runnable:W,programLog:q,vertexShader:{log:P,prefix:d},fragmentShader:{log:F,prefix:x}})}s.deleteShader(T),s.deleteShader(A),M=new os(s,m),E=T_(s,m)}let M;this.getUniforms=function(){return M===void 0&&I(this),M};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(m,__)),O},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=y_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=A,this}var z_=0,Qa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ja(e),t.set(e,i)),i}},ja=class{constructor(e){this.id=z_++,this.code=e,this.usedTimes=0}};function B_(n,e,t,i,s,r,o){let a=new Fs,c=new Qa,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,E,O,V,q){let P=V.fog,F=q.geometry,W=M.isMeshStandardMaterial?V.environment:null,J=(M.isMeshStandardMaterial?t:e).get(M.envMap||W),Z=J&&J.mapping===bo?J.image.height:null,Y=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let ee=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ie=ee!==void 0?ee.length:0,de=0;F.morphAttributes.position!==void 0&&(de=1),F.morphAttributes.normal!==void 0&&(de=2),F.morphAttributes.color!==void 0&&(de=3);let G,K,ue,Me;if(Y){let Bt=yn[Y];G=Bt.vertexShader,K=Bt.fragmentShader}else G=M.vertexShader,K=M.fragmentShader,c.update(M),ue=c.getVertexShaderID(M),Me=c.getFragmentShaderID(M);let xe=n.getRenderTarget(),Ne=q.isInstancedMesh===!0,Oe=q.isBatchedMesh===!0,Ae=!!M.map,Qe=!!M.matcap,N=!!J,Rt=!!M.aoMap,we=!!M.lightMap,Ue=!!M.bumpMap,$=!!M.normalMap,be=!!M.displacementMap,ve=!!M.emissiveMap,S=!!M.metalnessMap,v=!!M.roughnessMap,z=M.anisotropy>0,Q=M.clearcoat>0,j=M.iridescence>0,ne=M.sheen>0,le=M.transmission>0,he=z&&!!M.anisotropyMap,_e=Q&&!!M.clearcoatMap,Le=Q&&!!M.clearcoatNormalMap,Xe=Q&&!!M.clearcoatRoughnessMap,te=j&&!!M.iridescenceMap,tt=j&&!!M.iridescenceThicknessMap,Je=ne&&!!M.sheenColorMap,Fe=ne&&!!M.sheenRoughnessMap,Ee=!!M.specularMap,ye=!!M.specularColorMap,Ve=!!M.specularIntensityMap,et=le&&!!M.transmissionMap,pt=le&&!!M.thicknessMap,Ye=!!M.gradientMap,re=!!M.alphaMap,L=M.alphaTest>0,ae=!!M.alphaHash,ce=!!M.extensions,Ie=!!F.attributes.uv1,Re=!!F.attributes.uv2,st=!!F.attributes.uv3,rt=Zn;return M.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(rt=n.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:G,fragmentShader:K,defines:M.defines,customVertexShaderID:ue,customFragmentShaderID:Me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Oe,instancing:Ne,instancingColor:Ne&&q.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:xe===null?n.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Nn,map:Ae,matcap:Qe,envMap:N,envMapMode:N&&J.mapping,envMapCubeUVHeight:Z,aoMap:Rt,lightMap:we,bumpMap:Ue,normalMap:$,displacementMap:f&&be,emissiveMap:ve,normalMapObjectSpace:$&&M.normalMapType===ip,normalMapTangentSpace:$&&M.normalMapType===Ic,metalnessMap:S,roughnessMap:v,anisotropy:z,anisotropyMap:he,clearcoat:Q,clearcoatMap:_e,clearcoatNormalMap:Le,clearcoatRoughnessMap:Xe,iridescence:j,iridescenceMap:te,iridescenceThicknessMap:tt,sheen:ne,sheenColorMap:Je,sheenRoughnessMap:Fe,specularMap:Ee,specularColorMap:ye,specularIntensityMap:Ve,transmission:le,transmissionMap:et,thicknessMap:pt,gradientMap:Ye,opaque:M.transparent===!1&&M.blending===ss,alphaMap:re,alphaTest:L,alphaHash:ae,combine:M.combine,mapUv:Ae&&_(M.map.channel),aoMapUv:Rt&&_(M.aoMap.channel),lightMapUv:we&&_(M.lightMap.channel),bumpMapUv:Ue&&_(M.bumpMap.channel),normalMapUv:$&&_(M.normalMap.channel),displacementMapUv:be&&_(M.displacementMap.channel),emissiveMapUv:ve&&_(M.emissiveMap.channel),metalnessMapUv:S&&_(M.metalnessMap.channel),roughnessMapUv:v&&_(M.roughnessMap.channel),anisotropyMapUv:he&&_(M.anisotropyMap.channel),clearcoatMapUv:_e&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Le&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&_(M.sheenRoughnessMap.channel),specularMapUv:Ee&&_(M.specularMap.channel),specularColorMapUv:ye&&_(M.specularColorMap.channel),specularIntensityMapUv:Ve&&_(M.specularIntensityMap.channel),transmissionMapUv:et&&_(M.transmissionMap.channel),thicknessMapUv:pt&&_(M.thicknessMap.channel),alphaMapUv:re&&_(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&($||z),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Ie,vertexUv2s:Re,vertexUv3s:st,pointsUvs:q.isPoints===!0&&!!F.attributes.uv&&(Ae||re),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:q.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:de,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:rt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ae&&M.map.isVideoTexture===!0&&nt.getTransfer(M.map.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===hn,flipSided:M.side===zt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ce&&M.extensions.derivatives===!0,extensionFragDepth:ce&&M.extensions.fragDepth===!0,extensionDrawBuffers:ce&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ce&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let O in M.defines)E.push(O),E.push(M.defines[O]);return M.isRawShaderMaterial===!1&&(x(E,M),y(E,M),E.push(n.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function x(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function y(M,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function b(M){let E=g[M.type],O;if(E){let V=yn[E];O=Rp.clone(V.uniforms)}else O=M.uniforms;return O}function R(M,E){let O;for(let V=0,q=l.length;V<q;V++){let P=l[V];if(P.cacheKey===E){O=P,++O.usedTimes;break}}return O===void 0&&(O=new F_(n,E,M,r),l.push(O)),O}function T(M){if(--M.usedTimes===0){let E=l.indexOf(M);l[E]=l[l.length-1],l.pop(),M.destroy()}}function A(M){c.remove(M)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:b,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:l,dispose:I}}function k_(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function H_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Kh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Qh(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,p,g,_,m){let d=n[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),e++,d}function a(u,f,p,g,_,m){let d=o(u,f,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):t.push(d)}function c(u,f,p,g,_,m){let d=o(u,f,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function l(u,f){t.length>1&&t.sort(u||H_),i.length>1&&i.sort(f||Kh),s.length>1&&s.sort(f||Kh)}function h(){for(let u=e,f=n.length;u<f;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function V_(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Qh,n.set(i,[o])):s>=r.length?(o=new Qh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function G_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new ge};break;case"SpotLight":t={position:new C,direction:new C,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function W_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var X_=0;function q_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Y_(n,e){let t=new G_,i=W_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new C);let r=new C,o=new dt,a=new dt;function c(h,u){let f=0,p=0,g=0;for(let V=0;V<9;V++)s.probe[V].set(0,0,0);let _=0,m=0,d=0,x=0,y=0,b=0,R=0,T=0,A=0,I=0,M=0;h.sort(q_);let E=u===!0?Math.PI:1;for(let V=0,q=h.length;V<q;V++){let P=h[V],F=P.color,W=P.intensity,J=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=F.r*W*E,p+=F.g*W*E,g+=F.b*W*E;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(P.sh.coefficients[Y],W);M++}else if(P.isDirectionalLight){let Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity*E),P.castShadow){let ee=P.shadow,ie=i.get(P);ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,s.directionalShadow[_]=ie,s.directionalShadowMap[_]=Z,s.directionalShadowMatrix[_]=P.shadow.matrix,b++}s.directional[_]=Y,_++}else if(P.isSpotLight){let Y=t.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(F).multiplyScalar(W*E),Y.distance=J,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,s.spot[d]=Y;let ee=P.shadow;if(P.map&&(s.spotLightMap[A]=P.map,A++,ee.updateMatrices(P),P.castShadow&&I++),s.spotLightMatrix[d]=ee.matrix,P.castShadow){let ie=i.get(P);ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,s.spotShadow[d]=ie,s.spotShadowMap[d]=Z,T++}d++}else if(P.isRectAreaLight){let Y=t.get(P);Y.color.copy(F).multiplyScalar(W),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),s.rectArea[x]=Y,x++}else if(P.isPointLight){let Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity*E),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){let ee=P.shadow,ie=i.get(P);ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,ie.shadowCameraNear=ee.camera.near,ie.shadowCameraFar=ee.camera.far,s.pointShadow[m]=ie,s.pointShadowMap[m]=Z,s.pointShadowMatrix[m]=P.shadow.matrix,R++}s.point[m]=Y,m++}else if(P.isHemisphereLight){let Y=t.get(P);Y.skyColor.copy(P.color).multiplyScalar(W*E),Y.groundColor.copy(P.groundColor).multiplyScalar(W*E),s.hemi[y]=Y,y++}}x>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=oe.LTC_FLOAT_1,s.rectAreaLTC2=oe.LTC_FLOAT_2):(s.rectAreaLTC1=oe.LTC_HALF_1,s.rectAreaLTC2=oe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=oe.LTC_FLOAT_1,s.rectAreaLTC2=oe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=oe.LTC_HALF_1,s.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=g;let O=s.hash;(O.directionalLength!==_||O.pointLength!==m||O.spotLength!==d||O.rectAreaLength!==x||O.hemiLength!==y||O.numDirectionalShadows!==b||O.numPointShadows!==R||O.numSpotShadows!==T||O.numSpotMaps!==A||O.numLightProbes!==M)&&(s.directional.length=_,s.spot.length=d,s.rectArea.length=x,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=T+A-I,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=M,O.directionalLength=_,O.pointLength=m,O.spotLength=d,O.rectAreaLength=x,O.hemiLength=y,O.numDirectionalShadows=b,O.numPointShadows=R,O.numSpotShadows=T,O.numSpotMaps=A,O.numLightProbes=M,s.version=X_++)}function l(h,u){let f=0,p=0,g=0,_=0,m=0,d=u.matrixWorldInverse;for(let x=0,y=h.length;x<y;x++){let b=h[x];if(b.isDirectionalLight){let R=s.directional[f];R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(d),f++}else if(b.isSpotLight){let R=s.spot[g];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(d),R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(d),g++}else if(b.isRectAreaLight){let R=s.rectArea[_];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(d),a.identity(),o.copy(b.matrixWorld),o.premultiply(d),a.extractRotation(o),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){let R=s.point[p];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(d),p++}else if(b.isHemisphereLight){let R=s.hemi[m];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(d),m++}}}return{setup:c,setupView:l,state:s}}function jh(n,e){let t=new Y_(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function c(u){t.setup(i,u)}function l(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Z_(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),c;return a===void 0?(c=new jh(n,e),t.set(r,[c])):o>=a.length?(c=new jh(n,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:i,dispose:s}}var ec=class extends vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},tc=class extends vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},$_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J_=`uniform sampler2D shadow_pass;
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
}`;function K_(n,e,t){let i=new zs,s=new fe,r=new fe,o=new ut,a=new ec({depthPacking:np}),c=new tc,l={},h=t.maxTextureSize,u={[Jn]:zt,[zt]:Jn,[hn]:hn},f=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:$_,fragmentShader:J_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new _t;g.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Pe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vo;let d=this.type;this.render=function(T,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let M=n.getRenderTarget(),E=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Yn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let q=d!==In&&this.type===In,P=d===In&&this.type!==In;for(let F=0,W=T.length;F<W;F++){let J=T[F],Z=J.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let Y=Z.getFrameExtents();if(s.multiply(Y),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,Z.mapSize.y=r.y)),Z.map===null||q===!0||P===!0){let ie=this.type!==In?{minFilter:Vt,magFilter:Vt}:{};Z.map!==null&&Z.map.dispose(),Z.map=new On(s.x,s.y,ie),Z.map.texture.name=J.name+".shadowMap",Z.camera.updateProjectionMatrix()}n.setRenderTarget(Z.map),n.clear();let ee=Z.getViewportCount();for(let ie=0;ie<ee;ie++){let de=Z.getViewport(ie);o.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),V.viewport(o),Z.updateMatrices(J,ie),i=Z.getFrustum(),b(A,I,Z.camera,J,this.type)}Z.isPointLightShadow!==!0&&this.type===In&&x(Z,I),Z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(M,E,O)};function x(T,A){let I=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new On(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(A,null,I,f,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(A,null,I,p,_,null)}function y(T,A,I,M){let E=null,O=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(O!==void 0)E=O;else if(E=I.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let V=E.uuid,q=A.uuid,P=l[V];P===void 0&&(P={},l[V]=P);let F=P[q];F===void 0&&(F=E.clone(),P[q]=F,A.addEventListener("dispose",R)),E=F}if(E.visible=A.visible,E.wireframe=A.wireframe,M===In?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:u[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let V=n.properties.get(E);V.light=I}return E}function b(T,A,I,M,E){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===In)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let q=e.update(T),P=T.material;if(Array.isArray(P)){let F=q.groups;for(let W=0,J=F.length;W<J;W++){let Z=F[W],Y=P[Z.materialIndex];if(Y&&Y.visible){let ee=y(T,Y,M,E);T.onBeforeShadow(n,T,A,I,q,ee,Z),n.renderBufferDirect(I,null,q,ee,T,Z),T.onAfterShadow(n,T,A,I,q,ee,Z)}}}else if(P.visible){let F=y(T,P,M,E);T.onBeforeShadow(n,T,A,I,q,F,null),n.renderBufferDirect(I,null,q,F,T,null),T.onAfterShadow(n,T,A,I,q,F,null)}}let V=T.children;for(let q=0,P=V.length;q<P;q++)b(V[q],A,I,M,E)}function R(T){T.target.removeEventListener("dispose",R);for(let I in l){let M=l[I],E=T.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function Q_(n,e,t){let i=t.isWebGL2;function s(){let L=!1,ae=new ut,ce=null,Ie=new ut(0,0,0,0);return{setMask:function(Re){ce!==Re&&!L&&(n.colorMask(Re,Re,Re,Re),ce=Re)},setLocked:function(Re){L=Re},setClear:function(Re,st,rt,Et,Bt){Bt===!0&&(Re*=Et,st*=Et,rt*=Et),ae.set(Re,st,rt,Et),Ie.equals(ae)===!1&&(n.clearColor(Re,st,rt,Et),Ie.copy(ae))},reset:function(){L=!1,ce=null,Ie.set(-1,0,0,0)}}}function r(){let L=!1,ae=null,ce=null,Ie=null;return{setTest:function(Re){Re?Oe(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(Re){ae!==Re&&!L&&(n.depthMask(Re),ae=Re)},setFunc:function(Re){if(ce!==Re){switch(Re){case If:n.depthFunc(n.NEVER);break;case Df:n.depthFunc(n.ALWAYS);break;case Uf:n.depthFunc(n.LESS);break;case Or:n.depthFunc(n.LEQUAL);break;case Nf:n.depthFunc(n.EQUAL);break;case Of:n.depthFunc(n.GEQUAL);break;case Ff:n.depthFunc(n.GREATER);break;case zf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=Re}},setLocked:function(Re){L=Re},setClear:function(Re){Ie!==Re&&(n.clearDepth(Re),Ie=Re)},reset:function(){L=!1,ae=null,ce=null,Ie=null}}}function o(){let L=!1,ae=null,ce=null,Ie=null,Re=null,st=null,rt=null,Et=null,Bt=null;return{setTest:function(ot){L||(ot?Oe(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(ot){ae!==ot&&!L&&(n.stencilMask(ot),ae=ot)},setFunc:function(ot,kt,_n){(ce!==ot||Ie!==kt||Re!==_n)&&(n.stencilFunc(ot,kt,_n),ce=ot,Ie=kt,Re=_n)},setOp:function(ot,kt,_n){(st!==ot||rt!==kt||Et!==_n)&&(n.stencilOp(ot,kt,_n),st=ot,rt=kt,Et=_n)},setLocked:function(ot){L=ot},setClear:function(ot){Bt!==ot&&(n.clearStencil(ot),Bt=ot)},reset:function(){L=!1,ae=null,ce=null,Ie=null,Re=null,st=null,rt=null,Et=null,Bt=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,f={},p={},g=new WeakMap,_=[],m=null,d=!1,x=null,y=null,b=null,R=null,T=null,A=null,I=null,M=new ge(0,0,0),E=0,O=!1,V=null,q=null,P=null,F=null,W=null,J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,Y=0,ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ee)[1]),Z=Y>=1):ee.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),Z=Y>=2);let ie=null,de={},G=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),ue=new ut().fromArray(G),Me=new ut().fromArray(K);function xe(L,ae,ce,Ie){let Re=new Uint8Array(4),st=n.createTexture();n.bindTexture(L,st),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let rt=0;rt<ce;rt++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(ae,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(ae+rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return st}let Ne={};Ne[n.TEXTURE_2D]=xe(n.TEXTURE_2D,n.TEXTURE_2D,1),Ne[n.TEXTURE_CUBE_MAP]=xe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ne[n.TEXTURE_2D_ARRAY]=xe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ne[n.TEXTURE_3D]=xe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Oe(n.DEPTH_TEST),c.setFunc(Or),ve(!1),S(Dl),Oe(n.CULL_FACE),$(Yn);function Oe(L){f[L]!==!0&&(n.enable(L),f[L]=!0)}function Ae(L){f[L]!==!1&&(n.disable(L),f[L]=!1)}function Qe(L,ae){return p[L]!==ae?(n.bindFramebuffer(L,ae),p[L]=ae,i&&(L===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ae),L===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ae)),!0):!1}function N(L,ae){let ce=_,Ie=!1;if(L)if(ce=g.get(ae),ce===void 0&&(ce=[],g.set(ae,ce)),L.isWebGLMultipleRenderTargets){let Re=L.texture;if(ce.length!==Re.length||ce[0]!==n.COLOR_ATTACHMENT0){for(let st=0,rt=Re.length;st<rt;st++)ce[st]=n.COLOR_ATTACHMENT0+st;ce.length=Re.length,Ie=!0}}else ce[0]!==n.COLOR_ATTACHMENT0&&(ce[0]=n.COLOR_ATTACHMENT0,Ie=!0);else ce[0]!==n.BACK&&(ce[0]=n.BACK,Ie=!0);Ie&&(t.isWebGL2?n.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function Rt(L){return m!==L?(n.useProgram(L),m=L,!0):!1}let we={[gi]:n.FUNC_ADD,[_f]:n.FUNC_SUBTRACT,[yf]:n.FUNC_REVERSE_SUBTRACT};if(i)we[Ol]=n.MIN,we[Fl]=n.MAX;else{let L=e.get("EXT_blend_minmax");L!==null&&(we[Ol]=L.MIN_EXT,we[Fl]=L.MAX_EXT)}let Ue={[xf]:n.ZERO,[vf]:n.ONE,[Mf]:n.SRC_COLOR,[Oa]:n.SRC_ALPHA,[Af]:n.SRC_ALPHA_SATURATE,[Ef]:n.DST_COLOR,[Sf]:n.DST_ALPHA,[bf]:n.ONE_MINUS_SRC_COLOR,[Fa]:n.ONE_MINUS_SRC_ALPHA,[Tf]:n.ONE_MINUS_DST_COLOR,[wf]:n.ONE_MINUS_DST_ALPHA,[Rf]:n.CONSTANT_COLOR,[Cf]:n.ONE_MINUS_CONSTANT_COLOR,[Pf]:n.CONSTANT_ALPHA,[Lf]:n.ONE_MINUS_CONSTANT_ALPHA};function $(L,ae,ce,Ie,Re,st,rt,Et,Bt,ot){if(L===Yn){d===!0&&(Ae(n.BLEND),d=!1);return}if(d===!1&&(Oe(n.BLEND),d=!0),L!==gf){if(L!==x||ot!==O){if((y!==gi||T!==gi)&&(n.blendEquation(n.FUNC_ADD),y=gi,T=gi),ot)switch(L){case ss:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nr:n.blendFunc(n.ONE,n.ONE);break;case Ul:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ss:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ul:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,R=null,A=null,I=null,M.set(0,0,0),E=0,x=L,O=ot}return}Re=Re||ae,st=st||ce,rt=rt||Ie,(ae!==y||Re!==T)&&(n.blendEquationSeparate(we[ae],we[Re]),y=ae,T=Re),(ce!==b||Ie!==R||st!==A||rt!==I)&&(n.blendFuncSeparate(Ue[ce],Ue[Ie],Ue[st],Ue[rt]),b=ce,R=Ie,A=st,I=rt),(Et.equals(M)===!1||Bt!==E)&&(n.blendColor(Et.r,Et.g,Et.b,Bt),M.copy(Et),E=Bt),x=L,O=!1}function be(L,ae){L.side===hn?Ae(n.CULL_FACE):Oe(n.CULL_FACE);let ce=L.side===zt;ae&&(ce=!ce),ve(ce),L.blending===ss&&L.transparent===!1?$(Yn):$(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);let Ie=L.stencilWrite;l.setTest(Ie),Ie&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),z(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Oe(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function ve(L){V!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),V=L)}function S(L){L!==ff?(Oe(n.CULL_FACE),L!==q&&(L===Dl?n.cullFace(n.BACK):L===pf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),q=L}function v(L){L!==P&&(Z&&n.lineWidth(L),P=L)}function z(L,ae,ce){L?(Oe(n.POLYGON_OFFSET_FILL),(F!==ae||W!==ce)&&(n.polygonOffset(ae,ce),F=ae,W=ce)):Ae(n.POLYGON_OFFSET_FILL)}function Q(L){L?Oe(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function j(L){L===void 0&&(L=n.TEXTURE0+J-1),ie!==L&&(n.activeTexture(L),ie=L)}function ne(L,ae,ce){ce===void 0&&(ie===null?ce=n.TEXTURE0+J-1:ce=ie);let Ie=de[ce];Ie===void 0&&(Ie={type:void 0,texture:void 0},de[ce]=Ie),(Ie.type!==L||Ie.texture!==ae)&&(ie!==ce&&(n.activeTexture(ce),ie=ce),n.bindTexture(L,ae||Ne[L]),Ie.type=L,Ie.texture=ae)}function le(){let L=de[ie];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function he(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xe(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Je(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Fe(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ve(L){ue.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ue.copy(L))}function et(L){Me.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Me.copy(L))}function pt(L,ae){let ce=u.get(ae);ce===void 0&&(ce=new WeakMap,u.set(ae,ce));let Ie=ce.get(L);Ie===void 0&&(Ie=n.getUniformBlockIndex(ae,L.name),ce.set(L,Ie))}function Ye(L,ae){let Ie=u.get(ae).get(L);h.get(ae)!==Ie&&(n.uniformBlockBinding(ae,Ie,L.__bindingPointIndex),h.set(ae,Ie))}function re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ie=null,de={},p={},g=new WeakMap,_=[],m=null,d=!1,x=null,y=null,b=null,R=null,T=null,A=null,I=null,M=new ge(0,0,0),E=0,O=!1,V=null,q=null,P=null,F=null,W=null,ue.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Oe,disable:Ae,bindFramebuffer:Qe,drawBuffers:N,useProgram:Rt,setBlending:$,setMaterial:be,setFlipSided:ve,setCullFace:S,setLineWidth:v,setPolygonOffset:z,setScissorTest:Q,activeTexture:j,bindTexture:ne,unbindTexture:le,compressedTexImage2D:he,compressedTexImage3D:_e,texImage2D:Ee,texImage3D:ye,updateUBOMapping:pt,uniformBlockBinding:Ye,texStorage2D:Je,texStorage3D:Fe,texSubImage2D:Le,texSubImage3D:Xe,compressedTexSubImage2D:te,compressedTexSubImage3D:tt,scissor:Ve,viewport:et,reset:re}}function j_(n,e,t,i,s,r,o){let a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,v){return p?new OffscreenCanvas(S,v):Gr("canvas")}function _(S,v,z,Q){let j=1;if((S.width>Q||S.height>Q)&&(j=Q/Math.max(S.width,S.height)),j<1||v===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let ne=v?Ga:Math.floor,le=ne(j*S.width),he=ne(j*S.height);u===void 0&&(u=g(le,he));let _e=z?g(le,he):u;return _e.width=le,_e.height=he,_e.getContext("2d").drawImage(S,0,0,le,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+le+"x"+he+")."),_e}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function m(S){return gh(S.width)&&gh(S.height)}function d(S){return a?!1:S.wrapS!==un||S.wrapT!==un||S.minFilter!==Vt&&S.minFilter!==Qt}function x(S,v){return S.generateMipmaps&&v&&S.minFilter!==Vt&&S.minFilter!==Qt}function y(S){n.generateMipmap(S)}function b(S,v,z,Q,j=!1){if(a===!1)return v;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ne=v;if(v===n.RED&&(z===n.FLOAT&&(ne=n.R32F),z===n.HALF_FLOAT&&(ne=n.R16F),z===n.UNSIGNED_BYTE&&(ne=n.R8)),v===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(ne=n.R8UI),z===n.UNSIGNED_SHORT&&(ne=n.R16UI),z===n.UNSIGNED_INT&&(ne=n.R32UI),z===n.BYTE&&(ne=n.R8I),z===n.SHORT&&(ne=n.R16I),z===n.INT&&(ne=n.R32I)),v===n.RG&&(z===n.FLOAT&&(ne=n.RG32F),z===n.HALF_FLOAT&&(ne=n.RG16F),z===n.UNSIGNED_BYTE&&(ne=n.RG8)),v===n.RGBA){let le=j?Br:nt.getTransfer(Q);z===n.FLOAT&&(ne=n.RGBA32F),z===n.HALF_FLOAT&&(ne=n.RGBA16F),z===n.UNSIGNED_BYTE&&(ne=le===ct?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function R(S,v,z){return x(S,z)===!0||S.isFramebufferTexture&&S.minFilter!==Vt&&S.minFilter!==Qt?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function T(S){return S===Vt||S===zl||S===jo?n.NEAREST:n.LINEAR}function A(S){let v=S.target;v.removeEventListener("dispose",A),M(v),v.isVideoTexture&&h.delete(v)}function I(S){let v=S.target;v.removeEventListener("dispose",I),O(v)}function M(S){let v=i.get(S);if(v.__webglInit===void 0)return;let z=S.source,Q=f.get(z);if(Q){let j=Q[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&E(S),Object.keys(Q).length===0&&f.delete(z)}i.remove(S)}function E(S){let v=i.get(S);n.deleteTexture(v.__webglTexture);let z=S.source,Q=f.get(z);delete Q[v.__cacheKey],o.memory.textures--}function O(S){let v=S.texture,z=i.get(S),Q=i.get(v);if(Q.__webglTexture!==void 0&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(z.__webglFramebuffer[j]))for(let ne=0;ne<z.__webglFramebuffer[j].length;ne++)n.deleteFramebuffer(z.__webglFramebuffer[j][ne]);else n.deleteFramebuffer(z.__webglFramebuffer[j]);z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer[j])}else{if(Array.isArray(z.__webglFramebuffer))for(let j=0;j<z.__webglFramebuffer.length;j++)n.deleteFramebuffer(z.__webglFramebuffer[j]);else n.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let j=0;j<z.__webglColorRenderbuffer.length;j++)z.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(z.__webglColorRenderbuffer[j]);z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let j=0,ne=v.length;j<ne;j++){let le=i.get(v[j]);le.__webglTexture&&(n.deleteTexture(le.__webglTexture),o.memory.textures--),i.remove(v[j])}i.remove(v),i.remove(S)}let V=0;function q(){V=0}function P(){let S=V;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),V+=1,S}function F(S){let v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function W(S,v){let z=i.get(S);if(S.isVideoTexture&&be(S),S.isRenderTargetTexture===!1&&S.version>0&&z.__version!==S.version){let Q=S.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(z,S,v);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+v)}function J(S,v){let z=i.get(S);if(S.version>0&&z.__version!==S.version){ue(z,S,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+v)}function Z(S,v){let z=i.get(S);if(S.version>0&&z.__version!==S.version){ue(z,S,v);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+v)}function Y(S,v){let z=i.get(S);if(S.version>0&&z.__version!==S.version){Me(z,S,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+v)}let ee={[Us]:n.REPEAT,[un]:n.CLAMP_TO_EDGE,[ka]:n.MIRRORED_REPEAT},ie={[Vt]:n.NEAREST,[zl]:n.NEAREST_MIPMAP_NEAREST,[jo]:n.NEAREST_MIPMAP_LINEAR,[Qt]:n.LINEAR,[qf]:n.LINEAR_MIPMAP_NEAREST,[Ns]:n.LINEAR_MIPMAP_LINEAR},de={[sp]:n.NEVER,[hp]:n.ALWAYS,[rp]:n.LESS,[bu]:n.LEQUAL,[op]:n.EQUAL,[lp]:n.GEQUAL,[ap]:n.GREATER,[cp]:n.NOTEQUAL};function G(S,v,z){if(z?(n.texParameteri(S,n.TEXTURE_WRAP_S,ee[v.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,ee[v.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,ee[v.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,ie[v.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,ie[v.minFilter])):(n.texParameteri(S,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(S,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==un||v.wrapT!==un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,n.TEXTURE_MAG_FILTER,T(v.magFilter)),n.texParameteri(S,n.TEXTURE_MIN_FILTER,T(v.minFilter)),v.minFilter!==Vt&&v.minFilter!==Qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,de[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let Q=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Vt||v.minFilter!==jo&&v.minFilter!==Ns||v.type===qn&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===Os&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(S,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function K(S,v){let z=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",A));let Q=v.source,j=f.get(Q);j===void 0&&(j={},f.set(Q,j));let ne=F(v);if(ne!==S.__cacheKey){j[ne]===void 0&&(j[ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),j[ne].usedTimes++;let le=j[S.__cacheKey];le!==void 0&&(j[S.__cacheKey].usedTimes--,le.usedTimes===0&&E(v)),S.__cacheKey=ne,S.__webglTexture=j[ne].texture}return z}function ue(S,v,z){let Q=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Q=n.TEXTURE_3D);let j=K(S,v),ne=v.source;t.bindTexture(Q,S.__webglTexture,n.TEXTURE0+z);let le=i.get(ne);if(ne.version!==le.__version||j===!0){t.activeTexture(n.TEXTURE0+z);let he=nt.getPrimaries(nt.workingColorSpace),_e=v.colorSpace===jt?null:nt.getPrimaries(v.colorSpace),Le=v.colorSpace===jt||he===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let Xe=d(v)&&m(v.image)===!1,te=_(v.image,Xe,!1,s.maxTextureSize);te=ve(v,te);let tt=m(te)||a,Je=r.convert(v.format,v.colorSpace),Fe=r.convert(v.type),Ee=b(v.internalFormat,Je,Fe,v.colorSpace,v.isVideoTexture);G(Q,v,tt);let ye,Ve=v.mipmaps,et=a&&v.isVideoTexture!==!0&&Ee!==vu,pt=le.__version===void 0||j===!0,Ye=R(v,te,tt);if(v.isDepthTexture)Ee=n.DEPTH_COMPONENT,a?v.type===qn?Ee=n.DEPTH_COMPONENT32F:v.type===Xn?Ee=n.DEPTH_COMPONENT24:v.type===yi?Ee=n.DEPTH24_STENCIL8:Ee=n.DEPTH_COMPONENT16:v.type===qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===xi&&Ee===n.DEPTH_COMPONENT&&v.type!==Lc&&v.type!==Xn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Xn,Fe=r.convert(v.type)),v.format===ls&&Ee===n.DEPTH_COMPONENT&&(Ee=n.DEPTH_STENCIL,v.type!==yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=yi,Fe=r.convert(v.type))),pt&&(et?t.texStorage2D(n.TEXTURE_2D,1,Ee,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Ee,te.width,te.height,0,Je,Fe,null));else if(v.isDataTexture)if(Ve.length>0&&tt){et&&pt&&t.texStorage2D(n.TEXTURE_2D,Ye,Ee,Ve[0].width,Ve[0].height);for(let re=0,L=Ve.length;re<L;re++)ye=Ve[re],et?t.texSubImage2D(n.TEXTURE_2D,re,0,0,ye.width,ye.height,Je,Fe,ye.data):t.texImage2D(n.TEXTURE_2D,re,Ee,ye.width,ye.height,0,Je,Fe,ye.data);v.generateMipmaps=!1}else et?(pt&&t.texStorage2D(n.TEXTURE_2D,Ye,Ee,te.width,te.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,te.width,te.height,Je,Fe,te.data)):t.texImage2D(n.TEXTURE_2D,0,Ee,te.width,te.height,0,Je,Fe,te.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){et&&pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ye,Ee,Ve[0].width,Ve[0].height,te.depth);for(let re=0,L=Ve.length;re<L;re++)ye=Ve[re],v.format!==dn?Je!==null?et?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,ye.width,ye.height,te.depth,Je,ye.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,Ee,ye.width,ye.height,te.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,ye.width,ye.height,te.depth,Je,Fe,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,Ee,ye.width,ye.height,te.depth,0,Je,Fe,ye.data)}else{et&&pt&&t.texStorage2D(n.TEXTURE_2D,Ye,Ee,Ve[0].width,Ve[0].height);for(let re=0,L=Ve.length;re<L;re++)ye=Ve[re],v.format!==dn?Je!==null?et?t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,ye.width,ye.height,Je,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,re,Ee,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage2D(n.TEXTURE_2D,re,0,0,ye.width,ye.height,Je,Fe,ye.data):t.texImage2D(n.TEXTURE_2D,re,Ee,ye.width,ye.height,0,Je,Fe,ye.data)}else if(v.isDataArrayTexture)et?(pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ye,Ee,te.width,te.height,te.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Je,Fe,te.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,te.width,te.height,te.depth,0,Je,Fe,te.data);else if(v.isData3DTexture)et?(pt&&t.texStorage3D(n.TEXTURE_3D,Ye,Ee,te.width,te.height,te.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Je,Fe,te.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,te.width,te.height,te.depth,0,Je,Fe,te.data);else if(v.isFramebufferTexture){if(pt)if(et)t.texStorage2D(n.TEXTURE_2D,Ye,Ee,te.width,te.height);else{let re=te.width,L=te.height;for(let ae=0;ae<Ye;ae++)t.texImage2D(n.TEXTURE_2D,ae,Ee,re,L,0,Je,Fe,null),re>>=1,L>>=1}}else if(Ve.length>0&&tt){et&&pt&&t.texStorage2D(n.TEXTURE_2D,Ye,Ee,Ve[0].width,Ve[0].height);for(let re=0,L=Ve.length;re<L;re++)ye=Ve[re],et?t.texSubImage2D(n.TEXTURE_2D,re,0,0,Je,Fe,ye):t.texImage2D(n.TEXTURE_2D,re,Ee,Je,Fe,ye);v.generateMipmaps=!1}else et?(pt&&t.texStorage2D(n.TEXTURE_2D,Ye,Ee,te.width,te.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Je,Fe,te)):t.texImage2D(n.TEXTURE_2D,0,Ee,Je,Fe,te);x(v,tt)&&y(Q),le.__version=ne.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function Me(S,v,z){if(v.image.length!==6)return;let Q=K(S,v),j=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+z);let ne=i.get(j);if(j.version!==ne.__version||Q===!0){t.activeTexture(n.TEXTURE0+z);let le=nt.getPrimaries(nt.workingColorSpace),he=v.colorSpace===jt?null:nt.getPrimaries(v.colorSpace),_e=v.colorSpace===jt||le===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let Le=v.isCompressedTexture||v.image[0].isCompressedTexture,Xe=v.image[0]&&v.image[0].isDataTexture,te=[];for(let re=0;re<6;re++)!Le&&!Xe?te[re]=_(v.image[re],!1,!0,s.maxCubemapSize):te[re]=Xe?v.image[re].image:v.image[re],te[re]=ve(v,te[re]);let tt=te[0],Je=m(tt)||a,Fe=r.convert(v.format,v.colorSpace),Ee=r.convert(v.type),ye=b(v.internalFormat,Fe,Ee,v.colorSpace),Ve=a&&v.isVideoTexture!==!0,et=ne.__version===void 0||Q===!0,pt=R(v,tt,Je);G(n.TEXTURE_CUBE_MAP,v,Je);let Ye;if(Le){Ve&&et&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pt,ye,tt.width,tt.height);for(let re=0;re<6;re++){Ye=te[re].mipmaps;for(let L=0;L<Ye.length;L++){let ae=Ye[L];v.format!==dn?Fe!==null?Ve?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,0,0,ae.width,ae.height,Fe,ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,ye,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,0,0,ae.width,ae.height,Fe,Ee,ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,ye,ae.width,ae.height,0,Fe,Ee,ae.data)}}}else{Ye=v.mipmaps,Ve&&et&&(Ye.length>0&&pt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,pt,ye,te[0].width,te[0].height));for(let re=0;re<6;re++)if(Xe){Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,te[re].width,te[re].height,Fe,Ee,te[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ye,te[re].width,te[re].height,0,Fe,Ee,te[re].data);for(let L=0;L<Ye.length;L++){let ce=Ye[L].image[re].image;Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,0,0,ce.width,ce.height,Fe,Ee,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,ye,ce.width,ce.height,0,Fe,Ee,ce.data)}}else{Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Fe,Ee,te[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ye,Fe,Ee,te[re]);for(let L=0;L<Ye.length;L++){let ae=Ye[L];Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,0,0,Fe,Ee,ae.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,ye,Fe,Ee,ae.image[re])}}}x(v,Je)&&y(n.TEXTURE_CUBE_MAP),ne.__version=j.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function xe(S,v,z,Q,j,ne){let le=r.convert(z.format,z.colorSpace),he=r.convert(z.type),_e=b(z.internalFormat,le,he,z.colorSpace);if(!i.get(v).__hasExternalTextures){let Xe=Math.max(1,v.width>>ne),te=Math.max(1,v.height>>ne);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,ne,_e,Xe,te,v.depth,0,le,he,null):t.texImage2D(j,ne,_e,Xe,te,0,le,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),$(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,j,i.get(z).__webglTexture,0,Ue(v)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,j,i.get(z).__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(S,v,z){if(n.bindRenderbuffer(n.RENDERBUFFER,S),v.depthBuffer&&!v.stencilBuffer){let Q=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(z||$(v)){let j=v.depthTexture;j&&j.isDepthTexture&&(j.type===qn?Q=n.DEPTH_COMPONENT32F:j.type===Xn&&(Q=n.DEPTH_COMPONENT24));let ne=Ue(v);$(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,Q,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,Q,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,Q,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,S)}else if(v.depthBuffer&&v.stencilBuffer){let Q=Ue(v);z&&$(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,v.width,v.height):$(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,S)}else{let Q=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let j=0;j<Q.length;j++){let ne=Q[j],le=r.convert(ne.format,ne.colorSpace),he=r.convert(ne.type),_e=b(ne.internalFormat,le,he,ne.colorSpace),Le=Ue(v);z&&$(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,_e,v.width,v.height):$(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le,_e,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,_e,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W(v.depthTexture,0);let Q=i.get(v.depthTexture).__webglTexture,j=Ue(v);if(v.depthTexture.format===xi)$(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(v.depthTexture.format===ls)$(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ae(S){let v=i.get(S),z=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Oe(v.__webglFramebuffer,S)}else if(z){v.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[Q]),v.__webglDepthbuffer[Q]=n.createRenderbuffer(),Ne(v.__webglDepthbuffer[Q],S,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),Ne(v.__webglDepthbuffer,S,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Qe(S,v,z){let Q=i.get(S);v!==void 0&&xe(Q.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Ae(S)}function N(S){let v=S.texture,z=i.get(S),Q=i.get(v);S.addEventListener("dispose",I),S.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=v.version,o.memory.textures++);let j=S.isWebGLCubeRenderTarget===!0,ne=S.isWebGLMultipleRenderTargets===!0,le=m(S)||a;if(j){z.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer[he]=[];for(let _e=0;_e<v.mipmaps.length;_e++)z.__webglFramebuffer[he][_e]=n.createFramebuffer()}else z.__webglFramebuffer[he]=n.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer=[];for(let he=0;he<v.mipmaps.length;he++)z.__webglFramebuffer[he]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ne)if(s.drawBuffers){let he=S.texture;for(let _e=0,Le=he.length;_e<Le;_e++){let Xe=i.get(he[_e]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&$(S)===!1){let he=ne?v:[v];z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let _e=0;_e<he.length;_e++){let Le=he[_e];z.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[_e]);let Xe=r.convert(Le.format,Le.colorSpace),te=r.convert(Le.type),tt=b(Le.internalFormat,Xe,te,Le.colorSpace,S.isXRRenderTarget===!0),Je=Ue(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Je,tt,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,z.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Ne(z.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),G(n.TEXTURE_CUBE_MAP,v,le);for(let he=0;he<6;he++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let _e=0;_e<v.mipmaps.length;_e++)xe(z.__webglFramebuffer[he][_e],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,_e);else xe(z.__webglFramebuffer[he],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);x(v,le)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){let he=S.texture;for(let _e=0,Le=he.length;_e<Le;_e++){let Xe=he[_e],te=i.get(Xe);t.bindTexture(n.TEXTURE_2D,te.__webglTexture),G(n.TEXTURE_2D,Xe,le),xe(z.__webglFramebuffer,S,Xe,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,0),x(Xe,le)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?he=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,Q.__webglTexture),G(he,v,le),a&&v.mipmaps&&v.mipmaps.length>0)for(let _e=0;_e<v.mipmaps.length;_e++)xe(z.__webglFramebuffer[_e],S,v,n.COLOR_ATTACHMENT0,he,_e);else xe(z.__webglFramebuffer,S,v,n.COLOR_ATTACHMENT0,he,0);x(v,le)&&y(he),t.unbindTexture()}S.depthBuffer&&Ae(S)}function Rt(S){let v=m(S)||a,z=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Q=0,j=z.length;Q<j;Q++){let ne=z[Q];if(x(ne,v)){let le=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,he=i.get(ne).__webglTexture;t.bindTexture(le,he),y(le),t.unbindTexture()}}}function we(S){if(a&&S.samples>0&&$(S)===!1){let v=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],z=S.width,Q=S.height,j=n.COLOR_BUFFER_BIT,ne=[],le=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(S),_e=S.isWebGLMultipleRenderTargets===!0;if(_e)for(let Le=0;Le<v.length;Le++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Le=0;Le<v.length;Le++){ne.push(n.COLOR_ATTACHMENT0+Le),S.depthBuffer&&ne.push(le);let Xe=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Xe===!1&&(S.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),_e&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[Le]),Xe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[le]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[le])),_e){let te=i.get(v[Le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,te,0)}n.blitFramebuffer(0,0,z,Q,0,0,z,Q,j,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let Le=0;Le<v.length;Le++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,he.__webglColorRenderbuffer[Le]);let Xe=i.get(v[Le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,Xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function Ue(S){return Math.min(s.maxSamples,S.samples)}function $(S){let v=i.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function be(S){let v=o.render.frame;h.get(S)!==v&&(h.set(S,v),S.update())}function ve(S,v){let z=S.colorSpace,Q=S.format,j=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Ha||z!==Nn&&z!==jt&&(nt.getTransfer(z)===ct?a===!1?e.has("EXT_sRGB")===!0&&Q===dn?(S.format=Ha,S.minFilter=Qt,S.generateMipmaps=!1):v=Wr.sRGBToLinear(v):(Q!==dn||j!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),v}this.allocateTextureUnit=P,this.resetTextureUnits=q,this.setTexture2D=W,this.setTexture2DArray=J,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=Qe,this.setupRenderTarget=N,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=$}function ey(n,e,t){let i=t.isWebGL2;function s(r,o=jt){let a,c=nt.getTransfer(o);if(r===$n)return n.UNSIGNED_BYTE;if(r===mu)return n.UNSIGNED_SHORT_4_4_4_4;if(r===gu)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Yf)return n.BYTE;if(r===Zf)return n.SHORT;if(r===Lc)return n.UNSIGNED_SHORT;if(r===pu)return n.INT;if(r===Xn)return n.UNSIGNED_INT;if(r===qn)return n.FLOAT;if(r===Os)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===$f)return n.ALPHA;if(r===dn)return n.RGBA;if(r===Jf)return n.LUMINANCE;if(r===Kf)return n.LUMINANCE_ALPHA;if(r===xi)return n.DEPTH_COMPONENT;if(r===ls)return n.DEPTH_STENCIL;if(r===Ha)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Qf)return n.RED;if(r===_u)return n.RED_INTEGER;if(r===jf)return n.RG;if(r===yu)return n.RG_INTEGER;if(r===xu)return n.RGBA_INTEGER;if(r===ea||r===ta||r===na||r===ia)if(c===ct)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ea)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===na)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ia)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ea)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ta)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===na)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ia)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Bl||r===kl||r===Hl||r===Vl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Bl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===kl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Hl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Vl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===vu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Gl||r===Wl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Gl)return c===ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Wl)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Xl||r===ql||r===Yl||r===Zl||r===$l||r===Jl||r===Kl||r===Ql||r===jl||r===eh||r===th||r===nh||r===ih||r===sh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Xl)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ql)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Yl)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Zl)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===$l)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Jl)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Kl)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ql)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===jl)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===eh)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===th)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===nh)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ih)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===sh)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===sa||r===rh||r===oh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===sa)return c===ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===rh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===oh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ep||r===ah||r===ch||r===lh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===sa)return a.COMPRESSED_RED_RGTC1_EXT;if(r===ah)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ch)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===lh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===yi?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var nc=class extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},at=class extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ty={type:"move"},Ls=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new at,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new at,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new at,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ty)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new at;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},ic=class extends Kn{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null,_=t.getContextAttributes(),m=null,d=null,x=[],y=[],b=new fe,R=null,T=new Ft;T.layers.enable(1),T.viewport=new ut;let A=new Ft;A.layers.enable(2),A.viewport=new ut;let I=[T,A],M=new nc;M.layers.enable(1),M.layers.enable(2);let E=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let K=x[G];return K===void 0&&(K=new Ls,x[G]=K),K.getTargetRaySpace()},this.getControllerGrip=function(G){let K=x[G];return K===void 0&&(K=new Ls,x[G]=K),K.getGripSpace()},this.getHand=function(G){let K=x[G];return K===void 0&&(K=new Ls,x[G]=K),K.getHandSpace()};function V(G){let K=y.indexOf(G.inputSource);if(K===-1)return;let ue=x[K];ue!==void 0&&(ue.update(G.inputSource,G.frame,l||o),ue.dispatchEvent({type:G.type,data:G.inputSource}))}function q(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",P);for(let G=0;G<x.length;G++){let K=y[G];K!==null&&(y[G]=null,x[G].disconnect(K))}E=null,O=null,e.setRenderTarget(m),p=null,f=null,u=null,s=null,d=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",q),s.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(b),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let K={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new On(p.framebufferWidth,p.framebufferHeight,{format:dn,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let K=null,ue=null,Me=null;_.depth&&(Me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=_.stencil?ls:xi,ue=_.stencil?yi:Xn);let xe={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(xe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new On(f.textureWidth,f.textureHeight,{format:dn,type:$n,depthTexture:new jr(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let Ne=e.properties.get(d);Ne.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),de.setContext(s),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(G){for(let K=0;K<G.removed.length;K++){let ue=G.removed[K],Me=y.indexOf(ue);Me>=0&&(y[Me]=null,x[Me].disconnect(ue))}for(let K=0;K<G.added.length;K++){let ue=G.added[K],Me=y.indexOf(ue);if(Me===-1){for(let Ne=0;Ne<x.length;Ne++)if(Ne>=y.length){y.push(ue),Me=Ne;break}else if(y[Ne]===null){y[Ne]=ue,Me=Ne;break}if(Me===-1)break}let xe=x[Me];xe&&xe.connect(ue)}}let F=new C,W=new C;function J(G,K,ue){F.setFromMatrixPosition(K.matrixWorld),W.setFromMatrixPosition(ue.matrixWorld);let Me=F.distanceTo(W),xe=K.projectionMatrix.elements,Ne=ue.projectionMatrix.elements,Oe=xe[14]/(xe[10]-1),Ae=xe[14]/(xe[10]+1),Qe=(xe[9]+1)/xe[5],N=(xe[9]-1)/xe[5],Rt=(xe[8]-1)/xe[0],we=(Ne[8]+1)/Ne[0],Ue=Oe*Rt,$=Oe*we,be=Me/(-Rt+we),ve=be*-Rt;K.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ve),G.translateZ(be),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let S=Oe+be,v=Ae+be,z=Ue-ve,Q=$+(Me-ve),j=Qe*Ae/v*S,ne=N*Ae/v*S;G.projectionMatrix.makePerspective(z,Q,j,ne,S,v),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function Z(G,K){K===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(K.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;M.near=A.near=T.near=G.near,M.far=A.far=T.far=G.far,(E!==M.near||O!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,O=M.far);let K=G.parent,ue=M.cameras;Z(M,K);for(let Me=0;Me<ue.length;Me++)Z(ue[Me],K);ue.length===2?J(M,T,A):M.projectionMatrix.copy(T.projectionMatrix),Y(G,M,K)};function Y(G,K,ue){ue===null?G.matrix.copy(K.matrixWorld):(G.matrix.copy(ue.matrixWorld),G.matrix.invert(),G.matrix.multiply(K.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(K.projectionMatrix),G.projectionMatrixInverse.copy(K.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Va*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(G){c=G,f!==null&&(f.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)};let ee=null;function ie(G,K){if(h=K.getViewerPose(l||o),g=K,h!==null){let ue=h.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let Me=!1;ue.length!==M.cameras.length&&(M.cameras.length=0,Me=!0);for(let xe=0;xe<ue.length;xe++){let Ne=ue[xe],Oe=null;if(p!==null)Oe=p.getViewport(Ne);else{let Qe=u.getViewSubImage(f,Ne);Oe=Qe.viewport,xe===0&&(e.setRenderTargetTextures(d,Qe.colorTexture,f.ignoreDepthValues?void 0:Qe.depthStencilTexture),e.setRenderTarget(d))}let Ae=I[xe];Ae===void 0&&(Ae=new Ft,Ae.layers.enable(xe),Ae.viewport=new ut,I[xe]=Ae),Ae.matrix.fromArray(Ne.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Ne.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),xe===0&&(M.matrix.copy(Ae.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Me===!0&&M.cameras.push(Ae)}}for(let ue=0;ue<x.length;ue++){let Me=y[ue],xe=x[ue];Me!==null&&xe!==void 0&&xe.update(Me,K,l||o)}ee&&ee(G,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}let de=new Tu;de.setAnimationLoop(ie),this.setAnimationLoop=function(G){ee=G},this.dispose=function(){}}};function ny(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Eu(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,x,y,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,b)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,x,y):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===zt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===zt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let x=e.get(d).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;let y=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*y,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,x,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=y*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===zt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let x=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function iy(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,y){let b=y.program;i.uniformBlockBinding(x,b)}function l(x,y){let b=s[x.id];b===void 0&&(g(x),b=h(x),s[x.id]=b,x.addEventListener("dispose",m));let R=y.program;i.updateUBOMapping(x,R);let T=e.render.frame;r[x.id]!==T&&(f(x),r[x.id]=T)}function h(x){let y=u();x.__bindingPointIndex=y;let b=n.createBuffer(),R=x.__size,T=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,R,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,b),b}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let y=s[x.id],b=x.uniforms,R=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let T=0,A=b.length;T<A;T++){let I=Array.isArray(b[T])?b[T]:[b[T]];for(let M=0,E=I.length;M<E;M++){let O=I[M];if(p(O,T,M,R)===!0){let V=O.__offset,q=Array.isArray(O.value)?O.value:[O.value],P=0;for(let F=0;F<q.length;F++){let W=q[F],J=_(W);typeof W=="number"||typeof W=="boolean"?(O.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,V+P,O.__data)):W.isMatrix3?(O.__data[0]=W.elements[0],O.__data[1]=W.elements[1],O.__data[2]=W.elements[2],O.__data[3]=0,O.__data[4]=W.elements[3],O.__data[5]=W.elements[4],O.__data[6]=W.elements[5],O.__data[7]=0,O.__data[8]=W.elements[6],O.__data[9]=W.elements[7],O.__data[10]=W.elements[8],O.__data[11]=0):(W.toArray(O.__data,P),P+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,O.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,y,b,R){let T=x.value,A=y+"_"+b;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{let I=R[A];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return R[A]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(x){let y=x.uniforms,b=0,R=16;for(let A=0,I=y.length;A<I;A++){let M=Array.isArray(y[A])?y[A]:[y[A]];for(let E=0,O=M.length;E<O;E++){let V=M[E],q=Array.isArray(V.value)?V.value:[V.value];for(let P=0,F=q.length;P<F;P++){let W=q[P],J=_(W),Z=b%R;Z!==0&&R-Z<J.boundary&&(b+=R-Z),V.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=b,b+=J.storage}}}let T=b%R;return T>0&&(b+=R-T),x.__size=b,x.__cache={},this}function _(x){let y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){let y=x.target;y.removeEventListener("dispose",m);let b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(let x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}var Bs=class{constructor(e={}){let{canvas:t=dp(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;let p=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,d=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gt,this._useLegacyLights=!1,this.toneMapping=Zn,this.toneMappingExposure=1;let y=this,b=!1,R=0,T=0,A=null,I=-1,M=null,E=new ut,O=new ut,V=null,q=new ge(0),P=0,F=t.width,W=t.height,J=1,Z=null,Y=null,ee=new ut(0,0,F,W),ie=new ut(0,0,F,W),de=!1,G=new zs,K=!1,ue=!1,Me=null,xe=new dt,Ne=new fe,Oe=new C,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Qe(){return A===null?J:1}let N=i;function Rt(w,D){for(let k=0;k<w.length;k++){let H=w[k],B=t.getContext(H,D);if(B!==null)return B}return null}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cc}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",ae,!1),N===null){let D=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&D.shift(),N=Rt(D,w),N===null)throw Rt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let we,Ue,$,be,ve,S,v,z,Q,j,ne,le,he,_e,Le,Xe,te,tt,Je,Fe,Ee,ye,Ve,et;function pt(){we=new bg(N),Ue=new gg(N,we,e),we.init(Ue),ye=new ey(N,we,Ue),$=new Q_(N,we,Ue),be=new Eg(N),ve=new k_,S=new j_(N,we,$,ve,Ue,ye,be),v=new yg(y),z=new Mg(y),Q=new Dp(N,Ue),Ve=new pg(N,we,Q,Ue),j=new Sg(N,Q,be,Ve),ne=new Cg(N,j,Q,be),Je=new Rg(N,Ue,S),Xe=new _g(ve),le=new B_(y,v,z,we,Ue,Ve,Xe),he=new ny(y,ve),_e=new V_,Le=new Z_(we,Ue),tt=new fg(y,v,z,$,ne,f,c),te=new K_(y,ne,Ue),et=new iy(N,be,Ue,$),Fe=new mg(N,we,be,Ue),Ee=new wg(N,we,be,Ue),be.programs=le.programs,y.capabilities=Ue,y.extensions=we,y.properties=ve,y.renderLists=_e,y.shadowMap=te,y.state=$,y.info=be}pt();let Ye=new ic(y,N);this.xr=Ye,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let w=we.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=we.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(w){w!==void 0&&(J=w,this.setSize(F,W,!1))},this.getSize=function(w){return w.set(F,W)},this.setSize=function(w,D,k=!0){if(Ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,W=D,t.width=Math.floor(w*J),t.height=Math.floor(D*J),k===!0&&(t.style.width=w+"px",t.style.height=D+"px"),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set(F*J,W*J).floor()},this.setDrawingBufferSize=function(w,D,k){F=w,W=D,J=k,t.width=Math.floor(w*k),t.height=Math.floor(D*k),this.setViewport(0,0,w,D)},this.getCurrentViewport=function(w){return w.copy(E)},this.getViewport=function(w){return w.copy(ee)},this.setViewport=function(w,D,k,H){w.isVector4?ee.set(w.x,w.y,w.z,w.w):ee.set(w,D,k,H),$.viewport(E.copy(ee).multiplyScalar(J).floor())},this.getScissor=function(w){return w.copy(ie)},this.setScissor=function(w,D,k,H){w.isVector4?ie.set(w.x,w.y,w.z,w.w):ie.set(w,D,k,H),$.scissor(O.copy(ie).multiplyScalar(J).floor())},this.getScissorTest=function(){return de},this.setScissorTest=function(w){$.setScissorTest(de=w)},this.setOpaqueSort=function(w){Z=w},this.setTransparentSort=function(w){Y=w},this.getClearColor=function(w){return w.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(w=!0,D=!0,k=!0){let H=0;if(w){let B=!1;if(A!==null){let pe=A.texture.format;B=pe===xu||pe===yu||pe===_u}if(B){let pe=A.texture.type,Se=pe===$n||pe===Xn||pe===Lc||pe===yi||pe===mu||pe===gu,Ce=tt.getClearColor(),De=tt.getClearAlpha(),qe=Ce.r,Be=Ce.g,He=Ce.b;Se?(p[0]=qe,p[1]=Be,p[2]=He,p[3]=De,N.clearBufferuiv(N.COLOR,0,p)):(g[0]=qe,g[1]=Be,g[2]=He,g[3]=De,N.clearBufferiv(N.COLOR,0,g))}else H|=N.COLOR_BUFFER_BIT}D&&(H|=N.DEPTH_BUFFER_BIT),k&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),_e.dispose(),Le.dispose(),ve.dispose(),v.dispose(),z.dispose(),ne.dispose(),Ve.dispose(),et.dispose(),le.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",Bt),Ye.removeEventListener("sessionend",ot),Me&&(Me.dispose(),Me=null),kt.stop()};function re(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let w=be.autoReset,D=te.enabled,k=te.autoUpdate,H=te.needsUpdate,B=te.type;pt(),be.autoReset=w,te.enabled=D,te.autoUpdate=k,te.needsUpdate=H,te.type=B}function ae(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ce(w){let D=w.target;D.removeEventListener("dispose",ce),Ie(D)}function Ie(w){Re(w),ve.remove(w)}function Re(w){let D=ve.get(w).programs;D!==void 0&&(D.forEach(function(k){le.releaseProgram(k)}),w.isShaderMaterial&&le.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,k,H,B,pe){D===null&&(D=Ae);let Se=B.isMesh&&B.matrixWorld.determinant()<0,Ce=sf(w,D,k,H,B);$.setMaterial(H,Se);let De=k.index,qe=1;if(H.wireframe===!0){if(De=j.getWireframeAttribute(k),De===void 0)return;qe=2}let Be=k.drawRange,He=k.attributes.position,xt=Be.start*qe,qt=(Be.start+Be.count)*qe;pe!==null&&(xt=Math.max(xt,pe.start*qe),qt=Math.min(qt,(pe.start+pe.count)*qe)),De!==null?(xt=Math.max(xt,0),qt=Math.min(qt,De.count)):He!=null&&(xt=Math.max(xt,0),qt=Math.min(qt,He.count));let Tt=qt-xt;if(Tt<0||Tt===1/0)return;Ve.setup(B,H,Ce,k,De);let Tn,ft=Fe;if(De!==null&&(Tn=Q.get(De),ft=Ee,ft.setIndex(Tn)),B.isMesh)H.wireframe===!0?($.setLineWidth(H.wireframeLinewidth*Qe()),ft.setMode(N.LINES)):ft.setMode(N.TRIANGLES);else if(B.isLine){let Ze=H.linewidth;Ze===void 0&&(Ze=1),$.setLineWidth(Ze*Qe()),B.isLineSegments?ft.setMode(N.LINES):B.isLineLoop?ft.setMode(N.LINE_LOOP):ft.setMode(N.LINE_STRIP)}else B.isPoints?ft.setMode(N.POINTS):B.isSprite&&ft.setMode(N.TRIANGLES);if(B.isBatchedMesh)ft.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)ft.renderInstances(xt,Tt,B.count);else if(k.isInstancedBufferGeometry){let Ze=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Zo=Math.min(k.instanceCount,Ze);ft.renderInstances(xt,Tt,Zo)}else ft.render(xt,Tt)};function st(w,D,k){w.transparent===!0&&w.side===hn&&w.forceSinglePass===!1?(w.side=zt,w.needsUpdate=!0,ar(w,D,k),w.side=Jn,w.needsUpdate=!0,ar(w,D,k),w.side=hn):ar(w,D,k)}this.compile=function(w,D,k=null){k===null&&(k=w),m=Le.get(k),m.init(),x.push(m),k.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),w!==k&&w.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(y._useLegacyLights);let H=new Set;return w.traverse(function(B){let pe=B.material;if(pe)if(Array.isArray(pe))for(let Se=0;Se<pe.length;Se++){let Ce=pe[Se];st(Ce,k,B),H.add(Ce)}else st(pe,k,B),H.add(pe)}),x.pop(),m=null,H},this.compileAsync=function(w,D,k=null){let H=this.compile(w,D,k);return new Promise(B=>{function pe(){if(H.forEach(function(Se){ve.get(Se).currentProgram.isReady()&&H.delete(Se)}),H.size===0){B(w);return}setTimeout(pe,10)}we.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let rt=null;function Et(w){rt&&rt(w)}function Bt(){kt.stop()}function ot(){kt.start()}let kt=new Tu;kt.setAnimationLoop(Et),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(w){rt=w,Ye.setAnimationLoop(w),w===null?kt.stop():kt.start()},Ye.addEventListener("sessionstart",Bt),Ye.addEventListener("sessionend",ot),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(D),D=Ye.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,D,A),m=Le.get(w,x.length),m.init(),x.push(m),xe.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),G.setFromProjectionMatrix(xe),ue=this.localClippingEnabled,K=Xe.init(this.clippingPlanes,ue),_=_e.get(w,d.length),_.init(),d.push(_),_n(w,D,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(Z,Y),this.info.render.frame++,K===!0&&Xe.beginShadows();let k=m.state.shadowsArray;if(te.render(k,w,D),K===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),tt.render(_,w),m.setupLights(y._useLegacyLights),D.isArrayCamera){let H=D.cameras;for(let B=0,pe=H.length;B<pe;B++){let Se=H[B];Ml(_,w,Se,Se.viewport)}}else Ml(_,w,D);A!==null&&(S.updateMultisampleRenderTarget(A),S.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(y,w,D),Ve.resetDefaultState(),I=-1,M=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function _n(w,D,k,H){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)k=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||G.intersectsSprite(w)){H&&Oe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(xe);let Se=ne.update(w),Ce=w.material;Ce.visible&&_.push(w,Se,Ce,k,Oe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||G.intersectsObject(w))){let Se=ne.update(w),Ce=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Oe.copy(w.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Oe.copy(Se.boundingSphere.center)),Oe.applyMatrix4(w.matrixWorld).applyMatrix4(xe)),Array.isArray(Ce)){let De=Se.groups;for(let qe=0,Be=De.length;qe<Be;qe++){let He=De[qe],xt=Ce[He.materialIndex];xt&&xt.visible&&_.push(w,Se,xt,k,Oe.z,He)}}else Ce.visible&&_.push(w,Se,Ce,k,Oe.z,null)}}let pe=w.children;for(let Se=0,Ce=pe.length;Se<Ce;Se++)_n(pe[Se],D,k,H)}function Ml(w,D,k,H){let B=w.opaque,pe=w.transmissive,Se=w.transparent;m.setupLightsView(k),K===!0&&Xe.setGlobalState(y.clippingPlanes,k),pe.length>0&&nf(B,pe,D,k),H&&$.viewport(E.copy(H)),B.length>0&&or(B,D,k),pe.length>0&&or(pe,D,k),Se.length>0&&or(Se,D,k),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function nf(w,D,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;let pe=Ue.isWebGL2;Me===null&&(Me=new On(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")?Os:$n,minFilter:Ns,samples:pe?4:0})),y.getDrawingBufferSize(Ne),pe?Me.setSize(Ne.x,Ne.y):Me.setSize(Ga(Ne.x),Ga(Ne.y));let Se=y.getRenderTarget();y.setRenderTarget(Me),y.getClearColor(q),P=y.getClearAlpha(),P<1&&y.setClearColor(16777215,.5),y.clear();let Ce=y.toneMapping;y.toneMapping=Zn,or(w,k,H),S.updateMultisampleRenderTarget(Me),S.updateRenderTargetMipmap(Me);let De=!1;for(let qe=0,Be=D.length;qe<Be;qe++){let He=D[qe],xt=He.object,qt=He.geometry,Tt=He.material,Tn=He.group;if(Tt.side===hn&&xt.layers.test(H.layers)){let ft=Tt.side;Tt.side=zt,Tt.needsUpdate=!0,bl(xt,k,H,qt,Tt,Tn),Tt.side=ft,Tt.needsUpdate=!0,De=!0}}De===!0&&(S.updateMultisampleRenderTarget(Me),S.updateRenderTargetMipmap(Me)),y.setRenderTarget(Se),y.setClearColor(q,P),y.toneMapping=Ce}function or(w,D,k){let H=D.isScene===!0?D.overrideMaterial:null;for(let B=0,pe=w.length;B<pe;B++){let Se=w[B],Ce=Se.object,De=Se.geometry,qe=H===null?Se.material:H,Be=Se.group;Ce.layers.test(k.layers)&&bl(Ce,D,k,De,qe,Be)}}function bl(w,D,k,H,B,pe){w.onBeforeRender(y,D,k,H,B,pe),w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(y,D,k,H,w,pe),B.transparent===!0&&B.side===hn&&B.forceSinglePass===!1?(B.side=zt,B.needsUpdate=!0,y.renderBufferDirect(k,D,H,B,w,pe),B.side=Jn,B.needsUpdate=!0,y.renderBufferDirect(k,D,H,B,w,pe),B.side=hn):y.renderBufferDirect(k,D,H,B,w,pe),w.onAfterRender(y,D,k,H,B,pe)}function ar(w,D,k){D.isScene!==!0&&(D=Ae);let H=ve.get(w),B=m.state.lights,pe=m.state.shadowsArray,Se=B.state.version,Ce=le.getParameters(w,B.state,pe,D,k),De=le.getProgramCacheKey(Ce),qe=H.programs;H.environment=w.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(w.isMeshStandardMaterial?z:v).get(w.envMap||H.environment),qe===void 0&&(w.addEventListener("dispose",ce),qe=new Map,H.programs=qe);let Be=qe.get(De);if(Be!==void 0){if(H.currentProgram===Be&&H.lightsStateVersion===Se)return wl(w,Ce),Be}else Ce.uniforms=le.getUniforms(w),w.onBuild(k,Ce,y),w.onBeforeCompile(Ce,y),Be=le.acquireProgram(Ce,De),qe.set(De,Be),H.uniforms=Ce.uniforms;let He=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(He.clippingPlanes=Xe.uniform),wl(w,Ce),H.needsLights=of(w),H.lightsStateVersion=Se,H.needsLights&&(He.ambientLightColor.value=B.state.ambient,He.lightProbe.value=B.state.probe,He.directionalLights.value=B.state.directional,He.directionalLightShadows.value=B.state.directionalShadow,He.spotLights.value=B.state.spot,He.spotLightShadows.value=B.state.spotShadow,He.rectAreaLights.value=B.state.rectArea,He.ltc_1.value=B.state.rectAreaLTC1,He.ltc_2.value=B.state.rectAreaLTC2,He.pointLights.value=B.state.point,He.pointLightShadows.value=B.state.pointShadow,He.hemisphereLights.value=B.state.hemi,He.directionalShadowMap.value=B.state.directionalShadowMap,He.directionalShadowMatrix.value=B.state.directionalShadowMatrix,He.spotShadowMap.value=B.state.spotShadowMap,He.spotLightMatrix.value=B.state.spotLightMatrix,He.spotLightMap.value=B.state.spotLightMap,He.pointShadowMap.value=B.state.pointShadowMap,He.pointShadowMatrix.value=B.state.pointShadowMatrix),H.currentProgram=Be,H.uniformsList=null,Be}function Sl(w){if(w.uniformsList===null){let D=w.currentProgram.getUniforms();w.uniformsList=os.seqWithValue(D.seq,w.uniforms)}return w.uniformsList}function wl(w,D){let k=ve.get(w);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function sf(w,D,k,H,B){D.isScene!==!0&&(D=Ae),S.resetTextureUnits();let pe=D.fog,Se=H.isMeshStandardMaterial?D.environment:null,Ce=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Nn,De=(H.isMeshStandardMaterial?z:v).get(H.envMap||Se),qe=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Be=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),He=!!k.morphAttributes.position,xt=!!k.morphAttributes.normal,qt=!!k.morphAttributes.color,Tt=Zn;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Tt=y.toneMapping);let Tn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ft=Tn!==void 0?Tn.length:0,Ze=ve.get(H),Zo=m.state.lights;if(K===!0&&(ue===!0||w!==M)){let Jt=w===M&&H.id===I;Xe.setState(H,w,Jt)}let mt=!1;H.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Zo.state.version||Ze.outputColorSpace!==Ce||B.isBatchedMesh&&Ze.batching===!1||!B.isBatchedMesh&&Ze.batching===!0||B.isInstancedMesh&&Ze.instancing===!1||!B.isInstancedMesh&&Ze.instancing===!0||B.isSkinnedMesh&&Ze.skinning===!1||!B.isSkinnedMesh&&Ze.skinning===!0||B.isInstancedMesh&&Ze.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ze.instancingColor===!1&&B.instanceColor!==null||Ze.envMap!==De||H.fog===!0&&Ze.fog!==pe||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Xe.numPlanes||Ze.numIntersection!==Xe.numIntersection)||Ze.vertexAlphas!==qe||Ze.vertexTangents!==Be||Ze.morphTargets!==He||Ze.morphNormals!==xt||Ze.morphColors!==qt||Ze.toneMapping!==Tt||Ue.isWebGL2===!0&&Ze.morphTargetsCount!==ft)&&(mt=!0):(mt=!0,Ze.__version=H.version);let li=Ze.currentProgram;mt===!0&&(li=ar(H,D,B));let El=!1,Ss=!1,$o=!1,Ut=li.getUniforms(),hi=Ze.uniforms;if($.useProgram(li.program)&&(El=!0,Ss=!0,$o=!0),H.id!==I&&(I=H.id,Ss=!0),El||M!==w){Ut.setValue(N,"projectionMatrix",w.projectionMatrix),Ut.setValue(N,"viewMatrix",w.matrixWorldInverse);let Jt=Ut.map.cameraPosition;Jt!==void 0&&Jt.setValue(N,Oe.setFromMatrixPosition(w.matrixWorld)),Ue.logarithmicDepthBuffer&&Ut.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ut.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Ss=!0,$o=!0)}if(B.isSkinnedMesh){Ut.setOptional(N,B,"bindMatrix"),Ut.setOptional(N,B,"bindMatrixInverse");let Jt=B.skeleton;Jt&&(Ue.floatVertexTextures?(Jt.boneTexture===null&&Jt.computeBoneTexture(),Ut.setValue(N,"boneTexture",Jt.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Ut.setOptional(N,B,"batchingTexture"),Ut.setValue(N,"batchingTexture",B._matricesTexture,S));let Jo=k.morphAttributes;if((Jo.position!==void 0||Jo.normal!==void 0||Jo.color!==void 0&&Ue.isWebGL2===!0)&&Je.update(B,k,li),(Ss||Ze.receiveShadow!==B.receiveShadow)&&(Ze.receiveShadow=B.receiveShadow,Ut.setValue(N,"receiveShadow",B.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(hi.envMap.value=De,hi.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Ss&&(Ut.setValue(N,"toneMappingExposure",y.toneMappingExposure),Ze.needsLights&&rf(hi,$o),pe&&H.fog===!0&&he.refreshFogUniforms(hi,pe),he.refreshMaterialUniforms(hi,H,J,W,Me),os.upload(N,Sl(Ze),hi,S)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(os.upload(N,Sl(Ze),hi,S),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ut.setValue(N,"center",B.center),Ut.setValue(N,"modelViewMatrix",B.modelViewMatrix),Ut.setValue(N,"normalMatrix",B.normalMatrix),Ut.setValue(N,"modelMatrix",B.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let Jt=H.uniformsGroups;for(let Ko=0,af=Jt.length;Ko<af;Ko++)if(Ue.isWebGL2){let Tl=Jt[Ko];et.update(Tl,li),et.bind(Tl,li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return li}function rf(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function of(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,D,k){ve.get(w.texture).__webglTexture=D,ve.get(w.depthTexture).__webglTexture=k;let H=ve.get(w);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,D){let k=ve.get(w);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,k=0){A=w,R=D,T=k;let H=!0,B=null,pe=!1,Se=!1;if(w){let De=ve.get(w);De.__useDefaultFramebuffer!==void 0?($.bindFramebuffer(N.FRAMEBUFFER,null),H=!1):De.__webglFramebuffer===void 0?S.setupRenderTarget(w):De.__hasExternalTextures&&S.rebindTextures(w,ve.get(w.texture).__webglTexture,ve.get(w.depthTexture).__webglTexture);let qe=w.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Se=!0);let Be=ve.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Be[D])?B=Be[D][k]:B=Be[D],pe=!0):Ue.isWebGL2&&w.samples>0&&S.useMultisampledRTT(w)===!1?B=ve.get(w).__webglMultisampledFramebuffer:Array.isArray(Be)?B=Be[k]:B=Be,E.copy(w.viewport),O.copy(w.scissor),V=w.scissorTest}else E.copy(ee).multiplyScalar(J).floor(),O.copy(ie).multiplyScalar(J).floor(),V=de;if($.bindFramebuffer(N.FRAMEBUFFER,B)&&Ue.drawBuffers&&H&&$.drawBuffers(w,B),$.viewport(E),$.scissor(O),$.setScissorTest(V),pe){let De=ve.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,De.__webglTexture,k)}else if(Se){let De=ve.get(w.texture),qe=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,De.__webglTexture,k||0,qe)}I=-1},this.readRenderTargetPixels=function(w,D,k,H,B,pe,Se){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ve.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(Ce=Ce[Se]),Ce){$.bindFramebuffer(N.FRAMEBUFFER,Ce);try{let De=w.texture,qe=De.format,Be=De.type;if(qe!==dn&&ye.convert(qe)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let He=Be===Os&&(we.has("EXT_color_buffer_half_float")||Ue.isWebGL2&&we.has("EXT_color_buffer_float"));if(Be!==$n&&ye.convert(Be)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===qn&&(Ue.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-H&&k>=0&&k<=w.height-B&&N.readPixels(D,k,H,B,ye.convert(qe),ye.convert(Be),pe)}finally{let De=A!==null?ve.get(A).__webglFramebuffer:null;$.bindFramebuffer(N.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(w,D,k=0){let H=Math.pow(2,-k),B=Math.floor(D.image.width*H),pe=Math.floor(D.image.height*H);S.setTexture2D(D,0),N.copyTexSubImage2D(N.TEXTURE_2D,k,0,0,w.x,w.y,B,pe),$.unbindTexture()},this.copyTextureToTexture=function(w,D,k,H=0){let B=D.image.width,pe=D.image.height,Se=ye.convert(k.format),Ce=ye.convert(k.type);S.setTexture2D(k,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment),D.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,H,w.x,w.y,B,pe,Se,Ce,D.image.data):D.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,H,w.x,w.y,D.mipmaps[0].width,D.mipmaps[0].height,Se,D.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,H,w.x,w.y,Se,Ce,D.image),H===0&&k.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),$.unbindTexture()},this.copyTextureToTexture3D=function(w,D,k,H,B=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let pe=w.max.x-w.min.x+1,Se=w.max.y-w.min.y+1,Ce=w.max.z-w.min.z+1,De=ye.convert(H.format),qe=ye.convert(H.type),Be;if(H.isData3DTexture)S.setTexture3D(H,0),Be=N.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)S.setTexture2DArray(H,0),Be=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment);let He=N.getParameter(N.UNPACK_ROW_LENGTH),xt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),qt=N.getParameter(N.UNPACK_SKIP_PIXELS),Tt=N.getParameter(N.UNPACK_SKIP_ROWS),Tn=N.getParameter(N.UNPACK_SKIP_IMAGES),ft=k.isCompressedTexture?k.mipmaps[B]:k.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,ft.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ft.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,w.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,w.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,w.min.z),k.isDataTexture||k.isData3DTexture?N.texSubImage3D(Be,B,D.x,D.y,D.z,pe,Se,Ce,De,qe,ft.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Be,B,D.x,D.y,D.z,pe,Se,Ce,De,ft.data)):N.texSubImage3D(Be,B,D.x,D.y,D.z,pe,Se,Ce,De,qe,ft),N.pixelStorei(N.UNPACK_ROW_LENGTH,He),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,xt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,qt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Tt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Tn),B===0&&H.generateMipmaps&&N.generateMipmap(Be),$.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?S.setTextureCube(w,0):w.isData3DTexture?S.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?S.setTexture2DArray(w,0):S.setTexture2D(w,0),$.unbindTexture()},this.resetState=function(){R=0,T=0,A=null,$.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Dc?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===So?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===gt?vi:Mu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===vi?gt:Nn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},sc=class extends Bs{};sc.prototype.isWebGL1Renderer=!0;var eo=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ge(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},to=class extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var ks=class extends vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},eu=new C,tu=new C,nu=new dt,Pa=new hs,Pr=new bi,rc=class extends Pt{constructor(e=new _t,t=new ks){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)eu.fromBufferAttribute(t,s-1),tu.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=eu.distanceTo(tu);e.setAttribute("lineDistance",new $e(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pr.copy(i.boundingSphere),Pr.applyMatrix4(s),Pr.radius+=r,e.ray.intersectsSphere(Pr)===!1)return;nu.copy(s).invert(),Pa.copy(e.ray).applyMatrix4(nu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new C,h=new C,u=new C,f=new C,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let d=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let y=d,b=x-1;y<b;y+=p){let R=g.getX(y),T=g.getX(y+1);if(l.fromBufferAttribute(m,R),h.fromBufferAttribute(m,T),Pa.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let I=e.ray.origin.distanceTo(f);I<e.near||I>e.far||t.push({distance:I,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let d=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let y=d,b=x-1;y<b;y+=p){if(l.fromBufferAttribute(m,y),h.fromBufferAttribute(m,y+1),Pa.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let T=e.ray.origin.distanceTo(f);T<e.near||T>e.far||t.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},iu=new C,su=new C,no=class extends rc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)iu.fromBufferAttribute(t,s),su.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+iu.distanceTo(su);e.setAttribute("lineDistance",new $e(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Hs=class extends vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ru=new dt,oc=new hs,Lr=new bi,Ir=new C,io=class extends Pt{constructor(e=new _t,t=new Hs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Lr.copy(i.boundingSphere),Lr.applyMatrix4(s),Lr.radius+=r,e.ray.intersectsSphere(Lr)===!1)return;ru.copy(s).invert(),oc.copy(e.ray).applyMatrix4(ru);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){let f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=f,_=p;g<_;g++){let m=l.getX(g);Ir.fromBufferAttribute(u,m),ou(Ir,m,c,s,e,t,this)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,_=p;g<_;g++)Ir.fromBufferAttribute(u,g),ou(Ir,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ou(n,e,t,i,s,r,o){let a=oc.distanceSqToPoint(n);if(a<t){let c=new C;oc.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}var Vs=class extends en{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new fe:new C);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new C,s=[],r=[],o=[],a=new C,c=new dt;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ct(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Ct(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Gs=class extends tn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){let i=t||new fe,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*u+this.aX,l=f*u+p*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ac=class extends Gs{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Nc(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,p*=h,s(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Dr=new C,La=new Nc,Ia=new Nc,Da=new Nc,cc=class extends tn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new C){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Dr.subVectors(s[0],s[1]).add(s[0]),l=Dr);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Dr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Dr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),La.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,m),Ia.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,m),Da.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(La.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Ia.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Da.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return i.set(La.calc(c),Ia.calc(c),Da.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function au(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function sy(n,e){let t=1-n;return t*t*e}function ry(n,e){return 2*(1-n)*n*e}function oy(n,e){return n*n*e}function Is(n,e,t,i){return sy(n,e)+ry(n,t)+oy(n,i)}function ay(n,e){let t=1-n;return t*t*t*e}function cy(n,e){let t=1-n;return 3*t*t*n*e}function ly(n,e){return 3*(1-n)*n*n*e}function hy(n,e){return n*n*n*e}function Ds(n,e,t,i,s){return ay(n,e)+cy(n,t)+ly(n,i)+hy(n,s)}var so=class extends tn{constructor(e=new fe,t=new fe,i=new fe,s=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new fe){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ds(e,s.x,r.x,o.x,a.x),Ds(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},lc=class extends tn{constructor(e=new C,t=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ds(e,s.x,r.x,o.x,a.x),Ds(e,s.y,r.y,o.y,a.y),Ds(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ro=class extends tn{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hc=class extends tn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oo=class extends tn{constructor(e=new fe,t=new fe,i=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new fe){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Is(e,s.x,r.x,o.x),Is(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},uc=class extends tn{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Is(e,s.x,r.x,o.x),Is(e,s.y,r.y,o.y),Is(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ao=class extends tn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(au(a,c.x,l.x,h.x,u.x),au(a,c.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new fe().fromArray(s))}return this}},cu=Object.freeze({__proto__:null,ArcCurve:ac,CatmullRomCurve3:cc,CubicBezierCurve:so,CubicBezierCurve3:lc,EllipseCurve:Gs,LineCurve:ro,LineCurve3:hc,QuadraticBezierCurve:oo,QuadraticBezierCurve3:uc,SplineCurve:ao}),dc=class extends tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cu[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new cu[s.type]().fromJSON(s))}return this}},fc=class extends dc{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ro(this.currentPoint.clone(),new fe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new oo(this.currentPoint.clone(),new fe(e,t),new fe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new so(this.currentPoint.clone(),new fe(e,t),new fe(i,s),new fe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ao(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){let l=new Gs(e,t,i,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},pc=class n extends _t{constructor(e=[new fe(0,-.5),new fe(.5,0),new fe(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Ct(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,u=new C,f=new fe,p=new C,g=new C,_=new C,m=0,d=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,d=e[x+1].y-e[x].y,p.x=d*1,p.y=-m,p.z=d*0,_.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:m=e[x+1].x-e[x].x,d=e[x+1].y-e[x].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),c.push(p.x,p.y,p.z),_.copy(g)}for(let x=0;x<=t;x++){let y=i+x*h*s,b=Math.sin(y),R=Math.cos(y);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*b,u.y=e[T].y,u.z=e[T].x*R,o.push(u.x,u.y,u.z),f.x=x/t,f.y=T/(e.length-1),a.push(f.x,f.y);let A=c[3*T+0]*b,I=c[3*T+1],M=c[3*T+0]*R;l.push(A,I,M)}}for(let x=0;x<t;x++)for(let y=0;y<e.length-1;y++){let b=y+x*e.length,R=b,T=b+e.length,A=b+e.length+1,I=b+1;r.push(R,T,I),r.push(A,I,T)}this.setIndex(r),this.setAttribute("position",new $e(o,3)),this.setAttribute("uv",new $e(a,2)),this.setAttribute("normal",new $e(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},co=class n extends pc{constructor(e=1,t=1,i=4,s=8){let r=new fc;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},lo=class n extends _t{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new C,h=new fe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let p=i+u/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new $e(o,3)),this.setAttribute("normal",new $e(a,3)),this.setAttribute("uv",new $e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Qn=class n extends _t{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],g=0,_=[],m=i/2,d=0;x(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(f,3)),this.setAttribute("uv",new $e(p,2));function x(){let b=new C,R=new C,T=0,A=(t-e)/i;for(let I=0;I<=r;I++){let M=[],E=I/r,O=E*(t-e)+e;for(let V=0;V<=s;V++){let q=V/s,P=q*c+a,F=Math.sin(P),W=Math.cos(P);R.x=O*F,R.y=-E*i+m,R.z=O*W,u.push(R.x,R.y,R.z),b.set(F,A,W).normalize(),f.push(b.x,b.y,b.z),p.push(q,1-E),M.push(g++)}_.push(M)}for(let I=0;I<s;I++)for(let M=0;M<r;M++){let E=_[M][I],O=_[M+1][I],V=_[M+1][I+1],q=_[M][I+1];h.push(E,O,q),h.push(O,V,q),T+=6}l.addGroup(d,T,0),d+=T}function y(b){let R=g,T=new fe,A=new C,I=0,M=b===!0?e:t,E=b===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,m*E,0),f.push(0,E,0),p.push(.5,.5),g++;let O=g;for(let V=0;V<=s;V++){let P=V/s*c+a,F=Math.cos(P),W=Math.sin(P);A.x=M*W,A.y=m*E,A.z=M*F,u.push(A.x,A.y,A.z),f.push(0,E,0),T.x=F*.5+.5,T.y=W*.5*E+.5,p.push(T.x,T.y),g++}for(let V=0;V<s;V++){let q=R+V,P=O+V;b===!0?h.push(P,P+1,q):h.push(P+1,P,q),I+=3}l.addGroup(d,I,b===!0?1:2),d+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ho=class n extends Qn{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},mc=class n extends _t{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new $e(r,3)),this.setAttribute("normal",new $e(r.slice(),3)),this.setAttribute("uv",new $e(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let y=new C,b=new C,R=new C;for(let T=0;T<t.length;T+=3)p(t[T+0],y),p(t[T+1],b),p(t[T+2],R),c(y,b,R,x)}function c(x,y,b,R){let T=R+1,A=[];for(let I=0;I<=T;I++){A[I]=[];let M=x.clone().lerp(b,I/T),E=y.clone().lerp(b,I/T),O=T-I;for(let V=0;V<=O;V++)V===0&&I===T?A[I][V]=M:A[I][V]=M.clone().lerp(E,V/O)}for(let I=0;I<T;I++)for(let M=0;M<2*(T-I)-1;M++){let E=Math.floor(M/2);M%2===0?(f(A[I][E+1]),f(A[I+1][E]),f(A[I][E])):(f(A[I][E+1]),f(A[I+1][E+1]),f(A[I+1][E]))}}function l(x){let y=new C;for(let b=0;b<r.length;b+=3)y.x=r[b+0],y.y=r[b+1],y.z=r[b+2],y.normalize().multiplyScalar(x),r[b+0]=y.x,r[b+1]=y.y,r[b+2]=y.z}function h(){let x=new C;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];let b=m(x)/2/Math.PI+.5,R=d(x)/Math.PI+.5;o.push(b,1-R)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){let y=o[x+0],b=o[x+2],R=o[x+4],T=Math.max(y,b,R),A=Math.min(y,b,R);T>.9&&A<.1&&(y<.2&&(o[x+0]+=1),b<.2&&(o[x+2]+=1),R<.2&&(o[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function p(x,y){let b=x*3;y.x=e[b+0],y.y=e[b+1],y.z=e[b+2]}function g(){let x=new C,y=new C,b=new C,R=new C,T=new fe,A=new fe,I=new fe;for(let M=0,E=0;M<r.length;M+=9,E+=6){x.set(r[M+0],r[M+1],r[M+2]),y.set(r[M+3],r[M+4],r[M+5]),b.set(r[M+6],r[M+7],r[M+8]),T.set(o[E+0],o[E+1]),A.set(o[E+2],o[E+3]),I.set(o[E+4],o[E+5]),R.copy(x).add(y).add(b).divideScalar(3);let O=m(R);_(T,E+0,x,O),_(A,E+2,y,O),_(I,E+4,b,O)}}function _(x,y,b,R){R<0&&x.x===1&&(o[y]=x.x-1),b.x===0&&b.z===0&&(o[y]=R/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function d(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var uo=class n extends mc{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var fo=class n extends _t{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=e,f=(t-e)/s,p=new C,g=new fe;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){let d=r+m/i*o;p.x=u*Math.cos(d),p.y=u*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){let m=_*(i+1);for(let d=0;d<i;d++){let x=d+m,y=x,b=x+i+1,R=x+i+2,T=x+1;a.push(y,b,T),a.push(b,R,T)}}this.setIndex(a),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(l,3)),this.setAttribute("uv",new $e(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var wi=class n extends _t{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new C,f=new C,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){let x=[],y=d/i,b=0;d===0&&o===0?b=.5/t:d===i&&c===Math.PI&&(b=-.5/t);for(let R=0;R<=t;R++){let T=R/t;u.x=-e*Math.cos(s+T*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+T*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(T+b,1-y),x.push(l++)}h.push(x)}for(let d=0;d<i;d++)for(let x=0;x<t;x++){let y=h[d][x+1],b=h[d][x],R=h[d+1][x],T=h[d+1][x+1];(d!==0||o>0)&&p.push(y,b,T),(d!==i-1||c<Math.PI)&&p.push(b,R,T)}this.setIndex(p),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var po=class n extends _t{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new C,u=new C,f=new C;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let _=g/s*r,m=p/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,x=(s+1)*p+g;o.push(_,m,x),o.push(m,d,x)}this.setIndex(o),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var fs=class extends vn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ge(16777215),this.specular=new ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ic,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var $t=class extends vn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ic,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Ur(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function uy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ps=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},gc=class extends ps{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hh,endingEnd:hh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case uh:r=e,a=2*t-i;break;case dh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case uh:o=e,c=2*i-t;break;case dh:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,d=-f*m+2*f*_-f*g,x=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,y=(-1-p)*m+(1.5+p)*_+.5*g,b=p*m-p*_;for(let R=0;R!==a;++R)r[R]=d*o[h+R]+x*o[l+R]+y*o[c+R]+b*o[u+R];return r}},_c=class extends ps{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},yc=class extends ps{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},pn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ur(t,this.TimeBufferType),this.values=Ur(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ur(e.times,Array),values:Ur(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new yc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _c(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new gc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fr:t=this.InterpolantFactoryMethodDiscrete;break;case zr:t=this.InterpolantFactoryMethodLinear;break;case ra:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fr;case this.InterpolantFactoryMethodLinear:return zr;case this.InterpolantFactoryMethodSmooth:return ra}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&uy(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ra,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*i,f=u-i,p=u+i;for(let g=0;g!==i;++g){let _=t[u+g];if(_!==t[f+g]||_!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=zr;var Ei=class extends pn{};Ei.prototype.ValueTypeName="bool";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=Fr;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var xc=class extends pn{};xc.prototype.ValueTypeName="color";var vc=class extends pn{};vc.prototype.ValueTypeName="number";var Mc=class extends ps{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)xn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ws=class extends pn{InterpolantFactoryMethodLinear(e){return new Mc(this.times,this.values,this.getValueSize(),e)}};Ws.prototype.ValueTypeName="quaternion";Ws.prototype.DefaultInterpolation=zr;Ws.prototype.InterpolantFactoryMethodSmooth=void 0;var Ti=class extends pn{};Ti.prototype.ValueTypeName="string";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=Fr;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var bc=class extends pn{};bc.prototype.ValueTypeName="vector";var Sc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},dy=new Sc,wc=class{constructor(e){this.manager=e!==void 0?e:dy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};wc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xs=class extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},mo=class extends Xs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ua=new dt,lu=new C,hu=new C,go=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;lu.setFromMatrixPosition(e.matrixWorld),t.position.copy(lu),hu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hu),t.updateMatrixWorld(),Ua.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ua),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ua)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var uu=new dt,Cs=new C,Na=new C,Ec=class extends go{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new fe(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Cs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Cs),Na.copy(i.position),Na.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Na),i.updateMatrixWorld(),s.makeTranslation(-Cs.x,-Cs.y,-Cs.z),uu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uu)}},_o=class extends Xs{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ec}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Tc=class extends go{constructor(){super(new Kr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yo=class extends Xs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new Tc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Oc="\\[\\]\\.:\\/",fy=new RegExp("["+Oc+"]","g"),Fc="[^"+Oc+"]",py="[^"+Oc.replace("\\.","")+"]",my=/((?:WC+[\/:])*)/.source.replace("WC",Fc),gy=/(WCOD+)?/.source.replace("WCOD",py),_y=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fc),yy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fc),xy=new RegExp("^"+my+gy+_y+yy+"$"),vy=["material","materials","bones","map"],Ac=class{constructor(e,t,i){let s=i||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ht=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(fy,"")}static parseTrackName(e){let t=xy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);vy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ht.Composite=Ac;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Qx=new Float32Array(1);var xo=class{constructor(e,t,i=0,s=1/0){this.ray=new hs(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Rc(e,this,i,t),i.sort(du),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Rc(e[s],this,i,t);return i.sort(du),i}};function du(n,e){return n.distance-e.distance}function Rc(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)Rc(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cc);async function Eo(n){let e=await fetch(n,{cache:"no-cache"});if(!e.ok)throw new Error(`Failed to load ${n}: ${e.status}`);return e.json()}async function Iu(){if(globalThis.__PIZZA_DATA__)return globalThis.__PIZZA_DATA__;let[n,e,t]=await Promise.all([Eo("data/economy.json"),Eo("data/strings/en.json"),Eo("data/locations/index.json")]),i=await Promise.all(t.map(r=>Eo(`data/locations/${r}.json`))),s=Object.fromEntries(i.map(r=>[r.id,r]));return{economy:n,strings:e,locations:s}}var Du={};function Uu(n){Du=n}function U(n,e={}){let t=Du[n];if(t===void 0)return console.warn("[i18n] missing key",n),n;for(let i of Object.keys(e))t=t.split("{"+i+"}").join(String(e[i]));return t}var My=new Intl.NumberFormat(void 0,{notation:"compact",maximumFractionDigits:1}),by=new Intl.NumberFormat(void 0,{maximumFractionDigits:0});function zc(n){return My.format(Math.floor(n))}function wt(n){return by.format(Math.floor(n))}function Bc(n){let e=Math.floor(n/3600),t=Math.floor(n%3600/60);return e>0?`${e}h ${t}m`:`${t}m`}function Nu(n){return n<10?n.toFixed(1):zc(n)}var kc={schemaVersion:2,rngSeed:1234567,cash:0,lifetimeCash:0,gameTime:0,dayClock:.3,savedAt:0,createdAt:0,location:"corner",unlockedLocations:{corner:!0,sideStreet:!1},upgrades:{oven:0,counter:0,cheese:0,decor:0,neon:0,scooter:0,marketing:0,pizzaSchool:0,megaOven:0},staff:{cashier:0,cook:0},styles:{margherita:!0,pepperoni:!1,veggie:!1,seasonal:!1},franchise:{points:0,count:0,lifetimeAtLast:0,readyNotified:!1},tutorialStep:0,tutorialDone:!1,stats:{ordersTaken:0,manualStretch:0,manualTopping:0,manualLoad:0,served:0,angry:0,turnedAway:0,upgradesBought:0,staffHired:0},flags:{firstPurchase:!1},events:{active:[],nextAt:240},customers:[],pizzas:[],nextId:1,cashierTimer:0,cashierIdle:0,cookIdle:0,idleNotified:{cashier:!1,cook:!1},spawnTimer:4,settings:{sound:!0,notify:!1,graphics:"auto"},cosmetics:{ovenSkin:"skin.classic"}};function To(n,e=Date.now()){let t=structuredClone(kc);return t.cash=n.economy.startingCash,t.dayClock=n.economy.time.startDayClock,t.rngSeed=e%2147483647|0||1,t.createdAt=e,t.savedAt=e,t}var Hc=2,Vc="pizzastand.save",Sy={1:n=>{let e=n.franchise||(n.franchise={points:0,count:0});return e.lifetimeAtLast=e.count>0&&n.lifetimeCash||0,e.readyNotified=!1,delete e.unlocked,n}};function Ou(n,e){for(let t of Object.keys(e)){let i=e[t];n[t]===void 0?n[t]=structuredClone(i):i&&typeof i=="object"&&!Array.isArray(i)&&typeof n[t]=="object"&&Ou(n[t],i)}return n}function wy(n){let e=n.schemaVersion??0;for(;e<Hc;){let t=Sy[e];t&&(n=t(n)),e++}return n.schemaVersion=Hc,Ou(n,kc)}function Fu(){try{let n=globalThis.localStorage?.getItem(Vc);if(!n)return null;let e=JSON.parse(n);return typeof e.schemaVersion=="number"&&e.schemaVersion>Hc?(console.warn("[save] save is from a newer version; ignoring"),null):wy(e)}catch(n){return console.warn("[save] could not read save",n),null}}function zu(n){try{return globalThis.localStorage?.setItem(Vc,JSON.stringify(n)),!0}catch(e){return console.warn("[save] could not write save",e),!1}}function Bu(){try{globalThis.localStorage?.removeItem(Vc)}catch{}}var ku="pizzastand.analytics";var Hu=null,Vu=Date.now();function lt(n,e={}){let t={name:n,props:e,t:Date.now()};try{let i=JSON.parse(globalThis.localStorage?.getItem(ku)||"[]");for(i.push(t);i.length>200;)i.shift();globalThis.localStorage?.setItem(ku,JSON.stringify(i))}catch{}if(Hu)try{Hu(t)}catch{}}function Gc(){Vu=Date.now(),lt("session_start")}function Gu(n={}){lt("session_end",{durationSeconds:Math.round((Date.now()-Vu)/1e3),...n})}var Ys=null,Wu=!0;function Ao(n){Wu=n}function Ey(){if(!Wu)return null;if(!Ys){let n=globalThis.AudioContext||globalThis.webkitAudioContext;if(!n)return null;Ys=new n}return Ys.state==="suspended"&&Ys.resume(),Ys}function ei(n,e,t,i="sine",s=.2,r=null){let o=Ey();if(!o)return;let a=o.createOscillator(),c=o.createGain();a.type=i,a.frequency.setValueAtTime(n,o.currentTime+e),r&&a.frequency.exponentialRampToValueAtTime(r,o.currentTime+e+t),c.gain.setValueAtTime(s,o.currentTime+e),c.gain.exponentialRampToValueAtTime(1e-4,o.currentTime+e+t),a.connect(c).connect(o.destination),a.start(o.currentTime+e),a.stop(o.currentTime+e+t+.02)}var Xt={cash(){ei(1318,0,.12,"triangle",.25),ei(1760,.07,.25,"triangle",.22)},click(){ei(520,0,.05,"square",.08,380)},bell(){ei(880,0,.5,"sine",.18),ei(1320,.02,.4,"sine",.08)},pop(){ei(300,0,.12,"sine",.15,600)},angry(){ei(220,0,.3,"sawtooth",.1,140)},whoosh(){ei(180,0,.25,"sine",.08,420)}};function gs(n,e){return Math.ceil(n.baseCost*Math.pow(n.growth,e))}function Ro(n){let e=Math.sin(2*Math.PI*(n-.25)),t=Math.min(1,Math.max(0,(e+.2)/.5));return t*t*(3-2*t)}function Co(n,e){if(!e)return!0;switch(e.type){case"start":return!0;case"lifetime":return n.lifetimeCash>=e.value;case"staffLevel":return(n.staff[e.role]||0)>=e.value;case"upgradeLevel":return(n.upgrades[e.upgrade]||0)>=e.value;case"franchise":return n.franchise.count>=e.value;default:return!1}}function Ty(n,e){return e.locations?.[n.location]}function Ay(n,e){return Ty(n,e)?.economy??{trafficMult:1,styleDemand:{}}}function ti(n,e){let t=e.economy.prestige.tiers,i=0;return t.forEach((s,r)=>{n.franchise.count>=s.minFranchises&&(i=r)}),i}function Ry(n,e){return e.economy.prestige.tiers[ti(n,e)]}function Ai(n){return Math.max(0,n.lifetimeCash-(n.franchise.lifetimeAtLast||0))}function Ri(n,e){let t=e.economy.prestige;return Math.round(t.milestoneLifetimeCash*Math.pow(t.requirementGrowth,n.franchise.count))}function _s(n,e){return Ai(n)>=Ri(n,e)}function Po(n,e,t=n.franchise.count){let i=e.economy.prestige;return Math.min(i.trafficMaxMult??1/0,1+(i.trafficPerFranchise||0)*t)}function Cy(n,e){return 1+e.economy.prestige.bonusPerPoint*n.franchise.points}function nn(n,e){let t=e.economy,i=t.upgrades,s=n.upgrades,r=n.staff.cashier,o=n.staff.cook,a=i.decor.trafficPerLevel*s.decor+i.neon.trafficPerLevel*s.neon,c=Ay(n,e),l=Po(n,e),h=i.marketing?1+i.marketing.trafficMultPerLevel*(s.marketing||0):1,u=i.pizzaSchool?1+i.pizzaSchool.payMultPerLevel*(s.pizzaSchool||0):1,f=t.customers.spawnBaseSeconds/((1+a)*c.trafficMult*l*h),p=Ry(n,e),g=i.oven.ovenSlotsBase+i.oven.ovenSlotsPerLevel*s.oven+p.ovenSlotsBonus+(i.megaOven?i.megaOven.ovenSlotsPerLevel*(s.megaOven||0):0),_=i.counter.maxQueueBase+i.counter.maxQueuePerLevel*s.counter+p.maxQueueBonus,m=1+i.cheese.cheeseMultPerLevel*s.cheese,d=Cy(n,e),x=t.cashier.orderSecondsBase/(1+t.cashier.orderSpeedPerLevel*r),y=1+t.cook.speedPerLevel*o,b=Object.entries(t.styles).filter(([P,F])=>F.enabled&&n.styles[P]).map(([,P])=>P.basePrice),R=b.length?b.reduce((P,F)=>P+F,0)/b.length:t.styles.margherita.basePrice,T=10,A=1/f,I=g/T,M=Math.min(A,I),E=R*(t.pizzaQuality.payBase+t.pizzaQuality.payPerQuality*.8)*m*d*u,O=M*E*1.1,V=(r>0?1:0)+(o>0?1:0),q=Math.min(1,t.time.offlineBaseEfficiency+t.time.offlineEfficiencyPerStaffRole*V);return{traffic:a,locEcon:c,tier:p,frTraffic:l,empireTraffic:h,empirePay:u,spawnBase:f,ovenSlots:g,maxQueue:_,cheeseMult:m,prestigeMult:d,cashierOrderSec:x,cashierLvl:r,cookSpeed:y,cookLvl:o,idleRate:O,offlineEfficiency:q}}function Xu(n,e,t,i,s,r){let o=r.economy,a=o.styles[n].basePrice,c=o.pizzaQuality.payBase+o.pizzaQuality.payPerQuality*e,l=s?o.customers.wrongToppingPayMult:1;return a*c*t.cheeseMult*t.prestigeMult*(t.empirePay||1)*i.cashMult*l}function Ci(n,e){return Math.max(1,Math.floor(Ai(n)/e.economy.prestige.pointsDivisor))}function qu(n,e){for(let t of e.economy.goals)if(!Co(n,t.condition))return t;return null}function Pi(n){n.rngSeed=n.rngSeed+1831565813|0;let e=n.rngSeed;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zs(n,e){let t=e.reduce((s,r)=>s+r.weight,0),i=Pi(n)*t;for(let s of e)if(i-=s.weight,i<=0)return s.key;return e[e.length-1].key}function Wc(n,e,t){let i=t.economy.events[e];return i?(n.events.active.push({id:e,endsAt:n.gameTime+i.durationSeconds}),!0):!1}function Yu(n,e,t,i){let s=t.economy.time;if(n.events.active=n.events.active.filter(r=>n.gameTime>=r.endsAt?(i.push({type:"event_end",id:r.id}),!1):!0),n.events.active.length===0&&n.gameTime>=n.events.nextAt){let r=Object.entries(t.economy.events).map(([c,l])=>({key:c,weight:l.weight})),o=Zs(n,r);Wc(n,o,t),i.push({type:"event_start",id:o});let a=s.randomEventMinSeconds+(s.randomEventMaxSeconds-s.randomEventMinSeconds)*Pi(n);n.events.nextAt=n.gameTime+a}}function Lo(n,e){let t={spawnMult:1,patienceDrainMult:1,cashMult:1,styleDemand:{}};for(let i of n.events.active){let s=e.economy.events[i.id];if(s){t.spawnMult*=s.spawnMult,t.patienceDrainMult*=s.patienceDrainMult,t.cashMult*=s.cashMult;for(let[r,o]of Object.entries(s.styleDemand||{}))t.styleDemand[r]=(t.styleDemand[r]||1)*o}}return t}function ni(n,e){return n.customers.find(t=>t.id===e)}function Py(n,e){return n.pizzas.find(t=>t.id===e)}function Ly(n){return n.nextId++}function Io(n,e,t){let i=ni(n,e);if(!i||i.state!=="waiting")return{ok:!1};i.state="ordered";let s={id:Ly(n),customerId:i.id,style:i.style,stage:"dough",work:0,q:{dough:0,top:0,bake:0},topping:null,bakeLeft:0,readyTimer:0};return n.pizzas.push(s),n.stats.ordersTaken++,{ok:!0,type:"order_taken",customerId:i.id,pizzaId:s.id}}function $s(n,e,t,i,s){let r=Py(n,e);if(!r)return{ok:!1,reason:"noPizza"};let o=s.economy.manual,a=s.economy.stages;if(t==="stretch"){if(r.stage!=="dough")return{ok:!1,reason:"wrongStage"};let c=Math.max(0,Math.min(1,i.timeLeftFrac??0));return r.q.dough=i.finished?o.doughFinishMinQuality+(1-o.doughFinishMinQuality)*c:o.doughRushedQuality,r.work=0,r.stage="topping",n.stats.manualStretch++,{ok:!0,type:"stage",pizzaId:e,stage:"topping",auto:!1}}if(t==="topping"){if(r.stage!=="topping")return{ok:!1,reason:"wrongStage"};let c=ni(n,r.customerId),l=c&&i.topping===c.topping;return r.topping=i.topping,r.q.top=l?o.toppingCorrectQuality:o.toppingWrongQuality,r.work=0,r.stage="load",n.stats.manualTopping++,{ok:!0,type:"stage",pizzaId:e,stage:"load",auto:!1,correct:l}}if(t==="load"){if(r.stage!=="load")return{ok:!1,reason:"wrongStage"};let c=nn(n,s);if(Iy(n)>=c.ovenSlots)return{ok:!1,reason:"ovenFull"};let l=o.ovenSweetZone/2,h=Math.abs((i.markerPos??.5)-.5),u=h<=l?1:Math.max(o.ovenMinQuality,1-(h-l)*2.2);return Zu(n,r,u,s,"manual")}return t==="serve"?r.stage!=="ready"?{ok:!1,reason:"wrongStage"}:Xc(n,r,s):{ok:!1,reason:"unknownAction"}}function Iy(n){return n.pizzas.filter(e=>e.stage==="baking").length}function Zu(n,e,t,i,s){let r=i.economy.stages,o=i.economy.styles[e.style];return e.q.bake=t,e.stage="baking",e.bakeLeft=o.bakeSeconds*(t>=r.perfectBakeQuality?r.perfectBakeSpeedMult:1),e.work=0,s==="manual"&&n.stats.manualLoad++,{ok:!0,type:"stage",pizzaId:e.id,stage:"baking",auto:s!=="manual",quality:t}}function Xc(n,e,t){let i=ni(n,e.customerId);if(n.pizzas=n.pizzas.filter(_=>_.id!==e.id),!i)return{ok:!1,reason:"noCustomer"};n.customers=n.customers.filter(_=>_.id!==i.id);let s=nn(n,t),r=Lo(n,t),o=t.economy,a=(e.q.dough+e.q.top+e.q.bake)/3,c=e.topping!==i.topping,l=Xu(e.style,a,s,r,c,t),h=Math.max(0,i.patience/i.maxPatience),u=o.customers.types[i.type].tipMult,f=c?o.customers.wrongToppingTipMult:1,p=l*o.customers.tipMax*h*u*f,g=l+p;return n.cash+=g,n.lifetimeCash+=g,n.stats.served++,{ok:!0,type:"served",pizzaId:e.id,customerId:i.id,customerType:i.type,amount:l,tip:p,total:g,big:g>=o.bigSaleThreshold,wrongTopping:c}}function $u(n,e,t){let i=t.economy.stages,s=ni(n,e.customerId);return e.stage==="dough"?(e.q.dough=i.autoDoughQuality,e.stage="topping",e.work=0,{ok:!0,type:"stage",pizzaId:e.id,stage:"topping",auto:!0}):e.stage==="topping"?(e.topping=s?s.topping:null,e.q.top=i.autoToppingQuality,e.stage="load",e.work=0,{ok:!0,type:"stage",pizzaId:e.id,stage:"load",auto:!0}):{ok:!1}}function Ju(n,e,t){return Zu(n,e,t.economy.stages.autoLoadQuality,t,"auto")}function Ku(n,e,t,i=Date.now()){let s=t.economy.upgrades[e];if(!s||s.enabled===!1)return{ok:!1,reason:"locked"};if(s.requires&&n.franchise.count<(s.requires.franchises||0))return{ok:!1,reason:"needsFranchise",need:s.requires.franchises};let r=n.upgrades[e];if(r>=s.maxLevel)return{ok:!1,reason:"maxed"};let o=gs(s,r);return n.cash<o?{ok:!1,reason:"cash",cost:o}:(n.cash-=o,n.upgrades[e]=r+1,n.stats.upgradesBought++,{ok:!0,type:"bought",key:e,cost:o,first:ju(n)})}function Qu(n,e,t){let i=t.economy.staff[e],s=n.staff[e];if(s>=i.maxLevel)return{ok:!1,reason:"maxed"};let r=gs(i,s);return n.cash<r?{ok:!1,reason:"cash",cost:r}:(n.cash-=r,n.staff[e]=s+1,s===0&&n.stats.staffHired++,{ok:!0,type:"hired",role:e,cost:r,first:ju(n)})}function ju(n){return n.flags.firstPurchase?!1:(n.flags.firstPurchase=!0,!0)}function qc(n,e){return _s(n,e)}function ed(n,e,t,i=Date.now()){let s=Ci(n,e),r=t(e,i);return r.unlockedLocations={...n.unlockedLocations},r.franchise={points:n.franchise.points+s,count:n.franchise.count+1,lifetimeAtLast:n.lifetimeCash,readyNotified:!1},r.styles={...n.styles},r.tutorialStep=n.tutorialStep,r.tutorialDone=n.tutorialDone,r.stats={...n.stats},r.lifetimeCash=n.lifetimeCash,r.settings={...n.settings},r.cosmetics={...n.cosmetics},r.flags={...n.flags},r.rngSeed=n.rngSeed,r.gameTime=n.gameTime,r.dayClock=n.dayClock,r.createdAt=n.createdAt,r.events={active:[],nextAt:n.gameTime+240},{state:r,gain:s}}function td(n,e,t){return t.locations?.[e]?n.unlockedLocations[e]?n.location===e?{ok:!1,reason:"current"}:(n.location=e,n.customers=[],n.pizzas=[],n.cashierTimer=0,n.spawnTimer=t.economy.customers.spawnBaseSeconds,{ok:!0,type:"moved",location:e}):{ok:!1,reason:"locked"}:{ok:!1,reason:"unknown"}}var Dy=12;function Yc(n,e,t,i=[]){let s=t.economy;n.gameTime+=e,n.dayClock=(n.dayClock+e/s.time.dayLengthSeconds)%1,Yu(n,e,t,i);let r=Lo(n,t),o=nn(n,t),a=Ro(n.dayClock);return Uy(n,t,i),Ny(n,t,i),!n.franchise.readyNotified&&_s(n,t)&&(n.franchise.readyNotified=!0,i.push({type:"franchise_ready"})),Oy(n,e,r,t,i),Fy(n,e,r,o,a,t,i),zy(n,e,o,t,i),By(n,e,o,t,i),ky(n,e,i),Hy(n,t,i),i}function Uy(n,e,t){for(let[i,s]of Object.entries(e.economy.styles))s.enabled&&!n.styles[i]&&Co(n,s.unlock)&&(n.styles[i]=!0,t.push({type:"style_unlocked",style:i}))}function Ny(n,e,t){if(e.locations)for(let[i,s]of Object.entries(e.locations))!n.unlockedLocations[i]&&Co(n,s.unlock)&&(n.unlockedLocations[i]=!0,t.push({type:"location_unlocked",location:i}))}function Oy(n,e,t,i,s){for(let r of[...n.customers])if(r.patience-=e*t.patienceDrainMult,r.patience<=0){let o=Math.min(n.cash,i.economy.customers.angryPenalty);n.cash-=o,n.customers=n.customers.filter(a=>a.id!==r.id),n.pizzas=n.pizzas.filter(a=>a.customerId!==r.id),n.stats.angry++,s.push({type:"angry",customerId:r.id,customerType:r.type,nameIdx:r.nameIdx,penalty:o})}}function Fy(n,e,t,i,s,r,o){let a=r.economy.customers,c=a.nightSpawnMult+(1-a.nightSpawnMult)*s;n.spawnTimer-=e*t.spawnMult*c;let l=0;for(;n.spawnTimer<=0&&l++<20;){let h=i.spawnBase*(1+(Pi(n)*2-1)*a.spawnJitter);if(n.spawnTimer+=h,n.customers.filter(d=>d.state==="waiting").length>=i.maxQueue){n.stats.turnedAway++,o.push({type:"turned_away"});continue}let f=Zs(n,Object.entries(a.types).map(([d,x])=>({key:d,weight:x.weight}))),p=Object.keys(r.economy.styles).filter(d=>n.styles[d]).map(d=>({key:d,weight:(t.styleDemand[d]||1)*(i.locEcon.styleDemand[d]||1)})),g=Zs(n,p),_=a.toppings[Math.floor(Pi(n)*a.toppings.length)],m={id:n.nextId++,type:f,style:g,topping:_,nameIdx:1+Math.floor(Pi(n)*5),patience:a.types[f].patience,maxPatience:a.types[f].patience,state:"waiting"};n.customers.push(m),o.push({type:"arrived",customerId:m.id})}}function zy(n,e,t,i,s){if(t.cashierLvl===0)return;let r=n.customers.filter(a=>a.state==="waiting").sort((a,c)=>a.id-c.id),o=n.pizzas.filter(a=>a.stage==="ready");if(r.length>0){if(n.cashierTimer+=e,n.cashierTimer>=t.cashierOrderSec){n.cashierTimer=0;let a=Io(n,r[0].id,i);a.ok&&s.push({...a,auto:!0})}}else n.cashierTimer=0;r.length===0&&o.length===0?(n.cashierIdle+=e,nd(n,"cashier",s)):(n.cashierIdle=0,n.idleNotified.cashier=!1);for(let a of o)if(a.readyTimer+=e,a.readyTimer>=i.economy.stages.autoServeDelaySeconds){let c=Xc(n,a,i);c.ok&&s.push({...c,auto:!0})}}function By(n,e,t,i,s){if(t.cookLvl===0)return;let r=i.economy.stages,o=n.pizzas.filter(c=>c.stage==="dough"||c.stage==="topping").sort((c,l)=>c.id-l.id)[0];if(o){n.cookIdle=0,n.idleNotified.cook=!1,o.work+=e*t.cookSpeed;let c=o.stage==="dough"?r.autoDoughSeconds:r.autoToppingSeconds;if(o.work>=c){let l=$u(n,o,i);l.ok&&s.push({...l,auto:!0})}}else n.cookIdle+=e,nd(n,"cook",s);let a=n.pizzas.filter(c=>c.stage==="load").sort((c,l)=>c.id-l.id);for(let c of a){if(n.pizzas.filter(u=>u.stage==="baking").length>=t.ovenSlots)break;let h=Ju(n,c,i);h.ok&&s.push(h)}}function nd(n,e,t){(e==="cook"?n.cookIdle:n.cashierIdle)>=Dy&&!n.idleNotified[e]&&(n.idleNotified[e]=!0,t.push({type:"idle_staff",role:e}))}function ky(n,e,t){for(let i of n.pizzas)i.stage==="baking"&&(i.bakeLeft-=e,i.bakeLeft<=0&&(i.stage="ready",i.bakeLeft=0,t.push({type:"stage",pizzaId:i.id,stage:"ready",auto:!1})))}function Hy(n,e,t){if(n.tutorialDone)return;let i=e.economy.tutorial;for(;n.tutorialStep<i.length;){let s=i[n.tutorialStep].check;if((n.stats[s.stat]||0)<s.gte)break;n.tutorialStep++,t.push({type:"tutorial_step",step:n.tutorialStep})}n.tutorialStep>=i.length&&(n.tutorialDone=!0,t.push({type:"tutorial_done"}))}function id(n,e,t){let i=t.economy.time,s=Math.max(0,(e-n.savedAt)/1e3),r=Math.min(s,i.offlineCapSeconds),o=nn(n,t),a=Math.floor(r*o.idleRate*o.offlineEfficiency);return{rawSeconds:s,elapsed:r,capped:s>i.offlineCapSeconds,earned:a,rate:o.idleRate*o.offlineEfficiency}}function Zc(n,e,t,i=1){let s=Math.floor(e.earned*i);return n.cash+=s,n.lifetimeCash+=s,n.customers=[],n.pizzas=[],n.cashierTimer=0,n.spawnTimer=t.economy.customers.spawnBaseSeconds,n.gameTime+=e.elapsed,n.dayClock=(n.dayClock+e.elapsed/t.economy.time.dayLengthSeconds)%1,n.events.active=[],n.events.nextAt=n.gameTime+240,s}var $c=new Map;function Fo(n){let{roughness:e,metalness:t,...i}=n;return i}function ld(n,e={}){let t=n+"|"+JSON.stringify(e);return $c.has(t)||$c.set(t,new $t({color:n,...Fo(e)})),$c.get(t)}function xs(n,e={}){return new $t({color:n,...Fo(e)})}function Fn(n,e,t,i=1,s={}){let r=new $t({color:e,emissive:new ge(t),emissiveIntensity:.2,...Fo(s)});return r.userData.glow=i,n.glowMats.push(r),r}var mn=new $t({vertexColors:!0}),Di=new $t({vertexColors:!0,flatShading:!0}),el=new fs({vertexColors:!0,shininess:60,specular:new ge("#555555")}),Jc=new Map;function Lt(n,e){return Jc.has(n)||Jc.set(n,e()),Jc.get(n)}var ke={box:()=>Lt("box",()=>new Si(1,1,1)),cyl:(n=14)=>Lt("cyl"+n,()=>new Qn(1,1,1,n)),cone:(n=14)=>Lt("cone"+n,()=>new ho(1,1,n)),sphere:(n=16,e=12)=>Lt(`sph${n}_${e}`,()=>new wi(1,n,e)),dome:(n=16,e=8)=>Lt(`dome${n}_${e}`,()=>new wi(1,n,e,0,Math.PI*2,0,Math.PI/2)),ico:(n=0)=>Lt("ico"+n,()=>new uo(1,n)),torus:(n=.2,e=20)=>Lt(`tor${n}_${e}`,()=>new po(1,n,8,e)),capsule:(n,e)=>Lt(`cap${n}_${e}`,()=>new co(n,e,5,12)),ring:()=>Lt("ring",()=>new fo(.5,.56,32)),circle:()=>Lt("circle",()=>new lo(1,24))},Kc=new WeakMap;function Vy(n){return n.index?(Kc.has(n)||Kc.set(n,n.toNonIndexed()),Kc.get(n)):n}var Qc=new dt,sd=new xn,rd=new us,od=new C,ad=new C,Do=new C,Uo=new C,cd=new We,No=new ge,je=class{constructor(){this.pos=[],this.nor=[],this.col=[]}add(e,t,i=[0,0,0],s=[0,0,0],r=[1,1,1]){let o=Vy(e);rd.set(s[0],s[1],s[2]),sd.setFromEuler(rd),od.set(i[0],i[1],i[2]),ad.set(r[0],r[1],r[2]),Qc.compose(od,sd,ad),cd.getNormalMatrix(Qc),No.set(t);let a=o.attributes.position,c=o.attributes.normal;for(let l=0;l<a.count;l++)Do.fromBufferAttribute(a,l).applyMatrix4(Qc),Uo.fromBufferAttribute(c,l).applyMatrix3(cd).normalize(),this.pos.push(Do.x,Do.y,Do.z),this.nor.push(Uo.x,Uo.y,Uo.z),this.col.push(No.r,No.g,No.b);return this}box(e,t,i,s=[0,0,0]){return this.add(ke.box(),t,[i[0],i[1]+e[1]/2,i[2]],s,e)}boxC(e,t,i,s=[0,0,0]){return this.add(ke.box(),t,i,s,e)}cyl(e,t,i,s,r,o=[0,0,0],a=14){let c=e===t?ke.cyl(a):Lt(`cylT${(e/t).toFixed(3)}_${a}`,()=>new Qn(e/t,1,1,a));return this.add(c,s,[r[0],r[1]+i/2,r[2]],o,[t,i,t])}cylC(e,t,i,s,r=[0,0,0],o=12){return this.add(ke.cyl(o),i,s,r,[e,t,e])}cone(e,t,i,s,r=[0,0,0],o=14){return this.add(ke.cone(o),i,[s[0],s[1]+t/2,s[2]],r,[e,t,e])}sphere(e,t,i,s=[1,1,1],r=[16,12]){return this.add(ke.sphere(r[0],r[1]),t,i,[0,0,0],[e*s[0],e*s[1],e*s[2]])}dome(e,t,i,s=[1,1,1],r=[0,0,0]){return this.add(ke.dome(),t,i,r,[e*s[0],e*s[1],e*s[2]])}ico(e,t,i,s=[1,1,1],r=[0,0,0]){return this.add(ke.ico(1),t,i,r,[e*s[0],e*s[1],e*s[2]])}torus(e,t,i,s,r=[0,0,0],o=20){let a=ke.torus(Number((t/e).toFixed(3)),o);return this.add(a,i,s,r,[e,e,e])}get empty(){return this.pos.length===0}geometry(){let e=new _t;return e.setAttribute("position",new $e(this.pos,3)),e.setAttribute("normal",new $e(this.nor,3)),e.setAttribute("color",new $e(this.col,3)),e.computeBoundingSphere(),e}mesh(e=mn,{cast:t=!0,receive:i=!0}={}){let s=new Pe(this.geometry(),e);return s.castShadow=t,s.receiveShadow=i,s}},ys=new Map;function Gy(n,e){let t=document.createElement("canvas");t.width=t.height=n;let i=t.getContext("2d");e(i,n);let s=new Vs(t);return s.colorSpace=gt,s.wrapS=s.wrapT=Us,s.anisotropy=2,s}function Li(n){let e=n;return()=>(e=(e*1664525+1013904223)%4294967296,e/4294967296)}function Ii(n,e,t,i,s,r=!0){for(let o=0;o<i;o++){let a=t()*s;n.fillStyle=r?`rgba(255,255,255,${a})`:`rgba(0,0,0,${a})`,n.fillRect(t()*e,t()*e,1+t()*2,1+t()*2)}}var Wy={pavers(n,e){let t=Li(7);n.fillStyle="#b89a78",n.fillRect(0,0,e,e);let i=4,s=e/i;for(let r=0;r<i*2;r++)for(let o=-1;o<i;o++){let a=r%2*(s/2),c=196+Math.floor(t()*34);n.fillStyle=`rgb(${c+22},${c-6},${c-44})`,n.fillRect(o*s+a+2,r*(s/2)+2,s-4,s/2-4)}Ii(n,e,t,900,.07,!1),Ii(n,e,t,500,.06,!0)},asphalt(n,e){let t=Li(11);n.fillStyle="#4b4e55",n.fillRect(0,0,e,e),Ii(n,e,t,2600,.09,!0),Ii(n,e,t,2600,.14,!1)},brick(n,e){let t=Li(3);n.fillStyle="#d9c7b0",n.fillRect(0,0,e,e);let i=8,s=e/i,r=e/4;for(let o=0;o<i;o++)for(let a=-1;a<4;a++){let c=o%2*(r/2),l=t();n.fillStyle=`rgb(${150+l*40},${66+l*26},${48+l*18})`,n.fillRect(a*r+c+2,o*s+2,r-4,s-4)}Ii(n,e,t,700,.08,!1)},wood(n,e){let t=Li(5),i=4,s=e/i;for(let r=0;r<i;r++){let o=t();n.fillStyle=`rgb(${176+o*26},${118+o*22},${66+o*16})`,n.fillRect(r*s,0,s,e),n.fillStyle="rgba(70,40,15,0.5)",n.fillRect(r*s,0,2,e);for(let a=0;a<14;a++)n.fillStyle=`rgba(90,55,25,${.05+t()*.1})`,n.fillRect(r*s+t()*s,0,1+t()*2,e)}},plaster(n,e){let t=Li(9);n.fillStyle="#ffffff",n.fillRect(0,0,e,e),Ii(n,e,t,2200,.05,!1);for(let i=0;i<14;i++)n.fillStyle=`rgba(0,0,0,${.015+t()*.02})`,n.fillRect(t()*e,t()*e,30+t()*80,8+t()*30)},tiles(n,e){n.fillStyle="#d7d2c8",n.fillRect(0,0,e,e);let t=4,i=e/t;for(let s=0;s<t;s++)for(let r=0;r<t;r++)n.fillStyle=(r+s)%2?"#fbf7ee":"#f1ebde",n.fillRect(r*i+2,s*i+2,i-4,i-4)},checker(n,e){let i=e/4;for(let s=0;s<4;s++)for(let r=0;r<4;r++)n.fillStyle=(r+s)%2?"#f4ead8":"#b5483a",n.fillRect(r*i,s*i,i,i)},stripes(n,e){n.fillStyle="#fff6e6",n.fillRect(0,0,e,e),n.fillStyle="#d8402f",n.fillRect(0,0,e/2,e);let t=Li(2);Ii(n,e,t,500,.04,!1)},rooftiles(n,e){let t=Li(13);n.fillStyle="#8f3f2a",n.fillRect(0,0,e,e);let i=6,s=e/i,r=e/6;for(let o=0;o<i;o++)for(let a=-1;a<6;a++){let c=o%2*(r/2),l=t();n.fillStyle=`rgb(${186+l*30},${92+l*24},${58+l*16})`,n.beginPath(),n.ellipse(a*r+c+r/2,o*s+s*.35,r/2-1.5,s*.62,0,0,Math.PI),n.fill()}}};function Xy(n,e=1,t=1){ys.has(n)||ys.set(n,Gy(256,Wy[n]));let i=`${n}|${e}|${t}`;if(!ys.has(i)){let s=ys.get(n).clone();s.repeat.set(e,t),s.needsUpdate=!0,ys.set(i,s)}return ys.get(i)}var jc=new Map;function bn(n,e=1,t=1,i={}){let s=`${n}|${e}|${t}|${JSON.stringify(i)}`;return jc.has(s)||jc.set(s,new $t({map:Xy(n,e,t),...Fo(i)})),jc.get(s)}function Sn(n,e,t,i=[1,1],s={},r=[0,0,0]){let o=new Pe(ke.box(),bn(e,i[0],i[1],s));return o.scale.set(n[0],n[1],n[2]),o.position.set(t[0],t[1]+n[1]/2,t[2]),o.rotation.set(r[0],r[1],r[2]),o.castShadow=!0,o.receiveShadow=!0,o}var qy=new Mt({color:"#000000",transparent:!0,opacity:.2,depthWrite:!1});function hd(n=.34){let e=new Pe(ke.circle(),qy);return e.rotation.x=-Math.PI/2,e.scale.setScalar(n),e.position.y=.02,e.renderOrder=1,e}var Oo=null;function zo(n,e,t="#ffc56b",i=.55){if(!Oo){let o=document.createElement("canvas");o.width=o.height=128;let a=o.getContext("2d"),c=a.createRadialGradient(64,64,0,64,64,64);c.addColorStop(0,"rgba(255,255,255,1)"),c.addColorStop(.5,"rgba(255,255,255,0.35)"),c.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=c,a.fillRect(0,0,128,128),Oo=new Vs(o),Oo.colorSpace=gt}let s=new Mt({map:Oo,color:t,transparent:!0,opacity:0,depthWrite:!1,blending:Nr,toneMapped:!1});s.userData.base=i,n.nightFades.push(s);let r=new Pe(new Mn(e*2,e*2),s);return r.rotation.x=-Math.PI/2,r.renderOrder=2,r}var zn=new C,It=n=>new ge(n),Bn={dayTop:It("#2f86d9"),dayHorizon:It("#c9ebfb"),duskTop:It("#3d4f9a"),duskHorizon:It("#ffab6b"),nightTop:It("#060a1c"),nightHorizon:It("#1b2a52")},Yy=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Zy=`
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
}`;function ud(n,e){let t=new Bs({canvas:n,antialias:!0,powerPreference:"high-performance"}),i=Math.min(globalThis.devicePixelRatio||1,2),s=i,r="auto";t.setPixelRatio(s),t.shadowMap.enabled=!0,t.shadowMap.type=vo,t.shadowMap.autoUpdate=!1,t.outputColorSpace=gt,t.toneMapping=Pc,t.toneMappingExposure=1.05;let o=new to;o.fog=new eo(Bn.dayHorizon.clone(),45,150);let a=new Ft(e.camera.fov,1,.2,400),c=new mo(16777215,11569512,1),l=new yo(16774108,3);l.castShadow=!0,l.shadow.mapSize.set(1536,1536),Object.assign(l.shadow.camera,{left:-15,right:15,top:15,bottom:-15,near:1,far:90}),l.shadow.bias=-4e-4,l.shadow.normalBias=.035,l.shadow.radius=2.5;let h=new _o(16757865,0,16,1.6);h.position.set(.2,2.6,1.6),o.add(c,l,l.target,h);let u=new fn({uniforms:{top:{value:Bn.dayTop.clone()},horizon:{value:Bn.dayHorizon.clone()},sunDir:{value:new C(0,1,0)},sunColor:{value:It("#fff1c4")},sunPower:{value:1}},vertexShader:Yy,fragmentShader:Zy,side:zt,depthWrite:!1,fog:!1,toneMapped:!1}),f=new Pe(new wi(300,24,16),u);f.frustumCulled=!1,o.add(f);let p=[];for(let $=0;$<420;$++){let be=Math.random()*Math.PI*2,ve=.08+Math.random()*.92,S=Math.sqrt(1-ve*ve);p.push(Math.cos(be)*S*280,ve*280,Math.sin(be)*S*280)}let g=new _t;g.setAttribute("position",new $e(p,3));let _=new Hs({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),m=new io(g,_);m.frustumCulled=!1,o.add(m);let d=new Pe(ke.sphere(),new Mt({color:"#f4f1de",fog:!1}));d.scale.setScalar(9),o.add(d);let x=new $t({color:16777215,fog:!1}),y=[];for(let $=0;$<9;$++){let be=new je,ve=4+Math.floor(Math.random()*3);for(let v=0;v<ve;v++)be.sphere(2.2+Math.random()*2.2,"#ffffff",[(v-ve/2)*2.6+Math.random(),Math.random()*1.2,Math.random()*2],[1.25,.62,1],[10,8]);let S=new Pe(be.geometry(),x);S.position.set(-110+Math.random()*220,26+Math.random()*26,-60-Math.random()*90),S.scale.setScalar(1+Math.random()*1.4),S.userData.speed=.35+Math.random()*.5,o.add(S),y.push(S)}let b={pos:new C,target:new C,fov:46,zoom:1},R={pos:new C,look:new C},T={pos:new C,look:new C},A={amount:0,time:0},I={renderer:t,scene:o,camera:a,hemi:c,sun:l,daylight:.8,time:0,glowMats:[],nightFades:[],updaters:[],signs:[]};function M($,be){t.setSize($,be,!1),a.aspect=$/be;let ve=Math.max(0,.75-a.aspect);a.fov=b.fov+ve*40,a.updateProjectionMatrix(),E()}function E(){let $=(1+Math.max(0,.75-a.aspect)*1.2)*b.zoom,be=b.pos.clone().sub(b.target);T.pos.copy(b.target).add(be.multiplyScalar($)),T.look.copy(b.target)}function O($){if(!$)return E();let be=new C(...$);T.look.copy(be).add(new C(0,.25,0)),T.pos.copy(be).add(new C(0,2.2,4.2))}function V($,be=!0){b.fov=$.camera.fov,b.zoom=$.camera.zoom||1,b.pos.set(...$.camera.position),b.target.set(...$.camera.target),h.position.set($.cx??.2,2.7,1.4),E(),be&&(R.pos.copy(T.pos),R.look.copy(T.look)),we()}function q($){A.amount=Math.max(A.amount,$),A.time=.35}let P=new C,F=new ge,W=new ge,J=new ge,Z=It("#ffffff"),Y=It("#2c3558"),ee=It("#ffc0a0"),ie=It("#fff3dc"),de=It("#ff9a55"),G=It("#9db8ff"),K=It("#b08968"),ue=It("#3a4468"),Me=It("#ffffff"),xe=It("#8ea2dc");function Ne($,be){I.time+=$;let ve=1-Math.exp(-$*4);if(R.pos.lerp(T.pos,ve),R.look.lerp(T.look,ve),a.position.copy(R.pos),a.position.x+=Math.sin(I.time*.22)*.12,A.time>0){A.time-=$;let le=A.amount*Math.max(0,A.time/.35);a.position.x+=(Math.random()-.5)*le,a.position.y+=(Math.random()-.5)*le}else A.amount=0;a.lookAt(R.look);let S=Ro(be),v=1-S;I.daylight=S;let z=2*Math.PI*(be-.25);P.set(Math.cos(z)*.6,Math.sin(z),.55).normalize();let Q=Math.max(0,1-Math.abs(S-.3)*3.2);F.copy(Bn.nightTop).lerp(Bn.dayTop,S).lerp(Bn.duskTop,Q*.6),W.copy(Bn.nightHorizon).lerp(Bn.dayHorizon,S).lerp(Bn.duskHorizon,Q*.85),u.uniforms.top.value.copy(F),u.uniforms.horizon.value.copy(W),u.uniforms.sunDir.value.copy(P),u.uniforms.sunPower.value=Math.min(1,S*1.6+Q*.6),u.uniforms.sunColor.value.copy(ie).lerp(de,Q),o.fog.color.copy(W);let j=P.y>-.02;j?(zn.copy(P),zn.y=Math.max(.62,zn.y)):zn.set(-.45,.8,.6),l.position.copy(zn.normalize()).multiplyScalar(40),l.target.position.set(0,0,0),j?(l.color.copy(de).lerp(ie,Math.min(1,S*1.4)),l.intensity=.3+2.3*S):(l.color.copy(G),l.intensity=1),c.color.copy(xe).lerp(Me,S),c.groundColor.copy(ue).lerp(K,S),c.intensity=1.2+.55*S,t.toneMappingExposure=1.02+v*.2,d.position.copy(P).multiplyScalar(-250),d.visible=P.y<.25,_.opacity=Math.pow(v,2.2),J.copy(Y).lerp(Z,S).lerp(ee,Q*.55),x.color.copy(J);for(let le of y)le.position.x+=le.userData.speed*$,le.position.x>130&&(le.position.x=-130);let ne=.08+1.7*v;for(let le of I.glowMats)le.emissiveIntensity=ne*(le.userData.glow??1);h.intensity=38*v;for(let le of I.nightFades)le.opacity=(le.userData.base||.5)*v;for(let le of I.updaters)le($,I.time,S);Oe++,Oe%2===0&&(t.shadowMap.needsUpdate=!0),r==="auto"&&Rt($)}let Oe=0;function Ae($){t.shadowMap.enabled!==$&&(t.shadowMap.enabled=$,l.castShadow=$,o.traverse(be=>{be.material&&(Array.isArray(be.material)?be.material:[be.material]).forEach(ve=>{ve.needsUpdate=!0})}))}function Qe($){r=$,N.frames=0,N.time=0,N.warmup=3,s=$==="low"?1:i,t.setPixelRatio(s),h.visible=$!=="low",Ae($!=="low"),we()}let N={frames:0,time:0,warmup:3};function Rt($){if(N.warmup>0){N.warmup-=$;return}if(N.frames++,N.time+=$,N.time<2)return;let be=N.frames/N.time;N.frames=0,N.time=0,be<45&&s>1?(s=Math.max(1,s-.25),t.setPixelRatio(s),we(),I.pixelRatio=s):be<30&&t.shadowMap.enabled&&s<=1&&Ae(!1)}function we(){let $=n.clientWidth||globalThis.innerWidth,be=n.clientHeight||globalThis.innerHeight;M($,be)}function Ue($){zn.set($[0],$[1],$[2]).project(a);let be=n.clientWidth,ve=n.clientHeight;return{x:(zn.x*.5+.5)*be,y:(-zn.y*.5+.5)*ve,front:zn.z<1,w:be,h:ve}}return Object.assign(I,{update:Ne,focus:O,shakeCam:q,resize:we,toScreen:Ue,recomputeGoal:E,setLocation:V,setQuality:Qe}),V(e),I}var Ui="#f3ede0",dd=new ge;function ii(n,e,t=0){return dd.set(n).offsetHSL(0,t,e),"#"+dd.getHexString()}function fd(n){let e=(Math.abs(Math.round(n))*9301+49297)%4294967296;return()=>(e=(e*1664525+1013904223)%4294967296,e/4294967296)}function pd(n,e){let t=new at;t.name="location:"+n.id;let i=new Pe(new Mn(200,200),bn("pavers",90,90));i.rotation.x=-Math.PI/2,i.receiveShadow=!0,t.add(i);let s={env:e,group:t,solid:new je,flat:new je,glassDark:new je,glassLit:new je,lampGlow:new je,lights:0};for(let r of n.props){let o=$y[r.type];o?o(r,s):console.warn("[props] unknown prop type",r.type)}if(s.solid.empty||t.add(s.solid.mesh(mn)),s.flat.empty||t.add(s.flat.mesh(Di)),s.glassDark.empty||t.add(s.glassDark.mesh(mn,{cast:!1})),!s.glassLit.empty){let r=Fn(e,"#ffffff","#ffb45e",.5,{vertexColors:!0,roughness:.3});t.add(s.glassLit.mesh(r,{cast:!1}))}if(!s.lampGlow.empty){let r=Fn(e,"#fff3d0","#ffc56b",2.2);t.add(s.lampGlow.mesh(r,{cast:!1,receive:!1}))}return t}var $y={road(n,{group:e,solid:t,env:i}){let s=n.z,r=n.width,o=new Pe(new Mn(200,r),bn("asphalt",60,3));o.rotation.x=-Math.PI/2,o.position.set(0,.012,s),o.receiveShadow=!0,e.add(o);for(let a=-96;a<=96;a+=4.5)t.box([1.9,.012,.14],"#f2e3a6",[a,.014,s]);for(let a of[-1,1])t.box([200,.16,.34],"#cfc8bc",[0,0,s+a*(r/2+.17)]),t.box([200,.012,.1],"#e9e4d8",[0,.014,s+a*(r/2-.35)]);for(let a=0;a<6;a++)t.box([.55,.012,r-1.2],"#ecebe4",[9.5+a*1.05,.015,s]);t.cyl(.45,.45,.012,"#3a3c42",[-3.5,.016,s+1.2],[0,0,0],16),Jy(n,e,i)},building(n,{solid:e,glassDark:t,glassLit:i}){let[s,r,o]=n.size,[a,,c]=n.pos,l=n.color,h=fd(Math.round(a*7+r*13+5)),u=c+o/2,f=3.3;e.box([s,r,o],l,[a,0,c]),e.box([s+.08,f,o+.08],ii(l,-.13,-.05),[a,0,c]),e.box([s+.3,.18,o+.3],Ui,[a,f,c]),e.box([s+.5,.26,o+.5],Ui,[a,r,c]),e.box([s+.16,.55,o+.16],ii(l,-.08),[a,r+.26,c]),e.box([s-.4,.1,o-.4],"#6b6f76",[a,r+.3,c]);let p=n.awning||["#d8402f","#2f7d6a","#e9a23b","#4a6fa5"][Math.floor(h()*4)],g=s*.5,_=a-s*.16;e.box([g+.24,2.15,.1],Ui,[_,.45,u+.02]),(h()<.7?i:t).box([g,1.9,.08],"#9fc3d6",[_,.58,u+.06]),e.box([g+.3,.45,.2],ii(l,-.22),[_,0,u+.06]),e.box([1.15,2.4,.1],Ui,[a+s*.33,0,u+.02]),e.box([.95,2.25,.1],ii(p,-.18),[a+s*.33,0,u+.06]),t.box([.6,.8,.06],"#9fc3d6",[a+s*.33,1.2,u+.1]),e.boxC([g+.6,.07,1.25],p,[_,2.82,u+.58],[.34,0,0]),e.box([g+.6,.22,.05],ii(p,.1),[_,2.48,u+1.16]);let m=Math.max(1,Math.floor((r-f-.9)/2.25)),d=Math.max(1,Math.floor((s-.7)/1.75)),x=["#2f6b5a","#8a3b2a","#3d5a80","#5b4636"][Math.floor(h()*4)],y=h()<.6;for(let R=0;R<m;R++)for(let T=0;T<d;T++){let A=a-(d-1)*1.75/2+T*1.75,I=f+.75+R*2.25;e.box([1.06,1.46,.08],Ui,[A,I-.08,u+.01]),(h()<.42?i:t).box([.88,1.3,.06],"#8fb4cc",[A,I,u+.05]),e.box([.05,1.3,.04],Ui,[A,I,u+.09]),e.box([1.2,.09,.2],Ui,[A,I-.12,u+.06]),y?(e.box([.22,1.32,.05],x,[A-.58,I,u+.05]),e.box([.22,1.32,.05],x,[A+.58,I,u+.05])):h()<.3&&(e.box([1.4,.08,.5],"#4a4e57",[A,I-.2,u+.28]),e.box([1.4,.5,.04],"#4a4e57",[A,I-.12,u+.52]))}let b=Math.max(1,Math.floor((o-.8)/2.1));for(let R of[-1,1])for(let T=0;T<m;T++)for(let A=0;A<b;A++){let I=c-(b-1)*2.1/2+A*2.1,M=f+.75+T*2.25;(h()<.35?i:t).box([.06,1.3,.88],"#8fb4cc",[a+R*(s/2+.02),M,I])}h()<.7&&e.box([1.1,.7,.9],"#9aa0a8",[a-s*.22,r+.4,c-o*.1]),h()<.6&&(e.cyl(.6,.6,1.2,"#7b5a3c",[a+s*.2,r+.9,c+o*.1]),e.cone(.68,.45,"#5b4636",[a+s*.2,r+2.1,c+o*.1]),e.cyl(.05,.05,.5,"#4a4e57",[a+s*.2-.4,r+.4,c+o*.1]),e.cyl(.05,.05,.5,"#4a4e57",[a+s*.2+.4,r+.4,c+o*.1])),h()<.5&&e.box([.5,1.3,.5],ii(l,-.2),[a+s*.36,r+.3,c-o*.25])},tree(n,{solid:e,flat:t}){let[i,,s]=n.pos,r=n.scale||1,o=fd(Math.round(i*31+s*17)),a=["#5fa052","#6fb35f","#4f8f47","#7dbb62"];e.cyl(.92,.92,.03,"#5a5148",[i,.012,s],[0,0,0],16),e.cyl(.13*r,.2*r,1.9*r,"#7b5236",[i,0,s]);let c=[[0,2.7,0,1.3],[.75,2.25,.25,.95],[-.7,2.3,-.2,.9],[.1,3.5,.05,.85],[-.15,2.3,.7,.8]];for(let[l,h,u,f]of c)t.ico(f*r,a[Math.floor(o()*a.length)],[i+l*r,h*r,s+u*r],[1,.92,1],[o()*3,o()*3,0])},bush(n,{flat:e}){let[t,,i]=n.pos;e.ico(.55,"#5fa052",[t,.4,i],[1.2,.8,1]),e.ico(.42,"#6fb35f",[t+.5,.33,i+.15],[1,.8,1],[1,2,0]),e.ico(.4,"#4f8f47",[t-.45,.3,i-.1],[1,.8,1],[2,1,0])},lamp(n,{solid:e,lampGlow:t,group:i,env:s}){let[r,,o]=n.pos,a="#2f3238";e.cyl(.12,.2,.35,a,[r,0,o]),e.cyl(.06,.07,3.5,a,[r,.3,o]),e.boxC([.7,.06,.06],a,[r+.3,3.75,o]),e.cyl(.2,.12,.1,a,[r+.62,3.6,o]),e.cone(.22,.16,a,[r+.62,3.7,o]),t.sphere(.16,"#fff3d0",[r+.62,3.5,o],[1,1.15,1],[10,8]);let c=zo(s,n.light?4.2:3.2);c.position.set(r+.62,.03,o),i.add(c)},bench(n,{solid:e}){let[t,,i]=n.pos,s="#a8703f";for(let r=0;r<3;r++)e.box([1.7,.05,.13],s,[t,.46,i-.16+r*.16]);for(let r=0;r<2;r++)e.box([1.7,.13,.05],s,[t,.62+r*.2,i-.28]);for(let r of[-.7,.7])e.box([.07,.46,.45],"#2f3238",[t+r,0,i]),e.box([.07,.55,.07],"#2f3238",[t+r,.46,i-.28])},bin(n,{solid:e}){let[t,,i]=n.pos;e.cyl(.3,.26,.85,"#3f6d7c",[t,0,i],[0,0,0],12),e.cyl(.33,.33,.08,"#2c4e59",[t,.85,i],[0,0,0],12),e.cyl(.2,.2,.02,"#14242a",[t,.93,i],[0,0,0],12)},hydrant(n,{solid:e}){let[t,,i]=n.pos;e.cyl(.13,.16,.55,"#d8402f",[t,0,i]),e.dome(.14,"#d8402f",[t,.55,i]),e.cylC(.06,.42,"#b53324",[t,.36,i],[0,0,Math.PI/2]),e.cyl(.19,.19,.05,"#b53324",[t,0,i])},planter(n,{solid:e,flat:t}){let[i,,s]=n.pos;e.box([1.3,.5,.55],"#8d5a3b",[i,0,s]),e.box([1.36,.07,.61],"#a8703f",[i,.5,s]),t.ico(.3,"#4f8f47",[i-.3,.68,s],[1.3,.7,1]),t.ico(.3,"#5fa052",[i+.3,.68,s],[1.3,.7,1],[1,1,0]);let r=["#ef476f","#ffd166","#f78c6b","#c77dff","#ffffff"];for(let o=0;o<6;o++)t.ico(.11,r[o%r.length],[i-.5+o*.2,.86+o%2*.09,s+(o%3-1)*.12])},sandwichBoard(n,{solid:e,env:t}){let[i,,s]=n.pos;for(let r of[-1,1])e.boxC([.8,1.1,.05],"#3a2a1d",[i,.55,s+r*.17],[r*.3,0,0]),e.boxC([.68,.8,.02],"#fff3c4",[i,.6,s+r*.215],[r*.3,0,0]);t.signs.push({id:"sandwich",pos:[i,1.35,s],kind:"street"})},car(n,{group:e}){let t=md(n.color||"#d8402f");t.position.set(n.pos[0],0,n.pos[2]),t.rotation.y=n.rot||0,e.add(t)}};function md(n){let e=new je,t="#2d3f52";e.box([3.7,.5,1.62],n,[0,.32,0]),e.box([3.5,.12,1.5],ii(n,-.12),[0,.22,0]),e.box([2,.52,1.46],n,[-.2,.82,0]),e.box([2.06,.36,1.5],t,[-.2,.86,0]),e.box([1.6,.04,1.3],ii(n,.06),[-.2,1.34,0]);for(let i of[-1.15,1.15])for(let s of[-.8,.8])e.cylC(.34,.24,"#1d1f24",[i,.34,s],[Math.PI/2,0,0],14),e.cylC(.17,.26,"#b9bec6",[i,.34,s],[Math.PI/2,0,0],10);return e.box([.08,.14,.34],"#fff3c4",[1.84,.52,.5]),e.box([.08,.14,.34],"#fff3c4",[1.84,.52,-.5]),e.box([.08,.14,.34],"#c0392b",[-1.84,.52,.5]),e.box([.08,.14,.34],"#c0392b",[-1.84,.52,-.5]),e.box([.14,.14,1.66],"#8f949c",[1.82,.28,0]),e.box([.14,.14,1.66],"#8f949c",[-1.82,.28,0]),e.mesh(mn)}function Jy(n,e,t){let i=["#e9c46a","#4a6fa5","#f4f1de","#2f7d6a"],s=[{z:n.z+n.width*.24,dir:1},{z:n.z-n.width*.24,dir:-1}],r=Fn(t,"#fff8d8","#fff0b0",2.5),o=[];s.forEach((a,c)=>{for(let l=0;l<2;l++){let h=md(i[(c*2+l)%i.length]);h.rotation.y=a.dir>0?0:Math.PI,h.position.set(-70+Math.random()*140,0,a.z);for(let u of[-.5,.5]){let f=new Pe(ke.sphere(8,6),r);f.scale.set(.06,.1,.16),f.position.set(1.9,.59,u),h.add(f)}e.add(h),o.push({m:h,dir:a.dir,speed:5+Math.random()*3})}}),t.updaters.push(a=>{for(let c of o)c.m.position.x+=c.dir*c.speed*a,c.m.position.x>80&&(c.m.position.x=-80),c.m.position.x<-80&&(c.m.position.x=80)})}var vs=new Map;function Ky(n,e){let t="leg|"+n+"|"+e;if(!vs.has(t)){let i=new je;i.add(ke.capsule(.085,.36),n,[0,-.27,0]),i.box([.15,.09,.26],e,[0,-.58,.04]),vs.set(t,i.geometry())}return vs.get(t)}function Qy(n,e){let t="arm|"+n+"|"+e;if(!vs.has(t)){let i=new je;i.add(ke.capsule(.065,.3),n,[0,-.2,0]),i.sphere(.072,e,[0,-.45,0]),vs.set(t,i.geometry())}return vs.get(t)}function Js(n){let e=new at,t=new je,i=n.skin||"#e0ac7e";t.add(ke.capsule(.2,.4),n.shirt,[0,.98,0],[0,0,0],[1.05,1,.8]),t.cyl(.07,.07,.1,i,[0,1.34,0]),t.sphere(.2,i,[0,1.6,0],[1,1.05,.98]),t.sphere(.027,"#2a1d14",[-.075,1.62,.178]),t.sphere(.027,"#2a1d14",[.075,1.62,.178]),t.boxC([.09,.016,.02],"#8a3b2a",[0,1.525,.186]),t.sphere(.04,i,[-.2,1.6,0]),t.sphere(.04,i,[.2,1.6,0]);let s=n.hair||"#3b2a1e",r=n.hairStyle||"short";if(r!=="bald"&&(t.dome(.215,s,[0,1.63,-.015],[1,1.02,1.02],[-.25,0,0]),r==="bun"&&t.sphere(.1,s,[0,1.86,-.08]),r==="long"&&t.add(ke.capsule(.15,.22),s,[0,1.45,-.12],[0,0,0],[1.25,1,.6])),n.hat==="cap"){let _=n.hatColor||"#d8402f";t.dome(.21,_,[0,1.7,0],[1,.75,1]),t.boxC([.26,.03,.2],_,[0,1.71,.2],[.15,0,0])}else n.hat==="toque"&&(t.cyl(.17,.165,.2,"#ffffff",[0,1.74,0]),t.sphere(.21,"#ffffff",[0,2,0],[1,.72,1]));n.apron&&(t.boxC([.32,.5,.04],n.apron,[0,.9,.165]),t.boxC([.34,.04,.05],n.apron,[0,1.12,.165])),t.add(ke.capsule(.17,.08),n.pants||"#3d4a66",[0,.66,0],[0,0,Math.PI/2],[1,1,.85]);let o=t.mesh(mn);e.add(o);let a=mn,c=(_,m,d)=>{let x=new at;x.position.set(m,d,0);let y=new Pe(_,a);return y.castShadow=!0,x.add(y),e.add(x),x},l=Ky(n.pants||"#3d4a66",n.shoe||"#2b2b33"),h=Qy(n.shirt,i),u=c(l,-.105,.62),f=c(l,.105,.62),p=c(h,-.275,1.27),g=c(h,.275,1.27);return p.rotation.z=-.12,g.rotation.z=.12,e.add(hd(.36)),n.scale&&e.scale.setScalar(n.scale),{group:e,body:o,armL:p,armR:g,legL:u,legR:f}}function tl(n,e,t){let i=Math.sin(e)*.65*t;n.legL.rotation.x=i,n.legR.rotation.x=-i,n.armL.rotation.x=-i*.8,n.armR.rotation.x=i*.8}var jy=["#f2c9a0","#e0ac7e","#c68a5c","#8d5a3b","#f7d9bd","#a8704a"],ex=["#2b1d14","#5a3a22","#8a5a2b","#c9a15a","#1c1c22","#7a2f1e","#d9d9d9"],gd=["#4ea8de","#ef476f","#ffd166","#06d6a0","#9b5de5","#f78c6b","#3d9a8b","#f4f1de","#e76f51","#577590"],tx=["#3d4a66","#2f3e46","#6b4f3a","#4a4e69","#1f2a44","#7a8aa0"],nx=["short","short","bun","long","short","bald","long"];function _d(n){let e=s=>Math.abs(Math.sin(n*12.9898+s*78.233)*43758.5453)%1,t=(s,r)=>s[Math.floor(e(r)*s.length)],i=e(6);return{skin:t(jy,1),hair:t(ex,2),shirt:t(gd,3),pants:t(tx,4),hairStyle:t(nx,5),hat:i>.84?"cap":"none",hatColor:t(gd,7),scale:.94+e(8)*.12}}var se=.2,it=1.5,gn="#c8392b",wn="#fff3dc",yd="#2f6b5a",sl="#a8703f",si="#6b4428",Bo="#b9aea0",yt="#2f3238",Ks="#f3ede0",ix=["#c0392b","#2e8b57","#e67e22","#3d5a1e","#c9b79c"];function Sd(n,e,t){let i=e.width,s=e.id==="cart",r=s?.42:e.id==="stand"?.3:.15,o=s?se+i/2+.45:se+i/2-1.05,a={dough:[se-i*.29,1.15,.7],load:[se+i*.19,1.15,.7],oven:[o,.86,.72],pass:[se,1.25,1.55]},c=n.camera;return{...n,tier:e,tierIdx:t,cx:se,W:i,D:e.depth,back:it-e.depth,floorY:r,ovenX:o,stations:a,window:[se-.4,0,2.9],register:[se+.8,1.2,1.55],camera:{...c,zoom:e.cameraZoom,target:[c.target[0],c.target[1]+t*.6,c.target[2]]}}}function wd(n,e,t={}){let i=new at;i.name="stand:"+n.tier.id;let s={g:i,env:e,L:n,S:new je,F:new je,M:new je,warm:new je,win:new je,cw:n.W-.6};sx[n.tier.id](s),rx(s),ox(s),ax(s),hx(s,t.decor||0),lx(s,t.empire||{}),i.add(s.S.mesh(mn)),s.F.empty||i.add(s.F.mesh(Di)),s.M.empty||i.add(s.M.mesh(el)),s.warm.empty||i.add(s.warm.mesh(Fn(e,"#ffffff","#ffc978",2.2,{vertexColors:!0}),{cast:!1,receive:!1})),s.win.empty||i.add(s.win.mesh(Fn(e,"#ffffff","#ffb45e",.55,{vertexColors:!0,roughness:.3}),{cast:!1}));let r=zo(e,5.5,"#ffb469",.45);return r.position.set(se,.03,3.4),i.add(r),ux(s),i}function nl(n,e,t,i,s){let r=Math.round((t-e)/.36),o=(t-e)/r;n.S.box([t-e,.1,.04],gn,[(e+t)/2,i+.06,s]);for(let a=0;a<r;a++)n.S.cylC(o/2,.035,a%2?wn:"#d8402f",[e+o*(a+.5),i+.06,s],[Math.PI/2,0,0],12)}function xd(n,e,t,i){let s=new Pe(ke.box(),bn("stripes",e[0]/.8,1));s.scale.set(e[0],e[1],e[2]),s.position.set(t[0],t[1],t[2]),s.rotation.x=i,s.castShadow=!0,s.receiveShadow=!0,n.g.add(s);let r=e[2]/2;return{y:t[1]-Math.sin(i)*r,z:t[2]+Math.cos(i)*r}}function Qs(n,e,t,i,s){let{S:r}=n;r.box([t-e,.05,.3],si,[(e+t)/2,i,s]);let o=["#c0392b","#e9c46a","#2e8b57","#f4f1de","#e67e22","#7a4a2b","#b8d8a8"],a=0;for(let c=e+.25;c<t-.15;c+=.34){let l=.2+a*7%3*.06;a%4===3?(r.cyl(.05,.07,l+.12,"#3b6b4a",[c,i+.05,s]),r.cyl(.025,.03,.1,"#3b6b4a",[c,i+.17+l,s])):(r.cyl(.09,.09,l,o[a%o.length],[c,i+.05,s]),r.cyl(.095,.095,.04,"#d9cbb2",[c,i+.05+l,s])),a++}}function vd(n,e,t,i,s){let{S:r,M:o}=n;o.torus(s,.06,yt,[e,t,i]),r.cylC(.11,.16,si,[e,t,i],[Math.PI/2,0,0]);for(let a=0;a<4;a++)r.boxC([s*1.9,.07,.06],sl,[e,t,i],[0,0,a*Math.PI/4])}var sx={cart(n){let{S:e,M:t,L:i,g:s}=n,{W:r}=i,o=se-r/2,a=se+r/2,c=-1.1;s.add(Sn([r,.22,2.6],"wood",[se,.2,.2],[r/1.3,2])),e.box([r-.5,.12,.16],si,[se,.1,-.5]);for(let h of[se-1.35,se+1.35])vd(n,h,.56,2.13,.52),vd(n,h,.56,c-.06,.52);t.cylC(.035,1.5,yt,[o-.42,1.25,.2],[Math.PI/2,0,0]);for(let h of[-.5,.9])t.cylC(.03,.5,yt,[o-.2,1.2,h],[0,0,Math.PI/2.4]);e.box([r,2.55,.12],gn,[se,i.floorY,c]),e.box([r+.06,.16,.16],wn,[se,i.floorY+2.5,c]),e.box([r+.04,.5,.14],wn,[se,i.floorY,c+.01]),Qs(n,o+.3,a-.3,2.05,c+.2);for(let h of[o+.05,a-.05])e.box([.1,.8,2.45],gn,[h,i.floorY,.2]);for(let h of[o+.08,a-.08])for(let u of[it-.08,c+.1])t.cyl(.045,.045,3.15,yt,[h,i.floorY,u]);let l=xd(n,[r+.7,.07,3.1],[se,3.5,.3],.1);nl(n,o-.35,a+.35,l.y-.2,l.z),Object.assign(n,{eave:{y:l.y-.2,z:l.z,x0:o-.3,x1:a+.3},neonPos:[se,4,-.7],flagBase:{y:3.6,z:c,n:4},statuePos:[o+.45,4.05,-.7],chimneyTop:3.2,counterBase:.2});for(let h of[se-.9,se+.9])t.cyl(.035,.035,.5,yt,[h,3.62,-.7])},stand(n){let{S:e,L:t,g:i}=n,{W:s,D:r,back:o}=t,a=se-s/2,c=se+s/2,l=(it+o)/2;i.add(Sn([s+.5,.3,r+.7],"wood",[se,0,l+.1],[s/1.3,3])),e.box([s+.6,.08,r+.8],si,[se,0,l+.1]),e.box([s,3.5,.14],gn,[se,t.floorY,o+.07]),e.box([s+.02,1,.16],wn,[se,t.floorY,o+.08]),e.box([s+.04,.08,.2],yd,[se,t.floorY+1,o+.09]),Qs(n,a+.4,c-1.9,1.95,o+.3),Qs(n,a+.4,c-1.9,2.55,o+.3);for(let p of[a+.07,c-.07]){e.box([.14,1.15,r-.1],gn,[p,t.floorY,l]),e.box([.2,.08,r],wn,[p,t.floorY+1.15,l]);for(let g of[it-.1,o+.1])e.box([.18,3.6,.18],si,[p,t.floorY,g])}let h=new Pe(ke.box(),bn("rooftiles",(s+1)/1.2,3));h.scale.set(s+1,.16,r+.9),h.position.set(se,4.05,l+.15),h.rotation.x=.07,h.castShadow=!0,h.receiveShadow=!0,i.add(h);let u=l+.15+(r+.9)/2,f=4.05-(r+.9)/2*.07;e.box([s+1,.2,.08],wn,[se,f-.24,u-.02]),nl(n,a-.5,c+.5,f-.44,u),e.box([3.7,.95,.14],gn,[se,4.2,it+.1]),e.box([3.45,.7,.16],wn,[se,4.32,it+.12]);for(let p of[se-1.6,se+1.6])e.box([.12,.5,.12],si,[p,3.85,it+.1]);n.env.signs.push({id:"name",pos:[se,4.68,it+.25],kind:"shopname"}),n.env.signs.push({id:"franchise",pos:[c-.1,2.5,it+.1],kind:"franchise"}),e.box([.5,.36,.05],"#d4af37",[c-.09,2.3,it+.02]),Object.assign(n,{eave:{y:f-.44,z:u,x0:a-.45,x1:c+.45},neonPos:[se,5.65,it+.1],flagBase:{y:4.15,z:o+.2,n:5},statuePos:[a+.6,4.75,l],chimneyTop:5,counterBase:0})},shop(n){let{S:e,F:t,M:i,L:s,g:r,warm:o,win:a}=n,{W:c,D:l,back:h}=s,u=se-c/2,f=se+c/2,p=(it+h)/2,g="#f1d9a8",_=3.6,m=6.1;e.box([c+.8,.15,l+1.3],Bo,[se,0,p+.35]);let d=new Pe(new Mn(c-.4,l-.3),bn("checker",c/1.6,l/1.6));d.rotation.x=-Math.PI/2,d.position.set(se,.16,p),d.receiveShadow=!0,r.add(d),r.add(Sn([c,_-.15,.2],"tiles",[se,.15,h+.1],[c/1.2,3]));for(let b of[u+.12,f-.12])r.add(Sn([.24,_-.15,l],"plaster",[b,.15,p],[4,3],{color:g}));for(let b of[u+.27,f-.27])e.box([.54,_-.15,.54],"#e6c990",[b,.15,it-.05]),e.box([.62,.3,.62],Bo,[b,.15,it-.05]),i.box([.06,.3,.16],yt,[b,2.35,it+.26]),o.box([.2,.28,.2],"#fff0c8",[b,2.3,it+.42]),i.cone(.2,.14,yt,[b,2.58,it+.42],[0,0,0],4);e.box([c,.5,.44],"#e6c990",[se,_-.5,it-.08]),Qs(n,u+.5,f-2.2,1.95,h+.36),Qs(n,u+.5,f-2.2,2.6,h+.36);for(let b=0;b<4;b++)i.cylC(.19,.03,"#8a8d93",[u+1.2+b*.62,3.05,h+.26],[Math.PI/2,0,0],14),i.box([.04,.26,.03],"#5a5d63",[u+1.2+b*.62,3.18,h+.26]);r.add(Sn([c+.1,m-_,l+.1],"plaster",[se,_,p],[5,2],{color:"#f6e3b4"})),e.box([c+.4,.16,l+.4],Ks,[se,_-.02,p]);let x=it+.06;for(let b of[-2.45,0,2.45]){let R=se+b;e.box([1.36,1.66,.08],Ks,[R,4.2,x]),a.box([1.14,1.46,.06],"#bcd3e0",[R,4.3,x+.04]),e.box([.06,1.46,.04],Ks,[R,4.3,x+.08]),e.box([1.14,.06,.04],Ks,[R,5,x+.08]);for(let T of[-1,1])e.box([.3,1.5,.06],yd,[R+T*.76,4.28,x+.04]);e.box([1.5,.2,.3],"#8d5a3b",[R,3.98,x+.2]),["#ef476f","#ffd166","#ffffff","#f78c6b","#ef476f"].forEach((T,A)=>{t.ico(.12,T,[R-.52+A*.26,4.28+A%2*.06,x+.24])}),t.ico(.2,"#4f8f47",[R,4.2,x+.22],[3.2,.6,.8])}e.box([c+.7,.26,l+.7],Ks,[se,m,p]),e.box([c+.3,.5,l+.3],"#e6c990",[se,m+.26,p]),e.box([c-.2,.1,l-.2],"#8d7b68",[se,m+.3,p]);for(let b of[se-2.1,se+2.1])i.cyl(.05,.05,1,yt,[b,m+.7,it-.5]);e.box([4.9,1.05,.16],gn,[se,m+.8,it-.5]),e.box([4.6,.8,.18],wn,[se,m+.93,it-.49]),n.env.signs.push({id:"name",pos:[se,m+1.33,it-.35],kind:"shopname"}),e.box([.46,.34,.05],"#d4af37",[f-.27,1.55,it+.24]),n.env.signs.push({id:"franchise",pos:[f-.27,1.72,it+.3],kind:"franchise"});let y=xd(n,[c+.5,.08,1.5],[se,_+.12,it+.72],.2);nl(n,u-.25,f+.25,y.y-.2,y.z),Object.assign(n,{eave:{y:y.y-.2,z:y.z,x0:u-.2,x1:f+.2},neonPos:[se,m+2.3,it-.5],flagBase:{y:m+.76,z:h+.3,n:6},statuePos:[u+.9,m+1.25,p+.6],chimneyTop:m+1.5,counterBase:0})}};function rx(n){let{S:e,M:t,F:i,L:s,g:r,env:o,cw:a,warm:c}=n,{stations:l,floorY:h}=s,u=n.counterBase;e.box([a,1.12-u,.75],"#f6ead2",[se,u,1.7]),e.box([a+.04,.14,.78],si,[se,u,1.7]),e.box([a+.02,.1,.02],gn,[se,.93,2.08]);let f=Math.max(3,Math.round(a/.95));for(let q=0;q<f;q++){let P=se-a/2+a/f*(q+.5);e.box([a/f-.18,.5,.03],"#ead9b8",[P,Math.max(u+.2,.34),2.075])}r.add(Sn([a+.16,.08,1],"wood",[se,1.12,1.6],[a/1.3,1]));let[p,,g]=l.dough;r.add(Sn([1.2,.07,.98],"wood",[p,1.03,g],[1,1]));for(let q of[-.52,.52])for(let P of[-.4,.4])e.box([.07,1.03-h,.07],si,[p+q,h,g+P]);e.box([.3,.34,.2],"#efe6d2",[p-.4,1.1,g-.36]),e.box([.3,.05,.2],"#d9cbb2",[p-.4,1.4,g-.36],[0,0,.2]),e.cylC(.045,.5,sl,[p+.05,1.15,g-.38],[0,0,Math.PI/2]),t.cyl(.13,.09,.1,"#c9ccd2",[p+.42,1.1,g-.36]),e.cyl(.115,.115,.02,"#c0392b",[p+.42,1.18,g-.36]),e.sphere(.09,"#f1dfb8",[p-.08,1.17,g-.36],[1,.7,1]);let[_,,m]=l.load;t.box([1,.05,.9],"#b9bec6",[_,1.05,m]),t.box([1,.04,.9],"#b9bec6",[_,.6,m]);for(let q of[-.46,.46])for(let P of[-.41,.41])t.box([.05,1.05-h,.05],"#8a8d93",[_+q,h,m+P]);e.cylC(.025,1.3,sl,[_+.42,1.55,m-.5],[.25,0,.12]),e.cyl(.27,.27,.025,"#caa26a",[_+.5,2.15,m-.66],[.25+Math.PI/2,0,.12],16);let d=s.ovenX,x=-.1;e.box([1.84,.56,1.5],Bo,[d,0,x]),r.add(Sn([1.74,1,1.42],"brick",[d,.56,x],[1.6,1.2]));let y=new Pe(ke.dome(18,10),bn("brick",3,1.4));y.scale.set(.87,.72,.71),y.position.set(d,1.56,x),y.castShadow=!0,r.add(y),e.box([1,.6,.06],"#140d0a",[d,.82,x+.7]),e.box([1.2,.14,.14],"#cfc3b2",[d,1.42,x+.72]);for(let q of[-1,1])e.box([.14,.62,.14],"#cfc3b2",[d+q*.57,.8,x+.72]);e.box([1.4,.07,.42],"#cfc3b2",[d,.76,x+.9]);let b=xs("#3a1a0c",{emissive:new ge("#ff7a1f"),emissiveIntensity:.5});o.ovenMouthMat=b;let R=new Pe(ke.box(),b);R.scale.set(.9,.5,.03),R.position.set(d,1.1,x+.74),r.add(R);for(let q=0;q<3;q++)e.cylC(.07,.5,"#7b5236",[d-.3+q*.16,.64,x+.95],[Math.PI/2,0,0],8);let T=d+.4,A=x-.35;e.cyl(.17,.21,n.chimneyTop-1.9,"#6e4a3a",[T,1.9,A]),e.cyl(.24,.24,.1,"#4e342a",[T,n.chimneyTop,A]),o.smokeAt=[T,n.chimneyTop+.2,A];let[I,,M]=s.register;t.box([.52,.2,.44],"#4a5563",[I,1.2,M]),t.boxC([.44,.26,.05],"#2f3640",[I,1.52,M-.1],[-.35,0,0]),e.boxC([.36,.18,.02],"#9fe3c0",[I,1.52,M-.07],[-.35,0,0]),e.box([.4,.03,.2],"#d9dde3",[I,1.4,M+.08]),t.cyl(.11,.1,.22,"#f6e7b0",[I+.5,1.2,1.95]),e.cyl(.08,.08,.06,"#e9c46a",[I+.5,1.2,1.95]),e.box([.2,.16,.14],"#ffffff",[se-.55,1.2,1.95]);let E=se-a/2+.55;[0,1,2].forEach(q=>e.box([.72,.1,.72],"#f2d7a7",[E,1.2+q*.1,1.62],[0,q*.1,0])),e.box([.5,.012,.5],gn,[E,1.5,1.62],[0,.2,0]);for(let q of[se-a/2+.1,se+a/2-.1])e.cyl(.17,.13,.26,"#b5562c",[q,1.2,2]),i.ico(.24,"#4f9d4a",[q,1.62,2],[1,.95,1]),i.ico(.16,"#62b35a",[q+.1,1.78,2.02]);let O=n.eave,V=Math.round((O.x1-O.x0)/.48);for(let q=0;q<=V;q++){let P=q/V;c.sphere(.06,"#fff0c8",[O.x0+(O.x1-O.x0)*P,O.y-.1-Math.sin(P*Math.PI*V)*0,O.z-.06],[1,1.2,1],[8,6])}}function ox(n){let{S:e,L:t,env:i}=n,s=se-t.W/2-.75,r=3.5;for(let o of[-.5,.5])e.box([.08,1.2,.08],yt,[s+o,0,r]);e.box([1.36,1,.08],"#2b2d42",[s,1,r]),e.box([1.2,.84,.03],"#f7f1e1",[s,1.08,r+.045]),ix.forEach((o,a)=>e.cylC(.075,.03,o,[s-.4+a*.2,.78,r+.06],[Math.PI/2,0,0])),i.signs.push({id:"menu",pos:[s,2.25,r],kind:"menu"})}function ax(n){let{g:e,env:t}=n,[i,s,r]=n.neonPos,o=new at,a=new at,c=new je;c.boxC([2.5,.78,.08],"#1d1a26",[i,s,r]),o.add(c.mesh(mn));let l=new je;l.boxC([2.3,.05,.05],"#ff7ab5",[i,s+.31,r+.06]),l.boxC([2.3,.05,.05],"#ff7ab5",[i,s-.31,r+.06]),l.boxC([.05,.62,.05],"#ff7ab5",[i-1.15,s,r+.06]),l.boxC([.05,.62,.05],"#ff7ab5",[i+1.15,s,r+.06]),l.torus(.2,.035,"#ff7ab5",[i-.85,s,r+.07]),o.add(l.mesh(Fn(t,"#ff7ab5","#ff3d94",3.2),{cast:!1}));let h=new je;h.torus(.62,.04,"#7ff6ff",[i+1.75,s,r+.05]),h.torus(.62,.04,"#7ff6ff",[i-1.75,s,r+.05]);for(let u of[-1,1])h.boxC([.5,.06,.05],"#7ff6ff",[i+u*1.75,s,r+.06],[0,0,.6]),h.boxC([.5,.06,.05],"#7ff6ff",[i+u*1.75,s,r+.06],[0,0,-.6]),h.boxC([.06,.5,.05],"#7ff6ff",[i+u*1.75,s,r+.06]);a.add(h.mesh(Fn(t,"#7ff6ff","#2fe6ff",3.2),{cast:!1})),o.visible=!1,a.visible=!1,e.add(o,a),t.neon={l1:o,l2:a},t.signs.push({id:"neon",pos:[i+.2,s,r+.1],kind:"neon"})}function Md(n,e,t){let{S:i,M:s,F:r}=n;s.cyl(.24,.26,.04,yt,[e,0,t]),s.cyl(.035,.035,2.5,yt,[e,0,t]),i.cyl(.46,.46,.05,"#f6ead2",[e,.74,t],[0,0,0],18),r.add(ke.cone(8),gn,[e,2.42,t],[0,0,0],[.92,.4,.92]),r.add(ke.cone(8),wn,[e,2.36,t],[0,Math.PI/8,0],[.95,.28,.95]),i.cyl(.16,.16,.02,"#e9b45a",[e-.1,.79,t+.05],[0,0,0],12),i.cyl(.04,.035,.1,"#ffffff",[e+.22,.79,t-.1]);for(let o of[-1,1]){let a=e+o*.72;i.cyl(.2,.2,.05,gn,[a,.46,t+.1],[0,0,0],12);for(let[c,l]of[[-.14,-.14],[.14,-.14],[-.14,.14],[.14,.14]])s.cyl(.02,.02,.46,yt,[a+c,0,t+.1+l]);s.box([.04,.42,.34],yt,[a+o*.17,.5,t+.1])}}function bd(n,e,t){let{S:i,F:s}=n;i.cyl(.3,.22,.42,"#b5562c",[e,0,t]),i.cyl(.32,.32,.05,"#9c4826",[e,.42,t]),i.cyl(.05,.07,.95,"#6b5a45",[e,.42,t]),s.ico(.42,"#7d9460",[e,1.6,t]),s.ico(.3,"#8fa873",[e+.25,1.4,t+.1],[1,1,1],[1,1,0]),s.ico(.28,"#6f8754",[e-.24,1.42,t-.08],[1,1,1],[2,0,1])}var il={flowers(n){let{S:e,F:t,M:i,cw:s,eave:r}=n,o=Math.max(2,Math.round(s/1.25)),a=["#ef476f","#ffd166","#ffffff","#f78c6b","#c77dff"];for(let c=0;c<o;c++){let l=se-s/2+s/o*(c+.5);e.box([.92,.2,.24],"#8d5a3b",[l,.56,2.2]),t.ico(.16,"#4f8f47",[l,.8,2.2],[2.7,.7,.8]);for(let h=0;h<5;h++)t.ico(.1,a[(c+h)%a.length],[l-.34+h*.17,.9+h%2*.06,2.24])}for(let c of[r.x0+.35,r.x1-.35]){i.cylC(.012,.5,yt,[c,r.y-.35,r.z-.25]),e.dome(.2,"#7b5236",[c,r.y-.62,r.z-.25],[1,1,1],[Math.PI,0,0]),t.ico(.24,"#4f8f47",[c,r.y-.52,r.z-.25],[1,.7,1]);for(let l=0;l<5;l++){let h=l/5*Math.PI*2;t.ico(.09,a[l%a.length],[c+Math.cos(h)*.17,r.y-.46,r.z-.25+Math.sin(h)*.17])}}},festoon(n){let{M:e,warm:t,L:i,eave:s}=n,r=se-i.W/2-.5,o=se+i.W/2+.5,a=2.7,c=Math.max(4.1,s.y+.9);for(let h of[r,o])e.cyl(.05,.07,c,yt,[h,0,a]),e.sphere(.09,"#d4af37",[h,c+.05,a]);let l=16;for(let h=1;h<l;h++){let u=h/l,f=c-.02-Math.sin(u*Math.PI)*.55;t.sphere(.085,"#fff0c8",[r+(o-r)*u,f,a],[1,1.25,1],[8,6]),e.cylC(.01,(o-r)/l,yt,[r+(o-r)*(u-.5/l),f+.1,a],[0,0,Math.PI/2],4)}},bunting(n){let{F:e,eave:t}=n,i=["#ef476f","#ffd166","#06d6a0","#4ea8de","#9b5de5"],s=Math.round((t.x1-t.x0)/.34);for(let r=0;r<s;r++){let o=t.x0+(t.x1-t.x0)/s*(r+.5);e.add(ke.cone(3),i[r%i.length],[o,t.y-.36,t.z+.04],[Math.PI,0,0],[.15,.3,.02])}},table(n){Md(n,se+3,4.2)},lanterns(n){let{M:e,warm:t,cw:i}=n;for(let s of[se-i/2-.32,se+i/2+.32]){e.box([.3,.06,.3],yt,[s,0,2.5]);for(let[r,o]of[[-.12,-.12],[.12,-.12],[-.12,.12],[.12,.12]])e.box([.03,.56,.03],yt,[s+r,.06,2.5+o]);t.box([.2,.46,.2],"#ffe9b0",[s,.1,2.5]),e.cone(.24,.16,yt,[s,.62,2.5],[0,Math.PI/4,0],4),e.torus(.07,.012,yt,[s,.84,2.5])}},carpet(n){let{S:e,M:t,L:i}=n,s=i.queueStart[0]+i.queueStep[0]*(i.queueRowLength-1)/2,r=3.3,o=i.queueStart[2]+i.queueStep[2]*3.3,a=Math.abs(i.queueStep[0])*i.queueRowLength+.5;e.box([a,.012,o-r],"#a82a2a",[s,.014,(r+o)/2]);for(let c of[-1,1])e.box([.1,.014,o-r],"#d4af37",[s+c*(a/2-.12),.016,(r+o)/2]);for(let c of[-1,1]){let l=s+c*(a/2+.18),h=[r+.6,(r+o)/2+.2,o-.2];h.forEach((u,f)=>{t.cyl(.16,.18,.04,"#d4af37",[l,0,u]),t.cyl(.03,.03,.95,"#d4af37",[l,0,u]),t.sphere(.07,"#d4af37",[l,1,u]),f>0&&n.S.cylC(.03,u-h[f-1],"#8a1f2b",[l,.82,(u+h[f-1])/2],[Math.PI/2,0,0],6)})}},secondTable(n){let{L:e}=n;Md(n,se+3.5,6.3),bd(n,se+e.W/2+.75,2),bd(n,se-e.W/2-.75,2.2)},balloons(n){let{g:e,env:t,cw:i}=n,s=new je,r=["#ef476f","#ffd166","#06d6a0","#4ea8de","#9b5de5","#f78c6b"];[[0,2.2,0],[.32,2,.1],[-.3,1.95,-.05],[.12,2.6,-.1],[-.16,2.48,.14],[.36,2.45,-.12]].forEach(([c,l,h],u)=>{s.sphere(.24,r[u],[c,l,h],[1,1.2,1]),s.cone(.05,.07,r[u],[c,l-.33,h]),s.cylC(.006,l-.3,"#eeeeee",[c/2,(l-.3)/2,h/2],[-(h/l)*.9,0,c/l*.9],4)});let a=s.mesh(el);a.position.set(se+i/2+.05,1.2,2.1),e.add(a),t.updaters.push((c,l)=>{a.rotation.z=Math.sin(l*1.3)*.07,a.rotation.x=Math.sin(l*.9+1)*.05})},flags(n){let{M:e,g:t,env:i,L:s}=n,r=n.flagBase,o=[];for(let a=0;a<r.n;a++){let c=se-s.W/2+.4+(s.W-.8)/(r.n-1)*a;e.cyl(.03,.035,1.5,"#d9dde3",[c,r.y,r.z]),e.sphere(.055,"#d4af37",[c,r.y+1.53,r.z]);let l=new je;["#2e8b57","#ffffff","#d8402f"].forEach((u,f)=>l.boxC([.22,.42,.02],u,[.13+f*.22,0,0]));let h=l.mesh(Di);h.position.set(c+.03,r.y+1.26,r.z),t.add(h),o.push(h)}i.updaters.push((a,c)=>{o.forEach((l,h)=>{l.rotation.y=Math.sin(c*2.2+h*.9)*.35})})},statue(n){let{M:e,g:t,env:i}=n,[s,r,o]=n.statuePos;e.cyl(.06,.09,.9,"#d9dde3",[s,r-.9,o]),e.cyl(.26,.3,.1,"#d4af37",[s,r-.05,o]);let a=new je,c="#f2c230";a.cylC(.62,.1,c,[0,.72,0],[Math.PI/2,0,0],24),a.torus(.62,.075,"#e0a81e",[0,.72,0]);for(let h=0;h<6;h++){let u=h/6*Math.PI*2;for(let f of[-1,1])a.cylC(.11,.05,"#e0a81e",[Math.cos(u)*.34,.72+Math.sin(u)*.34,f*.06],[Math.PI/2,0,0],10)}for(let h=0;h<8;h++){let u=h/8*Math.PI*2;a.boxC([.06,.26,.04],c,[Math.cos(u)*.86,.72+Math.sin(u)*.86,0],[0,0,u-Math.PI/2])}let l=a.mesh(new fs({vertexColors:!0,shininess:90,specular:new ge("#fff2b0"),emissive:new ge("#6b4a00"),emissiveIntensity:.6}));l.position.set(s,r,o),t.add(l),i.updaters.push(h=>{l.rotation.y+=h*.9})}},cx=-.1;function lx(n,e){let{S:t,M:i,F:s,warm:r,L:o,g:a}=n,{marketing:c=0,pizzaSchool:l=0,megaOven:h=0}=e,u=["#ef476f","#ffd166","#06d6a0","#4ea8de","#9b5de5"],f=se+o.W/2+.25;for(let p=0;p<c;p++){let g=f+p*.42-(c-1)*.21+.6,_=(n.eave?n.eave.y:3.2)-.7;i.cylC(.012,.9,yt,[g,_+.45,n.eave?n.eave.z:.4]),t.box([.36,1.2,.03],u[p%u.length],[g,_-.6,(n.eave?n.eave.z:.4)+.02]),t.box([.3,.06,.04],"#ffffff",[g,_-.36,(n.eave?n.eave.z:.4)+.04])}for(let p=0;p<l;p++){let g=se-.8+p*.42,_=o.back+.16;t.box([.4,.5,.05],"#d4af37",[g,1.45+.25,_]),t.box([.32,.4,.04],"#fff8e7",[g,1.45+.25,_+.02]),t.box([.2,.04,.04],"#b5372a",[g,1.45+.34,_+.03]),t.box([.2,.03,.04],"#6b4428",[g,1.45+.2,_+.03])}for(let p=0;p<h;p++){let g=o.ovenX+1.35+p*1.35,_=cx;t.box([1.1,.5,1],Bo,[g,0,_]),a.add(Sn([1.05,.9,.95],"brick",[g,.5,_],[1.2,1]));let m=new Pe(ke.dome(14,8),bn("brick",2,1));m.scale.set(.58,.5,.52),m.position.set(g,1.4,_),m.castShadow=!0,a.add(m),t.box([.72,.44,.05],"#140d0a",[g,.66,_+.52]),r.box([.62,.3,.03],"#ffb35a",[g,.72,_+.55]),i.cylC(.04,.5,yt,[g+.36,1.9,_-.3])}}function hx(n,e){(n.L.decorSteps||Object.keys(il)).slice(0,e).forEach(i=>{il[i]&&il[i](n)})}function ux(n){let{g:e,env:t,L:i}=n,s=i.tier.staffVisible,r=i.floorY,[o]=i.stations.dough,[a]=i.stations.load,c=[[se+.45,r,.42,0],[se-.7,r,.38,0],[se+1.75,0,2.75,-.3]],l=[[o+.05,r,-.08,0],[a,r,-.12,0],[o-1.05,r,.3,.3]],h=[{shirt:"#ef476f",hat:"cap",hatColor:"#ffd166",hair:"#3b2a1e",skin:"#c68a5c",hairStyle:"short"},{shirt:"#4ea8de",hat:"cap",hatColor:"#d8402f",hair:"#5a3a22",skin:"#f2c9a0",hairStyle:"long"},{shirt:"#2f6b5a",hat:"none",hair:"#1c1c22",skin:"#e0ac7e",hairStyle:"bun"}],u=[{skin:"#8d5a3b",hair:"#1c1c22"},{skin:"#f2c9a0",hair:"#7a2f1e"},{skin:"#e0ac7e",hair:"#2b1d14"}],f=(_,m)=>(_.group.position.set(m[0],m[1],m[2]),_.group.rotation.y=m[3],_.group.visible=!1,_.baseY=m[1],e.add(_.group),_),p=[],g=[];for(let _=0;_<s;_++)p.push(f(Js({...h[_],pants:"#2f3e46",apron:wn}),c[_])),g.push(f(Js({...u[_],shirt:"#fdfdfd",pants:"#3d4a66",hat:"toque",apron:"#e9e2d2",hairStyle:"short"}),l[_]));t.staff={cashiers:p,cooks:g}}function Ed(n,e,t){let i=n.staff;if(!i)return;let s=e.customers.some(c=>c.state==="waiting"),r=e.pizzas.some(c=>c.stage==="ready"),o=e.pizzas.some(c=>c.stage==="dough"||c.stage==="topping"),a=e.pizzas.some(c=>c.stage==="load"||c.stage==="baking");i.cashiers.forEach((c,l)=>{if(c.group.visible=e.staff.cashier>l,!c.group.visible)return;let h=l===0?s:l===1?r||s:!0,u=t*8+l*1.7;c.armR.rotation.x=h?-1+Math.sin(u)*.45:-.1+Math.sin(t*1.6+l)*.04,c.armL.rotation.x=h?-.5+Math.cos(u)*.25:-.1,c.group.position.y=c.baseY+(h?Math.abs(Math.sin(u*.5))*.02:Math.sin(t*1.4+l)*.006)}),i.cooks.forEach((c,l)=>{if(c.group.visible=e.staff.cook>l,!c.group.visible)return;let h=l===1?a:o,u=t*9+l*2.1;c.armR.rotation.x=h?-.95+Math.sin(u)*.5:-.1,c.armL.rotation.x=h?-.95+Math.sin(u+Math.PI)*.5:-.1,c.group.position.y=c.baseY+Math.sin(t*1.5+l*2)*.006})}function Td(n,e){n.neon&&(n.neon.l1.visible=e>=1,n.neon.l2.visible=e>=2)}function Ad(n,e,t=0){let i=.85+Math.sin(t*11)*.1+Math.sin(t*23)*.05;n.ovenMouthMat&&(n.ovenMouthMat.emissiveIntensity=(e?3.2:.7)*i)}var Rd={pepperoni:"#b83227",mushroom:"#d8c7a8",olive:"#2f3d1c",basil:"#2e9a57",pepper:"#f0902a"},dx=new ge("#f3e2bd"),fx=new ge("#d2893a"),px=new ge("#fff0b8"),mx=new ge("#ffc94d"),gx=new Set(["dough","topping","load","ready"]),_x=new Mt({vertexColors:!0,toneMapped:!1}),rl=new Mt({color:"#2b2d42",toneMapped:!1}),yx=ld("#c23b22",{roughness:.6});function xx(n){return Lt("bubble|"+n,()=>{let e=new je,t=[Math.PI/2,0,0];e.cylC(.3,.02,"#2b2d42",[0,0,-.012],t,22),e.cylC(.27,.02,"#ffffff",[0,0,0],t,22),e.add(ke.cone(3),"#ffffff",[0,-.3,0],[Math.PI,0,0],[.1,.14,.01]),e.cylC(.19,.02,"#d9993f",[0,0,.012],t,20),e.cylC(.155,.02,"#ffd76a",[0,0,.02],t,20);let i=Rd[n]||"#ffffff";return[[0,.07],[-.07,-.04],[.07,-.04]].forEach(([s,r])=>e.cylC(.045,.02,i,[s,r,.03],t,10)),e.geometry()})}var js={base:()=>Lt("pz-base",()=>{let n=new je;return n.cylC(.39,.035,"#ffffff",[0,0,0],[0,0,0],22),n.torus(.37,.058,"#e9dcc4",[0,.02,0],[Math.PI/2,0,0],22),n.geometry()}),ball:()=>Lt("pz-ball",()=>new je().sphere(.24,"#ffffff",[0,0,0],[1,1,1],[14,10]).geometry()),disc:()=>Lt("pz-disc",()=>new Qn(1,1,1,22)),toppings:()=>Lt("pz-top",()=>{let n=new je;n.cylC(.058,.03,"#ffffff",[0,0,0],[0,0,0],8);for(let e=0;e<6;e++){let t=e/6*Math.PI*2+.3;n.cylC(.055,.03,"#ffffff",[Math.cos(t)*.2,0,Math.sin(t)*.2],[0,t,0],8)}return n.geometry()})},ko=class{constructor(e,t,i){this.camera=e.camera,this.loc=t,this.cfg=i,this.customers=new Map,this.pizzas=new Map,this.root=new at,e.scene.add(this.root),this.time=0}setLocation(e){this.loc=e}sync(e){let t=new Set(e.customers.map(s=>s.id));for(let[s,r]of this.customers)!t.has(s)&&!r.leaving&&this.removeView(this.customers,s);for(let s of e.customers)this.customers.has(s.id)||this.customers.set(s.id,this.makeCustomer(s)),this.customers.get(s.id).data=s;let i=new Set(e.pizzas.map(s=>s.id));for(let[s,r]of this.pizzas)!i.has(s)&&!r.leaving&&this.removeView(this.pizzas,s);for(let s of e.pizzas){this.pizzas.has(s.id)||this.pizzas.set(s.id,this.makePizza(s));let r=this.pizzas.get(s.id);r.stage!==s.stage&&(r.pop=1,r.stage=s.stage),r.data=s}}leaveCustomer(e,t){let i=this.customers.get(e);i&&(i.leaving=!0,i.leaveHappy=t,i.leaveT=0,i.overhead.visible=!1)}leavePizza(e){let t=this.pizzas.get(e);t&&(t.leaving=!0,t.leaveT=0)}removeView(e,t){let i=e.get(t);i&&(this.root.remove(i.group),e.delete(t))}makeCustomer(e){let t=new at,i=Js(_d(e.id));t.add(i.group);let s=new at;s.position.y=2.35;let r=new Pe(xx(e.topping),_x),o=new at;o.position.y=.46;let a=new Pe(ke.box(),rl);a.scale.set(.66,.11,.02);let c=new Pe(ke.box(),new Mt({color:"#06d6a0",toneMapped:!1}));c.scale.set(.6,.065,.03),c.position.z=.012,o.add(a,c),s.add(r,o),t.add(s);let l=new Pe(ke.cyl(8),rl);l.scale.set(.5,2.9,.5),l.position.y=1.45,l.visible=!1,l.userData={kind:"customer",id:e.id},t.add(l);let h=this.queueSpot(0),u=h[0]+5+e.id%3,f=h[2]+3.5;return t.position.set(u,0,f),this.root.add(t),{group:t,person:i,overhead:s,bubble:r,fill:c,hit:l,x:u,z:f,heading:Math.PI,id:e.id,data:e,leaving:!1,leaveT:0,phase:e.id*1.7%6.28,turn:e.id*37%100/100-.5}}makePizza(e){let t=new at,i=xs("#f3e2bd",{vertexColors:!0}),s=xs("#fff0b8",{roughness:.55}),r=xs("#ffffff",{vertexColors:!0,roughness:.6}),o=new Pe(js.ball(),i);o.scale.set(1,.6,1),o.position.y=.1;let a=new Pe(js.base(),i),c=new Pe(js.disc(),yx);c.scale.set(.325,.03,.325),c.position.y=.012;let l=new Pe(js.disc(),s);l.scale.set(.3,.03,.3),l.position.y=.02;let h=new Pe(js.toppings(),r);h.position.y=.036;let u=new Pe(ke.ring(),new Mt({color:"#ffd60a",toneMapped:!1,side:hn}));u.rotation.x=-Math.PI/2,u.position.y=.5,u.visible=!1;for(let p of[o,a])p.castShadow=!0;t.add(o,a,c,l,h,u);let f=new Pe(ke.cyl(8),rl);return f.scale.set(.5,.7,.5),f.position.y=.2,f.visible=!1,f.userData={kind:"pizza",id:e.id},t.add(f),this.root.add(t),{group:t,crustMat:i,cheeseMat:s,topMat:r,ball:o,base:a,sauce:c,cheese:l,toppings:h,ring:u,hit:f,stage:e.stage,pop:0,leaving:!1,leaveT:0,id:e.id,data:e,x:0,y:0,z:0,s:1,inited:!1}}queueSpot(e){let t=this.loc.queueRowLength,i=e%t,s=Math.floor(e/t),r=this.loc.queueStart,o=this.loc.queueStep;return[r[0]+o[0]*i,0,r[2]+o[2]*s]}stationFor(e){let t=this.loc.stations;switch(e){case"dough":case"topping":return t.dough;case"load":return t.load;case"baking":return t.oven;default:return t.pass}}update(e,t){this.time+=e;let i=1-Math.exp(-e*6),s=t.customers.filter(l=>l.state==="waiting").sort((l,h)=>l.id-h.id),r=t.customers.filter(l=>l.state==="ordered").sort((l,h)=>l.id-h.id),o=new Map(s.map((l,h)=>[l.id,h])),a=new Map(r.map((l,h)=>[l.id,h]));for(let l of this.customers.values()){if(l.leaving){l.leaveT+=e;let R=l.leaveHappy?1:-1;l.x+=R*e*2.6,l.z+=e*1.1,l.group.position.set(l.x,0,l.z),l.person.group.rotation.y=R*1.1,tl(l.person,this.time*11+l.phase,1),l.leaveHappy||(l.person.group.rotation.z=Math.sin(l.leaveT*26)*.08),l.group.scale.setScalar(Math.max(.001,1-Math.max(0,l.leaveT-1.1)*3)),l.leaveT>1.4&&this.removeView(this.customers,l.id);continue}let h=o.get(l.id),u,f;if(h!==void 0)[u,,f]=this.queueSpot(h);else{let R=a.get(l.id)||0;u=this.loc.window[0]+.5+R%4*.72,f=this.loc.window[2]+Math.floor(R/4)*.7}let p=u-l.x,g=f-l.z,_=Math.hypot(p,g),m=_>.06,d=Math.min(_,e*2.4);m&&(l.x+=p/_*d,l.z+=g/_*d),l.group.position.set(l.x,0,l.z);let y=(m?Math.atan2(p,g):Math.PI+l.turn*1.1+Math.sin(this.time*.6+l.phase)*.15)-l.heading;for(;y>Math.PI;)y-=Math.PI*2;for(;y<-Math.PI;)y+=Math.PI*2;l.heading+=y*Math.min(1,e*8),l.person.group.rotation.y=l.heading,tl(l.person,this.time*10+l.phase,m?1:0),l.person.group.position.y=m?Math.abs(Math.sin(this.time*10+l.phase))*.035:Math.sin(this.time*1.5+l.phase)*.006,l.group.scale.setScalar(1);let b=Math.max(0,l.data.patience/l.data.maxPatience);l.fill.scale.x=Math.max(.001,.6*b),l.fill.position.x=-(.6-.6*b)/2,l.fill.material.color.set(b>.5?"#06d6a0":b>.25?"#ffd166":"#ef476f"),l.overhead.quaternion.copy(this.camera.quaternion),l.bubble.position.y=Math.sin(this.time*2.2+l.phase)*.03,l.bubble.rotation.z=b<.25?Math.sin(this.time*18)*.12:0}let c=new Map;for(let l of this.pizzas.values()){if(l.leaving)continue;let h=this.stationFor(l.data.stage);c.has(h)||c.set(h,[]),c.get(h).push(l)}for(let[l,h]of c){h.sort((p,g)=>p.id-g.id);let u=l===this.loc.stations.oven,f=u?.3:.56;h.forEach((p,g)=>{let _=(g-(h.length-1)/2)*f,m=l[0]+_,d=l[1]+(u?g%2*.012:0),x=l[2]+(u?0:g%2*.12-.06),y=u?.6:1;p.inited||(p.x=m,p.y=d,p.z=x,p.s=y,p.inited=!0),p.x+=(m-p.x)*i,p.y+=(d-p.y)*i,p.z+=(x-p.z)*i,p.s+=(y-p.s)*i,p.group.position.set(p.x,p.y,p.z)})}for(let l of this.pizzas.values()){if(l.leaving){l.leaveT+=e,l.group.scale.setScalar(Math.max(.001,l.s*(1-l.leaveT*3))),l.group.position.y+=e*1.5,l.leaveT>.34&&this.removeView(this.pizzas,l.id);continue}let h=l.data,u=h.q.dough>0,f=h.q.top>0;l.ball.visible=!u,l.base.visible=u,l.sauce.visible=u,l.cheese.visible=u,l.toppings.visible=f&&!!h.topping;let p=this.cfg.economy.styles[h.style],g=h.stage==="baking"?1-Math.max(0,h.bakeLeft)/(p?p.bakeSeconds:10):h.stage==="ready"?1:0,_=Math.min(1,Math.max(0,g));l.crustMat.color.copy(dx).lerp(fx,_),l.cheeseMat.color.copy(px).lerp(mx,_),h.topping&&l.topMat.color.set(Rd[h.topping]||"#ffffff"),l.pop=Math.max(0,l.pop-e*3.5);let m=Math.sin(l.pop*Math.PI)*.25;l.group.scale.set(l.s*(1+m),l.s*(1-m*.6),l.s*(1+m));let d=gx.has(h.stage);if(l.ring.visible=d,d){let x=1+Math.sin(this.time*6)*.08;l.ring.scale.setScalar(.95*x),l.ring.position.y=.3+Math.sin(this.time*3)*.03}}}pick(e){let t=[];for(let o of this.pizzas.values())o.leaving||t.push(o.hit);for(let o of this.customers.values())o.leaving||t.push(o.hit);let i=e.intersectObjects(t,!1),r=i.find(o=>o.object.userData.kind==="pizza")||i[0];return r?{kind:r.object.userData.kind,id:r.object.userData.id}:null}positionOf(e,t){let s=(e==="customer"?this.customers:this.pizzas).get(t);return s?[s.group.position.x,s.group.position.y+(e==="customer"?1.9:.3),s.group.position.z]:null}steamPoints(){let e=[];for(let t of this.pizzas.values())!t.leaving&&t.data.stage==="ready"&&e.push([t.x,t.y+.12,t.z]);return e}};var vx=36,Mx=30,bx=34,Ho=class{constructor(e){this.env=e,this.root=new at,e.scene.add(this.root);let t=new $t({color:"#ffd24a",emissive:new ge("#8a5a00"),emissiveIntensity:.7});this.coins=[];for(let i=0;i<vx;i++){let s=new Pe(ke.cyl(12),t);s.visible=!1,this.root.add(s),this.coins.push({m:s,life:0,vx:0,vy:0,vz:0,spin:0})}this.sparkMats={green:new Mt({color:"#8fe3a0",toneMapped:!1}),red:new Mt({color:"#ff6b81",toneMapped:!1}),gold:new Mt({color:"#ffe08a",toneMapped:!1})},this.sparks=[];for(let i=0;i<Mx;i++){let s=new Pe(ke.ico(0),this.sparkMats.green);s.visible=!1,this.root.add(s),this.sparks.push({m:s,life:0,vx:0,vy:0,vz:0})}this.puffs=[];for(let i=0;i<bx;i++){let s=new Mt({color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1}),r=new Pe(ke.sphere(8,6),s);r.visible=!1,this.root.add(r),this.puffs.push({m:r,mat:s,life:0,max:1,vx:0,vy:0,vz:0,size:.2,grow:1})}this.smoke={pos:null,strength:0,timer:0},this.steam={points:[],timer:0},this.rain=this.buildRain(),this.bunting=this.buildBunting()}puff(e,t="gold",i=6){if(t==="gold"){let r=0;for(let o of this.coins)if(!(o.life>0)&&(o.m.position.set(e[0]+(Math.random()-.5)*.3,e[1],e[2]+(Math.random()-.5)*.3),o.m.scale.set(.085,.02,.085),o.m.visible=!0,o.life=.9+Math.random()*.4,o.vx=(Math.random()-.5)*2.2,o.vy=3+Math.random()*2.2,o.vz=(Math.random()-.2)*1.8,o.spin=8+Math.random()*10,++r>=i))break}let s=0;for(let r of this.sparks)if(!(r.life>0)&&(r.m.material=this.sparkMats[t]||this.sparkMats.green,r.m.position.set(e[0]+(Math.random()-.5)*.4,e[1]+.1,e[2]+(Math.random()-.5)*.4),r.m.visible=!0,r.life=.5+Math.random()*.3,r.vx=(Math.random()-.5)*2.4,r.vy=1.4+Math.random()*2,r.vz=(Math.random()-.5)*2.4,++s>=Math.ceil(i/2)+2))break}emitPuff(e,t,i,s,r,o,a){for(let c of this.puffs)if(!(c.life>0)){c.m.position.set(e[0]+(Math.random()-.5)*.1,e[1],e[2]+(Math.random()-.5)*.1),c.mat.color.set(t),c.size=i,c.grow=o,c.life=s,c.max=s,c.opacity=a,c.vx=.18+Math.random()*.2,c.vy=r*(.8+Math.random()*.4),c.vz=(Math.random()-.5)*.15,c.m.visible=!0;return}}setSmoke(e,t){this.smoke.pos=e,this.smoke.strength=t}setSteam(e){this.steam.points=e}buildRain(){let t=new Float32Array(2520);for(let r=0;r<420;r++){let o=(Math.random()-.5)*34,a=Math.random()*14,c=-8+Math.random()*24;t.set([o,a,c,o-.06,a+.6,c],r*6)}let i=new _t;i.setAttribute("position",new Wt(t,3));let s=new no(i,new ks({color:"#cfe6ff",transparent:!0,opacity:.5}));return s.visible=!1,s.frustumCulled=!1,this.root.add(s),s}buildBunting(){let e=new at,t=new je,i=["#ef476f","#ffd166","#06d6a0","#4ea8de","#9b5de5"];for(let s of[-3.2,7.5])for(let r=0;r<26;r++){let o=r/25,a=-11+o*22.4,c=6.6-Math.sin(o*Math.PI)*1.1;t.add(ke.cone(3),i[r%i.length],[a,c,s],[Math.PI,0,0],[.26,.5,.03])}return e.add(t.mesh(Di,{cast:!1})),e.visible=!1,this.root.add(e),e}setEvents(e){let t=new Set(e.map(i=>i.id));this.rain.visible=t.has("rainyDay"),this.bunting.visible=t.has("foodFestival")}update(e){for(let s of this.coins){if(s.life<=0)continue;s.life-=e,s.vy-=9*e,s.m.position.x+=s.vx*e,s.m.position.y+=s.vy*e,s.m.position.z+=s.vz*e,s.m.rotation.x+=s.spin*e,s.m.rotation.z+=s.spin*.6*e;let r=Math.min(1,s.life*3);s.m.scale.set(.085*r,.02*r,.085*r),s.life<=0&&(s.m.visible=!1)}for(let s of this.sparks)s.life<=0||(s.life-=e,s.vy-=5*e,s.m.position.x+=s.vx*e,s.m.position.y+=s.vy*e,s.m.position.z+=s.vz*e,s.m.scale.setScalar(Math.max(1e-4,Math.min(1,s.life*2.4))*.07),s.life<=0&&(s.m.visible=!1));let t=this.smoke;if(t.pos&&(t.timer-=e,t.timer<=0)){t.timer=t.strength>.5?.14:.5;let s=1-(this.env.daylight??1),r=Math.round(215-s*120);this.emitPuff(t.pos,`rgb(${r},${r},${r+6})`,.2,2.6,.95,2.4,t.strength>.5?.5:.3)}let i=this.steam;if(i.timer-=e,i.timer<=0&&i.points.length){i.timer=.28;let s=i.points[Math.floor(Math.random()*i.points.length)];this.emitPuff(s,"#ffffff",.07,.9,.55,1.6,.4)}for(let s of this.puffs){if(s.life<=0)continue;s.life-=e;let r=1-s.life/s.max;s.m.position.x+=s.vx*e,s.m.position.y+=s.vy*e,s.m.position.z+=s.vz*e,s.m.scale.setScalar(s.size*(1+r*s.grow)),s.mat.opacity=s.opacity*Math.sin(Math.min(1,r*6)*Math.PI/2)*(1-r),s.life<=0&&(s.m.visible=!1)}if(this.rain.visible){let s=this.rain.geometry.attributes.position.array;for(let r=0;r<s.length;r+=6)s[r+1]-=e*16,s[r+4]-=e*16,s[r+1]<0&&(s[r+1]+=14,s[r+4]+=14);this.rain.geometry.attributes.position.needsUpdate=!0}this.bunting.visible&&(this.bunting.rotation.x=Math.sin(this.env.time*1.2)*.015)}};var Ni=n=>document.getElementById(n),Sx=["customers","stretch","top","oven","serve","shop"];function Cd(n){let e={};for(let r of Sx){let o=document.querySelector(`#actions [data-action="${r}"]`);e[r]=o,o.addEventListener("click",()=>n(r))}let t=null,i=0;function s(r){t===null&&(t=r),t+=(r-t)*.25,Math.abs(r-t)<.5&&(t=r),Ni("cash").textContent=wt(t)}return{tickCash:s,setRate(r){Ni("rate").textContent=U("hud.rate",{rate:Nu(r)})},setGoal(r,o){Ni("goal").textContent=r?U("hud.goal",{goal:U(r.id)}):U("hud.goalDone")},setBadges(r){for(let[o,a]of Object.entries(r)){let c=e[o];if(!c)continue;let l=c.querySelector(".badge");l.textContent=a,l.hidden=a===0}},setHighlight(r){for(let[o,a]of Object.entries(e))a.classList.toggle("pulse",o===r)},setHint(r){let o=Ni("hint");r?(o.textContent=r,o.classList.remove("hidden")):o.classList.add("hidden")},setEvents(r){let o=Ni("events");o.innerHTML="";for(let a of r){let c=document.createElement("div");c.className="chip-event",c.textContent=`${U("event."+a.id+".name")} \xB7 ${Math.max(0,Math.ceil(a.left))}s`,o.appendChild(c)}},toast(r,o=""){if(i>=3)return;i++;let a=document.createElement("div");a.className="toast "+o,a.textContent=r,Ni("toasts").appendChild(a),setTimeout(()=>{a.classList.add("out"),setTimeout(()=>{a.remove(),i--},300)},2200)},float(r,o,a="gold"){let c=document.createElement("div");c.className="float "+a,c.textContent=o,c.style.left=r.x+"px",c.style.top=r.y+"px",Ni("floats").appendChild(c),setTimeout(()=>c.remove(),1100)},setPaused(r){document.body.classList.toggle("paused",r)}}}function Pd(){document.querySelectorAll("[data-i18n]").forEach(n=>{n.textContent=U(n.dataset.i18n)}),document.querySelectorAll("[data-i18n-aria]").forEach(n=>{n.setAttribute("aria-label",U(n.dataset.i18nAria))}),document.title=U("app.title")}var Oi=n=>document.getElementById(n),ri=null,ol={onOpen:()=>{},onClose:()=>{}},al=null;function Ld(n,e){al=n,ol=e,Oi("miniClose").addEventListener("click",()=>Vo())}function Id(){Vo()}function cl(){return ri!==null}function Vo(){if(!ri)return;let n=ri;ri=null;for(let e of n.cleanups)e();Oi("mini").classList.add("hidden"),Oi("miniBody").innerHTML="",ol.onClose()}function ll({station:n,title:e,hint:t,build:i,onDone:s}){ri&&Vo(),Oi("miniTitle").textContent=e,Oi("miniHint").textContent=t;let r=Oi("miniBody");r.innerHTML="";let o={frames:[],cleanups:[],raf:0,done:!1};ri=o,i(r,{finish:h=>{o.done||(o.done=!0,Vo(),s(h))},frame:h=>o.frames.push(h),cleanup:h=>o.cleanups.push(h)}),Oi("mini").classList.remove("hidden"),ol.onOpen(n);let c=performance.now(),l=h=>{if(ri!==o)return;let u=Math.min(.1,(h-c)/1e3);c=h;for(let f of o.frames)f(u);ri===o&&(o.raf=requestAnimationFrame(l))};o.raf=requestAnimationFrame(l),o.cleanups.push(()=>cancelAnimationFrame(o.raf))}function hl(n,e){let t=i=>e(i);window.addEventListener("keydown",t),n(()=>window.removeEventListener("keydown",t))}function Dd(n){let e=al.economy.manual;ll({station:"dough",title:U("mini.dough.title"),hint:U("mini.dough.hint"),onDone:n,build(t,{finish:i,frame:s,cleanup:r}){let o=Dt("div","dough-area"),a=Dt("div","dough-blob");o.appendChild(a);let c=Dt("div","bar"),l=Dt("div","fill");c.appendChild(l);let h=Dt("div","bar time"),u=Dt("div","fill");h.appendChild(u),t.append(o,c,h);let f=0,p=e.doughWindowSeconds,g=null,_=d=>{f=Math.min(1,f+d/e.doughSwipesNeeded)};o.addEventListener("wheel",d=>{d.preventDefault(),_(Math.abs(d.deltaX)+Math.abs(d.deltaY))},{passive:!1}),hl(r,d=>{["ArrowLeft","ArrowRight","a","d","A","D"].includes(d.key)&&(d.preventDefault(),_(e.doughKeyStep))}),o.addEventListener("pointerdown",d=>{g=d.clientX;try{o.setPointerCapture(d.pointerId)}catch{}}),o.addEventListener("pointermove",d=>{g!==null&&(_(Math.abs(d.clientX-g)),g=d.clientX)});let m=()=>{g=null};o.addEventListener("pointerup",m),o.addEventListener("pointercancel",m),s(d=>{p-=d,a.style.transform=`scale(${1+f*.45}, ${1-f*.2})`,l.style.width=f*100+"%",u.style.width=Math.max(0,p/e.doughWindowSeconds)*100+"%",f>=1?i({finished:!0,timeLeftFrac:Math.max(0,p)/e.doughWindowSeconds}):p<=0&&i({finished:!1,timeLeftFrac:0})})}})}function Ud(n,e,t){ll({station:"dough",title:U("mini.top.title"),hint:U("mini.top.hint"),onDone:t,build(i,{finish:s,cleanup:r}){let o=Dt("div","wants",U("customer.wants",{topping:U("topping."+n.topping)})),a=Dt("div","pizza-target"),c=Dt("div","chips"),l=wx([n.topping,...e.filter(x=>x!==n.topping).slice(0,2)]),h=null,u=null,f=null,p=!1,g=x=>{h=x;for(let y of c.children)y.classList.toggle("selected",y.dataset.topping===x)},_=()=>{h&&s({topping:h})},m=x=>{u&&(!p&&Math.hypot(x.clientX-f.x,x.clientY-f.y)<6||(p=!0,u.style.display="",u.style.left=x.clientX-40+"px",u.style.top=x.clientY-40+"px"))},d=x=>{if(!u)return;let y=u.dataset.topping,b=p;if(u.remove(),u=null,p=!1,!b)return g(h===y?null:y);let R=a.getBoundingClientRect();Math.hypot(x.clientX-(R.left+R.width/2),x.clientY-(R.top+R.height/2))<R.width/2+24&&s({topping:y})};window.addEventListener("pointermove",m),window.addEventListener("pointerup",d),r(()=>{window.removeEventListener("pointermove",m),window.removeEventListener("pointerup",d),u&&u.remove()}),a.addEventListener("click",_),hl(r,x=>{/^[1-3]$/.test(x.key)&&l[Number(x.key)-1]?g(l[Number(x.key)-1]):(x.key===" "||x.key==="Enter")&&(x.preventDefault(),_())});for(let x of l){let y=Dt("div","chip-topping "+x,U("topping."+x));y.dataset.topping=x,y.addEventListener("pointerdown",b=>{b.preventDefault(),f={x:b.clientX,y:b.clientY},p=!1,u=Dt("div","chip-topping ghost "+x,U("topping."+x)),u.dataset.topping=x,u.style.display="none",u.style.left=b.clientX-40+"px",u.style.top=b.clientY-40+"px",document.body.appendChild(u)}),c.appendChild(y)}i.append(o,a,c)}})}function Nd(n){let e=al.economy.manual;ll({station:"oven",title:U("mini.oven.title"),hint:U("mini.oven.hint"),onDone:n,build(t,{finish:i,frame:s,cleanup:r}){let o=Dt("div","oven-track"),a=Dt("div","zone");a.style.left=50-e.ovenSweetZone*100/2+"%",a.style.width=e.ovenSweetZone*100+"%";let c=Dt("div","marker");o.append(a,c);let l=Dt("button","big-tap",U("mini.oven.tap"));t.append(o,l);let h=0,u=0;s(_=>{f||(h+=_,u=(1-Math.cos(2*Math.PI*h/e.ovenMarkerPeriodSeconds))/2,c.style.left=u*100+"%")});let f=!1,p=0,g=()=>{if(f)return;f=!0,l.disabled=!0;let m=Math.abs(u-.5)<=e.ovenSweetZone/2,d=Dt("div","stop-mark "+(m?"good":"miss"));d.style.left=u*100+"%",o.appendChild(d);let x=Dt("div","stop-note "+(m?"good":"miss"),U(m?"mini.oven.stopped.good":"mini.oven.stopped.miss"));t.insertBefore(x,l),c.classList.add("frozen"),c.style.left=u*100+"%",p=setTimeout(()=>i({markerPos:u}),900)};r(()=>clearTimeout(p)),l.addEventListener("click",g),o.addEventListener("pointerdown",g),hl(r,_=>{(_.key===" "||_.key==="Enter")&&(_.preventDefault(),g())})}})}function Dt(n,e,t){let i=document.createElement(n);return e&&(i.className=e),t!==void 0&&(i.textContent=t),i}function wx(n){let e=[...n];for(let t=e.length-1;t>0;t--){let i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}var er=n=>document.getElementById(n),Ms=null,Wo=null,ul="",Go=null;function tr(){return Wo!==null}function oi(){let n=Go;Go=null,Wo=null,Ms=null,er("modal").classList.add("hidden"),er("modalBody").innerHTML="",n&&n()}function nr(n,e,t){Wo=n,er("modalTitle").textContent=e,er("modal").classList.remove("hidden");let i=er("modalBody");i.innerHTML="",ul="",Ms=()=>{i.innerHTML="",t(i)},Ms()}function Fd(n){Ms&&Wo!=="collect"&&n!==ul&&(ul=n,Ms())}function me(n,e,t){let i=document.createElement(n);return e&&(i.className=e),t!==void 0&&(i.textContent=t),i}function sn(n,e,{disabled:t=!1,primary:i=!1}={}){let s=me("button","btn"+(i?" primary":""),n);return s.disabled=t,s.addEventListener("click",e),s}function Ex(n,e,t){let i=t.economy.upgrades[n],s=e+1;switch(n){case"oven":return{slots:i.ovenSlotsBase+i.ovenSlotsPerLevel*s};case"counter":return{slots:i.maxQueueBase+i.maxQueuePerLevel*s};case"cheese":return{pct:Math.round(i.cheeseMultPerLevel*s*100)};case"decor":return{pct:Math.round(i.trafficPerLevel*s*100),item:U("decor.step."+(i.steps[e]||i.steps[i.steps.length-1]))};case"neon":return{pct:Math.round(i.trafficPerLevel*100)};case"marketing":return{pct:Math.round(i.trafficMultPerLevel*s*100)};case"pizzaSchool":return{pct:Math.round(i.payMultPerLevel*s*100)};case"megaOven":return{slots:i.ovenSlotsPerLevel*s};default:return{}}}function zd(n,e,t){nr("shop",U("shop.title"),i=>{let s=nn(n,e);i.append(me("h3","",U("shop.upgrades")));let r=(m,d)=>{let x=e.economy.upgrades[m],y=n.upgrades[m],b=y>=x.maxLevel,R=x.requires?.franchises||0,T=d&&n.franchise.count<R,A=b?0:gs(x,y),I=me("div","row"+(T?" locked":"")),M=me("div","info");M.append(me("b","",U("upgrade."+m+".name")),me("small","",T?U("shop.needsFranchise",{n:R}):b?U("action.maxed"):U("upgrade."+m+".desc",Ex(m,y,e))),me("small","lvl",`${y}/${x.maxLevel}`));let E=T?U("action.locked"):b?U("action.maxed"):U("action.buy",{cost:wt(A)});return I.append(M,sn(E,()=>t.buy(m),{disabled:b||T||n.cash<A})),I};for(let m of Object.keys(e.economy.upgrades)){let d=e.economy.upgrades[m];d.enabled===!1||d.group==="empire"||i.append(r(m,!1))}i.append(me("h3","",U("shop.empire"))),i.append(me("p","muted",U("shop.empireDesc")));for(let m of Object.keys(e.economy.upgrades)){let d=e.economy.upgrades[m];d.enabled===!1||d.group!=="empire"||i.append(r(m,!0))}i.append(me("h3","",U("shop.locations")));for(let m of Object.keys(e.locations)){let d=e.locations[m],x=!!n.unlockedLocations[m],y=n.location===m,b=me("div","row"),R=me("div","info");R.append(me("b","",U(d.nameKey)),me("small","",U(d.descKey)));let T=U("action.move"),A=!1;y?(T=U("location.current"),A=!0):x||(T=U("action.locked"),A=!0,R.append(me("small","lvl",U("location.locked",{target:wt(d.unlock?.value??0)})))),b.append(R,sn(T,()=>t.move(m),{disabled:A,primary:!y&&x})),i.append(b)}i.append(me("h3","",U("shop.staff")));for(let m of Object.keys(e.economy.staff)){let d=e.economy.staff[m],x=n.staff[m],y=x>=d.maxLevel,b=y?0:gs(d,x),R=m==="cashier"?U("staff.cashier.desc",{secs:s.cashierOrderSec.toFixed(1)}):U("staff.cook.desc",{speed:s.cookSpeed.toFixed(1)}),T=me("div","row"),A=me("div","info");A.append(me("b","",U("staff."+m+".name")),me("small","",R),me("small","lvl",x===0?U("staff.notHired"):U("staff.level",{level:x})));let I=x===0?U("action.hire",{cost:wt(b)}):U("action.upgrade",{cost:wt(b)});T.append(A,sn(y?U("action.maxed"):I,()=>t.hire(m),{disabled:y||n.cash<b,primary:x===0})),i.append(T)}i.append(me("h3","",U("shop.franchise")));let o=me("div","row"),a=me("div","info"),c=_s(n,e),l=e.economy.prestige.tiers,h=ti(n,e),u=l.find(m=>m.minFranchises>n.franchise.count);a.append(me("b","",U("franchise.title")),me("small","",c?U("franchise.ready")+" "+U("franchise.gain",{points:Ci(n,e)}):U("franchise.locked",{target:wt(Ri(n,e)),have:wt(Ai(n))})),me("small","",U("franchise.now",{tier:U("tier."+l[h].id)})+(u?". "+U("franchise.next",{tier:U("tier."+u.id)}):"")),me("small","lvl",U("franchise.points",{points:n.franchise.points})+" "+U("franchise.traffic",{pct:Math.round((Po(n,e)-1)*100)}))),o.append(a,sn(U("action.franchise"),()=>t.franchise(),{disabled:!c})),i.append(o),i.append(me("h3","",U("shop.starterPack")));let f=me("div","row"),p=me("div","info");p.append(me("b","",U("shop.starterPack")),me("small","",U("shop.starterPackDesc"))),f.append(p,sn(Tx(e),()=>t.stub("starterPack"))),i.append(f),i.append(me("h3","",U("shop.ovenSkins")));let g=me("div","row"),_=me("div","info");_.append(me("b","",U("shop.ovenSkins")),me("small","",U("shop.ovenSkinsDesc"))),g.append(_,sn(U("action.soon"),()=>t.stub("ovenSkins"))),i.append(g)})}function Tx(n){return n.economy.monetizationStubs.starterPack.priceLabel}function Bd(n,e,t){let i=1;nr("collect",U("collect.title"),s=>{s.innerHTML="",s.append(me("p","lead",U("collect.body",{duration:Bc(n.elapsed)})));let r=me("div","big-amount",U("collect.earned",{amount:zc(n.earned*i)}));s.append(r),n.capped&&s.append(me("p","muted",U("collect.capped",{cap:Bc(e.economy.time.offlineCapSeconds)}))),i>1&&s.append(me("p","muted",U("collect.boosted")));let o=me("div","stack"),a=sn(i>1?`${U("action.collect")} x${i}`:U("action.collect"),()=>{Go=null,oi(),t.collect(i)},{primary:!0});if(o.append(a),i===1){let c=sn(U("action.adDouble"),async()=>{c.disabled=!0,await t.watchAd()&&(i=2),Ms()});o.append(c,me("small","muted",U("action.adDoubleHint")))}s.append(o)}),Go=()=>t.collect(1)}function kd(n,e,t){nr("franchise",U("franchise.title"),i=>{let s=Ci(n,e),o=e.economy.prestige.tiers.find(c=>c.minFranchises>n.franchise.count);i.append(me("p","lead",U("franchise.explain",{bonus:Math.round(e.economy.prestige.bonusPerPoint*100),traffic:Math.round((e.economy.prestige.trafficPerFranchise||0)*100)})),me("p","",U("franchise.trafficNext",{pct:Math.round((Po(n,e,n.franchise.count+1)-1)*100)})),me("p","",U("franchise.nextCost",{target:wt(Ri({franchise:{count:n.franchise.count+1}},e))})),me("p","",U("franchise.gain",{points:s})+(o?" "+U("franchise.next",{tier:U("tier."+o.id)})+".":"")),me("p","muted",U("franchise.resets")),me("p","muted",U("franchise.keeps")),me("p","muted",U("franchise.points",{points:n.franchise.points})));let a=me("div","stack");a.append(sn(U("action.franchise"),()=>{oi(),t.confirmFranchise()},{primary:!0})),a.append(sn(U("action.cancel"),()=>oi())),i.append(a)})}function ir(n,e){nr("settings",U("settings.title"),t=>{t.append(Od(U("settings.sound"),n.settings.sound,o=>e.setSound(o)),Od(U("settings.notify"),n.settings.notify,o=>e.setNotify(o),U("settings.notifyDesc")),Ax(U("settings.graphics"),U("settings.graphicsDesc"),["auto","high","low"],n.settings.graphics||"auto",o=>e.setGraphics(o),o=>U("settings.graphics."+o)));let i=me("button","version-tap",`${U("app.version")}`),s=0;i.addEventListener("click",()=>{s++,s>=5&&(s=0,e.openDebug())}),t.append(i),t.append(me("p","keys-help",U("settings.keys")));let r=me("div","stack");r.append(sn(U("action.reset"),()=>{globalThis.confirm(U("action.confirmReset"))&&e.reset()})),t.append(r)})}function Ax(n,e,t,i,s,r){let o=me("div","row"),a=me("div","info");a.append(me("b","",n),me("small","",e));let c=me("div","segmented");for(let l of t){let h=me("button","seg"+(l===i?" on":""),r(l));h.addEventListener("click",()=>s(l)),c.append(h)}return o.append(a,c),o}function Od(n,e,t,i){let s=me("div","row"),r=me("div","info");r.append(me("b","",n)),i&&r.append(me("small","",i));let o=me("button","switch"+(e?" on":""));return o.setAttribute("role","switch"),o.setAttribute("aria-checked",String(e)),o.addEventListener("click",()=>t(!o.classList.contains("on"))),s.append(r,o),s}function dl(n){nr("debug",U("debug.title"),e=>{let t=[["debug.addCash",n.addCash,1e3],["debug.addCashBig",n.addCash,2e4],["debug.skip",n.skipHour],["debug.rain",n.event,"rainyDay"],["debug.festival",n.event,"foodFestival"],["debug.night",n.toggleNight],["debug.away",n.simulateAway],["debug.franchiseReady",n.franchiseReady],["debug.resetAll",n.wipe]],i=me("div","stack");for(let[s,r,o]of t)i.append(sn(U(s),()=>r(o)));e.append(i)})}var bs=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function Hd(){let n=document.getElementById("signs"),e=[];function t(r){n.innerHTML="",e=r.map(o=>{let a=document.createElement("div");return a.className="sign-label "+o.kind,n.appendChild(a),{spec:o,el:a,html:""}})}function i(r,o,a){if(r.kind==="menu"){let c=Object.entries(a.economy.styles).filter(([l,h])=>h.enabled&&o.styles[l]).slice(0,3).map(([l,h])=>`<div class="line"><span>${bs(U("style."+l))}</span><b>${wt(h.basePrice)}</b></div>`);return`<div class="title">${bs(U("sign.menu.title"))}</div>${c.join("")}`}return r.kind==="neon"?bs(U("sign.neon")):r.kind==="shopname"?bs(U("app.title")):r.kind==="franchise"?bs(U("sign.franchise",{count:o.franchise.count})):bs(U("sign.sandwich"))}function s(r,o,a){let c=o.upgrades.neon>=1;for(let l of e){if(!(l.spec.kind!=="neon"||c)){l.el.style.display="none";continue}let u=i(l.spec,o,a);u!==l.html&&(l.el.innerHTML=u,l.html=u);let f=r.toScreen(l.spec.pos);l.el.style.display=f.front?"":"none";let p=(l.el.offsetWidth||100)/2+6;l.el.style.left=Math.min(f.w-p,Math.max(p,f.x))+"px",l.el.style.top=f.y+"px"}}return{setSpecs:t,update:s}}var fl=.1,Vd=20,Cx=60,En=n=>document.getElementById(n),Te,X,Ke,Gd,Fi=null,rn=null,Zd="",_l=null,on,zi,ze,ai=null,Xo=0,gl=performance.now(),pl=0,Wd="",Xd=-1e9;async function Px(){Te=await Iu(),Uu(Te.strings),Pd();let n=Fu(),e=Date.now();X=n||To(Te,e),Te.locations[X.location]||(X.location="corner"),rn=Jd(),Ke=ud(En("scene"),rn),on=new ko(Ke,rn,Te),zi=new Ho(Ke),ze=Cd(Qd),_l=Hd(),yl(),Ld(Te,{onOpen:t=>Ke.focus(t?rn.stations[t]:null),onClose:()=>Ke.focus(null)}),Ao(X.settings.sound),Ke.setQuality(X.settings.graphics||"auto"),Gc(),lt("session_start_state",{fresh:!n}),window.addEventListener("resize",()=>Ke.resize()),window.addEventListener("orientationchange",()=>Ke.resize()),Ke.resize(),Bx(),kx(),n&&xl(e),En("loading").classList.add("hidden"),requestAnimationFrame(tf),new URLSearchParams(location.search).has("debug")&&En("btnDebug").classList.remove("hidden"),window.pizzaStand={get state(){return X},get layout(){return rn},cfg:Te,debug:vl(),env:Ke,actors:on}}function $d(){return Te.locations[X.location]}function Jd(){let n=ti(X,Te),e=Sd($d(),Te.economy.prestige.tiers[n],n);return e.decorSteps=Te.economy.upgrades.decor.steps,e}function Kd(){return`${X.location}|${ti(X,Te)}|${X.upgrades.decor}|${X.upgrades.marketing}|${X.upgrades.pizzaSchool}|${X.upgrades.megaOven}`}function yl(n=!0){rn=Jd(),Fi&&(Ke.scene.remove(Fi),Fi.traverse(e=>{e.geometry&&e.geometry.dispose()})),Ke.glowMats.length=0,Ke.nightFades.length=0,Ke.updaters.length=0,Ke.signs=[],Fi=new at,Fi.add(pd(rn,Ke)),Gd=wd(rn,Ke,{decor:X.upgrades.decor,empire:{marketing:X.upgrades.marketing,pizzaSchool:X.upgrades.pizzaSchool,megaOven:X.upgrades.megaOven}}),Fi.add(Gd),Ke.scene.add(Fi),Ke.setLocation(rn,n),on.setLocation(rn),_l.setSpecs(Ke.signs),Zd=Kd()}function Lx(n){if(!td(X,n,Te).ok)return ze.toast(U("toast.noPizza"));yl(),Xt.whoosh(),ze.toast(U("toast.locationMoved",{location:U($d().nameKey)})),lt("location_move",{to:n}),ci()}function ci(){let n=Date.now();ai||(X.savedAt=n),zu(X)}function xl(n=Date.now()){let e=id(X,n,Te);if(!(e.rawSeconds<Cx)){if(e.earned<=0){Zc(X,e,Te,1),X.savedAt=n;return}ai=e,Bd(e,Te,{collect:t=>{ai&&(Zc(X,e,Te,t),ai=null,X.savedAt=Date.now(),lt("offline_collect",{seconds:Math.round(e.elapsed),earned:Math.floor(e.earned*t),multiplier:t,capped:e.capped}),ci())},watchAd:()=>Ix(Te.economy.monetizationStubs.offlineBoostAd)})}}function Ix(n){return lt("ad_offline_boost_requested"),new Promise(e=>{setTimeout(()=>{lt("ad_offline_boost_completed"),ze.toast(U("toast.adStub")),e(!0)},n.placeholderSeconds*1e3)})}function rr(n){switch(n.type){case"arrived":case"order_taken":Xt.pop();break;case"stage":n.stage==="ready"&&Xt.bell();break;case"served":{Xt.cash(),on.leaveCustomer(n.customerId,!0),on.leavePizza(n.pizzaId);let e=rn.register,t=on.positionOf("customer",n.customerId)||[e[0],1.6,e[2]],i=Ke.toScreen([t[0],t[1]+.4,t[2]]);ze.float(i,"+"+wt(n.amount),"gold"),n.tip>=.5&&ze.float({x:i.x,y:i.y-26},U("toast.tip",{tip:wt(n.tip)}),"tip"),zi.puff([e[0],1.5,e[2]+.2],"gold",n.big?16:7),n.big&&Ke.shakeCam(.12),lt("sale",{total:Math.floor(n.total),customerType:n.customerType,wrongTopping:n.wrongTopping,auto:!!n.auto}),X.flags.firstSale||(X.flags.firstSale=!0,lt("first_sale"));break}case"angry":Xt.angry(),on.leaveCustomer(n.customerId,!1),ze.toast(U("toast.angry",{name:U("customer.name."+n.nameIdx),penalty:wt(n.penalty)}),"bad"),Ke.shakeCam(.04),lt("customer_angry",{customerType:n.customerType});break;case"turned_away":{let e=performance.now();e-Xd>8e3&&(Xd=e,ze.toast(U("customer.turnedAway"),"bad"),lt("customer_turned_away",{queueFull:!0}));break}case"event_start":Xt.bell(),ze.toast(U("toast.eventStart",{event:U("event."+n.id+".name")})),lt("event_start",{id:n.id});break;case"event_end":ze.toast(U("toast.eventEnd",{event:U("event."+n.id+".name")}));break;case"style_unlocked":ze.toast(U("toast.unlocked",{style:U("style."+n.style)}));break;case"location_unlocked":Xt.bell(),ze.toast(U("toast.locationUnlocked",{location:U(Te.locations[n.location].nameKey)})),lt("location_unlocked",{location:n.location});break;case"franchise_ready":Xt.bell(),ze.toast(U("toast.franchiseReady")),lt("franchise_ready",{count:X.franchise.count});break;case"tutorial_step":lt("tutorial_step",{step:n.step});break;case"tutorial_done":ze.toast(U("tut.done")),lt("tutorial_done");break;case"idle_staff":{let e=U("staff."+n.role+".name");ze.toast(U("toast.staffIdle",{role:e})),Dx(U("toast.staffIdle",{role:e}));break}default:break}}function Dx(n){if(!(!X.settings.notify||!document.hidden)&&!(typeof Notification>"u"||Notification.permission!=="granted"))try{new Notification(U("app.title"),{body:n})}catch{}}function Ux(){return X.customers.filter(n=>n.state==="waiting").sort((n,e)=>n.id-e.id)[0]}function Nx(n){return X.pizzas.filter(e=>e.stage===n).sort((e,t)=>e.id-t.id)[0]}function Qd(n){if(Xt.click(),n==="customers")return jd();if(n==="shop")return Ox();if(n==="stretch")return sr("dough");if(n==="top")return sr("topping");if(n==="oven")return sr("load");if(n==="serve")return sr("ready")}function jd(n){let e=n?ni(X,n):Ux();if(!e||e.state!=="waiting")return ze.toast(U("toast.noPizza"));let t=Io(X,e.id,Te);t.ok&&rr({...t,type:"order_taken"})}function sr(n,e){let t=e?X.pizzas.find(i=>i.id===e):Nx(n);if(!t||t.stage!==n)return ze.toast(U("toast.noPizza"));if(n==="dough")Dd(i=>qo($s(X,t.id,"stretch",i,Te)));else if(n==="topping"){let i=ni(X,t.customerId);Ud(i,Te.economy.customers.toppings,s=>qo($s(X,t.id,"topping",s,Te)))}else if(n==="load"){if(X.pizzas.filter(i=>i.stage==="baking").length>=nn(X,Te).ovenSlots)return ze.toast(U("toast.ovenFull"));Nd(i=>qo($s(X,t.id,"load",i,Te)))}else n==="ready"&&qo($s(X,t.id,"serve",{},Te))}function qo(n){if(!n.ok){ze.toast(n.reason==="ovenFull"?U("toast.ovenFull"):U("toast.noPizza"));return}if(n.type==="served")return rr(n);if(n.type==="stage"){let e=n.stage==="baking"?qd("oven"):qd(n.stage==="load"?"load":"dough");zi.puff(e,"green",4),Xt.pop()}}function qd(n){return rn.stations[n]}function Ox(){zd(X,Te,{buy:n=>{let e=Ku(X,n,Te);if(!e.ok)return ze.toast(e.reason==="cash"?U("toast.notEnough"):U("toast.noPizza"));if(Xt.bell(),n==="decor"){let t=Te.economy.upgrades.decor.steps;ze.toast(U("toast.decorAdded",{item:U("decor.step."+t[Math.min(t.length,X.upgrades.decor)-1])}))}else ze.toast(U("toast.bought",{item:U("upgrade."+n+".name")}));e.first&&lt("first_purchase",{item:n,cost:e.cost}),ci()},hire:n=>{let e=Qu(X,n,Te);if(!e.ok)return ze.toast(e.reason==="cash"?U("toast.notEnough"):U("toast.noPizza"));Xt.bell(),ze.toast(U("toast.hired",{role:U("staff."+n+".name")})),e.first&&lt("first_purchase",{item:n,cost:e.cost}),ci()},franchise:()=>kd(X,Te,{confirmFranchise:Fx}),move:n=>Lx(n),stub:n=>{lt("monetization_stub_tap",{name:n}),ze.toast(U("toast.comingSoon"))}})}function Fx(){if(!qc(X,Te))return ze.toast(U("franchise.locked",{target:wt(Ri(X,Te)),have:wt(Ai(X))}));let n=Ci(X,Te),e=ti(X,Te);X=ed(X,Te,To).state;let i=ti(X,Te);lt("prestige",{points:X.franchise.points,gain:n,count:X.franchise.count,tier:Te.economy.prestige.tiers[i].id,lifetimeCash:Math.floor(X.lifetimeCash)}),Xt.bell(),ze.toast(U("toast.franchised",{mult:(1+Te.economy.prestige.bonusPerPoint*X.franchise.points).toFixed(1)})),i!==e&&ze.toast(U("toast.tierUp",{tier:U("tier."+Te.economy.prestige.tiers[i].id)})),ci()}function Yo(){return{setSound:n=>{X.settings.sound=n,Ao(n),ir(X,Yo())},setNotify:async n=>{if(!n)X.settings.notify=!1;else if(typeof Notification<"u"){let e=await Notification.requestPermission();X.settings.notify=e==="granted"}lt("notify_opt_in",{on:X.settings.notify}),ir(X,Yo())},setGraphics:n=>{X.settings.graphics=n,Ke.setQuality(n),lt("graphics_quality",{quality:n}),ir(X,Yo())},reset:()=>ef(),openDebug:()=>dl(vl())}}function ef(){Bu(),ai=null,X=To(Te),lt("save_reset"),oi(),ze.toast(U("action.reset"))}function vl(){return{addCash:n=>{X.cash+=n,X.lifetimeCash+=n,ze.toast(U("toast.cashDebug",{amount:wt(n)}))},skipHour:()=>{for(let n=0;n<7200;n++){let e=Yc(X,.5,Te,[]);for(let t of e)(t.type==="event_start"||t.type==="event_end"||t.type==="tutorial_done")&&rr(t)}ze.toast("+1h")},event:n=>{Wc(X,n,Te),rr({type:"event_start",id:n})},toggleNight:()=>{X.dayClock=(X.dayClock+.5)%1},simulateAway:()=>{oi(),X.savedAt-=8*3600*1e3,xl()},franchiseReady:()=>{X.lifetimeCash=Math.max(X.lifetimeCash,(X.franchise.lifetimeAtLast||0)+Ri(X,Te))},wipe:ef}}var Yd={1:"customers",2:"stretch",3:"top",4:"oven",5:"serve",6:"shop"};function zx(){window.addEventListener("keydown",n=>{if(!(n.ctrlKey||n.metaKey||n.altKey)){if(n.key==="Escape")return cl()?Id():tr()?En("modalClose").click():void 0;if(!(tr()||cl()||ai)){if(Yd[n.key])return n.preventDefault(),Qd(Yd[n.key]);(n.key==="m"||n.key==="M")&&(X.settings.sound=!X.settings.sound,Ao(X.settings.sound),ze.toast(U("settings.sound")+": "+(X.settings.sound?"on":"off")))}}})}function Bx(){zx(),En("btnSettings").addEventListener("click",()=>ir(X,Yo())),En("btnDebug").addEventListener("click",()=>dl(vl())),En("modalClose").addEventListener("click",()=>oi()),En("modal").addEventListener("pointerdown",n=>{n.target.id==="modal"&&oi()})}function kx(){let n=En("scene"),e=new xo,t=new fe,i=null;n.addEventListener("pointerdown",s=>{i={x:s.clientX,y:s.clientY,t:performance.now()}}),n.addEventListener("pointerup",s=>{if(!i)return;let r=Math.hypot(s.clientX-i.x,s.clientY-i.y),o=performance.now()-i.t<450;if(i=null,r>12||!o||tr())return;let a=n.getBoundingClientRect();t.set((s.clientX-a.left)/a.width*2-1,-((s.clientY-a.top)/a.height)*2+1),e.setFromCamera(t,Ke.camera);let c=on.pick(e);if(c){if(c.kind==="customer"){let l=ni(X,c.id);return l&&l.state==="waiting"?jd(l.id):void 0}if(c.kind==="pizza"){let l=X.pizzas.find(h=>h.id===c.id);if(!l)return;["dough","topping","load","ready"].includes(l.stage)&&sr(l.stage,l.id)}}}),n.addEventListener("pointercancel",()=>{i=null}),n.addEventListener("pointermove",s=>{if(s.pointerType!=="mouse"||tr()){n.style.cursor="";return}let r=n.getBoundingClientRect();t.set((s.clientX-r.left)/r.width*2-1,-((s.clientY-r.top)/r.height)*2+1),e.setFromCamera(t,Ke.camera),n.style.cursor=on.pick(e)?"pointer":"default"}),n.addEventListener("touchmove",s=>s.preventDefault(),{passive:!1})}function tf(n){requestAnimationFrame(tf);let e=Math.min(.1,(n-gl)/1e3);if(gl=n,!ai){Xo+=e;let i=0;for(;Xo>=fl&&i<Vd;){let s=Yc(X,fl,Te,[]);for(let r of s)rr(r);Xo-=fl,i++}i===Vd&&(Xo=0)}Zd!==Kd()&&yl(!1);let t=X.pizzas.some(i=>i.stage==="baking");on.sync(X),on.update(e,X),zi.setSmoke(Ke.smokeAt,t?1:.2),zi.setSteam(on.steamPoints()),zi.update(e),zi.setEvents(X.events.active),Ke.update(e,X.dayClock),Td(Ke,X.upgrades.neon),Ad(Ke,t,Ke.time),_l.update(Ke,X,Te),Ed(Ke,X,performance.now()/1e3),pl+=e,pl>=Te.economy.time.autosaveSeconds&&(pl=0,ci()),ai||Hx(),Ke.renderer.render(Ke.scene,Ke.camera)}var ml=0;function Hx(){if(ml-=1,ml>0)return;ml=4;let n=nn(X,Te);ze.tickCash(X.cash),ze.setRate(n.idleRate),ze.setGoal(qu(X,Te)),ze.setBadges({customers:X.customers.filter(i=>i.state==="waiting").length,stretch:X.pizzas.filter(i=>i.stage==="dough").length,top:X.pizzas.filter(i=>i.stage==="topping").length,oven:X.pizzas.filter(i=>i.stage==="load").length,serve:X.pizzas.filter(i=>i.stage==="ready").length});let e=Te.economy.tutorial[X.tutorialStep];!X.tutorialDone&&e?(ze.setHint(U(e.textKey)),ze.setHighlight(e.highlight)):(ze.setHint(null),ze.setHighlight(null)),ze.setEvents(X.events.active.map(i=>({id:i.id,left:i.endsAt-X.gameTime})));let t=`${X.location}|${JSON.stringify(X.unlockedLocations)}|${Math.floor(X.cash)}|${JSON.stringify(X.upgrades)}|${JSON.stringify(X.staff)}|${X.franchise.points}|${X.franchise.count}|${qc(X,Te)}|${Math.floor(Ai(X)/500)}`;t!==Wd&&(Wd=t,Fd(t))}document.addEventListener("visibilitychange",()=>{document.hidden?(ze.setPaused(!0),X.tutorialDone||lt("churn_point",{where:"tutorial_step_"+X.tutorialStep}),Gu({gameTime:Math.round(X.gameTime)}),ci()):(ze.setPaused(!1),gl=performance.now(),Gc(),xl())});window.addEventListener("pagehide",()=>ci());Px().catch(n=>{console.error(n);let e=n&&n.message?n.message:String(n);window.__pizzaFail?window.__pizzaFail(e):En("loading").textContent="The game could not start: "+e});})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
