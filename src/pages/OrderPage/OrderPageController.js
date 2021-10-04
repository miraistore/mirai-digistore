import React, { Component } from 'react'
import OrderPageView from './OrderPageView'
import PrimaryNavbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import firebaseHelper from '../../helper/FirebaseHelper'
import {String} from '../../system/Collection'
import axios from 'axios'

export default class OrderPageController extends Component {
    constructor(props){
        super(props)
        this.state = {
            harga: [],
            foto: '',
            dataOrder : {},
            pembayaran : [],
            selectedNominal : '',
            selectedPayment : '',
            selectedPaymentId: '',
            selectedPrice : '',
            deskripsi : '',
            nickGame : '',
            idUserGame : '',
            idZoneGame : '',
            showModal : false,
            showLoading : false,
            warning : '',
            code : '',
            noWa : '',
            namaProduk : '',
            firabase : firebaseHelper
        }
        this.method = {
          onNominalChange : this.onNominalChange.bind(this),
          onPaymentChange : this.onPaymentChange.bind(this),
          handleCheckout : this.handleCheckout.bind(this),
          handleInputChange : this.handleInputChange.bind(this),
          getNickGame : this.getNickGame.bind(this),
          closeModal : this.closeModal.bind(this),
          createPesanan : this.createPesanan.bind(this)
        }
    }
    
    componentDidMount(){
        this.getProduk();
        this.getPembayaran();
    }
    handleInputChange = (e) => {
        if(e.target.name === 'noWa'){
            this.setState( { [e.target.name]: e.target.value });
        }else{
            this.setState( { [e.target.name]: e.target.value });
        }
        
        //console.log(JSON.stringify(this.state.order))
    };

    getProduk = () => {

        firebaseHelper.database().ref(`/produk/${this.props.match.params.id}`)
        .on('value', snapshot => {
          const data = snapshot.val();
          this.setState({ foto: data.foto,harga : data.listHarga, deskripsi : data.deskripsi,namaProduk: data.nama});
          console.log(this.state.harga);
        });  

    }

    getNickGame = async () => {
        this.setState({showLoading : true});

        let data ={
            user_id: this.state.idUserGame,
            zone_id: this.state.idZoneGame,
            pid: 26,
            checkrole : 1
          }
          
        await axios.post(String.SCRAPPING_MERCHANT+'/mobilelegends/checkrole/',data)
          .then((res)=>{
            if(res.data.code === 200) {
                this.setState({nickGame : res.data.username,code : res.data.code});
            }else{
                this.setState({warning : 'Nickname tidak terdaftar!', code : res.data.code});
            }
           
          }).catch((err)=>{
            console.log(err)
          })
        this.setState({showLoading : false});
    }

    getPembayaran = () => {
        firebaseHelper.database().ref(`/pembayaran`)
        .on('value', snapshot => {
          const data = snapshot.val();
          this.setState({ pembayaran : data });
          console.log(data);
        });  
    }

    onNominalChange = (val,price) => {
        this.setState({
            selectedNominal: val,
            selectedPrice : price
        }); 
    }
    onPaymentChange = (val,id) => {
        this.setState({
            selectedPayment: val,
            selectedPaymentId : id
        }); 
        console.log(id);
    }

    handleCheckout = (e) => {
        e.preventDefault();
        //this.props.history.push({pathname : `/Checkout`});
       
        //console.log(this.state.showModal);
        let dataTemp = {
            nominal : this.state.selectedNominal,
            payment : this.state.selectedPayment,
            price : this.state.selectedPrice,
            noWa : this.state.noWa,
            nick : this.state.nickGame,
            idUser : this.state.idUserGame,
            idZone :this.state.idZoneGame,
            idPayment : this.state.selectedPaymentId,
            idProduk : this.props.match.params.id
        }
        if(this.state.code === 200 && dataTemp.nominal != '' && dataTemp.noWa != '' && dataTemp.idPayment != '' &&  dataTemp.price != '' && dataTemp.noWa != '') {
            this.setState({
                showModal : true ,
                dataOrder : dataTemp
             }); 
        }else{
            alert('Harap melengkapi data.');
        }
    }

    createPesanan = async () => {
        const data = this.state.dataOrder;
        var ref = firebaseHelper.database().ref('/pesanan');
        var postData = await ref.push({ data,status : 0 })
        console.log(postData.key);
        // await firebaseHelper.database()
        // .ref('/pesanan')
        // .push()
        // .set({ nominal,payment,price,noWa,nick,idUser,idZone })
        // .then((snap) => {console.log(snap.key)});
        this.props.history.push({pathname : `/Checkout/${postData.key}`})
    }

    closeModal = () =>{
        this.setState({
            showModal : false 
         }); 
    }

    render() {
        return (
            <div>
                <PrimaryNavbar/>
                <OrderPageView state={this.state} method={this.method}/>
                <Footer/>
            </div>
        )
    }
}
