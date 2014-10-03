angular.module('posts_filter',[]).filter('matchesQuery', function(){
        return function(items, query){
            var alternate = query.replace(/ /g,"_").toLowerCase();
            var lcQuery = query.toLowerCase();
            var arrayToReturn = [];        
            for (var i=0; i<items.length; i++){
                if (items[i].title.toLowerCase().indexOf(lcQuery) !== -1 
                               || items[i].keywords.indexOf(alternate) !== -1) {
                    arrayToReturn.push(items[i]);
                }
            }
            return arrayToReturn;
        };
    });