import Global from "@/Global"
import axios from "axios";

export default class ServiceSeries{

    getSeries(){
        return new Promise(function(resolve){
            let url = Global.urlSeries;
            let request = "api/Series";
            axios.get(url + request).then(response=>{
                resolve(response.data)
            })
        })
    }

    getSerie(idserie){
        return new Promise(function(resolve){
            let url = Global.urlSeries;
            let request = "api/Series/" + idserie
            axios.get(url + request).then(response=>{
                console.log(response.data)
                resolve(response.data)
            })
        })
    }

    getPersonajes(){
        return new Promise(function(resolve){
            let url = Global.urlSeries;
            let request = "api/Personajes";
            axios.get(url + request).then(response=>{
                resolve(response.data);
            })
        })
    }

    getPersonajesSerie(idserie){
        return new Promise(function(resolve){
            let url = Global.urlSeries;
            let request = "api/Series/PersonajesSerie/" + idserie;
            axios.get(url + request).then(response=>{
                resolve(response.data)
            })
        })
    }

    insertPersonaje(personaje){
        return new Promise(function(resolve){
            let url = Global.urlSeries;
            let request = "api/Personajes";
            axios.post(url + request, personaje).then(response=>{
                resolve(response)
            })
        })
    }

    updatePersonaje(idpersonaje, idserie){
        return new Promise(function(resolve){
            let url = Global.urlSeries;
            let request = "api/Personajes/" + idpersonaje + "/" + idserie;
            axios.put(url + request).then(response=>{
                resolve(response);
            })
        })
    }

}