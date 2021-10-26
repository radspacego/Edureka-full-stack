const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ifExists(filepath){
    try {
        fs.accessSync(filepath,fs.constants.F_OK);
        return true;
    }
    catch(e){
        return false;
    }
}

function userIn(message){
    rl.question(message,filename => {
        if (ifExists(filename)){
            userIn('File with this name already exists, Please enter a new file name =>');

        }
        else{
            writeIn(filename);
            rl.close();
        }
    });
}

function writeIn(filename){
    fs.appendFile('ListOfFiles.txt','\n'+filename,err => {
        if (err){
            console.log('Error occured');
            return;
        }
        fs.writeFile(filename,'You are awesome.', err => {
            if(err){
                console.log('Some error has occured.')
            }
            else{
                console.log('Success!! Required operation is done.')
            }
        })
    })
}

if (process.argv[2]=='write'){
    userIn('Enter the name of file =>');
}

else{
    console.log('There was no write operation provided in user arguments.')
}
