# videoclub-server-back


<h3>Archive  routes<h3/>
 
<h4>Binder routes.js</h4>
    
```routes
import { addMovie, getMovies, getMovie, editMovie, deleteMovie} from '../controller/user-controller.js';
```
In this case, in the routes folder, properties called from the controller are imported to start routing each method.
    


<h3>Archive  database</h3>

<h4>Binder db.js</h4>

```Connection Database
const Connection = async (username, password) => {
```
In this function it will contain 2 necessary properties that are needed to make the connection in the databases, it is the username and password.

```Connection Database
const URL = `mongodb://${Videoclub}:${movies}@movies.8wsfgdc.mongodb.net/?retryWrites=true&w=majority`;
```
The constant variable URL will contain the link of the Mongo Atlas database in the cloud this link will contain two parameters of username and password.

```Connection Database
    try {
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database connected succesfully')
``` 

```Try-catch
The try-catch condition block is used where it allows us to detect and control what we are requesting through the connection
``` 

In the try block it allows us to verify if the username and password are correct it allows us to connect to the database and show the console that it is connected

```Connection Database
    } catch (e) {
        console.log('Error while connecting with the database', e)
    }
}
```


### Keywords
There are two keywords in the connection async and await are keywords that serve to simplify the behavior of synchronous use of promises and perform some specific behavior on a group of Promises
