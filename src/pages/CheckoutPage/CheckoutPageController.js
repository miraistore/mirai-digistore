import React, { Component } from 'react'
import CheckoutPageView from './CheckoutPageView'
import PrimaryNavbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import firebaseHelper from '../../helper/FirebaseHelper'
import { toast } from 'react-toastify';


export default class CheckoutPageController extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            data: {},
            produk : {},
            pembayaran : {},
            message : {},
            status : '',
            uploadStat : null,
            files : null,
            showModal : false,
            loadingContent : false,
            loadingModal : false,
            modalFooter : true
        }
        this.method = {
            handleCopy : this.handleCopy.bind(this),
            handleUpload : this.handleUpload.bind(this),
            closeModal : this.closeModal.bind(this),
            handleUploadSuccess : this.handleUploadSuccess.bind(this),
            handleUploadError : this.handleUploadError.bind(this),
            updatePesanan : this.updatePesanan.bind(this),
            handleProgress : this.handleProgress.bind(this)
        }

    }
    componentDidMount () {
        this.getOrder();
    }

    getProduk = () => {
        firebaseHelper.database().ref(`/produk/${this.state.data.idProduk}`)
        .on('value', snapshot => {
          const data = snapshot.val();
          this.setState({ produk : data});
          console.log(this.state.harga);
        });  
    }
    getOrder = () => {
        this.setState({loadingContent : true});
        firebaseHelper.database().ref(`/pesanan/${this.props.match.params.orderId}`)
        .on('value', snapshot => {
          const data = snapshot.val();
          this.setState({ data : data.data, status : data.status.toString()});
          this.setMessage();
          this.getProduk(); 
          this.getPembayaran();
        }); 
    }
    getPembayaran = () => {
        firebaseHelper.database().ref(`/pembayaran/${this.state.data.idPayment}`)
        .on('value', snapshot => {
          const data = snapshot.val();
          this.setState({ pembayaran : data});
          this.setState({loadingContent : false});
        });  
    }

    setMessage = () => {
        if(this.state.status === '0'){
            this.setState({
                message : {
                    title : 'Menunggu pembayaran',
                    detail : 'Segera selesaikan pembayaran, proses pengecekan berlangsung sekitar 1-10 menit, setelah bukti pembayaran kami terima kami akan segera memproses pesanan anda.'
                }
            });
        }
        else if(this.state.status === '1'){
            this.setState({
                message : {
                    title : 'Pembayaran anda sedang dicek',
                    detail : 'Setelah pembayaran diterima, pesanan anda langsung diproses kirim.'
                }
            });
        }
        else if(this.state.status === '2'){
            this.setState({
                message : {
                    title : 'Pembayaran diterima',
                    detail : 'Pesanan anda akan masuk sesuai keterang waktu produk Terimakasih.'
                }
            });
        } else if(this.state.status === '3'){
            this.setState({
                message : {
                    title : 'Pesanan sudah berhasil masuk',
                    detail : 'Diamond telah ditambahkan ke akun anda, jika terdapat kendala segera hubungi kami via Whatsapp'
                }
            });
        }
    }
    handleCopy = async () => {
        await navigator.clipboard.writeText(this.state.pembayaran.nomer);
        toast.success("Teks disalin!" ,{
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }

    handleUpload = () => {
        this.setState({
            showModal : true
         }); 
    }

    handleUploadSuccess = (val) => {
        this.setState({loadingModal : true});
        firebaseHelper.storage().ref("/resi/")
        .child(val).getDownloadURL()
        .then(url => {
          this.setState({
            files: url,
            uploadStat: val,
            loadingModal : false,
            modalFooter : true
          });
        });
      }

      handleUploadError = (val) => {
        this.setState({
          status: `File ${val} gagal di upload`
        })
      }

    closeModal = () =>{
        if(this.state.uploadStat === null){
            this.setState({
                showModal : false 
             }); 
        }else{
            this.setState({loadingModal : true});
            var desertRef = firebaseHelper.storage().ref("/resi/").child(this.state.uploadStat);
            desertRef.delete().then(val => {
                this.setState({
                    showModal : false ,
                    uploadStat : null,
                    files : null,
                    loadingModal : false
                 }); 
                console.log(val);
                // File deleted successfully
              }).catch(error =>{
                console.log(error);
                this.setState({
                    loadingModal : false 
                })
                // Uh-oh, an error occurred!
                
              });
            //console.log(this.state.uploadStat);   
        }
    }

    updatePesanan = () => {
        if(this.state.files === null){
            toast.warning("Silahkan upload resi terlebih dahulu!" ,{
                position: toast.POSITION.BOTTOM_RIGHT
            })
        }
        else{
            const dataUpdate ={
                data : this.state.data,
                status : "1",
                resi : this.state.files
            }
            firebaseHelper.database().ref(`/pesanan/${this.props.match.params.orderId}`).update(dataUpdate);
            this.setState({
                showModal : false ,
                status : '1'
             }); 
            this.setMessage();
            window.location.reload();
        }
    }
    handleProgress = () => {
        this.setState({modalFooter : false});
    }


    render() {
        return (
            <div>
                <PrimaryNavbar/>
                <CheckoutPageView state={this.state} method={this.method}/>
                <Footer/>
            </div>
        )
    }
}
