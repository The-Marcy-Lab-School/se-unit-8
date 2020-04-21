### Short Response: Class Based Components

1. What is the purpose of the constructure in the following code snippet from <ClassBasedForm/>:

```javascript
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
```

The constructor for a React component is called before it is mounted. Here, the purpose of the constructor is to 1) initalize the local state for the email and password and 2) bind the handleSubmit event handler method to an instance of the <ClassBasedForm/>.

2.
