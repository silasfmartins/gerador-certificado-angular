import { Injectable } from '@angular/core';
import type { CertificadoProps } from '../interfaces/certificado';

@Injectable({
  providedIn: 'root',
})
export class CertificadoService {
  certificados: CertificadoProps[] = [];

  adicionarCertificado(certificado: CertificadoProps) {
    this.certificados.unshift({ ...certificado })
    localStorage.setItem('certificados', JSON.stringify(this.certificados))
  }
}
