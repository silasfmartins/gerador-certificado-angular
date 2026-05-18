import { Component, signal } from "@angular/core";
import { Navbar } from "./_components/navbar/navbar";
import { PrimaryButton } from "./_components/primary-button/primary-button";
import { RouterOutlet } from "@angular/router";
import { SecondaryButton } from "./_components/secondary-button/secondary-button";
import { BaseUi } from "./_components/base-ui/base-ui";

@Component({
	selector: "app-root",
	templateUrl: "./app.html",
	styleUrl: "./app.css",
 imports: [RouterOutlet, Navbar, PrimaryButton, SecondaryButton, BaseUi],
})
export class App {
	protected readonly title = signal("gerador-certificado");
	protected readonly exibeNavbar:boolean = false;
}
