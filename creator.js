var creator = {
    start: function(){
        var harvesters = screeps.getCreeps(screeps.HarvestType)
        var upgraders = screeps.getCreeps(screeps.UpgradeType)
        var builders = screeps.getCreeps(screeps.BuilderType)
        var controller_level = Game.spawns['Spawn1'].room.controller.level;

        if (harvesters.length < 2) {
            screeps.newCreep('Spawn1',screeps.HarvestType)
        }
        if (upgraders.length < 2){
            screeps.newCreep('Spawn1',screeps.UpgradeType)
        }
        if (controller_level >= 2 && builders.length < 2){
            screeps.newCreep('Spawn1',screeps.BuilderType)
        }

        if(Game.spawns['Spawn1'].spawning) { // 孵化过程可视化
            var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
            Game.spawns['Spawn1'].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns['Spawn1'].pos.x + 1, 
                Game.spawns['Spawn1'].pos.y, 
                {align: 'left', opacity: 0.8});
        }
    }
};

module.exports = creator;