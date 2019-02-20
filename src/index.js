/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var sum = 0 , index1, index2, index3, total;
    var newLength = preferences.unshift(0);
  for (var i = 1; i < newLength; i++) {
  	index1 = preferences[i];
  	index2 = preferences[index1];
  	index3 = preferences[index2];
  	if (index3 == i){
  		sum++
  	}
  }
  total = Math.floor(sum/3);
  return (total);
};
