class Test extends Object {

    constructor() {
        super()
        this.getDataFromServer = this.getDataFromServer.bind(this);
    }

    getDataFromServer() {
        // return some extra load
        this.secondPostForm('http://www.google.com', { message: 'some message' });
    }

    postJsonToUrl(url, object) {
        // post data to url and result sent back from server to the client 
    }
    secondPostForm = (url, object) => {

    }

}
