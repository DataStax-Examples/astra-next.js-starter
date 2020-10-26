# Next.js/Astra Starter
*10 minutes, Beginner*

A sample Next.js, [DataStax Astra](https://astra.datastax.com/register?utm_source=devplay&utm_medium=github&utm_campaign=astra-next.js-starter) starter app.

![image](https://user-images.githubusercontent.com/3254549/89590110-ff682580-d7fb-11ea-8e3a-47e3b552fc19.png)

Contributor: [Alex Leventer](https://github.com/alexleventer)

## Objectives
* Provide a fullstack development example using Astra as the storage backend

## How this works
Once the Astra credentials are provided, the necessary tables are created in the database and sample data is inserted. The webservice will be available on port 3000 once the application has been deployed. Once the application is running, you can begin to make changes to your app by editing `pages/index.js`.

[Next.js](https://nextjs.org/) is an open-source JavaScript framework that lets you build server-side rendering and static web applications using React. It is not nescessary to configuration of webpack or similar to start using Next.js, as it comes with its configuration. This make it very simple to start a project, as we only need to execute simple commands and the project is ready.

[Vercel](https://vercel.com/) is a cloud platform for static sites and Serverless Functions, it enables developers to host Jamstack websites and web services that deploy instantly. You also have the option to deloy this app in Vercel.


## 🚀 Getting Started Paths:
1. [Run the app locally](#running-on-your-local-machine)
2. [Run the app on Gitpod](#running-on-gitpod)
3. [Deploy the app to Vercel](#deploying-to-vercel)

### Running on your local machine
1. Create a [DataStax Astra account](https://astra.datastax.com/register?utm_source=github&utm_medium=referral&utm_campaign=astra-nextjs-starter) and free-tier Cassandra database:
![image](https://user-images.githubusercontent.com/3254549/89589429-76042380-d7fa-11ea-917a-9bb1b1f11203.png)

2. Click 'Use this template' at the top of [GitHub](https://github.com/DataStax-Examples/astra-next.js-starter):
![image](https://user-images.githubusercontent.com/3254549/89589520-9af89680-d7fa-11ea-9df2-38ded5884927.png)

3. Enter a repository name and click 'Create repository from template':
![image](https://user-images.githubusercontent.com/3254549/89589574-b794ce80-d7fa-11ea-9c0e-4c7168501441.png)

4. Clone the repository:
![image](https://user-images.githubusercontent.com/3254549/89589607-cb403500-d7fa-11ea-98a7-8cbf66f02639.png)

5. `cd` into the cloned repository. Install Node dependencies with [Yarn](https://yarnpkg.com/): `yarn install` (Alternatively, use npm: `npm install`)
6. Run the set up script: ` . ./gitpod-setup.sh`
7. Start your app by running: `yarn start` or `npm start`
8. You can view your app at  http://localhost:3000/:
![image](https://user-images.githubusercontent.com/3254549/89589853-6b965980-d7fb-11ea-80ff-62dfe4b31ddb.png)

### Running on Gitpod
1. Create a [DataStax Astra account](https://astra.datastax.com/register) and free-tier Cassandra database:
![image](https://user-images.githubusercontent.com/3254549/89589429-76042380-d7fa-11ea-917a-9bb1b1f11203.png)

2. Click the 'Open in Gitpod' link:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://dtsx.io/2YtXWVU)

3. Wait for your Gitpod workspace to start:
![image](https://user-images.githubusercontent.com/3254549/89589934-a5676000-d7fb-11ea-9690-36b876bbdb86.png)

4. Set your Astra credentials in the Gitpod terminal at the bottom of the screen:
![image](https://user-images.githubusercontent.com/3254549/89589982-c3cd5b80-d7fb-11ea-945f-a2413c456bb3.png)

You can find your database ID by clicking on your database name:
![Screen Shot 2020-08-27 at 9 26 50 AM](https://user-images.githubusercontent.com/69874632/91469019-b11cd400-e847-11ea-83ea-fbf4227d40dc.png)

Then you'll find it on the summary page here:
![image](https://user-images.githubusercontent.com/3254549/88744238-a1508980-d0fb-11ea-83fc-6efc6b370780.png)

5. Click the 'Open browser' button in the bottom right of the screen:
![image](https://user-images.githubusercontent.com/3254549/89590054-e6f80b00-d7fb-11ea-8a26-de2a019db71f.png)

6. View your application:
![image](https://user-images.githubusercontent.com/3254549/89590110-ff682580-d7fb-11ea-8e3a-47e3b552fc19.png)

### Deploying to Vercel
1. Create a [DataStax Astra account](https://astra.datastax.com/register?utm_source=github&utm_medium=referral&utm_campaign=astra-nextjs-starter) and free-tier Cassandra database:
![image](https://user-images.githubusercontent.com/3254549/89589429-76042380-d7fa-11ea-917a-9bb1b1f11203.png)
2. Click the 'Deploy' button:

[![Deploy with Vercel](https://vercel.com/button)](https://dtsx.io/3aUg00p)

3. Click continue:
![image](https://user-images.githubusercontent.com/3254549/89590194-232b6b80-d7fc-11ea-8dba-076b1a791a3e.png)

4. Install Vercel for Github: 
![Screen Shot 2020-08-27 at 9 58 50 AM](https://user-images.githubusercontent.com/69874632/91472193-f6430500-e84b-11ea-8a93-4b0b2773076c.png)

5. Enter your Astra database details and click deploy:
![image](https://user-images.githubusercontent.com/3254549/89590278-553ccd80-d7fc-11ea-91b1-6d61c2aae20f.png)

6. Click visit to view your live app:
![image](https://user-images.githubusercontent.com/3254549/89590361-9208c480-d7fc-11ea-9692-92fc3e71b1ad.png)
