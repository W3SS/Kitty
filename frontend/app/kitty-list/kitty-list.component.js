'use strict';

// Register `kittyList` component, along with its associated controller and template
angular.
  module('kittyList').
  component('kittyList', {
    templateUrl: 'kitty-list/kitty-list.template.html',
    controller: ['$scope', 'Kitty', 
      function KittyListController($scope, Kitty) {
        this.kitties = Kitty.query();
        
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
