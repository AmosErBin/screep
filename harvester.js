var harvester = {
    start: function(){
        var harvesters = screeps.getCreeps(screeps.HarvestType)
        for (var h in harvesters){
            if (creep.store.getCapacity() > 0){
                h.moveTo(h.room.find(FIND_SOURCES_ACTIVE))
                  
            }
        }
    }
}

module.export = harvester_start