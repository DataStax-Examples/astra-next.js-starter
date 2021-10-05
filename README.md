<!--- STARTEXCLUDE --->
# Next.js and Astra DB Starter
*10 minutes, Beginner, [Start Building](https://github.com/DataStax-Examples/astra-next.js-starter#quick-start)*

A sample Next.js + [DataStax Astra DB](https://dtsx.io/3BzlUQU) starter app that integrates Astra DB into a Next.js API.
<!--- ENDEXCLUDE --->

![image](https://raw.githubusercontent.com/DataStax-Examples/astra-next.js-starter/master/hero.png)

## Quick Start
<!--- STARTEXCLUDE --->
* [Signup for DataStax Astra](https://dtsx.io/3BzlUQU), or login to your already existing account. 
* [Create an Astra DB Database](https://github.com/DataStax-Examples/sample-app-template/blob/master/GETTING_STARTED.md#create-an-astra-db) if you don't already have one.
<!--- ENDEXCLUDE --->
* [Create an Astra DB Keyspace](https://github.com/DataStax-Examples/sample-app-template/blob/master/GETTING_STARTED.md#create-an-astra-db-keyspace) called `sag_nextjs_starter` in your database.
* [Generate an Application Token](https://github.com/DataStax-Examples/sample-app-template/blob/master/GETTING_STARTED.md#create-an-application-token) with the role of `Database Administrator` for the Organization that your Astra DB is in.
* Click the 'Open in Gitpod' link: [![Open in IDE](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/DataStax-Examples/astra-next.js-starter)
* Once the app is finished launching in the Gitpod IDE, copy the `env.example` file to a file named `.env` and fill the required values in from your Application Token and [Astra DB connection settings](https://github.com/DataStax-Examples/sample-app-template/blob/master/GETTING_STARTED.md#get-your-astra-db-connection-settings).
* Start the example by running `npm run dev` in the Gitpod console.

## Objectives
* Provide a Next.js starter using Astra DB as the storage backend

## How this works
Once the Astra DB credentials are provided, the Next.js endpoint will fetch your Astra DB keyspaces. The webservice will be available on port 3000 once the application has been deployed. Once the application is running, you can begin to make changes to your app by editing `pages/index.js`.

[Next.js](https://nextjs.org/) is an open-source JavaScript framework that lets you build server-side rendering and static web applications using React. It is not nescessary to configuration of webpack or similar to start using Next.js, as it comes with its configuration. This make it very simple to start a project, as we only need to execute simple commands and the project is ready.

[Vercel](https://vercel.com/) is a cloud platform for static sites and Serverless Functions, it enables developers to host Jamstack websites and web services that deploy instantly. You also have the option to deloy this app in Vercel.
