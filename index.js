

//Detecta si existe la palabra

//Verificar si la sopa de letras tiene las lineas y filas correctas


function searchInSoup(soup){
    let count=0;
    row=process.argv[2];
    column=process.argv[3];

    const arrLinesHorizontal = convertHorizontal(soup);
    count = count + detectRegex(arrLinesHorizontal);


    const arrLinesVertical = convertVertical(soup, row, column);
    count = count + detectRegex(arrLinesVertical);
    console.log(arrLinesVertical);

    const arrLinesDiagonalRight = convertDiagonal(soup, row, column, 'RIGHT');
    count = count + detectRegex(arrLinesDiagonalRight);

    const arrLinesDiagonalLeft = convertDiagonal(soup, row, column, 'LEFT');
    count = count + detectRegex(arrLinesDiagonalLeft);

    console.log('***COUNT TOTALES***', count)
    
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


function detectRegex(arrLine){
    let matchs=[];

    arrLine.forEach((line)=>{
        const regexp = new RegExp(/EIO/g);
        let match=[...line.matchAll(regexp)];
        if(match.length>0){
            matchs.push(...match);  
        }

        const regexp2 = new RegExp(/OIE/g);
        match=[...line.matchAll(regexp2)];
        if(match.length>0){
            matchs.push(...match);  
        }        
    });

    return matchs.length;
}


searchInSoup(process.argv[4]);
