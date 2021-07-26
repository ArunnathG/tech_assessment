The management ask to use React and NodeJS as base technology for this app (because of skills across the company). In future the company hope to build more functions around this app. You are asked to provide initial technical design for this app which should include the following points:
Frontend part:
Tools, frameworks, npm libraries you plan to use and why
Directory structure for source code folder
List of components which you’ll implement (with short description)
For one of the components also provide in which directory/-ies component’s file/-es will be located 
Benefits/drawbacks comparing with traditional (not-SPA) app approach
Any other comments and suggestions
Backend part:
Short description of API – URI, format, why needed
Framework
Any other comments and suggestions






1
a. setup with create-react-app as its a lightweight application
    react > 16.8.0 --> hook support
    use-axios-react --> fetching data
    react-router-dom --> handling routes in application
    prop-types --> checking the type of props on runtime
    react-helmet --> for displaying favicon and document tab title
    styled-components --> styling for application 
    stubby --> mocking response to test locally and dev

b. --src
    --assets
    --components
    --data
    --pages
    --styles
    --utilities

c.  components
        Pagination --> to go back and forth when profile list is long
        DisplayField --> to display name,email and profile pic of users
d. src --> components --> Pagination --> Pagination.js
e. Benifits 
     quick loading time 
      seamless user experience
      less interaction with backend -> data loaded once
    Drawback
        vulnerable to cross site scripting attacks
2.  We could create REST API(GET) using node js to fetch user details → handles high frequency of input bound requests
