

//Detecta si existe la palabra

//Verificar si la sopa de letras tiene las lineas y filas correctas


function searchInSoup(soup){
    let count;
    row=process.argv[2];
    column=process.argv[3];

    const arrLinesHorizontal = convertHorizontal(soup);
    count = count + detectRegex(arrLinesHorizontal);

    const arrLinesVertical = convertVertical(soup, row, column);
    console.log(arrLinesVertical);

    const arrLinesDiagonalRight = convertDiagonal(soup, row, column, 'RIGHT');
    console.log(arrLinesDiagonalRight);

    const arrLinesDiagonalLeft = convertDiagonal(soup, row, column, 'LEFT');
    console.log(arrLinesDiagonalLeft);
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
    return 0;
}


searchInSoup(process.argv[4]);
