function verifyColumns(column, soup){
    const arrRows=soup.split(',');
    let columns;
    let result=true;

    arrRows.forEach((row)=>{
        columns=row.split('').length;

        if(columns!=column){
            result = false;
            return false;
        }
    })

    return result;
}

function verifyRows(row, soup){
    const arrRows=soup.split(',');

    if(arrRows.length!=row){
        return false;
    }

    return true;
}

function searchInSoup(soup, row, column){
    let count=0;
    const arrWord=['EIO', 'OIE'];

    if(!verifyRows(row, soup)){
        return `Verifique el número de filas. En la sopa hay ${soup.split(',').length}, pero se declararon ${row}`;
    }

    if(!verifyColumns(column, soup)){
        return `Verifique el número de columnas.`;
    }


    const arrLinesHorizontal = convertHorizontal(soup);
    count = count + detectRegex(arrLinesHorizontal, arrWord);


    const arrLinesVertical = convertVertical(soup, row, column);
    count = count + detectRegex(arrLinesVertical, arrWord);

    const arrLinesDiagonalRight = convertDiagonal(soup, row, column, 'RIGHT');
    count = count + detectRegex(arrLinesDiagonalRight, arrWord);

    const arrLinesDiagonalLeft = convertDiagonal(soup, row, column, 'LEFT');
    count = count + detectRegex(arrLinesDiagonalLeft, arrWord);

    return count;
}

function convertVertical(soup, row, column){
    let finalLines=[];
    let lines = soup.split(',');

    for(let i = 0; i<row; i++){
        let columns=lines[i].split('');
        
        for(let j = 0; j<column; j++){
            if(finalLines[j]){
                finalLines[j]+=columns[j];
            }else{
                finalLines[j]=columns[j];
            }
            
        }
    }

    return finalLines;
}

function convertDiagonal(soup, row, column, direction){
    let finalLines=[];

    let lines = soup.split(',');
    for(let i = 0; i<row; i++){
        let columns=lines[i].split('');

        for(let j = 0; j<column; j++){
            if(direction=='RIGHT'){
                k=i+j;
            }else{
                k=j-i;
            }

            if(columns[k]){
                if(finalLines[j]){
                    finalLines[j]+=columns[k];
                }else{
                    finalLines[j]=columns[k];
                }
            }
        }
    }

    return finalLines;
}


function convertHorizontal(soup){
    arrLines=soup.split(",");
    
    return arrLines;
}


function detectRegex(arrLine, arrWord){
    let matchs=[];

    arrLine.forEach((line)=>{
        arrWord.forEach((word)=>{
            const regexp = new RegExp(word, 'g');
            
            let match=[...line.matchAll(regexp)];
            if(match.length>0){
                matchs.push(...match);  
            }
        })      
    });

    return matchs.length;
}


const result = searchInSoup(process.argv[4], process.argv[2], process.argv[3]);
console.log(result);
