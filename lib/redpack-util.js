
class RedpackUtil{
	
	createNormalPacks(sum, number){
		let arr = [];
    let every = Math.floor(sum / number);
    for(var x=0;x<num;x++){
			arr.push(every);
    }
    return arr;
	}

	createRandomPacks(sum, number, maxOne){
		return this.randomPacks(sum, number, maxOne);
	}

	randomPacks(sum, num, maxOne){
		let arr = [];
		while(num > 1){
			if((sum/num*2) >= maxOne){
				arr.push(maxOne);
				sum -= maxOne;
				num --;
			}else{
				let pack = this.randomOne(sum, num);
				arr.push(pack);
				sum -= pack;
				num --;
			}
		}
		return arr;
	}

	randomOne(sum, num){
		let max = Math.floor(sum / num * 2);
    return Math.floor(Math.random() * max) + 1;
	}

}
module.exports = new RedpackUtil();