var screeps = {
    HarvestType : "harvester",
    UpgradeType : "upgrade",
    BuilderType : "builder",

    screepMenu : {
        harvester : [WORK,CARRY,MOVE],
        upgrade : [WORK,CARRY,MOVE],
        builder : [WORK,CARRY,MOVE],
    },

    newCreep : function(spawn,type){
        Game.spawns[spawn].spawnCreep(this.screepMenu[type],type+Game.time,{memory:{role:type}});
    },
    getCreeps : function(role){
        return _.filter(Game.creeps, (creep) => creep.memory.role == role);
    }
}

module.export = screeps;