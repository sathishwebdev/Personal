// learning about webshare api
// web share api invoke the native sharing mechanism
// we can easily share our contents such as links, texts, files 
// share by objects

// navigator.share() is the method - syntax is navigator.share(data)

// data is an object that contains data to share

// use navigator.canShare() to check the environment can accept navigator.share() i.e web share api

class Share {
    constructor(props){
       
        //value assigning
        this.title = props.title || ""
        this.text = props.text || ""
        this.url = props.url || ""
        this.file= props.file || ""

        //initiallizing...
        console.log(props);
        document.getElementById("root").innerHTML = this.rendor(props)
        this.shareFun(props)
    }

shareFun(data){
    let btn = document.querySelector("button")
    btn.addEventListener('click', async () =>{
        try{
            await navigator.share(data).then(()=> console.log("Sucessfully shared"))
        } catch(error){console.log(error)} 
    } )
}

    rendor(){
return `<button>share</button><p class="result"></p>` 
    }
}
new Share({
    title : "Facts | Voofacts",
    text : "web share api trail 1 is successfull",
    url : "https://facts.voofacts.com"
})
{/* <p>title is ${this.title}</p><p>text is ${this.text}</p><p><a href=${this.url} >url</a></p> */}
