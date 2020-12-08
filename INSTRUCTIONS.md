<!--- Enter the repository name --->
# Running Next.js/Astra Starter
Follow the instructions below to get started.

<!--- 
Modify this section as needed, however always include the Astra setup parts
--->
## Prerequisites
Let's do some initial setup.

### DataStax Astra
<!--- enter a unique UTM_CODE for your sample app below --->
Create a [DataStax Astra account](https://astra.datastax.com/register?utm_source=github&utm_medium=referral&utm_campaign=astra-nextjs-starter) if you don't 
already have one:
![image](https://astra-screenshots.s3.amazonaws.com/current/register-basic-auth.png)

Create an (always) free-tier Cassandra database (take note of your db password):
![image](https://user-images.githubusercontent.com/69874632/101203026-ef801700-361e-11eb-8321-de2d65259763.png)
![image](https://user-images.githubusercontent.com/69874632/101203076-0292e700-361f-11eb-88ee-1f6356f4d7dc.png)
![image](https://user-images.githubusercontent.com/69874632/101203115-12aac680-361f-11eb-9087-8ff5cb9516d7.png)

After your database is provisioned, head to the `Connect` screen and copy your connection 
information (we'll need this later!):
![image](https://user-images.githubusercontent.com/69874632/101203076-0292e700-361f-11eb-88ee-1f6356f4d7dc.png)

### Github
Click `Use this template` at the top of the [GitHub Repository](https://github.com/DataStax-Examples/astra-next.js-starter):
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/github-use-template.png)

Enter a repository name and click 'Create repository from template':
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/github-create-repository.png)

Clone the repository:
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/github-clone.png)


<!--- 
Include locally as a minimum so that folks will
create an Astra DB and use your repository as a template.

Remove paths that you don't need.
--->
## 🚀 Getting Started Paths:
*Make sure you've completed the [prerequisites](#prerequisites) before starting this step*
  - [Running on your local machine](#running-on-your-local-machine)
  - [Running on Gitpod](#running-on-gitpod)
  - [Deploying to Vercel](#deploying-to-vercel)

<!--- 
Include the appropriate commands to run the app locally (post cloning). If you're using
Docker or something similar, include that setup here.
--->
### Running on your local machine

1. `cd` into the cloned repository. Install Node dependencies with [Yarn](https://yarnpkg.com/): `yarn install` (Alternatively, use npm: `npm install`)

2. Run the set up script: ` . ./gitpod-setup.sh`

3. Start your app by running: `yarn start` or `npm start`

4. You can view your app at  http://localhost:3000/:
![image](https://user-images.githubusercontent.com/3254549/89589853-6b965980-d7fb-11ea-80ff-62dfe4b31ddb.png)

<!--- 
Include Gitpod where possible, it provides a good DX for experimentation 
--->
### Running on Gitpod
<!-- Enter your GITPOD_LINK below -->
1. Click the 'Open in Gitpod' link: 
[![Open in IDE](https://gitpod.io/button/open-in-gitpod.svg)](https://dtsx.io/2YtXWVU)

2. Wait for your Gitpod workspace to start:
![image](https://user-images.githubusercontent.com/3254549/89589934-a5676000-d7fb-11ea-9690-36b876bbdb86.png)

3. Set your Astra credentials (from [prerequisites](#prerequisites)) in the Gitpod terminal at the bottom of the screen:
![image](https://user-images.githubusercontent.com/3254549/89589982-c3cd5b80-d7fb-11ea-945f-a2413c456bb3.png)

4. Click the 'Open browser' button in the bottom right of the screen:
![image](https://user-images.githubusercontent.com/3254549/89590054-e6f80b00-d7fb-11ea-8a26-de2a019db71f.png)

5. View your application:
![image](https://user-images.githubusercontent.com/3254549/89590110-ff682580-d7fb-11ea-8e3a-47e3b552fc19.png)

### Deploying to Vercel
<!-- Enter your VERCEL_URL below -->
1. Click the 'Deploy' button:
[![Deploy with Vercel](https://vercel.com/button)](https://dtsx.io/3aUg00p)

2. Click continue:
![image](https://user-images.githubusercontent.com/3254549/89590194-232b6b80-d7fc-11ea-8dba-076b1a791a3e.png)

3. Install Vercel for Github: 
![Screen Shot 2020-08-27 at 9 58 50 AM](https://user-images.githubusercontent.com/69874632/91472193-f6430500-e84b-11ea-8a93-4b0b2773076c.png)

4. Enter your Astra database details and click deploy:
![image](https://user-images.githubusercontent.com/3254549/89590278-553ccd80-d7fc-11ea-91b1-6d61c2aae20f.png)

5. Click visit to view your live app:
![image](https://user-images.githubusercontent.com/3254549/89590361-9208c480-d7fc-11ea-9692-92fc3e71b1ad.png)
