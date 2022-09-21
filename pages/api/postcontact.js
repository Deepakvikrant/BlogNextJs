import * as fs from 'fs';

export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Process a POST request
      //console.log(req.body);
      let data = await fs.promises.readdir('contactdata');
      //console.log(data);

      //console.log(req.body);

      const data2 = req.body

      fs.promises.writeFile(`contactdata/${data.length+1}.json`, JSON.stringify(data2), ()=>{})
      res.status(200).json(req);
     
      
    } else {
      // Handle any other HTTP method
      res.status(200).json(['allBlogs']);
      //name ,phone number , email 
    }
  }