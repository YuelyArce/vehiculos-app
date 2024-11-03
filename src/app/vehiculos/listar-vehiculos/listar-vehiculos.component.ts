marcasCount: { [key: string]: number } = {};

ngOnInit(): void {
    this.vehiculoService.obtenerVehiculos().subscribe(data => {
        this.vehiculos = data;
        this.contarMarcas();
    });
}

contarMarcas() {
    this.vehiculos.forEach(vehiculo => {
        this.marcasCount[vehiculo.marca] = (this.marcasCount[vehiculo.marca] || 0) + 1;
    });
}
<h2>Vehículos Disponibles</h2>
<div *ngFor="let marca of (marcasCount | keyvalue)">
    <p>{{ marca.key }}: {{ marca.value }}</p>
</div>
