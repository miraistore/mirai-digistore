import React, { Component } from 'react'
import HomePageView from './HomePageView';
import PrimaryNavbar from '../../component/Navbar';
import Footer from '../../component/Footer'
import firebaseHelper from '../../helper/FirebaseHelper'
import { Redirect } from 'react-router-dom';

export default class HomePageController extends Component {
    constructor(props){
        super(props)
        
        this.unsubscribe = null;
        this.state = {
            data: [],

        }
        this.method = {
            handleBuy : this.handleBuy.bind(this)
        }

    }
 
  
    getProduk =  () => {

        firebaseHelper.database().ref('/produk')
        .on('value', snapshot => {
          const data = snapshot.val();
          this.setState({ data: data});
          //console.log(Object.values(this.state.data));
        });  

    }

    handleBuy = (order,p) => {
    //    console.log(order);
        this.props.history.push({pathname : `/Order/${p}` ,state: {data : order.harga,foto: order.foto}});
        //return (<Redirect to={ `/Order/${p}`}/>);
    }

    componentDidMount() {
        this.getProduk();
    }

    render() {
        return (
            <div>
                <PrimaryNavbar/>
                <HomePageView state={this.state} method={this.method} />
                <Footer/>
            </div>
        )
    }
}
