//Genera listas a partir de cada combinación de linea
    //Horizontal
    //Vertical
    //Diagonal
    
    //Horizontal Al revés <--- Borrar?
    //Vertical Al revés <--- Borrar?
    //Diagonal Al revés <--- Borrar?

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

    const arrLinesDiagonalRight = convertDiagonalRight(soup, row, column);
    console.log(arrLinesDiagonalRight);

    const arrLinesDiagonalLeft = convertDiagonalLeft(soup, row, column);
    console.log(arrLinesDiagonalLeft);


}

function convertVertical(soup, row, column){
    let finalLines=[];
    let lines = soup.split(',');

    for(let i = 0; i<row; i++){
        console.log('Columna', lines[i], i);
        let columns=lines[i].split('');
        
        for(let j = 0; j<column; j++){
            
            console.log(j, columns);
            console.log(i, j);
            if(finalLines[j]){
                finalLines[j]+=columns[j];
            }else{
                finalLines[j]=columns[j];
            }
            
        }
    }

    return finalLines;
}

function convertDiagonalRight(soup, row, column){
    let finalLines=[];

    let lines = soup.split(',');
    for(let i = 0; i<row; i++){
        let columns=lines[i].split('');

        for(let j = 0; j<column; j++){
            k=i+j;
            console.log(i, j, columns[k]);

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

function convertDiagonalLeft(soup, row, column){
    let finalLines=[];
    
    let lines = soup.split(',');
    for(let i = 0; i<row; i++){
        let columns=lines[i].split('');

        for(let j = 0; j<column; j++){
            k=j-i;
            console.log(i, j, columns[k]);

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


function detectRegex(string){
    return 0;
}


searchInSoup(process.argv[4]);
