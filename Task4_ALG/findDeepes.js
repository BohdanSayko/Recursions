function findDeepest (firstObj){
    let deepestObj = null;
    let maxDepth = 0;
    function findDeepestRecursed(obj, depth) {
        if(typeof obj === "object"){
            for(let key in obj){
                if(obj.hasOwnProperty(key)){
                    let value = obj[key];

                    if(typeof value === "object"){
                        findDeepestRecursed(value, depth + 1);
                    }else if(depth > maxDepth) {
                        maxDepth = depth;
                        deepestObj = value;
                    }
                }
            }
        }
    }

    findDeepestRecursed(firstObj, maxDepth);

    return deepestObj;
}

console.log(findDeepest({ a: 1, b: { c: { d: 4, e: { f: 5 } } } }));
console.log(findDeepest({ a: { b: 1 }, c: 2 }));
console.log(findDeepest({ a: null }));
console.log(findDeepest({}));
console.log(findDeepest({ a: { b: { c: { d: { e: { f: {} } } } } } }));