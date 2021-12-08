module.exports.viewALL = function(req, res, next) {
    const pokemonList = [ {
        id: 1,
        name: 'Dragonite - 160 HP',
        type1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg/1200px-Pok%C3%A9mon_Dragon_Type_Icon.svg.png',
        type2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg/2048px-Pok%C3%A9mon_Flying_Type_Icon.svg.png',
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/eff75f77-240b-4898-ae1f-7be6021854b3/d7yp1cy-f9e05e28-e845-4df6-b820-0ecce2b525fc.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VmZjc1Zjc3LTI0MGItNDg5OC1hZTFmLTdiZTYwMjE4NTRiM1wvZDd5cDFjeS1mOWUwNWUyOC1lODQ1LTRkZjYtYjgyMC0wZWNjZTJiNTI1ZmMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.n3QNPykS0NaZzcsnrwXNZ69J6RWssbfH0Zs3ck4lUuE',
        move1cost1: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w40k-75281ddb-5dc8-4eb8-9321-d5c901815eed.png/v1/fill/w_720,h_720,strp/leaf_energy_by_humac1_d50w40k-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYWJhMWE3NTYtZDk1NS00M2Y2LWEyZTktNWI3ZDYwNDA2ODU0XC9kNTB3NDBrLTc1MjgxZGRiLTVkYzgtNGViOC05MzIxLWQ1YzkwMTgxNWVlZC5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.hkzFeGcwL8-ZytHLvV07CmX3RHjcImRYgtZkUHGuNzM',
        move1cost2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg/1024px-Pok%C3%A9mon_Electric_Type_Icon.svg.png',
        move1name: 'Dragon Wave',
        move1power:'130',
        move2cost1: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w40k-75281ddb-5dc8-4eb8-9321-d5c901815eed.png/v1/fill/w_720,h_720,strp/leaf_energy_by_humac1_d50w40k-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYWJhMWE3NTYtZDk1NS00M2Y2LWEyZTktNWI3ZDYwNDA2ODU0XC9kNTB3NDBrLTc1MjgxZGRiLTVkYzgtNGViOC05MzIxLWQ1YzkwMTgxNWVlZC5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.hkzFeGcwL8-ZytHLvV07CmX3RHjcImRYgtZkUHGuNzM',
        move2cost2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg/1024px-Pok%C3%A9mon_Electric_Type_Icon.svg.png',
        move2cost3: 'https://cdn.pixabay.com/photo/2018/05/20/21/00/pokemon-3416764_640.png',
        move2name: 'Mach Press',
        move2power: '80',
        weakness: 'https://tiermaker.com/images/templates/1338231582127772.png',
        resistance: 'https://3.bp.blogspot.com/-4WSS4vzO3h0/WTKe1u_ffdI/AAAAAAAAA9g/etzX--rCh0U_DLAQ478jTvvH-RIDpZtAACLcB/s400/yVByKct.png',
        retreatcost: 'https://cdn.pixabay.com/photo/2018/05/20/21/00/pokemon-3416764_640.png'
    },
    {   id: 2,
        name: 'Flareon - 110 HP',
        type1: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w437-315a34c4-85c2-4d07-ae4d-6b42a25233bf.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FiYTFhNzU2LWQ5NTUtNDNmNi1hMmU5LTViN2Q2MDQwNjg1NFwvZDUwdzQzNy0zMTVhMzRjNC04NWMyLTRkMDctYWU0ZC02YjQyYTI1MjMzYmYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kytndezX-kNW72WN893L_sOKoTnQYmvnqvJ79VVV8w8',
        image: 'https://www.freeiconspng.com/uploads/flareon-elegant-png-3.png',
        move1cost1: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w437-315a34c4-85c2-4d07-ae4d-6b42a25233bf.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FiYTFhNzU2LWQ5NTUtNDNmNi1hMmU5LTViN2Q2MDQwNjg1NFwvZDUwdzQzNy0zMTVhMzRjNC04NWMyLTRkMDctYWU0ZC02YjQyYTI1MjMzYmYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kytndezX-kNW72WN893L_sOKoTnQYmvnqvJ79VVV8w8',
        move1name: 'Singe',
        move1power: '30',
        move2cost1: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w437-315a34c4-85c2-4d07-ae4d-6b42a25233bf.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FiYTFhNzU2LWQ5NTUtNDNmNi1hMmU5LTViN2Q2MDQwNjg1NFwvZDUwdzQzNy0zMTVhMzRjNC04NWMyLTRkMDctYWU0ZC02YjQyYTI1MjMzYmYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kytndezX-kNW72WN893L_sOKoTnQYmvnqvJ79VVV8w8',
        move2cost2: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w437-315a34c4-85c2-4d07-ae4d-6b42a25233bf.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FiYTFhNzU2LWQ5NTUtNDNmNi1hMmU5LTViN2Q2MDQwNjg1NFwvZDUwdzQzNy0zMTVhMzRjNC04NWMyLTRkMDctYWU0ZC02YjQyYTI1MjMzYmYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kytndezX-kNW72WN893L_sOKoTnQYmvnqvJ79VVV8w8',
        move2cost3: 'https://cdn.pixabay.com/photo/2018/05/20/21/00/pokemon-3416764_640.png',
        move2name: 'Flamethrower',
        move2power: '90',
        weakness: 'https://lh3.googleusercontent.com/proxy/aWpuXV9jqEEnP04vjszHgjkEiG8SD8MBLjf4p0CoqGMZcXQf2LTvIRwBKTsVXdlh_qFMoIBpmEL1FR8bDHA6qGTPzK4lFC-B0_2wrLLF5bBFWWj_LjQ05yYDpz793NzJ0OcvTGgQKx_fQDDdJrV6HvxnNRadRn0',
        retreatcost: 'https://cdn.pixabay.com/photo/2018/05/20/21/00/pokemon-3416764_640.png'
    }];
    res.render('index', {pokemonList});
}