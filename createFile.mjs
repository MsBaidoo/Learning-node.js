import { writeFile } from "node:fs";

writeFile('./hello.html', '<hi>Learning Node.js</h1>', () =>{
    console.log('File was created');
});
