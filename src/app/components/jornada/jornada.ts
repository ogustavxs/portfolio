import { Component } from '@angular/core';
import { Timeline } from "../timeline/timeline";

interface ITimeline {
  title: string,
  start: string,
  end: string,
  status?: string,
  description: string
}

@Component({
  selector: 'app-jornada',
  imports: [Timeline],
  templateUrl: './jornada.html',
  styleUrl: './jornada.css',
})
export class Jornada {
  experienciaProfissional: ITimeline[] = [
    {
      title: 'APRENDIZ DE T.I',
      start: 'JUN 25',
      end: 'ATUAL',
      description: 'Responsável pelo suporte técnico a usuários e pela gestão de ativos de TI, incluindo a preparação de hardware, software e atualização de controles da área na G&P Projetos e Sistemas.'
    },
    {
      title: 'ESTAGIÁRIO ESCOLAR',
      start: 'AGO 24',
      end: 'NOV 24',
      description: 'Experiência na Brisanet Telecomunicações, no setor de Logística e Estoque, atuando no controle de materiais e recebimentos.'
    }
  ]

  formacaoAcademica: ITimeline[] = [
    {
      title: 'ENGENHARIA DE SOFTWARE',
      start: 'MAR 25',
      end: 'DEZ 28',
      status: 'EM ANDAMENTO',
      description:
        'Cursando Engenharia de Software na FIAP como bolsista integral, buscando aprimorar habilidades em programação e projetos práticos.'
    },
    {
      title: 'TÉCNICO EM ADMINISTRAÇÃO',
      start: 'JAN 22',
      end: 'DEZ 24',
      description:
        'Ensino Médio técnico em Administração, atuando em monitorias de Matemática (GAPEM) e Inglês.'
    }
  ];
}
