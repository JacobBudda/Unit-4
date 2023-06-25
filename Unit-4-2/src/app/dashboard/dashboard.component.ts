import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  data: any = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getAllData();
  }
  getAllData() {
    this.apiService.getAllPlayers().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getRightHandedPlayers() {
    this.apiService.getRightHandedPlayers().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getRightArmSpinPlayers() {
    this.apiService.getRightArmSpinPlayers().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getPlayersByRuns() {
    this.apiService.getPlayersByRuns().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getPlayersByLeastWickets() {
    this.apiService.getPlayersByLeastWickets().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getPlayersByLeftHanded() {
    this.apiService.getPlayersByLeftHanded().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  DeletePlayer(data: any) {
    let body = {
      _id: data,
    };
    this.apiService.deletePlayer(body).subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  onOptionsSelected(value: string) {
    if (value === 'get-right-handed-players') {
      this.getRightHandedPlayers();
    } else if (value === 'get-right-arm-spin-players') {
      this.getRightArmSpinPlayers();
    } else if (value === 'get-players-by-runs') {
      this.getPlayersByRuns();
    } else if (value === 'get-players-by-least-wickets') {
      this.getPlayersByLeastWickets();
    } else if (value === 'get-players-by-left-handed') {
      this.getPlayersByLeftHanded();
    } else {
      this.getAllData();
    }
  }
  deletePlayer(id: string) {
    this.DeletePlayer(id);
  }
}
