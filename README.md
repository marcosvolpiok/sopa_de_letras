# Navigate to the correct folder
All the commands need to be run from the "src" folder. So, first of all use this command:
```
cd src
```

# Install the node modules
```
npm install
```

# Run tests
```
npm run test
```

# Execute command
Parameters:
```
node index.js ROWS COLUMNS "SOUP"
```
* ROWS: total of rows
* COLUMNS: total of columns
* SOUP: the soup with all the letters. To separate new lines, use ",".

For example if you want to use this soup:
```
OIE
EIO
```
You need to execute this command:
```
node index.js 2 3 "OIE,EIO"
```