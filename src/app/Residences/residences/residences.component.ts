import { Component } from '@angular/core';
import { Residence } from 'src/core/Modeles/Residence';


@Component({
  selector: 'app-residence',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidenceComponent {
  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/R1.jpg", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R4.jpg", status: "En Construction" }
  ];

  favorites: Residence[] = [];

  toggleFavorite(residence: Residence) {
    const index = this.favorites.findIndex(fav => fav.id === residence.id);
    if (index === -1) {
      this.favorites.push(residence);
    } else {
      this.favorites.splice(index, 1);
    }
  }

  isFavorite(residence: Residence): boolean {
    return this.favorites.some(fav => fav.id === residence.id);
  }
}