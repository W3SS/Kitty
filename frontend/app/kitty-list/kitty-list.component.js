'use strict';

// Register `kittyList` component, along with its associated controller and template
angular.
  module('kittyList').
  component('kittyList', {
    templateUrl: 'kitty-list/kitty-list.template.html',
    controller: ['$scope', 'Kitty', 
      function KittyListController($scope, Kitty) {
        this.kitties = Kitty.query();

        // this.updateKitty = function(Kitty, kitty, name, breed, temperament) {
        //   Kitty.$update(
        //     {kittyId: kitty.id},
        //     {
        //       name: name,
        //       breed: breed,
        //       temperament: temperament
        //     });
        // };
        
        this.kitty = {};
        this.newKittyForm = false;
        
        const HTTP = axios.create({
          baseURL: 'http://127.0.0.1:8000/'
        });

        this.create = function() {
          HTTP.post('/kitties/', {
            name: this.kitty.name,
            age: this.kitty.age,
            breed: this.kitty.breed,
            temperament: this.kitty.temperament
          })
            
          .catch(function (error) {
            console.log(error)
          })
          this.kitties.push({
            name: this.kitty.name,
            age: this.kitty.age,
            breed: this.kitty.breed,
            temperament: this.kitty.temperament
          });
          this.kitty = {};
          this.newKittyForm = false;
          
        };
      
        const Kittyk = {
          post (musicianData, token) {
            HTTP.defaults.headers.common['Authorization'] = 'Token ' + token
            return HTTP.post('/musicians/', {
              first_name: musicianData.firstName,
              second_or_father_name: musicianData.secondName,
              last_name: musicianData.lastName
            })
              .then(response => {
                return response.data
              })
            .catch(function (error) {
              console.log(error)
            })
          },
          delete (musicianPK, token) {
            HTTP.defaults.headers.common['Authorization'] = 'Token ' + token
            return HTTP.delete(`/musicians/${musicianPK}/`)
          }
        }

        this.updateKitty = function(kitty, name, breed, temperament) {
          return HTTP.put(`/kitties/${kitty.id}/`, {
            name: name,
            breed: breed,
            temperament: temperament
          }).catch(function (error) {
            console.log(error)
          });
        }

        this.removeItem = function(index){
          this.kitties.splice(index, 1);
        }
        
        this.deleteKitty = function(kitty, index) {
          return HTTP.delete(`/kitties/${kitty.id}/`)
          .then(this.removeItem(index))
          .catch(function (error) {
            console.log(error)
          });
        };
      }
    ]
  });
