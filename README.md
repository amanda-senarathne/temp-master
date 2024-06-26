

### Test accounts

user-user
admin: admin



### Prerequisites
<ol>
  <li>nodeJs</li>
  <li>MongoDB</li>
  <li>ExpressJS</li>
</ol>  

### Running Locally
```shell script
~ docker compose up
```


### MongoDB commands
```shell script
show dbs; ## shows list of databases
use <dbname>;
show collections; ## shows list of table
db.taportal.user.find().pretty() ## prints a table

## Update user type to admin
 db.taportal.user.update({username: 'admin'}, {$set: {usertype: 'admin'}}, false, true)
 
```

<h3>Useful Links </h2>
<ul>
  <li><a href="https://drive.google.com/file/d/0B-6TLW-AJILFZmEtV2RGZE0xdk0/view?usp=sharing">Student use cases with diagrams</a></li>
  <li><a href="https://drive.google.com/file/d/0B-6TLW-AJILFY2UzMVZ4U192YTA/view?usp=sharing">Faculty user use cases with diagrams</a></li>
  <li><a href="https://drive.google.com/file/d/0B-6TLW-AJILFMDRNZVJZQTBnaEk/view?usp=sharing">Admin user use cases with diagrams</a></li>
  <li><a href="https://drive.google.com/file/d/0B-6TLW-AJILFaDZQeVI4aFcwUFE/view?usp=sharing">Project Description</a></li>
  <li><a href="https://drive.google.com/open?id=0B-6TLW-AJILFVnFLWVZIY3pOQVE">Project setup on local machine</a></li>
  <li><a href="https://drive.google.com/open?id=0B-6TLW-AJILFa3J0clFxSFMtN3M">Sequence Diagrams</a></li>
  <li><a href="https://drive.google.com/open?id=0B-6TLW-AJILFUWZmTVFFQnVzcUE">MongoDB</a></li>
  <li><a href="https://drive.google.com/open?id=0B-6TLW-AJILFWEVobUttYTVsUWc">Mobile Friendly usage</a></li>
  <li><a href="https://drive.google.com/open?id=0B-6TLW-AJILFNDh6N0JVOHBtcWc">Pushing to AWS</a></li>
  <li><a href="https://drive.google.com/open?id=0B-6TLW-AJILFTlRWZ0dWLXdHLWc">UML Diagram</a></li>
</ul>


<h2>Copyright</h2>
<p style="font-size:50%;">Copyright 2016, Sesha Sai Srivatsav, All rights reserved.</p>
 

<p style="font-size:50%;">Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:</p>

<p style="font-size:50%;">The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.</p>
