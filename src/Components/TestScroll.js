import React, {Component} from 'react'
import './Styles/Style.css';
import './Styles/Scroll.css';

export default class TestScroll extends Component {
    constructor(props) {
        super(props);
        this.state = {
          offset: 0,
          reducedData: [],
          results: [],
          perPage: 10,
          currentPage: 0,
          errorMessage: " ",
          criteria:"All",
          criteriaString:"",
          orignalresults:[],
          count:0,
        };
        window.addEventListener("scroll", this.handleScroll);
       
    }

    handleSelect = (e) =>
    {
      //update criteria all, subject, author, publishyear...
      this.setState(

        {criteria:e.target.value},

        ()=>{
          console.log(this.state.criteria+" - criteria")
          if(this.state.criteria=="All")
          {
              console.log("Calling");
              this.getData();
          }
        }
      )
     
    }

    handleChange = (e) =>
    {
      this.setState({criteriaString:e.target.value})
      console.log(this.state.criteriaString)
      if(this.state.criteria=="Author")
      {
           var filt=this.state.originalresults.filter(book=>book.Author.toLowerCase().includes(this.state.criteriaString.toLowerCase()))
           console.log("Testing"+JSON.stringify(filt)+" Length "+filt.length)
           this.setState({count:filt.length},()=>{
               this.getDataonFilter(filt)
           })
     
      }
      // else if(this.state.criteria=="ALL")
      // {
      //   var filt = this.state.orignalresults.filter(
      //     book=>{
      //       book.Author.toLowerCase().includes(this.state.criteriaString.toLowerCase())
      //       ||
      //       book.Title.toLowerCase().includes(this.state.criteriaString.toLowerCase())
      //       ||
      //       book.Subject.toLowerCase().includes(this.state.criteriaString.toLowerCase())
      //       ||
      //       book.Publishdate.toLowerCase().includes(this.state.criteriaString.toLowerCase())
      //     })
      //     console.log("ALL"+JSON.stringify(filt))
      //     this.setState({count:filt.length},()=>{
      //       this.getDataonFilter(filt);
      //     })
      // }
      else if(this.state.criteria=="Title")
      {
           var filt=this.state.originalresults.filter(product=>product.Title.toLowerCase().includes(this.state.criteriaString.toLowerCase()))
           //console.log("Testing"+JSON.stringify(filt)+"Length "+filt.length)
           this.setState({count:filt.length},()=>{
               this.getDataonFilter(filt)
           })
     
      }
      else if(this.state.criteria=="Subject")
      {
           var filt=this.state.originalresults.filter(product=>product.Subject.toLowerCase().includes(this.state.criteriaString.toLowerCase()))
           //console.log("Testing"+JSON.stringify(filt)+"Length "+filt.length)
           this.setState({count:filt.length},()=>{
               this.getDataonFilter(filt)
           })
     
      }
      else if(this.state.criteria=="Publishdate")
      {
           var filt=this.state.originalresults.filter(product=>product.Publishdate.toLowerCase().includes(this.state.criteriaString.toLowerCase()))
           //console.log("Testing"+JSON.stringify(filt)+"Length "+filt.length)
           this.setState({count:filt.length},()=>{
               this.getDataonFilter(filt)
           })
     
      }


    }



    getDataonFilter=(filt)=>
    {

      var res1=filt;
      console.log("Getting data based on filter"+JSON.stringify(res1))
      var data = res1;

      this.setState({offset:0})

      var slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)

      this.setState({

        results: res1,
        reducedData: slice
      }
      )



    }

    componentDidMount() {
      //after rendering
      console.log("COMPONENT DID MOUNT")
      this.getData();
    }


    getData =()=> {
        console.log("this getData")
          var res1=require("./books.json")
          console.log(res1)

          var data = res1;
          this.setState({count:res1.length})
          var slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
  
          this.setState({

            results: res1,
            reducedData: slice,
            originalresults:res1,
          }
          )
      
    }
  
    loadMoreData=()=>
    {
        console.log("load more data");

      const data = this.state.results;
      const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage);
      this.setState({reducedData: [...this.state.reducedData,...slice]});
      console.log(this.state.reducedData);
      console.log("offset : "+this.state.offset);
      console.log("limit : "+(this.state.offset + this.state.perPage))
    }

    

    handelScroll = (e) => {
        console.log("hiiiiii scrollll");
        console.log("# top"+e.target.scrollTop);
        console.log("# window height"+window.innerHeight);
        console.log("# entire height" +e.target.scrollHeight);
        console.log( "top + win : "+
                            Math.ceil(e.target.scrollTop + window.innerHeight)
                  );

      const currentHeight = Math.ceil(
          e.target.scrollTop + window.innerHeight
        );
      
      const scrollHeight = e.target.scrollHeight;

      console.log("current height : "+currentHeight);
      console.log("entier scroll height : "+scrollHeight);
      console.log("new enitre height : "+(parseInt(scrollHeight)));


      if(currentHeight>scrollHeight+150)
      {
          
          console.log("reached end");
          const offset = this.state.offset+10;
          this.setState(
              {
                offset:offset
              },
              () => {
                  this.loadMoreData()
              }
              );
      };

    }

    render() {
      console.log("RENDERING")
      return (
        <>
        <div id="bodyL">
          <h5>Welcome back {this.props.username}</h5>
          <br/>
         <h4>Filtering Criteria &nbsp; &nbsp;
            <select name="dhanush" onChange={this.handleSelect}>
                  <option value="All" selected>All</option>
                  <option value="Title"> Title</option>
                  <option value="Author">Author</option>
                  <option value="Subject">Subject</option>
                  <option value="Publishdate">Publishdate</option>
            </select>

            &nbsp; &nbsp; 
          <input type="text" style={{width:'40%'}} placeholder="Search here" onChange={this.handleChange}
            value={this.state.criteriaString}
            />
          </h4>
          <br/>
          <br/>
          <div id="bookbox" onScroll={this.handelScroll}>
             
            {  console.log(this.state.criteria+"---"+this.state.criteriaString)}

            {
              this.state.reducedData.length 
              ? this.state.reducedData.map((product) => (
              
                <div key={product.ISBN} id="bookshelf">
                    <h3>Title :  {product.Title} </h3>
                    <h3>Author : {product.Author} </h3>
                    <h3>Subject : {product.Subject}</h3>
                    <h3> Date : {product.Publishdate} </h3>
                </div>
                 
              ))
              : 
              <div className='alert alert-danger'>No results found! :(</div>
            }
            </div>
            
            {this.state.errorMessage ? <div> {this.state.errorMessage}</div> : null}
          <br/>
          <h5 className='alert alert-success'> Total count of {this.state.criteria}  {this.state.criteriaString} is: {this.state.count}</h5>
        </div>
        
        <a href="/Logout" style={{textDecoration:'none',color:'black',margin:'30px'}}> 
        <span
        className="display-6">Logout</span></a>
        <br/>
        <br/>
        </>
  
  
      )
    }
  

}