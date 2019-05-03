import React from "react";

export default class ClassComponent extends React.Component{
    constructor(){
        super();

        this.state = {
            listing: [
                { nom:'Darth', email: 'vader@empire.be' },
                { nom:'Yoda', email: 'yoda@rebel.be'}
            ],
            newnom: '',
            newname: '',
            error: false
        }
    }
    
    newContactHandler(ev){
        ev.preventDefault();
        if(/.+\@.+\..+/.test(this.state.newmail)){
            this.setState(prevState=>(
                {
                    listing:[...prevState.listing, {nom:this.state.newnom, email:this.state.newmail}],
                    newnom:'',
                    newmail:'',
                    error: false
                }
            ));
        }else{
            this.setState({error: true});
        }
    }

    render = () => (
        <div>
            <p>Mon composant de classe</p>
            <ul>
                {this.state.listing.map((contact) => (
                    <li>{contact.nom} ({contact.email})</li>
                ))}
            </ul>
            <form>
                <label>Nom</label><input type="text" value={this.state.newnom} onChange={(ev)=>{this.setState({newnom:ev.target.value})}}></input>
                <label>Email</label><input type="text" value={this.state.newmail} onChange={(ev)=>{this.setState({newmail:ev.target.value})}}></input>
                <button onClick={(ev)=>this.newContactHandler(ev)}>Envoyer</button>
                {this.state.error && <p>Erreur: Veuillez renseigner une adresse email valide !</p>}
            </form>
        </div>
    )
}