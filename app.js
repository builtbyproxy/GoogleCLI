#! /usr/bin/env node

function buildParameters(){
  let argEntries = process.argv;
  let finalParameters = [];
  for(let i = argEntries.length-1; i >= 0; i--){
    //loop through each char, if equal to / then:
    if(argEntries[i].indexOf("/") < 0){
      finalParameters.push(argEntries[i]);
    }
  }

  let searchParameters = (finalParameters.reverse()).toString();
  searchParameters = searchParameters.replace(/,/g, "+");

  return searchParameters;
}

function run(){
  let params = buildParameters()
  let url = "https://www.google.com.au/search?q="+ params;

  console.log(url);
}

run();