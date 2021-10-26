**Problem statement:**
  Create an application with following features:
  1) You need to write in file using fs module and for every write operation you need to create a new file.
  2) You must take input from the user as filename and keep saving filenames in one array, in one seperate text file
  3) Next time when user again executes the code ask user to provide filename. Check if file already exists, if yes then ask user to give new filename. Write simple text "You are awesome." in every new file.

**How to run this application:** 
  
  There are three ways using which you can run this application:-
  
  1) ""npm run write": This command will automatically result into "node app.js write". You can use this command when you want to use write operation. It will ask for a file name from user and writes a specific message in the file. If the file already exists it will ask user to enter another file name.
  2) "npm run start": This command will automatically result into "node app.js". You can use this command when you don't want to use write operation.
  3) "npm run dev": This command will automatically result into "nodemon app.js". You can use this command when you want to use nodemon features and don't want to use write operation.
