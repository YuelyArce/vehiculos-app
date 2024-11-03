import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarVehiculosComponent } from './listar-vehiculos.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListarVehiculosComponent', () => {
    let component: ListarVehiculosComponent;
    let fixture: ComponentFixture<ListarVehiculosComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [ ListarVehiculosComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ListarVehiculosComponent);
        component = fixture.componentInstance;
        component.vehiculos = [
            { id: 1, marca: 'Renault', linea: 'Kangoo', referencia: 'VU Express', modelo: 2017, kilometraje: 93272, color: 'Blanco', imagen: '' },
            { id: 2, marca: 'Chevrolet', linea: 'Spark', referencia: 'Life', modelo: 2018, kilometraje: 55926, color: 'Plata', imagen: '' },
            { id: 3, marca: 'Chevrolet', linea: 'Sail', referencia: 'LT Sedan', modelo: 2016, kilometraje: 94321, color: 'Rojo', imagen: '' }
        ];
        fixture.detectChanges();
    });

    it('debería crear la tabla con 3 filas', () => {
        const filas = fixture.nativeElement.querySelectorAll('tbody tr');
        expect(filas.length).toBe(3);
    });
});
