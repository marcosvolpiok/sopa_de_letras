class soup{
    constructor() {
    }

    verifyColumns = (column, soup) => {
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

    verifyRows = (row, soup) => {
        const arrRows=soup.split(',');
    
        if(arrRows.length!=row){
            return false;
        }
    
        return true;
    }
    
    searchInSoup = (soup, row, column) => {
        let count=0;
        const arrWord=['EIO', 'OIE'];
    
        if(!this.verifyRows(row, soup)){
            return `Verifique el número de filas. En la sopa hay ${soup.split(',').length}, pero se declararon ${row}`;
        }
    
        if(!this.verifyColumns(column, soup)){
            return `Verifique el número de columnas.`;
        }
    
    
        const arrLinesHorizontal = this.convertHorizontal(soup);
        count = count + this.detectRegex(arrLinesHorizontal, arrWord);
    
    
        const arrLinesVertical = this.convertVertical(soup, row, column);
        count = count + this.detectRegex(arrLinesVertical, arrWord);
    
        const arrLinesDiagonalRight = this.convertDiagonal(soup, row, column, 'RIGHT');
        count = count + this.detectRegex(arrLinesDiagonalRight, arrWord);
    
        const arrLinesDiagonalLeft = this.convertDiagonal(soup, row, column, 'LEFT');
        count = count + this.detectRegex(arrLinesDiagonalLeft, arrWord);
    
        return count;
    }
    
    convertVertical = (soup, row, column) => {
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
    
    convertDiagonal = (soup, row, column, direction) => {
        let finalLines=[];
        let k;

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
    
    
    convertHorizontal = (soup) => {
        const arrLines=soup.split(",");
        
        return arrLines;
    }
    
    
    detectRegex = (arrLine, arrWord) => {
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
}
   
module.exports = soup;