<!--- STARTEXCLUDE --->
# Next.js/Astra Starter
*10 minutes, Beginner, [Start Building](https://github.com/DataStax-Examples/astra-next.js-starter#prerequisites)*

A sample Next.js + [DataStax Astra](https://astra.datastax.com/register?utm_source=devplay&utm_medium=github&utm_campaign=astra-next.js-starter) starter app that leverages the AstraDB REST API to manage a character database.
<!--- ENDEXCLUDE --->

![image](https://user-images.githubusercontent.com/3254549/89590110-ff682580-d7fb-11ea-8e3a-47e3b552fc19.png)

## Objectives
* Provide a fullstack development example using Astra as the storage backend

## How this works
Once the Astra credentials are provided, the necessary tables are created in the database and sample data is inserted. The webservice will be available on port 3000 once the application has been deployed. Once the application is running, you can begin to make changes to your app by editing `pages/index.js`.

[Next.js](https://nextjs.org/) is an open-source JavaScript framework that lets you build server-side rendering and static web applications using React. It is not nescessary to configuration of webpack or similar to start using Next.js, as it comes with its configuration. This make it very simple to start a project, as we only need to execute simple commands and the project is ready.

[Vercel](https://vercel.com/) is a cloud platform for static sites and Serverless Functions, it enables developers to host Jamstack websites and web services that deploy instantly. You also have the option to deloy this app in Vercel.

## Get Started
To build and play with this app, follow the build instructions that are located here: [https://github.com/DataStax-Examples/astra-next.js-starter](https://github.com/DataStax-Examples/astra-next.js-starter#prerequisites)

<!--- STARTEXCLUDE --->
# Running Next.js/Astra Starter
Follow the instructions below to get started.

## Prerequisites
Let's do some initial setup.

### DataStax Astra
1. Create a [DataStax Astra account](https://astra.datastax.com/register?utm_source=github&utm_medium=referral&utm_campaign=astra-nextjs-starter) if you don't 
already have one:
![image](https://astra-screenshots.s3.amazonaws.com/current/register-basic-auth.png)

2. On the home page. Locate the button **`Add Database`**
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-dashboard.png)

3. Pick **free plan** and a **region** close to you, click configure.
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-create-db-1-top.png)
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-create-db-1-bottom.png)

4. Define a **database name**, **keyspace name** and **credentials** (Take note of the DB Password)
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-create-db-2.png)

5. Your Astra DB will be ready when the status will change from *`Pending`* to **`Active`** 💥💥💥 
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-db-active.png)

6. After your database is provisioned, head to the `Connect` screen and copy your connection 
information (we'll need this later!):
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-connect.png)

### Github
1. Click `Use this template` at the top of the [GitHub Repository](https://github.com/DataStax-Examples/astra-next.js-starter):
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/github-use-template.png)

2. Enter a repository name and click 'Create repository from template':
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/github-create-repository.png)

3. Clone the repository:
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/github-clone.png)

## 🚀 Getting Started Paths:
*Make sure you've completed the [prerequisites](#prerequisites) before starting this step*
  - [Running on your local machine](#running-on-your-local-machine)
  - [Running on Gitpod](#running-on-gitpod)
  - [Deploying to Vercel](#deploying-to-vercel)

### Running on your local machine

1. `cd` into the cloned repository. Install Node dependencies with [Yarn](https://yarnpkg.com/): `yarn install` (Alternatively, use npm: `npm install`)

2. Run the set up script: ` . ./gitpod-setup.sh`

3. Start your app by running: `yarn start` or `npm start`

4. You can view your app at  http://localhost:3000/:
![image](https://user-images.githubusercontent.com/3254549/89589853-6b965980-d7fb-11ea-80ff-62dfe4b31ddb.png)

### Running on Gitpod
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
<!--- ENDEXCLUDE --->
