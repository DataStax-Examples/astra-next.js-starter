<!--- Use the below tags to exclude content from the Astra DB UI --->
<!--- STARTEXCLUDE --->
<!--- ENDEXCLUDE --->

<!--- 
The Project Name, duration and skillLevel, make sure these values match
the astra.json
--->
<!--- STARTEXCLUDE --->
# Next.js/Astra Starter
*10 minutes, Beginner, [Start Building](https://github.com/DataStax-Examples/astra-next.js-starter/blob/master/INSTRUCTIONS.md)*


<!---  
A short few sentences describing what is the purpose of the example and what the user will learn

e.g.
This application shows how to use configure your NodeJs application to connect to DDAC/Cassandra/DSE or an Apollo database at runtime.

This should be the same as the "description" key in the astra.json file. 
--->
A sample Next.js + [DataStax Astra](https://astra.datastax.com/register?utm_source=devplay&utm_medium=github&utm_campaign=astra-next.js-starter) starter app that leverages the AstraDB REST API to manage a character database.
<!--- ENDEXCLUDE --->


<!--- 
heroImage example:
![image](https://user-images.githubusercontent.com/3254549/89590110-ff682580-d7fb-11ea-8e3a-47e3b552fc19.png)

Be sure to include 2 line breaks before and after the hero image
-->
![image](https://user-images.githubusercontent.com/3254549/89590110-ff682580-d7fb-11ea-8e3a-47e3b552fc19.png)


<!--- 
A list of the top objectives that are being demonstrated by this sample

e.g.
* To demonstrate how to specify at runtime between a standard (DSE/DDAC/C*) client configuration and an Apollo configuration for the same application.
--->
## Objectives
* Provide a fullstack development example using Astra as the storage backend

<!--- 
A description of how this sample works and how it demonstrates the objectives outlined above
--->  
## How this works
Once the Astra credentials are provided, the necessary tables are created in the database and sample data is inserted. The webservice will be available on port 3000 once the application has been deployed. Once the application is running, you can begin to make changes to your app by editing `pages/index.js`.

[Next.js](https://nextjs.org/) is an open-source JavaScript framework that lets you build server-side rendering and static web applications using React. It is not nescessary to configuration of webpack or similar to start using Next.js, as it comes with its configuration. This make it very simple to start a project, as we only need to execute simple commands and the project is ready.

[Vercel](https://vercel.com/) is a cloud platform for static sites and Serverless Functions, it enables developers to host Jamstack websites and web services that deploy instantly. You also have the option to deloy this app in Vercel.

<!--- 
Replace INSTRUCTIONS_LINK with an absolute path link to your instructions
--->
## Get Started
To build and play with this app, follow the build instructions that are located here: [https://github.com/DataStax-Examples/astra-next.js-starter/blob/master/INSTRUCTIONS.md](https://github.com/DataStax-Examples/astra-next.js-starter/blob/master/INSTRUCTIONS.md)