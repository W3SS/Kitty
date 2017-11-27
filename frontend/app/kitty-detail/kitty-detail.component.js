'use strict';

// Register `kittyDetail` component, along with its associated controller and template
angular.
  module('kittyDetail').
  component('kittyDetail', {
    templateUrl: 'kitty-detail/kitty-detail.template.html',
    bindings: {
      kitty: '<',
      onDelete: '&',
      onUpdate: '&'
    },
    controller: [
      function KittyDetailController() {

        this.deleteKitty = function() {
          console.log(this.kitty);
          this.onDelete({kitty: this.kitty});
        };

        this.showEditing = false;
        this.edit = function() {
          this.showEditing = !this.showEditing;
        };
      
        this.save = function() {
          this.onUpdate({
            kitty: this.kitty,
            name: this.kitty.name,
            breed: this.kitty.breed,
            temperament: this.kitty.temperament
          });
          this.showEditing = false;
        }
      }
    ]
  });
