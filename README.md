- create a vite + react project
- install tailwind css
- install daisy UI
- add navbar component to app.jsx  from daisy UI components
- create a separate Navbar component
- install react router dom
- in main.jsx there is app component rendering
- create in app.jsx  browserRouter > Routes > Route = / Body > RouteChildren
- create an outlet in Body component for RouteChildren
- create a footer component
- in Body component  
     --navbar component  // permanent means to be in every page
     --outletcomponent  // every route children will come in outlet / dynamic components
     --footer            // permanent means to be in every page
- install axios
- install cors in backend and add middleware with configuration { origin ,credentials:true}
- whenever  making api call from fronted do axios {withCredentials :true}
install Redux tool kit https://redux-toolkit.js.org/tutorials/quick-start
- install react readux + toolkit
-  configureStore => provider => createSlice => add reducer to store 
- add redux dev tools extension in chrome
- login and see if ur data is coming properly
- navbar should update as far as user logs in
- make a constant  file 
- you should not access other routes without login
 - if token is not present , resirect user to login page
- logout feature
- profile page
- Edit profile feature
- show toast on save of file
- New page : show connections
- New page : show connection Requests




# Deployment
Sign up to AWS
Launch an instance 
Connect to the instance:
   -In git bash : do 
     -  cd Downlaods (for to be in folder where .pem files are present)
     - chmod 400 "DevTinder-secret.pem" (modifying permissions in .pem file)
     - ssh -i "DevTinder-secret.pem" ubuntu@ec2-13-60-83-216.eu-north-1.compute.amazonaws.com 
     -by all this u will connect to Aws machine
Install node.js on Aws machine:
      - now see in project at ur laptop which version of node is installed
      - go to node js website --- select macOS using nvm 
      - give all these commands in git bash after connecting to aws machine to download node at aws server system but remember to give the downlaod  same version of node which is at ur loal machine(laptop) where project is running completely fine ,otherwise there would be issue
GiT clone: AWS machine does not have code of project ,give it  that code by GIT clone 
      - in gitbash "git clone http url of project "  
      - give this command for both projects
      - do "ls" to check both projects are tere now
   # Frontend:
     - Go into required directory:
          -- in git bash do, cd project name (e.g divTinder frontend ),now u r in required folder on AWS ,
     - Npm install : 
          --do npm install , it will download all dependencies of ur project (vitetc) 
     - Npm run build :
          -- give this command  in git bash to built ur project for prodection,
            vite compile ur      project and create a dist folder for it which we deploy,do "ls" to see dist folder and node modules created.
     - sudo apt update (it will update all packages)
     - sudo apt install nginx
               (download nginx to host our frontend,we will deploy our fontend on it    uisng it as http server)
     - sudo systemctl start nginx (to start engine x server)
     - sudo systemctl enable nginx (enable engine x)
     - copy files from dist(build files ) to nginx http server
          -- sudo scp -r dist/* /var/www/html/ (copy command) 
             (sudo  ->root level permissions , csp ->copy it , -r  recursive , dist/* all folder ,/var/www/html/  -> nginx http server)
          -- check copied or not 
             cd /var/www/html/  
             ls   ->u will see assets -----index.html
          -- check before the copy command ,then cd frontend project name and copy command and then check again u will see difference
    - Enable the  port 80 of ur instance as aws blocks all the ports and nginx is on 80 port
          -- go to aws > security>security groups > in bound rules> add rule>type:HTTP , port 80 and  source 0.0.0.0/0 (mens allowing access from anywhere  on internet.)
    - now run the public ipv4 address to see ur deployed webapp

   # BACKEND
      - updated db password if we changed it 
      - allowed ec2 instance public ip to access mongoDB server 
      - cd network-hub-backend 
      - npm install
      - npm run start
      - npm install pm2 -g (for project to keep running in bsckground for 24/7)
      - pm2 start npm --name "Devtinder-backend" -- start
      - pm2 logs 
      - pm2 list ,pm2 stop<name>,pm2 delete<name>,pm2 start --name "devTinder-backend" -- start

  # NGINX CONFIG
    TO CONNECT BACKEND AND FRONTEND TO EACH OTHER
   
      -> nginx configuration to map /api to port 3000;
     - sudo nano /etc/nginx/sites-available/default

         -  do nginx configuration in opened file:

          server-name:13.232.34.229

          location /api/ { proxy_pass http://localhost:3000/;
        proxy_http_version 1.1;
        proxy_set_header Host $host; proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme; 
        proxy_set_header Upgrade $http_upgrade;
         proxy_set_header Connection "upgrade"; 
         }
      -> restart nginx
     
     -> modify the base-url in constants to "/api" ,now all will work perfectly fine



 -------------# Concept
       frontend  =  http:// 13.60.83.216 /
        backend  =  http:// 13.60.83.216 :3000 /

     Domain name = DevTinder.com -> 13.60.83.216  (domain name i smapped to ip address)
       frontend  =   DevTinder.com /
       backend  =   DevTinder.com :3000 /
     correct is:

      frontend  =   DevTinder.com 
       backend  =   DevTinder.com/api (/api is mapped to port no by nginx proxy pass)
# conclusion of deployment on AWS
aws instance , uploaded both frontend and abckend by git clone ,deployed frontend on nginx and added its port (80) to AWS ec2 instance . Then used pm2 and also added backend port to AWS ec2 instance . Did nginx config to map /api to  backend port no(localhost:3000/).updated the base url in constants .git pull and run build , deployed frontend (dist) again on nginx and then whole web app run on ipadress and on actions (buttons ) backend is called internally by nginx proxy pass
    

# sending emails via SES
 - create a IAM user
 - give Access to AmazonSESFullAccess
 - Amazon SES: Create an Identity
 - verify ur domain name or email address
 - Install AWS SDK - v3
 - Code Example https://github.com/awsdocs/aws-doc-sdk-examples/blob/main/javascriptv3/example_code/ses/src/ses_sendemail.js#L16
 - Setup SesClient
 - Access Credentials should be created in IAm under Security Credentials tab
 -Add the credentials to the env file
 - Write code for SESClient
 - write code for sending email
 -  make the email dynamic by passing more params to the run function

# .env file
- .env file is configures on server and contains secret keys and credentials
- .env file is made in backend and put in .gitignore and is not pushed to git
- for production it is manually created on server as it is not in git 
- through git bash connect to server and go to backend directory
- git pull and npm i to install dotenv package
- sudo nano .env to create .env file and paste all the data init , save and restart the pm2

# Scheduling cron jobs in node.js
  in backend
- installing node-cron npm package
- learning about cron syntax -- crontab.guru
- Schedule a job
- date-fns npm package to manage date
- find all the unique email ID wo have receive connction request in previous day
- send email
- explore bee-queue & bull npm package

# Razorpay integration
- Sign up on razerpay & complete KYC
- created a UI for a premium page
- creating an api for create oder in backend
- initialized razorpay in utils
- create oder on razorpay
- create schema and model
- save the order in payment collections
- make the api dynamic
- setup the razorpay webhook on ur live api 
- validate the webhook in api 
   refrence: https://razorpay.com/docs/webhooks/validate-test/
       -- webhook body -> req.body
       -- const webhook signature = req.get("X-Razorpay-Signature")
   update payment in db 
    refernce :https://razorpay.com/docs/webhooks/payments/
      