import { Component } from '@angular/core';
import { Residence } from 'src/core/Modeles/Residence'; // Make sure the path is correct

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

  favoriteResidences: Residence[] = []; // Use favoriteResidences for consistency
  searchText: string = "";
  filteredResidences: Residence[] = [...this.listResidences];

  showLocation(residence: Residence): void {
    if (residence.address.toLowerCase() === "inconnu") {
      alert(`L'adresse de la résidence "${residence.name}" est inconnue.`);
    } else {
      alert(`L'adresse de la résidence "${residence.name}" est : ${residence.address}`);
    }
  }

  toggleFavorite(residence: Residence): void {
    const index = this.favoriteResidences.findIndex(fav => fav.id === residence.id);
    if (index !== -1) {
      this.favoriteResidences.splice(index, 1);
    } else {
      this.favoriteResidences.push(residence);
    }
  }

  isFavorite(residence: Residence): boolean {
    return this.favoriteResidences.some(fav => fav.id === residence.id);
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Disponible':
        return 'status-available';
      case 'Vendu':
        return 'status-sold';
      case 'En Construction':
        return 'status-construction';
      default:
        return '';
    }
  }

  filterResidences(): void {
    const lowerSearch = this.searchText.toLowerCase();
    this.filteredResidences = this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(lowerSearch)
    );
  }
}