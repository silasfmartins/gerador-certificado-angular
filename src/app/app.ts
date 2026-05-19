import { Component, signal, type OnInit } from "@angular/core";
import { Navbar } from "./_components/navbar/navbar";
import { RouterOutlet } from "@angular/router";
import { BaseUi } from "./_components/base-ui/base-ui";
import { CertificadoService } from "./_services/certificado";

@Component({
	selector: "app-root",
	templateUrl: "./app.html",
	styleUrl: "./app.css",
 imports: [RouterOutlet, Navbar, BaseUi],
})
export class App implements OnInit {
	protected readonly title = signal("gerador-certificado");
	protected readonly exibeNavbar:boolean = false;

	constructor(private certificadoService: CertificadoService) {}

	ngOnInit(): void {
		const certificados = localStorage.getItem('certificados')
		this.certificadoService.certificados = certificados ? JSON.parse(certificados) : []
	}
}
