(()=>{var Il={schemaVersion:1,_comment:"All tunable values. Costs are baseCost * growth^currentLevel to go from currentLevel to currentLevel+1. Times are in seconds.",startingCash:30,bigSaleThreshold:20,time:{dayLengthSeconds:600,startDayClock:.3,offlineCapSeconds:28800,offlineBaseEfficiency:.5,offlineEfficiencyPerStaffRole:.25,autosaveSeconds:10,randomEventMinSeconds:300,randomEventMaxSeconds:600},customers:{spawnBaseSeconds:24,spawnJitter:.3,nightSpawnMult:.6,tipMax:.3,wrongToppingTipMult:.4,wrongToppingPayMult:.9,wrongToppingQuality:.55,angryPenalty:3,types:{hungry:{weight:3,patience:90,tipMult:1},chatty:{weight:2,patience:120,tipMult:1.3},grumpy:{weight:1,patience:45,tipMult:.7}},toppings:["pepperoni","mushroom","olive","basil","pepper"]},styles:{margherita:{basePrice:8,bakeSeconds:10,unlock:{type:"start"},enabled:!0},pepperoni:{basePrice:11,bakeSeconds:10,unlock:{type:"lifetime",value:600},enabled:!0},veggie:{basePrice:10,bakeSeconds:11,unlock:{type:"lifetime",value:2500},enabled:!1},seasonal:{basePrice:14,bakeSeconds:12,unlock:{type:"lifetime",value:8e3},enabled:!1}},pizzaQuality:{payBase:.6,payPerQuality:.6},stages:{autoDoughSeconds:4,autoToppingSeconds:3,autoDoughQuality:.7,autoToppingQuality:.75,autoLoadQuality:.7,perfectBakeQuality:.9,perfectBakeSpeedMult:.85,autoServeDelaySeconds:1},manual:{doughWindowSeconds:8,doughSwipesNeeded:1200,doughRushedQuality:.5,doughFinishMinQuality:.6,toppingCorrectQuality:1,toppingWrongQuality:.55,ovenSweetZone:.18,ovenMinQuality:.6,ovenMarkerPeriodSeconds:1.6,doughKeyStep:110},cashier:{orderSecondsBase:3,orderSpeedPerLevel:.5},cook:{speedPerLevel:.4},upgrades:{oven:{baseCost:40,growth:1.2,maxLevel:60,ovenSlotsBase:1,ovenSlotsPerLevel:1},counter:{baseCost:60,growth:1.2,maxLevel:60,maxQueueBase:3,maxQueuePerLevel:2},cheese:{baseCost:80,growth:1.15,maxLevel:60,cheeseMultPerLevel:.1},decor:{baseCost:120,growth:1.2,maxLevel:60,trafficPerLevel:.05,steps:["flowers","festoon","bunting","table","lanterns","carpet","secondTable","balloons","flags","statue"]},neon:{baseCost:300,growth:2.5,maxLevel:2,trafficPerLevel:.2},scooter:{baseCost:500,growth:2.2,maxLevel:5,enabled:!1,_note:"Delivery scooter: placeholder for post-prototype delivery kid."},marketing:{baseCost:15e4,growth:2.5,maxLevel:5,trafficMultPerLevel:.5,group:"empire",requires:{franchises:1}},pizzaSchool:{baseCost:4e5,growth:2.5,maxLevel:5,payMultPerLevel:.4,group:"empire",requires:{franchises:2}},megaOven:{baseCost:9e5,growth:2.5,maxLevel:4,ovenSlotsPerLevel:2,group:"empire",requires:{franchises:3}}},staff:{cashier:{baseCost:150,growth:1.3,maxLevel:20},cook:{baseCost:250,growth:1.3,maxLevel:20}},prestige:{milestoneLifetimeCash:2e4,pointsDivisor:2e4,bonusPerPoint:.1,_tiersNote:"The stand grows with each franchise. Width/depth are metres; staffVisible is how many employees per role can be seen working; bonuses add to oven slots and queue size.",tiers:[{id:"cart",minFranchises:0,width:4.2,depth:2.6,staffVisible:1,ovenSlotsBonus:0,maxQueueBonus:0,cameraZoom:1,recruitCap:2},{id:"stand",minFranchises:1,width:5.8,depth:3.2,staffVisible:2,ovenSlotsBonus:1,maxQueueBonus:2,cameraZoom:1.16,recruitCap:4},{id:"shop",minFranchises:2,width:7.6,depth:5,staffVisible:3,ovenSlotsBonus:2,maxQueueBonus:4,cameraZoom:1.46,recruitCap:6}],requirementExponent:1.3,_requirementNote:"Each franchise must be earned again. The cash a stand must earn before franchising is milestoneLifetimeCash x (franchises so far + 1) ^ requirementExponent, so it grows steadily instead of exponentially.",trafficPerFranchise:.25,_trafficNote:'Each franchise brings more customers, with no upper limit: spawn rate x (1 + trafficPerFranchise * franchises). Add "trafficMaxMult" here to cap it.',ovenSpeedPerFranchise:.6,minBakeSeconds:1.5,_ovenNote:"Ovens bake faster with each franchise: bake time = style bake time / (1 + ovenSpeedPerFranchise x franchises), never below minBakeSeconds."},events:{rainyDay:{durationSeconds:150,weight:1,spawnMult:1.5,patienceDrainMult:1.25,cashMult:1,styleDemand:{}},foodFestival:{durationSeconds:150,weight:1,spawnMult:1.2,patienceDrainMult:1,cashMult:1.1,styleDemand:{pepperoni:3}}},goals:[{id:"goal.cashier",condition:{type:"staffLevel",role:"cashier",value:1}},{id:"goal.pepperoni",condition:{type:"lifetime",value:600}},{id:"goal.cook",condition:{type:"staffLevel",role:"cook",value:1}},{id:"goal.neon",condition:{type:"upgradeLevel",upgrade:"neon",value:1}},{id:"goal.franchise",condition:{type:"lifetime",value:2e4}}],tutorial:[{id:"t1",textKey:"tut.1",highlight:"customers",check:{stat:"ordersTaken",gte:1}},{id:"t2",textKey:"tut.2",highlight:"stretch",check:{stat:"manualStretch",gte:1}},{id:"t3",textKey:"tut.3",highlight:"top",check:{stat:"manualTopping",gte:1}},{id:"t4",textKey:"tut.4",highlight:"oven",check:{stat:"manualLoad",gte:1}},{id:"t5",textKey:"tut.5",highlight:"serve",check:{stat:"served",gte:1}},{id:"t6",textKey:"tut.6",highlight:"shop",check:{stat:"upgradesBought",gte:1}},{id:"t7",textKey:"tut.7",highlight:"shop",check:{stat:"staffHired",gte:1}}],monetizationStubs:{offlineBoostAd:{multiplier:2,placeholderSeconds:1.5},starterPack:{priceLabel:"$2.99",placeholder:!0},ovenSkins:["skin.classic","skin.neon","skin.copper"]},_empireNote:'Empire upgrades (upgrades with group "empire") need a number of franchises before they can be bought, and they reset with each franchise like everything else.',recruit:{requiresFranchises:1,cashier:{baseCost:2500,growth:1.6},cook:{baseCost:3500,growth:1.6},offlineEfficiencyPerRecruit:.02,_note:"Extra employees, bought after franchising. Each one needs the role hired first. Caps per stand size are in prestige.tiers (recruitCap)."}};var Dl={"app.title":"Slice Street","app.version":"Prototype v0.1","hud.cash":"Cash","hud.rate":"+{rate}/s","hud.goal":"Next: {goal}","hud.goalDone":"All goals done!","hud.paused":"Paused","action.customers":"Order","action.stretch":"Stretch","action.top":"Topping","action.oven":"Oven","action.serve":"Serve","action.shop":"Shop","action.settings":"Settings","action.close":"Close","action.buy":"Buy {cost}","action.maxed":"Max","action.hire":"Hire {cost}","action.upgrade":"Upgrade {cost}","action.collect":"Collect","action.adDouble":"Watch ad: 2x","action.adDoubleHint":"Optional. Ads are always player-initiated.","action.franchise":"Franchise","action.cancel":"Cancel","action.reset":"Reset save","action.confirmReset":"Really erase all progress?","shop.title":"Shop","shop.upgrades":"Upgrades","shop.staff":"Staff","shop.franchise":"Franchise","shop.starterPack":"Starter pack","shop.starterPackDesc":"Placeholder. Not available in the prototype.","shop.ovenSkins":"Oven skins","shop.ovenSkinsDesc":"Cosmetic only. Placeholder list.","upgrade.oven.name":"Bigger oven","upgrade.oven.desc":"Bake {slots} pizzas at once","upgrade.counter.name":"Wider counter","upgrade.counter.desc":"Queue up to {slots} customers","upgrade.cheese.name":"Better cheese","upgrade.cheese.desc":"+{pct}% pizza value","upgrade.decor.name":"Pretty decor","upgrade.decor.desc":"+{pct}% foot traffic{item}","upgrade.neon.name":"Neon sign","upgrade.neon.desc":"+{pct}% foot traffic","upgrade.scooter.name":"Delivery scooter","staff.cashier.name":"Cashier","staff.cashier.desc":"Takes orders and hands out finished pizzas. Order time {secs}s.","staff.cook.name":"Cook","staff.cook.desc":"Stretches dough, adds toppings, loads the oven. Speed x{speed}.","staff.level":"Level {level}","staff.hired":"Working","style.margherita":"Margherita","style.pepperoni":"Pepperoni","style.veggie":"Veggie","style.seasonal":"Seasonal special","topping.pepperoni":"Pepperoni","topping.mushroom":"Mushroom","topping.olive":"Olive","topping.basil":"Basil","topping.pepper":"Pepper","customer.hungry":"Hungry","customer.chatty":"Chatty","customer.grumpy":"Grumpy","customer.name.1":"Dana","customer.name.2":"Mo","customer.name.3":"Priya","customer.name.4":"Sam","customer.name.5":"Ferdi","customer.wants":"Wants {topping}","customer.turnedAway":"Queue full, someone walked off","tut.1":"Tap a customer to take their order.","tut.2":"Stretch the dough: scroll the wheel or tap the arrow keys.","tut.3":"Pick the topping they want, then put it on the pizza.","tut.4":"Load the pizza. Click or press Space when the marker is in the green.","tut.5":"Tap the finished pizza to hand it over.","tut.6":"Nice! Spend some cash in the Shop.","tut.7":"Hire a cashier so orders run themselves.","tut.done":"Tutorial complete. Your stand is on its own now!","mini.dough.title":"Stretch the dough","mini.dough.hint":"Scroll the mouse wheel or tap the left and right arrow keys. Touch: swipe.","mini.top.title":"Add topping","mini.top.hint":"Click a topping, then click the pizza. Keys 1 to 3 pick, Space places.","mini.oven.title":"Slide it in","mini.oven.hint":"Click or press Space when the marker is in the green.","mini.oven.tap":"Tap!","toast.sale":"+{amount}","toast.tip":"+{tip} tip","toast.angry":"{name} left angry (-{penalty})","toast.ovenFull":"Oven is full. Wait for a slot.","toast.noPizza":"Nothing needs that right now.","toast.notEnough":"Not enough cash yet.","toast.eventStart":"{event} started!","toast.eventEnd":"{event} is over.","toast.staffIdle":"{role} is idle. Give them work!","toast.bought":"Bought {item}.","toast.hired":"{role} hired!","toast.comingSoon":"Coming soon (placeholder).","toast.adStub":"Ad placeholder finished.","toast.franchised":"Franchised! Multiplier now x{mult}.","event.rainyDay.name":"Rainy day","event.rainyDay.desc":"More customers, but they are in a hurry.","event.foodFestival.name":"Food festival","event.foodFestival.desc":"Pepperoni demand is through the roof.","collect.title":"Welcome back!","collect.body":"Your stand kept busy for {duration}.","collect.earned":"You earned {amount}","collect.capped":"Away time is capped at {cap}.","collect.boosted":"Doubled with the ad boost.","franchise.title":"Franchise your stand","franchise.explain":"Start again from scratch and keep permanent bonuses. Each franchise adds +{bonus}% cash and +{traffic}% customers for good, and your place grows: cart, then a big stand, then a pizza shop with more staff. Every franchise has to be earned again, and each one needs more than the last.","franchise.resets":"Resets: cash, upgrades, staff, queue, pizzas, and you go back to the corner.","franchise.keeps":"Keeps: franchise points, unlocked pizza styles (recipes), unlocked locations, the tutorial, settings, and lifetime stats.","franchise.gain":"You will gain {points} franchise point(s).","franchise.locked":"Earn {target} at this stand to franchise. So far: {have}.","franchise.points":"Franchise points: {points}","settings.title":"Settings","settings.sound":"Sound","settings.notify":"Notify me (opt-in)","settings.notifyDesc":"Offline earnings and idle staff. Off by default.","settings.version":"Version","stats.lifetime":"Lifetime cash: {amount}","debug.title":"Debug","debug.addCash":"+1,000 cash","debug.addCashBig":"+20,000 cash","debug.skip":"Skip 1 hour","debug.rain":"Trigger rain","debug.festival":"Trigger festival","debug.night":"Toggle time of day","debug.away":"Simulate 8h away","debug.franchiseReady":"Make franchise-ready","debug.resetAll":"Wipe save","debug.close":"Close debug","welcome.step":"Your cart is wobbly, but the lunch crowd is coming.","offline.hint":"Earnings accrue while the app is closed, capped at 8 hours.","location.corner.name":"Corner of Main & Sunny","goal.cashier":"Hire a cashier","goal.pepperoni":"Unlock pepperoni","goal.cook":"Hire a cook","goal.neon":"Buy a neon sign","goal.franchise":"Reach franchise milestone","toast.customerLeft":"{name} left","action.soon":"Soon","toast.unlocked":"New recipe unlocked: {style}","toast.offlineSaved":"Stand is saved. Come back for offline earnings.","toast.cashDebug":"Added {amount}","staff.notHired":"Not hired","location.corner.desc":"Your first stand. Steady lunch crowd.","location.side.name":"Side street","location.side.desc":"Busier foot traffic and a pepperoni-hungry lunch crowd. Unlocks at 3,000 lifetime cash.","location.current":"Here now","location.locked":"Reach {target} lifetime cash to unlock.","shop.locations":"Locations","action.move":"Move here","toast.locationMoved":"Stand moved to {location}. Queue cleared.","toast.locationUnlocked":"New location unlocked: {location}","action.locked":"Locked","settings.keys":"Keys: 1 to 6 for the action bar, M mute, Esc closes a window. Click the pizzas and customers directly.","sign.menu.title":"Menu","sign.neon":"Open!","sign.sandwich":"Fresh pizza, hot now!","mini.oven.stopped.good":"Perfect bake!","mini.oven.stopped.miss":"Close enough. It still bakes.","decor.step.flowers":"flower boxes","decor.step.festoon":"festoon lights","decor.step.bunting":"bunting","decor.step.table":"a bistro table","decor.step.lanterns":"lanterns","decor.step.carpet":"a red carpet","decor.step.secondTable":"a second table and olive trees","decor.step.balloons":"balloons","decor.step.flags":"rooftop flags","decor.step.statue":"a golden pizza","toast.decorAdded":"New decoration: {item}","tier.cart":"Pizza cart","tier.stand":"Big pizza stand","tier.shop":"Pizza shop","franchise.next":"Next: {tier}","franchise.now":"Now: {tier}","toast.tierUp":"Your place grew into: {tier}","sign.franchise":"Franchise {count}","staff.visible":"Up to {count} visible at this place","settings.graphics":"Graphics","settings.graphicsDesc":"Auto lowers detail if the game runs slowly.","settings.graphics.auto":"Auto","settings.graphics.high":"High","settings.graphics.low":"Low","franchise.ready":"Ready to franchise.","franchise.nextCost":"The next franchise will need {target} earned at the new stand.","toast.franchiseReady":"You can franchise now!","franchise.traffic":"Customers: +{pct}% from franchises.","franchise.trafficNext":"After this franchise: +{pct}% customers.","shop.empire":"Empire","shop.empireDesc":"Big upgrades that open up only after franchising. Each franchise resets them, like everything else.","shop.needsFranchise":"Needs {n} franchise(s)","upgrade.marketing.name":"Empire marketing","upgrade.marketing.desc":"+{pct}% customers on top of everything else","upgrade.pizzaSchool.name":"Pizza school","upgrade.pizzaSchool.desc":"+{pct}% pizza value","upgrade.megaOven.name":"Industrial ovens","upgrade.megaOven.desc":"Bake {slots} more pizzas at once","franchise.ovens":"Ovens: x{x} speed.","settings.look":"Art style","settings.lookDesc":"3D is the full look. 2D is flat storybook art, same game.","settings.look.3d":"3D","settings.look.2d":"2D","shop.recruit":"Recruit extra staff","shop.recruitLocked":"Franchise once to recruit extra staff.","recruit.cashier.name":"Extra cashier","recruit.cook.name":"Extra cook","recruit.cashier.desc":"Each extra cashier takes orders at the same time. Recruited: {n} of {max}.","recruit.cook.desc":"Each extra cook works on a different pizza at the same time. Recruited: {n} of {max}.","recruit.needHire":"Hire a {role} first.","action.recruit":"Recruit {cost}","toast.recruited":"Recruited an extra {role}."};var Ul=["corner","sideStreet"];var Nl={id:"corner",nameKey:"location.corner.name",descKey:"location.corner.desc",unlock:{type:"start"},economy:{trafficMult:1,styleDemand:{}},_note:"Stations and the stand itself are laid out in code (src/render/stand.js layoutFor), because they depend on the stand tier. This file is the street around it.",queueStart:[-2.2,0,4.4],queueStep:[.78,0,.9],_queueNote:"queueStep: x = column step (queueRowLength per row, filling left to right), z = row depth, toward the camera.",queueRowLength:4,camera:{position:[0,6.6,12.8],target:[0,1.45,.7],fov:46},props:[{type:"road",z:-8,width:7},{type:"building",pos:[-27.5,0,-16.2],size:[7,9.5,6],color:"#e07a5f",awning:"#d8402f"},{type:"building",pos:[-20.5,0,-16.2],size:[7,12.5,6],color:"#f2cc8f",awning:"#2f7d6a"},{type:"building",pos:[-14,0,-16.2],size:[6,8.5,6],color:"#81b29a",awning:"#e9a23b"},{type:"building",pos:[-7,0,-16.2],size:[8,13.5,6],color:"#e9c46a",awning:"#4a6fa5"},{type:"building",pos:[0,0,-16.2],size:[6,10,6],color:"#d9a5a0",awning:"#d8402f"},{type:"building",pos:[6.5,0,-16.2],size:[7,11.5,6],color:"#a8c5da",awning:"#2f7d6a"},{type:"building",pos:[13,0,-16.2],size:[6,9,6],color:"#f4a261",awning:"#e9a23b"},{type:"building",pos:[19.5,0,-16.2],size:[7,12,6],color:"#c9b8e0",awning:"#4a6fa5"},{type:"building",pos:[26.5,0,-16.2],size:[7,10.5,6],color:"#f0d9b5",awning:"#d8402f"},{type:"tree",pos:[-17,0,-12.4],scale:.95},{type:"tree",pos:[-10.5,0,-12.4],scale:.95},{type:"tree",pos:[-3.5,0,-12.4],scale:.95},{type:"tree",pos:[3.5,0,-12.4],scale:.95},{type:"tree",pos:[10,0,-12.4],scale:.95},{type:"tree",pos:[17,0,-12.4],scale:.95},{type:"building",pos:[-17.5,0,1.5],size:[7,11,12],color:"#f0d9b5",awning:"#2f7d6a"},{type:"building",pos:[18,0,1],size:[7,13,12],color:"#d9a5a0",awning:"#4a6fa5"},{type:"car",pos:[-8.5,0,-5.6],color:"#d8402f",rot:0},{type:"car",pos:[8.8,0,-5.6],color:"#3d9a8b",rot:0},{type:"lamp",pos:[-6.2,0,-3.4],light:!0},{type:"lamp",pos:[6,0,-3.4],light:!0},{type:"lamp",pos:[-11.5,0,-3.4]},{type:"lamp",pos:[12,0,-3.4]},{type:"tree",pos:[-7.2,0,1.2],scale:1.05},{type:"tree",pos:[8.2,0,2.2],scale:1},{type:"bush",pos:[-8.6,0,3.4]},{type:"bush",pos:[9.4,0,4.6]},{type:"bench",pos:[6.6,0,5.6]},{type:"bin",pos:[-5.8,0,3.6]},{type:"hydrant",pos:[4.9,0,-3.5]},{type:"planter",pos:[-5.4,0,6.2]},{type:"planter",pos:[5.6,0,7.4]},{type:"sandwichBoard",pos:[1.9,0,6.6]}]};var Ol={id:"sideStreet",nameKey:"location.side.name",descKey:"location.side.desc",unlock:{type:"lifetime",value:3e3},economy:{trafficMult:1.35,styleDemand:{pepperoni:2}},_note:"Stations and the stand itself are laid out in code (src/render/stand.js layoutFor), because they depend on the stand tier. This file is the street around it.",queueStart:[-2.2,0,4.4],queueStep:[.78,0,.9],_queueNote:"queueStep: x = column step (queueRowLength per row, filling left to right), z = row depth, toward the camera.",queueRowLength:4,camera:{position:[0,6.6,12.8],target:[0,1.45,.7],fov:46},props:[{type:"road",z:-8,width:7},{type:"building",pos:[-27.5,0,-16.2],size:[7,11,6],color:"#8ab17d",awning:"#4a6fa5"},{type:"building",pos:[-20.5,0,-16.2],size:[7,8.5,6],color:"#c9ada7",awning:"#d8402f"},{type:"building",pos:[-14,0,-16.2],size:[6,13,6],color:"#f2cc8f",awning:"#2f7d6a"},{type:"building",pos:[-7,0,-16.2],size:[8,9.5,6],color:"#e07a5f",awning:"#e9a23b"},{type:"building",pos:[0,0,-16.2],size:[6,12,6],color:"#9ec5d8",awning:"#4a6fa5"},{type:"building",pos:[6.5,0,-16.2],size:[7,10,6],color:"#f6bd60",awning:"#d8402f"},{type:"building",pos:[13,0,-16.2],size:[6,14,6],color:"#b8a9c9",awning:"#2f7d6a"},{type:"building",pos:[19.5,0,-16.2],size:[7,9,6],color:"#e5989b",awning:"#e9a23b"},{type:"building",pos:[26.5,0,-16.2],size:[7,11.5,6],color:"#a3b18a",awning:"#4a6fa5"},{type:"tree",pos:[-17,0,-12.4],scale:.95},{type:"tree",pos:[-10.5,0,-12.4],scale:.95},{type:"tree",pos:[-3.5,0,-12.4],scale:.95},{type:"tree",pos:[3.5,0,-12.4],scale:.95},{type:"tree",pos:[10,0,-12.4],scale:.95},{type:"tree",pos:[17,0,-12.4],scale:.95},{type:"building",pos:[-17.5,0,1.5],size:[7,13,12],color:"#c9ada7",awning:"#d8402f"},{type:"building",pos:[18,0,1],size:[7,10.5,12],color:"#8ab17d",awning:"#e9a23b"},{type:"car",pos:[-9.5,0,-5.6],color:"#e9c46a",rot:0},{type:"car",pos:[7.2,0,-5.6],color:"#4a6fa5",rot:0},{type:"lamp",pos:[-5.6,0,-3.4],light:!0},{type:"lamp",pos:[6.6,0,-3.4],light:!0},{type:"lamp",pos:[-12,0,-3.4]},{type:"lamp",pos:[12.5,0,-3.4]},{type:"tree",pos:[-8,0,2.4],scale:1},{type:"tree",pos:[7.6,0,1],scale:1.1},{type:"bush",pos:[8.8,0,3.6]},{type:"bush",pos:[-9.2,0,4.8]},{type:"bench",pos:[-6.4,0,5.2]},{type:"bin",pos:[6,0,3.4]},{type:"hydrant",pos:[-4.9,0,-3.5]},{type:"planter",pos:[5.6,0,6.4]},{type:"planter",pos:[-5.6,0,7.2]},{type:"sandwichBoard",pos:[1.9,0,6.6]}]};var ea={corner:Nl,sideStreet:Ol},Fl={};for(let n of Ul)ea[n]?Fl[ea[n].id]=ea[n]:console.warn("[bundle] location listed in index.json but not bundled:",n);globalThis.__PIZZA_DATA__={economy:Il,strings:Dl,locations:Fl};var Lc="160";var Md=0,zl=1,bd=2;var So=1,Sd=2,In=3,Qn=0,zt=1,hn=2;var $n=0,ss=1,zr=2,kl=3,Bl=4,wd=5,_i=100,Ed=101,Td=102,Hl=103,Vl=104,Ad=200,Rd=201,Cd=202,Pd=203,za=204,ka=205,Ld=206,Id=207,Dd=208,Ud=209,Nd=210,Od=211,Fd=212,zd=213,kd=214,Bd=0,Hd=1,Vd=2,kr=3,Gd=4,Wd=5,Xd=6,qd=7,wo=0,Yd=1,Zd=2,Jn=0,$d=1,Jd=2,Kd=3,Ic=4,Qd=5,jd=6;var yu=300,as=301,cs=302,Ba=303,Ha=304,Eo=306,Ns=1e3,un=1001,Va=1002,Vt=1003,Gl=1004;var ta=1005;var jt=1006,ep=1007;var Os=1008;var Kn=1009,tp=1010,np=1011,Dc=1012,xu=1013,Yn=1014,Zn=1015,Fs=1016,vu=1017,Mu=1018,xi=1020,ip=1021,fn=1023,sp=1024,rp=1025,vi=1026,ls=1027,op=1028,bu=1029,ap=1030,Su=1031,wu=1033,na=33776,ia=33777,sa=33778,ra=33779,Wl=35840,Xl=35841,ql=35842,Yl=35843,Eu=36196,Zl=37492,$l=37496,Jl=37808,Kl=37809,Ql=37810,jl=37811,eh=37812,th=37813,nh=37814,ih=37815,sh=37816,rh=37817,oh=37818,ah=37819,ch=37820,lh=37821,oa=36492,hh=36494,uh=36495,cp=36283,fh=36284,dh=36285,ph=36286;var Br=2300,Hr=2301,aa=2302,mh=2400,gh=2401,_h=2402;var Tu=3e3,Mi=3001,lp=3200,hp=3201,Uc=0,up=1,en="",gt="srgb",Nn="srgb-linear",Nc="display-p3",To="display-p3-linear",Vr="linear",lt="srgb",Gr="rec709",Wr="p3";var ki=7680;var yh=519,fp=512,dp=513,pp=514,Au=515,mp=516,gp=517,_p=518,yp=519,xh=35044;var vh="300 es",Ga=1035,Un=2e3,Xr=2001,jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ca=Math.PI/180,Wa=180/Math.PI;function Ys(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function Ct(n,e,t){return Math.max(e,Math.min(t,n))}function xp(n,e){return(n%e+e)%e}function la(n,e,t){return(1-t)*n+t*e}function Mh(n){return(n&n-1)===0&&n!==0}function Xa(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Es(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ue=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],x=s[1],y=s[4],b=s[7],R=s[2],E=s[5],A=s[8];return r[0]=o*_+a*x+l*R,r[3]=o*m+a*y+l*E,r[6]=o*p+a*b+l*A,r[1]=c*_+h*x+u*R,r[4]=c*m+h*y+u*E,r[7]=c*p+h*b+u*A,r[2]=f*_+d*x+g*R,r[5]=f*m+d*y+g*E,r[8]=f*p+d*b+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=t*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*c-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ha.makeScale(e,t)),this}rotate(e){return this.premultiply(ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ha=new We;function Ru(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function vp(){let n=qr("canvas");return n.style.display="block",n}var bh={};function Ls(n){n in bh||(bh[n]=!0,console.warn(n))}var Sh=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wh=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ur={[Nn]:{transfer:Vr,primaries:Gr,toReference:n=>n,fromReference:n=>n},[gt]:{transfer:lt,primaries:Gr,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[To]:{transfer:Vr,primaries:Wr,toReference:n=>n.applyMatrix3(wh),fromReference:n=>n.applyMatrix3(Sh)},[Nc]:{transfer:lt,primaries:Wr,toReference:n=>n.convertSRGBToLinear().applyMatrix3(wh),fromReference:n=>n.applyMatrix3(Sh).convertLinearToSRGB()}},Mp=new Set([Nn,To]),tt={enabled:!0,_workingColorSpace:Nn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Mp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=ur[e].toReference,s=ur[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ur[n].primaries},getTransfer:function(n){return n===en?Vr:ur[n].transfer}};function rs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ua(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Bi,Yr=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bi===void 0&&(Bi=qr("canvas")),Bi.width=e.width,Bi.height=e.height;let i=Bi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Bi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=qr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=rs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(rs(t[i]/255)*255):t[i]=rs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},bp=0,Zr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Ys(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(fa(s[o].image)):r.push(fa(s[o]))}else r=fa(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function fa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Yr.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Sp=0,tn=class n extends jn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=un,s=un,r=jt,o=Os,a=fn,l=Kn,c=n.DEFAULT_ANISOTROPY,h=en){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Ys(),this.name="",this.source=new Zr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Mi?gt:en),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ns:e.x=e.x-Math.floor(e.x);break;case un:e.x=e.x<0?0:1;break;case Va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ns:e.y=e.y-Math.floor(e.y);break;case un:e.y=e.y<0?0:1;break;case Va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===gt?Mi:Tu}set encoding(e){Ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Mi?gt:en}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=yu;tn.DEFAULT_ANISOTROPY=1;var ut=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,b=(d+1)/2,R=(p+1)/2,E=(h+f)/4,A=(u+_)/4,I=(g+m)/4;return y>b&&y>R?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=E/i,r=A/i):b>R?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=E/s,r=I/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=A/r,s=I/r),this.set(i,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(f-h)/x,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qa=class extends jn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(Ls("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Mi?gt:en),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new tn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Zr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},On=class extends qa{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},$r=class extends tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ya=class extends tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=1-a,p=l*f+c*d+h*g+u*_,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let R=Math.sqrt(y),E=Math.atan2(R,p*x);m=Math.sin(m*E)/R,a=Math.sin(a*E)/R}let b=a*x;if(l=l*m+f*b,c=c*m+d*b,h=h*m+g*b,u=u*m+_*b,m===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-a*d,e[t+2]=c*g+h*d+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Eh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Eh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return da.copy(this).projectOnVector(e),this.sub(da)}reflect(e){return this.sub(da.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},da=new C,Eh=new xn,bi=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,an):an.fromBufferAttribute(r,o),an.applyMatrix4(e.matrixWorld),this.expandByPoint(an);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fr.copy(i.boundingBox)),fr.applyMatrix4(e.matrixWorld),this.union(fr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ts),dr.subVectors(this.max,Ts),Hi.subVectors(e.a,Ts),Vi.subVectors(e.b,Ts),Gi.subVectors(e.c,Ts),Vn.subVectors(Vi,Hi),Gn.subVectors(Gi,Vi),fi.subVectors(Hi,Gi);let t=[0,-Vn.z,Vn.y,0,-Gn.z,Gn.y,0,-fi.z,fi.y,Vn.z,0,-Vn.x,Gn.z,0,-Gn.x,fi.z,0,-fi.x,-Vn.y,Vn.x,0,-Gn.y,Gn.x,0,-fi.y,fi.x,0];return!pa(t,Hi,Vi,Gi,dr)||(t=[1,0,0,0,1,0,0,0,1],!pa(t,Hi,Vi,Gi,dr))?!1:(pr.crossVectors(Vn,Gn),t=[pr.x,pr.y,pr.z],pa(t,Hi,Vi,Gi,dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},An=[new C,new C,new C,new C,new C,new C,new C,new C],an=new C,fr=new bi,Hi=new C,Vi=new C,Gi=new C,Vn=new C,Gn=new C,fi=new C,Ts=new C,dr=new C,pr=new C,di=new C;function pa(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){di.fromArray(n,r);let a=s.x*Math.abs(di.x)+s.y*Math.abs(di.y)+s.z*Math.abs(di.z),l=e.dot(di),c=t.dot(di),h=i.dot(di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var wp=new bi,As=new C,ma=new C,Si=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):wp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;As.subVectors(e,this.center);let t=As.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(As,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(As.copy(e.center).add(ma)),this.expandByPoint(As.copy(e.center).sub(ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Rn=new C,ga=new C,mr=new C,Wn=new C,_a=new C,gr=new C,ya=new C,hs=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ga.copy(e).add(t).multiplyScalar(.5),mr.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(ga);let r=e.distanceTo(t)*.5,o=-this.direction.dot(mr),a=Wn.dot(this.direction),l=-Wn.dot(mr),c=Wn.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ga).addScaledVector(mr,f),d}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);let i=Rn.dot(this.direction),s=Rn.dot(Rn)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,i,s,r){_a.subVectors(t,e),gr.subVectors(i,e),ya.crossVectors(_a,gr);let o=this.direction.dot(ya),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wn.subVectors(this.origin,e);let l=a*this.direction.dot(gr.crossVectors(Wn,gr));if(l<0)return null;let c=a*this.direction.dot(_a.cross(Wn));if(c<0||l+c>o)return null;let h=-a*Wn.dot(ya);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ft=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,f,d,g,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,f,d,g,_,m)}set(e,t,i,s,r,o,a,l,c,h,u,f,d,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Wi.setFromMatrixColumn(e,0).length(),r=1/Wi.setFromMatrixColumn(e,1).length(),o=1/Wi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f-_*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-_*u}else if(e.order==="XZY"){let f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ep,e,Tp)}lookAt(e,t,i){let s=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Xn.crossVectors(i,Yt),Xn.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Xn.crossVectors(i,Yt)),Xn.normalize(),_r.crossVectors(Yt,Xn),s[0]=Xn.x,s[4]=_r.x,s[8]=Yt.x,s[1]=Xn.y,s[5]=_r.y,s[9]=Yt.y,s[2]=Xn.z,s[6]=_r.z,s[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],x=i[3],y=i[7],b=i[11],R=i[15],E=s[0],A=s[4],I=s[8],M=s[12],S=s[1],O=s[5],V=s[9],$=s[13],P=s[2],F=s[6],G=s[10],K=s[14],Z=s[3],q=s[7],ee=s[11],ne=s[15];return r[0]=o*E+a*S+l*P+c*Z,r[4]=o*A+a*O+l*F+c*q,r[8]=o*I+a*V+l*G+c*ee,r[12]=o*M+a*$+l*K+c*ne,r[1]=h*E+u*S+f*P+d*Z,r[5]=h*A+u*O+f*F+d*q,r[9]=h*I+u*V+f*G+d*ee,r[13]=h*M+u*$+f*K+d*ne,r[2]=g*E+_*S+m*P+p*Z,r[6]=g*A+_*O+m*F+p*q,r[10]=g*I+_*V+m*G+p*ee,r[14]=g*M+_*$+m*K+p*ne,r[3]=x*E+y*S+b*P+R*Z,r[7]=x*A+y*O+b*F+R*q,r[11]=x*I+y*V+b*G+R*ee,r[15]=x*M+y*$+b*K+R*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*d-i*l*d)+_*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+m*(+t*c*u-t*a*d-r*o*u+i*o*d+r*a*h-i*c*h)+p*(-s*a*h-t*l*u+t*a*f+s*o*u-i*o*f+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],x=u*m*c-_*f*c+_*l*d-a*m*d-u*l*p+a*f*p,y=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,b=h*_*c-g*u*c+g*a*d-o*_*d-h*a*p+o*u*p,R=g*u*l-h*_*l-g*a*f+o*_*f+h*a*m-o*u*m,E=t*x+i*y+s*b+r*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/E;return e[0]=x*A,e[1]=(_*f*r-u*m*r-_*s*d+i*m*d+u*s*p-i*f*p)*A,e[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*A,e[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*d-i*l*d)*A,e[4]=y*A,e[5]=(h*m*r-g*f*r+g*s*d-t*m*d-h*s*p+t*f*p)*A,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*A,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*d+t*l*d)*A,e[8]=b*A,e[9]=(g*u*r-h*_*r-g*i*d+t*_*d+h*i*p-t*u*p)*A,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*p+t*a*p)*A,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*d-t*a*d)*A,e[12]=R*A,e[13]=(h*_*s-g*u*s+g*i*f-t*_*f-h*i*m+t*u*m)*A,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*m-t*a*m)*A,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*f+t*a*f)*A,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,_=o*h,m=o*u,p=a*u,x=l*c,y=l*h,b=l*u,R=i.x,E=i.y,A=i.z;return s[0]=(1-(_+p))*R,s[1]=(d+b)*R,s[2]=(g-y)*R,s[3]=0,s[4]=(d-b)*E,s[5]=(1-(f+p))*E,s[6]=(m+x)*E,s[7]=0,s[8]=(g+y)*A,s[9]=(m-x)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Wi.set(s[0],s[1],s[2]).length(),o=Wi.set(s[4],s[5],s[6]).length(),a=Wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],cn.copy(this);let c=1/r,h=1/o,u=1/a;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=u,cn.elements[9]*=u,cn.elements[10]*=u,t.setFromRotationMatrix(cn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Un){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),d,g;if(a===Un)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Xr)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Un){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),f=(t+e)*c,d=(i+s)*h,g,_;if(a===Un)g=(o+r)*u,_=-2*u;else if(a===Xr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Wi=new C,cn=new ft,Ep=new C(0,0,0),Tp=new C(1,1,1),Xn=new C,_r=new C,Yt=new C,Th=new ft,Ah=new xn,us=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Th.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Th,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ah.setFromEuler(this),this.setFromQuaternion(Ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};us.DEFAULT_ORDER="XYZ";var zs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ap=0,Rh=new C,Xi=new xn,Cn=new ft,yr=new C,Rs=new C,Rp=new C,Cp=new xn,Ch=new C(1,0,0),Ph=new C(0,1,0),Lh=new C(0,0,1),Pp={type:"added"},Lp={type:"removed"},Pt=class n extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=Ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new C,t=new us,i=new xn,s=new C(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new We}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(Ch,e)}rotateY(e){return this.rotateOnAxis(Ph,e)}rotateZ(e){return this.rotateOnAxis(Lh,e)}translateOnAxis(e,t){return Rh.copy(e).applyQuaternion(this.quaternion),this.position.add(Rh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ch,e)}translateY(e){return this.translateOnAxis(Ph,e)}translateZ(e){return this.translateOnAxis(Lh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?yr.copy(e):yr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(Rs,yr,this.up):Cn.lookAt(yr,Rs,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Xi.setFromRotationMatrix(Cn),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Pp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lp)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,e,Rp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,Cp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Pt.DEFAULT_UP=new C(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ln=new C,Pn=new C,xa=new C,Ln=new C,qi=new C,Yi=new C,Ih=new C,va=new C,Ma=new C,ba=new C,xr=!1,ts=class n{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ln.subVectors(e,t),s.cross(ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ln.subVectors(s,t),Pn.subVectors(i,t),xa.subVectors(e,t);let o=ln.dot(ln),a=ln.dot(Pn),l=ln.dot(xa),c=Pn.dot(Pn),h=Pn.dot(xa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getUV(e,t,i,s,r,o,a,l){return xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xr=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ln.x),l.addScaledVector(o,Ln.y),l.addScaledVector(a,Ln.z),l)}static isFrontFacing(e,t,i,s){return ln.subVectors(i,t),Pn.subVectors(e,t),ln.cross(Pn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),ln.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xr=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;qi.subVectors(s,i),Yi.subVectors(r,i),va.subVectors(e,i);let l=qi.dot(va),c=Yi.dot(va);if(l<=0&&c<=0)return t.copy(i);Ma.subVectors(e,s);let h=qi.dot(Ma),u=Yi.dot(Ma);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(qi,o);ba.subVectors(e,r);let d=qi.dot(ba),g=Yi.dot(ba);if(g>=0&&d<=g)return t.copy(r);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Yi,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Ih.subVectors(r,s),a=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(Ih,a);let p=1/(m+_+f);return o=_*p,a=f*p,t.copy(i).addScaledVector(qi,o).addScaledVector(Yi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},vr={h:0,s:0,l:0};function Sa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var me=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=tt.workingColorSpace){if(e=xp(e,1),t=Ct(t,0,1),i=Ct(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Sa(o,r,e+1/3),this.g=Sa(o,r,e),this.b=Sa(o,r,e-1/3)}return tt.toWorkingColorSpace(this,s),this}setStyle(e,t=gt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){let i=Cu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}copyLinearToSRGB(e){return this.r=ua(e.r),this.g=ua(e.g),this.b=ua(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return tt.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Ct(Ot.r*255,0,255))*65536+Math.round(Ct(Ot.g*255,0,255))*256+Math.round(Ct(Ot.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Ot.copy(this),t);let i=Ot.r,s=Ot.g,r=Ot.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=gt){tt.fromWorkingColorSpace(Ot.copy(this),e);let t=Ot.r,i=Ot.g,s=Ot.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(qn),this.setHSL(qn.h+e,qn.s+t,qn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qn),e.getHSL(vr);let i=la(qn.h,vr.h,t),s=la(qn.s,vr.s,t),r=la(qn.l,vr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ot=new me;me.NAMES=Cu;var Ip=0,vn=class extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=Ys(),this.name="",this.type="Material",this.blending=ss,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=za,this.blendDst=ka,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(i.blending=this.blending),this.side!==Qn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==za&&(i.blendSrc=this.blendSrc),this.blendDst!==ka&&(i.blendDst=this.blendDst),this.blendEquation!==_i&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==kr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},vt=class extends vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Mt=new C,Mr=new ue,Xt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=xh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Mr.fromBufferAttribute(this,t),Mr.applyMatrix3(e),this.setXY(t,Mr.x,Mr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Es(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Es(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Es(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Es(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Es(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),s=Wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),s=Wt(s,this.array),r=Wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xh&&(e.usage=this.usage),e}};var Jr=class extends Xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Kr=class extends Xt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var $e=class extends Xt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var Dp=0,Qt=new ft,wa=new Pt,Zi=new C,Zt=new bi,Cs=new bi,At=new C,_t=class n extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=Ys(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ru(e)?Kr:Jr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new We().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,i){return Qt.makeTranslation(e,t,i),this.applyMatrix4(Qt),this}scale(e,t,i){return Qt.makeScale(e,t,i),this.applyMatrix4(Qt),this}lookAt(e){return wa.lookAt(e),wa.updateMatrix(),this.applyMatrix4(wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new $e(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Zt.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){let i=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Cs.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(Zt.min,Cs.min),Zt.expandByPoint(At),At.addVectors(Zt.max,Cs.max),Zt.expandByPoint(At)):(Zt.expandByPoint(Cs.min),Zt.expandByPoint(Cs.max))}Zt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)At.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(At));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)At.fromBufferAttribute(a,c),l&&(Zi.fromBufferAttribute(e,c),At.add(Zi)),s=Math.max(s,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let S=0;S<a;S++)c[S]=new C,h[S]=new C;let u=new C,f=new C,d=new C,g=new ue,_=new ue,m=new ue,p=new C,x=new C;function y(S,O,V){u.fromArray(s,S*3),f.fromArray(s,O*3),d.fromArray(s,V*3),g.fromArray(o,S*2),_.fromArray(o,O*2),m.fromArray(o,V*2),f.sub(u),d.sub(u),_.sub(g),m.sub(g);let $=1/(_.x*m.y-m.x*_.y);isFinite($)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar($),x.copy(d).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar($),c[S].add(p),c[O].add(p),c[V].add(p),h[S].add(x),h[O].add(x),h[V].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let S=0,O=b.length;S<O;++S){let V=b[S],$=V.start,P=V.count;for(let F=$,G=$+P;F<G;F+=3)y(i[F+0],i[F+1],i[F+2])}let R=new C,E=new C,A=new C,I=new C;function M(S){A.fromArray(r,S*3),I.copy(A);let O=c[S];R.copy(O),R.sub(A.multiplyScalar(A.dot(O))).normalize(),E.crossVectors(I,O);let $=E.dot(h[S])<0?-1:1;l[S*4]=R.x,l[S*4+1]=R.y,l[S*4+2]=R.z,l[S*4+3]=$}for(let S=0,O=b.length;S<O;++S){let V=b[S],$=V.start,P=V.count;for(let F=$,G=$+P;F<G;F+=3)M(i[F+0]),M(i[F+1]),M(i[F+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new Xt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dh=new ft,pi=new hs,br=new Si,Uh=new C,$i=new C,Ji=new C,Ki=new C,Ea=new C,Sr=new C,wr=new ue,Er=new ue,Tr=new ue,Nh=new C,Oh=new C,Fh=new C,Ar=new C,Rr=new C,Pe=class extends Pt{constructor(e=new _t,t=new vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Sr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Ea.fromBufferAttribute(u,e),o?Sr.addScaledVector(Ea,h):Sr.addScaledVector(Ea.sub(t),h))}t.add(Sr)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere),br.applyMatrix4(r),pi.copy(e.ray).recast(e.near),!(br.containsPoint(pi.origin)===!1&&(pi.intersectSphere(br,Uh)===null||pi.origin.distanceToSquared(Uh)>(e.far-e.near)**2))&&(Dh.copy(r).invert(),pi.copy(e.ray).applyMatrix4(Dh),!(i.boundingBox!==null&&pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,pi)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let b=x,R=y;b<R;b+=3){let E=a.getX(b),A=a.getX(b+1),I=a.getX(b+2);s=Cr(this,p,e,i,c,h,u,E,A,I),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let x=a.getX(m),y=a.getX(m+1),b=a.getX(m+2);s=Cr(this,o,e,i,c,h,u,x,y,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let b=x,R=y;b<R;b+=3){let E=b,A=b+1,I=b+2;s=Cr(this,p,e,i,c,h,u,E,A,I),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let x=m,y=m+1,b=m+2;s=Cr(this,o,e,i,c,h,u,x,y,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Up(n,e,t,i,s,r,o,a){let l;if(e.side===zt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Qn,a),l===null)return null;Rr.copy(a),Rr.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Rr);return c<t.near||c>t.far?null:{distance:c,point:Rr.clone(),object:n}}function Cr(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,$i),n.getVertexPosition(l,Ji),n.getVertexPosition(c,Ki);let h=Up(n,e,t,i,$i,Ji,Ki,Ar);if(h){s&&(wr.fromBufferAttribute(s,a),Er.fromBufferAttribute(s,l),Tr.fromBufferAttribute(s,c),h.uv=ts.getInterpolation(Ar,$i,Ji,Ki,wr,Er,Tr,new ue)),r&&(wr.fromBufferAttribute(r,a),Er.fromBufferAttribute(r,l),Tr.fromBufferAttribute(r,c),h.uv1=ts.getInterpolation(Ar,$i,Ji,Ki,wr,Er,Tr,new ue),h.uv2=h.uv1),o&&(Nh.fromBufferAttribute(o,a),Oh.fromBufferAttribute(o,l),Fh.fromBufferAttribute(o,c),h.normal=ts.getInterpolation(Ar,$i,Ji,Ki,Nh,Oh,Fh,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new C,materialIndex:0};ts.getNormal($i,Ji,Ki,u.normal),h.face=u}return h}var wi=class n extends _t{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(u,2));function g(_,m,p,x,y,b,R,E,A,I,M){let S=b/A,O=R/I,V=b/2,$=R/2,P=E/2,F=A+1,G=I+1,K=0,Z=0,q=new C;for(let ee=0;ee<G;ee++){let ne=ee*O-$;for(let fe=0;fe<F;fe++){let W=fe*S-V;q[_]=W*x,q[m]=ne*y,q[p]=P,c.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[p]=E>0?1:-1,h.push(q.x,q.y,q.z),u.push(fe/A),u.push(1-ee/I),K+=1}}for(let ee=0;ee<I;ee++)for(let ne=0;ne<A;ne++){let fe=f+ne+F*ee,W=f+ne+F*(ee+1),j=f+(ne+1)+F*(ee+1),he=f+(ne+1)+F*ee;l.push(fe,W,he),l.push(W,j,he),Z+=6}a.addGroup(d,Z,M),d+=Z,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function fs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Ht(n){let e={};for(let t=0;t<n.length;t++){let i=fs(n[t]);for(let s in i)e[s]=i[s]}return e}function Np(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Pu(n){return n.getRenderTarget()===null?n.outputColorSpace:tt.workingColorSpace}var Op={clone:fs,merge:Ht},Fp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dn=class extends vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fp,this.fragmentShader=zp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fs(e.uniforms),this.uniformsGroups=Np(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Qr=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Un}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ft=class extends Qr{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Wa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wa*2*Math.atan(Math.tan(ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ca*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Qi=-90,ji=1,Za=class extends Pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ft(Qi,ji,e,t);s.layers=this.layers,this.add(s);let r=new Ft(Qi,ji,e,t);r.layers=this.layers,this.add(r);let o=new Ft(Qi,ji,e,t);o.layers=this.layers,this.add(o);let a=new Ft(Qi,ji,e,t);a.layers=this.layers,this.add(a);let l=new Ft(Qi,ji,e,t);l.layers=this.layers,this.add(l);let c=new Ft(Qi,ji,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Un)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},jr=class extends tn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:as,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$a=class extends On{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Ls("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Mi?gt:en),this.texture=new jr(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new wi(5,5,5),r=new dn({name:"CubemapFromEquirect",uniforms:fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zt,blending:$n});r.uniforms.tEquirect.value=t;let o=new Pe(s,r),a=t.minFilter;return t.minFilter===Os&&(t.minFilter=jt),new Za(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Ta=new C,kp=new C,Bp=new We,Dn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Ta.subVectors(i,t).cross(kp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Ta),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Bp.getNormalMatrix(e),s=this.coplanarPoint(Ta).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},mi=new Si,Pr=new C,ks=class{constructor(e=new Dn,t=new Dn,i=new Dn,s=new Dn,r=new Dn,o=new Dn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Un){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],x=s[13],y=s[14],b=s[15];if(i[0].setComponents(l-r,f-c,m-d,b-p).normalize(),i[1].setComponents(l+r,f+c,m+d,b+p).normalize(),i[2].setComponents(l+o,f+h,m+g,b+x).normalize(),i[3].setComponents(l-o,f-h,m-g,b-x).normalize(),i[4].setComponents(l-a,f-u,m-_,b-y).normalize(),t===Un)i[5].setComponents(l+a,f+u,m+_,b+y).normalize();else if(t===Xr)i[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(e){return mi.center.set(0,0,0),mi.radius=.7071067811865476,mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Pr.x=s.normal.x>0?e.max.x:e.min.x,Pr.y=s.normal.y>0?e.max.y:e.min.y,Pr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Lu(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Hp(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,f=c.usage,d=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,f),c.onUploadCallback();let _;if(u instanceof Float32Array)_=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=n.SHORT;else if(u instanceof Uint32Array)_=n.UNSIGNED_INT;else if(u instanceof Int32Array)_=n.INT;else if(u instanceof Int8Array)_=n.BYTE;else if(u instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,h,u){let f=h.array,d=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,c),d.count===-1&&g.length===0&&n.bufferSubData(u,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){let p=g[_];t?n.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):n.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(t?n.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):n.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var Mn=class n extends _t{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let x=p*f-o;for(let y=0;y<c;y++){let b=y*u-r;g.push(b,-x,0),_.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){let y=x+c*p,b=x+c*(p+1),R=x+1+c*(p+1),E=x+1+c*p;d.push(y,b,E),d.push(b,R,E)}this.setIndex(d),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gp=`#ifdef USE_ALPHAHASH
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
#endif`,Wp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Yp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zp=`#ifdef USE_AOMAP
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
#endif`,$p=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jp=`#ifdef USE_BATCHING
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
#endif`,Kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Qp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,em=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tm=`#ifdef USE_IRIDESCENCE
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
#endif`,nm=`#ifdef USE_BUMPMAP
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
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,um=`#define PI 3.141592653589793
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
} // validated`,fm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dm=`vec3 transformedNormal = objectNormal;
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
#endif`,pm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ym="gl_FragColor = linearToOutputTexel( gl_FragColor );",xm=`
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
}`,vm=`#ifdef USE_ENVMAP
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
#endif`,Mm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Am=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cm=`#ifdef USE_GRADIENTMAP
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
}`,Pm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Lm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Im=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Um=`uniform bool receiveShadow;
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
#endif`,Nm=`#ifdef USE_ENVMAP
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
#endif`,Om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bm=`PhysicalMaterial material;
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
#endif`,Hm=`struct PhysicalMaterial {
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
}`,Vm=`
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
#endif`,Gm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ym=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Zm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$m=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qm=`#if defined( USE_POINTS_UV )
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
#endif`,jm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n0=`#ifdef USE_MORPHNORMALS
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
#endif`,i0=`#ifdef USE_MORPHTARGETS
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
#endif`,s0=`#ifdef USE_MORPHTARGETS
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
#endif`,r0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,o0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,a0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,h0=`#ifdef USE_NORMALMAP
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
#endif`,u0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,d0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,p0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,g0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,T0=`float getShadowMask() {
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
}`,A0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R0=`#ifdef USE_SKINNING
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
#endif`,C0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,P0=`#ifdef USE_SKINNING
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
#endif`,L0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,N0=`#ifdef USE_TRANSMISSION
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
#endif`,O0=`#ifdef USE_TRANSMISSION
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
#endif`,F0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,H0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V0=`uniform sampler2D t2D;
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
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y0=`#include <common>
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
}`,Z0=`#if DEPTH_PACKING == 3200
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
}`,$0=`#define DISTANCE
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
}`,J0=`#define DISTANCE
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
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`uniform float scale;
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
}`,eg=`uniform vec3 diffuse;
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
}`,tg=`#include <common>
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
}`,ng=`uniform vec3 diffuse;
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
}`,ig=`#define LAMBERT
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
}`,sg=`#define LAMBERT
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
}`,rg=`#define MATCAP
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
}`,og=`#define MATCAP
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
}`,ag=`#define NORMAL
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
}`,cg=`#define NORMAL
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
}`,lg=`#define PHONG
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
}`,hg=`#define PHONG
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
}`,ug=`#define STANDARD
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
}`,fg=`#define STANDARD
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
}`,dg=`#define TOON
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
}`,pg=`#define TOON
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
}`,mg=`uniform float size;
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
}`,gg=`uniform vec3 diffuse;
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
}`,_g=`#include <common>
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
}`,yg=`uniform vec3 color;
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
}`,xg=`uniform float rotation;
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
}`,vg=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:Vp,alphahash_pars_fragment:Gp,alphamap_fragment:Wp,alphamap_pars_fragment:Xp,alphatest_fragment:qp,alphatest_pars_fragment:Yp,aomap_fragment:Zp,aomap_pars_fragment:$p,batching_pars_vertex:Jp,batching_vertex:Kp,begin_vertex:Qp,beginnormal_vertex:jp,bsdfs:em,iridescence_fragment:tm,bumpmap_pars_fragment:nm,clipping_planes_fragment:im,clipping_planes_pars_fragment:sm,clipping_planes_pars_vertex:rm,clipping_planes_vertex:om,color_fragment:am,color_pars_fragment:cm,color_pars_vertex:lm,color_vertex:hm,common:um,cube_uv_reflection_fragment:fm,defaultnormal_vertex:dm,displacementmap_pars_vertex:pm,displacementmap_vertex:mm,emissivemap_fragment:gm,emissivemap_pars_fragment:_m,colorspace_fragment:ym,colorspace_pars_fragment:xm,envmap_fragment:vm,envmap_common_pars_fragment:Mm,envmap_pars_fragment:bm,envmap_pars_vertex:Sm,envmap_physical_pars_fragment:Nm,envmap_vertex:wm,fog_vertex:Em,fog_pars_vertex:Tm,fog_fragment:Am,fog_pars_fragment:Rm,gradientmap_pars_fragment:Cm,lightmap_fragment:Pm,lightmap_pars_fragment:Lm,lights_lambert_fragment:Im,lights_lambert_pars_fragment:Dm,lights_pars_begin:Um,lights_toon_fragment:Om,lights_toon_pars_fragment:Fm,lights_phong_fragment:zm,lights_phong_pars_fragment:km,lights_physical_fragment:Bm,lights_physical_pars_fragment:Hm,lights_fragment_begin:Vm,lights_fragment_maps:Gm,lights_fragment_end:Wm,logdepthbuf_fragment:Xm,logdepthbuf_pars_fragment:qm,logdepthbuf_pars_vertex:Ym,logdepthbuf_vertex:Zm,map_fragment:$m,map_pars_fragment:Jm,map_particle_fragment:Km,map_particle_pars_fragment:Qm,metalnessmap_fragment:jm,metalnessmap_pars_fragment:e0,morphcolor_vertex:t0,morphnormal_vertex:n0,morphtarget_pars_vertex:i0,morphtarget_vertex:s0,normal_fragment_begin:r0,normal_fragment_maps:o0,normal_pars_fragment:a0,normal_pars_vertex:c0,normal_vertex:l0,normalmap_pars_fragment:h0,clearcoat_normal_fragment_begin:u0,clearcoat_normal_fragment_maps:f0,clearcoat_pars_fragment:d0,iridescence_pars_fragment:p0,opaque_fragment:m0,packing:g0,premultiplied_alpha_fragment:_0,project_vertex:y0,dithering_fragment:x0,dithering_pars_fragment:v0,roughnessmap_fragment:M0,roughnessmap_pars_fragment:b0,shadowmap_pars_fragment:S0,shadowmap_pars_vertex:w0,shadowmap_vertex:E0,shadowmask_pars_fragment:T0,skinbase_vertex:A0,skinning_pars_vertex:R0,skinning_vertex:C0,skinnormal_vertex:P0,specularmap_fragment:L0,specularmap_pars_fragment:I0,tonemapping_fragment:D0,tonemapping_pars_fragment:U0,transmission_fragment:N0,transmission_pars_fragment:O0,uv_pars_fragment:F0,uv_pars_vertex:z0,uv_vertex:k0,worldpos_vertex:B0,background_vert:H0,background_frag:V0,backgroundCube_vert:G0,backgroundCube_frag:W0,cube_vert:X0,cube_frag:q0,depth_vert:Y0,depth_frag:Z0,distanceRGBA_vert:$0,distanceRGBA_frag:J0,equirect_vert:K0,equirect_frag:Q0,linedashed_vert:j0,linedashed_frag:eg,meshbasic_vert:tg,meshbasic_frag:ng,meshlambert_vert:ig,meshlambert_frag:sg,meshmatcap_vert:rg,meshmatcap_frag:og,meshnormal_vert:ag,meshnormal_frag:cg,meshphong_vert:lg,meshphong_frag:hg,meshphysical_vert:ug,meshphysical_frag:fg,meshtoon_vert:dg,meshtoon_frag:pg,points_vert:mg,points_frag:gg,shadow_vert:_g,shadow_frag:yg,sprite_vert:xg,sprite_frag:vg},re={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},yn={basic:{uniforms:Ht([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Ht([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new me(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Ht([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Ht([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Ht([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new me(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Ht([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Ht([re.points,re.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Ht([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Ht([re.common,re.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Ht([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Ht([re.sprite,re.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Ht([re.common,re.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Ht([re.lights,re.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};yn.physical={uniforms:Ht([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var Lr={r:0,b:0,g:0};function Mg(n,e,t,i,s,r,o){let a=new me(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(m,p){let x=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?_(a,l):y&&y.isColor&&(_(y,1),x=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Eo)?(h===void 0&&(h=new Pe(new wi(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:fs(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=tt.getTransfer(y.colorSpace)!==lt,(u!==y||f!==y.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Pe(new Mn(2,2),new dn({name:"BackgroundMaterial",uniforms:fs(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=tt.getTransfer(y.colorSpace)!==lt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(Lr,Pu(n)),i.buffers.color.setClear(Lr.r,Lr.g,Lr.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function bg(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(P,F,G,K,Z){let q=!1;if(o){let ee=_(K,G,F);c!==ee&&(c=ee,d(c.object)),q=p(P,K,G,Z),q&&x(P,K,G,Z)}else{let ee=F.wireframe===!0;(c.geometry!==K.id||c.program!==G.id||c.wireframe!==ee)&&(c.geometry=K.id,c.program=G.id,c.wireframe=ee,q=!0)}Z!==null&&t.update(Z,n.ELEMENT_ARRAY_BUFFER),(q||h)&&(h=!1,I(P,F,G,K),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function d(P){return i.isWebGL2?n.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?n.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,F,G){let K=G.wireframe===!0,Z=a[P.id];Z===void 0&&(Z={},a[P.id]=Z);let q=Z[F.id];q===void 0&&(q={},Z[F.id]=q);let ee=q[K];return ee===void 0&&(ee=m(f()),q[K]=ee),ee}function m(P){let F=[],G=[],K=[];for(let Z=0;Z<s;Z++)F[Z]=0,G[Z]=0,K[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:G,attributeDivisors:K,object:P,attributes:{},index:null}}function p(P,F,G,K){let Z=c.attributes,q=F.attributes,ee=0,ne=G.getAttributes();for(let fe in ne)if(ne[fe].location>=0){let j=Z[fe],he=q[fe];if(he===void 0&&(fe==="instanceMatrix"&&P.instanceMatrix&&(he=P.instanceMatrix),fe==="instanceColor"&&P.instanceColor&&(he=P.instanceColor)),j===void 0||j.attribute!==he||he&&j.data!==he.data)return!0;ee++}return c.attributesNum!==ee||c.index!==K}function x(P,F,G,K){let Z={},q=F.attributes,ee=0,ne=G.getAttributes();for(let fe in ne)if(ne[fe].location>=0){let j=q[fe];j===void 0&&(fe==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),fe==="instanceColor"&&P.instanceColor&&(j=P.instanceColor));let he={};he.attribute=j,j&&j.data&&(he.data=j.data),Z[fe]=he,ee++}c.attributes=Z,c.attributesNum=ee,c.index=K}function y(){let P=c.newAttributes;for(let F=0,G=P.length;F<G;F++)P[F]=0}function b(P){R(P,0)}function R(P,F){let G=c.newAttributes,K=c.enabledAttributes,Z=c.attributeDivisors;G[P]=1,K[P]===0&&(n.enableVertexAttribArray(P),K[P]=1),Z[P]!==F&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,F),Z[P]=F)}function E(){let P=c.newAttributes,F=c.enabledAttributes;for(let G=0,K=F.length;G<K;G++)F[G]!==P[G]&&(n.disableVertexAttribArray(G),F[G]=0)}function A(P,F,G,K,Z,q,ee){ee===!0?n.vertexAttribIPointer(P,F,G,Z,q):n.vertexAttribPointer(P,F,G,K,Z,q)}function I(P,F,G,K){if(i.isWebGL2===!1&&(P.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let Z=K.attributes,q=G.getAttributes(),ee=F.defaultAttributeValues;for(let ne in q){let fe=q[ne];if(fe.location>=0){let W=Z[ne];if(W===void 0&&(ne==="instanceMatrix"&&P.instanceMatrix&&(W=P.instanceMatrix),ne==="instanceColor"&&P.instanceColor&&(W=P.instanceColor)),W!==void 0){let j=W.normalized,he=W.itemSize,Me=t.get(W);if(Me===void 0)continue;let ve=Me.buffer,Ne=Me.type,Fe=Me.bytesPerElement,Re=i.isWebGL2===!0&&(Ne===n.INT||Ne===n.UNSIGNED_INT||W.gpuType===xu);if(W.isInterleavedBufferAttribute){let Ke=W.data,z=Ke.stride,Rt=W.offset;if(Ke.isInstancedInterleavedBuffer){for(let ge=0;ge<fe.locationSize;ge++)R(fe.location+ge,Ke.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Ke.meshPerAttribute*Ke.count)}else for(let ge=0;ge<fe.locationSize;ge++)b(fe.location+ge);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let ge=0;ge<fe.locationSize;ge++)A(fe.location+ge,he/fe.locationSize,Ne,j,z*Fe,(Rt+he/fe.locationSize*ge)*Fe,Re)}else{if(W.isInstancedBufferAttribute){for(let Ke=0;Ke<fe.locationSize;Ke++)R(fe.location+Ke,W.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Ke=0;Ke<fe.locationSize;Ke++)b(fe.location+Ke);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let Ke=0;Ke<fe.locationSize;Ke++)A(fe.location+Ke,he/fe.locationSize,Ne,j,he*Fe,he/fe.locationSize*Ke*Fe,Re)}}else if(ee!==void 0){let j=ee[ne];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(fe.location,j);break;case 3:n.vertexAttrib3fv(fe.location,j);break;case 4:n.vertexAttrib4fv(fe.location,j);break;default:n.vertexAttrib1fv(fe.location,j)}}}}E()}function M(){V();for(let P in a){let F=a[P];for(let G in F){let K=F[G];for(let Z in K)g(K[Z].object),delete K[Z];delete F[G]}delete a[P]}}function S(P){if(a[P.id]===void 0)return;let F=a[P.id];for(let G in F){let K=F[G];for(let Z in K)g(K[Z].object),delete K[Z];delete F[G]}delete a[P.id]}function O(P){for(let F in a){let G=a[F];if(G[P.id]===void 0)continue;let K=G[P.id];for(let Z in K)g(K[Z].object),delete K[Z];delete G[P.id]}}function V(){$(),h=!0,c!==l&&(c=l,d(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:V,resetDefaultState:$,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:O,initAttributes:y,enableAttribute:b,disableUnusedAttributes:E}}function Sg(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,f){if(f===0)return;let d,g;if(s)d=n,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,f),t.update(u,r,f)}function c(h,u,f){if(f===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function wg(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,b=o||e.has("OES_texture_float"),R=y&&b,E=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:R,maxSamples:E}}function Eg(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Dn,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let x=r?0:i,y=x*4,b=p.clippingState||null;l.value=b,b=h(g,f,y,d);for(let R=0;R!==y;++R)b[R]=t[R];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=d+_*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,b=d;y!==_;++y,b+=4)o.copy(u[y]).applyMatrix4(x,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Tg(n){let e=new WeakMap;function t(o,a){return a===Ba?o.mapping=as:a===Ha&&(o.mapping=cs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ba||a===Ha)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new $a(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var eo=class extends Qr{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ns=4,zh=[.125,.215,.35,.446,.526,.582],yi=20,Aa=new eo,kh=new me,Ra=null,Ca=0,Pa=0,gi=(1+Math.sqrt(5))/2,es=1/gi,Bh=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,gi,es),new C(0,gi,-es),new C(es,0,gi),new C(-es,0,gi),new C(gi,es,0),new C(-gi,es,0)],to=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ra,Ca,Pa),e.scissorTest=!1,Ir(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===as||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Fs,format:fn,colorSpace:Nn,depthBuffer:!1},s=Hh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hh(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ag(r)),this._blurMaterial=Rg(r,e,t)}return s}_compileMaterial(e){let t=new Pe(this._lodPlanes[0],e);this._renderer.compile(t,Aa)}_sceneToCubeUV(e,t,i,s){let a=new Ft(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(kh),h.toneMapping=Jn,h.autoClear=!1;let d=new vt({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),g=new Pe(new wi,d),_=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(kh),_=!0);for(let p=0;p<6;p++){let x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let y=this._cubeSize;Ir(s,x*y,p>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===as||e.mapping===cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Pe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ir(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Aa)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Bh[(s-1)%Bh.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Pe(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*yi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):yi;m>yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yi}`);let p=[],x=0;for(let A=0;A<yi;++A){let I=A/_,M=Math.exp(-I*I/2);p.push(M),A===0?x+=M:A<m&&(x+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/x;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;let b=this._sizeLods[s],R=3*b*(s>y-ns?s-y+ns:0),E=4*(this._cubeSize-b);Ir(t,R,E,3*b,2*b),l.setRenderTarget(t),l.render(u,Aa)}};function Ag(n){let e=[],t=[],i=[],s=n,r=n-ns+1+zh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-ns?l=zh[o-n+ns-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*d),y=new Float32Array(m*g*d),b=new Float32Array(p*g*d);for(let E=0;E<d;E++){let A=E%3*2/3-1,I=E>2?0:-1,M=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];x.set(M,_*g*E),y.set(f,m*g*E);let S=[E,E,E,E,E,E];b.set(S,p*g*E)}let R=new _t;R.setAttribute("position",new Xt(x,_)),R.setAttribute("uv",new Xt(y,m)),R.setAttribute("faceIndex",new Xt(b,p)),e.push(R),s>ns&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Hh(n,e,t){let i=new On(n,e,t);return i.texture.mapping=Eo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ir(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Rg(n,e,t){let i=new Float32Array(yi),s=new C(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Vh(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Gh(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Oc(){return`

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
	`}function Cg(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ba||l===Ha,h=l===as||l===cs;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new to(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new to(n));let f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Pg(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Lg(n,e,t,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,_=0;if(d!==null){let x=d.array;_=d.version;for(let y=0,b=x.length;y<b;y+=3){let R=x[y+0],E=x[y+1],A=x[y+2];f.push(R,E,E,A,A,R)}}else if(g!==void 0){let x=g.array;_=g.version;for(let y=0,b=x.length/3-1;y<b;y+=3){let R=y+0,E=y+1,A=y+2;f.push(R,E,E,A,A,R)}}else return;let m=new(Ru(f)?Kr:Jr)(f,1);m.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Ig(n,e,t,i){let s=i.isWebGL2,r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,g){n.drawElements(r,g,a,d*l),t.update(g,r,1)}function u(d,g,_){if(_===0)return;let m,p;if(s)m=n,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,d*l,_),t.update(g,r,_)}function f(d,g,_){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(d[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,d,0,_);let p=0;for(let x=0;x<_;x++)p+=g[x];t.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Dg(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Ug(n,e){return n[0]-e[0]}function Ng(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Og(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new ut,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,_=r.get(h);if(_===void 0||_.count!==g){let P=function(){V.dispose(),r.delete(h),h.removeEventListener("dispose",P)};_!==void 0&&_.texture.dispose();let x=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],I=0;x===!0&&(I=1),y===!0&&(I=2),b===!0&&(I=3);let M=h.attributes.position.count*I,S=1;M>e.maxTextureSize&&(S=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let O=new Float32Array(M*S*4*g),V=new $r(O,M,S,g);V.type=Zn,V.needsUpdate=!0;let $=I*4;for(let F=0;F<g;F++){let G=R[F],K=E[F],Z=A[F],q=M*S*4*F;for(let ee=0;ee<G.count;ee++){let ne=ee*$;x===!0&&(o.fromBufferAttribute(G,ee),O[q+ne+0]=o.x,O[q+ne+1]=o.y,O[q+ne+2]=o.z,O[q+ne+3]=0),y===!0&&(o.fromBufferAttribute(K,ee),O[q+ne+4]=o.x,O[q+ne+5]=o.y,O[q+ne+6]=o.z,O[q+ne+7]=0),b===!0&&(o.fromBufferAttribute(Z,ee),O[q+ne+8]=o.x,O[q+ne+9]=o.y,O[q+ne+10]=o.z,O[q+ne+11]=Z.itemSize===4?o.w:1)}}_={count:g,texture:V,size:new ue(M,S)},r.set(h,_),h.addEventListener("dispose",P)}let m=0;for(let x=0;x<f.length;x++)m+=f[x];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",p),u.getUniforms().setValue(n,"morphTargetInfluences",f),u.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{let d=f===void 0?0:f.length,g=i[h.id];if(g===void 0||g.length!==d){g=[];for(let y=0;y<d;y++)g[y]=[y,0];i[h.id]=g}for(let y=0;y<d;y++){let b=g[y];b[0]=y,b[1]=f[y]}g.sort(Ng);for(let y=0;y<8;y++)y<d&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Ug);let _=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let y=0;y<8;y++){let b=a[y],R=b[0],E=b[1];R!==Number.MAX_SAFE_INTEGER&&E?(_&&h.getAttribute("morphTarget"+y)!==_[R]&&h.setAttribute("morphTarget"+y,_[R]),m&&h.getAttribute("morphNormal"+y)!==m[R]&&h.setAttribute("morphNormal"+y,m[R]),s[y]=E,p+=E):(_&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}let x=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",x),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Fg(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var no=class extends tn{constructor(e,t,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:vi,h!==vi&&h!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===vi&&(i=Yn),i===void 0&&h===ls&&(i=xi),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Iu=new tn,Du=new no(1,1);Du.compareFunction=Au;var Uu=new $r,Nu=new Ya,Ou=new jr,Wh=[],Xh=[],qh=new Float32Array(16),Yh=new Float32Array(9),Zh=new Float32Array(4);function ms(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Wh[s];if(r===void 0&&(r=new Float32Array(s),Wh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ao(n,e){let t=Xh[e];t===void 0&&(t=new Int32Array(e),Xh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function zg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function kg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function Bg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function Hg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function Vg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(St(t,i))return;Zh.set(i),n.uniformMatrix2fv(this.addr,!1,Zh),wt(t,i)}}function Gg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(St(t,i))return;Yh.set(i),n.uniformMatrix3fv(this.addr,!1,Yh),wt(t,i)}}function Wg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(St(t,i))return;qh.set(i),n.uniformMatrix4fv(this.addr,!1,qh),wt(t,i)}}function Xg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function qg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function Yg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function Zg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function $g(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Jg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function Kg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function Qg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function jg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Du:Iu;t.setTexture2D(e||r,s)}function e_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Nu,s)}function t_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Ou,s)}function n_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Uu,s)}function i_(n){switch(n){case 5126:return zg;case 35664:return kg;case 35665:return Bg;case 35666:return Hg;case 35674:return Vg;case 35675:return Gg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return qg;case 35668:case 35672:return Yg;case 35669:case 35673:return Zg;case 5125:return $g;case 36294:return Jg;case 36295:return Kg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return e_;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return n_}}function s_(n,e){n.uniform1fv(this.addr,e)}function r_(n,e){let t=ms(e,this.size,2);n.uniform2fv(this.addr,t)}function o_(n,e){let t=ms(e,this.size,3);n.uniform3fv(this.addr,t)}function a_(n,e){let t=ms(e,this.size,4);n.uniform4fv(this.addr,t)}function c_(n,e){let t=ms(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function l_(n,e){let t=ms(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function h_(n,e){let t=ms(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function u_(n,e){n.uniform1iv(this.addr,e)}function f_(n,e){n.uniform2iv(this.addr,e)}function d_(n,e){n.uniform3iv(this.addr,e)}function p_(n,e){n.uniform4iv(this.addr,e)}function m_(n,e){n.uniform1uiv(this.addr,e)}function g_(n,e){n.uniform2uiv(this.addr,e)}function __(n,e){n.uniform3uiv(this.addr,e)}function y_(n,e){n.uniform4uiv(this.addr,e)}function x_(n,e,t){let i=this.cache,s=e.length,r=Ao(t,s);St(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Iu,r[o])}function v_(n,e,t){let i=this.cache,s=e.length,r=Ao(t,s);St(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Nu,r[o])}function M_(n,e,t){let i=this.cache,s=e.length,r=Ao(t,s);St(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ou,r[o])}function b_(n,e,t){let i=this.cache,s=e.length,r=Ao(t,s);St(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Uu,r[o])}function S_(n){switch(n){case 5126:return s_;case 35664:return r_;case 35665:return o_;case 35666:return a_;case 35674:return c_;case 35675:return l_;case 35676:return h_;case 5124:case 35670:return u_;case 35667:case 35671:return f_;case 35668:case 35672:return d_;case 35669:case 35673:return p_;case 5125:return m_;case 36294:return g_;case 36295:return __;case 36296:return y_;case 35678:case 36198:case 36298:case 36306:case 35682:return x_;case 35679:case 36299:case 36307:return v_;case 35680:case 36300:case 36308:case 36293:return M_;case 36289:case 36303:case 36311:case 36292:return b_}}var Ja=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=i_(t.type)}},Ka=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=S_(t.type)}},Qa=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},La=/(\w+)(\])?(\[|\.)?/g;function $h(n,e){n.seq.push(e),n.map[e.id]=e}function w_(n,e,t){let i=n.name,s=i.length;for(La.lastIndex=0;;){let r=La.exec(i),o=La.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){$h(t,c===void 0?new Ja(a,n,e):new Ka(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Qa(a),$h(t,u)),t=u}}}var os=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);w_(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Jh(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var E_=37297,T_=0;function A_(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function R_(n){let e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(n),i;switch(e===t?i="":e===Wr&&t===Gr?i="LinearDisplayP3ToLinearSRGB":e===Gr&&t===Wr&&(i="LinearSRGBToLinearDisplayP3"),n){case Nn:case To:return[i,"LinearTransferOETF"];case gt:case Nc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Kh(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+A_(n.getShaderSource(e),o)}else return s}function C_(n,e){let t=R_(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function P_(n,e){let t;switch(e){case $d:t="Linear";break;case Jd:t="Reinhard";break;case Kd:t="OptimizedCineon";break;case Ic:t="ACESFilmic";break;case jd:t="AgX";break;case Qd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function L_(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(is).join(`
`)}function I_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(is).join(`
`)}function D_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function U_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function is(n){return n!==""}function Qh(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var N_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ja(n){return n.replace(N_,F_)}var O_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function F_(n,e){let t=Ge[e];if(t===void 0){let i=O_.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ja(t)}var z_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eu(n){return n.replace(z_,k_)}function k_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function B_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===So?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Sd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===In&&(e="SHADOWMAP_TYPE_VSM"),e}function H_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case as:case cs:e="ENVMAP_TYPE_CUBE";break;case Eo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function V_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case cs:e="ENVMAP_MODE_REFRACTION";break}return e}function G_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case wo:e="ENVMAP_BLENDING_MULTIPLY";break;case Yd:e="ENVMAP_BLENDING_MIX";break;case Zd:e="ENVMAP_BLENDING_ADD";break}return e}function W_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function X_(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=B_(t),c=H_(t),h=V_(t),u=G_(t),f=W_(t),d=t.isWebGL2?"":L_(t),g=I_(t),_=D_(r),m=s.createProgram(),p,x,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(is).join(`
`),p.length>0&&(p+=`
`),x=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(is).join(`
`),x.length>0&&(x+=`
`)):(p=[tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),x=[d,tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jn?"#define TONE_MAPPING":"",t.toneMapping!==Jn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Jn?P_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,C_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(is).join(`
`)),o=ja(o),o=Qh(o,t),o=jh(o,t),a=ja(a),a=Qh(a,t),a=jh(a,t),o=eu(o),a=eu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let b=y+p+o,R=y+x+a,E=Jh(s,s.VERTEX_SHADER,b),A=Jh(s,s.FRAGMENT_SHADER,R);s.attachShader(m,E),s.attachShader(m,A),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function I(V){if(n.debug.checkShaderErrors){let $=s.getProgramInfoLog(m).trim(),P=s.getShaderInfoLog(E).trim(),F=s.getShaderInfoLog(A).trim(),G=!0,K=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,E,A);else{let Z=Kh(s,E,"vertex"),q=Kh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+Z+`
`+q)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(P===""||F==="")&&(K=!1);K&&(V.diagnostics={runnable:G,programLog:$,vertexShader:{log:P,prefix:p},fragmentShader:{log:F,prefix:x}})}s.deleteShader(E),s.deleteShader(A),M=new os(s,m),S=U_(s,m)}let M;this.getUniforms=function(){return M===void 0&&I(this),M};let S;this.getAttributes=function(){return S===void 0&&I(this),S};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(m,E_)),O},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=T_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=A,this}var q_=0,ec=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new tc(e),t.set(e,i)),i}},tc=class{constructor(e){this.id=q_++,this.code=e,this.usedTimes=0}};function Y_(n,e,t,i,s,r,o){let a=new zs,l=new ec,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,S,O,V,$){let P=V.fog,F=$.geometry,G=M.isMeshStandardMaterial?V.environment:null,K=(M.isMeshStandardMaterial?t:e).get(M.envMap||G),Z=K&&K.mapping===Eo?K.image.height:null,q=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let ee=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ne=ee!==void 0?ee.length:0,fe=0;F.morphAttributes.position!==void 0&&(fe=1),F.morphAttributes.normal!==void 0&&(fe=2),F.morphAttributes.color!==void 0&&(fe=3);let W,j,he,Me;if(q){let kt=yn[q];W=kt.vertexShader,j=kt.fragmentShader}else W=M.vertexShader,j=M.fragmentShader,l.update(M),he=l.getVertexShaderID(M),Me=l.getFragmentShaderID(M);let ve=n.getRenderTarget(),Ne=$.isInstancedMesh===!0,Fe=$.isBatchedMesh===!0,Re=!!M.map,Ke=!!M.matcap,z=!!K,Rt=!!M.aoMap,ge=!!M.lightMap,Ue=!!M.bumpMap,_e=!!M.normalMap,ct=!!M.displacementMap,Be=!!M.emissiveMap,T=!!M.metalnessMap,v=!!M.roughnessMap,D=M.anisotropy>0,J=M.clearcoat>0,Y=M.iridescence>0,Q=M.sheen>0,xe=M.transmission>0,oe=D&&!!M.anisotropyMap,pe=J&&!!M.clearcoatMap,Te=J&&!!M.clearcoatNormalMap,be=J&&!!M.clearcoatRoughnessMap,te=Y&&!!M.iridescenceMap,et=Y&&!!M.iridescenceThicknessMap,Je=Q&&!!M.sheenColorMap,Oe=Q&&!!M.sheenRoughnessMap,Ee=!!M.specularMap,ye=!!M.specularColorMap,Ve=!!M.specularIntensityMap,je=xe&&!!M.transmissionMap,pt=xe&&!!M.thicknessMap,Ye=!!M.gradientMap,se=!!M.alphaMap,L=M.alphaTest>0,ae=!!M.alphaHash,ce=!!M.extensions,Le=!!F.attributes.uv1,Ae=!!F.attributes.uv2,it=!!F.attributes.uv3,st=Jn;return M.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(st=n.toneMapping),{isWebGL2:h,shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:W,fragmentShader:j,defines:M.defines,customVertexShaderID:he,customFragmentShaderID:Me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Fe,instancing:Ne,instancingColor:Ne&&$.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Nn,map:Re,matcap:Ke,envMap:z,envMapMode:z&&K.mapping,envMapCubeUVHeight:Z,aoMap:Rt,lightMap:ge,bumpMap:Ue,normalMap:_e,displacementMap:f&&ct,emissiveMap:Be,normalMapObjectSpace:_e&&M.normalMapType===up,normalMapTangentSpace:_e&&M.normalMapType===Uc,metalnessMap:T,roughnessMap:v,anisotropy:D,anisotropyMap:oe,clearcoat:J,clearcoatMap:pe,clearcoatNormalMap:Te,clearcoatRoughnessMap:be,iridescence:Y,iridescenceMap:te,iridescenceThicknessMap:et,sheen:Q,sheenColorMap:Je,sheenRoughnessMap:Oe,specularMap:Ee,specularColorMap:ye,specularIntensityMap:Ve,transmission:xe,transmissionMap:je,thicknessMap:pt,gradientMap:Ye,opaque:M.transparent===!1&&M.blending===ss,alphaMap:se,alphaTest:L,alphaHash:ae,combine:M.combine,mapUv:Re&&_(M.map.channel),aoMapUv:Rt&&_(M.aoMap.channel),lightMapUv:ge&&_(M.lightMap.channel),bumpMapUv:Ue&&_(M.bumpMap.channel),normalMapUv:_e&&_(M.normalMap.channel),displacementMapUv:ct&&_(M.displacementMap.channel),emissiveMapUv:Be&&_(M.emissiveMap.channel),metalnessMapUv:T&&_(M.metalnessMap.channel),roughnessMapUv:v&&_(M.roughnessMap.channel),anisotropyMapUv:oe&&_(M.anisotropyMap.channel),clearcoatMapUv:pe&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Te&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:et&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&_(M.sheenRoughnessMap.channel),specularMapUv:Ee&&_(M.specularMap.channel),specularColorMapUv:ye&&_(M.specularColorMap.channel),specularIntensityMapUv:Ve&&_(M.specularIntensityMap.channel),transmissionMapUv:je&&_(M.transmissionMap.channel),thicknessMapUv:pt&&_(M.thicknessMap.channel),alphaMapUv:se&&_(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(_e||D),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Le,vertexUv2s:Ae,vertexUv3s:it,pointsUvs:$.isPoints===!0&&!!F.attributes.uv&&(Re||se),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:$.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:fe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:st,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Re&&M.map.isVideoTexture===!0&&tt.getTransfer(M.map.colorSpace)===lt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===hn,flipSided:M.side===zt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ce&&M.extensions.derivatives===!0,extensionFragDepth:ce&&M.extensions.fragDepth===!0,extensionDrawBuffers:ce&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ce&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let O in M.defines)S.push(O),S.push(M.defines[O]);return M.isRawShaderMaterial===!1&&(x(S,M),y(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function x(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function b(M){let S=g[M.type],O;if(S){let V=yn[S];O=Op.clone(V.uniforms)}else O=M.uniforms;return O}function R(M,S){let O;for(let V=0,$=c.length;V<$;V++){let P=c[V];if(P.cacheKey===S){O=P,++O.usedTimes;break}}return O===void 0&&(O=new X_(n,S,M,r),c.push(O)),O}function E(M){if(--M.usedTimes===0){let S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:R,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:I}}function Z_(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function $_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function nu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function iu(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,d,g,_,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||$_),i.length>1&&i.sort(f||nu),s.length>1&&s.sort(f||nu)}function h(){for(let u=e,f=n.length;u<f;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function J_(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new iu,n.set(i,[o])):s>=r.length?(o=new iu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function K_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new me};break;case"SpotLight":t={position:new C,direction:new C,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new me,groundColor:new me};break;case"RectAreaLight":t={color:new me,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function Q_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var j_=0;function ey(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ty(n,e){let t=new K_,i=Q_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new C);let r=new C,o=new ft,a=new ft;function l(h,u){let f=0,d=0,g=0;for(let V=0;V<9;V++)s.probe[V].set(0,0,0);let _=0,m=0,p=0,x=0,y=0,b=0,R=0,E=0,A=0,I=0,M=0;h.sort(ey);let S=u===!0?Math.PI:1;for(let V=0,$=h.length;V<$;V++){let P=h[V],F=P.color,G=P.intensity,K=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=F.r*G*S,d+=F.g*G*S,g+=F.b*G*S;else if(P.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(P.sh.coefficients[q],G);M++}else if(P.isDirectionalLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity*S),P.castShadow){let ee=P.shadow,ne=i.get(P);ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,s.directionalShadow[_]=ne,s.directionalShadowMap[_]=Z,s.directionalShadowMatrix[_]=P.shadow.matrix,b++}s.directional[_]=q,_++}else if(P.isSpotLight){let q=t.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(F).multiplyScalar(G*S),q.distance=K,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,s.spot[p]=q;let ee=P.shadow;if(P.map&&(s.spotLightMap[A]=P.map,A++,ee.updateMatrices(P),P.castShadow&&I++),s.spotLightMatrix[p]=ee.matrix,P.castShadow){let ne=i.get(P);ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,s.spotShadow[p]=ne,s.spotShadowMap[p]=Z,E++}p++}else if(P.isRectAreaLight){let q=t.get(P);q.color.copy(F).multiplyScalar(G),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),s.rectArea[x]=q,x++}else if(P.isPointLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity*S),q.distance=P.distance,q.decay=P.decay,P.castShadow){let ee=P.shadow,ne=i.get(P);ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,ne.shadowCameraNear=ee.camera.near,ne.shadowCameraFar=ee.camera.far,s.pointShadow[m]=ne,s.pointShadowMap[m]=Z,s.pointShadowMatrix[m]=P.shadow.matrix,R++}s.point[m]=q,m++}else if(P.isHemisphereLight){let q=t.get(P);q.skyColor.copy(P.color).multiplyScalar(G*S),q.groundColor.copy(P.groundColor).multiplyScalar(G*S),s.hemi[y]=q,y++}}x>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=re.LTC_FLOAT_1,s.rectAreaLTC2=re.LTC_FLOAT_2):(s.rectAreaLTC1=re.LTC_HALF_1,s.rectAreaLTC2=re.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=re.LTC_FLOAT_1,s.rectAreaLTC2=re.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=re.LTC_HALF_1,s.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=g;let O=s.hash;(O.directionalLength!==_||O.pointLength!==m||O.spotLength!==p||O.rectAreaLength!==x||O.hemiLength!==y||O.numDirectionalShadows!==b||O.numPointShadows!==R||O.numSpotShadows!==E||O.numSpotMaps!==A||O.numLightProbes!==M)&&(s.directional.length=_,s.spot.length=p,s.rectArea.length=x,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=E+A-I,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=M,O.directionalLength=_,O.pointLength=m,O.spotLength=p,O.rectAreaLength=x,O.hemiLength=y,O.numDirectionalShadows=b,O.numPointShadows=R,O.numSpotShadows=E,O.numSpotMaps=A,O.numLightProbes=M,s.version=j_++)}function c(h,u){let f=0,d=0,g=0,_=0,m=0,p=u.matrixWorldInverse;for(let x=0,y=h.length;x<y;x++){let b=h[x];if(b.isDirectionalLight){let R=s.directional[f];R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),f++}else if(b.isSpotLight){let R=s.spot[g];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let R=s.rectArea[_];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(p),a.identity(),o.copy(b.matrixWorld),o.premultiply(p),a.extractRotation(o),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){let R=s.point[d];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){let R=s.hemi[m];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function su(n,e){let t=new ty(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ny(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new su(n,e),t.set(r,[l])):o>=a.length?(l=new su(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var nc=class extends vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ic=class extends vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},iy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sy=`uniform sampler2D shadow_pass;
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
}`;function ry(n,e,t){let i=new ks,s=new ue,r=new ue,o=new ut,a=new nc({depthPacking:hp}),l=new ic,c={},h=t.maxTextureSize,u={[Qn]:zt,[zt]:Qn,[hn]:hn},f=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:iy,fragmentShader:sy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new _t;g.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Pe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=So;let p=this.type;this.render=function(E,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let M=n.getRenderTarget(),S=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),V=n.state;V.setBlending($n),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let $=p!==In&&this.type===In,P=p===In&&this.type!==In;for(let F=0,G=E.length;F<G;F++){let K=E[F],Z=K.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let q=Z.getFrameExtents();if(s.multiply(q),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,Z.mapSize.y=r.y)),Z.map===null||$===!0||P===!0){let ne=this.type!==In?{minFilter:Vt,magFilter:Vt}:{};Z.map!==null&&Z.map.dispose(),Z.map=new On(s.x,s.y,ne),Z.map.texture.name=K.name+".shadowMap",Z.camera.updateProjectionMatrix()}n.setRenderTarget(Z.map),n.clear();let ee=Z.getViewportCount();for(let ne=0;ne<ee;ne++){let fe=Z.getViewport(ne);o.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),V.viewport(o),Z.updateMatrices(K,ne),i=Z.getFrustum(),b(A,I,Z.camera,K,this.type)}Z.isPointLightShadow!==!0&&this.type===In&&x(Z,I),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,S,O)};function x(E,A){let I=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new On(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(A,null,I,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(A,null,I,d,_,null)}function y(E,A,I,M){let S=null,O=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(O!==void 0)S=O;else if(S=I.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let V=S.uuid,$=A.uuid,P=c[V];P===void 0&&(P={},c[V]=P);let F=P[$];F===void 0&&(F=S.clone(),P[$]=F,A.addEventListener("dispose",R)),S=F}if(S.visible=A.visible,S.wireframe=A.wireframe,M===In?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let V=n.properties.get(S);V.light=I}return S}function b(E,A,I,M,S){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===In)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);let $=e.update(E),P=E.material;if(Array.isArray(P)){let F=$.groups;for(let G=0,K=F.length;G<K;G++){let Z=F[G],q=P[Z.materialIndex];if(q&&q.visible){let ee=y(E,q,M,S);E.onBeforeShadow(n,E,A,I,$,ee,Z),n.renderBufferDirect(I,null,$,ee,E,Z),E.onAfterShadow(n,E,A,I,$,ee,Z)}}}else if(P.visible){let F=y(E,P,M,S);E.onBeforeShadow(n,E,A,I,$,F,null),n.renderBufferDirect(I,null,$,F,E,null),E.onAfterShadow(n,E,A,I,$,F,null)}}let V=E.children;for(let $=0,P=V.length;$<P;$++)b(V[$],A,I,M,S)}function R(E){E.target.removeEventListener("dispose",R);for(let I in c){let M=c[I],S=E.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function oy(n,e,t){let i=t.isWebGL2;function s(){let L=!1,ae=new ut,ce=null,Le=new ut(0,0,0,0);return{setMask:function(Ae){ce!==Ae&&!L&&(n.colorMask(Ae,Ae,Ae,Ae),ce=Ae)},setLocked:function(Ae){L=Ae},setClear:function(Ae,it,st,Et,kt){kt===!0&&(Ae*=Et,it*=Et,st*=Et),ae.set(Ae,it,st,Et),Le.equals(ae)===!1&&(n.clearColor(Ae,it,st,Et),Le.copy(ae))},reset:function(){L=!1,ce=null,Le.set(-1,0,0,0)}}}function r(){let L=!1,ae=null,ce=null,Le=null;return{setTest:function(Ae){Ae?Fe(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(Ae){ae!==Ae&&!L&&(n.depthMask(Ae),ae=Ae)},setFunc:function(Ae){if(ce!==Ae){switch(Ae){case Bd:n.depthFunc(n.NEVER);break;case Hd:n.depthFunc(n.ALWAYS);break;case Vd:n.depthFunc(n.LESS);break;case kr:n.depthFunc(n.LEQUAL);break;case Gd:n.depthFunc(n.EQUAL);break;case Wd:n.depthFunc(n.GEQUAL);break;case Xd:n.depthFunc(n.GREATER);break;case qd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=Ae}},setLocked:function(Ae){L=Ae},setClear:function(Ae){Le!==Ae&&(n.clearDepth(Ae),Le=Ae)},reset:function(){L=!1,ae=null,ce=null,Le=null}}}function o(){let L=!1,ae=null,ce=null,Le=null,Ae=null,it=null,st=null,Et=null,kt=null;return{setTest:function(rt){L||(rt?Fe(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(rt){ae!==rt&&!L&&(n.stencilMask(rt),ae=rt)},setFunc:function(rt,Bt,_n){(ce!==rt||Le!==Bt||Ae!==_n)&&(n.stencilFunc(rt,Bt,_n),ce=rt,Le=Bt,Ae=_n)},setOp:function(rt,Bt,_n){(it!==rt||st!==Bt||Et!==_n)&&(n.stencilOp(rt,Bt,_n),it=rt,st=Bt,Et=_n)},setLocked:function(rt){L=rt},setClear:function(rt){kt!==rt&&(n.clearStencil(rt),kt=rt)},reset:function(){L=!1,ae=null,ce=null,Le=null,Ae=null,it=null,st=null,Et=null,kt=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,f={},d={},g=new WeakMap,_=[],m=null,p=!1,x=null,y=null,b=null,R=null,E=null,A=null,I=null,M=new me(0,0,0),S=0,O=!1,V=null,$=null,P=null,F=null,G=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,q=0,ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(ee)[1]),Z=q>=1):ee.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),Z=q>=2);let ne=null,fe={},W=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),he=new ut().fromArray(W),Me=new ut().fromArray(j);function ve(L,ae,ce,Le){let Ae=new Uint8Array(4),it=n.createTexture();n.bindTexture(L,it),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let st=0;st<ce;st++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(ae,0,n.RGBA,1,1,Le,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(ae+st,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return it}let Ne={};Ne[n.TEXTURE_2D]=ve(n.TEXTURE_2D,n.TEXTURE_2D,1),Ne[n.TEXTURE_CUBE_MAP]=ve(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ne[n.TEXTURE_2D_ARRAY]=ve(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ne[n.TEXTURE_3D]=ve(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Fe(n.DEPTH_TEST),l.setFunc(kr),Be(!1),T(zl),Fe(n.CULL_FACE),_e($n);function Fe(L){f[L]!==!0&&(n.enable(L),f[L]=!0)}function Re(L){f[L]!==!1&&(n.disable(L),f[L]=!1)}function Ke(L,ae){return d[L]!==ae?(n.bindFramebuffer(L,ae),d[L]=ae,i&&(L===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ae),L===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ae)),!0):!1}function z(L,ae){let ce=_,Le=!1;if(L)if(ce=g.get(ae),ce===void 0&&(ce=[],g.set(ae,ce)),L.isWebGLMultipleRenderTargets){let Ae=L.texture;if(ce.length!==Ae.length||ce[0]!==n.COLOR_ATTACHMENT0){for(let it=0,st=Ae.length;it<st;it++)ce[it]=n.COLOR_ATTACHMENT0+it;ce.length=Ae.length,Le=!0}}else ce[0]!==n.COLOR_ATTACHMENT0&&(ce[0]=n.COLOR_ATTACHMENT0,Le=!0);else ce[0]!==n.BACK&&(ce[0]=n.BACK,Le=!0);Le&&(t.isWebGL2?n.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function Rt(L){return m!==L?(n.useProgram(L),m=L,!0):!1}let ge={[_i]:n.FUNC_ADD,[Ed]:n.FUNC_SUBTRACT,[Td]:n.FUNC_REVERSE_SUBTRACT};if(i)ge[Hl]=n.MIN,ge[Vl]=n.MAX;else{let L=e.get("EXT_blend_minmax");L!==null&&(ge[Hl]=L.MIN_EXT,ge[Vl]=L.MAX_EXT)}let Ue={[Ad]:n.ZERO,[Rd]:n.ONE,[Cd]:n.SRC_COLOR,[za]:n.SRC_ALPHA,[Nd]:n.SRC_ALPHA_SATURATE,[Dd]:n.DST_COLOR,[Ld]:n.DST_ALPHA,[Pd]:n.ONE_MINUS_SRC_COLOR,[ka]:n.ONE_MINUS_SRC_ALPHA,[Ud]:n.ONE_MINUS_DST_COLOR,[Id]:n.ONE_MINUS_DST_ALPHA,[Od]:n.CONSTANT_COLOR,[Fd]:n.ONE_MINUS_CONSTANT_COLOR,[zd]:n.CONSTANT_ALPHA,[kd]:n.ONE_MINUS_CONSTANT_ALPHA};function _e(L,ae,ce,Le,Ae,it,st,Et,kt,rt){if(L===$n){p===!0&&(Re(n.BLEND),p=!1);return}if(p===!1&&(Fe(n.BLEND),p=!0),L!==wd){if(L!==x||rt!==O){if((y!==_i||E!==_i)&&(n.blendEquation(n.FUNC_ADD),y=_i,E=_i),rt)switch(L){case ss:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zr:n.blendFunc(n.ONE,n.ONE);break;case kl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ss:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case kl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,R=null,A=null,I=null,M.set(0,0,0),S=0,x=L,O=rt}return}Ae=Ae||ae,it=it||ce,st=st||Le,(ae!==y||Ae!==E)&&(n.blendEquationSeparate(ge[ae],ge[Ae]),y=ae,E=Ae),(ce!==b||Le!==R||it!==A||st!==I)&&(n.blendFuncSeparate(Ue[ce],Ue[Le],Ue[it],Ue[st]),b=ce,R=Le,A=it,I=st),(Et.equals(M)===!1||kt!==S)&&(n.blendColor(Et.r,Et.g,Et.b,kt),M.copy(Et),S=kt),x=L,O=!1}function ct(L,ae){L.side===hn?Re(n.CULL_FACE):Fe(n.CULL_FACE);let ce=L.side===zt;ae&&(ce=!ce),Be(ce),L.blending===ss&&L.transparent===!1?_e($n):_e(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);let Le=L.stencilWrite;c.setTest(Le),Le&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),D(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Fe(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(L){V!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),V=L)}function T(L){L!==Md?(Fe(n.CULL_FACE),L!==$&&(L===zl?n.cullFace(n.BACK):L===bd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),$=L}function v(L){L!==P&&(Z&&n.lineWidth(L),P=L)}function D(L,ae,ce){L?(Fe(n.POLYGON_OFFSET_FILL),(F!==ae||G!==ce)&&(n.polygonOffset(ae,ce),F=ae,G=ce)):Re(n.POLYGON_OFFSET_FILL)}function J(L){L?Fe(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function Y(L){L===void 0&&(L=n.TEXTURE0+K-1),ne!==L&&(n.activeTexture(L),ne=L)}function Q(L,ae,ce){ce===void 0&&(ne===null?ce=n.TEXTURE0+K-1:ce=ne);let Le=fe[ce];Le===void 0&&(Le={type:void 0,texture:void 0},fe[ce]=Le),(Le.type!==L||Le.texture!==ae)&&(ne!==ce&&(n.activeTexture(ce),ne=ce),n.bindTexture(L,ae||Ne[L]),Le.type=L,Le.texture=ae)}function xe(){let L=fe[ne];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function oe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Je(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Oe(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ve(L){he.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),he.copy(L))}function je(L){Me.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Me.copy(L))}function pt(L,ae){let ce=u.get(ae);ce===void 0&&(ce=new WeakMap,u.set(ae,ce));let Le=ce.get(L);Le===void 0&&(Le=n.getUniformBlockIndex(ae,L.name),ce.set(L,Le))}function Ye(L,ae){let Le=u.get(ae).get(L);h.get(ae)!==Le&&(n.uniformBlockBinding(ae,Le,L.__bindingPointIndex),h.set(ae,Le))}function se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ne=null,fe={},d={},g=new WeakMap,_=[],m=null,p=!1,x=null,y=null,b=null,R=null,E=null,A=null,I=null,M=new me(0,0,0),S=0,O=!1,V=null,$=null,P=null,F=null,G=null,he.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Fe,disable:Re,bindFramebuffer:Ke,drawBuffers:z,useProgram:Rt,setBlending:_e,setMaterial:ct,setFlipSided:Be,setCullFace:T,setLineWidth:v,setPolygonOffset:D,setScissorTest:J,activeTexture:Y,bindTexture:Q,unbindTexture:xe,compressedTexImage2D:oe,compressedTexImage3D:pe,texImage2D:Ee,texImage3D:ye,updateUBOMapping:pt,uniformBlockBinding:Ye,texStorage2D:Je,texStorage3D:Oe,texSubImage2D:Te,texSubImage3D:be,compressedTexSubImage2D:te,compressedTexSubImage3D:et,scissor:Ve,viewport:je,reset:se}}function ay(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return d?new OffscreenCanvas(T,v):qr("canvas")}function _(T,v,D,J){let Y=1;if((T.width>J||T.height>J)&&(Y=J/Math.max(T.width,T.height)),Y<1||v===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){let Q=v?Xa:Math.floor,xe=Q(Y*T.width),oe=Q(Y*T.height);u===void 0&&(u=g(xe,oe));let pe=D?g(xe,oe):u;return pe.width=xe,pe.height=oe,pe.getContext("2d").drawImage(T,0,0,xe,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+xe+"x"+oe+")."),pe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return Mh(T.width)&&Mh(T.height)}function p(T){return a?!1:T.wrapS!==un||T.wrapT!==un||T.minFilter!==Vt&&T.minFilter!==jt}function x(T,v){return T.generateMipmaps&&v&&T.minFilter!==Vt&&T.minFilter!==jt}function y(T){n.generateMipmap(T)}function b(T,v,D,J,Y=!1){if(a===!1)return v;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Q=v;if(v===n.RED&&(D===n.FLOAT&&(Q=n.R32F),D===n.HALF_FLOAT&&(Q=n.R16F),D===n.UNSIGNED_BYTE&&(Q=n.R8)),v===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(Q=n.R8UI),D===n.UNSIGNED_SHORT&&(Q=n.R16UI),D===n.UNSIGNED_INT&&(Q=n.R32UI),D===n.BYTE&&(Q=n.R8I),D===n.SHORT&&(Q=n.R16I),D===n.INT&&(Q=n.R32I)),v===n.RG&&(D===n.FLOAT&&(Q=n.RG32F),D===n.HALF_FLOAT&&(Q=n.RG16F),D===n.UNSIGNED_BYTE&&(Q=n.RG8)),v===n.RGBA){let xe=Y?Vr:tt.getTransfer(J);D===n.FLOAT&&(Q=n.RGBA32F),D===n.HALF_FLOAT&&(Q=n.RGBA16F),D===n.UNSIGNED_BYTE&&(Q=xe===lt?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function R(T,v,D){return x(T,D)===!0||T.isFramebufferTexture&&T.minFilter!==Vt&&T.minFilter!==jt?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function E(T){return T===Vt||T===Gl||T===ta?n.NEAREST:n.LINEAR}function A(T){let v=T.target;v.removeEventListener("dispose",A),M(v),v.isVideoTexture&&h.delete(v)}function I(T){let v=T.target;v.removeEventListener("dispose",I),O(v)}function M(T){let v=i.get(T);if(v.__webglInit===void 0)return;let D=T.source,J=f.get(D);if(J){let Y=J[v.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&S(T),Object.keys(J).length===0&&f.delete(D)}i.remove(T)}function S(T){let v=i.get(T);n.deleteTexture(v.__webglTexture);let D=T.source,J=f.get(D);delete J[v.__cacheKey],o.memory.textures--}function O(T){let v=T.texture,D=i.get(T),J=i.get(v);if(J.__webglTexture!==void 0&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(D.__webglFramebuffer[Y]))for(let Q=0;Q<D.__webglFramebuffer[Y].length;Q++)n.deleteFramebuffer(D.__webglFramebuffer[Y][Q]);else n.deleteFramebuffer(D.__webglFramebuffer[Y]);D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer[Y])}else{if(Array.isArray(D.__webglFramebuffer))for(let Y=0;Y<D.__webglFramebuffer.length;Y++)n.deleteFramebuffer(D.__webglFramebuffer[Y]);else n.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&n.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let Y=0;Y<D.__webglColorRenderbuffer.length;Y++)D.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(D.__webglColorRenderbuffer[Y]);D.__webglDepthRenderbuffer&&n.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let Y=0,Q=v.length;Y<Q;Y++){let xe=i.get(v[Y]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(v[Y])}i.remove(v),i.remove(T)}let V=0;function $(){V=0}function P(){let T=V;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),V+=1,T}function F(T){let v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function G(T,v){let D=i.get(T);if(T.isVideoTexture&&ct(T),T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){let J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(D,T,v);return}}t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+v)}function K(T,v){let D=i.get(T);if(T.version>0&&D.__version!==T.version){he(D,T,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+v)}function Z(T,v){let D=i.get(T);if(T.version>0&&D.__version!==T.version){he(D,T,v);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+v)}function q(T,v){let D=i.get(T);if(T.version>0&&D.__version!==T.version){Me(D,T,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+v)}let ee={[Ns]:n.REPEAT,[un]:n.CLAMP_TO_EDGE,[Va]:n.MIRRORED_REPEAT},ne={[Vt]:n.NEAREST,[Gl]:n.NEAREST_MIPMAP_NEAREST,[ta]:n.NEAREST_MIPMAP_LINEAR,[jt]:n.LINEAR,[ep]:n.LINEAR_MIPMAP_NEAREST,[Os]:n.LINEAR_MIPMAP_LINEAR},fe={[fp]:n.NEVER,[yp]:n.ALWAYS,[dp]:n.LESS,[Au]:n.LEQUAL,[pp]:n.EQUAL,[_p]:n.GEQUAL,[mp]:n.GREATER,[gp]:n.NOTEQUAL};function W(T,v,D){if(D?(n.texParameteri(T,n.TEXTURE_WRAP_S,ee[v.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,ee[v.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,ee[v.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ne[v.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ne[v.minFilter])):(n.texParameteri(T,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(T,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==un||v.wrapT!==un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,n.TEXTURE_MAG_FILTER,E(v.magFilter)),n.texParameteri(T,n.TEXTURE_MIN_FILTER,E(v.minFilter)),v.minFilter!==Vt&&v.minFilter!==jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,fe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let J=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Vt||v.minFilter!==ta&&v.minFilter!==Os||v.type===Zn&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===Fs&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(T,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function j(T,v){let D=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",A));let J=v.source,Y=f.get(J);Y===void 0&&(Y={},f.set(J,Y));let Q=F(v);if(Q!==T.__cacheKey){Y[Q]===void 0&&(Y[Q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),Y[Q].usedTimes++;let xe=Y[T.__cacheKey];xe!==void 0&&(Y[T.__cacheKey].usedTimes--,xe.usedTimes===0&&S(v)),T.__cacheKey=Q,T.__webglTexture=Y[Q].texture}return D}function he(T,v,D){let J=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=n.TEXTURE_3D);let Y=j(T,v),Q=v.source;t.bindTexture(J,T.__webglTexture,n.TEXTURE0+D);let xe=i.get(Q);if(Q.version!==xe.__version||Y===!0){t.activeTexture(n.TEXTURE0+D);let oe=tt.getPrimaries(tt.workingColorSpace),pe=v.colorSpace===en?null:tt.getPrimaries(v.colorSpace),Te=v.colorSpace===en||oe===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let be=p(v)&&m(v.image)===!1,te=_(v.image,be,!1,s.maxTextureSize);te=Be(v,te);let et=m(te)||a,Je=r.convert(v.format,v.colorSpace),Oe=r.convert(v.type),Ee=b(v.internalFormat,Je,Oe,v.colorSpace,v.isVideoTexture);W(J,v,et);let ye,Ve=v.mipmaps,je=a&&v.isVideoTexture!==!0&&Ee!==Eu,pt=xe.__version===void 0||Y===!0,Ye=R(v,te,et);if(v.isDepthTexture)Ee=n.DEPTH_COMPONENT,a?v.type===Zn?Ee=n.DEPTH_COMPONENT32F:v.type===Yn?Ee=n.DEPTH_COMPONENT24:v.type===xi?Ee=n.DEPTH24_STENCIL8:Ee=n.DEPTH_COMPONENT16:v.type===Zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===vi&&Ee===n.DEPTH_COMPONENT&&v.type!==Dc&&v.type!==Yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Yn,Oe=r.convert(v.type)),v.format===ls&&Ee===n.DEPTH_COMPONENT&&(Ee=n.DEPTH_STENCIL,v.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=xi,Oe=r.convert(v.type))),pt&&(je?t.texStorage2D(n.TEXTURE_2D,1,Ee,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Ee,te.width,te.height,0,Je,Oe,null));else if(v.isDataTexture)if(Ve.length>0&&et){je&&pt&&t.texStorage2D(n.TEXTURE_2D,Ye,Ee,Ve[0].width,Ve[0].height);for(let se=0,L=Ve.length;se<L;se++)ye=Ve[se],je?t.texSubImage2D(n.TEXTURE_2D,se,0,0,ye.width,ye.height,Je,Oe,ye.data):t.texImage2D(n.TEXTURE_2D,se,Ee,ye.width,ye.height,0,Je,Oe,ye.data);v.generateMipmaps=!1}else je?(pt&&t.texStorage2D(n.TEXTURE_2D,Ye,Ee,te.width,te.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,te.width,te.height,Je,Oe,te.data)):t.texImage2D(n.TEXTURE_2D,0,Ee,te.width,te.height,0,Je,Oe,te.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){je&&pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ye,Ee,Ve[0].width,Ve[0].height,te.depth);for(let se=0,L=Ve.length;se<L;se++)ye=Ve[se],v.format!==fn?Je!==null?je?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,ye.width,ye.height,te.depth,Je,ye.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,Ee,ye.width,ye.height,te.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,ye.width,ye.height,te.depth,Je,Oe,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,Ee,ye.width,ye.height,te.depth,0,Je,Oe,ye.data)}else{je&&pt&&t.texStorage2D(n.TEXTURE_2D,Ye,Ee,Ve[0].width,Ve[0].height);for(let se=0,L=Ve.length;se<L;se++)ye=Ve[se],v.format!==fn?Je!==null?je?t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,ye.width,ye.height,Je,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,se,Ee,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(n.TEXTURE_2D,se,0,0,ye.width,ye.height,Je,Oe,ye.data):t.texImage2D(n.TEXTURE_2D,se,Ee,ye.width,ye.height,0,Je,Oe,ye.data)}else if(v.isDataArrayTexture)je?(pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ye,Ee,te.width,te.height,te.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Je,Oe,te.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,te.width,te.height,te.depth,0,Je,Oe,te.data);else if(v.isData3DTexture)je?(pt&&t.texStorage3D(n.TEXTURE_3D,Ye,Ee,te.width,te.height,te.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Je,Oe,te.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,te.width,te.height,te.depth,0,Je,Oe,te.data);else if(v.isFramebufferTexture){if(pt)if(je)t.texStorage2D(n.TEXTURE_2D,Ye,Ee,te.width,te.height);else{let se=te.width,L=te.height;for(let ae=0;ae<Ye;ae++)t.texImage2D(n.TEXTURE_2D,ae,Ee,se,L,0,Je,Oe,null),se>>=1,L>>=1}}else if(Ve.length>0&&et){je&&pt&&t.texStorage2D(n.TEXTURE_2D,Ye,Ee,Ve[0].width,Ve[0].height);for(let se=0,L=Ve.length;se<L;se++)ye=Ve[se],je?t.texSubImage2D(n.TEXTURE_2D,se,0,0,Je,Oe,ye):t.texImage2D(n.TEXTURE_2D,se,Ee,Je,Oe,ye);v.generateMipmaps=!1}else je?(pt&&t.texStorage2D(n.TEXTURE_2D,Ye,Ee,te.width,te.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Je,Oe,te)):t.texImage2D(n.TEXTURE_2D,0,Ee,Je,Oe,te);x(v,et)&&y(J),xe.__version=Q.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Me(T,v,D){if(v.image.length!==6)return;let J=j(T,v),Y=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+D);let Q=i.get(Y);if(Y.version!==Q.__version||J===!0){t.activeTexture(n.TEXTURE0+D);let xe=tt.getPrimaries(tt.workingColorSpace),oe=v.colorSpace===en?null:tt.getPrimaries(v.colorSpace),pe=v.colorSpace===en||xe===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Te=v.isCompressedTexture||v.image[0].isCompressedTexture,be=v.image[0]&&v.image[0].isDataTexture,te=[];for(let se=0;se<6;se++)!Te&&!be?te[se]=_(v.image[se],!1,!0,s.maxCubemapSize):te[se]=be?v.image[se].image:v.image[se],te[se]=Be(v,te[se]);let et=te[0],Je=m(et)||a,Oe=r.convert(v.format,v.colorSpace),Ee=r.convert(v.type),ye=b(v.internalFormat,Oe,Ee,v.colorSpace),Ve=a&&v.isVideoTexture!==!0,je=Q.__version===void 0||J===!0,pt=R(v,et,Je);W(n.TEXTURE_CUBE_MAP,v,Je);let Ye;if(Te){Ve&&je&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pt,ye,et.width,et.height);for(let se=0;se<6;se++){Ye=te[se].mipmaps;for(let L=0;L<Ye.length;L++){let ae=Ye[L];v.format!==fn?Oe!==null?Ve?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,L,0,0,ae.width,ae.height,Oe,ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,L,ye,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,L,0,0,ae.width,ae.height,Oe,Ee,ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,L,ye,ae.width,ae.height,0,Oe,Ee,ae.data)}}}else{Ye=v.mipmaps,Ve&&je&&(Ye.length>0&&pt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,pt,ye,te[0].width,te[0].height));for(let se=0;se<6;se++)if(be){Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,te[se].width,te[se].height,Oe,Ee,te[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ye,te[se].width,te[se].height,0,Oe,Ee,te[se].data);for(let L=0;L<Ye.length;L++){let ce=Ye[L].image[se].image;Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,L+1,0,0,ce.width,ce.height,Oe,Ee,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,L+1,ye,ce.width,ce.height,0,Oe,Ee,ce.data)}}else{Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Oe,Ee,te[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ye,Oe,Ee,te[se]);for(let L=0;L<Ye.length;L++){let ae=Ye[L];Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,L+1,0,0,Oe,Ee,ae.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,L+1,ye,Oe,Ee,ae.image[se])}}}x(v,Je)&&y(n.TEXTURE_CUBE_MAP),Q.__version=Y.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function ve(T,v,D,J,Y,Q){let xe=r.convert(D.format,D.colorSpace),oe=r.convert(D.type),pe=b(D.internalFormat,xe,oe,D.colorSpace);if(!i.get(v).__hasExternalTextures){let be=Math.max(1,v.width>>Q),te=Math.max(1,v.height>>Q);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?t.texImage3D(Y,Q,pe,be,te,v.depth,0,xe,oe,null):t.texImage2D(Y,Q,pe,be,te,0,xe,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),_e(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,Y,i.get(D).__webglTexture,0,Ue(v)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,Y,i.get(D).__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(T,v,D){if(n.bindRenderbuffer(n.RENDERBUFFER,T),v.depthBuffer&&!v.stencilBuffer){let J=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(D||_e(v)){let Y=v.depthTexture;Y&&Y.isDepthTexture&&(Y.type===Zn?J=n.DEPTH_COMPONENT32F:Y.type===Yn&&(J=n.DEPTH_COMPONENT24));let Q=Ue(v);_e(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,J,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,J,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,J,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,T)}else if(v.depthBuffer&&v.stencilBuffer){let J=Ue(v);D&&_e(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,J,n.DEPTH24_STENCIL8,v.width,v.height):_e(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,T)}else{let J=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let Y=0;Y<J.length;Y++){let Q=J[Y],xe=r.convert(Q.format,Q.colorSpace),oe=r.convert(Q.type),pe=b(Q.internalFormat,xe,oe,Q.colorSpace),Te=Ue(v);D&&_e(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,pe,v.width,v.height):_e(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,pe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,pe,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Fe(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G(v.depthTexture,0);let J=i.get(v.depthTexture).__webglTexture,Y=Ue(v);if(v.depthTexture.format===vi)_e(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(v.depthTexture.format===ls)_e(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Re(T){let v=i.get(T),D=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");Fe(v.__webglFramebuffer,T)}else if(D){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]=n.createRenderbuffer(),Ne(v.__webglDepthbuffer[J],T,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),Ne(v.__webglDepthbuffer,T,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ke(T,v,D){let J=i.get(T);v!==void 0&&ve(J.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&Re(T)}function z(T){let v=T.texture,D=i.get(T),J=i.get(v);T.addEventListener("dispose",I),T.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=v.version,o.memory.textures++);let Y=T.isWebGLCubeRenderTarget===!0,Q=T.isWebGLMultipleRenderTargets===!0,xe=m(T)||a;if(Y){D.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer[oe]=[];for(let pe=0;pe<v.mipmaps.length;pe++)D.__webglFramebuffer[oe][pe]=n.createFramebuffer()}else D.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer=[];for(let oe=0;oe<v.mipmaps.length;oe++)D.__webglFramebuffer[oe]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(Q)if(s.drawBuffers){let oe=T.texture;for(let pe=0,Te=oe.length;pe<Te;pe++){let be=i.get(oe[pe]);be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&_e(T)===!1){let oe=Q?v:[v];D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let pe=0;pe<oe.length;pe++){let Te=oe[pe];D.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[pe]);let be=r.convert(Te.format,Te.colorSpace),te=r.convert(Te.type),et=b(Te.internalFormat,be,te,Te.colorSpace,T.isXRRenderTarget===!0),Je=Ue(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Je,et,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,D.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Ne(D.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),W(n.TEXTURE_CUBE_MAP,v,xe);for(let oe=0;oe<6;oe++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let pe=0;pe<v.mipmaps.length;pe++)ve(D.__webglFramebuffer[oe][pe],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,pe);else ve(D.__webglFramebuffer[oe],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);x(v,xe)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){let oe=T.texture;for(let pe=0,Te=oe.length;pe<Te;pe++){let be=oe[pe],te=i.get(be);t.bindTexture(n.TEXTURE_2D,te.__webglTexture),W(n.TEXTURE_2D,be,xe),ve(D.__webglFramebuffer,T,be,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),x(be,xe)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?oe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,J.__webglTexture),W(oe,v,xe),a&&v.mipmaps&&v.mipmaps.length>0)for(let pe=0;pe<v.mipmaps.length;pe++)ve(D.__webglFramebuffer[pe],T,v,n.COLOR_ATTACHMENT0,oe,pe);else ve(D.__webglFramebuffer,T,v,n.COLOR_ATTACHMENT0,oe,0);x(v,xe)&&y(oe),t.unbindTexture()}T.depthBuffer&&Re(T)}function Rt(T){let v=m(T)||a,D=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let J=0,Y=D.length;J<Y;J++){let Q=D[J];if(x(Q,v)){let xe=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,oe=i.get(Q).__webglTexture;t.bindTexture(xe,oe),y(xe),t.unbindTexture()}}}function ge(T){if(a&&T.samples>0&&_e(T)===!1){let v=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],D=T.width,J=T.height,Y=n.COLOR_BUFFER_BIT,Q=[],xe=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(T),pe=T.isWebGLMultipleRenderTargets===!0;if(pe)for(let Te=0;Te<v.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Te=0;Te<v.length;Te++){Q.push(n.COLOR_ATTACHMENT0+Te),T.depthBuffer&&Q.push(xe);let be=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(be===!1&&(T.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),pe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[Te]),be===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[xe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[xe])),pe){let te=i.get(v[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,te,0)}n.blitFramebuffer(0,0,D,J,0,0,D,J,Y,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Te=0;Te<v.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,oe.__webglColorRenderbuffer[Te]);let be=i.get(v[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function Ue(T){return Math.min(s.maxSamples,T.samples)}function _e(T){let v=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ct(T){let v=o.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function Be(T,v){let D=T.colorSpace,J=T.format,Y=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Ga||D!==Nn&&D!==en&&(tt.getTransfer(D)===lt?a===!1?e.has("EXT_sRGB")===!0&&J===fn?(T.format=Ga,T.minFilter=jt,T.generateMipmaps=!1):v=Yr.sRGBToLinear(v):(J!==fn||Y!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),v}this.allocateTextureUnit=P,this.resetTextureUnits=$,this.setTexture2D=G,this.setTexture2DArray=K,this.setTexture3D=Z,this.setTextureCube=q,this.rebindTextures=Ke,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=_e}function cy(n,e,t){let i=t.isWebGL2;function s(r,o=en){let a,l=tt.getTransfer(o);if(r===Kn)return n.UNSIGNED_BYTE;if(r===vu)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Mu)return n.UNSIGNED_SHORT_5_5_5_1;if(r===tp)return n.BYTE;if(r===np)return n.SHORT;if(r===Dc)return n.UNSIGNED_SHORT;if(r===xu)return n.INT;if(r===Yn)return n.UNSIGNED_INT;if(r===Zn)return n.FLOAT;if(r===Fs)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===ip)return n.ALPHA;if(r===fn)return n.RGBA;if(r===sp)return n.LUMINANCE;if(r===rp)return n.LUMINANCE_ALPHA;if(r===vi)return n.DEPTH_COMPONENT;if(r===ls)return n.DEPTH_STENCIL;if(r===Ga)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===op)return n.RED;if(r===bu)return n.RED_INTEGER;if(r===ap)return n.RG;if(r===Su)return n.RG_INTEGER;if(r===wu)return n.RGBA_INTEGER;if(r===na||r===ia||r===sa||r===ra)if(l===lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===na)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ia)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===sa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ra)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===na)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ia)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===sa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ra)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wl||r===Xl||r===ql||r===Yl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Wl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Xl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ql)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Yl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Eu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Zl||r===$l)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Zl)return l===lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===$l)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Jl||r===Kl||r===Ql||r===jl||r===eh||r===th||r===nh||r===ih||r===sh||r===rh||r===oh||r===ah||r===ch||r===lh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Jl)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Kl)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ql)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jl)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===eh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===th)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===nh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ih)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===rh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===oh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ah)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ch)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===lh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===oa||r===hh||r===uh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===oa)return l===lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===uh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===cp||r===fh||r===dh||r===ph)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===oa)return a.COMPRESSED_RED_RGTC1_EXT;if(r===fh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===dh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ph)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===xi?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var sc=class extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ot=class extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ly={type:"move"},Is=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ly)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ot;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},rc=class extends jn{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,_=t.getContextAttributes(),m=null,p=null,x=[],y=[],b=new ue,R=null,E=new Ft;E.layers.enable(1),E.viewport=new ut;let A=new Ft;A.layers.enable(2),A.viewport=new ut;let I=[E,A],M=new sc;M.layers.enable(1),M.layers.enable(2);let S=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let j=x[W];return j===void 0&&(j=new Is,x[W]=j),j.getTargetRaySpace()},this.getControllerGrip=function(W){let j=x[W];return j===void 0&&(j=new Is,x[W]=j),j.getGripSpace()},this.getHand=function(W){let j=x[W];return j===void 0&&(j=new Is,x[W]=j),j.getHandSpace()};function V(W){let j=y.indexOf(W.inputSource);if(j===-1)return;let he=x[j];he!==void 0&&(he.update(W.inputSource,W.frame,c||o),he.dispatchEvent({type:W.type,data:W.inputSource}))}function $(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",P);for(let W=0;W<x.length;W++){let j=y[W];j!==null&&(y[W]=null,x[W].disconnect(j))}S=null,O=null,e.setRenderTarget(m),d=null,f=null,u=null,s=null,p=null,fe.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",$),s.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(b),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let j={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new On(d.framebufferWidth,d.framebufferHeight,{format:fn,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let j=null,he=null,Me=null;_.depth&&(Me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=_.stencil?ls:vi,he=_.stencil?xi:Yn);let ve={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(ve),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),p=new On(f.textureWidth,f.textureHeight,{format:fn,type:Kn,depthTexture:new no(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let Ne=e.properties.get(p);Ne.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),fe.setContext(s),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(W){for(let j=0;j<W.removed.length;j++){let he=W.removed[j],Me=y.indexOf(he);Me>=0&&(y[Me]=null,x[Me].disconnect(he))}for(let j=0;j<W.added.length;j++){let he=W.added[j],Me=y.indexOf(he);if(Me===-1){for(let Ne=0;Ne<x.length;Ne++)if(Ne>=y.length){y.push(he),Me=Ne;break}else if(y[Ne]===null){y[Ne]=he,Me=Ne;break}if(Me===-1)break}let ve=x[Me];ve&&ve.connect(he)}}let F=new C,G=new C;function K(W,j,he){F.setFromMatrixPosition(j.matrixWorld),G.setFromMatrixPosition(he.matrixWorld);let Me=F.distanceTo(G),ve=j.projectionMatrix.elements,Ne=he.projectionMatrix.elements,Fe=ve[14]/(ve[10]-1),Re=ve[14]/(ve[10]+1),Ke=(ve[9]+1)/ve[5],z=(ve[9]-1)/ve[5],Rt=(ve[8]-1)/ve[0],ge=(Ne[8]+1)/Ne[0],Ue=Fe*Rt,_e=Fe*ge,ct=Me/(-Rt+ge),Be=ct*-Rt;j.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Be),W.translateZ(ct),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let T=Fe+ct,v=Re+ct,D=Ue-Be,J=_e+(Me-Be),Y=Ke*Re/v*T,Q=z*Re/v*T;W.projectionMatrix.makePerspective(D,J,Y,Q,T,v),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function Z(W,j){j===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(j.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;M.near=A.near=E.near=W.near,M.far=A.far=E.far=W.far,(S!==M.near||O!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,O=M.far);let j=W.parent,he=M.cameras;Z(M,j);for(let Me=0;Me<he.length;Me++)Z(he[Me],j);he.length===2?K(M,E,A):M.projectionMatrix.copy(E.projectionMatrix),q(W,M,j)};function q(W,j,he){he===null?W.matrix.copy(j.matrixWorld):(W.matrix.copy(he.matrixWorld),W.matrix.invert(),W.matrix.multiply(j.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(j.projectionMatrix),W.projectionMatrixInverse.copy(j.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Wa*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)};let ee=null;function ne(W,j){if(h=j.getViewerPose(c||o),g=j,h!==null){let he=h.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let Me=!1;he.length!==M.cameras.length&&(M.cameras.length=0,Me=!0);for(let ve=0;ve<he.length;ve++){let Ne=he[ve],Fe=null;if(d!==null)Fe=d.getViewport(Ne);else{let Ke=u.getViewSubImage(f,Ne);Fe=Ke.viewport,ve===0&&(e.setRenderTargetTextures(p,Ke.colorTexture,f.ignoreDepthValues?void 0:Ke.depthStencilTexture),e.setRenderTarget(p))}let Re=I[ve];Re===void 0&&(Re=new Ft,Re.layers.enable(ve),Re.viewport=new ut,I[ve]=Re),Re.matrix.fromArray(Ne.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Ne.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),ve===0&&(M.matrix.copy(Re.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Me===!0&&M.cameras.push(Re)}}for(let he=0;he<x.length;he++){let Me=y[he],ve=x[he];Me!==null&&ve!==void 0&&ve.update(Me,j,c||o)}ee&&ee(W,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}let fe=new Lu;fe.setAnimationLoop(ne),this.setAnimationLoop=function(W){ee=W},this.dispose=function(){}}};function hy(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Pu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,y,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=e.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let y=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function uy(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,y){let b=y.program;i.uniformBlockBinding(x,b)}function c(x,y){let b=s[x.id];b===void 0&&(g(x),b=h(x),s[x.id]=b,x.addEventListener("dispose",m));let R=y.program;i.updateUBOMapping(x,R);let E=e.render.frame;r[x.id]!==E&&(f(x),r[x.id]=E)}function h(x){let y=u();x.__bindingPointIndex=y;let b=n.createBuffer(),R=x.__size,E=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,R,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,b),b}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let y=s[x.id],b=x.uniforms,R=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let E=0,A=b.length;E<A;E++){let I=Array.isArray(b[E])?b[E]:[b[E]];for(let M=0,S=I.length;M<S;M++){let O=I[M];if(d(O,E,M,R)===!0){let V=O.__offset,$=Array.isArray(O.value)?O.value:[O.value],P=0;for(let F=0;F<$.length;F++){let G=$[F],K=_(G);typeof G=="number"||typeof G=="boolean"?(O.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,V+P,O.__data)):G.isMatrix3?(O.__data[0]=G.elements[0],O.__data[1]=G.elements[1],O.__data[2]=G.elements[2],O.__data[3]=0,O.__data[4]=G.elements[3],O.__data[5]=G.elements[4],O.__data[6]=G.elements[5],O.__data[7]=0,O.__data[8]=G.elements[6],O.__data[9]=G.elements[7],O.__data[10]=G.elements[8],O.__data[11]=0):(G.toArray(O.__data,P),P+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,O.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(x,y,b,R){let E=x.value,A=y+"_"+b;if(R[A]===void 0)return typeof E=="number"||typeof E=="boolean"?R[A]=E:R[A]=E.clone(),!0;{let I=R[A];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return R[A]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function g(x){let y=x.uniforms,b=0,R=16;for(let A=0,I=y.length;A<I;A++){let M=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,O=M.length;S<O;S++){let V=M[S],$=Array.isArray(V.value)?V.value:[V.value];for(let P=0,F=$.length;P<F;P++){let G=$[P],K=_(G),Z=b%R;Z!==0&&R-Z<K.boundary&&(b+=R-Z),V.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=b,b+=K.storage}}}let E=b%R;return E>0&&(b+=R-E),x.__size=b,x.__cache={},this}function _(x){let y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){let y=x.target;y.removeEventListener("dispose",m);let b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Bs=class{constructor(e={}){let{canvas:t=vp(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gt,this._useLegacyLights=!1,this.toneMapping=Jn,this.toneMappingExposure=1;let y=this,b=!1,R=0,E=0,A=null,I=-1,M=null,S=new ut,O=new ut,V=null,$=new me(0),P=0,F=t.width,G=t.height,K=1,Z=null,q=null,ee=new ut(0,0,F,G),ne=new ut(0,0,F,G),fe=!1,W=new ks,j=!1,he=!1,Me=null,ve=new ft,Ne=new ue,Fe=new C,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ke(){return A===null?K:1}let z=i;function Rt(w,N){for(let B=0;B<w.length;B++){let H=w[B],k=t.getContext(H,N);if(k!==null)return k}return null}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lc}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",ae,!1),z===null){let N=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&N.shift(),z=Rt(N,w),z===null)throw Rt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ge,Ue,_e,ct,Be,T,v,D,J,Y,Q,xe,oe,pe,Te,be,te,et,Je,Oe,Ee,ye,Ve,je;function pt(){ge=new Pg(z),Ue=new wg(z,ge,e),ge.init(Ue),ye=new cy(z,ge,Ue),_e=new oy(z,ge,Ue),ct=new Dg(z),Be=new Z_,T=new ay(z,ge,_e,Be,Ue,ye,ct),v=new Tg(y),D=new Cg(y),J=new Hp(z,Ue),Ve=new bg(z,ge,J,Ue),Y=new Lg(z,J,ct,Ve),Q=new Fg(z,Y,J,ct),Je=new Og(z,Ue,T),be=new Eg(Be),xe=new Y_(y,v,D,ge,Ue,Ve,be),oe=new hy(y,Be),pe=new J_,Te=new ny(ge,Ue),et=new Mg(y,v,D,_e,Q,f,l),te=new ry(y,Q,Ue),je=new uy(z,ct,Ue,_e),Oe=new Sg(z,ge,ct,Ue),Ee=new Ig(z,ge,ct,Ue),ct.programs=xe.programs,y.capabilities=Ue,y.extensions=ge,y.properties=Be,y.renderLists=pe,y.shadowMap=te,y.state=_e,y.info=ct}pt();let Ye=new rc(y,z);this.xr=Ye,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let w=ge.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ge.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(w){w!==void 0&&(K=w,this.setSize(F,G,!1))},this.getSize=function(w){return w.set(F,G)},this.setSize=function(w,N,B=!0){if(Ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,G=N,t.width=Math.floor(w*K),t.height=Math.floor(N*K),B===!0&&(t.style.width=w+"px",t.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(F*K,G*K).floor()},this.setDrawingBufferSize=function(w,N,B){F=w,G=N,K=B,t.width=Math.floor(w*B),t.height=Math.floor(N*B),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(ee)},this.setViewport=function(w,N,B,H){w.isVector4?ee.set(w.x,w.y,w.z,w.w):ee.set(w,N,B,H),_e.viewport(S.copy(ee).multiplyScalar(K).floor())},this.getScissor=function(w){return w.copy(ne)},this.setScissor=function(w,N,B,H){w.isVector4?ne.set(w.x,w.y,w.z,w.w):ne.set(w,N,B,H),_e.scissor(O.copy(ne).multiplyScalar(K).floor())},this.getScissorTest=function(){return fe},this.setScissorTest=function(w){_e.setScissorTest(fe=w)},this.setOpaqueSort=function(w){Z=w},this.setTransparentSort=function(w){q=w},this.getClearColor=function(w){return w.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(w=!0,N=!0,B=!0){let H=0;if(w){let k=!1;if(A!==null){let de=A.texture.format;k=de===wu||de===Su||de===bu}if(k){let de=A.texture.type,Se=de===Kn||de===Yn||de===Dc||de===xi||de===vu||de===Mu,Ce=et.getClearColor(),Ie=et.getClearAlpha(),Xe=Ce.r,ze=Ce.g,He=Ce.b;Se?(d[0]=Xe,d[1]=ze,d[2]=He,d[3]=Ie,z.clearBufferuiv(z.COLOR,0,d)):(g[0]=Xe,g[1]=ze,g[2]=He,g[3]=Ie,z.clearBufferiv(z.COLOR,0,g))}else H|=z.COLOR_BUFFER_BIT}N&&(H|=z.DEPTH_BUFFER_BIT),B&&(H|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),pe.dispose(),Te.dispose(),Be.dispose(),v.dispose(),D.dispose(),Q.dispose(),Ve.dispose(),je.dispose(),xe.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",kt),Ye.removeEventListener("sessionend",rt),Me&&(Me.dispose(),Me=null),Bt.stop()};function se(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let w=ct.autoReset,N=te.enabled,B=te.autoUpdate,H=te.needsUpdate,k=te.type;pt(),ct.autoReset=w,te.enabled=N,te.autoUpdate=B,te.needsUpdate=H,te.type=k}function ae(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ce(w){let N=w.target;N.removeEventListener("dispose",ce),Le(N)}function Le(w){Ae(w),Be.remove(w)}function Ae(w){let N=Be.get(w).programs;N!==void 0&&(N.forEach(function(B){xe.releaseProgram(B)}),w.isShaderMaterial&&xe.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,B,H,k,de){N===null&&(N=Re);let Se=k.isMesh&&k.matrixWorld.determinant()<0,Ce=fd(w,N,B,H,k);_e.setMaterial(H,Se);let Ie=B.index,Xe=1;if(H.wireframe===!0){if(Ie=Y.getWireframeAttribute(B),Ie===void 0)return;Xe=2}let ze=B.drawRange,He=B.attributes.position,xt=ze.start*Xe,qt=(ze.start+ze.count)*Xe;de!==null&&(xt=Math.max(xt,de.start*Xe),qt=Math.min(qt,(de.start+de.count)*Xe)),Ie!==null?(xt=Math.max(xt,0),qt=Math.min(qt,Ie.count)):He!=null&&(xt=Math.max(xt,0),qt=Math.min(qt,He.count));let Tt=qt-xt;if(Tt<0||Tt===1/0)return;Ve.setup(k,H,Ce,B,Ie);let Tn,dt=Oe;if(Ie!==null&&(Tn=J.get(Ie),dt=Ee,dt.setIndex(Tn)),k.isMesh)H.wireframe===!0?(_e.setLineWidth(H.wireframeLinewidth*Ke()),dt.setMode(z.LINES)):dt.setMode(z.TRIANGLES);else if(k.isLine){let Ze=H.linewidth;Ze===void 0&&(Ze=1),_e.setLineWidth(Ze*Ke()),k.isLineSegments?dt.setMode(z.LINES):k.isLineLoop?dt.setMode(z.LINE_LOOP):dt.setMode(z.LINE_STRIP)}else k.isPoints?dt.setMode(z.POINTS):k.isSprite&&dt.setMode(z.TRIANGLES);if(k.isBatchedMesh)dt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)dt.renderInstances(xt,Tt,k.count);else if(B.isInstancedBufferGeometry){let Ze=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Jo=Math.min(B.instanceCount,Ze);dt.renderInstances(xt,Tt,Jo)}else dt.render(xt,Tt)};function it(w,N,B){w.transparent===!0&&w.side===hn&&w.forceSinglePass===!1?(w.side=zt,w.needsUpdate=!0,hr(w,N,B),w.side=Qn,w.needsUpdate=!0,hr(w,N,B),w.side=hn):hr(w,N,B)}this.compile=function(w,N,B=null){B===null&&(B=w),m=Te.get(B),m.init(),x.push(m),B.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),w!==B&&w.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(y._useLegacyLights);let H=new Set;return w.traverse(function(k){let de=k.material;if(de)if(Array.isArray(de))for(let Se=0;Se<de.length;Se++){let Ce=de[Se];it(Ce,B,k),H.add(Ce)}else it(de,B,k),H.add(de)}),x.pop(),m=null,H},this.compileAsync=function(w,N,B=null){let H=this.compile(w,N,B);return new Promise(k=>{function de(){if(H.forEach(function(Se){Be.get(Se).currentProgram.isReady()&&H.delete(Se)}),H.size===0){k(w);return}setTimeout(de,10)}ge.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let st=null;function Et(w){st&&st(w)}function kt(){Bt.stop()}function rt(){Bt.start()}let Bt=new Lu;Bt.setAnimationLoop(Et),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(w){st=w,Ye.setAnimationLoop(w),w===null?Bt.stop():Bt.start()},Ye.addEventListener("sessionstart",kt),Ye.addEventListener("sessionend",rt),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(N),N=Ye.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,N,A),m=Te.get(w,x.length),m.init(),x.push(m),ve.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),W.setFromProjectionMatrix(ve),he=this.localClippingEnabled,j=be.init(this.clippingPlanes,he),_=pe.get(w,p.length),_.init(),p.push(_),_n(w,N,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(Z,q),this.info.render.frame++,j===!0&&be.beginShadows();let B=m.state.shadowsArray;if(te.render(B,w,N),j===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),et.render(_,w),m.setupLights(y._useLegacyLights),N.isArrayCamera){let H=N.cameras;for(let k=0,de=H.length;k<de;k++){let Se=H[k];Tl(_,w,Se,Se.viewport)}}else Tl(_,w,N);A!==null&&(T.updateMultisampleRenderTarget(A),T.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(y,w,N),Ve.resetDefaultState(),I=-1,M=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function _n(w,N,B,H){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||W.intersectsSprite(w)){H&&Fe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ve);let Se=Q.update(w),Ce=w.material;Ce.visible&&_.push(w,Se,Ce,B,Fe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||W.intersectsObject(w))){let Se=Q.update(w),Ce=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Fe.copy(w.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Fe.copy(Se.boundingSphere.center)),Fe.applyMatrix4(w.matrixWorld).applyMatrix4(ve)),Array.isArray(Ce)){let Ie=Se.groups;for(let Xe=0,ze=Ie.length;Xe<ze;Xe++){let He=Ie[Xe],xt=Ce[He.materialIndex];xt&&xt.visible&&_.push(w,Se,xt,B,Fe.z,He)}}else Ce.visible&&_.push(w,Se,Ce,B,Fe.z,null)}}let de=w.children;for(let Se=0,Ce=de.length;Se<Ce;Se++)_n(de[Se],N,B,H)}function Tl(w,N,B,H){let k=w.opaque,de=w.transmissive,Se=w.transparent;m.setupLightsView(B),j===!0&&be.setGlobalState(y.clippingPlanes,B),de.length>0&&ud(k,de,N,B),H&&_e.viewport(S.copy(H)),k.length>0&&lr(k,N,B),de.length>0&&lr(de,N,B),Se.length>0&&lr(Se,N,B),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function ud(w,N,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;let de=Ue.isWebGL2;Me===null&&(Me=new On(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?Fs:Kn,minFilter:Os,samples:de?4:0})),y.getDrawingBufferSize(Ne),de?Me.setSize(Ne.x,Ne.y):Me.setSize(Xa(Ne.x),Xa(Ne.y));let Se=y.getRenderTarget();y.setRenderTarget(Me),y.getClearColor($),P=y.getClearAlpha(),P<1&&y.setClearColor(16777215,.5),y.clear();let Ce=y.toneMapping;y.toneMapping=Jn,lr(w,B,H),T.updateMultisampleRenderTarget(Me),T.updateRenderTargetMipmap(Me);let Ie=!1;for(let Xe=0,ze=N.length;Xe<ze;Xe++){let He=N[Xe],xt=He.object,qt=He.geometry,Tt=He.material,Tn=He.group;if(Tt.side===hn&&xt.layers.test(H.layers)){let dt=Tt.side;Tt.side=zt,Tt.needsUpdate=!0,Al(xt,B,H,qt,Tt,Tn),Tt.side=dt,Tt.needsUpdate=!0,Ie=!0}}Ie===!0&&(T.updateMultisampleRenderTarget(Me),T.updateRenderTargetMipmap(Me)),y.setRenderTarget(Se),y.setClearColor($,P),y.toneMapping=Ce}function lr(w,N,B){let H=N.isScene===!0?N.overrideMaterial:null;for(let k=0,de=w.length;k<de;k++){let Se=w[k],Ce=Se.object,Ie=Se.geometry,Xe=H===null?Se.material:H,ze=Se.group;Ce.layers.test(B.layers)&&Al(Ce,N,B,Ie,Xe,ze)}}function Al(w,N,B,H,k,de){w.onBeforeRender(y,N,B,H,k,de),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(y,N,B,H,w,de),k.transparent===!0&&k.side===hn&&k.forceSinglePass===!1?(k.side=zt,k.needsUpdate=!0,y.renderBufferDirect(B,N,H,k,w,de),k.side=Qn,k.needsUpdate=!0,y.renderBufferDirect(B,N,H,k,w,de),k.side=hn):y.renderBufferDirect(B,N,H,k,w,de),w.onAfterRender(y,N,B,H,k,de)}function hr(w,N,B){N.isScene!==!0&&(N=Re);let H=Be.get(w),k=m.state.lights,de=m.state.shadowsArray,Se=k.state.version,Ce=xe.getParameters(w,k.state,de,N,B),Ie=xe.getProgramCacheKey(Ce),Xe=H.programs;H.environment=w.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(w.isMeshStandardMaterial?D:v).get(w.envMap||H.environment),Xe===void 0&&(w.addEventListener("dispose",ce),Xe=new Map,H.programs=Xe);let ze=Xe.get(Ie);if(ze!==void 0){if(H.currentProgram===ze&&H.lightsStateVersion===Se)return Cl(w,Ce),ze}else Ce.uniforms=xe.getUniforms(w),w.onBuild(B,Ce,y),w.onBeforeCompile(Ce,y),ze=xe.acquireProgram(Ce,Ie),Xe.set(Ie,ze),H.uniforms=Ce.uniforms;let He=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(He.clippingPlanes=be.uniform),Cl(w,Ce),H.needsLights=pd(w),H.lightsStateVersion=Se,H.needsLights&&(He.ambientLightColor.value=k.state.ambient,He.lightProbe.value=k.state.probe,He.directionalLights.value=k.state.directional,He.directionalLightShadows.value=k.state.directionalShadow,He.spotLights.value=k.state.spot,He.spotLightShadows.value=k.state.spotShadow,He.rectAreaLights.value=k.state.rectArea,He.ltc_1.value=k.state.rectAreaLTC1,He.ltc_2.value=k.state.rectAreaLTC2,He.pointLights.value=k.state.point,He.pointLightShadows.value=k.state.pointShadow,He.hemisphereLights.value=k.state.hemi,He.directionalShadowMap.value=k.state.directionalShadowMap,He.directionalShadowMatrix.value=k.state.directionalShadowMatrix,He.spotShadowMap.value=k.state.spotShadowMap,He.spotLightMatrix.value=k.state.spotLightMatrix,He.spotLightMap.value=k.state.spotLightMap,He.pointShadowMap.value=k.state.pointShadowMap,He.pointShadowMatrix.value=k.state.pointShadowMatrix),H.currentProgram=ze,H.uniformsList=null,ze}function Rl(w){if(w.uniformsList===null){let N=w.currentProgram.getUniforms();w.uniformsList=os.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function Cl(w,N){let B=Be.get(w);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function fd(w,N,B,H,k){N.isScene!==!0&&(N=Re),T.resetTextureUnits();let de=N.fog,Se=H.isMeshStandardMaterial?N.environment:null,Ce=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Nn,Ie=(H.isMeshStandardMaterial?D:v).get(H.envMap||Se),Xe=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,ze=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),He=!!B.morphAttributes.position,xt=!!B.morphAttributes.normal,qt=!!B.morphAttributes.color,Tt=Jn;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Tt=y.toneMapping);let Tn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,dt=Tn!==void 0?Tn.length:0,Ze=Be.get(H),Jo=m.state.lights;if(j===!0&&(he===!0||w!==M)){let Kt=w===M&&H.id===I;be.setState(H,w,Kt)}let mt=!1;H.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Jo.state.version||Ze.outputColorSpace!==Ce||k.isBatchedMesh&&Ze.batching===!1||!k.isBatchedMesh&&Ze.batching===!0||k.isInstancedMesh&&Ze.instancing===!1||!k.isInstancedMesh&&Ze.instancing===!0||k.isSkinnedMesh&&Ze.skinning===!1||!k.isSkinnedMesh&&Ze.skinning===!0||k.isInstancedMesh&&Ze.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ze.instancingColor===!1&&k.instanceColor!==null||Ze.envMap!==Ie||H.fog===!0&&Ze.fog!==de||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==be.numPlanes||Ze.numIntersection!==be.numIntersection)||Ze.vertexAlphas!==Xe||Ze.vertexTangents!==ze||Ze.morphTargets!==He||Ze.morphNormals!==xt||Ze.morphColors!==qt||Ze.toneMapping!==Tt||Ue.isWebGL2===!0&&Ze.morphTargetsCount!==dt)&&(mt=!0):(mt=!0,Ze.__version=H.version);let hi=Ze.currentProgram;mt===!0&&(hi=hr(H,N,k));let Pl=!1,ws=!1,Ko=!1,Ut=hi.getUniforms(),ui=Ze.uniforms;if(_e.useProgram(hi.program)&&(Pl=!0,ws=!0,Ko=!0),H.id!==I&&(I=H.id,ws=!0),Pl||M!==w){Ut.setValue(z,"projectionMatrix",w.projectionMatrix),Ut.setValue(z,"viewMatrix",w.matrixWorldInverse);let Kt=Ut.map.cameraPosition;Kt!==void 0&&Kt.setValue(z,Fe.setFromMatrixPosition(w.matrixWorld)),Ue.logarithmicDepthBuffer&&Ut.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ut.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,ws=!0,Ko=!0)}if(k.isSkinnedMesh){Ut.setOptional(z,k,"bindMatrix"),Ut.setOptional(z,k,"bindMatrixInverse");let Kt=k.skeleton;Kt&&(Ue.floatVertexTextures?(Kt.boneTexture===null&&Kt.computeBoneTexture(),Ut.setValue(z,"boneTexture",Kt.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Ut.setOptional(z,k,"batchingTexture"),Ut.setValue(z,"batchingTexture",k._matricesTexture,T));let Qo=B.morphAttributes;if((Qo.position!==void 0||Qo.normal!==void 0||Qo.color!==void 0&&Ue.isWebGL2===!0)&&Je.update(k,B,hi),(ws||Ze.receiveShadow!==k.receiveShadow)&&(Ze.receiveShadow=k.receiveShadow,Ut.setValue(z,"receiveShadow",k.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(ui.envMap.value=Ie,ui.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),ws&&(Ut.setValue(z,"toneMappingExposure",y.toneMappingExposure),Ze.needsLights&&dd(ui,Ko),de&&H.fog===!0&&oe.refreshFogUniforms(ui,de),oe.refreshMaterialUniforms(ui,H,K,G,Me),os.upload(z,Rl(Ze),ui,T)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(os.upload(z,Rl(Ze),ui,T),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ut.setValue(z,"center",k.center),Ut.setValue(z,"modelViewMatrix",k.modelViewMatrix),Ut.setValue(z,"normalMatrix",k.normalMatrix),Ut.setValue(z,"modelMatrix",k.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let Kt=H.uniformsGroups;for(let jo=0,md=Kt.length;jo<md;jo++)if(Ue.isWebGL2){let Ll=Kt[jo];je.update(Ll,hi),je.bind(Ll,hi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hi}function dd(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function pd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,N,B){Be.get(w.texture).__webglTexture=N,Be.get(w.depthTexture).__webglTexture=B;let H=Be.get(w);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,N){let B=Be.get(w);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,B=0){A=w,R=N,E=B;let H=!0,k=null,de=!1,Se=!1;if(w){let Ie=Be.get(w);Ie.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(z.FRAMEBUFFER,null),H=!1):Ie.__webglFramebuffer===void 0?T.setupRenderTarget(w):Ie.__hasExternalTextures&&T.rebindTextures(w,Be.get(w.texture).__webglTexture,Be.get(w.depthTexture).__webglTexture);let Xe=w.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Se=!0);let ze=Be.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ze[N])?k=ze[N][B]:k=ze[N],de=!0):Ue.isWebGL2&&w.samples>0&&T.useMultisampledRTT(w)===!1?k=Be.get(w).__webglMultisampledFramebuffer:Array.isArray(ze)?k=ze[B]:k=ze,S.copy(w.viewport),O.copy(w.scissor),V=w.scissorTest}else S.copy(ee).multiplyScalar(K).floor(),O.copy(ne).multiplyScalar(K).floor(),V=fe;if(_e.bindFramebuffer(z.FRAMEBUFFER,k)&&Ue.drawBuffers&&H&&_e.drawBuffers(w,k),_e.viewport(S),_e.scissor(O),_e.setScissorTest(V),de){let Ie=Be.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ie.__webglTexture,B)}else if(Se){let Ie=Be.get(w.texture),Xe=N||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ie.__webglTexture,B||0,Xe)}I=-1},this.readRenderTargetPixels=function(w,N,B,H,k,de,Se){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(Ce=Ce[Se]),Ce){_e.bindFramebuffer(z.FRAMEBUFFER,Ce);try{let Ie=w.texture,Xe=Ie.format,ze=Ie.type;if(Xe!==fn&&ye.convert(Xe)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let He=ze===Fs&&(ge.has("EXT_color_buffer_half_float")||Ue.isWebGL2&&ge.has("EXT_color_buffer_float"));if(ze!==Kn&&ye.convert(ze)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===Zn&&(Ue.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-H&&B>=0&&B<=w.height-k&&z.readPixels(N,B,H,k,ye.convert(Xe),ye.convert(ze),de)}finally{let Ie=A!==null?Be.get(A).__webglFramebuffer:null;_e.bindFramebuffer(z.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(w,N,B=0){let H=Math.pow(2,-B),k=Math.floor(N.image.width*H),de=Math.floor(N.image.height*H);T.setTexture2D(N,0),z.copyTexSubImage2D(z.TEXTURE_2D,B,0,0,w.x,w.y,k,de),_e.unbindTexture()},this.copyTextureToTexture=function(w,N,B,H=0){let k=N.image.width,de=N.image.height,Se=ye.convert(B.format),Ce=ye.convert(B.type);T.setTexture2D(B,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,B.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,B.unpackAlignment),N.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,H,w.x,w.y,k,de,Se,Ce,N.image.data):N.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,H,w.x,w.y,N.mipmaps[0].width,N.mipmaps[0].height,Se,N.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,H,w.x,w.y,Se,Ce,N.image),H===0&&B.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(w,N,B,H,k=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let de=w.max.x-w.min.x+1,Se=w.max.y-w.min.y+1,Ce=w.max.z-w.min.z+1,Ie=ye.convert(H.format),Xe=ye.convert(H.type),ze;if(H.isData3DTexture)T.setTexture3D(H,0),ze=z.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)T.setTexture2DArray(H,0),ze=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment);let He=z.getParameter(z.UNPACK_ROW_LENGTH),xt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),qt=z.getParameter(z.UNPACK_SKIP_PIXELS),Tt=z.getParameter(z.UNPACK_SKIP_ROWS),Tn=z.getParameter(z.UNPACK_SKIP_IMAGES),dt=B.isCompressedTexture?B.mipmaps[k]:B.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,dt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,dt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,w.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,w.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,w.min.z),B.isDataTexture||B.isData3DTexture?z.texSubImage3D(ze,k,N.x,N.y,N.z,de,Se,Ce,Ie,Xe,dt.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(ze,k,N.x,N.y,N.z,de,Se,Ce,Ie,dt.data)):z.texSubImage3D(ze,k,N.x,N.y,N.z,de,Se,Ce,Ie,Xe,dt),z.pixelStorei(z.UNPACK_ROW_LENGTH,He),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,xt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,qt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Tt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Tn),k===0&&H.generateMipmaps&&z.generateMipmap(ze),_e.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),_e.unbindTexture()},this.resetState=function(){R=0,E=0,A=null,_e.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Nc?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===To?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===gt?Mi:Tu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Mi?gt:Nn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},oc=class extends Bs{};oc.prototype.isWebGL1Renderer=!0;var io=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new me(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},so=class extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Hs=class extends vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ru=new C,ou=new C,au=new ft,Ia=new hs,Dr=new Si,ac=class extends Pt{constructor(e=new _t,t=new Hs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)ru.fromBufferAttribute(t,s-1),ou.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ru.distanceTo(ou);e.setAttribute("lineDistance",new $e(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Dr.copy(i.boundingSphere),Dr.applyMatrix4(s),Dr.radius+=r,e.ray.intersectsSphere(Dr)===!1)return;au.copy(s).invert(),Ia.copy(e.ray).applyMatrix4(au);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new C,h=new C,u=new C,f=new C,d=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let p=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let y=p,b=x-1;y<b;y+=d){let R=g.getX(y),E=g.getX(y+1);if(c.fromBufferAttribute(m,R),h.fromBufferAttribute(m,E),Ia.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let I=e.ray.origin.distanceTo(f);I<e.near||I>e.far||t.push({distance:I,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let y=p,b=x-1;y<b;y+=d){if(c.fromBufferAttribute(m,y),h.fromBufferAttribute(m,y+1),Ia.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},cu=new C,lu=new C,ro=class extends ac{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)cu.fromBufferAttribute(t,s),lu.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+cu.distanceTo(lu);e.setAttribute("lineDistance",new $e(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Vs=class extends vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},hu=new ft,cc=new hs,Ur=new Si,Nr=new C,oo=class extends Pt{constructor(e=new _t,t=new Vs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ur.copy(i.boundingSphere),Ur.applyMatrix4(s),Ur.radius+=r,e.ray.intersectsSphere(Ur)===!1)return;hu.copy(s).invert(),cc.copy(e.ray).applyMatrix4(hu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){let m=c.getX(g);Nr.fromBufferAttribute(u,m),uu(Nr,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Nr.fromBufferAttribute(u,g),uu(Nr,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function uu(n,e,t,i,s,r,o){let a=cc.distanceSqToPoint(n);if(a<t){let l=new C;cc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var Gs=class extends tn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ue:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new C,s=[],r=[],o=[],a=new C,l=new ft;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ct(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Ct(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ws=class extends nn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let i=t||new ue,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},lc=class extends Ws{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Fc(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Or=new C,Da=new Fc,Ua=new Fc,Na=new Fc,hc=class extends nn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new C){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Or.subVectors(s[0],s[1]).add(s[0]),c=Or);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Or.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Or),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Da.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),Ua.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),Na.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Da.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Ua.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Na.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Da.calc(l),Ua.calc(l),Na.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function fu(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function fy(n,e){let t=1-n;return t*t*e}function dy(n,e){return 2*(1-n)*n*e}function py(n,e){return n*n*e}function Ds(n,e,t,i){return fy(n,e)+dy(n,t)+py(n,i)}function my(n,e){let t=1-n;return t*t*t*e}function gy(n,e){let t=1-n;return 3*t*t*n*e}function _y(n,e){return 3*(1-n)*n*n*e}function yy(n,e){return n*n*n*e}function Us(n,e,t,i,s){return my(n,e)+gy(n,t)+_y(n,i)+yy(n,s)}var ao=class extends nn{constructor(e=new ue,t=new ue,i=new ue,s=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ue){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Us(e,s.x,r.x,o.x,a.x),Us(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},uc=class extends nn{constructor(e=new C,t=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Us(e,s.x,r.x,o.x,a.x),Us(e,s.y,r.y,o.y,a.y),Us(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},co=class extends nn{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fc=class extends nn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lo=class extends nn{constructor(e=new ue,t=new ue,i=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ue){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ds(e,s.x,r.x,o.x),Ds(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},dc=class extends nn{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ds(e,s.x,r.x,o.x),Ds(e,s.y,r.y,o.y),Ds(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ho=class extends nn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(fu(a,l.x,c.x,h.x,u.x),fu(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ue().fromArray(s))}return this}},du=Object.freeze({__proto__:null,ArcCurve:lc,CatmullRomCurve3:hc,CubicBezierCurve:ao,CubicBezierCurve3:uc,EllipseCurve:Ws,LineCurve:co,LineCurve3:fc,QuadraticBezierCurve:lo,QuadraticBezierCurve3:dc,SplineCurve:ho}),pc=class extends nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new du[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new du[s.type]().fromJSON(s))}return this}},mc=class extends pc{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new co(this.currentPoint.clone(),new ue(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new lo(this.currentPoint.clone(),new ue(e,t),new ue(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new ao(this.currentPoint.clone(),new ue(e,t),new ue(i,s),new ue(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ho(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Ws(e,t,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},gc=class n extends _t{constructor(e=[new ue(0,-.5),new ue(.5,0),new ue(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Ct(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new C,f=new ue,d=new C,g=new C,_=new C,m=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(g)}for(let x=0;x<=t;x++){let y=i+x*h*s,b=Math.sin(y),R=Math.cos(y);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*b,u.y=e[E].y,u.z=e[E].x*R,o.push(u.x,u.y,u.z),f.x=x/t,f.y=E/(e.length-1),a.push(f.x,f.y);let A=l[3*E+0]*b,I=l[3*E+1],M=l[3*E+0]*R;c.push(A,I,M)}}for(let x=0;x<t;x++)for(let y=0;y<e.length-1;y++){let b=y+x*e.length,R=b,E=b+e.length,A=b+e.length+1,I=b+1;r.push(R,E,I),r.push(A,I,E)}this.setIndex(r),this.setAttribute("position",new $e(o,3)),this.setAttribute("uv",new $e(a,2)),this.setAttribute("normal",new $e(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},uo=class n extends gc{constructor(e=1,t=1,i=4,s=8){let r=new mc;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},fo=class n extends _t{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new C,h=new ue;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=i+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new $e(o,3)),this.setAttribute("normal",new $e(a,3)),this.setAttribute("uv",new $e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ei=class n extends _t{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,_=[],m=i/2,p=0;x(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(f,3)),this.setAttribute("uv",new $e(d,2));function x(){let b=new C,R=new C,E=0,A=(t-e)/i;for(let I=0;I<=r;I++){let M=[],S=I/r,O=S*(t-e)+e;for(let V=0;V<=s;V++){let $=V/s,P=$*l+a,F=Math.sin(P),G=Math.cos(P);R.x=O*F,R.y=-S*i+m,R.z=O*G,u.push(R.x,R.y,R.z),b.set(F,A,G).normalize(),f.push(b.x,b.y,b.z),d.push($,1-S),M.push(g++)}_.push(M)}for(let I=0;I<s;I++)for(let M=0;M<r;M++){let S=_[M][I],O=_[M+1][I],V=_[M+1][I+1],$=_[M][I+1];h.push(S,O,$),h.push(O,V,$),E+=6}c.addGroup(p,E,0),p+=E}function y(b){let R=g,E=new ue,A=new C,I=0,M=b===!0?e:t,S=b===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,m*S,0),f.push(0,S,0),d.push(.5,.5),g++;let O=g;for(let V=0;V<=s;V++){let P=V/s*l+a,F=Math.cos(P),G=Math.sin(P);A.x=M*G,A.y=m*S,A.z=M*F,u.push(A.x,A.y,A.z),f.push(0,S,0),E.x=F*.5+.5,E.y=G*.5*S+.5,d.push(E.x,E.y),g++}for(let V=0;V<s;V++){let $=R+V,P=O+V;b===!0?h.push(P,P+1,$):h.push(P+1,P,$),I+=3}c.addGroup(p,I,b===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},po=class n extends ei{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},_c=class n extends _t{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new $e(r,3)),this.setAttribute("normal",new $e(r.slice(),3)),this.setAttribute("uv",new $e(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let y=new C,b=new C,R=new C;for(let E=0;E<t.length;E+=3)d(t[E+0],y),d(t[E+1],b),d(t[E+2],R),l(y,b,R,x)}function l(x,y,b,R){let E=R+1,A=[];for(let I=0;I<=E;I++){A[I]=[];let M=x.clone().lerp(b,I/E),S=y.clone().lerp(b,I/E),O=E-I;for(let V=0;V<=O;V++)V===0&&I===E?A[I][V]=M:A[I][V]=M.clone().lerp(S,V/O)}for(let I=0;I<E;I++)for(let M=0;M<2*(E-I)-1;M++){let S=Math.floor(M/2);M%2===0?(f(A[I][S+1]),f(A[I+1][S]),f(A[I][S])):(f(A[I][S+1]),f(A[I+1][S+1]),f(A[I+1][S]))}}function c(x){let y=new C;for(let b=0;b<r.length;b+=3)y.x=r[b+0],y.y=r[b+1],y.z=r[b+2],y.normalize().multiplyScalar(x),r[b+0]=y.x,r[b+1]=y.y,r[b+2]=y.z}function h(){let x=new C;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];let b=m(x)/2/Math.PI+.5,R=p(x)/Math.PI+.5;o.push(b,1-R)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){let y=o[x+0],b=o[x+2],R=o[x+4],E=Math.max(y,b,R),A=Math.min(y,b,R);E>.9&&A<.1&&(y<.2&&(o[x+0]+=1),b<.2&&(o[x+2]+=1),R<.2&&(o[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function d(x,y){let b=x*3;y.x=e[b+0],y.y=e[b+1],y.z=e[b+2]}function g(){let x=new C,y=new C,b=new C,R=new C,E=new ue,A=new ue,I=new ue;for(let M=0,S=0;M<r.length;M+=9,S+=6){x.set(r[M+0],r[M+1],r[M+2]),y.set(r[M+3],r[M+4],r[M+5]),b.set(r[M+6],r[M+7],r[M+8]),E.set(o[S+0],o[S+1]),A.set(o[S+2],o[S+3]),I.set(o[S+4],o[S+5]),R.copy(x).add(y).add(b).divideScalar(3);let O=m(R);_(E,S+0,x,O),_(A,S+2,y,O),_(I,S+4,b,O)}}function _(x,y,b,R){R<0&&x.x===1&&(o[y]=x.x-1),b.x===0&&b.z===0&&(o[y]=R/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var mo=class n extends _c{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var go=class n extends _t{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/s,d=new C,g=new ue;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){let p=r+m/i*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){let m=_*(i+1);for(let p=0;p<i;p++){let x=p+m,y=x,b=x+i+1,R=x+i+2,E=x+1;a.push(y,b,E),a.push(b,R,E)}}this.setIndex(a),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Ei=class n extends _t{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new C,f=new C,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){let x=[],y=p/i,b=0;p===0&&o===0?b=.5/t:p===i&&l===Math.PI&&(b=-.5/t);for(let R=0;R<=t;R++){let E=R/t;u.x=-e*Math.cos(s+E*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+E*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(E+b,1-y),x.push(c++)}h.push(x)}for(let p=0;p<i;p++)for(let x=0;x<t;x++){let y=h[p][x+1],b=h[p][x],R=h[p+1][x],E=h[p+1][x+1];(p!==0||o>0)&&d.push(y,b,E),(p!==i-1||l<Math.PI)&&d.push(b,R,E)}this.setIndex(d),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var _o=class n extends _t{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new C,u=new C,f=new C;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){let _=g/s*r,m=d/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){let _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,x=(s+1)*d+g;o.push(_,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(l,3)),this.setAttribute("uv",new $e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ds=class extends vn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new me(16777215),this.specular=new me(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uc,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var $t=class extends vn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uc,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Fr(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function xy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ps=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},yc=class extends ps{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mh,endingEnd:mh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case gh:r=e,a=2*t-i;break;case _h:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case gh:o=e,l=2*i-t;break;case _h:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,x=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*_+.5*g,b=d*m-d*_;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+x*o[c+R]+y*o[l+R]+b*o[u+R];return r}},xc=class extends ps{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},vc=class extends ps{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},pn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fr(t,this.TimeBufferType),this.values=Fr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Fr(e.times,Array),values:Fr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new vc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Br:t=this.InterpolantFactoryMethodDiscrete;break;case Hr:t=this.InterpolantFactoryMethodLinear;break;case aa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Br;case this.InterpolantFactoryMethodLinear:return Hr;case this.InterpolantFactoryMethodSmooth:return aa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&xy(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===aa,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let _=t[u+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=Hr;var Ti=class extends pn{};Ti.prototype.ValueTypeName="bool";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=Br;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var Mc=class extends pn{};Mc.prototype.ValueTypeName="color";var bc=class extends pn{};bc.prototype.ValueTypeName="number";var Sc=class extends ps{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)xn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Xs=class extends pn{InterpolantFactoryMethodLinear(e){return new Sc(this.times,this.values,this.getValueSize(),e)}};Xs.prototype.ValueTypeName="quaternion";Xs.prototype.DefaultInterpolation=Hr;Xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ai=class extends pn{};Ai.prototype.ValueTypeName="string";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=Br;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var wc=class extends pn{};wc.prototype.ValueTypeName="vector";var Ec=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},vy=new Ec,Tc=class{constructor(e){this.manager=e!==void 0?e:vy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Tc.DEFAULT_MATERIAL_NAME="__DEFAULT";var qs=class extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},yo=class extends qs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Oa=new ft,pu=new C,mu=new C,xo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ks,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;pu.setFromMatrixPosition(e.matrixWorld),t.position.copy(pu),mu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mu),t.updateMatrixWorld(),Oa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Oa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var gu=new ft,Ps=new C,Fa=new C,Ac=class extends xo{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ps.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ps),Fa.copy(i.position),Fa.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Fa),i.updateMatrixWorld(),s.makeTranslation(-Ps.x,-Ps.y,-Ps.z),gu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gu)}},vo=class extends qs{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ac}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Rc=class extends xo{constructor(){super(new eo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Mo=class extends qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new Rc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var zc="\\[\\]\\.:\\/",My=new RegExp("["+zc+"]","g"),kc="[^"+zc+"]",by="[^"+zc.replace("\\.","")+"]",Sy=/((?:WC+[\/:])*)/.source.replace("WC",kc),wy=/(WCOD+)?/.source.replace("WCOD",by),Ey=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kc),Ty=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kc),Ay=new RegExp("^"+Sy+wy+Ey+Ty+"$"),Ry=["material","materials","bones","map"],Cc=class{constructor(e,t,i){let s=i||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ht=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(My,"")}static parseTrackName(e){let t=Ay.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Ry.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ht.Composite=Cc;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rv=new Float32Array(1);var bo=class{constructor(e,t,i=0,s=1/0){this.ray=new hs(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new zs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Pc(e,this,i,t),i.sort(_u),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Pc(e[s],this,i,t);return i.sort(_u),i}};function _u(n,e){return n.distance-e.distance}function Pc(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)Pc(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lc);async function Ro(n){let e=await fetch(n,{cache:"no-cache"});if(!e.ok)throw new Error(`Failed to load ${n}: ${e.status}`);return e.json()}async function Fu(){if(globalThis.__PIZZA_DATA__)return globalThis.__PIZZA_DATA__;let[n,e,t]=await Promise.all([Ro("data/economy.json"),Ro("data/strings/en.json"),Ro("data/locations/index.json")]),i=await Promise.all(t.map(r=>Ro(`data/locations/${r}.json`))),s=Object.fromEntries(i.map(r=>[r.id,r]));return{economy:n,strings:e,locations:s}}var zu={};function ku(n){zu=n}function U(n,e={}){let t=zu[n];if(t===void 0)return console.warn("[i18n] missing key",n),n;for(let i of Object.keys(e))t=t.split("{"+i+"}").join(String(e[i]));return t}var Cy=new Intl.NumberFormat(void 0,{notation:"compact",maximumFractionDigits:1}),Py=new Intl.NumberFormat(void 0,{maximumFractionDigits:0});function Bc(n){return Cy.format(Math.floor(n))}function bt(n){return Py.format(Math.floor(n))}function Hc(n){let e=Math.floor(n/3600),t=Math.floor(n%3600/60);return e>0?`${e}h ${t}m`:`${t}m`}function Bu(n){return n<10?n.toFixed(1):Bc(n)}var Vc={schemaVersion:2,rngSeed:1234567,cash:0,lifetimeCash:0,gameTime:0,dayClock:.3,savedAt:0,createdAt:0,location:"corner",unlockedLocations:{corner:!0,sideStreet:!1},upgrades:{oven:0,counter:0,cheese:0,decor:0,neon:0,scooter:0,marketing:0,pizzaSchool:0,megaOven:0},staff:{cashier:0,cook:0},staffing:{cashier:0,cook:0},styles:{margherita:!0,pepperoni:!1,veggie:!1,seasonal:!1},franchise:{points:0,count:0,lifetimeAtLast:0,readyNotified:!1},tutorialStep:0,tutorialDone:!1,stats:{ordersTaken:0,manualStretch:0,manualTopping:0,manualLoad:0,served:0,angry:0,turnedAway:0,upgradesBought:0,staffHired:0},flags:{firstPurchase:!1},events:{active:[],nextAt:240},customers:[],pizzas:[],nextId:1,cashierTimers:[],cashierIdle:0,cookIdle:0,idleNotified:{cashier:!1,cook:!1},spawnTimer:4,settings:{sound:!0,notify:!1,graphics:"auto",look:"3d"},cosmetics:{ovenSkin:"skin.classic"}};function Co(n,e=Date.now()){let t=structuredClone(Vc);return t.cash=n.economy.startingCash,t.dayClock=n.economy.time.startDayClock,t.rngSeed=e%2147483647|0||1,t.createdAt=e,t.savedAt=e,t}var Gc=2,Wc="pizzastand.save",Ly={1:n=>{let e=n.franchise||(n.franchise={points:0,count:0});return e.lifetimeAtLast=e.count>0&&n.lifetimeCash||0,e.readyNotified=!1,delete e.unlocked,n}};function Hu(n,e){for(let t of Object.keys(e)){let i=e[t];n[t]===void 0?n[t]=structuredClone(i):i&&typeof i=="object"&&!Array.isArray(i)&&typeof n[t]=="object"&&Hu(n[t],i)}return n}function Iy(n){let e=n.schemaVersion??0;for(;e<Gc;){let t=Ly[e];t&&(n=t(n)),e++}return n.schemaVersion=Gc,Hu(n,Vc)}function Vu(){try{let n=globalThis.localStorage?.getItem(Wc);if(!n)return null;let e=JSON.parse(n);return typeof e.schemaVersion=="number"&&e.schemaVersion>Gc?(console.warn("[save] save is from a newer version; ignoring"),null):Iy(e)}catch(n){return console.warn("[save] could not read save",n),null}}function Gu(n){try{return globalThis.localStorage?.setItem(Wc,JSON.stringify(n)),!0}catch(e){return console.warn("[save] could not write save",e),!1}}function Wu(){try{globalThis.localStorage?.removeItem(Wc)}catch{}}var Xu="pizzastand.analytics";var qu=null,Yu=Date.now();function at(n,e={}){let t={name:n,props:e,t:Date.now()};try{let i=JSON.parse(globalThis.localStorage?.getItem(Xu)||"[]");for(i.push(t);i.length>200;)i.shift();globalThis.localStorage?.setItem(Xu,JSON.stringify(i))}catch{}if(qu)try{qu(t)}catch{}}function Xc(){Yu=Date.now(),at("session_start")}function Zu(n={}){at("session_end",{durationSeconds:Math.round((Date.now()-Yu)/1e3),...n})}var Zs=null,$u=!0;function Po(n){$u=n}function Dy(){if(!$u)return null;if(!Zs){let n=globalThis.AudioContext||globalThis.webkitAudioContext;if(!n)return null;Zs=new n}return Zs.state==="suspended"&&Zs.resume(),Zs}function ti(n,e,t,i="sine",s=.2,r=null){let o=Dy();if(!o)return;let a=o.createOscillator(),l=o.createGain();a.type=i,a.frequency.setValueAtTime(n,o.currentTime+e),r&&a.frequency.exponentialRampToValueAtTime(r,o.currentTime+e+t),l.gain.setValueAtTime(s,o.currentTime+e),l.gain.exponentialRampToValueAtTime(1e-4,o.currentTime+e+t),a.connect(l).connect(o.destination),a.start(o.currentTime+e),a.stop(o.currentTime+e+t+.02)}var Gt={cash(){ti(1318,0,.12,"triangle",.25),ti(1760,.07,.25,"triangle",.22)},click(){ti(520,0,.05,"square",.08,380)},bell(){ti(880,0,.5,"sine",.18),ti(1320,.02,.4,"sine",.08)},pop(){ti(300,0,.12,"sine",.15,600)},angry(){ti(220,0,.3,"sawtooth",.1,140)},whoosh(){ti(180,0,.25,"sine",.08,420)}};function gs(n,e){return Math.ceil(n.baseCost*Math.pow(n.growth,e))}function Lo(n){let e=Math.sin(2*Math.PI*(n-.25)),t=Math.min(1,Math.max(0,(e+.2)/.5));return t*t*(3-2*t)}function Io(n,e){if(!e)return!0;switch(e.type){case"start":return!0;case"lifetime":return n.lifetimeCash>=e.value;case"staffLevel":return(n.staff[e.role]||0)>=e.value;case"upgradeLevel":return(n.upgrades[e.upgrade]||0)>=e.value;case"franchise":return n.franchise.count>=e.value;default:return!1}}function Uy(n,e){return e.locations?.[n.location]}function Ny(n,e){return Uy(n,e)?.economy??{trafficMult:1,styleDemand:{}}}function ni(n,e){let t=e.economy.prestige.tiers,i=0;return t.forEach((s,r)=>{n.franchise.count>=s.minFranchises&&(i=r)}),i}function $s(n,e){return e.economy.prestige.tiers[ni(n,e)]}function Ri(n){return Math.max(0,n.lifetimeCash-(n.franchise.lifetimeAtLast||0))}function Ci(n,e){let t=e.economy.prestige;return Math.round(t.milestoneLifetimeCash*Math.pow(n.franchise.count+1,t.requirementExponent??1.3))}function _s(n,e){return Ri(n)>=Ci(n,e)}function Js(n,e){return 1+(e.economy.prestige.ovenSpeedPerFranchise||0)*n.franchise.count}function Do(n,e,t=n.franchise.count){let i=e.economy.prestige;return Math.min(i.trafficMaxMult??1/0,1+(i.trafficPerFranchise||0)*t)}function Oy(n,e){return 1+e.economy.prestige.bonusPerPoint*n.franchise.points}function sn(n,e){let t=e.economy,i=t.upgrades,s=n.upgrades,r=n.staff.cashier,o=n.staff.cook,a=i.decor.trafficPerLevel*s.decor+i.neon.trafficPerLevel*s.neon,l=Ny(n,e),c=Do(n,e),h=Js(n,e),u=i.marketing?1+i.marketing.trafficMultPerLevel*(s.marketing||0):1,f=i.pizzaSchool?1+i.pizzaSchool.payMultPerLevel*(s.pizzaSchool||0):1,d=t.customers.spawnBaseSeconds/((1+a)*l.trafficMult*c*u),g=$s(n,e),_=i.oven.ovenSlotsBase+i.oven.ovenSlotsPerLevel*s.oven+g.ovenSlotsBonus+(i.megaOven?i.megaOven.ovenSlotsPerLevel*(s.megaOven||0):0),m=i.counter.maxQueueBase+i.counter.maxQueuePerLevel*s.counter+g.maxQueueBonus,p=1+i.cheese.cheeseMultPerLevel*s.cheese,x=Oy(n,e),y=t.cashier.orderSecondsBase/(1+t.cashier.orderSpeedPerLevel*r),b=1+t.cook.speedPerLevel*o,R=Object.entries(t.styles).filter(([Z,q])=>q.enabled&&n.styles[Z]).map(([,Z])=>Z.basePrice),E=R.length?R.reduce((Z,q)=>Z+q,0)/R.length:t.styles.margherita.basePrice,A=Math.max(t.prestige.minBakeSeconds||0,10/h),I=1/d,M=_/A,S=Math.min(I,M),O=E*(t.pizzaQuality.payBase+t.pizzaQuality.payPerQuality*.8)*p*x*f,V=S*O*1.1,$=(r>0?1:0)+(o>0?1:0),P=(n.staffing?.cashier||0)+(n.staffing?.cook||0),F=r>0?1+(n.staffing?.cashier||0):0,G=o>0?1+(n.staffing?.cook||0):0,K=Math.min(1,t.time.offlineBaseEfficiency+t.time.offlineEfficiencyPerStaffRole*$+(t.recruit?.offlineEfficiencyPerRecruit||0)*P);return{traffic:a,locEcon:l,tier:g,frTraffic:c,empireTraffic:u,empirePay:f,bakeSpeed:h,spawnBase:d,ovenSlots:_,maxQueue:m,cheeseMult:p,prestigeMult:x,cashierOrderSec:y,cashierLvl:r,cashierCount:F,cookSpeed:b,cookLvl:o,cookCount:G,idleRate:V,offlineEfficiency:K}}function Ju(n,e,t,i,s,r){let o=r.economy,a=o.styles[n].basePrice,l=o.pizzaQuality.payBase+o.pizzaQuality.payPerQuality*e,c=s?o.customers.wrongToppingPayMult:1;return a*l*t.cheeseMult*t.prestigeMult*(t.empirePay||1)*i.cashMult*c}function Pi(n,e){return Math.max(1,Math.floor(Ri(n)/e.economy.prestige.pointsDivisor))}function Ku(n,e){for(let t of e.economy.goals)if(!Io(n,t.condition))return t;return null}function Li(n){n.rngSeed=n.rngSeed+1831565813|0;let e=n.rngSeed;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ks(n,e){let t=e.reduce((s,r)=>s+r.weight,0),i=Li(n)*t;for(let s of e)if(i-=s.weight,i<=0)return s.key;return e[e.length-1].key}function qc(n,e,t){let i=t.economy.events[e];return i?(n.events.active.push({id:e,endsAt:n.gameTime+i.durationSeconds}),!0):!1}function Qu(n,e,t,i){let s=t.economy.time;if(n.events.active=n.events.active.filter(r=>n.gameTime>=r.endsAt?(i.push({type:"event_end",id:r.id}),!1):!0),n.events.active.length===0&&n.gameTime>=n.events.nextAt){let r=Object.entries(t.economy.events).map(([l,c])=>({key:l,weight:c.weight})),o=Ks(n,r);qc(n,o,t),i.push({type:"event_start",id:o});let a=s.randomEventMinSeconds+(s.randomEventMaxSeconds-s.randomEventMinSeconds)*Li(n);n.events.nextAt=n.gameTime+a}}function Uo(n,e){let t={spawnMult:1,patienceDrainMult:1,cashMult:1,styleDemand:{}};for(let i of n.events.active){let s=e.economy.events[i.id];if(s){t.spawnMult*=s.spawnMult,t.patienceDrainMult*=s.patienceDrainMult,t.cashMult*=s.cashMult;for(let[r,o]of Object.entries(s.styleDemand||{}))t.styleDemand[r]=(t.styleDemand[r]||1)*o}}return t}function ii(n,e){return n.customers.find(t=>t.id===e)}function Fy(n,e){return n.pizzas.find(t=>t.id===e)}function zy(n){return n.nextId++}function No(n,e,t){let i=ii(n,e);if(!i||i.state!=="waiting")return{ok:!1};i.state="ordered";let s={id:zy(n),customerId:i.id,style:i.style,stage:"dough",work:0,q:{dough:0,top:0,bake:0},topping:null,bakeLeft:0,readyTimer:0};return n.pizzas.push(s),n.stats.ordersTaken++,{ok:!0,type:"order_taken",customerId:i.id,pizzaId:s.id}}function Qs(n,e,t,i,s){let r=Fy(n,e);if(!r)return{ok:!1,reason:"noPizza"};let o=s.economy.manual,a=s.economy.stages;if(t==="stretch"){if(r.stage!=="dough")return{ok:!1,reason:"wrongStage"};let l=Math.max(0,Math.min(1,i.timeLeftFrac??0));return r.q.dough=i.finished?o.doughFinishMinQuality+(1-o.doughFinishMinQuality)*l:o.doughRushedQuality,r.work=0,r.stage="topping",n.stats.manualStretch++,{ok:!0,type:"stage",pizzaId:e,stage:"topping",auto:!1}}if(t==="topping"){if(r.stage!=="topping")return{ok:!1,reason:"wrongStage"};let l=ii(n,r.customerId),c=l&&i.topping===l.topping;return r.topping=i.topping,r.q.top=c?o.toppingCorrectQuality:o.toppingWrongQuality,r.work=0,r.stage="load",n.stats.manualTopping++,{ok:!0,type:"stage",pizzaId:e,stage:"load",auto:!1,correct:c}}if(t==="load"){if(r.stage!=="load")return{ok:!1,reason:"wrongStage"};let l=sn(n,s);if(ky(n)>=l.ovenSlots)return{ok:!1,reason:"ovenFull"};let c=o.ovenSweetZone/2,h=Math.abs((i.markerPos??.5)-.5),u=h<=c?1:Math.max(o.ovenMinQuality,1-(h-c)*2.2);return ju(n,r,u,s,"manual")}return t==="serve"?r.stage!=="ready"?{ok:!1,reason:"wrongStage"}:Yc(n,r,s):{ok:!1,reason:"unknownAction"}}function ky(n){return n.pizzas.filter(e=>e.stage==="baking").length}function ju(n,e,t,i,s){let r=i.economy.stages,o=i.economy.styles[e.style];e.q.bake=t,e.stage="baking";let a=i.economy.prestige.minBakeSeconds||0,l=Math.max(a,o.bakeSeconds/Js(n,i));return e.bakeLeft=l*(t>=r.perfectBakeQuality?r.perfectBakeSpeedMult:1),e.bakeTotal=e.bakeLeft,e.work=0,s==="manual"&&n.stats.manualLoad++,{ok:!0,type:"stage",pizzaId:e.id,stage:"baking",auto:s!=="manual",quality:t}}function Yc(n,e,t){let i=ii(n,e.customerId);if(n.pizzas=n.pizzas.filter(_=>_.id!==e.id),!i)return{ok:!1,reason:"noCustomer"};n.customers=n.customers.filter(_=>_.id!==i.id);let s=sn(n,t),r=Uo(n,t),o=t.economy,a=(e.q.dough+e.q.top+e.q.bake)/3,l=e.topping!==i.topping,c=Ju(e.style,a,s,r,l,t),h=Math.max(0,i.patience/i.maxPatience),u=o.customers.types[i.type].tipMult,f=l?o.customers.wrongToppingTipMult:1,d=c*o.customers.tipMax*h*u*f,g=c+d;return n.cash+=g,n.lifetimeCash+=g,n.stats.served++,{ok:!0,type:"served",pizzaId:e.id,customerId:i.id,customerType:i.type,amount:c,tip:d,total:g,big:g>=o.bigSaleThreshold,wrongTopping:l}}function ef(n,e,t){let i=t.economy.stages,s=ii(n,e.customerId);return e.stage==="dough"?(e.q.dough=i.autoDoughQuality,e.stage="topping",e.work=0,{ok:!0,type:"stage",pizzaId:e.id,stage:"topping",auto:!0}):e.stage==="topping"?(e.topping=s?s.topping:null,e.q.top=i.autoToppingQuality,e.stage="load",e.work=0,{ok:!0,type:"stage",pizzaId:e.id,stage:"load",auto:!0}):{ok:!1}}function tf(n,e,t){return ju(n,e,t.economy.stages.autoLoadQuality,t,"auto")}function nf(n,e,t,i=Date.now()){let s=t.economy.upgrades[e];if(!s||s.enabled===!1)return{ok:!1,reason:"locked"};if(s.requires&&n.franchise.count<(s.requires.franchises||0))return{ok:!1,reason:"needsFranchise",need:s.requires.franchises};let r=n.upgrades[e];if(r>=s.maxLevel)return{ok:!1,reason:"maxed"};let o=gs(s,r);return n.cash<o?{ok:!1,reason:"cash",cost:o}:(n.cash-=o,n.upgrades[e]=r+1,n.stats.upgradesBought++,{ok:!0,type:"bought",key:e,cost:o,first:rf(n)})}function sf(n,e,t){let i=t.economy.staff[e],s=n.staff[e];if(s>=i.maxLevel)return{ok:!1,reason:"maxed"};let r=gs(i,s);return n.cash<r?{ok:!1,reason:"cash",cost:r}:(n.cash-=r,n.staff[e]=s+1,s===0&&n.stats.staffHired++,{ok:!0,type:"hired",role:e,cost:r,first:rf(n)})}function rf(n){return n.flags.firstPurchase?!1:(n.flags.firstPurchase=!0,!0)}function of(n,e,t){let i=t.economy.recruit;if(!i||!i[e])return{ok:!1,reason:"unknown"};if(n.franchise.count<i.requiresFranchises)return{ok:!1,reason:"needsFranchise",need:i.requiresFranchises};if((n.staff[e]||0)<1)return{ok:!1,reason:"needsHire"};let s=$s(n,t).recruitCap,r=n.staffing[e]||0;if(r>=s)return{ok:!1,reason:"maxed",cap:s};let o=Math.ceil(i[e].baseCost*Math.pow(i[e].growth,r));return n.cash<o?{ok:!1,reason:"cash",cost:o}:(n.cash-=o,n.staffing[e]=r+1,{ok:!0,type:"recruited",role:e,cost:o,count:r+1,cap:s})}function Zc(n,e){return _s(n,e)}function af(n,e,t,i=Date.now()){let s=Pi(n,e),r=t(e,i);return r.unlockedLocations={...n.unlockedLocations},r.franchise={points:n.franchise.points+s,count:n.franchise.count+1,lifetimeAtLast:n.lifetimeCash,readyNotified:!1},r.styles={...n.styles},r.tutorialStep=n.tutorialStep,r.tutorialDone=n.tutorialDone,r.stats={...n.stats},r.lifetimeCash=n.lifetimeCash,r.settings={...n.settings},r.cosmetics={...n.cosmetics},r.flags={...n.flags},r.rngSeed=n.rngSeed,r.gameTime=n.gameTime,r.dayClock=n.dayClock,r.createdAt=n.createdAt,r.events={active:[],nextAt:n.gameTime+240},{state:r,gain:s}}function cf(n,e,t){return t.locations?.[e]?n.unlockedLocations[e]?n.location===e?{ok:!1,reason:"current"}:(n.location=e,n.customers=[],n.pizzas=[],n.cashierTimer=0,n.spawnTimer=t.economy.customers.spawnBaseSeconds,{ok:!0,type:"moved",location:e}):{ok:!1,reason:"locked"}:{ok:!1,reason:"unknown"}}var By=12;function $c(n,e,t,i=[]){let s=t.economy;n.gameTime+=e,n.dayClock=(n.dayClock+e/s.time.dayLengthSeconds)%1,Qu(n,e,t,i);let r=Uo(n,t),o=sn(n,t),a=Lo(n.dayClock);return Hy(n,t,i),Vy(n,t,i),!n.franchise.readyNotified&&_s(n,t)&&(n.franchise.readyNotified=!0,i.push({type:"franchise_ready"})),Gy(n,e,r,t,i),Wy(n,e,r,o,a,t,i),Xy(n,e,o,t,i),qy(n,e,o,t,i),Yy(n,e,i),Zy(n,t,i),i}function Hy(n,e,t){for(let[i,s]of Object.entries(e.economy.styles))s.enabled&&!n.styles[i]&&Io(n,s.unlock)&&(n.styles[i]=!0,t.push({type:"style_unlocked",style:i}))}function Vy(n,e,t){if(e.locations)for(let[i,s]of Object.entries(e.locations))!n.unlockedLocations[i]&&Io(n,s.unlock)&&(n.unlockedLocations[i]=!0,t.push({type:"location_unlocked",location:i}))}function Gy(n,e,t,i,s){for(let r of[...n.customers])if(r.patience-=e*t.patienceDrainMult,r.patience<=0){let o=Math.min(n.cash,i.economy.customers.angryPenalty);n.cash-=o,n.customers=n.customers.filter(a=>a.id!==r.id),n.pizzas=n.pizzas.filter(a=>a.customerId!==r.id),n.stats.angry++,s.push({type:"angry",customerId:r.id,customerType:r.type,nameIdx:r.nameIdx,penalty:o})}}function Wy(n,e,t,i,s,r,o){let a=r.economy.customers,l=a.nightSpawnMult+(1-a.nightSpawnMult)*s;n.spawnTimer-=e*t.spawnMult*l;let c=0;for(;n.spawnTimer<=0&&c++<20;){let h=i.spawnBase*(1+(Li(n)*2-1)*a.spawnJitter);if(n.spawnTimer+=h,n.customers.filter(p=>p.state==="waiting").length>=i.maxQueue){n.stats.turnedAway++,o.push({type:"turned_away"});continue}let f=Ks(n,Object.entries(a.types).map(([p,x])=>({key:p,weight:x.weight}))),d=Object.keys(r.economy.styles).filter(p=>n.styles[p]).map(p=>({key:p,weight:(t.styleDemand[p]||1)*(i.locEcon.styleDemand[p]||1)})),g=Ks(n,d),_=a.toppings[Math.floor(Li(n)*a.toppings.length)],m={id:n.nextId++,type:f,style:g,topping:_,nameIdx:1+Math.floor(Li(n)*5),patience:a.types[f].patience,maxPatience:a.types[f].patience,state:"waiting"};n.customers.push(m),o.push({type:"arrived",customerId:m.id})}}function Xy(n,e,t,i,s){let r=t.cashierCount;if(r===0)return;let o=()=>n.customers.filter(l=>l.state==="waiting").sort((l,c)=>l.id-c.id),a=n.pizzas.filter(l=>l.stage==="ready");for(;n.cashierTimers.length<r;)n.cashierTimers.push(0);n.cashierTimers.length=r;for(let l=0;l<r;l++)if(o().length>0){if(n.cashierTimers[l]+=e,n.cashierTimers[l]>=t.cashierOrderSec){n.cashierTimers[l]=0;let c=o()[0],h=No(n,c.id,i);h.ok&&s.push({...h,auto:!0})}}else n.cashierTimers[l]=0;o().length===0&&a.length===0?(n.cashierIdle+=e,lf(n,"cashier",s)):(n.cashierIdle=0,n.idleNotified.cashier=!1);for(let l of a)if(l.readyTimer+=e,l.readyTimer>=i.economy.stages.autoServeDelaySeconds){let c=Yc(n,l,i);c.ok&&s.push({...c,auto:!0})}}function qy(n,e,t,i,s){let r=t.cookCount;if(r===0)return;let o=i.economy.stages,a=n.pizzas.filter(c=>c.stage==="dough"||c.stage==="topping").sort((c,h)=>c.id-h.id).slice(0,r);if(a.length>0){n.cookIdle=0,n.idleNotified.cook=!1;for(let c of a){c.work+=e*t.cookSpeed;let h=c.stage==="dough"?o.autoDoughSeconds:o.autoToppingSeconds;if(c.work>=h){let u=ef(n,c,i);u.ok&&s.push({...u,auto:!0})}}}else n.cookIdle+=e,lf(n,"cook",s);let l=n.pizzas.filter(c=>c.stage==="load").sort((c,h)=>c.id-h.id);for(let c of l){if(n.pizzas.filter(f=>f.stage==="baking").length>=t.ovenSlots)break;let u=tf(n,c,i);u.ok&&s.push(u)}}function lf(n,e,t){(e==="cook"?n.cookIdle:n.cashierIdle)>=By&&!n.idleNotified[e]&&(n.idleNotified[e]=!0,t.push({type:"idle_staff",role:e}))}function Yy(n,e,t){for(let i of n.pizzas)i.stage==="baking"&&(i.bakeLeft-=e,i.bakeLeft<=0&&(i.stage="ready",i.bakeLeft=0,t.push({type:"stage",pizzaId:i.id,stage:"ready",auto:!1})))}function Zy(n,e,t){if(n.tutorialDone)return;let i=e.economy.tutorial;for(;n.tutorialStep<i.length;){let s=i[n.tutorialStep].check;if((n.stats[s.stat]||0)<s.gte)break;n.tutorialStep++,t.push({type:"tutorial_step",step:n.tutorialStep})}n.tutorialStep>=i.length&&(n.tutorialDone=!0,t.push({type:"tutorial_done"}))}function hf(n,e,t){let i=t.economy.time,s=Math.max(0,(e-n.savedAt)/1e3),r=Math.min(s,i.offlineCapSeconds),o=sn(n,t),a=Math.floor(r*o.idleRate*o.offlineEfficiency);return{rawSeconds:s,elapsed:r,capped:s>i.offlineCapSeconds,earned:a,rate:o.idleRate*o.offlineEfficiency}}function Jc(n,e,t,i=1){let s=Math.floor(e.earned*i);return n.cash+=s,n.lifetimeCash+=s,n.customers=[],n.pizzas=[],n.cashierTimer=0,n.spawnTimer=t.economy.customers.spawnBaseSeconds,n.gameTime+=e.elapsed,n.dayClock=(n.dayClock+e.elapsed/t.economy.time.dayLengthSeconds)%1,n.events.active=[],n.events.nextAt=n.gameTime+240,s}var Kc=new Map;function Bo(n){let{roughness:e,metalness:t,...i}=n;return i}function gf(n,e={}){let t=n+"|"+JSON.stringify(e);return Kc.has(t)||Kc.set(t,new $t({color:n,...Bo(e)})),Kc.get(t)}function xs(n,e={}){return new $t({color:n,...Bo(e)})}function zn(n,e,t,i=1,s={}){let r=new $t({color:e,emissive:new me(t),emissiveIntensity:.2,...Bo(s)});return r.userData.glow=i,n.glowMats.push(r),r}var mn=new $t({vertexColors:!0}),Ui=new $t({vertexColors:!0,flatShading:!0}),nl=new ds({vertexColors:!0,shininess:60,specular:new me("#555555")}),Qc=new Map;function Lt(n,e){return Qc.has(n)||Qc.set(n,e()),Qc.get(n)}var ke={box:()=>Lt("box",()=>new wi(1,1,1)),cyl:(n=14)=>Lt("cyl"+n,()=>new ei(1,1,1,n)),cone:(n=14)=>Lt("cone"+n,()=>new po(1,1,n)),sphere:(n=16,e=12)=>Lt(`sph${n}_${e}`,()=>new Ei(1,n,e)),dome:(n=16,e=8)=>Lt(`dome${n}_${e}`,()=>new Ei(1,n,e,0,Math.PI*2,0,Math.PI/2)),ico:(n=0)=>Lt("ico"+n,()=>new mo(1,n)),torus:(n=.2,e=20)=>Lt(`tor${n}_${e}`,()=>new _o(1,n,8,e)),capsule:(n,e)=>Lt(`cap${n}_${e}`,()=>new uo(n,e,5,12)),ring:()=>Lt("ring",()=>new go(.5,.56,32)),circle:()=>Lt("circle",()=>new fo(1,24))},jc=new WeakMap;function $y(n){return n.index?(jc.has(n)||jc.set(n,n.toNonIndexed()),jc.get(n)):n}var el=new ft,uf=new xn,ff=new us,df=new C,pf=new C,Oo=new C,Fo=new C,mf=new We,zo=new me,Qe=class{constructor(){this.pos=[],this.nor=[],this.col=[]}add(e,t,i=[0,0,0],s=[0,0,0],r=[1,1,1]){let o=$y(e);ff.set(s[0],s[1],s[2]),uf.setFromEuler(ff),df.set(i[0],i[1],i[2]),pf.set(r[0],r[1],r[2]),el.compose(df,uf,pf),mf.getNormalMatrix(el),zo.set(t);let a=o.attributes.position,l=o.attributes.normal;for(let c=0;c<a.count;c++)Oo.fromBufferAttribute(a,c).applyMatrix4(el),Fo.fromBufferAttribute(l,c).applyMatrix3(mf).normalize(),this.pos.push(Oo.x,Oo.y,Oo.z),this.nor.push(Fo.x,Fo.y,Fo.z),this.col.push(zo.r,zo.g,zo.b);return this}box(e,t,i,s=[0,0,0]){return this.add(ke.box(),t,[i[0],i[1]+e[1]/2,i[2]],s,e)}boxC(e,t,i,s=[0,0,0]){return this.add(ke.box(),t,i,s,e)}cyl(e,t,i,s,r,o=[0,0,0],a=14){let l=e===t?ke.cyl(a):Lt(`cylT${(e/t).toFixed(3)}_${a}`,()=>new ei(e/t,1,1,a));return this.add(l,s,[r[0],r[1]+i/2,r[2]],o,[t,i,t])}cylC(e,t,i,s,r=[0,0,0],o=12){return this.add(ke.cyl(o),i,s,r,[e,t,e])}cone(e,t,i,s,r=[0,0,0],o=14){return this.add(ke.cone(o),i,[s[0],s[1]+t/2,s[2]],r,[e,t,e])}sphere(e,t,i,s=[1,1,1],r=[16,12]){return this.add(ke.sphere(r[0],r[1]),t,i,[0,0,0],[e*s[0],e*s[1],e*s[2]])}dome(e,t,i,s=[1,1,1],r=[0,0,0]){return this.add(ke.dome(),t,i,r,[e*s[0],e*s[1],e*s[2]])}ico(e,t,i,s=[1,1,1],r=[0,0,0]){return this.add(ke.ico(1),t,i,r,[e*s[0],e*s[1],e*s[2]])}torus(e,t,i,s,r=[0,0,0],o=20){let a=ke.torus(Number((t/e).toFixed(3)),o);return this.add(a,i,s,r,[e,e,e])}get empty(){return this.pos.length===0}geometry(){let e=new _t;return e.setAttribute("position",new $e(this.pos,3)),e.setAttribute("normal",new $e(this.nor,3)),e.setAttribute("color",new $e(this.col,3)),e.computeBoundingSphere(),e}mesh(e=mn,{cast:t=!0,receive:i=!0}={}){let s=new Pe(this.geometry(),e);return s.castShadow=t,s.receiveShadow=i,s}},ys=new Map;function Jy(n,e){let t=document.createElement("canvas");t.width=t.height=n;let i=t.getContext("2d");e(i,n);let s=new Gs(t);return s.colorSpace=gt,s.wrapS=s.wrapT=Ns,s.anisotropy=2,s}function Ii(n){let e=n;return()=>(e=(e*1664525+1013904223)%4294967296,e/4294967296)}function Di(n,e,t,i,s,r=!0){for(let o=0;o<i;o++){let a=t()*s;n.fillStyle=r?`rgba(255,255,255,${a})`:`rgba(0,0,0,${a})`,n.fillRect(t()*e,t()*e,1+t()*2,1+t()*2)}}var Ky={pavers(n,e){let t=Ii(7);n.fillStyle="#b89a78",n.fillRect(0,0,e,e);let i=4,s=e/i;for(let r=0;r<i*2;r++)for(let o=-1;o<i;o++){let a=r%2*(s/2),l=196+Math.floor(t()*34);n.fillStyle=`rgb(${l+22},${l-6},${l-44})`,n.fillRect(o*s+a+2,r*(s/2)+2,s-4,s/2-4)}Di(n,e,t,900,.07,!1),Di(n,e,t,500,.06,!0)},asphalt(n,e){let t=Ii(11);n.fillStyle="#4b4e55",n.fillRect(0,0,e,e),Di(n,e,t,2600,.09,!0),Di(n,e,t,2600,.14,!1)},brick(n,e){let t=Ii(3);n.fillStyle="#d9c7b0",n.fillRect(0,0,e,e);let i=8,s=e/i,r=e/4;for(let o=0;o<i;o++)for(let a=-1;a<4;a++){let l=o%2*(r/2),c=t();n.fillStyle=`rgb(${150+c*40},${66+c*26},${48+c*18})`,n.fillRect(a*r+l+2,o*s+2,r-4,s-4)}Di(n,e,t,700,.08,!1)},wood(n,e){let t=Ii(5),i=4,s=e/i;for(let r=0;r<i;r++){let o=t();n.fillStyle=`rgb(${176+o*26},${118+o*22},${66+o*16})`,n.fillRect(r*s,0,s,e),n.fillStyle="rgba(70,40,15,0.5)",n.fillRect(r*s,0,2,e);for(let a=0;a<14;a++)n.fillStyle=`rgba(90,55,25,${.05+t()*.1})`,n.fillRect(r*s+t()*s,0,1+t()*2,e)}},plaster(n,e){let t=Ii(9);n.fillStyle="#ffffff",n.fillRect(0,0,e,e),Di(n,e,t,2200,.05,!1);for(let i=0;i<14;i++)n.fillStyle=`rgba(0,0,0,${.015+t()*.02})`,n.fillRect(t()*e,t()*e,30+t()*80,8+t()*30)},tiles(n,e){n.fillStyle="#d7d2c8",n.fillRect(0,0,e,e);let t=4,i=e/t;for(let s=0;s<t;s++)for(let r=0;r<t;r++)n.fillStyle=(r+s)%2?"#fbf7ee":"#f1ebde",n.fillRect(r*i+2,s*i+2,i-4,i-4)},checker(n,e){let i=e/4;for(let s=0;s<4;s++)for(let r=0;r<4;r++)n.fillStyle=(r+s)%2?"#f4ead8":"#b5483a",n.fillRect(r*i,s*i,i,i)},stripes(n,e){n.fillStyle="#fff6e6",n.fillRect(0,0,e,e),n.fillStyle="#d8402f",n.fillRect(0,0,e/2,e);let t=Ii(2);Di(n,e,t,500,.04,!1)},rooftiles(n,e){let t=Ii(13);n.fillStyle="#8f3f2a",n.fillRect(0,0,e,e);let i=6,s=e/i,r=e/6;for(let o=0;o<i;o++)for(let a=-1;a<6;a++){let l=o%2*(r/2),c=t();n.fillStyle=`rgb(${186+c*30},${92+c*24},${58+c*16})`,n.beginPath(),n.ellipse(a*r+l+r/2,o*s+s*.35,r/2-1.5,s*.62,0,0,Math.PI),n.fill()}}};function Qy(n,e=1,t=1){ys.has(n)||ys.set(n,Jy(256,Ky[n]));let i=`${n}|${e}|${t}`;if(!ys.has(i)){let s=ys.get(n).clone();s.repeat.set(e,t),s.needsUpdate=!0,ys.set(i,s)}return ys.get(i)}var tl=new Map;function bn(n,e=1,t=1,i={}){let s=`${n}|${e}|${t}|${JSON.stringify(i)}`;return tl.has(s)||tl.set(s,new $t({map:Qy(n,e,t),...Bo(i)})),tl.get(s)}function Sn(n,e,t,i=[1,1],s={},r=[0,0,0]){let o=new Pe(ke.box(),bn(e,i[0],i[1],s));return o.scale.set(n[0],n[1],n[2]),o.position.set(t[0],t[1]+n[1]/2,t[2]),o.rotation.set(r[0],r[1],r[2]),o.castShadow=!0,o.receiveShadow=!0,o}var jy=new vt({color:"#000000",transparent:!0,opacity:.2,depthWrite:!1});function _f(n=.34){let e=new Pe(ke.circle(),jy);return e.rotation.x=-Math.PI/2,e.scale.setScalar(n),e.position.y=.02,e.renderOrder=1,e}var ko=null;function Ho(n,e,t="#ffc56b",i=.55){if(!ko){let o=document.createElement("canvas");o.width=o.height=128;let a=o.getContext("2d"),l=a.createRadialGradient(64,64,0,64,64,64);l.addColorStop(0,"rgba(255,255,255,1)"),l.addColorStop(.5,"rgba(255,255,255,0.35)"),l.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=l,a.fillRect(0,0,128,128),ko=new Gs(o),ko.colorSpace=gt}let s=new vt({map:ko,color:t,transparent:!0,opacity:0,depthWrite:!1,blending:zr,toneMapped:!1});s.userData.base=i,n.nightFades.push(s);let r=new Pe(new Mn(e*2,e*2),s);return r.rotation.x=-Math.PI/2,r.renderOrder=2,r}var il=new Map;function ex(n){if(!il.has(n.uuid)){let e=new vt({transparent:n.transparent,opacity:n.opacity,side:n.side,depthWrite:n.depthWrite,toneMapped:!1});e.color=n.color,e.map=n.map||null,e.vertexColors=!!n.vertexColors,il.set(n.uuid,e)}return il.get(n.uuid)}function sl(n){n.traverse(e=>{!e.isMesh||!e.material||Array.isArray(e.material)||e.material.isShaderMaterial||e.userData.origMat||(e.userData.origMat=e.material,e.material=ex(e.material))})}function yf(n){n.traverse(e=>{e.userData.origMat&&(e.material=e.userData.origMat,delete e.userData.origMat)})}var kn=new C,It=n=>new me(n),Bn={dayTop:It("#2f86d9"),dayHorizon:It("#c9ebfb"),duskTop:It("#3d4f9a"),duskHorizon:It("#ffab6b"),nightTop:It("#060a1c"),nightHorizon:It("#1b2a52")},tx=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,nx=`
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
}`;function xf(n,e){let t=new Bs({canvas:n,antialias:!0,powerPreference:"high-performance"}),i=Math.min(globalThis.devicePixelRatio||1,2),s=i,r="auto";t.setPixelRatio(s),t.shadowMap.enabled=!0,t.shadowMap.type=So,t.shadowMap.autoUpdate=!1,t.outputColorSpace=gt,t.toneMapping=Ic,t.toneMappingExposure=1.05;let o=new so,a=new io(Bn.dayHorizon.clone(),45,150);o.fog=a;let l=new Ft(e.camera.fov,1,.2,400),c=new yo(16777215,11569512,1),h=new Mo(16774108,3);h.castShadow=!0,h.shadow.mapSize.set(1536,1536),Object.assign(h.shadow.camera,{left:-15,right:15,top:15,bottom:-15,near:1,far:90}),h.shadow.bias=-4e-4,h.shadow.normalBias=.035,h.shadow.radius=2.5;let u=new vo(16757865,0,16,1.6);u.position.set(.2,2.6,1.6),o.add(c,h,h.target,u);let f=new dn({uniforms:{top:{value:Bn.dayTop.clone()},horizon:{value:Bn.dayHorizon.clone()},sunDir:{value:new C(0,1,0)},sunColor:{value:It("#fff1c4")},sunPower:{value:1}},vertexShader:tx,fragmentShader:nx,side:zt,depthWrite:!1,fog:!1,toneMapped:!1}),d=new Pe(new Ei(300,24,16),f);d.frustumCulled=!1,o.add(d);let g=[];for(let v=0;v<420;v++){let D=Math.random()*Math.PI*2,J=.08+Math.random()*.92,Y=Math.sqrt(1-J*J);g.push(Math.cos(D)*Y*280,J*280,Math.sin(D)*Y*280)}let _=new _t;_.setAttribute("position",new $e(g,3));let m=new Vs({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),p=new oo(_,m);p.frustumCulled=!1,o.add(p);let x={sky:d,stars:p,moon:null,clouds:[]},y=new Pe(ke.sphere(),new vt({color:"#f4f1de",fog:!1}));y.scale.setScalar(9),o.add(y),x.moon=y;let b=new $t({color:16777215,fog:!1}),R=[];for(let v=0;v<9;v++){let D=new Qe,J=4+Math.floor(Math.random()*3);for(let Q=0;Q<J;Q++)D.sphere(2.2+Math.random()*2.2,"#ffffff",[(Q-J/2)*2.6+Math.random(),Math.random()*1.2,Math.random()*2],[1.25,.62,1],[10,8]);let Y=new Pe(D.geometry(),b);Y.position.set(-110+Math.random()*220,26+Math.random()*26,-60-Math.random()*90),Y.scale.setScalar(1+Math.random()*1.4),Y.userData.speed=.35+Math.random()*.5,o.add(Y),R.push(Y),x.clouds.push(Y)}let E={pos:new C,target:new C,fov:46,zoom:1},A={pos:new C,look:new C},I={pos:new C,look:new C},M={amount:0,time:0},S={renderer:t,scene:o,camera:l,hemi:c,sun:h,daylight:.8,time:0,look:"3d",lastLayout:null,glowMats:[],nightFades:[],updaters:[],signs:[]};function O(v,D){t.setSize(v,D,!1),l.aspect=v/D;let J=Math.max(0,.75-l.aspect);l.fov=E.fov+J*(S.look==="2d"?6:40),l.updateProjectionMatrix(),V()}function V(){let v=(1+Math.max(0,.75-l.aspect)*1.2)*E.zoom,D=E.pos.clone().sub(E.target);I.pos.copy(E.target).add(D.multiplyScalar(v)),I.look.copy(E.target)}function $(v){if(!v)return V();let D=new C(...v);I.look.copy(D).add(new C(0,.25,0)),S.look==="2d"?I.pos.copy(D).add(new C(0,.8,24)):I.pos.copy(D).add(new C(0,2.2,4.2))}function P(v,D=!0){S.lastLayout=v,E.zoom=v.camera.zoom||1,E.target.set(...v.camera.target),S.look==="2d"?(E.fov=13,E.pos.copy(E.target).add(new C(0,1.6,40))):(E.fov=v.camera.fov,E.pos.set(...v.camera.position)),u.position.set(v.cx??.2,2.7,1.4),V(),D&&(A.pos.copy(I.pos),A.look.copy(I.look)),_e()}function F(v){M.amount=Math.max(M.amount,v),M.time=.35}let G=new C,K=new me,Z=new me,q=new me,ee=It("#ffffff"),ne=It("#2c3558"),fe=It("#ffc0a0"),W=It("#fff3dc"),j=It("#ff9a55"),he=It("#9db8ff"),Me=It("#b08968"),ve=It("#3a4468"),Ne=It("#ffffff"),Fe=It("#8ea2dc");function Re(v,D){S.time+=v;let J=1-Math.exp(-v*4);if(A.pos.lerp(I.pos,J),A.look.lerp(I.look,J),l.position.copy(A.pos),l.position.x+=Math.sin(S.time*.22)*.12,M.time>0){M.time-=v;let be=M.amount*Math.max(0,M.time/.35);l.position.x+=(Math.random()-.5)*be,l.position.y+=(Math.random()-.5)*be}else M.amount=0;l.lookAt(A.look);let Y=Lo(D),Q=1-Y;S.daylight=Y;let xe=2*Math.PI*(D-.25);G.set(Math.cos(xe)*.6,Math.sin(xe),.55).normalize();let oe=Math.max(0,1-Math.abs(Y-.3)*3.2);K.copy(Bn.nightTop).lerp(Bn.dayTop,Y).lerp(Bn.duskTop,oe*.6),Z.copy(Bn.nightHorizon).lerp(Bn.dayHorizon,Y).lerp(Bn.duskHorizon,oe*.85),f.uniforms.top.value.copy(K),f.uniforms.horizon.value.copy(Z),f.uniforms.sunDir.value.copy(G),f.uniforms.sunPower.value=Math.min(1,Y*1.6+oe*.6),f.uniforms.sunColor.value.copy(W).lerp(j,oe),o.fog&&o.fog.color.copy(Z),S.look==="2d"&&o.background&&o.background.copy(Z);let pe=G.y>-.02;pe?(kn.copy(G),kn.y=Math.max(.62,kn.y)):kn.set(-.45,.8,.6),h.position.copy(kn.normalize()).multiplyScalar(40),h.target.position.set(0,0,0),pe?(h.color.copy(j).lerp(W,Math.min(1,Y*1.4)),h.intensity=.3+2.3*Y):(h.color.copy(he),h.intensity=1),c.color.copy(Fe).lerp(Ne,Y),c.groundColor.copy(ve).lerp(Me,Y),c.intensity=1.2+.55*Y,t.toneMappingExposure=1.02+Q*.2,y.position.copy(G).multiplyScalar(-250),y.visible=G.y<.25,m.opacity=Math.pow(Q,2.2),q.copy(ne).lerp(ee,Y).lerp(fe,oe*.55),b.color.copy(q);for(let be of R)be.position.x+=be.userData.speed*v,be.position.x>130&&(be.position.x=-130);let Te=.08+1.7*Q;for(let be of S.glowMats)be.emissiveIntensity=Te*(be.userData.glow??1);u.intensity=38*Q;for(let be of S.nightFades)be.opacity=(be.userData.base||.5)*Q;for(let be of S.updaters)be(v,S.time,Y);Ke++,Ke%2===0&&(t.shadowMap.needsUpdate=!0),r==="auto"&&Ue(v)}let Ke=0;function z(v){t.shadowMap.enabled!==v&&(t.shadowMap.enabled=v,h.castShadow=v,o.traverse(D=>{D.material&&(Array.isArray(D.material)?D.material:[D.material]).forEach(J=>{J.needsUpdate=!0})}))}function Rt(v){r=v,ge.frames=0,ge.time=0,ge.warmup=3,s=v==="low"?1:i,t.setPixelRatio(s),u.visible=v!=="low",z(v!=="low"),_e()}let ge={frames:0,time:0,warmup:3};function Ue(v){if(ge.warmup>0){ge.warmup-=v;return}if(ge.frames++,ge.time+=v,ge.time<2)return;let D=ge.frames/ge.time;ge.frames=0,ge.time=0,D<45&&s>1?(s=Math.max(1,s-.25),t.setPixelRatio(s),_e(),S.pixelRatio=s):D<30&&t.shadowMap.enabled&&s<=1&&z(!1)}function _e(){let v=n.clientWidth||globalThis.innerWidth,D=n.clientHeight||globalThis.innerHeight;O(v,D)}function ct(v){kn.set(v[0],v[1],v[2]).project(l);let D=n.clientWidth,J=n.clientHeight;return{x:(kn.x*.5+.5)*D,y:(-kn.y*.5+.5)*J,front:kn.z<1,w:D,h:J}}function Be(v){let D=v==="2d";S.look=D?"2d":"3d",D?sl(o):yf(o),x.sky.visible=!D,x.stars.visible=!D,x.moon&&(x.moon.visible=!D);for(let J of x.clouds)J.visible=!D;o.fog=D?null:a,o.background=D?new me("#bfe6fb"):null,z(!D&&r!=="low"),S.lastLayout&&P(S.lastLayout,!0)}function T(v){S.look==="2d"&&sl(v)}return Object.assign(S,{update:Re,focus:$,shakeCam:F,resize:_e,toScreen:ct,recomputeGoal:V,setLocation:P,setQuality:Rt,setLook:Be,styleNew:T}),P(e),S}var Ni="#f3ede0",vf=new me;function si(n,e,t=0){return vf.set(n).offsetHSL(0,t,e),"#"+vf.getHexString()}function Mf(n){let e=(Math.abs(Math.round(n))*9301+49297)%4294967296;return()=>(e=(e*1664525+1013904223)%4294967296,e/4294967296)}function bf(n,e){let t=new ot;t.name="location:"+n.id;let i=new Pe(new Mn(200,200),bn("pavers",90,90));i.rotation.x=-Math.PI/2,i.receiveShadow=!0,t.add(i);let s={env:e,group:t,solid:new Qe,flat:new Qe,glassDark:new Qe,glassLit:new Qe,lampGlow:new Qe,lights:0};for(let r of n.props){let o=ix[r.type];o?o(r,s):console.warn("[props] unknown prop type",r.type)}if(s.solid.empty||t.add(s.solid.mesh(mn)),s.flat.empty||t.add(s.flat.mesh(Ui)),s.glassDark.empty||t.add(s.glassDark.mesh(mn,{cast:!1})),!s.glassLit.empty){let r=zn(e,"#ffffff","#ffb45e",.5,{vertexColors:!0,roughness:.3});t.add(s.glassLit.mesh(r,{cast:!1}))}if(!s.lampGlow.empty){let r=zn(e,"#fff3d0","#ffc56b",2.2);t.add(s.lampGlow.mesh(r,{cast:!1,receive:!1}))}return t}var ix={road(n,{group:e,solid:t,env:i}){let s=n.z,r=n.width,o=new Pe(new Mn(200,r),bn("asphalt",60,3));o.rotation.x=-Math.PI/2,o.position.set(0,.012,s),o.receiveShadow=!0,e.add(o);for(let a=-96;a<=96;a+=4.5)t.box([1.9,.012,.14],"#f2e3a6",[a,.014,s]);for(let a of[-1,1])t.box([200,.16,.34],"#cfc8bc",[0,0,s+a*(r/2+.17)]),t.box([200,.012,.1],"#e9e4d8",[0,.014,s+a*(r/2-.35)]);for(let a=0;a<6;a++)t.box([.55,.012,r-1.2],"#ecebe4",[9.5+a*1.05,.015,s]);t.cyl(.45,.45,.012,"#3a3c42",[-3.5,.016,s+1.2],[0,0,0],16),sx(n,e,i)},building(n,{solid:e,glassDark:t,glassLit:i}){let[s,r,o]=n.size,[a,,l]=n.pos,c=n.color,h=Mf(Math.round(a*7+r*13+5)),u=l+o/2,f=3.3;e.box([s,r,o],c,[a,0,l]),e.box([s+.08,f,o+.08],si(c,-.13,-.05),[a,0,l]),e.box([s+.3,.18,o+.3],Ni,[a,f,l]),e.box([s+.5,.26,o+.5],Ni,[a,r,l]),e.box([s+.16,.55,o+.16],si(c,-.08),[a,r+.26,l]),e.box([s-.4,.1,o-.4],"#6b6f76",[a,r+.3,l]);let d=n.awning||["#d8402f","#2f7d6a","#e9a23b","#4a6fa5"][Math.floor(h()*4)],g=s*.5,_=a-s*.16;e.box([g+.24,2.15,.1],Ni,[_,.45,u+.02]),(h()<.7?i:t).box([g,1.9,.08],"#9fc3d6",[_,.58,u+.06]),e.box([g+.3,.45,.2],si(c,-.22),[_,0,u+.06]),e.box([1.15,2.4,.1],Ni,[a+s*.33,0,u+.02]),e.box([.95,2.25,.1],si(d,-.18),[a+s*.33,0,u+.06]),t.box([.6,.8,.06],"#9fc3d6",[a+s*.33,1.2,u+.1]),e.boxC([g+.6,.07,1.25],d,[_,2.82,u+.58],[.34,0,0]),e.box([g+.6,.22,.05],si(d,.1),[_,2.48,u+1.16]);let m=Math.max(1,Math.floor((r-f-.9)/2.25)),p=Math.max(1,Math.floor((s-.7)/1.75)),x=["#2f6b5a","#8a3b2a","#3d5a80","#5b4636"][Math.floor(h()*4)],y=h()<.6;for(let R=0;R<m;R++)for(let E=0;E<p;E++){let A=a-(p-1)*1.75/2+E*1.75,I=f+.75+R*2.25;e.box([1.06,1.46,.08],Ni,[A,I-.08,u+.01]),(h()<.42?i:t).box([.88,1.3,.06],"#8fb4cc",[A,I,u+.05]),e.box([.05,1.3,.04],Ni,[A,I,u+.09]),e.box([1.2,.09,.2],Ni,[A,I-.12,u+.06]),y?(e.box([.22,1.32,.05],x,[A-.58,I,u+.05]),e.box([.22,1.32,.05],x,[A+.58,I,u+.05])):h()<.3&&(e.box([1.4,.08,.5],"#4a4e57",[A,I-.2,u+.28]),e.box([1.4,.5,.04],"#4a4e57",[A,I-.12,u+.52]))}let b=Math.max(1,Math.floor((o-.8)/2.1));for(let R of[-1,1])for(let E=0;E<m;E++)for(let A=0;A<b;A++){let I=l-(b-1)*2.1/2+A*2.1,M=f+.75+E*2.25;(h()<.35?i:t).box([.06,1.3,.88],"#8fb4cc",[a+R*(s/2+.02),M,I])}h()<.7&&e.box([1.1,.7,.9],"#9aa0a8",[a-s*.22,r+.4,l-o*.1]),h()<.6&&(e.cyl(.6,.6,1.2,"#7b5a3c",[a+s*.2,r+.9,l+o*.1]),e.cone(.68,.45,"#5b4636",[a+s*.2,r+2.1,l+o*.1]),e.cyl(.05,.05,.5,"#4a4e57",[a+s*.2-.4,r+.4,l+o*.1]),e.cyl(.05,.05,.5,"#4a4e57",[a+s*.2+.4,r+.4,l+o*.1])),h()<.5&&e.box([.5,1.3,.5],si(c,-.2),[a+s*.36,r+.3,l-o*.25])},tree(n,{solid:e,flat:t}){let[i,,s]=n.pos,r=n.scale||1,o=Mf(Math.round(i*31+s*17)),a=["#5fa052","#6fb35f","#4f8f47","#7dbb62"];e.cyl(.92,.92,.03,"#5a5148",[i,.012,s],[0,0,0],16),e.cyl(.13*r,.2*r,1.9*r,"#7b5236",[i,0,s]);let l=[[0,2.7,0,1.3],[.75,2.25,.25,.95],[-.7,2.3,-.2,.9],[.1,3.5,.05,.85],[-.15,2.3,.7,.8]];for(let[c,h,u,f]of l)t.ico(f*r,a[Math.floor(o()*a.length)],[i+c*r,h*r,s+u*r],[1,.92,1],[o()*3,o()*3,0])},bush(n,{flat:e}){let[t,,i]=n.pos;e.ico(.55,"#5fa052",[t,.4,i],[1.2,.8,1]),e.ico(.42,"#6fb35f",[t+.5,.33,i+.15],[1,.8,1],[1,2,0]),e.ico(.4,"#4f8f47",[t-.45,.3,i-.1],[1,.8,1],[2,1,0])},lamp(n,{solid:e,lampGlow:t,group:i,env:s}){let[r,,o]=n.pos,a="#2f3238";e.cyl(.12,.2,.35,a,[r,0,o]),e.cyl(.06,.07,3.5,a,[r,.3,o]),e.boxC([.7,.06,.06],a,[r+.3,3.75,o]),e.cyl(.2,.12,.1,a,[r+.62,3.6,o]),e.cone(.22,.16,a,[r+.62,3.7,o]),t.sphere(.16,"#fff3d0",[r+.62,3.5,o],[1,1.15,1],[10,8]);let l=Ho(s,n.light?4.2:3.2);l.position.set(r+.62,.03,o),i.add(l)},bench(n,{solid:e}){let[t,,i]=n.pos,s="#a8703f";for(let r=0;r<3;r++)e.box([1.7,.05,.13],s,[t,.46,i-.16+r*.16]);for(let r=0;r<2;r++)e.box([1.7,.13,.05],s,[t,.62+r*.2,i-.28]);for(let r of[-.7,.7])e.box([.07,.46,.45],"#2f3238",[t+r,0,i]),e.box([.07,.55,.07],"#2f3238",[t+r,.46,i-.28])},bin(n,{solid:e}){let[t,,i]=n.pos;e.cyl(.3,.26,.85,"#3f6d7c",[t,0,i],[0,0,0],12),e.cyl(.33,.33,.08,"#2c4e59",[t,.85,i],[0,0,0],12),e.cyl(.2,.2,.02,"#14242a",[t,.93,i],[0,0,0],12)},hydrant(n,{solid:e}){let[t,,i]=n.pos;e.cyl(.13,.16,.55,"#d8402f",[t,0,i]),e.dome(.14,"#d8402f",[t,.55,i]),e.cylC(.06,.42,"#b53324",[t,.36,i],[0,0,Math.PI/2]),e.cyl(.19,.19,.05,"#b53324",[t,0,i])},planter(n,{solid:e,flat:t}){let[i,,s]=n.pos;e.box([1.3,.5,.55],"#8d5a3b",[i,0,s]),e.box([1.36,.07,.61],"#a8703f",[i,.5,s]),t.ico(.3,"#4f8f47",[i-.3,.68,s],[1.3,.7,1]),t.ico(.3,"#5fa052",[i+.3,.68,s],[1.3,.7,1],[1,1,0]);let r=["#ef476f","#ffd166","#f78c6b","#c77dff","#ffffff"];for(let o=0;o<6;o++)t.ico(.11,r[o%r.length],[i-.5+o*.2,.86+o%2*.09,s+(o%3-1)*.12])},sandwichBoard(n,{solid:e,env:t}){let[i,,s]=n.pos,r=1.6;for(let o of[-1,1])e.boxC([.8*r,1.1*r,.05*r],"#3a2a1d",[i,.55*r,s+o*.17*r],[o*.3,0,0]),e.boxC([.68*r,.8*r,.02*r],"#fff3c4",[i,.6*r,s+o*.215*r],[o*.3,0,0]);t.signs.push({id:"sandwich",pos:[i,.6*r,s+.23*r],size:[.62*r,.74*r],kind:"street"})},car(n,{group:e}){let t=Sf(n.color||"#d8402f");t.position.set(n.pos[0],0,n.pos[2]),t.rotation.y=n.rot||0,e.add(t)}};function Sf(n){let e=new Qe,t="#2d3f52";e.box([3.7,.5,1.62],n,[0,.32,0]),e.box([3.5,.12,1.5],si(n,-.12),[0,.22,0]),e.box([2,.52,1.46],n,[-.2,.82,0]),e.box([2.06,.36,1.5],t,[-.2,.86,0]),e.box([1.6,.04,1.3],si(n,.06),[-.2,1.34,0]);for(let i of[-1.15,1.15])for(let s of[-.8,.8])e.cylC(.34,.24,"#1d1f24",[i,.34,s],[Math.PI/2,0,0],14),e.cylC(.17,.26,"#b9bec6",[i,.34,s],[Math.PI/2,0,0],10);return e.box([.08,.14,.34],"#fff3c4",[1.84,.52,.5]),e.box([.08,.14,.34],"#fff3c4",[1.84,.52,-.5]),e.box([.08,.14,.34],"#c0392b",[-1.84,.52,.5]),e.box([.08,.14,.34],"#c0392b",[-1.84,.52,-.5]),e.box([.14,.14,1.66],"#8f949c",[1.82,.28,0]),e.box([.14,.14,1.66],"#8f949c",[-1.82,.28,0]),e.mesh(mn)}function sx(n,e,t){let i=["#e9c46a","#4a6fa5","#f4f1de","#2f7d6a"],s=[{z:n.z+n.width*.24,dir:1},{z:n.z-n.width*.24,dir:-1}],r=zn(t,"#fff8d8","#fff0b0",2.5),o=[];s.forEach((a,l)=>{for(let c=0;c<2;c++){let h=Sf(i[(l*2+c)%i.length]);h.rotation.y=a.dir>0?0:Math.PI,h.position.set(-70+Math.random()*140,0,a.z);for(let u of[-.5,.5]){let f=new Pe(ke.sphere(8,6),r);f.scale.set(.06,.1,.16),f.position.set(1.9,.59,u),h.add(f)}e.add(h),o.push({m:h,dir:a.dir,speed:5+Math.random()*3})}}),t.updaters.push(a=>{for(let l of o)l.m.position.x+=l.dir*l.speed*a,l.m.position.x>80&&(l.m.position.x=-80),l.m.position.x<-80&&(l.m.position.x=80)})}var vs=new Map;function rx(n,e){let t="leg|"+n+"|"+e;if(!vs.has(t)){let i=new Qe;i.add(ke.capsule(.085,.36),n,[0,-.27,0]),i.box([.15,.09,.26],e,[0,-.58,.04]),vs.set(t,i.geometry())}return vs.get(t)}function ox(n,e){let t="arm|"+n+"|"+e;if(!vs.has(t)){let i=new Qe;i.add(ke.capsule(.065,.3),n,[0,-.2,0]),i.sphere(.072,e,[0,-.45,0]),vs.set(t,i.geometry())}return vs.get(t)}function js(n){let e=new ot,t=new Qe,i=n.skin||"#e0ac7e";t.add(ke.capsule(.2,.4),n.shirt,[0,.98,0],[0,0,0],[1.05,1,.8]),t.cyl(.07,.07,.1,i,[0,1.34,0]),t.sphere(.2,i,[0,1.6,0],[1,1.05,.98]),t.sphere(.027,"#2a1d14",[-.075,1.62,.178]),t.sphere(.027,"#2a1d14",[.075,1.62,.178]),t.boxC([.09,.016,.02],"#8a3b2a",[0,1.525,.186]),t.sphere(.04,i,[-.2,1.6,0]),t.sphere(.04,i,[.2,1.6,0]);let s=n.hair||"#3b2a1e",r=n.hairStyle||"short";if(r!=="bald"&&(t.dome(.215,s,[0,1.63,-.015],[1,1.02,1.02],[-.25,0,0]),r==="bun"&&t.sphere(.1,s,[0,1.86,-.08]),r==="long"&&t.add(ke.capsule(.15,.22),s,[0,1.45,-.12],[0,0,0],[1.25,1,.6])),n.hat==="cap"){let _=n.hatColor||"#d8402f";t.dome(.21,_,[0,1.7,0],[1,.75,1]),t.boxC([.26,.03,.2],_,[0,1.71,.2],[.15,0,0])}else n.hat==="toque"&&(t.cyl(.17,.165,.2,"#ffffff",[0,1.74,0]),t.sphere(.21,"#ffffff",[0,2,0],[1,.72,1]));n.apron&&(t.boxC([.32,.5,.04],n.apron,[0,.9,.165]),t.boxC([.34,.04,.05],n.apron,[0,1.12,.165])),t.add(ke.capsule(.17,.08),n.pants||"#3d4a66",[0,.66,0],[0,0,Math.PI/2],[1,1,.85]);let o=t.mesh(mn);e.add(o);let a=mn,l=(_,m,p)=>{let x=new ot;x.position.set(m,p,0);let y=new Pe(_,a);return y.castShadow=!0,x.add(y),e.add(x),x},c=rx(n.pants||"#3d4a66",n.shoe||"#2b2b33"),h=ox(n.shirt,i),u=l(c,-.105,.62),f=l(c,.105,.62),d=l(h,-.275,1.27),g=l(h,.275,1.27);return d.rotation.z=-.12,g.rotation.z=.12,e.add(_f(.36)),n.scale&&e.scale.setScalar(n.scale),{group:e,body:o,armL:d,armR:g,legL:u,legR:f}}function rl(n,e,t){let i=Math.sin(e)*.65*t;n.legL.rotation.x=i,n.legR.rotation.x=-i,n.armL.rotation.x=-i*.8,n.armR.rotation.x=i*.8}var ax=["#f2c9a0","#e0ac7e","#c68a5c","#8d5a3b","#f7d9bd","#a8704a"],cx=["#2b1d14","#5a3a22","#8a5a2b","#c9a15a","#1c1c22","#7a2f1e","#d9d9d9"],wf=["#4ea8de","#ef476f","#ffd166","#06d6a0","#9b5de5","#f78c6b","#3d9a8b","#f4f1de","#e76f51","#577590"],lx=["#3d4a66","#2f3e46","#6b4f3a","#4a4e69","#1f2a44","#7a8aa0"],hx=["short","short","bun","long","short","bald","long"];function Ef(n){let e=s=>Math.abs(Math.sin(n*12.9898+s*78.233)*43758.5453)%1,t=(s,r)=>s[Math.floor(e(r)*s.length)],i=e(6);return{skin:t(ax,1),hair:t(cx,2),shirt:t(wf,3),pants:t(lx,4),hairStyle:t(hx,5),hat:i>.84?"cap":"none",hatColor:t(wf,7),scale:.94+e(8)*.12}}var ie=.2,nt=1.5,gn="#c8392b",wn="#fff3dc",Tf="#2f6b5a",ll="#a8703f",ri="#6b4428",Vo="#b9aea0",yt="#2f3238",er="#f3ede0";function Lf(n,e,t){let i=e.width,s=e.id==="cart",r=s?.42:e.id==="stand"?.3:.15,o=s?ie+i/2+.45:ie+i/2-1.05,a={dough:[ie-i*.29,1.15,.7],load:[ie+i*.19,1.15,.7],oven:[o,.86,.72],pass:[ie,1.25,1.55]},l=n.camera;return{...n,tier:e,tierIdx:t,cx:ie,W:i,D:e.depth,back:nt-e.depth,floorY:r,ovenX:o,stations:a,window:[ie-.4,0,2.9],register:[ie+.8,1.2,1.55],camera:{...l,zoom:e.cameraZoom,target:[l.target[0],l.target[1]+t*.6,l.target[2]]}}}function If(n,e,t={}){let i=new ot;i.name="stand:"+n.tier.id;let s={g:i,env:e,L:n,S:new Qe,F:new Qe,M:new Qe,warm:new Qe,win:new Qe,cw:n.W-.6};ux[n.tier.id](s),fx(s),dx(s),px(s),_x(s,t.decor||0),gx(s,t.empire||{}),i.add(s.S.mesh(mn)),s.F.empty||i.add(s.F.mesh(Ui)),s.M.empty||i.add(s.M.mesh(nl)),s.warm.empty||i.add(s.warm.mesh(zn(e,"#ffffff","#ffc978",2.2,{vertexColors:!0}),{cast:!1,receive:!1})),s.win.empty||i.add(s.win.mesh(zn(e,"#ffffff","#ffb45e",.55,{vertexColors:!0,roughness:.3}),{cast:!1}));let r=Ho(e,5.5,"#ffb469",.45);return r.position.set(ie,.03,3.4),i.add(r),yx(s),i}function ol(n,e,t,i,s){let r=Math.round((t-e)/.36),o=(t-e)/r;n.S.box([t-e,.1,.04],gn,[(e+t)/2,i+.06,s]);for(let a=0;a<r;a++)n.S.cylC(o/2,.035,a%2?wn:"#d8402f",[e+o*(a+.5),i+.06,s],[Math.PI/2,0,0],12)}function Af(n,e,t,i){let s=new Pe(ke.box(),bn("stripes",e[0]/.8,1));s.scale.set(e[0],e[1],e[2]),s.position.set(t[0],t[1],t[2]),s.rotation.x=i,s.castShadow=!0,s.receiveShadow=!0,n.g.add(s);let r=e[2]/2;return{y:t[1]-Math.sin(i)*r,z:t[2]+Math.cos(i)*r}}function tr(n,e,t,i,s){let{S:r}=n;r.box([t-e,.05,.3],ri,[(e+t)/2,i,s]);let o=["#c0392b","#e9c46a","#2e8b57","#f4f1de","#e67e22","#7a4a2b","#b8d8a8"],a=0;for(let l=e+.25;l<t-.15;l+=.34){let c=.2+a*7%3*.06;a%4===3?(r.cyl(.05,.07,c+.12,"#3b6b4a",[l,i+.05,s]),r.cyl(.025,.03,.1,"#3b6b4a",[l,i+.17+c,s])):(r.cyl(.09,.09,c,o[a%o.length],[l,i+.05,s]),r.cyl(.095,.095,.04,"#d9cbb2",[l,i+.05+c,s])),a++}}function Rf(n,e,t,i,s){let{S:r,M:o}=n;o.torus(s,.06,yt,[e,t,i]),r.cylC(.11,.16,ri,[e,t,i],[Math.PI/2,0,0]);for(let a=0;a<4;a++)r.boxC([s*1.9,.07,.06],ll,[e,t,i],[0,0,a*Math.PI/4])}var ux={cart(n){let{S:e,M:t,L:i,g:s}=n,{W:r}=i,o=ie-r/2,a=ie+r/2,l=-1.1;s.add(Sn([r,.22,2.6],"wood",[ie,.2,.2],[r/1.3,2])),e.box([r-.5,.12,.16],ri,[ie,.1,-.5]);for(let h of[ie-1.35,ie+1.35])Rf(n,h,.56,2.13,.52),Rf(n,h,.56,l-.06,.52);t.cylC(.035,1.5,yt,[o-.42,1.25,.2],[Math.PI/2,0,0]);for(let h of[-.5,.9])t.cylC(.03,.5,yt,[o-.2,1.2,h],[0,0,Math.PI/2.4]);e.box([r,2.55,.12],gn,[ie,i.floorY,l]),e.box([r+.06,.16,.16],wn,[ie,i.floorY+2.5,l]),e.box([r+.04,.5,.14],wn,[ie,i.floorY,l+.01]),tr(n,o+.3,a-.3,2.05,l+.2);for(let h of[o+.05,a-.05])e.box([.1,.8,2.45],gn,[h,i.floorY,.2]);for(let h of[o+.08,a-.08])for(let u of[nt-.08,l+.1])t.cyl(.045,.045,3.15,yt,[h,i.floorY,u]);let c=Af(n,[r+.7,.07,3.1],[ie,3.5,.3],.1);ol(n,o-.35,a+.35,c.y-.2,c.z),Object.assign(n,{eave:{y:c.y-.2,z:c.z,x0:o-.3,x1:a+.3},neonPos:[ie,4,-.7],flagBase:{y:3.6,z:l,n:4},statuePos:[o+.45,4.05,-.7],chimneyTop:3.2,counterBase:.2});for(let h of[ie-.9,ie+.9])t.cyl(.035,.035,.5,yt,[h,3.62,-.7])},stand(n){let{S:e,L:t,g:i}=n,{W:s,D:r,back:o}=t,a=ie-s/2,l=ie+s/2,c=(nt+o)/2;i.add(Sn([s+.5,.3,r+.7],"wood",[ie,0,c+.1],[s/1.3,3])),e.box([s+.6,.08,r+.8],ri,[ie,0,c+.1]),e.box([s,3.5,.14],gn,[ie,t.floorY,o+.07]),e.box([s+.02,1,.16],wn,[ie,t.floorY,o+.08]),e.box([s+.04,.08,.2],Tf,[ie,t.floorY+1,o+.09]),tr(n,a+.4,l-1.9,1.95,o+.3),tr(n,a+.4,l-1.9,2.55,o+.3);for(let d of[a+.07,l-.07]){e.box([.14,1.15,r-.1],gn,[d,t.floorY,c]),e.box([.2,.08,r],wn,[d,t.floorY+1.15,c]);for(let g of[nt-.1,o+.1])e.box([.18,3.6,.18],ri,[d,t.floorY,g])}let h=new Pe(ke.box(),bn("rooftiles",(s+1)/1.2,3));h.scale.set(s+1,.16,r+.9),h.position.set(ie,4.05,c+.15),h.rotation.x=.07,h.castShadow=!0,h.receiveShadow=!0,i.add(h);let u=c+.15+(r+.9)/2,f=4.05-(r+.9)/2*.07;e.box([s+1,.2,.08],wn,[ie,f-.24,u-.02]),ol(n,a-.5,l+.5,f-.44,u),e.box([3.7,.95,.14],gn,[ie,4.2,nt+.1]),e.box([3.45,.7,.16],wn,[ie,4.32,nt+.12]);for(let d of[ie-1.6,ie+1.6])e.box([.12,.5,.12],ri,[d,3.85,nt+.1]);n.env.signs.push({id:"name",pos:[ie,4.68,nt+.25],kind:"shopname"}),n.env.signs.push({id:"franchise",pos:[l-.12,2.55,nt+.05],size:[.64,.44],kind:"franchise"}),e.box([.7,.5,.05],"#d4af37",[l-.12,2.3,nt+.02]),Object.assign(n,{eave:{y:f-.44,z:u,x0:a-.45,x1:l+.45},neonPos:[ie,5.65,nt+.1],flagBase:{y:4.15,z:o+.2,n:5},statuePos:[a+.6,4.75,c],chimneyTop:5,counterBase:0})},shop(n){let{S:e,F:t,M:i,L:s,g:r,warm:o,win:a}=n,{W:l,D:c,back:h}=s,u=ie-l/2,f=ie+l/2,d=(nt+h)/2,g="#f1d9a8",_=3.6,m=6.1;e.box([l+.8,.15,c+1.3],Vo,[ie,0,d+.35]);let p=new Pe(new Mn(l-.4,c-.3),bn("checker",l/1.6,c/1.6));p.rotation.x=-Math.PI/2,p.position.set(ie,.16,d),p.receiveShadow=!0,r.add(p),r.add(Sn([l,_-.15,.2],"tiles",[ie,.15,h+.1],[l/1.2,3]));for(let b of[u+.12,f-.12])r.add(Sn([.24,_-.15,c],"plaster",[b,.15,d],[4,3],{color:g}));for(let b of[u+.27,f-.27])e.box([.54,_-.15,.54],"#e6c990",[b,.15,nt-.05]),e.box([.62,.3,.62],Vo,[b,.15,nt-.05]),i.box([.06,.3,.16],yt,[b,2.35,nt+.26]),o.box([.2,.28,.2],"#fff0c8",[b,2.3,nt+.42]),i.cone(.2,.14,yt,[b,2.58,nt+.42],[0,0,0],4);e.box([l,.5,.44],"#e6c990",[ie,_-.5,nt-.08]),tr(n,u+.5,f-2.2,1.95,h+.36),tr(n,u+.5,f-2.2,2.6,h+.36);for(let b=0;b<4;b++)i.cylC(.19,.03,"#8a8d93",[u+1.2+b*.62,3.05,h+.26],[Math.PI/2,0,0],14),i.box([.04,.26,.03],"#5a5d63",[u+1.2+b*.62,3.18,h+.26]);r.add(Sn([l+.1,m-_,c+.1],"plaster",[ie,_,d],[5,2],{color:"#f6e3b4"})),e.box([l+.4,.16,c+.4],er,[ie,_-.02,d]);let x=nt+.06;for(let b of[-2.45,0,2.45]){let R=ie+b;e.box([1.36,1.66,.08],er,[R,4.2,x]),a.box([1.14,1.46,.06],"#bcd3e0",[R,4.3,x+.04]),e.box([.06,1.46,.04],er,[R,4.3,x+.08]),e.box([1.14,.06,.04],er,[R,5,x+.08]);for(let E of[-1,1])e.box([.3,1.5,.06],Tf,[R+E*.76,4.28,x+.04]);e.box([1.5,.2,.3],"#8d5a3b",[R,3.98,x+.2]),["#ef476f","#ffd166","#ffffff","#f78c6b","#ef476f"].forEach((E,A)=>{t.ico(.12,E,[R-.52+A*.26,4.28+A%2*.06,x+.24])}),t.ico(.2,"#4f8f47",[R,4.2,x+.22],[3.2,.6,.8])}e.box([l+.7,.26,c+.7],er,[ie,m,d]),e.box([l+.3,.5,c+.3],"#e6c990",[ie,m+.26,d]),e.box([l-.2,.1,c-.2],"#8d7b68",[ie,m+.3,d]);for(let b of[ie-2.1,ie+2.1])i.cyl(.05,.05,1,yt,[b,m+.7,nt-.5]);e.box([4.9,1.05,.16],gn,[ie,m+.8,nt-.5]),e.box([4.6,.8,.18],wn,[ie,m+.93,nt-.49]),n.env.signs.push({id:"name",pos:[ie,m+1.33,nt-.35],kind:"shopname"}),e.box([.64,.48,.05],"#d4af37",[f-.3,1.5,nt+.24]),n.env.signs.push({id:"franchise",pos:[f-.3,1.74,nt+.27],size:[.58,.42],kind:"franchise"});let y=Af(n,[l+.5,.08,1.5],[ie,_+.12,nt+.72],.2);ol(n,u-.25,f+.25,y.y-.2,y.z),Object.assign(n,{eave:{y:y.y-.2,z:y.z,x0:u-.2,x1:f+.2},neonPos:[ie,m+2.3,nt-.5],flagBase:{y:m+.76,z:h+.3,n:6},statuePos:[u+.9,m+1.25,d+.6],chimneyTop:m+1.5,counterBase:0})}};function fx(n){let{S:e,M:t,F:i,L:s,g:r,env:o,cw:a,warm:l}=n,{stations:c,floorY:h}=s,u=n.counterBase;e.box([a,1.12-u,.75],"#f6ead2",[ie,u,1.7]),e.box([a+.04,.14,.78],ri,[ie,u,1.7]),e.box([a+.02,.1,.02],gn,[ie,.93,2.08]);let f=Math.max(3,Math.round(a/.95));for(let $=0;$<f;$++){let P=ie-a/2+a/f*($+.5);e.box([a/f-.18,.5,.03],"#ead9b8",[P,Math.max(u+.2,.34),2.075])}r.add(Sn([a+.16,.08,1],"wood",[ie,1.12,1.6],[a/1.3,1]));let[d,,g]=c.dough;r.add(Sn([1.2,.07,.98],"wood",[d,1.03,g],[1,1]));for(let $ of[-.52,.52])for(let P of[-.4,.4])e.box([.07,1.03-h,.07],ri,[d+$,h,g+P]);e.box([.3,.34,.2],"#efe6d2",[d-.4,1.1,g-.36]),e.box([.3,.05,.2],"#d9cbb2",[d-.4,1.4,g-.36],[0,0,.2]),e.cylC(.045,.5,ll,[d+.05,1.15,g-.38],[0,0,Math.PI/2]),t.cyl(.13,.09,.1,"#c9ccd2",[d+.42,1.1,g-.36]),e.cyl(.115,.115,.02,"#c0392b",[d+.42,1.18,g-.36]),e.sphere(.09,"#f1dfb8",[d-.08,1.17,g-.36],[1,.7,1]);let[_,,m]=c.load;t.box([1,.05,.9],"#b9bec6",[_,1.05,m]),t.box([1,.04,.9],"#b9bec6",[_,.6,m]);for(let $ of[-.46,.46])for(let P of[-.41,.41])t.box([.05,1.05-h,.05],"#8a8d93",[_+$,h,m+P]);e.cylC(.025,1.3,ll,[_+.42,1.55,m-.5],[.25,0,.12]),e.cyl(.27,.27,.025,"#caa26a",[_+.5,2.15,m-.66],[.25+Math.PI/2,0,.12],16);let p=s.ovenX,x=-.1;e.box([1.84,.56,1.5],Vo,[p,0,x]),r.add(Sn([1.74,1,1.42],"brick",[p,.56,x],[1.6,1.2]));let y=new Pe(ke.dome(18,10),bn("brick",3,1.4));y.scale.set(.87,.72,.71),y.position.set(p,1.56,x),y.castShadow=!0,r.add(y),e.box([1,.6,.06],"#140d0a",[p,.82,x+.7]),e.box([1.2,.14,.14],"#cfc3b2",[p,1.42,x+.72]);for(let $ of[-1,1])e.box([.14,.62,.14],"#cfc3b2",[p+$*.57,.8,x+.72]);e.box([1.4,.07,.42],"#cfc3b2",[p,.76,x+.9]);let b=xs("#3a1a0c",{emissive:new me("#ff7a1f"),emissiveIntensity:.5});o.ovenMouthMat=b;let R=new Pe(ke.box(),b);R.scale.set(.9,.5,.03),R.position.set(p,1.1,x+.74),r.add(R);for(let $=0;$<3;$++)e.cylC(.07,.5,"#7b5236",[p-.3+$*.16,.64,x+.95],[Math.PI/2,0,0],8);let E=p+.4,A=x-.35;e.cyl(.17,.21,n.chimneyTop-1.9,"#6e4a3a",[E,1.9,A]),e.cyl(.24,.24,.1,"#4e342a",[E,n.chimneyTop,A]),o.smokeAt=[E,n.chimneyTop+.2,A];let[I,,M]=s.register;t.box([.52,.2,.44],"#4a5563",[I,1.2,M]),t.boxC([.44,.26,.05],"#2f3640",[I,1.52,M-.1],[-.35,0,0]),e.boxC([.36,.18,.02],"#9fe3c0",[I,1.52,M-.07],[-.35,0,0]),e.box([.4,.03,.2],"#d9dde3",[I,1.4,M+.08]),t.cyl(.11,.1,.22,"#f6e7b0",[I+.5,1.2,1.95]),e.cyl(.08,.08,.06,"#e9c46a",[I+.5,1.2,1.95]),e.box([.2,.16,.14],"#ffffff",[ie-.55,1.2,1.95]);let S=ie-a/2+.55;[0,1,2].forEach($=>e.box([.72,.1,.72],"#f2d7a7",[S,1.2+$*.1,1.62],[0,$*.1,0])),e.box([.5,.012,.5],gn,[S,1.5,1.62],[0,.2,0]);for(let $ of[ie-a/2+.1,ie+a/2-.1])e.cyl(.17,.13,.26,"#b5562c",[$,1.2,2]),i.ico(.24,"#4f9d4a",[$,1.62,2],[1,.95,1]),i.ico(.16,"#62b35a",[$+.1,1.78,2.02]);let O=n.eave,V=Math.round((O.x1-O.x0)/.48);for(let $=0;$<=V;$++){let P=$/V;l.sphere(.06,"#fff0c8",[O.x0+(O.x1-O.x0)*P,O.y-.1-Math.sin(P*Math.PI*V)*0,O.z-.06],[1,1.2,1],[8,6])}}function dx(n){let{S:e,L:t,env:i}=n,s=1.5,r=ie-t.W/2-.75,o=3.5,a=1*s,l=1*s,c=a+l/2;for(let h of[-.5,.5])e.box([.08*s,a+.2,.08*s],yt,[r+h*s,0,o]);e.box([1.36*s,l,.08],"#2b2d42",[r,a,o]),e.box([1.2*s,.84*s,.03],"#f7f1e1",[r,c-.42*s,o+.045]),i.signs.push({id:"menu",pos:[r,c,o+.06],size:[1.6,1.16],kind:"menu"})}function px(n){let{g:e,env:t}=n,[i,s,r]=n.neonPos,o=new ot,a=new ot,l=new Qe;l.boxC([2.5,.78,.08],"#1d1a26",[i,s,r]),o.add(l.mesh(mn));let c=new Qe;c.boxC([2.3,.05,.05],"#ff7ab5",[i,s+.31,r+.06]),c.boxC([2.3,.05,.05],"#ff7ab5",[i,s-.31,r+.06]),c.boxC([.05,.62,.05],"#ff7ab5",[i-1.15,s,r+.06]),c.boxC([.05,.62,.05],"#ff7ab5",[i+1.15,s,r+.06]),c.torus(.2,.035,"#ff7ab5",[i-.85,s,r+.07]),o.add(c.mesh(zn(t,"#ff7ab5","#ff3d94",3.2),{cast:!1}));let h=new Qe;h.torus(.62,.04,"#7ff6ff",[i+1.75,s,r+.05]),h.torus(.62,.04,"#7ff6ff",[i-1.75,s,r+.05]);for(let u of[-1,1])h.boxC([.5,.06,.05],"#7ff6ff",[i+u*1.75,s,r+.06],[0,0,.6]),h.boxC([.5,.06,.05],"#7ff6ff",[i+u*1.75,s,r+.06],[0,0,-.6]),h.boxC([.06,.5,.05],"#7ff6ff",[i+u*1.75,s,r+.06]);a.add(h.mesh(zn(t,"#7ff6ff","#2fe6ff",3.2),{cast:!1})),o.visible=!1,a.visible=!1,e.add(o,a),t.neon={l1:o,l2:a},t.signs.push({id:"neon",pos:[i+.2,s,r+.1],kind:"neon"})}function Cf(n,e,t){let{S:i,M:s,F:r}=n;s.cyl(.24,.26,.04,yt,[e,0,t]),s.cyl(.035,.035,2.5,yt,[e,0,t]),i.cyl(.46,.46,.05,"#f6ead2",[e,.74,t],[0,0,0],18),r.add(ke.cone(8),gn,[e,2.42,t],[0,0,0],[.92,.4,.92]),r.add(ke.cone(8),wn,[e,2.36,t],[0,Math.PI/8,0],[.95,.28,.95]),i.cyl(.16,.16,.02,"#e9b45a",[e-.1,.79,t+.05],[0,0,0],12),i.cyl(.04,.035,.1,"#ffffff",[e+.22,.79,t-.1]);for(let o of[-1,1]){let a=e+o*.72;i.cyl(.2,.2,.05,gn,[a,.46,t+.1],[0,0,0],12);for(let[l,c]of[[-.14,-.14],[.14,-.14],[-.14,.14],[.14,.14]])s.cyl(.02,.02,.46,yt,[a+l,0,t+.1+c]);s.box([.04,.42,.34],yt,[a+o*.17,.5,t+.1])}}function Pf(n,e,t){let{S:i,F:s}=n;i.cyl(.3,.22,.42,"#b5562c",[e,0,t]),i.cyl(.32,.32,.05,"#9c4826",[e,.42,t]),i.cyl(.05,.07,.95,"#6b5a45",[e,.42,t]),s.ico(.42,"#7d9460",[e,1.6,t]),s.ico(.3,"#8fa873",[e+.25,1.4,t+.1],[1,1,1],[1,1,0]),s.ico(.28,"#6f8754",[e-.24,1.42,t-.08],[1,1,1],[2,0,1])}var al={flowers(n){let{S:e,F:t,M:i,cw:s,eave:r}=n,o=Math.max(2,Math.round(s/1.25)),a=["#ef476f","#ffd166","#ffffff","#f78c6b","#c77dff"];for(let l=0;l<o;l++){let c=ie-s/2+s/o*(l+.5);e.box([.92,.2,.24],"#8d5a3b",[c,.56,2.2]),t.ico(.16,"#4f8f47",[c,.8,2.2],[2.7,.7,.8]);for(let h=0;h<5;h++)t.ico(.1,a[(l+h)%a.length],[c-.34+h*.17,.9+h%2*.06,2.24])}for(let l of[r.x0+.35,r.x1-.35]){i.cylC(.012,.5,yt,[l,r.y-.35,r.z-.25]),e.dome(.2,"#7b5236",[l,r.y-.62,r.z-.25],[1,1,1],[Math.PI,0,0]),t.ico(.24,"#4f8f47",[l,r.y-.52,r.z-.25],[1,.7,1]);for(let c=0;c<5;c++){let h=c/5*Math.PI*2;t.ico(.09,a[c%a.length],[l+Math.cos(h)*.17,r.y-.46,r.z-.25+Math.sin(h)*.17])}}},festoon(n){let{M:e,warm:t,L:i,eave:s}=n,r=ie-i.W/2-.5,o=ie+i.W/2+.5,a=2.7,l=Math.max(4.1,s.y+.9);for(let h of[r,o])e.cyl(.05,.07,l,yt,[h,0,a]),e.sphere(.09,"#d4af37",[h,l+.05,a]);let c=16;for(let h=1;h<c;h++){let u=h/c,f=l-.02-Math.sin(u*Math.PI)*.55;t.sphere(.085,"#fff0c8",[r+(o-r)*u,f,a],[1,1.25,1],[8,6]),e.cylC(.01,(o-r)/c,yt,[r+(o-r)*(u-.5/c),f+.1,a],[0,0,Math.PI/2],4)}},bunting(n){let{F:e,eave:t}=n,i=["#ef476f","#ffd166","#06d6a0","#4ea8de","#9b5de5"],s=Math.round((t.x1-t.x0)/.34);for(let r=0;r<s;r++){let o=t.x0+(t.x1-t.x0)/s*(r+.5);e.add(ke.cone(3),i[r%i.length],[o,t.y-.36,t.z+.04],[Math.PI,0,0],[.15,.3,.02])}},table(n){Cf(n,ie+3,4.2)},lanterns(n){let{M:e,warm:t,cw:i}=n;for(let s of[ie-i/2-.32,ie+i/2+.32]){e.box([.3,.06,.3],yt,[s,0,2.5]);for(let[r,o]of[[-.12,-.12],[.12,-.12],[-.12,.12],[.12,.12]])e.box([.03,.56,.03],yt,[s+r,.06,2.5+o]);t.box([.2,.46,.2],"#ffe9b0",[s,.1,2.5]),e.cone(.24,.16,yt,[s,.62,2.5],[0,Math.PI/4,0],4),e.torus(.07,.012,yt,[s,.84,2.5])}},carpet(n){let{S:e,M:t,L:i}=n,s=i.queueStart[0]+i.queueStep[0]*(i.queueRowLength-1)/2,r=3.3,o=i.queueStart[2]+i.queueStep[2]*3.3,a=Math.abs(i.queueStep[0])*i.queueRowLength+.5;e.box([a,.012,o-r],"#a82a2a",[s,.014,(r+o)/2]);for(let l of[-1,1])e.box([.1,.014,o-r],"#d4af37",[s+l*(a/2-.12),.016,(r+o)/2]);for(let l of[-1,1]){let c=s+l*(a/2+.18),h=[r+.6,(r+o)/2+.2,o-.2];h.forEach((u,f)=>{t.cyl(.16,.18,.04,"#d4af37",[c,0,u]),t.cyl(.03,.03,.95,"#d4af37",[c,0,u]),t.sphere(.07,"#d4af37",[c,1,u]),f>0&&n.S.cylC(.03,u-h[f-1],"#8a1f2b",[c,.82,(u+h[f-1])/2],[Math.PI/2,0,0],6)})}},secondTable(n){let{L:e}=n;Cf(n,ie+3.5,6.3),Pf(n,ie+e.W/2+.75,2),Pf(n,ie-e.W/2-.75,2.2)},balloons(n){let{g:e,env:t,cw:i}=n,s=new Qe,r=["#ef476f","#ffd166","#06d6a0","#4ea8de","#9b5de5","#f78c6b"];[[0,2.2,0],[.32,2,.1],[-.3,1.95,-.05],[.12,2.6,-.1],[-.16,2.48,.14],[.36,2.45,-.12]].forEach(([l,c,h],u)=>{s.sphere(.24,r[u],[l,c,h],[1,1.2,1]),s.cone(.05,.07,r[u],[l,c-.33,h]),s.cylC(.006,c-.3,"#eeeeee",[l/2,(c-.3)/2,h/2],[-(h/c)*.9,0,l/c*.9],4)});let a=s.mesh(nl);a.position.set(ie+i/2+.05,1.2,2.1),e.add(a),t.updaters.push((l,c)=>{a.rotation.z=Math.sin(c*1.3)*.07,a.rotation.x=Math.sin(c*.9+1)*.05})},flags(n){let{M:e,g:t,env:i,L:s}=n,r=n.flagBase,o=[];for(let a=0;a<r.n;a++){let l=ie-s.W/2+.4+(s.W-.8)/(r.n-1)*a;e.cyl(.03,.035,1.5,"#d9dde3",[l,r.y,r.z]),e.sphere(.055,"#d4af37",[l,r.y+1.53,r.z]);let c=new Qe;["#2e8b57","#ffffff","#d8402f"].forEach((u,f)=>c.boxC([.22,.42,.02],u,[.13+f*.22,0,0]));let h=c.mesh(Ui);h.position.set(l+.03,r.y+1.26,r.z),t.add(h),o.push(h)}i.updaters.push((a,l)=>{o.forEach((c,h)=>{c.rotation.y=Math.sin(l*2.2+h*.9)*.35})})},statue(n){let{M:e,g:t,env:i}=n,[s,r,o]=n.statuePos;e.cyl(.06,.09,.9,"#d9dde3",[s,r-.9,o]),e.cyl(.26,.3,.1,"#d4af37",[s,r-.05,o]);let a=new Qe,l="#f2c230";a.cylC(.62,.1,l,[0,.72,0],[Math.PI/2,0,0],24),a.torus(.62,.075,"#e0a81e",[0,.72,0]);for(let h=0;h<6;h++){let u=h/6*Math.PI*2;for(let f of[-1,1])a.cylC(.11,.05,"#e0a81e",[Math.cos(u)*.34,.72+Math.sin(u)*.34,f*.06],[Math.PI/2,0,0],10)}for(let h=0;h<8;h++){let u=h/8*Math.PI*2;a.boxC([.06,.26,.04],l,[Math.cos(u)*.86,.72+Math.sin(u)*.86,0],[0,0,u-Math.PI/2])}let c=a.mesh(new ds({vertexColors:!0,shininess:90,specular:new me("#fff2b0"),emissive:new me("#6b4a00"),emissiveIntensity:.6}));c.position.set(s,r,o),t.add(c),i.updaters.push(h=>{c.rotation.y+=h*.9})}},mx=-.1;function gx(n,e){let{S:t,M:i,F:s,warm:r,L:o,g:a}=n,{marketing:l=0,pizzaSchool:c=0,megaOven:h=0}=e,u=["#ef476f","#ffd166","#06d6a0","#4ea8de","#9b5de5"],f=ie+o.W/2+.25;for(let d=0;d<l;d++){let g=f+d*.42-(l-1)*.21+.6,_=(n.eave?n.eave.y:3.2)-.7;i.cylC(.012,.9,yt,[g,_+.45,n.eave?n.eave.z:.4]),t.box([.36,1.2,.03],u[d%u.length],[g,_-.6,(n.eave?n.eave.z:.4)+.02]),t.box([.3,.06,.04],"#ffffff",[g,_-.36,(n.eave?n.eave.z:.4)+.04])}for(let d=0;d<c;d++){let g=ie-.8+d*.42,_=o.back+.16;t.box([.4,.5,.05],"#d4af37",[g,1.45+.25,_]),t.box([.32,.4,.04],"#fff8e7",[g,1.45+.25,_+.02]),t.box([.2,.04,.04],"#b5372a",[g,1.45+.34,_+.03]),t.box([.2,.03,.04],"#6b4428",[g,1.45+.2,_+.03])}for(let d=0;d<h;d++){let g=o.ovenX+1.35+d*1.35,_=mx;t.box([1.1,.5,1],Vo,[g,0,_]),a.add(Sn([1.05,.9,.95],"brick",[g,.5,_],[1.2,1]));let m=new Pe(ke.dome(14,8),bn("brick",2,1));m.scale.set(.58,.5,.52),m.position.set(g,1.4,_),m.castShadow=!0,a.add(m),t.box([.72,.44,.05],"#140d0a",[g,.66,_+.52]),r.box([.62,.3,.03],"#ffb35a",[g,.72,_+.55]),i.cylC(.04,.5,yt,[g+.36,1.9,_-.3])}}function _x(n,e){(n.L.decorSteps||Object.keys(al)).slice(0,e).forEach(i=>{al[i]&&al[i](n)})}var cl=7;function yx(n){let{g:e,env:t,L:i}=n,s=i.floorY,r=i.W,o=[{shirt:"#ef476f",hat:"cap",hatColor:"#ffd166",hair:"#3b2a1e",skin:"#c68a5c",hairStyle:"short"},{shirt:"#4ea8de",hat:"cap",hatColor:"#d8402f",hair:"#5a3a22",skin:"#f2c9a0",hairStyle:"long"},{shirt:"#2f6b5a",hat:"none",hair:"#1c1c22",skin:"#e0ac7e",hairStyle:"bun"}],a=[{skin:"#8d5a3b",hair:"#1c1c22"},{skin:"#f2c9a0",hair:"#7a2f1e"},{skin:"#e0ac7e",hair:"#2b1d14"}],l=d=>ie-r*.36+d*(r*.72)/(cl-1),c=d=>ie-r*.42+d*(r*.5)/(cl-1),h=(d,g)=>(d.group.position.set(g[0],g[1],g[2]),d.group.rotation.y=g[3],d.group.visible=!1,d.baseY=g[1],e.add(d.group),d),u=[],f=[];for(let d=0;d<cl;d++){let g=o[d%o.length];u.push(h(js({...g,pants:"#2f3e46",apron:wn}),[l(d),s,.42,0]));let _=a[d%a.length];f.push(h(js({..._,shirt:"#fdfdfd",pants:"#3d4a66",hat:"toque",apron:"#e9e2d2",hairStyle:"short"}),[c(d),s,-.3,0]))}t.staff={cashiers:u,cooks:f}}function Df(n,e,t){let i=n.staff;if(!i)return;let s=e.staff.cashier>0?1+(e.staffing?.cashier||0):0,r=e.staff.cook>0?1+(e.staffing?.cook||0):0,o=e.customers.some(h=>h.state==="waiting"),a=e.pizzas.some(h=>h.stage==="ready"),l=e.pizzas.some(h=>h.stage==="dough"||h.stage==="topping"),c=e.pizzas.some(h=>h.stage==="load"||h.stage==="baking");i.cashiers.forEach((h,u)=>{if(h.group.visible=u<s,!h.group.visible)return;let f=u===0?o:u===1?a||o:!0,d=t*8+u*1.7;h.armR.rotation.x=f?-1+Math.sin(d)*.45:-.1+Math.sin(t*1.6+u)*.04,h.armL.rotation.x=f?-.5+Math.cos(d)*.25:-.1,h.group.position.y=h.baseY+(f?Math.abs(Math.sin(d*.5))*.02:Math.sin(t*1.4+u)*.006)}),i.cooks.forEach((h,u)=>{if(h.group.visible=u<r,!h.group.visible)return;let f=u===1?c:l,d=t*9+u*2.1;h.armR.rotation.x=f?-.95+Math.sin(d)*.5:-.1,h.armL.rotation.x=f?-.95+Math.sin(d+Math.PI)*.5:-.1,h.group.position.y=h.baseY+Math.sin(t*1.5+u*2)*.006})}function Uf(n,e){n.neon&&(n.neon.l1.visible=e>=1,n.neon.l2.visible=e>=2)}function Nf(n,e,t=0){let i=.85+Math.sin(t*11)*.1+Math.sin(t*23)*.05;n.ovenMouthMat&&(n.ovenMouthMat.emissiveIntensity=(e?3.2:.7)*i)}var Of={pepperoni:"#b83227",mushroom:"#d8c7a8",olive:"#2f3d1c",basil:"#2e9a57",pepper:"#f0902a"},xx=new me("#f3e2bd"),vx=new me("#d2893a"),Mx=new me("#fff0b8"),bx=new me("#ffc94d"),Sx=new Set(["dough","topping","load","ready"]),wx=new vt({vertexColors:!0,toneMapped:!1}),hl=new vt({color:"#2b2d42",toneMapped:!1}),Ex=gf("#c23b22",{roughness:.6});function Tx(n){return Lt("bubble|"+n,()=>{let e=new Qe,t=[Math.PI/2,0,0];e.cylC(.3,.02,"#2b2d42",[0,0,-.012],t,22),e.cylC(.27,.02,"#ffffff",[0,0,0],t,22),e.add(ke.cone(3),"#ffffff",[0,-.3,0],[Math.PI,0,0],[.1,.14,.01]),e.cylC(.19,.02,"#d9993f",[0,0,.012],t,20),e.cylC(.155,.02,"#ffd76a",[0,0,.02],t,20);let i=Of[n]||"#ffffff";return[[0,.07],[-.07,-.04],[.07,-.04]].forEach(([s,r])=>e.cylC(.045,.02,i,[s,r,.03],t,10)),e.geometry()})}var nr={base:()=>Lt("pz-base",()=>{let n=new Qe;return n.cylC(.39,.035,"#ffffff",[0,0,0],[0,0,0],22),n.torus(.37,.058,"#e9dcc4",[0,.02,0],[Math.PI/2,0,0],22),n.geometry()}),ball:()=>Lt("pz-ball",()=>new Qe().sphere(.24,"#ffffff",[0,0,0],[1,1,1],[14,10]).geometry()),disc:()=>Lt("pz-disc",()=>new ei(1,1,1,22)),toppings:()=>Lt("pz-top",()=>{let n=new Qe;n.cylC(.058,.03,"#ffffff",[0,0,0],[0,0,0],8);for(let e=0;e<6;e++){let t=e/6*Math.PI*2+.3;n.cylC(.055,.03,"#ffffff",[Math.cos(t)*.2,0,Math.sin(t)*.2],[0,t,0],8)}return n.geometry()})},Go=class{constructor(e,t,i){this.env=e,this.camera=e.camera,this.loc=t,this.cfg=i,this.customers=new Map,this.pizzas=new Map,this.root=new ot,e.scene.add(this.root),this.time=0}setLocation(e){this.loc=e}sync(e){let t=new Set(e.customers.map(s=>s.id));for(let[s,r]of this.customers)!t.has(s)&&!r.leaving&&this.removeView(this.customers,s);for(let s of e.customers)this.customers.has(s.id)||this.customers.set(s.id,this.makeCustomer(s)),this.customers.get(s.id).data=s;let i=new Set(e.pizzas.map(s=>s.id));for(let[s,r]of this.pizzas)!i.has(s)&&!r.leaving&&this.removeView(this.pizzas,s);for(let s of e.pizzas){this.pizzas.has(s.id)||this.pizzas.set(s.id,this.makePizza(s));let r=this.pizzas.get(s.id);r.stage!==s.stage&&(r.pop=1,r.stage=s.stage),r.data=s}}leaveCustomer(e,t){let i=this.customers.get(e);i&&(i.leaving=!0,i.leaveHappy=t,i.leaveT=0,i.overhead.visible=!1)}leavePizza(e){let t=this.pizzas.get(e);t&&(t.leaving=!0,t.leaveT=0)}removeView(e,t){let i=e.get(t);i&&(this.root.remove(i.group),e.delete(t))}makeCustomer(e){let t=new ot,i=js(Ef(e.id));t.add(i.group);let s=new ot;s.position.y=2.35;let r=new Pe(Tx(e.topping),wx),o=new ot;o.position.y=.46;let a=new Pe(ke.box(),hl);a.scale.set(.66,.11,.02);let l=new Pe(ke.box(),new vt({color:"#06d6a0",toneMapped:!1}));l.scale.set(.6,.065,.03),l.position.z=.012,o.add(a,l),s.add(r,o),t.add(s);let c=new Pe(ke.cyl(8),hl);c.scale.set(.5,2.9,.5),c.position.y=1.45,c.visible=!1,c.userData={kind:"customer",id:e.id},t.add(c);let h=this.queueSpot(0),u=h[0]+5+e.id%3,f=h[2]+3.5;return t.position.set(u,0,f),this.env.styleNew(t),this.root.add(t),{group:t,person:i,overhead:s,bubble:r,fill:l,hit:c,x:u,z:f,heading:Math.PI,id:e.id,data:e,leaving:!1,leaveT:0,phase:e.id*1.7%6.28,turn:e.id*37%100/100-.5}}makePizza(e){let t=new ot,i=xs("#f3e2bd",{vertexColors:!0}),s=xs("#fff0b8",{roughness:.55}),r=xs("#ffffff",{vertexColors:!0,roughness:.6}),o=new Pe(nr.ball(),i);o.scale.set(1,.6,1),o.position.y=.1;let a=new Pe(nr.base(),i),l=new Pe(nr.disc(),Ex);l.scale.set(.325,.03,.325),l.position.y=.012;let c=new Pe(nr.disc(),s);c.scale.set(.3,.03,.3),c.position.y=.02;let h=new Pe(nr.toppings(),r);h.position.y=.036;let u=new Pe(ke.ring(),new vt({color:"#ffd60a",toneMapped:!1,side:hn}));u.rotation.x=-Math.PI/2,u.position.y=.5,u.visible=!1;for(let d of[o,a])d.castShadow=!0;t.add(o,a,l,c,h,u);let f=new Pe(ke.cyl(8),hl);return f.scale.set(.5,.7,.5),f.position.y=.2,f.visible=!1,f.userData={kind:"pizza",id:e.id},t.add(f),this.env.styleNew(t),this.root.add(t),{group:t,crustMat:i,cheeseMat:s,topMat:r,ball:o,base:a,sauce:l,cheese:c,toppings:h,ring:u,hit:f,stage:e.stage,pop:0,leaving:!1,leaveT:0,id:e.id,data:e,x:0,y:0,z:0,s:1,inited:!1}}queueSpot(e){let t=this.loc.queueRowLength,i=e%t,s=Math.floor(e/t),r=this.loc.queueStart,o=this.loc.queueStep;return[r[0]+o[0]*i,0,r[2]+o[2]*s]}stationFor(e){let t=this.loc.stations;switch(e){case"dough":case"topping":return t.dough;case"load":return t.load;case"baking":return t.oven;default:return t.pass}}update(e,t){this.time+=e;let i=1-Math.exp(-e*6),s=t.customers.filter(c=>c.state==="waiting").sort((c,h)=>c.id-h.id),r=t.customers.filter(c=>c.state==="ordered").sort((c,h)=>c.id-h.id),o=new Map(s.map((c,h)=>[c.id,h])),a=new Map(r.map((c,h)=>[c.id,h]));for(let c of this.customers.values()){if(c.leaving){c.leaveT+=e;let R=c.leaveHappy?1:-1;c.x+=R*e*2.6,c.z+=e*1.1,c.group.position.set(c.x,0,c.z),c.person.group.rotation.y=R*1.1,rl(c.person,this.time*11+c.phase,1),c.leaveHappy||(c.person.group.rotation.z=Math.sin(c.leaveT*26)*.08),c.group.scale.setScalar(Math.max(.001,1-Math.max(0,c.leaveT-1.1)*3)),c.leaveT>1.4&&this.removeView(this.customers,c.id);continue}let h=o.get(c.id),u,f;if(h!==void 0)[u,,f]=this.queueSpot(h);else{let R=a.get(c.id)||0;u=this.loc.window[0]+.5+R%4*.72,f=this.loc.window[2]+Math.floor(R/4)*.7}let d=u-c.x,g=f-c.z,_=Math.hypot(d,g),m=_>.06,p=Math.min(_,e*2.4);m&&(c.x+=d/_*p,c.z+=g/_*p),c.group.position.set(c.x,0,c.z);let y=(m?Math.atan2(d,g):Math.PI+c.turn*1.1+Math.sin(this.time*.6+c.phase)*.15)-c.heading;for(;y>Math.PI;)y-=Math.PI*2;for(;y<-Math.PI;)y+=Math.PI*2;c.heading+=y*Math.min(1,e*8),c.person.group.rotation.y=c.heading,rl(c.person,this.time*10+c.phase,m?1:0),c.person.group.position.y=m?Math.abs(Math.sin(this.time*10+c.phase))*.035:Math.sin(this.time*1.5+c.phase)*.006,c.group.scale.setScalar(1);let b=Math.max(0,c.data.patience/c.data.maxPatience);c.fill.scale.x=Math.max(.001,.6*b),c.fill.position.x=-(.6-.6*b)/2,c.fill.material.color.set(b>.5?"#06d6a0":b>.25?"#ffd166":"#ef476f"),c.overhead.quaternion.copy(this.camera.quaternion),c.bubble.position.y=Math.sin(this.time*2.2+c.phase)*.03,c.bubble.rotation.z=b<.25?Math.sin(this.time*18)*.12:0}let l=new Map;for(let c of this.pizzas.values()){if(c.leaving)continue;let h=this.stationFor(c.data.stage);l.has(h)||l.set(h,[]),l.get(h).push(c)}for(let[c,h]of l){h.sort((d,g)=>d.id-g.id);let u=c===this.loc.stations.oven,f=u?.3:.56;h.forEach((d,g)=>{let _=(g-(h.length-1)/2)*f,m=c[0]+_,p=c[1]+(u?g%2*.012:0),x=c[2]+(u?0:g%2*.12-.06),y=u?.6:1;d.inited||(d.x=m,d.y=p,d.z=x,d.s=y,d.inited=!0),d.x+=(m-d.x)*i,d.y+=(p-d.y)*i,d.z+=(x-d.z)*i,d.s+=(y-d.s)*i,d.group.position.set(d.x,d.y,d.z)})}for(let c of this.pizzas.values()){if(c.leaving){c.leaveT+=e,c.group.scale.setScalar(Math.max(.001,c.s*(1-c.leaveT*3))),c.group.position.y+=e*1.5,c.leaveT>.34&&this.removeView(this.pizzas,c.id);continue}let h=c.data,u=h.q.dough>0,f=h.q.top>0;c.ball.visible=!u,c.base.visible=u,c.sauce.visible=u,c.cheese.visible=u,c.toppings.visible=f&&!!h.topping;let d=this.cfg.economy.styles[h.style],g=h.bakeTotal||(d?d.bakeSeconds:10),_=h.stage==="baking"?1-Math.max(0,h.bakeLeft)/g:h.stage==="ready"?1:0,m=Math.min(1,Math.max(0,_));c.crustMat.color.copy(xx).lerp(vx,m),c.cheeseMat.color.copy(Mx).lerp(bx,m),h.topping&&c.topMat.color.set(Of[h.topping]||"#ffffff"),c.pop=Math.max(0,c.pop-e*3.5);let p=Math.sin(c.pop*Math.PI)*.25;c.group.scale.set(c.s*(1+p),c.s*(1-p*.6),c.s*(1+p));let x=Sx.has(h.stage);if(c.ring.visible=x,x){let y=1+Math.sin(this.time*6)*.08;c.ring.scale.setScalar(.95*y),c.ring.position.y=.3+Math.sin(this.time*3)*.03}}}pick(e){let t=[];for(let o of this.pizzas.values())o.leaving||t.push(o.hit);for(let o of this.customers.values())o.leaving||t.push(o.hit);let i=e.intersectObjects(t,!1),r=i.find(o=>o.object.userData.kind==="pizza")||i[0];return r?{kind:r.object.userData.kind,id:r.object.userData.id}:null}positionOf(e,t){let s=(e==="customer"?this.customers:this.pizzas).get(t);return s?[s.group.position.x,s.group.position.y+(e==="customer"?1.9:.3),s.group.position.z]:null}steamPoints(){let e=[];for(let t of this.pizzas.values())!t.leaving&&t.data.stage==="ready"&&e.push([t.x,t.y+.12,t.z]);return e}};var Ax=36,Rx=30,Cx=34,Wo=class{constructor(e){this.env=e,this.root=new ot,e.scene.add(this.root);let t=new $t({color:"#ffd24a",emissive:new me("#8a5a00"),emissiveIntensity:.7});this.coins=[];for(let i=0;i<Ax;i++){let s=new Pe(ke.cyl(12),t);s.visible=!1,this.root.add(s),this.coins.push({m:s,life:0,vx:0,vy:0,vz:0,spin:0})}this.sparkMats={green:new vt({color:"#8fe3a0",toneMapped:!1}),red:new vt({color:"#ff6b81",toneMapped:!1}),gold:new vt({color:"#ffe08a",toneMapped:!1})},this.sparks=[];for(let i=0;i<Rx;i++){let s=new Pe(ke.ico(0),this.sparkMats.green);s.visible=!1,this.root.add(s),this.sparks.push({m:s,life:0,vx:0,vy:0,vz:0})}this.puffs=[];for(let i=0;i<Cx;i++){let s=new vt({color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1}),r=new Pe(ke.sphere(8,6),s);r.visible=!1,this.root.add(r),this.puffs.push({m:r,mat:s,life:0,max:1,vx:0,vy:0,vz:0,size:.2,grow:1})}this.smoke={pos:null,strength:0,timer:0},this.steam={points:[],timer:0},this.rain=this.buildRain(),this.bunting=this.buildBunting()}puff(e,t="gold",i=6){if(t==="gold"){let r=0;for(let o of this.coins)if(!(o.life>0)&&(o.m.position.set(e[0]+(Math.random()-.5)*.3,e[1],e[2]+(Math.random()-.5)*.3),o.m.scale.set(.085,.02,.085),o.m.visible=!0,o.life=.9+Math.random()*.4,o.vx=(Math.random()-.5)*2.2,o.vy=3+Math.random()*2.2,o.vz=(Math.random()-.2)*1.8,o.spin=8+Math.random()*10,++r>=i))break}let s=0;for(let r of this.sparks)if(!(r.life>0)&&(r.m.material=this.sparkMats[t]||this.sparkMats.green,r.m.position.set(e[0]+(Math.random()-.5)*.4,e[1]+.1,e[2]+(Math.random()-.5)*.4),r.m.visible=!0,r.life=.5+Math.random()*.3,r.vx=(Math.random()-.5)*2.4,r.vy=1.4+Math.random()*2,r.vz=(Math.random()-.5)*2.4,++s>=Math.ceil(i/2)+2))break}emitPuff(e,t,i,s,r,o,a){for(let l of this.puffs)if(!(l.life>0)){l.m.position.set(e[0]+(Math.random()-.5)*.1,e[1],e[2]+(Math.random()-.5)*.1),l.mat.color.set(t),l.size=i,l.grow=o,l.life=s,l.max=s,l.opacity=a,l.vx=.18+Math.random()*.2,l.vy=r*(.8+Math.random()*.4),l.vz=(Math.random()-.5)*.15,l.m.visible=!0;return}}setSmoke(e,t){this.smoke.pos=e,this.smoke.strength=t}setSteam(e){this.steam.points=e}buildRain(){let t=new Float32Array(2520);for(let r=0;r<420;r++){let o=(Math.random()-.5)*34,a=Math.random()*14,l=-8+Math.random()*24;t.set([o,a,l,o-.06,a+.6,l],r*6)}let i=new _t;i.setAttribute("position",new Xt(t,3));let s=new ro(i,new Hs({color:"#cfe6ff",transparent:!0,opacity:.5}));return s.visible=!1,s.frustumCulled=!1,this.root.add(s),s}buildBunting(){let e=new ot,t=new Qe,i=["#ef476f","#ffd166","#06d6a0","#4ea8de","#9b5de5"];for(let s of[-3.2,7.5])for(let r=0;r<26;r++){let o=r/25,a=-11+o*22.4,l=6.6-Math.sin(o*Math.PI)*1.1;t.add(ke.cone(3),i[r%i.length],[a,l,s],[Math.PI,0,0],[.26,.5,.03])}return e.add(t.mesh(Ui,{cast:!1})),e.visible=!1,this.root.add(e),e}setEvents(e){let t=new Set(e.map(i=>i.id));this.rain.visible=t.has("rainyDay"),this.bunting.visible=t.has("foodFestival")}update(e){for(let s of this.coins){if(s.life<=0)continue;s.life-=e,s.vy-=9*e,s.m.position.x+=s.vx*e,s.m.position.y+=s.vy*e,s.m.position.z+=s.vz*e,s.m.rotation.x+=s.spin*e,s.m.rotation.z+=s.spin*.6*e;let r=Math.min(1,s.life*3);s.m.scale.set(.085*r,.02*r,.085*r),s.life<=0&&(s.m.visible=!1)}for(let s of this.sparks)s.life<=0||(s.life-=e,s.vy-=5*e,s.m.position.x+=s.vx*e,s.m.position.y+=s.vy*e,s.m.position.z+=s.vz*e,s.m.scale.setScalar(Math.max(1e-4,Math.min(1,s.life*2.4))*.07),s.life<=0&&(s.m.visible=!1));let t=this.smoke;if(t.pos&&(t.timer-=e,t.timer<=0)){t.timer=t.strength>.5?.14:.5;let s=1-(this.env.daylight??1),r=Math.round(215-s*120);this.emitPuff(t.pos,`rgb(${r},${r},${r+6})`,.2,2.6,.95,2.4,t.strength>.5?.5:.3)}let i=this.steam;if(i.timer-=e,i.timer<=0&&i.points.length){i.timer=.28;let s=i.points[Math.floor(Math.random()*i.points.length)];this.emitPuff(s,"#ffffff",.07,.9,.55,1.6,.4)}for(let s of this.puffs){if(s.life<=0)continue;s.life-=e;let r=1-s.life/s.max;s.m.position.x+=s.vx*e,s.m.position.y+=s.vy*e,s.m.position.z+=s.vz*e,s.m.scale.setScalar(s.size*(1+r*s.grow)),s.mat.opacity=s.opacity*Math.sin(Math.min(1,r*6)*Math.PI/2)*(1-r),s.life<=0&&(s.m.visible=!1)}if(this.rain.visible){let s=this.rain.geometry.attributes.position.array;for(let r=0;r<s.length;r+=6)s[r+1]-=e*16,s[r+4]-=e*16,s[r+1]<0&&(s[r+1]+=14,s[r+4]+=14);this.rain.geometry.attributes.position.needsUpdate=!0}this.bunting.visible&&(this.bunting.rotation.x=Math.sin(this.env.time*1.2)*.015)}};var Oi=n=>document.getElementById(n),Px=["customers","stretch","top","oven","serve","shop"];function Ff(n){let e={};for(let r of Px){let o=document.querySelector(`#actions [data-action="${r}"]`);e[r]=o,o.addEventListener("click",()=>n(r))}let t=null,i=0;function s(r){t===null&&(t=r),t+=(r-t)*.25,Math.abs(r-t)<.5&&(t=r),Oi("cash").textContent=bt(t)}return{tickCash:s,setRate(r){Oi("rate").textContent=U("hud.rate",{rate:Bu(r)})},setGoal(r,o){Oi("goal").textContent=r?U("hud.goal",{goal:U(r.id)}):U("hud.goalDone")},setBadges(r){for(let[o,a]of Object.entries(r)){let l=e[o];if(!l)continue;let c=l.querySelector(".badge");c.textContent=a,c.hidden=a===0}},setHighlight(r){for(let[o,a]of Object.entries(e))a.classList.toggle("pulse",o===r)},setHint(r){let o=Oi("hint");r?(o.textContent=r,o.classList.remove("hidden")):o.classList.add("hidden")},setEvents(r){let o=Oi("events");o.innerHTML="";for(let a of r){let l=document.createElement("div");l.className="chip-event",l.textContent=`${U("event."+a.id+".name")} \xB7 ${Math.max(0,Math.ceil(a.left))}s`,o.appendChild(l)}},toast(r,o=""){if(i>=3)return;i++;let a=document.createElement("div");a.className="toast "+o,a.textContent=r,Oi("toasts").appendChild(a),setTimeout(()=>{a.classList.add("out"),setTimeout(()=>{a.remove(),i--},300)},2200)},float(r,o,a="gold"){let l=document.createElement("div");l.className="float "+a,l.textContent=o,l.style.left=r.x+"px",l.style.top=r.y+"px",Oi("floats").appendChild(l),setTimeout(()=>l.remove(),1100)},setPaused(r){document.body.classList.toggle("paused",r)}}}function zf(){document.querySelectorAll("[data-i18n]").forEach(n=>{n.textContent=U(n.dataset.i18n)}),document.querySelectorAll("[data-i18n-aria]").forEach(n=>{n.setAttribute("aria-label",U(n.dataset.i18nAria))}),document.title=U("app.title")}var Fi=n=>document.getElementById(n),oi=null,ul={onOpen:()=>{},onClose:()=>{}},fl=null;function kf(n,e){fl=n,ul=e,Fi("miniClose").addEventListener("click",()=>Xo())}function Bf(){Xo()}function dl(){return oi!==null}function Xo(){if(!oi)return;let n=oi;oi=null;for(let e of n.cleanups)e();Fi("mini").classList.add("hidden"),Fi("miniBody").innerHTML="",ul.onClose()}function pl({station:n,title:e,hint:t,build:i,onDone:s}){oi&&Xo(),Fi("miniTitle").textContent=e,Fi("miniHint").textContent=t;let r=Fi("miniBody");r.innerHTML="";let o={frames:[],cleanups:[],raf:0,done:!1};oi=o,i(r,{finish:h=>{o.done||(o.done=!0,Xo(),s(h))},frame:h=>o.frames.push(h),cleanup:h=>o.cleanups.push(h)}),Fi("mini").classList.remove("hidden"),ul.onOpen(n);let l=performance.now(),c=h=>{if(oi!==o)return;let u=Math.min(.1,(h-l)/1e3);l=h;for(let f of o.frames)f(u);oi===o&&(o.raf=requestAnimationFrame(c))};o.raf=requestAnimationFrame(c),o.cleanups.push(()=>cancelAnimationFrame(o.raf))}function ml(n,e){let t=i=>e(i);window.addEventListener("keydown",t),n(()=>window.removeEventListener("keydown",t))}function Hf(n){let e=fl.economy.manual;pl({station:"dough",title:U("mini.dough.title"),hint:U("mini.dough.hint"),onDone:n,build(t,{finish:i,frame:s,cleanup:r}){let o=Dt("div","dough-area"),a=Dt("div","dough-blob");o.appendChild(a);let l=Dt("div","bar"),c=Dt("div","fill");l.appendChild(c);let h=Dt("div","bar time"),u=Dt("div","fill");h.appendChild(u),t.append(o,l,h);let f=0,d=e.doughWindowSeconds,g=null,_=p=>{f=Math.min(1,f+p/e.doughSwipesNeeded)};o.addEventListener("wheel",p=>{p.preventDefault(),_(Math.abs(p.deltaX)+Math.abs(p.deltaY))},{passive:!1}),ml(r,p=>{["ArrowLeft","ArrowRight","a","d","A","D"].includes(p.key)&&(p.preventDefault(),_(e.doughKeyStep))}),o.addEventListener("pointerdown",p=>{g=p.clientX;try{o.setPointerCapture(p.pointerId)}catch{}}),o.addEventListener("pointermove",p=>{g!==null&&(_(Math.abs(p.clientX-g)),g=p.clientX)});let m=()=>{g=null};o.addEventListener("pointerup",m),o.addEventListener("pointercancel",m),s(p=>{d-=p,a.style.transform=`scale(${1+f*.45}, ${1-f*.2})`,c.style.width=f*100+"%",u.style.width=Math.max(0,d/e.doughWindowSeconds)*100+"%",f>=1?i({finished:!0,timeLeftFrac:Math.max(0,d)/e.doughWindowSeconds}):d<=0&&i({finished:!1,timeLeftFrac:0})})}})}function Vf(n,e,t){pl({station:"dough",title:U("mini.top.title"),hint:U("mini.top.hint"),onDone:t,build(i,{finish:s,cleanup:r}){let o=Dt("div","wants",U("customer.wants",{topping:U("topping."+n.topping)})),a=Dt("div","pizza-target"),l=Dt("div","chips"),c=Lx([n.topping,...e.filter(x=>x!==n.topping).slice(0,2)]),h=null,u=null,f=null,d=!1,g=x=>{h=x;for(let y of l.children)y.classList.toggle("selected",y.dataset.topping===x)},_=()=>{h&&s({topping:h})},m=x=>{u&&(!d&&Math.hypot(x.clientX-f.x,x.clientY-f.y)<6||(d=!0,u.style.display="",u.style.left=x.clientX-40+"px",u.style.top=x.clientY-40+"px"))},p=x=>{if(!u)return;let y=u.dataset.topping,b=d;if(u.remove(),u=null,d=!1,!b)return g(h===y?null:y);let R=a.getBoundingClientRect();Math.hypot(x.clientX-(R.left+R.width/2),x.clientY-(R.top+R.height/2))<R.width/2+24&&s({topping:y})};window.addEventListener("pointermove",m),window.addEventListener("pointerup",p),r(()=>{window.removeEventListener("pointermove",m),window.removeEventListener("pointerup",p),u&&u.remove()}),a.addEventListener("click",_),ml(r,x=>{/^[1-3]$/.test(x.key)&&c[Number(x.key)-1]?g(c[Number(x.key)-1]):(x.key===" "||x.key==="Enter")&&(x.preventDefault(),_())});for(let x of c){let y=Dt("div","chip-topping "+x,U("topping."+x));y.dataset.topping=x,y.addEventListener("pointerdown",b=>{b.preventDefault(),f={x:b.clientX,y:b.clientY},d=!1,u=Dt("div","chip-topping ghost "+x,U("topping."+x)),u.dataset.topping=x,u.style.display="none",u.style.left=b.clientX-40+"px",u.style.top=b.clientY-40+"px",document.body.appendChild(u)}),l.appendChild(y)}i.append(o,a,l)}})}function Gf(n){let e=fl.economy.manual;pl({station:"oven",title:U("mini.oven.title"),hint:U("mini.oven.hint"),onDone:n,build(t,{finish:i,frame:s,cleanup:r}){let o=Dt("div","oven-track"),a=Dt("div","zone");a.style.left=50-e.ovenSweetZone*100/2+"%",a.style.width=e.ovenSweetZone*100+"%";let l=Dt("div","marker");o.append(a,l);let c=Dt("button","big-tap",U("mini.oven.tap"));t.append(o,c);let h=0,u=0;s(_=>{f||(h+=_,u=(1-Math.cos(2*Math.PI*h/e.ovenMarkerPeriodSeconds))/2,l.style.left=u*100+"%")});let f=!1,d=0,g=()=>{if(f)return;f=!0,c.disabled=!0;let m=Math.abs(u-.5)<=e.ovenSweetZone/2,p=Dt("div","stop-mark "+(m?"good":"miss"));p.style.left=u*100+"%",o.appendChild(p);let x=Dt("div","stop-note "+(m?"good":"miss"),U(m?"mini.oven.stopped.good":"mini.oven.stopped.miss"));t.insertBefore(x,c),l.classList.add("frozen"),l.style.left=u*100+"%",d=setTimeout(()=>i({markerPos:u}),900)};r(()=>clearTimeout(d)),c.addEventListener("click",g),o.addEventListener("pointerdown",g),ml(r,_=>{(_.key===" "||_.key==="Enter")&&(_.preventDefault(),g())})}})}function Dt(n,e,t){let i=document.createElement(n);return e&&(i.className=e),t!==void 0&&(i.textContent=t),i}function Lx(n){let e=[...n];for(let t=e.length-1;t>0;t--){let i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}var ir=n=>document.getElementById(n),Ms=null,Yo=null,gl="",qo=null;function sr(){return Yo!==null}function ai(){let n=qo;qo=null,Yo=null,Ms=null,ir("modal").classList.add("hidden"),ir("modalBody").innerHTML="",n&&n()}function rr(n,e,t){Yo=n,ir("modalTitle").textContent=e,ir("modal").classList.remove("hidden");let i=ir("modalBody");i.innerHTML="",gl="",Ms=()=>{i.innerHTML="",t(i)},Ms()}function qf(n){Ms&&Yo!=="collect"&&n!==gl&&(gl=n,Ms())}function le(n,e,t){let i=document.createElement(n);return e&&(i.className=e),t!==void 0&&(i.textContent=t),i}function Jt(n,e,{disabled:t=!1,primary:i=!1}={}){let s=le("button","btn"+(i?" primary":""),n);return s.disabled=t,s.addEventListener("click",e),s}function Ix(n,e,t){let i=t.economy.upgrades[n],s=e+1;switch(n){case"oven":return{slots:i.ovenSlotsBase+i.ovenSlotsPerLevel*s};case"counter":return{slots:i.maxQueueBase+i.maxQueuePerLevel*s};case"cheese":return{pct:Math.round(i.cheeseMultPerLevel*s*100)};case"decor":return{pct:Math.round(i.trafficPerLevel*s*100),item:e<i.steps.length?". Adds: "+U("decor.step."+i.steps[e]):""};case"neon":return{pct:Math.round(i.trafficPerLevel*100)};case"marketing":return{pct:Math.round(i.trafficMultPerLevel*s*100)};case"pizzaSchool":return{pct:Math.round(i.payMultPerLevel*s*100)};case"megaOven":return{slots:i.ovenSlotsPerLevel*s};default:return{}}}function Yf(n,e,t){rr("shop",U("shop.title"),i=>{let s=sn(n,e);i.append(le("h3","",U("shop.upgrades")));let r=(y,b)=>{let R=e.economy.upgrades[y],E=n.upgrades[y],A=E>=R.maxLevel,I=R.requires?.franchises||0,M=b&&n.franchise.count<I,S=A?0:gs(R,E),O=le("div","row"+(M?" locked":"")),V=le("div","info");V.append(le("b","",U("upgrade."+y+".name")),le("small","",M?U("shop.needsFranchise",{n:I}):A?U("action.maxed"):U("upgrade."+y+".desc",Ix(y,E,e))),le("small","lvl",`${E}/${R.maxLevel}`));let $=M?U("action.locked"):A?U("action.maxed"):U("action.buy",{cost:bt(S)});return O.append(V,Jt($,()=>t.buy(y),{disabled:A||M||n.cash<S})),O};for(let y of Object.keys(e.economy.upgrades)){let b=e.economy.upgrades[y];b.enabled===!1||b.group==="empire"||i.append(r(y,!1))}i.append(le("h3","",U("shop.empire"))),i.append(le("p","muted",U("shop.empireDesc")));for(let y of Object.keys(e.economy.upgrades)){let b=e.economy.upgrades[y];b.enabled===!1||b.group!=="empire"||i.append(r(y,!0))}i.append(le("h3","",U("shop.locations")));for(let y of Object.keys(e.locations)){let b=e.locations[y],R=!!n.unlockedLocations[y],E=n.location===y,A=le("div","row"),I=le("div","info");I.append(le("b","",U(b.nameKey)),le("small","",U(b.descKey)));let M=U("action.move"),S=!1;E?(M=U("location.current"),S=!0):R||(M=U("action.locked"),S=!0,I.append(le("small","lvl",U("location.locked",{target:bt(b.unlock?.value??0)})))),A.append(I,Jt(M,()=>t.move(y),{disabled:S,primary:!E&&R})),i.append(A)}i.append(le("h3","",U("shop.staff")));for(let y of Object.keys(e.economy.staff)){let b=e.economy.staff[y],R=n.staff[y],E=R>=b.maxLevel,A=E?0:gs(b,R),I=y==="cashier"?U("staff.cashier.desc",{secs:s.cashierOrderSec.toFixed(1)}):U("staff.cook.desc",{speed:s.cookSpeed.toFixed(1)}),M=le("div","row"),S=le("div","info");S.append(le("b","",U("staff."+y+".name")),le("small","",I),le("small","lvl",R===0?U("staff.notHired"):U("staff.level",{level:R})));let O=R===0?U("action.hire",{cost:bt(A)}):U("action.upgrade",{cost:bt(A)});M.append(S,Jt(E?U("action.maxed"):O,()=>t.hire(y),{disabled:E||n.cash<A,primary:R===0})),i.append(M)}i.append(le("h3","",U("shop.recruit")));let o=e.economy.recruit,a=n.franchise.count>=o.requiresFranchises;a||i.append(le("p","muted",U("shop.recruitLocked")));let l=$s(n,e).recruitCap;for(let y of["cashier","cook"]){let b=n.staffing[y]||0,R=b>=l,E=n.staff[y]>0,A=R?0:Math.ceil(o[y].baseCost*Math.pow(o[y].growth,b)),I=le("div","row"+(a?"":" locked")),M=le("div","info");M.append(le("b","",U("recruit."+y+".name")),le("small","",E?U("recruit."+y+".desc",{n:b,max:l}):U("recruit.needHire",{role:U("staff."+y+".name")})));let S=a?R?U("action.maxed"):U("action.recruit",{cost:bt(A)}):U("action.locked");I.append(M,Jt(S,()=>t.recruit(y),{disabled:!a||R||!E||n.cash<A,primary:a&&E&&!R})),i.append(I)}i.append(le("h3","",U("shop.franchise")));let c=le("div","row"),h=le("div","info"),u=_s(n,e),f=e.economy.prestige.tiers,d=ni(n,e),g=f.find(y=>y.minFranchises>n.franchise.count);h.append(le("b","",U("franchise.title")),le("small","",u?U("franchise.ready")+" "+U("franchise.gain",{points:Pi(n,e)}):U("franchise.locked",{target:bt(Ci(n,e)),have:bt(Ri(n))})),le("small","",U("franchise.now",{tier:U("tier."+f[d].id)})+(g?". "+U("franchise.next",{tier:U("tier."+g.id)}):"")),le("small","lvl",U("franchise.points",{points:n.franchise.points})+" "+U("franchise.traffic",{pct:Math.round((Do(n,e)-1)*100)})+" "+U("franchise.ovens",{x:Js(n,e).toFixed(1)}))),c.append(h,Jt(U("action.franchise"),()=>t.franchise(),{disabled:!u})),i.append(c),i.append(le("h3","",U("shop.starterPack")));let _=le("div","row"),m=le("div","info");m.append(le("b","",U("shop.starterPack")),le("small","",U("shop.starterPackDesc"))),_.append(m,Jt(Dx(e),()=>t.stub("starterPack"))),i.append(_),i.append(le("h3","",U("shop.ovenSkins")));let p=le("div","row"),x=le("div","info");x.append(le("b","",U("shop.ovenSkins")),le("small","",U("shop.ovenSkinsDesc"))),p.append(x,Jt(U("action.soon"),()=>t.stub("ovenSkins"))),i.append(p)})}function Dx(n){return n.economy.monetizationStubs.starterPack.priceLabel}function Zf(n,e,t){let i=1;rr("collect",U("collect.title"),s=>{s.innerHTML="",s.append(le("p","lead",U("collect.body",{duration:Hc(n.elapsed)})));let r=le("div","big-amount",U("collect.earned",{amount:Bc(n.earned*i)}));s.append(r),n.capped&&s.append(le("p","muted",U("collect.capped",{cap:Hc(e.economy.time.offlineCapSeconds)}))),i>1&&s.append(le("p","muted",U("collect.boosted")));let o=le("div","stack"),a=Jt(i>1?`${U("action.collect")} x${i}`:U("action.collect"),()=>{qo=null,ai(),t.collect(i)},{primary:!0});if(o.append(a),i===1){let l=Jt(U("action.adDouble"),async()=>{l.disabled=!0,await t.watchAd()&&(i=2),Ms()});o.append(l,le("small","muted",U("action.adDoubleHint")))}s.append(o)}),qo=()=>t.collect(1)}function $f(n,e,t){rr("franchise",U("franchise.title"),i=>{let s=Pi(n,e),o=e.economy.prestige.tiers.find(l=>l.minFranchises>n.franchise.count);i.append(le("p","lead",U("franchise.explain",{bonus:Math.round(e.economy.prestige.bonusPerPoint*100),traffic:Math.round((e.economy.prestige.trafficPerFranchise||0)*100)})),le("p","",U("franchise.trafficNext",{pct:Math.round((Do(n,e,n.franchise.count+1)-1)*100)})),le("p","",U("franchise.nextCost",{target:bt(Ci({franchise:{count:n.franchise.count+1}},e))})),le("p","",U("franchise.gain",{points:s})+(o?" "+U("franchise.next",{tier:U("tier."+o.id)})+".":"")),le("p","muted",U("franchise.resets")),le("p","muted",U("franchise.keeps")),le("p","muted",U("franchise.points",{points:n.franchise.points})));let a=le("div","stack");a.append(Jt(U("action.franchise"),()=>{ai(),t.confirmFranchise()},{primary:!0})),a.append(Jt(U("action.cancel"),()=>ai())),i.append(a)})}function bs(n,e){rr("settings",U("settings.title"),t=>{t.append(Xf(U("settings.sound"),n.settings.sound,o=>e.setSound(o)),Xf(U("settings.notify"),n.settings.notify,o=>e.setNotify(o),U("settings.notifyDesc")),Wf(U("settings.look"),U("settings.lookDesc"),["3d","2d"],n.settings.look||"3d",o=>e.setLook(o),o=>U("settings.look."+o)),Wf(U("settings.graphics"),U("settings.graphicsDesc"),["auto","high","low"],n.settings.graphics||"auto",o=>e.setGraphics(o),o=>U("settings.graphics."+o)));let i=le("button","version-tap",`${U("app.version")}`),s=0;i.addEventListener("click",()=>{s++,s>=5&&(s=0,e.openDebug())}),t.append(i),t.append(le("p","keys-help",U("settings.keys")));let r=le("div","stack");r.append(Jt(U("action.reset"),()=>{globalThis.confirm(U("action.confirmReset"))&&e.reset()})),t.append(r)})}function Wf(n,e,t,i,s,r){let o=le("div","row"),a=le("div","info");a.append(le("b","",n),le("small","",e));let l=le("div","segmented");for(let c of t){let h=le("button","seg"+(c===i?" on":""),r(c));h.addEventListener("click",()=>s(c)),l.append(h)}return o.append(a,l),o}function Xf(n,e,t,i){let s=le("div","row"),r=le("div","info");r.append(le("b","",n)),i&&r.append(le("small","",i));let o=le("button","switch"+(e?" on":""));return o.setAttribute("role","switch"),o.setAttribute("aria-checked",String(e)),o.addEventListener("click",()=>t(!o.classList.contains("on"))),s.append(r,o),s}function _l(n){rr("debug",U("debug.title"),e=>{let t=[["debug.addCash",n.addCash,1e3],["debug.addCashBig",n.addCash,2e4],["debug.skip",n.skipHour],["debug.rain",n.event,"rainyDay"],["debug.festival",n.event,"foodFestival"],["debug.night",n.toggleNight],["debug.away",n.simulateAway],["debug.franchiseReady",n.franchiseReady],["debug.resetAll",n.wipe]],i=le("div","stack");for(let[s,r,o]of t)i.append(Jt(U(s),()=>r(o)));e.append(i)})}var Ss=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function Nx(n){n.style.fontSize="22px";let e=22;for(;(n.scrollHeight>n.clientHeight||n.scrollWidth>n.clientWidth)&&e>4;)e-=.5,n.style.fontSize=e+"px"}function Jf(){let n=document.getElementById("signs"),e=[];function t(r){n.innerHTML="",e=r.map(o=>{let a=document.createElement("div");return a.className="sign-label "+o.kind+(o.size?" board":""),n.appendChild(a),{spec:o,el:a,html:""}})}function i(r,o,a){if(r.kind==="menu"){let l=Object.entries(a.economy.styles).filter(([c,h])=>h.enabled&&o.styles[c]).slice(0,3).map(([c,h])=>`<div class="line"><span>${Ss(U("style."+c))}</span><b>${bt(h.basePrice)}</b></div>`);return`<div class="title">${Ss(U("sign.menu.title"))}</div>${l.join("")}`}return r.kind==="neon"?Ss(U("sign.neon")):r.kind==="shopname"?Ss(U("app.title")):r.kind==="franchise"?Ss(U("sign.franchise",{count:o.franchise.count})):Ss(U("sign.sandwich"))}function s(r,o,a){let l=o.upgrades.neon>=1;for(let c of e){if(!(c.spec.kind!=="neon"||l)){c.el.style.display="none";continue}let u=i(c.spec,o,a);u!==c.html&&(c.el.innerHTML=u,c.html=u);let f=r.toScreen(c.spec.pos);if(c.el.style.display=f.front?"":"none",c.spec.size){let[g,_]=c.spec.size,m=c.spec.pos,p=r.toScreen([m[0]+g/2,m[1],m[2]]),x=r.toScreen([m[0],m[1]+_/2,m[2]]),y=2*Math.abs(p.x-f.x),b=2*Math.abs(x.y-f.y);c.el.style.left=f.x+"px",c.el.style.top=f.y+"px",c.el.style.width=y+"px",c.el.style.height=b+"px";let R=Math.round(y)+"x"+Math.round(b)+"|"+c.html;R!==c.fitKey&&(c.fitKey=R,Nx(c.el));continue}let d=(c.el.offsetWidth||100)/2+6;c.el.style.left=Math.min(f.w-d,Math.max(d,f.x))+"px",c.el.style.top=f.y+"px"}}return{setSpecs:t,update:s}}var yl=.1,Kf=20,Ox=60,En=n=>document.getElementById(n),we,X,qe,Qf,ci=null,rn=null,id="",bl=null,on,zi,De,li=null,Zo=0,Ml=performance.now(),xl=0,jf="",ed=-1e9;async function Fx(){we=await Fu(),ku(we.strings),zf();let n=Vu(),e=Date.now();X=n||Co(we,e),we.locations[X.location]||(X.location="corner"),rn=rd(),qe=xf(En("scene"),rn),on=new Go(qe,rn,we),zi=new Wo(qe),De=Ff(ad),bl=Jf(),Sl(),kf(we,{onOpen:t=>qe.focus(t?rn.stations[t]:null),onClose:()=>qe.focus(null)}),Po(X.settings.sound),qe.setQuality(X.settings.graphics||"auto"),qe.setLook(X.settings.look||"3d"),Xc(),at("session_start_state",{fresh:!n}),window.addEventListener("resize",()=>qe.resize()),window.addEventListener("orientationchange",()=>qe.resize()),qe.resize(),qx(),Yx(),n&&wl(e),En("loading").classList.add("hidden"),requestAnimationFrame(hd),new URLSearchParams(location.search).has("debug")&&En("btnDebug").classList.remove("hidden"),window.pizzaStand={get state(){return X},get layout(){return rn},cfg:we,debug:El(),env:qe,actors:on}}function sd(){return we.locations[X.location]}function rd(){let n=ni(X,we),e=Lf(sd(),we.economy.prestige.tiers[n],n);return e.decorSteps=we.economy.upgrades.decor.steps,e}function od(){return`${X.location}|${ni(X,we)}|${X.upgrades.decor}|${X.upgrades.marketing}|${X.upgrades.pizzaSchool}|${X.upgrades.megaOven}`}function Sl(n=!0){rn=rd(),ci&&(qe.scene.remove(ci),ci.traverse(e=>{e.geometry&&e.geometry.dispose()})),qe.glowMats.length=0,qe.nightFades.length=0,qe.updaters.length=0,qe.signs=[],ci=new ot,ci.add(bf(rn,qe)),Qf=If(rn,qe,{decor:X.upgrades.decor,empire:{marketing:X.upgrades.marketing,pizzaSchool:X.upgrades.pizzaSchool,megaOven:X.upgrades.megaOven}}),ci.add(Qf),qe.styleNew(ci),qe.scene.add(ci),qe.setLocation(rn,n),on.setLocation(rn),bl.setSpecs(qe.signs),id=od()}function zx(n){if(!cf(X,n,we).ok)return De.toast(U("toast.noPizza"));Sl(),Gt.whoosh(),De.toast(U("toast.locationMoved",{location:U(sd().nameKey)})),at("location_move",{to:n}),Hn()}function Hn(){let n=Date.now();li||(X.savedAt=n),Gu(X)}function wl(n=Date.now()){let e=hf(X,n,we);if(!(e.rawSeconds<Ox)){if(e.earned<=0){Jc(X,e,we,1),X.savedAt=n;return}li=e,Zf(e,we,{collect:t=>{li&&(Jc(X,e,we,t),li=null,X.savedAt=Date.now(),at("offline_collect",{seconds:Math.round(e.elapsed),earned:Math.floor(e.earned*t),multiplier:t,capped:e.capped}),Hn())},watchAd:()=>kx(we.economy.monetizationStubs.offlineBoostAd)})}}function kx(n){return at("ad_offline_boost_requested"),new Promise(e=>{setTimeout(()=>{at("ad_offline_boost_completed"),De.toast(U("toast.adStub")),e(!0)},n.placeholderSeconds*1e3)})}function cr(n){switch(n.type){case"arrived":case"order_taken":Gt.pop();break;case"stage":n.stage==="ready"&&Gt.bell();break;case"served":{Gt.cash(),on.leaveCustomer(n.customerId,!0),on.leavePizza(n.pizzaId);let e=rn.register,t=on.positionOf("customer",n.customerId)||[e[0],1.6,e[2]],i=qe.toScreen([t[0],t[1]+.4,t[2]]);De.float(i,"+"+bt(n.amount),"gold"),n.tip>=.5&&De.float({x:i.x,y:i.y-26},U("toast.tip",{tip:bt(n.tip)}),"tip"),zi.puff([e[0],1.5,e[2]+.2],"gold",n.big?16:7),n.big&&qe.shakeCam(.12),at("sale",{total:Math.floor(n.total),customerType:n.customerType,wrongTopping:n.wrongTopping,auto:!!n.auto}),X.flags.firstSale||(X.flags.firstSale=!0,at("first_sale"));break}case"angry":Gt.angry(),on.leaveCustomer(n.customerId,!1),De.toast(U("toast.angry",{name:U("customer.name."+n.nameIdx),penalty:bt(n.penalty)}),"bad"),qe.shakeCam(.04),at("customer_angry",{customerType:n.customerType});break;case"turned_away":{let e=performance.now();e-ed>8e3&&(ed=e,De.toast(U("customer.turnedAway"),"bad"),at("customer_turned_away",{queueFull:!0}));break}case"event_start":Gt.bell(),De.toast(U("toast.eventStart",{event:U("event."+n.id+".name")})),at("event_start",{id:n.id});break;case"event_end":De.toast(U("toast.eventEnd",{event:U("event."+n.id+".name")}));break;case"style_unlocked":De.toast(U("toast.unlocked",{style:U("style."+n.style)}));break;case"location_unlocked":Gt.bell(),De.toast(U("toast.locationUnlocked",{location:U(we.locations[n.location].nameKey)})),at("location_unlocked",{location:n.location});break;case"franchise_ready":Gt.bell(),De.toast(U("toast.franchiseReady")),at("franchise_ready",{count:X.franchise.count});break;case"tutorial_step":at("tutorial_step",{step:n.step});break;case"tutorial_done":De.toast(U("tut.done")),at("tutorial_done");break;case"idle_staff":{let e=U("staff."+n.role+".name");De.toast(U("toast.staffIdle",{role:e})),Bx(U("toast.staffIdle",{role:e}));break}default:break}}function Bx(n){if(!(!X.settings.notify||!document.hidden)&&!(typeof Notification>"u"||Notification.permission!=="granted"))try{new Notification(U("app.title"),{body:n})}catch{}}function Hx(){return X.customers.filter(n=>n.state==="waiting").sort((n,e)=>n.id-e.id)[0]}function Vx(n){return X.pizzas.filter(e=>e.stage===n).sort((e,t)=>e.id-t.id)[0]}function ad(n){if(Gt.click(),n==="customers")return cd();if(n==="shop")return Gx();if(n==="stretch")return or("dough");if(n==="top")return or("topping");if(n==="oven")return or("load");if(n==="serve")return or("ready")}function cd(n){let e=n?ii(X,n):Hx();if(!e||e.state!=="waiting")return De.toast(U("toast.noPizza"));let t=No(X,e.id,we);t.ok&&cr({...t,type:"order_taken"})}function or(n,e){let t=e?X.pizzas.find(i=>i.id===e):Vx(n);if(!t||t.stage!==n)return De.toast(U("toast.noPizza"));if(n==="dough")Hf(i=>$o(Qs(X,t.id,"stretch",i,we)));else if(n==="topping"){let i=ii(X,t.customerId);Vf(i,we.economy.customers.toppings,s=>$o(Qs(X,t.id,"topping",s,we)))}else if(n==="load"){if(X.pizzas.filter(i=>i.stage==="baking").length>=sn(X,we).ovenSlots)return De.toast(U("toast.ovenFull"));Gf(i=>$o(Qs(X,t.id,"load",i,we)))}else n==="ready"&&$o(Qs(X,t.id,"serve",{},we))}function $o(n){if(!n.ok){De.toast(n.reason==="ovenFull"?U("toast.ovenFull"):U("toast.noPizza"));return}if(n.type==="served")return cr(n);if(n.type==="stage"){let e=n.stage==="baking"?td("oven"):td(n.stage==="load"?"load":"dough");zi.puff(e,"green",4),Gt.pop()}}function td(n){return rn.stations[n]}function Gx(){Yf(X,we,{buy:n=>{let e=nf(X,n,we);if(!e.ok)return De.toast(e.reason==="cash"?U("toast.notEnough"):U("toast.noPizza"));if(Gt.bell(),n==="decor"){let t=we.economy.upgrades.decor.steps;De.toast(U("toast.decorAdded",{item:U("decor.step."+t[Math.min(t.length,X.upgrades.decor)-1])}))}else De.toast(U("toast.bought",{item:U("upgrade."+n+".name")}));e.first&&at("first_purchase",{item:n,cost:e.cost}),Hn()},recruit:n=>{let e=of(X,n,we);if(!e.ok){let t=e.reason==="cash"?U("toast.notEnough"):e.reason==="needsFranchise"?U("shop.recruitLocked"):e.reason==="needsHire"?U("recruit.needHire",{role:U("staff."+n+".name")}):U("action.maxed");return De.toast(t)}Gt.bell(),De.toast(U("toast.recruited",{role:U("staff."+n+".name")})),Hn()},hire:n=>{let e=sf(X,n,we);if(!e.ok)return De.toast(e.reason==="cash"?U("toast.notEnough"):U("toast.noPizza"));Gt.bell(),De.toast(U("toast.hired",{role:U("staff."+n+".name")})),e.first&&at("first_purchase",{item:n,cost:e.cost}),Hn()},franchise:()=>$f(X,we,{confirmFranchise:Wx}),move:n=>zx(n),stub:n=>{at("monetization_stub_tap",{name:n}),De.toast(U("toast.comingSoon"))}})}function Wx(){if(!Zc(X,we))return De.toast(U("franchise.locked",{target:bt(Ci(X,we)),have:bt(Ri(X))}));let n=Pi(X,we),e=ni(X,we);X=af(X,we,Co).state;let i=ni(X,we);at("prestige",{points:X.franchise.points,gain:n,count:X.franchise.count,tier:we.economy.prestige.tiers[i].id,lifetimeCash:Math.floor(X.lifetimeCash)}),Gt.bell(),De.toast(U("toast.franchised",{mult:(1+we.economy.prestige.bonusPerPoint*X.franchise.points).toFixed(1)})),i!==e&&De.toast(U("toast.tierUp",{tier:U("tier."+we.economy.prestige.tiers[i].id)})),Hn()}function ar(){return{setSound:n=>{X.settings.sound=n,Po(n),bs(X,ar())},setNotify:async n=>{if(!n)X.settings.notify=!1;else if(typeof Notification<"u"){let e=await Notification.requestPermission();X.settings.notify=e==="granted"}at("notify_opt_in",{on:X.settings.notify}),bs(X,ar())},setLook:n=>{X.settings.look=n,qe.setLook(n),at("art_style",{look:n}),bs(X,ar())},setGraphics:n=>{X.settings.graphics=n,qe.setQuality(n),at("graphics_quality",{quality:n}),bs(X,ar())},reset:()=>ld(),openDebug:()=>_l(El())}}function ld(){Wu(),li=null,X=Co(we),at("save_reset"),ai(),De.toast(U("action.reset"))}function El(){return{addCash:n=>{X.cash+=n,X.lifetimeCash+=n,De.toast(U("toast.cashDebug",{amount:bt(n)}))},skipHour:()=>{for(let n=0;n<7200;n++){let e=$c(X,.5,we,[]);for(let t of e)(t.type==="event_start"||t.type==="event_end"||t.type==="tutorial_done")&&cr(t)}De.toast("+1h")},event:n=>{qc(X,n,we),cr({type:"event_start",id:n})},toggleNight:()=>{X.dayClock=(X.dayClock+.5)%1},simulateAway:()=>{ai(),X.savedAt-=8*3600*1e3,wl()},franchiseReady:()=>{X.lifetimeCash=Math.max(X.lifetimeCash,(X.franchise.lifetimeAtLast||0)+Ci(X,we))},wipe:ld}}var nd={1:"customers",2:"stretch",3:"top",4:"oven",5:"serve",6:"shop"};function Xx(){window.addEventListener("keydown",n=>{if(!(n.ctrlKey||n.metaKey||n.altKey)){if(n.key==="Escape")return dl()?Bf():sr()?En("modalClose").click():void 0;if(!(sr()||dl()||li)){if(nd[n.key])return n.preventDefault(),ad(nd[n.key]);(n.key==="m"||n.key==="M")&&(X.settings.sound=!X.settings.sound,Po(X.settings.sound),De.toast(U("settings.sound")+": "+(X.settings.sound?"on":"off")))}}})}function qx(){Xx(),En("btnSettings").addEventListener("click",()=>bs(X,ar())),En("btnDebug").addEventListener("click",()=>_l(El())),En("modalClose").addEventListener("click",()=>ai()),En("modal").addEventListener("pointerdown",n=>{n.target.id==="modal"&&ai()})}function Yx(){let n=En("scene"),e=new bo,t=new ue,i=null;n.addEventListener("pointerdown",s=>{i={x:s.clientX,y:s.clientY,t:performance.now()}}),n.addEventListener("pointerup",s=>{if(!i)return;let r=Math.hypot(s.clientX-i.x,s.clientY-i.y),o=performance.now()-i.t<450;if(i=null,r>12||!o||sr())return;let a=n.getBoundingClientRect();t.set((s.clientX-a.left)/a.width*2-1,-((s.clientY-a.top)/a.height)*2+1),e.setFromCamera(t,qe.camera);let l=on.pick(e);if(l){if(l.kind==="customer"){let c=ii(X,l.id);return c&&c.state==="waiting"?cd(c.id):void 0}if(l.kind==="pizza"){let c=X.pizzas.find(h=>h.id===l.id);if(!c)return;["dough","topping","load","ready"].includes(c.stage)&&or(c.stage,c.id)}}}),n.addEventListener("pointercancel",()=>{i=null}),n.addEventListener("pointermove",s=>{if(s.pointerType!=="mouse"||sr()){n.style.cursor="";return}let r=n.getBoundingClientRect();t.set((s.clientX-r.left)/r.width*2-1,-((s.clientY-r.top)/r.height)*2+1),e.setFromCamera(t,qe.camera),n.style.cursor=on.pick(e)?"pointer":"default"}),n.addEventListener("touchmove",s=>s.preventDefault(),{passive:!1})}function hd(n){requestAnimationFrame(hd);let e=Math.min(.1,(n-Ml)/1e3);if(Ml=n,!li){Zo+=e;let i=0;for(;Zo>=yl&&i<Kf;){let s=$c(X,yl,we,[]);for(let r of s)cr(r);Zo-=yl,i++}i===Kf&&(Zo=0)}id!==od()&&Sl(!1);let t=X.pizzas.some(i=>i.stage==="baking");on.sync(X),on.update(e,X),zi.setSmoke(qe.smokeAt,t?1:.2),zi.setSteam(on.steamPoints()),zi.update(e),zi.setEvents(X.events.active),qe.update(e,X.dayClock),Uf(qe,X.upgrades.neon),Nf(qe,t,qe.time),bl.update(qe,X,we),Df(qe,X,performance.now()/1e3),xl+=e,xl>=we.economy.time.autosaveSeconds&&(xl=0,Hn()),li||Zx(),qe.renderer.render(qe.scene,qe.camera)}var vl=0;function Zx(){if(vl-=1,vl>0)return;vl=4;let n=sn(X,we);De.tickCash(X.cash),De.setRate(n.idleRate),De.setGoal(Ku(X,we)),De.setBadges({customers:X.customers.filter(i=>i.state==="waiting").length,stretch:X.pizzas.filter(i=>i.stage==="dough").length,top:X.pizzas.filter(i=>i.stage==="topping").length,oven:X.pizzas.filter(i=>i.stage==="load").length,serve:X.pizzas.filter(i=>i.stage==="ready").length});let e=we.economy.tutorial[X.tutorialStep];!X.tutorialDone&&e?(De.setHint(U(e.textKey)),De.setHighlight(e.highlight)):(De.setHint(null),De.setHighlight(null)),De.setEvents(X.events.active.map(i=>({id:i.id,left:i.endsAt-X.gameTime})));let t=`${X.location}|${JSON.stringify(X.unlockedLocations)}|${Math.floor(X.cash)}|${JSON.stringify(X.upgrades)}|${JSON.stringify(X.staff)}|${JSON.stringify(X.staffing)}|${X.franchise.points}|${X.franchise.count}|${Zc(X,we)}|${Math.floor(Ri(X)/500)}`;t!==jf&&(jf=t,qf(t))}document.addEventListener("visibilitychange",()=>{document.hidden?(De.setPaused(!0),X.tutorialDone||at("churn_point",{where:"tutorial_step_"+X.tutorialStep}),Zu({gameTime:Math.round(X.gameTime)}),Hn()):(De.setPaused(!1),Ml=performance.now(),Xc(),wl())});window.addEventListener("pagehide",()=>Hn());Fx().catch(n=>{console.error(n);let e=n&&n.message?n.message:String(n);window.__pizzaFail?window.__pizzaFail(e):En("loading").textContent="The game could not start: "+e});})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
