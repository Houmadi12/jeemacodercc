import React from "react";
import Button from "./Button";

class FormAdd extends React.Component {
  constructor(props) {
    super(props);
    
    // Initialize state in the constructor
    this.state = {
      prenom: "",
      nom: "",
      mail: "",
      telephone: ""
    };
  }

  // Convert useState setter methods to class component method handlers
  setPrenom = (value) => {
    this.setState({ prenom: value });
  }

  setNom = (value) => {
    this.setState({ nom: value });
  }

  setMail = (value) => {
    this.setState({ mail: value });
  }

  setTelephone = (value) => {
    this.setState({ telephone: value });
  }

  // Fonction d'ajout d'utilisateur
  addInfoUser = () => {
    const { prenom, nom, mail, telephone } = this.state;
    const { onSubmit, err } = this.props;

    if (nom.trim() !== "" && prenom.trim() !== "" && mail.trim() !== "" && telephone !== "") {
      let newUser = {
        name: prenom,
        lastName: nom,
        email: mail,
        tel: telephone,
      }

      // Mise à jour de table Users et localStorage
      onSubmit(newUser);
      
      // Vide les champs
      this.setState({
        nom: "",
        prenom: "",
        mail: "",
        telephone: ""
      });
    } else {
      err("Veuillez remplir tous les champs")
    }
  }

  render() {
    const { prenom, nom, mail, telephone } = this.state;

    return (
      <div className="">
        <form className="flex flex-col w-fll p-4 shadow-[0_5px_8px_rgba(0,0,0,0.35)] rounded justify-center items-center gap-4">
          <div className="flex justify-between gap-10">
            <div className="w-2/4">
              <label htmlFor="prenom" className="block text-xs md:text-md lg:text-[15px] font-medium font-lexendDeca leading-6 text-[#555555]">Prenom</label>
              <div className="mt-2">
                <input 
                  id="prenom" 
                  type="text" 
                  value={prenom} 
                  onChange={(e) => this.setPrenom(e.target.value)} 
                  required 
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm md:text-xl sm:leading-6" 
                />
              </div>
            </div>
            <div className="w-2/4">
              <label htmlFor="nom" className="block text-xs md:text-md lg:text-[15px] font-medium font-lexendDeca leading-6 text-[#000000]">Nom</label>
              <div className="mt-2">
                <input 
                  id="nom" 
                  type="text" 
                  value={nom} 
                  onChange={(e) => this.setNom(e.target.value)} 
                  required 
                  className="block w-full rounded-md px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm md:text-xl sm:leading-6" 
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-10">
            <div className="w-2/4">
              <label htmlFor="email" className="block text-xs md:text-md lg:text-[15px] font-medium font-lexendDeca leading-6 text-[#000000]">Email</label>
              <div className="mt-2">
                <input 
                  id="email" 
                  type="Email" 
                  value={mail} 
                  onChange={(e) => this.setMail(e.target.value)} 
                  required 
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm md:text-xl sm:leading-6" 
                />
              </div>
            </div>
            <div className="w-2/4">
              <label htmlFor="telephone" className="block text-xs md:text-md lg:text-[15px] font-medium font-lexendDeca leading-6 text-[#000000]">Télephone</label>
              <div className="mt-2">
                <input 
                  id="telephone" 
                  type="number" 
                  value={telephone} 
                  onChange={(e) => this.setTelephone(e.target.value)} 
                  required 
                  className="block w-full rounded-md px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm md:text-xl sm:leading-6" 
                />
              </div>
            </div>
          </div>
          <div className="w-full">
            <Button 
              titre="Ajouter" 
              param="py-1 w-full text-lg font-semibold text-white shadow-sm hover:bg-[#198750] bg-[#198754] rounded-sm"
              onclick={this.addInfoUser}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default FormAdd;