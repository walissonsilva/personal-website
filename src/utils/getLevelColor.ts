export type PostLevel = 'Iniciante' | 'Intermediário' | 'Avançado';

export function getLevelColor(level: string): 'success' | 'warning' | 'orange' {
  switch (level) {
    case 'Intermediário':
      return 'warning';
    case 'Avançado':
      return 'orange';
    case 'Iniciante':
    default:
      return 'success';
  }
}
