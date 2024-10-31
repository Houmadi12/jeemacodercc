import React from 'react';
import Button from "./Button";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

class Tableau extends React.Component {
  render() {
    const { users, onclick } = this.props;

    return (
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden border-t-2 ">
              <table className="min-w-full text-left text-sm">
                <caption className="caption-top py-2 text-lg">
                  Utilisateur
                </caption>
                <thead
                  className="border border-b-[2px] border-b-[#3a3939] bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                  <tr>
                    <th scope="col" className="px-1 md:px-6 py-2">Pénom</th>
                    <th scope="col" className="px-1 md:px-6 py-2">Nom</th>
                    <th scope="col" className="px-1 md:px-6 py-2">Email</th>
                    <th scope="col" className="px-1 md:px-6 py-2">Telephone</th>
                    <th scope="col" className="px-1 md:px-6 py-2 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    [...users].map((user, index) => (
                      <tr key={index} className="border-b-2">
                        <td className="whitespace-nowrap px-1 md:px-6 py-2 font-medium">{user.lastName}</td>
                        <td className="whitespace-nowrap px-1 md:px-6 py-2">{user.name}</td>
                        <td className="whitespace-nowrap px-1 md:px-6 py-2">{user.email}</td>
                        <td className="whitespace-nowrap px-1 md:px-6 py-2">{user.tel}</td>
                        <td className="flex justify-around whitespace-nowrap px-1 lg:px-6 py-2">
                          <Button 
                            titre="Modifier" 
                            param="py-1 w-2/5 hidden sm:block px-1 lg:text-base font-semibold text-black shadow-sm hover:bg-[#198750] bg-[#FFC107] rounded-sm" 
                          />
                          <Button 
                            titre="Supprimer" 
                            onclick={onclick}
                            param="py-1 w-2/5 hidden sm:block px-1 lg:text-base font-semibold text-white shadow-sm hover:bg-[#DC3545] bg-[#DC3545] rounded-sm" 
                          />
                          <button className="text-[#FFC107] cursor-pointer block sm:hidden text-xl "> 
                            <FaEdit /> 
                          </button>
                          <button className="text-[#DC3545] cursor-pointer block sm:hidden text-2xl "> 
                            <MdDeleteForever /> 
                          </button>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tableau;