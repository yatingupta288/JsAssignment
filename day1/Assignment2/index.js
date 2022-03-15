
// ------------- helper function -------------------

const __displayOnScreen = (value) => {
  const valueBeautify = JSON.stringify(value, undefined, 2);
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = `<h1><pre>${valueBeautify}</pre></h1>`;
};

// ----------- end helper function -------------------

const myArray = [[7, 12], 8, [5, [3, 10], [4, 2]], 3, [1, [2]]];
const counter=(arr,count)=>{
    console.log(arr);
    const ans= arr.reduce((prev, key) => {
        if(typeof(key) === "object"){
            return prev+counter(key, count+1);
        }else{
            prev = prev + count*key;  
            return prev;
        }
    }, 0);
    return ans;
}
const calculateNestedSum = (arr) => {
  // todo: implement here
    return counter(arr,1);
 
  // 7*2+12*2 + 8*1 + 5*2+ 3*3 + 10*3, ......./
};


const result = calculateNestedSum(myArray);
__displayOnScreen(result);

// create new Repo (JavascriptLearning)
// new branch Day1
// two assignment inside 2 folder

// coopy js, css , html to ur local vscode
