var games = [
  {
    id: 'customgame',
    title: 'Add custom game',
    image: 'assets/images/add.png'
  },
  {
    id: 'idlebreakout',
    title: 'Idle Breakout',
    url: 'https://assets.3kh0.net/idle-breakout/index.html/',
    image: 'https://play-lh.googleusercontent.com/e5jzYTn7Mjh9Ghn-DFpVedkOlRfSOyCS2AFgXdTrADIuuUbjx6vP6r_YOM2j5m7uLQ'
  },
  {
    id: 'eggycar',
    title: 'Eggy Car',
    url: 'https://assets.3kh0.net/eggycar/index.html',
    image: 'https://assets.3kh0.net/eggycar/eggy-car.png'
  },
  {
    id: 'rocketleague',
    title: 'Rocket League',
    url: 'https://cdn.githubraw.com/carbonsystems-dev/gamevault/main/Rocket-League/index.html',
    image: 'https://www.softgozar.com/Image/Softwares/Thumbnail/Rocket_League_Anniversary_SoftGozar.com.png'
  },
    {
    id: 'gswitch3',
    title: 'G-Switch 3',
    description: 'NOT DONE',
    url: 'https://ubg98.github.io/GSwitch3/',
    image: 'data:image/jpeg;base64,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'
  },
  {
    id: 'cookieclicker',
    title: 'Cookie Clicker',
    description: 'Cookie Clicker is an addictive incremental game where players click to produce cookies, unlock upgrades, and aim to amass an ever-growing mountain of delicious digital treats.',
    url: 'https://sushi8756.github.io/Cookie-Clicker-2.031/',
    image: 'https://cdn.discordapp.com/icons/339131488111034389/73f15cd93d96504af9877a53816d110c.png'
  },
  {
    id: 'jacksmith',
    title: 'Jacksmith',
    url: 'https://art-class.github.io/assets/jacksmith',
    image: 'https://lh3.googleusercontent.com/dJAftLFmxmWdTAEjuolFrtNNAX3D0HjODTm9703CP7JqM_jFgOgPR75d6xqRsYTwoTot'
  },
  {
    id: 'thereisnogame',
    title: 'There Is No Game',
    url: 'https://assets.3kh0.net/there-is-no-game/index.html',
    image: 'https://play-lh.googleusercontent.com/a6DfrYUL6viV0LAZFplqqA44gE0LHE0PyDnKHgdlydiUvccwzSBWrmRQSx5cjdL74Us=w240-h480-rw'
  },
  {
    id: 'fbwg',
    title: 'Fireboy and Watergirl',
    description: 'A 2 player game where you have to work together using logic and teamwork to get to the finish line.',
    url: 'https://educationgg-23704.web.app/games/FBWG4-main/index.html',
    image: 'https://play-lh.googleusercontent.com/5-YcjiTyMrPJEZe078dHMxnCxcg2A_8NWJZQieRvn2Gkf8JOuHZEbTmFyQ9gn5p2lnU'
  },
  {
    id: 'driftboss',
    title: 'Drift Boss',
    image: 'https://play-lh.googleusercontent.com/fLrnXuD1B0w6FEDJ1UKmv_TYbNyJ4GwzsQu9ltx57MfIj037nig4cVunG3CYmczkjMDA',
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://738501629-461082748261058427.preview.editmysite.com/uploads/b/139890129-817510652323129407/files/drbo.xml'
  },
  {
    id: 'osu',
    title: 'osu!',
    description: 'A web version of osu!',
    url: 'https://web-osu.github.io/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Osu%21_Logo_2016.svg/1200px-Osu%21_Logo_2016.svg.png',
  },
  {
    id: 'cuttherope',
    title: 'Cut the Rope',
    url: 'https://assets.3kh0.net/ctr/index.html',
    image: 'https://play-lh.googleusercontent.com/8FNcAyLXtQB_0Ux2ZO8VZoEoihL6a5VMBNf6V2lydRM24hXLnNUdlEup1d5miVjl3JY'
  },
  {
    id: 'tombofthemask',
    title: 'Tomb of the Mask',
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/element@9cccb2fafb569c963501a5d818472b561121cea6/totm.xml',
    image: 'https://play-lh.googleusercontent.com/gTd127I81O2i2Q6kfCJoN-M0OSWmgsdjB47orUFpLwANW7VZLJYrOxMVt-OpilDXszg=w240-h480-rw'
  },
  {
    id: 'backrooms',
    title: 'Backrooms',
    description: 'Scary game based on the viral 4Chan post.',
    url: 'https://assets.3kh0.net/backrooms/index.html',
    image: 'https://media.wired.com/photos/627b0c1fb6048c47d506c6c0/1:1/w_679,h_679,c_limit/Backrooms-Games.jpg'
  },
  {
    id: 'youarebezos',
    title: 'You are Bezos',
    url: 'https://assets.3kh0.net/you-are-bezos/index.html',
    image: 'https://img.itch.zone/aW1nLzE1NzI2NjIucG5n/original/Equhiy.png'
  },
  {
    id: 'papaburgers',
    title: 'Papa\'s Burgeria',
    url: 'https://mazahacka2017.github.io/papas-burgeria',
    image: 'https://i.flipline.com/gamefiles/papasburgeriatogo/app_upsell_C.jpg'
  },
  {
    id: 'papasicecream',
    title: 'Papa\'s Scooperia',
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2Fpapa-s-scooperia.xml',
    image: 'https://play-lh.googleusercontent.com/KpLBHo89bWG3jmuYb_KqDD1rZSY4XzXcHiMLZ1PCv83GMwVMcJluuuXrT32oQGCo51A'
  },
  {
    id: 'ultimatechess',
    title: 'Ultimate Chess',
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2Fultimate-chess.xml',
    image: 'https://img.kbhgames.com/2010/05/Ultimate-Chess.jpg'
  },
  {
    id: 'jetpackjoyride',
    title: 'Jetpack Joyride',
    url: 'https://assets.3kh0.net/jetpack-joyride/index.html',
    image: 'https://play-lh.googleusercontent.com/Pl2nmu5U9CH3NQqLBTjnokoV325zESrX6KIaHrwSqREEJDWIv1yJpRCXzl9r3oMnEWHC',
  },
  {
    id: 'shellshockers',
    title: 'Shell Shockers',
    description: 'Shell Shockers is unique online shooter in first-person perspective where all the characters are represented exclusively by eggs.',
    url: 'https://assets.3kh0.net/shellshockers/index.html',
    image: 'https://play-lh.googleusercontent.com/P-nde227L29s8w5U44kTPLiEnMEJUhJpEr4jL6tD6LV65Xz0JZtI4wEyFN-smsNrx-Q'
  },
  {
    id: 'plantsvszombies',
    title: 'Plants Versus Zombies 1.0',
    description: 'Plants Versus Zombies 1.0 is a tower defense video game where players strategically plant a variety of plants to fend off waves of zombie invaders.',
    url: 'https://rawcdn.githack.com/carbonsystems-dev/gamevault/e5a7f73412c800c5f1258c830dc4052cedf27bfa/plants%20vs%20zombies%201/plants%20vs%20zombies.html',
    image: 'http://cm1.narvii.com/6715/5bef9754b89ffbf36e5afb2c4dac9860b9614987_00.jpg'
  },
  {
    id: 'happywheels',
    title: 'Happy Wheels',
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/proudparrot2/goguardian/happywheels.xml',
    image: 'https://play-lh.googleusercontent.com/SV8RsV5udSeeONjatT5SwleP6lzV6PjtNPs2VvyohJXWSG9fFLNOfslDEHbpDN337wQ'
  },
  {
    id: 'motox3m',
    title: 'MotoX3M',
    //url: 'https://assets.3kh0.net/motox3m/index.html',
    url: 'https://art-class.github.io/assets/motox3m',
    image: 'https://play-lh.googleusercontent.com/AbQMuT4ncBfWDqNF-4ubmfaRag59nrW3fJARDsHK51_PENScmWCnMFeQX81wfPlfGBo'
  },
  {
    id: 'thefinalearth',
    title: 'The Final Earth',
    description: 'Earth has been destroyed. It\'s a good thing you teleported to a new planet, also known as The Final Earth. Gather resources and build a colony',
    url: 'https://assets.3kh0.net/the-final-earth/index.html',
    image: 'https://img.itch.zone/aW1nLzIyMTU1NDAucG5n/original/6vGlZe.png'
  },
  {
    id: 'fnf',
    title: 'Friday Night Funkin',
    url: 'https://assets.3kh0.net/fridaynightfunkin/index.html',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Boyfriend-2.png/250px-Boyfriend-2.png'
  },
  {
    id: 'paperio2',
    title: 'Paper.io 2',
    url: 'https://assets.3kh0.net/paperio2/index.html',
    image: 'https://play-lh.googleusercontent.com/KxcjUrs8S75iOPnKBR2b-s7eGtqbREwLgzttVxaM9Znl5ZxsDCl6qEZHny4rBkMeYA=w240-h480-rw'
  },
  {
    id: 'impossiblequiz',
    title: 'The Impossible Quiz',
    url: 'https://proudparrot2.github.io/msg-archive/g_mes/impossiblequiz1/impossiblequiz1/index.html',
    image: 'https://ih1.redbubble.net/image.489460698.9522/st,small,507x507-pad,600x600,f8f8f8.jpg'
  },
  {
    id: 'ducklife4',
    title: 'Duck Life 4',
    url: 'https://assets.3kh0.net/ducklife4/index.html',
    image: 'https://play-lh.googleusercontent.com/AUGkRrKMtUCLVE9vCvlfMY9Ny9EBqzx17yejVtEEhvpkw-H6lJlvBHgCMqPJm8HV_tM'
  },
  {
    id: 'retrobowl',
    url: 'https://assets.3kh0.net/retro-bowl/index.html',
    title: 'Retro Bowl',
    image: 'https://play-lh.googleusercontent.com/WRM5Y1xZmzcCP1YtO5zl6G2g7CU5c5ZfjX4UVrgi1bpNgkfy-wuB-bQx3kkeRfaGYQ'
  },
  {
    id: 'littlealchemy',
    title: 'Little Alchemy',
    url: 'https://littlealchemy.com',
    image: 'https://play-lh.googleusercontent.com/-NQ2QLAOaafy7iHAJcrdEFk-tyVicnbwy6iLehml8K0Higi60sSVn0829bcyi1lOUw'
  },
  {
    id: 'templerun2',
    title: 'Temple Run 2',
    url: 'https://assets.3kh0.net/temple-run-2/index.html',
    image: 'https://play-lh.googleusercontent.com/go4XqS4mYs-G2tZymiVLF4wJYXIi5QrvwixNRzssk4G_vRBHrAdg4E1ddNwy9c2cZA'
  },
  {
    id: 'stickmanhook',
    title: 'Stickman Hook',
    url: 'https://assets.3kh0.net/stickman-hook/index.html',
    image: 'https://play-lh.googleusercontent.com/yXqBI1Vb1b-xjwmXLE2T7FQbgHIxfvjze1b6jO2aLHfy8Y8ta7NFSEVqZoPHtM2Ajyrl'
  },
  {
    id: 'run3',
    title: 'Run 3',
    url: 'https://coolmathgames.com/0-run-3/play',
    image: 'https://play-lh.googleusercontent.com/A97ygyZMgnoapGfPhWZn9QBMsrskPuPQmJqeEtROZWnbQRfAOZZlhtP-UBWxaKtMI6U',
    description: 'Run 3 is a classic game where you swerve through space in a race to the finish. Play hundreds of new levels in this fast-paced platformer'
  },
  {
    id: 'run1',
    title: 'Run 1',
    url: 'https://cdn.githubraw.com/carbonsystems-dev/gamevault/main/run/index.html',
    image: 'https://trefoilkingdom.com/uploads/games/21624/Run-1.jpg',
    description: 'Run 1 is a classic game where you swerve through space in a race to the finish. Play hundreds of new levels in this fast-paced platformer'
  },
  {
    id: 'run2',
    title: 'Run 2',
    url: 'https://cdn.githubraw.com/carbonsystems-dev/gamevault/main/Run%202/index.html',
    image: 'https://i.pinimg.com/280x280_RS/b6/2f/e8/b62fe8c6a9ceb9fd7e5257ad25f6897d.jpg',
    description: 'Run 2 is a classic game where you swerve through space in a race to the finish. Play hundreds of new levels in this fast-paced platformer'
  },
  {
    id: 'justfall',
    title: 'Just Fall',
    description: 'Just Fall is a game similar to Fall Guys, where you compete in minigames to be the sole winner',
    url: 'https://assets.3kh0.net/just-fall/index.html',
    image: 'https://play-lh.googleusercontent.com/-0rSllZ8as88Jcs3iZ7-JCFyTb3YLB-HjR7bY7P6q_2MAswmDH4h1qNPfFiaZqzkkg'
  },
  {
    id: 'sm64',
    title: 'Super Mario 64',
    url: 'https://assets.3kh0.net/sm64/index.html',
    image: 'https://assets1.ignimgs.com/2019/05/31/mario-64---button-1559263987447.jpg',
    description: 'Controls: <br>Movement: Arrow Keys <br>A: X <br>B: C <br>R: Q <br>Z: Space <br>Start: Enter <br>C-stick: WASD<br><br>You might need to go into fullscreen for the keybinds to register'
  },
  {
    id: 'snowball',
    title: 'snowball.io',
    url: 'https://assets.3kh0.net/snowbattle/index.html',
    image: 'https://play-lh.googleusercontent.com/X8FEOENa_t5mlRllBh2RRLc6sMnPIq56Wxa2ndValDOmwzIRhAv7MG6fT97TLQ2DK48'
  },
  {
    id: 'minecraft',
    title: 'Eaglercraft 1.5.2',
    url: 'https://svaaps.github.io/eaglercrafthtml/',
    image: 'data:image/jpeg;base64,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'
  },
  {
    id: 'smashkarts',
    title: 'Smash Karts',
    url: 'https://assets.3kh0.net/smashkarts/index.html',
    image: 'https://geometry-dash.co/upload/imgs/smash-karts-logo.png'
  },
  {
    id: 'tunnelrush',
    title: 'Tunnel Rush',
    url: 'https://assets.3kh0.net/tunnel-rush/index.html',
    image: 'https://images.hellokids.com/_uploads/_tiny_galerie/20180415/vign-tunnel-rush-hk-w8v_u89.jpg',
  },
  {
    id: 'awesometanks2',
    title: 'Awesome Tanks 2',
    url: 'https://assets.3kh0.net/awesometanks2/index.html',
    image: 'https://play-lh.googleusercontent.com/fiH2wSovQkxQ2dQViDAphNBbM0B1dYxTlJqnYwKXeSoQQZbBNkZZuLyMkv4gglb7LH4'
  },
  {
    id: 'fireandice',
    title: 'A Dance of Fire and Ice',
    url: 'https://assets.3kh0.net/a-dance-of-fire-and-ice/index.html',
    image: 'https://play-lh.googleusercontent.com/L8rCly8hMWuP95PbihDZlSV2u0oGrs0hl2lEXboO7XHX2XalJZ1rjgOsFYXnEDWbpQ',
    description: 'A Dance of Fire and Ice is a simple one-button rhythm game. Press on every beat of the music to move in a line. Every pattern has its own rhythm to it. It can get difficult. This game is purely based on rhythm, so use your ears more than your sight.'
  },
  {
    id: 'escapeprison',
    title: 'Henry Stickmin: Escaping the Prison',
    url: 'https://assets.3kh0.net/escapingtheprison/index.html',
    image: 'https://play-lh.googleusercontent.com/MKW0yzbpA-faDMztP2xkirlXsHwL7QutC_9VyQlbr4VTbPOyCZInL7zYG9EA4XpX4mtM'
  },
  {
    id: 'fleeingthecomplex',
    title: 'Henry Stickmin: Fleeing the Complex',
    url: 'https://art-class.github.io/assets/fleeingthecompound/index.html',
    image: 'https://play-lh.googleusercontent.com/RDk8BpHUESL9J4H-s-07ZC1sNJol8-aZEzz3OEA99PxTYnsZd8038Y-0wRMpCQKDssU'
  },
  {
    id: 'infiltratingtheairship',
    title: 'Henry Stickmin: Infiltrating the Airship',
    url: 'https://art-class.github.io/assets/infiltratingtheairship/index.html',
    image: 'https://play-lh.googleusercontent.com/bRVIDUSlmkDM9ZA9xLczm-PuUa0dYPupAG2ZVNXJvCITc3ZkO7PS-t0qKX1T--7f5-k=w240-h480-rw'
  },
  {
    id: 'breakingthebank',
    title: 'Henry Stickmin: Breaking the Bank',
    url: 'https://art-class.github.io/assets/breakingthebank/index.html',
    image: 'https://play-lh.googleusercontent.com/I9aDLwmiy5iSjeUPs5IDI3lam8iWZ1zVnLF-V_EGvClOLuccjwLNNjZ8xltu4AN60io'
  },
  {
    id: 'slope',
    title: 'Slope',
    url: 'https://mathadventure1.github.io/slope/slope/index.html',
    image: 'https://play-lh.googleusercontent.com/uJn2i9h7KxYQarC_c3K4qH6o7gLtflFnhD_dN14MNkzHJ1NeNFzCL69jpB5mT0vCoQs'
  },
  {
    id: 'baldisbasics',
    title: 'Baldi\'s Basics',
    url: 'https://assets.3kh0.net/baldis-basics/index.html',
    image: 'https://play-lh.googleusercontent.com/EPV1TB4So1lB0DGrdCVExDpNU8ML67nd8OqBeoOIM-s6sDicxmDdPvCXD6n7LKevFl0'
  },
  {
    id: '1v1lol',
    title: "1v1.lol",
    url: 'https://docs-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/ko1ov/to@1e8a949f89fcf2b110640c41a0705db01405d161/d7uf4.xml#',
    image: 'https://play-lh.googleusercontent.com/-dE43Bqni_bUnq0L-piPxiJG4YiCotk5khMdrQaQBJrXJ3vSgjNeIaKyA34rBvKQSyOy'
  },
  {
    id: 'crossyroad',
    title: 'Crossy Road',
    url: 'https://assets.3kh0.net/crossyroad/index.html',
    image: 'https://cdn.jim-nielsen.com/ios/512/crossy-road-endless-arcade-2014-12-02.png'
  },
  {
    id: 'subwaysurfers',
    title: 'Subway Surfers',
    url: 'https://assets.3kh0.net/subway-surfers/index.html',
    image: 'https://cdnb.artstation.com/p/assets/images/images/040/799/939/large/celine-j-1-74-shanghai-icon-1024-x.jpg?1629908071'
  },
  {
    id: 'geometrydash',
    title: 'Geometry Dash',
    url: 'https://assets.3kh0.net/geodash/index.html',
    image: 'https://upload.wikimedia.org/wikipedia/en/3/35/Geometry_Dash_Logo.PNG'
  },
  {
    id: 'idlecraft',
    title: 'Idlecraft',
    url: 'https://assets.3kh0.net/grindcraft/index.html',
    image: 'https://play-lh.googleusercontent.com/Pl3YYYdxM1Lhe-pXFwaLfmzSpqDZqlzvxS7-BH60Mho_cydWeOCkhTCrSgtMEXL54Cm0'
  },
  {
    id: '8ballpool',
    title: '8 Ball Pool',
    url: 'https://8ball-pool.io',
    image: 'https://play-lh.googleusercontent.com/bPz1guJ6FHF3oIOEy3KqwpaDDKO-hLRaZoyzmM8bLFLN8fWm6L0_EuUnkwv9iqPo3Ag'
  },
  {
    id: 'fruitninja',
    title: 'Fruit Ninja',
    url: 'https://assets.3kh0.net/fruitninja/index.html',
    image: 'https://play-lh.googleusercontent.com/iRlGmvtJ524J-gAGdJJchMv-MH-9AuG80TAx8Rv8q3lObiI7kLVZrEvjVOM-yw3BBH4'
  },
  {
    id: 'bloxors',
    title: 'Bloxors',
    url: 'https://assets.3kh0.net/bloxors/index.html',
    image: 'https://play-lh.googleusercontent.com/FHpA3r3FHDzVNtBpjpi9Zq8JA81bvRXBEbdkBvL3COOucsMfn_fYYhEFE5g55VkeSQ'
  },
  {
    id: 'chromedino',
    title: "Chrome Dino Game",
    url: 'https://assets.3kh0.net/chrome-dino/index.html',
    image: 'https://qph.cf2.quoracdn.net/main-qimg-c803e5912e045867b4e2f033c1b57ff9-lq'
  },
  {
    id: 'doodlejump',
    title: 'Doodle Jump',
    url: 'https://doodlejump.io/play/',
    image: 'https://assets-prd.ignimgs.com/2022/03/16/doodlejump-1647405974576.jpg'
  },
  {
    id: 'slither',
    title: 'slither.io',
    url: 'https://slither.io',
    image: 'https://play-lh.googleusercontent.com/oObkhKfUXOY5yzheKe9w1Y1pXZBgdiSksMeNmT0BijoQ8J75maTCIW2TA7-6pA6EMA'
  },
  {
    id: 'basketballstars',
    title: 'Basketball Stars',
    url: 'https://assets.3kh0.net/basketball-stars/index.html',
    image: 'https://play-lh.googleusercontent.com/EjJV6kCXgX9EIhKEtpYhQF8-BUb5En8sDKpOPiWSQJUxv9_RAfl4tMxyIMkQYgeqC6I=w240-h480-rw'
  },
  {
    id: 'amongus',
    title: 'Among Us',
    url: 'https://assets.3kh0.net/among-us/index.html',
    image: 'https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec'
  },
  {
    id: 'rocketleague',
    title: 'Rocket League',
    url: 'https://assets.3kh0.net/Rocket-League/index.html',
    image: 'https://cdn2.iconfinder.com/data/icons/popular-games-1/50/rocketleague_squircle-512.png'
  },
  {
    id: 'curveball3d',
    title: 'Curve Ball 3D',
    url: 'https://slopegame.io/curve-.embed',
    image: 'https://play-lh.googleusercontent.com/sTHCFQc1HlSFK2jHNsQOabTeKBvgtugFxnSa_uNLWX2euDE7ohRnJhgCDapOZ0gvxlQ'
  },
  {
    id: 'bitlife',
    title: 'Bitlife',
    url: 'https://assets.3kh0.net/bitlife/index.html',
    image: 'https://d.newsweek.com/en/full/1317374/bitlife-ribbons-how-get-all-complete-list-android-ios-cheats-guide-tips-become.jpg?w=1600&h=1600&q=88&f=75befc746fb83a0c568c44ca07bc5e64'
  },
  {
    id: 'btd4',
    title: 'Bloons TD 4',
    url: 'https://assets.3kh0.net/btd4/index.html',
    image: 'https://assets-prd.ignimgs.com/2022/08/16/bloons-td4-button-1660612386362.jpg'
  },
  {
    id: 'ovo',
    title: 'OvO',
    url: 'https://purepro4561.github.io/OvO',
    image: 'https://play-lh.googleusercontent.com/v7KwGdPjJGjJjRXn46sck4DwDBdKSeRzGN44CjiXUtKV0jjOi51Bt4wcXud0m-SkXg=w240-h480-rw'
  },
  {
    id: 'dogeminer',
    title: "Doge Miner",
    url: 'https://assets.3kh0.net/DogeMiner/index.html',
    image: 'https://play-lh.googleusercontent.com/7diC1RZgf6Z5XCspiwJMYD3vQz5TmjFElLw5qnPJZjcjNXgfhepPJzmIBijgraJRd8uv'
  },
  {
    id: 'aquapark',
    title: 'aquapark.io',
    url: 'https://assets.3kh0.net/aquapark-slides/index.html',
    image: 'https://play-lh.googleusercontent.com/pNI21ILS4I9IAzveYzjbfk5D5LGuL03b0Ea4OtlFRLD_yk7KYLBeLlBmsvhH7Uj-dQn6'
  },
  {
    id: '2048',
    title: '2048',
    url: 'https://assets.3kh0.net/2048/index.html',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2048_logo.svg/220px-2048_logo.svg.png'
  },
  {
    id: 'roblox',
    title: 'Roblox',
    url: 'https://newalgebra.com',
    image: 'https://play-lh.googleusercontent.com/WNWZaxi9RdJKe2GQM3vqXIAkk69mnIl4Cc8EyZcir2SKlVOxeUv9tZGfNTmNaLC717Ht=w240-h480-rw',
    description: 'EXPERIMENTAL: This may or may not work for you. Please don\'t report it if it doesn\'t. If you have bad WiFi, it may load slower than usual.'
  },
  {
    id: 'baconmaydie',
    title: 'Bacon May Die',
    url: 'https://rawcdn.githack.com/nightrose-labs/quartz/c1832d589bc39c298bd23149733fca1026972d06/2/e333d315-40d0-46f6-a1ef-7e3f6bdd5113/index.html',
    image: 'https://rawcdn.githack.com/nightrose-labs/quartz/c1832d589bc39c298bd23149733fca1026972d06/thumb/e333d315-40d0-46f6-a1ef-7e3f6bdd5113.jpg',
    description: 'Warning: pressing ESC will exit the game.'
  },
  {
    id: 'burninrubber5xs',
    title: 'Burnin\' Rubber 5 XS',
    url: 'https://rawcdn.githack.com/nightrose-labs/quartz/8ad8d5b123954f4a5d7e35ca84d5aacba0061eec/1/c35dc918-139e-4159-be3d-0d1ef0557e4e/index.html',
    image: 'https://rawcdn.githack.com/nightrose-labs/quartz/master/thumb/c35dc918-139e-4159-be3d-0d1ef0557e4e.jpg',
    description: 'This game is resource-heavy. Make sure to adjust quality using the Star button in the main menu.'
  },
  {
    id: 'funnyshooter2',
    title: 'Funny Shooter 2',
    url: 'https://rawcdn.githack.com/nightrose-labs/quartz/master/1/6af3cc65-32f9-4f3d-a66c-6c8882a7c5df/index.html',
    image: 'https://rawcdn.githack.com/nightrose-labs/quartz/master/thumb/6af3cc65-32f9-4f3d-a66c-6c8882a7c5df.jpg',
    description: 'This game has a working rewarded ad bypass, but it will temporarily mute the game. It will unmute at level start/end.'
  },
  {
    id: 'hydrostorm2',
    title: 'Hydro Storm 2',
    url: 'https://rawcdn.githack.com/nightrose-labs/quartz/8ad8d5b123954f4a5d7e35ca84d5aacba0061eec/1/283a1142-4fa3-46c4-8a3f-35ac3a28f072/index.html',
    image: 'https://rawcdn.githack.com/nightrose-labs/quartz/master/thumb/283a1142-4fa3-46c4-8a3f-35ac3a28f072.jpg',
    description: 'This game is resource-heavy. Make sure to adjust quality using the Star button in the main menu.'
  },
  {
    id: 'pixwars2',
    title: 'PixWars 2',
    url: 'https://rawcdn.githack.com/nightrose-labs/quartz/master/1/c4e5b82d-a26a-437b-8b6e-7598c98cf39b/index.html',
    image: 'https://rawcdn.githack.com/nightrose-labs/quartz/master/thumb/c4e5b82d-a26a-437b-8b6e-7598c98cf39b.jpg',
    description: 'An error is displayed during startup. It can be ignored, the game still works.'
  },
  {
    id: 'recoil',
    title: 'Recoil',
    url: 'https://rawcdn.githack.com/nightrose-labs/quartz/b0687b5099af0b76aedf37743f2d03cbeef26467/2/5cf218d2-f550-420c-8e55-7029efc5b4db/index.html',
    image: 'https://rawcdn.githack.com/nightrose-labs/quartz/master/thumb/5cf218d2-f550-420c-8e55-7029efc5b4db.jpg'
  },
  {
    id: 'vex8',
    title: 'Vex 8',
    url: 'https://rawcdn.githack.com/nightrose-labs/quartz/8ad8d5b123954f4a5d7e35ca84d5aacba0061eec/2/6dcc5fd9-a43a-4e13-9b6f-456a416e1059/index.html',
    image: 'https://rawcdn.githack.com/nightrose-labs/quartz/master/thumb/6dcc5fd9-a43a-4e13-9b6f-456a416e1059.jpg'
  },
  {
    id: 'thefinalearth2',
    title: 'The Final Earth 2',
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://529473016-184630684593625815.preview.editmysite.com/uploads/b/139890129-811652923688457694/files/tfe2.xml&',
    image: 'https://play-lh.googleusercontent.com/oAzUAWZS6R4iPUIWF-DxGgx0Jr4ssCO2BjVA3vmA8033Y9j6bp9FGMz9JkcS9TPrp4Q'
  },
  {
    id: 'snowrider',
    title: 'Snow Rider',
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/89574567@71f165531792ae450fe0a522a52ba4e827344de2/sr3d.xml',
    image: 'https://lh5.googleusercontent.com/7h-724mAeXnnyC-MA1OA8RI1iaQYgcCZlAt9A8hLk8BLruu0Bu5NCBH1geQJqAUmMztyS4dEIQruPJYgypQTarqr9G4-ydAM8bsQxL2rFL6LUPxbi2JnBEgrWqeg08a9Lg=w1280'
  },
  {
    id: '1on1basketball',
    title: '1 On 1 Basketball',
    url: 'https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2F1-on-1-basketball.xml',
    image: 'https://tgkathletics.com/wp-content/uploads/2020/01/1-on-1-Bball-5.jpg'
  },
  {
    id: 'johnnyupgrade',
    title: 'Johnny Upgrade',
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/f107b843-3661-4036-9397-2b0c6414a369%2Fjohnny-upgrade.xml',
    image: 'https://lh5.googleusercontent.com/K7sBfR_F4vAkFU9TVSx-hEKnE4b-dhautdjFBoCbXU_Qbq1SAsYXxjCKBXkFeOs8ju2kSQzR7gdyawMdWULaZ44=w1280'
  },
  {
    id: 'holeio',
    title: 'Hole.io',
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/gertdoro/Toolkit@93a27eabbbe5eb626af5b9b7dd0926ac16810a41/Code/Java/hole.xml',
    image: 'https://play-lh.googleusercontent.com/PTnoGeHV-bsIF79sW4IX4MzKAKaWj9fBWGvR4AOA4tmW0eYjPo3bVdpPYR7GGeX-0w'
  },
  {
    id: 'penguinio',
    title: "Penguin.io",
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/gertdoro/Kubeflow@a4cad845becd2a794dc59bbf5bfff375c5dae041/admission-webhook/examples/penguin.xml',
    image: 'https://play-lh.googleusercontent.com/YsT4stD48fWw0XuIT87ilZtBfTkOGlxj3PpWI9qeFUkrvpu1xjemXzqf12DxBvv-Ikk'
  },
  {
    id: 'brawlguys',
    title: 'Brawl Guys',
    url: 'https://zayaruzostreetorgan.com/uploads/5/5/6/7/5567194/custom_themes/139948058740159493/files/index.html',
    image: 'https://play-lh.googleusercontent.com/EiElcSrd6-o-19roiswSx0AZPzsq6qF3hUGHsSWDl5UVtj7G23DHkneM8ucwqyOmEg'
  },
  {
    id: 'digtochina',
    title: 'Dig to China',
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2Fdig-to-china.xml',
    image: 'https://play-lh.googleusercontent.com/R1o8_AuZ53wC5Q60ZKoGBdIXjm4v7k99uGW1Lb8NFk58MeAO_e-IqcOxdPnjOK90'
  },
  {
    id: 'helixjump',
    title: 'Helix Jump',
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/gertdoro/Toolkit@147a37a734f3e4f155e48dbda25000afdc2970ba/Apps/Helix.xml',
    image: 'https://play-lh.googleusercontent.com/cZHORa1z78dfMsP_nxCkplmHGUx5wfjY0x2jK59GWL7rUL5o6c_KiQ7QL9o4T22qbH8'
  },
  {
    id: 'raccoonretail',
    title: 'Raccoon Retail',
    url: 'https://www.coolmathgames.com/0-raccoon-retail/play',
    image: 'https://play-lh.googleusercontent.com/zI8P-Gej0l8WK9_rRrVJuHQfZqA97ncD1RCN8qdLbmwl0uxPI8o5JLBsnJz5hxLKTYE'
  }
]
games.sort(function (a, b) {
  return a.title.localeCompare(b.title);
});
var customGameId = "customgame"; // replace with the id of the game you want to pin
var customGame = games.find(function (game) {
  return game.id === customGameId;
});
games.splice(games.indexOf(customGame), 1);
games.unshift(customGame);

var customgames = getObj("customgames")
if (customgames) customgames.forEach(game => {
  games.push(game)
})

console.log("Loaded " + games.length + " games")
if (customgames) console.log("Loaded " + customgames.length + " custom games")
